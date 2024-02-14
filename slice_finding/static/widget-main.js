function ge() {
}
function Cr(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Wo(e) {
  return e();
}
function pl() {
  return /* @__PURE__ */ Object.create(null);
}
function Ve(e) {
  e.forEach(Wo);
}
function fi(e) {
  return typeof e == "function";
}
function He(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function lu(e) {
  return Object.keys(e).length === 0;
}
function or(e, ...t) {
  if (e == null)
    return ge;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ie(e, t, n) {
  e.$$.on_destroy.push(or(t, n));
}
function Tt(e, t, n, i) {
  if (e) {
    const r = Bo(e, t, n, i);
    return e[0](r);
  }
}
function Bo(e, t, n, i) {
  return e[1] && i ? Cr(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function Pt(e, t, n, i) {
  if (e[2] && i) {
    const r = e[2](i(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], s = Math.max(t.dirty.length, r.length);
      for (let o = 0; o < s; o += 1)
        l[o] = t.dirty[o] | r[o];
      return l;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function Ft(e, t, n, i, r, l) {
  if (r) {
    const s = Bo(t, n, i, l);
    e.p(s, r);
  }
}
function qt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let i = 0; i < n; i++)
      t[i] = -1;
    return t;
  }
  return -1;
}
function wl(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function Gr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function yl(e) {
  return e ?? "";
}
function pe(e, t, n) {
  return e.set(n), t;
}
function L(e, t) {
  e.appendChild(t);
}
function Y(e, t, n) {
  e.insertBefore(t, n || null);
}
function X(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Lt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function V(e) {
  return document.createElement(e);
}
function Ct(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function me(e) {
  return document.createTextNode(e);
}
function se() {
  return me(" ");
}
function ft() {
  return me("");
}
function ne(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function et(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function On(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function y(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Vo(e) {
  return e === "" ? null : +e;
}
function su(e) {
  return Array.from(e.childNodes);
}
function De(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function Gi(e, t) {
  e.value = t ?? "";
}
function x(e, t, n, i) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function vl(e, t) {
  for (let n = 0; n < e.options.length; n += 1) {
    const i = e.options[n];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  e.selectedIndex = -1;
}
function ou(e) {
  const t = e.querySelector(":checked") || e.options[0];
  return t && t.__value;
}
let Ri;
function fu() {
  if (Ri === void 0) {
    Ri = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Ri = !0;
    }
  }
  return Ri;
}
function uu(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const i = V("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = fu();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = ne(window, "message", (s) => {
    s.source === i.contentWindow && t();
  })) : (i.src = "about:blank", i.onload = () => {
    l = ne(i.contentWindow, "resize", t);
  }), L(e, i), () => {
    (r || l && i.contentWindow) && l(), X(i);
  };
}
function de(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function au(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, i, t), r;
}
let ii;
function ni(e) {
  ii = e;
}
function ui() {
  if (!ii)
    throw new Error("Function called outside component initialization");
  return ii;
}
function Tn(e) {
  ui().$$.on_mount.push(e);
}
function cu(e) {
  ui().$$.on_destroy.push(e);
}
function Dt() {
  const e = ui();
  return (t, n, { cancelable: i = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const l = au(t, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function Ho(e, t) {
  return ui().$$.context.set(e, t), t;
}
function dn(e) {
  return ui().$$.context.get(e);
}
function gt(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((i) => i.call(this, t));
}
const Rn = [], ve = [], Di = [], Er = [], hu = Promise.resolve();
let Ir = !1;
function du() {
  Ir || (Ir = !0, hu.then(Xo));
}
function ri(e) {
  Di.push(e);
}
function Ee(e) {
  Er.push(e);
}
const kr = /* @__PURE__ */ new Set();
let kn = 0;
function Xo() {
  if (kn !== 0)
    return;
  const e = ii;
  do {
    try {
      for (; kn < Rn.length; ) {
        const t = Rn[kn];
        kn++, ni(t), gu(t.$$);
      }
    } catch (t) {
      throw Rn.length = 0, kn = 0, t;
    }
    for (ni(null), Rn.length = 0, kn = 0; ve.length; )
      ve.pop()();
    for (let t = 0; t < Di.length; t += 1) {
      const n = Di[t];
      kr.has(n) || (kr.add(n), n());
    }
    Di.length = 0;
  } while (Rn.length);
  for (; Er.length; )
    Er.pop()();
  Ir = !1, kr.clear(), ni(e);
}
function gu(e) {
  if (e.fragment !== null) {
    e.update(), Ve(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ri);
  }
}
const Wi = /* @__PURE__ */ new Set();
let un;
function Ae() {
  un = {
    r: 0,
    c: [],
    p: un
    // parent group
  };
}
function Ce() {
  un.r || Ve(un.c), un = un.p;
}
function T(e, t) {
  e && e.i && (Wi.delete(e), e.i(t));
}
function B(e, t, n, i) {
  if (e && e.o) {
    if (Wi.has(e))
      return;
    Wi.add(e), un.c.push(() => {
      Wi.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function _u(e, t) {
  e.d(1), t.delete(e.key);
}
function mu(e, t) {
  B(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function Yo(e, t, n, i, r, l, s, o, f, u, h, a) {
  let c = e.length, d = l.length, g = c;
  const _ = {};
  for (; g--; )
    _[e[g].key] = g;
  const p = [], m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (g = d; g--; ) {
    const E = a(r, l, g), D = n(E);
    let I = s.get(D);
    I ? i && I.p(E, t) : (I = u(D, E), I.c()), m.set(D, p[g] = I), D in _ && w.set(D, Math.abs(g - _[D]));
  }
  const A = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  function M(E) {
    T(E, 1), E.m(o, h), s.set(E.key, E), h = E.first, d--;
  }
  for (; c && d; ) {
    const E = p[d - 1], D = e[c - 1], I = E.key, v = D.key;
    E === D ? (h = E.first, c--, d--) : m.has(v) ? !s.has(I) || A.has(I) ? M(E) : z.has(v) ? c-- : w.get(I) > w.get(v) ? (z.add(I), M(E)) : (A.add(v), c--) : (f(D, s), c--);
  }
  for (; c--; ) {
    const E = e[c];
    m.has(E.key) || f(E, s);
  }
  for (; d; )
    M(p[d - 1]);
  return p;
}
function Ie(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function ae(e) {
  e && e.c();
}
function fe(e, t, n, i) {
  const { fragment: r, after_update: l } = e.$$;
  r && r.m(t, n), i || ri(() => {
    const s = e.$$.on_mount.map(Wo).filter(fi);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Ve(s), e.$$.on_mount = [];
  }), l.forEach(ri);
}
function ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ve(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bu(e, t) {
  e.$$.dirty[0] === -1 && (Rn.push(e), du(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ye(e, t, n, i, r, l, s, o = [-1]) {
  const f = ii;
  ni(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ge,
    not_equal: r,
    bound: pl(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: pl(),
    dirty: o,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (a, c, ...d) => {
    const g = d.length ? d[0] : c;
    return u.ctx && r(u.ctx[a], u.ctx[a] = g) && (!u.skip_bound && u.bound[a] && u.bound[a](g), h && bu(e, a)), c;
  }) : [], u.update(), h = !0, Ve(u.before_update), u.fragment = i ? i(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = su(t.target);
      u.fragment && u.fragment.l(a), a.forEach(X);
    } else
      u.fragment && u.fragment.c();
    t.intro && T(e.$$.fragment), fe(e, t.target, t.anchor, t.customElement), Xo();
  }
  ni(f);
}
class je {
  $destroy() {
    ue(this, 1), this.$destroy = ge;
  }
  $on(t, n) {
    if (!fi(n))
      return ge;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !lu(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function pu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ui(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Cn(e) {
  return e = Ui(Math.abs(e)), e ? e[1] : NaN;
}
function wu(e, t) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, o = e[0], f = 0; r > 0 && o > 0 && (f + o + 1 > i && (o = Math.max(1, i - f)), l.push(n.substring(r -= o, r + o)), !((f += o + 1) > i)); )
      o = e[s = (s + 1) % e.length];
    return l.reverse().join(t);
  };
}
function yu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var vu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ki(e) {
  if (!(t = vu.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Ur({
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
Ki.prototype = Ur.prototype;
function Ur(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ur.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Su(e) {
  e:
    for (var t = e.length, n = 1, i = -1, r; n < t; ++n)
      switch (e[n]) {
        case ".":
          i = r = n;
          break;
        case "0":
          i === 0 && (i = n), r = n;
          break;
        default:
          if (!+e[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? e.slice(0, i) + e.slice(r + 1) : e;
}
var jo;
function ku(e, t) {
  var n = Ui(e, t);
  if (!n)
    return e + "";
  var i = n[0], r = n[1], l = r - (jo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + Ui(e, Math.max(0, t + l - 1))[0];
}
function Sl(e, t) {
  var n = Ui(e, t);
  if (!n)
    return e + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const kl = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: pu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Sl(e * 100, t),
  r: Sl,
  s: ku,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Nl(e) {
  return e;
}
var Rl = Array.prototype.map, zl = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Nu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Nl : wu(Rl.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", l = e.numerals === void 0 ? Nl : yu(Rl.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", o = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(a) {
    a = Ki(a);
    var c = a.fill, d = a.align, g = a.sign, _ = a.symbol, p = a.zero, m = a.width, w = a.comma, A = a.precision, z = a.trim, M = a.type;
    M === "n" ? (w = !0, M = "g") : kl[M] || (A === void 0 && (A = 12), z = !0, M = "g"), (p || c === "0" && d === "=") && (p = !0, c = "0", d = "=");
    var E = _ === "$" ? n : _ === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", D = _ === "$" ? i : /[%p]/.test(M) ? s : "", I = kl[M], v = /[defgprs%]/.test(M);
    A = A === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function k(q) {
      var Z = E, G = D, N, R, C;
      if (M === "c")
        G = I(q) + G, q = "";
      else {
        q = +q;
        var P = q < 0 || 1 / q < 0;
        if (q = isNaN(q) ? f : I(Math.abs(q), A), z && (q = Su(q)), P && +q == 0 && g !== "+" && (P = !1), Z = (P ? g === "(" ? g : o : g === "-" || g === "(" ? "" : g) + Z, G = (M === "s" ? zl[8 + jo / 3] : "") + G + (P && g === "(" ? ")" : ""), v) {
          for (N = -1, R = q.length; ++N < R; )
            if (C = q.charCodeAt(N), 48 > C || C > 57) {
              G = (C === 46 ? r + q.slice(N + 1) : q.slice(N)) + G, q = q.slice(0, N);
              break;
            }
        }
      }
      w && !p && (q = t(q, 1 / 0));
      var H = Z.length + q.length + G.length, K = H < m ? new Array(m - H + 1).join(c) : "";
      switch (w && p && (q = t(K + q, K.length ? m - G.length : 1 / 0), K = ""), d) {
        case "<":
          q = Z + q + G + K;
          break;
        case "=":
          q = Z + K + q + G;
          break;
        case "^":
          q = K.slice(0, H = K.length >> 1) + Z + q + G + K.slice(H);
          break;
        default:
          q = K + Z + q + G;
          break;
      }
      return l(q);
    }
    return k.toString = function() {
      return a + "";
    }, k;
  }
  function h(a, c) {
    var d = u((a = Ki(a), a.type = "f", a)), g = Math.max(-8, Math.min(8, Math.floor(Cn(c) / 3))) * 3, _ = Math.pow(10, -g), p = zl[8 + g / 3];
    return function(m) {
      return d(_ * m) + p;
    };
  }
  return {
    format: u,
    formatPrefix: h
  };
}
var zi, $e, Go;
Ru({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ru(e) {
  return zi = Nu(e), $e = zi.format, Go = zi.formatPrefix, zi;
}
function Uo(e) {
  return Math.max(0, -Cn(Math.abs(e)));
}
function zu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Cn(t) / 3))) * 3 - Cn(Math.abs(e)));
}
function Mu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Cn(t) - Cn(e)) + 1;
}
function bn(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), i = 0; i < t; )
    n[i] = "#" + e.slice(i * 6, ++i * 6);
  return n;
}
const Ko = bn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Au = bn("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Kr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qo(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t)
    n[i] = t[i];
  return n;
}
function ai() {
}
var li = 0.7, Qi = 1 / li, Mn = "\\s*([+-]?\\d+)\\s*", si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Gt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Cu = /^#([0-9a-f]{3,8})$/, Eu = new RegExp(`^rgb\\(${Mn},${Mn},${Mn}\\)$`), Iu = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), Ou = new RegExp(`^rgba\\(${Mn},${Mn},${Mn},${si}\\)$`), Tu = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${si}\\)$`), Pu = new RegExp(`^hsl\\(${si},${Gt},${Gt}\\)$`), Fu = new RegExp(`^hsla\\(${si},${Gt},${Gt},${si}\\)$`), Ml = {
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
Kr(ai, gn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Al,
  // Deprecated! Use color.formatHex.
  formatHex: Al,
  formatHex8: qu,
  formatHsl: Lu,
  formatRgb: Cl,
  toString: Cl
});
function Al() {
  return this.rgb().formatHex();
}
function qu() {
  return this.rgb().formatHex8();
}
function Lu() {
  return Zo(this).formatHsl();
}
function Cl() {
  return this.rgb().formatRgb();
}
function gn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Cu.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? El(t) : n === 3 ? new Nt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Mi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Mi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Eu.exec(e)) ? new Nt(t[1], t[2], t[3], 1) : (t = Iu.exec(e)) ? new Nt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ou.exec(e)) ? Mi(t[1], t[2], t[3], t[4]) : (t = Tu.exec(e)) ? Mi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Pu.exec(e)) ? Tl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Fu.exec(e)) ? Tl(t[1], t[2] / 100, t[3] / 100, t[4]) : Ml.hasOwnProperty(e) ? El(Ml[e]) : e === "transparent" ? new Nt(NaN, NaN, NaN, 0) : null;
}
function El(e) {
  return new Nt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Mi(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new Nt(e, t, n, i);
}
function Du(e) {
  return e instanceof ai || (e = gn(e)), e ? (e = e.rgb(), new Nt(e.r, e.g, e.b, e.opacity)) : new Nt();
}
function Zi(e, t, n, i) {
  return arguments.length === 1 ? Du(e) : new Nt(e, t, n, i ?? 1);
}
function Nt(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
Kr(Nt, Zi, Qo(ai, {
  brighter(e) {
    return e = e == null ? Qi : Math.pow(Qi, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? li : Math.pow(li, e), new Nt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Nt(cn(this.r), cn(this.g), cn(this.b), Ji(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Il,
  // Deprecated! Use color.formatHex.
  formatHex: Il,
  formatHex8: Wu,
  formatRgb: Ol,
  toString: Ol
}));
function Il() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}`;
}
function Wu() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}${an((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ol() {
  const e = Ji(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${cn(this.r)}, ${cn(this.g)}, ${cn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ji(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function cn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function an(e) {
  return e = cn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Tl(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Vt(e, t, n, i);
}
function Zo(e) {
  if (e instanceof Vt)
    return new Vt(e.h, e.s, e.l, e.opacity);
  if (e instanceof ai || (e = gn(e)), !e)
    return new Vt();
  if (e instanceof Vt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, r = Math.min(t, n, i), l = Math.max(t, n, i), s = NaN, o = l - r, f = (l + r) / 2;
  return o ? (t === l ? s = (n - i) / o + (n < i) * 6 : n === l ? s = (i - t) / o + 2 : s = (t - n) / o + 4, o /= f < 0.5 ? l + r : 2 - l - r, s *= 60) : o = f > 0 && f < 1 ? 0 : s, new Vt(s, o, f, e.opacity);
}
function Bu(e, t, n, i) {
  return arguments.length === 1 ? Zo(e) : new Vt(e, t, n, i ?? 1);
}
function Vt(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
Kr(Vt, Bu, Qo(ai, {
  brighter(e) {
    return e = e == null ? Qi : Math.pow(Qi, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? li : Math.pow(li, e), new Vt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - i;
    return new Nt(
      Nr(e >= 240 ? e - 240 : e + 120, r, i),
      Nr(e, r, i),
      Nr(e < 120 ? e + 240 : e - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Vt(Pl(this.h), Ai(this.s), Ai(this.l), Ji(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ji(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Pl(this.h)}, ${Ai(this.s) * 100}%, ${Ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Pl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Nr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
function Vu(e, t, n, i, r) {
  var l = e * e, s = l * e;
  return ((1 - 3 * e + 3 * l - s) * t + (4 - 6 * l + 3 * s) * n + (1 + 3 * e + 3 * l - 3 * s) * i + s * r) / 6;
}
function Hu(e) {
  var t = e.length - 1;
  return function(n) {
    var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), r = e[i], l = e[i + 1], s = i > 0 ? e[i - 1] : 2 * r - l, o = i < t - 1 ? e[i + 2] : 2 * l - r;
    return Vu((n - i / t) * t, s, r, l, o);
  };
}
const Qr = (e) => () => e;
function Xu(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Yu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function ju(e) {
  return (e = +e) == 1 ? Jo : function(t, n) {
    return n - t ? Yu(t, n, e) : Qr(isNaN(t) ? n : t);
  };
}
function Jo(e, t) {
  var n = t - e;
  return n ? Xu(e, n) : Qr(isNaN(e) ? t : e);
}
const xi = function e(t) {
  var n = ju(t);
  function i(r, l) {
    var s = n((r = Zi(r)).r, (l = Zi(l)).r), o = n(r.g, l.g), f = n(r.b, l.b), u = Jo(r.opacity, l.opacity);
    return function(h) {
      return r.r = s(h), r.g = o(h), r.b = f(h), r.opacity = u(h), r + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Gu(e) {
  return function(t) {
    var n = t.length, i = new Array(n), r = new Array(n), l = new Array(n), s, o;
    for (s = 0; s < n; ++s)
      o = Zi(t[s]), i[s] = o.r || 0, r[s] = o.g || 0, l[s] = o.b || 0;
    return i = e(i), r = e(r), l = e(l), o.opacity = 1, function(f) {
      return o.r = i(f), o.g = r(f), o.b = l(f), o + "";
    };
  };
}
var Uu = Gu(Hu);
function Ku(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = e[r] * (1 - l) + t[r] * l;
    return i;
  };
}
function Qu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Zu(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, r = new Array(i), l = new Array(n), s;
  for (s = 0; s < i; ++s)
    r[s] = fr(e[s], t[s]);
  for (; s < n; ++s)
    l[s] = t[s];
  return function(o) {
    for (s = 0; s < i; ++s)
      l[s] = r[s](o);
    return l;
  };
}
function Ju(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function Bt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function xu(e, t) {
  var n = {}, i = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = fr(e[r], t[r]) : i[r] = t[r];
  return function(l) {
    for (r in n)
      i[r] = n[r](l);
    return i;
  };
}
var Or = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Rr = new RegExp(Or.source, "g");
function $u(e) {
  return function() {
    return e;
  };
}
function ea(e) {
  return function(t) {
    return e(t) + "";
  };
}
function xo(e, t) {
  var n = Or.lastIndex = Rr.lastIndex = 0, i, r, l, s = -1, o = [], f = [];
  for (e = e + "", t = t + ""; (i = Or.exec(e)) && (r = Rr.exec(t)); )
    (l = r.index) > n && (l = t.slice(n, l), o[s] ? o[s] += l : o[++s] = l), (i = i[0]) === (r = r[0]) ? o[s] ? o[s] += r : o[++s] = r : (o[++s] = null, f.push({ i: s, x: Bt(i, r) })), n = Rr.lastIndex;
  return n < t.length && (l = t.slice(n), o[s] ? o[s] += l : o[++s] = l), o.length < 2 ? f[0] ? ea(f[0].x) : $u(t) : (t = f.length, function(u) {
    for (var h = 0, a; h < t; ++h)
      o[(a = f[h]).i] = a.x(u);
    return o.join("");
  });
}
function fr(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? Qr(t) : (n === "number" ? Bt : n === "string" ? (i = gn(t)) ? (t = i, xi) : xo : t instanceof gn ? xi : t instanceof Date ? Ju : Qu(t) ? Ku : Array.isArray(t) ? Zu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xu : Bt)(e, t);
}
function $o(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var Fl = 180 / Math.PI, Tr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ef(e, t, n, i, r, l) {
  var s, o, f;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (f = e * n + t * i) && (n -= e * f, i -= t * f), (o = Math.sqrt(n * n + i * i)) && (n /= o, i /= o, f /= o), e * i < t * n && (e = -e, t = -t, f = -f, s = -s), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(t, e) * Fl,
    skewX: Math.atan(f) * Fl,
    scaleX: s,
    scaleY: o
  };
}
var Ci;
function ta(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Tr : ef(t.a, t.b, t.c, t.d, t.e, t.f);
}
function na(e) {
  return e == null || (Ci || (Ci = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ci.setAttribute("transform", e), !(e = Ci.transform.baseVal.consolidate())) ? Tr : (e = e.matrix, ef(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tf(e, t, n, i) {
  function r(u) {
    return u.length ? u.pop() + " " : "";
  }
  function l(u, h, a, c, d, g) {
    if (u !== a || h !== c) {
      var _ = d.push("translate(", null, t, null, n);
      g.push({ i: _ - 4, x: Bt(u, a) }, { i: _ - 2, x: Bt(h, c) });
    } else
      (a || c) && d.push("translate(" + a + t + c + n);
  }
  function s(u, h, a, c) {
    u !== h ? (u - h > 180 ? h += 360 : h - u > 180 && (u += 360), c.push({ i: a.push(r(a) + "rotate(", null, i) - 2, x: Bt(u, h) })) : h && a.push(r(a) + "rotate(" + h + i);
  }
  function o(u, h, a, c) {
    u !== h ? c.push({ i: a.push(r(a) + "skewX(", null, i) - 2, x: Bt(u, h) }) : h && a.push(r(a) + "skewX(" + h + i);
  }
  function f(u, h, a, c, d, g) {
    if (u !== a || h !== c) {
      var _ = d.push(r(d) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: Bt(u, a) }, { i: _ - 2, x: Bt(h, c) });
    } else
      (a !== 1 || c !== 1) && d.push(r(d) + "scale(" + a + "," + c + ")");
  }
  return function(u, h) {
    var a = [], c = [];
    return u = e(u), h = e(h), l(u.translateX, u.translateY, h.translateX, h.translateY, a, c), s(u.rotate, h.rotate, a, c), o(u.skewX, h.skewX, a, c), f(u.scaleX, u.scaleY, h.scaleX, h.scaleY, a, c), u = h = null, function(d) {
      for (var g = -1, _ = c.length, p; ++g < _; )
        a[(p = c[g]).i] = p.x(d);
      return a.join("");
    };
  };
}
var ia = tf(ta, "px, ", "px)", "deg)"), ra = tf(na, ", ", ")", ")"), la = 1e-12;
function ql(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function sa(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function oa(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const fa = function e(t, n, i) {
  function r(l, s) {
    var o = l[0], f = l[1], u = l[2], h = s[0], a = s[1], c = s[2], d = h - o, g = a - f, _ = d * d + g * g, p, m;
    if (_ < la)
      m = Math.log(c / u) / t, p = function(D) {
        return [
          o + D * d,
          f + D * g,
          u * Math.exp(t * D * m)
        ];
      };
    else {
      var w = Math.sqrt(_), A = (c * c - u * u + i * _) / (2 * u * n * w), z = (c * c - u * u - i * _) / (2 * c * n * w), M = Math.log(Math.sqrt(A * A + 1) - A), E = Math.log(Math.sqrt(z * z + 1) - z);
      m = (E - M) / t, p = function(D) {
        var I = D * m, v = ql(M), k = u / (n * w) * (v * oa(t * I + M) - sa(M));
        return [
          o + k * d,
          f + k * g,
          u * v / ql(t * I + M)
        ];
      };
    }
    return p.duration = m * 1e3 * t / Math.SQRT2, p;
  }
  return r.rho = function(l) {
    var s = Math.max(1e-3, +l), o = s * s, f = o * o;
    return e(s, o, f);
  }, r;
}(Math.SQRT2, 2, 4), ua = (e) => Uu(e[e.length - 1]);
var aa = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(bn);
const ca = ua(aa);
function ur(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const ha = ur(bn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
ur(bn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
ur(bn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
ur(bn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function da(e) {
  let t, n, i, r, l;
  return {
    c() {
      t = V("span"), y(t, "class", n = "bar " + /*absolutePosition*/
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
      e[2]}px;` : "")), de(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), de(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(s, o) {
      Y(s, t, o), r || (l = [
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
      ], r = !0);
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
      385 && de(
        t,
        "animated",
        /*loaded*/
        s[8]
      ), o & /*absolutePosition, hoverable, rounded*/
      193 && de(
        t,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: ge,
    o: ge,
    d(s) {
      s && X(t), r = !1, Ve(l);
    }
  };
}
function ga(e, t, n) {
  let { absolutePosition: i = !1 } = t, { fraction: r = 1 } = t, { leftFraction: l = 0 } = t, { maxWidth: s = 60 } = t, { colorScale: o = null } = t, { color: f = "lightgray" } = t, { rounded: u = !0 } = t, { hoverable: h = !1 } = t;
  Tn(() => {
    setTimeout(() => n(8, a = !0), 100);
  });
  let a = !1;
  function c(g) {
    gt.call(this, e, g);
  }
  function d(g) {
    gt.call(this, e, g);
  }
  return e.$$set = (g) => {
    "absolutePosition" in g && n(0, i = g.absolutePosition), "fraction" in g && n(1, r = g.fraction), "leftFraction" in g && n(2, l = g.leftFraction), "maxWidth" in g && n(3, s = g.maxWidth), "colorScale" in g && n(4, o = g.colorScale), "color" in g && n(5, f = g.color), "rounded" in g && n(6, u = g.rounded), "hoverable" in g && n(7, h = g.hoverable);
  }, [
    i,
    r,
    l,
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
class Zr extends je {
  constructor(t) {
    super(), Ye(this, t, ga, da, He, {
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
let $i = (e, t) => e.size === t.size && [...e].every((n) => t.has(n));
function _t(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object) || e.constructor !== t.constructor)
    return !1;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      if (!t.hasOwnProperty(n))
        return !1;
      if (e[n] !== t[n] && (typeof e[n] != "object" || !_t(e[n], t[n])))
        return !1;
    }
  for (n in t)
    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n))
      return !1;
  return !0;
}
function _a(e) {
  return e.map(
    /* @__PURE__ */ ((t) => (n) => t += n)(0)
  );
}
function zn(e, t, n) {
  if (_t(n, t))
    return _t(n, e) ? { type: "base" } : Object.assign({}, t);
  let i = Object.assign({}, e);
  return t.type == "negation" ? i.feature = zn(
    i.feature,
    t.feature,
    n
  ) : (t.type == "and" || t.type == "or") && (i.lhs = zn(
    i.lhs,
    t.lhs,
    n
  ), i.rhs = zn(
    i.rhs,
    t.rhs,
    n
  )), i;
}
function Mt(e, t = null) {
  if (e.type == "and" || e.type == "or") {
    if (t.type == "and" || t.type == "or")
      return e.type != t.type;
    if (t.type == "negation")
      return !0;
  }
  return !1;
}
function xt(e, t) {
  return e.type != t.type ? e.type == "base" || t.type == "base" : e.type == "feature" ? _t(e, t) : e.type == "negation" ? xt(
    e.feature,
    t.feature
  ) : e.type == "and" || e.type == "or" ? xt(
    e.lhs,
    t.lhs
  ) && xt(
    e.rhs,
    t.rhs
  ) : !0;
}
const ma = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  128
}), Ll = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[7]
) });
function Dl(e, t, n) {
  const i = e.slice();
  return i[18] = t[n], i[20] = n, i;
}
function Wl(e) {
  let t, n;
  return t = new Zr({
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
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*width*/
      1 && (l.maxWidth = /*width*/
      i[0]), r & /*hoverable*/
      64 && (l.hoverable = /*hoverable*/
      i[6]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function ba(e) {
  let t, n;
  return t = new Zr({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        e[0]
      ),
      fraction: (
        /*scale*/
        (e[1] || Xl)(
          /*value*/
          e[2]
        )
      ),
      colorScale: ha,
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
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*width*/
      1 && (l.maxWidth = /*width*/
      i[0]), r & /*scale, value*/
      6 && (l.fraction = /*scale*/
      (i[1] || Xl)(
        /*value*/
        i[2]
      )), r & /*hoverable*/
      64 && (l.hoverable = /*hoverable*/
      i[6]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function pa(e) {
  let t, n, i = (
    /*values*/
    e[3]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Bl(Dl(e, i, s));
  const l = (s) => B(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      t = ft();
    },
    m(s, o) {
      for (let f = 0; f < r.length; f += 1)
        r[f].m(s, o);
      Y(s, t, o), n = !0;
    },
    p(s, o) {
      if (o & /*width, scale, offsets, values, colors, hoverable, hoveringIndex*/
      491) {
        i = /*values*/
        s[3];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = Dl(s, i, f);
          r[f] ? (r[f].p(u, o), T(r[f], 1)) : (r[f] = Bl(u), r[f].c(), T(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (Ae(), f = i.length; f < r.length; f += 1)
          l(f);
        Ce();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          T(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        B(r[o]);
      n = !1;
    },
    d(s) {
      Lt(r, s), s && X(t);
    }
  };
}
function Bl(e) {
  let t, n;
  function i(...r) {
    return (
      /*mouseenter_handler_1*/
      e[14](
        /*i*/
        e[20],
        ...r
      )
    );
  }
  return t = new Zr({
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
          (e[1] || Vl)(
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
        (e[1] || Hl)(
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
      ae(t.$$.fragment);
    },
    m(r, l) {
      fe(t, r, l), n = !0;
    },
    p(r, l) {
      e = r;
      const s = {};
      l & /*width*/
      1 && (s.maxWidth = /*width*/
      e[0]), l & /*scale, offsets*/
      258 && (s.leftFraction = /*i*/
      e[20] > 0 ? (
        /*scale*/
        (e[1] || Vl)(
          /*offsets*/
          e[8][
            /*i*/
            e[20] - 1
          ]
        )
      ) : 0), l & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (e[1] || Hl)(
        /*v*/
        e[18]
      )), l & /*colors*/
      32 && (s.color = /*colors*/
      e[5][
        /*i*/
        e[20]
      ]), l & /*hoverable*/
      64 && (s.hoverable = /*hoverable*/
      e[6]), t.$set(s);
    },
    i(r) {
      n || (T(t.$$.fragment, r), n = !0);
    },
    o(r) {
      B(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ue(t, r);
    }
  };
}
function wa(e) {
  let t;
  const n = (
    /*#slots*/
    e[11].caption
  ), i = Tt(
    n,
    e,
    /*$$scope*/
    e[10],
    Ll
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), t = !0;
    },
    p(r, l) {
      i && i.p && (!t || l & /*$$scope, hoveringIndex*/
      1152) && Ft(
        i,
        n,
        r,
        /*$$scope*/
        r[10],
        t ? Pt(
          n,
          /*$$scope*/
          r[10],
          l,
          ma
        ) : qt(
          /*$$scope*/
          r[10]
        ),
        Ll
      );
    },
    i(r) {
      t || (T(i, r), t = !0);
    },
    o(r) {
      B(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ya(e) {
  let t = $e(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = me(t);
    },
    m(i, r) {
      Y(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && t !== (t = $e(".3")(
        /*value*/
        i[2]
      ) + "") && De(n, t);
    },
    i: ge,
    o: ge,
    d(i) {
      i && X(n);
    }
  };
}
function va(e) {
  let t, n, i, r, l, s, o, f, u, h = (
    /*showFullBar*/
    e[4] && Wl(e)
  );
  const a = [pa, ba], c = [];
  function d(m, w) {
    return (
      /*values*/
      m[3] != null ? 0 : 1
    );
  }
  i = d(e), r = c[i] = a[i](e);
  const g = [ya, wa], _ = [];
  function p(m, w) {
    return (
      /*$$slots*/
      m[9].caption ? 1 : 0
    );
  }
  return o = p(e), f = _[o] = g[o](e), {
    c() {
      t = V("div"), h && h.c(), n = se(), r.c(), l = se(), s = V("div"), f.c(), y(t, "class", "parent-bar relative mb-1 rounded-full overflow-hidden"), x(
        t,
        "width",
        /*width*/
        e[0] + "px"
      ), x(t, "height", "6px"), y(s, "class", "text-xs text-slate-800");
    },
    m(m, w) {
      Y(m, t, w), h && h.m(t, null), L(t, n), c[i].m(t, null), Y(m, l, w), Y(m, s, w), _[o].m(s, null), u = !0;
    },
    p(m, [w]) {
      /*showFullBar*/
      m[4] ? h ? (h.p(m, w), w & /*showFullBar*/
      16 && T(h, 1)) : (h = Wl(m), h.c(), T(h, 1), h.m(t, n)) : h && (Ae(), B(h, 1, 1, () => {
        h = null;
      }), Ce());
      let A = i;
      i = d(m), i === A ? c[i].p(m, w) : (Ae(), B(c[A], 1, 1, () => {
        c[A] = null;
      }), Ce(), r = c[i], r ? r.p(m, w) : (r = c[i] = a[i](m), r.c()), T(r, 1), r.m(t, null)), (!u || w & /*width*/
      1) && x(
        t,
        "width",
        /*width*/
        m[0] + "px"
      );
      let z = o;
      o = p(m), o === z ? _[o].p(m, w) : (Ae(), B(_[z], 1, 1, () => {
        _[z] = null;
      }), Ce(), f = _[o], f ? f.p(m, w) : (f = _[o] = g[o](m), f.c()), T(f, 1), f.m(s, null));
    },
    i(m) {
      u || (T(h), T(r), T(f), u = !0);
    },
    o(m) {
      B(h), B(r), B(f), u = !1;
    },
    d(m) {
      m && X(t), h && h.d(), c[i].d(), m && X(l), m && X(s), _[o].d();
    }
  };
}
const Vl = (e) => e, Hl = (e) => e, Xl = (e) => e;
function Sa(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t;
  const l = Gr(i);
  let { width: s = 100 } = t, { scale: o = null } = t, { value: f = 0 } = t, { values: u = null } = t, { showFullBar: h = !1 } = t, { colors: a = Ko } = t, { hoverable: c = !1 } = t, d = null, g = [];
  const _ = (M) => n(7, d = -1), p = (M) => n(7, d = null), m = (M, E) => n(7, d = M), w = (M) => n(7, d = null), A = (M) => n(7, d = 0), z = (M) => n(7, d = null);
  return e.$$set = (M) => {
    "width" in M && n(0, s = M.width), "scale" in M && n(1, o = M.scale), "value" in M && n(2, f = M.value), "values" in M && n(3, u = M.values), "showFullBar" in M && n(4, h = M.showFullBar), "colors" in M && n(5, a = M.colors), "hoverable" in M && n(6, c = M.hoverable), "$$scope" in M && n(10, r = M.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (u != null ? n(8, g = _a(u)) : n(8, g = []));
  }, [
    s,
    o,
    f,
    u,
    h,
    a,
    c,
    d,
    g,
    l,
    r,
    i,
    _,
    p,
    m,
    w,
    A,
    z
  ];
}
class Jr extends je {
  constructor(t) {
    super(), Ye(this, t, Sa, va, He, {
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
const Nn = [];
function ka(e, t) {
  return {
    subscribe: Me(e, t).subscribe
  };
}
function Me(e, t = ge) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (He(e, o) && (e = o, n)) {
      const f = !Nn.length;
      for (const u of i)
        u[1](), Nn.push(u, e);
      if (f) {
        for (let u = 0; u < Nn.length; u += 2)
          Nn[u][0](Nn[u + 1]);
        Nn.length = 0;
      }
    }
  }
  function l(o) {
    r(o(e));
  }
  function s(o, f = ge) {
    const u = [o, f];
    return i.add(u), i.size === 1 && (n = t(r) || ge), o(e), () => {
      i.delete(u), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function Je(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e, l = t.length < 2;
  return ka(n, (s) => {
    let o = !1;
    const f = [];
    let u = 0, h = ge;
    const a = () => {
      if (u)
        return;
      h();
      const d = t(i ? f[0] : f, s);
      l ? s(d) : h = fi(d) ? d : ge;
    }, c = r.map((d, g) => or(d, (_) => {
      f[g] = _, u &= ~(1 << g), o && a();
    }, () => {
      u |= 1 << g;
    }));
    return o = !0, a(), function() {
      Ve(c), h();
    };
  });
}
function Na(e) {
  return e === 0 ? !0 : e;
}
function ln(e) {
  return Na(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function Ra(e) {
  const t = {};
  for (const n of e) {
    if (Object(n) !== n)
      throw new TypeError("iterable for fromEntries should yield objects");
    const { "0": i, "1": r } = n;
    Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: r
    });
  }
  return t;
}
function zr(e, t = {}) {
  return Ra(Object.entries(e).filter(([n, i]) => i !== void 0 && t[n] === void 0));
}
function za(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, r = Object.keys(t), l = r.length;
  let s, o, f, u, h, a, c;
  const d = e.length;
  for (s = 0; s < l; s += 1) {
    for (c = /* @__PURE__ */ new Set(), u = r[s], h = t[u], o = 0; o < d; o += 1)
      if (a = h(e[o]), Array.isArray(a)) {
        const _ = a.length;
        for (f = 0; f < _; f += 1)
          c.add(a[f]);
      } else
        c.add(a);
    const g = Array.from(c);
    i[u] = n === !0 ? g.sort() : g;
  }
  return i;
}
function Ma(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(t), r = i.length;
  let l, s, o, f, u, h, a, c;
  const d = e.length;
  for (l = 0; l < r; l += 1) {
    for (f = i[l], a = t[f], u = null, h = null, s = 0; s < d; s += 1)
      if (c = a(e[s]), Array.isArray(c)) {
        const g = c.length;
        for (o = 0; o < g; o += 1)
          c[o] !== !1 && c[o] !== void 0 && c[o] !== null && Number.isNaN(c[o]) === !1 && ((u === null || c[o] < u) && (u = c[o]), (h === null || c[o] > h) && (h = c[o]));
      } else
        c !== !1 && c !== void 0 && c !== null && Number.isNaN(c) === !1 && ((u === null || c < u) && (u = c), (h === null || c > h) && (h = c));
    n[f] = [u, h];
  }
  return n;
}
function Aa(e) {
  return typeof e.bandwidth == "function" || Ca(Object.keys(e), ["domain", "range", "unknown", "copy"]) ? "ordinal" : "other";
}
function Ca(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Ea(e, t, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const o = Aa(n[s]);
    return l[o] || (l[o] = {}), l[o][s] = t[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = za(e, i.ordinal)), i.other && (r = { ...r, ...Ma(e, i.other) }), r;
}
function Ia(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, i) => n === null ? e[i] : n) : e;
}
function Ei(e) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[e])), n ? Ia(n[e], i) : i;
  };
}
function Bi(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Oa(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function nf(e) {
  let t, n, i;
  e.length !== 2 ? (t = Bi, n = (o, f) => Bi(e(o), f), i = (o, f) => e(o) - f) : (t = e === Bi || e === Oa ? e : Ta, n = e, i = e);
  function r(o, f, u = 0, h = o.length) {
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
  function l(o, f, u = 0, h = o.length) {
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
    const a = r(o, f, u, h - 1);
    return a > u && i(o[a - 1], f) > -i(o[a], f) ? a - 1 : a;
  }
  return { left: r, center: s, right: l };
}
function Ta() {
  return 0;
}
function Pa(e) {
  return e === null ? NaN : +e;
}
const Fa = nf(Bi), qa = Fa.right;
nf(Pa).center;
class Yl extends Map {
  constructor(t, n = Wa) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [i, r] of t)
        this.set(i, r);
  }
  get(t) {
    return super.get(jl(this, t));
  }
  has(t) {
    return super.has(jl(this, t));
  }
  set(t, n) {
    return super.set(La(this, t), n);
  }
  delete(t) {
    return super.delete(Da(this, t));
  }
}
function jl({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : n;
}
function La({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function Da({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Wa(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Ba = Math.sqrt(50), Va = Math.sqrt(10), Ha = Math.sqrt(2);
function er(e, t, n) {
  const i = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= Ba ? 10 : l >= Va ? 5 : l >= Ha ? 2 : 1;
  let o, f, u;
  return r < 0 ? (u = Math.pow(10, -r) / s, o = Math.round(e * u), f = Math.round(t * u), o / u < e && ++o, f / u > t && --f, u = -u) : (u = Math.pow(10, r) * s, o = Math.round(e / u), f = Math.round(t / u), o * u < e && ++o, f * u > t && --f), f < o && 0.5 <= n && n < 2 ? er(e, t, n * 2) : [o, f, u];
}
function Xa(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const i = t < e, [r, l, s] = i ? er(t, e, n) : er(e, t, n);
  if (!(l >= r))
    return [];
  const o = l - r + 1, f = new Array(o);
  if (i)
    if (s < 0)
      for (let u = 0; u < o; ++u)
        f[u] = (l - u) / -s;
    else
      for (let u = 0; u < o; ++u)
        f[u] = (l - u) * s;
  else if (s < 0)
    for (let u = 0; u < o; ++u)
      f[u] = (r + u) / -s;
  else
    for (let u = 0; u < o; ++u)
      f[u] = (r + u) * s;
  return f;
}
function Pr(e, t, n) {
  return t = +t, e = +e, n = +n, er(e, t, n)[2];
}
function Ya(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, r = i ? Pr(t, e, n) : Pr(e, t, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Fr(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var i = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, l = new Array(r); ++i < r; )
    l[i] = e + i * n;
  return l;
}
function ar(e, t) {
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
function ja(e, t) {
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
const Gl = Symbol("implicit");
function cr() {
  var e = new Yl(), t = [], n = [], i = Gl;
  function r(l) {
    let s = e.get(l);
    if (s === void 0) {
      if (i !== Gl)
        return i;
      e.set(l, s = t.push(l) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Yl();
    for (const s of l)
      e.has(s) || e.set(s, t.push(s) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (i = l, r) : i;
  }, r.copy = function() {
    return cr(t, n).unknown(i);
  }, ar.apply(r, arguments), r;
}
function rf() {
  var e = cr().unknown(void 0), t = e.domain, n = e.range, i = 0, r = 1, l, s, o = !1, f = 0, u = 0, h = 0.5;
  delete e.unknown;
  function a() {
    var c = t().length, d = r < i, g = d ? r : i, _ = d ? i : r;
    l = (_ - g) / Math.max(1, c - f + u * 2), o && (l = Math.floor(l)), g += (_ - g - l * (c - f)) * h, s = l * (1 - f), o && (g = Math.round(g), s = Math.round(s));
    var p = Fr(c).map(function(m) {
      return g + l * m;
    });
    return n(d ? p.reverse() : p);
  }
  return e.domain = function(c) {
    return arguments.length ? (t(c), a()) : t();
  }, e.range = function(c) {
    return arguments.length ? ([i, r] = c, i = +i, r = +r, a()) : [i, r];
  }, e.rangeRound = function(c) {
    return [i, r] = c, i = +i, r = +r, o = !0, a();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return l;
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
    return rf(t(), [i, r]).round(o).paddingInner(f).paddingOuter(u).align(h);
  }, ar.apply(a(), arguments);
}
function Ga(e) {
  return function() {
    return e;
  };
}
function Ua(e) {
  return +e;
}
var Ul = [0, 1];
function Ot(e) {
  return e;
}
function qr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ga(isNaN(t) ? NaN : 0.5);
}
function Ka(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function Qa(e, t, n) {
  var i = e[0], r = e[1], l = t[0], s = t[1];
  return r < i ? (i = qr(r, i), l = n(s, l)) : (i = qr(i, r), l = n(l, s)), function(o) {
    return l(i(o));
  };
}
function Za(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < i; )
    r[s] = qr(e[s], e[s + 1]), l[s] = n(t[s], t[s + 1]);
  return function(o) {
    var f = qa(e, o, 1, i) - 1;
    return l[f](r[f](o));
  };
}
function lf(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function sf() {
  var e = Ul, t = Ul, n = fr, i, r, l, s = Ot, o, f, u;
  function h() {
    var c = Math.min(e.length, t.length);
    return s !== Ot && (s = Ka(e[0], e[c - 1])), o = c > 2 ? Za : Qa, f = u = null, a;
  }
  function a(c) {
    return c == null || isNaN(c = +c) ? l : (f || (f = o(e.map(i), t, n)))(i(s(c)));
  }
  return a.invert = function(c) {
    return s(r((u || (u = o(t, e.map(i), Bt)))(c)));
  }, a.domain = function(c) {
    return arguments.length ? (e = Array.from(c, Ua), h()) : e.slice();
  }, a.range = function(c) {
    return arguments.length ? (t = Array.from(c), h()) : t.slice();
  }, a.rangeRound = function(c) {
    return t = Array.from(c), n = $o, h();
  }, a.clamp = function(c) {
    return arguments.length ? (s = c ? !0 : Ot, h()) : s !== Ot;
  }, a.interpolate = function(c) {
    return arguments.length ? (n = c, h()) : n;
  }, a.unknown = function(c) {
    return arguments.length ? (l = c, a) : l;
  }, function(c, d) {
    return i = c, r = d, h();
  };
}
function Ja() {
  return sf()(Ot, Ot);
}
function xa(e, t, n, i) {
  var r = Ya(e, t, n), l;
  switch (i = Ki(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(l = zu(r, s)) && (i.precision = l), Go(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = Mu(r, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = Uo(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return $e(i);
}
function xr(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return Xa(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var r = t();
    return xa(r[0], r[r.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), r = 0, l = i.length - 1, s = i[r], o = i[l], f, u, h = 10;
    for (o < s && (u = s, s = o, o = u, u = r, r = l, l = u); h-- > 0; ) {
      if (u = Pr(s, o, n), u === f)
        return i[r] = s, i[l] = o, t(i);
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
function An() {
  var e = Ja();
  return e.copy = function() {
    return lf(e, An());
  }, ar.apply(e, arguments), xr(e);
}
function Kl(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function $a(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ec(e) {
  return e < 0 ? -e * e : e * e;
}
function tc(e) {
  var t = e(Ot, Ot), n = 1;
  function i() {
    return n === 1 ? e(Ot, Ot) : n === 0.5 ? e($a, ec) : e(Kl(n), Kl(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, xr(t);
}
function of() {
  var e = tc(sf());
  return e.copy = function() {
    return lf(e, of()).exponent(e.exponent());
  }, ar.apply(e, arguments), e;
}
function nc() {
  return of.apply(null, arguments).exponent(0.5);
}
function ic() {
  var e = 0, t = 1, n, i, r, l, s = Ot, o = !1, f;
  function u(a) {
    return a == null || isNaN(a = +a) ? f : s(r === 0 ? 0.5 : (a = (l(a) - n) * r, o ? Math.max(0, Math.min(1, a)) : a));
  }
  u.domain = function(a) {
    return arguments.length ? ([e, t] = a, n = l(e = +e), i = l(t = +t), r = n === i ? 0 : 1 / (i - n), u) : [e, t];
  }, u.clamp = function(a) {
    return arguments.length ? (o = !!a, u) : o;
  }, u.interpolator = function(a) {
    return arguments.length ? (s = a, u) : s;
  };
  function h(a) {
    return function(c) {
      var d, g;
      return arguments.length ? ([d, g] = c, s = a(d, g), u) : [s(0), s(1)];
    };
  }
  return u.range = h(fr), u.rangeRound = h($o), u.unknown = function(a) {
    return arguments.length ? (f = a, u) : f;
  }, function(a) {
    return l = a, n = a(e), i = a(t), r = n === i ? 0 : 1 / (i - n), u;
  };
}
function rc(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ff() {
  var e = xr(ic()(Ot));
  return e.copy = function() {
    return rc(e, ff());
  }, ja.apply(e, arguments);
}
const $n = {
  x: An,
  y: An,
  z: An,
  r: nc
};
function lc(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Ql(e) {
  return e;
}
function sc(e) {
  return (t) => Math.log(e * t);
}
function oc(e) {
  return (t) => e * Math.exp(t);
}
function fc(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function uc(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Ii(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function ac(e) {
  const t = lc(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: sc(n), ground: oc(n), scaleType: t };
  }
  return t === "pow" ? { lift: Ii(1), ground: Ii(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Ii(0.5), ground: Ii(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: fc(1), ground: uc(1), scaleType: t } : { lift: Ql, ground: Ql, scaleType: t };
}
function cc(e, t) {
  if (typeof e.range != "function")
    throw new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t))
    return e.domain();
  e.domain().length !== 2 && console.warn("[LayerCake] The scale is expected to have a domain of length 2 to use padding. Are you sure you want to use padding? Your scale's domain is:", e.domain()), e.range().length !== 2 && console.warn("[LayerCake] The scale is expected to have a range of length 2 to use padding. Are you sure you want to use padding? Your scale's range is:", e.range());
  const { lift: n, ground: i } = ac(e), r = e.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, o] = e.domain().map((d) => n(l ? d.getTime() : d)), [f, u] = e.range(), h = t[0] || 0, a = t[1] || 0, c = (o - s) / (Math.abs(u - f) - h - a);
  return [s - h * c, a * c + o].map((d) => i(l ? new Date(d) : d));
}
function hc(e, t, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = e === "r" ? 1 : 0, s = e === "y" ? n : e === "r" ? 25 : t), i === !0 ? [s, l] : [l, s];
}
function dc(e, t, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : hc(e, t, n, i, l);
}
function Oi(e) {
  return function([n, i, r, l, s, o, f, u, h, a]) {
    if (i === null)
      return null;
    const c = dc(e, f, u, o, h, a), d = n === $n[e] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), l && d.domain(cc(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function Ti([e, t]) {
  return (n) => {
    const i = e(n);
    return Array.isArray(i) ? i.map((r) => t(r)) : t(i);
  };
}
function Pi([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const gc = (e) => ({
  element: e[0] & /*element*/
  4,
  width: e[0] & /*$width_d*/
  256,
  height: e[0] & /*$height_d*/
  512,
  aspectRatio: e[0] & /*$aspectRatio_d*/
  1024,
  containerWidth: e[0] & /*$_containerWidth*/
  128,
  containerHeight: e[0] & /*$_containerHeight*/
  64
}), Zl = (e) => ({
  element: (
    /*element*/
    e[2]
  ),
  width: (
    /*$width_d*/
    e[8]
  ),
  height: (
    /*$height_d*/
    e[9]
  ),
  aspectRatio: (
    /*$aspectRatio_d*/
    e[10]
  ),
  containerWidth: (
    /*$_containerWidth*/
    e[7]
  ),
  containerHeight: (
    /*$_containerHeight*/
    e[6]
  )
});
function Jl(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[90].default
  ), l = Tt(
    r,
    e,
    /*$$scope*/
    e[89],
    Zl
  );
  return {
    c() {
      t = V("div"), l && l.c(), y(t, "class", "layercake-container svelte-vhzpsp"), ri(() => (
        /*div_elementresize_handler*/
        e[92].call(t)
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
      Y(s, t, o), l && l.m(t, null), e[91](t), n = uu(
        t,
        /*div_elementresize_handler*/
        e[92].bind(t)
      ), i = !0;
    },
    p(s, o) {
      l && l.p && (!i || o[0] & /*element, $width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight*/
      1988 | o[2] & /*$$scope*/
      134217728) && Ft(
        l,
        r,
        s,
        /*$$scope*/
        s[89],
        i ? Pt(
          r,
          /*$$scope*/
          s[89],
          o,
          gc
        ) : qt(
          /*$$scope*/
          s[89]
        ),
        Zl
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
      i || (T(l, s), i = !0);
    },
    o(s) {
      B(l, s), i = !1;
    },
    d(s) {
      s && X(t), l && l.d(s), e[91](null), n();
    }
  };
}
function _c(e) {
  let t, n, i = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Jl(e)
  );
  return {
    c() {
      i && i.c(), t = ft();
    },
    m(r, l) {
      i && i.m(r, l), Y(r, t, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && T(i, 1)) : (i = Jl(r), i.c(), T(i, 1), i.m(t.parentNode, t)) : i && (Ae(), B(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(r) {
      n || (T(i), n = !0);
    },
    o(r) {
      B(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && X(t);
    }
  };
}
function mc(e, t, n) {
  let i, r, l, s, o, f, u, h, a, c, d, g, _, p, m, w, A, z, M, E, D, I, v, k, q, Z, G, N, R, C, P, H, K, $, re, le, be, ce, Se, ze, Re, { $$slots: Ne = {}, $$scope: oe } = t, { ssr: xe = !1 } = t, { pointerEvents: it = !0 } = t, { position: rt = "relative" } = t, { percentRange: S = !1 } = t, { width: Pe = void 0 } = t, { height: ke = void 0 } = t, { containerWidth: Q = Pe || 100 } = t, { containerHeight: J = ke || 100 } = t, { element: Fe = void 0 } = t, { x: Ge = void 0 } = t, { y: qe = void 0 } = t, { z: tt = void 0 } = t, { r: lt = void 0 } = t, { data: ct = [] } = t, { xDomain: ht = void 0 } = t, { yDomain: he = void 0 } = t, { zDomain: yt = void 0 } = t, { rDomain: dt = void 0 } = t, { xNice: ot = !1 } = t, { yNice: U = !1 } = t, { zNice: we = !1 } = t, { rNice: Oe = !1 } = t, { xPadding: Xe = void 0 } = t, { yPadding: vt = void 0 } = t, { zPadding: Xt = void 0 } = t, { rPadding: Yt = void 0 } = t, { xScale: Wt = $n.x } = t, { yScale: zt = $n.y } = t, { zScale: It = $n.z } = t, { rScale: j = $n.r } = t, { xRange: We = void 0 } = t, { yRange: ee = void 0 } = t, { zRange: b = void 0 } = t, { rRange: W = void 0 } = t, { xReverse: te = !1 } = t, { yReverse: O = typeof zt.bandwidth != "function" } = t, { zReverse: _e = !1 } = t, { rReverse: ye = !1 } = t, { padding: Be = {} } = t, { extents: Le = {} } = t, { flatData: nt = void 0 } = t, { custom: Ze = {} } = t, Kt = !1;
  Tn(() => {
    Kt = !0;
  });
  const Te = {}, St = Me(S);
  ie(e, St, (F) => n(128, ce = F));
  const kt = Me(Q);
  ie(e, kt, (F) => n(7, be = F));
  const pn = Me(J);
  ie(e, pn, (F) => n(6, le = F));
  const hi = Me(zr(Le));
  ie(e, hi, (F) => n(127, re = F));
  const di = Me(ct);
  ie(e, di, (F) => n(126, $ = F));
  const Pn = Me(nt || ct);
  ie(e, Pn, (F) => n(125, K = F));
  const gi = Me(Be);
  ie(e, gi, (F) => n(124, H = F));
  const wn = Me(ln(Ge));
  ie(e, wn, (F) => n(123, P = F));
  const yn = Me(ln(qe));
  ie(e, yn, (F) => n(122, C = F));
  const vn = Me(ln(tt));
  ie(e, vn, (F) => n(121, R = F));
  const Sn = Me(ln(lt));
  ie(e, Sn, (F) => n(120, N = F));
  const _i = Me(ht);
  ie(e, _i, (F) => n(119, G = F));
  const mi = Me(he);
  ie(e, mi, (F) => n(118, Z = F));
  const bi = Me(yt);
  ie(e, bi, (F) => n(117, q = F));
  const pi = Me(dt);
  ie(e, pi, (F) => n(116, k = F));
  const Fn = Me(ot);
  ie(e, Fn, (F) => n(115, v = F));
  const qn = Me(U);
  ie(e, qn, (F) => n(114, I = F));
  const Ln = Me(we);
  ie(e, Ln, (F) => n(113, D = F));
  const Dn = Me(Oe);
  ie(e, Dn, (F) => n(112, E = F));
  const Wn = Me(te);
  ie(e, Wn, (F) => n(111, M = F));
  const Bn = Me(O);
  ie(e, Bn, (F) => n(110, z = F));
  const Vn = Me(_e);
  ie(e, Vn, (F) => n(109, A = F));
  const Hn = Me(ye);
  ie(e, Hn, (F) => n(108, w = F));
  const Xn = Me(Xe);
  ie(e, Xn, (F) => n(107, m = F));
  const Yn = Me(vt);
  ie(e, Yn, (F) => n(106, p = F));
  const jn = Me(Xt);
  ie(e, jn, (F) => n(105, _ = F));
  const Gn = Me(Yt);
  ie(e, Gn, (F) => n(104, g = F));
  const wi = Me(We);
  ie(e, wi, (F) => n(103, d = F));
  const yi = Me(ee);
  ie(e, yi, (F) => n(102, c = F));
  const vi = Me(b);
  ie(e, vi, (F) => n(101, a = F));
  const Si = Me(W);
  ie(e, Si, (F) => n(100, h = F));
  const Un = Me(Wt);
  ie(e, Un, (F) => n(99, u = F));
  const Kn = Me(zt);
  ie(e, Kn, (F) => n(98, f = F));
  const Qn = Me(It);
  ie(e, Qn, (F) => n(97, o = F));
  const Zn = Me(j);
  ie(e, Zn, (F) => n(96, s = F));
  const ki = Me(Te);
  ie(e, ki, (F) => n(94, r = F));
  const Ni = Me(Ze);
  ie(e, Ni, (F) => n(95, l = F));
  const cl = Je([wn, yn, vn, Sn], ([F, Zt, jt, st]) => {
    const on = {};
    return F && (on.x = F), Zt && (on.y = Zt), jt && (on.z = jt), st && (on.r = st), on;
  }), hl = Je([gi, kt, pn], ([F]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, F)), dl = Je([kt, pn, hl], ([F, Zt, jt]) => {
    const st = {};
    return st.top = jt.top, st.right = F - jt.right, st.bottom = Zt - jt.bottom, st.left = jt.left, st.width = st.right - st.left, st.height = st.bottom - st.top, st.width <= 0 && Kt === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), st.height <= 0 && Kt === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), st;
  }), nn = Je([dl], ([F]) => F.width);
  ie(e, nn, (F) => n(8, Se = F));
  const rn = Je([dl], ([F]) => F.height);
  ie(e, rn, (F) => n(9, ze = F));
  const Qt = Je([Pn, cl, hi, Un, Kn, Zn, Qn], ([F, Zt, jt, st, on, tu, nu]) => {
    const iu = {
      x: st,
      y: on,
      r: tu,
      z: nu
    }, vr = zr(Zt, jt), ru = Object.fromEntries(Object.keys(vr).map((Sr) => [Sr, iu[Sr]]));
    return Object.keys(vr).length > 0 ? { ...Ea(F, vr, ru), ...jt } : {};
  }), gl = Je([Qt, _i], Ei("x")), _l = Je([Qt, mi], Ei("y")), ml = Je([Qt, bi], Ei("z")), bl = Je([Qt, pi], Ei("r")), mr = Je(
    [
      Un,
      Qt,
      gl,
      Xn,
      Fn,
      Wn,
      nn,
      rn,
      wi,
      St
    ],
    Oi("x")
  ), jf = Je([wn, mr], Ti), br = Je(
    [
      Kn,
      Qt,
      _l,
      Yn,
      qn,
      Bn,
      nn,
      rn,
      yi,
      St
    ],
    Oi("y")
  ), Gf = Je([yn, br], Ti), pr = Je(
    [
      Qn,
      Qt,
      ml,
      jn,
      Ln,
      Vn,
      nn,
      rn,
      vi,
      St
    ],
    Oi("z")
  ), Uf = Je([vn, pr], Ti), wr = Je(
    [
      Zn,
      Qt,
      bl,
      Gn,
      Dn,
      Hn,
      nn,
      rn,
      Si,
      St
    ],
    Oi("r")
  ), Kf = Je([Sn, wr], Ti), Qf = Je([mr], Pi), Zf = Je([br], Pi), Jf = Je([pr], Pi), xf = Je([wr], Pi), yr = Je([nn, rn], ([F, Zt]) => F / Zt);
  ie(e, yr, (F) => n(10, Re = F));
  function $f(F) {
    ve[F ? "unshift" : "push"](() => {
      Fe = F, n(2, Fe);
    });
  }
  function eu() {
    Q = this.clientWidth, J = this.clientHeight, n(0, Q), n(1, J);
  }
  return e.$$set = (F) => {
    "ssr" in F && n(3, xe = F.ssr), "pointerEvents" in F && n(4, it = F.pointerEvents), "position" in F && n(5, rt = F.position), "percentRange" in F && n(51, S = F.percentRange), "width" in F && n(52, Pe = F.width), "height" in F && n(53, ke = F.height), "containerWidth" in F && n(0, Q = F.containerWidth), "containerHeight" in F && n(1, J = F.containerHeight), "element" in F && n(2, Fe = F.element), "x" in F && n(54, Ge = F.x), "y" in F && n(55, qe = F.y), "z" in F && n(56, tt = F.z), "r" in F && n(57, lt = F.r), "data" in F && n(58, ct = F.data), "xDomain" in F && n(59, ht = F.xDomain), "yDomain" in F && n(60, he = F.yDomain), "zDomain" in F && n(61, yt = F.zDomain), "rDomain" in F && n(62, dt = F.rDomain), "xNice" in F && n(63, ot = F.xNice), "yNice" in F && n(64, U = F.yNice), "zNice" in F && n(65, we = F.zNice), "rNice" in F && n(66, Oe = F.rNice), "xPadding" in F && n(67, Xe = F.xPadding), "yPadding" in F && n(68, vt = F.yPadding), "zPadding" in F && n(69, Xt = F.zPadding), "rPadding" in F && n(70, Yt = F.rPadding), "xScale" in F && n(71, Wt = F.xScale), "yScale" in F && n(72, zt = F.yScale), "zScale" in F && n(73, It = F.zScale), "rScale" in F && n(74, j = F.rScale), "xRange" in F && n(75, We = F.xRange), "yRange" in F && n(76, ee = F.yRange), "zRange" in F && n(77, b = F.zRange), "rRange" in F && n(78, W = F.rRange), "xReverse" in F && n(79, te = F.xReverse), "yReverse" in F && n(80, O = F.yReverse), "zReverse" in F && n(81, _e = F.zReverse), "rReverse" in F && n(82, ye = F.rReverse), "padding" in F && n(83, Be = F.padding), "extents" in F && n(84, Le = F.extents), "flatData" in F && n(85, nt = F.flatData), "custom" in F && n(86, Ze = F.custom), "$$scope" in F && n(89, oe = F.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*x*/
    8388608 && Ge && n(87, Te.x = Ge, Te), e.$$.dirty[1] & /*y*/
    16777216 && qe && n(87, Te.y = qe, Te), e.$$.dirty[1] & /*z*/
    33554432 && tt && n(87, Te.z = tt, Te), e.$$.dirty[1] & /*r*/
    67108864 && lt && n(87, Te.r = lt, Te), e.$$.dirty[1] & /*xDomain*/
    268435456 && ht && n(87, Te.xDomain = ht, Te), e.$$.dirty[1] & /*yDomain*/
    536870912 && he && n(87, Te.yDomain = he, Te), e.$$.dirty[1] & /*zDomain*/
    1073741824 && yt && n(87, Te.zDomain = yt, Te), e.$$.dirty[2] & /*rDomain*/
    1 && dt && n(87, Te.rDomain = dt, Te), e.$$.dirty[2] & /*xRange*/
    8192 && We && n(87, Te.xRange = We, Te), e.$$.dirty[2] & /*yRange*/
    16384 && ee && n(87, Te.yRange = ee, Te), e.$$.dirty[2] & /*zRange*/
    32768 && b && n(87, Te.zRange = b, Te), e.$$.dirty[2] & /*rRange*/
    65536 && W && n(87, Te.rRange = W, Te), e.$$.dirty[1] & /*percentRange*/
    1048576 && pe(St, ce = S, ce), e.$$.dirty[0] & /*containerWidth*/
    1 && pe(kt, be = Q, be), e.$$.dirty[0] & /*containerHeight*/
    2 && pe(pn, le = J, le), e.$$.dirty[2] & /*extents*/
    4194304 && pe(hi, re = zr(Le), re), e.$$.dirty[1] & /*data*/
    134217728 && pe(di, $ = ct, $), e.$$.dirty[1] & /*data*/
    134217728 | e.$$.dirty[2] & /*flatData*/
    8388608 && pe(Pn, K = nt || ct, K), e.$$.dirty[2] & /*padding*/
    2097152 && pe(gi, H = Be, H), e.$$.dirty[1] & /*x*/
    8388608 && pe(wn, P = ln(Ge), P), e.$$.dirty[1] & /*y*/
    16777216 && pe(yn, C = ln(qe), C), e.$$.dirty[1] & /*z*/
    33554432 && pe(vn, R = ln(tt), R), e.$$.dirty[1] & /*r*/
    67108864 && pe(Sn, N = ln(lt), N), e.$$.dirty[1] & /*xDomain*/
    268435456 && pe(_i, G = ht, G), e.$$.dirty[1] & /*yDomain*/
    536870912 && pe(mi, Z = he, Z), e.$$.dirty[1] & /*zDomain*/
    1073741824 && pe(bi, q = yt, q), e.$$.dirty[2] & /*rDomain*/
    1 && pe(pi, k = dt, k), e.$$.dirty[2] & /*xNice*/
    2 && pe(Fn, v = ot, v), e.$$.dirty[2] & /*yNice*/
    4 && pe(qn, I = U, I), e.$$.dirty[2] & /*zNice*/
    8 && pe(Ln, D = we, D), e.$$.dirty[2] & /*rNice*/
    16 && pe(Dn, E = Oe, E), e.$$.dirty[2] & /*xReverse*/
    131072 && pe(Wn, M = te, M), e.$$.dirty[2] & /*yReverse*/
    262144 && pe(Bn, z = O, z), e.$$.dirty[2] & /*zReverse*/
    524288 && pe(Vn, A = _e, A), e.$$.dirty[2] & /*rReverse*/
    1048576 && pe(Hn, w = ye, w), e.$$.dirty[2] & /*xPadding*/
    32 && pe(Xn, m = Xe, m), e.$$.dirty[2] & /*yPadding*/
    64 && pe(Yn, p = vt, p), e.$$.dirty[2] & /*zPadding*/
    128 && pe(jn, _ = Xt, _), e.$$.dirty[2] & /*rPadding*/
    256 && pe(Gn, g = Yt, g), e.$$.dirty[2] & /*xRange*/
    8192 && pe(wi, d = We, d), e.$$.dirty[2] & /*yRange*/
    16384 && pe(yi, c = ee, c), e.$$.dirty[2] & /*zRange*/
    32768 && pe(vi, a = b, a), e.$$.dirty[2] & /*rRange*/
    65536 && pe(Si, h = W, h), e.$$.dirty[2] & /*xScale*/
    512 && pe(Un, u = Wt, u), e.$$.dirty[2] & /*yScale*/
    1024 && pe(Kn, f = zt, f), e.$$.dirty[2] & /*zScale*/
    2048 && pe(Qn, o = It, o), e.$$.dirty[2] & /*rScale*/
    4096 && pe(Zn, s = j, s), e.$$.dirty[2] & /*custom*/
    16777216 && pe(Ni, l = Ze, l), e.$$.dirty[2] & /*config*/
    33554432 && pe(ki, r = Te, r), e.$$.dirty[2] & /*context*/
    67108864 && Ho("LayerCake", i);
  }, n(88, i = {
    activeGetters: cl,
    width: nn,
    height: rn,
    percentRange: St,
    aspectRatio: yr,
    containerWidth: kt,
    containerHeight: pn,
    x: wn,
    y: yn,
    z: vn,
    r: Sn,
    custom: Ni,
    data: di,
    xNice: Fn,
    yNice: qn,
    zNice: Ln,
    rNice: Dn,
    xReverse: Wn,
    yReverse: Bn,
    zReverse: Vn,
    rReverse: Hn,
    xPadding: Xn,
    yPadding: Yn,
    zPadding: jn,
    rPadding: Gn,
    padding: hl,
    flatData: Pn,
    extents: Qt,
    xDomain: gl,
    yDomain: _l,
    zDomain: ml,
    rDomain: bl,
    xRange: Qf,
    yRange: Zf,
    zRange: Jf,
    rRange: xf,
    config: ki,
    xScale: mr,
    xGet: jf,
    yScale: br,
    yGet: Gf,
    zScale: pr,
    zGet: Uf,
    rScale: wr,
    rGet: Kf
  }), [
    Q,
    J,
    Fe,
    xe,
    it,
    rt,
    le,
    be,
    Se,
    ze,
    Re,
    St,
    kt,
    pn,
    hi,
    di,
    Pn,
    gi,
    wn,
    yn,
    vn,
    Sn,
    _i,
    mi,
    bi,
    pi,
    Fn,
    qn,
    Ln,
    Dn,
    Wn,
    Bn,
    Vn,
    Hn,
    Xn,
    Yn,
    jn,
    Gn,
    wi,
    yi,
    vi,
    Si,
    Un,
    Kn,
    Qn,
    Zn,
    ki,
    Ni,
    nn,
    rn,
    yr,
    S,
    Pe,
    ke,
    Ge,
    qe,
    tt,
    lt,
    ct,
    ht,
    he,
    yt,
    dt,
    ot,
    U,
    we,
    Oe,
    Xe,
    vt,
    Xt,
    Yt,
    Wt,
    zt,
    It,
    j,
    We,
    ee,
    b,
    W,
    te,
    O,
    _e,
    ye,
    Be,
    Le,
    nt,
    Ze,
    Te,
    i,
    oe,
    Ne,
    $f,
    eu
  ];
}
class $r extends je {
  constructor(t) {
    super(), Ye(
      this,
      t,
      mc,
      _c,
      He,
      {
        ssr: 3,
        pointerEvents: 4,
        position: 5,
        percentRange: 51,
        width: 52,
        height: 53,
        containerWidth: 0,
        containerHeight: 1,
        element: 2,
        x: 54,
        y: 55,
        z: 56,
        r: 57,
        data: 58,
        xDomain: 59,
        yDomain: 60,
        zDomain: 61,
        rDomain: 62,
        xNice: 63,
        yNice: 64,
        zNice: 65,
        rNice: 66,
        xPadding: 67,
        yPadding: 68,
        zPadding: 69,
        rPadding: 70,
        xScale: 71,
        yScale: 72,
        zScale: 73,
        rScale: 74,
        xRange: 75,
        yRange: 76,
        zRange: 77,
        rRange: 78,
        xReverse: 79,
        yReverse: 80,
        zReverse: 81,
        rReverse: 82,
        padding: 83,
        extents: 84,
        flatData: 85,
        custom: 86
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
}
const bc = (e) => ({ element: e & /*element*/
1 }), xl = (e) => ({ element: (
  /*element*/
  e[0]
) });
function pc(e) {
  let t, n;
  const i = (
    /*#slots*/
    e[6].default
  ), r = Tt(
    i,
    e,
    /*$$scope*/
    e[5],
    xl
  );
  return {
    c() {
      t = V("div"), r && r.c(), y(t, "class", "layercake-layout-html svelte-1bu60uu"), x(
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
        e[3].top + "px"
      ), x(
        t,
        "right",
        /*$padding*/
        e[3].right + "px"
      ), x(
        t,
        "bottom",
        /*$padding*/
        e[3].bottom + "px"
      ), x(
        t,
        "left",
        /*$padding*/
        e[3].left + "px"
      );
    },
    m(l, s) {
      Y(l, t, s), r && r.m(t, null), e[7](t), n = !0;
    },
    p(l, [s]) {
      r && r.p && (!n || s & /*$$scope, element*/
      33) && Ft(
        r,
        i,
        l,
        /*$$scope*/
        l[5],
        n ? Pt(
          i,
          /*$$scope*/
          l[5],
          s,
          bc
        ) : qt(
          /*$$scope*/
          l[5]
        ),
        xl
      ), s & /*zIndex*/
      2 && x(
        t,
        "z-index",
        /*zIndex*/
        l[1]
      ), s & /*pointerEvents*/
      4 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        l[2] === !1 ? "none" : null
      ), s & /*$padding*/
      8 && x(
        t,
        "top",
        /*$padding*/
        l[3].top + "px"
      ), s & /*$padding*/
      8 && x(
        t,
        "right",
        /*$padding*/
        l[3].right + "px"
      ), s & /*$padding*/
      8 && x(
        t,
        "bottom",
        /*$padding*/
        l[3].bottom + "px"
      ), s & /*$padding*/
      8 && x(
        t,
        "left",
        /*$padding*/
        l[3].left + "px"
      );
    },
    i(l) {
      n || (T(r, l), n = !0);
    },
    o(l) {
      B(r, l), n = !1;
    },
    d(l) {
      l && X(t), r && r.d(l), e[7](null);
    }
  };
}
function wc(e, t, n) {
  let i, { $$slots: r = {}, $$scope: l } = t, { element: s = void 0 } = t, { zIndex: o = void 0 } = t, { pointerEvents: f = void 0 } = t;
  const { padding: u } = dn("LayerCake");
  ie(e, u, (a) => n(3, i = a));
  function h(a) {
    ve[a ? "unshift" : "push"](() => {
      s = a, n(0, s);
    });
  }
  return e.$$set = (a) => {
    "element" in a && n(0, s = a.element), "zIndex" in a && n(1, o = a.zIndex), "pointerEvents" in a && n(2, f = a.pointerEvents), "$$scope" in a && n(5, l = a.$$scope);
  }, [s, o, f, i, u, l, r, h];
}
class yc extends je {
  constructor(t) {
    super(), Ye(this, t, wc, pc, He, { element: 0, zIndex: 1, pointerEvents: 2 });
  }
}
const vc = (e) => ({ element: e & /*element*/
1 }), $l = (e) => ({ element: (
  /*element*/
  e[0]
) }), Sc = (e) => ({ element: e & /*element*/
1 }), es = (e) => ({ element: (
  /*element*/
  e[0]
) });
function kc(e) {
  let t, n, i, r, l;
  const s = (
    /*#slots*/
    e[12].defs
  ), o = Tt(
    s,
    e,
    /*$$scope*/
    e[11],
    es
  ), f = (
    /*#slots*/
    e[12].default
  ), u = Tt(
    f,
    e,
    /*$$scope*/
    e[11],
    $l
  );
  return {
    c() {
      t = Ct("svg"), n = Ct("defs"), o && o.c(), i = Ct("g"), u && u.c(), y(i, "class", "layercake-layout-svg_g"), y(i, "transform", r = "translate(" + /*$padding*/
      e[7].left + ", " + /*$padding*/
      e[7].top + ")"), y(t, "class", "layercake-layout-svg svelte-u84d8d"), y(
        t,
        "viewBox",
        /*viewBox*/
        e[4]
      ), y(
        t,
        "width",
        /*$containerWidth*/
        e[5]
      ), y(
        t,
        "height",
        /*$containerHeight*/
        e[6]
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
    m(h, a) {
      Y(h, t, a), L(t, n), o && o.m(n, null), L(t, i), u && u.m(i, null), e[13](i), e[14](t), l = !0;
    },
    p(h, [a]) {
      o && o.p && (!l || a & /*$$scope, element*/
      2049) && Ft(
        o,
        s,
        h,
        /*$$scope*/
        h[11],
        l ? Pt(
          s,
          /*$$scope*/
          h[11],
          a,
          Sc
        ) : qt(
          /*$$scope*/
          h[11]
        ),
        es
      ), u && u.p && (!l || a & /*$$scope, element*/
      2049) && Ft(
        u,
        f,
        h,
        /*$$scope*/
        h[11],
        l ? Pt(
          f,
          /*$$scope*/
          h[11],
          a,
          vc
        ) : qt(
          /*$$scope*/
          h[11]
        ),
        $l
      ), (!l || a & /*$padding*/
      128 && r !== (r = "translate(" + /*$padding*/
      h[7].left + ", " + /*$padding*/
      h[7].top + ")")) && y(i, "transform", r), (!l || a & /*viewBox*/
      16) && y(
        t,
        "viewBox",
        /*viewBox*/
        h[4]
      ), (!l || a & /*$containerWidth*/
      32) && y(
        t,
        "width",
        /*$containerWidth*/
        h[5]
      ), (!l || a & /*$containerHeight*/
      64) && y(
        t,
        "height",
        /*$containerHeight*/
        h[6]
      ), a & /*zIndex*/
      4 && x(
        t,
        "z-index",
        /*zIndex*/
        h[2]
      ), a & /*pointerEvents*/
      8 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        h[3] === !1 ? "none" : null
      );
    },
    i(h) {
      l || (T(o, h), T(u, h), l = !0);
    },
    o(h) {
      B(o, h), B(u, h), l = !1;
    },
    d(h) {
      h && X(t), o && o.d(h), u && u.d(h), e[13](null), e[14](null);
    }
  };
}
function Nc(e, t, n) {
  let i, r, l, { $$slots: s = {}, $$scope: o } = t, { element: f = void 0 } = t, { innerElement: u = void 0 } = t, { zIndex: h = void 0 } = t, { pointerEvents: a = void 0 } = t, { viewBox: c = void 0 } = t;
  const { containerWidth: d, containerHeight: g, padding: _ } = dn("LayerCake");
  ie(e, d, (w) => n(5, i = w)), ie(e, g, (w) => n(6, r = w)), ie(e, _, (w) => n(7, l = w));
  function p(w) {
    ve[w ? "unshift" : "push"](() => {
      u = w, n(1, u);
    });
  }
  function m(w) {
    ve[w ? "unshift" : "push"](() => {
      f = w, n(0, f);
    });
  }
  return e.$$set = (w) => {
    "element" in w && n(0, f = w.element), "innerElement" in w && n(1, u = w.innerElement), "zIndex" in w && n(2, h = w.zIndex), "pointerEvents" in w && n(3, a = w.pointerEvents), "viewBox" in w && n(4, c = w.viewBox), "$$scope" in w && n(11, o = w.$$scope);
  }, [
    f,
    u,
    h,
    a,
    c,
    i,
    r,
    l,
    d,
    g,
    _,
    o,
    s,
    p,
    m
  ];
}
class Rc extends je {
  constructor(t) {
    super(), Ye(this, t, Nc, kc, He, {
      element: 0,
      innerElement: 1,
      zIndex: 2,
      pointerEvents: 3,
      viewBox: 4
    });
  }
}
function uf(e, t, n) {
  const i = window.devicePixelRatio || 1;
  return e.canvas.width = t * i, e.canvas.height = n * i, e.canvas.style.width = `${t}px`, e.canvas.style.height = `${n}px`, e.scale(i, i), { width: e.canvas.width, height: e.canvas.height };
}
const zc = (e) => ({
  element: e & /*element*/
  2,
  context: e & /*context*/
  1
}), ts = (e) => ({
  element: (
    /*element*/
    e[1]
  ),
  context: (
    /*context*/
    e[0]
  )
});
function Mc(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[9].default
  ), l = Tt(
    r,
    e,
    /*$$scope*/
    e[8],
    ts
  );
  return {
    c() {
      t = V("canvas"), n = se(), l && l.c(), y(t, "class", "layercake-layout-canvas"), x(t, "width", "100%"), x(t, "height", "100%"), x(t, "position", "absolute"), x(
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
        e[4].top + "px"
      ), x(
        t,
        "right",
        /*$padding*/
        e[4].right + "px"
      ), x(
        t,
        "bottom",
        /*$padding*/
        e[4].bottom + "px"
      ), x(
        t,
        "left",
        /*$padding*/
        e[4].left + "px"
      );
    },
    m(s, o) {
      Y(s, t, o), e[10](t), Y(s, n, o), l && l.m(s, o), i = !0;
    },
    p(s, [o]) {
      o & /*zIndex*/
      4 && x(
        t,
        "z-index",
        /*zIndex*/
        s[2]
      ), o & /*pointerEvents*/
      8 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        s[3] === !1 ? "none" : null
      ), o & /*$padding*/
      16 && x(
        t,
        "top",
        /*$padding*/
        s[4].top + "px"
      ), o & /*$padding*/
      16 && x(
        t,
        "right",
        /*$padding*/
        s[4].right + "px"
      ), o & /*$padding*/
      16 && x(
        t,
        "bottom",
        /*$padding*/
        s[4].bottom + "px"
      ), o & /*$padding*/
      16 && x(
        t,
        "left",
        /*$padding*/
        s[4].left + "px"
      ), l && l.p && (!i || o & /*$$scope, element, context*/
      259) && Ft(
        l,
        r,
        s,
        /*$$scope*/
        s[8],
        i ? Pt(
          r,
          /*$$scope*/
          s[8],
          o,
          zc
        ) : qt(
          /*$$scope*/
          s[8]
        ),
        ts
      );
    },
    i(s) {
      i || (T(l, s), i = !0);
    },
    o(s) {
      B(l, s), i = !1;
    },
    d(s) {
      s && X(t), e[10](null), s && X(n), l && l.d(s);
    }
  };
}
function Ac(e, t, n) {
  let i, r, l, { $$slots: s = {}, $$scope: o } = t, { element: f = void 0 } = t, { context: u = void 0 } = t, { zIndex: h = void 0 } = t, { pointerEvents: a = void 0 } = t;
  const { width: c, height: d, padding: g } = dn("LayerCake");
  ie(e, c, (m) => n(12, r = m)), ie(e, d, (m) => n(11, i = m)), ie(e, g, (m) => n(4, l = m));
  const _ = { ctx: Me({}) };
  Tn(() => {
    n(0, u = f.getContext("2d")), uf(u, r, i);
  }), Ho("canvas", _);
  function p(m) {
    ve[m ? "unshift" : "push"](() => {
      f = m, n(1, f);
    });
  }
  return e.$$set = (m) => {
    "element" in m && n(1, f = m.element), "context" in m && n(0, u = m.context), "zIndex" in m && n(2, h = m.zIndex), "pointerEvents" in m && n(3, a = m.pointerEvents), "$$scope" in m && n(8, o = m.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*context*/
    1 && _.ctx.set(u);
  }, [
    u,
    f,
    h,
    a,
    l,
    c,
    d,
    g,
    o,
    s,
    p
  ];
}
class Cc extends je {
  constructor(t) {
    super(), Ye(this, t, Ac, Mc, He, {
      element: 1,
      context: 0,
      zIndex: 2,
      pointerEvents: 3
    });
  }
}
function ns(e, t, n) {
  const i = e.slice();
  i[29] = t[n], i[36] = n;
  const r = (
    /*columnHeight*/
    i[6](
      /*d*/
      i[29]
    )
  );
  i[30] = r;
  const l = (
    /*$xGet*/
    i[3](
      /*d*/
      i[29]
    )
  );
  i[31] = l;
  const s = Array.isArray(
    /*xGot*/
    i[31]
  ) ? (
    /*xGot*/
    i[31][0]
  ) : (
    /*xGot*/
    i[31]
  );
  i[32] = s;
  const o = (
    /*$xScale*/
    i[9].bandwidth ? (
      /*$xScale*/
      i[9].bandwidth()
    ) : (
      /*columnWidth*/
      i[7](
        /*d*/
        i[29]
      )
    )
  );
  i[33] = o;
  const f = (
    /*$y*/
    i[10](
      /*d*/
      i[29]
    )
  );
  return i[34] = f, i;
}
function is(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), i, r, l;
  return {
    c() {
      t = Ct("text"), i = me(n), y(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), y(t, "y", l = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), y(t, "text-anchor", "middle"), y(t, "class", "svelte-r9e3o9");
    },
    m(s, o) {
      Y(s, t, o), L(t, i);
    },
    p(s, o) {
      o[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[34] + "") && De(i, n), o[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      s[32] + /*colWidth*/
      s[33] / 2) && y(t, "x", r), o[0] & /*$height, columnHeight, $data*/
      4416 && l !== (l = /*$height*/
      s[12] - /*colHeight*/
      s[30] - 5) && y(t, "y", l);
    },
    d(s) {
      s && X(t);
    }
  };
}
function rs(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _;
  function p() {
    return (
      /*mouseenter_handler*/
      e[23](
        /*i*/
        e[36],
        /*d*/
        e[29]
      )
    );
  }
  let m = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && is(e)
  );
  return {
    c() {
      t = Ct("rect"), h = Ct("rect"), m && m.c(), d = ft(), y(t, "class", "group-rect svelte-r9e3o9"), y(
        t,
        "data-id",
        /*i*/
        e[36]
      ), y(t, "data-range", n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )), y(t, "data-count", i = /*yValue*/
      e[34]), y(t, "x", r = /*xPos*/
      e[32]), y(t, "y", l = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )), y(t, "width", s = /*colWidth*/
      e[33]), y(t, "height", o = /*colHeight*/
      e[30]), y(
        t,
        "fill",
        /*fill*/
        e[0]
      ), y(t, "stroke", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? ls : "none"), y(t, "stroke-width", u = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? ss : 0), de(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), y(h, "class", "hover-zone svelte-r9e3o9"), y(h, "x", a = /*xPos*/
      e[32]), y(h, "y", 0), y(h, "width", c = /*colWidth*/
      e[33]), y(
        h,
        "height",
        /*$height*/
        e[12]
      ), y(h, "fill", "none"), y(h, "stroke", "none");
    },
    m(w, A) {
      Y(w, t, A), Y(w, h, A), m && m.m(w, A), Y(w, d, A), g || (_ = [
        ne(h, "mouseenter", p),
        ne(
          h,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], g = !0);
    },
    p(w, A) {
      e = w, A[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && y(t, "data-range", n), A[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      e[34]) && y(t, "data-count", i), A[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && y(t, "x", r), A[0] & /*$yGet, $data*/
      260 && l !== (l = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && y(t, "y", l), A[0] & /*$xScale, columnWidth, $data*/
      896 && s !== (s = /*colWidth*/
      e[33]) && y(t, "width", s), A[0] & /*columnHeight, $data*/
      320 && o !== (o = /*colHeight*/
      e[30]) && y(t, "height", o), A[0] & /*fill*/
      1 && y(
        t,
        "fill",
        /*fill*/
        e[0]
      ), A[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? ls : "none") && y(t, "stroke", f), A[0] & /*hoveredIndex*/
      16 && u !== (u = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? ss : 0) && y(t, "stroke-width", u), A[0] & /*loaded*/
      32 && de(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), A[0] & /*$xGet, $data*/
      264 && a !== (a = /*xPos*/
      e[32]) && y(h, "x", a), A[0] & /*$xScale, columnWidth, $data*/
      896 && c !== (c = /*colWidth*/
      e[33]) && y(h, "width", c), A[0] & /*$height*/
      4096 && y(
        h,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? m ? m.p(e, A) : (m = is(e), m.c(), m.m(d.parentNode, d)) : m && (m.d(1), m = null);
    },
    d(w) {
      w && X(t), w && X(h), m && m.d(w), w && X(d), g = !1, Ve(_);
    }
  };
}
function Ec(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = rs(ns(e, n, r));
  return {
    c() {
      t = Ct("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      y(t, "class", "column-group");
    },
    m(r, l) {
      Y(r, t, l);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(t, null);
    },
    p(r, l) {
      if (l[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        r[8];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = ns(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = rs(o), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: ge,
    o: ge,
    d(r) {
      r && X(t), Lt(i, r);
    }
  };
}
const ls = "#333", ss = 1;
function Ic(e, t, n) {
  let i, r, l, s, o, f, u, h, a, c;
  const d = Dt(), { data: g, xGet: _, yGet: p, x: m, yRange: w, xScale: A, y: z, height: M, zGet: E, zScale: D, z: I, custom: v } = dn("LayerCake");
  ie(e, g, (C) => n(8, f = C)), ie(e, _, (C) => n(3, o = C)), ie(e, p, (C) => n(2, l = C)), ie(e, m, (C) => n(11, a = C)), ie(e, w, (C) => n(22, s = C)), ie(e, A, (C) => n(9, u = C)), ie(e, z, (C) => n(10, h = C)), ie(e, M, (C) => n(12, c = C));
  let { fill: k = "#00e047" } = t, { showLabels: q = !1 } = t, Z = null;
  Tn(() => {
    setTimeout(() => n(5, G = !0), 100);
  });
  let G = !1;
  const N = (C, P) => {
    n(4, Z = C), d("hover", P);
  }, R = () => {
    n(4, Z = null), d("hover", null);
  };
  return e.$$set = (C) => {
    "fill" in C && n(0, k = C.fill), "showLabels" in C && n(1, q = C.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (C) => {
      const P = o(C);
      return Math.abs(P[1] - P[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (C) => s[0] - l(C));
  }, [
    k,
    q,
    l,
    o,
    Z,
    G,
    r,
    i,
    f,
    u,
    h,
    a,
    c,
    d,
    g,
    _,
    p,
    m,
    w,
    A,
    z,
    M,
    s,
    N,
    R
  ];
}
class Oc extends je {
  constructor(t) {
    super(), Ye(this, t, Ic, Ec, He, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
const Tc = (e) => ({}), os = (e) => ({});
function Pc(e) {
  let t, n;
  return t = new Oc({ props: { fill: "#3b82f6" } }), t.$on(
    "hover",
    /*hover_handler*/
    e[9]
  ), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Fc(e) {
  let t, n;
  return t = new Rc({
    props: {
      $$slots: { default: [Pc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredBin*/
      4112 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function qc(e) {
  let t;
  const n = (
    /*#slots*/
    e[8].caption
  ), i = Tt(
    n,
    e,
    /*$$scope*/
    e[12],
    os
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), t = !0;
    },
    p(r, l) {
      i && i.p && (!t || l & /*$$scope*/
      4096) && Ft(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        t ? Pt(
          n,
          /*$$scope*/
          r[12],
          l,
          Tc
        ) : qt(
          /*$$scope*/
          r[12]
        ),
        os
      );
    },
    i(r) {
      t || (T(i, r), t = !0);
    },
    o(r) {
      B(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Lc(e) {
  let t;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[4] != null ? Bc : (
        /*mean*/
        l[1] != null ? Wc : Dc
      )
    );
  }
  let i = n(e), r = i(e);
  return {
    c() {
      r.c(), t = ft();
    },
    m(l, s) {
      r.m(l, s), Y(l, t, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: ge,
    o: ge,
    d(l) {
      r.d(l), l && X(t);
    }
  };
}
function Dc(e) {
  let t;
  return {
    c() {
      t = me(" ");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    d(n) {
      n && X(t);
    }
  };
}
function Wc(e) {
  let t, n = $e(".3")(
    /*mean*/
    e[1]
  ) + "", i;
  return {
    c() {
      t = me("M = "), i = me(n);
    },
    m(r, l) {
      Y(r, t, l), Y(r, i, l);
    },
    p(r, l) {
      l & /*mean*/
      2 && n !== (n = $e(".3")(
        /*mean*/
        r[1]
      ) + "") && De(i, n);
    },
    d(r) {
      r && X(t), r && X(i);
    }
  };
}
function Bc(e) {
  let t = (
    /*makeTooltipText*/
    e[5](
      /*data*/
      e[2].find(
        /*func_1*/
        e[11]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = me(t);
    },
    m(i, r) {
      Y(i, n, r);
    },
    p(i, r) {
      r & /*data, hoveredBin*/
      20 && t !== (t = /*makeTooltipText*/
      i[5](
        /*data*/
        i[2].find(
          /*func_1*/
          i[11]
        )
      ) + "") && De(n, t);
    },
    d(i) {
      i && X(n);
    }
  };
}
function Vc(e) {
  let t, n, i, r, l, s, o;
  n = new $r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: rf().round(!0),
      xDomain: (
        /*histBins*/
        e[3]
      ),
      yScale: An(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[2]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[10]
      ) },
      $$slots: { default: [Fc] },
      $$scope: { ctx: e }
    }
  });
  const f = [Lc, qc], u = [];
  function h(a, c) {
    return (
      /*$$slots*/
      a[6].caption ? 1 : 0
    );
  }
  return l = h(e), s = u[l] = f[l](e), {
    c() {
      t = V("div"), ae(n.$$.fragment), i = se(), r = V("div"), s.c(), x(
        t,
        "width",
        /*width*/
        e[0] + "px"
      ), x(t, "height", "22px"), y(r, "class", "mt-1 text-xs text-slate-800 truncate");
    },
    m(a, c) {
      Y(a, t, c), fe(n, t, null), Y(a, i, c), Y(a, r, c), u[l].m(r, null), o = !0;
    },
    p(a, [c]) {
      const d = {};
      c & /*histBins*/
      8 && (d.xDomain = /*histBins*/
      a[3]), c & /*data*/
      4 && (d.data = /*data*/
      a[2]), c & /*hoveredBin*/
      16 && (d.custom = { hoveredGet: (
        /*func*/
        a[10]
      ) }), c & /*$$scope, hoveredBin*/
      4112 && (d.$$scope = { dirty: c, ctx: a }), n.$set(d), (!o || c & /*width*/
      1) && x(
        t,
        "width",
        /*width*/
        a[0] + "px"
      );
      let g = l;
      l = h(a), l === g ? u[l].p(a, c) : (Ae(), B(u[g], 1, 1, () => {
        u[g] = null;
      }), Ce(), s = u[l], s ? s.p(a, c) : (s = u[l] = f[l](a), s.c()), T(s, 1), s.m(r, null));
    },
    i(a) {
      o || (T(n.$$.fragment, a), T(s), o = !0);
    },
    o(a) {
      B(n.$$.fragment, a), B(s), o = !1;
    },
    d(a) {
      a && X(t), ue(n), a && X(i), a && X(r), u[l].d();
    }
  };
}
function Hc(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t;
  const l = Gr(i);
  let { width: s = 100 } = t, { histValues: o } = t, { mean: f = null } = t, u = [], h = [], a, c = $e(".3g"), d = $e(",");
  function g(w) {
    return `${c(w.bin)}: ${d(w.count)} instances`;
  }
  const _ = (w) => n(4, a = w.detail != null ? w.detail.bin : null), p = (w) => w.bin == a, m = (w) => w.bin == a;
  return e.$$set = (w) => {
    "width" in w && n(0, s = w.width), "histValues" in w && n(7, o = w.histValues), "mean" in w && n(1, f = w.mean), "$$scope" in w && n(12, r = w.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    132 && (o ? (n(2, u = Object.entries(o).map((w) => ({ bin: parseFloat(w[0]), count: w[1] }))), u.sort((w, A) => w.bin - A.bin), n(3, h = u.map((w) => w.bin))) : (n(2, u = []), n(3, h = []))), e.$$.dirty & /*data*/
    4 && u.length > 0) {
      let w = u.reduce(
        (A, z, M) => M > 0 ? Math.min(A, Math.abs(z.bin - u[M - 1].bin)) : A,
        1e9
      );
      c = $e(`.${Uo(w)}f`);
    }
  }, [
    s,
    f,
    u,
    h,
    a,
    g,
    l,
    o,
    i,
    _,
    p,
    m,
    r
  ];
}
class Xc extends je {
  constructor(t) {
    super(), Ye(this, t, Hc, Vc, He, { width: 0, histValues: 7, mean: 1 });
  }
}
function fs(e, t, n) {
  const i = e.slice();
  return i[22] = t[n], i[24] = n, i;
}
function us(e) {
  let t, n, i;
  function r() {
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
      t = V("span"), y(t, "class", "bar absolute svelte-19susuy"), x(t, "top", "0"), x(
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
      ), de(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), de(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      ), de(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      );
    },
    m(l, s) {
      Y(l, t, s), n || (i = [
        ne(t, "mouseenter", r),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[14]
        )
      ], n = !0);
    },
    p(l, s) {
      e = l, s & /*$xGet, $data*/
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
      2 && de(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), s & /*hoveredIndex, $data*/
      5 && de(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      ), s & /*hoveredIndex, $data*/
      5 && de(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      );
    },
    d(l) {
      l && X(t), n = !1, Ve(i);
    }
  };
}
function Yc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = us(fs(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ft();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      Y(r, t, l);
    },
    p(r, [l]) {
      if (l & /*$xGet, $data, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      255) {
        n = /*$data*/
        r[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = fs(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = us(o), i[s].c(), i[s].m(t.parentNode, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: ge,
    o: ge,
    d(r) {
      Lt(i, r), r && X(t);
    }
  };
}
function jc(e, t, n) {
  let i, r, l, s, o;
  const f = Dt(), { data: u, xGet: h, yGet: a, x: c, yRange: d, xScale: g, y: _, height: p, zGet: m, zScale: w, z: A, custom: z } = dn("LayerCake");
  ie(e, u, (v) => n(2, i = v)), ie(e, h, (v) => n(3, r = v)), ie(e, a, (v) => n(6, o = v)), ie(e, g, (v) => n(4, l = v)), ie(e, A, (v) => n(5, s = v));
  let M = null;
  Tn(() => {
    setTimeout(() => n(1, E = !0), 100);
  });
  let E = !1;
  return [
    M,
    E,
    i,
    r,
    l,
    s,
    o,
    f,
    u,
    h,
    a,
    g,
    A,
    (v, k) => {
      n(0, M = v), f("hover", k);
    },
    () => {
      n(0, M = null), f("hover", null);
    }
  ];
}
class Gc extends je {
  constructor(t) {
    super(), Ye(this, t, jc, Yc, He, {});
  }
}
const Uc = (e) => ({}), as = (e) => ({});
function Kc(e) {
  let t, n;
  return t = new Gc({}), t.$on(
    "hover",
    /*hover_handler*/
    e[8]
  ), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Qc(e) {
  let t, n;
  return t = new yc({
    props: {
      $$slots: { default: [Kc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredIndex*/
      1032 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Zc(e) {
  let t;
  return {
    c() {
      t = me(" ");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && X(t);
    }
  };
}
function Jc(e) {
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
    m(i, r) {
      Y(i, n, r);
    },
    p(i, r) {
      r & /*data, hoveredIndex*/
      12 && t !== (t = /*makeTooltipText*/
      i[4](
        /*data*/
        i[2][
          /*hoveredIndex*/
          i[3]
        ]
      ) + "") && De(n, t);
    },
    i: ge,
    o: ge,
    d(i) {
      i && X(n);
    }
  };
}
function xc(e) {
  let t;
  const n = (
    /*#slots*/
    e[7].caption
  ), i = Tt(
    n,
    e,
    /*$$scope*/
    e[10],
    as
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), t = !0;
    },
    p(r, l) {
      i && i.p && (!t || l & /*$$scope*/
      1024) && Ft(
        i,
        n,
        r,
        /*$$scope*/
        r[10],
        t ? Pt(
          n,
          /*$$scope*/
          r[10],
          l,
          Uc
        ) : qt(
          /*$$scope*/
          r[10]
        ),
        as
      );
    },
    i(r) {
      t || (T(i, r), t = !0);
    },
    o(r) {
      B(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function $c(e) {
  let t, n, i, r, l, s, o;
  n = new $r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: An(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0]
      ],
      yScale: cr(),
      yDomain: Fr(
        /*counts*/
        e[1].length
      ),
      yRange: Au,
      data: (
        /*data*/
        e[2]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[9]
      ) },
      $$slots: { default: [Qc] },
      $$scope: { ctx: e }
    }
  });
  const f = [xc, Jc, Zc], u = [];
  function h(a, c) {
    return (
      /*$$slots*/
      a[5].caption ? 0 : (
        /*hoveredIndex*/
        a[3] != null ? 1 : 2
      )
    );
  }
  return l = h(e), s = u[l] = f[l](e), {
    c() {
      t = V("div"), ae(n.$$.fragment), i = se(), r = V("div"), s.c(), x(
        t,
        "width",
        /*width*/
        e[0] + "px"
      ), x(t, "height", "6px"), y(t, "class", "inline-block rounded overflow-hidden"), y(r, "class", "text-xs text-slate-800");
    },
    m(a, c) {
      Y(a, t, c), fe(n, t, null), Y(a, i, c), Y(a, r, c), u[l].m(r, null), o = !0;
    },
    p(a, [c]) {
      const d = {};
      c & /*width*/
      1 && (d.xRange = [
        0,
        /*width*/
        a[0]
      ]), c & /*counts*/
      2 && (d.yDomain = Fr(
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
      let g = l;
      l = h(a), l === g ? u[l].p(a, c) : (Ae(), B(u[g], 1, 1, () => {
        u[g] = null;
      }), Ce(), s = u[l], s ? s.p(a, c) : (s = u[l] = f[l](a), s.c()), T(s, 1), s.m(r, null));
    },
    i(a) {
      o || (T(n.$$.fragment, a), T(s), o = !0);
    },
    o(a) {
      B(n.$$.fragment, a), B(s), o = !1;
    },
    d(a) {
      a && X(t), ue(n), a && X(i), a && X(r), u[l].d();
    }
  };
}
function e1(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t;
  const l = Gr(i);
  let { width: s = 100 } = t, { counts: o = null } = t, { order: f = [] } = t, u = [], h, a = $e(",");
  function c(_) {
    return `${_.index}: ${a(_.count)} instances`;
  }
  const d = (_) => n(3, h = _.detail ? _.detail.index : null), g = (_) => _.index == h;
  return e.$$set = (_) => {
    "width" in _ && n(0, s = _.width), "counts" in _ && n(1, o = _.counts), "order" in _ && n(6, f = _.order), "$$scope" in _ && n(10, r = _.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order, data*/
    70)
      if (o && f.length > 0) {
        let _ = Object.values(o).reduce((m, w) => m + w, 0), p = 0;
        n(2, u = f.map((m, w) => {
          let A = p;
          return p += o[m] || 0, {
            start: A / _,
            end: p / _,
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
    l,
    f,
    i,
    d,
    g,
    r
  ];
}
class t1 extends je {
  constructor(t) {
    super(), Ye(this, t, e1, $c, He, { width: 0, counts: 1, order: 6 });
  }
}
const Fi = parseFloat;
function Lr(e, t = ";") {
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
function n1(e, t, n, i) {
  let r, l;
  const s = "1em";
  let o, f, u, h = "-.125em";
  const a = "visible";
  return i && (u = "center", l = "1.25em"), n && (r = n), t && (t == "lg" ? (f = "1.33333em", o = ".75em", h = "-.225em") : t == "xs" ? f = ".75em" : t == "sm" ? f = ".875em" : f = t.replace("x", "em")), Lr([
    Lr({
      float: r,
      width: l,
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
function i1(e, t, n, i, r, l = 1, s = "", o = "") {
  let f = 1, u = 1;
  return r && (r == "horizontal" ? f = -1 : r == "vertical" ? u = -1 : f = u = -1), Lr(
    [
      `translate(${Fi(t) * l}${s},${Fi(n) * l}${s})`,
      `scale(${f * Fi(e)},${u * Fi(e)})`,
      i && `rotate(${i}${o})`
    ],
    " "
  );
}
function cs(e) {
  let t, n, i, r, l, s, o, f;
  function u(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? l1 : r1;
  }
  let h = u(e), a = h(e);
  return {
    c() {
      t = Ct("svg"), n = Ct("g"), i = Ct("g"), a.c(), y(
        i,
        "transform",
        /*transform*/
        e[12]
      ), y(n, "transform", r = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), y(n, "transform-origin", l = /*i*/
      e[10][0] / 4 + " 0"), y(t, "id", s = /*id*/
      e[1] || void 0), y(t, "class", o = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), y(
        t,
        "style",
        /*s*/
        e[11]
      ), y(t, "viewBox", f = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), y(t, "aria-hidden", "true"), y(t, "role", "img"), y(t, "xmlns", "http://www.w3.org/2000/svg"), de(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), de(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(c, d) {
      Y(c, t, d), L(t, n), L(n, i), a.m(i, null);
    },
    p(c, d) {
      h === (h = u(c)) && a ? a.p(c, d) : (a.d(1), a = h(c), a && (a.c(), a.m(i, null))), d & /*transform*/
      4096 && y(
        i,
        "transform",
        /*transform*/
        c[12]
      ), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      c[10][0] / 2 + " " + /*i*/
      c[10][1] / 2 + ")") && y(n, "transform", r), d & /*i*/
      1024 && l !== (l = /*i*/
      c[10][0] / 4 + " 0") && y(n, "transform-origin", l), d & /*id*/
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
      17 && de(
        t,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && de(
        t,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && X(t), a.d();
    }
  };
}
function r1(e) {
  let t, n, i, r, l, s, o, f, u, h;
  return {
    c() {
      t = Ct("path"), s = Ct("path"), y(t, "d", n = /*i*/
      e[10][4][0]), y(t, "fill", i = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), y(t, "fill-opacity", r = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), y(t, "transform", l = "translate(" + /*i*/
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
      Y(a, t, c), Y(a, s, c);
    },
    p(a, c) {
      c & /*i*/
      1024 && n !== (n = /*i*/
      a[10][4][0]) && y(t, "d", n), c & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      a[6] || /*color*/
      a[2] || "currentColor") && y(t, "fill", i), c & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      a[9] != !1 ? (
        /*primaryOpacity*/
        a[7]
      ) : (
        /*secondaryOpacity*/
        a[8]
      )) && y(t, "fill-opacity", r), c & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      a[10][0] / -2 + " " + /*i*/
      a[10][1] / -2 + ")") && y(t, "transform", l), c & /*i*/
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
      a && X(t), a && X(s);
    }
  };
}
function l1(e) {
  let t, n, i, r;
  return {
    c() {
      t = Ct("path"), y(t, "d", n = /*i*/
      e[10][4]), y(t, "fill", i = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), y(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(l, s) {
      Y(l, t, s);
    },
    p(l, s) {
      s & /*i*/
      1024 && n !== (n = /*i*/
      l[10][4]) && y(t, "d", n), s & /*color, primaryColor*/
      36 && i !== (i = /*color*/
      l[2] || /*primaryColor*/
      l[5] || "currentColor") && y(t, "fill", i), s & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      l[10][0] / -2 + " " + /*i*/
      l[10][1] / -2 + ")") && y(t, "transform", r);
    },
    d(l) {
      l && X(t);
    }
  };
}
function s1(e) {
  let t, n = (
    /*i*/
    e[10][4] && cs(e)
  );
  return {
    c() {
      n && n.c(), t = ft();
    },
    m(i, r) {
      n && n.m(i, r), Y(i, t, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = cs(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: ge,
    o: ge,
    d(i) {
      n && n.d(i), i && X(t);
    }
  };
}
function o1(e, t, n) {
  let { class: i = "" } = t, { id: r = "" } = t, { style: l = "" } = t, { icon: s } = t, { size: o = "" } = t, { color: f = "" } = t, { fw: u = !1 } = t, { pull: h = "" } = t, { scale: a = 1 } = t, { translateX: c = 0 } = t, { translateY: d = 0 } = t, { rotate: g = "" } = t, { flip: _ = !1 } = t, { spin: p = !1 } = t, { pulse: m = !1 } = t, { primaryColor: w = "" } = t, { secondaryColor: A = "" } = t, { primaryOpacity: z = 1 } = t, { secondaryOpacity: M = 0.4 } = t, { swapOpacity: E = !1 } = t, D, I, v;
  return e.$$set = (k) => {
    "class" in k && n(0, i = k.class), "id" in k && n(1, r = k.id), "style" in k && n(13, l = k.style), "icon" in k && n(14, s = k.icon), "size" in k && n(15, o = k.size), "color" in k && n(2, f = k.color), "fw" in k && n(16, u = k.fw), "pull" in k && n(17, h = k.pull), "scale" in k && n(18, a = k.scale), "translateX" in k && n(19, c = k.translateX), "translateY" in k && n(20, d = k.translateY), "rotate" in k && n(21, g = k.rotate), "flip" in k && n(22, _ = k.flip), "spin" in k && n(3, p = k.spin), "pulse" in k && n(4, m = k.pulse), "primaryColor" in k && n(5, w = k.primaryColor), "secondaryColor" in k && n(6, A = k.secondaryColor), "primaryOpacity" in k && n(7, z = k.primaryOpacity), "secondaryOpacity" in k && n(8, M = k.secondaryOpacity), "swapOpacity" in k && n(9, E = k.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, D = s && s.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, I = n1(l, o, h, u)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, v = i1(a, c, d, g, _, 512));
  }, [
    i,
    r,
    f,
    p,
    m,
    w,
    A,
    z,
    M,
    E,
    D,
    I,
    v,
    l,
    s,
    o,
    u,
    h,
    a,
    c,
    d,
    g,
    _
  ];
}
class Qe extends je {
  constructor(t) {
    super(), Ye(this, t, o1, s1, He, {
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
var af = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, hs = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, f1 = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, ds = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, u1 = {
  prefix: "fas",
  iconName: "angle-right",
  icon: [256, 512, [8250], "f105", "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]
}, a1 = {
  prefix: "fas",
  iconName: "grip-lines-vertical",
  icon: [192, 512, [], "f7a5", "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"]
}, c1 = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Dr = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, h1 = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, d1 = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, g1 = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, _1 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, m1 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, b1 = {
  prefix: "fas",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
}, p1 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, cf = p1, gs = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, hf = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, _s = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, w1 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, y1 = {
  prefix: "fas",
  iconName: "angle-up",
  icon: [384, 512, [8963], "f106", "M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]
}, v1 = {
  prefix: "fas",
  iconName: "scale-balanced",
  icon: [640, 512, [9878, "balance-scale"], "f24e", "M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"]
}, df = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, S1 = {
  prefix: "fas",
  iconName: "angle-left",
  icon: [256, 512, [8249], "f104", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, ms = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const k1 = (e) => ({}), bs = (e) => ({}), N1 = (e) => ({}), ps = (e) => ({});
function R1(e) {
  let t, n;
  return t = new Qe({ props: { icon: _1 } }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function ws(e) {
  let t, n, i, r, l, s, o;
  const f = (
    /*#slots*/
    e[9].options
  ), u = Tt(
    f,
    e,
    /*$$scope*/
    e[8],
    bs
  );
  return {
    c() {
      t = V("div"), n = se(), i = V("div"), r = V("div"), u && u.c(), y(t, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10"), y(r, "class", "py-1 menu-options svelte-92y3z1"), y(r, "role", "none"), y(i, "class", "absolute left-0 z-20 w-60 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), x(
        i,
        "opacity",
        /*optionsMenuOpacity*/
        e[4]
      ), y(i, "role", "menu"), y(i, "aria-orientation", "vertical"), y(i, "aria-labelledby", "menu-button");
    },
    m(h, a) {
      Y(h, t, a), Y(h, n, a), Y(h, i, a), L(i, r), u && u.m(r, null), e[10](i), l = !0, s || (o = [
        ne(
          t,
          "click",
          /*hideOptionsMenu*/
          e[7]
        ),
        ne(t, "keydown", M1),
        ne(
          i,
          "click",
          /*hideOptionsMenu*/
          e[7]
        ),
        ne(i, "keydown", A1)
      ], s = !0);
    },
    p(h, a) {
      u && u.p && (!l || a & /*$$scope*/
      256) && Ft(
        u,
        f,
        h,
        /*$$scope*/
        h[8],
        l ? Pt(
          f,
          /*$$scope*/
          h[8],
          a,
          k1
        ) : qt(
          /*$$scope*/
          h[8]
        ),
        bs
      ), (!l || a & /*optionsMenuOpacity*/
      16) && x(
        i,
        "opacity",
        /*optionsMenuOpacity*/
        h[4]
      );
    },
    i(h) {
      l || (T(u, h), l = !0);
    },
    o(h) {
      B(u, h), l = !1;
    },
    d(h) {
      h && X(t), h && X(n), h && X(i), u && u.d(h), e[10](null), s = !1, Ve(o);
    }
  };
}
function z1(e) {
  let t, n, i, r, l, s, o;
  const f = (
    /*#slots*/
    e[9]["button-content"]
  ), u = Tt(
    f,
    e,
    /*$$scope*/
    e[8],
    ps
  ), h = u || R1();
  let a = (
    /*visible*/
    e[0] && ws(e)
  );
  return {
    c() {
      t = V("div"), n = V("button"), h && h.c(), r = se(), a && a.c(), y(n, "class", i = yl(
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
      ), y(
        n,
        "aria-expanded",
        /*visible*/
        e[0]
      ), y(n, "aria-label", "Options menu"), y(n, "aria-haspopup", "true"), y(t, "class", "relative");
    },
    m(c, d) {
      Y(c, t, d), L(t, n), h && h.m(n, null), L(t, r), a && a.m(t, null), l = !0, s || (o = ne(n, "click", On(
        /*showOptionsMenu*/
        e[6]
      )), s = !0);
    },
    p(c, [d]) {
      u && u.p && (!l || d & /*$$scope*/
      256) && Ft(
        u,
        f,
        c,
        /*$$scope*/
        c[8],
        l ? Pt(
          f,
          /*$$scope*/
          c[8],
          d,
          N1
        ) : qt(
          /*$$scope*/
          c[8]
        ),
        ps
      ), (!l || d & /*buttonClass*/
      2 && i !== (i = yl(
        /*buttonClass*/
        c[1]
      ) + " svelte-92y3z1")) && y(n, "class", i), (!l || d & /*buttonStyle*/
      8) && y(
        n,
        "style",
        /*buttonStyle*/
        c[3]
      ), (!l || d & /*buttonTitle*/
      4) && y(
        n,
        "title",
        /*buttonTitle*/
        c[2]
      ), (!l || d & /*visible*/
      1) && y(
        n,
        "aria-expanded",
        /*visible*/
        c[0]
      ), /*visible*/
      c[0] ? a ? (a.p(c, d), d & /*visible*/
      1 && T(a, 1)) : (a = ws(c), a.c(), T(a, 1), a.m(t, null)) : a && (Ae(), B(a, 1, 1, () => {
        a = null;
      }), Ce());
    },
    i(c) {
      l || (T(h, c), T(a), l = !0);
    },
    o(c) {
      B(h, c), B(a), l = !1;
    },
    d(c) {
      c && X(t), h && h.d(c), a && a.d(), s = !1, o();
    }
  };
}
const M1 = (e) => {
}, A1 = (e) => {
};
function C1(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { visible: l = !1 } = t, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = t, { buttonTitle: o = "Show more actions" } = t, { buttonStyle: f = "" } = t, u = 0, h;
  function a(_) {
    _.key === "Escape" && (d(), _.stopPropagation(), _.preventDefault());
  }
  function c() {
    n(4, u = 0), n(0, l = !0), setTimeout(() => n(4, u = 1), 10), h && h.focus();
  }
  function d() {
    n(4, u = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function g(_) {
    ve[_ ? "unshift" : "push"](() => {
      h = _, n(5, h);
    });
  }
  return e.$$set = (_) => {
    "visible" in _ && n(0, l = _.visible), "buttonClass" in _ && n(1, s = _.buttonClass), "buttonTitle" in _ && n(2, o = _.buttonTitle), "buttonStyle" in _ && n(3, f = _.buttonStyle), "$$scope" in _ && n(8, r = _.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*visible*/
    1 && (l ? window.addEventListener("keydown", a, !0) : window.removeEventListener("keydown", a, !0));
  }, [
    l,
    s,
    o,
    f,
    u,
    h,
    c,
    d,
    r,
    i,
    g
  ];
}
class gf extends je {
  constructor(t) {
    super(), Ye(this, t, C1, z1, He, {
      visible: 0,
      buttonClass: 1,
      buttonTitle: 2,
      buttonStyle: 3
    });
  }
}
const ut = {
  Checkbox: 36,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  Score: 100,
  CollapsedMetric: 30
};
function E1(e) {
  let t;
  return {
    c() {
      t = V("span"), t.textContent = "Evaluation Set", y(t, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && X(t);
    }
  };
}
function I1(e) {
  let t = (
    /*needsParentheses*/
    e[3] ? "(" : ""
  ), n, i, r, l, s, o, f = (
    /*needsParentheses*/
    e[3] ? ")" : ""
  ), u, h;
  return i = new _n({
    props: {
      feature: (
        /*feature*/
        e[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].lhs
      ),
      needsParentheses: Mt(
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
  ), o = new _n({
    props: {
      feature: (
        /*feature*/
        e[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].rhs
      ),
      needsParentheses: Mt(
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
      n = me(t), ae(i.$$.fragment), r = se(), l = V("span"), l.textContent = "|", s = se(), ae(o.$$.fragment), u = me(f), y(l, "class", "px-1");
    },
    m(a, c) {
      Y(a, n, c), fe(i, a, c), Y(a, r, c), Y(a, l, c), Y(a, s, c), fe(o, a, c), Y(a, u, c), h = !0;
    },
    p(a, c) {
      (!h || c & /*needsParentheses*/
      8) && t !== (t = /*needsParentheses*/
      a[3] ? "(" : "") && De(n, t);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      a[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      a[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Mt(
        /*feature*/
        a[0].lhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      a[1]), i.$set(d);
      const g = {};
      c & /*feature*/
      1 && (g.feature = /*feature*/
      a[0].rhs), c & /*currentFeature*/
      4 && (g.currentFeature = /*currentFeature*/
      a[2].rhs), c & /*feature*/
      1 && (g.needsParentheses = Mt(
        /*feature*/
        a[0].rhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (g.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (g.positiveOnly = /*positiveOnly*/
      a[1]), o.$set(g), (!h || c & /*needsParentheses*/
      8) && f !== (f = /*needsParentheses*/
      a[3] ? ")" : "") && De(u, f);
    },
    i(a) {
      h || (T(i.$$.fragment, a), T(o.$$.fragment, a), h = !0);
    },
    o(a) {
      B(i.$$.fragment, a), B(o.$$.fragment, a), h = !1;
    },
    d(a) {
      a && X(n), ue(i, a), a && X(r), a && X(l), a && X(s), ue(o, a), a && X(u);
    }
  };
}
function O1(e) {
  let t = (
    /*needsParentheses*/
    e[3] ? "(" : ""
  ), n, i, r, l, s, o, f = (
    /*needsParentheses*/
    e[3] ? ")" : ""
  ), u, h;
  return i = new _n({
    props: {
      feature: (
        /*feature*/
        e[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].lhs
      ),
      needsParentheses: Mt(
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
  ), o = new _n({
    props: {
      feature: (
        /*feature*/
        e[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].rhs
      ),
      needsParentheses: Mt(
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
      n = me(t), ae(i.$$.fragment), r = se(), l = V("span"), l.textContent = "&", s = se(), ae(o.$$.fragment), u = me(f), y(l, "class", "px-1");
    },
    m(a, c) {
      Y(a, n, c), fe(i, a, c), Y(a, r, c), Y(a, l, c), Y(a, s, c), fe(o, a, c), Y(a, u, c), h = !0;
    },
    p(a, c) {
      (!h || c & /*needsParentheses*/
      8) && t !== (t = /*needsParentheses*/
      a[3] ? "(" : "") && De(n, t);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      a[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      a[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Mt(
        /*feature*/
        a[0].lhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      a[1]), i.$set(d);
      const g = {};
      c & /*feature*/
      1 && (g.feature = /*feature*/
      a[0].rhs), c & /*currentFeature*/
      4 && (g.currentFeature = /*currentFeature*/
      a[2].rhs), c & /*feature*/
      1 && (g.needsParentheses = Mt(
        /*feature*/
        a[0].rhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (g.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (g.positiveOnly = /*positiveOnly*/
      a[1]), o.$set(g), (!h || c & /*needsParentheses*/
      8) && f !== (f = /*needsParentheses*/
      a[3] ? ")" : "") && De(u, f);
    },
    i(a) {
      h || (T(i.$$.fragment, a), T(o.$$.fragment, a), h = !0);
    },
    o(a) {
      B(i.$$.fragment, a), B(o.$$.fragment, a), h = !1;
    },
    d(a) {
      a && X(n), ue(i, a), a && X(r), a && X(l), a && X(s), ue(o, a), a && X(u);
    }
  };
}
function T1(e) {
  let t, n, i;
  return n = new _n({
    props: {
      feature: (
        /*feature*/
        e[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].feature
      ),
      needsParentheses: Mt(
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
      t = me("! "), ae(n.$$.fragment);
    },
    m(r, l) {
      Y(r, t, l), fe(n, r, l), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*feature*/
      1 && (s.feature = /*feature*/
      r[0].feature), l & /*currentFeature*/
      4 && (s.currentFeature = /*currentFeature*/
      r[2].feature), l & /*feature*/
      1 && (s.needsParentheses = Mt(
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
      i || (T(n.$$.fragment, r), i = !0);
    },
    o(r) {
      B(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && X(t), ue(n, r);
    }
  };
}
function P1(e) {
  let t, n;
  function i(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? q1 : F1
    );
  }
  let r = i(e), l = r(e), s = !/*positiveOnly*/
  e[1] && ys(e);
  return {
    c() {
      t = V("div"), l.c(), n = se(), s && s.c(), y(t, "class", "px-2");
    },
    m(o, f) {
      Y(o, t, f), l.m(t, null), L(t, n), s && s.m(t, null);
    },
    p(o, f) {
      r === (r = i(o)) && l ? l.p(o, f) : (l.d(1), l = r(o), l && (l.c(), l.m(t, n))), /*positiveOnly*/
      o[1] ? s && (s.d(1), s = null) : s ? s.p(o, f) : (s = ys(o), s.c(), s.m(t, null));
    },
    i: ge,
    o: ge,
    d(o) {
      o && X(t), l.d(), s && s.d();
    }
  };
}
function F1(e) {
  let t, n = (
    /*feature*/
    e[0].col + ""
  ), i, r, l, s, o;
  return {
    c() {
      t = V("button"), i = me(n), y(t, "class", "bg-transparent text-sm font-mono text-black font-normal hover:opacity-70"), t.disabled = r = !/*canToggle*/
      e[4], y(t, "title", l = /*featureDisabled*/
      e[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), de(
        t,
        "opacity-50",
        /*featureDisabled*/
        e[5]
      );
    },
    m(f, u) {
      Y(f, t, u), L(t, i), s || (o = ne(
        t,
        "click",
        /*click_handler_1*/
        e[8]
      ), s = !0);
    },
    p(f, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      f[0].col + "") && De(i, n), u & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      f[4]) && (t.disabled = r), u & /*featureDisabled*/
      32 && l !== (l = /*featureDisabled*/
      f[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && y(t, "title", l), u & /*featureDisabled*/
      32 && de(
        t,
        "opacity-50",
        /*featureDisabled*/
        f[5]
      );
    },
    d(f) {
      f && X(t), s = !1, o();
    }
  };
}
function q1(e) {
  let t, n = (
    /*feature*/
    e[0].col + ""
  ), i, r, l, s, o;
  return {
    c() {
      t = V("button"), i = me(n), y(t, "class", "bg-transparent hover:opacity-70 font-mono text-sm font-normal text-black text-left break-words whitespace-normal"), x(t, "max-width", "240px"), t.disabled = r = !/*canToggle*/
      e[4], y(t, "title", l = /*featureDisabled*/
      e[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), de(
        t,
        "opacity-30",
        /*featureDisabled*/
        e[5]
      ), de(
        t,
        "line-through",
        /*featureDisabled*/
        e[5]
      );
    },
    m(f, u) {
      Y(f, t, u), L(t, i), s || (o = ne(
        t,
        "click",
        /*click_handler*/
        e[7]
      ), s = !0);
    },
    p(f, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      f[0].col + "") && De(i, n), u & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      f[4]) && (t.disabled = r), u & /*featureDisabled*/
      32 && l !== (l = /*featureDisabled*/
      f[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && y(t, "title", l), u & /*featureDisabled*/
      32 && de(
        t,
        "opacity-30",
        /*featureDisabled*/
        f[5]
      ), u & /*featureDisabled*/
      32 && de(
        t,
        "line-through",
        /*featureDisabled*/
        f[5]
      );
    },
    d(f) {
      f && X(t), s = !1, o();
    }
  };
}
function ys(e) {
  let t;
  function n(l, s) {
    return (
      /*featureDisabled*/
      l[5] ? D1 : L1
    );
  }
  let i = n(e), r = i(e);
  return {
    c() {
      t = V("div"), r.c(), y(t, "class", "flex items-center text-xs font-normal");
    },
    m(l, s) {
      Y(l, t, s), r.m(t, null);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(t, null)));
    },
    d(l) {
      l && X(t), r.d();
    }
  };
}
function L1(e) {
  let t, n = (
    /*feature*/
    e[0].vals.join(", ") + ""
  ), i;
  return {
    c() {
      t = V("span"), i = me(n), y(t, "class", "text-gray-600");
    },
    m(r, l) {
      Y(r, t, l), L(t, i);
    },
    p(r, l) {
      l & /*feature*/
      1 && n !== (n = /*feature*/
      r[0].vals.join(", ") + "") && De(i, n);
    },
    d(r) {
      r && X(t);
    }
  };
}
function D1(e) {
  let t;
  return {
    c() {
      t = V("span"), t.textContent = "(any value)", y(t, "class", "opacity-50");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    d(n) {
      n && X(t);
    }
  };
}
function W1(e) {
  let t, n, i, r;
  const l = [
    P1,
    T1,
    O1,
    I1,
    E1
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
  return n = o(e), i = s[n] = l[n](e), {
    c() {
      t = V("div"), i.c(), y(t, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(f, u) {
      Y(f, t, u), s[n].m(t, null), r = !0;
    },
    p(f, [u]) {
      let h = n;
      n = o(f), n === h ? s[n].p(f, u) : (Ae(), B(s[h], 1, 1, () => {
        s[h] = null;
      }), Ce(), i = s[n], i ? i.p(f, u) : (i = s[n] = l[n](f), i.c()), T(i, 1), i.m(t, null));
    },
    i(f) {
      r || (T(i), r = !0);
    },
    o(f) {
      B(i), r = !1;
    },
    d(f) {
      f && X(t), s[n].d();
    }
  };
}
function B1(e, t, n) {
  const i = Dt();
  let { feature: r } = t, { positiveOnly: l = !1 } = t, { currentFeature: s } = t, { needsParentheses: o = !1 } = t, { canToggle: f = !0 } = t, u = !1;
  const h = () => i("toggle", r), a = () => i("toggle", r);
  function c(m) {
    gt.call(this, e, m);
  }
  function d(m) {
    gt.call(this, e, m);
  }
  function g(m) {
    gt.call(this, e, m);
  }
  function _(m) {
    gt.call(this, e, m);
  }
  function p(m) {
    gt.call(this, e, m);
  }
  return e.$$set = (m) => {
    "feature" in m && n(0, r = m.feature), "positiveOnly" in m && n(1, l = m.positiveOnly), "currentFeature" in m && n(2, s = m.currentFeature), "needsParentheses" in m && n(3, o = m.needsParentheses), "canToggle" in m && n(4, f = m.canToggle);
  }, e.$$.update = () => {
    e.$$.dirty & /*feature, currentFeature*/
    5 && (r ? n(5, u = s.type == "base" && r.type != "base") : n(5, u = !1));
  }, [
    r,
    l,
    s,
    o,
    f,
    u,
    i,
    h,
    a,
    c,
    d,
    g,
    _,
    p
  ];
}
class _n extends je {
  constructor(t) {
    super(), Ye(this, t, B1, W1, He, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4
    });
  }
}
const V1 = (
  /*
  * Generated by PEG.js 0.10.0.
  *
  * http://pegjs.org/
  */
  function() {
    function e(i, r) {
      function l() {
        this.constructor = i;
      }
      l.prototype = r.prototype, i.prototype = new l();
    }
    function t(i, r, l, s) {
      this.message = i, this.expected = r, this.found = l, this.location = s, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, t);
    }
    e(t, Error), t.buildMessage = function(i, r) {
      var l = {
        literal: function(c) {
          return '"' + o(c.text) + '"';
        },
        class: function(c) {
          var d = "", g;
          for (g = 0; g < c.parts.length; g++)
            d += c.parts[g] instanceof Array ? f(c.parts[g][0]) + "-" + f(c.parts[g][1]) : f(c.parts[g]);
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
      function a(c) {
        return c ? '"' + o(c) + '"' : "end of input";
      }
      return "Expected " + h(i) + " but " + a(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var l = {}, s = { start: dt }, o = dt, f = "&", u = Ge("&", !1), h = function(b, W) {
        return { type: "and", lhs: b, rhs: W };
      }, a = "(", c = Ge("(", !1), d = ")", g = Ge(")", !1), _ = "|", p = Ge("|", !1), m = function(b, W) {
        return { type: "or", lhs: b, rhs: W };
      }, w = "!", A = Ge("!", !1), z = function(b) {
        return { type: "negation", feature: b };
      }, M = "=", E = Ge("=", !1), D = function(b, W) {
        return { type: "feature", col: b, vals: [W] };
      }, I = function(b, W) {
        return { type: "feature", col: b, vals: W };
      }, v = function(b) {
        return { type: "feature", col: b, vals: [1] };
      }, k = lt("[]-enclosed list of feature values"), q = "[", Z = Ge("[", !1), G = "]", N = Ge("]", !1), R = function(b, W) {
        return [...b, W];
      }, C = ",", P = Ge(",", !1), H = function(b) {
        return b;
      }, K = lt("feature value"), $ = /^[^'"&|!]/, re = qe(["'", '"', "&", "|", "!"], !0, !1), le = function(b) {
        return b.join("");
      }, be = lt("feature name"), ce = lt("'ANY' keyword"), Se = "ANY", ze = Ge("ANY", !1), Re = function() {
        return { type: "base" };
      }, Ne = /^['"]/, oe = qe(["'", '"'], !1, !1), xe = lt("whitespace"), it = /^[ \t\n\r]/, rt = qe([" ", "	", `
`, "\r"], !1, !1), S = 0, Pe = [{ line: 1, column: 1 }], ke = 0, Q = [], J = 0, Fe;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        o = s[r.startRule];
      }
      function Ge(b, W) {
        return { type: "literal", text: b, ignoreCase: W };
      }
      function qe(b, W, te) {
        return {
          type: "class",
          parts: b,
          inverted: W,
          ignoreCase: te
        };
      }
      function tt() {
        return { type: "end" };
      }
      function lt(b) {
        return { type: "other", description: b };
      }
      function ct(b) {
        var W = Pe[b], te;
        if (W)
          return W;
        for (te = b - 1; !Pe[te]; )
          te--;
        for (W = Pe[te], W = {
          line: W.line,
          column: W.column
        }; te < b; )
          i.charCodeAt(te) === 10 ? (W.line++, W.column = 1) : W.column++, te++;
        return Pe[b] = W, W;
      }
      function ht(b, W) {
        var te = ct(b), O = ct(W);
        return {
          start: {
            offset: b,
            line: te.line,
            column: te.column
          },
          end: {
            offset: W,
            line: O.line,
            column: O.column
          }
        };
      }
      function he(b) {
        S < ke || (S > ke && (ke = S, Q = []), Q.push(b));
      }
      function yt(b, W, te) {
        return new t(
          t.buildMessage(b, W),
          b,
          W,
          te
        );
      }
      function dt() {
        var b;
        return b = U(), b;
      }
      function ot() {
        var b;
        return b = Xe(), b === l && (b = vt(), b === l && (b = Xt(), b === l && (b = j()))), b;
      }
      function U() {
        var b;
        return b = we(), b === l && (b = Oe(), b === l && (b = ot())), b;
      }
      function we() {
        var b, W, te, O, _e, ye, Be, Le, nt, Ze, Kt, Te, St, kt;
        return b = S, W = ot(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 38 ? (O = f, S++) : (O = l, J === 0 && he(u)), O !== l ? (_e = ee(), _e !== l ? (ye = U(), ye !== l ? (W = h(W, ye), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, i.charCodeAt(S) === 40 ? (W = a, S++) : (W = l, J === 0 && he(c)), W !== l ? (te = ee(), te !== l ? (O = U(), O !== l ? (_e = ee(), _e !== l ? (i.charCodeAt(S) === 41 ? (ye = d, S++) : (ye = l, J === 0 && he(g)), ye !== l ? (Be = ee(), Be !== l ? (i.charCodeAt(S) === 38 ? (Le = f, S++) : (Le = l, J === 0 && he(u)), Le !== l ? (nt = ee(), nt !== l ? (Ze = U(), Ze !== l ? (W = h(O, Ze), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, W = ot(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 38 ? (O = f, S++) : (O = l, J === 0 && he(u)), O !== l ? (_e = ee(), _e !== l ? (i.charCodeAt(S) === 40 ? (ye = a, S++) : (ye = l, J === 0 && he(c)), ye !== l ? (Be = ee(), Be !== l ? (Le = U(), Le !== l ? (nt = ee(), nt !== l ? (i.charCodeAt(S) === 41 ? (Ze = d, S++) : (Ze = l, J === 0 && he(g)), Ze !== l ? (W = h(W, Le), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, i.charCodeAt(S) === 40 ? (W = a, S++) : (W = l, J === 0 && he(c)), W !== l ? (te = ee(), te !== l ? (O = U(), O !== l ? (_e = ee(), _e !== l ? (i.charCodeAt(S) === 41 ? (ye = d, S++) : (ye = l, J === 0 && he(g)), ye !== l ? (Be = ee(), Be !== l ? (i.charCodeAt(S) === 38 ? (Le = f, S++) : (Le = l, J === 0 && he(u)), Le !== l ? (nt = ee(), nt !== l ? (i.charCodeAt(S) === 40 ? (Ze = a, S++) : (Ze = l, J === 0 && he(c)), Ze !== l ? (Kt = ee(), Kt !== l ? (Te = U(), Te !== l ? (St = ee(), St !== l ? (i.charCodeAt(S) === 41 ? (kt = d, S++) : (kt = l, J === 0 && he(g)), kt !== l ? (W = h(O, Te), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)))), b;
      }
      function Oe() {
        var b, W, te, O, _e, ye, Be, Le, nt, Ze, Kt, Te, St, kt;
        return b = S, W = ot(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 124 ? (O = _, S++) : (O = l, J === 0 && he(p)), O !== l ? (_e = ee(), _e !== l ? (ye = U(), ye !== l ? (W = m(W, ye), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, i.charCodeAt(S) === 40 ? (W = a, S++) : (W = l, J === 0 && he(c)), W !== l ? (te = ee(), te !== l ? (O = U(), O !== l ? (_e = ee(), _e !== l ? (i.charCodeAt(S) === 41 ? (ye = d, S++) : (ye = l, J === 0 && he(g)), ye !== l ? (Be = ee(), Be !== l ? (i.charCodeAt(S) === 124 ? (Le = _, S++) : (Le = l, J === 0 && he(p)), Le !== l ? (nt = ee(), nt !== l ? (Ze = U(), Ze !== l ? (W = m(O, Ze), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, W = ot(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 124 ? (O = _, S++) : (O = l, J === 0 && he(p)), O !== l ? (_e = ee(), _e !== l ? (i.charCodeAt(S) === 40 ? (ye = a, S++) : (ye = l, J === 0 && he(c)), ye !== l ? (Be = ee(), Be !== l ? (Le = U(), Le !== l ? (nt = ee(), nt !== l ? (i.charCodeAt(S) === 41 ? (Ze = d, S++) : (Ze = l, J === 0 && he(g)), Ze !== l ? (W = m(W, Le), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, i.charCodeAt(S) === 40 ? (W = a, S++) : (W = l, J === 0 && he(c)), W !== l ? (te = ee(), te !== l ? (O = U(), O !== l ? (_e = ee(), _e !== l ? (i.charCodeAt(S) === 41 ? (ye = d, S++) : (ye = l, J === 0 && he(g)), ye !== l ? (Be = ee(), Be !== l ? (i.charCodeAt(S) === 124 ? (Le = _, S++) : (Le = l, J === 0 && he(p)), Le !== l ? (nt = ee(), nt !== l ? (i.charCodeAt(S) === 40 ? (Ze = a, S++) : (Ze = l, J === 0 && he(c)), Ze !== l ? (Kt = ee(), Kt !== l ? (Te = U(), Te !== l ? (St = ee(), St !== l ? (i.charCodeAt(S) === 41 ? (kt = d, S++) : (kt = l, J === 0 && he(g)), kt !== l ? (W = m(O, Te), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)))), b;
      }
      function Xe() {
        var b, W, te, O, _e, ye, Be, Le, nt;
        return b = S, i.charCodeAt(S) === 33 ? (W = w, S++) : (W = l, J === 0 && he(A)), W !== l ? (te = ee(), te !== l ? (O = ot(), O !== l ? (_e = ee(), _e !== l ? (W = z(O), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, i.charCodeAt(S) === 33 ? (W = w, S++) : (W = l, J === 0 && he(A)), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 40 ? (O = a, S++) : (O = l, J === 0 && he(c)), O !== l ? (_e = ee(), _e !== l ? (ye = U(), ye !== l ? (Be = ee(), Be !== l ? (i.charCodeAt(S) === 41 ? (Le = d, S++) : (Le = l, J === 0 && he(g)), Le !== l ? (nt = ee(), nt !== l ? (W = z(ye), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)), b;
      }
      function vt() {
        var b, W, te, O, _e, ye;
        return b = S, W = It(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 61 ? (O = M, S++) : (O = l, J === 0 && he(E)), O !== l ? (_e = ee(), _e !== l ? (ye = zt(), ye !== l ? (W = D(W, ye), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, W = It(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 61 ? (O = M, S++) : (O = l, J === 0 && he(E)), O !== l ? (_e = ee(), _e !== l ? (ye = Yt(), ye !== l ? (W = I(W, ye), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)), b;
      }
      function Xt() {
        var b, W, te;
        return b = S, W = It(), W !== l ? (te = ee(), te !== l ? (W = v(W), b = W) : (S = b, b = l)) : (S = b, b = l), b;
      }
      function Yt() {
        var b, W, te, O, _e, ye, Be;
        if (J++, b = S, i.charCodeAt(S) === 91 ? (W = q, S++) : (W = l, J === 0 && he(Z)), W !== l)
          if (te = ee(), te !== l) {
            for (O = [], _e = Wt(); _e !== l; )
              O.push(_e), _e = Wt();
            O !== l ? (_e = zt(), _e !== l ? (ye = ee(), ye !== l ? (i.charCodeAt(S) === 93 ? (Be = G, S++) : (Be = l, J === 0 && he(N)), Be !== l ? (W = R(O, _e), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l);
          } else
            S = b, b = l;
        else
          S = b, b = l;
        return J--, b === l && (W = l, J === 0 && he(k)), b;
      }
      function Wt() {
        var b, W, te, O, _e;
        return b = S, W = zt(), W !== l ? (te = ee(), te !== l ? (i.charCodeAt(S) === 44 ? (O = C, S++) : (O = l, J === 0 && he(P)), O !== l ? (_e = ee(), _e !== l ? (W = H(W), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b;
      }
      function zt() {
        var b, W, te, O;
        if (J++, b = S, W = We(), W !== l) {
          if (te = [], $.test(i.charAt(S)) ? (O = i.charAt(S), S++) : (O = l, J === 0 && he(re)), O !== l)
            for (; O !== l; )
              te.push(O), $.test(i.charAt(S)) ? (O = i.charAt(S), S++) : (O = l, J === 0 && he(re));
          else
            te = l;
          te !== l ? (O = We(), O !== l ? (W = le(te), b = W) : (S = b, b = l)) : (S = b, b = l);
        } else
          S = b, b = l;
        return J--, b === l && (W = l, J === 0 && he(K)), b;
      }
      function It() {
        var b, W, te, O;
        if (J++, b = S, W = We(), W !== l) {
          if (te = [], $.test(i.charAt(S)) ? (O = i.charAt(S), S++) : (O = l, J === 0 && he(re)), O !== l)
            for (; O !== l; )
              te.push(O), $.test(i.charAt(S)) ? (O = i.charAt(S), S++) : (O = l, J === 0 && he(re));
          else
            te = l;
          te !== l ? (O = We(), O !== l ? (W = le(te), b = W) : (S = b, b = l)) : (S = b, b = l);
        } else
          S = b, b = l;
        return J--, b === l && (W = l, J === 0 && he(be)), b;
      }
      function j() {
        var b, W, te, O, _e, ye, Be, Le;
        return J++, b = S, W = ee(), W !== l ? (i.substr(S, 3) === Se ? (te = Se, S += 3) : (te = l, J === 0 && he(ze)), te !== l ? (O = ee(), O !== l ? (W = Re(), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l), b === l && (b = S, W = ee(), W !== l ? (i.charCodeAt(S) === 40 ? (te = a, S++) : (te = l, J === 0 && he(c)), te !== l ? (O = ee(), O !== l ? (i.substr(S, 3) === Se ? (_e = Se, S += 3) : (_e = l, J === 0 && he(ze)), _e !== l ? (ye = ee(), ye !== l ? (i.charCodeAt(S) === 41 ? (Be = d, S++) : (Be = l, J === 0 && he(g)), Be !== l ? (Le = ee(), Le !== l ? (W = Re(), b = W) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)) : (S = b, b = l)), J--, b === l && (W = l, J === 0 && he(ce)), b;
      }
      function We() {
        var b;
        return Ne.test(i.charAt(S)) ? (b = i.charAt(S), S++) : (b = l, J === 0 && he(oe)), b;
      }
      function ee() {
        var b, W;
        for (J++, b = [], it.test(i.charAt(S)) ? (W = i.charAt(S), S++) : (W = l, J === 0 && he(rt)); W !== l; )
          b.push(W), it.test(i.charAt(S)) ? (W = i.charAt(S), S++) : (W = l, J === 0 && he(rt));
        return J--, b === l && (W = l, J === 0 && he(xe)), b;
      }
      if (Fe = o(), Fe !== l && S === i.length)
        return Fe;
      throw Fe !== l && S < i.length && he(tt()), yt(
        Q,
        ke < i.length ? i.charAt(ke) : null,
        ke < i.length ? ht(ke, ke + 1) : ht(ke, ke)
      );
    }
    return {
      SyntaxError: t,
      parse: n
    };
  }()
), H1 = "ANY";
function hn(e, t = !1, n = !1) {
  if (e.type == "base")
    return H1;
  if (e.type == "feature") {
    let i = e;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (e.type == "negation") {
    let i = e;
    return "!" + hn(
      i.feature,
      Mt(i.feature, e),
      n
    );
  } else if (e.type == "and" || e.type == "or") {
    let i = e, r = t ? "(" : "";
    return r += hn(
      i.lhs,
      Mt(i.lhs, e),
      n
    ), r += e.type == "and" ? " & " : " | ", r += hn(
      i.rhs,
      Mt(i.rhs, e),
      n
    ), r += t ? ")" : "", r;
  }
  return "";
}
function Vi(e, t) {
  if (e.type == "base")
    return !0;
  if (e.type == "feature") {
    let n = e;
    if (!t.hasOwnProperty(n.col))
      throw new Error(`Unexpected feature column '${n.col}'`);
    let i = t[n.col];
    return n.vals.forEach((r) => {
      if (!i.includes(r))
        throw new Error(`Feature column '${n.col}' cannot take value '${r}'`);
    }), !0;
  } else {
    if (e.type == "negation")
      return Vi(e.feature, t);
    if (e.type == "and" || e.type == "or")
      return Vi(e.lhs, t) && Vi(e.rhs, t);
  }
  return !0;
}
function el(e, t) {
  let n = V1.parse(e);
  return t && !Vi(n, t) ? null : n;
}
function vs(e, t, n) {
  const i = e.slice();
  return i[28] = t[n], i[30] = n, i;
}
function Ss(e) {
  let t, n, i, r, l, s = (
    /*visibleStart*/
    e[6] > 0 && ks(e)
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
    f[h] = Ns(vs(e, o, h));
  let u = !!/*maxItems*/
  e[3] && /*visibleStart*/
  e[6] + /*maxItems*/
  e[3] < /*options*/
  e[5].length && Rs(e);
  return {
    c() {
      t = V("div"), n = V("div"), s && s.c(), i = se();
      for (let h = 0; h < f.length; h += 1)
        f[h].c();
      r = se(), u && u.c(), y(n, "id", "menu"), y(n, "role", "menu"), y(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), x(
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
      Y(h, t, a), L(t, n), s && s.m(n, null), L(n, i);
      for (let c = 0; c < f.length; c += 1)
        f[c].m(n, null);
      L(n, r), u && u.m(n, null), e[18](n), l = !0;
    },
    p(h, a) {
      if (/*visibleStart*/
      h[6] > 0 ? s ? (s.p(h, a), a & /*visibleStart*/
      64 && T(s, 1)) : (s = ks(h), s.c(), T(s, 1), s.m(n, i)) : s && (Ae(), B(s, 1, 1, () => {
        s = null;
      }), Ce()), a & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
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
          const d = vs(h, o, c);
          f[c] ? f[c].p(d, a) : (f[c] = Ns(d), f[c].c(), f[c].m(n, r));
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
      104 && T(u, 1)) : (u = Rs(h), u.c(), T(u, 1), u.m(n, null)) : u && (Ae(), B(u, 1, 1, () => {
        u = null;
      }), Ce()), (!l || a & /*left*/
      256) && x(
        n,
        "left",
        /*left*/
        h[8] + "px"
      ), (!l || a & /*top*/
      16) && x(
        n,
        "top",
        /*top*/
        h[4] + "px"
      );
    },
    i(h) {
      l || (T(s), T(u), l = !0);
    },
    o(h) {
      B(s), B(u), l = !1;
    },
    d(h) {
      h && X(t), s && s.d(), Lt(f, h), u && u.d(), e[18](null);
    }
  };
}
function ks(e) {
  let t, n, i, r, l, s;
  return n = new Qe({ props: { icon: c1 } }), {
    c() {
      t = V("div"), ae(n.$$.fragment), y(t, "role", "option"), y(t, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      e[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, f) {
      Y(o, t, f), fe(n, t, null), r = !0, l || (s = [
        ne(t, "mousedown", On(et(Y1))),
        ne(t, "click", et(
          /*click_handler*/
          e[14]
        ))
      ], l = !0);
    },
    p(o, f) {
      (!r || f & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && y(t, "class", i);
    },
    i(o) {
      r || (T(n.$$.fragment, o), r = !0);
    },
    o(o) {
      B(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && X(t), ue(n), l = !1, Ve(s);
    }
  };
}
function Ns(e) {
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
  )) + "", i, r, l, s;
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
      t = V("div"), i = me(n), y(t, "role", "option"), y(t, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      e[2]), de(
        t,
        "bg-slate-100",
        /*active*/
        e[0] === /*idx*/
        e[30] + /*visibleStart*/
        e[6]
      );
    },
    m(f, u) {
      Y(f, t, u), L(t, i), l || (s = [
        ne(t, "mouseenter", o),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        ),
        ne(t, "mousedown", On(et(j1))),
        ne(t, "click", et(function() {
          fi(
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
      ], l = !0);
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
      )) + "") && De(i, n), u & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      e[2]) && y(t, "class", r), u & /*menuItemClass, active, visibleStart*/
      69 && de(
        t,
        "bg-slate-100",
        /*active*/
        e[0] === /*idx*/
        e[30] + /*visibleStart*/
        e[6]
      );
    },
    d(f) {
      f && X(t), l = !1, Ve(s);
    }
  };
}
function Rs(e) {
  let t, n, i, r, l, s;
  return n = new Qe({ props: { icon: g1 } }), {
    c() {
      t = V("div"), ae(n.$$.fragment), y(t, "role", "option"), y(t, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      e[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, f) {
      Y(o, t, f), fe(n, t, null), r = !0, l || (s = [
        ne(t, "mousedown", On(et(G1))),
        ne(t, "click", et(
          /*click_handler_1*/
          e[17]
        ))
      ], l = !0);
    },
    p(o, f) {
      (!r || f & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && y(t, "class", i);
    },
    i(o) {
      r || (T(n.$$.fragment, o), r = !0);
    },
    o(o) {
      B(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && X(t), ue(n), l = !1, Ve(s);
    }
  };
}
function X1(e) {
  let t, n, i = (
    /*top*/
    e[4] !== void 0 && Ss(e)
  );
  return {
    c() {
      i && i.c(), t = ft();
    },
    m(r, l) {
      i && i.m(r, l), Y(r, t, l), n = !0;
    },
    p(r, [l]) {
      /*top*/
      r[4] !== void 0 ? i ? (i.p(r, l), l & /*top*/
      16 && T(i, 1)) : (i = Ss(r), i.c(), T(i, 1), i.m(t.parentNode, t)) : i && (Ae(), B(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(r) {
      n || (T(i), n = !0);
    },
    o(r) {
      B(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && X(t);
    }
  };
}
const Y1 = () => {
}, j1 = () => {
}, G1 = () => {
};
function U1(e, t, n) {
  const i = Dt(), r = [
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
  function s(R, C) {
    const P = document.createElement("div");
    document.body.appendChild(P);
    const H = P.style, K = getComputedStyle(R);
    H.whiteSpace = "pre-wrap", H.wordWrap = "break-word", H.position = "absolute", H.visibility = "hidden", r.forEach((le) => {
      H[le] = K[le];
    }), l ? R.scrollHeight > parseInt(K.height) && (H.overflowY = "scroll") : H.overflow = "hidden", P.textContent = R.value.substring(0, C);
    const $ = document.createElement("span");
    $.textContent = R.value.substring(C) || ".", P.appendChild($);
    const re = {
      top: $.offsetTop + parseInt(K.borderTopWidth),
      left: $.offsetLeft + parseInt(K.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: $.offsetHeight
    };
    return P.remove(), re;
  }
  let { ref: o } = t, { resolveFn: f } = t, { replaceFn: u } = t, { menuItemTextFn: h = null } = t, { menuItemClass: a = "" } = t, { active: c = null } = t, { visible: d = !1 } = t, { maxItems: g = null } = t, _, p, m, w = [], A;
  async function z(R, C) {
    let P = await f(R, C);
    P.length !== 0 ? n(5, w = P) : M();
  }
  function M() {
    setTimeout(
      () => {
        n(5, w = []), n(8, p = void 0), n(4, m = void 0), A = void 0;
      },
      0
    );
  }
  function E(R) {
    return () => {
      const C = o.value.substr(0, A), P = w[R], H = u(P, o.value[A], C), K = o.value.substr(o.selectionStart), $ = `${C}${H}${K}`;
      n(10, o.value = $, o);
      const re = o.value.length - K.length;
      o.setSelectionRange(re, re), M(), o.focus(), setTimeout(() => i("replace", o.value), 100);
    };
  }
  function D(R) {
    const C = o.selectionStart, P = o.value.slice(0, C), H = P.split(/[\s\[\]\(\)]/), K = H[H.length - 1], $ = P.endsWith(K) ? P.length - K.length : -1, re = P[$];
    if (!(re == '"' || re == "'")) {
      M();
      return;
    }
    const be = P.slice($ + 1);
    z(be, P);
    const ce = s(o, C), { top: Se, left: ze } = o.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, p = window.scrollX + ce.left + ze + o.scrollLeft), n(4, m = window.scrollY + ce.top + Se + ce.height - o.scrollTop), A = $;
      },
      0
    );
  }
  function I(R) {
    let C = !1;
    if (A !== void 0)
      switch (R.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, w.length - 1)), C = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), C = !0;
          break;
        case "Enter":
        case "Tab":
          E(c)(), C = !0;
          break;
      }
    if (C)
      return R.preventDefault(), R.stopPropagation(), !1;
  }
  let v = 0;
  const k = () => n(6, v = Math.max(0, v - g)), q = (R) => n(0, c = R + v), Z = () => n(0, c = null), G = () => n(6, v = Math.min(v + g, w.length - g));
  function N(R) {
    ve[R ? "unshift" : "push"](() => {
      _ = R, n(7, _);
    });
  }
  return e.$$set = (R) => {
    "ref" in R && n(10, o = R.ref), "resolveFn" in R && n(12, f = R.resolveFn), "replaceFn" in R && n(13, u = R.replaceFn), "menuItemTextFn" in R && n(1, h = R.menuItemTextFn), "menuItemClass" in R && n(2, a = R.menuItemClass), "active" in R && n(0, c = R.active), "visible" in R && n(11, d = R.visible), "maxItems" in R && n(3, g = R.maxItems);
  }, e.$$.update = () => {
    e.$$.dirty & /*top*/
    16 && n(11, d = m !== void 0), e.$$.dirty & /*ref*/
    1024 && o && (o.addEventListener("input", D), o.addEventListener("keydown", I)), e.$$.dirty & /*active, maxItems, options, visibleStart*/
    105 && c != null && g < w.length && (c >= v + g && n(6, v = c - g + 1), c < v && n(6, v = c));
  }, [
    c,
    h,
    a,
    g,
    m,
    w,
    v,
    _,
    p,
    E,
    o,
    d,
    f,
    u,
    k,
    q,
    Z,
    G,
    N
  ];
}
class K1 extends je {
  constructor(t) {
    super(), Ye(this, t, U1, X1, He, {
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
function zs(e) {
  let t, n;
  return {
    c() {
      t = V("div"), n = me(
        /*errorText*/
        e[1]
      ), y(t, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      Y(i, t, r), L(t, n);
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
      i && X(t);
    }
  };
}
function Q1(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _, p, m, w;
  function A(E) {
    e[15](E);
  }
  let z = {
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
    menuItemTextFn: Z1,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  e[2] !== void 0 && (z.visible = /*showingAutocomplete*/
  e[2]), s = new K1({ props: z }), ve.push(() => Ie(s, "visible", A)), s.$on(
    "replace",
    /*replace_handler*/
    e[16]
  ), h = new Qe({ props: { icon: w1 } }), d = new Qe({ props: { icon: df } });
  let M = !!/*errorText*/
  e[1] && zs(e);
  return {
    c() {
      t = V("div"), n = V("div"), i = V("div"), r = V("textarea"), l = se(), ae(s.$$.fragment), f = se(), u = V("button"), ae(h.$$.fragment), a = se(), c = V("button"), ae(d.$$.fragment), _ = se(), M && M.c(), y(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"), y(r, "placeholder", "Enter a slice definition..."), y(i, "class", "relative w-full flex-auto mr-2"), y(u, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"), y(u, "title", "Cancel the edit"), y(c, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"), c.disabled = g = !!/*errorText*/
      e[1], y(c, "title", "Save the slice definition"), y(n, "class", "flex w-full"), y(t, "class", "w-full");
    },
    m(E, D) {
      Y(E, t, D), L(t, n), L(n, i), L(i, r), e[12](r), Gi(
        r,
        /*featureText*/
        e[0]
      ), L(i, l), fe(s, i, null), L(n, f), L(n, u), fe(h, u, null), L(n, a), L(n, c), fe(d, c, null), L(t, _), M && M.m(t, null), p = !0, m || (w = [
        ne(
          r,
          "input",
          /*textarea_input_handler*/
          e[13]
        ),
        ne(
          r,
          "blur",
          /*onBlur*/
          e[6]
        ),
        ne(
          r,
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
        ne(c, "mousedown", On(et(J1))),
        ne(c, "click", et(
          /*click_handler_1*/
          e[18]
        ))
      ], m = !0);
    },
    p(E, [D]) {
      D & /*featureText*/
      1 && Gi(
        r,
        /*featureText*/
        E[0]
      );
      const I = {};
      D & /*inputItem*/
      8 && (I.ref = /*inputItem*/
      E[3]), !o && D & /*showingAutocomplete*/
      4 && (o = !0, I.visible = /*showingAutocomplete*/
      E[2], Ee(() => o = !1)), s.$set(I), (!p || D & /*errorText*/
      2 && g !== (g = !!/*errorText*/
      E[1])) && (c.disabled = g), /*errorText*/
      E[1] ? M ? M.p(E, D) : (M = zs(E), M.c(), M.m(t, null)) : M && (M.d(1), M = null);
    },
    i(E) {
      p || (T(s.$$.fragment, E), T(h.$$.fragment, E), T(d.$$.fragment, E), p = !0);
    },
    o(E) {
      B(s.$$.fragment, E), B(h.$$.fragment, E), B(d.$$.fragment, E), p = !1;
    },
    d(E) {
      E && X(t), e[12](null), ue(s), ue(h), ue(d), M && M.d(), m = !1, Ve(w);
    }
  };
}
const Z1 = (e) => e.value, J1 = () => {
};
function x1(e, t, n) {
  const i = Dt();
  let { featureText: r = "" } = t, { positiveOnly: l = !1 } = t, { allowedValues: s = null } = t, o = null, f = !1, u;
  Tn(() => {
    u && u.focus();
  });
  let h = !1;
  function a() {
    try {
      let E = el(r.trim(), s);
      n(1, o = null);
    } catch (E) {
      n(1, o = E);
    }
    n(11, h = !1);
  }
  function c() {
    i("cancel");
  }
  function d(E, D) {
    if (!s)
      return [];
    let I = D.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!I)
      return Object.keys(s).filter((k) => k.toLocaleLowerCase().includes(E.toLocaleLowerCase())).map((k) => ({ value: k, type: "col" }));
    let v = I[1];
    return s[v].filter((k) => k.toLocaleLowerCase().includes(E.toLocaleLowerCase())).map((k) => ({ value: k, type: "val" }));
  }
  function g(E, D, I) {
    return l ? `${D}${E.value}${D}` : E.type == "col" ? `${D}${E.value}${D} = ` : `${D}${E.value}${D}`;
  }
  function _(E) {
    ve[E ? "unshift" : "push"](() => {
      u = E, n(3, u);
    });
  }
  function p() {
    r = this.value, n(0, r);
  }
  const m = (E) => {
    if (E.key === "Enter")
      return !o && !f && i("save", r.trim()), !1;
  };
  function w(E) {
    f = E, n(2, f);
  }
  const A = (E) => {
    n(0, r = E.detail), a();
  }, z = () => i("cancel"), M = () => {
    i("save", r.trim());
  };
  return e.$$set = (E) => {
    "featureText" in E && n(0, r = E.featureText), "positiveOnly" in E && n(9, l = E.positiveOnly), "allowedValues" in E && n(10, s = E.allowedValues);
  }, e.$$.update = () => {
    e.$$.dirty & /*featureText, scheduledParse*/
    2049 && r && r.length > 0 && !h && (n(11, h = !0), setTimeout(a, 1e3));
  }, [
    r,
    o,
    f,
    u,
    i,
    a,
    c,
    d,
    g,
    l,
    s,
    h,
    _,
    p,
    m,
    w,
    A,
    z,
    M
  ];
}
class _f extends je {
  constructor(t) {
    super(), Ye(this, t, x1, Q1, He, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
function Ms(e) {
  let t, n;
  return t = new Qe({ props: { icon: df } }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function $1(e) {
  let t, n, i, r, l, s = (
    /*checked*/
    e[0] && Ms()
  );
  return {
    c() {
      t = V("button"), s && s.c(), y(t, "class", n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (e[1] != null ? (
        /*colorClass*/
        e[1]
      ) : (
        /*checked*/
        e[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
      )) + " svelte-1xi29pn");
    },
    m(o, f) {
      Y(o, t, f), s && s.m(t, null), i = !0, r || (l = ne(
        t,
        "click",
        /*click_handler*/
        e[3]
      ), r = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? s ? (s.p(o, f), f & /*checked*/
      1 && T(s, 1)) : (s = Ms(), s.c(), T(s, 1), s.m(t, null)) : s && (Ae(), B(s, 1, 1, () => {
        s = null;
      }), Ce()), (!i || f & /*colorClass, checked*/
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
      i || (T(s), i = !0);
    },
    o(o) {
      B(s), i = !1;
    },
    d(o) {
      o && X(t), s && s.d(), r = !1, l();
    }
  };
}
function e0(e, t, n) {
  let { checked: i = !1 } = t, { colorClass: r = null } = t;
  const l = Dt(), s = (o) => {
    n(0, i = !i), l("change", i);
  };
  return e.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, r = o.colorClass);
  }, [i, r, l, s];
}
class mf extends je {
  constructor(t) {
    super(), Ye(this, t, e0, $1, He, { checked: 0, colorClass: 1 });
  }
}
function As(e, t, n) {
  const i = e.slice();
  return i[43] = t[n], i;
}
function Cs(e, t, n) {
  const i = e.slice();
  i[46] = t[n];
  const r = (
    /*sliceForScores*/
    i[20].metrics[
      /*name*/
      i[46]
    ]
  );
  return i[47] = r, i;
}
function Es(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _;
  i = new mf({
    props: { checked: (
      /*isSelected*/
      e[15]
    ) }
  }), i.$on(
    "change",
    /*change_handler*/
    e[30]
  );
  const p = [n0, t0], m = [];
  function w(v, k) {
    return (
      /*isEditing*/
      v[0] ? 0 : 1
    );
  }
  s = w(e), o = m[s] = p[s](e);
  let A = (
    /*metricNames*/
    e[4]
  ), z = [];
  for (let v = 0; v < A.length; v += 1)
    z[v] = qs(Cs(e, A, v));
  const M = (v) => B(z[v], 1, 1, () => {
    z[v] = null;
  }), E = [g0, d0], D = [];
  function I(v, k) {
    return (
      /*showScores*/
      v[3] ? 0 : 1
    );
  }
  return h = I(e), a = D[h] = E[h](e), {
    c() {
      t = V("div"), n = V("div"), ae(i.$$.fragment), r = se(), l = V("div"), o.c(), f = se();
      for (let v = 0; v < z.length; v += 1)
        z[v].c();
      u = se(), a.c(), y(n, "class", "p-2 svelte-1xon0ta"), x(n, "width", ut.Checkbox + "px"), y(l, "class", "py-2 text-xs svelte-1xon0ta"), x(l, "width", ut.FeatureList - qi * /*maxIndent*/
      (e[12] - /*indent*/
      e[13]) + "px"), de(
        l,
        "opacity-50",
        /*revertedScores*/
        e[18]
      ), y(t, "class", c = "slice-row " + /*rowClass*/
      (e[11] ? (
        /*rowClass*/
        e[11]
      ) : "bg-white") + " inline-flex items-center svelte-1xon0ta"), x(t, "margin-left", qi * /*maxIndent*/
      (e[12] - /*indent*/
      e[13]) + "px");
    },
    m(v, k) {
      Y(v, t, k), L(t, n), fe(i, n, null), L(t, r), L(t, l), m[s].m(l, null), L(t, f);
      for (let q = 0; q < z.length; q += 1)
        z[q].m(t, null);
      L(t, u), D[h].m(t, null), d = !0, g || (_ = [
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
      ], g = !0);
    },
    p(v, k) {
      const q = {};
      k[0] & /*isSelected*/
      32768 && (q.checked = /*isSelected*/
      v[15]), i.$set(q);
      let Z = s;
      if (s = w(v), s === Z ? m[s].p(v, k) : (Ae(), B(m[Z], 1, 1, () => {
        m[Z] = null;
      }), Ce(), o = m[s], o ? o.p(v, k) : (o = m[s] = p[s](v), o.c()), T(o, 1), o.m(l, null)), (!d || k[0] & /*maxIndent, indent*/
      12288) && x(l, "width", ut.FeatureList - qi * /*maxIndent*/
      (v[12] - /*indent*/
      v[13]) + "px"), (!d || k[0] & /*revertedScores*/
      262144) && de(
        l,
        "opacity-50",
        /*revertedScores*/
        v[18]
      ), k[0] & /*metricInfo, metricNames, sliceForScores, scoreCellWidth*/
      1049872) {
        A = /*metricNames*/
        v[4];
        let N;
        for (N = 0; N < A.length; N += 1) {
          const R = Cs(v, A, N);
          z[N] ? (z[N].p(R, k), T(z[N], 1)) : (z[N] = qs(R), z[N].c(), T(z[N], 1), z[N].m(t, u));
        }
        for (Ae(), N = A.length; N < z.length; N += 1)
          M(N);
        Ce();
      }
      let G = h;
      h = I(v), h === G ? D[h].p(v, k) : (Ae(), B(D[G], 1, 1, () => {
        D[G] = null;
      }), Ce(), a = D[h], a ? a.p(v, k) : (a = D[h] = E[h](v), a.c()), T(a, 1), a.m(t, null)), (!d || k[0] & /*rowClass*/
      2048 && c !== (c = "slice-row " + /*rowClass*/
      (v[11] ? (
        /*rowClass*/
        v[11]
      ) : "bg-white") + " inline-flex items-center svelte-1xon0ta")) && y(t, "class", c), (!d || k[0] & /*maxIndent, indent*/
      12288) && x(t, "margin-left", qi * /*maxIndent*/
      (v[12] - /*indent*/
      v[13]) + "px");
    },
    i(v) {
      if (!d) {
        T(i.$$.fragment, v), T(o);
        for (let k = 0; k < A.length; k += 1)
          T(z[k]);
        T(a), d = !0;
      }
    },
    o(v) {
      B(i.$$.fragment, v), B(o), z = z.filter(Boolean);
      for (let k = 0; k < z.length; k += 1)
        B(z[k]);
      B(a), d = !1;
    },
    d(v) {
      v && X(t), ue(i), m[s].d(), Lt(z, v), D[h].d(), g = !1, Ve(_);
    }
  };
}
function t0(e) {
  let t, n, i, r, l, s;
  i = new _n({
    props: {
      feature: xt(
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
      canToggle: xt(
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
    e[14]) && Is(e)
  ), f = (
    /*showButtons*/
    e[19] && Os(e)
  );
  return {
    c() {
      t = V("div"), n = V("div"), ae(i.$$.fragment), r = se(), o && o.c(), l = se(), f && f.c(), x(n, "flex", "0 1 auto"), y(n, "class", "overflow-x-auto"), y(t, "class", "flex pt-1 items-center h-full whitespace-nowrap");
    },
    m(u, h) {
      Y(u, t, h), L(t, n), fe(i, n, null), L(t, r), o && o.m(t, null), L(t, l), f && f.m(t, null), s = !0;
    },
    p(u, h) {
      const a = {};
      h[0] & /*slice, sliceToShow*/
      131074 && (a.feature = xt(
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
      131074 && (a.canToggle = xt(
        /*slice*/
        u[1].feature,
        /*sliceToShow*/
        u[17].feature
      )), h[0] & /*positiveOnly*/
      32 && (a.positiveOnly = /*positiveOnly*/
      u[5]), i.$set(a), /*showButtons*/
      u[19] || /*isSaved*/
      u[14] ? o ? (o.p(u, h), h[0] & /*showButtons, isSaved*/
      540672 && T(o, 1)) : (o = Is(u), o.c(), T(o, 1), o.m(t, l)) : o && (Ae(), B(o, 1, 1, () => {
        o = null;
      }), Ce()), /*showButtons*/
      u[19] ? f ? (f.p(u, h), h[0] & /*showButtons*/
      524288 && T(f, 1)) : (f = Os(u), f.c(), T(f, 1), f.m(t, null)) : f && (Ae(), B(f, 1, 1, () => {
        f = null;
      }), Ce());
    },
    i(u) {
      s || (T(i.$$.fragment, u), T(o), T(f), s = !0);
    },
    o(u) {
      B(i.$$.fragment, u), B(o), B(f), s = !1;
    },
    d(u) {
      u && X(t), ue(i), o && o.d(), f && f.d();
    }
  };
}
function n0(e) {
  let t, n;
  return t = new _f({
    props: {
      featureText: hn(
        xt(
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
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*slice, sliceToShow, positiveOnly*/
      131106 && (l.featureText = hn(
        xt(
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
      i[6]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Is(e) {
  let t, n, i, r, l;
  return n = new Qe({
    props: {
      icon: (
        /*isSaved*/
        e[14] ? Dr : ms
      )
    }
  }), {
    c() {
      t = V("button"), ae(n.$$.fragment), y(t, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), y(t, "title", "Add a new custom slice");
    },
    m(s, o) {
      Y(s, t, o), fe(n, t, null), i = !0, r || (l = ne(
        t,
        "click",
        /*click_handler*/
        e[34]
      ), r = !0);
    },
    p(s, o) {
      const f = {};
      o[0] & /*isSaved*/
      16384 && (f.icon = /*isSaved*/
      s[14] ? Dr : ms), n.$set(f);
    },
    i(s) {
      i || (T(n.$$.fragment, s), i = !0);
    },
    o(s) {
      B(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && X(t), ue(n), r = !1, l();
    }
  };
}
function Os(e) {
  let t, n, i, r, l = !!/*temporarySlice*/
  e[7] && !_t(
    /*temporarySlice*/
    e[7],
    /*slice*/
    e[1]
  ), s, o, f, u, h, a = (
    /*showCreateSliceButton*/
    e[16] && Ts(e)
  );
  i = new Qe({ props: { icon: af } });
  let c = l && Ps(e);
  return o = new gf({
    props: {
      buttonClass: "bg-transparent ml-1 px-1 hover:opacity-60",
      $$slots: {
        options: [r0],
        "button-content": [i0]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      a && a.c(), t = se(), n = V("button"), ae(i.$$.fragment), r = se(), c && c.c(), s = se(), ae(o.$$.fragment), y(n, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), y(n, "title", "Temporarily modify the slice definition");
    },
    m(d, g) {
      a && a.m(d, g), Y(d, t, g), Y(d, n, g), fe(i, n, null), Y(d, r, g), c && c.m(d, g), Y(d, s, g), fe(o, d, g), f = !0, u || (h = ne(
        n,
        "click",
        /*click_handler_2*/
        e[36]
      ), u = !0);
    },
    p(d, g) {
      /*showCreateSliceButton*/
      d[16] ? a ? (a.p(d, g), g[0] & /*showCreateSliceButton*/
      65536 && T(a, 1)) : (a = Ts(d), a.c(), T(a, 1), a.m(t.parentNode, t)) : a && (Ae(), B(a, 1, 1, () => {
        a = null;
      }), Ce()), g[0] & /*temporarySlice, slice*/
      130 && (l = !!/*temporarySlice*/
      d[7] && !_t(
        /*temporarySlice*/
        d[7],
        /*slice*/
        d[1]
      )), l ? c ? (c.p(d, g), g[0] & /*temporarySlice, slice*/
      130 && T(c, 1)) : (c = Ps(d), c.c(), T(c, 1), c.m(s.parentNode, s)) : c && (Ae(), B(c, 1, 1, () => {
        c = null;
      }), Ce());
      const _ = {};
      g[1] & /*$$scope*/
      524288 && (_.$$scope = { dirty: g, ctx: d }), o.$set(_);
    },
    i(d) {
      f || (T(a), T(i.$$.fragment, d), T(c), T(o.$$.fragment, d), f = !0);
    },
    o(d) {
      B(a), B(i.$$.fragment, d), B(c), B(o.$$.fragment, d), f = !1;
    },
    d(d) {
      a && a.d(d), d && X(t), d && X(n), ue(i), d && X(r), c && c.d(d), d && X(s), ue(o, d), u = !1, h();
    }
  };
}
function Ts(e) {
  let t, n, i, r, l;
  return n = new Qe({ props: { icon: hf } }), {
    c() {
      t = V("button"), ae(n.$$.fragment), y(t, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), y(t, "title", "Add a new custom slice");
    },
    m(s, o) {
      Y(s, t, o), fe(n, t, null), i = !0, r || (l = ne(
        t,
        "click",
        /*click_handler_1*/
        e[35]
      ), r = !0);
    },
    p: ge,
    i(s) {
      i || (T(n.$$.fragment, s), i = !0);
    },
    o(s) {
      B(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && X(t), ue(n), r = !1, l();
    }
  };
}
function Ps(e) {
  let t, n, i, r, l;
  return n = new Qe({ props: { icon: m1 } }), {
    c() {
      t = V("button"), ae(n.$$.fragment), y(t, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), y(t, "title", "Reset the slice definition");
    },
    m(s, o) {
      Y(s, t, o), fe(n, t, null), i = !0, r || (l = [
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
      ], r = !0);
    },
    p: ge,
    i(s) {
      i || (T(n.$$.fragment, s), i = !0);
    },
    o(s) {
      B(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && X(t), ue(n), r = !1, Ve(l);
    }
  };
}
function i0(e) {
  let t, n, i;
  return n = new Qe({
    props: { icon: cf, class: "inline mr-1" }
  }), {
    c() {
      t = V("span"), ae(n.$$.fragment), y(t, "slot", "button-content");
    },
    m(r, l) {
      Y(r, t, l), fe(n, t, null), i = !0;
    },
    p: ge,
    i(r) {
      i || (T(n.$$.fragment, r), i = !0);
    },
    o(r) {
      B(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && X(t), ue(n);
    }
  };
}
function r0(e) {
  let t, n, i, r, l, s, o, f, u, h;
  return {
    c() {
      t = V("div"), n = V("a"), n.textContent = "Search Containing This Slice", i = se(), r = V("a"), r.textContent = "Search Contained In This Slice", l = se(), s = V("a"), s.textContent = "Search Similar Slices", o = se(), f = V("a"), f.textContent = "Search Subslices", y(n, "href", "#"), y(n, "tabindex", "0"), y(n, "role", "menuitem"), y(n, "title", "Search among slices with different features that contain most instances in this slice"), y(r, "href", "#"), y(r, "tabindex", "0"), y(r, "role", "menuitem"), y(r, "title", "Search among slices with different features that are mostly contained in this slice"), y(s, "href", "#"), y(s, "tabindex", "0"), y(s, "role", "menuitem"), y(s, "title", "Search among slices with different features that have high overlap with this slice"), y(f, "href", "#"), y(f, "tabindex", "0"), y(f, "role", "menuitem"), y(f, "title", "Search among slices that are strict subsets of this slice"), y(t, "slot", "options");
    },
    m(a, c) {
      Y(a, t, c), L(t, n), L(t, i), L(t, r), L(t, l), L(t, s), L(t, o), L(t, f), u || (h = [
        ne(
          n,
          "click",
          /*searchContainsSlice*/
          e[22]
        ),
        ne(
          r,
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
    p: ge,
    d(a) {
      a && X(t), u = !1, Ve(h);
    }
  };
}
function l0(e) {
  let t, n, i, r;
  const l = [a0, u0, f0, o0], s = [];
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
  return ~(t = o(e)) && (n = s[t] = l[t](e)), {
    c() {
      n && n.c(), i = ft();
    },
    m(f, u) {
      ~t && s[t].m(f, u), Y(f, i, u), r = !0;
    },
    p(f, u) {
      let h = t;
      t = o(f), t === h ? ~t && s[t].p(f, u) : (n && (Ae(), B(s[h], 1, 1, () => {
        s[h] = null;
      }), Ce()), ~t ? (n = s[t], n ? n.p(f, u) : (n = s[t] = l[t](f), n.c()), T(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(f) {
      r || (T(n), r = !0);
    },
    o(f) {
      B(n), r = !1;
    },
    d(f) {
      ~t && s[t].d(f), f && X(i);
    }
  };
}
function s0(e) {
  let t;
  return {
    c() {
      t = V("span"), t.textContent = "Empty", y(t, "class", "text-slate-600");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && X(t);
    }
  };
}
function o0(e) {
  let t, n;
  return t = new t1({
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
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
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
      i[8]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function f0(e) {
  let t, n;
  return t = new Xc({
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
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.mean = /*metric*/
      i[47].mean), r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.histValues = /*metric*/
      i[47].hist), r[0] & /*scoreCellWidth*/
      256 && (l.width = /*scoreCellWidth*/
      i[8]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function u0(e) {
  let t, n;
  return t = new Jr({
    props: {
      value: (
        /*metric*/
        e[47].share
      ),
      width: (
        /*scoreCellWidth*/
        e[8]
      ),
      $$slots: { caption: [c0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.value = /*metric*/
      i[47].share), r[0] & /*scoreCellWidth*/
      256 && (l.width = /*scoreCellWidth*/
      i[8]), r[0] & /*sliceForScores, metricNames*/
      1048592 | r[1] & /*$$scope*/
      524288 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function a0(e) {
  let t, n;
  return t = new Jr({
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
      $$slots: { caption: [h0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
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
      524288 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function c0(e) {
  let t, n, i = $e(",")(
    /*metric*/
    e[47].count
  ) + "", r, l, s, o, f = $e(".1%")(
    /*metric*/
    e[47].share
  ) + "", u, h;
  return {
    c() {
      t = V("span"), n = V("strong"), r = me(i), l = V("br"), s = V("span"), o = me("("), u = me(f), h = me(")"), x(s, "font-size", "0.7rem"), y(s, "class", "italic text-gray-700"), y(t, "slot", "caption");
    },
    m(a, c) {
      Y(a, t, c), L(t, n), L(n, r), L(t, l), L(t, s), L(s, o), L(s, u), L(s, h);
    },
    p(a, c) {
      c[0] & /*sliceForScores, metricNames*/
      1048592 && i !== (i = $e(",")(
        /*metric*/
        a[47].count
      ) + "") && De(r, i), c[0] & /*sliceForScores, metricNames*/
      1048592 && f !== (f = $e(".1%")(
        /*metric*/
        a[47].share
      ) + "") && De(u, f);
    },
    d(a) {
      a && X(t);
    }
  };
}
function Fs(e) {
  let t, n, i, r, l = $e(".1%")(
    /*metric*/
    e[47].share
  ) + "", s, o;
  return {
    c() {
      t = V("br"), n = se(), i = V("span"), r = me("("), s = me(l), o = me(" of total)"), x(i, "font-size", "0.7rem"), y(i, "class", "italic text-gray-700");
    },
    m(f, u) {
      Y(f, t, u), Y(f, n, u), Y(f, i, u), L(i, r), L(i, s), L(i, o);
    },
    p(f, u) {
      u[0] & /*sliceForScores, metricNames*/
      1048592 && l !== (l = $e(".1%")(
        /*metric*/
        f[47].share
      ) + "") && De(s, l);
    },
    d(f) {
      f && X(t), f && X(n), f && X(i);
    }
  };
}
function h0(e) {
  let t, n, i = $e(".1%")(
    /*metric*/
    e[47].mean
  ) + "", r, l, s = (
    /*metric*/
    e[47].hasOwnProperty("share")
  ), o = s && Fs(e);
  return {
    c() {
      t = V("span"), n = V("strong"), r = me(i), l = se(), o && o.c(), y(t, "slot", "caption");
    },
    m(f, u) {
      Y(f, t, u), L(t, n), L(n, r), L(t, l), o && o.m(t, null);
    },
    p(f, u) {
      u[0] & /*sliceForScores, metricNames*/
      1048592 && i !== (i = $e(".1%")(
        /*metric*/
        f[47].mean
      ) + "") && De(r, i), u[0] & /*sliceForScores, metricNames*/
      1048592 && (s = /*metric*/
      f[47].hasOwnProperty("share")), s ? o ? o.p(f, u) : (o = Fs(f), o.c(), o.m(t, null)) : o && (o.d(1), o = null);
    },
    d(f) {
      f && X(t), o && o.d();
    }
  };
}
function qs(e) {
  let t, n, i, r;
  const l = [s0, l0], s = [];
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
  return ~(n = o(e)) && (i = s[n] = l[n](e)), {
    c() {
      t = V("div"), i && i.c(), y(t, "class", "p-2 pt-3 svelte-1xon0ta"), x(t, "width", (/*metricInfo*/
      e[10][
        /*name*/
        e[46]
      ] && /*metricInfo*/
      e[10][
        /*name*/
        e[46]
      ].visible ? ut.Metric : ut.CollapsedMetric) + "px");
    },
    m(f, u) {
      Y(f, t, u), ~n && s[n].m(t, null), r = !0;
    },
    p(f, u) {
      let h = n;
      n = o(f), n === h ? ~n && s[n].p(f, u) : (i && (Ae(), B(s[h], 1, 1, () => {
        s[h] = null;
      }), Ce()), ~n ? (i = s[n], i ? i.p(f, u) : (i = s[n] = l[n](f), i.c()), T(i, 1), i.m(t, null)) : i = null), (!r || u[0] & /*metricInfo, metricNames*/
      1040) && x(t, "width", (/*metricInfo*/
      f[10][
        /*name*/
        f[46]
      ] && /*metricInfo*/
      f[10][
        /*name*/
        f[46]
      ].visible ? ut.Metric : ut.CollapsedMetric) + "px");
    },
    i(f) {
      r || (T(i), r = !0);
    },
    o(f) {
      B(i), r = !1;
    },
    d(f) {
      f && X(t), ~n && s[n].d();
    }
  };
}
function d0(e) {
  let t;
  return {
    c() {
      t = V("div"), y(t, "class", "svelte-1xon0ta");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && X(t);
    }
  };
}
function g0(e) {
  let t, n, i = (
    /*scoreNames*/
    e[2]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Ls(As(e, i, s));
  const l = (s) => B(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      t = ft();
    },
    m(s, o) {
      for (let f = 0; f < r.length; f += 1)
        r[f].m(s, o);
      Y(s, t, o), n = !0;
    },
    p(s, o) {
      if (o[0] & /*sliceForScores, scoreNames, scoreWidthScalers*/
      1049092) {
        i = /*scoreNames*/
        s[2];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = As(s, i, f);
          r[f] ? (r[f].p(u, o), T(r[f], 1)) : (r[f] = Ls(u), r[f].c(), T(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (Ae(), f = i.length; f < r.length; f += 1)
          l(f);
        Ce();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          T(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        B(r[o]);
      n = !1;
    },
    d(s) {
      Lt(r, s), s && X(t);
    }
  };
}
function Ls(e) {
  let t, n, i, r;
  return n = new Jr({
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
        ] || Ds
      ),
      width: ut.Score - 24
    }
  }), {
    c() {
      t = V("div"), ae(n.$$.fragment), i = se(), y(t, "class", "p-2 pt-3 svelte-1xon0ta"), x(t, "width", ut.Score + "px");
    },
    m(l, s) {
      Y(l, t, s), fe(n, t, null), L(t, i), r = !0;
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
      ] || Ds), n.$set(o);
    },
    i(l) {
      r || (T(n.$$.fragment, l), r = !0);
    },
    o(l) {
      B(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && X(t), ue(n);
    }
  };
}
function _0(e) {
  let t, n, i = !!/*sliceToShow*/
  e[17] && Es(e);
  return {
    c() {
      i && i.c(), t = ft();
    },
    m(r, l) {
      i && i.m(r, l), Y(r, t, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[17] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      131072 && T(i, 1)) : (i = Es(r), i.c(), T(i, 1), i.m(t.parentNode, t)) : i && (Ae(), B(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(r) {
      n || (T(i), n = !0);
    },
    o(r) {
      B(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && X(t);
    }
  };
}
const qi = 24, Ds = (e) => e;
function m0(e, t, n) {
  const i = Dt();
  let { slice: r = null } = t, { scoreNames: l = [] } = t, { showScores: s = !1 } = t, { metricNames: o = [] } = t, { positiveOnly: f = !1 } = t, { valueNames: u = {} } = t, { allowedValues: h = null } = t, { fixedFeatureOrder: a = [] } = t, { customSlice: c = null } = t, { temporarySlice: d = null } = t, { scoreCellWidth: g = 100 } = t, { scoreWidthScalers: _ = {} } = t, { metricInfo: p = {} } = t, { rowClass: m = "" } = t, { maxIndent: w = 0 } = t, { indent: A = 0 } = t, { isSaved: z = !1 } = t, { isSelected: M = !1 } = t, { isEditing: E = !1 } = t, D = !1, { showCreateSliceButton: I = !1 } = t, v, k;
  function q() {
    i("newsearch", {
      type: "containsSlice",
      base_slice: v.feature
    });
  }
  function Z() {
    i("newsearch", {
      type: "containedInSlice",
      base_slice: v.feature
    });
  }
  function G() {
    i("newsearch", {
      type: "subsliceOfSlice",
      base_slice: v.feature
    });
  }
  function N() {
    i("newsearch", {
      type: "similarToSlice",
      base_slice: v.feature
    });
  }
  let R = !1;
  function C(oe) {
    n(18, R = oe);
  }
  const P = (oe) => i("select", !M), H = (oe) => {
    n(0, E = !1), i("endedit");
  }, K = (oe) => {
    let xe = el(oe.detail, h);
    console.log("new feature:", xe), n(0, E = !1), i("endedit"), i("edit", xe);
  };
  function $(oe) {
    gt.call(this, e, oe);
  }
  const re = () => i("saveslice", v), le = () => i("create"), be = () => {
    n(0, E = !0), i("beginedit");
  }, ce = () => {
    C(!1), i("reset");
  }, Se = () => C(!0), ze = () => C(!1), Re = () => n(19, D = !0), Ne = () => n(19, D = !1);
  return e.$$set = (oe) => {
    "slice" in oe && n(1, r = oe.slice), "scoreNames" in oe && n(2, l = oe.scoreNames), "showScores" in oe && n(3, s = oe.showScores), "metricNames" in oe && n(4, o = oe.metricNames), "positiveOnly" in oe && n(5, f = oe.positiveOnly), "valueNames" in oe && n(27, u = oe.valueNames), "allowedValues" in oe && n(6, h = oe.allowedValues), "fixedFeatureOrder" in oe && n(28, a = oe.fixedFeatureOrder), "customSlice" in oe && n(29, c = oe.customSlice), "temporarySlice" in oe && n(7, d = oe.temporarySlice), "scoreCellWidth" in oe && n(8, g = oe.scoreCellWidth), "scoreWidthScalers" in oe && n(9, _ = oe.scoreWidthScalers), "metricInfo" in oe && n(10, p = oe.metricInfo), "rowClass" in oe && n(11, m = oe.rowClass), "maxIndent" in oe && n(12, w = oe.maxIndent), "indent" in oe && n(13, A = oe.indent), "isSaved" in oe && n(14, z = oe.isSaved), "isSelected" in oe && n(15, M = oe.isSelected), "isEditing" in oe && n(0, E = oe.isEditing), "showCreateSliceButton" in oe && n(16, I = oe.showCreateSliceButton);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*customSlice, slice*/
    536870914, e.$$.dirty[0] & /*temporarySlice, customSlice, slice*/
    536871042 && n(17, v = d || c || r), e.$$.dirty[0] & /*revertedScores, customSlice, slice, sliceToShow*/
    537264130 && n(20, k = R ? c || r : v);
  }, [
    E,
    r,
    l,
    s,
    o,
    f,
    h,
    d,
    g,
    _,
    p,
    m,
    w,
    A,
    z,
    M,
    I,
    v,
    R,
    D,
    k,
    i,
    q,
    Z,
    G,
    N,
    C,
    u,
    a,
    c,
    P,
    H,
    K,
    $,
    re,
    le,
    be,
    ce,
    Se,
    ze,
    Re,
    Ne
  ];
}
class bf extends je {
  constructor(t) {
    super(), Ye(
      this,
      t,
      m0,
      _0,
      He,
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
const b0 = (e) => ({ hovering: e & /*hovering*/
1 }), Ws = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function p0(e) {
  let t, n, i, r;
  const l = (
    /*#slots*/
    e[4].default
  ), s = Tt(
    l,
    e,
    /*$$scope*/
    e[3],
    Ws
  );
  return {
    c() {
      t = V("div"), s && s.c(), y(
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
      Y(o, t, f), s && s.m(t, null), n = !0, i || (r = [
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
      9) && Ft(
        s,
        l,
        o,
        /*$$scope*/
        o[3],
        n ? Pt(
          l,
          /*$$scope*/
          o[3],
          f,
          b0
        ) : qt(
          /*$$scope*/
          o[3]
        ),
        Ws
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
      n || (T(s, o), n = !0);
    },
    o(o) {
      B(s, o), n = !1;
    },
    d(o) {
      o && X(t), s && s.d(o), i = !1, Ve(r);
    }
  };
}
function w0(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { hovering: l = !1 } = t, { class: s = "" } = t, { style: o = "" } = t;
  const f = () => n(0, l = !0), u = () => n(0, l = !1);
  return e.$$set = (h) => {
    "hovering" in h && n(0, l = h.hovering), "class" in h && n(1, s = h.class), "style" in h && n(2, o = h.style), "$$scope" in h && n(3, r = h.$$scope);
  }, [l, s, o, r, i, f, u];
}
class y0 extends je {
  constructor(t) {
    super(), Ye(this, t, w0, p0, He, { hovering: 0, class: 1, style: 2 });
  }
}
function Bs(e, t, n) {
  const i = e.slice();
  i[64] = t[n], i[67] = n;
  const r = (
    /*sliceRequestResults*/
    i[8][
      /*slice*/
      i[64].stringRep
    ] || /*slice*/
    i[64]
  );
  return i[65] = r, i;
}
function Vs(e, t, n) {
  const i = e.slice();
  return i[68] = t[n], i[67] = n, i;
}
function Hs(e, t, n) {
  const i = e.slice();
  return i[70] = t[n], i;
}
function Xs(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _, p, m = (
    /*metricNames*/
    e[2]
  ), w = [];
  for (let I = 0; I < m.length; I += 1)
    w[I] = Ys(Hs(e, m, I));
  const A = (I) => B(w[I], 1, 1, () => {
    w[I] = null;
  });
  let z = (
    /*showScores*/
    e[1] && js(e)
  );
  const M = [R0, N0], E = [];
  function D(I, v) {
    return (
      /*showScores*/
      I[1] ? 0 : 1
    );
  }
  return c = D(e), d = E[c] = M[c](e), {
    c() {
      t = V("div"), n = V("div"), i = V("div"), r = se(), l = V("div"), s = V("div"), s.textContent = "Slice", o = se();
      for (let I = 0; I < w.length; I += 1)
        w[I].c();
      f = se(), z && z.c(), u = se(), h = V("div"), a = V("div"), d.c(), y(i, "class", "p-2 w-full h-full"), x(n, "width", ut.Checkbox + "px"), y(n, "class", "svelte-19gw1y6"), y(s, "class", "p-2"), x(l, "width", ut.FeatureList + "px"), y(l, "class", "svelte-19gw1y6"), y(a, "class", "w-full h-full px-4 flex justify-center items-center"), y(h, "class", "bg-slate-100 hover:bg-slate-200 svelte-19gw1y6"), y(t, "class", "text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 rounded-t border-b border-slate-600 svelte-19gw1y6");
    },
    m(I, v) {
      Y(I, t, v), L(t, n), L(n, i), L(t, r), L(t, l), L(l, s), L(t, o);
      for (let k = 0; k < w.length; k += 1)
        w[k].m(t, null);
      L(t, f), z && z.m(t, null), L(t, u), L(t, h), L(h, a), E[c].m(a, null), g = !0, _ || (p = ne(
        h,
        "click",
        /*click_handler_2*/
        e[38]
      ), _ = !0);
    },
    p(I, v) {
      if (v[0] & /*metricInfo, metricNames, clickingColumn, draggingColumn, metricDragStart, metricDragEnd, metricDragEnter, metricDrop*/
      16515084 | v[2] & /*hovering*/
      2048) {
        m = /*metricNames*/
        I[2];
        let q;
        for (q = 0; q < m.length; q += 1) {
          const Z = Hs(I, m, q);
          w[q] ? (w[q].p(Z, v), T(w[q], 1)) : (w[q] = Ys(Z), w[q].c(), T(w[q], 1), w[q].m(t, f));
        }
        for (Ae(), q = m.length; q < w.length; q += 1)
          A(q);
        Ce();
      }
      /*showScores*/
      I[1] ? z ? z.p(I, v) : (z = js(I), z.c(), z.m(t, u)) : z && (z.d(1), z = null);
      let k = c;
      c = D(I), c === k ? E[c].p(I, v) : (Ae(), B(E[k], 1, 1, () => {
        E[k] = null;
      }), Ce(), d = E[c], d ? d.p(I, v) : (d = E[c] = M[c](I), d.c()), T(d, 1), d.m(a, null));
    },
    i(I) {
      if (!g) {
        for (let v = 0; v < m.length; v += 1)
          T(w[v]);
        T(d), g = !0;
      }
    },
    o(I) {
      w = w.filter(Boolean);
      for (let v = 0; v < w.length; v += 1)
        B(w[v]);
      B(d), g = !1;
    },
    d(I) {
      I && X(t), Lt(w, I), z && z.d(), E[c].d(), _ = !1, p();
    }
  };
}
function v0(e) {
  let t, n, i, r, l;
  n = new Qe({ props: { icon: f1 } });
  function s(...o) {
    return (
      /*click_handler_1*/
      e[32](
        /*name*/
        e[70],
        ...o
      )
    );
  }
  return {
    c() {
      t = V("button"), ae(n.$$.fragment), y(t, "class", "bg-transparent opacity-30 hover:opacity-60");
    },
    m(o, f) {
      Y(o, t, f), fe(n, t, null), i = !0, r || (l = ne(t, "click", s), r = !0);
    },
    p(o, f) {
      e = o;
    },
    i(o) {
      i || (T(n.$$.fragment, o), i = !0);
    },
    o(o) {
      B(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && X(t), ue(n), r = !1, l();
    }
  };
}
function S0(e) {
  let t, n, i = (
    /*name*/
    e[70] + ""
  ), r, l, s, o, f, u, h, a, c, d, g, _;
  u = new Qe({ props: { icon: h1 } });
  function p(...w) {
    return (
      /*click_handler*/
      e[29](
        /*name*/
        e[70],
        ...w
      )
    );
  }
  c = new Qe({ props: { icon: a1 } });
  function m() {
    return (
      /*mousedown_handler*/
      e[30](
        /*name*/
        e[70]
      )
    );
  }
  return {
    c() {
      t = V("div"), n = V("div"), r = me(i), l = se(), s = V("div"), o = se(), f = V("button"), ae(u.$$.fragment), h = se(), a = V("button"), ae(c.$$.fragment), y(s, "class", "flex-1"), y(f, "class", "bg-transparent hover:opacity-60"), de(f, "opacity-0", !/*hovering*/
      e[73]), de(f, "disabled", !/*hovering*/
      e[73]), y(a, "class", "ml-2 bg-transparent text-slate-400 cursor-move"), de(a, "opacity-0", !/*hovering*/
      e[73]), de(a, "disabled", !/*hovering*/
      e[73]), y(t, "class", "flex items-center");
    },
    m(w, A) {
      Y(w, t, A), L(t, n), L(n, r), L(t, l), L(t, s), L(t, o), L(t, f), fe(u, f, null), L(t, h), L(t, a), fe(c, a, null), d = !0, g || (_ = [
        ne(f, "click", p),
        ne(a, "mousedown", m),
        ne(
          a,
          "mouseup",
          /*mouseup_handler*/
          e[31]
        )
      ], g = !0);
    },
    p(w, A) {
      e = w, (!d || A[0] & /*metricNames*/
      4) && i !== (i = /*name*/
      e[70] + "") && De(r, i), (!d || A[2] & /*hovering*/
      2048) && de(f, "opacity-0", !/*hovering*/
      e[73]), (!d || A[2] & /*hovering*/
      2048) && de(f, "disabled", !/*hovering*/
      e[73]), (!d || A[2] & /*hovering*/
      2048) && de(a, "opacity-0", !/*hovering*/
      e[73]), (!d || A[2] & /*hovering*/
      2048) && de(a, "disabled", !/*hovering*/
      e[73]);
    },
    i(w) {
      d || (T(u.$$.fragment, w), T(c.$$.fragment, w), d = !0);
    },
    o(w) {
      B(u.$$.fragment, w), B(c.$$.fragment, w), d = !1;
    },
    d(w) {
      w && X(t), ue(u), ue(c), g = !1, Ve(_);
    }
  };
}
function k0(e) {
  let t, n, i, r;
  const l = [S0, v0], s = [];
  function o(f, u) {
    return (
      /*metricInfo*/
      f[3][
        /*name*/
        f[70]
      ].visible ? 0 : 1
    );
  }
  return t = o(e), n = s[t] = l[t](e), {
    c() {
      n.c(), i = ft();
    },
    m(f, u) {
      s[t].m(f, u), Y(f, i, u), r = !0;
    },
    p(f, u) {
      let h = t;
      t = o(f), t === h ? s[t].p(f, u) : (Ae(), B(s[h], 1, 1, () => {
        s[h] = null;
      }), Ce(), n = s[t], n ? n.p(f, u) : (n = s[t] = l[t](f), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      r || (T(n), r = !0);
    },
    o(f) {
      B(n), r = !1;
    },
    d(f) {
      s[t].d(f), f && X(i);
    }
  };
}
function Ys(e) {
  let t, n, i, r, l, s;
  n = new y0({
    props: {
      class: "potential-drop-zone p-2 ",
      $$slots: {
        default: [
          k0,
          ({ hovering: c }) => ({ 73: c }),
          ({ hovering: c }) => [0, 0, c ? 2048 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  });
  function o(...c) {
    return (
      /*dragstart_handler*/
      e[33](
        /*name*/
        e[70],
        ...c
      )
    );
  }
  function f(...c) {
    return (
      /*dragend_handler*/
      e[34](
        /*name*/
        e[70],
        ...c
      )
    );
  }
  function u(...c) {
    return (
      /*dragenter_handler*/
      e[35](
        /*name*/
        e[70],
        ...c
      )
    );
  }
  function h(...c) {
    return (
      /*dragleave_handler*/
      e[36](
        /*name*/
        e[70],
        ...c
      )
    );
  }
  function a(...c) {
    return (
      /*drop_handler*/
      e[37](
        /*name*/
        e[70],
        ...c
      )
    );
  }
  return {
    c() {
      t = V("div"), ae(n.$$.fragment), y(t, "class", "bg-slate-100 hover:bg-slate-200 svelte-19gw1y6"), x(
        t,
        "width",
        /*metricInfo*/
        (e[3][
          /*name*/
          e[70]
        ].visible ? ut.Metric : ut.CollapsedMetric) + "px"
      ), y(t, "draggable", i = /*clickingColumn*/
      e[18] == /*name*/
      e[70]), de(
        t,
        "opacity-30",
        /*draggingColumn*/
        e[19] == /*name*/
        e[70]
      );
    },
    m(c, d) {
      Y(c, t, d), fe(n, t, null), r = !0, l || (s = [
        ne(t, "dragstart", o),
        ne(t, "dragend", f),
        ne(t, "dragover", et(A0)),
        ne(t, "dragenter", u),
        ne(t, "dragleave", h),
        ne(t, "drop", On(et(a)))
      ], l = !0);
    },
    p(c, d) {
      e = c;
      const g = {};
      d[0] & /*clickingColumn, metricNames, metricInfo*/
      262156 | d[2] & /*$$scope, hovering*/
      6144 && (g.$$scope = { dirty: d, ctx: e }), n.$set(g), (!r || d[0] & /*metricInfo, metricNames*/
      12) && x(
        t,
        "width",
        /*metricInfo*/
        (e[3][
          /*name*/
          e[70]
        ].visible ? ut.Metric : ut.CollapsedMetric) + "px"
      ), (!r || d[0] & /*clickingColumn, metricNames*/
      262148 && i !== (i = /*clickingColumn*/
      e[18] == /*name*/
      e[70])) && y(t, "draggable", i), (!r || d[0] & /*draggingColumn, metricNames*/
      524292) && de(
        t,
        "opacity-30",
        /*draggingColumn*/
        e[19] == /*name*/
        e[70]
      );
    },
    i(c) {
      r || (T(n.$$.fragment, c), r = !0);
    },
    o(c) {
      B(n.$$.fragment, c), r = !1;
    },
    d(c) {
      c && X(t), ue(n), l = !1, Ve(s);
    }
  };
}
function js(e) {
  let t, n = (
    /*scoreNames*/
    e[14]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Gs(Vs(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ft();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      Y(r, t, l);
    },
    p(r, l) {
      if (l[0] & /*scoreNames*/
      16384) {
        n = /*scoreNames*/
        r[14];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Vs(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = Gs(o), i[s].c(), i[s].m(t.parentNode, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      Lt(i, r), r && X(t);
    }
  };
}
function Gs(e) {
  let t, n, i = (
    /*score*/
    e[68] + ""
  ), r, l;
  return {
    c() {
      t = V("div"), n = V("div"), r = me(i), l = se(), y(n, "class", "p-2"), y(t, "class", "bg-slate-100 svelte-19gw1y6"), x(t, "width", ut.Score + "px");
    },
    m(s, o) {
      Y(s, t, o), L(t, n), L(n, r), L(t, l);
    },
    p(s, o) {
      o[0] & /*scoreNames*/
      16384 && i !== (i = /*score*/
      s[68] + "") && De(r, i);
    },
    d(s) {
      s && X(t);
    }
  };
}
function N0(e) {
  let t, n;
  return t = new Qe({ props: { icon: u1 } }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function R0(e) {
  let t, n;
  return t = new Qe({ props: { icon: S1 } }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Us(e) {
  let t, n;
  return t = new bf({
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
        e[39]
      ),
      isSelected: !!/*selectedSlices*/
      e[0].find(
        /*func_1*/
        e[40]
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
    e[41]
  ), t.$on(
    "endedit",
    /*endedit_handler*/
    e[42]
  ), t.$on(
    "edit",
    /*edit_handler*/
    e[43]
  ), t.$on(
    "toggle",
    /*toggle_handler*/
    e[44]
  ), t.$on(
    "reset",
    /*reset_handler*/
    e[45]
  ), t.$on(
    "temprevert",
    /*temprevert_handler*/
    e[46]
  ), t.$on(
    "newsearch",
    /*newsearch_handler*/
    e[47]
  ), t.$on(
    "saveslice",
    /*saveslice_handler*/
    e[48]
  ), t.$on(
    "select",
    /*select_handler*/
    e[49]
  ), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
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
      i[13]), r[0] & /*savedSlices, sliceRequestResults, baseSlice*/
      448 && (l.isSaved = !!/*savedSlices*/
      i[6].find(
        /*func*/
        i[39]
      )), r[0] & /*selectedSlices, sliceRequestResults, baseSlice*/
      385 && (l.isSelected = !!/*selectedSlices*/
      i[0].find(
        /*func_1*/
        i[40]
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
      i[16]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Ks(e, t) {
  let n, i, r;
  function l(...d) {
    return (
      /*func_2*/
      t[50](
        /*sliceToShow*/
        t[65],
        ...d
      )
    );
  }
  function s(...d) {
    return (
      /*func_3*/
      t[51](
        /*sliceToShow*/
        t[65],
        ...d
      )
    );
  }
  function o(...d) {
    return (
      /*beginedit_handler_1*/
      t[52](
        /*slice*/
        t[64],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*edit_handler_1*/
      t[54](
        /*slice*/
        t[64],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*toggle_handler_1*/
      t[55](
        /*slice*/
        t[64],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*reset_handler_1*/
      t[56](
        /*slice*/
        t[64],
        ...d
      )
    );
  }
  function a(...d) {
    return (
      /*temprevert_handler_1*/
      t[57](
        /*slice*/
        t[64],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*select_handler_1*/
      t[60](
        /*sliceToShow*/
        t[65],
        ...d
      )
    );
  }
  return i = new bf({
    props: {
      slice: (
        /*slice*/
        t[64]
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
      rowClass: /*searchBaseSlice*/ t[10] && _t(
        /*searchBaseSlice*/
        t[10],
        /*slice*/
        t[64].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100",
      isSaved: !!/*savedSlices*/
      t[6].find(l),
      isSelected: !!/*selectedSlices*/
      t[0].find(s),
      temporarySlice: (
        /*tempRevertedSlice*/
        t[17] == /*slice*/
        t[64].stringRep ? (
          /*slice*/
          t[64]
        ) : (
          /*sliceToShow*/
          t[65]
        )
      ),
      isEditing: (
        /*slice*/
        t[64].stringRep == /*editingSlice*/
        t[16]
      )
    }
  }), i.$on("beginedit", o), i.$on(
    "endedit",
    /*endedit_handler_1*/
    t[53]
  ), i.$on("edit", f), i.$on("toggle", u), i.$on("reset", h), i.$on("temprevert", a), i.$on(
    "newsearch",
    /*newsearch_handler_1*/
    t[58]
  ), i.$on(
    "saveslice",
    /*saveslice_handler_1*/
    t[59]
  ), i.$on("select", c), {
    key: e,
    first: null,
    c() {
      n = ft(), ae(i.$$.fragment), this.first = n;
    },
    m(d, g) {
      Y(d, n, g), fe(i, d, g), r = !0;
    },
    p(d, g) {
      t = d;
      const _ = {};
      g[0] & /*slices*/
      32 && (_.slice = /*slice*/
      t[64]), g[0] & /*scoreNames*/
      16384 && (_.scoreNames = /*scoreNames*/
      t[14]), g[0] & /*positiveOnly*/
      2048 && (_.positiveOnly = /*positiveOnly*/
      t[11]), g[0] & /*scoreWidthScalers*/
      32768 && (_.scoreWidthScalers = /*scoreWidthScalers*/
      t[15]), g[0] & /*showScores*/
      2 && (_.showScores = /*showScores*/
      t[1]), g[0] & /*metricNames*/
      4 && (_.metricNames = /*metricNames*/
      t[2]), g[0] & /*metricInfo*/
      8 && (_.metricInfo = /*metricInfo*/
      t[3]), g[0] & /*valueNames*/
      4096 && (_.valueNames = /*valueNames*/
      t[12]), g[0] & /*allowedValues*/
      8192 && (_.allowedValues = /*allowedValues*/
      t[13]), g[0] & /*fixedFeatureOrder*/
      512 && (_.fixedFeatureOrder = /*fixedFeatureOrder*/
      t[9]), g[0] & /*searchBaseSlice, slices*/
      1056 && (_.rowClass = /*searchBaseSlice*/
      t[10] && _t(
        /*searchBaseSlice*/
        t[10],
        /*slice*/
        t[64].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100"), g[0] & /*savedSlices, sliceRequestResults, slices*/
      352 && (_.isSaved = !!/*savedSlices*/
      t[6].find(l)), g[0] & /*selectedSlices, sliceRequestResults, slices*/
      289 && (_.isSelected = !!/*selectedSlices*/
      t[0].find(s)), g[0] & /*tempRevertedSlice, slices, sliceRequestResults*/
      131360 && (_.temporarySlice = /*tempRevertedSlice*/
      t[17] == /*slice*/
      t[64].stringRep ? (
        /*slice*/
        t[64]
      ) : (
        /*sliceToShow*/
        t[65]
      )), g[0] & /*slices, editingSlice*/
      65568 && (_.isEditing = /*slice*/
      t[64].stringRep == /*editingSlice*/
      t[16]), i.$set(_);
    },
    i(d) {
      r || (T(i.$$.fragment, d), r = !0);
    },
    o(d) {
      B(i.$$.fragment, d), r = !1;
    },
    d(d) {
      d && X(n), ue(i, d);
    }
  };
}
function z0(e) {
  let t, n, i, r = [], l = /* @__PURE__ */ new Map(), s, o = (
    /*showHeader*/
    e[4] && Xs(e)
  ), f = !!/*baseSlice*/
  e[7] && Us(e), u = (
    /*slices*/
    e[5]
  );
  const h = (a) => (
    /*slice*/
    a[64].stringRep || /*i*/
    a[67]
  );
  for (let a = 0; a < u.length; a += 1) {
    let c = Bs(e, u, a), d = h(c);
    l.set(d, r[a] = Ks(d, c));
  }
  return {
    c() {
      t = V("div"), o && o.c(), n = se(), f && f.c(), i = se();
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      y(t, "class", "relative");
    },
    m(a, c) {
      Y(a, t, c), o && o.m(t, null), L(t, n), f && f.m(t, null), L(t, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(t, null);
      s = !0;
    },
    p(a, c) {
      /*showHeader*/
      a[4] ? o ? (o.p(a, c), c[0] & /*showHeader*/
      16 && T(o, 1)) : (o = Xs(a), o.c(), T(o, 1), o.m(t, n)) : o && (Ae(), B(o, 1, 1, () => {
        o = null;
      }), Ce()), /*baseSlice*/
      a[7] ? f ? (f.p(a, c), c[0] & /*baseSlice*/
      128 && T(f, 1)) : (f = Us(a), f.c(), T(f, 1), f.m(t, i)) : f && (Ae(), B(f, 1, 1, () => {
        f = null;
      }), Ce()), c[0] & /*slices, scoreNames, positiveOnly, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, searchBaseSlice, savedSlices, sliceRequestResults, selectedSlices, tempRevertedSlice, editingSlice, editSliceFeature, toggleSliceFeature, resetSlice, selectSlice*/
      251920239 && (u = /*slices*/
      a[5], Ae(), r = Yo(r, c, h, 1, a, u, l, t, mu, Ks, null, Bs), Ce());
    },
    i(a) {
      if (!s) {
        T(o), T(f);
        for (let c = 0; c < u.length; c += 1)
          T(r[c]);
        s = !0;
      }
    },
    o(a) {
      B(o), B(f);
      for (let c = 0; c < r.length; c += 1)
        B(r[c]);
      s = !1;
    },
    d(a) {
      a && X(t), o && o.d(), f && f.d();
      for (let c = 0; c < r.length; c += 1)
        r[c].d();
    }
  };
}
function M0(e, t) {
  e.target.classList.remove("drop-zone"), e.target.classList.remove("drop-zone-r"), e.target.classList.remove("drop-zone-l");
}
const A0 = () => !1;
function C0(e, t, n) {
  Dt();
  let { showHeader: i = !0 } = t, { slices: r = [] } = t, { selectedSlices: l = [] } = t, { savedSlices: s = [] } = t, { baseSlice: o = null } = t, { sliceRequests: f = {} } = t, { sliceRequestResults: u = {} } = t, { fixedFeatureOrder: h = [] } = t, { searchBaseSlice: a = null } = t, { showScores: c = !1 } = t, { positiveOnly: d = !1 } = t, { valueNames: g = {} } = t, { allowedValues: _ = {} } = t, { metricNames: p = [] } = t, { metricInfo: m = {} } = t, { scoreNames: w = [] } = t, { scoreWidthScalers: A = {} } = t, z = null, M = null, E = null, D = null, I = !1;
  function v(U, we) {
    U.dataTransfer.effectAllowed = "move", n(19, D = we);
  }
  function k(U, we) {
    n(19, D = null);
  }
  function q(U, we) {
    if (we == D)
      return !1;
    let Oe = p.indexOf(D), Xe = p.indexOf(we);
    I = Oe < Xe, U.target.classList.add("drop-zone"), U.target.classList.add(I ? "drop-zone-r" : "drop-zone-l");
  }
  function Z(U, we) {
    if (U.target.classList.remove("drop-zone"), D != we) {
      let Oe = p.indexOf(D), Xe = p.indexOf(we), vt = Array.from(p);
      vt.splice(Oe, 1), n(2, p = [...vt.slice(0, Xe), D, ...vt.slice(Xe)]);
    }
    return !1;
  }
  function G(U, we) {
    let Oe = Object.assign({}, f), Xe;
    Oe[U.stringRep] ? Xe = Oe[U.stringRep] : Xe = U.feature, Xe = zn(Xe, U.feature, we), Oe[U.stringRep] = Xe, n(28, f = Oe), console.log("slice requests:", f);
  }
  function N(U) {
    let we = Object.assign({}, f);
    delete we[U.stringRep], n(28, f = we);
  }
  function R(U, we) {
    let Oe = Object.assign({}, f), Xe;
    Oe[U.stringRep] ? Xe = Oe[U.stringRep] : Xe = U.feature, Xe = we, Oe[U.stringRep] = Xe, n(28, f = Oe), console.log("slice requests:", f);
  }
  function C(U, we = !0) {
    if (we)
      n(0, l = [...l, U]);
    else {
      let Oe = l.findIndex((Xe) => _t(Xe.feature, U.feature));
      Oe >= 0 && n(0, l = [...l.slice(0, Oe), ...l.slice(Oe + 1)]);
    }
  }
  const P = (U, we) => {
    let Oe = Object.assign({}, m);
    Oe[U].visible = !Oe[U].visible, n(3, m = Oe);
  }, H = (U) => n(18, E = U), K = () => n(18, E = null), $ = (U, we) => {
    let Oe = Object.assign({}, m);
    Oe[U].visible = !Oe[U].visible, n(3, m = Oe);
  }, re = (U, we) => v(we, U), le = (U, we) => k(), be = (U, we) => q(we, U), ce = (U, we) => M0(we), Se = (U, we) => Z(we, U), ze = () => n(1, c = !c), Re = (U) => _t(U.feature, (u[o.stringRep] || o).feature), Ne = (U) => _t(U.feature, (u[o.stringRep] || o).feature), oe = (U) => n(16, z = o.stringRep), xe = (U) => n(16, z = null), it = (U) => R(o, U.detail), rt = (U) => G(o, U.detail), S = (U) => N(o), Pe = (U) => n(17, M = U.detail ? o.stringRep : null);
  function ke(U) {
    gt.call(this, e, U);
  }
  function Q(U) {
    gt.call(this, e, U);
  }
  const J = (U) => C(u[o.stringRep] || o, U.detail), Fe = (U, we) => _t(we.feature, U.feature), Ge = (U, we) => _t(we.feature, U.feature), qe = (U, we) => n(16, z = U.stringRep), tt = (U) => n(16, z = null), lt = (U, we) => R(U, we.detail), ct = (U, we) => G(U, we.detail), ht = (U, we) => N(U), he = (U, we) => n(17, M = we.detail ? U.stringRep : null);
  function yt(U) {
    gt.call(this, e, U);
  }
  function dt(U) {
    gt.call(this, e, U);
  }
  const ot = (U, we) => C(U, we.detail);
  return e.$$set = (U) => {
    "showHeader" in U && n(4, i = U.showHeader), "slices" in U && n(5, r = U.slices), "selectedSlices" in U && n(0, l = U.selectedSlices), "savedSlices" in U && n(6, s = U.savedSlices), "baseSlice" in U && n(7, o = U.baseSlice), "sliceRequests" in U && n(28, f = U.sliceRequests), "sliceRequestResults" in U && n(8, u = U.sliceRequestResults), "fixedFeatureOrder" in U && n(9, h = U.fixedFeatureOrder), "searchBaseSlice" in U && n(10, a = U.searchBaseSlice), "showScores" in U && n(1, c = U.showScores), "positiveOnly" in U && n(11, d = U.positiveOnly), "valueNames" in U && n(12, g = U.valueNames), "allowedValues" in U && n(13, _ = U.allowedValues), "metricNames" in U && n(2, p = U.metricNames), "metricInfo" in U && n(3, m = U.metricInfo), "scoreNames" in U && n(14, w = U.scoreNames), "scoreWidthScalers" in U && n(15, A = U.scoreWidthScalers);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*slices, selectedSlices*/
    33 && console.log(`table with ${r.length} slices has selected slices:`, l);
  }, [
    l,
    c,
    p,
    m,
    i,
    r,
    s,
    o,
    u,
    h,
    a,
    d,
    g,
    _,
    w,
    A,
    z,
    M,
    E,
    D,
    v,
    k,
    q,
    Z,
    G,
    N,
    R,
    C,
    f,
    P,
    H,
    K,
    $,
    re,
    le,
    be,
    ce,
    Se,
    ze,
    Re,
    Ne,
    oe,
    xe,
    it,
    rt,
    S,
    Pe,
    ke,
    Q,
    J,
    Fe,
    Ge,
    qe,
    tt,
    lt,
    ct,
    ht,
    he,
    yt,
    dt,
    ot
  ];
}
class Wr extends je {
  constructor(t) {
    super(), Ye(
      this,
      t,
      C0,
      z0,
      He,
      {
        showHeader: 4,
        slices: 5,
        selectedSlices: 0,
        savedSlices: 6,
        baseSlice: 7,
        sliceRequests: 28,
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
function Ke(e, t, n) {
  const i = t, r = Me(e.get(i) || n);
  return e.on("change:" + i, (l, s) => r.set(s), null), e.onAttach && e.onAttach(async () => {
    let l = await e.fetch(i);
    r.set(l);
  }), {
    set: (l) => {
      r.set(l), e.set(i, l), e.save_changes();
    },
    subscribe: r.subscribe,
    update: (l) => {
      r.update((s) => {
        let o = l(s);
        return e.set(i, o), e.save_changes(), o;
      });
    }
  };
}
function E0(e) {
  let t, n, i, r, l, s, o, f, u, h, a;
  return i = new Qe({ props: { icon: b1 } }), o = new Qe({ props: { icon: y1 } }), {
    c() {
      t = V("div"), n = V("button"), ae(i.$$.fragment), l = se(), s = V("button"), ae(o.$$.fragment), y(n, "class", "disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-l rounded-r-none"), n.disabled = r = /*value*/
      e[0] <= /*min*/
      e[1] + 1e-6, y(s, "class", "disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-r rounded-l-none"), s.disabled = f = /*value*/
      e[0] >= /*max*/
      e[2] - 1e-6, y(t, "class", "flex items-center");
    },
    m(c, d) {
      Y(c, t, d), L(t, n), fe(i, n, null), L(t, l), L(t, s), fe(o, s, null), u = !0, h || (a = [
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
      3 && r !== (r = /*value*/
      c[0] <= /*min*/
      c[1] + 1e-6)) && (n.disabled = r), (!u || d & /*value, max*/
      5 && f !== (f = /*value*/
      c[0] >= /*max*/
      c[2] - 1e-6)) && (s.disabled = f);
    },
    i(c) {
      u || (T(i.$$.fragment, c), T(o.$$.fragment, c), u = !0);
    },
    o(c) {
      B(i.$$.fragment, c), B(o.$$.fragment, c), u = !1;
    },
    d(c) {
      c && X(t), ue(i), ue(o), h = !1, Ve(a);
    }
  };
}
function I0(e, t, n) {
  let { value: i = 0 } = t, { min: r = 0 } = t, { max: l = 100 } = t, { step: s = 1 } = t;
  const o = Dt();
  function f(a) {
    n(0, i += a), o("change", i);
  }
  const u = () => f(-s), h = () => f(s);
  return e.$$set = (a) => {
    "value" in a && n(0, i = a.value), "min" in a && n(1, r = a.min), "max" in a && n(2, l = a.max), "step" in a && n(3, s = a.step);
  }, [i, r, l, s, f, u, h];
}
class O0 extends je {
  constructor(t) {
    super(), Ye(this, t, I0, E0, He, { value: 0, min: 1, max: 2, step: 3 });
  }
}
function Qs(e, t, n) {
  const i = e.slice();
  i[14] = t[n], i[17] = n;
  const r = (
    /*widths*/
    i[0][
      /*i*/
      i[17]
    ] * 100
  );
  return i[15] = r, i;
}
function Zs(e) {
  let t, n, i = (
    /*showLabels*/
    e[1] && Js(e)
  ), r = (
    /*showQuantities*/
    e[2] && xs(e)
  );
  return {
    c() {
      t = V("span"), i && i.c(), n = ft(), r && r.c(), y(t, "class", "inline-block truncate max-w-full pointer-events-none select-none px-1 transition-opacity duration-200"), x(
        t,
        "opacity",
        /*labelOpacity*/
        e[5]
      ), y(t, "draggable", "false");
    },
    m(l, s) {
      Y(l, t, s), i && i.m(t, null), L(t, n), r && r.m(t, null);
    },
    p(l, s) {
      /*showLabels*/
      l[1] ? i ? i.p(l, s) : (i = Js(l), i.c(), i.m(t, n)) : i && (i.d(1), i = null), /*showQuantities*/
      l[2] ? r ? r.p(l, s) : (r = xs(l), r.c(), r.m(t, null)) : r && (r.d(1), r = null), s & /*labelOpacity*/
      32 && x(
        t,
        "opacity",
        /*labelOpacity*/
        l[5]
      );
    },
    d(l) {
      l && X(t), i && i.d(), r && r.d();
    }
  };
}
function Js(e) {
  let t = (
    /*tag*/
    e[14].name + ""
  ), n, i;
  return {
    c() {
      n = me(t), i = se();
    },
    m(r, l) {
      Y(r, n, l), Y(r, i, l);
    },
    p(r, l) {
      l & /*segments*/
      8 && t !== (t = /*tag*/
      r[14].name + "") && De(n, t);
    },
    d(r) {
      r && X(n), r && X(i);
    }
  };
}
function xs(e) {
  let t = (
    /*width*/
    e[15].toFixed(0) + "%"
  ), n;
  return {
    c() {
      n = me(t);
    },
    m(i, r) {
      Y(i, n, r);
    },
    p(i, r) {
      r & /*widths, segments*/
      9 && t !== (t = /*width*/
      i[15].toFixed(0) + "%") && De(n, t);
    },
    d(i) {
      i && X(n);
    }
  };
}
function $s(e) {
  let t, n, i;
  function r(...l) {
    return (
      /*pointerdown_handler*/
      e[8](
        /*i*/
        e[17],
        ...l
      )
    );
  }
  return {
    c() {
      t = V("div"), y(t, "class", "rounded-full shadow h-4 absolute top-1 cursor-ew-resize bg-slate-100 hover:bg-white hover:scale-110 text-gray-300 z-10"), x(t, "left", "calc(100% - 3px)"), x(t, "width", "6px"), x(t, "user-select", "none");
    },
    m(l, s) {
      Y(l, t, s), n || (i = ne(t, "pointerdown", r), n = !0);
    },
    p(l, s) {
      e = l;
    },
    d(l) {
      l && X(t), n = !1, i();
    }
  };
}
function eo(e, t) {
  let n, i, r, l, s, o, f, u = (
    /*draggingIndex*/
    (t[6] != null && /*draggingIndex*/
    (t[6] == /*i*/
    t[17] || /*draggingIndex*/
    t[6] == /*i*/
    t[17] - 1) || /*showLabels*/
    t[1]) && Zs(t)
  ), h = (
    /*i*/
    t[17] != /*segments*/
    t[3].length - 1 && $s(t)
  );
  return {
    key: e,
    first: null,
    c() {
      n = V("div"), i = V("div"), u && u.c(), o = se(), h && h.c(), f = se(), y(i, "class", r = "w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 " + /*tag*/
      (t[14].color_tailwind ? "bg-" + /*tag*/
      t[14].color_tailwind : "")), y(i, "style", l = /*tag*/
      t[14].color ? `background: ${/*tag*/
      t[14].color};` : ""), y(i, "title", s = /*tag*/
      t[14].name + ": " + /*width*/
      (t[15].toFixed(0) + "%")), de(
        i,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), de(
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
        ).reduce(no, 0).toFixed(2) + "%"
      ), x(
        n,
        "width",
        /*width*/
        t[15] + "%"
      ), de(
        n,
        "transition-all",
        /*draggingIndex*/
        t[6] == null
      ), de(
        n,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), de(
        n,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      ), this.first = n;
    },
    m(a, c) {
      Y(a, n, c), L(n, i), u && u.m(i, null), L(n, o), h && h.m(n, null), L(n, f);
    },
    p(a, c) {
      t = a, /*draggingIndex*/
      t[6] != null && /*draggingIndex*/
      (t[6] == /*i*/
      t[17] || /*draggingIndex*/
      t[6] == /*i*/
      t[17] - 1) || /*showLabels*/
      t[1] ? u ? u.p(t, c) : (u = Zs(t), u.c(), u.m(i, null)) : u && (u.d(1), u = null), c & /*segments*/
      8 && r !== (r = "w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 " + /*tag*/
      (t[14].color_tailwind ? "bg-" + /*tag*/
      t[14].color_tailwind : "")) && y(i, "class", r), c & /*segments*/
      8 && l !== (l = /*tag*/
      t[14].color ? `background: ${/*tag*/
      t[14].color};` : "") && y(i, "style", l), c & /*segments, widths*/
      9 && s !== (s = /*tag*/
      t[14].name + ": " + /*width*/
      (t[15].toFixed(0) + "%")) && y(i, "title", s), c & /*segments, segments*/
      8 && de(
        i,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), c & /*segments, segments*/
      8 && de(
        i,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      ), /*i*/
      t[17] != /*segments*/
      t[3].length - 1 ? h ? h.p(t, c) : (h = $s(t), h.c(), h.m(n, f)) : h && (h.d(1), h = null), c & /*widths, segments*/
      9 && x(
        n,
        "left",
        /*widths*/
        t[0].slice(
          0,
          /*i*/
          t[17]
        ).reduce(no, 0).toFixed(2) + "%"
      ), c & /*widths, segments*/
      9 && x(
        n,
        "width",
        /*width*/
        t[15] + "%"
      ), c & /*draggingIndex*/
      64 && de(
        n,
        "transition-all",
        /*draggingIndex*/
        t[6] == null
      ), c & /*segments*/
      8 && de(
        n,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), c & /*segments*/
      8 && de(
        n,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      );
    },
    d(a) {
      a && X(n), u && u.d(), h && h.d();
    }
  };
}
function T0(e) {
  let t, n = [], i = /* @__PURE__ */ new Map(), r, l, s = (
    /*segments*/
    e[3]
  );
  const o = (f) => (
    /*tag*/
    f[14].name
  );
  for (let f = 0; f < s.length; f += 1) {
    let u = Qs(e, s, f), h = o(u);
    i.set(h, n[f] = eo(h, u));
  }
  return {
    c() {
      t = V("div");
      for (let f = 0; f < n.length; f += 1)
        n[f].c();
      y(t, "class", "w-full relative h-6 rounded bg-slate-300");
    },
    m(f, u) {
      Y(f, t, u);
      for (let h = 0; h < n.length; h += 1)
        n[h].m(t, null);
      e[9](t), r || (l = [
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
      ], r = !0);
    },
    p(f, [u]) {
      u & /*widths, segments, draggingIndex, onSliderSelect, labelOpacity, showQuantities, showLabels*/
      239 && (s = /*segments*/
      f[3], n = Yo(n, u, o, 1, f, s, i, t, _u, eo, null, Qs));
    },
    i: ge,
    o: ge,
    d(f) {
      f && X(t);
      for (let u = 0; u < n.length; u += 1)
        n[u].d();
      e[9](null), r = !1, Ve(l);
    }
  };
}
function P0(e, t) {
  return t / e;
}
function to(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const no = (e, t) => e + t * 100;
function F0(e, t, n) {
  const i = Dt();
  let { showLabels: r = !0 } = t, { showQuantities: l = !1 } = t, { segments: s = [] } = t, { widths: o = [] } = t, f, u = 0, h = null, a = null;
  function c(m, w) {
    m.preventDefault(), document.body.style.cursor = "ew-resize", h = m.pageX, n(6, a = w);
    const A = f.offsetWidth, z = (D) => {
      if (D.preventDefault(), a == null)
        return;
      const I = D.touches ? D.touches[0].pageX : D.pageX, v = I - h, k = o[w] + o[w + 1], q = P0(A, v), Z = o.slice(), N = Z[w] + q, R = to(N, 0, k);
      Z[w] = R;
      const C = w + 1, P = Z[C] - q, H = to(P, 0, k);
      Z[C] = H, Z[w] === 0 ? (i("change", {
        [s[a].name]: 0,
        [s[a + 1].name]: k
      }), n(6, a = null), M()) : Z[C] === 0 ? (i("change", {
        [s[a].name]: k,
        [s[a + 1].name]: 0
      }), n(6, a = null), M()) : (n(0, o = Z), h = I);
    };
    window.addEventListener("pointermove", z), window.addEventListener("touchmove", z);
    const M = () => {
      window.removeEventListener("pointermove", z), window.removeEventListener("touchmove", z);
    }, E = (D) => {
      D.preventDefault(), a != null && (console.log("draggin index", a, s[a]), i("change", {
        [s[a].name]: o[a],
        [s[a + 1].name]: o[a + 1]
      })), n(6, a = null), document.body.style.cursor = "initial", M();
    };
    window.addEventListener("touchend", E), window.addEventListener("pointerup", E);
  }
  const d = (m, w) => c(w, m);
  function g(m) {
    ve[m ? "unshift" : "push"](() => {
      f = m, n(4, f);
    });
  }
  const _ = () => n(5, u = 1), p = () => n(5, u = 0);
  return e.$$set = (m) => {
    "showLabels" in m && n(1, r = m.showLabels), "showQuantities" in m && n(2, l = m.showQuantities), "segments" in m && n(3, s = m.segments), "widths" in m && n(0, o = m.widths);
  }, e.$$.update = () => {
    e.$$.dirty & /*widths*/
    1 && console.log("widths:", o);
  }, [
    o,
    r,
    l,
    s,
    f,
    u,
    a,
    c,
    d,
    g,
    _,
    p
  ];
}
class q0 extends je {
  constructor(t) {
    super(), Ye(this, t, F0, T0, He, {
      showLabels: 1,
      showQuantities: 2,
      segments: 3,
      widths: 0
    });
  }
}
function io(e, t, n) {
  const i = e.slice();
  return i[17] = t[n], i[19] = n, i;
}
function ro(e) {
  let t, n, i = (
    /*scoreNames*/
    e[1]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = lo(io(e, i, s));
  const l = (s) => B(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      t = V("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      y(t, "class", "mt-2");
    },
    m(s, o) {
      Y(s, t, o);
      for (let f = 0; f < r.length; f += 1)
        r[f].m(t, null);
      n = !0;
    },
    p(s, o) {
      if (o & /*weights, scoreNames, updateScoreWeight, format, scoreColors, removeWeight, initializeWeight*/
      219) {
        i = /*scoreNames*/
        s[1];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = io(s, i, f);
          r[f] ? (r[f].p(u, o), T(r[f], 1)) : (r[f] = lo(u), r[f].c(), T(r[f], 1), r[f].m(t, null));
        }
        for (Ae(), f = i.length; f < r.length; f += 1)
          l(f);
        Ce();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          T(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        B(r[o]);
      n = !1;
    },
    d(s) {
      s && X(t), Lt(r, s);
    }
  };
}
function lo(e) {
  let t, n, i, r, l = (
    /*score*/
    e[17] + ""
  ), s, o, f, u = $e(".1f")(
    /*weights*/
    e[0][
      /*score*/
      e[17]
    ]
  ) + "", h, a, c, d, g;
  function _(...m) {
    return (
      /*change_handler_1*/
      e[13](
        /*score*/
        e[17],
        ...m
      )
    );
  }
  n = new mf({
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
  }), n.$on("change", _);
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
  return c = new O0({
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
      t = V("div"), ae(n.$$.fragment), i = se(), r = V("div"), s = me(l), o = se(), f = V("div"), h = me(u), a = se(), ae(c.$$.fragment), d = se(), y(r, "class", "flex-auto truncate"), y(f, "class", "text-xs mr-2"), y(t, "class", "mb-2 flex flex-wrap items-center text-sm");
    },
    m(m, w) {
      Y(m, t, w), fe(n, t, null), L(t, i), L(t, r), L(r, s), L(t, o), L(t, f), L(f, h), L(t, a), fe(c, t, null), L(t, d), g = !0;
    },
    p(m, w) {
      e = m;
      const A = {};
      w & /*weights, scoreNames*/
      3 && (A.colorClass = /*weights*/
      e[0][
        /*score*/
        e[17]
      ] > 0 ? "bg-" + /*scoreColors*/
      e[3][
        /*i*/
        e[19]
      ] : null), w & /*weights, scoreNames*/
      3 && (A.checked = /*weights*/
      e[0][
        /*score*/
        e[17]
      ] > 0), n.$set(A), (!g || w & /*scoreNames*/
      2) && l !== (l = /*score*/
      e[17] + "") && De(s, l), (!g || w & /*weights, scoreNames*/
      3) && u !== (u = $e(".1f")(
        /*weights*/
        e[0][
          /*score*/
          e[17]
        ]
      ) + "") && De(h, u);
      const z = {};
      w & /*weights, scoreNames*/
      3 && (z.value = /*weights*/
      e[0][
        /*score*/
        e[17]
      ]), c.$set(z);
    },
    i(m) {
      g || (T(n.$$.fragment, m), T(c.$$.fragment, m), g = !0);
    },
    o(m) {
      B(n.$$.fragment, m), B(c.$$.fragment, m), g = !1;
    },
    d(m) {
      m && X(t), ue(n), ue(c);
    }
  };
}
function L0(e) {
  let t, n, i, r, l, s, o, f, u, h;
  n = new q0({
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
    e[2] && ro(e)
  );
  return o = new Qe({
    props: {
      icon: (
        /*expanded*/
        e[2] ? ds : gs
      )
    }
  }), {
    c() {
      t = V("div"), ae(n.$$.fragment), i = se(), a && a.c(), r = se(), l = V("div"), s = V("button"), ae(o.$$.fragment), y(s, "class", "bg-transparent hover:opacity-60 text-slate-600 px-1"), y(s, "title", "Show/hide granular controls"), y(l, "class", "flex items-center justify-center mt-1"), y(t, "class", "w-full");
    },
    m(c, d) {
      Y(c, t, d), fe(n, t, null), L(t, i), a && a.m(t, null), L(t, r), L(t, l), L(l, s), fe(o, s, null), f = !0, u || (h = ne(
        s,
        "click",
        /*click_handler*/
        e[15]
      ), u = !0);
    },
    p(c, [d]) {
      const g = {};
      d & /*scoreNames, weights*/
      3 && (g.segments = /*scoreNames*/
      c[1].map(
        /*func*/
        c[9]
      ).filter(
        /*func_1*/
        c[10]
      )), d & /*scoreNames, weights*/
      3 && (g.widths = /*scoreNames*/
      c[1].filter(
        /*func_2*/
        c[11]
      ).map(
        /*getWeightFraction*/
        c[5]
      )), n.$set(g), /*expanded*/
      c[2] ? a ? (a.p(c, d), d & /*expanded*/
      4 && T(a, 1)) : (a = ro(c), a.c(), T(a, 1), a.m(t, r)) : a && (Ae(), B(a, 1, 1, () => {
        a = null;
      }), Ce());
      const _ = {};
      d & /*expanded*/
      4 && (_.icon = /*expanded*/
      c[2] ? ds : gs), o.$set(_);
    },
    i(c) {
      f || (T(n.$$.fragment, c), T(a), T(o.$$.fragment, c), f = !0);
    },
    o(c) {
      B(n.$$.fragment, c), B(a), B(o.$$.fragment, c), f = !1;
    },
    d(c) {
      c && X(t), ue(n), a && a.d(), ue(o), u = !1, h();
    }
  };
}
function D0(e, t, n) {
  let { weights: i = {} } = t, { scoreNames: r = [] } = t, l = !1;
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
  function o(z, M) {
    let E = Object.assign({}, i);
    E[z] = M, n(0, i = E);
  }
  let f;
  function u(z) {
    return i[z] / f;
  }
  function h(z) {
    let M = Object.assign({}, i);
    M[z] = 0, n(0, i = M);
  }
  function a(z) {
    let M = Object.assign({}, i);
    if (f == 0) {
      M[z] = 1, n(0, i = M);
      return;
    }
    let E = f / Object.values(i).filter((I) => I > 0).length, D = f + E;
    Object.keys(M).forEach((I) => M[I] = M[I] * f / D), M[z] = E * f / D, n(0, i = M);
  }
  function c(z) {
    let M = Object.keys(z).reduce((I, v) => I + i[v], 0), E = Object.keys(z).reduce((I, v) => I + z[v], 0), D = Object.assign({}, i);
    Object.keys(z).forEach((I) => D[I] = z[I] / E * M), n(0, i = D);
  }
  const d = (z, M) => ({ name: z, color_tailwind: s[M] }), g = (z) => i[z.name] > 0, _ = (z) => i[z] > 0, p = (z) => c(z.detail), m = (z, M) => {
    M.detail ? a(z) : h(z);
  }, w = (z, M) => o(z, M.detail), A = () => n(2, l = !l);
  return e.$$set = (z) => {
    "weights" in z && n(0, i = z.weights), "scoreNames" in z && n(1, r = z.scoreNames);
  }, e.$$.update = () => {
    e.$$.dirty & /*weights*/
    1 && (f = Object.values(i).reduce((z, M) => z + M, 0));
  }, [
    i,
    r,
    l,
    s,
    o,
    u,
    h,
    a,
    c,
    d,
    g,
    _,
    p,
    m,
    w,
    A
  ];
}
class W0 extends je {
  constructor(t) {
    super(), Ye(this, t, D0, L0, He, { weights: 0, scoreNames: 1 });
  }
}
var B0 = { value: () => {
} };
function hr() {
  for (var e = 0, t = arguments.length, n = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new Hi(n);
}
function Hi(e) {
  this._ = e;
}
function V0(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
Hi.prototype = hr.prototype = {
  constructor: Hi,
  on: function(e, t) {
    var n = this._, i = V0(e + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (e = i[l]).type) && (r = H0(n[r], e.name)))
          return r;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++l < s; )
      if (r = (e = i[l]).type)
        n[r] = so(n[r], e.name, t);
      else if (t == null)
        for (r in n)
          n[r] = so(n[r], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Hi(e);
  },
  call: function(e, t) {
    if ((r = arguments.length - 2) > 0)
      for (var n = new Array(r), i = 0, r, l; i < r; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (l = this._[e], i = 0, r = l.length; i < r; ++i)
      l[i].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var i = this._[e], r = 0, l = i.length; r < l; ++r)
      i[r].value.apply(t, n);
  }
};
function H0(e, t) {
  for (var n = 0, i = e.length, r; n < i; ++n)
    if ((r = e[n]).name === t)
      return r.value;
}
function so(e, t, n) {
  for (var i = 0, r = e.length; i < r; ++i)
    if (e[i].name === t) {
      e[i] = B0, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Br = "http://www.w3.org/1999/xhtml";
const oo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Br,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function dr(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), oo.hasOwnProperty(t) ? { space: oo[t], local: e } : e;
}
function X0(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Br && t.documentElement.namespaceURI === Br ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Y0(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function pf(e) {
  var t = dr(e);
  return (t.local ? Y0 : X0)(t);
}
function j0() {
}
function tl(e) {
  return e == null ? j0 : function() {
    return this.querySelector(e);
  };
}
function G0(e) {
  typeof e != "function" && (e = tl(e));
  for (var t = this._groups, n = t.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = t[r], s = l.length, o = i[r] = new Array(s), f, u, h = 0; h < s; ++h)
      (f = l[h]) && (u = e.call(f, f.__data__, h, l)) && ("__data__" in f && (u.__data__ = f.__data__), o[h] = u);
  return new Et(i, this._parents);
}
function U0(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function K0() {
  return [];
}
function wf(e) {
  return e == null ? K0 : function() {
    return this.querySelectorAll(e);
  };
}
function Q0(e) {
  return function() {
    return U0(e.apply(this, arguments));
  };
}
function Z0(e) {
  typeof e == "function" ? e = Q0(e) : e = wf(e);
  for (var t = this._groups, n = t.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = t[l], o = s.length, f, u = 0; u < o; ++u)
      (f = s[u]) && (i.push(e.call(f, f.__data__, u, s)), r.push(f));
  return new Et(i, r);
}
function yf(e) {
  return function() {
    return this.matches(e);
  };
}
function vf(e) {
  return function(t) {
    return t.matches(e);
  };
}
var J0 = Array.prototype.find;
function x0(e) {
  return function() {
    return J0.call(this.children, e);
  };
}
function $0() {
  return this.firstElementChild;
}
function eh(e) {
  return this.select(e == null ? $0 : x0(typeof e == "function" ? e : vf(e)));
}
var th = Array.prototype.filter;
function nh() {
  return Array.from(this.children);
}
function ih(e) {
  return function() {
    return th.call(this.children, e);
  };
}
function rh(e) {
  return this.selectAll(e == null ? nh : ih(typeof e == "function" ? e : vf(e)));
}
function lh(e) {
  typeof e != "function" && (e = yf(e));
  for (var t = this._groups, n = t.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = t[r], s = l.length, o = i[r] = [], f, u = 0; u < s; ++u)
      (f = l[u]) && e.call(f, f.__data__, u, l) && o.push(f);
  return new Et(i, this._parents);
}
function Sf(e) {
  return new Array(e.length);
}
function sh() {
  return new Et(this._enter || this._groups.map(Sf), this._parents);
}
function tr(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
tr.prototype = {
  constructor: tr,
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
function oh(e) {
  return function() {
    return e;
  };
}
function fh(e, t, n, i, r, l) {
  for (var s = 0, o, f = t.length, u = l.length; s < u; ++s)
    (o = t[s]) ? (o.__data__ = l[s], i[s] = o) : n[s] = new tr(e, l[s]);
  for (; s < f; ++s)
    (o = t[s]) && (r[s] = o);
}
function uh(e, t, n, i, r, l, s) {
  var o, f, u = /* @__PURE__ */ new Map(), h = t.length, a = l.length, c = new Array(h), d;
  for (o = 0; o < h; ++o)
    (f = t[o]) && (c[o] = d = s.call(f, f.__data__, o, t) + "", u.has(d) ? r[o] = f : u.set(d, f));
  for (o = 0; o < a; ++o)
    d = s.call(e, l[o], o, l) + "", (f = u.get(d)) ? (i[o] = f, f.__data__ = l[o], u.delete(d)) : n[o] = new tr(e, l[o]);
  for (o = 0; o < h; ++o)
    (f = t[o]) && u.get(c[o]) === f && (r[o] = f);
}
function ah(e) {
  return e.__data__;
}
function ch(e, t) {
  if (!arguments.length)
    return Array.from(this, ah);
  var n = t ? uh : fh, i = this._parents, r = this._groups;
  typeof e != "function" && (e = oh(e));
  for (var l = r.length, s = new Array(l), o = new Array(l), f = new Array(l), u = 0; u < l; ++u) {
    var h = i[u], a = r[u], c = a.length, d = hh(e.call(h, h && h.__data__, u, i)), g = d.length, _ = o[u] = new Array(g), p = s[u] = new Array(g), m = f[u] = new Array(c);
    n(h, a, _, p, m, d, t);
    for (var w = 0, A = 0, z, M; w < g; ++w)
      if (z = _[w]) {
        for (w >= A && (A = w + 1); !(M = p[A]) && ++A < g; )
          ;
        z._next = M || null;
      }
  }
  return s = new Et(s, i), s._enter = o, s._exit = f, s;
}
function hh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function dh() {
  return new Et(this._exit || this._groups.map(Sf), this._parents);
}
function gh(e, t, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (r = t(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function _h(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, r = n.length, l = i.length, s = Math.min(r, l), o = new Array(r), f = 0; f < s; ++f)
    for (var u = n[f], h = i[f], a = u.length, c = o[f] = new Array(a), d, g = 0; g < a; ++g)
      (d = u[g] || h[g]) && (c[g] = d);
  for (; f < r; ++f)
    o[f] = n[f];
  return new Et(o, this._parents);
}
function mh() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function bh(e) {
  e || (e = ph);
  function t(a, c) {
    return a && c ? e(a.__data__, c.__data__) : !a - !c;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], o = s.length, f = r[l] = new Array(o), u, h = 0; h < o; ++h)
      (u = s[h]) && (f[h] = u);
    f.sort(t);
  }
  return new Et(r, this._parents).order();
}
function ph(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function wh() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function yh() {
  return Array.from(this);
}
function vh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function Sh() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function kh() {
  return !this.node();
}
function Nh(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var r = t[n], l = 0, s = r.length, o; l < s; ++l)
      (o = r[l]) && e.call(o, o.__data__, l, r);
  return this;
}
function Rh(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function zh(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mh(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ah(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ch(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Eh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ih(e, t) {
  var n = dr(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? zh : Rh : typeof t == "function" ? n.local ? Eh : Ch : n.local ? Ah : Mh)(n, t));
}
function kf(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Oh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Th(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ph(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Fh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Oh : typeof t == "function" ? Ph : Th)(e, t, n ?? "")) : En(this.node(), e);
}
function En(e, t) {
  return e.style.getPropertyValue(t) || kf(e).getComputedStyle(e, null).getPropertyValue(t);
}
function qh(e) {
  return function() {
    delete this[e];
  };
}
function Lh(e, t) {
  return function() {
    this[e] = t;
  };
}
function Dh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Wh(e, t) {
  return arguments.length > 1 ? this.each((t == null ? qh : typeof t == "function" ? Dh : Lh)(e, t)) : this.node()[e];
}
function Nf(e) {
  return e.trim().split(/^|\s+/);
}
function nl(e) {
  return e.classList || new Rf(e);
}
function Rf(e) {
  this._node = e, this._names = Nf(e.getAttribute("class") || "");
}
Rf.prototype = {
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
function zf(e, t) {
  for (var n = nl(e), i = -1, r = t.length; ++i < r; )
    n.add(t[i]);
}
function Mf(e, t) {
  for (var n = nl(e), i = -1, r = t.length; ++i < r; )
    n.remove(t[i]);
}
function Bh(e) {
  return function() {
    zf(this, e);
  };
}
function Vh(e) {
  return function() {
    Mf(this, e);
  };
}
function Hh(e, t) {
  return function() {
    (t.apply(this, arguments) ? zf : Mf)(this, e);
  };
}
function Xh(e, t) {
  var n = Nf(e + "");
  if (arguments.length < 2) {
    for (var i = nl(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Hh : t ? Bh : Vh)(n, t));
}
function Yh() {
  this.textContent = "";
}
function jh(e) {
  return function() {
    this.textContent = e;
  };
}
function Gh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Uh(e) {
  return arguments.length ? this.each(e == null ? Yh : (typeof e == "function" ? Gh : jh)(e)) : this.node().textContent;
}
function Kh() {
  this.innerHTML = "";
}
function Qh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Zh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Jh(e) {
  return arguments.length ? this.each(e == null ? Kh : (typeof e == "function" ? Zh : Qh)(e)) : this.node().innerHTML;
}
function xh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function $h() {
  return this.each(xh);
}
function ed() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function td() {
  return this.each(ed);
}
function nd(e) {
  var t = typeof e == "function" ? e : pf(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function id() {
  return null;
}
function rd(e, t) {
  var n = typeof e == "function" ? e : pf(e), i = t == null ? id : typeof t == "function" ? t : tl(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function ld() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function sd() {
  return this.each(ld);
}
function od() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fd() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function ud(e) {
  return this.select(e ? fd : od);
}
function ad(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function cd(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function hd(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function dd(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, r = t.length, l; n < r; ++n)
        l = t[n], (!e.type || l.type === e.type) && l.name === e.name ? this.removeEventListener(l.type, l.listener, l.options) : t[++i] = l;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function gd(e, t, n) {
  return function() {
    var i = this.__on, r, l = cd(t);
    if (i) {
      for (var s = 0, o = i.length; s < o; ++s)
        if ((r = i[s]).type === e.type && r.name === e.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = l, r.options = n), r.value = t;
          return;
        }
    }
    this.addEventListener(e.type, l, n), r = { type: e.type, name: e.name, value: t, listener: l, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function _d(e, t, n) {
  var i = hd(e + ""), r, l = i.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var f = 0, u = o.length, h; f < u; ++f)
        for (r = 0, h = o[f]; r < l; ++r)
          if ((s = i[r]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (o = t ? gd : dd, r = 0; r < l; ++r)
    this.each(o(i[r], t, n));
  return this;
}
function Af(e, t, n) {
  var i = kf(e), r = i.CustomEvent;
  typeof r == "function" ? r = new r(t, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(t, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(t, !1, !1)), e.dispatchEvent(r);
}
function md(e, t) {
  return function() {
    return Af(this, e, t);
  };
}
function bd(e, t) {
  return function() {
    return Af(this, e, t.apply(this, arguments));
  };
}
function pd(e, t) {
  return this.each((typeof t == "function" ? bd : md)(e, t));
}
function* wd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var Cf = [null];
function Et(e, t) {
  this._groups = e, this._parents = t;
}
function ci() {
  return new Et([[document.documentElement]], Cf);
}
function yd() {
  return this;
}
Et.prototype = ci.prototype = {
  constructor: Et,
  select: G0,
  selectAll: Z0,
  selectChild: eh,
  selectChildren: rh,
  filter: lh,
  data: ch,
  enter: sh,
  exit: dh,
  join: gh,
  merge: _h,
  selection: yd,
  order: mh,
  sort: bh,
  call: wh,
  nodes: yh,
  node: vh,
  size: Sh,
  empty: kh,
  each: Nh,
  attr: Ih,
  style: Fh,
  property: Wh,
  classed: Xh,
  text: Uh,
  html: Jh,
  raise: $h,
  lower: td,
  append: nd,
  insert: rd,
  remove: sd,
  clone: ud,
  datum: ad,
  on: _d,
  dispatch: pd,
  [Symbol.iterator]: wd
};
function sn(e) {
  return typeof e == "string" ? new Et([[document.querySelector(e)]], [document.documentElement]) : new Et([[e]], Cf);
}
function vd(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function fn(e, t) {
  if (e = vd(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var i = n.createSVGPoint();
      return i.x = e.clientX, i.y = e.clientY, i = i.matrixTransform(t.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (t.getBoundingClientRect) {
      var r = t.getBoundingClientRect();
      return [e.clientX - r.left - t.clientLeft, e.clientY - r.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Vr = { capture: !0, passive: !1 };
function Hr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Sd(e) {
  var t = e.document.documentElement, n = sn(e).on("dragstart.drag", Hr, Vr);
  "onselectstart" in t ? n.on("selectstart.drag", Hr, Vr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function kd(e, t) {
  var n = e.document.documentElement, i = sn(e).on("dragstart.drag", null);
  t && (i.on("click.drag", Hr, Vr), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var In = 0, ei = 0, Jn = 0, Ef = 1e3, nr, ti, ir = 0, mn = 0, gr = 0, oi = typeof performance == "object" && performance.now ? performance : Date, If = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function il() {
  return mn || (If(Nd), mn = oi.now() + gr);
}
function Nd() {
  mn = 0;
}
function rr() {
  this._call = this._time = this._next = null;
}
rr.prototype = rl.prototype = {
  constructor: rr,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? il() : +n) + (t == null ? 0 : +t), !this._next && ti !== this && (ti ? ti._next = this : nr = this, ti = this), this._call = e, this._time = n, Xr();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Xr());
  }
};
function rl(e, t, n) {
  var i = new rr();
  return i.restart(e, t, n), i;
}
function Rd() {
  il(), ++In;
  for (var e = nr, t; e; )
    (t = mn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --In;
}
function fo() {
  mn = (ir = oi.now()) + gr, In = ei = 0;
  try {
    Rd();
  } finally {
    In = 0, Md(), mn = 0;
  }
}
function zd() {
  var e = oi.now(), t = e - ir;
  t > Ef && (gr -= t, ir = e);
}
function Md() {
  for (var e, t = nr, n, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : nr = n);
  ti = e, Xr(i);
}
function Xr(e) {
  if (!In) {
    ei && (ei = clearTimeout(ei));
    var t = e - mn;
    t > 24 ? (e < 1 / 0 && (ei = setTimeout(fo, e - oi.now() - gr)), Jn && (Jn = clearInterval(Jn))) : (Jn || (ir = oi.now(), Jn = setInterval(zd, Ef)), In = 1, If(fo));
  }
}
function uo(e, t, n) {
  var i = new rr();
  return t = t == null ? 0 : +t, i.restart((r) => {
    i.stop(), e(r + t);
  }, t, n), i;
}
var Ad = hr("start", "end", "cancel", "interrupt"), Cd = [], Of = 0, ao = 1, Yr = 2, Xi = 3, co = 4, jr = 5, Yi = 6;
function _r(e, t, n, i, r, l) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  Ed(e, n, {
    name: t,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: Ad,
    tween: Cd,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: Of
  });
}
function ll(e, t) {
  var n = Ht(e, t);
  if (n.state > Of)
    throw new Error("too late; already scheduled");
  return n;
}
function Ut(e, t) {
  var n = Ht(e, t);
  if (n.state > Xi)
    throw new Error("too late; already running");
  return n;
}
function Ht(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function Ed(e, t, n) {
  var i = e.__transition, r;
  i[t] = n, n.timer = rl(l, 0, n.time);
  function l(u) {
    n.state = ao, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var h, a, c, d;
    if (n.state !== ao)
      return f();
    for (h in i)
      if (d = i[h], d.name === n.name) {
        if (d.state === Xi)
          return uo(s);
        d.state === co ? (d.state = Yi, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete i[h]) : +h < t && (d.state = Yi, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete i[h]);
      }
    if (uo(function() {
      n.state === Xi && (n.state = co, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Yr, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Yr) {
      for (n.state = Xi, r = new Array(c = n.tween.length), h = 0, a = -1; h < c; ++h)
        (d = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (r[++a] = d);
      r.length = a + 1;
    }
  }
  function o(u) {
    for (var h = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(f), n.state = jr, 1), a = -1, c = r.length; ++a < c; )
      r[a].call(e, h);
    n.state === jr && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = Yi, n.timer.stop(), delete i[t];
    for (var u in i)
      return;
    delete e.__transition;
  }
}
function ji(e, t) {
  var n = e.__transition, i, r, l = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((i = n[s]).name !== t) {
        l = !1;
        continue;
      }
      r = i.state > Yr && i.state < jr, i.state = Yi, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[s];
    }
    l && delete e.__transition;
  }
}
function Id(e) {
  return this.each(function() {
    ji(this, e);
  });
}
function Od(e, t) {
  var n, i;
  return function() {
    var r = Ut(this, e), l = r.tween;
    if (l !== n) {
      i = n = l;
      for (var s = 0, o = i.length; s < o; ++s)
        if (i[s].name === t) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    r.tween = i;
  };
}
function Td(e, t, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var l = Ut(this, e), s = l.tween;
    if (s !== i) {
      r = (i = s).slice();
      for (var o = { name: t, value: n }, f = 0, u = r.length; f < u; ++f)
        if (r[f].name === t) {
          r[f] = o;
          break;
        }
      f === u && r.push(o);
    }
    l.tween = r;
  };
}
function Pd(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Ht(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Od : Td)(n, e, t));
}
function sl(e, t, n) {
  var i = e._id;
  return e.each(function() {
    var r = Ut(this, i);
    (r.value || (r.value = {}))[t] = n.apply(this, arguments);
  }), function(r) {
    return Ht(r, i).value[t];
  };
}
function Tf(e, t) {
  var n;
  return (typeof t == "number" ? Bt : t instanceof gn ? xi : (n = gn(t)) ? (t = n, xi) : xo)(e, t);
}
function Fd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function qd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ld(e, t, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(e);
    return s === r ? null : s === i ? l : l = t(i = s, n);
  };
}
function Dd(e, t, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === r ? null : s === i ? l : l = t(i = s, n);
  };
}
function Wd(e, t, n) {
  var i, r, l;
  return function() {
    var s, o = n(this), f;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), f = o + "", s === f ? null : s === i && f === r ? l : (r = f, l = t(i = s, o)));
  };
}
function Bd(e, t, n) {
  var i, r, l;
  return function() {
    var s, o = n(this), f;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), f = o + "", s === f ? null : s === i && f === r ? l : (r = f, l = t(i = s, o)));
  };
}
function Vd(e, t) {
  var n = dr(e), i = n === "transform" ? ra : Tf;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Bd : Wd)(n, i, sl(this, "attr." + e, t)) : t == null ? (n.local ? qd : Fd)(n) : (n.local ? Dd : Ld)(n, i, t));
}
function Hd(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Xd(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function Yd(e, t) {
  var n, i;
  function r() {
    var l = t.apply(this, arguments);
    return l !== i && (n = (i = l) && Xd(e, l)), n;
  }
  return r._value = t, r;
}
function jd(e, t) {
  var n, i;
  function r() {
    var l = t.apply(this, arguments);
    return l !== i && (n = (i = l) && Hd(e, l)), n;
  }
  return r._value = t, r;
}
function Gd(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var i = dr(e);
  return this.tween(n, (i.local ? Yd : jd)(i, t));
}
function Ud(e, t) {
  return function() {
    ll(this, e).delay = +t.apply(this, arguments);
  };
}
function Kd(e, t) {
  return t = +t, function() {
    ll(this, e).delay = t;
  };
}
function Qd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Ud : Kd)(t, e)) : Ht(this.node(), t).delay;
}
function Zd(e, t) {
  return function() {
    Ut(this, e).duration = +t.apply(this, arguments);
  };
}
function Jd(e, t) {
  return t = +t, function() {
    Ut(this, e).duration = t;
  };
}
function xd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Zd : Jd)(t, e)) : Ht(this.node(), t).duration;
}
function $d(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    Ut(this, e).ease = t;
  };
}
function e2(e) {
  var t = this._id;
  return arguments.length ? this.each($d(t, e)) : Ht(this.node(), t).ease;
}
function t2(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    Ut(this, e).ease = n;
  };
}
function n2(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(t2(this._id, e));
}
function i2(e) {
  typeof e != "function" && (e = yf(e));
  for (var t = this._groups, n = t.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = t[r], s = l.length, o = i[r] = [], f, u = 0; u < s; ++u)
      (f = l[u]) && e.call(f, f.__data__, u, l) && o.push(f);
  return new tn(i, this._parents, this._name, this._id);
}
function r2(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, i = t.length, r = n.length, l = Math.min(i, r), s = new Array(i), o = 0; o < l; ++o)
    for (var f = t[o], u = n[o], h = f.length, a = s[o] = new Array(h), c, d = 0; d < h; ++d)
      (c = f[d] || u[d]) && (a[d] = c);
  for (; o < i; ++o)
    s[o] = t[o];
  return new tn(s, this._parents, this._name, this._id);
}
function l2(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function s2(e, t, n) {
  var i, r, l = l2(t) ? ll : Ut;
  return function() {
    var s = l(this, e), o = s.on;
    o !== i && (r = (i = o).copy()).on(t, n), s.on = r;
  };
}
function o2(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ht(this.node(), n).on.on(e) : this.each(s2(n, e, t));
}
function f2(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function u2() {
  return this.on("end.remove", f2(this._id));
}
function a2(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = tl(e));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var o = i[s], f = o.length, u = l[s] = new Array(f), h, a, c = 0; c < f; ++c)
      (h = o[c]) && (a = e.call(h, h.__data__, c, o)) && ("__data__" in h && (a.__data__ = h.__data__), u[c] = a, _r(u[c], t, n, c, u, Ht(h, n)));
  return new tn(l, this._parents, t, n);
}
function c2(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = wf(e));
  for (var i = this._groups, r = i.length, l = [], s = [], o = 0; o < r; ++o)
    for (var f = i[o], u = f.length, h, a = 0; a < u; ++a)
      if (h = f[a]) {
        for (var c = e.call(h, h.__data__, a, f), d, g = Ht(h, n), _ = 0, p = c.length; _ < p; ++_)
          (d = c[_]) && _r(d, t, n, _, c, g);
        l.push(c), s.push(h);
      }
  return new tn(l, s, t, n);
}
var h2 = ci.prototype.constructor;
function d2() {
  return new h2(this._groups, this._parents);
}
function g2(e, t) {
  var n, i, r;
  return function() {
    var l = En(this, e), s = (this.style.removeProperty(e), En(this, e));
    return l === s ? null : l === n && s === i ? r : r = t(n = l, i = s);
  };
}
function Pf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function _2(e, t, n) {
  var i, r = n + "", l;
  return function() {
    var s = En(this, e);
    return s === r ? null : s === i ? l : l = t(i = s, n);
  };
}
function m2(e, t, n) {
  var i, r, l;
  return function() {
    var s = En(this, e), o = n(this), f = o + "";
    return o == null && (f = o = (this.style.removeProperty(e), En(this, e))), s === f ? null : s === i && f === r ? l : (r = f, l = t(i = s, o));
  };
}
function b2(e, t) {
  var n, i, r, l = "style." + t, s = "end." + l, o;
  return function() {
    var f = Ut(this, e), u = f.on, h = f.value[l] == null ? o || (o = Pf(t)) : void 0;
    (u !== n || r !== h) && (i = (n = u).copy()).on(s, r = h), f.on = i;
  };
}
function p2(e, t, n) {
  var i = (e += "") == "transform" ? ia : Tf;
  return t == null ? this.styleTween(e, g2(e, i)).on("end.style." + e, Pf(e)) : typeof t == "function" ? this.styleTween(e, m2(e, i, sl(this, "style." + e, t))).each(b2(this._id, e)) : this.styleTween(e, _2(e, i, t), n).on("end.style." + e, null);
}
function w2(e, t, n) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), n);
  };
}
function y2(e, t, n) {
  var i, r;
  function l() {
    var s = t.apply(this, arguments);
    return s !== r && (i = (r = s) && w2(e, s, n)), i;
  }
  return l._value = t, l;
}
function v2(e, t, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (t == null)
    return this.tween(i, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(i, y2(e, t, n ?? ""));
}
function S2(e) {
  return function() {
    this.textContent = e;
  };
}
function k2(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function N2(e) {
  return this.tween("text", typeof e == "function" ? k2(sl(this, "text", e)) : S2(e == null ? "" : e + ""));
}
function R2(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function z2(e) {
  var t, n;
  function i() {
    var r = e.apply(this, arguments);
    return r !== n && (t = (n = r) && R2(r)), t;
  }
  return i._value = e, i;
}
function M2(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, z2(e));
}
function A2() {
  for (var e = this._name, t = this._id, n = Ff(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], o = s.length, f, u = 0; u < o; ++u)
      if (f = s[u]) {
        var h = Ht(f, t);
        _r(f, e, n, u, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new tn(i, this._parents, e, n);
}
function C2() {
  var e, t, n = this, i = n._id, r = n.size();
  return new Promise(function(l, s) {
    var o = { value: s }, f = { value: function() {
      --r === 0 && l();
    } };
    n.each(function() {
      var u = Ut(this, i), h = u.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(f)), u.on = t;
    }), r === 0 && l();
  });
}
var E2 = 0;
function tn(e, t, n, i) {
  this._groups = e, this._parents = t, this._name = n, this._id = i;
}
function Ff() {
  return ++E2;
}
var Jt = ci.prototype;
tn.prototype = {
  constructor: tn,
  select: a2,
  selectAll: c2,
  selectChild: Jt.selectChild,
  selectChildren: Jt.selectChildren,
  filter: i2,
  merge: r2,
  selection: d2,
  transition: A2,
  call: Jt.call,
  nodes: Jt.nodes,
  node: Jt.node,
  size: Jt.size,
  empty: Jt.empty,
  each: Jt.each,
  on: o2,
  attr: Vd,
  attrTween: Gd,
  style: p2,
  styleTween: v2,
  text: N2,
  textTween: M2,
  remove: u2,
  tween: Pd,
  delay: Qd,
  duration: xd,
  ease: e2,
  easeVarying: n2,
  end: C2,
  [Symbol.iterator]: Jt[Symbol.iterator]
};
function I2(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var O2 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: I2
};
function T2(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function P2(e) {
  var t, n;
  e instanceof tn ? (t = e._id, e = e._name) : (t = Ff(), (n = O2).time = il(), e = e == null ? null : e + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], o = s.length, f, u = 0; u < o; ++u)
      (f = s[u]) && _r(f, e, t, u, s, n || T2(f, t));
  return new tn(i, this._parents, e, t);
}
ci.prototype.interrupt = Id;
ci.prototype.transition = P2;
function F2(e, t) {
  var n, i = 1;
  e == null && (e = 0), t == null && (t = 0);
  function r() {
    var l, s = n.length, o, f = 0, u = 0;
    for (l = 0; l < s; ++l)
      o = n[l], f += o.x, u += o.y;
    for (f = (f / s - e) * i, u = (u / s - t) * i, l = 0; l < s; ++l)
      o = n[l], o.x -= f, o.y -= u;
  }
  return r.initialize = function(l) {
    n = l;
  }, r.x = function(l) {
    return arguments.length ? (e = +l, r) : e;
  }, r.y = function(l) {
    return arguments.length ? (t = +l, r) : t;
  }, r.strength = function(l) {
    return arguments.length ? (i = +l, r) : i;
  }, r;
}
function q2(e) {
  const t = +this._x.call(null, e), n = +this._y.call(null, e);
  return qf(this.cover(t, n), t, n, e);
}
function qf(e, t, n, i) {
  if (isNaN(t) || isNaN(n))
    return e;
  var r, l = e._root, s = { data: i }, o = e._x0, f = e._y0, u = e._x1, h = e._y1, a, c, d, g, _, p, m, w;
  if (!l)
    return e._root = s, e;
  for (; l.length; )
    if ((_ = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c, r = l, !(l = l[m = p << 1 | _]))
      return r[m] = s, e;
  if (d = +e._x.call(null, l.data), g = +e._y.call(null, l.data), t === d && n === g)
    return s.next = l, r ? r[m] = s : e._root = s, e;
  do
    r = r ? r[m] = new Array(4) : e._root = new Array(4), (_ = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c;
  while ((m = p << 1 | _) === (w = (g >= c) << 1 | d >= a));
  return r[w] = l, r[m] = s, e;
}
function L2(e) {
  var t, n, i = e.length, r, l, s = new Array(i), o = new Array(i), f = 1 / 0, u = 1 / 0, h = -1 / 0, a = -1 / 0;
  for (n = 0; n < i; ++n)
    isNaN(r = +this._x.call(null, t = e[n])) || isNaN(l = +this._y.call(null, t)) || (s[n] = r, o[n] = l, r < f && (f = r), r > h && (h = r), l < u && (u = l), l > a && (a = l));
  if (f > h || u > a)
    return this;
  for (this.cover(f, u).cover(h, a), n = 0; n < i; ++n)
    qf(this, s[n], o[n], e[n]);
  return this;
}
function D2(e, t) {
  if (isNaN(e = +e) || isNaN(t = +t))
    return this;
  var n = this._x0, i = this._y0, r = this._x1, l = this._y1;
  if (isNaN(n))
    r = (n = Math.floor(e)) + 1, l = (i = Math.floor(t)) + 1;
  else {
    for (var s = r - n || 1, o = this._root, f, u; n > e || e >= r || i > t || t >= l; )
      switch (u = (t < i) << 1 | e < n, f = new Array(4), f[u] = o, o = f, s *= 2, u) {
        case 0:
          r = n + s, l = i + s;
          break;
        case 1:
          n = r - s, l = i + s;
          break;
        case 2:
          r = n + s, i = l - s;
          break;
        case 3:
          n = r - s, i = l - s;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = n, this._y0 = i, this._x1 = r, this._y1 = l, this;
}
function W2() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function B2(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function mt(e, t, n, i, r) {
  this.node = e, this.x0 = t, this.y0 = n, this.x1 = i, this.y1 = r;
}
function V2(e, t, n) {
  var i, r = this._x0, l = this._y0, s, o, f, u, h = this._x1, a = this._y1, c = [], d = this._root, g, _;
  for (d && c.push(new mt(d, r, l, h, a)), n == null ? n = 1 / 0 : (r = e - n, l = t - n, h = e + n, a = t + n, n *= n); g = c.pop(); )
    if (!(!(d = g.node) || (s = g.x0) > h || (o = g.y0) > a || (f = g.x1) < r || (u = g.y1) < l))
      if (d.length) {
        var p = (s + f) / 2, m = (o + u) / 2;
        c.push(
          new mt(d[3], p, m, f, u),
          new mt(d[2], s, m, p, u),
          new mt(d[1], p, o, f, m),
          new mt(d[0], s, o, p, m)
        ), (_ = (t >= m) << 1 | e >= p) && (g = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - _], c[c.length - 1 - _] = g);
      } else {
        var w = e - +this._x.call(null, d.data), A = t - +this._y.call(null, d.data), z = w * w + A * A;
        if (z < n) {
          var M = Math.sqrt(n = z);
          r = e - M, l = t - M, h = e + M, a = t + M, i = d.data;
        }
      }
  return i;
}
function H2(e) {
  if (isNaN(h = +this._x.call(null, e)) || isNaN(a = +this._y.call(null, e)))
    return this;
  var t, n = this._root, i, r, l, s = this._x0, o = this._y0, f = this._x1, u = this._y1, h, a, c, d, g, _, p, m;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((g = h >= (c = (s + f) / 2)) ? s = c : f = c, (_ = a >= (d = (o + u) / 2)) ? o = d : u = d, t = n, !(n = n[p = _ << 1 | g]))
        return this;
      if (!n.length)
        break;
      (t[p + 1 & 3] || t[p + 2 & 3] || t[p + 3 & 3]) && (i = t, m = p);
    }
  for (; n.data !== e; )
    if (r = n, !(n = n.next))
      return this;
  return (l = n.next) && delete n.next, r ? (l ? r.next = l : delete r.next, this) : t ? (l ? t[p] = l : delete t[p], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (i ? i[m] = n : this._root = n), this) : (this._root = l, this);
}
function X2(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function Y2() {
  return this._root;
}
function j2() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function G2(e) {
  var t = [], n, i = this._root, r, l, s, o, f;
  for (i && t.push(new mt(i, this._x0, this._y0, this._x1, this._y1)); n = t.pop(); )
    if (!e(i = n.node, l = n.x0, s = n.y0, o = n.x1, f = n.y1) && i.length) {
      var u = (l + o) / 2, h = (s + f) / 2;
      (r = i[3]) && t.push(new mt(r, u, h, o, f)), (r = i[2]) && t.push(new mt(r, l, h, u, f)), (r = i[1]) && t.push(new mt(r, u, s, o, h)), (r = i[0]) && t.push(new mt(r, l, s, u, h));
    }
  return this;
}
function U2(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new mt(this._root, this._x0, this._y0, this._x1, this._y1)); i = t.pop(); ) {
    var r = i.node;
    if (r.length) {
      var l, s = i.x0, o = i.y0, f = i.x1, u = i.y1, h = (s + f) / 2, a = (o + u) / 2;
      (l = r[0]) && t.push(new mt(l, s, o, h, a)), (l = r[1]) && t.push(new mt(l, h, o, f, a)), (l = r[2]) && t.push(new mt(l, s, a, h, u)), (l = r[3]) && t.push(new mt(l, h, a, f, u));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.y0, i.x1, i.y1);
  return this;
}
function K2(e) {
  return e[0];
}
function Q2(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function Z2(e) {
  return e[1];
}
function J2(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function Lf(e, t, n) {
  var i = new ol(t ?? K2, n ?? Z2, NaN, NaN, NaN, NaN);
  return e == null ? i : i.addAll(e);
}
function ol(e, t, n, i, r, l) {
  this._x = e, this._y = t, this._x0 = n, this._y0 = i, this._x1 = r, this._y1 = l, this._root = void 0;
}
function ho(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var pt = Lf.prototype = ol.prototype;
pt.copy = function() {
  var e = new ol(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = ho(t), e;
  for (n = [{ source: t, target: e._root = new Array(4) }]; t = n.pop(); )
    for (var r = 0; r < 4; ++r)
      (i = t.source[r]) && (i.length ? n.push({ source: i, target: t.target[r] = new Array(4) }) : t.target[r] = ho(i));
  return e;
};
pt.add = q2;
pt.addAll = L2;
pt.cover = D2;
pt.data = W2;
pt.extent = B2;
pt.find = V2;
pt.remove = H2;
pt.removeAll = X2;
pt.root = Y2;
pt.size = j2;
pt.visit = G2;
pt.visitAfter = U2;
pt.x = Q2;
pt.y = J2;
function At(e) {
  return function() {
    return e;
  };
}
function lr(e) {
  return (e() - 0.5) * 1e-6;
}
function x2(e) {
  return e.x + e.vx;
}
function $2(e) {
  return e.y + e.vy;
}
function eg(e) {
  var t, n, i, r = 1, l = 1;
  typeof e != "function" && (e = At(e == null ? 1 : +e));
  function s() {
    for (var u, h = t.length, a, c, d, g, _, p, m = 0; m < l; ++m)
      for (a = Lf(t, x2, $2).visitAfter(o), u = 0; u < h; ++u)
        c = t[u], _ = n[c.index], p = _ * _, d = c.x + c.vx, g = c.y + c.vy, a.visit(w);
    function w(A, z, M, E, D) {
      var I = A.data, v = A.r, k = _ + v;
      if (I) {
        if (I.index > c.index) {
          var q = d - I.x - I.vx, Z = g - I.y - I.vy, G = q * q + Z * Z;
          G < k * k && (q === 0 && (q = lr(i), G += q * q), Z === 0 && (Z = lr(i), G += Z * Z), G = (k - (G = Math.sqrt(G))) / G * r, c.vx += (q *= G) * (k = (v *= v) / (p + v)), c.vy += (Z *= G) * k, I.vx -= q * (k = 1 - k), I.vy -= Z * k);
        }
        return;
      }
      return z > d + k || E < d - k || M > g + k || D < g - k;
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
    return arguments.length ? (l = +u, s) : l;
  }, s.strength = function(u) {
    return arguments.length ? (r = +u, s) : r;
  }, s.radius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : At(+u), f(), s) : e;
  }, s;
}
function tg(e) {
  return e.index;
}
function go(e, t) {
  var n = e.get(t);
  if (!n)
    throw new Error("node not found: " + t);
  return n;
}
function ng(e) {
  var t = tg, n = a, i, r = At(30), l, s, o, f, u, h = 1;
  e == null && (e = []);
  function a(p) {
    return 1 / Math.min(o[p.source.index], o[p.target.index]);
  }
  function c(p) {
    for (var m = 0, w = e.length; m < h; ++m)
      for (var A = 0, z, M, E, D, I, v, k; A < w; ++A)
        z = e[A], M = z.source, E = z.target, D = E.x + E.vx - M.x - M.vx || lr(u), I = E.y + E.vy - M.y - M.vy || lr(u), v = Math.sqrt(D * D + I * I), v = (v - l[A]) / v * p * i[A], D *= v, I *= v, E.vx -= D * (k = f[A]), E.vy -= I * k, M.vx += D * (k = 1 - k), M.vy += I * k;
  }
  function d() {
    if (s) {
      var p, m = s.length, w = e.length, A = new Map(s.map((M, E) => [t(M, E, s), M])), z;
      for (p = 0, o = new Array(m); p < w; ++p)
        z = e[p], z.index = p, typeof z.source != "object" && (z.source = go(A, z.source)), typeof z.target != "object" && (z.target = go(A, z.target)), o[z.source.index] = (o[z.source.index] || 0) + 1, o[z.target.index] = (o[z.target.index] || 0) + 1;
      for (p = 0, f = new Array(w); p < w; ++p)
        z = e[p], f[p] = o[z.source.index] / (o[z.source.index] + o[z.target.index]);
      i = new Array(w), g(), l = new Array(w), _();
    }
  }
  function g() {
    if (s)
      for (var p = 0, m = e.length; p < m; ++p)
        i[p] = +n(e[p], p, e);
  }
  function _() {
    if (s)
      for (var p = 0, m = e.length; p < m; ++p)
        l[p] = +r(e[p], p, e);
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
    return arguments.length ? (n = typeof p == "function" ? p : At(+p), g(), c) : n;
  }, c.distance = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : At(+p), _(), c) : r;
  }, c;
}
const ig = 1664525, rg = 1013904223, _o = 4294967296;
function lg() {
  let e = 1;
  return () => (e = (ig * e + rg) % _o) / _o;
}
var sg = 10, og = Math.PI * (3 - Math.sqrt(5));
function fg(e) {
  var t, n = 1, i = 1e-3, r = 1 - Math.pow(i, 1 / 300), l = 0, s = 0.6, o = /* @__PURE__ */ new Map(), f = rl(a), u = hr("tick", "end"), h = lg();
  e == null && (e = []);
  function a() {
    c(), u.call("tick", t), n < i && (f.stop(), u.call("end", t));
  }
  function c(_) {
    var p, m = e.length, w;
    _ === void 0 && (_ = 1);
    for (var A = 0; A < _; ++A)
      for (n += (l - n) * r, o.forEach(function(z) {
        z(n);
      }), p = 0; p < m; ++p)
        w = e[p], w.fx == null ? w.x += w.vx *= s : (w.x = w.fx, w.vx = 0), w.fy == null ? w.y += w.vy *= s : (w.y = w.fy, w.vy = 0);
    return t;
  }
  function d() {
    for (var _ = 0, p = e.length, m; _ < p; ++_) {
      if (m = e[_], m.index = _, m.fx != null && (m.x = m.fx), m.fy != null && (m.y = m.fy), isNaN(m.x) || isNaN(m.y)) {
        var w = sg * Math.sqrt(0.5 + _), A = _ * og;
        m.x = w * Math.cos(A), m.y = w * Math.sin(A);
      }
      (isNaN(m.vx) || isNaN(m.vy)) && (m.vx = m.vy = 0);
    }
  }
  function g(_) {
    return _.initialize && _.initialize(e, h), _;
  }
  return d(), t = {
    tick: c,
    restart: function() {
      return f.restart(a), t;
    },
    stop: function() {
      return f.stop(), t;
    },
    nodes: function(_) {
      return arguments.length ? (e = _, d(), o.forEach(g), t) : e;
    },
    alpha: function(_) {
      return arguments.length ? (n = +_, t) : n;
    },
    alphaMin: function(_) {
      return arguments.length ? (i = +_, t) : i;
    },
    alphaDecay: function(_) {
      return arguments.length ? (r = +_, t) : +r;
    },
    alphaTarget: function(_) {
      return arguments.length ? (l = +_, t) : l;
    },
    velocityDecay: function(_) {
      return arguments.length ? (s = 1 - _, t) : 1 - s;
    },
    randomSource: function(_) {
      return arguments.length ? (h = _, o.forEach(g), t) : h;
    },
    force: function(_, p) {
      return arguments.length > 1 ? (p == null ? o.delete(_) : o.set(_, g(p)), t) : o.get(_);
    },
    find: function(_, p, m) {
      var w = 0, A = e.length, z, M, E, D, I;
      for (m == null ? m = 1 / 0 : m *= m, w = 0; w < A; ++w)
        D = e[w], z = _ - D.x, M = p - D.y, E = z * z + M * M, E < m && (I = D, m = E);
      return I;
    },
    on: function(_, p) {
      return arguments.length > 1 ? (u.on(_, p), t) : u.on(_);
    }
  };
}
function ug(e) {
  var t = At(0.1), n, i, r;
  typeof e != "function" && (e = At(e == null ? 0 : +e));
  function l(o) {
    for (var f = 0, u = n.length, h; f < u; ++f)
      h = n[f], h.vx += (r[f] - h.x) * i[f] * o;
  }
  function s() {
    if (n) {
      var o, f = n.length;
      for (i = new Array(f), r = new Array(f), o = 0; o < f; ++o)
        i[o] = isNaN(r[o] = +e(n[o], o, n)) ? 0 : +t(n[o], o, n);
    }
  }
  return l.initialize = function(o) {
    n = o, s();
  }, l.strength = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : At(+o), s(), l) : t;
  }, l.x = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : At(+o), s(), l) : e;
  }, l;
}
function ag(e) {
  var t = At(0.1), n, i, r;
  typeof e != "function" && (e = At(e == null ? 0 : +e));
  function l(o) {
    for (var f = 0, u = n.length, h; f < u; ++f)
      h = n[f], h.vy += (r[f] - h.y) * i[f] * o;
  }
  function s() {
    if (n) {
      var o, f = n.length;
      for (i = new Array(f), r = new Array(f), o = 0; o < f; ++o)
        i[o] = isNaN(r[o] = +e(n[o], o, n)) ? 0 : +t(n[o], o, n);
    }
  }
  return l.initialize = function(o) {
    n = o, s();
  }, l.strength = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : At(+o), s(), l) : t;
  }, l.y = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : At(+o), s(), l) : e;
  }, l;
}
const Li = (e) => () => e;
function cg(e, {
  sourceEvent: t,
  target: n,
  transform: i,
  dispatch: r
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: r }
  });
}
function $t(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
$t.prototype = {
  constructor: $t,
  scale: function(e) {
    return e === 1 ? this : new $t(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new $t(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Df = new $t(1, 0, 0);
$t.prototype;
function Mr(e) {
  e.stopImmediatePropagation();
}
function xn(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function hg(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function dg() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function mo() {
  return this.__zoom || Df;
}
function gg(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function _g() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function mg(e, t, n) {
  var i = e.invertX(t[0][0]) - n[0][0], r = e.invertX(t[1][0]) - n[1][0], l = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function bg() {
  var e = hg, t = dg, n = mg, i = gg, r = _g, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, f = fa, u = hr("start", "zoom", "end"), h, a, c, d = 500, g = 150, _ = 0, p = 10;
  function m(N) {
    N.property("__zoom", mo).on("wheel.zoom", I, { passive: !1 }).on("mousedown.zoom", v).on("dblclick.zoom", k).filter(r).on("touchstart.zoom", q).on("touchmove.zoom", Z).on("touchend.zoom touchcancel.zoom", G).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  m.transform = function(N, R, C, P) {
    var H = N.selection ? N.selection() : N;
    H.property("__zoom", mo), N !== H ? M(N, R, C, P) : H.interrupt().each(function() {
      E(this, arguments).event(P).start().zoom(null, typeof R == "function" ? R.apply(this, arguments) : R).end();
    });
  }, m.scaleBy = function(N, R, C, P) {
    m.scaleTo(N, function() {
      var H = this.__zoom.k, K = typeof R == "function" ? R.apply(this, arguments) : R;
      return H * K;
    }, C, P);
  }, m.scaleTo = function(N, R, C, P) {
    m.transform(N, function() {
      var H = t.apply(this, arguments), K = this.__zoom, $ = C == null ? z(H) : typeof C == "function" ? C.apply(this, arguments) : C, re = K.invert($), le = typeof R == "function" ? R.apply(this, arguments) : R;
      return n(A(w(K, le), $, re), H, s);
    }, C, P);
  }, m.translateBy = function(N, R, C, P) {
    m.transform(N, function() {
      return n(this.__zoom.translate(
        typeof R == "function" ? R.apply(this, arguments) : R,
        typeof C == "function" ? C.apply(this, arguments) : C
      ), t.apply(this, arguments), s);
    }, null, P);
  }, m.translateTo = function(N, R, C, P, H) {
    m.transform(N, function() {
      var K = t.apply(this, arguments), $ = this.__zoom, re = P == null ? z(K) : typeof P == "function" ? P.apply(this, arguments) : P;
      return n(Df.translate(re[0], re[1]).scale($.k).translate(
        typeof R == "function" ? -R.apply(this, arguments) : -R,
        typeof C == "function" ? -C.apply(this, arguments) : -C
      ), K, s);
    }, P, H);
  };
  function w(N, R) {
    return R = Math.max(l[0], Math.min(l[1], R)), R === N.k ? N : new $t(R, N.x, N.y);
  }
  function A(N, R, C) {
    var P = R[0] - C[0] * N.k, H = R[1] - C[1] * N.k;
    return P === N.x && H === N.y ? N : new $t(N.k, P, H);
  }
  function z(N) {
    return [(+N[0][0] + +N[1][0]) / 2, (+N[0][1] + +N[1][1]) / 2];
  }
  function M(N, R, C, P) {
    N.on("start.zoom", function() {
      E(this, arguments).event(P).start();
    }).on("interrupt.zoom end.zoom", function() {
      E(this, arguments).event(P).end();
    }).tween("zoom", function() {
      var H = this, K = arguments, $ = E(H, K).event(P), re = t.apply(H, K), le = C == null ? z(re) : typeof C == "function" ? C.apply(H, K) : C, be = Math.max(re[1][0] - re[0][0], re[1][1] - re[0][1]), ce = H.__zoom, Se = typeof R == "function" ? R.apply(H, K) : R, ze = f(ce.invert(le).concat(be / ce.k), Se.invert(le).concat(be / Se.k));
      return function(Re) {
        if (Re === 1)
          Re = Se;
        else {
          var Ne = ze(Re), oe = be / Ne[2];
          Re = new $t(oe, le[0] - Ne[0] * oe, le[1] - Ne[1] * oe);
        }
        $.zoom(null, Re);
      };
    });
  }
  function E(N, R, C) {
    return !C && N.__zooming || new D(N, R);
  }
  function D(N, R) {
    this.that = N, this.args = R, this.active = 0, this.sourceEvent = null, this.extent = t.apply(N, R), this.taps = 0;
  }
  D.prototype = {
    event: function(N) {
      return N && (this.sourceEvent = N), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(N, R) {
      return this.mouse && N !== "mouse" && (this.mouse[1] = R.invert(this.mouse[0])), this.touch0 && N !== "touch" && (this.touch0[1] = R.invert(this.touch0[0])), this.touch1 && N !== "touch" && (this.touch1[1] = R.invert(this.touch1[0])), this.that.__zoom = R, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(N) {
      var R = sn(this.that).datum();
      u.call(
        N,
        this.that,
        new cg(N, {
          sourceEvent: this.sourceEvent,
          target: m,
          type: N,
          transform: this.that.__zoom,
          dispatch: u
        }),
        R
      );
    }
  };
  function I(N, ...R) {
    if (!e.apply(this, arguments))
      return;
    var C = E(this, R).event(N), P = this.__zoom, H = Math.max(l[0], Math.min(l[1], P.k * Math.pow(2, i.apply(this, arguments)))), K = fn(N);
    if (C.wheel)
      (C.mouse[0][0] !== K[0] || C.mouse[0][1] !== K[1]) && (C.mouse[1] = P.invert(C.mouse[0] = K)), clearTimeout(C.wheel);
    else {
      if (P.k === H)
        return;
      C.mouse = [K, P.invert(K)], ji(this), C.start();
    }
    xn(N), C.wheel = setTimeout($, g), C.zoom("mouse", n(A(w(P, H), C.mouse[0], C.mouse[1]), C.extent, s));
    function $() {
      C.wheel = null, C.end();
    }
  }
  function v(N, ...R) {
    if (c || !e.apply(this, arguments))
      return;
    var C = N.currentTarget, P = E(this, R, !0).event(N), H = sn(N.view).on("mousemove.zoom", le, !0).on("mouseup.zoom", be, !0), K = fn(N, C), $ = N.clientX, re = N.clientY;
    Sd(N.view), Mr(N), P.mouse = [K, this.__zoom.invert(K)], ji(this), P.start();
    function le(ce) {
      if (xn(ce), !P.moved) {
        var Se = ce.clientX - $, ze = ce.clientY - re;
        P.moved = Se * Se + ze * ze > _;
      }
      P.event(ce).zoom("mouse", n(A(P.that.__zoom, P.mouse[0] = fn(ce, C), P.mouse[1]), P.extent, s));
    }
    function be(ce) {
      H.on("mousemove.zoom mouseup.zoom", null), kd(ce.view, P.moved), xn(ce), P.event(ce).end();
    }
  }
  function k(N, ...R) {
    if (e.apply(this, arguments)) {
      var C = this.__zoom, P = fn(N.changedTouches ? N.changedTouches[0] : N, this), H = C.invert(P), K = C.k * (N.shiftKey ? 0.5 : 2), $ = n(A(w(C, K), P, H), t.apply(this, R), s);
      xn(N), o > 0 ? sn(this).transition().duration(o).call(M, $, P, N) : sn(this).call(m.transform, $, P, N);
    }
  }
  function q(N, ...R) {
    if (e.apply(this, arguments)) {
      var C = N.touches, P = C.length, H = E(this, R, N.changedTouches.length === P).event(N), K, $, re, le;
      for (Mr(N), $ = 0; $ < P; ++$)
        re = C[$], le = fn(re, this), le = [le, this.__zoom.invert(le), re.identifier], H.touch0 ? !H.touch1 && H.touch0[2] !== le[2] && (H.touch1 = le, H.taps = 0) : (H.touch0 = le, K = !0, H.taps = 1 + !!h);
      h && (h = clearTimeout(h)), K && (H.taps < 2 && (a = le[0], h = setTimeout(function() {
        h = null;
      }, d)), ji(this), H.start());
    }
  }
  function Z(N, ...R) {
    if (this.__zooming) {
      var C = E(this, R).event(N), P = N.changedTouches, H = P.length, K, $, re, le;
      for (xn(N), K = 0; K < H; ++K)
        $ = P[K], re = fn($, this), C.touch0 && C.touch0[2] === $.identifier ? C.touch0[0] = re : C.touch1 && C.touch1[2] === $.identifier && (C.touch1[0] = re);
      if ($ = C.that.__zoom, C.touch1) {
        var be = C.touch0[0], ce = C.touch0[1], Se = C.touch1[0], ze = C.touch1[1], Re = (Re = Se[0] - be[0]) * Re + (Re = Se[1] - be[1]) * Re, Ne = (Ne = ze[0] - ce[0]) * Ne + (Ne = ze[1] - ce[1]) * Ne;
        $ = w($, Math.sqrt(Re / Ne)), re = [(be[0] + Se[0]) / 2, (be[1] + Se[1]) / 2], le = [(ce[0] + ze[0]) / 2, (ce[1] + ze[1]) / 2];
      } else if (C.touch0)
        re = C.touch0[0], le = C.touch0[1];
      else
        return;
      C.zoom("touch", n(A($, re, le), C.extent, s));
    }
  }
  function G(N, ...R) {
    if (this.__zooming) {
      var C = E(this, R).event(N), P = N.changedTouches, H = P.length, K, $;
      for (Mr(N), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), K = 0; K < H; ++K)
        $ = P[K], C.touch0 && C.touch0[2] === $.identifier ? delete C.touch0 : C.touch1 && C.touch1[2] === $.identifier && delete C.touch1;
      if (C.touch1 && !C.touch0 && (C.touch0 = C.touch1, delete C.touch1), C.touch0)
        C.touch0[1] = this.__zoom.invert(C.touch0[0]);
      else if (C.end(), C.taps === 2 && ($ = fn($, this), Math.hypot(a[0] - $[0], a[1] - $[1]) < p)) {
        var re = sn(this).on("dblclick.zoom");
        re && re.apply(this, arguments);
      }
    }
  }
  return m.wheelDelta = function(N) {
    return arguments.length ? (i = typeof N == "function" ? N : Li(+N), m) : i;
  }, m.filter = function(N) {
    return arguments.length ? (e = typeof N == "function" ? N : Li(!!N), m) : e;
  }, m.touchable = function(N) {
    return arguments.length ? (r = typeof N == "function" ? N : Li(!!N), m) : r;
  }, m.extent = function(N) {
    return arguments.length ? (t = typeof N == "function" ? N : Li([[+N[0][0], +N[0][1]], [+N[1][0], +N[1][1]]]), m) : t;
  }, m.scaleExtent = function(N) {
    return arguments.length ? (l[0] = +N[0], l[1] = +N[1], m) : [l[0], l[1]];
  }, m.translateExtent = function(N) {
    return arguments.length ? (s[0][0] = +N[0][0], s[1][0] = +N[1][0], s[0][1] = +N[0][1], s[1][1] = +N[1][1], m) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, m.constrain = function(N) {
    return arguments.length ? (n = N, m) : n;
  }, m.duration = function(N) {
    return arguments.length ? (o = +N, m) : o;
  }, m.interpolate = function(N) {
    return arguments.length ? (f = N, m) : f;
  }, m.on = function() {
    var N = u.on.apply(u, arguments);
    return N === u ? m : N;
  }, m.clickDistance = function(N) {
    return arguments.length ? (_ = (N = +N) * N, m) : Math.sqrt(_);
  }, m.tapDistance = function(N) {
    return arguments.length ? (p = +N, m) : p;
  }, m;
}
function pg(e) {
  const t = +this._x.call(null, e);
  return Wf(this.cover(t), t, e);
}
function Wf(e, t, n) {
  if (isNaN(t))
    return e;
  var i, r = e._root, l = { data: n }, s = e._x0, o = e._x1, f, u, h, a, c;
  if (!r)
    return e._root = l, e;
  for (; r.length; )
    if ((h = t >= (f = (s + o) / 2)) ? s = f : o = f, i = r, !(r = r[a = +h]))
      return i[a] = l, e;
  if (u = +e._x.call(null, r.data), t === u)
    return l.next = r, i ? i[a] = l : e._root = l, e;
  do
    i = i ? i[a] = new Array(2) : e._root = new Array(2), (h = t >= (f = (s + o) / 2)) ? s = f : o = f;
  while ((a = +h) == (c = +(u >= f)));
  return i[c] = r, i[a] = l, e;
}
function wg(e) {
  Array.isArray(e) || (e = Array.from(e));
  const t = e.length, n = new Float64Array(t);
  let i = 1 / 0, r = -1 / 0;
  for (let l = 0, s; l < t; ++l)
    isNaN(s = +this._x.call(null, e[l])) || (n[l] = s, s < i && (i = s), s > r && (r = s));
  if (i > r)
    return this;
  this.cover(i).cover(r);
  for (let l = 0; l < t; ++l)
    Wf(this, n[l], e[l]);
  return this;
}
function yg(e) {
  if (isNaN(e = +e))
    return this;
  var t = this._x0, n = this._x1;
  if (isNaN(t))
    n = (t = Math.floor(e)) + 1;
  else {
    for (var i = n - t || 1, r = this._root, l, s; t > e || e >= n; )
      switch (s = +(e < t), l = new Array(2), l[s] = r, r = l, i *= 2, s) {
        case 0:
          n = t + i;
          break;
        case 1:
          t = n - i;
          break;
      }
    this._root && this._root.length && (this._root = r);
  }
  return this._x0 = t, this._x1 = n, this;
}
function vg() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function Sg(e) {
  return arguments.length ? this.cover(+e[0][0]).cover(+e[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function en(e, t, n) {
  this.node = e, this.x0 = t, this.x1 = n;
}
function kg(e, t) {
  var n, i = this._x0, r, l, s = this._x1, o = [], f = this._root, u, h;
  for (f && o.push(new en(f, i, s)), t == null ? t = 1 / 0 : (i = e - t, s = e + t); u = o.pop(); )
    if (!(!(f = u.node) || (r = u.x0) > s || (l = u.x1) < i))
      if (f.length) {
        var a = (r + l) / 2;
        o.push(
          new en(f[1], a, l),
          new en(f[0], r, a)
        ), (h = +(e >= a)) && (u = o[o.length - 1], o[o.length - 1] = o[o.length - 1 - h], o[o.length - 1 - h] = u);
      } else {
        var c = Math.abs(e - +this._x.call(null, f.data));
        c < t && (t = c, i = e - c, s = e + c, n = f.data);
      }
  return n;
}
function Ng(e) {
  if (isNaN(f = +this._x.call(null, e)))
    return this;
  var t, n = this._root, i, r, l, s = this._x0, o = this._x1, f, u, h, a, c;
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
    if (r = n, !(n = n.next))
      return this;
  return (l = n.next) && delete n.next, r ? (l ? r.next = l : delete r.next, this) : t ? (l ? t[a] = l : delete t[a], (n = t[0] || t[1]) && n === (t[1] || t[0]) && !n.length && (i ? i[c] = n : this._root = n), this) : (this._root = l, this);
}
function Rg(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function zg() {
  return this._root;
}
function Mg() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function Ag(e) {
  var t = [], n, i = this._root, r, l, s;
  for (i && t.push(new en(i, this._x0, this._x1)); n = t.pop(); )
    if (!e(i = n.node, l = n.x0, s = n.x1) && i.length) {
      var o = (l + s) / 2;
      (r = i[1]) && t.push(new en(r, o, s)), (r = i[0]) && t.push(new en(r, l, o));
    }
  return this;
}
function Cg(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new en(this._root, this._x0, this._x1)); i = t.pop(); ) {
    var r = i.node;
    if (r.length) {
      var l, s = i.x0, o = i.x1, f = (s + o) / 2;
      (l = r[0]) && t.push(new en(l, s, f)), (l = r[1]) && t.push(new en(l, f, o));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.x1);
  return this;
}
function Eg(e) {
  return e[0];
}
function Ig(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function Bf(e, t) {
  var n = new fl(t ?? Eg, NaN, NaN);
  return e == null ? n : n.addAll(e);
}
function fl(e, t, n) {
  this._x = e, this._x0 = t, this._x1 = n, this._root = void 0;
}
function bo(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var Rt = Bf.prototype = fl.prototype;
Rt.copy = function() {
  var e = new fl(this._x, this._x0, this._x1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = bo(t), e;
  for (n = [{ source: t, target: e._root = new Array(2) }]; t = n.pop(); )
    for (var r = 0; r < 2; ++r)
      (i = t.source[r]) && (i.length ? n.push({ source: i, target: t.target[r] = new Array(2) }) : t.target[r] = bo(i));
  return e;
};
Rt.add = pg;
Rt.addAll = wg;
Rt.cover = yg;
Rt.data = vg;
Rt.extent = Sg;
Rt.find = kg;
Rt.remove = Ng;
Rt.removeAll = Rg;
Rt.root = zg;
Rt.size = Mg;
Rt.visit = Ag;
Rt.visitAfter = Cg;
Rt.x = Ig;
function Og(e) {
  const t = +this._x.call(null, e), n = +this._y.call(null, e);
  return Vf(this.cover(t, n), t, n, e);
}
function Vf(e, t, n, i) {
  if (isNaN(t) || isNaN(n))
    return e;
  var r, l = e._root, s = { data: i }, o = e._x0, f = e._y0, u = e._x1, h = e._y1, a, c, d, g, _, p, m, w;
  if (!l)
    return e._root = s, e;
  for (; l.length; )
    if ((_ = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c, r = l, !(l = l[m = p << 1 | _]))
      return r[m] = s, e;
  if (d = +e._x.call(null, l.data), g = +e._y.call(null, l.data), t === d && n === g)
    return s.next = l, r ? r[m] = s : e._root = s, e;
  do
    r = r ? r[m] = new Array(4) : e._root = new Array(4), (_ = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c;
  while ((m = p << 1 | _) === (w = (g >= c) << 1 | d >= a));
  return r[w] = l, r[m] = s, e;
}
function Tg(e) {
  var t, n, i = e.length, r, l, s = new Array(i), o = new Array(i), f = 1 / 0, u = 1 / 0, h = -1 / 0, a = -1 / 0;
  for (n = 0; n < i; ++n)
    isNaN(r = +this._x.call(null, t = e[n])) || isNaN(l = +this._y.call(null, t)) || (s[n] = r, o[n] = l, r < f && (f = r), r > h && (h = r), l < u && (u = l), l > a && (a = l));
  if (f > h || u > a)
    return this;
  for (this.cover(f, u).cover(h, a), n = 0; n < i; ++n)
    Vf(this, s[n], o[n], e[n]);
  return this;
}
function Pg(e, t) {
  if (isNaN(e = +e) || isNaN(t = +t))
    return this;
  var n = this._x0, i = this._y0, r = this._x1, l = this._y1;
  if (isNaN(n))
    r = (n = Math.floor(e)) + 1, l = (i = Math.floor(t)) + 1;
  else {
    for (var s = r - n || 1, o = this._root, f, u; n > e || e >= r || i > t || t >= l; )
      switch (u = (t < i) << 1 | e < n, f = new Array(4), f[u] = o, o = f, s *= 2, u) {
        case 0:
          r = n + s, l = i + s;
          break;
        case 1:
          n = r - s, l = i + s;
          break;
        case 2:
          r = n + s, i = l - s;
          break;
        case 3:
          n = r - s, i = l - s;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = n, this._y0 = i, this._x1 = r, this._y1 = l, this;
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
function qg(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function bt(e, t, n, i, r) {
  this.node = e, this.x0 = t, this.y0 = n, this.x1 = i, this.y1 = r;
}
function Lg(e, t, n) {
  var i, r = this._x0, l = this._y0, s, o, f, u, h = this._x1, a = this._y1, c = [], d = this._root, g, _;
  for (d && c.push(new bt(d, r, l, h, a)), n == null ? n = 1 / 0 : (r = e - n, l = t - n, h = e + n, a = t + n, n *= n); g = c.pop(); )
    if (!(!(d = g.node) || (s = g.x0) > h || (o = g.y0) > a || (f = g.x1) < r || (u = g.y1) < l))
      if (d.length) {
        var p = (s + f) / 2, m = (o + u) / 2;
        c.push(
          new bt(d[3], p, m, f, u),
          new bt(d[2], s, m, p, u),
          new bt(d[1], p, o, f, m),
          new bt(d[0], s, o, p, m)
        ), (_ = (t >= m) << 1 | e >= p) && (g = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - _], c[c.length - 1 - _] = g);
      } else {
        var w = e - +this._x.call(null, d.data), A = t - +this._y.call(null, d.data), z = w * w + A * A;
        if (z < n) {
          var M = Math.sqrt(n = z);
          r = e - M, l = t - M, h = e + M, a = t + M, i = d.data;
        }
      }
  return i;
}
function Dg(e) {
  if (isNaN(h = +this._x.call(null, e)) || isNaN(a = +this._y.call(null, e)))
    return this;
  var t, n = this._root, i, r, l, s = this._x0, o = this._y0, f = this._x1, u = this._y1, h, a, c, d, g, _, p, m;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((g = h >= (c = (s + f) / 2)) ? s = c : f = c, (_ = a >= (d = (o + u) / 2)) ? o = d : u = d, t = n, !(n = n[p = _ << 1 | g]))
        return this;
      if (!n.length)
        break;
      (t[p + 1 & 3] || t[p + 2 & 3] || t[p + 3 & 3]) && (i = t, m = p);
    }
  for (; n.data !== e; )
    if (r = n, !(n = n.next))
      return this;
  return (l = n.next) && delete n.next, r ? (l ? r.next = l : delete r.next, this) : t ? (l ? t[p] = l : delete t[p], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (i ? i[m] = n : this._root = n), this) : (this._root = l, this);
}
function Wg(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function Bg() {
  return this._root;
}
function Vg() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function Hg(e) {
  var t = [], n, i = this._root, r, l, s, o, f;
  for (i && t.push(new bt(i, this._x0, this._y0, this._x1, this._y1)); n = t.pop(); )
    if (!e(i = n.node, l = n.x0, s = n.y0, o = n.x1, f = n.y1) && i.length) {
      var u = (l + o) / 2, h = (s + f) / 2;
      (r = i[3]) && t.push(new bt(r, u, h, o, f)), (r = i[2]) && t.push(new bt(r, l, h, u, f)), (r = i[1]) && t.push(new bt(r, u, s, o, h)), (r = i[0]) && t.push(new bt(r, l, s, u, h));
    }
  return this;
}
function Xg(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new bt(this._root, this._x0, this._y0, this._x1, this._y1)); i = t.pop(); ) {
    var r = i.node;
    if (r.length) {
      var l, s = i.x0, o = i.y0, f = i.x1, u = i.y1, h = (s + f) / 2, a = (o + u) / 2;
      (l = r[0]) && t.push(new bt(l, s, o, h, a)), (l = r[1]) && t.push(new bt(l, h, o, f, a)), (l = r[2]) && t.push(new bt(l, s, a, h, u)), (l = r[3]) && t.push(new bt(l, h, a, f, u));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.y0, i.x1, i.y1);
  return this;
}
function Yg(e) {
  return e[0];
}
function jg(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function Gg(e) {
  return e[1];
}
function Ug(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function Hf(e, t, n) {
  var i = new ul(t ?? Yg, n ?? Gg, NaN, NaN, NaN, NaN);
  return e == null ? i : i.addAll(e);
}
function ul(e, t, n, i, r, l) {
  this._x = e, this._y = t, this._x0 = n, this._y0 = i, this._x1 = r, this._y1 = l, this._root = void 0;
}
function po(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var wt = Hf.prototype = ul.prototype;
wt.copy = function() {
  var e = new ul(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = po(t), e;
  for (n = [{ source: t, target: e._root = new Array(4) }]; t = n.pop(); )
    for (var r = 0; r < 4; ++r)
      (i = t.source[r]) && (i.length ? n.push({ source: i, target: t.target[r] = new Array(4) }) : t.target[r] = po(i));
  return e;
};
wt.add = Og;
wt.addAll = Tg;
wt.cover = Pg;
wt.data = Fg;
wt.extent = qg;
wt.find = Lg;
wt.remove = Dg;
wt.removeAll = Wg;
wt.root = Bg;
wt.size = Vg;
wt.visit = Hg;
wt.visitAfter = Xg;
wt.x = jg;
wt.y = Ug;
function Kg(e) {
  const t = +this._x.call(null, e), n = +this._y.call(null, e), i = +this._z.call(null, e);
  return Xf(this.cover(t, n, i), t, n, i, e);
}
function Xf(e, t, n, i, r) {
  if (isNaN(t) || isNaN(n) || isNaN(i))
    return e;
  var l, s = e._root, o = { data: r }, f = e._x0, u = e._y0, h = e._z0, a = e._x1, c = e._y1, d = e._z1, g, _, p, m, w, A, z, M, E, D, I;
  if (!s)
    return e._root = o, e;
  for (; s.length; )
    if ((z = t >= (g = (f + a) / 2)) ? f = g : a = g, (M = n >= (_ = (u + c) / 2)) ? u = _ : c = _, (E = i >= (p = (h + d) / 2)) ? h = p : d = p, l = s, !(s = s[D = E << 2 | M << 1 | z]))
      return l[D] = o, e;
  if (m = +e._x.call(null, s.data), w = +e._y.call(null, s.data), A = +e._z.call(null, s.data), t === m && n === w && i === A)
    return o.next = s, l ? l[D] = o : e._root = o, e;
  do
    l = l ? l[D] = new Array(8) : e._root = new Array(8), (z = t >= (g = (f + a) / 2)) ? f = g : a = g, (M = n >= (_ = (u + c) / 2)) ? u = _ : c = _, (E = i >= (p = (h + d) / 2)) ? h = p : d = p;
  while ((D = E << 2 | M << 1 | z) === (I = (A >= p) << 2 | (w >= _) << 1 | m >= g));
  return l[I] = s, l[D] = o, e;
}
function Qg(e) {
  Array.isArray(e) || (e = Array.from(e));
  const t = e.length, n = new Float64Array(t), i = new Float64Array(t), r = new Float64Array(t);
  let l = 1 / 0, s = 1 / 0, o = 1 / 0, f = -1 / 0, u = -1 / 0, h = -1 / 0;
  for (let a = 0, c, d, g, _; a < t; ++a)
    isNaN(d = +this._x.call(null, c = e[a])) || isNaN(g = +this._y.call(null, c)) || isNaN(_ = +this._z.call(null, c)) || (n[a] = d, i[a] = g, r[a] = _, d < l && (l = d), d > f && (f = d), g < s && (s = g), g > u && (u = g), _ < o && (o = _), _ > h && (h = _));
  if (l > f || s > u || o > h)
    return this;
  this.cover(l, s, o).cover(f, u, h);
  for (let a = 0; a < t; ++a)
    Xf(this, n[a], i[a], r[a], e[a]);
  return this;
}
function Zg(e, t, n) {
  if (isNaN(e = +e) || isNaN(t = +t) || isNaN(n = +n))
    return this;
  var i = this._x0, r = this._y0, l = this._z0, s = this._x1, o = this._y1, f = this._z1;
  if (isNaN(i))
    s = (i = Math.floor(e)) + 1, o = (r = Math.floor(t)) + 1, f = (l = Math.floor(n)) + 1;
  else {
    for (var u = s - i || 1, h = this._root, a, c; i > e || e >= s || r > t || t >= o || l > n || n >= f; )
      switch (c = (n < l) << 2 | (t < r) << 1 | e < i, a = new Array(8), a[c] = h, h = a, u *= 2, c) {
        case 0:
          s = i + u, o = r + u, f = l + u;
          break;
        case 1:
          i = s - u, o = r + u, f = l + u;
          break;
        case 2:
          s = i + u, r = o - u, f = l + u;
          break;
        case 3:
          i = s - u, r = o - u, f = l + u;
          break;
        case 4:
          s = i + u, o = r + u, l = f - u;
          break;
        case 5:
          i = s - u, o = r + u, l = f - u;
          break;
        case 6:
          s = i + u, r = o - u, l = f - u;
          break;
        case 7:
          i = s - u, r = o - u, l = f - u;
          break;
      }
    this._root && this._root.length && (this._root = h);
  }
  return this._x0 = i, this._y0 = r, this._z0 = l, this._x1 = s, this._y1 = o, this._z1 = f, this;
}
function Jg() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function xg(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1], +e[0][2]).cover(+e[1][0], +e[1][1], +e[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function Ue(e, t, n, i, r, l, s) {
  this.node = e, this.x0 = t, this.y0 = n, this.z0 = i, this.x1 = r, this.y1 = l, this.z1 = s;
}
function $g(e, t, n, i) {
  var r, l = this._x0, s = this._y0, o = this._z0, f, u, h, a, c, d, g = this._x1, _ = this._y1, p = this._z1, m = [], w = this._root, A, z;
  for (w && m.push(new Ue(w, l, s, o, g, _, p)), i == null ? i = 1 / 0 : (l = e - i, s = t - i, o = n - i, g = e + i, _ = t + i, p = n + i, i *= i); A = m.pop(); )
    if (!(!(w = A.node) || (f = A.x0) > g || (u = A.y0) > _ || (h = A.z0) > p || (a = A.x1) < l || (c = A.y1) < s || (d = A.z1) < o))
      if (w.length) {
        var M = (f + a) / 2, E = (u + c) / 2, D = (h + d) / 2;
        m.push(
          new Ue(w[7], M, E, D, a, c, d),
          new Ue(w[6], f, E, D, M, c, d),
          new Ue(w[5], M, u, D, a, E, d),
          new Ue(w[4], f, u, D, M, E, d),
          new Ue(w[3], M, E, h, a, c, D),
          new Ue(w[2], f, E, h, M, c, D),
          new Ue(w[1], M, u, h, a, E, D),
          new Ue(w[0], f, u, h, M, E, D)
        ), (z = (n >= D) << 2 | (t >= E) << 1 | e >= M) && (A = m[m.length - 1], m[m.length - 1] = m[m.length - 1 - z], m[m.length - 1 - z] = A);
      } else {
        var I = e - +this._x.call(null, w.data), v = t - +this._y.call(null, w.data), k = n - +this._z.call(null, w.data), q = I * I + v * v + k * k;
        if (q < i) {
          var Z = Math.sqrt(i = q);
          l = e - Z, s = t - Z, o = n - Z, g = e + Z, _ = t + Z, p = n + Z, r = w.data;
        }
      }
  return r;
}
function e_(e) {
  if (isNaN(c = +this._x.call(null, e)) || isNaN(d = +this._y.call(null, e)) || isNaN(g = +this._z.call(null, e)))
    return this;
  var t, n = this._root, i, r, l, s = this._x0, o = this._y0, f = this._z0, u = this._x1, h = this._y1, a = this._z1, c, d, g, _, p, m, w, A, z, M, E;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((w = c >= (_ = (s + u) / 2)) ? s = _ : u = _, (A = d >= (p = (o + h) / 2)) ? o = p : h = p, (z = g >= (m = (f + a) / 2)) ? f = m : a = m, t = n, !(n = n[M = z << 2 | A << 1 | w]))
        return this;
      if (!n.length)
        break;
      (t[M + 1 & 7] || t[M + 2 & 7] || t[M + 3 & 7] || t[M + 4 & 7] || t[M + 5 & 7] || t[M + 6 & 7] || t[M + 7 & 7]) && (i = t, E = M);
    }
  for (; n.data !== e; )
    if (r = n, !(n = n.next))
      return this;
  return (l = n.next) && delete n.next, r ? (l ? r.next = l : delete r.next, this) : t ? (l ? t[M] = l : delete t[M], (n = t[0] || t[1] || t[2] || t[3] || t[4] || t[5] || t[6] || t[7]) && n === (t[7] || t[6] || t[5] || t[4] || t[3] || t[2] || t[1] || t[0]) && !n.length && (i ? i[E] = n : this._root = n), this) : (this._root = l, this);
}
function t_(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function n_() {
  return this._root;
}
function i_() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function r_(e) {
  var t = [], n, i = this._root, r, l, s, o, f, u, h;
  for (i && t.push(new Ue(i, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); n = t.pop(); )
    if (!e(i = n.node, l = n.x0, s = n.y0, o = n.z0, f = n.x1, u = n.y1, h = n.z1) && i.length) {
      var a = (l + f) / 2, c = (s + u) / 2, d = (o + h) / 2;
      (r = i[7]) && t.push(new Ue(r, a, c, d, f, u, h)), (r = i[6]) && t.push(new Ue(r, l, c, d, a, u, h)), (r = i[5]) && t.push(new Ue(r, a, s, d, f, c, h)), (r = i[4]) && t.push(new Ue(r, l, s, d, a, c, h)), (r = i[3]) && t.push(new Ue(r, a, c, o, f, u, d)), (r = i[2]) && t.push(new Ue(r, l, c, o, a, u, d)), (r = i[1]) && t.push(new Ue(r, a, s, o, f, c, d)), (r = i[0]) && t.push(new Ue(r, l, s, o, a, c, d));
    }
  return this;
}
function l_(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new Ue(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); i = t.pop(); ) {
    var r = i.node;
    if (r.length) {
      var l, s = i.x0, o = i.y0, f = i.z0, u = i.x1, h = i.y1, a = i.z1, c = (s + u) / 2, d = (o + h) / 2, g = (f + a) / 2;
      (l = r[0]) && t.push(new Ue(l, s, o, f, c, d, g)), (l = r[1]) && t.push(new Ue(l, c, o, f, u, d, g)), (l = r[2]) && t.push(new Ue(l, s, d, f, c, h, g)), (l = r[3]) && t.push(new Ue(l, c, d, f, u, h, g)), (l = r[4]) && t.push(new Ue(l, s, o, g, c, d, a)), (l = r[5]) && t.push(new Ue(l, c, o, g, u, d, a)), (l = r[6]) && t.push(new Ue(l, s, d, g, c, h, a)), (l = r[7]) && t.push(new Ue(l, c, d, g, u, h, a));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.y0, i.z0, i.x1, i.y1, i.z1);
  return this;
}
function s_(e) {
  return e[0];
}
function o_(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function f_(e) {
  return e[1];
}
function u_(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function a_(e) {
  return e[2];
}
function c_(e) {
  return arguments.length ? (this._z = e, this) : this._z;
}
function Yf(e, t, n, i) {
  var r = new al(t ?? s_, n ?? f_, i ?? a_, NaN, NaN, NaN, NaN, NaN, NaN);
  return e == null ? r : r.addAll(e);
}
function al(e, t, n, i, r, l, s, o, f) {
  this._x = e, this._y = t, this._z = n, this._x0 = i, this._y0 = r, this._z0 = l, this._x1 = s, this._y1 = o, this._z1 = f, this._root = void 0;
}
function wo(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var at = Yf.prototype = al.prototype;
at.copy = function() {
  var e = new al(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = wo(t), e;
  for (n = [{ source: t, target: e._root = new Array(8) }]; t = n.pop(); )
    for (var r = 0; r < 8; ++r)
      (i = t.source[r]) && (i.length ? n.push({ source: i, target: t.target[r] = new Array(8) }) : t.target[r] = wo(i));
  return e;
};
at.add = Kg;
at.addAll = Qg;
at.cover = Zg;
at.data = Jg;
at.extent = xg;
at.find = $g;
at.remove = e_;
at.removeAll = t_;
at.root = n_;
at.size = i_;
at.visit = r_;
at.visitAfter = l_;
at.x = o_;
at.y = u_;
at.z = c_;
function sr(e) {
  "@babel/helpers - typeof";
  return sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sr(e);
}
function Ar(e) {
  return function() {
    return e;
  };
}
function h_() {
  var e, t = [], n = [], i = function(c) {
    return c.index;
  }, r = function(c) {
    return 100;
  }, l = function(c) {
    return 1;
  }, s = function(c, d) {
    return null;
  }, o = function(c) {
    return 1 / (c * c);
  }, f = 0.9;
  function u(a) {
    if (n.length)
      for (var c = 0; c < n.length; c++) {
        var d = n[c], g = d.target.x - d.source.x, _ = d.target.y - d.source.y || 0, p = d.target.z - d.target.z || 0, m = N(g, _, p);
        if (m !== 0) {
          var w = a * l(d) * o(m), A = r(d.source), z = r(d.target), M = s(A, z), E = G(z, M) * w, D = G(A, M) * w;
          d.source.vx += g / m * E, d.target.vx -= g / m * D, e > 1 && (d.source.vy += _ / m * E, d.target.vy -= _ / m * D), e > 2 && (d.source.vz += p / m * E, d.target.vz -= p / m * D);
        }
      }
    else
      for (var I = (e === 1 ? Bf(t, function(R) {
        return R.x;
      }) : e === 2 ? Hf(t, function(R) {
        return R.x;
      }, function(R) {
        return R.y;
      }) : e === 3 ? Yf(t, function(R) {
        return R.x;
      }, function(R) {
        return R.y;
      }, function(R) {
        return R.z;
      }) : null).visitAfter(Z), v = a * l(), k = function() {
        var C = t[q], P = r(C);
        I.visit(function(H, K, $, re, le) {
          if (!H.value)
            return !0;
          var be = [$, re, le][e - 1], ce = H.x - C.x, Se = H.y - C.y || 0, ze = H.z - C.z || 0, Re = N(ce, Se, ze);
          if ((be - K) / Re < f)
            return Re > 0 && Ne(), !0;
          if (H.length || Re === 0)
            return;
          do
            H.data !== C && Ne();
          while (H = H.next);
          function Ne() {
            var oe = G(H.value, s(P, H.value)) * v * o(Re);
            C.vx += ce / Re * oe, e > 1 && (C.vy += Se / Re * oe), e > 2 && (C.vz += ze / Re * oe);
          }
        });
      }, q = 0; q < t.length; q++)
        k();
    function Z(R) {
      var C = 0, P, H, K = 0, $, re, le, be;
      if (R.length) {
        for ($ = re = le = be = 0; be < Math.pow(2, e); ++be)
          (P = R[be]) && (H = Math.abs(P.value)) && (C += P.value, K += H, $ += H * (P.x || 0), re += H * (P.y || 0), le += H * (P.z || 0));
        R.x = $ / K, e > 1 && (R.y = re / K), e > 2 && (R.z = le / K);
      } else {
        P = R, P.x = P.data.x, e > 1 && (P.y = P.data.y), e > 2 && (P.z = P.data.z);
        do
          C += r(P.data);
        while (P = P.next);
      }
      R.value = C;
    }
    function G(R, C) {
      return C === null ? R : Math.abs(R) * (C ? 1 : -1);
    }
    function N(R, C, P) {
      return Math.sqrt(R * R + C * C + P * P);
    }
  }
  function h() {
    var a = {};
    t.forEach(function(c) {
      a[i(c)] = c;
    }), n.forEach(function(c) {
      sr(c.source) !== "object" && (c.source = a[c.source] || c.source), sr(c.target) !== "object" && (c.target = a[c.target] || c.target);
    });
  }
  return u.initialize = function(a) {
    t = a;
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
      d[g - 1] = arguments[g];
    e = d.find(function(_) {
      return [1, 2, 3].includes(_);
    }) || 2, h();
  }, u.links = function(a) {
    return arguments.length ? (n = a, h(), u) : n;
  }, u.id = function(a) {
    return arguments.length ? (i = a, u) : i;
  }, u.charge = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : Ar(+a), u) : r;
  }, u.strength = function(a) {
    return arguments.length ? (l = typeof a == "function" ? a : Ar(+a), u) : l;
  }, u.polarity = function(a) {
    return arguments.length ? (s = typeof a == "function" ? a : Ar(+a), u) : s;
  }, u.distanceWeight = function(a) {
    return arguments.length ? (o = a, u) : o;
  }, u.theta = function(a) {
    return arguments.length ? (f = a, u) : f;
  }, u;
}
function d_(e, t, n) {
  let i, r, l, s;
  const { data: o, width: f, height: u } = dn("LayerCake");
  ie(e, o, (R) => n(15, i = R)), ie(e, f, (R) => n(18, s = R)), ie(e, u, (R) => n(17, l = R));
  let { pointRadius: h = 7 } = t, { colorFn: a = null } = t, { hoveredSlices: c = null } = t, { centerYRatio: d = 0.5 } = t, { centerXRatio: g = 0.5 } = t, { hoveredMousePosition: _ = null } = t, { hoveredPointIndex: p = null } = t, { colorByError: m = !1 } = t, { colorBySlice: w = !0 } = t;
  const A = cr(Ko), { ctx: z } = dn("canvas");
  ie(e, z, (R) => n(16, r = R));
  let M = [], E = [], { simulationProgress: D = 0 } = t, I;
  cu(v);
  function v() {
    I && I.stop(), E = [], M = [], n(14, I = null);
  }
  function k(R, C, P) {
    E = R.map(($) => ({
      numSlices: $.slices.reduce((re, le) => re + le, 0)
    })), E.reduce(($, re) => Math.max($, re.numSlices), 1);
    let H = {}, K = Array.apply(null, Array(R[0].slices.length)).map(() => 0);
    R.forEach(($) => {
      $.slices.forEach((re, le) => {
        re && (K[le] += 1);
      });
    }), M = E.map(($, re) => {
      if ($.numSlices > 0) {
        let le = R[re].slices.reduce((ce, Se, ze) => K[ze] < K[ce] ? ze : ce, 0);
        if (H[le])
          return Object.assign({}, H[le]);
        let be = {
          x: C / 2 + Math.random() * 50 - 25,
          y: P / 2 + Math.random() * 50 - 25
        };
        return H[le] = be, be;
      }
      return {
        x: Math.random() * 800 - 400 + C / 2,
        y: Math.random() * 800 - 400 + P / 2
      };
    });
  }
  let q = null;
  function Z() {
    q && clearTimeout(q), q = setTimeout(() => G(i), 1e3);
  }
  function G(R) {
    setTimeout(() => {
      q && clearTimeout(q);
    });
    let C = s, P = l;
    k(R, C, P);
    let H = Array.apply(null, Array(R[0].slices.length)).map(() => 0);
    R.forEach((Ne) => {
      Ne.slices.forEach((oe, xe) => {
        oe && (H[xe] += 1);
      });
    });
    let K = H.reduce((Ne, oe) => Math.max(Ne, oe), 0), $ = [], re = [];
    i.forEach((Ne, oe) => {
      i.forEach((xe, it) => {
        if (oe <= it)
          return;
        let rt = Ne.slices.map((ke, Q) => (ke && xe.slices[Q]) * Math.log10(0.1 + K / H[Q])).reduce((ke, Q) => ke + Q, 0), S = Ne.slices.reduce((ke, Q, J) => ke + Q, 0), Pe = xe.slices.reduce((ke, Q, J) => ke + Q, 0);
        if (!(S == 0 && Pe == 0)) {
          if ((S == 0 || Pe == 0) && !(Ne.error && xe.error))
            return;
          rt == 0 ? re.push({
            source: oe,
            // links.push({ source: i, target: j, strength: 0.8, repel: true });
            target: it
          }) : $.push({
            source: oe,
            target: it,
            strength: rt / ((S + Pe) * 0.5)
          });
        }
      });
    });
    let le = ng($).distance(h * 0.5).strength((Ne) => Ne.strength), be = h_().links(re).strength(2).polarity(!1);
    n(14, I = fg(M).force("center", F2(C * g, P * d)).force("link", le).force("magnet", be).force("collide", eg().radius(h * 1.2).strength(0.1)).force("x", ug(C * g).strength(0.1)).force("y", ag(P * d).strength(0.1)));
    let ce = 200, Se = 0.1, ze = 1e-3, Re = 0;
    I.alpha(0.1).alphaDecay(5e-3).alphaMin(1e-6).on("tick", () => {
      N();
      let Ne = I.force("collide");
      Ne.strength(Math.min(1, Ne.strength() * 1.005)), Re >= ce && Se > ze && (Re = 0, Se *= 0.4, I.alpha(Se).restart(), Ne.strength(0.1)), Re += 1;
    });
  }
  function N(R, C) {
    uf(r, s, l), r.clearRect(0, 0, s, l), M.forEach((P, H) => {
      let K = h;
      C != null && H == p && (K *= 1.5);
      let $ = E[H].numSlices;
      if (pe(z, r.globalAlpha = 1, r), w) {
        r.beginPath();
        let re = i[H].slices, le = a != null ? a(i[H]) : null;
        pe(z, r.globalAlpha = le ? 1 : 0.4, r), pe(z, r.strokeStyle = "#94a3b8", r), pe(z, r.lineWidth = 1, r), r.arc(P.x, P.y, K - 3, 0, 2 * Math.PI, !1), r.stroke(), i[H].error && (pe(z, r.fillStyle = "#94a3b8", r), r.fill());
        let be = 4;
        pe(z, r.lineWidth = be, r), $ > 0 && re.forEach((ce, Se) => {
          ce && (r.beginPath(), pe(z, r.strokeStyle = A(Se), r), r.arc(P.x, P.y, K - 1, -Math.PI * 0.5 + Se * Math.PI * 2 / re.length, -Math.PI * 0.5 + (Se + 1) * Math.PI * 2 / re.length, !1), r.stroke());
        });
      } else if (m) {
        r.beginPath();
        let re = i[H].slices, le = a != null ? a(i[H]) : "steelblue";
        K = $ > 0 ? K : K * 0.5, r.arc(P.x, P.y, K, 0, 2 * Math.PI, !1), pe(z, r.strokeStyle = le, r), r.stroke(), $ > 0 && (r.beginPath(), r.moveTo(P.x, P.y), re.forEach((be, ce) => {
          be && (r.arc(P.x, P.y, K, -Math.PI * 0.5 + ce * Math.PI * 2 / re.length, -Math.PI * 0.5 + (ce + 1) * Math.PI * 2 / re.length, !1), r.lineTo(P.x, P.y));
        }), pe(z, r.fillStyle = le, r), r.fill());
      } else
        r.beginPath(), r.arc(P.x, P.y, K + (i[H].error ? 1 : 0), 0, 2 * Math.PI, !1), i[H].error ? (pe(z, r.fillStyle = a != null ? a(i[H]) : "steelblue", r), r.fill()) : (pe(z, r.strokeStyle = a != null ? a(i[H]) : "steelblue", r), r.stroke());
    });
  }
  return e.$$set = (R) => {
    "pointRadius" in R && n(6, h = R.pointRadius), "colorFn" in R && n(7, a = R.colorFn), "hoveredSlices" in R && n(5, c = R.hoveredSlices), "centerYRatio" in R && n(8, d = R.centerYRatio), "centerXRatio" in R && n(9, g = R.centerXRatio), "hoveredMousePosition" in R && n(10, _ = R.hoveredMousePosition), "hoveredPointIndex" in R && n(4, p = R.hoveredPointIndex), "colorByError" in R && n(11, m = R.colorByError), "colorBySlice" in R && n(12, w = R.colorBySlice), "simulationProgress" in R && n(13, D = R.simulationProgress);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*$data*/
    32768 && (i.length > 0 ? (v(), G(i)) : v()), e.$$.dirty & /*$width, $height*/
    393216 && Z(), e.$$.dirty & /*hoveredMousePosition, simulation, pointRadius, $data*/
    50240)
      if (_ && I) {
        let R = I.find(_[0], _[1], h * 2);
        R ? (n(5, c = i[R.index].slices), n(4, p = R.index)) : (n(5, c = null), n(4, p = null));
      } else
        n(5, c = null), n(4, p = null);
    if (e.$$.dirty & /*$ctx, simulation, colorFn, hoveredPointIndex*/
    82064 && r && I && N(a, p), e.$$.dirty & /*$ctx*/
    65536 && r) {
      let R = sn(r.canvas);
      console.log("canvas:", R), R.call(bg().on("zoom", (C) => {
        console.log("zooming");
      }));
    }
  }, [
    o,
    f,
    u,
    z,
    p,
    c,
    h,
    a,
    d,
    g,
    _,
    m,
    w,
    D,
    I,
    i,
    r,
    l,
    s
  ];
}
class g_ extends je {
  constructor(t) {
    super(), Ye(this, t, d_, null, He, {
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
    });
  }
}
function yo(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g;
  n = new $r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        e[12]
      ),
      $$slots: { default: [m_] },
      $$scope: { ctx: e }
    }
  });
  let _ = (
    /*simulationProgress*/
    e[11] > 0 && vo(e)
  ), p = (
    /*hoveredSliceInfo*/
    e[10] != null && So(e)
  );
  return {
    c() {
      t = V("div"), ae(n.$$.fragment), i = se(), r = V("div"), l = se(), _ && _.c(), s = se(), o = V("div"), f = me("One dot = "), u = me(
        /*numPerPoint*/
        e[8]
      ), h = me(" points"), a = se(), p && p.c(), y(r, "class", "absolute top-0 left-0 bottom-0 right-0 z-1 pointer-events-auto"), y(o, "class", "absolute bottom-0 right-0 p-3 text-gray-700"), y(t, "class", "w-full h-full relative");
    },
    m(m, w) {
      Y(m, t, w), fe(n, t, null), L(t, i), L(t, r), L(t, l), _ && _.m(t, null), L(t, s), L(t, o), L(o, f), L(o, u), L(o, h), L(t, a), p && p.m(t, null), c = !0, d || (g = [
        ne(
          r,
          "mouseenter",
          /*handleMousePosition*/
          e[13]
        ),
        ne(
          r,
          "mousemove",
          /*handleMousePosition*/
          e[13]
        ),
        ne(
          r,
          "mouseleave",
          /*mouseleave_handler*/
          e[20]
        )
      ], d = !0);
    },
    p(m, w) {
      const A = {};
      w & /*pointData*/
      4096 && (A.data = /*pointData*/
      m[12]), w & /*$$scope, centerYRatio, centerXRatio, colorByError, colorBySlice, hoveredMousePosition, hoveredSlices, selectedIndexes, simulationProgress*/
      8391293 && (A.$$scope = { dirty: w, ctx: m }), n.$set(A), /*simulationProgress*/
      m[11] > 0 ? _ ? _.p(m, w) : (_ = vo(m), _.c(), _.m(t, s)) : _ && (_.d(1), _ = null), (!c || w & /*numPerPoint*/
      256) && De(
        u,
        /*numPerPoint*/
        m[8]
      ), /*hoveredSliceInfo*/
      m[10] != null ? p ? p.p(m, w) : (p = So(m), p.c(), p.m(t, null)) : p && (p.d(1), p = null);
    },
    i(m) {
      c || (T(n.$$.fragment, m), c = !0);
    },
    o(m) {
      B(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && X(t), ue(n), _ && _.d(), p && p.d(), d = !1, Ve(g);
    }
  };
}
function __(e) {
  let t, n, i, r;
  function l(f) {
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
    e[0]), t = new g_({ props: o }), ve.push(() => Ie(t, "simulationProgress", l)), ve.push(() => Ie(t, "hoveredSlices", s)), {
      c() {
        ae(t.$$.fragment);
      },
      m(f, u) {
        fe(t, f, u), r = !0;
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
        f[11], Ee(() => n = !1)), !i && u & /*hoveredSlices*/
        1 && (i = !0, h.hoveredSlices = /*hoveredSlices*/
        f[0], Ee(() => i = !1)), t.$set(h);
      },
      i(f) {
        r || (T(t.$$.fragment, f), r = !0);
      },
      o(f) {
        B(t.$$.fragment, f), r = !1;
      },
      d(f) {
        ue(t, f);
      }
    }
  );
}
function m_(e) {
  let t, n;
  return t = new Cc({
    props: {
      $$slots: { default: [__] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, centerYRatio, centerXRatio, colorByError, colorBySlice, hoveredMousePosition, hoveredSlices, selectedIndexes, simulationProgress*/
      8391293 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function vo(e) {
  let t, n, i, r, l;
  return {
    c() {
      t = V("div"), n = V("div"), n.textContent = "Calculating layout...", i = se(), r = V("div"), l = V("div"), y(n, "class", "text-sm"), y(l, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), x(
        l,
        "width",
        /*simulationProgress*/
        (e[11] * 100).toFixed(1) + "%"
      ), y(r, "class", "w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), y(t, "class", "absolute bg-white/90 top-0 left-0 right-0 bottom-0");
    },
    m(s, o) {
      Y(s, t, o), L(t, n), L(t, i), L(t, r), L(r, l);
    },
    p(s, o) {
      o & /*simulationProgress*/
      2048 && x(
        l,
        "width",
        /*simulationProgress*/
        (s[11] * 100).toFixed(1) + "%"
      );
    },
    d(s) {
      s && X(t);
    }
  };
}
function So(e) {
  let t, n = (
    /*hoveredSliceInfo*/
    e[10].count + ""
  ), i, r, l = (
    /*hoveredSliceInfo*/
    e[10][
      /*errorKey*/
      e[7]
    ] + ""
  ), s, o, f = $e(".1%")(
    /*hoveredSliceInfo*/
    e[10][
      /*errorKey*/
      e[7]
    ] / /*hoveredSliceInfo*/
    e[10].count
  ) + "", u, h;
  return {
    c() {
      t = V("div"), i = me(n), r = me(" instances, "), s = me(l), o = me(" errors ("), u = me(f), h = me(")"), y(t, "class", "absolute bottom-0 left-0 p-3 text-gray-600");
    },
    m(a, c) {
      Y(a, t, c), L(t, i), L(t, r), L(t, s), L(t, o), L(t, u), L(t, h);
    },
    p(a, c) {
      c & /*hoveredSliceInfo*/
      1024 && n !== (n = /*hoveredSliceInfo*/
      a[10].count + "") && De(i, n), c & /*hoveredSliceInfo, errorKey*/
      1152 && l !== (l = /*hoveredSliceInfo*/
      a[10][
        /*errorKey*/
        a[7]
      ] + "") && De(s, l), c & /*hoveredSliceInfo, errorKey*/
      1152 && f !== (f = $e(".1%")(
        /*hoveredSliceInfo*/
        a[10][
          /*errorKey*/
          a[7]
        ] / /*hoveredSliceInfo*/
        a[10].count
      ) + "") && De(u, f);
    },
    d(a) {
      a && X(t);
    }
  };
}
function b_(e) {
  let t, n, i = (
    /*intersectionCounts*/
    e[1].length > 0 && yo(e)
  );
  return {
    c() {
      i && i.c(), t = ft();
    },
    m(r, l) {
      i && i.m(r, l), Y(r, t, l), n = !0;
    },
    p(r, [l]) {
      /*intersectionCounts*/
      r[1].length > 0 ? i ? (i.p(r, l), l & /*intersectionCounts*/
      2 && T(i, 1)) : (i = yo(r), i.c(), T(i, 1), i.m(t.parentNode, t)) : i && (Ae(), B(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(r) {
      n || (T(i), n = !0);
    },
    o(r) {
      B(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && X(t);
    }
  };
}
function p_(e, t, n) {
  let { intersectionCounts: i = [] } = t, { labels: r = [] } = t, { numPoints: l = 500 } = t, { selectedIndexes: s = null } = t, { centerYRatio: o = 0.5 } = t, { centerXRatio: f = 0.5 } = t, { colorByError: u = !1 } = t, { colorBySlice: h = !0 } = t, { errorKey: a } = t, { hoveredSlices: c = null } = t, d = null, g = null, _ = 0, p = [], m = null, w;
  function A(v) {
    let k = v.target.getBoundingClientRect();
    n(9, d = [v.clientX - k.left, v.clientY - k.top]);
  }
  function z(v, k, q) {
    let Z = v.slices.reduce((G, N) => G + N, 0);
    return h ? k != null ? k.every((N, R) => v.slices[R] == N) ? "#94a3b8" : null : q != null ? q.some((G, N) => v.slices[N] && G) ? "#94a3b8" : null : "#94a3b8" : u ? k != null ? k.every((N, R) => v.slices[R] == N) ? v.error ? "#c2410c" : "#6ee7b7" : "#e2e8f0" : q != null ? q.some((G, N) => v.slices[N] && G) ? v.error ? "#c2410c" : "#6ee7b7" : "#e2e8f0" : v.error ? "#c2410c" : "#6ee7b7" : k != null ? k.every((N, R) => v.slices[R] == N) ? Z == 0 ? "#94a3b8" : m(Z) : "#e2e8f0" : q != null ? q.some((G, N) => v.slices[N] && G) ? Z == 0 ? "#94a3b8" : m(Z) : "#e2e8f0" : Z == 0 ? "#94a3b8" : m(Z);
  }
  const M = (v) => z(v, c ?? null, s);
  function E(v) {
    _ = v, n(11, _);
  }
  function D(v) {
    c = v, n(0, c);
  }
  const I = () => n(9, d = null);
  return e.$$set = (v) => {
    "intersectionCounts" in v && n(1, i = v.intersectionCounts), "labels" in v && n(15, r = v.labels), "numPoints" in v && n(16, l = v.numPoints), "selectedIndexes" in v && n(2, s = v.selectedIndexes), "centerYRatio" in v && n(3, o = v.centerYRatio), "centerXRatio" in v && n(4, f = v.centerXRatio), "colorByError" in v && n(5, u = v.colorByError), "colorBySlice" in v && n(6, h = v.colorBySlice), "errorKey" in v && n(7, a = v.errorKey), "hoveredSlices" in v && n(0, c = v.hoveredSlices);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*intersectionCounts, numPoints, errorKey, numPerPoint*/
    65922)
      if (i.length > 0) {
        i[0].slices.length;
        let v = i.reduce((q, Z) => q + Z.count, 0);
        n(8, w = Math.pow(2, Math.floor(Math.log2(v / l))));
        let k = i.reduce((q, Z) => Math.max(q, Z.slices.reduce((G, N) => G + N, 0)), 0);
        n(12, p = i.map((q) => {
          let Z = Math.round(q[a] / w), G = Math.round((q.count - q[a]) / w);
          return [
            ...Array.apply(null, Array(G)).map((N) => ({ slices: q.slices, error: !1 })),
            ...Array.apply(null, Array(Z)).map((N) => ({ slices: q.slices, error: !0 }))
          ];
        }).flat()), m = ff(ca).domain([1, k]);
      } else
        n(12, p = []);
    e.$$.dirty & /*hoveredSlices, intersectionCounts, selectedIndexes, errorKey*/
    135 && (c != null ? n(10, g = i.find((v) => v.slices.every((k, q) => c[q] == k))) : s != null ? n(10, g = i.filter((v) => s.some((k, q) => v.slices[q] && k)).reduce(
      (v, k) => ({
        count: v.count + k.count,
        [a]: v[a] + k[a]
      }),
      { count: 0, [a]: 0 }
    )) : n(10, g = null));
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
    g,
    _,
    p,
    A,
    z,
    r,
    l,
    M,
    E,
    D,
    I
  ];
}
class w_ extends je {
  constructor(t) {
    super(), Ye(this, t, p_, b_, He, {
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
function ko(e, t, n) {
  const i = e.slice();
  return i[70] = t[n], i;
}
function No(e, t, n) {
  const i = e.slice();
  return i[70] = t[n], i;
}
function y_(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _, p, m, w, A, z, M, E, D, I;
  c = new gf({
    props: {
      buttonClass: "ml-1 btn btn-slate",
      buttonStyle: "padding-left: 1rem;",
      buttonTitle: "Add a filter option",
      $$slots: {
        options: [k_],
        "button-content": [S_]
      },
      $$scope: { ctx: e }
    }
  });
  let v = Object.keys(
    /*SliceControlEnableNames*/
    e[26]
  ), k = [];
  for (let N = 0; N < v.length; N += 1)
    k[N] = Ao(ko(e, v, N));
  const q = (N) => B(k[N], 1, 1, () => {
    k[N] = null;
  });
  m = new Qe({
    props: { class: "block", icon: v1 }
  });
  function Z(N) {
    e[56](N);
  }
  let G = { scoreNames: (
    /*scoreNames*/
    e[16]
  ) };
  return (
    /*scoreWeights*/
    e[4] !== void 0 && (G.weights = /*scoreWeights*/
    e[4]), z = new W0({ props: G }), ve.push(() => Ie(z, "weights", Z)), {
      c() {
        t = V("div"), n = V("div"), i = V("div"), r = V("button"), l = me("Find Slices"), s = se(), o = V("div"), f = V("input"), u = me(`
                samples`), h = se(), a = V("div"), ae(c.$$.fragment), d = se();
        for (let N = 0; N < k.length; N += 1)
          k[N].c();
        g = se(), _ = V("div"), p = V("div"), ae(m.$$.fragment), w = se(), A = V("div"), ae(z.$$.fragment), y(r, "class", "ml-1 btn btn-blue disabled:opacity-50"), r.disabled = /*runningSampler*/
        e[8], y(f, "class", "mx-2 p-1 rounded bg-slate-50 indigo:bg-indigo-500 w-16 focus:ring-1 focus:ring-blue-600"), y(f, "type", "number"), y(f, "min", "0"), y(f, "max", "500"), y(f, "step", "5"), y(o, "class", "ml-2"), y(a, "class", "ml-2"), y(i, "class", "flex items-center whitespace-nowrap py-3"), y(n, "class", "flex-1 w-0 pr-3"), y(p, "class", "text-slate-400 text-lg pt-4"), y(A, "class", "w-80 ml-2 flex-0 pt-3 pb-2"), y(_, "class", "flex flex-0 items-start bg-slate-150 pl-4 pr-4 rounded-r"), y(t, "class", "flex pl-3 items-stretch");
      },
      m(N, R) {
        Y(N, t, R), L(t, n), L(n, i), L(i, r), L(r, l), L(i, s), L(i, o), L(o, f), Gi(
          f,
          /*numSamples*/
          e[0]
        ), L(o, u), L(i, h), L(i, a), fe(c, a, null), L(n, d);
        for (let C = 0; C < k.length; C += 1)
          k[C].m(n, null);
        L(t, g), L(t, _), L(_, p), fe(m, p, null), L(_, w), L(_, A), fe(z, A, null), E = !0, D || (I = [
          ne(
            r,
            "click",
            /*click_handler_1*/
            e[49]
          ),
          ne(
            f,
            "input",
            /*input_input_handler*/
            e[50]
          )
        ], D = !0);
      },
      p(N, R) {
        (!E || R[0] & /*runningSampler*/
        256) && (r.disabled = /*runningSampler*/
        N[8]), R[0] & /*numSamples*/
        1 && Vo(f.value) !== /*numSamples*/
        N[0] && Gi(
          f,
          /*numSamples*/
          N[0]
        );
        const C = {};
        if (R[0] & /*enabledSliceControls*/
        64 | R[2] & /*$$scope*/
        8192 && (C.$$scope = { dirty: R, ctx: N }), c.$set(C), R[0] & /*controlFeatures, SliceControlEnableNames, positiveOnly, allowedValues, editingControl, updateEditingControl, toggleSliceControl, SliceControlStrings, enabledSliceControls*/
        516427840) {
          v = Object.keys(
            /*SliceControlEnableNames*/
            N[26]
          );
          let H;
          for (H = 0; H < v.length; H += 1) {
            const K = ko(N, v, H);
            k[H] ? (k[H].p(K, R), T(k[H], 1)) : (k[H] = Ao(K), k[H].c(), T(k[H], 1), k[H].m(n, null));
          }
          for (Ae(), H = v.length; H < k.length; H += 1)
            q(H);
          Ce();
        }
        const P = {};
        R[0] & /*scoreNames*/
        65536 && (P.scoreNames = /*scoreNames*/
        N[16]), !M && R[0] & /*scoreWeights*/
        16 && (M = !0, P.weights = /*scoreWeights*/
        N[4], Ee(() => M = !1)), z.$set(P);
      },
      i(N) {
        if (!E) {
          T(c.$$.fragment, N);
          for (let R = 0; R < v.length; R += 1)
            T(k[R]);
          T(m.$$.fragment, N), T(z.$$.fragment, N), E = !0;
        }
      },
      o(N) {
        B(c.$$.fragment, N), k = k.filter(Boolean);
        for (let R = 0; R < k.length; R += 1)
          B(k[R]);
        B(m.$$.fragment, N), B(z.$$.fragment, N), E = !1;
      },
      d(N) {
        N && X(t), ue(c), Lt(k, N), ue(m), ue(z), D = !1, Ve(I);
      }
    }
  );
}
function v_(e) {
  let t, n, i, r, l, s, o, f, u, h, a;
  function c(_, p) {
    return (
      /*shouldCancel*/
      _[1] ? M_ : z_
    );
  }
  let d = c(e), g = d(e);
  return {
    c() {
      t = V("div"), n = V("button"), i = me("Stop"), r = se(), l = V("div"), s = V("div"), g.c(), o = se(), f = V("div"), u = V("div"), y(n, "class", "ml-2 mr-4 btn btn-blue disabled:opacity-50"), n.disabled = /*shouldCancel*/
      e[1], y(s, "class", "text-sm"), y(u, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), x(
        u,
        "width",
        /*samplerRunProgress*/
        (e[9] * 100).toFixed(1) + "%"
      ), y(f, "class", "w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), y(l, "class", "flex-auto"), y(t, "class", "flex items-center px-3 py-3");
    },
    m(_, p) {
      Y(_, t, p), L(t, n), L(n, i), L(t, r), L(t, l), L(l, s), g.m(s, null), L(l, o), L(l, f), L(f, u), h || (a = ne(
        n,
        "click",
        /*click_handler*/
        e[48]
      ), h = !0);
    },
    p(_, p) {
      p[0] & /*shouldCancel*/
      2 && (n.disabled = /*shouldCancel*/
      _[1]), d === (d = c(_)) && g ? g.p(_, p) : (g.d(1), g = d(_), g && (g.c(), g.m(s, null))), p[0] & /*samplerRunProgress*/
      512 && x(
        u,
        "width",
        /*samplerRunProgress*/
        (_[9] * 100).toFixed(1) + "%"
      );
    },
    i: ge,
    o: ge,
    d(_) {
      _ && X(t), g.d(), h = !1, a();
    }
  };
}
function S_(e) {
  let t, n, i, r;
  return n = new Qe({
    props: { icon: hf, class: "inline mr-1" }
  }), {
    c() {
      t = V("span"), ae(n.$$.fragment), i = me(`
                    Filter`), y(t, "slot", "button-content");
    },
    m(l, s) {
      Y(l, t, s), fe(n, t, null), L(t, i), r = !0;
    },
    p: ge,
    i(l) {
      r || (T(n.$$.fragment, l), r = !0);
    },
    o(l) {
      B(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && X(t), ue(n);
    }
  };
}
function Ro(e) {
  let t, n = (
    /*SliceControlStrings*/
    e[25][
      /*control*/
      e[70]
    ] + ""
  ), i, r, l, s;
  function o() {
    return (
      /*click_handler_2*/
      e[51](
        /*control*/
        e[70]
      )
    );
  }
  return {
    c() {
      t = V("a"), i = me(n), r = me(" Slice"), y(t, "href", "#"), y(t, "tabindex", "0"), y(t, "role", "menuitem");
    },
    m(f, u) {
      Y(f, t, u), L(t, i), L(t, r), l || (s = ne(t, "click", o), l = !0);
    },
    p(f, u) {
      e = f;
    },
    d(f) {
      f && X(t), l = !1, s();
    }
  };
}
function zo(e) {
  let t, n = !/*enabledSliceControls*/
  e[6][
    /*SliceControlEnableNames*/
    e[26][
      /*control*/
      e[70]
    ]
  ] && Ro(e);
  return {
    c() {
      n && n.c(), t = ft();
    },
    m(i, r) {
      n && n.m(i, r), Y(i, t, r);
    },
    p(i, r) {
      /*enabledSliceControls*/
      i[6][
        /*SliceControlEnableNames*/
        i[26][
          /*control*/
          i[70]
        ]
      ] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = Ro(i), n.c(), n.m(t.parentNode, t));
    },
    d(i) {
      n && n.d(i), i && X(t);
    }
  };
}
function k_(e) {
  let t, n = Object.keys(
    /*SliceControlEnableNames*/
    e[26]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = zo(No(e, n, r));
  return {
    c() {
      t = V("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      y(t, "slot", "options");
    },
    m(r, l) {
      Y(r, t, l);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(t, null);
    },
    p(r, l) {
      if (l[0] & /*toggleSliceControl, SliceControlEnableNames, SliceControlStrings, enabledSliceControls*/
      234881088) {
        n = Object.keys(
          /*SliceControlEnableNames*/
          r[26]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = No(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = zo(o), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && X(t), Lt(i, r);
    }
  };
}
function Mo(e) {
  let t, n, i, r, l = (
    /*SliceControlStrings*/
    e[25][
      /*control*/
      e[70]
    ] + ""
  ), s, o, f, u, h, a, c, d;
  i = new Qe({
    props: { icon: d1, class: "inline mr-1" }
  });
  function g() {
    return (
      /*click_handler_3*/
      e[52](
        /*control*/
        e[70]
      )
    );
  }
  const _ = [R_, N_], p = [];
  function m(w, A) {
    return (
      /*editingControl*/
      w[23] == /*SliceControlEnableNames*/
      w[26][
        /*control*/
        w[70]
      ] ? 0 : 1
    );
  }
  return f = m(e), u = p[f] = _[f](e), {
    c() {
      t = V("div"), n = V("button"), ae(i.$$.fragment), r = se(), s = me(l), o = se(), u.c(), h = se(), x(n, "padding-left", "1rem"), y(n, "class", "ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"), y(t, "class", "flex items-center pb-3 w-full");
    },
    m(w, A) {
      Y(w, t, A), L(t, n), fe(i, n, null), L(n, r), L(n, s), L(t, o), p[f].m(t, null), L(t, h), a = !0, c || (d = ne(n, "click", g), c = !0);
    },
    p(w, A) {
      e = w;
      let z = f;
      f = m(e), f === z ? p[f].p(e, A) : (Ae(), B(p[z], 1, 1, () => {
        p[z] = null;
      }), Ce(), u = p[f], u ? u.p(e, A) : (u = p[f] = _[f](e), u.c()), T(u, 1), u.m(t, h));
    },
    i(w) {
      a || (T(i.$$.fragment, w), T(u), a = !0);
    },
    o(w) {
      B(i.$$.fragment, w), B(u), a = !1;
    },
    d(w) {
      w && X(t), ue(i), p[f].d(), c = !1, d();
    }
  };
}
function N_(e) {
  let t, n, i, r, l, s, o, f;
  n = new _n({
    props: {
      feature: (
        /*controlFeatures*/
        e[19][
          /*control*/
          e[70]
        ]
      ),
      currentFeature: (
        /*controlFeatures*/
        e[19][
          /*control*/
          e[70]
        ]
      ),
      canToggle: !1,
      positiveOnly: (
        /*positiveOnly*/
        e[12]
      )
    }
  }), l = new Qe({ props: { icon: af } });
  function u() {
    return (
      /*click_handler_4*/
      e[55](
        /*control*/
        e[70]
      )
    );
  }
  return {
    c() {
      t = V("div"), ae(n.$$.fragment), i = se(), r = V("button"), ae(l.$$.fragment), y(t, "class", "overflow-x-auto whitespace-nowrap"), x(t, "flex", "0 1 auto"), y(r, "class", "bg-transparent hover:opacity-60 pr-1 pl-2 py-3 text-slate-600"), y(r, "title", "Modify the slice definition");
    },
    m(h, a) {
      Y(h, t, a), fe(n, t, null), Y(h, i, a), Y(h, r, a), fe(l, r, null), s = !0, o || (f = ne(r, "click", u), o = !0);
    },
    p(h, a) {
      e = h;
      const c = {};
      a[0] & /*controlFeatures*/
      524288 && (c.feature = /*controlFeatures*/
      e[19][
        /*control*/
        e[70]
      ]), a[0] & /*controlFeatures*/
      524288 && (c.currentFeature = /*controlFeatures*/
      e[19][
        /*control*/
        e[70]
      ]), a[0] & /*positiveOnly*/
      4096 && (c.positiveOnly = /*positiveOnly*/
      e[12]), n.$set(c);
    },
    i(h) {
      s || (T(n.$$.fragment, h), T(l.$$.fragment, h), s = !0);
    },
    o(h) {
      B(n.$$.fragment, h), B(l.$$.fragment, h), s = !1;
    },
    d(h) {
      h && X(t), ue(n), h && X(i), h && X(r), ue(l), o = !1, f();
    }
  };
}
function R_(e) {
  let t, n;
  function i(...r) {
    return (
      /*save_handler*/
      e[54](
        /*control*/
        e[70],
        ...r
      )
    );
  }
  return t = new _f({
    props: {
      featureText: hn(
        /*controlFeatures*/
        e[19][
          /*control*/
          e[70]
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
        e[22]
      )
    }
  }), t.$on(
    "cancel",
    /*cancel_handler*/
    e[53]
  ), t.$on("save", i), {
    c() {
      ae(t.$$.fragment);
    },
    m(r, l) {
      fe(t, r, l), n = !0;
    },
    p(r, l) {
      e = r;
      const s = {};
      l[0] & /*controlFeatures, positiveOnly*/
      528384 && (s.featureText = hn(
        /*controlFeatures*/
        e[19][
          /*control*/
          e[70]
        ],
        !1,
        /*positiveOnly*/
        e[12]
      )), l[0] & /*positiveOnly*/
      4096 && (s.positiveOnly = /*positiveOnly*/
      e[12]), l[0] & /*allowedValues*/
      4194304 && (s.allowedValues = /*allowedValues*/
      e[22]), t.$set(s);
    },
    i(r) {
      n || (T(t.$$.fragment, r), n = !0);
    },
    o(r) {
      B(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ue(t, r);
    }
  };
}
function Ao(e) {
  let t, n, i = (
    /*enabledSliceControls*/
    e[6][
      /*SliceControlEnableNames*/
      e[26][
        /*control*/
        e[70]
      ]
    ] && Mo(e)
  );
  return {
    c() {
      i && i.c(), t = ft();
    },
    m(r, l) {
      i && i.m(r, l), Y(r, t, l), n = !0;
    },
    p(r, l) {
      /*enabledSliceControls*/
      r[6][
        /*SliceControlEnableNames*/
        r[26][
          /*control*/
          r[70]
        ]
      ] ? i ? (i.p(r, l), l[0] & /*enabledSliceControls*/
      64 && T(i, 1)) : (i = Mo(r), i.c(), T(i, 1), i.m(t.parentNode, t)) : i && (Ae(), B(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(r) {
      n || (T(i), n = !0);
    },
    o(r) {
      B(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && X(t);
    }
  };
}
function z_(e) {
  let t, n = (
    /*samplerRunProgress*/
    (e[9] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      t = me("Running sampler ("), i = me(n), r = me(`%
                complete)...`);
    },
    m(l, s) {
      Y(l, t, s), Y(l, i, s), Y(l, r, s);
    },
    p(l, s) {
      s[0] & /*samplerRunProgress*/
      512 && n !== (n = /*samplerRunProgress*/
      (l[9] * 100).toFixed(1) + "") && De(i, n);
    },
    d(l) {
      l && X(t), l && X(i), l && X(r);
    }
  };
}
function M_(e) {
  let t;
  return {
    c() {
      t = me("Canceling...");
    },
    m(n, i) {
      Y(n, t, i);
    },
    p: ge,
    d(n) {
      n && X(t);
    }
  };
}
function Co(e) {
  let t, n, i, r;
  return {
    c() {
      t = V("div"), n = V("button"), n.textContent = "Load More", y(n, "class", "btn btn-blue disabled:opacity-50"), y(t, "class", "mt-2");
    },
    m(l, s) {
      Y(l, t, s), L(t, n), i || (r = ne(
        n,
        "click",
        /*click_handler_5*/
        e[68]
      ), i = !0);
    },
    p: ge,
    d(l) {
      l && X(t), i = !1, r();
    }
  };
}
function A_(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _, p, m, w, A, z, M, E, D, I, v, k, q, Z, G;
  function N(Q) {
    e[37](Q);
  }
  function R(Q) {
    e[38](Q);
  }
  function C(Q) {
    e[39](Q);
  }
  function P(Q) {
    e[40](Q);
  }
  function H(Q) {
    e[41](Q);
  }
  function K(Q) {
    e[42](Q);
  }
  function $(Q) {
    e[43](Q);
  }
  function re(Q) {
    e[44](Q);
  }
  let le = {
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
      e[22]
    )
  };
  /*selectedSlices*/
  e[7] !== void 0 && (le.selectedSlices = /*selectedSlices*/
  e[7]), /*sliceRequests*/
  e[2] !== void 0 && (le.sliceRequests = /*sliceRequests*/
  e[2]), /*sliceRequestResults*/
  e[3] !== void 0 && (le.sliceRequestResults = /*sliceRequestResults*/
  e[3]), /*metricInfo*/
  e[20] !== void 0 && (le.metricInfo = /*metricInfo*/
  e[20]), /*metricNames*/
  e[15] !== void 0 && (le.metricNames = /*metricNames*/
  e[15]), /*scoreNames*/
  e[16] !== void 0 && (le.scoreNames = /*scoreNames*/
  e[16]), /*scoreWidthScalers*/
  e[21] !== void 0 && (le.scoreWidthScalers = /*scoreWidthScalers*/
  e[21]), /*showScores*/
  e[5] !== void 0 && (le.showScores = /*showScores*/
  e[5]), i = new Wr({ props: le }), ve.push(() => Ie(i, "selectedSlices", N)), ve.push(() => Ie(i, "sliceRequests", R)), ve.push(() => Ie(i, "sliceRequestResults", C)), ve.push(() => Ie(i, "metricInfo", P)), ve.push(() => Ie(i, "metricNames", H)), ve.push(() => Ie(i, "scoreNames", K)), ve.push(() => Ie(i, "scoreWidthScalers", $)), ve.push(() => Ie(i, "showScores", re)), i.$on(
    "newsearch",
    /*newsearch_handler*/
    e[45]
  ), i.$on(
    "saveslice",
    /*saveslice_handler*/
    e[46]
  );
  const be = [v_, y_], ce = [];
  function Se(Q, J) {
    return (
      /*runningSampler*/
      Q[8] ? 0 : 1
    );
  }
  _ = Se(e), p = ce[_] = be[_](e);
  function ze(Q) {
    e[58](Q);
  }
  function Re(Q) {
    e[59](Q);
  }
  function Ne(Q) {
    e[60](Q);
  }
  function oe(Q) {
    e[61](Q);
  }
  function xe(Q) {
    e[62](Q);
  }
  function it(Q) {
    e[63](Q);
  }
  function rt(Q) {
    e[64](Q);
  }
  function S(Q) {
    e[65](Q);
  }
  let Pe = {
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
      e[22]
    ),
    showHeader: !1
  };
  /*selectedSlices*/
  e[7] !== void 0 && (Pe.selectedSlices = /*selectedSlices*/
  e[7]), /*sliceRequests*/
  e[2] !== void 0 && (Pe.sliceRequests = /*sliceRequests*/
  e[2]), /*sliceRequestResults*/
  e[3] !== void 0 && (Pe.sliceRequestResults = /*sliceRequestResults*/
  e[3]), /*metricInfo*/
  e[20] !== void 0 && (Pe.metricInfo = /*metricInfo*/
  e[20]), /*metricNames*/
  e[15] !== void 0 && (Pe.metricNames = /*metricNames*/
  e[15]), /*scoreNames*/
  e[16] !== void 0 && (Pe.scoreNames = /*scoreNames*/
  e[16]), /*scoreWidthScalers*/
  e[21] !== void 0 && (Pe.scoreWidthScalers = /*scoreWidthScalers*/
  e[21]), /*showScores*/
  e[5] !== void 0 && (Pe.showScores = /*showScores*/
  e[5]), A = new Wr({ props: Pe }), ve.push(() => Ie(A, "selectedSlices", ze)), ve.push(() => Ie(A, "sliceRequests", Re)), ve.push(() => Ie(A, "sliceRequestResults", Ne)), ve.push(() => Ie(A, "metricInfo", oe)), ve.push(() => Ie(A, "metricNames", xe)), ve.push(() => Ie(A, "scoreNames", it)), ve.push(() => Ie(A, "scoreWidthScalers", rt)), ve.push(() => Ie(A, "showScores", S)), A.$on(
    "newsearch",
    /*newsearch_handler_1*/
    e[66]
  ), A.$on(
    "saveslice",
    /*saveslice_handler_1*/
    e[67]
  );
  let ke = (
    /*slices*/
    e[10].length > 0 && Co(e)
  );
  return {
    c() {
      t = V("div"), n = V("div"), ae(i.$$.fragment), c = se(), d = V("div"), g = V("div"), p.c(), m = se(), w = V("div"), ae(A.$$.fragment), Z = se(), ke && ke.c(), y(n, "class", "search-view-header bg-white svelte-pzi5mg"), y(g, "class", "mx-2 rounded transition-colors duration-300 bg-slate-200 text-gray-700 border-slate-200 border-2 box-border"), y(d, "class", "sampler-panel w-full mb-2 bg-white svelte-pzi5mg"), y(w, "class", "flex-1 min-h-0"), de(
        w,
        "disable-div",
        /*runningSampler*/
        e[8]
      ), y(t, "class", "search-view-parent h-full min-w-full overflow-auto");
    },
    m(Q, J) {
      Y(Q, t, J), L(t, n), fe(i, n, null), e[47](n), L(t, c), L(t, d), L(d, g), ce[_].m(g, null), e[57](d), L(t, m), L(t, w), fe(A, w, null), L(w, Z), ke && ke.m(w, null), G = !0;
    },
    p(Q, J) {
      const Fe = {};
      J[0] & /*savedSlices*/
      16384 && (Fe.savedSlices = /*savedSlices*/
      Q[14]), J[0] & /*baseSlice*/
      2048 && (Fe.baseSlice = /*baseSlice*/
      Q[11]), J[0] & /*positiveOnly*/
      4096 && (Fe.positiveOnly = /*positiveOnly*/
      Q[12]), J[0] & /*valueNames*/
      8192 && (Fe.valueNames = /*valueNames*/
      Q[13]), J[0] & /*allowedValues*/
      4194304 && (Fe.allowedValues = /*allowedValues*/
      Q[22]), !r && J[0] & /*selectedSlices*/
      128 && (r = !0, Fe.selectedSlices = /*selectedSlices*/
      Q[7], Ee(() => r = !1)), !l && J[0] & /*sliceRequests*/
      4 && (l = !0, Fe.sliceRequests = /*sliceRequests*/
      Q[2], Ee(() => l = !1)), !s && J[0] & /*sliceRequestResults*/
      8 && (s = !0, Fe.sliceRequestResults = /*sliceRequestResults*/
      Q[3], Ee(() => s = !1)), !o && J[0] & /*metricInfo*/
      1048576 && (o = !0, Fe.metricInfo = /*metricInfo*/
      Q[20], Ee(() => o = !1)), !f && J[0] & /*metricNames*/
      32768 && (f = !0, Fe.metricNames = /*metricNames*/
      Q[15], Ee(() => f = !1)), !u && J[0] & /*scoreNames*/
      65536 && (u = !0, Fe.scoreNames = /*scoreNames*/
      Q[16], Ee(() => u = !1)), !h && J[0] & /*scoreWidthScalers*/
      2097152 && (h = !0, Fe.scoreWidthScalers = /*scoreWidthScalers*/
      Q[21], Ee(() => h = !1)), !a && J[0] & /*showScores*/
      32 && (a = !0, Fe.showScores = /*showScores*/
      Q[5], Ee(() => a = !1)), i.$set(Fe);
      let Ge = _;
      _ = Se(Q), _ === Ge ? ce[_].p(Q, J) : (Ae(), B(ce[Ge], 1, 1, () => {
        ce[Ge] = null;
      }), Ce(), p = ce[_], p ? p.p(Q, J) : (p = ce[_] = be[_](Q), p.c()), T(p, 1), p.m(g, null));
      const qe = {};
      J[0] & /*slices*/
      1024 && (qe.slices = /*slices*/
      Q[10]), J[0] & /*savedSlices*/
      16384 && (qe.savedSlices = /*savedSlices*/
      Q[14]), J[0] & /*positiveOnly*/
      4096 && (qe.positiveOnly = /*positiveOnly*/
      Q[12]), J[0] & /*valueNames*/
      8192 && (qe.valueNames = /*valueNames*/
      Q[13]), J[0] & /*allowedValues*/
      4194304 && (qe.allowedValues = /*allowedValues*/
      Q[22]), !z && J[0] & /*selectedSlices*/
      128 && (z = !0, qe.selectedSlices = /*selectedSlices*/
      Q[7], Ee(() => z = !1)), !M && J[0] & /*sliceRequests*/
      4 && (M = !0, qe.sliceRequests = /*sliceRequests*/
      Q[2], Ee(() => M = !1)), !E && J[0] & /*sliceRequestResults*/
      8 && (E = !0, qe.sliceRequestResults = /*sliceRequestResults*/
      Q[3], Ee(() => E = !1)), !D && J[0] & /*metricInfo*/
      1048576 && (D = !0, qe.metricInfo = /*metricInfo*/
      Q[20], Ee(() => D = !1)), !I && J[0] & /*metricNames*/
      32768 && (I = !0, qe.metricNames = /*metricNames*/
      Q[15], Ee(() => I = !1)), !v && J[0] & /*scoreNames*/
      65536 && (v = !0, qe.scoreNames = /*scoreNames*/
      Q[16], Ee(() => v = !1)), !k && J[0] & /*scoreWidthScalers*/
      2097152 && (k = !0, qe.scoreWidthScalers = /*scoreWidthScalers*/
      Q[21], Ee(() => k = !1)), !q && J[0] & /*showScores*/
      32 && (q = !0, qe.showScores = /*showScores*/
      Q[5], Ee(() => q = !1)), A.$set(qe), /*slices*/
      Q[10].length > 0 ? ke ? ke.p(Q, J) : (ke = Co(Q), ke.c(), ke.m(w, null)) : ke && (ke.d(1), ke = null), (!G || J[0] & /*runningSampler*/
      256) && de(
        w,
        "disable-div",
        /*runningSampler*/
        Q[8]
      );
    },
    i(Q) {
      G || (T(i.$$.fragment, Q), T(p), T(A.$$.fragment, Q), G = !0);
    },
    o(Q) {
      B(i.$$.fragment, Q), B(p), B(A.$$.fragment, Q), G = !1;
    },
    d(Q) {
      Q && X(t), ue(i), e[47](null), ce[_].d(), e[57](null), ue(A), ke && ke.d();
    }
  };
}
function C_(e, t, n) {
  let i, r = ge, l = () => (r(), r = or(z, (j) => n(36, i = j)), z);
  e.$$.on_destroy.push(() => r());
  const s = Dt();
  let { runningSampler: o = !1 } = t, { numSamples: f = 10 } = t, { shouldCancel: u = !1 } = t, { samplerRunProgress: h = 0 } = t, { slices: a = [] } = t, { baseSlice: c = null } = t, { sliceRequests: d = {} } = t, { sliceRequestResults: g = {} } = t, { scoreWeights: _ = {} } = t, { fixedFeatureOrder: p = [] } = t, { searchBaseSlice: m = null } = t, { showScores: w = !1 } = t, { positiveOnly: A = !1 } = t, { valueNames: z = {} } = t;
  l();
  let { enabledSliceControls: M = {} } = t, { containsSlice: E = {} } = t, { containedInSlice: D = {} } = t, { similarToSlice: I = {} } = t, { subsliceOfSlice: v = {} } = t, { selectedSlices: k = [] } = t, { savedSlices: q = [] } = t;
  const Z = {
    containsSlice: "Contains",
    containedInSlice: "Contained in",
    similarToSlice: "Similar to",
    subsliceOfSlice: "Subslice of"
  }, G = {
    containsSlice: "contains_slice",
    containedInSlice: "contained_in_slice",
    similarToSlice: "similar_to_slice",
    subsliceOfSlice: "subslice_of_slice"
  };
  let N, R = [], C = {}, P = [], H = {}, K = [], $;
  function re(j) {
    let We = C;
    n(20, C = {}), R.forEach((ee) => {
      if (j[ee].type == "binary" || j[ee].type == "count") {
        let b = j[ee].type == "count" ? K.reduce((W, te) => Math.max(W, te.metrics[ee].mean), -1e9) + 0.01 : 1;
        K.reduce((W, te) => Math.min(W, te.metrics[ee].mean), 1e9) - 0.01, n(20, C[ee] = { scale: (W) => W / b }, C);
      } else if (j[ee].type == "categorical") {
        let b = /* @__PURE__ */ new Set();
        K.forEach((te) => Object.keys(te.metrics[ee].counts).forEach((O) => b.add(O)));
        let W = Array.from(b);
        W.sort((te, O) => j[ee].counts[O] - j[ee].counts[te]), n(20, C[ee] = { order: W }, C);
      } else
        n(20, C[ee] = {}, C);
      n(20, C[ee].visible = (We[ee] || { visible: !0 }).visible, C);
    }), console.log("metric info:", C, j);
  }
  let le, be;
  function ce(j, We = null) {
    let ee = G[j], b = Object.assign({}, M);
    We == null ? b[ee] = !b[ee] : b[ee] = We, n(6, M = b), b[ee] && N[j].type == "base" && n(23, Se = ee);
  }
  let Se = null;
  function ze(j, We) {
    j == "containsSlice" ? n(29, E = We) : j == "containedInSlice" ? n(30, D = We) : j == "similarToSlice" ? n(31, I = We) : j == "subsliceOfSlice" && n(32, v = We), n(19, N[j] = We, N);
  }
  function Re(j) {
    k = j, n(7, k);
  }
  function Ne(j) {
    d = j, n(2, d);
  }
  function oe(j) {
    g = j, n(3, g);
  }
  function xe(j) {
    C = j, n(20, C), n(35, K), n(16, P), n(15, R), n(11, c), n(10, a);
  }
  function it(j) {
    R = j, n(15, R), n(35, K), n(16, P), n(11, c), n(10, a);
  }
  function rt(j) {
    P = j, n(16, P), n(35, K), n(15, R), n(11, c), n(10, a);
  }
  function S(j) {
    H = j, n(21, H), n(35, K), n(16, P), n(15, R), n(11, c), n(10, a);
  }
  function Pe(j) {
    w = j, n(5, w);
  }
  const ke = (j) => {
    ze(j.detail.type, j.detail.base_slice), ce(G[j.detail.type], !0);
  };
  function Q(j) {
    gt.call(this, e, j);
  }
  function J(j) {
    ve[j ? "unshift" : "push"](() => {
      le = j, n(17, le);
    });
  }
  const Fe = () => n(1, u = !0), Ge = () => s("runsampler");
  function qe() {
    f = Vo(this.value), n(0, f);
  }
  const tt = (j) => ce(j), lt = (j) => ce(j), ct = (j) => {
    n(23, Se = null);
  }, ht = (j, We) => {
    let ee = el(We.detail, $);
    ze(j, ee), n(23, Se = null);
  }, he = (j) => {
    n(23, Se = G[j]);
  };
  function yt(j) {
    _ = j, n(4, _);
  }
  function dt(j) {
    ve[j ? "unshift" : "push"](() => {
      be = j, n(18, be), n(17, le);
    });
  }
  function ot(j) {
    k = j, n(7, k);
  }
  function U(j) {
    d = j, n(2, d);
  }
  function we(j) {
    g = j, n(3, g);
  }
  function Oe(j) {
    C = j, n(20, C), n(35, K), n(16, P), n(15, R), n(11, c), n(10, a);
  }
  function Xe(j) {
    R = j, n(15, R), n(35, K), n(16, P), n(11, c), n(10, a);
  }
  function vt(j) {
    P = j, n(16, P), n(35, K), n(15, R), n(11, c), n(10, a);
  }
  function Xt(j) {
    H = j, n(21, H), n(35, K), n(16, P), n(15, R), n(11, c), n(10, a);
  }
  function Yt(j) {
    w = j, n(5, w);
  }
  const Wt = (j) => {
    ze(j.detail.type, j.detail.base_slice), ce(j.detail.type, !0);
  };
  function zt(j) {
    gt.call(this, e, j);
  }
  const It = () => s("loadmore");
  return e.$$set = (j) => {
    "runningSampler" in j && n(8, o = j.runningSampler), "numSamples" in j && n(0, f = j.numSamples), "shouldCancel" in j && n(1, u = j.shouldCancel), "samplerRunProgress" in j && n(9, h = j.samplerRunProgress), "slices" in j && n(10, a = j.slices), "baseSlice" in j && n(11, c = j.baseSlice), "sliceRequests" in j && n(2, d = j.sliceRequests), "sliceRequestResults" in j && n(3, g = j.sliceRequestResults), "scoreWeights" in j && n(4, _ = j.scoreWeights), "fixedFeatureOrder" in j && n(33, p = j.fixedFeatureOrder), "searchBaseSlice" in j && n(34, m = j.searchBaseSlice), "showScores" in j && n(5, w = j.showScores), "positiveOnly" in j && n(12, A = j.positiveOnly), "valueNames" in j && l(n(13, z = j.valueNames)), "enabledSliceControls" in j && n(6, M = j.enabledSliceControls), "containsSlice" in j && n(29, E = j.containsSlice), "containedInSlice" in j && n(30, D = j.containedInSlice), "similarToSlice" in j && n(31, I = j.similarToSlice), "subsliceOfSlice" in j && n(32, v = j.subsliceOfSlice), "selectedSlices" in j && n(7, k = j.selectedSlices), "savedSlices" in j && n(14, q = j.savedSlices);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*containsSlice, containedInSlice*/
    1610612736 | e.$$.dirty[1] & /*similarToSlice, subsliceOfSlice*/
    3 && n(19, N = {
      containsSlice: E,
      containedInSlice: D,
      similarToSlice: I,
      subsliceOfSlice: v
    }), e.$$.dirty[0] & /*baseSlice, slices*/
    3072 && n(35, K = [...c ? [c] : [], ...a]), e.$$.dirty[0] & /*scoreNames, metricNames*/
    98304 | e.$$.dirty[1] & /*allSlices*/
    16)
      if (K.length > 0) {
        let j = K.find((ee) => !ee.isEmpty);
        j || (j = K[0]);
        let We = Object.keys(j.scoreValues);
        if ($i(new Set(P), new Set(We)) || (n(16, P = We), P.sort()), n(21, H = {}), P.forEach((ee) => {
          let b = K.reduce((te, O) => Math.max(te, O.scoreValues[ee]), -1e9) + 0.01, W = K.reduce((te, O) => Math.min(te, O.scoreValues[ee]), 1e9) - 0.01;
          n(21, H[ee] = (te) => (te - W) / (b - W), H);
        }), j.metrics) {
          let ee = Object.keys(j.metrics);
          $i(new Set(R), new Set(ee)) || (n(15, R = ee), R.sort()), re(j.metrics);
        }
      } else
        n(16, P = []), n(21, H = {}), n(15, R = []), n(20, C = {});
    e.$$.dirty[0] & /*valueNames*/
    8192 | e.$$.dirty[1] & /*$valueNames*/
    32 && (z && z.hasOwnProperty("subscribe") ? (n(22, $ = {}), Object.entries(i).forEach((j) => {
      n(22, $[j[1][0]] = Object.values(j[1][1]), $);
    })) : n(22, $ = null)), e.$$.dirty[0] & /*searchViewHeader, samplerPanel*/
    393216 && le && be && (n(18, be.style.top = `${le.clientHeight}px`, be), le.addEventListener("resize", () => {
      n(18, be.style.top = `${le.clientHeight}px`, be);
    }));
  }, [
    f,
    u,
    d,
    g,
    _,
    w,
    M,
    k,
    o,
    h,
    a,
    c,
    A,
    z,
    q,
    R,
    P,
    le,
    be,
    N,
    C,
    H,
    $,
    Se,
    s,
    Z,
    G,
    ce,
    ze,
    E,
    D,
    I,
    v,
    p,
    m,
    K,
    i,
    Re,
    Ne,
    oe,
    xe,
    it,
    rt,
    S,
    Pe,
    ke,
    Q,
    J,
    Fe,
    Ge,
    qe,
    tt,
    lt,
    ct,
    ht,
    he,
    yt,
    dt,
    ot,
    U,
    we,
    Oe,
    Xe,
    vt,
    Xt,
    Yt,
    Wt,
    zt,
    It
  ];
}
class E_ extends je {
  constructor(t) {
    super(), Ye(
      this,
      t,
      C_,
      A_,
      He,
      {
        runningSampler: 8,
        numSamples: 0,
        shouldCancel: 1,
        samplerRunProgress: 9,
        slices: 10,
        baseSlice: 11,
        sliceRequests: 2,
        sliceRequestResults: 3,
        scoreWeights: 4,
        fixedFeatureOrder: 33,
        searchBaseSlice: 34,
        showScores: 5,
        positiveOnly: 12,
        valueNames: 13,
        enabledSliceControls: 6,
        containsSlice: 29,
        containedInSlice: 30,
        similarToSlice: 31,
        subsliceOfSlice: 32,
        selectedSlices: 7,
        savedSlices: 14
      },
      null,
      [-1, -1, -1]
    );
  }
}
function I_(e) {
  let t, n, i, r, l, s, o, f, u;
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
  function g(p) {
    e[17](p);
  }
  let _ = {
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
    e[2] !== void 0 && (_.selectedSlices = /*selectedSlices*/
    e[2]), /*sliceRequests*/
    e[0] !== void 0 && (_.sliceRequests = /*sliceRequests*/
    e[0]), /*sliceRequestResults*/
    e[1] !== void 0 && (_.sliceRequestResults = /*sliceRequestResults*/
    e[1]), /*metricInfo*/
    e[9] !== void 0 && (_.metricInfo = /*metricInfo*/
    e[9]), /*metricNames*/
    e[8] !== void 0 && (_.metricNames = /*metricNames*/
    e[8]), i = new Wr({ props: _ }), ve.push(() => Ie(i, "selectedSlices", h)), ve.push(() => Ie(i, "sliceRequests", a)), ve.push(() => Ie(i, "sliceRequestResults", c)), ve.push(() => Ie(i, "metricInfo", d)), ve.push(() => Ie(i, "metricNames", g)), i.$on("newsearch", O_), i.$on(
      "saveslice",
      /*saveslice_handler*/
      e[18]
    ), {
      c() {
        t = V("div"), n = V("div"), ae(i.$$.fragment), y(n, "class", "flex-1 min-h-0"), y(t, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(p, m) {
        Y(p, t, m), L(t, n), fe(i, n, null), u = !0;
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
        p[10]), !r && m & /*selectedSlices*/
        4 && (r = !0, w.selectedSlices = /*selectedSlices*/
        p[2], Ee(() => r = !1)), !l && m & /*sliceRequests*/
        1 && (l = !0, w.sliceRequests = /*sliceRequests*/
        p[0], Ee(() => l = !1)), !s && m & /*sliceRequestResults*/
        2 && (s = !0, w.sliceRequestResults = /*sliceRequestResults*/
        p[1], Ee(() => s = !1)), !o && m & /*metricInfo*/
        512 && (o = !0, w.metricInfo = /*metricInfo*/
        p[9], Ee(() => o = !1)), !f && m & /*metricNames*/
        256 && (f = !0, w.metricNames = /*metricNames*/
        p[8], Ee(() => f = !1)), i.$set(w);
      },
      i(p) {
        u || (T(i.$$.fragment, p), u = !0);
      },
      o(p) {
        B(i.$$.fragment, p), u = !1;
      },
      d(p) {
        p && X(t), ue(i);
      }
    }
  );
}
const O_ = (e) => {
};
function T_(e, t, n) {
  let i, r = ge, l = () => (r(), r = or(a, (v) => n(12, i = v)), a);
  e.$$.on_destroy.push(() => r()), Dt();
  let { slices: s = [] } = t, { baseSlice: o = null } = t, { sliceRequests: f = {} } = t, { sliceRequestResults: u = {} } = t, { positiveOnly: h = !1 } = t, { valueNames: a = {} } = t;
  l();
  let { selectedSlices: c = [] } = t, { savedSlices: d = [] } = t, g = [], _ = {}, p = [], m;
  function w(v) {
    let k = _;
    n(9, _ = {}), g.forEach((q) => {
      if (v[q].type == "binary" || v[q].type == "count") {
        let Z = v[q].type == "count" ? p.reduce((G, N) => Math.max(G, N.metrics[q].mean), -1e9) + 0.01 : 1;
        p.reduce((G, N) => Math.min(G, N.metrics[q].mean), 1e9) - 0.01, n(9, _[q] = { scale: (G) => G / Z }, _);
      } else if (v[q].type == "categorical") {
        let Z = /* @__PURE__ */ new Set();
        p.forEach((N) => Object.keys(N.metrics[q].counts).forEach((R) => Z.add(R)));
        let G = Array.from(Z);
        G.sort((N, R) => v[q].counts[R] - v[q].counts[N]), n(9, _[q] = { order: G }, _);
      } else
        n(9, _[q] = {}, _);
      n(9, _[q].visible = (k[q] || { visible: !0 }).visible, _);
    }), console.log("metric info:", _, v);
  }
  function A(v) {
    c = v, n(2, c);
  }
  function z(v) {
    f = v, n(0, f);
  }
  function M(v) {
    u = v, n(1, u);
  }
  function E(v) {
    _ = v, n(9, _), n(11, p), n(8, g), n(4, o), n(3, s);
  }
  function D(v) {
    g = v, n(8, g), n(11, p), n(4, o), n(3, s);
  }
  function I(v) {
    gt.call(this, e, v);
  }
  return e.$$set = (v) => {
    "slices" in v && n(3, s = v.slices), "baseSlice" in v && n(4, o = v.baseSlice), "sliceRequests" in v && n(0, f = v.sliceRequests), "sliceRequestResults" in v && n(1, u = v.sliceRequestResults), "positiveOnly" in v && n(5, h = v.positiveOnly), "valueNames" in v && l(n(6, a = v.valueNames)), "selectedSlices" in v && n(2, c = v.selectedSlices), "savedSlices" in v && n(7, d = v.savedSlices);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*baseSlice, slices*/
    24 && n(11, p = [...o ? [o] : [], ...s]), e.$$.dirty & /*allSlices, metricNames*/
    2304)
      if (p.length > 0) {
        let v = p.find((k) => !k.isEmpty);
        if (v || (v = p[0]), v.metrics) {
          let k = Object.keys(v.metrics);
          $i(new Set(g), new Set(k)) || (n(8, g = k), g.sort()), w(v.metrics);
        }
      } else
        n(8, g = []), n(9, _ = {});
    e.$$.dirty & /*valueNames, $valueNames*/
    4160 && (a && a.hasOwnProperty("subscribe") ? (n(10, m = {}), Object.entries(i).forEach((v) => {
      n(10, m[v[1][0]] = Object.values(v[1][1]), m);
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
    g,
    _,
    m,
    p,
    i,
    A,
    z,
    M,
    E,
    D,
    I
  ];
}
class P_ extends je {
  constructor(t) {
    super(), Ye(this, t, T_, I_, He, {
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
function Eo(e) {
  let t, n, i;
  return {
    c() {
      t = V("div"), y(t, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      Y(r, t, l), n || (i = [
        ne(t, "pointerdown", et(
          /*pointerdown_handler*/
          e[20]
        )),
        ne(t, "pointermove", et(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", et(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && X(t), n = !1, Ve(i);
    }
  };
}
function Io(e) {
  let t, n, i;
  return {
    c() {
      t = V("div"), y(t, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      Y(r, t, l), n || (i = [
        ne(t, "pointerdown", et(
          /*pointerdown_handler_1*/
          e[21]
        )),
        ne(t, "pointermove", et(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", et(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && X(t), n = !1, Ve(i);
    }
  };
}
function Oo(e) {
  let t, n, i;
  return {
    c() {
      t = V("div"), y(t, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      Y(r, t, l), n || (i = [
        ne(t, "pointerdown", et(
          /*pointerdown_handler_2*/
          e[22]
        )),
        ne(t, "pointermove", et(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", et(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && X(t), n = !1, Ve(i);
    }
  };
}
function To(e) {
  let t, n, i;
  return {
    c() {
      t = V("div"), y(t, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      Y(r, t, l), n || (i = [
        ne(t, "pointerdown", et(
          /*pointerdown_handler_3*/
          e[23]
        )),
        ne(t, "pointermove", et(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", et(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && X(t), n = !1, Ve(i);
    }
  };
}
function F_(e) {
  let t, n, i, r, l, s, o, f;
  const u = (
    /*#slots*/
    e[19].default
  ), h = Tt(
    u,
    e,
    /*$$scope*/
    e[18],
    null
  );
  let a = (
    /*leftResizable*/
    e[2] && Eo(e)
  ), c = (
    /*topResizable*/
    e[4] && Io(e)
  ), d = (
    /*bottomResizable*/
    e[5] && Oo(e)
  ), g = (
    /*rightResizable*/
    e[3] && To(e)
  );
  return {
    c() {
      t = V("div"), h && h.c(), n = se(), a && a.c(), i = se(), c && c.c(), r = se(), d && d.c(), l = se(), g && g.c(), y(t, "class", s = "relative border-slate-300 grow-0 shrink-0 " + /*$$props*/
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
      e[9]), de(
        t,
        "border-l-4",
        /*leftResizable*/
        e[2]
      ), de(
        t,
        "border-t-4",
        /*topResizable*/
        e[4]
      ), de(
        t,
        "border-r-4",
        /*rightResizable*/
        e[3]
      ), de(
        t,
        "border-b-4",
        /*bottomResizable*/
        e[5]
      );
    },
    m(_, p) {
      Y(_, t, p), h && h.m(t, null), L(t, n), a && a.m(t, null), L(t, i), c && c.m(t, null), L(t, r), d && d.m(t, null), L(t, l), g && g.m(t, null), f = !0;
    },
    p(_, [p]) {
      h && h.p && (!f || p & /*$$scope*/
      262144) && Ft(
        h,
        u,
        _,
        /*$$scope*/
        _[18],
        f ? Pt(
          u,
          /*$$scope*/
          _[18],
          p,
          null
        ) : qt(
          /*$$scope*/
          _[18]
        ),
        null
      ), /*leftResizable*/
      _[2] ? a ? a.p(_, p) : (a = Eo(_), a.c(), a.m(t, i)) : a && (a.d(1), a = null), /*topResizable*/
      _[4] ? c ? c.p(_, p) : (c = Io(_), c.c(), c.m(t, r)) : c && (c.d(1), c = null), /*bottomResizable*/
      _[5] ? d ? d.p(_, p) : (d = Oo(_), d.c(), d.m(t, l)) : d && (d.d(1), d = null), /*rightResizable*/
      _[3] ? g ? g.p(_, p) : (g = To(_), g.c(), g.m(t, null)) : g && (g.d(1), g = null), (!f || p & /*$$props*/
      32768 && s !== (s = "relative border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (_[15].class ?? ""))) && y(t, "class", s), (!f || p & /*minWidthStyle, minHeightStyle, width, minWidth, height, minHeight, maxWidthStyle, maxHeightStyle*/
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
      _[9])) && y(t, "style", o), (!f || p & /*$$props, leftResizable*/
      32772) && de(
        t,
        "border-l-4",
        /*leftResizable*/
        _[2]
      ), (!f || p & /*$$props, topResizable*/
      32784) && de(
        t,
        "border-t-4",
        /*topResizable*/
        _[4]
      ), (!f || p & /*$$props, rightResizable*/
      32776) && de(
        t,
        "border-r-4",
        /*rightResizable*/
        _[3]
      ), (!f || p & /*$$props, bottomResizable*/
      32800) && de(
        t,
        "border-b-4",
        /*bottomResizable*/
        _[5]
      );
    },
    i(_) {
      f || (T(h, _), f = !0);
    },
    o(_) {
      B(h, _), f = !1;
    },
    d(_) {
      _ && X(t), h && h.d(_), a && a.d(), c && c.d(), d && d.d(), g && g.d();
    }
  };
}
function q_(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { leftResizable: l = !1 } = t, { rightResizable: s = !1 } = t, { topResizable: o = !1 } = t, { bottomResizable: f = !1 } = t, { minWidth: u = 20 } = t, { maxWidth: h = null } = t, { minHeight: a = 20 } = t, { maxHeight: c = null } = t, { width: d = 100 } = t, { height: g = 100 } = t, _ = null, p = null, m = null;
  function w(G, N) {
    _ = G.pageX, p = G.pageY, m = N, G.target.setPointerCapture(G.pointerId);
  }
  function A(G) {
    if (m === null)
      return;
    let N = G.pageX - _, R = G.pageY - p;
    m == "left" ? n(0, d = d - N) : m == "right" ? n(0, d = d + N) : m == "top" ? n(1, g = g - R) : m == "bottom" && n(1, g = g + R), _ = G.pageX, p = G.pageY;
  }
  function z() {
    _ = null, p = null, m = null;
  }
  let M = "", E = "", D = "", I = "";
  const v = (G) => w(G, "left"), k = (G) => w(G, "top"), q = (G) => w(G, "bottom"), Z = (G) => w(G, "right");
  return e.$$set = (G) => {
    n(15, t = Cr(Cr({}, t), wl(G))), "leftResizable" in G && n(2, l = G.leftResizable), "rightResizable" in G && n(3, s = G.rightResizable), "topResizable" in G && n(4, o = G.topResizable), "bottomResizable" in G && n(5, f = G.bottomResizable), "minWidth" in G && n(6, u = G.minWidth), "maxWidth" in G && n(16, h = G.maxWidth), "minHeight" in G && n(7, a = G.minHeight), "maxHeight" in G && n(17, c = G.maxHeight), "width" in G && n(0, d = G.width), "height" in G && n(1, g = G.height), "$$scope" in G && n(18, r = G.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*leftResizable, rightResizable, width*/
    13 && (l || s) && typeof d != "number" && console.error("width must be number if left or right is resizable"), e.$$.dirty & /*topResizable, bottomResizable, height*/
    50 && (o || f) && typeof g != "number" && console.error("height must be number if top or bottom is resizable"), e.$$.dirty & /*minWidth*/
    64 && (u === null ? n(10, D = "") : typeof u == "number" ? n(10, D = `min-width: ${u}px;`) : n(10, D = `min-width: ${u};`)), e.$$.dirty & /*maxWidth*/
    65536 && (h === null ? n(8, M = "") : typeof h == "number" ? n(8, M = `max-width: ${h}px;`) : n(8, M = `max-width: ${h};`)), e.$$.dirty & /*minHeight*/
    128 && (a === null ? n(11, I = "") : typeof a == "number" ? n(11, I = `min-height: ${a}px;`) : n(11, I = `min-height: ${a};`)), e.$$.dirty & /*maxHeight*/
    131072 && (c === null ? n(9, E = "") : typeof c == "number" ? n(9, E = `max-height: ${c}px;`) : n(9, E = `max-height: ${c};`));
  }, t = wl(t), [
    d,
    g,
    l,
    s,
    o,
    f,
    u,
    a,
    M,
    E,
    D,
    I,
    w,
    A,
    z,
    t,
    h,
    c,
    r,
    i,
    v,
    k,
    q,
    Z
  ];
}
class L_ extends je {
  constructor(t) {
    super(), Ye(this, t, q_, F_, He, {
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
function Po(e, t, n) {
  const i = e.slice();
  return i[82] = t[n], i;
}
function D_(e) {
  let t, n, i, r, l;
  function s(h) {
    e[69](h);
  }
  function o(h) {
    e[70](h);
  }
  function f(h) {
    e[71](h);
  }
  let u = {
    positiveOnly: (
      /*$positiveOnly*/
      e[12]
    ),
    slices: (
      /*$savedSlices*/
      e[8]
    ),
    savedSlices: (
      /*$savedSlices*/
      e[8]
    ),
    valueNames: (
      /*valueNames*/
      e[38]
    ),
    baseSlice: (
      /*$baseSlice*/
      e[15]
    )
  };
  return (
    /*$selectedSlices*/
    e[9] !== void 0 && (u.selectedSlices = /*$selectedSlices*/
    e[9]), /*$sliceScoreRequests*/
    e[16] !== void 0 && (u.sliceRequests = /*$sliceScoreRequests*/
    e[16]), /*$sliceScoreResults*/
    e[17] !== void 0 && (u.sliceRequestResults = /*$sliceScoreResults*/
    e[17]), t = new P_({ props: u }), ve.push(() => Ie(t, "selectedSlices", s)), ve.push(() => Ie(t, "sliceRequests", o)), ve.push(() => Ie(t, "sliceRequestResults", f)), t.$on(
      "saveslice",
      /*saveslice_handler_1*/
      e[72]
    ), {
      c() {
        ae(t.$$.fragment);
      },
      m(h, a) {
        fe(t, h, a), l = !0;
      },
      p(h, a) {
        const c = {};
        a[0] & /*$positiveOnly*/
        4096 && (c.positiveOnly = /*$positiveOnly*/
        h[12]), a[0] & /*$savedSlices*/
        256 && (c.slices = /*$savedSlices*/
        h[8]), a[0] & /*$savedSlices*/
        256 && (c.savedSlices = /*$savedSlices*/
        h[8]), a[0] & /*$baseSlice*/
        32768 && (c.baseSlice = /*$baseSlice*/
        h[15]), !n && a[0] & /*$selectedSlices*/
        512 && (n = !0, c.selectedSlices = /*$selectedSlices*/
        h[9], Ee(() => n = !1)), !i && a[0] & /*$sliceScoreRequests*/
        65536 && (i = !0, c.sliceRequests = /*$sliceScoreRequests*/
        h[16], Ee(() => i = !1)), !r && a[0] & /*$sliceScoreResults*/
        131072 && (r = !0, c.sliceRequestResults = /*$sliceScoreResults*/
        h[17], Ee(() => r = !1)), t.$set(c);
      },
      i(h) {
        l || (T(t.$$.fragment, h), l = !0);
      },
      o(h) {
        B(t.$$.fragment, h), l = !1;
      },
      d(h) {
        ue(t, h);
      }
    }
  );
}
function W_(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d;
  function g(k) {
    e[55](k);
  }
  function _(k) {
    e[56](k);
  }
  function p(k) {
    e[57](k);
  }
  function m(k) {
    e[58](k);
  }
  function w(k) {
    e[59](k);
  }
  function A(k) {
    e[60](k);
  }
  function z(k) {
    e[61](k);
  }
  function M(k) {
    e[62](k);
  }
  function E(k) {
    e[63](k);
  }
  function D(k) {
    e[64](k);
  }
  function I(k) {
    e[65](k);
  }
  let v = {
    runningSampler: (
      /*$runningSampler*/
      e[10]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      e[12]
    ),
    samplerRunProgress: (
      /*$samplerRunProgress*/
      e[14]
    ),
    slices: (
      /*$slices*/
      e[6]
    ),
    savedSlices: (
      /*$savedSlices*/
      e[8]
    ),
    valueNames: (
      /*valueNames*/
      e[38]
    ),
    baseSlice: (
      /*$baseSlice*/
      e[15]
    )
  };
  return (
    /*$numSamples*/
    e[11] !== void 0 && (v.numSamples = /*$numSamples*/
    e[11]), /*$shouldCancel*/
    e[13] !== void 0 && (v.shouldCancel = /*$shouldCancel*/
    e[13]), /*$scoreWeights*/
    e[7] !== void 0 && (v.scoreWeights = /*$scoreWeights*/
    e[7]), /*$selectedSlices*/
    e[9] !== void 0 && (v.selectedSlices = /*$selectedSlices*/
    e[9]), /*$sliceScoreRequests*/
    e[16] !== void 0 && (v.sliceRequests = /*$sliceScoreRequests*/
    e[16]), /*$sliceScoreResults*/
    e[17] !== void 0 && (v.sliceRequestResults = /*$sliceScoreResults*/
    e[17]), /*$enabledSliceControls*/
    e[18] !== void 0 && (v.enabledSliceControls = /*$enabledSliceControls*/
    e[18]), /*$containsSlice*/
    e[19] !== void 0 && (v.containsSlice = /*$containsSlice*/
    e[19]), /*$containedInSlice*/
    e[20] !== void 0 && (v.containedInSlice = /*$containedInSlice*/
    e[20]), /*$similarToSlice*/
    e[21] !== void 0 && (v.similarToSlice = /*$similarToSlice*/
    e[21]), /*$subsliceOfSlice*/
    e[22] !== void 0 && (v.subsliceOfSlice = /*$subsliceOfSlice*/
    e[22]), t = new E_({ props: v }), ve.push(() => Ie(t, "numSamples", g)), ve.push(() => Ie(t, "shouldCancel", _)), ve.push(() => Ie(t, "scoreWeights", p)), ve.push(() => Ie(t, "selectedSlices", m)), ve.push(() => Ie(t, "sliceRequests", w)), ve.push(() => Ie(t, "sliceRequestResults", A)), ve.push(() => Ie(t, "enabledSliceControls", z)), ve.push(() => Ie(t, "containsSlice", M)), ve.push(() => Ie(t, "containedInSlice", E)), ve.push(() => Ie(t, "similarToSlice", D)), ve.push(() => Ie(t, "subsliceOfSlice", I)), t.$on(
      "runsampler",
      /*runsampler_handler*/
      e[66]
    ), t.$on(
      "loadmore",
      /*loadmore_handler*/
      e[67]
    ), t.$on(
      "saveslice",
      /*saveslice_handler*/
      e[68]
    ), {
      c() {
        ae(t.$$.fragment);
      },
      m(k, q) {
        fe(t, k, q), d = !0;
      },
      p(k, q) {
        const Z = {};
        q[0] & /*$runningSampler*/
        1024 && (Z.runningSampler = /*$runningSampler*/
        k[10]), q[0] & /*$positiveOnly*/
        4096 && (Z.positiveOnly = /*$positiveOnly*/
        k[12]), q[0] & /*$samplerRunProgress*/
        16384 && (Z.samplerRunProgress = /*$samplerRunProgress*/
        k[14]), q[0] & /*$slices*/
        64 && (Z.slices = /*$slices*/
        k[6]), q[0] & /*$savedSlices*/
        256 && (Z.savedSlices = /*$savedSlices*/
        k[8]), q[0] & /*$baseSlice*/
        32768 && (Z.baseSlice = /*$baseSlice*/
        k[15]), !n && q[0] & /*$numSamples*/
        2048 && (n = !0, Z.numSamples = /*$numSamples*/
        k[11], Ee(() => n = !1)), !i && q[0] & /*$shouldCancel*/
        8192 && (i = !0, Z.shouldCancel = /*$shouldCancel*/
        k[13], Ee(() => i = !1)), !r && q[0] & /*$scoreWeights*/
        128 && (r = !0, Z.scoreWeights = /*$scoreWeights*/
        k[7], Ee(() => r = !1)), !l && q[0] & /*$selectedSlices*/
        512 && (l = !0, Z.selectedSlices = /*$selectedSlices*/
        k[9], Ee(() => l = !1)), !s && q[0] & /*$sliceScoreRequests*/
        65536 && (s = !0, Z.sliceRequests = /*$sliceScoreRequests*/
        k[16], Ee(() => s = !1)), !o && q[0] & /*$sliceScoreResults*/
        131072 && (o = !0, Z.sliceRequestResults = /*$sliceScoreResults*/
        k[17], Ee(() => o = !1)), !f && q[0] & /*$enabledSliceControls*/
        262144 && (f = !0, Z.enabledSliceControls = /*$enabledSliceControls*/
        k[18], Ee(() => f = !1)), !u && q[0] & /*$containsSlice*/
        524288 && (u = !0, Z.containsSlice = /*$containsSlice*/
        k[19], Ee(() => u = !1)), !h && q[0] & /*$containedInSlice*/
        1048576 && (h = !0, Z.containedInSlice = /*$containedInSlice*/
        k[20], Ee(() => h = !1)), !a && q[0] & /*$similarToSlice*/
        2097152 && (a = !0, Z.similarToSlice = /*$similarToSlice*/
        k[21], Ee(() => a = !1)), !c && q[0] & /*$subsliceOfSlice*/
        4194304 && (c = !0, Z.subsliceOfSlice = /*$subsliceOfSlice*/
        k[22], Ee(() => c = !1)), t.$set(Z);
      },
      i(k) {
        d || (T(t.$$.fragment, k), d = !0);
      },
      o(k) {
        B(t.$$.fragment, k), d = !1;
      },
      d(k) {
        ue(t, k);
      }
    }
  );
}
function Fo(e) {
  let t, n;
  return t = new L_({
    props: {
      leftResizable: !0,
      minWidth: 20,
      maxWidth: "50%",
      height: "100%",
      class: "border-x border-b border-slate-500 " + (/*isFullScreen*/
      e[5] ? "" : "rounded-b"),
      $$slots: { default: [B_] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      32 && (l.class = "border-x border-b border-slate-500 " + (/*isFullScreen*/
      i[5] ? "" : "rounded-b")), r[0] & /*overlapPlotMetric, binaryMetrics, metricNames, $sliceIntersectionCounts, $sliceIntersectionLabels*/
      100663310 | r[2] & /*$$scope*/
      8388608 && (l.$$scope = { dirty: r, ctx: i }), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function qo(e) {
  let t, n;
  return t = new w_({
    props: {
      errorKey: (
        /*overlapPlotMetric*/
        e[3]
      ),
      colorBySlice: !0,
      intersectionCounts: (
        /*$sliceIntersectionCounts*/
        e[25]
      ),
      labels: (
        /*$sliceIntersectionLabels*/
        e[26]
      )
    }
  }), {
    c() {
      ae(t.$$.fragment);
    },
    m(i, r) {
      fe(t, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*overlapPlotMetric*/
      8 && (l.errorKey = /*overlapPlotMetric*/
      i[3]), r[0] & /*$sliceIntersectionCounts*/
      33554432 && (l.intersectionCounts = /*$sliceIntersectionCounts*/
      i[25]), r[0] & /*$sliceIntersectionLabels*/
      67108864 && (l.labels = /*$sliceIntersectionLabels*/
      i[26]), t.$set(l);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ue(t, i);
    }
  };
}
function Lo(e) {
  let t, n, i, r, l = (
    /*binaryMetrics*/
    e[2]
  ), s = [];
  for (let o = 0; o < l.length; o += 1)
    s[o] = Do(Po(e, l, o));
  return {
    c() {
      t = V("div"), n = V("select");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      /*overlapPlotMetric*/
      e[3] === void 0 && ri(() => (
        /*select_change_handler*/
        e[73].call(n)
      )), y(t, "class", "absolute top-0 left-0 mt-4 ml-4");
    },
    m(o, f) {
      Y(o, t, f), L(t, n);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(n, null);
      vl(
        n,
        /*overlapPlotMetric*/
        e[3]
      ), i || (r = ne(
        n,
        "change",
        /*select_change_handler*/
        e[73]
      ), i = !0);
    },
    p(o, f) {
      if (f[0] & /*binaryMetrics*/
      4) {
        l = /*binaryMetrics*/
        o[2];
        let u;
        for (u = 0; u < l.length; u += 1) {
          const h = Po(o, l, u);
          s[u] ? s[u].p(h, f) : (s[u] = Do(h), s[u].c(), s[u].m(n, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = l.length;
      }
      f[0] & /*overlapPlotMetric, binaryMetrics*/
      12 && vl(
        n,
        /*overlapPlotMetric*/
        o[3]
      );
    },
    d(o) {
      o && X(t), Lt(s, o), i = !1, r();
    }
  };
}
function Do(e) {
  let t, n = (
    /*metric*/
    e[82] + ""
  ), i, r;
  return {
    c() {
      t = V("option"), i = me(n), t.__value = r = /*metric*/
      e[82], t.value = t.__value;
    },
    m(l, s) {
      Y(l, t, s), L(t, i);
    },
    p(l, s) {
      s[0] & /*binaryMetrics*/
      4 && n !== (n = /*metric*/
      l[82] + "") && De(i, n), s[0] & /*binaryMetrics*/
      4 && r !== (r = /*metric*/
      l[82]) && (t.__value = r, t.value = t.__value);
    },
    d(l) {
      l && X(t);
    }
  };
}
function B_(e) {
  let t, n, i, r, l = (
    /*overlapPlotMetric*/
    e[3] != null && qo(e)
  ), s = (
    /*metricNames*/
    e[1].length > 0 && Lo(e)
  );
  return {
    c() {
      t = V("div"), n = V("div"), l && l.c(), i = se(), s && s.c(), y(n, "class", "absolute top-0 left-0 bottom-0 right-0"), y(t, "class", "w-full h-full relative");
    },
    m(o, f) {
      Y(o, t, f), L(t, n), l && l.m(n, null), L(t, i), s && s.m(t, null), r = !0;
    },
    p(o, f) {
      /*overlapPlotMetric*/
      o[3] != null ? l ? (l.p(o, f), f[0] & /*overlapPlotMetric*/
      8 && T(l, 1)) : (l = qo(o), l.c(), T(l, 1), l.m(n, null)) : l && (Ae(), B(l, 1, 1, () => {
        l = null;
      }), Ce()), /*metricNames*/
      o[1].length > 0 ? s ? s.p(o, f) : (s = Lo(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (T(l), r = !0);
    },
    o(o) {
      B(l), r = !1;
    },
    d(o) {
      o && X(t), l && l.d(), s && s.d();
    }
  };
}
function V_(e) {
  let t, n, i, r, l, s, o, f, u, h, a, c, d, g, _, p, m, w, A, z, M, E, D, I, v, k, q, Z, G;
  r = new Qe({
    props: { icon: cf, class: "inline mr-1" }
  }), h = new Qe({
    props: { icon: Dr, class: "inline mr-1" }
  }), A = new Qe({
    props: {
      icon: (
        /*isFullScreen*/
        e[5] ? hs : _s
      )
    }
  });
  const N = [W_, D_], R = [];
  function C(H, K) {
    return (
      /*viewingTab*/
      H[0] == 0 ? 0 : 1
    );
  }
  D = C(e), I = R[D] = N[D](e);
  let P = (
    /*$sliceIntersectionCounts*/
    e[25].length > 0 && Fo(e)
  );
  return {
    c() {
      t = V("main"), n = V("div"), i = V("button"), ae(r.$$.fragment), l = me(" Search"), f = se(), u = V("button"), ae(h.$$.fragment), a = me(" Curate"), g = se(), _ = V("div"), p = se(), m = V("button"), w = V("span"), ae(A.$$.fragment), z = se(), M = V("div"), E = V("div"), I.c(), v = se(), P && P.c(), y(i, "class", s = "mr-1 px-3 py-2 rounded " + /*viewingTab*/
      (e[0] == 0 ? "bg-slate-600" : "bg-transparent hover:opacity-60") + " text-white font-bold"), i.disabled = o = /*viewingTab*/
      e[0] == 0, y(u, "class", c = "px-3 py-2 rounded " + /*viewingTab*/
      (e[0] == 1 ? "bg-slate-600" : "bg-transparent hover:opacity-60") + " text-white font-bold"), u.disabled = d = /*viewingTab*/
      e[0] == 1, de(
        u,
        "bg-slate-600",
        /*viewingTab*/
        e[0] == 1
      ), y(_, "class", "flex-1"), y(w, "class", "my-0.5 block"), y(m, "class", "p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:opacity-50"), y(n, "class", "h-12 bg-slate-500 text-white flex items-center px-2"), de(n, "rounded-t", !/*isFullScreen*/
      e[5]), y(E, "class", "flex-1 h-full overflow-auto"), de(
        E,
        "p-2",
        /*isFullScreen*/
        e[5]
      ), y(M, "class", "flex flex-1 w-full min-h-0"), y(t, "class", "w-full flex flex-col"), y(t, "style", k = /*isFullScreen*/
      e[5] ? "height: 100vh;" : "height: 640px; max-height: 90vh;");
    },
    m(H, K) {
      Y(H, t, K), L(t, n), L(n, i), fe(r, i, null), L(i, l), L(n, f), L(n, u), fe(h, u, null), L(u, a), L(n, g), L(n, _), L(n, p), L(n, m), L(m, w), fe(A, w, null), L(t, z), L(t, M), L(M, E), R[D].m(E, null), L(M, v), P && P.m(M, null), e[74](t), q = !0, Z || (G = [
        ne(
          i,
          "click",
          /*click_handler*/
          e[53]
        ),
        ne(
          u,
          "click",
          /*click_handler_1*/
          e[54]
        ),
        ne(m, "click", function() {
          fi(
            /*isFullScreen*/
            e[5] ? (
              /*exitFullScreen*/
              e[50]
            ) : (
              /*enterFullScreen*/
              e[49]
            )
          ) && /*isFullScreen*/
          (e[5] ? (
            /*exitFullScreen*/
            e[50]
          ) : (
            /*enterFullScreen*/
            e[49]
          )).apply(this, arguments);
        })
      ], Z = !0);
    },
    p(H, K) {
      e = H, (!q || K[0] & /*viewingTab*/
      1 && s !== (s = "mr-1 px-3 py-2 rounded " + /*viewingTab*/
      (e[0] == 0 ? "bg-slate-600" : "bg-transparent hover:opacity-60") + " text-white font-bold")) && y(i, "class", s), (!q || K[0] & /*viewingTab*/
      1 && o !== (o = /*viewingTab*/
      e[0] == 0)) && (i.disabled = o), (!q || K[0] & /*viewingTab*/
      1 && c !== (c = "px-3 py-2 rounded " + /*viewingTab*/
      (e[0] == 1 ? "bg-slate-600" : "bg-transparent hover:opacity-60") + " text-white font-bold")) && y(u, "class", c), (!q || K[0] & /*viewingTab*/
      1 && d !== (d = /*viewingTab*/
      e[0] == 1)) && (u.disabled = d), (!q || K[0] & /*viewingTab, viewingTab*/
      1) && de(
        u,
        "bg-slate-600",
        /*viewingTab*/
        e[0] == 1
      );
      const $ = {};
      K[0] & /*isFullScreen*/
      32 && ($.icon = /*isFullScreen*/
      e[5] ? hs : _s), A.$set($), (!q || K[0] & /*isFullScreen*/
      32) && de(n, "rounded-t", !/*isFullScreen*/
      e[5]);
      let re = D;
      D = C(e), D === re ? R[D].p(e, K) : (Ae(), B(R[re], 1, 1, () => {
        R[re] = null;
      }), Ce(), I = R[D], I ? I.p(e, K) : (I = R[D] = N[D](e), I.c()), T(I, 1), I.m(E, null)), (!q || K[0] & /*isFullScreen*/
      32) && de(
        E,
        "p-2",
        /*isFullScreen*/
        e[5]
      ), /*$sliceIntersectionCounts*/
      e[25].length > 0 ? P ? (P.p(e, K), K[0] & /*$sliceIntersectionCounts*/
      33554432 && T(P, 1)) : (P = Fo(e), P.c(), T(P, 1), P.m(M, null)) : P && (Ae(), B(P, 1, 1, () => {
        P = null;
      }), Ce()), (!q || K[0] & /*isFullScreen*/
      32 && k !== (k = /*isFullScreen*/
      e[5] ? "height: 100vh;" : "height: 640px; max-height: 90vh;")) && y(t, "style", k);
    },
    i(H) {
      q || (T(r.$$.fragment, H), T(h.$$.fragment, H), T(A.$$.fragment, H), T(I), T(P), q = !0);
    },
    o(H) {
      B(r.$$.fragment, H), B(h.$$.fragment, H), B(A.$$.fragment, H), B(I), B(P), q = !1;
    },
    d(H) {
      H && X(t), ue(r), ue(h), ue(A), R[D].d(), P && P.d(), e[74](null), Z = !1, Ve(G);
    }
  };
}
function H_(e, t, n) {
  let i, r, l, s, o, f, u, h, a, c, d, g, _, p, m, w, A, z, M, E, D, { model: I } = t, v = Ke(I, "num_slices", 10);
  ie(e, v, (O) => n(24, M = O));
  let k = Ke(I, "num_samples", 50);
  ie(e, k, (O) => n(11, f = O));
  let q = Ke(I, "should_rerun", !1);
  ie(e, q, (O) => n(23, z = O)), Ke(I, "num_samples_drawn", 0);
  let Z = Ke(I, "running_sampler", !1);
  ie(e, Z, (O) => n(10, o = O));
  let G = Ke(I, "should_cancel", !1);
  ie(e, G, (O) => n(13, h = O));
  let N = Ke(I, "sampler_run_progress", 0);
  ie(e, N, (O) => n(14, a = O));
  let R = Ke(I, "slices", []);
  ie(e, R, (O) => n(6, l = O)), Ke(I, "custom_slices", []), Ke(I, "custom_slice_results", []);
  let C = Ke(I, "saved_slices", []);
  ie(e, C, (O) => n(8, i = O));
  let P = Ke(I, "selected_slices", []);
  ie(e, P, (O) => n(9, r = O));
  let H = Ke(I, "base_slice", {});
  ie(e, H, (O) => n(15, c = O));
  let K = Ke(I, "positive_only", !1);
  ie(e, K, (O) => n(12, u = O));
  let $ = Ke(I, "value_names", {}), re = Ke(I, "score_weights", {});
  ie(e, re, (O) => n(7, s = O));
  let le = Ke(I, "slice_score_requests", {});
  ie(e, le, (O) => n(16, d = O));
  let be = Ke(I, "slice_score_results", {});
  ie(e, be, (O) => n(17, g = O));
  let ce = Ke(I, "enabled_slice_controls", {});
  ie(e, ce, (O) => n(18, _ = O));
  let Se = Ke(I, "contains_slice", {});
  ie(e, Se, (O) => n(19, p = O));
  let ze = Ke(I, "contained_in_slice", {});
  ie(e, ze, (O) => n(20, m = O));
  let Re = Ke(I, "similar_to_slice", {});
  ie(e, Re, (O) => n(21, w = O));
  let Ne = Ke(I, "subslice_of_slice", {});
  ie(e, Ne, (O) => n(22, A = O));
  let oe = Ke(I, "slice_intersection_counts", []);
  ie(e, oe, (O) => n(25, E = O));
  let xe = Ke(I, "slice_intersection_labels", []);
  ie(e, xe, (O) => n(26, D = O)), Ke(I, "selected_intersection_index", -1);
  let it = 0, rt, S = [], Pe = [], ke = null, Q, J = !1, Fe = !1;
  function Ge() {
    let O;
    Q.requestFullscreen ? O = Q.requestFullscreen : Q.mozRequestFullscreen ? O = Q.mozRequestFullscreen : Q.webkitRequestFullscreen && (O = Q.webkitRequestFullscreen), O = O.bind(Q), O(), n(5, J = !0), Fe = !0, Q.addEventListener("fullscreenchange", tt), Q.addEventListener("webkitfullscreenchange", tt), Q.addEventListener("mozfullscreenchange", tt), Q.addEventListener("msfullscreenchange", tt);
  }
  function qe() {
    let O;
    document.exitFullscreen ? O = document.exitFullscreen : document.mozExitFullscreen ? O = document.mozExitFullscreen : document.webkitExitFullscreen && (O = document.webkitExitFullscreen), O = O.bind(document), O(), n(5, J = !1);
  }
  function tt(O) {
    J && !Fe && n(5, J = !1), console.log("is full screen", J), Fe = !1;
  }
  function lt(O) {
    O == 0 ? pe(P, r = [], r) : pe(P, r = i, r);
  }
  const ct = () => n(0, it = 0), ht = () => n(0, it = 1);
  function he(O) {
    f = O, k.set(f);
  }
  function yt(O) {
    h = O, G.set(h);
  }
  function dt(O) {
    s = O, re.set(s);
  }
  function ot(O) {
    r = O, P.set(r);
  }
  function U(O) {
    d = O, le.set(d);
  }
  function we(O) {
    g = O, be.set(g);
  }
  function Oe(O) {
    _ = O, ce.set(_);
  }
  function Xe(O) {
    p = O, Se.set(p);
  }
  function vt(O) {
    m = O, ze.set(m);
  }
  function Xt(O) {
    w = O, Re.set(w);
  }
  function Yt(O) {
    A = O, Ne.set(A);
  }
  const Wt = () => pe(q, z = !0, z), zt = () => pe(v, M += 10, M), It = (O) => {
    let _e = i.findIndex((ye) => _t(ye.feature, O.detail.feature));
    _e >= 0 ? pe(C, i = [...i.slice(0, _e), ...i.slice(_e + 1)], i) : pe(C, i = [...i, O.detail], i);
  };
  function j(O) {
    r = O, P.set(r);
  }
  function We(O) {
    d = O, le.set(d);
  }
  function ee(O) {
    g = O, be.set(g);
  }
  const b = (O) => {
    let _e = i.findIndex((ye) => _t(ye.feature, O.detail.feature));
    _e >= 0 ? pe(C, i = [...i.slice(0, _e), ...i.slice(_e + 1)], i) : pe(C, i = [...i, O.detail], i);
  };
  function W() {
    ke = ou(this), n(3, ke), n(6, l), n(1, S), n(2, Pe), n(2, Pe), n(6, l), n(1, S), n(3, ke);
  }
  function te(O) {
    ve[O ? "unshift" : "push"](() => {
      Q = O, n(4, Q);
    });
  }
  return e.$$set = (O) => {
    "model" in O && n(51, I = O.model);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$scoreWeights*/
    128 | e.$$.dirty[1] & /*scoreNames*/
    2097152 && (n(52, rt = Object.keys(s)), rt.sort()), e.$$.dirty[0] & /*$slices, metricNames, binaryMetrics, overlapPlotMetric*/
    78) {
      let O = l.find((_e) => !_e.isEmpty);
      if (O && O.metrics) {
        let _e = Object.keys(O.metrics);
        $i(new Set(S), new Set(_e)) || (n(1, S = _e), S.sort(), n(2, Pe = S.filter((ye) => O.metrics[ye].type == "binary")), Pe.length > 0 ? n(3, ke = Pe[0]) : n(3, ke = null));
      }
      console.log("overlap metric:", ke);
    }
    e.$$.dirty[0] & /*isFullScreen, parentElement*/
    48 && !J && Q && (Q.removeEventListener("fullscreenchange", tt), Q.removeEventListener("webkitfullscreenchange", tt), Q.removeEventListener("mozfullscreenchange", tt), Q.removeEventListener("msfullscreenchange", tt)), e.$$.dirty[0] & /*viewingTab*/
    1 && lt(it);
  }, [
    it,
    S,
    Pe,
    ke,
    Q,
    J,
    l,
    s,
    i,
    r,
    o,
    f,
    u,
    h,
    a,
    c,
    d,
    g,
    _,
    p,
    m,
    w,
    A,
    z,
    M,
    E,
    D,
    v,
    k,
    q,
    Z,
    G,
    N,
    R,
    C,
    P,
    H,
    K,
    $,
    re,
    le,
    be,
    ce,
    Se,
    ze,
    Re,
    Ne,
    oe,
    xe,
    Ge,
    qe,
    I,
    rt,
    ct,
    ht,
    he,
    yt,
    dt,
    ot,
    U,
    we,
    Oe,
    Xe,
    vt,
    Xt,
    Yt,
    Wt,
    zt,
    It,
    j,
    We,
    ee,
    b,
    W,
    te
  ];
}
class X_ extends je {
  constructor(t) {
    super(), Ye(this, t, H_, V_, He, { model: 51 }, null, [-1, -1, -1]);
  }
}
function Y_(e) {
  new X_({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  Y_ as render
};
