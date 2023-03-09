import { getCurrentScope as Kt, onScopeDispose as Ut, unref as i, getCurrentInstance as ae, onMounted as He, nextTick as q, watch as Z, ref as C, openBlock as v, createElementBlock as _, createElementVNode as I, warn as Wt, computed as g, inject as H, toRef as be, onUnmounted as Gt, defineComponent as F, mergeProps as ve, renderSlot as B, useAttrs as qt, useSlots as vt, shallowRef as Ee, withDirectives as Qt, createCommentVNode as w, Fragment as ge, normalizeClass as x, createBlock as E, withCtx as T, resolveDynamicComponent as Q, withModifiers as Zt, createVNode as Fe, toDisplayString as fe, normalizeStyle as gt, vShow as Yt, Text as Jt, provide as Xt, reactive as en, createTextVNode as tn } from "vue";
function bt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function nn(e) {
  return e == null;
}
var rt;
const W = typeof window < "u", ze = (e) => typeof e == "number";
W && ((rt = window == null ? void 0 : window.navigator) != null && rt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function rn(e) {
  return typeof e == "function" ? e() : i(e);
}
function on(e) {
  return e;
}
function an(e) {
  return Kt() ? (Ut(e), !0) : !1;
}
function sn(e, t = !0) {
  ae() ? He(e) : t ? e() : q(e);
}
function ln(e) {
  var t;
  const n = rn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const un = W ? window : void 0;
W && window.document;
W && window.navigator;
W && window.location;
function cn(e, t = !1) {
  const n = C(), r = () => n.value = Boolean(e());
  return r(), sn(r, t), n;
}
const Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Pe = "__vueuse_ssr_handlers__";
Be[Pe] = Be[Pe] || {};
Be[Pe];
var ot = Object.getOwnPropertySymbols, dn = Object.prototype.hasOwnProperty, fn = Object.prototype.propertyIsEnumerable, pn = (e, t) => {
  var n = {};
  for (var r in e)
    dn.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ot)
    for (var r of ot(e))
      t.indexOf(r) < 0 && fn.call(e, r) && (n[r] = e[r]);
  return n;
};
function hn(e, t, n = {}) {
  const r = n, { window: o = un } = r, a = pn(r, ["window"]);
  let s;
  const u = cn(() => o && "ResizeObserver" in o), d = () => {
    s && (s.disconnect(), s = void 0);
  }, p = Z(() => ln(e), (h) => {
    d(), u.value && o && h && (s = new ResizeObserver(t), s.observe(h, a));
  }, { immediate: !0, flush: "post" }), m = () => {
    d(), p();
  };
  return an(m), {
    isSupported: u,
    stop: m
  };
}
var at;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(at || (at = {}));
var vn = Object.defineProperty, st = Object.getOwnPropertySymbols, gn = Object.prototype.hasOwnProperty, bn = Object.prototype.propertyIsEnumerable, it = (e, t, n) => t in e ? vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, mn = (e, t) => {
  for (var n in t || (t = {}))
    gn.call(t, n) && it(e, n, t[n]);
  if (st)
    for (var n of st(t))
      bn.call(t, n) && it(e, n, t[n]);
  return e;
};
const yn = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
mn({
  linear: on
}, yn);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const mt = () => {
}, _n = Object.prototype.hasOwnProperty, lt = (e, t) => _n.call(e, t), Y = (e) => typeof e == "string", me = (e) => e !== null && typeof e == "object", wn = (e) => e === void 0, xn = (e) => Y(e) ? !Number.isNaN(Number(e)) : !1;
class Sn extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function U(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Y(e) ? new Sn(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const kn = "utils/dom/style";
function $n(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || xn(e))
    return `${e}${t}`;
  if (Y(e))
    return e;
  U(kn, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.10 */
var se = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, In = {
  name: "CircleCheck"
}, Mn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, En = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Cn = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), On = [
  En,
  Cn
];
function Nn(e, t, n, r, o, a) {
  return v(), _("svg", Mn, On);
}
var zn = /* @__PURE__ */ se(In, [["render", Nn], ["__file", "circle-check.vue"]]), Bn = {
  name: "CircleClose"
}, Pn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, An = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), Vn = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Tn = [
  An,
  Vn
];
function Rn(e, t, n, r, o, a) {
  return v(), _("svg", Pn, Tn);
}
var yt = /* @__PURE__ */ se(Bn, [["render", Rn], ["__file", "circle-close.vue"]]), Hn = {
  name: "Hide"
}, Fn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ln = /* @__PURE__ */ I("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), jn = /* @__PURE__ */ I("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), Dn = [
  Ln,
  jn
];
function Kn(e, t, n, r, o, a) {
  return v(), _("svg", Fn, Dn);
}
var Un = /* @__PURE__ */ se(Hn, [["render", Kn], ["__file", "hide.vue"]]), Wn = {
  name: "Loading"
}, Gn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, qn = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), Qn = [
  qn
];
function Zn(e, t, n, r, o, a) {
  return v(), _("svg", Gn, Qn);
}
var _t = /* @__PURE__ */ se(Wn, [["render", Zn], ["__file", "loading.vue"]]), Yn = {
  name: "View"
}, Jn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xn = /* @__PURE__ */ I("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), er = [
  Xn
];
function tr(e, t, n, r, o, a) {
  return v(), _("svg", Jn, er);
}
var nr = /* @__PURE__ */ se(Yn, [["render", tr], ["__file", "view.vue"]]);
const wt = "__epPropKey", oe = (e) => e, rr = (e) => me(e) && !!e[wt], xt = (e, t) => {
  if (!me(e) || rr(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, d = {
    type: a,
    required: !!r,
    validator: n || s ? (p) => {
      let m = !1, h = [];
      if (n && (h = Array.from(n), lt(e, "default") && h.push(o), m || (m = h.includes(p))), s && (m || (m = s(p))), !m && h.length > 0) {
        const b = [...new Set(h)].map(($) => JSON.stringify($)).join(", ");
        Wt(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${b}], got value ${JSON.stringify(p)}.`);
      }
      return m;
    } : void 0,
    [wt]: !0
  };
  return lt(e, "default") && (d.default = o), d;
}, Le = (e) => bt(Object.entries(e).map(([t, n]) => [
  t,
  xt(n, t)
])), ye = oe([
  String,
  Object,
  Function
]), or = {
  validating: _t,
  success: zn,
  error: yt
}, je = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, ar = (e) => (e.install = mt, e), Ae = "update:modelValue", sr = ["", "default", "small", "large"], ir = (e) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e), lr = (e) => e, ur = ["class", "style"], cr = /^on[A-Z]/, dr = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = g(() => ((n == null ? void 0 : n.value) || []).concat(ur)), o = ae();
  return o ? g(() => {
    var a;
    return bt(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && cr.test(s))));
  }) : (U("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), g(() => ({})));
}, St = Symbol("buttonGroupContextKey"), fr = Symbol(), De = Symbol("formContextKey"), kt = Symbol("formItemContextKey"), $t = (e) => {
  const t = ae();
  return g(() => {
    var n, r;
    return (r = ((n = t.proxy) == null ? void 0 : n.$props)[e]) != null ? r : void 0;
  });
}, ut = C();
function _e(e, t = void 0) {
  const n = ae() ? H(fr, ut) : ut;
  return e ? g(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
const It = xt({
  type: String,
  values: sr,
  required: !1
}), Mt = (e, t = {}) => {
  const n = C(void 0), r = t.prop ? n : $t("size"), o = t.global ? n : _e("size"), a = t.form ? { size: void 0 } : H(De, void 0), s = t.formItem ? { size: void 0 } : H(kt, void 0);
  return g(() => r.value || i(e) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || o.value || "");
}, Ke = (e) => {
  const t = $t("disabled"), n = H(De, void 0);
  return g(() => t.value || i(e) || (n == null ? void 0 : n.disabled) || !1);
}, pr = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, s) => {
  Z(() => i(s), (u) => {
    u && U(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
}, Et = "el", hr = "is-", j = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, J = (e) => {
  const t = _e("namespace", Et);
  return {
    namespace: t,
    b: (f = "") => j(t.value, e, f, "", ""),
    e: (f) => f ? j(t.value, e, "", f, "") : "",
    m: (f) => f ? j(t.value, e, "", "", f) : "",
    be: (f, c) => f && c ? j(t.value, e, f, c, "") : "",
    em: (f, c) => f && c ? j(t.value, e, "", f, c) : "",
    bm: (f, c) => f && c ? j(t.value, e, f, "", c) : "",
    bem: (f, c, S) => f && c && S ? j(t.value, e, f, c, S) : "",
    is: (f, ...c) => {
      const S = c.length >= 1 ? c[0] : !0;
      return f && S ? `${hr}${f}` : "";
    },
    cssVar: (f) => {
      const c = {};
      for (const S in f)
        f[S] && (c[`--${t.value}-${S}`] = f[S]);
      return c;
    },
    cssVarName: (f) => `--${t.value}-${f}`,
    cssVarBlock: (f) => {
      const c = {};
      for (const S in f)
        f[S] && (c[`--${t.value}-${e}-${S}`] = f[S]);
      return c;
    },
    cssVarBlockName: (f) => `--${t.value}-${e}-${f}`
  };
}, Ve = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, vr = Symbol("elIdInjection"), gr = () => ae() ? H(vr, Ve) : Ve, br = (e) => {
  const t = gr();
  !W && t === Ve && U("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = _e("namespace", Et);
  return g(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ct = () => {
  const e = H(De, void 0), t = H(kt, void 0);
  return {
    form: e,
    formItem: t
  };
}, mr = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = C(!1)), r || (r = C(!1));
  const o = C();
  let a;
  const s = g(() => {
    var u;
    return !!(!e.label && t && t.inputIds && ((u = t.inputIds) == null ? void 0 : u.length) <= 1);
  });
  return He(() => {
    a = Z([be(e, "id"), n], ([u, d]) => {
      const p = u ?? (d ? void 0 : br().value);
      p !== o.value && (t != null && t.removeInputId && (o.value && t.removeInputId(o.value), !(r != null && r.value) && !d && p && t.addInputId(p)), o.value = p);
    }, { immediate: !0 });
  }), Gt(() => {
    a && a(), t != null && t.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
};
function yr(e) {
  const t = C();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: s } = e.value;
    if (o == null || a == null)
      return;
    const u = s.slice(0, Math.max(0, o)), d = s.slice(Math.max(0, a));
    t.value = {
      selectionStart: o,
      selectionEnd: a,
      value: s,
      beforeTxt: u,
      afterTxt: d
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: u } = t.value;
    if (a == null || s == null || u == null)
      return;
    let d = o.length;
    if (o.endsWith(s))
      d = o.length - s.length;
    else if (o.startsWith(a))
      d = a.length;
    else {
      const p = a[u - 1], m = o.indexOf(p, u - 1);
      m !== -1 && (d = m + 1);
    }
    e.value.setSelectionRange(d, d);
  }
  return [n, r];
}
var we = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const _r = Le({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), wr = F({
  name: "ElIcon",
  inheritAttrs: !1
}), xr = /* @__PURE__ */ F({
  ...wr,
  props: _r,
  setup(e) {
    const t = e, n = J("icon"), r = g(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: wn(o) ? void 0 : $n(o),
        "--color": a
      };
    });
    return (o, a) => (v(), _("i", ve({
      class: i(n).b(),
      style: i(r)
    }, o.$attrs), [
      B(o.$slots, "default")
    ], 16));
  }
});
var Sr = /* @__PURE__ */ we(xr, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const D = je(Sr);
let O;
const kr = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, $r = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Ir(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: $r.map((s) => `${s}:${t.getPropertyValue(s)}`).join(";"), paddingSize: r, borderSize: o, boxSizing: n };
}
function ct(e, t = 1, n) {
  var r;
  O || (O = document.createElement("textarea"), document.body.appendChild(O));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: u } = Ir(e);
  O.setAttribute("style", `${u};${kr}`), O.value = e.value || e.placeholder || "";
  let d = O.scrollHeight;
  const p = {};
  s === "border-box" ? d = d + a : s === "content-box" && (d = d - o), O.value = "";
  const m = O.scrollHeight - o;
  if (ze(t)) {
    let h = m * t;
    s === "border-box" && (h = h + o + a), d = Math.max(h, d), p.minHeight = `${h}px`;
  }
  if (ze(n)) {
    let h = m * n;
    s === "border-box" && (h = h + o + a), d = Math.min(h, d);
  }
  return p.height = `${d}px`, (r = O.parentNode) == null || r.removeChild(O), O = void 0, p;
}
const Mr = Le({
  id: {
    type: String,
    default: void 0
  },
  size: It,
  disabled: Boolean,
  modelValue: {
    type: oe([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: oe([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: ye
  },
  prefixIcon: {
    type: ye
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: oe([Object, Array, String]),
    default: () => lr({})
  }
}), Er = {
  [Ae]: (e) => Y(e),
  input: (e) => Y(e),
  change: (e) => Y(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Cr = ["role"], Or = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Nr = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], zr = F({
  name: "ElInput",
  inheritAttrs: !1
}), Br = /* @__PURE__ */ F({
  ...zr,
  props: Mr,
  emits: Er,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = qt(), a = vt(), s = g(() => {
      const l = {};
      return r.containerRole === "combobox" && (l["aria-haspopup"] = o["aria-haspopup"], l["aria-owns"] = o["aria-owns"], l["aria-expanded"] = o["aria-expanded"]), l;
    }), u = g(() => [
      r.type === "textarea" ? S.b() : c.b(),
      c.m($.value),
      c.is("disabled", f.value),
      c.is("exceed", At.value),
      {
        [c.b("group")]: a.prepend || a.append,
        [c.bm("group", "append")]: a.append,
        [c.bm("group", "prepend")]: a.prepend,
        [c.m("prefix")]: a.prefix || r.prefixIcon,
        [c.m("suffix")]: a.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [c.bm("suffix", "password-clear")]: ue.value && ke.value
      },
      o.class
    ]), d = g(() => [
      c.e("wrapper"),
      c.is("focus", X.value)
    ]), p = dr({
      excludeKeys: g(() => Object.keys(s.value))
    }), { form: m, formItem: h } = Ct(), { inputId: b } = mr(r, {
      formItemContext: h
    }), $ = Mt(), f = Ke(), c = J("input"), S = J("textarea"), ie = Ee(), L = Ee(), X = C(!1), xe = C(!1), ee = C(!1), le = C(!1), Ue = C(), Se = Ee(r.inputStyle), te = g(() => ie.value || L.value), We = g(() => {
      var l;
      return (l = m == null ? void 0 : m.statusIcon) != null ? l : !1;
    }), ne = g(() => (h == null ? void 0 : h.validateState) || ""), Ge = g(() => ne.value && or[ne.value]), Bt = g(() => le.value ? nr : Un), Pt = g(() => [
      o.style,
      r.inputStyle
    ]), qe = g(() => [
      r.inputStyle,
      Se.value,
      { resize: r.resize }
    ]), P = g(() => nn(r.modelValue) ? "" : String(r.modelValue)), ue = g(() => r.clearable && !f.value && !r.readonly && !!P.value && (X.value || xe.value)), ke = g(() => r.showPassword && !f.value && !r.readonly && !!P.value && (!!P.value || X.value)), G = g(() => r.showWordLimit && !!p.value.maxlength && (r.type === "text" || r.type === "textarea") && !f.value && !r.readonly && !r.showPassword), $e = g(() => Array.from(P.value).length), At = g(() => !!G.value && $e.value > Number(p.value.maxlength)), Vt = g(() => !!a.suffix || !!r.suffixIcon || ue.value || r.showPassword || G.value || !!ne.value && We.value), [Tt, Rt] = yr(ie);
    hn(L, (l) => {
      if (!G.value || r.resize !== "both")
        return;
      const y = l[0], { width: A } = y.contentRect;
      Ue.value = {
        right: `calc(100% - ${A + 15 + 6}px)`
      };
    });
    const ce = () => {
      const { type: l, autosize: y } = r;
      if (!(!W || l !== "textarea" || !L.value))
        if (y) {
          const A = me(y) ? y.minRows : void 0, Me = me(y) ? y.maxRows : void 0;
          Se.value = {
            ...ct(L.value, A, Me)
          };
        } else
          Se.value = {
            minHeight: ct(L.value).minHeight
          };
    }, re = () => {
      const l = te.value;
      !l || l.value === P.value || (l.value = P.value);
    }, Ie = async (l) => {
      Tt();
      let { value: y } = l.target;
      if (r.formatter && (y = r.parser ? r.parser(y) : y, y = r.formatter(y)), !ee.value) {
        if (y === P.value) {
          re();
          return;
        }
        n(Ae, y), n("input", y), await q(), re(), Rt();
      }
    }, Qe = (l) => {
      n("change", l.target.value);
    }, Ze = (l) => {
      n("compositionstart", l), ee.value = !0;
    }, Ye = (l) => {
      var y;
      n("compositionupdate", l);
      const A = (y = l.target) == null ? void 0 : y.value, Me = A[A.length - 1] || "";
      ee.value = !ir(Me);
    }, Je = (l) => {
      n("compositionend", l), ee.value && (ee.value = !1, Ie(l));
    }, Ht = () => {
      le.value = !le.value, de();
    }, de = async () => {
      var l;
      await q(), (l = te.value) == null || l.focus();
    }, Ft = () => {
      var l;
      return (l = te.value) == null ? void 0 : l.blur();
    }, Xe = (l) => {
      X.value = !0, n("focus", l);
    }, et = (l) => {
      var y;
      X.value = !1, n("blur", l), r.validateEvent && ((y = h == null ? void 0 : h.validate) == null || y.call(h, "blur").catch((A) => U(A)));
    }, Lt = (l) => {
      xe.value = !1, n("mouseleave", l);
    }, jt = (l) => {
      xe.value = !0, n("mouseenter", l);
    }, tt = (l) => {
      n("keydown", l);
    }, Dt = () => {
      var l;
      (l = te.value) == null || l.select();
    }, nt = () => {
      n(Ae, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Z(() => r.modelValue, () => {
      var l;
      q(() => ce()), r.validateEvent && ((l = h == null ? void 0 : h.validate) == null || l.call(h, "change").catch((y) => U(y)));
    }), Z(P, () => re()), Z(() => r.type, async () => {
      await q(), re(), ce();
    }), He(() => {
      !r.formatter && r.parser && U("ElInput", "If you set the parser, you also need to set the formatter."), re(), q(ce);
    }), t({
      input: ie,
      textarea: L,
      ref: te,
      textareaStyle: qe,
      autosize: be(r, "autosize"),
      focus: de,
      blur: Ft,
      select: Dt,
      clear: nt,
      resizeTextarea: ce
    }), (l, y) => Qt((v(), _("div", ve(i(s), {
      class: i(u),
      style: i(Pt),
      role: l.containerRole,
      onMouseenter: jt,
      onMouseleave: Lt
    }), [
      w(" input "),
      l.type !== "textarea" ? (v(), _(ge, { key: 0 }, [
        w(" prepend slot "),
        l.$slots.prepend ? (v(), _("div", {
          key: 0,
          class: x(i(c).be("group", "prepend"))
        }, [
          B(l.$slots, "prepend")
        ], 2)) : w("v-if", !0),
        I("div", {
          class: x(i(d))
        }, [
          w(" prefix slot "),
          l.$slots.prefix || l.prefixIcon ? (v(), _("span", {
            key: 0,
            class: x(i(c).e("prefix"))
          }, [
            I("span", {
              class: x(i(c).e("prefix-inner")),
              onClick: de
            }, [
              B(l.$slots, "prefix"),
              l.prefixIcon ? (v(), E(i(D), {
                key: 0,
                class: x(i(c).e("icon"))
              }, {
                default: T(() => [
                  (v(), E(Q(l.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : w("v-if", !0)
            ], 2)
          ], 2)) : w("v-if", !0),
          I("input", ve({
            id: i(b),
            ref_key: "input",
            ref: ie,
            class: i(c).e("inner")
          }, i(p), {
            type: l.showPassword ? le.value ? "text" : "password" : l.type,
            disabled: i(f),
            formatter: l.formatter,
            parser: l.parser,
            readonly: l.readonly,
            autocomplete: l.autocomplete,
            tabindex: l.tabindex,
            "aria-label": l.label,
            placeholder: l.placeholder,
            style: l.inputStyle,
            form: r.form,
            onCompositionstart: Ze,
            onCompositionupdate: Ye,
            onCompositionend: Je,
            onInput: Ie,
            onFocus: Xe,
            onBlur: et,
            onChange: Qe,
            onKeydown: tt
          }), null, 16, Or),
          w(" suffix slot "),
          i(Vt) ? (v(), _("span", {
            key: 1,
            class: x(i(c).e("suffix"))
          }, [
            I("span", {
              class: x(i(c).e("suffix-inner")),
              onClick: de
            }, [
              !i(ue) || !i(ke) || !i(G) ? (v(), _(ge, { key: 0 }, [
                B(l.$slots, "suffix"),
                l.suffixIcon ? (v(), E(i(D), {
                  key: 0,
                  class: x(i(c).e("icon"))
                }, {
                  default: T(() => [
                    (v(), E(Q(l.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : w("v-if", !0)
              ], 64)) : w("v-if", !0),
              i(ue) ? (v(), E(i(D), {
                key: 1,
                class: x([i(c).e("icon"), i(c).e("clear")]),
                onMousedown: Zt(i(mt), ["prevent"]),
                onClick: nt
              }, {
                default: T(() => [
                  Fe(i(yt))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : w("v-if", !0),
              i(ke) ? (v(), E(i(D), {
                key: 2,
                class: x([i(c).e("icon"), i(c).e("password")]),
                onClick: Ht
              }, {
                default: T(() => [
                  (v(), E(Q(i(Bt))))
                ]),
                _: 1
              }, 8, ["class"])) : w("v-if", !0),
              i(G) ? (v(), _("span", {
                key: 3,
                class: x(i(c).e("count"))
              }, [
                I("span", {
                  class: x(i(c).e("count-inner"))
                }, fe(i($e)) + " / " + fe(i(p).maxlength), 3)
              ], 2)) : w("v-if", !0),
              i(ne) && i(Ge) && i(We) ? (v(), E(i(D), {
                key: 4,
                class: x([
                  i(c).e("icon"),
                  i(c).e("validateIcon"),
                  i(c).is("loading", i(ne) === "validating")
                ])
              }, {
                default: T(() => [
                  (v(), E(Q(i(Ge))))
                ]),
                _: 1
              }, 8, ["class"])) : w("v-if", !0)
            ], 2)
          ], 2)) : w("v-if", !0)
        ], 2),
        w(" append slot "),
        l.$slots.append ? (v(), _("div", {
          key: 1,
          class: x(i(c).be("group", "append"))
        }, [
          B(l.$slots, "append")
        ], 2)) : w("v-if", !0)
      ], 64)) : (v(), _(ge, { key: 1 }, [
        w(" textarea "),
        I("textarea", ve({
          id: i(b),
          ref_key: "textarea",
          ref: L,
          class: i(S).e("inner")
        }, i(p), {
          tabindex: l.tabindex,
          disabled: i(f),
          readonly: l.readonly,
          autocomplete: l.autocomplete,
          style: i(qe),
          "aria-label": l.label,
          placeholder: l.placeholder,
          form: r.form,
          onCompositionstart: Ze,
          onCompositionupdate: Ye,
          onCompositionend: Je,
          onInput: Ie,
          onFocus: Xe,
          onBlur: et,
          onChange: Qe,
          onKeydown: tt
        }), null, 16, Nr),
        i(G) ? (v(), _("span", {
          key: 0,
          style: gt(Ue.value),
          class: x(i(c).e("count"))
        }, fe(i($e)) + " / " + fe(i(p).maxlength), 7)) : w("v-if", !0)
      ], 64))
    ], 16, Cr)), [
      [Yt, l.type !== "hidden"]
    ]);
  }
});
var Pr = /* @__PURE__ */ we(Br, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Ar = je(Pr), Vr = (e, t) => {
  pr({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, g(() => e.type === "text"));
  const n = H(St, void 0), r = _e("button"), { form: o } = Ct(), a = Mt(g(() => n == null ? void 0 : n.size)), s = Ke(), u = C(), d = vt(), p = g(() => e.type || (n == null ? void 0 : n.type) || ""), m = g(() => {
    var $, f, c;
    return (c = (f = e.autoInsertSpace) != null ? f : ($ = r.value) == null ? void 0 : $.autoInsertSpace) != null ? c : !1;
  }), h = g(() => {
    var $;
    const f = ($ = d.default) == null ? void 0 : $.call(d);
    if (m.value && (f == null ? void 0 : f.length) === 1) {
      const c = f[0];
      if ((c == null ? void 0 : c.type) === Jt) {
        const S = c.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(S.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: a,
    _type: p,
    _ref: u,
    shouldAddSpace: h,
    handleClick: ($) => {
      e.nativeType === "reset" && (o == null || o.resetFields()), t("click", $);
    }
  };
}, Tr = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Rr = ["button", "submit", "reset"], Te = Le({
  size: It,
  disabled: Boolean,
  type: {
    type: String,
    values: Tr,
    default: ""
  },
  icon: {
    type: ye
  },
  nativeType: {
    type: String,
    values: Rr,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: ye,
    default: () => _t
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
}), Hr = {
  click: (e) => e instanceof MouseEvent
};
function k(e, t) {
  Fr(e) && (e = "100%");
  var n = Lr(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function pe(e) {
  return Math.min(1, Math.max(0, e));
}
function Fr(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Lr(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ot(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function he(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function K(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function jr(e, t, n) {
  return {
    r: k(e, 255) * 255,
    g: k(t, 255) * 255,
    b: k(n, 255) * 255
  };
}
function dt(e, t, n) {
  e = k(e, 255), t = k(t, 255), n = k(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, s = 0, u = (r + o) / 2;
  if (r === o)
    s = 0, a = 0;
  else {
    var d = r - o;
    switch (s = u > 0.5 ? d / (2 - r - o) : d / (r + o), r) {
      case e:
        a = (t - n) / d + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / d + 2;
        break;
      case n:
        a = (e - t) / d + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, l: u };
}
function Ce(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Dr(e, t, n) {
  var r, o, a;
  if (e = k(e, 360), t = k(t, 100), n = k(n, 100), t === 0)
    o = n, a = n, r = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, u = 2 * n - s;
    r = Ce(u, s, e + 1 / 3), o = Ce(u, s, e), a = Ce(u, s, e - 1 / 3);
  }
  return { r: r * 255, g: o * 255, b: a * 255 };
}
function ft(e, t, n) {
  e = k(e, 255), t = k(t, 255), n = k(n, 255);
  var r = Math.max(e, t, n), o = Math.min(e, t, n), a = 0, s = r, u = r - o, d = r === 0 ? 0 : u / r;
  if (r === o)
    a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / u + 2;
        break;
      case n:
        a = (e - t) / u + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: d, v: s };
}
function Kr(e, t, n) {
  e = k(e, 360) * 6, t = k(t, 100), n = k(n, 100);
  var r = Math.floor(e), o = e - r, a = n * (1 - t), s = n * (1 - o * t), u = n * (1 - (1 - o) * t), d = r % 6, p = [n, s, a, a, u, n][d], m = [u, n, n, s, a, a][d], h = [a, a, u, n, n, s][d];
  return { r: p * 255, g: m * 255, b: h * 255 };
}
function pt(e, t, n, r) {
  var o = [
    K(Math.round(e).toString(16)),
    K(Math.round(t).toString(16)),
    K(Math.round(n).toString(16))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function Ur(e, t, n, r, o) {
  var a = [
    K(Math.round(e).toString(16)),
    K(Math.round(t).toString(16)),
    K(Math.round(n).toString(16)),
    K(Wr(r))
  ];
  return o && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function Wr(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ht(e) {
  return M(e) / 255;
}
function M(e) {
  return parseInt(e, 16);
}
function Gr(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Re = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function qr(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, o = null, a = null, s = !1, u = !1;
  return typeof e == "string" && (e = Yr(e)), typeof e == "object" && (z(e.r) && z(e.g) && z(e.b) ? (t = jr(e.r, e.g, e.b), s = !0, u = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : z(e.h) && z(e.s) && z(e.v) ? (r = he(e.s), o = he(e.v), t = Kr(e.h, r, o), s = !0, u = "hsv") : z(e.h) && z(e.s) && z(e.l) && (r = he(e.s), a = he(e.l), t = Dr(e.h, r, a), s = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ot(n), {
    ok: s,
    format: e.format || u,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Qr = "[-\\+]?\\d+%?", Zr = "[-\\+]?\\d*\\.\\d+%?", R = "(?:".concat(Zr, ")|(?:").concat(Qr, ")"), Oe = "[\\s|\\(]+(".concat(R, ")[,|\\s]+(").concat(R, ")[,|\\s]+(").concat(R, ")\\s*\\)?"), Ne = "[\\s|\\(]+(".concat(R, ")[,|\\s]+(").concat(R, ")[,|\\s]+(").concat(R, ")[,|\\s]+(").concat(R, ")\\s*\\)?"), N = {
  CSS_UNIT: new RegExp(R),
  rgb: new RegExp("rgb" + Oe),
  rgba: new RegExp("rgba" + Ne),
  hsl: new RegExp("hsl" + Oe),
  hsla: new RegExp("hsla" + Ne),
  hsv: new RegExp("hsv" + Oe),
  hsva: new RegExp("hsva" + Ne),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Yr(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Re[e])
    e = Re[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = N.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = N.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = N.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = N.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = N.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = N.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = N.hex8.exec(e), n ? {
    r: M(n[1]),
    g: M(n[2]),
    b: M(n[3]),
    a: ht(n[4]),
    format: t ? "name" : "hex8"
  } : (n = N.hex6.exec(e), n ? {
    r: M(n[1]),
    g: M(n[2]),
    b: M(n[3]),
    format: t ? "name" : "hex"
  } : (n = N.hex4.exec(e), n ? {
    r: M(n[1] + n[1]),
    g: M(n[2] + n[2]),
    b: M(n[3] + n[3]),
    a: ht(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = N.hex3.exec(e), n ? {
    r: M(n[1] + n[1]),
    g: M(n[2] + n[2]),
    b: M(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function z(e) {
  return Boolean(N.CSS_UNIT.exec(String(e)));
}
var Jr = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Gr(t)), this.originalInput = t;
      var o = qr(t);
      this.originalInput = t, this.r = o.r, this.g = o.g, this.b = o.b, this.a = o.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : o.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = o.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, o, a = t.r / 255, s = t.g / 255, u = t.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), u <= 0.03928 ? o = u / 12.92 : o = Math.pow((u + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * o;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ot(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ft(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ft(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = dt(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = dt(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), o = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), pt(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Ur(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(k(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(k(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + pt(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Re); n < r.length; n++) {
        var o = r[n], a = o[0], s = o[1];
        if (t === s)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = Boolean(t);
      t = t ?? this.format;
      var r = !1, o = this.a < 1 && this.a >= 0, a = !n && o && (t.startsWith("hex") || t === "name");
      return a ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = pe(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = pe(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = pe(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = pe(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), o = new e(t).toRgb(), a = n / 100, s = {
        r: (o.r - r.r) * a + r.r,
        g: (o.g - r.g) * a + r.g,
        b: (o.b - r.b) * a + r.b,
        a: (o.a - r.a) * a + r.a
      };
      return new e(s);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), o = 360 / n, a = [this];
      for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + o) % 360, a.push(new e(r));
      return a;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, o = n.s, a = n.v, s = [], u = 1 / t; t--; )
        s.push(new e({ h: r, s: o, v: a })), a = (a + u) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), o = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
        a: o
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, s = 1; s < t; s++)
        o.push(new e({ h: (r + s * a) % 360, s: n.s, l: n.l }));
      return o;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function V(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function Xr(e) {
  const t = Ke(), n = J("button");
  return g(() => {
    let r = {};
    const o = e.color;
    if (o) {
      const a = new Jr(o), s = e.dark ? a.tint(20).toString() : V(a, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? V(a, 90) : a.tint(90).toString(),
          "text-color": o,
          "border-color": e.dark ? V(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": o,
          "hover-border-color": o,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? V(a, 90) : a.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? V(a, 50) : a.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? V(a, 80) : a.tint(80).toString());
      else {
        const u = e.dark ? V(a, 30) : a.tint(30).toString(), d = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": o,
          "text-color": d,
          "border-color": o,
          "hover-bg-color": u,
          "hover-text-color": d,
          "hover-border-color": u,
          "active-bg-color": s,
          "active-border-color": s
        }), t.value) {
          const p = e.dark ? V(a, 50) : a.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = p, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = p;
        }
      }
    }
    return r;
  });
}
const eo = ["aria-disabled", "disabled", "autofocus", "type"], to = F({
  name: "ElButton"
}), no = /* @__PURE__ */ F({
  ...to,
  props: Te,
  emits: Hr,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Xr(r), a = J("button"), { _ref: s, _size: u, _type: d, _disabled: p, shouldAddSpace: m, handleClick: h } = Vr(r, n);
    return t({
      ref: s,
      size: u,
      type: d,
      disabled: p,
      shouldAddSpace: m
    }), (b, $) => (v(), _("button", {
      ref_key: "_ref",
      ref: s,
      class: x([
        i(a).b(),
        i(a).m(i(d)),
        i(a).m(i(u)),
        i(a).is("disabled", i(p)),
        i(a).is("loading", b.loading),
        i(a).is("plain", b.plain),
        i(a).is("round", b.round),
        i(a).is("circle", b.circle),
        i(a).is("text", b.text),
        i(a).is("link", b.link),
        i(a).is("has-bg", b.bg)
      ]),
      "aria-disabled": i(p) || b.loading,
      disabled: i(p) || b.loading,
      autofocus: b.autofocus,
      type: b.nativeType,
      style: gt(i(o)),
      onClick: $[0] || ($[0] = (...f) => i(h) && i(h)(...f))
    }, [
      b.loading ? (v(), _(ge, { key: 0 }, [
        b.$slots.loading ? B(b.$slots, "loading", { key: 0 }) : (v(), E(i(D), {
          key: 1,
          class: x(i(a).is("loading"))
        }, {
          default: T(() => [
            (v(), E(Q(b.loadingIcon)))
          ]),
          _: 1
        }, 8, ["class"]))
      ], 64)) : b.icon || b.$slots.icon ? (v(), E(i(D), { key: 1 }, {
        default: T(() => [
          b.icon ? (v(), E(Q(b.icon), { key: 0 })) : B(b.$slots, "icon", { key: 1 })
        ]),
        _: 3
      })) : w("v-if", !0),
      b.$slots.default ? (v(), _("span", {
        key: 2,
        class: x({ [i(a).em("text", "expand")]: i(m) })
      }, [
        B(b.$slots, "default")
      ], 2)) : w("v-if", !0)
    ], 14, eo));
  }
});
var ro = /* @__PURE__ */ we(no, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const oo = {
  size: Te.size,
  type: Te.type
}, ao = F({
  name: "ElButtonGroup"
}), so = /* @__PURE__ */ F({
  ...ao,
  props: oo,
  setup(e) {
    const t = e;
    Xt(St, en({
      size: be(t, "size"),
      type: be(t, "type")
    }));
    const n = J("button");
    return (r, o) => (v(), _("div", {
      class: x(`${i(n).b("group")}`)
    }, [
      B(r.$slots, "default")
    ], 2));
  }
});
var Nt = /* @__PURE__ */ we(so, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const io = je(ro, {
  ButtonGroup: Nt
});
ar(Nt);
const zt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, lo = {
  name: "big-btn"
};
function uo(e, t, n, r, o, a) {
  const s = io;
  return v(), _("div", null, [
    Fe(s, null, {
      default: T(() => [
        tn("Default")
      ]),
      _: 1
    })
  ]);
}
const co = /* @__PURE__ */ zt(lo, [["render", uo]]);
const fo = {
  name: "big-input"
};
function po(e, t, n, r, o, a) {
  const s = Ar;
  return v(), _("div", null, [
    Fe(s, {
      modelValue: e.input,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => e.input = u),
      placeholder: "Please input"
    }, null, 8, ["modelValue"])
  ]);
}
const ho = /* @__PURE__ */ zt(fo, [["render", po]]), vo = [co, ho], go = function(e, t) {
  vo.forEach((n) => {
    e.component(n.name, n);
  });
}, mo = { install: go };
export {
  co as bigbutton,
  ho as biginput,
  mo as default
};
