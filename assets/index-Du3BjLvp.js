(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Jp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var eh = { exports: {} },
  Ks = {},
  th = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zo = Symbol.for("react.element"),
  _y = Symbol.for("react.portal"),
  Ry = Symbol.for("react.fragment"),
  Ay = Symbol.for("react.strict_mode"),
  Oy = Symbol.for("react.profiler"),
  Iy = Symbol.for("react.provider"),
  Fy = Symbol.for("react.context"),
  Vy = Symbol.for("react.forward_ref"),
  Dy = Symbol.for("react.suspense"),
  jy = Symbol.for("react.memo"),
  zy = Symbol.for("react.lazy"),
  Sd = Symbol.iterator;
function By(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sd && e[Sd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var nh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rh = Object.assign,
  oh = {};
function Ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oh),
    (this.updater = n || nh);
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ih() {}
ih.prototype = Ir.prototype;
function ju(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = oh),
    (this.updater = n || nh);
}
var zu = (ju.prototype = new ih());
zu.constructor = ju;
rh(zu, Ir.prototype);
zu.isPureReactComponent = !0;
var Cd = Array.isArray,
  sh = Object.prototype.hasOwnProperty,
  Bu = { current: null },
  lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ah(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      sh.call(t, r) && !lh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Zo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Bu.current,
  };
}
function Hy(e, t) {
  return {
    $$typeof: Zo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zo;
}
function Wy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pd = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Wy("" + e.key)
    : t.toString(36);
}
function Bi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zo:
          case _y:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + kl(s, 0) : r),
      Cd(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pd, "$&/") + "/"),
          Bi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Hu(o) &&
            (o = Hy(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Cd(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + kl(i, l);
      s += Bi(i, t, n, a, o);
    }
  else if (((a = By(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + kl(i, l++)), (s += Bi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function ui(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Uy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Hi = { transition: null },
  Ky = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Hi,
    ReactCurrentOwner: Bu,
  };
function uh() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: ui,
  forEach: function (e, t, n) {
    ui(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ui(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ui(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Ir;
X.Fragment = Ry;
X.Profiler = Oy;
X.PureComponent = ju;
X.StrictMode = Ay;
X.Suspense = Dy;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ky;
X.act = uh;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = rh({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Bu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      sh.call(t, a) &&
        !lh.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Zo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Iy, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = ah;
X.createFactory = function (e) {
  var t = ah.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: Vy, render: e };
};
X.isValidElement = Hu;
X.lazy = function (e) {
  return { $$typeof: zy, _payload: { _status: -1, _result: e }, _init: Uy };
};
X.memo = function (e, t) {
  return { $$typeof: jy, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Hi.transition;
  Hi.transition = {};
  try {
    e();
  } finally {
    Hi.transition = t;
  }
};
X.unstable_act = uh;
X.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
X.useContext = function (e) {
  return je.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
X.useId = function () {
  return je.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return je.current.useRef(e);
};
X.useState = function (e) {
  return je.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return je.current.useTransition();
};
X.version = "18.3.1";
th.exports = X;
var w = th.exports;
const J = Jp(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gy = w,
  Yy = Symbol.for("react.element"),
  Qy = Symbol.for("react.fragment"),
  Xy = Object.prototype.hasOwnProperty,
  Zy = Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qy = { key: !0, ref: !0, __self: !0, __source: !0 };
function ch(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Xy.call(t, r) && !qy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Yy,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Zy.current,
  };
}
Ks.Fragment = Qy;
Ks.jsx = ch;
Ks.jsxs = ch;
eh.exports = Ks;
var k = eh.exports,
  dh = { exports: {} },
  tt = {},
  fh = { exports: {} },
  ph = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, A) {
    var D = N.length;
    N.push(A);
    e: for (; 0 < D; ) {
      var x = (D - 1) >>> 1,
        L = N[x];
      if (0 < o(L, A)) (N[x] = A), (N[D] = L), (D = x);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0],
      D = N.pop();
    if (D !== A) {
      N[0] = D;
      e: for (var x = 0, L = N.length, B = L >>> 1; x < B; ) {
        var G = 2 * (x + 1) - 1,
          Y = N[G],
          K = G + 1,
          te = N[K];
        if (0 > o(Y, D))
          K < L && 0 > o(te, Y)
            ? ((N[x] = te), (N[K] = D), (x = K))
            : ((N[x] = Y), (N[G] = D), (x = G));
        else if (K < L && 0 > o(te, D)) (N[x] = te), (N[K] = D), (x = K);
        else break e;
      }
    }
    return A;
  }
  function o(N, A) {
    var D = N.sortIndex - A.sortIndex;
    return D !== 0 ? D : N.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    y = !1,
    b = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= N)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function S(N) {
    if (((b = !1), m(N), !y))
      if (n(a) !== null) (y = !0), j(P);
      else {
        var A = n(u);
        A !== null && U(S, A.startTime - N);
      }
  }
  function P(N, A) {
    (y = !1), b && ((b = !1), h(g), (g = -1)), (v = !0);
    var D = f;
    try {
      for (
        m(A), d = n(a);
        d !== null && (!(d.expirationTime > A) || (N && !R()));

      ) {
        var x = d.callback;
        if (typeof x == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var L = x(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof L == "function" ? (d.callback = L) : d === n(a) && r(a),
            m(A);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var B = !0;
      else {
        var G = n(u);
        G !== null && U(S, G.startTime - A), (B = !1);
      }
      return B;
    } finally {
      (d = null), (f = D), (v = !1);
    }
  }
  var $ = !1,
    O = null,
    g = -1,
    M = 5,
    I = -1;
  function R() {
    return !(e.unstable_now() - I < M);
  }
  function _() {
    if (O !== null) {
      var N = e.unstable_now();
      I = N;
      var A = !0;
      try {
        A = O(!0, N);
      } finally {
        A ? E() : (($ = !1), (O = null));
      }
    } else $ = !1;
  }
  var E;
  if (typeof p == "function")
    E = function () {
      p(_);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      V = T.port2;
    (T.port1.onmessage = _),
      (E = function () {
        V.postMessage(null);
      });
  } else
    E = function () {
      C(_, 0);
    };
  function j(N) {
    (O = N), $ || (($ = !0), E());
  }
  function U(N, A) {
    g = C(function () {
      N(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), j(P));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var D = f;
      f = A;
      try {
        return N();
      } finally {
        f = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var D = f;
      f = N;
      try {
        return A();
      } finally {
        f = D;
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, D) {
      var x = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? x + D : x))
          : (D = x),
        N)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = D + L),
        (N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: D,
          expirationTime: L,
          sortIndex: -1,
        }),
        D > x
          ? ((N.sortIndex = D),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (b ? (h(g), (g = -1)) : (b = !0), U(S, D - x)))
          : ((N.sortIndex = L), t(a, N), y || v || ((y = !0), j(P))),
        N
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (N) {
      var A = f;
      return function () {
        var D = f;
        f = A;
        try {
          return N.apply(this, arguments);
        } finally {
          f = D;
        }
      };
    });
})(ph);
fh.exports = ph;
var Jy = fh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var e1 = w,
  et = Jy;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var hh = new Set(),
  $o = {};
function Un(e, t) {
  $r(e, t), $r(e + "Capture", t);
}
function $r(e, t) {
  for ($o[e] = t, e = 0; e < t.length; e++) hh.add(t[e]);
}
var Bt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ga = Object.prototype.hasOwnProperty,
  t1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ed = {},
  $d = {};
function n1(e) {
  return ga.call($d, e)
    ? !0
    : ga.call(Ed, e)
    ? !1
    : t1.test(e)
    ? ($d[e] = !0)
    : ((Ed[e] = !0), !1);
}
function r1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function o1(e, t, n, r) {
  if (t === null || typeof t > "u" || r1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wu = /[\-:]([a-z])/g;
function Uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wu, Uu);
    Ne[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wu, Uu);
    Ne[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wu, Uu);
  Ne[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ku(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (o1(t, n, o, r) && (n = null),
    r || o === null
      ? n1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kt = e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ci = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
  Gu = Symbol.for("react.strict_mode"),
  ya = Symbol.for("react.profiler"),
  mh = Symbol.for("react.provider"),
  vh = Symbol.for("react.context"),
  Yu = Symbol.for("react.forward_ref"),
  wa = Symbol.for("react.suspense"),
  ba = Symbol.for("react.suspense_list"),
  Qu = Symbol.for("react.memo"),
  Xt = Symbol.for("react.lazy"),
  gh = Symbol.for("react.offscreen"),
  kd = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (kd && e[kd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  Tl;
function so(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || "";
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Ml = !1;
function Nl(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ml = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? so(e) : "";
}
function i1(e) {
  switch (e.tag) {
    case 5:
      return so(e.type);
    case 16:
      return so("Lazy");
    case 13:
      return so("Suspense");
    case 19:
      return so("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function xa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case ya:
      return "Profiler";
    case Gu:
      return "StrictMode";
    case wa:
      return "Suspense";
    case ba:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vh:
        return (e.displayName || "Context") + ".Consumer";
      case mh:
        return (e._context.displayName || "Context") + ".Provider";
      case Yu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qu:
        return (
          (t = e.displayName || null), t !== null ? t : xa(e.type) || "Memo"
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return xa(e(t));
        } catch {}
    }
  return null;
}
function s1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xa(t);
    case 8:
      return t === Gu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function yh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function l1(e) {
  var t = yh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function di(e) {
  e._valueTracker || (e._valueTracker = l1(e));
}
function wh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = yh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function is(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sa(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Td(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function bh(e, t) {
  (t = t.checked), t != null && Ku(e, "checked", t, !1);
}
function Ca(e, t) {
  bh(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Pa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pa(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Md(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Pa(e, t, n) {
  (t !== "number" || is(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lo = Array.isArray;
function gr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (lo(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function xh(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ld(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $a(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var fi,
  Ch = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        fi = fi || document.createElement("div"),
          fi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ko(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  a1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ho).forEach(function (e) {
  a1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ho[t] = ho[e]);
  });
});
function Ph(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ho.hasOwnProperty(e) && ho[e])
    ? ("" + t).trim()
    : t + "px";
}
function Eh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ph(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var u1 = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ka(e, t) {
  if (t) {
    if (u1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Ta(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ma = null;
function Xu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Na = null,
  yr = null,
  wr = null;
function _d(e) {
  if ((e = ei(e))) {
    if (typeof Na != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Zs(t)), Na(e.stateNode, e.type, t));
  }
}
function $h(e) {
  yr ? (wr ? wr.push(e) : (wr = [e])) : (yr = e);
}
function kh() {
  if (yr) {
    var e = yr,
      t = wr;
    if (((wr = yr = null), _d(e), t)) for (e = 0; e < t.length; e++) _d(t[e]);
  }
}
function Th(e, t) {
  return e(t);
}
function Mh() {}
var Ll = !1;
function Nh(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return Th(e, t, n);
  } finally {
    (Ll = !1), (yr !== null || wr !== null) && (Mh(), kh());
  }
}
function To(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var La = !1;
if (Bt)
  try {
    var Yr = {};
    Object.defineProperty(Yr, "passive", {
      get: function () {
        La = !0;
      },
    }),
      window.addEventListener("test", Yr, Yr),
      window.removeEventListener("test", Yr, Yr);
  } catch {
    La = !1;
  }
function c1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var mo = !1,
  ss = null,
  ls = !1,
  _a = null,
  d1 = {
    onError: function (e) {
      (mo = !0), (ss = e);
    },
  };
function f1(e, t, n, r, o, i, s, l, a) {
  (mo = !1), (ss = null), c1.apply(d1, arguments);
}
function p1(e, t, n, r, o, i, s, l, a) {
  if ((f1.apply(this, arguments), mo)) {
    if (mo) {
      var u = ss;
      (mo = !1), (ss = null);
    } else throw Error(F(198));
    ls || ((ls = !0), (_a = u));
  }
}
function Kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rd(e) {
  if (Kn(e) !== e) throw Error(F(188));
}
function h1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Rd(o), e;
        if (i === r) return Rd(o), t;
        i = i.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function _h(e) {
  return (e = h1(e)), e !== null ? Rh(e) : null;
}
function Rh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ah = et.unstable_scheduleCallback,
  Ad = et.unstable_cancelCallback,
  m1 = et.unstable_shouldYield,
  v1 = et.unstable_requestPaint,
  ge = et.unstable_now,
  g1 = et.unstable_getCurrentPriorityLevel,
  Zu = et.unstable_ImmediatePriority,
  Oh = et.unstable_UserBlockingPriority,
  as = et.unstable_NormalPriority,
  y1 = et.unstable_LowPriority,
  Ih = et.unstable_IdlePriority,
  Gs = null,
  kt = null;
function w1(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Gs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : S1,
  b1 = Math.log,
  x1 = Math.LN2;
function S1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((b1(e) / x1) | 0)) | 0;
}
var pi = 64,
  hi = 4194304;
function ao(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function us(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = ao(l)) : ((i &= s), i !== 0 && (r = ao(i)));
  } else (s = n & ~o), s !== 0 ? (r = ao(s)) : i !== 0 && (r = ao(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function C1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function P1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - yt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = C1(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Ra(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fh() {
  var e = pi;
  return (pi <<= 1), !(pi & 4194240) && (pi = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function E1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - yt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function qu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function Vh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dh,
  Ju,
  jh,
  zh,
  Bh,
  Aa = !1,
  mi = [],
  on = null,
  sn = null,
  ln = null,
  Mo = new Map(),
  No = new Map(),
  Jt = [],
  $1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Od(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Mo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      No.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ei(t)), t !== null && Ju(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function k1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (on = Qr(on, e, t, n, r, o)), !0;
    case "dragenter":
      return (sn = Qr(sn, e, t, n, r, o)), !0;
    case "mouseover":
      return (ln = Qr(ln, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Mo.set(i, Qr(Mo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), No.set(i, Qr(No.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Hh(e) {
  var t = $n(e.target);
  if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lh(n)), t !== null)) {
          (e.blockedOn = t),
            Bh(e.priority, function () {
              jh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ma = r), n.target.dispatchEvent(r), (Ma = null);
    } else return (t = ei(n)), t !== null && Ju(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Id(e, t, n) {
  Wi(e) && n.delete(t);
}
function T1() {
  (Aa = !1),
    on !== null && Wi(on) && (on = null),
    sn !== null && Wi(sn) && (sn = null),
    ln !== null && Wi(ln) && (ln = null),
    Mo.forEach(Id),
    No.forEach(Id);
}
function Xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Aa ||
      ((Aa = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, T1)));
}
function Lo(e) {
  function t(o) {
    return Xr(o, e);
  }
  if (0 < mi.length) {
    Xr(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Xr(on, e),
      sn !== null && Xr(sn, e),
      ln !== null && Xr(ln, e),
      Mo.forEach(t),
      No.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    Hh(n), n.blockedOn === null && Jt.shift();
}
var br = Kt.ReactCurrentBatchConfig,
  cs = !0;
function M1(e, t, n, r) {
  var o = ee,
    i = br.transition;
  br.transition = null;
  try {
    (ee = 1), ec(e, t, n, r);
  } finally {
    (ee = o), (br.transition = i);
  }
}
function N1(e, t, n, r) {
  var o = ee,
    i = br.transition;
  br.transition = null;
  try {
    (ee = 4), ec(e, t, n, r);
  } finally {
    (ee = o), (br.transition = i);
  }
}
function ec(e, t, n, r) {
  if (cs) {
    var o = Oa(e, t, n, r);
    if (o === null) Bl(e, t, r, ds, n), Od(e, r);
    else if (k1(o, e, t, n, r)) r.stopPropagation();
    else if ((Od(e, r), t & 4 && -1 < $1.indexOf(e))) {
      for (; o !== null; ) {
        var i = ei(o);
        if (
          (i !== null && Dh(i),
          (i = Oa(e, t, n, r)),
          i === null && Bl(e, t, r, ds, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var ds = null;
function Oa(e, t, n, r) {
  if (((ds = null), (e = Xu(r)), (e = $n(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ds = e), null;
}
function Wh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (g1()) {
        case Zu:
          return 1;
        case Oh:
          return 4;
        case as:
        case y1:
          return 16;
        case Ih:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  tc = null,
  Ui = null;
function Uh() {
  if (Ui) return Ui;
  var e,
    t = tc,
    n = t.length,
    r,
    o = "value" in tn ? tn.value : tn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ui = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ki(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vi() {
  return !0;
}
function Fd() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? vi
        : Fd),
      (this.isPropagationStopped = Fd),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vi));
      },
      persist: function () {},
      isPersistent: vi,
    }),
    t
  );
}
var Fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nc = nt(Fr),
  Jo = he({}, Fr, { view: 0, detail: 0 }),
  L1 = nt(Jo),
  Rl,
  Al,
  Zr,
  Ys = he({}, Jo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((Rl = e.screenX - Zr.screenX), (Al = e.screenY - Zr.screenY))
              : (Al = Rl = 0),
            (Zr = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Al;
    },
  }),
  Vd = nt(Ys),
  _1 = he({}, Ys, { dataTransfer: 0 }),
  R1 = nt(_1),
  A1 = he({}, Jo, { relatedTarget: 0 }),
  Ol = nt(A1),
  O1 = he({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  I1 = nt(O1),
  F1 = he({}, Fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  V1 = nt(F1),
  D1 = he({}, Fr, { data: 0 }),
  Dd = nt(D1),
  j1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  z1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  B1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function H1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = B1[e]) ? !!t[e] : !1;
}
function rc() {
  return H1;
}
var W1 = he({}, Jo, {
    key: function (e) {
      if (e.key) {
        var t = j1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ki(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? z1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function (e) {
      return e.type === "keypress" ? Ki(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ki(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  U1 = nt(W1),
  K1 = he({}, Ys, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jd = nt(K1),
  G1 = he({}, Jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc,
  }),
  Y1 = nt(G1),
  Q1 = he({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  X1 = nt(Q1),
  Z1 = he({}, Ys, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  q1 = nt(Z1),
  J1 = [9, 13, 27, 32],
  oc = Bt && "CompositionEvent" in window,
  vo = null;
Bt && "documentMode" in document && (vo = document.documentMode);
var ew = Bt && "TextEvent" in window && !vo,
  Kh = Bt && (!oc || (vo && 8 < vo && 11 >= vo)),
  zd = " ",
  Bd = !1;
function Gh(e, t) {
  switch (e) {
    case "keyup":
      return J1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function tw(e, t) {
  switch (e) {
    case "compositionend":
      return Yh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Bd = !0), zd);
    case "textInput":
      return (e = t.data), e === zd && Bd ? null : e;
    default:
      return null;
  }
}
function nw(e, t) {
  if (or)
    return e === "compositionend" || (!oc && Gh(e, t))
      ? ((e = Uh()), (Ui = tc = tn = null), (or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var rw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!rw[e.type] : t === "textarea";
}
function Qh(e, t, n, r) {
  $h(r),
    (t = fs(t, "onChange")),
    0 < t.length &&
      ((n = new nc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var go = null,
  _o = null;
function ow(e) {
  sm(e, 0);
}
function Qs(e) {
  var t = lr(e);
  if (wh(t)) return e;
}
function iw(e, t) {
  if (e === "change") return t;
}
var Xh = !1;
if (Bt) {
  var Il;
  if (Bt) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var Wd = document.createElement("div");
      Wd.setAttribute("oninput", "return;"),
        (Fl = typeof Wd.oninput == "function");
    }
    Il = Fl;
  } else Il = !1;
  Xh = Il && (!document.documentMode || 9 < document.documentMode);
}
function Ud() {
  go && (go.detachEvent("onpropertychange", Zh), (_o = go = null));
}
function Zh(e) {
  if (e.propertyName === "value" && Qs(_o)) {
    var t = [];
    Qh(t, _o, e, Xu(e)), Nh(ow, t);
  }
}
function sw(e, t, n) {
  e === "focusin"
    ? (Ud(), (go = t), (_o = n), go.attachEvent("onpropertychange", Zh))
    : e === "focusout" && Ud();
}
function lw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qs(_o);
}
function aw(e, t) {
  if (e === "click") return Qs(t);
}
function uw(e, t) {
  if (e === "input" || e === "change") return Qs(t);
}
function cw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bt = typeof Object.is == "function" ? Object.is : cw;
function Ro(e, t) {
  if (bt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ga.call(t, o) || !bt(e[o], t[o])) return !1;
  }
  return !0;
}
function Kd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gd(e, t) {
  var n = Kd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Kd(n);
  }
}
function qh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jh() {
  for (var e = window, t = is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = is(e.document);
  }
  return t;
}
function ic(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function dw(e) {
  var t = Jh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ic(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Gd(n, i));
        var s = Gd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fw = Bt && "documentMode" in document && 11 >= document.documentMode,
  ir = null,
  Ia = null,
  yo = null,
  Fa = !1;
function Yd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fa ||
    ir == null ||
    ir !== is(r) ||
    ((r = ir),
    "selectionStart" in r && ic(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yo && Ro(yo, r)) ||
      ((yo = r),
      (r = fs(Ia, "onSelect")),
      0 < r.length &&
        ((t = new nc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ir))));
}
function gi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sr = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd"),
  },
  Vl = {},
  em = {};
Bt &&
  ((em = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sr.animationend.animation,
    delete sr.animationiteration.animation,
    delete sr.animationstart.animation),
  "TransitionEvent" in window || delete sr.transitionend.transition);
function Xs(e) {
  if (Vl[e]) return Vl[e];
  if (!sr[e]) return e;
  var t = sr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in em) return (Vl[e] = t[n]);
  return e;
}
var tm = Xs("animationend"),
  nm = Xs("animationiteration"),
  rm = Xs("animationstart"),
  om = Xs("transitionend"),
  im = new Map(),
  Qd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yn(e, t) {
  im.set(e, t), Un(t, [e]);
}
for (var Dl = 0; Dl < Qd.length; Dl++) {
  var jl = Qd[Dl],
    pw = jl.toLowerCase(),
    hw = jl[0].toUpperCase() + jl.slice(1);
  yn(pw, "on" + hw);
}
yn(tm, "onAnimationEnd");
yn(nm, "onAnimationIteration");
yn(rm, "onAnimationStart");
yn("dblclick", "onDoubleClick");
yn("focusin", "onFocus");
yn("focusout", "onBlur");
yn(om, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
Un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var uo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  mw = new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));
function Xd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), p1(r, t, void 0, e), (e.currentTarget = null);
}
function sm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Xd(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Xd(o, l, u), (i = a);
        }
    }
  }
  if (ls) throw ((e = _a), (ls = !1), (_a = null), e);
}
function le(e, t) {
  var n = t[Ba];
  n === void 0 && (n = t[Ba] = new Set());
  var r = e + "__bubble";
  n.has(r) || (lm(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), lm(n, e, r, t);
}
var yi = "_reactListening" + Math.random().toString(36).slice(2);
function Ao(e) {
  if (!e[yi]) {
    (e[yi] = !0),
      hh.forEach(function (n) {
        n !== "selectionchange" && (mw.has(n) || zl(n, !1, e), zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yi] || ((t[yi] = !0), zl("selectionchange", !1, t));
  }
}
function lm(e, t, n, r) {
  switch (Wh(t)) {
    case 1:
      var o = M1;
      break;
    case 4:
      o = N1;
      break;
    default:
      o = ec;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !La ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = $n(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Nh(function () {
    var u = i,
      c = Xu(n),
      d = [];
    e: {
      var f = im.get(e);
      if (f !== void 0) {
        var v = nc,
          y = e;
        switch (e) {
          case "keypress":
            if (Ki(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = U1;
            break;
          case "focusin":
            (y = "focus"), (v = Ol);
            break;
          case "focusout":
            (y = "blur"), (v = Ol);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ol;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Vd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = R1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Y1;
            break;
          case tm:
          case nm:
          case rm:
            v = I1;
            break;
          case om:
            v = X1;
            break;
          case "scroll":
            v = L1;
            break;
          case "wheel":
            v = q1;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = V1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = jd;
        }
        var b = (t & 4) !== 0,
          C = !b && e === "scroll",
          h = b ? (f !== null ? f + "Capture" : null) : f;
        b = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              h !== null && ((S = To(p, h)), S != null && b.push(Oo(p, S, m)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < b.length &&
          ((f = new v(f, y, null, n, c)), d.push({ event: f, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ma &&
            (y = n.relatedTarget || n.fromElement) &&
            ($n(y) || y[Ht]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? $n(y) : null),
              y !== null &&
                ((C = Kn(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((b = Vd),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = jd),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (C = v == null ? f : lr(v)),
            (m = y == null ? f : lr(y)),
            (f = new b(S, p + "leave", v, n, c)),
            (f.target = C),
            (f.relatedTarget = m),
            (S = null),
            $n(c) === u &&
              ((b = new b(h, p + "enter", y, n, c)),
              (b.target = m),
              (b.relatedTarget = C),
              (S = b)),
            (C = S),
            v && y)
          )
            t: {
              for (b = v, h = y, p = 0, m = b; m; m = Qn(m)) p++;
              for (m = 0, S = h; S; S = Qn(S)) m++;
              for (; 0 < p - m; ) (b = Qn(b)), p--;
              for (; 0 < m - p; ) (h = Qn(h)), m--;
              for (; p--; ) {
                if (b === h || (h !== null && b === h.alternate)) break t;
                (b = Qn(b)), (h = Qn(h));
              }
              b = null;
            }
          else b = null;
          v !== null && Zd(d, f, v, b, !1),
            y !== null && C !== null && Zd(d, C, y, b, !0);
        }
      }
      e: {
        if (
          ((f = u ? lr(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var P = iw;
        else if (Hd(f))
          if (Xh) P = uw;
          else {
            P = lw;
            var $ = sw;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = aw);
        if (P && (P = P(e, u))) {
          Qh(d, P, n, c);
          break e;
        }
        $ && $(e, f, u),
          e === "focusout" &&
            ($ = f._wrapperState) &&
            $.controlled &&
            f.type === "number" &&
            Pa(f, "number", f.value);
      }
      switch ((($ = u ? lr(u) : window), e)) {
        case "focusin":
          (Hd($) || $.contentEditable === "true") &&
            ((ir = $), (Ia = u), (yo = null));
          break;
        case "focusout":
          yo = Ia = ir = null;
          break;
        case "mousedown":
          Fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Fa = !1), Yd(d, n, c);
          break;
        case "selectionchange":
          if (fw) break;
        case "keydown":
        case "keyup":
          Yd(d, n, c);
      }
      var O;
      if (oc)
        e: {
          switch (e) {
            case "compositionstart":
              var g = "onCompositionStart";
              break e;
            case "compositionend":
              g = "onCompositionEnd";
              break e;
            case "compositionupdate":
              g = "onCompositionUpdate";
              break e;
          }
          g = void 0;
        }
      else
        or
          ? Gh(e, n) && (g = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g &&
        (Kh &&
          n.locale !== "ko" &&
          (or || g !== "onCompositionStart"
            ? g === "onCompositionEnd" && or && (O = Uh())
            : ((tn = c),
              (tc = "value" in tn ? tn.value : tn.textContent),
              (or = !0))),
        ($ = fs(u, g)),
        0 < $.length &&
          ((g = new Dd(g, e, null, n, c)),
          d.push({ event: g, listeners: $ }),
          O ? (g.data = O) : ((O = Yh(n)), O !== null && (g.data = O)))),
        (O = ew ? tw(e, n) : nw(e, n)) &&
          ((u = fs(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Dd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = O)));
    }
    sm(d, t);
  });
}
function Oo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = To(e, n)),
      i != null && r.unshift(Oo(e, i, o)),
      (i = To(e, t)),
      i != null && r.push(Oo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = To(n, i)), a != null && s.unshift(Oo(n, a, l)))
        : o || ((a = To(n, i)), a != null && s.push(Oo(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var vw = /\r\n?/g,
  gw = /\u0000|\uFFFD/g;
function qd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      vw,
      `
`
    )
    .replace(gw, "");
}
function wi(e, t, n) {
  if (((t = qd(t)), qd(e) !== t && n)) throw Error(F(425));
}
function ps() {}
var Va = null,
  Da = null;
function ja(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var za = typeof setTimeout == "function" ? setTimeout : void 0,
  yw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jd = typeof Promise == "function" ? Promise : void 0,
  ww =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jd < "u"
      ? function (e) {
          return Jd.resolve(null).then(e).catch(bw);
        }
      : za;
function bw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Lo(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ef(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Vr = Math.random().toString(36).slice(2),
  Pt = "__reactFiber$" + Vr,
  Io = "__reactProps$" + Vr,
  Ht = "__reactContainer$" + Vr,
  Ba = "__reactEvents$" + Vr,
  xw = "__reactListeners$" + Vr,
  Sw = "__reactHandles$" + Vr;
function $n(e) {
  var t = e[Pt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Pt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ef(e); e !== null; ) {
          if ((n = e[Pt])) return n;
          e = ef(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ei(e) {
  return (
    (e = e[Pt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Zs(e) {
  return e[Io] || null;
}
var Ha = [],
  ar = -1;
function wn(e) {
  return { current: e };
}
function ue(e) {
  0 > ar || ((e.current = Ha[ar]), (Ha[ar] = null), ar--);
}
function oe(e, t) {
  ar++, (Ha[ar] = e.current), (e.current = t);
}
var gn = {},
  Ie = wn(gn),
  Ge = wn(!1),
  Vn = gn;
function kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function hs() {
  ue(Ge), ue(Ie);
}
function tf(e, t, n) {
  if (Ie.current !== gn) throw Error(F(168));
  oe(Ie, t), oe(Ge, n);
}
function am(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(F(108, s1(e) || "Unknown", o));
  return he({}, n, r);
}
function ms(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gn),
    (Vn = Ie.current),
    oe(Ie, e),
    oe(Ge, Ge.current),
    !0
  );
}
function nf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = am(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Ge),
      ue(Ie),
      oe(Ie, e))
    : ue(Ge),
    oe(Ge, n);
}
var Ft = null,
  qs = !1,
  Wl = !1;
function um(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Cw(e) {
  (qs = !0), um(e);
}
function bn() {
  if (!Wl && Ft !== null) {
    Wl = !0;
    var e = 0,
      t = ee;
    try {
      var n = Ft;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ft = null), (qs = !1);
    } catch (o) {
      throw (Ft !== null && (Ft = Ft.slice(e + 1)), Ah(Zu, bn), o);
    } finally {
      (ee = t), (Wl = !1);
    }
  }
  return null;
}
var ur = [],
  cr = 0,
  vs = null,
  gs = 0,
  it = [],
  st = 0,
  Dn = null,
  Vt = 1,
  Dt = "";
function Pn(e, t) {
  (ur[cr++] = gs), (ur[cr++] = vs), (vs = e), (gs = t);
}
function cm(e, t, n) {
  (it[st++] = Vt), (it[st++] = Dt), (it[st++] = Dn), (Dn = e);
  var r = Vt;
  e = Dt;
  var o = 32 - yt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - yt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Vt = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (Dt = i + e);
  } else (Vt = (1 << i) | (n << o) | r), (Dt = e);
}
function sc(e) {
  e.return !== null && (Pn(e, 1), cm(e, 1, 0));
}
function lc(e) {
  for (; e === vs; )
    (vs = ur[--cr]), (ur[cr] = null), (gs = ur[--cr]), (ur[cr] = null);
  for (; e === Dn; )
    (Dn = it[--st]),
      (it[st] = null),
      (Dt = it[--st]),
      (it[st] = null),
      (Vt = it[--st]),
      (it[st] = null);
}
var Je = null,
  qe = null,
  ce = !1,
  vt = null;
function dm(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (qe = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: Vt, overflow: Dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ua(e) {
  if (ce) {
    var t = qe;
    if (t) {
      var n = t;
      if (!rf(e, t)) {
        if (Wa(e)) throw Error(F(418));
        t = an(n.nextSibling);
        var r = Je;
        t && rf(e, t)
          ? dm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (Je = e));
      }
    } else {
      if (Wa(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (Je = e);
    }
  }
}
function of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function bi(e) {
  if (e !== Je) return !1;
  if (!ce) return of(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ja(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (Wa(e)) throw (fm(), Error(F(418)));
    for (; t; ) dm(e, t), (t = an(t.nextSibling));
  }
  if ((of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = Je ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function fm() {
  for (var e = qe; e; ) e = an(e.nextSibling);
}
function Tr() {
  (qe = Je = null), (ce = !1);
}
function ac(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var Pw = Kt.ReactCurrentBatchConfig;
function qr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function xi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sf(e) {
  var t = e._init;
  return t(e._payload);
}
function pm(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = fn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, S) {
    return p === null || p.tag !== 6
      ? ((p = Zl(m, h.mode, S)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function a(h, p, m, S) {
    var P = m.type;
    return P === rr
      ? c(h, p, m.props.children, S, m.key)
      : p !== null &&
        (p.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Xt &&
            sf(P) === p.type))
      ? ((S = o(p, m.props)), (S.ref = qr(h, p, m)), (S.return = h), S)
      : ((S = Ji(m.type, m.key, m.props, null, h.mode, S)),
        (S.ref = qr(h, p, m)),
        (S.return = h),
        S);
  }
  function u(h, p, m, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = ql(m, h.mode, S)), (p.return = h), p)
      : ((p = o(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, S, P) {
    return p === null || p.tag !== 7
      ? ((p = On(m, h.mode, S, P)), (p.return = h), p)
      : ((p = o(p, m)), (p.return = h), p);
  }
  function d(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Zl("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ci:
          return (
            (m = Ji(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = qr(h, null, p)),
            (m.return = h),
            m
          );
        case nr:
          return (p = ql(p, h.mode, m)), (p.return = h), p;
        case Xt:
          var S = p._init;
          return d(h, S(p._payload), m);
      }
      if (lo(p) || Gr(p))
        return (p = On(p, h.mode, m, null)), (p.return = h), p;
      xi(h, p);
    }
    return null;
  }
  function f(h, p, m, S) {
    var P = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : l(h, p, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ci:
          return m.key === P ? a(h, p, m, S) : null;
        case nr:
          return m.key === P ? u(h, p, m, S) : null;
        case Xt:
          return (P = m._init), f(h, p, P(m._payload), S);
      }
      if (lo(m) || Gr(m)) return P !== null ? null : c(h, p, m, S, null);
      xi(h, m);
    }
    return null;
  }
  function v(h, p, m, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(m) || null), l(p, h, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ci:
          return (h = h.get(S.key === null ? m : S.key) || null), a(p, h, S, P);
        case nr:
          return (h = h.get(S.key === null ? m : S.key) || null), u(p, h, S, P);
        case Xt:
          var $ = S._init;
          return v(h, p, m, $(S._payload), P);
      }
      if (lo(S) || Gr(S)) return (h = h.get(m) || null), c(p, h, S, P, null);
      xi(p, S);
    }
    return null;
  }
  function y(h, p, m, S) {
    for (
      var P = null, $ = null, O = p, g = (p = 0), M = null;
      O !== null && g < m.length;
      g++
    ) {
      O.index > g ? ((M = O), (O = null)) : (M = O.sibling);
      var I = f(h, O, m[g], S);
      if (I === null) {
        O === null && (O = M);
        break;
      }
      e && O && I.alternate === null && t(h, O),
        (p = i(I, p, g)),
        $ === null ? (P = I) : ($.sibling = I),
        ($ = I),
        (O = M);
    }
    if (g === m.length) return n(h, O), ce && Pn(h, g), P;
    if (O === null) {
      for (; g < m.length; g++)
        (O = d(h, m[g], S)),
          O !== null &&
            ((p = i(O, p, g)), $ === null ? (P = O) : ($.sibling = O), ($ = O));
      return ce && Pn(h, g), P;
    }
    for (O = r(h, O); g < m.length; g++)
      (M = v(O, h, g, m[g], S)),
        M !== null &&
          (e && M.alternate !== null && O.delete(M.key === null ? g : M.key),
          (p = i(M, p, g)),
          $ === null ? (P = M) : ($.sibling = M),
          ($ = M));
    return (
      e &&
        O.forEach(function (R) {
          return t(h, R);
        }),
      ce && Pn(h, g),
      P
    );
  }
  function b(h, p, m, S) {
    var P = Gr(m);
    if (typeof P != "function") throw Error(F(150));
    if (((m = P.call(m)), m == null)) throw Error(F(151));
    for (
      var $ = (P = null), O = p, g = (p = 0), M = null, I = m.next();
      O !== null && !I.done;
      g++, I = m.next()
    ) {
      O.index > g ? ((M = O), (O = null)) : (M = O.sibling);
      var R = f(h, O, I.value, S);
      if (R === null) {
        O === null && (O = M);
        break;
      }
      e && O && R.alternate === null && t(h, O),
        (p = i(R, p, g)),
        $ === null ? (P = R) : ($.sibling = R),
        ($ = R),
        (O = M);
    }
    if (I.done) return n(h, O), ce && Pn(h, g), P;
    if (O === null) {
      for (; !I.done; g++, I = m.next())
        (I = d(h, I.value, S)),
          I !== null &&
            ((p = i(I, p, g)), $ === null ? (P = I) : ($.sibling = I), ($ = I));
      return ce && Pn(h, g), P;
    }
    for (O = r(h, O); !I.done; g++, I = m.next())
      (I = v(O, h, g, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && O.delete(I.key === null ? g : I.key),
          (p = i(I, p, g)),
          $ === null ? (P = I) : ($.sibling = I),
          ($ = I));
    return (
      e &&
        O.forEach(function (_) {
          return t(h, _);
        }),
      ce && Pn(h, g),
      P
    );
  }
  function C(h, p, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === rr &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ci:
          e: {
            for (var P = m.key, $ = p; $ !== null; ) {
              if ($.key === P) {
                if (((P = m.type), P === rr)) {
                  if ($.tag === 7) {
                    n(h, $.sibling),
                      (p = o($, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  $.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Xt &&
                    sf(P) === $.type)
                ) {
                  n(h, $.sibling),
                    (p = o($, m.props)),
                    (p.ref = qr(h, $, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, $);
                break;
              } else t(h, $);
              $ = $.sibling;
            }
            m.type === rr
              ? ((p = On(m.props.children, h.mode, S, m.key)),
                (p.return = h),
                (h = p))
              : ((S = Ji(m.type, m.key, m.props, null, h.mode, S)),
                (S.ref = qr(h, p, m)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case nr:
          e: {
            for ($ = m.key; p !== null; ) {
              if (p.key === $)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = ql(m, h.mode, S)), (p.return = h), (h = p);
          }
          return s(h);
        case Xt:
          return ($ = m._init), C(h, p, $(m._payload), S);
      }
      if (lo(m)) return y(h, p, m, S);
      if (Gr(m)) return b(h, p, m, S);
      xi(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = Zl(m, h.mode, S)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return C;
}
var Mr = pm(!0),
  hm = pm(!1),
  ys = wn(null),
  ws = null,
  dr = null,
  uc = null;
function cc() {
  uc = dr = ws = null;
}
function dc(e) {
  var t = ys.current;
  ue(ys), (e._currentValue = t);
}
function Ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xr(e, t) {
  (ws = e),
    (uc = dr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (uc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
      if (ws === null) throw Error(F(308));
      (dr = e), (ws.dependencies = { lanes: 0, firstContext: e });
    } else dr = dr.next = e;
  return t;
}
var kn = null;
function fc(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function mm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), fc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Wt(e, r)
  );
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function pc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function zt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Wt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), fc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Wt(e, n)
  );
}
function Gi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qu(e, n);
  }
}
function lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function bs(e, t, n, r) {
  var o = e.updateQueue;
  Zt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = a = null), (l = i);
    do {
      var f = l.lane,
        v = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            b = l;
          switch (((f = t), (v = n), b.tag)) {
            case 1:
              if (((y = b.payload), typeof y == "function")) {
                d = y.call(v, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = b.payload),
                (f = typeof y == "function" ? y.call(v, d, f) : y),
                f == null)
              )
                break e;
              d = he({}, d, f);
              break e;
            case 2:
              Zt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [l]) : f.push(l));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (zn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function af(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(F(191, o));
        o.call(r);
      }
    }
}
var ti = {},
  Tt = wn(ti),
  Fo = wn(ti),
  Vo = wn(ti);
function Tn(e) {
  if (e === ti) throw Error(F(174));
  return e;
}
function hc(e, t) {
  switch ((oe(Vo, t), oe(Fo, e), oe(Tt, ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $a(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $a(t, e));
  }
  ue(Tt), oe(Tt, t);
}
function Nr() {
  ue(Tt), ue(Fo), ue(Vo);
}
function gm(e) {
  Tn(Vo.current);
  var t = Tn(Tt.current),
    n = $a(t, e.type);
  t !== n && (oe(Fo, e), oe(Tt, n));
}
function mc(e) {
  Fo.current === e && (ue(Tt), ue(Fo));
}
var de = wn(0);
function xs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ul = [];
function vc() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Yi = Kt.ReactCurrentDispatcher,
  Kl = Kt.ReactCurrentBatchConfig,
  jn = 0,
  pe = null,
  xe = null,
  Ce = null,
  Ss = !1,
  wo = !1,
  Do = 0,
  Ew = 0;
function Le() {
  throw Error(F(321));
}
function gc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!bt(e[n], t[n])) return !1;
  return !0;
}
function yc(e, t, n, r, o, i) {
  if (
    ((jn = i),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yi.current = e === null || e.memoizedState === null ? Mw : Nw),
    (e = n(r, o)),
    wo)
  ) {
    i = 0;
    do {
      if (((wo = !1), (Do = 0), 25 <= i)) throw Error(F(301));
      (i += 1),
        (Ce = xe = null),
        (t.updateQueue = null),
        (Yi.current = Lw),
        (e = n(r, o));
    } while (wo);
  }
  if (
    ((Yi.current = Cs),
    (t = xe !== null && xe.next !== null),
    (jn = 0),
    (Ce = xe = pe = null),
    (Ss = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function wc() {
  var e = Do !== 0;
  return (Do = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (pe.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function dt() {
  if (xe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Ce === null ? pe.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (xe = e);
  else {
    if (e === null) throw Error(F(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Ce === null ? (pe.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function jo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gl(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = xe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var c = u.lane;
      if ((jn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (pe.lanes |= c),
          (zn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      bt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (pe.lanes |= i), (zn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = dt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    bt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ym() {}
function wm(e, t) {
  var n = pe,
    r = dt(),
    o = t(),
    i = !bt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    bc(Sm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zo(9, xm.bind(null, n, r, o, t), void 0, null),
      Pe === null)
    )
      throw Error(F(349));
    jn & 30 || bm(n, t, o);
  }
  return o;
}
function bm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Cm(t) && Pm(e);
}
function Sm(e, t, n) {
  return n(function () {
    Cm(t) && Pm(e);
  });
}
function Cm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !bt(e, n);
  } catch {
    return !0;
  }
}
function Pm(e) {
  var t = Wt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function uf(e) {
  var t = Ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Tw.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function zo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Em() {
  return dt().memoizedState;
}
function Qi(e, t, n, r) {
  var o = Ct();
  (pe.flags |= e),
    (o.memoizedState = zo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Js(e, t, n, r) {
  var o = dt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var s = xe.memoizedState;
    if (((i = s.destroy), r !== null && gc(r, s.deps))) {
      o.memoizedState = zo(t, n, i, r);
      return;
    }
  }
  (pe.flags |= e), (o.memoizedState = zo(1 | t, n, i, r));
}
function cf(e, t) {
  return Qi(8390656, 8, e, t);
}
function bc(e, t) {
  return Js(2048, 8, e, t);
}
function $m(e, t) {
  return Js(4, 2, e, t);
}
function km(e, t) {
  return Js(4, 4, e, t);
}
function Tm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Mm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Js(4, 4, Tm.bind(null, t, e), n)
  );
}
function xc() {}
function Nm(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Lm(e, t) {
  var n = dt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _m(e, t, n) {
  return jn & 21
    ? (bt(n, t) || ((n = Fh()), (pe.lanes |= n), (zn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function $w(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Kl.transition;
  Kl.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Kl.transition = r);
  }
}
function Rm() {
  return dt().memoizedState;
}
function kw(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Am(e))
  )
    Om(t, n);
  else if (((n = mm(e, t, n, r)), n !== null)) {
    var o = De();
    wt(n, e, r, o), Im(n, t, r);
  }
}
function Tw(e, t, n) {
  var r = dn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Am(e)) Om(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), bt(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), fc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = mm(e, t, o, r)),
      n !== null && ((o = De()), wt(n, e, r, o), Im(n, t, r));
  }
}
function Am(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Om(e, t) {
  wo = Ss = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Im(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qu(e, n);
  }
}
var Cs = {
    readContext: ct,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  Mw = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: cf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qi(4194308, 4, Tm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = kw.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uf,
    useDebugValue: xc,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = uf(!1),
        t = e[0];
      return (e = $w.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = Ct();
      if (ce) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(F(349));
        jn & 30 || bm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cf(Sm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        zo(9, xm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Pe.identifierPrefix;
      if (ce) {
        var n = Dt,
          r = Vt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Do++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ew++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nw = {
    readContext: ct,
    useCallback: Nm,
    useContext: ct,
    useEffect: bc,
    useImperativeHandle: Mm,
    useInsertionEffect: $m,
    useLayoutEffect: km,
    useMemo: Lm,
    useReducer: Gl,
    useRef: Em,
    useState: function () {
      return Gl(jo);
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = dt();
      return _m(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Gl(jo)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: ym,
    useSyncExternalStore: wm,
    useId: Rm,
    unstable_isNewReconciler: !1,
  },
  Lw = {
    readContext: ct,
    useCallback: Nm,
    useContext: ct,
    useEffect: bc,
    useImperativeHandle: Mm,
    useInsertionEffect: $m,
    useLayoutEffect: km,
    useMemo: Lm,
    useReducer: Yl,
    useRef: Em,
    useState: function () {
      return Yl(jo);
    },
    useDebugValue: xc,
    useDeferredValue: function (e) {
      var t = dt();
      return xe === null ? (t.memoizedState = e) : _m(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(jo)[0],
        t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: ym,
    useSyncExternalStore: wm,
    useId: Rm,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ga(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var el = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      o = dn(e),
      i = zt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (wt(t, e, o, r), Gi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      o = dn(e),
      i = zt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (wt(t, e, o, r), Gi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = dn(e),
      o = zt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = un(e, o, r)),
      t !== null && (wt(t, e, r, n), Gi(t, e, r));
  },
};
function df(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ro(n, r) || !Ro(o, i)
      : !0
  );
}
function Fm(e, t, n) {
  var r = !1,
    o = gn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ct(i))
      : ((o = Ye(t) ? Vn : Ie.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? kr(e, o) : gn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = el),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ff(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && el.enqueueReplaceState(t, t.state, null);
}
function Ya(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), pc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ct(i))
    : ((i = Ye(t) ? Vn : Ie.current), (o.context = kr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ga(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && el.enqueueReplaceState(o, o.state, null),
      bs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += i1(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var _w = typeof WeakMap == "function" ? WeakMap : Map;
function Vm(e, t, n) {
  (n = zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Es || ((Es = !0), (iu = r)), Qa(e, t);
    }),
    n
  );
}
function Dm(e, t, n) {
  (n = zt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Qa(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Qa(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function pf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new _w();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Kw.bind(null, e, t, n)), t.then(e, e));
}
function hf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = zt(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rw = Kt.ReactCurrentOwner,
  Ue = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? hm(t, null, n, r) : Mr(t, e.child, n, r);
}
function vf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    xr(t, o),
    (r = yc(e, t, n, r, i, o)),
    (n = wc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (ce && n && sc(t), (t.flags |= 1), Fe(e, t, r, o), t.child)
  );
}
function gf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Mc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), jm(e, t, i, r, o))
      : ((e = Ji(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ro), n(s, r) && e.ref === t.ref)
    )
      return Ut(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = fn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ro(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Ut(e, t, o);
  }
  return Xa(e, t, n, r, o);
}
function zm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(pr, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(pr, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        oe(pr, Ze),
        (Ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(pr, Ze),
      (Ze |= r);
  return Fe(e, t, o, n), t.child;
}
function Bm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xa(e, t, n, r, o) {
  var i = Ye(n) ? Vn : Ie.current;
  return (
    (i = kr(t, i)),
    xr(t, o),
    (n = yc(e, t, n, r, i, o)),
    (r = wc()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (ce && r && sc(t), (t.flags |= 1), Fe(e, t, n, o), t.child)
  );
}
function yf(e, t, n, r, o) {
  if (Ye(n)) {
    var i = !0;
    ms(t);
  } else i = !1;
  if ((xr(t, o), t.stateNode === null))
    Xi(e, t), Fm(t, n, r), Ya(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = Ye(n) ? Vn : Ie.current), (u = kr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ff(t, s, r, u)),
      (Zt = !1);
    var f = t.memoizedState;
    (s.state = f),
      bs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || f !== a || Ge.current || Zt
        ? (typeof c == "function" && (Ga(t, n, c, r), (a = t.memoizedState)),
          (l = Zt || df(t, n, l, r, f, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      vm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ht(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ct(a))
        : ((a = Ye(n) ? Vn : Ie.current), (a = kr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && ff(t, s, r, a)),
      (Zt = !1),
      (f = t.memoizedState),
      (s.state = f),
      bs(t, r, s, o);
    var y = t.memoizedState;
    l !== d || f !== y || Ge.current || Zt
      ? (typeof v == "function" && (Ga(t, n, v, r), (y = t.memoizedState)),
        (u = Zt || df(t, n, u, r, f, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Za(e, t, n, r, i, o);
}
function Za(e, t, n, r, o, i) {
  Bm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && nf(t, n, !1), Ut(e, t, i);
  (r = t.stateNode), (Rw.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Mr(t, e.child, null, i)), (t.child = Mr(t, null, l, i)))
      : Fe(e, t, l, i),
    (t.memoizedState = r.state),
    o && nf(t, n, !0),
    t.child
  );
}
function Hm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? tf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && tf(e, t.context, !1),
    hc(e, t.containerInfo);
}
function wf(e, t, n, r, o) {
  return Tr(), ac(o), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var qa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wm(e, t, n) {
  var r = t.pendingProps,
    o = de.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(de, o & 1),
    e === null)
  )
    return (
      Ua(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = rl(s, r, 0, null)),
              (e = On(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ja(n)),
              (t.memoizedState = qa),
              e)
            : Sc(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Aw(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = fn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = fn(l, i)) : ((i = On(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ja(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sc(e, t) {
  return (
    (t = rl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Si(e, t, n, r) {
  return (
    r !== null && ac(r),
    Mr(t, e.child, null, n),
    (e = Sc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Aw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(F(422)))), Si(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = rl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = On(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Mr(t, e.child, null, s),
        (t.child.memoizedState = Ja(s)),
        (t.memoizedState = qa),
        i);
  if (!(t.mode & 1)) return Si(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(F(419))), (r = Ql(i, r, void 0)), Si(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ue || l)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Wt(e, o), wt(r, e, o, -1));
    }
    return Tc(), (r = Ql(Error(F(421)))), Si(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (qe = an(o.nextSibling)),
      (Je = t),
      (ce = !0),
      (vt = null),
      e !== null &&
        ((it[st++] = Vt),
        (it[st++] = Dt),
        (it[st++] = Dn),
        (Vt = e.id),
        (Dt = e.overflow),
        (Dn = t)),
      (t = Sc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ka(e.return, t, n);
}
function Xl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Um(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Fe(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bf(e, n, t);
        else if (e.tag === 19) bf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && xs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Xl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && xs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Xl(t, !0, n, null, i);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ow(e, t, n) {
  switch (t.tag) {
    case 3:
      Hm(t), Tr();
      break;
    case 5:
      gm(t);
      break;
    case 1:
      Ye(t.type) && ms(t);
      break;
    case 4:
      hc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(ys, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wm(e, t, n)
          : (oe(de, de.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      oe(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Um(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zm(e, t, n);
  }
  return Ut(e, t, n);
}
var Km, eu, Gm, Ym;
Km = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
eu = function () {};
Gm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Tn(Tt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Sa(e, o)), (r = Sa(e, r)), (i = []);
        break;
      case "select":
        (o = he({}, o, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ea(e, o)), (r = Ea(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ps);
    }
    ka(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            ($o.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              ($o.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && le("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ym = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function _e(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Iw(e, t, n) {
  var r = t.pendingProps;
  switch ((lc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _e(t), null;
    case 1:
      return Ye(t.type) && hs(), _e(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Nr(),
        ue(Ge),
        ue(Ie),
        vc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (au(vt), (vt = null)))),
        eu(e, t),
        _e(t),
        null
      );
    case 5:
      mc(t);
      var o = Tn(Vo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return _e(t), null;
        }
        if (((e = Tn(Tt.current)), bi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Pt] = t), (r[Io] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              le("cancel", r), le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < uo.length; o++) le(uo[o], r);
              break;
            case "source":
              le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              le("error", r), le("load", r);
              break;
            case "details":
              le("toggle", r);
              break;
            case "input":
              Td(r, i), le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                le("invalid", r);
              break;
            case "textarea":
              Nd(r, i), le("invalid", r);
          }
          ka(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      wi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : $o.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  le("scroll", r);
            }
          switch (n) {
            case "input":
              di(r), Md(r, i, !0);
              break;
            case "textarea":
              di(r), Ld(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ps);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Pt] = t),
            (e[Io] = r),
            Km(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Ta(n, r)), n)) {
              case "dialog":
                le("cancel", e), le("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < uo.length; o++) le(uo[o], e);
                o = r;
                break;
              case "source":
                le("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (o = r);
                break;
              case "details":
                le("toggle", e), (o = r);
                break;
              case "input":
                Td(e, r), (o = Sa(e, r)), le("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = he({}, r, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                Nd(e, r), (o = Ea(e, r)), le("invalid", e);
                break;
              default:
                o = r;
            }
            ka(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Eh(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ch(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ko(e, a)
                    : typeof a == "number" && ko(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    ($o.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && le("scroll", e)
                      : a != null && Ku(e, i, a, s));
              }
            switch (n) {
              case "input":
                di(e), Md(e, r, !1);
                break;
              case "textarea":
                di(e), Ld(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? gr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      gr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ps);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return _e(t), null;
    case 6:
      if (e && t.stateNode != null) Ym(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = Tn(Vo.current)), Tn(Tt.current), bi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Pt] = t),
            (i = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                wi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Pt] = t),
            (t.stateNode = r);
      }
      return _e(t), null;
    case 13:
      if (
        (ue(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && qe !== null && t.mode & 1 && !(t.flags & 128))
          fm(), Tr(), (t.flags |= 98560), (i = !1);
        else if (((i = bi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(F(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(F(317));
            i[Pt] = t;
          } else
            Tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          _e(t), (i = !1);
        } else vt !== null && (au(vt), (vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Se === 0 && (Se = 3) : Tc())),
          t.updateQueue !== null && (t.flags |= 4),
          _e(t),
          null);
    case 4:
      return (
        Nr(), eu(e, t), e === null && Ao(t.stateNode.containerInfo), _e(t), null
      );
    case 10:
      return dc(t.type._context), _e(t), null;
    case 17:
      return Ye(t.type) && hs(), _e(t), null;
    case 19:
      if ((ue(de), (i = t.memoizedState), i === null)) return _e(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Jr(i, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = xs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Jr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ge() > _r &&
            ((t.flags |= 128), (r = !0), Jr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ce)
            )
              return _e(t), null;
          } else
            2 * ge() - i.renderingStartTime > _r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ge()),
          (t.sibling = null),
          (n = de.current),
          oe(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (_e(t), null);
    case 22:
    case 23:
      return (
        kc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : _e(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function Fw(e, t) {
  switch ((lc(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nr(),
        ue(Ge),
        ue(Ie),
        vc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mc(t), null;
    case 13:
      if (
        (ue(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        Tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(de), null;
    case 4:
      return Nr(), null;
    case 10:
      return dc(t.type._context), null;
    case 22:
    case 23:
      return kc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1,
  Ae = !1,
  Vw = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function tu(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var xf = !1;
function Dw(e, t) {
  if (((Va = cs), (e = Jh()), ic(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (l = s),
                f === i && ++c === r && (a = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Da = { focusedElem: e, selectionRange: n }, cs = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var b = y.memoizedProps,
                    C = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : ht(t.type, b),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (S) {
          me(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (y = xf), (xf = !1), y;
}
function bo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && tu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Qm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Pt], delete t[Io], delete t[Ba], delete t[xw], delete t[Sw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ps));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ru(e, t, n), e = e.sibling; e !== null; ) ru(e, t, n), (e = e.sibling);
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
var ke = null,
  mt = !1;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) Zm(e, t, n), (n = n.sibling);
}
function Zm(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Gs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || fr(n, t);
    case 6:
      var r = ke,
        o = mt;
      (ke = null),
        Gt(e, t, n),
        (ke = r),
        (mt = o),
        ke !== null &&
          (mt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (mt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hl(e.parentNode, n)
              : e.nodeType === 1 && Hl(e, n),
            Lo(e))
          : Hl(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (o = mt),
        (ke = n.stateNode.containerInfo),
        (mt = !0),
        Gt(e, t, n),
        (ke = r),
        (mt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && tu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          me(n, t, l);
        }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), Gt(e, t, n), (Ae = r))
        : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function Cf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vw()),
      t.forEach(function (r) {
        var o = Yw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ke = l.stateNode), (mt = !1);
              break e;
            case 3:
              (ke = l.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (ke = l.stateNode.containerInfo), (mt = !0);
              break e;
          }
          l = l.return;
        }
        if (ke === null) throw Error(F(160));
        Zm(i, s, o), (ke = null), (mt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) qm(t, e), (t = t.sibling);
}
function qm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), St(e), r & 4)) {
        try {
          bo(3, e, e.return), tl(3, e);
        } catch (b) {
          me(e, e.return, b);
        }
        try {
          bo(5, e, e.return);
        } catch (b) {
          me(e, e.return, b);
        }
      }
      break;
    case 1:
      ft(t, e), St(e), r & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        St(e),
        r & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ko(o, "");
        } catch (b) {
          me(e, e.return, b);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && bh(o, i),
              Ta(l, s);
            var u = Ta(l, i);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? Eh(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Ch(o, d)
                : c === "children"
                ? ko(o, d)
                : Ku(o, c, d, u);
            }
            switch (l) {
              case "input":
                Ca(o, i);
                break;
              case "textarea":
                xh(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? gr(o, !!i.multiple, v, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? gr(o, !!i.multiple, i.defaultValue, !0)
                      : gr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Io] = i;
          } catch (b) {
            me(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((ft(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (b) {
          me(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lo(t.containerInfo);
        } catch (b) {
          me(e, e.return, b);
        }
      break;
    case 4:
      ft(t, e), St(e);
      break;
    case 13:
      ft(t, e),
        St(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ec = ge())),
        r & 4 && Cf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (u = Ae) || c), ft(t, e), (Ae = u)) : ft(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (z = e, c = e.child; c !== null; ) {
            for (d = z = c; z !== null; ) {
              switch (((f = z), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bo(4, f, f.return);
                  break;
                case 1:
                  fr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (b) {
                      me(r, n, b);
                    }
                  }
                  break;
                case 5:
                  fr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Ef(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (z = v)) : Ef(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Ph("display", s)));
              } catch (b) {
                me(e, e.return, b);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (b) {
                me(e, e.return, b);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), St(e), r & 4 && Cf(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), St(e);
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ko(o, ""), (r.flags &= -33));
          var i = Sf(e);
          ou(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Sf(e);
          ru(e, l, s);
          break;
        default:
          throw Error(F(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jw(e, t, n) {
  (z = e), Jm(e);
}
function Jm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var o = z,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ci;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ae;
        l = Ci;
        var u = Ae;
        if (((Ci = s), (Ae = a) && !u))
          for (z = o; z !== null; )
            (s = z),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? $f(o)
                : a !== null
                ? ((a.return = s), (z = a))
                : $f(o);
        for (; i !== null; ) (z = i), Jm(i), (i = i.sibling);
        (z = o), (Ci = l), (Ae = u);
      }
      Pf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (z = i)) : Pf(e);
  }
}
function Pf(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && af(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                af(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Lo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        Ae || (t.flags & 512 && nu(t));
      } catch (f) {
        me(t, t.return, f);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ef(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function $f(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tl(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, o, a);
            }
          }
          var i = t.return;
          try {
            nu(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            nu(t);
          } catch (a) {
            me(t, s, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      z = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (z = l);
      break;
    }
    z = t.return;
  }
}
var zw = Math.ceil,
  Ps = Kt.ReactCurrentDispatcher,
  Cc = Kt.ReactCurrentOwner,
  ut = Kt.ReactCurrentBatchConfig,
  q = 0,
  Pe = null,
  we = null,
  Me = 0,
  Ze = 0,
  pr = wn(0),
  Se = 0,
  Bo = null,
  zn = 0,
  nl = 0,
  Pc = 0,
  xo = null,
  We = null,
  Ec = 0,
  _r = 1 / 0,
  It = null,
  Es = !1,
  iu = null,
  cn = null,
  Pi = !1,
  nn = null,
  $s = 0,
  So = 0,
  su = null,
  Zi = -1,
  qi = 0;
function De() {
  return q & 6 ? ge() : Zi !== -1 ? Zi : (Zi = ge());
}
function dn(e) {
  return e.mode & 1
    ? q & 2 && Me !== 0
      ? Me & -Me
      : Pw.transition !== null
      ? (qi === 0 && (qi = Fh()), qi)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wh(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < So) throw ((So = 0), (su = null), Error(F(185)));
  qo(e, n, r),
    (!(q & 2) || e !== Pe) &&
      (e === Pe && (!(q & 2) && (nl |= n), Se === 4 && en(e, Me)),
      Qe(e, r),
      n === 1 && q === 0 && !(t.mode & 1) && ((_r = ge() + 500), qs && bn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  P1(e, t);
  var r = us(e, e === Pe ? Me : 0);
  if (r === 0)
    n !== null && Ad(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ad(n), t === 1))
      e.tag === 0 ? Cw(kf.bind(null, e)) : um(kf.bind(null, e)),
        ww(function () {
          !(q & 6) && bn();
        }),
        (n = null);
    else {
      switch (Vh(r)) {
        case 1:
          n = Zu;
          break;
        case 4:
          n = Oh;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = Ih;
          break;
        default:
          n = as;
      }
      n = lv(n, ev.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ev(e, t) {
  if (((Zi = -1), (qi = 0), q & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var r = us(e, e === Pe ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ks(e, r);
  else {
    t = r;
    var o = q;
    q |= 2;
    var i = nv();
    (Pe !== e || Me !== t) && ((It = null), (_r = ge() + 500), An(e, t));
    do
      try {
        Ww();
        break;
      } catch (l) {
        tv(e, l);
      }
    while (!0);
    cc(),
      (Ps.current = i),
      (q = o),
      we !== null ? (t = 0) : ((Pe = null), (Me = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ra(e)), o !== 0 && ((r = o), (t = lu(e, o)))), t === 1)
    )
      throw ((n = Bo), An(e, 0), en(e, r), Qe(e, ge()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Bw(o) &&
          ((t = ks(e, r)),
          t === 2 && ((i = Ra(e)), i !== 0 && ((r = i), (t = lu(e, i)))),
          t === 1))
      )
        throw ((n = Bo), An(e, 0), en(e, r), Qe(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          En(e, We, It);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = Ec + 500 - ge()), 10 < t))
          ) {
            if (us(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = za(En.bind(null, e, We, It), t);
            break;
          }
          En(e, We, It);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - yt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = za(En.bind(null, e, We, It), r);
            break;
          }
          En(e, We, It);
          break;
        case 5:
          En(e, We, It);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Qe(e, ge()), e.callbackNode === n ? ev.bind(null, e) : null;
}
function lu(e, t) {
  var n = xo;
  return (
    e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256),
    (e = ks(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && au(t)),
    e
  );
}
function au(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function Bw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!bt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~Pc,
      t &= ~nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function kf(e) {
  if (q & 6) throw Error(F(327));
  Sr();
  var t = us(e, 0);
  if (!(t & 1)) return Qe(e, ge()), null;
  var n = ks(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ra(e);
    r !== 0 && ((t = r), (n = lu(e, r)));
  }
  if (n === 1) throw ((n = Bo), An(e, 0), en(e, t), Qe(e, ge()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    En(e, We, It),
    Qe(e, ge()),
    null
  );
}
function $c(e, t) {
  var n = q;
  q |= 1;
  try {
    return e(t);
  } finally {
    (q = n), q === 0 && ((_r = ge() + 500), qs && bn());
  }
}
function Bn(e) {
  nn !== null && nn.tag === 0 && !(q & 6) && Sr();
  var t = q;
  q |= 1;
  var n = ut.transition,
    r = ee;
  try {
    if (((ut.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (ut.transition = n), (q = t), !(q & 6) && bn();
  }
}
function kc() {
  (Ze = pr.current), ue(pr);
}
function An(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yw(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((lc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hs();
          break;
        case 3:
          Nr(), ue(Ge), ue(Ie), vc();
          break;
        case 5:
          mc(r);
          break;
        case 4:
          Nr();
          break;
        case 13:
          ue(de);
          break;
        case 19:
          ue(de);
          break;
        case 10:
          dc(r.type._context);
          break;
        case 22:
        case 23:
          kc();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (we = e = fn(e.current, null)),
    (Me = Ze = t),
    (Se = 0),
    (Bo = null),
    (Pc = nl = zn = 0),
    (We = xo = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((n = kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    kn = null;
  }
  return e;
}
function tv(e, t) {
  do {
    var n = we;
    try {
      if ((cc(), (Yi.current = Cs), Ss)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ss = !1;
      }
      if (
        ((jn = 0),
        (Ce = xe = pe = null),
        (wo = !1),
        (Do = 0),
        (Cc.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (Bo = t), (we = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Me),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = hf(s);
          if (v !== null) {
            (v.flags &= -257),
              mf(v, s, l, i, t),
              v.mode & 1 && pf(i, u, t),
              (t = v),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var b = new Set();
              b.add(a), (t.updateQueue = b);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pf(i, u, t), Tc();
              break e;
            }
            a = Error(F(426));
          }
        } else if (ce && l.mode & 1) {
          var C = hf(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              mf(C, s, l, i, t),
              ac(Lr(a, l));
            break e;
          }
        }
        (i = a = Lr(a, l)),
          Se !== 4 && (Se = 2),
          xo === null ? (xo = [i]) : xo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Vm(i, a, t);
              lf(i, h);
              break e;
            case 1:
              l = a;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (cn === null || !cn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = Dm(i, l, t);
                lf(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ov(n);
    } catch (P) {
      (t = P), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function nv() {
  var e = Ps.current;
  return (Ps.current = Cs), e === null ? Cs : e;
}
function Tc() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Pe === null || (!(zn & 268435455) && !(nl & 268435455)) || en(Pe, Me);
}
function ks(e, t) {
  var n = q;
  q |= 2;
  var r = nv();
  (Pe !== e || Me !== t) && ((It = null), An(e, t));
  do
    try {
      Hw();
      break;
    } catch (o) {
      tv(e, o);
    }
  while (!0);
  if ((cc(), (q = n), (Ps.current = r), we !== null)) throw Error(F(261));
  return (Pe = null), (Me = 0), Se;
}
function Hw() {
  for (; we !== null; ) rv(we);
}
function Ww() {
  for (; we !== null && !m1(); ) rv(we);
}
function rv(e) {
  var t = sv(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? ov(e) : (we = t),
    (Cc.current = null);
}
function ov(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Fw(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (we = null);
        return;
      }
    } else if (((n = Iw(n, t, Ze)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function En(e, t, n) {
  var r = ee,
    o = ut.transition;
  try {
    (ut.transition = null), (ee = 1), Uw(e, t, n, r);
  } finally {
    (ut.transition = o), (ee = r);
  }
  return null;
}
function Uw(e, t, n, r) {
  do Sr();
  while (nn !== null);
  if (q & 6) throw Error(F(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (E1(e, i),
    e === Pe && ((we = Pe = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      lv(as, function () {
        return Sr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ut.transition), (ut.transition = null);
    var s = ee;
    ee = 1;
    var l = q;
    (q |= 4),
      (Cc.current = null),
      Dw(e, n),
      qm(n, e),
      dw(Da),
      (cs = !!Va),
      (Da = Va = null),
      (e.current = n),
      jw(n),
      v1(),
      (q = l),
      (ee = s),
      (ut.transition = i);
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (nn = e), ($s = o)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    w1(n.stateNode),
    Qe(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Es) throw ((Es = !1), (e = iu), (iu = null), e);
  return (
    $s & 1 && e.tag !== 0 && Sr(),
    (i = e.pendingLanes),
    i & 1 ? (e === su ? So++ : ((So = 0), (su = e))) : (So = 0),
    bn(),
    null
  );
}
function Sr() {
  if (nn !== null) {
    var e = Vh($s),
      t = ut.transition,
      n = ee;
    try {
      if (((ut.transition = null), (ee = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), ($s = 0), q & 6)) throw Error(F(331));
        var o = q;
        for (q |= 4, z = e.current; z !== null; ) {
          var i = z,
            s = i.child;
          if (z.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (z = d);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var f = c.sibling,
                        v = c.return;
                      if ((Qm(c), c === u)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (z = f);
                        break;
                      }
                      z = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var b = y.child;
                if (b !== null) {
                  y.child = null;
                  do {
                    var C = b.sibling;
                    (b.sibling = null), (b = C);
                  } while (b !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (z = s);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bo(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (z = h);
                break e;
              }
              z = i.return;
            }
        }
        var p = e.current;
        for (z = p; z !== null; ) {
          s = z;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (z = m);
          else
            e: for (s = p; z !== null; ) {
              if (((l = z), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tl(9, l);
                  }
                } catch (P) {
                  me(l, l.return, P);
                }
              if (l === s) {
                z = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (z = S);
                break e;
              }
              z = l.return;
            }
        }
        if (
          ((q = o), bn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(Gs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (ut.transition = t);
    }
  }
  return !1;
}
function Tf(e, t, n) {
  (t = Lr(n, t)),
    (t = Vm(e, t, 1)),
    (e = un(e, t, 1)),
    (t = De()),
    e !== null && (qo(e, 1, t), Qe(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Tf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Tf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = Lr(n, e)),
            (e = Dm(t, e, 1)),
            (t = un(t, e, 1)),
            (e = De()),
            t !== null && (qo(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Kw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Me & n) === n &&
      (Se === 4 || (Se === 3 && (Me & 130023424) === Me && 500 > ge() - Ec)
        ? An(e, 0)
        : (Pc |= n)),
    Qe(e, t);
}
function iv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hi), (hi <<= 1), !(hi & 130023424) && (hi = 4194304))
      : (t = 1));
  var n = De();
  (e = Wt(e, t)), e !== null && (qo(e, t, n), Qe(e, n));
}
function Gw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), iv(e, n);
}
function Yw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), iv(e, n);
}
var sv;
sv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Ow(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), ce && t.flags & 1048576 && cm(t, gs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xi(e, t), (e = t.pendingProps);
      var o = kr(t, Ie.current);
      xr(t, n), (o = yc(null, t, r, e, o, n));
      var i = wc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((i = !0), ms(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            pc(t),
            (o.updater = el),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ya(t, r, e, n),
            (t = Za(null, t, r, !0, i, n)))
          : ((t.tag = 0), ce && i && sc(t), Fe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Xw(r)),
          (e = ht(r, e)),
          o)
        ) {
          case 0:
            t = Xa(null, t, r, e, n);
            break e;
          case 1:
            t = yf(null, t, r, e, n);
            break e;
          case 11:
            t = vf(null, t, r, e, n);
            break e;
          case 14:
            t = gf(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        Xa(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        yf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Hm(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          vm(e, t),
          bs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Lr(Error(F(423)), t)), (t = wf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Lr(Error(F(424)), t)), (t = wf(e, t, r, n, o));
            break e;
          } else
            for (
              qe = an(t.stateNode.containerInfo.firstChild),
                Je = t,
                ce = !0,
                vt = null,
                n = hm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tr(), r === o)) {
            t = Ut(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        gm(t),
        e === null && Ua(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ja(r, o) ? (s = null) : i !== null && ja(r, i) && (t.flags |= 32),
        Bm(e, t),
        Fe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ua(t), null;
    case 13:
      return Wm(e, t, n);
    case 4:
      return (
        hc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mr(t, null, r, n)) : Fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        vf(e, t, r, o, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          oe(ys, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (bt(i.value, s)) {
            if (i.children === o.children && !Ge.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = zt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ka(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(F(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ka(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        Fe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (o = ct(o)),
        (r = r(o)),
        (t.flags |= 1),
        Fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ht(r, t.pendingProps)),
        (o = ht(r.type, o)),
        gf(e, t, r, o, n)
      );
    case 15:
      return jm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        Xi(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), ms(t)) : (e = !1),
        xr(t, n),
        Fm(t, r, o),
        Ya(t, r, o, n),
        Za(null, t, r, !0, e, n)
      );
    case 19:
      return Um(e, t, n);
    case 22:
      return zm(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function lv(e, t) {
  return Ah(e, t);
}
function Qw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new Qw(e, t, n, r);
}
function Mc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xw(e) {
  if (typeof e == "function") return Mc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yu)) return 11;
    if (e === Qu) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ji(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Mc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case rr:
        return On(n.children, o, i, t);
      case Gu:
        (s = 8), (o |= 8);
        break;
      case ya:
        return (
          (e = at(12, n, t, o | 2)), (e.elementType = ya), (e.lanes = i), e
        );
      case wa:
        return (e = at(13, n, t, o)), (e.elementType = wa), (e.lanes = i), e;
      case ba:
        return (e = at(19, n, t, o)), (e.elementType = ba), (e.lanes = i), e;
      case gh:
        return rl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case mh:
              s = 10;
              break e;
            case vh:
              s = 9;
              break e;
            case Yu:
              s = 11;
              break e;
            case Qu:
              s = 14;
              break e;
            case Xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = at(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function On(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function rl(e, t, n, r) {
  return (
    (e = at(22, e, r, t)),
    (e.elementType = gh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zl(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function ql(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Zw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Nc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Zw(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = at(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pc(i),
    e
  );
}
function qw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function av(e) {
  if (!e) return gn;
  e = e._reactInternals;
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return am(e, n, t);
  }
  return t;
}
function uv(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Nc(n, r, !0, e, o, i, s, l, a)),
    (e.context = av(null)),
    (n = e.current),
    (r = De()),
    (o = dn(n)),
    (i = zt(r, o)),
    (i.callback = t ?? null),
    un(n, i, o),
    (e.current.lanes = o),
    qo(e, o, r),
    Qe(e, r),
    e
  );
}
function ol(e, t, n, r) {
  var o = t.current,
    i = De(),
    s = dn(o);
  return (
    (n = av(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = zt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(o, t, s)),
    e !== null && (wt(e, o, s, i), Gi(e, o, s)),
    s
  );
}
function Ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lc(e, t) {
  Mf(e, t), (e = e.alternate) && Mf(e, t);
}
function Jw() {
  return null;
}
var cv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _c(e) {
  this._internalRoot = e;
}
il.prototype.render = _c.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  ol(e, t, null, null);
};
il.prototype.unmount = _c.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      ol(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function il(e) {
  this._internalRoot = e;
}
il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    Jt.splice(n, 0, e), n === 0 && Hh(e);
  }
};
function Rc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Nf() {}
function eb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ts(s);
        i.call(u);
      };
    }
    var s = uv(t, r, e, 0, null, !1, !1, "", Nf);
    return (
      (e._reactRootContainer = s),
      (e[Ht] = s.current),
      Ao(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ts(a);
      l.call(u);
    };
  }
  var a = Nc(e, 0, !1, null, null, !1, !1, "", Nf);
  return (
    (e._reactRootContainer = a),
    (e[Ht] = a.current),
    Ao(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      ol(t, a, n, r);
    }),
    a
  );
}
function ll(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ts(s);
        l.call(a);
      };
    }
    ol(t, s, e, o);
  } else s = eb(n, t, e, o, r);
  return Ts(s);
}
Dh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ao(t.pendingLanes);
        n !== 0 &&
          (qu(t, n | 1), Qe(t, ge()), !(q & 6) && ((_r = ge() + 500), bn()));
      }
      break;
    case 13:
      Bn(function () {
        var r = Wt(e, 1);
        if (r !== null) {
          var o = De();
          wt(r, e, 1, o);
        }
      }),
        Lc(e, 1);
  }
};
Ju = function (e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = De();
      wt(t, e, 134217728, n);
    }
    Lc(e, 134217728);
  }
};
jh = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Wt(e, t);
    if (n !== null) {
      var r = De();
      wt(n, e, t, r);
    }
    Lc(e, t);
  }
};
zh = function () {
  return ee;
};
Bh = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Na = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ca(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Zs(r);
            if (!o) throw Error(F(90));
            wh(r), Ca(r, o);
          }
        }
      }
      break;
    case "textarea":
      xh(e, n);
      break;
    case "select":
      (t = n.value), t != null && gr(e, !!n.multiple, t, !1);
  }
};
Th = $c;
Mh = Bn;
var tb = { usingClientEntryPoint: !1, Events: [ei, lr, Zs, $h, kh, $c] },
  eo = {
    findFiberByHostInstance: $n,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  nb = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _h(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || Jw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      (Gs = Ei.inject(nb)), (kt = Ei);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tb;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rc(t)) throw Error(F(200));
  return qw(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Rc(e)) throw Error(F(299));
  var n = !1,
    r = "",
    o = cv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Nc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ht] = t.current),
    Ao(e.nodeType === 8 ? e.parentNode : e),
    new _c(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = _h(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Bn(e);
};
tt.hydrate = function (e, t, n) {
  if (!sl(t)) throw Error(F(200));
  return ll(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Rc(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = cv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = uv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ht] = t.current),
    Ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new il(t);
};
tt.render = function (e, t, n) {
  if (!sl(t)) throw Error(F(200));
  return ll(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!sl(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (Bn(function () {
        ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = $c;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!sl(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return ll(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function dv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv);
    } catch (e) {
      console.error(e);
    }
}
dv(), (dh.exports = tt);
var fv = dh.exports;
const rb = Jp(fv);
var pv,
  Lf = fv;
(pv = Lf.createRoot), Lf.hydrateRoot;
function al(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    o = w.createContext(void 0);
  o.displayName = r;
  function i() {
    var s;
    const l = w.useContext(o);
    if (!l && t) {
      const a = new Error(n);
      throw (
        ((a.name = "ContextError"),
        (s = Error.captureStackTrace) == null || s.call(Error, a, i),
        a)
      );
    }
    return l;
  }
  return [o.Provider, i, o];
}
function xt(e) {
  const t = w.useRef(null);
  return w.useImperativeHandle(e, () => t.current), t;
}
var ne = (e) => (e ? "true" : void 0);
function hv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = hv(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Ke(...e) {
  for (var t = 0, n, r, o = ""; t < e.length; )
    (n = e[t++]) && (r = hv(n)) && (o && (o += " "), (o += r));
  return o;
}
var ob = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function ib(e) {
  return `${e}-${Math.floor(Math.random() * 1e6)}`;
}
function Dr(e) {
  if (!e || typeof e != "object") return "";
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function sb(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var lb = Object.create,
  mv = Object.defineProperty,
  ab = Object.getOwnPropertyDescriptor,
  vv = Object.getOwnPropertyNames,
  ub = Object.getPrototypeOf,
  cb = Object.prototype.hasOwnProperty,
  gv = (e, t) =>
    function () {
      return t || (0, e[vv(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  db = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of vv(t))
        !cb.call(e, o) &&
          o !== n &&
          mv(e, o, {
            get: () => t[o],
            enumerable: !(r = ab(t, o)) || r.enumerable,
          });
    return e;
  },
  fb = (e, t, n) => (
    (n = e != null ? lb(ub(e)) : {}),
    db(
      !e || !e.__esModule ? mv(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  pb = gv({
    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(
      e
    ) {
      var t = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        a = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        c = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        f = Symbol.iterator;
      function v(x) {
        return x === null || typeof x != "object"
          ? null
          : ((x = (f && x[f]) || x["@@iterator"]),
            typeof x == "function" ? x : null);
      }
      var y = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        b = Object.assign,
        C = {};
      function h(x, L, B) {
        (this.props = x),
          (this.context = L),
          (this.refs = C),
          (this.updater = B || y);
      }
      (h.prototype.isReactComponent = {}),
        (h.prototype.setState = function (x, L) {
          if (typeof x != "object" && typeof x != "function" && x != null)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, x, L, "setState");
        }),
        (h.prototype.forceUpdate = function (x) {
          this.updater.enqueueForceUpdate(this, x, "forceUpdate");
        });
      function p() {}
      p.prototype = h.prototype;
      function m(x, L, B) {
        (this.props = x),
          (this.context = L),
          (this.refs = C),
          (this.updater = B || y);
      }
      var S = (m.prototype = new p());
      (S.constructor = m), b(S, h.prototype), (S.isPureReactComponent = !0);
      var P = Array.isArray,
        $ = Object.prototype.hasOwnProperty,
        O = { current: null },
        g = { key: !0, ref: !0, __self: !0, __source: !0 };
      function M(x, L, B) {
        var G,
          Y = {},
          K = null,
          te = null;
        if (L != null)
          for (G in (L.ref !== void 0 && (te = L.ref),
          L.key !== void 0 && (K = "" + L.key),
          L))
            $.call(L, G) && !g.hasOwnProperty(G) && (Y[G] = L[G]);
        var ie = arguments.length - 2;
        if (ie === 1) Y.children = B;
        else if (1 < ie) {
          for (var Q = Array(ie), Ee = 0; Ee < ie; Ee++)
            Q[Ee] = arguments[Ee + 2];
          Y.children = Q;
        }
        if (x && x.defaultProps)
          for (G in ((ie = x.defaultProps), ie))
            Y[G] === void 0 && (Y[G] = ie[G]);
        return {
          $$typeof: t,
          type: x,
          key: K,
          ref: te,
          props: Y,
          _owner: O.current,
        };
      }
      function I(x, L) {
        return {
          $$typeof: t,
          type: x.type,
          key: L,
          ref: x.ref,
          props: x.props,
          _owner: x._owner,
        };
      }
      function R(x) {
        return typeof x == "object" && x !== null && x.$$typeof === t;
      }
      function _(x) {
        var L = { "=": "=0", ":": "=2" };
        return (
          "$" +
          x.replace(/[=:]/g, function (B) {
            return L[B];
          })
        );
      }
      var E = /\/+/g;
      function T(x, L) {
        return typeof x == "object" && x !== null && x.key != null
          ? _("" + x.key)
          : L.toString(36);
      }
      function V(x, L, B, G, Y) {
        var K = typeof x;
        (K === "undefined" || K === "boolean") && (x = null);
        var te = !1;
        if (x === null) te = !0;
        else
          switch (K) {
            case "string":
            case "number":
              te = !0;
              break;
            case "object":
              switch (x.$$typeof) {
                case t:
                case n:
                  te = !0;
              }
          }
        if (te)
          return (
            (te = x),
            (Y = Y(te)),
            (x = G === "" ? "." + T(te, 0) : G),
            P(Y)
              ? ((B = ""),
                x != null && (B = x.replace(E, "$&/") + "/"),
                V(Y, L, B, "", function (Ee) {
                  return Ee;
                }))
              : Y != null &&
                (R(Y) &&
                  (Y = I(
                    Y,
                    B +
                      (!Y.key || (te && te.key === Y.key)
                        ? ""
                        : ("" + Y.key).replace(E, "$&/") + "/") +
                      x
                  )),
                L.push(Y)),
            1
          );
        if (((te = 0), (G = G === "" ? "." : G + ":"), P(x)))
          for (var ie = 0; ie < x.length; ie++) {
            K = x[ie];
            var Q = G + T(K, ie);
            te += V(K, L, B, Q, Y);
          }
        else if (((Q = v(x)), typeof Q == "function"))
          for (x = Q.call(x), ie = 0; !(K = x.next()).done; )
            (K = K.value), (Q = G + T(K, ie++)), (te += V(K, L, B, Q, Y));
        else if (K === "object")
          throw (
            ((L = String(x)),
            Error(
              "Objects are not valid as a React child (found: " +
                (L === "[object Object]"
                  ? "object with keys {" + Object.keys(x).join(", ") + "}"
                  : L) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return te;
      }
      function j(x, L, B) {
        if (x == null) return x;
        var G = [],
          Y = 0;
        return (
          V(x, G, "", "", function (K) {
            return L.call(B, K, Y++);
          }),
          G
        );
      }
      function U(x) {
        if (x._status === -1) {
          var L = x._result;
          (L = L()),
            L.then(
              function (B) {
                (x._status === 0 || x._status === -1) &&
                  ((x._status = 1), (x._result = B));
              },
              function (B) {
                (x._status === 0 || x._status === -1) &&
                  ((x._status = 2), (x._result = B));
              }
            ),
            x._status === -1 && ((x._status = 0), (x._result = L));
        }
        if (x._status === 1) return x._result.default;
        throw x._result;
      }
      var N = { current: null },
        A = { transition: null },
        D = {
          ReactCurrentDispatcher: N,
          ReactCurrentBatchConfig: A,
          ReactCurrentOwner: O,
        };
      (e.Children = {
        map: j,
        forEach: function (x, L, B) {
          j(
            x,
            function () {
              L.apply(this, arguments);
            },
            B
          );
        },
        count: function (x) {
          var L = 0;
          return (
            j(x, function () {
              L++;
            }),
            L
          );
        },
        toArray: function (x) {
          return (
            j(x, function (L) {
              return L;
            }) || []
          );
        },
        only: function (x) {
          if (!R(x))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return x;
        },
      }),
        (e.Component = h),
        (e.Fragment = r),
        (e.Profiler = i),
        (e.PureComponent = m),
        (e.StrictMode = o),
        (e.Suspense = u),
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (e.cloneElement = function (x, L, B) {
          if (x == null)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                x +
                "."
            );
          var G = b({}, x.props),
            Y = x.key,
            K = x.ref,
            te = x._owner;
          if (L != null) {
            if (
              (L.ref !== void 0 && ((K = L.ref), (te = O.current)),
              L.key !== void 0 && (Y = "" + L.key),
              x.type && x.type.defaultProps)
            )
              var ie = x.type.defaultProps;
            for (Q in L)
              $.call(L, Q) &&
                !g.hasOwnProperty(Q) &&
                (G[Q] = L[Q] === void 0 && ie !== void 0 ? ie[Q] : L[Q]);
          }
          var Q = arguments.length - 2;
          if (Q === 1) G.children = B;
          else if (1 < Q) {
            ie = Array(Q);
            for (var Ee = 0; Ee < Q; Ee++) ie[Ee] = arguments[Ee + 2];
            G.children = ie;
          }
          return {
            $$typeof: t,
            type: x.type,
            key: Y,
            ref: K,
            props: G,
            _owner: te,
          };
        }),
        (e.createContext = function (x) {
          return (
            (x = {
              $$typeof: l,
              _currentValue: x,
              _currentValue2: x,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }),
            (x.Provider = { $$typeof: s, _context: x }),
            (x.Consumer = x)
          );
        }),
        (e.createElement = M),
        (e.createFactory = function (x) {
          var L = M.bind(null, x);
          return (L.type = x), L;
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (x) {
          return { $$typeof: a, render: x };
        }),
        (e.isValidElement = R),
        (e.lazy = function (x) {
          return {
            $$typeof: d,
            _payload: { _status: -1, _result: x },
            _init: U,
          };
        }),
        (e.memo = function (x, L) {
          return { $$typeof: c, type: x, compare: L === void 0 ? null : L };
        }),
        (e.startTransition = function (x) {
          var L = A.transition;
          A.transition = {};
          try {
            x();
          } finally {
            A.transition = L;
          }
        }),
        (e.unstable_act = function () {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }),
        (e.useCallback = function (x, L) {
          return N.current.useCallback(x, L);
        }),
        (e.useContext = function (x) {
          return N.current.useContext(x);
        }),
        (e.useDebugValue = function () {}),
        (e.useDeferredValue = function (x) {
          return N.current.useDeferredValue(x);
        }),
        (e.useEffect = function (x, L) {
          return N.current.useEffect(x, L);
        }),
        (e.useId = function () {
          return N.current.useId();
        }),
        (e.useImperativeHandle = function (x, L, B) {
          return N.current.useImperativeHandle(x, L, B);
        }),
        (e.useInsertionEffect = function (x, L) {
          return N.current.useInsertionEffect(x, L);
        }),
        (e.useLayoutEffect = function (x, L) {
          return N.current.useLayoutEffect(x, L);
        }),
        (e.useMemo = function (x, L) {
          return N.current.useMemo(x, L);
        }),
        (e.useReducer = function (x, L, B) {
          return N.current.useReducer(x, L, B);
        }),
        (e.useRef = function (x) {
          return N.current.useRef(x);
        }),
        (e.useState = function (x) {
          return N.current.useState(x);
        }),
        (e.useSyncExternalStore = function (x, L, B) {
          return N.current.useSyncExternalStore(x, L, B);
        }),
        (e.useTransition = function () {
          return N.current.useTransition();
        }),
        (e.version = "18.2.0");
    },
  }),
  hb = gv({
    "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(
      e,
      t
    ) {
      t.exports = pb();
    },
  });
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _f = fb(hb()),
  yv = (e, t) => {
    var n;
    let r = [];
    const o =
        (n = _f.Children.map(e, (s) =>
          (0, _f.isValidElement)(s) && s.type === t ? (r.push(s), null) : s
        )) == null
          ? void 0
          : n.filter(Boolean),
      i = r.length >= 0 ? r : void 0;
    return [o, i];
  },
  mb = new Set([
    "id",
    "type",
    "style",
    "title",
    "role",
    "tabIndex",
    "htmlFor",
    "width",
    "height",
    "abbr",
    "accept",
    "acceptCharset",
    "accessKey",
    "action",
    "allowFullScreen",
    "allowTransparency",
    "alt",
    "async",
    "autoComplete",
    "autoFocus",
    "autoPlay",
    "cellPadding",
    "cellSpacing",
    "challenge",
    "charset",
    "checked",
    "cite",
    "class",
    "className",
    "cols",
    "colSpan",
    "command",
    "content",
    "contentEditable",
    "contextMenu",
    "controls",
    "coords",
    "crossOrigin",
    "data",
    "dateTime",
    "default",
    "defer",
    "dir",
    "disabled",
    "download",
    "draggable",
    "dropzone",
    "encType",
    "enterKeyHint",
    "for",
    "form",
    "formAction",
    "formEncType",
    "formMethod",
    "formNoValidate",
    "formTarget",
    "frameBorder",
    "headers",
    "hidden",
    "high",
    "href",
    "hrefLang",
    "httpEquiv",
    "icon",
    "inputMode",
    "isMap",
    "itemId",
    "itemProp",
    "itemRef",
    "itemScope",
    "itemType",
    "kind",
    "label",
    "lang",
    "list",
    "loop",
    "manifest",
    "max",
    "maxLength",
    "media",
    "mediaGroup",
    "method",
    "min",
    "minLength",
    "multiple",
    "muted",
    "name",
    "noValidate",
    "open",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "poster",
    "preload",
    "radioGroup",
    "referrerPolicy",
    "readOnly",
    "rel",
    "required",
    "rows",
    "rowSpan",
    "sandbox",
    "scope",
    "scoped",
    "scrolling",
    "seamless",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "sortable",
    "span",
    "spellCheck",
    "src",
    "srcDoc",
    "srcSet",
    "start",
    "step",
    "target",
    "translate",
    "typeMustMatch",
    "useMap",
    "value",
    "wmode",
    "wrap",
  ]),
  vb = new Set([
    "onCopy",
    "onCut",
    "onPaste",
    "onLoad",
    "onError",
    "onWheel",
    "onScroll",
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",
    "onKeyDown",
    "onKeyPress",
    "onKeyUp",
    "onFocus",
    "onBlur",
    "onChange",
    "onInput",
    "onSubmit",
    "onClick",
    "onContextMenu",
    "onDoubleClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragExit",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",
    "onPointerDown",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerUp",
    "onSelect",
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",
    "onTransitionEnd",
  ]),
  Rf = /^(data-.*)$/,
  gb = /^(aria-.*)$/,
  $i = /^(on[A-Z].*)$/;
function Af(e, t = {}) {
  let {
      labelable: n = !0,
      enabled: r = !0,
      propNames: o,
      omitPropNames: i,
      omitEventNames: s,
      omitDataProps: l,
      omitEventProps: a,
    } = t,
    u = {};
  if (!r) return e;
  for (const c in e)
    (i != null && i.has(c)) ||
      (s != null && s.has(c) && $i.test(c)) ||
      ($i.test(c) && !vb.has(c)) ||
      (l && Rf.test(c)) ||
      (a && $i.test(c)) ||
      (((Object.prototype.hasOwnProperty.call(e, c) &&
        (mb.has(c) ||
          (n && gb.test(c)) ||
          (o != null && o.has(c)) ||
          Rf.test(c))) ||
        $i.test(c)) &&
        (u[c] = e[c]));
  return u;
}
var [yb, ul] = al({ name: "ProviderContext", strict: !1 });
const wb = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  bb = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function wv(e) {
  if (Intl.Locale) {
    let n = new Intl.Locale(e).maximize(),
      r = typeof n.getTextInfo == "function" ? n.getTextInfo() : n.textInfo;
    if (r) return r.direction === "rtl";
    if (n.script) return wb.has(n.script);
  }
  let t = e.split("-")[0];
  return bb.has(t);
}
const Ms = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  bv = J.createContext(Ms),
  xb = J.createContext(!1);
let Sb = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Jl = new WeakMap();
function Cb(e = !1) {
  let t = w.useContext(bv),
    n = w.useRef(null);
  if (n.current === null && !e) {
    var r, o;
    let i =
      (o = J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      o === void 0 ||
      (r = o.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (i) {
      let s = Jl.get(i);
      s == null
        ? Jl.set(i, { id: t.current, state: i.memoizedState })
        : i.memoizedState !== s.state && ((t.current = s.id), Jl.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Pb(e) {
  let t = w.useContext(bv);
  t === Ms &&
    !Sb &&
    console.warn(
      "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
    );
  let n = Cb(!!e),
    r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Eb(e) {
  let t = J.useId(),
    [n] = w.useState(Ac()),
    r = n ? "react-aria" : `react-aria${Ms.prefix}`;
  return e || `${r}-${t}`;
}
const $b = typeof J.useId == "function" ? Eb : Pb;
function kb() {
  return !1;
}
function Tb() {
  return !0;
}
function Mb(e) {
  return () => {};
}
function Ac() {
  return typeof J.useSyncExternalStore == "function"
    ? J.useSyncExternalStore(Mb, kb, Tb)
    : w.useContext(xb);
}
const Nb = Symbol.for("react-aria.i18n.locale");
function xv() {
  let e =
    (typeof window < "u" && window[Nb]) ||
    (typeof navigator < "u" &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return { locale: e, direction: wv(e) ? "rtl" : "ltr" };
}
let uu = xv(),
  co = new Set();
function Of() {
  uu = xv();
  for (let e of co) e(uu);
}
function Sv() {
  let e = Ac(),
    [t, n] = w.useState(uu);
  return (
    w.useEffect(
      () => (
        co.size === 0 && window.addEventListener("languagechange", Of),
        co.add(n),
        () => {
          co.delete(n),
            co.size === 0 && window.removeEventListener("languagechange", Of);
        }
      ),
      []
    ),
    e ? { locale: "en-US", direction: "ltr" } : t
  );
}
const Cv = J.createContext(null);
function Lb(e) {
  let { locale: t, children: n } = e,
    r = Sv(),
    o = J.useMemo(
      () => (t ? { locale: t, direction: wv(t) ? "rtl" : "ltr" } : r),
      [r, t]
    );
  return J.createElement(Cv.Provider, { value: o }, n);
}
function Pv() {
  let e = Sv();
  return w.useContext(Cv) || e;
}
var Et = function () {
  return (
    (Et =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Et.apply(this, arguments)
  );
};
function Ev(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function _b(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
const Rb = Symbol.for("react-aria.i18n.locale"),
  Ab = Symbol.for("react-aria.i18n.strings");
let Xn;
class cl {
  getStringForLocale(t, n) {
    let o = this.getStringsForLocale(n)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${n} locale`);
    return o;
  }
  getStringsForLocale(t) {
    let n = this.strings[t];
    return (
      n ||
        ((n = Ob(t, this.strings, this.defaultLocale)), (this.strings[t] = n)),
      n
    );
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > "u") return null;
    let n = window[Rb];
    if (Xn === void 0) {
      let o = window[Ab];
      if (!o) return null;
      Xn = {};
      for (let i in o) Xn[i] = new cl({ [n]: o[i] }, n);
    }
    let r = Xn == null ? void 0 : Xn[t];
    if (!r)
      throw new Error(
        `Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`
      );
    return r;
  }
  constructor(t, n = "en-US") {
    (this.strings = Object.fromEntries(Object.entries(t).filter(([, r]) => r))),
      (this.defaultLocale = n);
  }
}
function Ob(e, t, n = "en-US") {
  if (t[e]) return t[e];
  let r = Ib(e);
  if (t[r]) return t[r];
  for (let o in t) if (o.startsWith(r + "-")) return t[o];
  return t[n];
}
function Ib(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split("-")[0];
}
const If = new Map(),
  Ff = new Map();
class Fb {
  format(t, n) {
    let r = this.strings.getStringForLocale(t, this.locale);
    return typeof r == "function" ? r(n, this) : r;
  }
  plural(t, n, r = "cardinal") {
    let o = n["=" + t];
    if (o) return typeof o == "function" ? o() : o;
    let i = this.locale + ":" + r,
      s = If.get(i);
    s || ((s = new Intl.PluralRules(this.locale, { type: r })), If.set(i, s));
    let l = s.select(t);
    return (o = n[l] || n.other), typeof o == "function" ? o() : o;
  }
  number(t) {
    let n = Ff.get(this.locale);
    return (
      n || ((n = new Intl.NumberFormat(this.locale)), Ff.set(this.locale, n)),
      n.format(t)
    );
  }
  select(t, n) {
    let r = t[n] || t.other;
    return typeof r == "function" ? r() : r;
  }
  constructor(t, n) {
    (this.locale = t), (this.strings = n);
  }
}
const Vf = new WeakMap();
function Vb(e) {
  let t = Vf.get(e);
  return t || ((t = new cl(e)), Vf.set(e, t)), t;
}
function Db(e, t) {
  return (t && cl.getGlobalDictionaryForPackage(t)) || Vb(e);
}
function jb(e, t) {
  let { locale: n } = Pv(),
    r = Db(e, t);
  return w.useMemo(() => new Fb(n, r), [n, r]);
}
function zb(e, t) {
  if (t.has(e))
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
}
function Bb(e, t, n) {
  zb(e, t), t.set(e, n);
}
const be = typeof document < "u" ? J.useLayoutEffect : () => {};
function $t(e) {
  const t = w.useRef(null);
  return (
    be(() => {
      t.current = e;
    }, [e]),
    w.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, [])
  );
}
function Hb(e) {
  let [t, n] = w.useState(e),
    r = w.useRef(null),
    o = $t(() => {
      if (!r.current) return;
      let s = r.current.next();
      if (s.done) {
        r.current = null;
        return;
      }
      t === s.value ? o() : n(s.value);
    });
  be(() => {
    r.current && o();
  });
  let i = $t((s) => {
    (r.current = s(t)), o();
  });
  return [t, i];
}
let Wb = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Ns = new Map();
function Oc(e) {
  let [t, n] = w.useState(e),
    r = w.useRef(null),
    o = $b(t),
    i = w.useCallback((s) => {
      r.current = s;
    }, []);
  return (
    Wb && Ns.set(o, i),
    be(() => {
      let s = o;
      return () => {
        Ns.delete(s);
      };
    }, [o]),
    w.useEffect(() => {
      let s = r.current;
      s && ((r.current = null), n(s));
    }),
    o
  );
}
function Ub(e, t) {
  if (e === t) return e;
  let n = Ns.get(e);
  if (n) return n(t), t;
  let r = Ns.get(t);
  return r ? (r(e), e) : t;
}
function Kb(e = []) {
  let t = Oc(),
    [n, r] = Hb(t),
    o = w.useCallback(() => {
      r(function* () {
        yield t, yield document.getElementById(t) ? t : void 0;
      });
    }, [t, r]);
  return be(o, [t, o, ...e]), n;
}
function dl(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const ae = (e) => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0
      ? t
      : document;
  },
  gt = (e) =>
    e && "window" in e && e.window === e ? e : ae(e).defaultView || window;
function $v(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = $v(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Gb() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = $v(e)) && (r && (r += " "), (r += t));
  return r;
}
function fe(...e) {
  let t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let o in r) {
      let i = t[o],
        s = r[o];
      typeof i == "function" &&
      typeof s == "function" &&
      o[0] === "o" &&
      o[1] === "n" &&
      o.charCodeAt(2) >= 65 &&
      o.charCodeAt(2) <= 90
        ? (t[o] = dl(i, s))
        : (o === "className" || o === "UNSAFE_className") &&
          typeof i == "string" &&
          typeof s == "string"
        ? (t[o] = Gb(i, s))
        : o === "id" && i && s
        ? (t.id = Ub(i, s))
        : (t[o] = s !== void 0 ? s : i);
    }
  }
  return t;
}
function Yb(...e) {
  return e.length === 1
    ? e[0]
    : (t) => {
        for (let n of e)
          typeof n == "function" ? n(t) : n != null && (n.current = t);
      };
}
const Qb = new Set(["id"]),
  Xb = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details",
  ]),
  Zb = new Set([
    "href",
    "hrefLang",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy",
  ]),
  qb = /^(data-.*)$/;
function Ic(e, t = {}) {
  let { labelable: n, isLink: r, propNames: o } = t,
    i = {};
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) &&
      (Qb.has(s) ||
        (n && Xb.has(s)) ||
        (r && Zb.has(s)) ||
        (o != null && o.has(s)) ||
        qb.test(s)) &&
      (i[s] = e[s]);
  return i;
}
function Mn(e) {
  if (Jb()) e.focus({ preventScroll: !0 });
  else {
    let t = ex(e);
    e.focus(), tx(t);
  }
}
let ki = null;
function Jb() {
  if (ki == null) {
    ki = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return (ki = !0), !0;
        },
      });
    } catch {}
  }
  return ki;
}
function ex(e) {
  let t = e.parentNode,
    n = [],
    r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
      n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
      (t = t.parentNode);
  return (
    r instanceof HTMLElement &&
      n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
    n
  );
}
function tx(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    (t.scrollTop = n), (t.scrollLeft = r);
}
function fl(e) {
  var t;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((t = window.navigator.userAgentData) === null || t === void 0
        ? void 0
        : t.brands.some((n) => e.test(n.brand))) ||
        e.test(window.navigator.userAgent);
}
function Fc(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function Ho() {
  return Fc(/^Mac/i);
}
function nx() {
  return Fc(/^iPhone/i);
}
function kv() {
  return Fc(/^iPad/i) || (Ho() && navigator.maxTouchPoints > 1);
}
function Tv() {
  return nx() || kv();
}
function Mv() {
  return fl(/AppleWebKit/i) && !rx();
}
function rx() {
  return fl(/Chrome/i);
}
function Nv() {
  return fl(/Android/i);
}
function ox() {
  return fl(/Firefox/i);
}
const Lv = w.createContext({ isNative: !0, open: sx, useHref: (e) => e });
function ix(e) {
  let { children: t, navigate: n, useHref: r } = e,
    o = w.useMemo(
      () => ({
        isNative: !1,
        open: (i, s, l, a) => {
          Av(i, (u) => {
            Rv(u, s) ? n(l, a) : Hn(u, s);
          });
        },
        useHref: r || ((i) => i),
      }),
      [n, r]
    );
  return J.createElement(Lv.Provider, { value: o }, t);
}
function _v() {
  return w.useContext(Lv);
}
function Rv(e, t) {
  let n = e.getAttribute("target");
  return (
    (!n || n === "_self") &&
    e.origin === location.origin &&
    !e.hasAttribute("download") &&
    !t.metaKey &&
    !t.ctrlKey &&
    !t.altKey &&
    !t.shiftKey
  );
}
function Hn(e, t, n = !0) {
  var r, o;
  let { metaKey: i, ctrlKey: s, altKey: l, shiftKey: a } = t;
  ox() &&
    !(
      (o = window.event) === null ||
      o === void 0 ||
      (r = o.type) === null ||
      r === void 0
    ) &&
    r.startsWith("key") &&
    e.target === "_blank" &&
    (Ho() ? (i = !0) : (s = !0));
  let u =
    Mv() && Ho() && !kv()
      ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: l,
          shiftKey: a,
        })
      : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: l,
          shiftKey: a,
          bubbles: !0,
          cancelable: !0,
        });
  (Hn.isOpening = n), Mn(e), e.dispatchEvent(u), (Hn.isOpening = !1);
}
Hn.isOpening = !1;
function Av(e, t) {
  if (e instanceof HTMLAnchorElement) t(e);
  else if (e.hasAttribute("data-href")) {
    let n = document.createElement("a");
    (n.href = e.getAttribute("data-href")),
      e.hasAttribute("data-target") &&
        (n.target = e.getAttribute("data-target")),
      e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")),
      e.hasAttribute("data-download") &&
        (n.download = e.getAttribute("data-download")),
      e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")),
      e.hasAttribute("data-referrer-policy") &&
        (n.referrerPolicy = e.getAttribute("data-referrer-policy")),
      e.appendChild(n),
      t(n),
      e.removeChild(n);
  }
}
function sx(e, t) {
  Av(e, (n) => Hn(n, t));
}
function lx(e) {
  let t = _v();
  return {
    href: e != null && e.href ? t.useHref(e == null ? void 0 : e.href) : void 0,
    target: e == null ? void 0 : e.target,
    rel: e == null ? void 0 : e.rel,
    download: e == null ? void 0 : e.download,
    ping: e == null ? void 0 : e.ping,
    referrerPolicy: e == null ? void 0 : e.referrerPolicy,
  };
}
let tr = new Map(),
  cu = new Set();
function Df() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
      if (!e(r) || !r.target) return;
      let o = tr.get(r.target);
      o ||
        ((o = new Set()),
        tr.set(r.target, o),
        r.target.addEventListener("transitioncancel", n, { once: !0 })),
        o.add(r.propertyName);
    },
    n = (r) => {
      if (!e(r) || !r.target) return;
      let o = tr.get(r.target);
      if (
        o &&
        (o.delete(r.propertyName),
        o.size === 0 &&
          (r.target.removeEventListener("transitioncancel", n),
          tr.delete(r.target)),
        tr.size === 0)
      ) {
        for (let i of cu) i();
        cu.clear();
      }
    };
  document.body.addEventListener("transitionrun", t),
    document.body.addEventListener("transitionend", n);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? Df()
    : document.addEventListener("DOMContentLoaded", Df));
function Ov(e) {
  requestAnimationFrame(() => {
    tr.size === 0 ? e() : cu.add(e);
  });
}
function ax() {
  let e = w.useRef(new Map()),
    t = w.useCallback((o, i, s, l) => {
      let a =
        l != null && l.once
          ? (...u) => {
              e.current.delete(s), s(...u);
            }
          : s;
      e.current.set(s, { type: i, eventTarget: o, fn: a, options: l }),
        o.addEventListener(i, s, l);
    }, []),
    n = w.useCallback((o, i, s, l) => {
      var a;
      let u =
        ((a = e.current.get(s)) === null || a === void 0 ? void 0 : a.fn) || s;
      o.removeEventListener(i, u, l), e.current.delete(s);
    }, []),
    r = w.useCallback(() => {
      e.current.forEach((o, i) => {
        n(o.eventTarget, o.type, i, o.options);
      });
    }, [n]);
  return (
    w.useEffect(() => r, [r]),
    {
      addGlobalListener: t,
      removeGlobalListener: n,
      removeAllGlobalListeners: r,
    }
  );
}
function ux(e, t) {
  let { id: n, "aria-label": r, "aria-labelledby": o } = e;
  return (
    (n = Oc(n)),
    o && r
      ? (o = [...new Set([n, ...o.trim().split(/\s+/)])].join(" "))
      : o && (o = o.trim().split(/\s+/).join(" ")),
    !r && !o && t && (r = t),
    { id: n, "aria-label": r, "aria-labelledby": o }
  );
}
function cx() {
  return typeof window.ResizeObserver < "u";
}
function Iv(e) {
  const { ref: t, onResize: n } = e;
  w.useEffect(() => {
    let r = t == null ? void 0 : t.current;
    if (r)
      if (cx()) {
        const o = new window.ResizeObserver((i) => {
          i.length && n();
        });
        return (
          o.observe(r),
          () => {
            r && o.unobserve(r);
          }
        );
      } else
        return (
          window.addEventListener("resize", n, !1),
          () => {
            window.removeEventListener("resize", n, !1);
          }
        );
  }, [n, t]);
}
function Fv(e, t) {
  be(() => {
    if (e && e.ref && t)
      return (
        (e.ref.current = t.current),
        () => {
          e.ref && (e.ref.current = null);
        }
      );
  });
}
function du(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : Nv() && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function dx(e) {
  return (
    (!Nv() && e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType === "mouse")
  );
}
function Vc(e, t, n) {
  let [r, o] = w.useState(e || t),
    i = w.useRef(e !== void 0),
    s = e !== void 0;
  w.useEffect(() => {
    let u = i.current;
    u !== s &&
      console.warn(
        `WARN: A component changed from ${
          u ? "controlled" : "uncontrolled"
        } to ${s ? "controlled" : "uncontrolled"}.`
      ),
      (i.current = s);
  }, [s]);
  let l = s ? e : r,
    a = w.useCallback(
      (u, ...c) => {
        let d = (f, ...v) => {
          n && (Object.is(l, f) || n(f, ...v)), s || (l = f);
        };
        typeof u == "function"
          ? (console.warn(
              "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
            ),
            o((v, ...y) => {
              let b = u(s ? l : v, ...y);
              return d(b, ...c), s ? v : b;
            }))
          : (s || o(u), d(u, ...c));
      },
      [s, l, n]
    );
  return [l, a];
}
function fu(e, t = -1 / 0, n = 1 / 0) {
  return Math.min(Math.max(e, t), n);
}
const hr = { top: "top", bottom: "top", left: "left", right: "left" },
  Ls = { top: "bottom", bottom: "top", left: "right", right: "left" },
  fx = { top: "left", left: "top" },
  pu = { top: "height", left: "width" },
  Vv = { width: "totalWidth", height: "totalHeight" },
  Ti = {};
let He = typeof document < "u" && window.visualViewport;
function jf(e) {
  let t = 0,
    n = 0,
    r = 0,
    o = 0,
    i = 0,
    s = 0,
    l = {},
    a = (He == null ? void 0 : He.scale) > 1;
  if (e.tagName === "BODY") {
    let d = document.documentElement;
    (r = d.clientWidth), (o = d.clientHeight);
    var u;
    t = (u = He == null ? void 0 : He.width) !== null && u !== void 0 ? u : r;
    var c;
    (n =
      (c = He == null ? void 0 : He.height) !== null && c !== void 0 ? c : o),
      (l.top = d.scrollTop || e.scrollTop),
      (l.left = d.scrollLeft || e.scrollLeft),
      He && ((i = He.offsetTop), (s = He.offsetLeft));
  } else
    ({ width: t, height: n, top: i, left: s } = Cr(e)),
      (l.top = e.scrollTop),
      (l.left = e.scrollLeft),
      (r = t),
      (o = n);
  return (
    Mv() &&
      (e.tagName === "BODY" || e.tagName === "HTML") &&
      a &&
      ((l.top = 0), (l.left = 0), (i = He.pageTop), (s = He.pageLeft)),
    {
      width: t,
      height: n,
      totalWidth: r,
      totalHeight: o,
      scroll: l,
      top: i,
      left: s,
    }
  );
}
function px(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight,
  };
}
function zf(e, t, n, r, o, i, s) {
  let l = o.scroll[e],
    a = r[pu[e]],
    u = r.scroll[hr[e]] + i,
    c = a + r.scroll[hr[e]] - i,
    d = t - l + s[e] - r[hr[e]],
    f = t - l + n + s[e] - r[hr[e]];
  return d < u ? u - d : f > c ? Math.max(c - f, u - d) : 0;
}
function hx(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0,
  };
}
function Bf(e) {
  if (Ti[e]) return Ti[e];
  let [t, n] = e.split(" "),
    r = hr[t] || "right",
    o = fx[r];
  hr[n] || (n = "center");
  let i = pu[r],
    s = pu[o];
  return (
    (Ti[e] = {
      placement: t,
      crossPlacement: n,
      axis: r,
      crossAxis: o,
      size: i,
      crossSize: s,
    }),
    Ti[e]
  );
}
function ea(e, t, n, r, o, i, s, l, a, u) {
  let {
      placement: c,
      crossPlacement: d,
      axis: f,
      crossAxis: v,
      size: y,
      crossSize: b,
    } = r,
    C = {};
  (C[v] = e[v]),
    d === "center"
      ? (C[v] += (e[b] - n[b]) / 2)
      : d !== v && (C[v] += e[b] - n[b]),
    (C[v] += i);
  const h = e[v] - n[b] + a + u,
    p = e[v] + e[b] - a - u;
  if (((C[v] = fu(C[v], h, p)), c === f)) {
    const m = l ? s[y] : t[Vv[y]];
    C[Ls[f]] = Math.floor(m - e[f] + o);
  } else C[f] = Math.floor(e[f] + e[y] + o);
  return C;
}
function mx(e, t, n, r, o, i, s, l) {
  const a = r ? n.height : t[Vv.height];
  let u = e.top != null ? n.top + e.top : n.top + (a - e.bottom - s),
    c =
      l !== "top"
        ? Math.max(
            0,
            t.height + t.top + t.scroll.top - u - (o.top + o.bottom + i)
          )
        : Math.max(0, u + s - (t.top + t.scroll.top) - (o.top + o.bottom + i));
  return Math.min(t.height - i * 2, c);
}
function Hf(e, t, n, r, o, i) {
  let { placement: s, axis: l, size: a } = i;
  return s === l
    ? Math.max(0, n[l] - e[l] - e.scroll[l] + t[l] - r[l] - r[Ls[l]] - o)
    : Math.max(
        0,
        e[a] + e[l] + e.scroll[l] - t[l] - n[l] - n[a] - r[l] - r[Ls[l]] - o
      );
}
function vx(e, t, n, r, o, i, s, l, a, u, c, d, f, v, y, b) {
  let C = Bf(e),
    {
      size: h,
      crossAxis: p,
      crossSize: m,
      placement: S,
      crossPlacement: P,
    } = C,
    $ = ea(t, l, n, C, c, d, u, f, y, b),
    O = c,
    g = Hf(l, u, t, o, i + c, C);
  if (s && r[h] > g) {
    let A = Bf(`${Ls[S]} ${P}`),
      D = ea(t, l, n, A, c, d, u, f, y, b);
    Hf(l, u, t, o, i + c, A) > g && ((C = A), ($ = D), (O = c));
  }
  let M = "bottom";
  C.axis === "top"
    ? C.placement === "top"
      ? (M = "top")
      : C.placement === "bottom" && (M = "bottom")
    : C.crossAxis === "top" &&
      (C.crossPlacement === "top"
        ? (M = "bottom")
        : C.crossPlacement === "bottom" && (M = "top"));
  let I = zf(p, $[p], n[m], l, a, i, u);
  $[p] += I;
  let R = mx($, l, u, f, o, i, n.height, M);
  v && v < R && (R = v),
    (n.height = Math.min(n.height, R)),
    ($ = ea(t, l, n, C, O, d, u, f, y, b)),
    (I = zf(p, $[p], n[m], l, a, i, u)),
    ($[p] += I);
  let _ = {},
    E = t[p] + 0.5 * t[m] - $[p];
  const T = y / 2 + b,
    V = n[m] - y / 2 - b,
    j = t[p] - $[p] + y / 2,
    U = t[p] + t[m] - $[p] - y / 2,
    N = fu(E, j, U);
  return (
    (_[p] = fu(N, T, V)),
    {
      position: $,
      maxHeight: R,
      arrowOffsetLeft: _.left,
      arrowOffsetTop: _.top,
      placement: C.placement,
    }
  );
}
function gx(e) {
  let {
      placement: t,
      targetNode: n,
      overlayNode: r,
      scrollNode: o,
      padding: i,
      shouldFlip: s,
      boundaryElement: l,
      offset: a,
      crossOffset: u,
      maxHeight: c,
      arrowSize: d = 0,
      arrowBoundaryOffset: f = 0,
    } = e,
    v = r instanceof HTMLElement ? yx(r) : document.documentElement,
    y = v === document.documentElement;
  const b = window.getComputedStyle(v).position;
  let C = !!b && b !== "static",
    h = y ? Cr(n) : Wf(n, v);
  if (!y) {
    let { marginTop: g, marginLeft: M } = window.getComputedStyle(n);
    (h.top += parseInt(g, 10) || 0), (h.left += parseInt(M, 10) || 0);
  }
  let p = Cr(r),
    m = hx(r);
  (p.width += m.left + m.right), (p.height += m.top + m.bottom);
  let S = px(o),
    P = jf(l),
    $ = jf(v),
    O = l.tagName === "BODY" ? Cr(v) : Wf(v, l);
  return (
    v.tagName === "HTML" &&
      l.tagName === "BODY" &&
      (($.scroll.top = 0), ($.scroll.left = 0)),
    vx(t, h, p, S, m, i, s, P, $, O, a, u, C, c, d, f)
  );
}
function Cr(e) {
  let { top: t, left: n, width: r, height: o } = e.getBoundingClientRect(),
    {
      scrollTop: i,
      scrollLeft: s,
      clientTop: l,
      clientLeft: a,
    } = document.documentElement;
  return { top: t + i - l, left: n + s - a, width: r, height: o };
}
function Wf(e, t) {
  let n = window.getComputedStyle(e),
    r;
  if (n.position === "fixed") {
    let { top: o, left: i, width: s, height: l } = e.getBoundingClientRect();
    r = { top: o, left: i, width: s, height: l };
  } else {
    r = Cr(e);
    let o = Cr(t),
      i = window.getComputedStyle(t);
    (o.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop),
      (o.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft),
      (r.top -= o.top),
      (r.left -= o.left);
  }
  return (
    (r.top -= parseInt(n.marginTop, 10) || 0),
    (r.left -= parseInt(n.marginLeft, 10) || 0),
    r
  );
}
function yx(e) {
  let t = e.offsetParent;
  if (
    (t &&
      t === document.body &&
      window.getComputedStyle(t).position === "static" &&
      !Uf(t) &&
      (t = document.documentElement),
    t == null)
  )
    for (t = e.parentElement; t && !Uf(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function Uf(e) {
  let t = window.getComputedStyle(e);
  return (
    t.transform !== "none" ||
    /transform|perspective/.test(t.willChange) ||
    t.filter !== "none" ||
    t.contain === "paint" ||
    ("backdropFilter" in t && t.backdropFilter !== "none") ||
    ("WebkitBackdropFilter" in t && t.WebkitBackdropFilter !== "none")
  );
}
const Dv = new WeakMap();
function wx(e) {
  let { triggerRef: t, isOpen: n, onClose: r } = e;
  w.useEffect(() => {
    if (!n || r === null) return;
    let o = (i) => {
      let s = i.target;
      if (!t.current || (s instanceof Node && !s.contains(t.current))) return;
      let l = r || Dv.get(t.current);
      l && l();
    };
    return (
      window.addEventListener("scroll", o, !0),
      () => {
        window.removeEventListener("scroll", o, !0);
      }
    );
  }, [n, r, t]);
}
let ve = typeof document < "u" && window.visualViewport;
function bx(e) {
  let { direction: t } = Pv(),
    {
      arrowSize: n = 0,
      targetRef: r,
      overlayRef: o,
      scrollRef: i = o,
      placement: s = "bottom",
      containerPadding: l = 12,
      shouldFlip: a = !0,
      boundaryElement: u = typeof document < "u" ? document.body : null,
      offset: c = 0,
      crossOffset: d = 0,
      shouldUpdatePosition: f = !0,
      isOpen: v = !0,
      onClose: y,
      maxHeight: b,
      arrowBoundaryOffset: C = 0,
    } = e,
    [h, p] = w.useState({
      position: {},
      arrowOffsetLeft: void 0,
      arrowOffsetTop: void 0,
      maxHeight: void 0,
      placement: void 0,
    }),
    m = [f, s, o.current, r.current, i.current, l, a, u, c, d, v, t, b, C, n],
    S = w.useRef(ve == null ? void 0 : ve.scale);
  w.useEffect(() => {
    v && (S.current = ve == null ? void 0 : ve.scale);
  }, [v]);
  let P = w.useCallback(() => {
    if (
      f === !1 ||
      !v ||
      !o.current ||
      !r.current ||
      !i.current ||
      !u ||
      (ve == null ? void 0 : ve.scale) !== S.current
    )
      return;
    let g = o.current;
    if (!b && o.current) {
      var M;
      (g.style.top = "0px"), (g.style.bottom = "");
      var I;
      g.style.maxHeight =
        ((I =
          (M = window.visualViewport) === null || M === void 0
            ? void 0
            : M.height) !== null && I !== void 0
          ? I
          : window.innerHeight) + "px";
    }
    let R = gx({
      placement: Sx(s, t),
      overlayNode: o.current,
      targetNode: r.current,
      scrollNode: i.current,
      padding: l,
      shouldFlip: a,
      boundaryElement: u,
      offset: c,
      crossOffset: d,
      maxHeight: b,
      arrowSize: n,
      arrowBoundaryOffset: C,
    });
    (g.style.top = ""),
      (g.style.bottom = ""),
      Object.keys(R.position).forEach(
        (_) => (g.style[_] = R.position[_] + "px")
      ),
      (g.style.maxHeight = R.maxHeight != null ? R.maxHeight + "px" : void 0),
      p(R);
  }, m);
  be(P, m), xx(P), Iv({ ref: o, onResize: P });
  let $ = w.useRef(!1);
  be(() => {
    let g,
      M = () => {
        ($.current = !0),
          clearTimeout(g),
          (g = setTimeout(() => {
            $.current = !1;
          }, 500)),
          P();
      },
      I = () => {
        $.current && M();
      };
    return (
      ve == null || ve.addEventListener("resize", M),
      ve == null || ve.addEventListener("scroll", I),
      () => {
        ve == null || ve.removeEventListener("resize", M),
          ve == null || ve.removeEventListener("scroll", I);
      }
    );
  }, [P]);
  let O = w.useCallback(() => {
    $.current || y();
  }, [y, $]);
  return (
    wx({ triggerRef: r, isOpen: v, onClose: y && O }),
    {
      overlayProps: {
        style: {
          position: "absolute",
          zIndex: 1e5,
          ...h.position,
          maxHeight: h.maxHeight,
        },
      },
      placement: h.placement,
      arrowProps: {
        "aria-hidden": "true",
        role: "presentation",
        style: { left: h.arrowOffsetLeft, top: h.arrowOffsetTop },
      },
      updatePosition: P,
    }
  );
}
function xx(e) {
  be(
    () => (
      window.addEventListener("resize", e, !1),
      () => {
        window.removeEventListener("resize", e, !1);
      }
    ),
    [e]
  );
}
function Sx(e, t) {
  return t === "rtl"
    ? e.replace("start", "right").replace("end", "left")
    : e.replace("start", "left").replace("end", "right");
}
let mr = "default",
  hu = "",
  es = new WeakMap();
function Kf(e) {
  if (Tv()) {
    if (mr === "default") {
      const t = ae(e);
      (hu = t.documentElement.style.webkitUserSelect),
        (t.documentElement.style.webkitUserSelect = "none");
    }
    mr = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) &&
      (es.set(e, e.style.userSelect), (e.style.userSelect = "none"));
}
function Mi(e) {
  if (Tv()) {
    if (mr !== "disabled") return;
    (mr = "restoring"),
      setTimeout(() => {
        Ov(() => {
          if (mr === "restoring") {
            const t = ae(e);
            t.documentElement.style.webkitUserSelect === "none" &&
              (t.documentElement.style.webkitUserSelect = hu || ""),
              (hu = ""),
              (mr = "default");
          }
        });
      }, 300);
  } else if (
    (e instanceof HTMLElement || e instanceof SVGElement) &&
    e &&
    es.has(e)
  ) {
    let t = es.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t),
      e.getAttribute("style") === "" && e.removeAttribute("style"),
      es.delete(e);
  }
}
const Dc = J.createContext({ register: () => {} });
Dc.displayName = "PressResponderContext";
function Cx(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function jv(e, t, n) {
  if (!t.has(e))
    throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Px(e, t) {
  var n = jv(e, t, "get");
  return Cx(e, n);
}
function Ex(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Gf(e, t, n) {
  var r = jv(e, t, "set");
  return Ex(e, r, n), n;
}
function $x(e) {
  let t = w.useContext(Dc);
  if (t) {
    let { register: n, ...r } = t;
    (e = fe(r, e)), n();
  }
  return Fv(t, e.ref), e;
}
var Ni = new WeakMap();
class Li {
  continuePropagation() {
    Gf(this, Ni, !1);
  }
  get shouldStopPropagation() {
    return Px(this, Ni);
  }
  constructor(t, n, r) {
    Bb(this, Ni, { writable: !0, value: void 0 }),
      Gf(this, Ni, !0),
      (this.type = t),
      (this.pointerType = n),
      (this.target = r.currentTarget),
      (this.shiftKey = r.shiftKey),
      (this.metaKey = r.metaKey),
      (this.ctrlKey = r.ctrlKey),
      (this.altKey = r.altKey);
  }
}
const Yf = Symbol("linkClicked");
function zv(e) {
  let {
      onPress: t,
      onPressChange: n,
      onPressStart: r,
      onPressEnd: o,
      onPressUp: i,
      isDisabled: s,
      isPressed: l,
      preventFocusOnPress: a,
      shouldCancelOnPointerExit: u,
      allowTextSelectionOnPress: c,
      ref: d,
      ...f
    } = $x(e),
    [v, y] = w.useState(!1),
    b = w.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: C, removeAllGlobalListeners: h } = ax(),
    p = $t((g, M) => {
      let I = b.current;
      if (s || I.didFirePressStart) return !1;
      let R = !0;
      if (((I.isTriggeringEvent = !0), r)) {
        let _ = new Li("pressstart", M, g);
        r(_), (R = _.shouldStopPropagation);
      }
      return (
        n && n(!0),
        (I.isTriggeringEvent = !1),
        (I.didFirePressStart = !0),
        y(!0),
        R
      );
    }),
    m = $t((g, M, I = !0) => {
      let R = b.current;
      if (!R.didFirePressStart) return !1;
      (R.ignoreClickAfterPress = !0),
        (R.didFirePressStart = !1),
        (R.isTriggeringEvent = !0);
      let _ = !0;
      if (o) {
        let E = new Li("pressend", M, g);
        o(E), (_ = E.shouldStopPropagation);
      }
      if ((n && n(!1), y(!1), t && I && !s)) {
        let E = new Li("press", M, g);
        t(E), _ && (_ = E.shouldStopPropagation);
      }
      return (R.isTriggeringEvent = !1), _;
    }),
    S = $t((g, M) => {
      let I = b.current;
      if (s) return !1;
      if (i) {
        I.isTriggeringEvent = !0;
        let R = new Li("pressup", M, g);
        return i(R), (I.isTriggeringEvent = !1), R.shouldStopPropagation;
      }
      return !0;
    }),
    P = $t((g) => {
      let M = b.current;
      M.isPressed &&
        M.target &&
        (M.isOverTarget &&
          M.pointerType != null &&
          m(At(M.target, g), M.pointerType, !1),
        (M.isPressed = !1),
        (M.isOverTarget = !1),
        (M.activePointerId = null),
        (M.pointerType = null),
        h(),
        c || Mi(M.target));
    }),
    $ = $t((g) => {
      u && P(g);
    }),
    O = w.useMemo(() => {
      let g = b.current,
        M = {
          onKeyDown(R) {
            if (
              ta(R.nativeEvent, R.currentTarget) &&
              R.currentTarget.contains(R.target)
            ) {
              var _;
              Xf(R.target, R.key) && R.preventDefault();
              let E = !0;
              if (!g.isPressed && !R.repeat) {
                (g.target = R.currentTarget),
                  (g.isPressed = !0),
                  (E = p(R, "keyboard"));
                let T = R.currentTarget,
                  V = (j) => {
                    ta(j, T) &&
                      !j.repeat &&
                      T.contains(j.target) &&
                      g.target &&
                      S(At(g.target, j), "keyboard");
                  };
                C(ae(R.currentTarget), "keyup", dl(V, I), !0);
              }
              E && R.stopPropagation(),
                R.metaKey &&
                  Ho() &&
                  ((_ = g.metaKeyEvents) === null ||
                    _ === void 0 ||
                    _.set(R.key, R.nativeEvent));
            } else R.key === "Meta" && (g.metaKeyEvents = new Map());
          },
          onClick(R) {
            if (
              !(R && !R.currentTarget.contains(R.target)) &&
              R &&
              R.button === 0 &&
              !g.isTriggeringEvent &&
              !Hn.isOpening
            ) {
              let _ = !0;
              if (
                (s && R.preventDefault(),
                !g.ignoreClickAfterPress &&
                  !g.ignoreEmulatedMouseEvents &&
                  !g.isPressed &&
                  (g.pointerType === "virtual" || du(R.nativeEvent)))
              ) {
                !s && !a && Mn(R.currentTarget);
                let E = p(R, "virtual"),
                  T = S(R, "virtual"),
                  V = m(R, "virtual");
                _ = E && T && V;
              }
              (g.ignoreEmulatedMouseEvents = !1),
                (g.ignoreClickAfterPress = !1),
                _ && R.stopPropagation();
            }
          },
        },
        I = (R) => {
          var _;
          if (g.isPressed && g.target && ta(R, g.target)) {
            var E;
            Xf(R.target, R.key) && R.preventDefault();
            let V = R.target;
            m(At(g.target, R), "keyboard", g.target.contains(V)),
              h(),
              R.key !== "Enter" &&
                jc(g.target) &&
                g.target.contains(V) &&
                !R[Yf] &&
                ((R[Yf] = !0), Hn(g.target, R, !1)),
              (g.isPressed = !1),
              (E = g.metaKeyEvents) === null || E === void 0 || E.delete(R.key);
          } else if (
            R.key === "Meta" &&
            !((_ = g.metaKeyEvents) === null || _ === void 0) &&
            _.size
          ) {
            var T;
            let V = g.metaKeyEvents;
            g.metaKeyEvents = void 0;
            for (let j of V.values())
              (T = g.target) === null ||
                T === void 0 ||
                T.dispatchEvent(new KeyboardEvent("keyup", j));
          }
        };
      if (typeof PointerEvent < "u") {
        (M.onPointerDown = (T) => {
          if (T.button !== 0 || !T.currentTarget.contains(T.target)) return;
          if (dx(T.nativeEvent)) {
            g.pointerType = "virtual";
            return;
          }
          na(T.currentTarget) && T.preventDefault(),
            (g.pointerType = T.pointerType);
          let V = !0;
          g.isPressed ||
            ((g.isPressed = !0),
            (g.isOverTarget = !0),
            (g.activePointerId = T.pointerId),
            (g.target = T.currentTarget),
            !s && !a && Mn(T.currentTarget),
            c || Kf(g.target),
            (V = p(T, g.pointerType)),
            C(ae(T.currentTarget), "pointermove", R, !1),
            C(ae(T.currentTarget), "pointerup", _, !1),
            C(ae(T.currentTarget), "pointercancel", E, !1)),
            V && T.stopPropagation();
        }),
          (M.onMouseDown = (T) => {
            T.currentTarget.contains(T.target) &&
              T.button === 0 &&
              (na(T.currentTarget) && T.preventDefault(), T.stopPropagation());
          }),
          (M.onPointerUp = (T) => {
            !T.currentTarget.contains(T.target) ||
              g.pointerType === "virtual" ||
              (T.button === 0 &&
                Zn(T, T.currentTarget) &&
                S(T, g.pointerType || T.pointerType));
          });
        let R = (T) => {
            T.pointerId === g.activePointerId &&
              (g.target && Zn(T, g.target)
                ? !g.isOverTarget &&
                  g.pointerType != null &&
                  ((g.isOverTarget = !0), p(At(g.target, T), g.pointerType))
                : g.target &&
                  g.isOverTarget &&
                  g.pointerType != null &&
                  ((g.isOverTarget = !1),
                  m(At(g.target, T), g.pointerType, !1),
                  $(T)));
          },
          _ = (T) => {
            T.pointerId === g.activePointerId &&
              g.isPressed &&
              T.button === 0 &&
              g.target &&
              (Zn(T, g.target) && g.pointerType != null
                ? m(At(g.target, T), g.pointerType)
                : g.isOverTarget &&
                  g.pointerType != null &&
                  m(At(g.target, T), g.pointerType, !1),
              (g.isPressed = !1),
              (g.isOverTarget = !1),
              (g.activePointerId = null),
              (g.pointerType = null),
              h(),
              c || Mi(g.target));
          },
          E = (T) => {
            P(T);
          };
        M.onDragStart = (T) => {
          T.currentTarget.contains(T.target) && P(T);
        };
      } else {
        (M.onMouseDown = (E) => {
          if (E.button !== 0 || !E.currentTarget.contains(E.target)) return;
          if (
            (na(E.currentTarget) && E.preventDefault(),
            g.ignoreEmulatedMouseEvents)
          ) {
            E.stopPropagation();
            return;
          }
          (g.isPressed = !0),
            (g.isOverTarget = !0),
            (g.target = E.currentTarget),
            (g.pointerType = du(E.nativeEvent) ? "virtual" : "mouse"),
            !s && !a && Mn(E.currentTarget),
            p(E, g.pointerType) && E.stopPropagation(),
            C(ae(E.currentTarget), "mouseup", R, !1);
        }),
          (M.onMouseEnter = (E) => {
            if (!E.currentTarget.contains(E.target)) return;
            let T = !0;
            g.isPressed &&
              !g.ignoreEmulatedMouseEvents &&
              g.pointerType != null &&
              ((g.isOverTarget = !0), (T = p(E, g.pointerType))),
              T && E.stopPropagation();
          }),
          (M.onMouseLeave = (E) => {
            if (!E.currentTarget.contains(E.target)) return;
            let T = !0;
            g.isPressed &&
              !g.ignoreEmulatedMouseEvents &&
              g.pointerType != null &&
              ((g.isOverTarget = !1), (T = m(E, g.pointerType, !1)), $(E)),
              T && E.stopPropagation();
          }),
          (M.onMouseUp = (E) => {
            E.currentTarget.contains(E.target) &&
              !g.ignoreEmulatedMouseEvents &&
              E.button === 0 &&
              S(E, g.pointerType || "mouse");
          });
        let R = (E) => {
          if (E.button === 0) {
            if (((g.isPressed = !1), h(), g.ignoreEmulatedMouseEvents)) {
              g.ignoreEmulatedMouseEvents = !1;
              return;
            }
            g.target && Zn(E, g.target) && g.pointerType != null
              ? m(At(g.target, E), g.pointerType)
              : g.target &&
                g.isOverTarget &&
                g.pointerType != null &&
                m(At(g.target, E), g.pointerType, !1),
              (g.isOverTarget = !1);
          }
        };
        (M.onTouchStart = (E) => {
          if (!E.currentTarget.contains(E.target)) return;
          let T = kx(E.nativeEvent);
          if (!T) return;
          (g.activePointerId = T.identifier),
            (g.ignoreEmulatedMouseEvents = !0),
            (g.isOverTarget = !0),
            (g.isPressed = !0),
            (g.target = E.currentTarget),
            (g.pointerType = "touch"),
            !s && !a && Mn(E.currentTarget),
            c || Kf(g.target),
            p(E, g.pointerType) && E.stopPropagation(),
            C(gt(E.currentTarget), "scroll", _, !0);
        }),
          (M.onTouchMove = (E) => {
            if (!E.currentTarget.contains(E.target)) return;
            if (!g.isPressed) {
              E.stopPropagation();
              return;
            }
            let T = Qf(E.nativeEvent, g.activePointerId),
              V = !0;
            T && Zn(T, E.currentTarget)
              ? !g.isOverTarget &&
                g.pointerType != null &&
                ((g.isOverTarget = !0), (V = p(E, g.pointerType)))
              : g.isOverTarget &&
                g.pointerType != null &&
                ((g.isOverTarget = !1), (V = m(E, g.pointerType, !1)), $(E)),
              V && E.stopPropagation();
          }),
          (M.onTouchEnd = (E) => {
            if (!E.currentTarget.contains(E.target)) return;
            if (!g.isPressed) {
              E.stopPropagation();
              return;
            }
            let T = Qf(E.nativeEvent, g.activePointerId),
              V = !0;
            T && Zn(T, E.currentTarget) && g.pointerType != null
              ? (S(E, g.pointerType), (V = m(E, g.pointerType)))
              : g.isOverTarget &&
                g.pointerType != null &&
                (V = m(E, g.pointerType, !1)),
              V && E.stopPropagation(),
              (g.isPressed = !1),
              (g.activePointerId = null),
              (g.isOverTarget = !1),
              (g.ignoreEmulatedMouseEvents = !0),
              g.target && !c && Mi(g.target),
              h();
          }),
          (M.onTouchCancel = (E) => {
            E.currentTarget.contains(E.target) &&
              (E.stopPropagation(), g.isPressed && P(E));
          });
        let _ = (E) => {
          g.isPressed &&
            E.target.contains(g.target) &&
            P({
              currentTarget: g.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            });
        };
        M.onDragStart = (E) => {
          E.currentTarget.contains(E.target) && P(E);
        };
      }
      return M;
    }, [C, s, a, h, c, P, $, m, p, S]);
  return (
    w.useEffect(
      () => () => {
        var g;
        c || Mi((g = b.current.target) !== null && g !== void 0 ? g : void 0);
      },
      [c]
    ),
    { isPressed: l || v, pressProps: fe(f, O) }
  );
}
function jc(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function ta(e, t) {
  const { key: n, code: r } = e,
    o = t,
    i = o.getAttribute("role");
  return (
    (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") &&
    !(
      (o instanceof gt(o).HTMLInputElement && !Bv(o, n)) ||
      o instanceof gt(o).HTMLTextAreaElement ||
      o.isContentEditable
    ) &&
    !((i === "link" || (!i && jc(o))) && n !== "Enter")
  );
}
function kx(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Qf(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o.identifier === t) return o;
  }
  return null;
}
function At(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
  };
}
function Tx(e) {
  let t = 0,
    n = 0;
  return (
    e.width !== void 0
      ? (t = e.width / 2)
      : e.radiusX !== void 0 && (t = e.radiusX),
    e.height !== void 0
      ? (n = e.height / 2)
      : e.radiusY !== void 0 && (n = e.radiusY),
    {
      top: e.clientY - n,
      right: e.clientX + t,
      bottom: e.clientY + n,
      left: e.clientX - t,
    }
  );
}
function Mx(e, t) {
  return !(
    e.left > t.right ||
    t.left > e.right ||
    e.top > t.bottom ||
    t.top > e.bottom
  );
}
function Zn(e, t) {
  let n = t.getBoundingClientRect(),
    r = Tx(e);
  return Mx(n, r);
}
function na(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function Xf(e, t) {
  return e instanceof HTMLInputElement
    ? !Bv(e, t)
    : e instanceof HTMLButtonElement
    ? e.type !== "submit" && e.type !== "reset"
    : !jc(e);
}
const Nx = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Bv(e, t) {
  return e.type === "checkbox" || e.type === "radio"
    ? t === " "
    : Nx.has(e.type);
}
function Lx({ children: e }) {
  let t = w.useMemo(() => ({ register: () => {} }), []);
  return J.createElement(Dc.Provider, { value: t }, e);
}
class _x {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(t, n) {
    (this.nativeEvent = n),
      (this.target = n.target),
      (this.currentTarget = n.currentTarget),
      (this.relatedTarget = n.relatedTarget),
      (this.bubbles = n.bubbles),
      (this.cancelable = n.cancelable),
      (this.defaultPrevented = n.defaultPrevented),
      (this.eventPhase = n.eventPhase),
      (this.isTrusted = n.isTrusted),
      (this.timeStamp = n.timeStamp),
      (this.type = t);
  }
}
function Hv(e) {
  let t = w.useRef({ isFocused: !1, observer: null });
  be(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), (r.observer = null));
    };
  }, []);
  let n = $t((r) => {
    e == null || e(r);
  });
  return w.useCallback(
    (r) => {
      if (
        r.target instanceof HTMLButtonElement ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement ||
        r.target instanceof HTMLSelectElement
      ) {
        t.current.isFocused = !0;
        let o = r.target,
          i = (s) => {
            (t.current.isFocused = !1),
              o.disabled && n(new _x("blur", s)),
              t.current.observer &&
                (t.current.observer.disconnect(), (t.current.observer = null));
          };
        o.addEventListener("focusout", i, { once: !0 }),
          (t.current.observer = new MutationObserver(() => {
            if (t.current.isFocused && o.disabled) {
              var s;
              (s = t.current.observer) === null ||
                s === void 0 ||
                s.disconnect();
              let l =
                o === document.activeElement ? null : document.activeElement;
              o.dispatchEvent(new FocusEvent("blur", { relatedTarget: l })),
                o.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: l })
                );
            }
          })),
          t.current.observer.observe(o, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [n]
  );
}
function Wv(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const i = w.useCallback(
      (a) => {
        if (a.target === a.currentTarget) return r && r(a), o && o(!1), !0;
      },
      [r, o]
    ),
    s = Hv(i),
    l = w.useCallback(
      (a) => {
        const u = ae(a.target);
        a.target === a.currentTarget &&
          u.activeElement === a.target &&
          (n && n(a), o && o(!0), s(a));
      },
      [o, n, s]
    );
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? l : void 0,
      onBlur: !t && (r || o) ? i : void 0,
    },
  };
}
let jr = null,
  mu = new Set(),
  Co = new Map(),
  Wn = !1,
  vu = !1;
const Rx = { Tab: !0, Escape: !0 };
function zc(e, t) {
  for (let n of mu) n(e, t);
}
function Ax(e) {
  return !(
    e.metaKey ||
    (!Ho() && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function _s(e) {
  (Wn = !0), Ax(e) && ((jr = "keyboard"), zc("keyboard", e));
}
function lt(e) {
  (jr = "pointer"),
    (e.type === "mousedown" || e.type === "pointerdown") &&
      ((Wn = !0), zc("pointer", e));
}
function Uv(e) {
  du(e) && ((Wn = !0), (jr = "virtual"));
}
function Kv(e) {
  e.target === window ||
    e.target === document ||
    (!Wn && !vu && ((jr = "virtual"), zc("virtual", e)), (Wn = !1), (vu = !1));
}
function Gv() {
  (Wn = !1), (vu = !0);
}
function gu(e) {
  if (typeof window > "u" || Co.get(gt(e))) return;
  const t = gt(e),
    n = ae(e);
  let r = t.HTMLElement.prototype.focus;
  (t.HTMLElement.prototype.focus = function () {
    (Wn = !0), r.apply(this, arguments);
  }),
    n.addEventListener("keydown", _s, !0),
    n.addEventListener("keyup", _s, !0),
    n.addEventListener("click", Uv, !0),
    t.addEventListener("focus", Kv, !0),
    t.addEventListener("blur", Gv, !1),
    typeof PointerEvent < "u"
      ? (n.addEventListener("pointerdown", lt, !0),
        n.addEventListener("pointermove", lt, !0),
        n.addEventListener("pointerup", lt, !0))
      : (n.addEventListener("mousedown", lt, !0),
        n.addEventListener("mousemove", lt, !0),
        n.addEventListener("mouseup", lt, !0)),
    t.addEventListener(
      "beforeunload",
      () => {
        Yv(e);
      },
      { once: !0 }
    ),
    Co.set(t, { focus: r });
}
const Yv = (e, t) => {
  const n = gt(e),
    r = ae(e);
  t && r.removeEventListener("DOMContentLoaded", t),
    Co.has(n) &&
      ((n.HTMLElement.prototype.focus = Co.get(n).focus),
      r.removeEventListener("keydown", _s, !0),
      r.removeEventListener("keyup", _s, !0),
      r.removeEventListener("click", Uv, !0),
      n.removeEventListener("focus", Kv, !0),
      n.removeEventListener("blur", Gv, !1),
      typeof PointerEvent < "u"
        ? (r.removeEventListener("pointerdown", lt, !0),
          r.removeEventListener("pointermove", lt, !0),
          r.removeEventListener("pointerup", lt, !0))
        : (r.removeEventListener("mousedown", lt, !0),
          r.removeEventListener("mousemove", lt, !0),
          r.removeEventListener("mouseup", lt, !0)),
      Co.delete(n));
};
function Ox(e) {
  const t = ae(e);
  let n;
  return (
    t.readyState !== "loading"
      ? gu(e)
      : ((n = () => {
          gu(e);
        }),
        t.addEventListener("DOMContentLoaded", n)),
    () => Yv(e, n)
  );
}
typeof document < "u" && Ox();
function Qv() {
  return jr !== "pointer";
}
function Ix() {
  return jr;
}
const Fx = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Vx(e, t, n) {
  var r;
  const o =
      typeof window < "u"
        ? gt(n == null ? void 0 : n.target).HTMLInputElement
        : HTMLInputElement,
    i =
      typeof window < "u"
        ? gt(n == null ? void 0 : n.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    s =
      typeof window < "u"
        ? gt(n == null ? void 0 : n.target).HTMLElement
        : HTMLElement,
    l =
      typeof window < "u"
        ? gt(n == null ? void 0 : n.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (e =
      e ||
      ((n == null ? void 0 : n.target) instanceof o &&
        !Fx.has(
          n == null || (r = n.target) === null || r === void 0 ? void 0 : r.type
        )) ||
      (n == null ? void 0 : n.target) instanceof i ||
      ((n == null ? void 0 : n.target) instanceof s &&
        (n == null ? void 0 : n.target.isContentEditable))),
    !(e && t === "keyboard" && n instanceof l && !Rx[n.key])
  );
}
function Dx(e, t, n) {
  gu(),
    w.useEffect(() => {
      let r = (o, i) => {
        Vx(!!(n != null && n.isTextInput), o, i) && e(Qv());
      };
      return (
        mu.add(r),
        () => {
          mu.delete(r);
        }
      );
    }, t);
}
function Bc(e) {
  let {
      isDisabled: t,
      onBlurWithin: n,
      onFocusWithin: r,
      onFocusWithinChange: o,
    } = e,
    i = w.useRef({ isFocusWithin: !1 }),
    s = w.useCallback(
      (u) => {
        i.current.isFocusWithin &&
          !u.currentTarget.contains(u.relatedTarget) &&
          ((i.current.isFocusWithin = !1), n && n(u), o && o(!1));
      },
      [n, o, i]
    ),
    l = Hv(s),
    a = w.useCallback(
      (u) => {
        !i.current.isFocusWithin &&
          document.activeElement === u.target &&
          (r && r(u), o && o(!0), (i.current.isFocusWithin = !0), l(u));
      },
      [r, o, l]
    );
  return t
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: a, onBlur: s } };
}
let Rs = !1,
  ra = 0;
function yu() {
  (Rs = !0),
    setTimeout(() => {
      Rs = !1;
    }, 50);
}
function Zf(e) {
  e.pointerType === "touch" && yu();
}
function jx() {
  if (!(typeof document > "u"))
    return (
      typeof PointerEvent < "u"
        ? document.addEventListener("pointerup", Zf)
        : document.addEventListener("touchend", yu),
      ra++,
      () => {
        ra--,
          !(ra > 0) &&
            (typeof PointerEvent < "u"
              ? document.removeEventListener("pointerup", Zf)
              : document.removeEventListener("touchend", yu));
      }
    );
}
function Xv(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
    [i, s] = w.useState(!1),
    l = w.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  w.useEffect(jx, []);
  let { hoverProps: a, triggerHoverEnd: u } = w.useMemo(() => {
    let c = (v, y) => {
        if (
          ((l.pointerType = y),
          o ||
            y === "touch" ||
            l.isHovered ||
            !v.currentTarget.contains(v.target))
        )
          return;
        l.isHovered = !0;
        let b = v.currentTarget;
        (l.target = b),
          t && t({ type: "hoverstart", target: b, pointerType: y }),
          n && n(!0),
          s(!0);
      },
      d = (v, y) => {
        if (
          ((l.pointerType = ""),
          (l.target = null),
          y === "touch" || !l.isHovered)
        )
          return;
        l.isHovered = !1;
        let b = v.currentTarget;
        r && r({ type: "hoverend", target: b, pointerType: y }),
          n && n(!1),
          s(!1);
      },
      f = {};
    return (
      typeof PointerEvent < "u"
        ? ((f.onPointerEnter = (v) => {
            (Rs && v.pointerType === "mouse") || c(v, v.pointerType);
          }),
          (f.onPointerLeave = (v) => {
            !o && v.currentTarget.contains(v.target) && d(v, v.pointerType);
          }))
        : ((f.onTouchStart = () => {
            l.ignoreEmulatedMouseEvents = !0;
          }),
          (f.onMouseEnter = (v) => {
            !l.ignoreEmulatedMouseEvents && !Rs && c(v, "mouse"),
              (l.ignoreEmulatedMouseEvents = !1);
          }),
          (f.onMouseLeave = (v) => {
            !o && v.currentTarget.contains(v.target) && d(v, "mouse");
          })),
      { hoverProps: f, triggerHoverEnd: d }
    );
  }, [t, n, r, o, l]);
  return (
    w.useEffect(() => {
      o && u({ currentTarget: l.target }, l.pointerType);
    }, [o]),
    { hoverProps: a, isHovered: i }
  );
}
function zx(e) {
  let {
      ref: t,
      onInteractOutside: n,
      isDisabled: r,
      onInteractOutsideStart: o,
    } = e,
    i = w.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
    s = $t((a) => {
      n && _i(a, t) && (o && o(a), (i.current.isPointerDown = !0));
    }),
    l = $t((a) => {
      n && n(a);
    });
  w.useEffect(() => {
    let a = i.current;
    if (r) return;
    const u = t.current,
      c = ae(u);
    if (typeof PointerEvent < "u") {
      let d = (f) => {
        a.isPointerDown && _i(f, t) && l(f), (a.isPointerDown = !1);
      };
      return (
        c.addEventListener("pointerdown", s, !0),
        c.addEventListener("pointerup", d, !0),
        () => {
          c.removeEventListener("pointerdown", s, !0),
            c.removeEventListener("pointerup", d, !0);
        }
      );
    } else {
      let d = (v) => {
          a.ignoreEmulatedMouseEvents
            ? (a.ignoreEmulatedMouseEvents = !1)
            : a.isPointerDown && _i(v, t) && l(v),
            (a.isPointerDown = !1);
        },
        f = (v) => {
          (a.ignoreEmulatedMouseEvents = !0),
            a.isPointerDown && _i(v, t) && l(v),
            (a.isPointerDown = !1);
        };
      return (
        c.addEventListener("mousedown", s, !0),
        c.addEventListener("mouseup", d, !0),
        c.addEventListener("touchstart", s, !0),
        c.addEventListener("touchend", f, !0),
        () => {
          c.removeEventListener("mousedown", s, !0),
            c.removeEventListener("mouseup", d, !0),
            c.removeEventListener("touchstart", s, !0),
            c.removeEventListener("touchend", f, !0);
        }
      );
    }
  }, [t, r, s, l]);
}
function _i(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const n = e.target.ownerDocument;
    if (
      !n ||
      !n.documentElement.contains(e.target) ||
      e.target.closest("[data-react-aria-top-layer]")
    )
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function qf(e) {
  if (!e) return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        console.error(
          "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
        );
      },
      continuePropagation() {
        t = !1;
      },
    };
    e(r), t && n.stopPropagation();
  };
}
function Bx(e) {
  return {
    keyboardProps: e.isDisabled
      ? {}
      : { onKeyDown: qf(e.onKeyDown), onKeyUp: qf(e.onKeyUp) },
  };
}
function As(e) {
  const t = ae(e);
  if (Ix() === "virtual") {
    let n = t.activeElement;
    Ov(() => {
      t.activeElement === n && e.isConnected && Mn(e);
    });
  } else Mn(e);
}
function Hx(e) {
  const t = gt(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style,
    o = n !== "none" && r !== "hidden" && r !== "collapse";
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: s, visibility: l } = i(e);
    o = s !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function Wx(e, t) {
  return (
    !e.hasAttribute("hidden") &&
    !e.hasAttribute("data-react-aria-prevent-focus") &&
    (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY"
      ? e.hasAttribute("open")
      : !0)
  );
}
function Zv(e, t) {
  return (
    e.nodeName !== "#comment" &&
    Hx(e) &&
    Wx(e, t) &&
    (!e.parentElement || Zv(e.parentElement, e))
  );
}
const Jf = J.createContext(null);
let re = null;
function Ux(e) {
  let { children: t, contain: n, restoreFocus: r, autoFocus: o } = e,
    i = w.useRef(null),
    s = w.useRef(null),
    l = w.useRef([]),
    { parentNode: a } = w.useContext(Jf) || {},
    u = w.useMemo(() => new wu({ scopeRef: l }), [l]);
  be(() => {
    let f = a || ye.root;
    if (ye.getTreeNode(f.scopeRef) && re && !Is(re, f.scopeRef)) {
      let v = ye.getTreeNode(re);
      v && (f = v);
    }
    f.addChild(u), ye.addNode(u);
  }, [u, a]),
    be(() => {
      let f = ye.getTreeNode(l);
      f && (f.contain = !!n);
    }, [n]),
    be(() => {
      var f;
      let v = (f = i.current) === null || f === void 0 ? void 0 : f.nextSibling,
        y = [];
      for (; v && v !== s.current; ) y.push(v), (v = v.nextSibling);
      l.current = y;
    }, [t]),
    qx(l, r, n),
    Qx(l, n),
    e2(l, r, n),
    Zx(l, o),
    w.useEffect(() => {
      const f = ae(l.current ? l.current[0] : void 0).activeElement;
      let v = null;
      if (Oe(f, l.current)) {
        for (let y of ye.traverse())
          y.scopeRef && Oe(f, y.scopeRef.current) && (v = y);
        v === ye.getTreeNode(l) && (re = v.scopeRef);
      }
    }, [l]),
    be(
      () => () => {
        var f, v, y;
        let b =
          (y =
            (v = ye.getTreeNode(l)) === null ||
            v === void 0 ||
            (f = v.parent) === null ||
            f === void 0
              ? void 0
              : f.scopeRef) !== null && y !== void 0
            ? y
            : null;
        (l === re || Is(l, re)) && (!b || ye.getTreeNode(b)) && (re = b),
          ye.removeTreeNode(l);
      },
      [l]
    );
  let c = w.useMemo(() => Kx(l), []),
    d = w.useMemo(() => ({ focusManager: c, parentNode: u }), [u, c]);
  return J.createElement(
    Jf.Provider,
    { value: d },
    J.createElement("span", {
      "data-focus-scope-start": !0,
      hidden: !0,
      ref: i,
    }),
    t,
    J.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: s })
  );
}
function Kx(e) {
  return {
    focusNext(t = {}) {
      let n = e.current,
        { from: r, tabbable: o, wrap: i, accept: s } = t,
        l = r || ae(n[0]).activeElement,
        a = n[0].previousElementSibling,
        u = Nn(n),
        c = rn(u, { tabbable: o, accept: s }, n);
      c.currentNode = Oe(l, n) ? l : a;
      let d = c.nextNode();
      return (
        !d && i && ((c.currentNode = a), (d = c.nextNode())), d && jt(d, !0), d
      );
    },
    focusPrevious(t = {}) {
      let n = e.current,
        { from: r, tabbable: o, wrap: i, accept: s } = t,
        l = r || ae(n[0]).activeElement,
        a = n[n.length - 1].nextElementSibling,
        u = Nn(n),
        c = rn(u, { tabbable: o, accept: s }, n);
      c.currentNode = Oe(l, n) ? l : a;
      let d = c.previousNode();
      return (
        !d && i && ((c.currentNode = a), (d = c.previousNode())),
        d && jt(d, !0),
        d
      );
    },
    focusFirst(t = {}) {
      let n = e.current,
        { tabbable: r, accept: o } = t,
        i = Nn(n),
        s = rn(i, { tabbable: r, accept: o }, n);
      s.currentNode = n[0].previousElementSibling;
      let l = s.nextNode();
      return l && jt(l, !0), l;
    },
    focusLast(t = {}) {
      let n = e.current,
        { tabbable: r, accept: o } = t,
        i = Nn(n),
        s = rn(i, { tabbable: r, accept: o }, n);
      s.currentNode = n[n.length - 1].nextElementSibling;
      let l = s.previousNode();
      return l && jt(l, !0), l;
    },
  };
}
const Hc = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]",
  ],
  Gx = Hc.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Hc.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Yx = Hc.join(':not([hidden]):not([tabindex="-1"]),');
function Nn(e) {
  return e[0].parentElement;
}
function fo(e) {
  let t = ye.getTreeNode(re);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Qx(e, t) {
  let n = w.useRef(),
    r = w.useRef();
  be(() => {
    let o = e.current;
    if (!t) {
      r.current && (cancelAnimationFrame(r.current), (r.current = void 0));
      return;
    }
    const i = ae(o ? o[0] : void 0);
    let s = (u) => {
        if (
          u.key !== "Tab" ||
          u.altKey ||
          u.ctrlKey ||
          u.metaKey ||
          !fo(e) ||
          u.isComposing
        )
          return;
        let c = i.activeElement,
          d = e.current;
        if (!d || !Oe(c, d)) return;
        let f = Nn(d),
          v = rn(f, { tabbable: !0 }, d);
        if (!c) return;
        v.currentNode = c;
        let y = u.shiftKey ? v.previousNode() : v.nextNode();
        y ||
          ((v.currentNode = u.shiftKey
            ? d[d.length - 1].nextElementSibling
            : d[0].previousElementSibling),
          (y = u.shiftKey ? v.previousNode() : v.nextNode())),
          u.preventDefault(),
          y && jt(y, !0);
      },
      l = (u) => {
        (!re || Is(re, e)) && Oe(u.target, e.current)
          ? ((re = e), (n.current = u.target))
          : fo(e) && !Os(u.target, e)
          ? n.current
            ? n.current.focus()
            : re && re.current && Fs(re.current)
          : fo(e) && (n.current = u.target);
      },
      a = (u) => {
        r.current && cancelAnimationFrame(r.current),
          (r.current = requestAnimationFrame(() => {
            if (i.activeElement && fo(e) && !Os(i.activeElement, e))
              if (((re = e), i.body.contains(u.target))) {
                var c;
                (n.current = u.target),
                  (c = n.current) === null || c === void 0 || c.focus();
              } else re.current && Fs(re.current);
          }));
      };
    return (
      i.addEventListener("keydown", s, !1),
      i.addEventListener("focusin", l, !1),
      o == null || o.forEach((u) => u.addEventListener("focusin", l, !1)),
      o == null || o.forEach((u) => u.addEventListener("focusout", a, !1)),
      () => {
        i.removeEventListener("keydown", s, !1),
          i.removeEventListener("focusin", l, !1),
          o == null ||
            o.forEach((u) => u.removeEventListener("focusin", l, !1)),
          o == null ||
            o.forEach((u) => u.removeEventListener("focusout", a, !1));
      }
    );
  }, [e, t]),
    be(
      () => () => {
        r.current && cancelAnimationFrame(r.current);
      },
      [r]
    );
}
function qv(e) {
  return Os(e);
}
function Oe(e, t) {
  return !e || !t ? !1 : t.some((n) => n.contains(e));
}
function Os(e, t = null) {
  if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: n } of ye.traverse(ye.getTreeNode(t)))
    if (n && Oe(e, n.current)) return !0;
  return !1;
}
function Xx(e) {
  return Os(e, re);
}
function Is(e, t) {
  var n;
  let r = (n = ye.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
  for (; r; ) {
    if (r.scopeRef === e) return !0;
    r = r.parent;
  }
  return !1;
}
function jt(e, t = !1) {
  if (e != null && !t)
    try {
      As(e);
    } catch {}
  else if (e != null)
    try {
      e.focus();
    } catch {}
}
function Fs(e, t = !0) {
  let n = e[0].previousElementSibling,
    r = Nn(e),
    o = rn(r, { tabbable: t }, e);
  o.currentNode = n;
  let i = o.nextNode();
  t &&
    !i &&
    ((r = Nn(e)),
    (o = rn(r, { tabbable: !1 }, e)),
    (o.currentNode = n),
    (i = o.nextNode())),
    jt(i);
}
function Zx(e, t) {
  const n = J.useRef(t);
  w.useEffect(() => {
    if (n.current) {
      re = e;
      const r = ae(e.current ? e.current[0] : void 0);
      !Oe(r.activeElement, re.current) && e.current && Fs(e.current);
    }
    n.current = !1;
  }, [e]);
}
function qx(e, t, n) {
  be(() => {
    if (t || n) return;
    let r = e.current;
    const o = ae(r ? r[0] : void 0);
    let i = (s) => {
      let l = s.target;
      Oe(l, e.current) ? (re = e) : qv(l) || (re = null);
    };
    return (
      o.addEventListener("focusin", i, !1),
      r == null || r.forEach((s) => s.addEventListener("focusin", i, !1)),
      () => {
        o.removeEventListener("focusin", i, !1),
          r == null ||
            r.forEach((s) => s.removeEventListener("focusin", i, !1));
      }
    );
  }, [e, t, n]);
}
function Jx(e) {
  let t = ye.getTreeNode(re);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function e2(e, t, n) {
  const r = w.useRef(
    typeof document < "u"
      ? ae(e.current ? e.current[0] : void 0).activeElement
      : null
  );
  be(() => {
    let o = e.current;
    const i = ae(o ? o[0] : void 0);
    if (!t || n) return;
    let s = () => {
      (!re || Is(re, e)) && Oe(i.activeElement, e.current) && (re = e);
    };
    return (
      i.addEventListener("focusin", s, !1),
      o == null || o.forEach((l) => l.addEventListener("focusin", s, !1)),
      () => {
        i.removeEventListener("focusin", s, !1),
          o == null ||
            o.forEach((l) => l.removeEventListener("focusin", s, !1));
      }
    );
  }, [e, n]),
    be(() => {
      const o = ae(e.current ? e.current[0] : void 0);
      if (!t) return;
      let i = (s) => {
        if (
          s.key !== "Tab" ||
          s.altKey ||
          s.ctrlKey ||
          s.metaKey ||
          !fo(e) ||
          s.isComposing
        )
          return;
        let l = o.activeElement;
        if (!Oe(l, e.current)) return;
        let a = ye.getTreeNode(e);
        if (!a) return;
        let u = a.nodeToRestore,
          c = rn(o.body, { tabbable: !0 });
        c.currentNode = l;
        let d = s.shiftKey ? c.previousNode() : c.nextNode();
        if (
          ((!u || !o.body.contains(u) || u === o.body) &&
            ((u = void 0), (a.nodeToRestore = void 0)),
          (!d || !Oe(d, e.current)) && u)
        ) {
          c.currentNode = u;
          do d = s.shiftKey ? c.previousNode() : c.nextNode();
          while (Oe(d, e.current));
          s.preventDefault(),
            s.stopPropagation(),
            d ? jt(d, !0) : qv(u) ? jt(u, !0) : l.blur();
        }
      };
      return (
        n || o.addEventListener("keydown", i, !0),
        () => {
          n || o.removeEventListener("keydown", i, !0);
        }
      );
    }, [e, t, n]),
    be(() => {
      const o = ae(e.current ? e.current[0] : void 0);
      if (!t) return;
      let i = ye.getTreeNode(e);
      if (i) {
        var s;
        return (
          (i.nodeToRestore =
            (s = r.current) !== null && s !== void 0 ? s : void 0),
          () => {
            let l = ye.getTreeNode(e);
            if (!l) return;
            let a = l.nodeToRestore;
            if (
              t &&
              a &&
              (Oe(o.activeElement, e.current) ||
                (o.activeElement === o.body && Jx(e)))
            ) {
              let u = ye.clone();
              requestAnimationFrame(() => {
                if (o.activeElement === o.body) {
                  let c = u.getTreeNode(e);
                  for (; c; ) {
                    if (c.nodeToRestore && c.nodeToRestore.isConnected) {
                      jt(c.nodeToRestore);
                      return;
                    }
                    c = c.parent;
                  }
                  for (c = u.getTreeNode(e); c; ) {
                    if (
                      c.scopeRef &&
                      c.scopeRef.current &&
                      ye.getTreeNode(c.scopeRef)
                    ) {
                      Fs(c.scopeRef.current, !0);
                      return;
                    }
                    c = c.parent;
                  }
                }
              });
            }
          }
        );
      }
    }, [e, t]);
}
function rn(e, t, n) {
  let r = t != null && t.tabbable ? Yx : Gx,
    o = ae(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode(i) {
        var s;
        return !(t == null || (s = t.from) === null || s === void 0) &&
          s.contains(i)
          ? NodeFilter.FILTER_REJECT
          : i.matches(r) &&
            Zv(i) &&
            (!n || Oe(i, n)) &&
            (!(t != null && t.accept) || t.accept(i))
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  return t != null && t.from && (o.currentNode = t.from), o;
}
class Wc {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, n, r) {
    let o = this.fastMap.get(n ?? null);
    if (!o) return;
    let i = new wu({ scopeRef: t });
    o.addChild(i),
      (i.parent = o),
      this.fastMap.set(t, i),
      r && (i.nodeToRestore = r);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let n = this.fastMap.get(t);
    if (!n) return;
    let r = n.parent;
    for (let i of this.traverse())
      i !== n &&
        n.nodeToRestore &&
        i.nodeToRestore &&
        n.scopeRef &&
        n.scopeRef.current &&
        Oe(i.nodeToRestore, n.scopeRef.current) &&
        (i.nodeToRestore = n.nodeToRestore);
    let o = n.children;
    r && (r.removeChild(n), o.size > 0 && o.forEach((i) => r && r.addChild(i))),
      this.fastMap.delete(n.scopeRef);
  }
  *traverse(t = this.root) {
    if ((t.scopeRef != null && (yield t), t.children.size > 0))
      for (let n of t.children) yield* this.traverse(n);
  }
  clone() {
    var t;
    let n = new Wc();
    var r;
    for (let o of this.traverse())
      n.addTreeNode(
        o.scopeRef,
        (r = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !==
          null && r !== void 0
          ? r
          : null,
        o.nodeToRestore
      );
    return n;
  }
  constructor() {
    (this.fastMap = new Map()),
      (this.root = new wu({ scopeRef: null })),
      this.fastMap.set(null, this.root);
  }
}
class wu {
  addChild(t) {
    this.children.add(t), (t.parent = this);
  }
  removeChild(t) {
    this.children.delete(t), (t.parent = void 0);
  }
  constructor(t) {
    (this.children = new Set()),
      (this.contain = !1),
      (this.scopeRef = t.scopeRef);
  }
}
let ye = new Wc();
function pl(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e,
    o = w.useRef({ isFocused: !1, isFocusVisible: t || Qv() }),
    [i, s] = w.useState(!1),
    [l, a] = w.useState(() => o.current.isFocused && o.current.isFocusVisible),
    u = w.useCallback(
      () => a(o.current.isFocused && o.current.isFocusVisible),
      []
    ),
    c = w.useCallback(
      (v) => {
        (o.current.isFocused = v), s(v), u();
      },
      [u]
    );
  Dx(
    (v) => {
      (o.current.isFocusVisible = v), u();
    },
    [],
    { isTextInput: n }
  );
  let { focusProps: d } = Wv({ isDisabled: r, onFocusChange: c }),
    { focusWithinProps: f } = Bc({ isDisabled: !r, onFocusWithinChange: c });
  return { isFocused: i, isFocusVisible: l, focusProps: r ? f : d };
}
let t2 = J.createContext(null);
function n2(e) {
  let t = w.useContext(t2) || {};
  Fv(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Jv(e, t) {
  let { focusProps: n } = Wv(e),
    { keyboardProps: r } = Bx(e),
    o = fe(n, r),
    i = n2(t),
    s = e.isDisabled ? {} : i,
    l = w.useRef(e.autoFocus);
  return (
    w.useEffect(() => {
      l.current && t.current && As(t.current), (l.current = !1);
    }, [t]),
    {
      focusableProps: fe(
        {
          ...o,
          tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
        },
        s
      ),
    }
  );
}
const Ot = [];
function r2(e, t) {
  let {
    onClose: n,
    shouldCloseOnBlur: r,
    isOpen: o,
    isDismissable: i = !1,
    isKeyboardDismissDisabled: s = !1,
    shouldCloseOnInteractOutside: l,
  } = e;
  w.useEffect(
    () => (
      o && Ot.push(t),
      () => {
        let y = Ot.indexOf(t);
        y >= 0 && Ot.splice(y, 1);
      }
    ),
    [o, t]
  );
  let a = () => {
      Ot[Ot.length - 1] === t && n && n();
    },
    u = (y) => {
      (!l || l(y.target)) &&
        Ot[Ot.length - 1] === t &&
        (y.stopPropagation(), y.preventDefault());
    },
    c = (y) => {
      (!l || l(y.target)) &&
        (Ot[Ot.length - 1] === t && (y.stopPropagation(), y.preventDefault()),
        a());
    },
    d = (y) => {
      y.key === "Escape" &&
        !s &&
        !y.nativeEvent.isComposing &&
        (y.stopPropagation(), y.preventDefault(), a());
    };
  zx({
    ref: t,
    onInteractOutside: i && o ? c : null,
    onInteractOutsideStart: u,
  });
  let { focusWithinProps: f } = Bc({
      isDisabled: !r,
      onBlurWithin: (y) => {
        !y.relatedTarget ||
          Xx(y.relatedTarget) ||
          ((!l || l(y.relatedTarget)) && n());
      },
    }),
    v = (y) => {
      y.target === y.currentTarget && y.preventDefault();
    };
  return {
    overlayProps: { onKeyDown: d, ...f },
    underlayProps: { onPointerDown: v },
  };
}
function o2(e, t, n) {
  let { type: r } = e,
    { isOpen: o } = t;
  w.useEffect(() => {
    n && n.current && Dv.set(n.current, t.close);
  });
  let i;
  r === "menu" ? (i = !0) : r === "listbox" && (i = "listbox");
  let s = Oc();
  return {
    triggerProps: {
      "aria-haspopup": i,
      "aria-expanded": o,
      "aria-controls": o ? s : null,
      onPress: t.toggle,
    },
    overlayProps: { id: s },
  };
}
const bu = J.createContext(null);
function i2(e) {
  let { children: t } = e,
    n = w.useContext(bu),
    [r, o] = w.useState(0),
    i = w.useMemo(
      () => ({
        parent: n,
        modalCount: r,
        addModal() {
          o((s) => s + 1), n && n.addModal();
        },
        removeModal() {
          o((s) => s - 1), n && n.removeModal();
        },
      }),
      [n, r]
    );
  return J.createElement(bu.Provider, { value: i }, t);
}
function s2() {
  let e = w.useContext(bu);
  return {
    modalProviderProps: { "aria-hidden": e && e.modalCount > 0 ? !0 : null },
  };
}
function l2(e) {
  let { modalProviderProps: t } = s2();
  return J.createElement("div", { "data-overlay-container": !0, ...e, ...t });
}
function a2(e) {
  return J.createElement(i2, null, J.createElement(l2, e));
}
var eg = {};
eg = { dismiss: "تجاهل" };
var tg = {};
tg = { dismiss: "Отхвърляне" };
var ng = {};
ng = { dismiss: "Odstranit" };
var rg = {};
rg = { dismiss: "Luk" };
var og = {};
og = { dismiss: "Schließen" };
var ig = {};
ig = { dismiss: "Απόρριψη" };
var sg = {};
sg = { dismiss: "Dismiss" };
var lg = {};
lg = { dismiss: "Descartar" };
var ag = {};
ag = { dismiss: "Lõpeta" };
var ug = {};
ug = { dismiss: "Hylkää" };
var cg = {};
cg = { dismiss: "Rejeter" };
var dg = {};
dg = { dismiss: "התעלם" };
var fg = {};
fg = { dismiss: "Odbaci" };
var pg = {};
pg = { dismiss: "Elutasítás" };
var hg = {};
hg = { dismiss: "Ignora" };
var mg = {};
mg = { dismiss: "閉じる" };
var vg = {};
vg = { dismiss: "무시" };
var gg = {};
gg = { dismiss: "Atmesti" };
var yg = {};
yg = { dismiss: "Nerādīt" };
var wg = {};
wg = { dismiss: "Lukk" };
var bg = {};
bg = { dismiss: "Negeren" };
var xg = {};
xg = { dismiss: "Zignoruj" };
var Sg = {};
Sg = { dismiss: "Descartar" };
var Cg = {};
Cg = { dismiss: "Dispensar" };
var Pg = {};
Pg = { dismiss: "Revocare" };
var Eg = {};
Eg = { dismiss: "Пропустить" };
var $g = {};
$g = { dismiss: "Zrušiť" };
var kg = {};
kg = { dismiss: "Opusti" };
var Tg = {};
Tg = { dismiss: "Odbaci" };
var Mg = {};
Mg = { dismiss: "Avvisa" };
var Ng = {};
Ng = { dismiss: "Kapat" };
var Lg = {};
Lg = { dismiss: "Скасувати" };
var _g = {};
_g = { dismiss: "取消" };
var Rg = {};
Rg = { dismiss: "關閉" };
var Ag = {};
Ag = {
  "ar-AE": eg,
  "bg-BG": tg,
  "cs-CZ": ng,
  "da-DK": rg,
  "de-DE": og,
  "el-GR": ig,
  "en-US": sg,
  "es-ES": lg,
  "et-EE": ag,
  "fi-FI": ug,
  "fr-FR": cg,
  "he-IL": dg,
  "hr-HR": fg,
  "hu-HU": pg,
  "it-IT": hg,
  "ja-JP": mg,
  "ko-KR": vg,
  "lt-LT": gg,
  "lv-LV": yg,
  "nb-NO": wg,
  "nl-NL": bg,
  "pl-PL": xg,
  "pt-BR": Sg,
  "pt-PT": Cg,
  "ro-RO": Pg,
  "ru-RU": Eg,
  "sk-SK": $g,
  "sl-SI": kg,
  "sr-SP": Tg,
  "sv-SE": Mg,
  "tr-TR": Ng,
  "uk-UA": Lg,
  "zh-CN": _g,
  "zh-TW": Rg,
};
const ep = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
};
function u2(e = {}) {
  let { style: t, isFocusable: n } = e,
    [r, o] = w.useState(!1),
    { focusWithinProps: i } = Bc({
      isDisabled: !n,
      onFocusWithinChange: (l) => o(l),
    }),
    s = w.useMemo(() => (r ? t : t ? { ...ep, ...t } : ep), [r]);
  return { visuallyHiddenProps: { ...i, style: s } };
}
function c2(e) {
  let {
      children: t,
      elementType: n = "div",
      isFocusable: r,
      style: o,
      ...i
    } = e,
    { visuallyHiddenProps: s } = u2(e);
  return J.createElement(n, fe(i, s), t);
}
function d2(e) {
  return e && e.__esModule ? e.default : e;
}
function tp(e) {
  let { onDismiss: t, ...n } = e,
    r = jb(d2(Ag), "@react-aria/overlays"),
    o = ux(n, r.format("dismiss")),
    i = () => {
      t && t();
    };
  return J.createElement(
    c2,
    null,
    J.createElement("button", {
      ...o,
      tabIndex: -1,
      onClick: i,
      style: { width: 1, height: 1 },
    })
  );
}
let to = new WeakMap(),
  rt = [];
function f2(e, t = document.body) {
  let n = new Set(e),
    r = new Set(),
    o = (a) => {
      for (let f of a.querySelectorAll(
        "[data-live-announcer], [data-react-aria-top-layer]"
      ))
        n.add(f);
      let u = (f) => {
          if (
            n.has(f) ||
            (r.has(f.parentElement) &&
              f.parentElement.getAttribute("role") !== "row")
          )
            return NodeFilter.FILTER_REJECT;
          for (let v of n) if (f.contains(v)) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        },
        c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
          acceptNode: u,
        }),
        d = u(a);
      if (
        (d === NodeFilter.FILTER_ACCEPT && i(a), d !== NodeFilter.FILTER_REJECT)
      ) {
        let f = c.nextNode();
        for (; f != null; ) i(f), (f = c.nextNode());
      }
    },
    i = (a) => {
      var u;
      let c = (u = to.get(a)) !== null && u !== void 0 ? u : 0;
      (a.getAttribute("aria-hidden") === "true" && c === 0) ||
        (c === 0 && a.setAttribute("aria-hidden", "true"),
        r.add(a),
        to.set(a, c + 1));
    };
  rt.length && rt[rt.length - 1].disconnect(), o(t);
  let s = new MutationObserver((a) => {
    for (let u of a)
      if (
        !(u.type !== "childList" || u.addedNodes.length === 0) &&
        ![...n, ...r].some((c) => c.contains(u.target))
      ) {
        for (let c of u.removedNodes)
          c instanceof Element && (n.delete(c), r.delete(c));
        for (let c of u.addedNodes)
          (c instanceof HTMLElement || c instanceof SVGElement) &&
          (c.dataset.liveAnnouncer === "true" ||
            c.dataset.reactAriaTopLayer === "true")
            ? n.add(c)
            : c instanceof Element && o(c);
      }
  });
  s.observe(t, { childList: !0, subtree: !0 });
  let l = {
    observe() {
      s.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      s.disconnect();
    },
  };
  return (
    rt.push(l),
    () => {
      s.disconnect();
      for (let a of r) {
        let u = to.get(a);
        u === 1
          ? (a.removeAttribute("aria-hidden"), to.delete(a))
          : to.set(a, u - 1);
      }
      l === rt[rt.length - 1]
        ? (rt.pop(), rt.length && rt[rt.length - 1].observe())
        : rt.splice(rt.indexOf(l), 1);
    }
  );
}
const p2 = w.createContext({});
function h2() {
  var e;
  return (e = w.useContext(p2)) !== null && e !== void 0 ? e : {};
}
const Og = J.createContext(null);
function Ig(e) {
  let t = Ac(),
    { portalContainer: n = t ? null : document.body, isExiting: r } = e,
    [o, i] = w.useState(!1),
    s = w.useMemo(() => ({ contain: o, setContain: i }), [o, i]),
    { getContainer: l } = h2();
  if ((!e.portalContainer && l && (n = l()), !n)) return null;
  let a = e.children;
  return (
    e.disableFocusManagement ||
      (a = J.createElement(Ux, { restoreFocus: !0, contain: o && !r }, a)),
    (a = J.createElement(
      Og.Provider,
      { value: s },
      J.createElement(Lx, null, a)
    )),
    rb.createPortal(a, n)
  );
}
function m2() {
  let e = w.useContext(Og),
    t = e == null ? void 0 : e.setContain;
  be(() => {
    t == null || t(!0);
  }, [t]);
}
function v2(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
function Wo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const xu = (e) => Array.isArray(e);
function Fg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Uo(e) {
  return typeof e == "string" || Array.isArray(e);
}
function np(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Uc(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = np(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = np(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function hl(e, t, n) {
  const r = e.getProps();
  return Uc(r, t, n !== void 0 ? n : r.custom, e);
}
const Kc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Gc = ["initial", ...Kc],
  ni = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xn = new Set(ni),
  pn = (e) => e * 1e3,
  hn = (e) => e / 1e3,
  g2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  y2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  w2 = { type: "keyframes", duration: 0.8 },
  b2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  x2 = (e, { keyframes: t }) =>
    t.length > 2
      ? w2
      : xn.has(e)
      ? e.startsWith("scale")
        ? y2(t[1])
        : g2
      : b2;
function S2({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Vg(e, t) {
  return e[t] || e.default || e;
}
const Yc = { skipAnimations: !1, useManualTiming: !1 },
  C2 = (e) => e !== null;
function ml(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(C2),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Mt = (e) => e;
function P2(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(u) {
    i.has(u) && (a.schedule(u), e()), u(s);
  }
  const a = {
    schedule: (u, c = !1, d = !1) => {
      const v = d && r ? t : n;
      return c && i.add(u), v.has(u) || v.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        o && ((o = !1), a.process(u));
    },
  };
  return a;
}
const Ri = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  E2 = 40;
function Dg(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = Ri.reduce((h, p) => ((h[p] = P2(i)), h), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = s,
    v = () => {
      const h = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(h - o.timestamp, E2), 1)),
        (o.timestamp = h),
        (o.isProcessing = !0),
        l.process(o),
        a.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), o.isProcessing || e(v);
    };
  return {
    schedule: Ri.reduce((h, p) => {
      const m = s[p];
      return (h[p] = (S, P = !1, $ = !1) => (n || y(), m.schedule(S, P, $))), h;
    }, {}),
    cancel: (h) => {
      for (let p = 0; p < Ri.length; p++) s[Ri[p]].cancel(h);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: Te,
    cancel: Vs,
    state: Ds,
    steps: n$,
  } = Dg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Mt, !0),
  jg = (e) => /^0[^.\s]+$/u.test(e);
function $2(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || jg(e)
    : !0;
}
let Su = Mt;
const zg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Bg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Hg = Bg("--"),
  k2 = Bg("var(--"),
  Qc = (e) => (k2(e) ? T2.test(e.split("/*")[0].trim()) : !1),
  T2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  M2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function N2(e) {
  const t = M2.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Wg(e, t, n = 1) {
  const [r, o] = N2(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return zg(s) ? parseFloat(s) : s;
  }
  return Qc(o) ? Wg(o, t, n + 1) : o;
}
const Rr = (e, t, n) => (n > t ? t : n < e ? e : n),
  zr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Po = { ...zr, transform: (e) => Rr(0, 1, e) },
  Ai = { ...zr, default: 1 },
  Eo = (e) => Math.round(e * 1e5) / 1e5,
  Xc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  L2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  _2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function ri(e) {
  return typeof e == "string";
}
function R2(e) {
  return e == null;
}
const oi = (e) => ({
    test: (t) => ri(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Qt = oi("deg"),
  Pr = oi("%"),
  W = oi("px"),
  A2 = oi("vh"),
  O2 = oi("vw"),
  rp = {
    ...Pr,
    parse: (e) => Pr.parse(e) / 100,
    transform: (e) => Pr.transform(e * 100),
  },
  I2 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  op = (e) => e === zr || e === W,
  ip = (e, t) => parseFloat(e.split(", ")[t]),
  sp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return ip(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? ip(i[1], e) : 0;
      }
    },
  F2 = new Set(["x", "y", "z"]),
  V2 = ni.filter((e) => !F2.has(e));
function D2(e) {
  const t = [];
  return (
    V2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ar = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: sp(4, 13),
  y: sp(5, 14),
};
Ar.translateX = Ar.x;
Ar.translateY = Ar.y;
const Ug = (e) => (t) => t.test(e),
  j2 = { test: (e) => e === "auto", parse: (e) => e },
  Kg = [zr, W, Pr, Qt, O2, A2, j2],
  lp = (e) => Kg.find(Ug(e)),
  In = new Set();
let Cu = !1,
  Pu = !1;
function Gg() {
  if (Pu) {
    const e = Array.from(In).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = D2(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var l;
            (l = r.getValue(i)) === null || l === void 0 || l.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Pu = !1), (Cu = !1), In.forEach((e) => e.complete()), In.clear();
}
function Yg() {
  In.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Pu = !0);
  });
}
function z2() {
  Yg(), Gg();
}
class Zc {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (In.add(this),
          Cu || ((Cu = !0), Te.read(Yg), Te.resolveKeyframes(Gg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            l = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      In.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), In.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const qc = (e, t) => (n) =>
    !!(
      (ri(n) && _2.test(n) && n.startsWith(e)) ||
      (t && !R2(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Qg = (e, t, n) => (r) => {
    if (!ri(r)) return r;
    const [o, i, s, l] = r.match(Xc);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  B2 = (e) => Rr(0, 255, e),
  oa = { ...zr, transform: (e) => Math.round(B2(e)) },
  Ln = {
    test: qc("rgb", "red"),
    parse: Qg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      oa.transform(e) +
      ", " +
      oa.transform(t) +
      ", " +
      oa.transform(n) +
      ", " +
      Eo(Po.transform(r)) +
      ")",
  };
function H2(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Eu = { test: qc("#"), parse: H2, transform: Ln.transform },
  vr = {
    test: qc("hsl", "hue"),
    parse: Qg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Pr.transform(Eo(t)) +
      ", " +
      Pr.transform(Eo(n)) +
      ", " +
      Eo(Po.transform(r)) +
      ")",
  },
  Re = {
    test: (e) => Ln.test(e) || Eu.test(e) || vr.test(e),
    parse: (e) =>
      Ln.test(e) ? Ln.parse(e) : vr.test(e) ? vr.parse(e) : Eu.parse(e),
    transform: (e) =>
      ri(e) ? e : e.hasOwnProperty("red") ? Ln.transform(e) : vr.transform(e),
  };
function W2(e) {
  var t, n;
  return (
    isNaN(e) &&
    ri(e) &&
    (((t = e.match(Xc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(L2)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Xg = "number",
  Zg = "color",
  U2 = "var",
  K2 = "var(",
  ap = "${}",
  G2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ko(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const l = t
    .replace(
      G2,
      (a) => (
        Re.test(a)
          ? (r.color.push(i), o.push(Zg), n.push(Re.parse(a)))
          : a.startsWith(K2)
          ? (r.var.push(i), o.push(U2), n.push(a))
          : (r.number.push(i), o.push(Xg), n.push(parseFloat(a))),
        ++i,
        ap
      )
    )
    .split(ap);
  return { values: n, split: l, indexes: r, types: o };
}
function qg(e) {
  return Ko(e).values;
}
function Jg(e) {
  const { split: t, types: n } = Ko(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const l = n[s];
        l === Xg
          ? (i += Eo(o[s]))
          : l === Zg
          ? (i += Re.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const Y2 = (e) => (typeof e == "number" ? 0 : e);
function Q2(e) {
  const t = qg(e);
  return Jg(e)(t.map(Y2));
}
const Br = {
    test: W2,
    parse: qg,
    createTransformer: Jg,
    getAnimatableNone: Q2,
  },
  X2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Z2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Xc) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = X2.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const q2 = /\b([a-z-]*)\(.*?\)/gu,
  $u = {
    ...Br,
    getAnimatableNone: (e) => {
      const t = e.match(q2);
      return t ? t.map(Z2).join(" ") : e;
    },
  },
  up = { ...zr, transform: Math.round },
  Jc = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    size: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    rotate: Qt,
    rotateX: Qt,
    rotateY: Qt,
    rotateZ: Qt,
    scale: Ai,
    scaleX: Ai,
    scaleY: Ai,
    scaleZ: Ai,
    skew: Qt,
    skewX: Qt,
    skewY: Qt,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: Po,
    originX: rp,
    originY: rp,
    originZ: W,
    zIndex: up,
    backgroundPositionX: W,
    backgroundPositionY: W,
    fillOpacity: Po,
    strokeOpacity: Po,
    numOctaves: up,
  },
  J2 = {
    ...Jc,
    color: Re,
    backgroundColor: Re,
    outlineColor: Re,
    fill: Re,
    stroke: Re,
    borderColor: Re,
    borderTopColor: Re,
    borderRightColor: Re,
    borderBottomColor: Re,
    borderLeftColor: Re,
    filter: $u,
    WebkitFilter: $u,
  },
  ed = (e) => J2[e];
function e0(e, t) {
  let n = ed(e);
  return (
    n !== $u && (n = Br), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const eS = new Set(["auto", "none", "0"]);
function tS(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !eS.has(i) && Ko(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = e0(n, o);
}
class t0 extends Zc {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && ((u = u.trim()), Qc(u))) {
        const c = Wg(u, n.current);
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !I2.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = lp(o),
      l = lp(i);
    if (s !== l)
      if (op(s) && op(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) $2(t[o]) && r.push(o);
    r.length && tS(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ar[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      l = o[s];
    (o[s] = Ar[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function n0(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let ts;
function nS() {
  ts = void 0;
}
const Fn = {
    now: () => (
      ts === void 0 &&
        Fn.set(
          Ds.isProcessing || Yc.useManualTiming
            ? Ds.timestamp
            : performance.now()
        ),
      ts
    ),
    set: (e) => {
      (ts = e), queueMicrotask(nS);
    },
  },
  cp = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (Br.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function rS(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function oS(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = cp(o, t),
    l = cp(i, t);
  return !s || !l ? !1 : rS(e) || (n === "spring" && r);
}
const iS = 40;
class r0 {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...l
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Fn.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...l,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > iS
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && z2(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Fn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u,
    } = this.options;
    if (!u && !oS(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        a == null || a(ml(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function o0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sS = 5;
function i0(e, t, n) {
  const r = Math.max(t - sS, 0);
  return o0(n - e(r), t - r);
}
const ia = 0.001,
  lS = 0.01,
  aS = 10,
  uS = 0.05,
  cS = 1;
function dS({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = Rr(uS, cS, s)),
    (e = Rr(lS, aS, hn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            v = ku(u, s),
            y = Math.exp(-d);
          return ia - (f / v) * y;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            b = ku(Math.pow(u, 2), s);
          return ((-o(u) + ia > 0 ? -1 : 1) * ((f - v) * y)) / b;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -ia + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const l = 5 / e,
    a = pS(o, i, l);
  if (((e = pn(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const fS = 12;
function pS(e, t, n) {
  let r = n;
  for (let o = 1; o < fS; o++) r = r - e(r) / t(r);
  return r;
}
function ku(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const hS = ["duration", "bounce"],
  mS = ["stiffness", "damping", "mass"];
function dp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function vS(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!dp(e, mS) && dp(e, hS)) {
    const n = dS(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function s0({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = vS({ ...r, velocity: -hn(r.velocity || 0) }),
    v = d || 0,
    y = a / (2 * Math.sqrt(l * u)),
    b = i - o,
    C = hn(Math.sqrt(l / u)),
    h = Math.abs(b) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const m = ku(C, y);
    p = (S) => {
      const P = Math.exp(-y * C * S);
      return (
        i - P * (((v + y * C * b) / m) * Math.sin(m * S) + b * Math.cos(m * S))
      );
    };
  } else if (y === 1) p = (m) => i - Math.exp(-C * m) * (b + (v + C * b) * m);
  else {
    const m = C * Math.sqrt(y * y - 1);
    p = (S) => {
      const P = Math.exp(-y * C * S),
        $ = Math.min(m * S, 300);
      return (
        i - (P * ((v + y * C * b) * Math.sinh($) + m * b * Math.cosh($))) / m
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (m) => {
      const S = p(m);
      if (f) s.done = m >= c;
      else {
        let P = 0;
        y < 1 && (P = m === 0 ? pn(v) : i0(p, m, S));
        const $ = Math.abs(P) <= n,
          O = Math.abs(i - S) <= t;
        s.done = $ && O;
      }
      return (s.value = s.done ? i : S), s;
    },
  };
}
function fp({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    v = (g) => (l !== void 0 && g < l) || (a !== void 0 && g > a),
    y = (g) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - g) < Math.abs(a - g)
        ? l
        : a;
  let b = n * t;
  const C = d + b,
    h = s === void 0 ? C : s(C);
  h !== C && (b = h - d);
  const p = (g) => -b * Math.exp(-g / r),
    m = (g) => h + p(g),
    S = (g) => {
      const M = p(g),
        I = m(g);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? h : I);
    };
  let P, $;
  const O = (g) => {
    v(f.value) &&
      ((P = g),
      ($ = s0({
        keyframes: [f.value, y(f.value)],
        velocity: i0(m, g, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    O(0),
    {
      calculatedDuration: null,
      next: (g) => {
        let M = !1;
        return (
          !$ && P === void 0 && ((M = !0), S(g), O(g)),
          P !== void 0 && g >= P ? $.next(g - P) : (!M && S(g), f)
        );
      },
    }
  );
}
const l0 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  gS = 1e-7,
  yS = 12;
function wS(e, t, n, r, o) {
  let i,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (i = l0(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > gS && ++l < yS);
  return s;
}
function ii(e, t, n, r) {
  if (e === t && n === r) return Mt;
  const o = (i) => wS(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : l0(o(i), t, r));
}
const bS = ii(0.42, 0, 1, 1),
  xS = ii(0, 0, 0.58, 1),
  a0 = ii(0.42, 0, 0.58, 1),
  SS = (e) => Array.isArray(e) && typeof e[0] != "number",
  u0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  c0 = (e) => (t) => 1 - e(1 - t),
  td = (e) => 1 - Math.sin(Math.acos(e)),
  CS = c0(td),
  PS = u0(td),
  d0 = ii(0.33, 1.53, 0.69, 0.99),
  nd = c0(d0),
  ES = u0(nd),
  $S = (e) =>
    (e *= 2) < 1 ? 0.5 * nd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  pp = {
    linear: Mt,
    easeIn: bS,
    easeInOut: a0,
    easeOut: xS,
    circIn: td,
    circInOut: PS,
    circOut: CS,
    backIn: nd,
    backInOut: ES,
    backOut: d0,
    anticipate: $S,
  },
  hp = (e) => {
    if (Array.isArray(e)) {
      Su(e.length === 4);
      const [t, n, r, o] = e;
      return ii(t, n, r, o);
    } else if (typeof e == "string") return Su(pp[e] !== void 0), pp[e];
    return e;
  },
  kS = (e, t) => (n) => t(e(n)),
  mn = (...e) => e.reduce(kS),
  f0 = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  vl = (e, t, n) => e + (t - e) * n;
function sa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function TS({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (o = sa(a, l, e + 1 / 3)), (i = sa(a, l, e)), (s = sa(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function js(e, t) {
  return (n) => (n > 0 ? t : e);
}
const la = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  MS = [Eu, Ln, vr],
  NS = (e) => MS.find((t) => t.test(e));
function mp(e) {
  const t = NS(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === vr && (n = TS(n)), n;
}
const vp = (e, t) => {
    const n = mp(e),
      r = mp(t);
    if (!n || !r) return js(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = la(n.red, r.red, i)),
      (o.green = la(n.green, r.green, i)),
      (o.blue = la(n.blue, r.blue, i)),
      (o.alpha = vl(n.alpha, r.alpha, i)),
      Ln.transform(o)
    );
  },
  Tu = new Set(["none", "hidden"]);
function LS(e, t) {
  return Tu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function _S(e, t) {
  return (n) => vl(e, t, n);
}
function rd(e) {
  return typeof e == "number"
    ? _S
    : typeof e == "string"
    ? Qc(e)
      ? js
      : Re.test(e)
      ? vp
      : OS
    : Array.isArray(e)
    ? p0
    : typeof e == "object"
    ? Re.test(e)
      ? vp
      : RS
    : js;
}
function p0(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => rd(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function RS(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = rd(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function AS(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      l = e.indexes[s][o[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    (r[i] = a), o[s]++;
  }
  return r;
}
const OS = (e, t) => {
  const n = Br.createTransformer(t),
    r = Ko(e),
    o = Ko(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (Tu.has(e) && !o.values.length) || (Tu.has(t) && !r.values.length)
      ? LS(e, t)
      : mn(p0(AS(r, o), o.values), n)
    : js(e, t);
};
function h0(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? vl(e, t, n)
    : rd(e)(e, t);
}
function IS(e, t, n) {
  const r = [],
    o = n || h0,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let l = o(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || Mt : t;
      l = mn(a, l);
    }
    r.push(l);
  }
  return r;
}
function FS(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Su(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = IS(t, r, o),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = f0(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => a(Rr(e[0], e[i - 1], u)) : a;
}
function VS(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = f0(0, t, r);
    e.push(vl(n, 1, o));
  }
}
function DS(e) {
  const t = [0];
  return VS(t, e.length - 1), t;
}
function jS(e, t) {
  return e.map((n) => n * t);
}
function zS(e, t) {
  return e.map(() => t || a0).splice(0, e.length - 1);
}
function zs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = SS(r) ? r.map(hp) : hp(r),
    i = { done: !1, value: t[0] },
    s = jS(n && n.length === t.length ? n : DS(t), e),
    l = FS(s, t, { ease: Array.isArray(o) ? o : zS(t, o) });
  return {
    calculatedDuration: e,
    next: (a) => ((i.value = l(a)), (i.done = a >= e), i),
  };
}
const gp = 2e4;
function BS(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < gp; ) (t += n), (r = e.next(t));
  return t >= gp ? 1 / 0 : t;
}
const HS = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Te.update(t, !0),
      stop: () => Vs(t),
      now: () => (Ds.isProcessing ? Ds.timestamp : Fn.now()),
    };
  },
  WS = { decay: fp, inertia: fp, tween: zs, keyframes: zs, spring: s0 },
  US = (e) => e / 100;
class od extends r0 {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || Zc,
      l = (a, u) => this.onKeyframesResolved(a, u);
    (this.resolver = new s(i, l, n, r, o)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      l = WS[n] || zs;
    let a, u;
    l !== zs &&
      typeof t[0] != "number" &&
      ((a = mn(US, h0(t[0], t[1]))), (t = [0, 100]));
    const c = l({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = BS(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      v = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: g } = this.options;
      return { done: !0, value: g[g.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: v,
      repeatType: y,
      repeatDelay: b,
      onUpdate: C,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? h < 0 : h > c;
    (this.currentTime = Math.max(h, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      S = i;
    if (v) {
      const g = Math.min(this.currentTime, c) / d;
      let M = Math.floor(g),
        I = g % 1;
      !I && g >= 1 && (I = 1),
        I === 1 && M--,
        (M = Math.min(M, v + 1)),
        !!(M % 2) &&
          (y === "reverse"
            ? ((I = 1 - I), b && (I -= b / d))
            : y === "mirror" && (S = s)),
        (m = Rr(0, 1, I) * d);
    }
    const P = p ? { done: !1, value: a[0] } : S.next(m);
    l && (P.value = l(P.value));
    let { done: $ } = P;
    !p &&
      u !== null &&
      ($ = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const O =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && $));
    return (
      O && o !== void 0 && (P.value = ml(a, this.options, o)),
      C && C(P.value),
      O && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? hn(t.calculatedDuration) : 0;
  }
  get time() {
    return hn(this.currentTime);
  }
  set time(t) {
    (t = pn(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = hn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = HS, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const m0 = new Set(["opacity", "clipPath", "filter", "transform"]),
  v0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function g0(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in id) ||
    v0(e) ||
    (Array.isArray(e) && e.every(g0))
  );
}
const po = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  id = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: po([0, 0.65, 0.55, 1]),
    circOut: po([0.55, 0, 1, 0.45]),
    backIn: po([0.31, 0.01, 0.66, -0.59]),
    backOut: po([0.33, 1.53, 0.69, 0.99]),
  };
function KS(e) {
  return y0(e) || id.easeOut;
}
function y0(e) {
  if (e) return v0(e) ? po(e) : Array.isArray(e) ? e.map(KS) : id[e];
}
function GS(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = y0(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const YS = n0(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Bs = 10,
  QS = 2e4;
function XS(e) {
  return e.type === "spring" || !g0(e.ease);
}
function ZS(e, t) {
  const n = new od({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < QS; ) (r = n.sample(i)), o.push(r.value), (i += Bs);
  return { times: void 0, keyframes: o, duration: i - Bs, ease: "linear" };
}
class yp extends r0 {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new t0(
      i,
      (s, l) => this.onKeyframesResolved(s, l),
      n,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
    if (XS(this.options)) {
      const {
          onComplete: f,
          onUpdate: v,
          motionValue: y,
          element: b,
          ...C
        } = this.options,
        h = ZS(t, C);
      (t = h.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = h.duration),
        (i = h.times),
        (s = h.ease),
        (l = "keyframes");
    }
    const d = GS(a.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            a.set(ml(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: l, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return hn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return hn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = pn(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Mt;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Mt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: l,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...v
        } = this.options,
        y = new od({
          ...v,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: l,
          isGenerator: !0,
        }),
        b = pn(this.time);
      u.setWithVelocity(y.sample(b - Bs).value, y.sample(b).value, Bs);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: l,
    } = t;
    return (
      YS() &&
      r &&
      m0.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      l !== "inertia"
    );
  }
}
function qS(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t,
      s = (o === null ? 0 : o.value) / 100;
    n !== s && e(s), (n = s);
  };
  return Te.update(r, !0), () => Vs(r);
}
const JS = n0(() => window.ScrollTimeline !== void 0);
class eC {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (JS() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          qS((o) => {
            r.time = r.duration * o;
          }, t)
        );
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const tC =
    (e, t, n, r = {}, o, i, s) =>
    (l) => {
      const a = Vg(r, e) || {},
        u = a.delay || r.delay || 0;
      let { elapsed: c = 0 } = r;
      c = c - pn(u);
      let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (v) => {
          t.set(v), a.onUpdate && a.onUpdate(v);
        },
        onComplete: () => {
          l(), a.onComplete && a.onComplete(), s && s();
        },
        onStop: s,
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      S2(a) || (d = { ...d, ...x2(e, d) }),
        d.duration && (d.duration = pn(d.duration)),
        d.repeatDelay && (d.repeatDelay = pn(d.repeatDelay)),
        d.from !== void 0 && (d.keyframes[0] = d.from);
      let f = !1;
      if (
        ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
          ((d.duration = 0), d.delay === 0 && (f = !0)),
        Yc.skipAnimations && ((f = !0), (d.duration = 0), (d.delay = 0)),
        f && !i && t.get() !== void 0)
      ) {
        const v = ml(d.keyframes, a);
        if (v !== void 0)
          return (
            Te.update(() => {
              d.onUpdate(v), d.onComplete();
            }),
            new eC([])
          );
      }
      return !i && yp.supports(d) ? new yp(d) : new od(d);
    },
  nC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  rC = (e) => (xu(e) ? e[e.length - 1] || 0 : e);
function w0(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function b0(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class x0 {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return w0(this.subscriptions, t), () => b0(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const wp = 30,
  oC = (e) => !isNaN(parseFloat(e));
class S0 {
  constructor(t, n = {}) {
    (this.version = "11.5.4"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = Fn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Fn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = oC(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new x0());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Te.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Fn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > wp
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, wp);
    return o0(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Hs(e, t) {
  return new S0(e, t);
}
function iC(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hs(n));
}
function sC(e, t) {
  const n = hl(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const l = rC(i[s]);
    iC(e, s, l);
  }
}
const gl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  lC = "framerAppearId",
  C0 = "data-" + gl(lC);
function aC(e) {
  return e.props[C0];
}
function P0(e) {
  if (xn.has(e)) return "transform";
  if (m0.has(e)) return gl(e);
}
class uC extends S0 {
  constructor() {
    super(...arguments), (this.output = []), (this.counts = new Map());
  }
  add(t) {
    const n = P0(t);
    if (!n) return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o) return;
      o = !0;
      const i = this.counts.get(n) - 1;
      this.counts.set(n, i), i === 0 && (b0(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const Ve = (e) => !!(e && e.getVelocity);
function cC(e) {
  return !!(Ve(e) && e.add);
}
function dC(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (
    (!r &&
      !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
      ((r = new uC("auto")), e.addValue("willChange", r)),
    cC(r))
  )
    return r.add(t);
}
function fC({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function E0(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in a) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      v = a[d];
    if (v === void 0 || (c && fC(c, d))) continue;
    const y = { delay: n, ...Vg(s || {}, d) };
    let b = !1;
    if (window.MotionHandoffAnimation) {
      const h = aC(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, d, Te);
        p !== null && ((y.startTime = p), (b = !0));
      }
    }
    f.start(
      tC(
        d,
        f,
        v,
        e.shouldReduceMotion && xn.has(d) ? { type: !1 } : y,
        e,
        b,
        dC(e, d)
      )
    );
    const C = f.animation;
    C && u.push(C);
  }
  return (
    l &&
      Promise.all(u).then(() => {
        Te.update(() => {
          l && sC(e, l);
        });
      }),
    u
  );
}
function Mu(e, t, n = {}) {
  var r;
  const o = hl(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(E0(e, o, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return pC(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
    return u().then(() => c());
  } else return Promise.all([s(), l(n.delay)]);
}
function pC(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = o === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(hC)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Mu(u, t, { ...i, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function hC(e, t) {
  return e.sortNodePosition(t);
}
function mC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Mu(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Mu(e, t, n);
  else {
    const o = typeof t == "function" ? hl(e, t, n.custom) : t;
    r = Promise.all(E0(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const vC = [...Kc].reverse(),
  gC = Kc.length;
function yC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => mC(e, n, r)));
}
function wC(e) {
  let t = yC(e),
    n = bp(),
    r = !0;
  const o = (a) => (u, c) => {
    var d;
    const f = hl(
      e,
      c,
      a === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: v, transitionEnd: y, ...b } = f;
      u = { ...u, ...b, ...y };
    }
    return u;
  };
  function i(a) {
    t = a(e);
  }
  function s(a) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let v = {},
      y = 1 / 0;
    for (let C = 0; C < gC; C++) {
      const h = vC[C],
        p = n[h],
        m = u[h] !== void 0 ? u[h] : c[h],
        S = Uo(m),
        P = h === a ? p.isActive : null;
      P === !1 && (y = C);
      let $ = m === c[h] && m !== u[h] && S;
      if (
        ($ && r && e.manuallyAnimateOnMount && ($ = !1),
        (p.protectedKeys = { ...v }),
        (!p.isActive && P === null) ||
          (!m && !p.prevProp) ||
          Wo(m) ||
          typeof m == "boolean")
      )
        continue;
      let g =
          bC(p.prevProp, m) ||
          (h === a && p.isActive && !$ && S) ||
          (C > y && S),
        M = !1;
      const I = Array.isArray(m) ? m : [m];
      let R = I.reduce(o(h), {});
      P === !1 && (R = {});
      const { prevResolvedValues: _ = {} } = p,
        E = { ..._, ...R },
        T = (V) => {
          (g = !0),
            f.has(V) && ((M = !0), f.delete(V)),
            (p.needsAnimating[V] = !0);
          const j = e.getValue(V);
          j && (j.liveStyle = !1);
        };
      for (const V in E) {
        const j = R[V],
          U = _[V];
        if (v.hasOwnProperty(V)) continue;
        let N = !1;
        xu(j) && xu(U) ? (N = !Fg(j, U)) : (N = j !== U),
          N
            ? j != null
              ? T(V)
              : f.add(V)
            : j !== void 0 && f.has(V)
            ? T(V)
            : (p.protectedKeys[V] = !0);
      }
      (p.prevProp = m),
        (p.prevResolvedValues = R),
        p.isActive && (v = { ...v, ...R }),
        r && e.blockInitialAnimation && (g = !1),
        g &&
          (!$ || M) &&
          d.push(...I.map((V) => ({ animation: V, options: { type: h } })));
    }
    if (f.size) {
      const C = {};
      f.forEach((h) => {
        const p = e.getBaseTarget(h),
          m = e.getValue(h);
        m && (m.liveStyle = !0), (C[h] = p ?? null);
      }),
        d.push({ animation: C });
    }
    let b = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (b = !1),
      (r = !1),
      b ? t(d) : Promise.resolve()
    );
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var v;
        return (v = f.animationState) === null || v === void 0
          ? void 0
          : v.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(a);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = bp()), (r = !0);
    },
  };
}
function bC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Fg(t, e) : !1;
}
function Cn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function bp() {
  return {
    animate: Cn(!0),
    whileInView: Cn(),
    whileHover: Cn(),
    whileTap: Cn(),
    whileDrag: Cn(),
    whileFocus: Cn(),
    exit: Cn(),
  };
}
class Hr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class xC extends Hr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = wC(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Wo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let SC = 0;
class CC extends Hr {
  constructor() {
    super(...arguments), (this.id = SC++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const PC = { animation: { Feature: xC }, exit: { Feature: CC } },
  EC = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function $0(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const $C = (e) => (t) => EC(t) && e(t, $0(t));
function _n(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ns(e, t, n, r) {
  return _n(e, t, $C(n), r);
}
function k0(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const kC = k0("dragHorizontal"),
  TC = k0("dragVertical");
function MC(e) {
  let t = !1;
  {
    const n = kC(),
      r = TC();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function T0() {
  const e = MC();
  return e ? (e(), !1) : !0;
}
function M0(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const xp = () => ({ min: 0, max: 0 }),
  N0 = () => ({ x: xp(), y: xp() });
function NC({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function LC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _C(e, t) {
  return NC(LC(e.getBoundingClientRect(), t));
}
const sd = w.createContext(null),
  L0 = w.createContext({}),
  RC = w.createContext({}),
  AC = {},
  { schedule: OC, cancel: r$ } = Dg(queueMicrotask, !1);
function IC(e) {
  const t = Ve(e) ? e.get() : e;
  return nC(t) ? t.toValue() : t;
}
function Sp(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, s) => {
      if (i.pointerType === "touch" || T0()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t);
      const a = l[r];
      a && Te.postRender(() => a(i, s));
    };
  return ns(e.current, n, o, { passive: !e.getProps()[r] });
}
class FC extends Hr {
  mount() {
    this.unmount = mn(Sp(this.node, !0), Sp(this.node, !1));
  }
  unmount() {}
}
class VC extends Hr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = mn(
      _n(this.node.current, "focus", () => this.onFocus()),
      _n(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const _0 = (e, t) => (t ? (e === t ? !0 : _0(e, t.parentElement)) : !1);
function aa(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, $0(n));
}
class DC extends Hr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Mt),
      (this.removeEndListeners = Mt),
      (this.removeAccessibleListeners = Mt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = ns(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !_0(this.node.current, l.target) ? c : u;
              f && Te.update(() => f(l, a));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = ns(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = mn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                aa("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Te.postRender(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = _n(this.node.current, "keyup", s)),
              aa("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = _n(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && aa("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = _n(this.node.current, "blur", r);
        this.removeAccessibleListeners = mn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Te.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !T0()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Te.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ns(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = _n(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = mn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Nu = new WeakMap(),
  ua = new WeakMap(),
  jC = (e) => {
    const t = Nu.get(e.target);
    t && t(e);
  },
  zC = (e) => {
    e.forEach(jC);
  };
function BC({ root: e, ...t }) {
  const n = e || document;
  ua.has(n) || ua.set(n, {});
  const r = ua.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(zC, { root: e, ...t })), r[o];
}
function HC(e, t, n) {
  const r = BC(t);
  return (
    Nu.set(e, n),
    r.observe(e),
    () => {
      Nu.delete(e), r.unobserve(e);
    }
  );
}
const WC = { some: 0, all: 1 };
class UC extends Hr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : WC[o],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(a);
      };
    return HC(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(KC(t, n)) && this.startObserver();
  }
  unmount() {}
}
function KC({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const GC = {
    inView: { Feature: UC },
    tap: { Feature: DC },
    focus: { Feature: VC },
    hover: { Feature: FC },
  },
  ld = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  yl = w.createContext({}),
  ad = typeof window < "u",
  R0 = ad ? w.useLayoutEffect : w.useEffect,
  ud = w.createContext({ strict: !1 });
let Cp = !1;
function YC(e, t, n, r, o) {
  var i;
  const { visualElement: s } = w.useContext(yl),
    l = w.useContext(ud),
    a = w.useContext(sd),
    u = w.useContext(ld).reducedMotion,
    c = w.useRef();
  (r = r || l.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const d = c.current,
    f = w.useContext(RC);
  d &&
    !d.projection &&
    o &&
    (d.type === "html" || d.type === "svg") &&
    XC(c.current, n, o, f),
    w.useInsertionEffect(() => {
      d && d.update(n, a);
    });
  const v = n[C0],
    y = w.useRef(
      !!v &&
        !window.MotionHandoffIsComplete &&
        ((i = window.MotionHasOptimisedAnimation) === null || i === void 0
          ? void 0
          : i.call(window, v))
    );
  return (
    R0(() => {
      d &&
        (d.updateFeatures(),
        OC.render(d.render),
        y.current && d.animationState && d.animationState.animateChanges());
    }),
    w.useEffect(() => {
      d &&
        (!y.current && d.animationState && d.animationState.animateChanges(),
        (y.current = !1),
        Cp || ((Cp = !0), queueMicrotask(QC)));
    }),
    d
  );
}
function QC() {
  window.MotionHandoffIsComplete = !0;
}
function XC(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : A0(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (l && M0(l)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u,
    });
}
function A0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : A0(e.parent);
}
function ZC(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : M0(n) && (n.current = r));
    },
    [t]
  );
}
function wl(e) {
  return Wo(e.animate) || Gc.some((t) => Uo(e[t]));
}
function O0(e) {
  return !!(wl(e) || e.variants);
}
function qC(e, t) {
  if (wl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Uo(n) ? n : void 0,
      animate: Uo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function JC(e) {
  const { initial: t, animate: n } = qC(e, w.useContext(yl));
  return w.useMemo(() => ({ initial: t, animate: n }), [Pp(t), Pp(n)]);
}
function Pp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ep = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Or = {};
for (const e in Ep) Or[e] = { isEnabled: (t) => Ep[e].some((n) => !!t[n]) };
function Lu(e) {
  for (const t in e) Or[t] = { ...Or[t], ...e[t] };
}
const eP = Symbol.for("motionComponentSymbol");
function tP({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && Lu(e);
  function i(l, a) {
    let u;
    const c = { ...w.useContext(ld), ...l, layoutId: nP(l) },
      { isStatic: d } = c,
      f = JC(l),
      v = r(l, d);
    if (!d && ad) {
      rP();
      const y = oP(c);
      (u = y.MeasureLayout),
        (f.visualElement = YC(o, v, c, t, y.ProjectionNode));
    }
    return k.jsxs(yl.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? k.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(o, l, ZC(v, f.visualElement, a), v, d, f.visualElement),
      ],
    });
  }
  const s = w.forwardRef(i);
  return (s[eP] = o), s;
}
function nP({ layoutId: e }) {
  const t = w.useContext(L0).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rP(e, t) {
  w.useContext(ud).strict;
}
function oP(e) {
  const { drag: t, layout: n } = Or;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const iP = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function cd(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(iP.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function I0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const F0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function V0(e, t, n, r) {
  I0(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(F0.has(o) ? o : gl(o), t.attrs[o]);
}
function D0(e, { layout: t, layoutId: n }) {
  return (
    xn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!AC[e] || e === "opacity"))
  );
}
function dd(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (Ve(o[s]) ||
      (t.style && Ve(t.style[s])) ||
      D0(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return (
    n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), i
  );
}
function j0(e, t, n) {
  const r = dd(e, t, n);
  for (const o in e)
    if (Ve(e[o]) || Ve(t[o])) {
      const i =
        ni.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function fd(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function sP(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  o,
  i,
  s,
  l
) {
  const a = { latestValues: aP(o, i, s, l ? !1 : e, t), renderState: n() };
  return r && (a.mount = (u) => r(o, u, a)), a;
}
const z0 = (e) => (t, n) => {
  const r = w.useContext(yl),
    o = w.useContext(sd),
    i = () => sP(e, t, r, o, n);
  return n ? i() : fd(i);
};
function lP(e, t) {
  const n = P0(t);
  n && w0(e, n);
}
function $p(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const i = Uc(e, r[o]);
    if (i) {
      const { transitionEnd: s, transition: l, ...a } = i;
      n(a, s);
    }
  }
}
function aP(e, t, n, r, o) {
  var i;
  const s = {},
    l = [],
    a =
      r &&
      ((i = e.style) === null || i === void 0 ? void 0 : i.willChange) ===
        void 0,
    u = o(e, {});
  for (const C in u) s[C] = IC(u[C]);
  let { initial: c, animate: d } = e;
  const f = wl(e),
    v = O0(e);
  t &&
    v &&
    !f &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), d === void 0 && (d = t.animate));
  let y = n ? n.initial === !1 : !1;
  y = y || c === !1;
  const b = y ? d : c;
  return (
    b &&
      typeof b != "boolean" &&
      !Wo(b) &&
      $p(e, b, (C, h) => {
        for (const p in C) {
          let m = C[p];
          if (Array.isArray(m)) {
            const S = y ? m.length - 1 : 0;
            m = m[S];
          }
          m !== null && (s[p] = m);
        }
        for (const p in h) s[p] = h[p];
      }),
    a &&
      (d &&
        c !== !1 &&
        !Wo(d) &&
        $p(e, d, (C) => {
          for (const h in C) lP(l, h);
        }),
      l.length && (s.willChange = l.join(","))),
    s
  );
}
const pd = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  B0 = () => ({ ...pd(), attrs: {} }),
  H0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  uP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  cP = ni.length;
function dP(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < cP; i++) {
    const s = ni[i],
      l = e[s];
    if (l === void 0) continue;
    let a = !0;
    if (
      (typeof l == "number"
        ? (a = l === (s.startsWith("scale") ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = H0(l, Jc[s]);
      if (!a) {
        o = !1;
        const c = uP[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function hd(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    l = !1;
  for (const a in t) {
    const u = t[a];
    if (xn.has(a)) {
      s = !0;
      continue;
    } else if (Hg(a)) {
      o[a] = u;
      continue;
    } else {
      const c = H0(u, Jc[a]);
      a.startsWith("origin") ? ((l = !0), (i[a] = c)) : (r[a] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = dP(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    l)
  ) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
function kp(e, t, n) {
  return typeof e == "string" ? e : W.transform(t + n * e);
}
function fP(e, t, n) {
  const r = kp(t, e.x, e.width),
    o = kp(n, e.y, e.height);
  return `${r} ${o}`;
}
const pP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  hP = { offset: "strokeDashoffset", array: "strokeDasharray" };
function mP(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? pP : hP;
  e[i.offset] = W.transform(-r);
  const s = W.transform(t),
    l = W.transform(n);
  e[i.array] = `${s} ${l}`;
}
function md(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  d
) {
  if ((hd(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: v, dimensions: y } = e;
  f.transform && (y && (v.transform = f.transform), delete f.transform),
    y &&
      (o !== void 0 || i !== void 0 || v.transform) &&
      (v.transformOrigin = fP(
        y,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && mP(f, s, l, a, !1);
}
const vd = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  vP = {
    useVisualState: z0({
      scrapeMotionValuesFromProps: j0,
      createRenderState: B0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Te.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Te.render(() => {
            md(n, r, vd(t.tagName), e.transformTemplate), V0(t, n);
          });
      },
    }),
  },
  gP = {
    useVisualState: z0({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: dd,
      createRenderState: pd,
    }),
  };
function W0(e, t, n) {
  for (const r in t) !Ve(t[r]) && !D0(r, n) && (e[r] = t[r]);
}
function yP({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = pd();
    return hd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function wP(e, t) {
  const n = e.style || {},
    r = {};
  return W0(r, n, e), Object.assign(r, yP(e, t)), r;
}
function bP(e, t) {
  const n = {},
    r = wP(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const xP = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Ws(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    xP.has(e)
  );
}
let U0 = (e) => !Ws(e);
function SP(e) {
  e && (U0 = (t) => (t.startsWith("on") ? !Ws(t) : e(t)));
}
try {
  SP(require("@emotion/is-prop-valid").default);
} catch {}
function CP(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((U0(o) ||
        (n === !0 && Ws(o)) ||
        (!t && !Ws(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function PP(e, t, n, r) {
  const o = w.useMemo(() => {
    const i = B0();
    return (
      md(i, t, vd(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    W0(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function EP(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const a = (cd(n) ? PP : bP)(r, i, s, n),
      u = CP(r, typeof n == "string", e),
      c = n !== w.Fragment ? { ...u, ...a, ref: o } : {},
      { children: d } = r,
      f = w.useMemo(() => (Ve(d) ? d.get() : d), [d]);
    return w.createElement(n, { ...c, children: f });
  };
}
function $P(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...(cd(r) ? vP : gP),
      preloadedFeatures: e,
      useRender: EP(o),
      createVisualElement: t,
      Component: r,
    };
    return tP(s);
  };
}
const _u = { current: null },
  K0 = { current: !1 };
function kP() {
  if (((K0.current = !0), !!ad))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (_u.current = e.matches);
      e.addListener(t), t();
    } else _u.current = !1;
}
function TP(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Ve(o)) e.addValue(r, o);
    else if (Ve(i)) e.addValue(r, Hs(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Hs(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Tp = new WeakMap(),
  MP = [...Kg, Re, Br],
  NP = (e) => MP.find(Ug(e)),
  Mp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  LP = Gc.length;
class _P {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    l = {}
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Zc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        (this.isRenderScheduled = !1),
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
      }),
      (this.isRenderScheduled = !1),
      (this.scheduleRender = () => {
        this.isRenderScheduled ||
          ((this.isRenderScheduled = !0), Te.render(this.render, !1, !0));
      });
    const { latestValues: a, renderState: u } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = l),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = wl(n)),
      (this.isVariantNode = O0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const v = d[f];
      a[f] !== void 0 && Ve(v) && v.set(a[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Tp.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      K0.current || kP(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : _u.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Tp.delete(this.current),
      this.projection && this.projection.unmount(),
      Vs(this.notifyUpdate),
      Vs(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = xn.has(t),
      o = n.on("change", (l) => {
        (this.latestValues[t] = l),
          this.props.onUpdate && Te.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Or) {
      const n = Or[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : N0();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Mp.length; r++) {
      const o = Mp[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = TP(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < LP; r++) {
      const o = Gc[r],
        i = this.props[o];
      (Uo(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Hs(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (zg(o) || jg(o))
          ? (o = parseFloat(o))
          : !NP(o) && Br.test(n) && (o = e0(t, n)),
        this.setBaseTarget(t, Ve(o) ? o.get() : o)),
      Ve(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = Uc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ve(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new x0()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class G0 extends _P {
  constructor() {
    super(...arguments), (this.KeyframeResolver = t0);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function RP(e) {
  return window.getComputedStyle(e);
}
class AP extends G0 {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = I0);
  }
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = ed(n);
      return (r && r.default) || 0;
    } else {
      const r = RP(t),
        o = (Hg(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return _C(t, n);
  }
  build(t, n, r) {
    hd(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return dd(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ve(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class OP extends G0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = N0);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = ed(n);
      return (r && r.default) || 0;
    }
    return (n = F0.has(n) ? n : gl(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return j0(t, n, r);
  }
  build(t, n, r) {
    md(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    V0(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = vd(t.tagName)), super.mount(t);
  }
}
const IP = (e, t) =>
    cd(e) ? new OP(t) : new AP(t, { allowProjection: e !== w.Fragment }),
  FP = $P(),
  Go = v2(FP);
class VP extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function DP({ children: e, isPresent: t }) {
  const n = w.useId(),
    r = w.useRef(null),
    o = w.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = w.useContext(ld);
  return (
    w.useInsertionEffect(() => {
      const { width: s, height: l, top: a, left: u } = o.current;
      if (t || !r.current || !s || !l) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    k.jsx(VP, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: w.cloneElement(e, { ref: r }),
    })
  );
}
const jP = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const l = fd(zP),
    a = w.useId(),
    u = w.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const d of l.values()) if (!d) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      i ? [Math.random()] : [n]
    );
  return (
    w.useMemo(() => {
      l.forEach((c, d) => l.set(d, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = k.jsx(DP, { isPresent: n, children: e })),
    k.jsx(sd.Provider, { value: u, children: e })
  );
};
function zP() {
  return new Map();
}
const Oi = (e) => e.key || "";
function Np(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const gd = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  const l = w.useMemo(() => Np(e), [e]),
    a = l.map(Oi),
    u = w.useRef(!0),
    c = w.useRef(l),
    d = fd(() => new Map()),
    [f, v] = w.useState(l),
    [y, b] = w.useState(l);
  R0(() => {
    (u.current = !1), (c.current = l);
    for (let p = 0; p < y.length; p++) {
      const m = Oi(y[p]);
      a.includes(m) ? d.delete(m) : d.get(m) !== !0 && d.set(m, !1);
    }
  }, [y, a.length, a.join("-")]);
  const C = [];
  if (l !== f) {
    let p = [...l];
    for (let m = 0; m < y.length; m++) {
      const S = y[m],
        P = Oi(S);
      a.includes(P) || (p.splice(m, 0, S), C.push(S));
    }
    s === "wait" && C.length && (p = C), b(Np(p)), v(l);
    return;
  }
  const { forceRender: h } = w.useContext(L0);
  return k.jsx(k.Fragment, {
    children: y.map((p) => {
      const m = Oi(p),
        S = l === y || a.includes(m),
        P = () => {
          if (d.has(m)) d.set(m, !0);
          else return;
          let $ = !0;
          d.forEach((O) => {
            O || ($ = !1);
          }),
            $ && (h == null || h(), b(c.current), o && o());
        };
      return k.jsx(
        jP,
        {
          isPresent: S,
          initial: !u.current || r ? void 0 : !1,
          custom: S ? void 0 : n,
          presenceAffectsLayout: i,
          mode: s,
          onExitComplete: S ? void 0 : P,
          children: p,
        },
        m
      );
    }),
  });
};
function Yo({ children: e, features: t, strict: n = !1 }) {
  const [, r] = w.useState(!ca(t)),
    o = w.useRef(void 0);
  if (!ca(t)) {
    const { renderer: i, ...s } = t;
    (o.current = i), Lu(s);
  }
  return (
    w.useEffect(() => {
      ca(t) &&
        t().then(({ renderer: i, ...s }) => {
          Lu(s), (o.current = i), r(!0);
        });
    }, []),
    k.jsx(ud.Provider, {
      value: { renderer: o.current, strict: n },
      children: e,
    })
  );
}
function ca(e) {
  return typeof e == "function";
}
const Qo = { renderer: IP, ...PC, ...GC };
var BP = ({
  children: e,
  navigate: t,
  disableAnimation: n = !1,
  disableRipple: r = !1,
  skipFramerMotionAnimations: o = n,
  validationBehavior: i = "aria",
  locale: s = "en-US",
  defaultDates: l,
  createCalendar: a,
  ...u
}) => {
  let c = e;
  t && (c = k.jsx(ix, { navigate: t, children: c }));
  const d = w.useMemo(
    () => (
      n && o && (Yc.skipAnimations = !0),
      {
        createCalendar: a,
        defaultDates: l,
        disableAnimation: n,
        disableRipple: r,
        validationBehavior: i,
      }
    ),
    [a, l == null ? void 0 : l.maxDate, l == null ? void 0 : l.minDate, n, r, i]
  );
  return k.jsx(yb, {
    value: d,
    children: k.jsx(Lb, {
      locale: s,
      children: k.jsx(a2, { ...u, children: c }),
    }),
  });
};
function Be(e) {
  return w.forwardRef(e);
}
var Wr = (e, t, n = !0) => {
    if (!t) return [e, {}];
    const r = t.reduce((o, i) => (i in e ? { ...o, [i]: e[i] } : o), {});
    return n
      ? [
          Object.keys(e)
            .filter((i) => !t.includes(i))
            .reduce((i, s) => ({ ...i, [s]: e[s] }), {}),
          r,
        ]
      : [e, r];
  },
  HP = {
    default: "bg-default text-default-foreground",
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
    danger: "bg-danger text-danger-foreground",
    foreground: "bg-foreground text-background",
  },
  WP = {
    default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
    primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
    secondary:
      "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
    success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
    warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
    danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
    foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background",
  },
  UP = {
    default: "bg-transparent border-default text-foreground",
    primary: "bg-transparent border-primary text-primary",
    secondary: "bg-transparent border-secondary text-secondary",
    success: "bg-transparent border-success text-success",
    warning: "bg-transparent border-warning text-warning",
    danger: "bg-transparent border-danger text-danger",
    foreground: "bg-transparent border-foreground text-foreground",
  },
  KP = {
    default: "bg-default/40 text-default-foreground",
    primary: "bg-primary/20 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    success: "bg-success/20 text-success-600 dark:text-success",
    warning: "bg-warning/20 text-warning-600 dark:text-warning",
    danger: "bg-danger/20 text-danger dark:text-danger-500",
    foreground: "bg-foreground/10 text-foreground",
  },
  GP = {
    default: "border-default bg-default-100 text-default-foreground",
    primary: "border-default bg-default-100 text-primary",
    secondary: "border-default bg-default-100 text-secondary",
    success: "border-default bg-default-100 text-success",
    warning: "border-default bg-default-100 text-warning",
    danger: "border-default bg-default-100 text-danger",
    foreground: "border-default bg-default-100 text-foreground",
  },
  YP = {
    default: "bg-transparent text-default-foreground",
    primary: "bg-transparent text-primary",
    secondary: "bg-transparent text-secondary",
    success: "bg-transparent text-success",
    warning: "bg-transparent text-warning",
    danger: "bg-transparent text-danger",
    foreground: "bg-transparent text-foreground",
  },
  QP = {
    default: "border-default text-default-foreground hover:!bg-default",
    primary:
      "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
    secondary:
      "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
    success:
      "border-success text-success hover:!text-success-foreground hover:!bg-success",
    warning:
      "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
    danger:
      "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
    foreground: "border-foreground text-foreground hover:!bg-foreground",
  },
  H = {
    solid: HP,
    shadow: WP,
    bordered: UP,
    flat: KP,
    faded: GP,
    light: YP,
    ghost: QP,
  },
  Ii = ["small", "medium", "large"],
  Lp = {
    theme: {
      opacity: ["disabled"],
      spacing: ["divider"],
      borderWidth: Ii,
      borderRadius: Ii,
    },
    classGroups: {
      shadow: [{ shadow: Ii }],
      "font-size": [{ text: ["tiny", ...Ii] }],
      "bg-image": ["bg-stripe-gradient"],
    },
  },
  _p = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Xe = (e) => !e || typeof e != "object" || Object.keys(e).length === 0,
  XP = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Y0(e, t) {
  e.forEach(function (n) {
    Array.isArray(n) ? Y0(n, t) : t.push(n);
  });
}
function Q0(e) {
  let t = [];
  return Y0(e, t), t;
}
var X0 = (...e) => Q0(e).filter(Boolean),
  Z0 = (e, t) => {
    let n = {},
      r = Object.keys(e),
      o = Object.keys(t);
    for (let i of r)
      if (o.includes(i)) {
        let s = e[i],
          l = t[i];
        typeof s == "object" && typeof l == "object"
          ? (n[i] = Z0(s, l))
          : Array.isArray(s) || Array.isArray(l)
          ? (n[i] = X0(l, s))
          : (n[i] = l + " " + s);
      } else n[i] = e[i];
    for (let i of o) r.includes(i) || (n[i] = t[i]);
    return n;
  },
  Rp = (e) => (!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim());
function ZP() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = q0(t)) && (r && (r += " "), (r += n));
  return r;
}
function q0(e) {
  if (typeof e == "string") return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = q0(e[r])) && (n && (n += " "), (n += t));
  return n;
}
var yd = "-";
function qP(e) {
  var t = eE(e),
    n = e.conflictingClassGroups,
    r = e.conflictingClassGroupModifiers,
    o = r === void 0 ? {} : r;
  function i(l) {
    var a = l.split(yd);
    return a[0] === "" && a.length !== 1 && a.shift(), J0(a, t) || JP(l);
  }
  function s(l, a) {
    var u = n[l] || [];
    return a && o[l] ? [].concat(u, o[l]) : u;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: s };
}
function J0(e, t) {
  var s;
  if (e.length === 0) return t.classGroupId;
  var n = e[0],
    r = t.nextPart.get(n),
    o = r ? J0(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length !== 0) {
    var i = e.join(yd);
    return (s = t.validators.find(function (l) {
      var a = l.validator;
      return a(i);
    })) == null
      ? void 0
      : s.classGroupId;
  }
}
var Ap = /^\[(.+)\]$/;
function JP(e) {
  if (Ap.test(e)) {
    var t = Ap.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function eE(e) {
  var t = e.theme,
    n = e.prefix,
    r = { nextPart: new Map(), validators: [] },
    o = nE(Object.entries(e.classGroups), n);
  return (
    o.forEach(function (i) {
      var s = i[0],
        l = i[1];
      Ru(l, r, s, t);
    }),
    r
  );
}
function Ru(e, t, n, r) {
  e.forEach(function (o) {
    if (typeof o == "string") {
      var i = o === "" ? t : Op(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (tE(o)) {
        Ru(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(function (s) {
      var l = s[0],
        a = s[1];
      Ru(a, Op(t, l), n, r);
    });
  });
}
function Op(e, t) {
  var n = e;
  return (
    t.split(yd).forEach(function (r) {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function tE(e) {
  return e.isThemeGetter;
}
function nE(e, t) {
  return t
    ? e.map(function (n) {
        var r = n[0],
          o = n[1],
          i = o.map(function (s) {
            return typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(function (l) {
                    var a = l[0],
                      u = l[1];
                    return [t + a, u];
                  })
                )
              : s;
          });
        return [r, i];
      })
    : e;
}
function rE(e) {
  if (e < 1) return { get: function () {}, set: function () {} };
  var t = 0,
    n = new Map(),
    r = new Map();
  function o(i, s) {
    n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get: function (s) {
      var l = n.get(s);
      if (l !== void 0) return l;
      if ((l = r.get(s)) !== void 0) return o(s, l), l;
    },
    set: function (s, l) {
      n.has(s) ? n.set(s, l) : o(s, l);
    },
  };
}
var ey = "!";
function oE(e) {
  var t = e.separator || ":",
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (s) {
    for (var l = [], a = 0, u = 0, c, d = 0; d < s.length; d++) {
      var f = s[d];
      if (a === 0) {
        if (f === r && (n || s.slice(d, d + o) === t)) {
          l.push(s.slice(u, d)), (u = d + o);
          continue;
        }
        if (f === "/") {
          c = d;
          continue;
        }
      }
      f === "[" ? a++ : f === "]" && a--;
    }
    var v = l.length === 0 ? s : s.substring(u),
      y = v.startsWith(ey),
      b = y ? v.substring(1) : v,
      C = c && c > u ? c - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: y,
      baseClassName: b,
      maybePostfixModifierPosition: C,
    };
  };
}
function iE(e) {
  if (e.length <= 1) return e;
  var t = [],
    n = [];
  return (
    e.forEach(function (r) {
      var o = r[0] === "[";
      o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
    }),
    t.push.apply(t, n.sort()),
    t
  );
}
function sE(e) {
  return { cache: rE(e.cacheSize), splitModifiers: oE(e), ...qP(e) };
}
var lE = /\s+/;
function aE(e, t) {
  var n = t.splitModifiers,
    r = t.getClassGroupId,
    o = t.getConflictingClassGroupIds,
    i = new Set();
  return e
    .trim()
    .split(lE)
    .map(function (s) {
      var l = n(s),
        a = l.modifiers,
        u = l.hasImportantModifier,
        c = l.baseClassName,
        d = l.maybePostfixModifierPosition,
        f = r(d ? c.substring(0, d) : c),
        v = !!d;
      if (!f) {
        if (!d) return { isTailwindClass: !1, originalClassName: s };
        if (((f = r(c)), !f))
          return { isTailwindClass: !1, originalClassName: s };
        v = !1;
      }
      var y = iE(a).join(":"),
        b = u ? y + ey : y;
      return {
        isTailwindClass: !0,
        modifierId: b,
        classGroupId: f,
        originalClassName: s,
        hasPostfixModifier: v,
      };
    })
    .reverse()
    .filter(function (s) {
      if (!s.isTailwindClass) return !0;
      var l = s.modifierId,
        a = s.classGroupId,
        u = s.hasPostfixModifier,
        c = l + a;
      return i.has(c)
        ? !1
        : (i.add(c),
          o(a, u).forEach(function (d) {
            return i.add(l + d);
          }),
          !0);
    })
    .reverse()
    .map(function (s) {
      return s.originalClassName;
    })
    .join(" ");
}
function Au() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r,
    o,
    i,
    s = l;
  function l(u) {
    var c = t[0],
      d = t.slice(1),
      f = d.reduce(function (v, y) {
        return y(v);
      }, c());
    return (r = sE(f)), (o = r.cache.get), (i = r.cache.set), (s = a), a(u);
  }
  function a(u) {
    var c = o(u);
    if (c) return c;
    var d = aE(u, r);
    return i(u, d), d;
  }
  return function () {
    return s(ZP.apply(null, arguments));
  };
}
function se(e) {
  var t = function (r) {
    return r[e] || [];
  };
  return (t.isThemeGetter = !0), t;
}
var ty = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  uE = /^\d+\/\d+$/,
  cE = new Set(["px", "full", "screen"]),
  dE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  fE =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  pE = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function pt(e) {
  return Rn(e) || cE.has(e) || uE.test(e) || Ou(e);
}
function Ou(e) {
  return Gn(e, "length", wE);
}
function hE(e) {
  return Gn(e, "size", ny);
}
function mE(e) {
  return Gn(e, "position", ny);
}
function vE(e) {
  return Gn(e, "url", bE);
}
function Fi(e) {
  return Gn(e, "number", Rn);
}
function Rn(e) {
  return !Number.isNaN(Number(e));
}
function gE(e) {
  return e.endsWith("%") && Rn(e.slice(0, -1));
}
function no(e) {
  return Ip(e) || Gn(e, "number", Ip);
}
function Z(e) {
  return ty.test(e);
}
function ro() {
  return !0;
}
function Yt(e) {
  return dE.test(e);
}
function yE(e) {
  return Gn(e, "", xE);
}
function Gn(e, t, n) {
  var r = ty.exec(e);
  return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function wE(e) {
  return fE.test(e);
}
function ny() {
  return !1;
}
function bE(e) {
  return e.startsWith("url(");
}
function Ip(e) {
  return Number.isInteger(Number(e));
}
function xE(e) {
  return pE.test(e);
}
function Iu() {
  var e = se("colors"),
    t = se("spacing"),
    n = se("blur"),
    r = se("brightness"),
    o = se("borderColor"),
    i = se("borderRadius"),
    s = se("borderSpacing"),
    l = se("borderWidth"),
    a = se("contrast"),
    u = se("grayscale"),
    c = se("hueRotate"),
    d = se("invert"),
    f = se("gap"),
    v = se("gradientColorStops"),
    y = se("gradientColorStopPositions"),
    b = se("inset"),
    C = se("margin"),
    h = se("opacity"),
    p = se("padding"),
    m = se("saturate"),
    S = se("scale"),
    P = se("sepia"),
    $ = se("skew"),
    O = se("space"),
    g = se("translate"),
    M = function () {
      return ["auto", "contain", "none"];
    },
    I = function () {
      return ["auto", "hidden", "clip", "visible", "scroll"];
    },
    R = function () {
      return ["auto", Z, t];
    },
    _ = function () {
      return [Z, t];
    },
    E = function () {
      return ["", pt];
    },
    T = function () {
      return ["auto", Rn, Z];
    },
    V = function () {
      return [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ];
    },
    j = function () {
      return ["solid", "dashed", "dotted", "double", "none"];
    },
    U = function () {
      return [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ];
    },
    N = function () {
      return [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ];
    },
    A = function () {
      return ["", "0", Z];
    },
    D = function () {
      return [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ];
    },
    x = function () {
      return [Rn, Fi];
    },
    L = function () {
      return [Rn, Z];
    };
  return {
    cacheSize: 500,
    theme: {
      colors: [ro],
      spacing: [pt],
      blur: ["none", "", Yt, Z],
      brightness: x(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Yt, Z],
      borderSpacing: _(),
      borderWidth: E(),
      contrast: x(),
      grayscale: A(),
      hueRotate: L(),
      invert: A(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [gE, Ou],
      inset: R(),
      margin: R(),
      opacity: x(),
      padding: _(),
      saturate: x(),
      scale: x(),
      sepia: A(),
      skew: L(),
      space: _(),
      translate: _(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", Z] }],
      container: ["container"],
      columns: [{ columns: [Yt] }],
      "break-after": [{ "break-after": D() }],
      "break-before": [{ "break-before": D() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none"] }],
      clear: [{ clear: ["left", "right", "both", "none"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [].concat(V(), [Z]) }],
      overflow: [{ overflow: I() }],
      "overflow-x": [{ "overflow-x": I() }],
      "overflow-y": [{ "overflow-y": I() }],
      overscroll: [{ overscroll: M() }],
      "overscroll-x": [{ "overscroll-x": M() }],
      "overscroll-y": [{ "overscroll-y": M() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [b] }],
      "inset-x": [{ "inset-x": [b] }],
      "inset-y": [{ "inset-y": [b] }],
      start: [{ start: [b] }],
      end: [{ end: [b] }],
      top: [{ top: [b] }],
      right: [{ right: [b] }],
      bottom: [{ bottom: [b] }],
      left: [{ left: [b] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", no] }],
      basis: [{ basis: R() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
      grow: [{ grow: A() }],
      shrink: [{ shrink: A() }],
      order: [{ order: ["first", "last", "none", no] }],
      "grid-cols": [{ "grid-cols": [ro] }],
      "col-start-end": [{ col: ["auto", { span: ["full", no] }, Z] }],
      "col-start": [{ "col-start": T() }],
      "col-end": [{ "col-end": T() }],
      "grid-rows": [{ "grid-rows": [ro] }],
      "row-start-end": [{ row: ["auto", { span: [no] }, Z] }],
      "row-start": [{ "row-start": T() }],
      "row-end": [{ "row-end": T() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
      gap: [{ gap: [f] }],
      "gap-x": [{ "gap-x": [f] }],
      "gap-y": [{ "gap-y": [f] }],
      "justify-content": [{ justify: ["normal"].concat(N()) }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal"].concat(N(), ["baseline"]) }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [].concat(N(), ["baseline"]) }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [p] }],
      px: [{ px: [p] }],
      py: [{ py: [p] }],
      ps: [{ ps: [p] }],
      pe: [{ pe: [p] }],
      pt: [{ pt: [p] }],
      pr: [{ pr: [p] }],
      pb: [{ pb: [p] }],
      pl: [{ pl: [p] }],
      m: [{ m: [C] }],
      mx: [{ mx: [C] }],
      my: [{ my: [C] }],
      ms: [{ ms: [C] }],
      me: [{ me: [C] }],
      mt: [{ mt: [C] }],
      mr: [{ mr: [C] }],
      mb: [{ mb: [C] }],
      ml: [{ ml: [C] }],
      "space-x": [{ "space-x": [O] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [O] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", Z, t] }],
      "min-w": [{ "min-w": ["min", "max", "fit", Z, pt] }],
      "max-w": [
        {
          "max-w": [
            "0",
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Yt] },
            Yt,
            Z,
          ],
        },
      ],
      h: [{ h: [Z, t, "auto", "min", "max", "fit"] }],
      "min-h": [{ "min-h": ["min", "max", "fit", Z, pt] }],
      "max-h": [{ "max-h": [Z, t, "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Yt, Ou] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Fi,
          ],
        },
      ],
      "font-family": [{ font: [ro] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            Z,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Rn, Fi] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Z,
            pt,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", Z] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [].concat(j(), ["wavy"]) }],
      "text-decoration-thickness": [{ decoration: ["auto", "from-font", pt] }],
      "underline-offset": [{ "underline-offset": ["auto", Z, pt] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      indent: [{ indent: _() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            Z,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", Z] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [].concat(V(), [mE]) }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", hE] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            vE,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [y] }],
      "gradient-via-pos": [{ via: [y] }],
      "gradient-to-pos": [{ to: [y] }],
      "gradient-from": [{ from: [v] }],
      "gradient-via": [{ via: [v] }],
      "gradient-to": [{ to: [v] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [l] }],
      "border-w-x": [{ "border-x": [l] }],
      "border-w-y": [{ "border-y": [l] }],
      "border-w-s": [{ "border-s": [l] }],
      "border-w-e": [{ "border-e": [l] }],
      "border-w-t": [{ "border-t": [l] }],
      "border-w-r": [{ "border-r": [l] }],
      "border-w-b": [{ "border-b": [l] }],
      "border-w-l": [{ "border-l": [l] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [].concat(j(), ["hidden"]) }],
      "divide-x": [{ "divide-x": [l] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [l] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: j() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: [""].concat(j()) }],
      "outline-offset": [{ "outline-offset": [Z, pt] }],
      "outline-w": [{ outline: [pt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: E() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [pt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Yt, yE] }],
      "shadow-color": [{ shadow: [ro] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": U() }],
      "bg-blend": [{ "bg-blend": U() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Yt, Z] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [m] }],
      sepia: [{ sepia: [P] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [d] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [m] }],
      "backdrop-sepia": [{ "backdrop-sepia": [P] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [s] }],
      "border-spacing-x": [{ "border-spacing-x": [s] }],
      "border-spacing-y": [{ "border-spacing-y": [s] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            Z,
          ],
        },
      ],
      duration: [{ duration: L() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
      delay: [{ delay: L() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Z] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [S] }],
      "scale-x": [{ "scale-x": [S] }],
      "scale-y": [{ "scale-y": [S] }],
      rotate: [{ rotate: [no, Z] }],
      "translate-x": [{ "translate-x": [g] }],
      "translate-y": [{ "translate-y": [g] }],
      "skew-x": [{ "skew-x": [$] }],
      "skew-y": [{ "skew-y": [$] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            Z,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: ["appearance-none"],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            Z,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": _() }],
      "scroll-mx": [{ "scroll-mx": _() }],
      "scroll-my": [{ "scroll-my": _() }],
      "scroll-ms": [{ "scroll-ms": _() }],
      "scroll-me": [{ "scroll-me": _() }],
      "scroll-mt": [{ "scroll-mt": _() }],
      "scroll-mr": [{ "scroll-mr": _() }],
      "scroll-mb": [{ "scroll-mb": _() }],
      "scroll-ml": [{ "scroll-ml": _() }],
      "scroll-p": [{ "scroll-p": _() }],
      "scroll-px": [{ "scroll-px": _() }],
      "scroll-py": [{ "scroll-py": _() }],
      "scroll-ps": [{ "scroll-ps": _() }],
      "scroll-pe": [{ "scroll-pe": _() }],
      "scroll-pt": [{ "scroll-pt": _() }],
      "scroll-pr": [{ "scroll-pr": _() }],
      "scroll-pb": [{ "scroll-pb": _() }],
      "scroll-pl": [{ "scroll-pl": _() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [
        {
          touch: [
            "auto",
            "none",
            "pinch-zoom",
            "manipulation",
            { pan: ["x", "left", "right", "y", "up", "down"] },
          ],
        },
      ],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", Z] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [pt, Fi] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
function SE(e, t) {
  for (var n in t) ry(e, n, t[n]);
  return e;
}
var CE = Object.prototype.hasOwnProperty,
  PE = new Set(["string", "number", "boolean"]);
function ry(e, t, n) {
  if (!CE.call(e, t) || PE.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var r in n) ry(e[t], r, n[r]);
  }
}
function EE(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return typeof e == "function"
    ? Au.apply(void 0, [Iu, e].concat(n))
    : Au.apply(
        void 0,
        [
          function () {
            return SE(Iu(), e);
          },
        ].concat(n)
      );
}
var $E = Au(Iu),
  kE = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  oy = (e) => e || void 0,
  Xo = (...e) => oy(Q0(e).filter(Boolean).join(" ")),
  da = null,
  Us = {},
  Fu = !1,
  oo =
    (...e) =>
    (t) =>
      t.twMerge
        ? ((!da || Fu) && ((Fu = !1), (da = Xe(Us) ? $E : EE(Us))),
          oy(da(Xo(e))))
        : Xo(e),
  Fp = (e, t) => {
    for (let n in t)
      e.hasOwnProperty(n) ? (e[n] = Xo(e[n], t[n])) : (e[n] = t[n]);
    return e;
  },
  TE = (e, t) => {
    let {
        extend: n = null,
        slots: r = {},
        variants: o = {},
        compoundVariants: i = [],
        compoundSlots: s = [],
        defaultVariants: l = {},
      } = e,
      a = { ...kE, ...t },
      u =
        n != null && n.base
          ? Xo(n.base, e == null ? void 0 : e.base)
          : e == null
          ? void 0
          : e.base,
      c = n != null && n.variants && !Xe(n.variants) ? Z0(o, n.variants) : o,
      d =
        n != null && n.defaultVariants && !Xe(n.defaultVariants)
          ? { ...n.defaultVariants, ...l }
          : l;
    !Xe(a.twMergeConfig) &&
      !XP(a.twMergeConfig, Us) &&
      ((Fu = !0), (Us = a.twMergeConfig));
    let f = Xe(n == null ? void 0 : n.slots),
      v = Xe(r)
        ? {}
        : {
            base: Xo(
              e == null ? void 0 : e.base,
              f && (n == null ? void 0 : n.base)
            ),
            ...r,
          },
      y = f
        ? v
        : Fp(
            { ...(n == null ? void 0 : n.slots) },
            Xe(v) ? { base: e == null ? void 0 : e.base } : v
          ),
      b = (h) => {
        if (Xe(c) && Xe(r) && f)
          return oo(
            u,
            h == null ? void 0 : h.class,
            h == null ? void 0 : h.className
          )(a);
        if (i && !Array.isArray(i))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof i}`
          );
        if (s && !Array.isArray(s))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof s}`
          );
        let p = (_, E, T = [], V) => {
            let j = T;
            if (typeof E == "string")
              j = j.concat(
                Rp(E)
                  .split(" ")
                  .map((U) => `${_}:${U}`)
              );
            else if (Array.isArray(E))
              j = j.concat(E.reduce((U, N) => U.concat(`${_}:${N}`), []));
            else if (typeof E == "object" && typeof V == "string") {
              for (let U in E)
                if (E.hasOwnProperty(U) && U === V) {
                  let N = E[U];
                  if (N && typeof N == "string") {
                    let A = Rp(N);
                    j[V]
                      ? (j[V] = j[V].concat(
                          A.split(" ").map((D) => `${_}:${D}`)
                        ))
                      : (j[V] = A.split(" ").map((D) => `${_}:${D}`));
                  } else
                    Array.isArray(N) &&
                      N.length > 0 &&
                      (j[V] = N.reduce((A, D) => A.concat(`${_}:${D}`), []));
                }
            }
            return j;
          },
          m = (_, E = c, T = null, V = null) => {
            var j;
            let U = E[_];
            if (!U || Xe(U)) return null;
            let N =
              (j = V == null ? void 0 : V[_]) != null
                ? j
                : h == null
                ? void 0
                : h[_];
            if (N === null) return null;
            let A = _p(N),
              D =
                (Array.isArray(a.responsiveVariants) &&
                  a.responsiveVariants.length > 0) ||
                a.responsiveVariants === !0,
              x = d == null ? void 0 : d[_],
              L = [];
            if (typeof A == "object" && D)
              for (let [G, Y] of Object.entries(A)) {
                let K = U[Y];
                if (G === "initial") {
                  x = Y;
                  continue;
                }
                (Array.isArray(a.responsiveVariants) &&
                  !a.responsiveVariants.includes(G)) ||
                  (L = p(G, K, L, T));
              }
            let B = U[A] || U[_p(x)];
            return typeof L == "object" && typeof T == "string" && L[T]
              ? Fp(L, B)
              : L.length > 0
              ? (L.push(B), L)
              : B;
          },
          S = () => (c ? Object.keys(c).map((_) => m(_, c)) : null),
          P = (_, E) => {
            if (!c || typeof c != "object") return null;
            let T = new Array();
            for (let V in c) {
              let j = m(V, c, _, E),
                U = _ === "base" && typeof j == "string" ? j : j && j[_];
              U && (T[T.length] = U);
            }
            return T;
          },
          $ = {};
        for (let _ in h) h[_] !== void 0 && ($[_] = h[_]);
        let O = (_, E) => {
            var T;
            let V =
              typeof (h == null ? void 0 : h[_]) == "object"
                ? { [_]: (T = h[_]) == null ? void 0 : T.initial }
                : {};
            return { ...d, ...$, ...V, ...E };
          },
          g = (_ = [], E) => {
            let T = [];
            for (let { class: V, className: j, ...U } of _) {
              let N = !0;
              for (let [A, D] of Object.entries(U)) {
                let x = O(A, E);
                if (Array.isArray(D)) {
                  if (!D.includes(x[A])) {
                    N = !1;
                    break;
                  }
                } else if (x[A] !== D) {
                  N = !1;
                  break;
                }
              }
              N && (V && T.push(V), j && T.push(j));
            }
            return T;
          },
          M = (_) => {
            let E = g(i, _),
              T = g(n == null ? void 0 : n.compoundVariants, _);
            return X0(T, E);
          },
          I = (_) => {
            let E = M(_);
            if (!Array.isArray(E)) return E;
            let T = {};
            for (let V of E)
              if (
                (typeof V == "string" && (T.base = oo(T.base, V)(a)),
                typeof V == "object")
              )
                for (let [j, U] of Object.entries(V)) T[j] = oo(T[j], U)(a);
            return T;
          },
          R = (_) => {
            if (s.length < 1) return null;
            let E = {};
            for (let { slots: T = [], class: V, className: j, ...U } of s) {
              if (!Xe(U)) {
                let N = !0;
                for (let A of Object.keys(U)) {
                  let D = O(A, _)[A];
                  if (
                    D === void 0 ||
                    (Array.isArray(U[A]) ? !U[A].includes(D) : U[A] !== D)
                  ) {
                    N = !1;
                    break;
                  }
                }
                if (!N) continue;
              }
              for (let N of T) (E[N] = E[N] || []), E[N].push([V, j]);
            }
            return E;
          };
        if (!Xe(r) || !f) {
          let _ = {};
          if (typeof y == "object" && !Xe(y))
            for (let E of Object.keys(y))
              _[E] = (T) => {
                var V, j;
                return oo(
                  y[E],
                  P(E, T),
                  ((V = I(T)) != null ? V : [])[E],
                  ((j = R(T)) != null ? j : [])[E],
                  T == null ? void 0 : T.class,
                  T == null ? void 0 : T.className
                )(a);
              };
          return _;
        }
        return oo(
          u,
          S(),
          M(),
          h == null ? void 0 : h.class,
          h == null ? void 0 : h.className
        )(a);
      },
      C = () => {
        if (!(!c || typeof c != "object")) return Object.keys(c);
      };
    return (
      (b.variantKeys = C()),
      (b.extend = n),
      (b.base = u),
      (b.slots = y),
      (b.variants = c),
      (b.defaultVariants = d),
      (b.compoundSlots = s),
      (b.compoundVariants = i),
      b
    );
  },
  Sn = (e, t) => {
    var n, r, o;
    return TE(e, {
      ...t,
      twMerge: (n = void 0) != null ? n : !0,
      twMergeConfig: {
        theme: { ...((r = void 0) == null ? void 0 : r.theme), ...Lp.theme },
        classGroups: {
          ...((o = void 0) == null ? void 0 : o.classGroups),
          ...Lp.classGroups,
        },
      },
    });
  },
  bl = [
    "outline-none",
    "data-[focus-visible=true]:z-10",
    "data-[focus-visible=true]:outline-2",
    "data-[focus-visible=true]:outline-focus",
    "data-[focus-visible=true]:outline-offset-2",
  ],
  qn = {
    default: [
      "[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    primary: [
      "[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    secondary: [
      "[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    success: [
      "[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    warning: [
      "[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
    danger: [
      "[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]",
    ],
  },
  ME = [
    "data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  ],
  NE = [
    "data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
    "data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
  ],
  Vp = Sn({
    base: [],
    variants: {
      orientation: {
        vertical: ["overflow-y-auto", ...ME],
        horizontal: ["overflow-x-auto", ...NE],
      },
      hideScrollBar: { true: "scrollbar-hide", false: "" },
    },
    defaultVariants: { orientation: "vertical", hideScrollBar: !1 },
  }),
  Dp = Sn({
    slots: {
      base: "relative inline-flex flex-col gap-2 items-center justify-center",
      wrapper: "relative flex",
      circle1: [
        "absolute",
        "w-full",
        "h-full",
        "rounded-full",
        "animate-spinner-ease-spin",
        "border-2",
        "border-solid",
        "border-t-transparent",
        "border-l-transparent",
        "border-r-transparent",
      ],
      circle2: [
        "absolute",
        "w-full",
        "h-full",
        "rounded-full",
        "opacity-75",
        "animate-spinner-linear-spin",
        "border-2",
        "border-dotted",
        "border-t-transparent",
        "border-l-transparent",
        "border-r-transparent",
      ],
      label: "text-foreground dark:text-foreground-dark font-regular",
    },
    variants: {
      size: {
        sm: {
          wrapper: "w-5 h-5",
          circle1: "border-2",
          circle2: "border-2",
          label: "text-small",
        },
        md: {
          wrapper: "w-8 h-8",
          circle1: "border-3",
          circle2: "border-3",
          label: "text-medium",
        },
        lg: {
          wrapper: "w-10 h-10",
          circle1: "border-3",
          circle2: "border-3",
          label: "text-large",
        },
      },
      color: {
        current: { circle1: "border-b-current", circle2: "border-b-current" },
        white: { circle1: "border-b-white", circle2: "border-b-white" },
        default: { circle1: "border-b-default", circle2: "border-b-default" },
        primary: { circle1: "border-b-primary", circle2: "border-b-primary" },
        secondary: {
          circle1: "border-b-secondary",
          circle2: "border-b-secondary",
        },
        success: { circle1: "border-b-success", circle2: "border-b-success" },
        warning: { circle1: "border-b-warning", circle2: "border-b-warning" },
        danger: { circle1: "border-b-danger", circle2: "border-b-danger" },
      },
      labelColor: {
        foreground: { label: "text-foreground" },
        primary: { label: "text-primary" },
        secondary: { label: "text-secondary" },
        success: { label: "text-success" },
        warning: { label: "text-warning" },
        danger: { label: "text-danger" },
      },
    },
    defaultVariants: { size: "md", color: "primary", labelColor: "foreground" },
  }),
  jp = Sn({
    slots: {
      base: [
        "flex",
        "z-40",
        "w-full",
        "h-auto",
        "items-center",
        "justify-center",
        "data-[menu-open=true]:border-none",
      ],
      wrapper: [
        "z-40",
        "flex",
        "px-6",
        "gap-4",
        "w-full",
        "flex-row",
        "relative",
        "flex-nowrap",
        "items-center",
        "justify-between",
        "h-[var(--navbar-height)]",
      ],
      toggle: [
        "group",
        "flex",
        "items-center",
        "justify-center",
        "w-6",
        "h-full",
        "outline-none",
        "rounded-small",
        "tap-highlight-transparent",
        ...bl,
      ],
      srOnly: ["sr-only"],
      toggleIcon: [
        "w-full",
        "h-full",
        "pointer-events-none",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "text-inherit",
        "group-data-[pressed=true]:opacity-70",
        "transition-opacity",
        "before:content-['']",
        "before:block",
        "before:h-px",
        "before:w-6",
        "before:bg-current",
        "before:transition-transform",
        "before:duration-150",
        "before:-translate-y-1",
        "before:rotate-0",
        "group-data-[open=true]:before:translate-y-px",
        "group-data-[open=true]:before:rotate-45",
        "after:content-['']",
        "after:block",
        "after:h-px",
        "after:w-6",
        "after:bg-current",
        "after:transition-transform",
        "after:duration-150",
        "after:translate-y-1",
        "after:rotate-0",
        "group-data-[open=true]:after:translate-y-0",
        "group-data-[open=true]:after:-rotate-45",
      ],
      brand: [
        "flex",
        "basis-0",
        "flex-row",
        "flex-grow",
        "flex-nowrap",
        "justify-start",
        "bg-transparent",
        "items-center",
        "no-underline",
        "text-medium",
        "whitespace-nowrap",
        "box-border",
      ],
      content: [
        "flex",
        "gap-4",
        "h-full",
        "flex-row",
        "flex-nowrap",
        "items-center",
        "data-[justify=start]:justify-start",
        "data-[justify=start]:flex-grow",
        "data-[justify=start]:basis-0",
        "data-[justify=center]:justify-center",
        "data-[justify=end]:justify-end",
        "data-[justify=end]:flex-grow",
        "data-[justify=end]:basis-0",
      ],
      item: [
        "text-medium",
        "whitespace-nowrap",
        "box-border",
        "list-none",
        "data-[active=true]:font-semibold",
      ],
      menu: [
        "z-30",
        "px-6",
        "pt-2",
        "fixed",
        "flex",
        "max-w-full",
        "top-[var(--navbar-height)]",
        "inset-x-0",
        "bottom-0",
        "w-screen",
        "flex-col",
        "gap-2",
        "overflow-y-auto",
      ],
      menuItem: ["text-large", "data-[active=true]:font-semibold"],
    },
    variants: {
      position: {
        static: { base: "static" },
        sticky: { base: "sticky top-0 inset-x-0" },
      },
      maxWidth: {
        sm: { wrapper: "max-w-[640px]" },
        md: { wrapper: "max-w-[768px]" },
        lg: { wrapper: "max-w-[1024px]" },
        xl: { wrapper: "max-w-[1280px]" },
        "2xl": { wrapper: "max-w-[1536px]" },
        full: { wrapper: "max-w-full" },
      },
      hideOnScroll: { true: { base: ["sticky", "top-0", "inset-x-0"] } },
      isBordered: { true: { base: ["border-b", "border-divider"] } },
      isBlurred: {
        false: { base: "bg-background", menu: "bg-background" },
        true: {
          base: [
            "backdrop-blur-lg",
            "data-[menu-open=true]:backdrop-blur-xl",
            "backdrop-saturate-150",
            "bg-background/70",
          ],
          menu: [
            "backdrop-blur-xl",
            "backdrop-saturate-150",
            "bg-background/70",
          ],
        },
      },
      disableAnimation: {
        true: {
          menu: [
            "hidden",
            "h-[calc(100dvh_-_var(--navbar-height))]",
            "data-[open=true]:flex",
          ],
        },
      },
    },
    defaultVariants: { maxWidth: "lg", position: "sticky", isBlurred: !0 },
  }),
  zp = Sn({
    slots: {
      base: [
        "z-0",
        "relative",
        "bg-transparent",
        "before:content-['']",
        "before:hidden",
        "before:z-[-1]",
        "before:absolute",
        "before:rotate-45",
        "before:w-2.5",
        "before:h-2.5",
        "before:rounded-sm",
        "data-[arrow=true]:before:block",
        "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=top]:before:left-1/2",
        "data-[placement=top]:before:-translate-x-1/2",
        "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=top-start]:before:left-3",
        "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=top-end]:before:right-3",
        "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=bottom]:before:left-1/2",
        "data-[placement=bottom]:before:-translate-x-1/2",
        "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=bottom-start]:before:left-3",
        "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
        "data-[placement=bottom-end]:before:right-3",
        "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
        "data-[placement=left]:before:top-1/2",
        "data-[placement=left]:before:-translate-y-1/2",
        "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=left-start]:before:top-1/4",
        "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=left-end]:before:bottom-1/4",
        "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
        "data-[placement=right]:before:top-1/2",
        "data-[placement=right]:before:-translate-y-1/2",
        "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=right-start]:before:top-1/4",
        "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
        "data-[placement=right-end]:before:bottom-1/4",
        ...bl,
      ],
      content: [
        "z-10",
        "px-2.5",
        "py-1",
        "w-full",
        "inline-flex",
        "flex-col",
        "items-center",
        "justify-center",
        "box-border",
        "subpixel-antialiased",
        "outline-none",
        "box-border",
      ],
      trigger: ["z-10"],
      backdrop: ["hidden"],
      arrow: [],
    },
    variants: {
      size: {
        sm: { content: "text-tiny" },
        md: { content: "text-small" },
        lg: { content: "text-medium" },
      },
      color: {
        default: {
          base: "before:bg-content1 before:shadow-small",
          content: "bg-content1",
        },
        foreground: {
          base: "before:bg-foreground",
          content: H.solid.foreground,
        },
        primary: { base: "before:bg-primary", content: H.solid.primary },
        secondary: { base: "before:bg-secondary", content: H.solid.secondary },
        success: { base: "before:bg-success", content: H.solid.success },
        warning: { base: "before:bg-warning", content: H.solid.warning },
        danger: { base: "before:bg-danger", content: H.solid.danger },
      },
      radius: {
        none: { content: "rounded-none" },
        sm: { content: "rounded-small" },
        md: { content: "rounded-medium" },
        lg: { content: "rounded-large" },
        full: { content: "rounded-full" },
      },
      shadow: {
        sm: { content: "shadow-small" },
        md: { content: "shadow-medium" },
        lg: { content: "shadow-large" },
      },
      backdrop: {
        transparent: {},
        opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
        blur: {
          backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
        },
      },
      triggerScaleOnOpen: {
        true: {
          trigger: [
            "aria-expanded:scale-[0.97]",
            "aria-expanded:opacity-70",
            "subpixel-antialiased",
          ],
        },
        false: {},
      },
      disableAnimation: { true: { base: "animate-none" } },
      isTriggerDisabled: {
        true: { trigger: "opacity-disabled pointer-events-none" },
        false: {},
      },
    },
    defaultVariants: {
      color: "default",
      radius: "lg",
      size: "md",
      shadow: "md",
      backdrop: "transparent",
      triggerScaleOnOpen: !0,
    },
    compoundVariants: [
      {
        backdrop: ["opaque", "blur"],
        class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
      },
    ],
  }),
  Bp = Sn({
    base: [
      "relative inline-flex items-center outline-none tap-highlight-transparent",
      ...bl,
    ],
    variants: {
      size: { sm: "text-small", md: "text-medium", lg: "text-large" },
      color: {
        foreground: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
      },
      underline: {
        none: "no-underline",
        hover: "hover:underline",
        always: "underline",
        active: "active:underline",
        focus: "focus:underline",
      },
      isBlock: {
        true: [
          "px-2",
          "py-1",
          "hover:after:opacity-100",
          "after:content-['']",
          "after:inset-0",
          "after:opacity-0",
          "after:w-full",
          "after:h-full",
          "after:rounded-xl",
          "after:transition-background",
          "after:absolute",
        ],
        false: "hover:opacity-80 active:opacity-disabled transition-opacity",
      },
      isDisabled: {
        true: "opacity-disabled cursor-default pointer-events-none",
      },
      disableAnimation: { true: "after:transition-none transition-none" },
    },
    compoundVariants: [
      {
        isBlock: !0,
        color: "foreground",
        class: "hover:after:bg-foreground/10",
      },
      { isBlock: !0, color: "primary", class: "hover:after:bg-primary/20" },
      { isBlock: !0, color: "secondary", class: "hover:after:bg-secondary/20" },
      { isBlock: !0, color: "success", class: "hover:after:bg-success/20" },
      { isBlock: !0, color: "warning", class: "hover:after:bg-warning/20" },
      { isBlock: !0, color: "danger", class: "hover:after:bg-danger/20" },
      {
        underline: ["hover", "always", "active", "focus"],
        class: "underline-offset-4",
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "md",
      isBlock: !1,
      underline: "none",
      isDisabled: !1,
    },
  }),
  LE = "flex mx-1 text-current self-center",
  Hp = Sn({
    base: [
      "px-2",
      "py-1",
      "h-fit",
      "font-mono",
      "font-normal",
      "inline-block",
      "whitespace-nowrap",
    ],
    variants: {
      color: {
        default: H.flat.default,
        primary: H.flat.primary,
        secondary: H.flat.secondary,
        success: H.flat.success,
        warning: H.flat.warning,
        danger: H.flat.danger,
      },
      size: { sm: "text-small", md: "text-medium", lg: "text-large" },
      radius: {
        none: "rounded-none",
        sm: "rounded-small",
        md: "rounded-medium",
        lg: "rounded-large",
        full: "rounded-full",
      },
    },
    defaultVariants: { color: "default", size: "sm", radius: "sm" },
  }),
  _E = Sn({
    base: [
      "z-0",
      "group",
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "box-border",
      "appearance-none",
      "outline-none",
      "select-none",
      "whitespace-nowrap",
      "min-w-max",
      "font-normal",
      "subpixel-antialiased",
      "overflow-hidden",
      "tap-highlight-transparent",
      "data-[pressed=true]:scale-[0.97]",
      ...bl,
    ],
    variants: {
      variant: {
        solid: "",
        bordered: "border-medium bg-transparent",
        light: "bg-transparent",
        flat: "",
        faded: "border-medium",
        shadow: "",
        ghost: "border-medium bg-transparent",
      },
      size: {
        sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
        md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
        lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        warning: "",
        danger: "",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-small",
        md: "rounded-medium",
        lg: "rounded-large",
        full: "rounded-full",
      },
      fullWidth: { true: "w-full" },
      isDisabled: { true: "opacity-disabled pointer-events-none" },
      isInGroup: {
        true: "[&:not(:first-child):not(:last-child)]:rounded-none",
      },
      isIconOnly: {
        true: "px-0 !gap-0",
        false: "[&>svg]:max-w-[theme(spacing.8)]",
      },
      disableAnimation: {
        true: "!transition-none data-[pressed=true]:scale-100",
        false:
          "transition-transform-colors-opacity motion-reduce:transition-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "solid",
      color: "default",
      fullWidth: !1,
      isDisabled: !1,
      isInGroup: !1,
    },
    compoundVariants: [
      { variant: "solid", color: "default", class: H.solid.default },
      { variant: "solid", color: "primary", class: H.solid.primary },
      { variant: "solid", color: "secondary", class: H.solid.secondary },
      { variant: "solid", color: "success", class: H.solid.success },
      { variant: "solid", color: "warning", class: H.solid.warning },
      { variant: "solid", color: "danger", class: H.solid.danger },
      { variant: "shadow", color: "default", class: H.shadow.default },
      { variant: "shadow", color: "primary", class: H.shadow.primary },
      { variant: "shadow", color: "secondary", class: H.shadow.secondary },
      { variant: "shadow", color: "success", class: H.shadow.success },
      { variant: "shadow", color: "warning", class: H.shadow.warning },
      { variant: "shadow", color: "danger", class: H.shadow.danger },
      { variant: "bordered", color: "default", class: H.bordered.default },
      { variant: "bordered", color: "primary", class: H.bordered.primary },
      { variant: "bordered", color: "secondary", class: H.bordered.secondary },
      { variant: "bordered", color: "success", class: H.bordered.success },
      { variant: "bordered", color: "warning", class: H.bordered.warning },
      { variant: "bordered", color: "danger", class: H.bordered.danger },
      { variant: "flat", color: "default", class: H.flat.default },
      { variant: "flat", color: "primary", class: H.flat.primary },
      { variant: "flat", color: "secondary", class: H.flat.secondary },
      { variant: "flat", color: "success", class: H.flat.success },
      { variant: "flat", color: "warning", class: H.flat.warning },
      { variant: "flat", color: "danger", class: H.flat.danger },
      { variant: "faded", color: "default", class: H.faded.default },
      { variant: "faded", color: "primary", class: H.faded.primary },
      { variant: "faded", color: "secondary", class: H.faded.secondary },
      { variant: "faded", color: "success", class: H.faded.success },
      { variant: "faded", color: "warning", class: H.faded.warning },
      { variant: "faded", color: "danger", class: H.faded.danger },
      {
        variant: "light",
        color: "default",
        class: [H.light.default, "data-[hover=true]:bg-default/40"],
      },
      {
        variant: "light",
        color: "primary",
        class: [H.light.primary, "data-[hover=true]:bg-primary/20"],
      },
      {
        variant: "light",
        color: "secondary",
        class: [H.light.secondary, "data-[hover=true]:bg-secondary/20"],
      },
      {
        variant: "light",
        color: "success",
        class: [H.light.success, "data-[hover=true]:bg-success/20"],
      },
      {
        variant: "light",
        color: "warning",
        class: [H.light.warning, "data-[hover=true]:bg-warning/20"],
      },
      {
        variant: "light",
        color: "danger",
        class: [H.light.danger, "data-[hover=true]:bg-danger/20"],
      },
      { variant: "ghost", color: "default", class: H.ghost.default },
      { variant: "ghost", color: "primary", class: H.ghost.primary },
      { variant: "ghost", color: "secondary", class: H.ghost.secondary },
      { variant: "ghost", color: "success", class: H.ghost.success },
      { variant: "ghost", color: "warning", class: H.ghost.warning },
      { variant: "ghost", color: "danger", class: H.ghost.danger },
      {
        isInGroup: !0,
        class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
      },
      {
        isInGroup: !0,
        size: "sm",
        class: "rounded-none first:rounded-s-small last:rounded-e-small",
      },
      {
        isInGroup: !0,
        size: "md",
        class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
      },
      {
        isInGroup: !0,
        size: "lg",
        class: "rounded-none first:rounded-s-large last:rounded-e-large",
      },
      {
        isInGroup: !0,
        isRounded: !0,
        class: "rounded-none first:rounded-s-full last:rounded-e-full",
      },
      {
        isInGroup: !0,
        radius: "none",
        class: "rounded-none first:rounded-s-none last:rounded-e-none",
      },
      {
        isInGroup: !0,
        radius: "sm",
        class: "rounded-none first:rounded-s-small last:rounded-e-small",
      },
      {
        isInGroup: !0,
        radius: "md",
        class: "rounded-none first:rounded-s-medium last:rounded-e-medium",
      },
      {
        isInGroup: !0,
        radius: "lg",
        class: "rounded-none first:rounded-s-large last:rounded-e-large",
      },
      {
        isInGroup: !0,
        radius: "full",
        class: "rounded-none first:rounded-s-full last:rounded-e-full",
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "default",
        className: qn.default,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "primary",
        className: qn.primary,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "secondary",
        className: qn.secondary,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "success",
        className: qn.success,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "warning",
        className: qn.warning,
      },
      {
        isInGroup: !0,
        variant: ["ghost", "bordered"],
        color: "danger",
        className: qn.danger,
      },
      { isIconOnly: !0, size: "sm", class: "min-w-8 w-8 h-8" },
      { isIconOnly: !0, size: "md", class: "min-w-10 w-10 h-10" },
      { isIconOnly: !0, size: "lg", class: "min-w-12 w-12 h-12" },
      {
        variant: ["solid", "faded", "flat", "bordered", "shadow"],
        class: "data-[hover=true]:opacity-hover",
      },
    ],
  });
Sn({
  base: "inline-flex items-center justify-center h-auto",
  variants: { fullWidth: { true: "w-full" } },
  defaultVariants: { fullWidth: !1 },
});
var RE = (e) =>
    k.jsxs("svg", {
      "aria-hidden": "true",
      fill: "none",
      focusable: "false",
      height: "1em",
      shapeRendering: "geometricPrecision",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      viewBox: "0 0 24 24",
      width: "1em",
      ...e,
      children: [
        k.jsx("path", {
          d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
        }),
        k.jsx("path", { d: "M15 3h6v6" }),
        k.jsx("path", { d: "M10 14L21 3" }),
      ],
    }),
  qt = {
    ease: [0.36, 0.66, 0.4, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    spring: [0.155, 1.105, 0.295, 1.12],
    springOut: [0.57, -0.15, 0.62, 0.07],
    softSpring: [0.16, 1.11, 0.3, 1.02],
  },
  Wp = {
    scaleSpring: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { type: "spring", bounce: 0, duration: 0.2 },
      },
      exit: {
        transform: "scale(0.85)",
        opacity: 0,
        transition: { type: "easeOut", duration: 0.15 },
      },
    },
    scaleSpringOpacity: {
      initial: { opacity: 0, transform: "scale(0.8)" },
      enter: {
        opacity: 1,
        transform: "scale(1)",
        transition: { type: "spring", bounce: 0, duration: 0.3 },
      },
      exit: {
        opacity: 0,
        transform: "scale(0.96)",
        transition: { type: "easeOut", bounce: 0, duration: 0.15 },
      },
    },
    scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
    scaleFadeIn: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { duration: 0.25, ease: qt.easeIn },
      },
      exit: {
        transform: "scale(0.95)",
        opacity: 0,
        transition: { duration: 0.2, ease: qt.easeOut },
      },
    },
    scaleInOut: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { duration: 0.4, ease: qt.ease },
      },
      exit: {
        transform: "scale(1.03)",
        opacity: 0,
        transition: { duration: 0.3, ease: qt.ease },
      },
    },
    fade: {
      enter: { opacity: 1, transition: { duration: 0.4, ease: qt.ease } },
      exit: { opacity: 0, transition: { duration: 0.3, ease: qt.ease } },
    },
    collapse: {
      enter: {
        opacity: 1,
        height: "auto",
        transition: {
          height: { type: "spring", bounce: 0, duration: 0.3 },
          opacity: { easings: "ease", duration: 0.4 },
        },
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: { easings: "ease", duration: 0.3 },
      },
    },
  },
  AE = (e) => {
    const t = {
      top: { originY: 1 },
      bottom: { originY: 0 },
      left: { originX: 1 },
      right: { originX: 0 },
      "top-start": { originX: 0, originY: 1 },
      "top-end": { originX: 1, originY: 1 },
      "bottom-start": { originX: 0, originY: 0 },
      "bottom-end": { originX: 1, originY: 0 },
      "right-start": { originX: 0, originY: 0 },
      "right-end": { originX: 0, originY: 1 },
      "left-start": { originX: 1, originY: 0 },
      "left-end": { originX: 1, originY: 1 },
    };
    return (t == null ? void 0 : t[e]) || {};
  },
  OE = (e) =>
    ({
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      "top-start": "top start",
      "top-end": "top end",
      "bottom-start": "bottom start",
      "bottom-end": "bottom end",
      "left-start": "left top",
      "left-end": "left bottom",
      "right-start": "right top",
      "right-end": "right bottom",
    }[e]),
  IE = (e, t) => {
    if (t.includes("-")) {
      const [n] = t.split("-");
      if (n.includes(e)) return !1;
    }
    return !0;
  },
  Up = (e, t) => {
    if (t.includes("-")) {
      const [, n] = t.split("-");
      return `${e}-${n}`;
    }
    return e;
  },
  io = new WeakMap(),
  ot = [];
function FE(e, t = document.body) {
  let n = new Set(e),
    r = new Set(),
    o = (a) => {
      for (let f of a.querySelectorAll(
        "[data-live-announcer], [data-react-aria-top-layer]"
      ))
        n.add(f);
      let u = (f) => {
          const v = f.parentElement;
          if (n.has(f) || (r.has(v) && v.getAttribute("role") !== "row"))
            return NodeFilter.FILTER_REJECT;
          for (let y of n) if (f.contains(y)) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        },
        c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
          acceptNode: u,
        }),
        d = u(a);
      if (
        (d === NodeFilter.FILTER_ACCEPT && i(a), d !== NodeFilter.FILTER_REJECT)
      ) {
        let f = c.nextNode();
        for (; f != null; ) i(f), (f = c.nextNode());
      }
    },
    i = (a) => {
      var u;
      let c = (u = io.get(a)) != null ? u : 0;
      (a.getAttribute("aria-hidden") === "true" && c === 0) ||
        (c === 0 && a.setAttribute("aria-hidden", "true"),
        r.add(a),
        io.set(a, c + 1));
    };
  ot.length && ot[ot.length - 1].disconnect(), o(t);
  let s = new MutationObserver((a) => {
    for (let u of a)
      if (
        !(u.type !== "childList" || u.addedNodes.length === 0) &&
        ![...n, ...r].some((c) => c.contains(u.target))
      ) {
        for (let c of u.removedNodes)
          c instanceof Element && (n.delete(c), r.delete(c));
        for (let c of u.addedNodes)
          (c instanceof HTMLElement || c instanceof SVGElement) &&
          (c.dataset.liveAnnouncer === "true" ||
            c.dataset.reactAriaTopLayer === "true")
            ? n.add(c)
            : c instanceof Element && o(c);
      }
  });
  s.observe(t, { childList: !0, subtree: !0 });
  let l = {
    observe() {
      s.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      s.disconnect();
    },
  };
  return (
    ot.push(l),
    () => {
      s.disconnect();
      for (let a of r) {
        let u = io.get(a);
        u != null &&
          (u === 1
            ? (a.removeAttribute("aria-hidden"), io.delete(a))
            : io.set(a, u - 1));
      }
      l === ot[ot.length - 1]
        ? (ot.pop(), ot.length && ot[ot.length - 1].observe())
        : ot.splice(ot.indexOf(l), 1);
    }
  );
}
var VE = (e, t, n) => {
    const r = t == null ? void 0 : t.current;
    if (!r || !r.contains(e)) {
      const o = document.querySelectorAll(
        "body > span[data-focus-scope-start]"
      );
      let i = [];
      if (
        (o.forEach((s) => {
          i.push(s.nextElementSibling);
        }),
        i.length === 1)
      )
        return n.close(), !1;
    }
    return !r || !r.contains(e);
  },
  DE =
    globalThis != null && globalThis.document ? w.useLayoutEffect : w.useEffect,
  [o$, jE] = al({ name: "ButtonGroupContext", strict: !1 });
function wd(e, t) {
  let {
      elementType: n = "button",
      isDisabled: r,
      onPress: o,
      onPressStart: i,
      onPressEnd: s,
      onPressChange: l,
      preventFocusOnPress: a,
      allowFocusWhenDisabled: u,
      onClick: c,
      href: d,
      target: f,
      rel: v,
      type: y = "button",
      allowTextSelectionOnPress: b,
    } = e,
    C;
  n === "button"
    ? (C = { type: y, disabled: r })
    : (C = {
        role: "button",
        tabIndex: r ? void 0 : 0,
        href: n === "a" && r ? void 0 : d,
        target: n === "a" ? f : void 0,
        type: n === "input" ? y : void 0,
        disabled: n === "input" ? r : void 0,
        "aria-disabled": !r || n === "input" ? void 0 : r,
        rel: n === "a" ? v : void 0,
      });
  let { pressProps: h, isPressed: p } = zv({
      onPressStart: i,
      onPressEnd: s,
      onPressChange: l,
      onPress: o,
      isDisabled: r,
      preventFocusOnPress: a,
      allowTextSelectionOnPress: b,
      ref: t,
    }),
    { focusableProps: m } = Jv(e, t);
  u && (m.tabIndex = r ? -1 : m.tabIndex);
  let S = fe(m, h, Ic(e, { labelable: !0 }));
  return {
    isPressed: p,
    buttonProps: fe(C, S, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      onClick: (P) => {
        c == null || c(P);
      },
    }),
  };
}
var iy = (e) => {
  const {
    ripples: t = [],
    motionProps: n,
    color: r = "currentColor",
    style: o,
    onClear: i,
  } = e;
  return k.jsx(k.Fragment, {
    children: t.map((s) => {
      const l = sb(0.01 * s.size, 0.2, s.size > 100 ? 0.75 : 0.5);
      return k.jsx(
        Yo,
        {
          features: Qo,
          children: k.jsx(gd, {
            mode: "popLayout",
            children: k.jsx(Go.span, {
              animate: { transform: "scale(2)", opacity: 0 },
              className: "nextui-ripple",
              exit: { opacity: 0 },
              initial: { transform: "scale(0)", opacity: 0.35 },
              style: {
                position: "absolute",
                backgroundColor: r,
                borderRadius: "100%",
                transformOrigin: "center",
                pointerEvents: "none",
                overflow: "hidden",
                inset: 0,
                zIndex: 0,
                top: s.y,
                left: s.x,
                width: `${s.size}px`,
                height: `${s.size}px`,
                ...o,
              },
              transition: { duration: l },
              onAnimationComplete: () => {
                i(s.key);
              },
              ...n,
            }),
          }),
        },
        s.key
      );
    }),
  });
};
iy.displayName = "NextUI.Ripple";
var zE = iy;
function BE(e = {}) {
  const [t, n] = w.useState([]),
    r = w.useCallback((i) => {
      const s = i.currentTarget,
        l = Math.max(s.clientWidth, s.clientHeight),
        a = s.getBoundingClientRect();
      n((u) => [
        ...u,
        {
          key: ib(u.length.toString()),
          size: l,
          x: i.clientX - a.left - l / 2,
          y: i.clientY - a.top - l / 2,
        },
      ]);
    }, []),
    o = w.useCallback((i) => {
      n((s) => s.filter((l) => l.key !== i));
    }, []);
  return { ripples: t, onClick: r, onClear: o, ...e };
}
function HE(e) {
  var t, n, r, o, i, s, l, a, u;
  const c = jE(),
    d = ul(),
    f = !!c,
    {
      ref: v,
      as: y,
      children: b,
      startContent: C,
      endContent: h,
      autoFocus: p,
      className: m,
      spinner: S,
      isLoading: P = !1,
      disableRipple: $ = !1,
      fullWidth: O = (t = c == null ? void 0 : c.fullWidth) != null ? t : !1,
      radius: g = c == null ? void 0 : c.radius,
      size: M = (n = c == null ? void 0 : c.size) != null ? n : "md",
      color: I = (r = c == null ? void 0 : c.color) != null ? r : "default",
      variant: R = (o = c == null ? void 0 : c.variant) != null ? o : "solid",
      disableAnimation: _ = (s =
        (i = c == null ? void 0 : c.disableAnimation) != null
          ? i
          : d == null
          ? void 0
          : d.disableAnimation) != null
        ? s
        : !1,
      isDisabled: E = (l = c == null ? void 0 : c.isDisabled) != null ? l : !1,
      isIconOnly: T = (a = c == null ? void 0 : c.isIconOnly) != null ? a : !1,
      spinnerPlacement: V = "start",
      onPress: j,
      onClick: U,
      ...N
    } = e,
    A = y || "button",
    D = typeof A == "string",
    x = xt(v),
    L = (u = $ || (d == null ? void 0 : d.disableRipple)) != null ? u : _,
    { isFocusVisible: B, isFocused: G, focusProps: Y } = pl({ autoFocus: p }),
    K = E || P,
    te = w.useMemo(
      () =>
        _E({
          size: M,
          color: I,
          variant: R,
          radius: g,
          fullWidth: O,
          isDisabled: K,
          isInGroup: f,
          disableAnimation: _,
          isIconOnly: T,
          className: m,
        }),
      [M, I, R, g, O, K, f, T, _, m]
    ),
    { onClick: ie, onClear: Q, ripples: Ee } = BE(),
    si = w.useCallback(
      (Rt) => {
        L || K || _ || (x.current && ie(Rt));
      },
      [L, K, _, x, ie]
    ),
    { buttonProps: Nt, isPressed: Lt } = wd(
      { elementType: y, isDisabled: K, onPress: j, onClick: dl(U, si), ...N },
      x
    ),
    { isHovered: li, hoverProps: ai } = Xv({ isDisabled: K }),
    Sl = w.useCallback(
      (Rt = {}) => ({
        "data-disabled": ne(K),
        "data-focus": ne(G),
        "data-pressed": ne(Lt),
        "data-focus-visible": ne(B),
        "data-hover": ne(li),
        "data-loading": ne(P),
        ...fe(Nt, Y, ai, Af(N, { enabled: D }), Af(Rt)),
      }),
      [P, K, G, Lt, D, B, li, Nt, Y, ai, N]
    ),
    _t = (Rt) =>
      w.isValidElement(Rt)
        ? w.cloneElement(Rt, { "aria-hidden": !0, focusable: !1, tabIndex: -1 })
        : null,
    Cl = _t(C),
    Pl = _t(h),
    El = w.useMemo(() => ({ sm: "sm", md: "sm", lg: "md" }[M]), [M]),
    $l = w.useCallback(() => ({ ripples: Ee, onClear: Q }), [Ee, Q]);
  return {
    Component: A,
    children: b,
    domRef: x,
    spinner: S,
    styles: te,
    startContent: Cl,
    endContent: Pl,
    isLoading: P,
    spinnerPlacement: V,
    spinnerSize: El,
    disableRipple: L,
    getButtonProps: Sl,
    getRippleProps: $l,
    isIconOnly: T,
  };
}
function WE(e) {
  const [t, n] = Wr(e, Dp.variantKeys),
    { children: r, className: o, classNames: i, label: s, ...l } = t,
    a = w.useMemo(() => Dp({ ...n }), [Dr(n)]),
    u = Ke(i == null ? void 0 : i.base, o),
    c = s || r,
    d = w.useMemo(
      () => (c && typeof c == "string" ? c : l["aria-label"] ? "" : "Loading"),
      [r, c, l["aria-label"]]
    ),
    f = w.useCallback(
      () => ({ "aria-label": d, className: a.base({ class: u }), ...l }),
      [d, a, u, l]
    );
  return { label: c, slots: a, classNames: i, getSpinnerProps: f };
}
var sy = Be((e, t) => {
  const {
    slots: n,
    classNames: r,
    label: o,
    getSpinnerProps: i,
  } = WE({ ...e });
  return k.jsxs("div", {
    ref: t,
    ...i(),
    children: [
      k.jsxs("div", {
        className: n.wrapper({ class: r == null ? void 0 : r.wrapper }),
        children: [
          k.jsx("i", {
            className: n.circle1({ class: r == null ? void 0 : r.circle1 }),
          }),
          k.jsx("i", {
            className: n.circle2({ class: r == null ? void 0 : r.circle2 }),
          }),
        ],
      }),
      o &&
        k.jsx("span", {
          className: n.label({ class: r == null ? void 0 : r.label }),
          children: o,
        }),
    ],
  });
});
sy.displayName = "NextUI.Spinner";
var UE = sy,
  ly = Be((e, t) => {
    const {
      Component: n,
      domRef: r,
      children: o,
      styles: i,
      spinnerSize: s,
      spinner: l = k.jsx(UE, { color: "current", size: s }),
      spinnerPlacement: a,
      startContent: u,
      endContent: c,
      isLoading: d,
      disableRipple: f,
      getButtonProps: v,
      getRippleProps: y,
      isIconOnly: b,
    } = HE({ ...e, ref: t });
    return k.jsxs(n, {
      ref: r,
      className: i,
      ...v(),
      children: [
        u,
        d && a === "start" && l,
        d && b ? null : o,
        d && a === "end" && l,
        c,
        !f && k.jsx(zE, { ...y() }),
      ],
    });
  });
ly.displayName = "NextUI.Button";
var Vu = ly;
function KE(e = {}) {
  let { isReadOnly: t } = e,
    [n, r] = Vc(e.isSelected, e.defaultSelected || !1, e.onChange);
  function o(s) {
    t || r(s);
  }
  function i() {
    t || r(!n);
  }
  return { isSelected: n, setSelected: o, toggle: i };
}
function GE(e) {
  const [t, n] = Wr(e, Hp.variantKeys),
    { as: r, children: o, className: i, ...s } = t,
    l = r || "code",
    a = w.useMemo(() => Hp({ ...n, className: i }), [Dr(n), i]);
  return {
    Component: l,
    children: o,
    getCodeProps: () => ({ className: a, ...s }),
  };
}
var ay = Be((e, t) => {
  const { Component: n, children: r, getCodeProps: o } = GE({ ...e });
  return k.jsx(n, { ref: t, ...o(), children: r });
});
ay.displayName = "NextUI.Code";
var Vi = ay;
function YE(e, t) {
  let {
      elementType: n = "a",
      onPress: r,
      onPressStart: o,
      onPressEnd: i,
      onClick: s,
      isDisabled: l,
      ...a
    } = e,
    u = {};
  n !== "a" && (u = { role: "link", tabIndex: l ? void 0 : 0 });
  let { focusableProps: c } = Jv(e, t),
    { pressProps: d, isPressed: f } = zv({
      onPress: r,
      onPressStart: o,
      onPressEnd: i,
      isDisabled: l,
      ref: t,
    }),
    v = Ic(a, { labelable: !0 }),
    y = fe(c, d),
    b = _v(),
    C = lx(e);
  return {
    isPressed: f,
    linkProps: fe(v, C, {
      ...y,
      ...u,
      "aria-disabled": l || void 0,
      "aria-current": e["aria-current"],
      onClick: (h) => {
        var p;
        (p = d.onClick) === null || p === void 0 || p.call(d, h),
          s &&
            (s(h), console.warn("onClick is deprecated, please use onPress")),
          !b.isNative &&
            h.currentTarget instanceof HTMLAnchorElement &&
            h.currentTarget.href &&
            !h.isDefaultPrevented() &&
            Rv(h.currentTarget, h) &&
            e.href &&
            (h.preventDefault(),
            b.open(h.currentTarget, h, e.href, e.routerOptions));
      },
    }),
  };
}
function QE(e) {
  var t, n, r, o;
  const i = ul(),
    [s, l] = Wr(e, Bp.variantKeys),
    {
      ref: a,
      as: u,
      children: c,
      anchorIcon: d,
      isExternal: f = !1,
      showAnchorIcon: v = !1,
      autoFocus: y = !1,
      className: b,
      onPress: C,
      onPressStart: h,
      onPressEnd: p,
      onClick: m,
      ...S
    } = s,
    P = u || "a",
    $ = xt(a),
    O =
      (n =
        (t = e == null ? void 0 : e.disableAnimation) != null
          ? t
          : i == null
          ? void 0
          : i.disableAnimation) != null
        ? n
        : !1,
    { linkProps: g } = YE(
      {
        ...S,
        onPress: C,
        onPressStart: h,
        onPressEnd: p,
        onClick: m,
        isDisabled: e.isDisabled,
        elementType: `${u}`,
      },
      $
    ),
    { isFocused: M, isFocusVisible: I, focusProps: R } = pl({ autoFocus: y });
  f &&
    ((S.rel = (r = S.rel) != null ? r : "noopener noreferrer"),
    (S.target = (o = S.target) != null ? o : "_blank"));
  const _ = w.useMemo(
      () => Bp({ ...l, disableAnimation: O, className: b }),
      [Dr(l), O, b]
    ),
    E = w.useCallback(
      () => ({
        ref: $,
        className: _,
        "data-focus": ne(M),
        "data-disabled": ne(e.isDisabled),
        "data-focus-visible": ne(I),
        ...fe(R, g, S),
      }),
      [_, M, I, R, g, S]
    );
  return {
    Component: P,
    children: c,
    anchorIcon: d,
    showAnchorIcon: v,
    getLinkProps: E,
  };
}
var uy = Be((e, t) => {
  const {
    Component: n,
    children: r,
    showAnchorIcon: o,
    anchorIcon: i = k.jsx(RE, { className: LE }),
    getLinkProps: s,
  } = QE({ ref: t, ...e });
  return k.jsx(n, {
    ...s(),
    children: k.jsxs(k.Fragment, { children: [r, o && i] }),
  });
});
uy.displayName = "NextUI.Link";
var Di = uy;
function XE(e) {
  let [t, n] = Vc(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const r = w.useCallback(() => {
      n(!0);
    }, [n]),
    o = w.useCallback(() => {
      n(!1);
    }, [n]),
    i = w.useCallback(() => {
      n(!t);
    }, [n, t]);
  return { isOpen: t, setOpen: n, open: r, close: o, toggle: i };
}
function ZE(e, t) {
  const {
      triggerRef: n,
      popoverRef: r,
      showArrow: o,
      offset: i = 7,
      crossOffset: s = 0,
      scrollRef: l,
      shouldFlip: a,
      boundaryElement: u,
      isDismissable: c = !0,
      shouldCloseOnBlur: d = !0,
      placement: f = "top",
      containerPadding: v,
      shouldCloseOnInteractOutside: y,
      isNonModal: b,
      isKeyboardDismissDisabled: C,
      updatePositionDeps: h = [],
      ...p
    } = e,
    m = b ?? !0,
    { overlayProps: S, underlayProps: P } = r2(
      {
        isOpen: t.isOpen,
        onClose: t.close,
        shouldCloseOnBlur: d,
        isDismissable: c,
        isKeyboardDismissDisabled: C,
        shouldCloseOnInteractOutside: y || ((I) => VE(I, n, t)),
      },
      r
    ),
    {
      overlayProps: $,
      arrowProps: O,
      placement: g,
      updatePosition: M,
    } = bx({
      ...p,
      shouldFlip: a,
      crossOffset: s,
      targetRef: n,
      overlayRef: r,
      isOpen: t.isOpen,
      scrollRef: l,
      boundaryElement: u,
      containerPadding: v,
      placement: OE(f),
      offset: o ? i + 3 : i,
      onClose: m ? t.close : () => {},
    });
  return (
    DE(() => {
      h.length && M();
    }, h),
    w.useEffect(() => {
      if (t.isOpen && !m && r.current) return FE([r.current]);
    }, [m, t.isOpen, r]),
    { popoverProps: fe(S, $), arrowProps: O, underlayProps: P, placement: g }
  );
}
function qE(e) {
  var t, n, r;
  const o = ul(),
    [i, s] = Wr(e, zp.variantKeys),
    {
      as: l,
      ref: a,
      children: u,
      state: c,
      triggerRef: d,
      scrollRef: f,
      defaultOpen: v,
      onOpenChange: y,
      isOpen: b,
      isNonModal: C = !0,
      shouldFlip: h = !0,
      containerPadding: p = 12,
      shouldBlockScroll: m = !1,
      isDismissable: S = !0,
      shouldCloseOnBlur: P,
      portalContainer: $,
      updatePositionDeps: O,
      dialogProps: g,
      placement: M = "top",
      triggerType: I = "dialog",
      showArrow: R = !1,
      offset: _ = 7,
      crossOffset: E = 0,
      boundaryElement: T,
      isKeyboardDismissDisabled: V,
      shouldCloseOnInteractOutside: j,
      motionProps: U,
      className: N,
      classNames: A,
      onClose: D,
      ...x
    } = i,
    L = l || "div",
    B = xt(a),
    G = w.useRef(null),
    Y = w.useRef(!1),
    K = d || G,
    te =
      (n =
        (t = e.disableAnimation) != null
          ? t
          : o == null
          ? void 0
          : o.disableAnimation) != null
        ? n
        : !1,
    ie = XE({
      isOpen: b,
      defaultOpen: v,
      onOpenChange: ($e) => {
        y == null || y($e), $e || D == null || D();
      },
    }),
    Q = c || ie,
    {
      popoverProps: Ee,
      underlayProps: si,
      placement: Nt,
    } = ZE(
      {
        triggerRef: K,
        isNonModal: C,
        popoverRef: B,
        placement: M,
        offset: _,
        scrollRef: f,
        isDismissable: S,
        shouldCloseOnBlur: P,
        boundaryElement: T,
        crossOffset: E,
        shouldFlip: h,
        containerPadding: p,
        updatePositionDeps: O,
        isKeyboardDismissDisabled: V,
        shouldCloseOnInteractOutside: j,
      },
      Q
    ),
    { triggerProps: Lt } = o2({ type: I }, Q, K),
    { isFocusVisible: li, isFocused: ai, focusProps: Sl } = pl(),
    _t = w.useMemo(() => zp({ ...s }), [Dr(s)]),
    Cl = Ke(A == null ? void 0 : A.base, N),
    Pl = ($e = {}) => ({
      ref: B,
      ...fe(Ee, x, $e),
      style: fe(Ee.style, x.style, $e.style),
    }),
    El = ($e = {}) => ({
      "data-slot": "base",
      "data-open": ne(Q.isOpen),
      "data-focus": ne(ai),
      "data-arrow": ne(R),
      "data-focus-visible": ne(li),
      "data-placement": Up(Nt, M),
      ...fe(Sl, g, $e),
      className: _t.base({ class: Ke(Cl) }),
      style: { outline: "none" },
    }),
    $l = w.useCallback(
      ($e = {}) => ({
        "data-slot": "content",
        "data-open": ne(Q.isOpen),
        "data-arrow": ne(R),
        "data-placement": Up(Nt, M),
        className: _t.content({
          class: Ke(A == null ? void 0 : A.content, $e.className),
        }),
      }),
      [_t, Q.isOpen, R, Nt, M, A]
    ),
    Rt = w.useMemo(() => (IE(Nt, M) && Nt) || M, [Nt, M]),
    xd = w.useCallback(
      ($e) => {
        var Yn;
        let Kr;
        return (
          $e.pointerType === "touch" &&
          ((e == null ? void 0 : e.backdrop) === "blur" ||
            (e == null ? void 0 : e.backdrop) === "opaque")
            ? (Kr = setTimeout(() => {
                Y.current = !0;
              }, 100))
            : (Y.current = !0),
          (Yn = Lt.onPress) == null || Yn.call(Lt, $e),
          () => {
            clearTimeout(Kr);
          }
        );
      },
      [Lt == null ? void 0 : Lt.onPress]
    ),
    My = w.useCallback(
      ($e = {}, Yn = null) => {
        const { isDisabled: Kr, ...Ly } = $e;
        return {
          "data-slot": "trigger",
          "aria-haspopup": "dialog",
          ...fe(Lt, Ly),
          onPress: xd,
          isDisabled: Kr,
          className: _t.trigger({
            class: Ke(A == null ? void 0 : A.trigger, $e.className),
            isTriggerDisabled: Kr,
          }),
          ref: Yb(Yn, K),
        };
      },
      [Q, Lt, xd, K]
    ),
    Ny = w.useCallback(
      ($e = {}) => ({
        "data-slot": "backdrop",
        className: _t.backdrop({ class: A == null ? void 0 : A.backdrop }),
        onClick: (Yn) => {
          if (!Y.current) {
            Yn.preventDefault();
            return;
          }
          Q.close(), (Y.current = !1);
        },
        ...si,
        ...$e,
      }),
      [_t, Q.isOpen, A, si]
    );
  return (
    w.useEffect(() => {
      if (Q.isOpen && B != null && B.current)
        return f2([B == null ? void 0 : B.current]);
    }, [Q.isOpen, B]),
    {
      state: Q,
      Component: L,
      children: u,
      classNames: A,
      showArrow: R,
      triggerRef: K,
      placement: Rt,
      isNonModal: C,
      popoverRef: B,
      portalContainer: $,
      isOpen: Q.isOpen,
      onClose: Q.close,
      disableAnimation: te,
      shouldBlockScroll: m,
      backdrop: (r = e.backdrop) != null ? r : "transparent",
      motionProps: U,
      getBackdropProps: Ny,
      getPopoverProps: Pl,
      getTriggerProps: My,
      getDialogProps: El,
      getContentProps: $l,
    }
  );
}
function JE(e, t) {
  let { role: n = "dialog" } = e,
    r = Kb();
  r = e["aria-label"] ? void 0 : r;
  let o = w.useRef(!1);
  return (
    w.useEffect(() => {
      if (t.current && !t.current.contains(document.activeElement)) {
        As(t.current);
        let i = setTimeout(() => {
          document.activeElement === t.current &&
            ((o.current = !0),
            t.current && (t.current.blur(), As(t.current)),
            (o.current = !1));
        }, 500);
        return () => {
          clearTimeout(i);
        };
      }
    }, [t]),
    m2(),
    {
      dialogProps: {
        ...Ic(e, { labelable: !0 }),
        role: n,
        tabIndex: -1,
        "aria-labelledby": e["aria-labelledby"] || r,
        onBlur: (i) => {
          o.current && i.stopPropagation();
        },
      },
      titleProps: { id: r },
    }
  );
}
var [e3, cy] = al({
    name: "PopoverContext",
    errorMessage:
      "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`",
  }),
  rs = "right-scroll-bar-position",
  os = "width-before-scroll-bar",
  t3 = "with-scroll-bars-hidden",
  n3 = "--removed-body-scroll-bar-size";
function fa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function r3(e, t) {
  var n = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var o3 = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  Kp = new WeakMap();
function i3(e, t) {
  var n = r3(null, function (r) {
    return e.forEach(function (o) {
      return fa(o, r);
    });
  });
  return (
    o3(
      function () {
        var r = Kp.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (l) {
            i.has(l) || fa(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || fa(l, s);
            });
        }
        Kp.set(n, e);
      },
      [e]
    ),
    n
  );
}
function s3(e) {
  return e;
}
function l3(e, t) {
  t === void 0 && (t = s3);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (l) {
              return l !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (s = n);
        }
        var a = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function a3(e) {
  e === void 0 && (e = {});
  var t = l3(null);
  return (t.options = Et({ async: !0, ssr: !1 }, e)), t;
}
var dy = function (e) {
  var t = e.sideCar,
    n = Ev(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, Et({}, n));
};
dy.isSideCarExport = !0;
function u3(e, t) {
  return e.useMedium(t), dy;
}
var fy = a3(),
  pa = function () {},
  xl = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: pa,
        onWheelCapture: pa,
        onTouchMoveCapture: pa,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      v = e.noIsolation,
      y = e.inert,
      b = e.allowPinchZoom,
      C = e.as,
      h = C === void 0 ? "div" : C,
      p = e.gapMode,
      m = Ev(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      S = f,
      P = i3([n, t]),
      $ = Et(Et({}, m), o);
    return w.createElement(
      w.Fragment,
      null,
      c &&
        w.createElement(S, {
          sideCar: fy,
          removeScrollBar: u,
          shards: d,
          noIsolation: v,
          inert: y,
          setCallbacks: i,
          allowPinchZoom: !!b,
          lockRef: n,
          gapMode: p,
        }),
      s
        ? w.cloneElement(w.Children.only(l), Et(Et({}, $), { ref: P }))
        : w.createElement(h, Et({}, $, { className: a, ref: P }), l)
    );
  });
xl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
xl.classNames = { fullWidth: os, zeroRight: rs };
var c3 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function d3() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = c3();
  return t && e.setAttribute("nonce", t), e;
}
function f3(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function p3(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var h3 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = d3()) && (f3(t, n), p3(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  m3 = function () {
    var e = h3();
    return function (t, n) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  py = function () {
    var e = m3(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  v3 = { left: 0, top: 0, right: 0, gap: 0 },
  ha = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  g3 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [ha(n), ha(r), ha(o)];
  },
  y3 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return v3;
    var t = g3(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  w3 = py(),
  Er = "data-scroll-locked",
  b3 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          t3,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Er,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          rs,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          os,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(rs, " .")
        .concat(
          rs,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(os, " .")
        .concat(
          os,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Er,
          `] {
    `
        )
        .concat(n3, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Gp = function () {
    var e = parseInt(document.body.getAttribute(Er) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  x3 = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(Er, (Gp() + 1).toString()),
        function () {
          var e = Gp() - 1;
          e <= 0
            ? document.body.removeAttribute(Er)
            : document.body.setAttribute(Er, e.toString());
        }
      );
    }, []);
  },
  S3 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    x3();
    var i = w.useMemo(
      function () {
        return y3(o);
      },
      [o]
    );
    return w.createElement(w3, { styles: b3(i, !t, o, n ? "" : "!important") });
  },
  Du = !1;
if (typeof window < "u")
  try {
    var ji = Object.defineProperty({}, "passive", {
      get: function () {
        return (Du = !0), !0;
      },
    });
    window.addEventListener("test", ji, ji),
      window.removeEventListener("test", ji, ji);
  } catch {
    Du = !1;
  }
var Jn = Du ? { passive: !1 } : !1,
  C3 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  hy = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !C3(e) && n[t] === "visible")
    );
  },
  P3 = function (e) {
    return hy(e, "overflowY");
  },
  E3 = function (e) {
    return hy(e, "overflowX");
  },
  Yp = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = my(e, r);
      if (o) {
        var i = vy(e, r),
          s = i[1],
          l = i[2];
        if (s > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  $3 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  k3 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  my = function (e, t) {
    return e === "v" ? P3(t) : E3(t);
  },
  vy = function (e, t) {
    return e === "v" ? $3(t) : k3(t);
  },
  T3 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  M3 = function (e, t, n, r, o) {
    var i = T3(e, window.getComputedStyle(t).direction),
      s = i * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      var v = vy(e, l),
        y = v[0],
        b = v[1],
        C = v[2],
        h = b - C - i * y;
      (y || h) && my(e, l) && ((d += h), (f += y)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  zi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Qp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Xp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  N3 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  L3 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  _3 = 0,
  er = [];
function R3(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(_3++)[0],
    i = w.useState(py)[0],
    s = w.useRef(e);
  w.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var b = _b([e.lockRef.current], (e.shards || []).map(Xp), !0).filter(
            Boolean
          );
          return (
            b.forEach(function (C) {
              return C.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                b.forEach(function (C) {
                  return C.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = w.useCallback(function (b, C) {
      if (
        ("touches" in b && b.touches.length === 2) ||
        (b.type === "wheel" && b.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var h = zi(b),
        p = n.current,
        m = "deltaX" in b ? b.deltaX : p[0] - h[0],
        S = "deltaY" in b ? b.deltaY : p[1] - h[1],
        P,
        $ = b.target,
        O = Math.abs(m) > Math.abs(S) ? "h" : "v";
      if ("touches" in b && O === "h" && $.type === "range") return !1;
      var g = Yp(O, $);
      if (!g) return !0;
      if ((g ? (P = O) : ((P = O === "v" ? "h" : "v"), (g = Yp(O, $))), !g))
        return !1;
      if (
        (!r.current && "changedTouches" in b && (m || S) && (r.current = P), !P)
      )
        return !0;
      var M = r.current || P;
      return M3(M, C, b, M === "h" ? m : S, !0);
    }, []),
    a = w.useCallback(function (b) {
      var C = b;
      if (!(!er.length || er[er.length - 1] !== i)) {
        var h = "deltaY" in C ? Qp(C) : zi(C),
          p = t.current.filter(function (P) {
            return (
              P.name === C.type &&
              (P.target === C.target || C.target === P.shadowParent) &&
              N3(P.delta, h)
            );
          })[0];
        if (p && p.should) {
          C.cancelable && C.preventDefault();
          return;
        }
        if (!p) {
          var m = (s.current.shards || [])
              .map(Xp)
              .filter(Boolean)
              .filter(function (P) {
                return P.contains(C.target);
              }),
            S = m.length > 0 ? l(C, m[0]) : !s.current.noIsolation;
          S && C.cancelable && C.preventDefault();
        }
      }
    }, []),
    u = w.useCallback(function (b, C, h, p) {
      var m = { name: b, delta: C, target: h, should: p, shadowParent: A3(h) };
      t.current.push(m),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== m;
          });
        }, 1);
    }, []),
    c = w.useCallback(function (b) {
      (n.current = zi(b)), (r.current = void 0);
    }, []),
    d = w.useCallback(function (b) {
      u(b.type, Qp(b), b.target, l(b, e.lockRef.current));
    }, []),
    f = w.useCallback(function (b) {
      u(b.type, zi(b), b.target, l(b, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      er.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", a, Jn),
      document.addEventListener("touchmove", a, Jn),
      document.addEventListener("touchstart", c, Jn),
      function () {
        (er = er.filter(function (b) {
          return b !== i;
        })),
          document.removeEventListener("wheel", a, Jn),
          document.removeEventListener("touchmove", a, Jn),
          document.removeEventListener("touchstart", c, Jn);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    y = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    y ? w.createElement(i, { styles: L3(o) }) : null,
    v ? w.createElement(S3, { gapMode: e.gapMode }) : null
  );
}
function A3(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const O3 = u3(fy, R3);
var bd = w.forwardRef(function (e, t) {
  return w.createElement(xl, Et({}, e, { ref: t, sideCar: O3 }));
});
bd.classNames = xl.classNames;
var gy = Be((e, t) => {
  const { as: n, children: r, className: o, ...i } = e,
    {
      Component: s,
      isOpen: l,
      placement: a,
      backdrop: u,
      motionProps: c,
      disableAnimation: d,
      shouldBlockScroll: f,
      getPopoverProps: v,
      getDialogProps: y,
      getBackdropProps: b,
      getContentProps: C,
      isNonModal: h,
      onClose: p,
    } = cy(),
    m = w.useRef(null),
    { dialogProps: S, titleProps: P } = JE({}, m),
    $ = y({ ref: m, ...S, ...i }),
    O = n || s || "div",
    g = k.jsxs(k.Fragment, {
      children: [
        !h && k.jsx(tp, { onDismiss: p }),
        k.jsx(O, {
          ...$,
          children: k.jsx("div", {
            ...C({ className: o }),
            children: typeof r == "function" ? r(P) : r,
          }),
        }),
        k.jsx(tp, { onDismiss: p }),
      ],
    }),
    M = w.useMemo(
      () =>
        u === "transparent"
          ? null
          : d
          ? k.jsx("div", { ...b() })
          : k.jsx(Yo, {
              features: Qo,
              children: k.jsx(Go.div, {
                animate: "enter",
                exit: "exit",
                initial: "exit",
                variants: Wp.fade,
                ...b(),
              }),
            }),
      [u, d, b]
    ),
    I = k.jsx(bd, {
      enabled: f && l,
      removeScrollBar: !1,
      children: d
        ? g
        : k.jsx(Yo, {
            features: Qo,
            children: k.jsx(Go.div, {
              animate: "enter",
              exit: "exit",
              initial: "initial",
              style: { ...AE(a === "center" ? "top" : a) },
              variants: Wp.scaleSpringOpacity,
              ...c,
              children: g,
            }),
          }),
    });
  return k.jsxs("div", { ...v(), children: [M, I] });
});
gy.displayName = "NextUI.PopoverContent";
var I3 = gy,
  yy = Be((e, t) => {
    const { triggerRef: n, getTriggerProps: r } = cy(),
      { children: o, ...i } = e,
      s = w.useMemo(
        () =>
          typeof o == "string"
            ? k.jsx("p", { children: o })
            : w.Children.only(o),
        [o]
      ),
      {
        onPress: l,
        isDisabled: a,
        ...u
      } = w.useMemo(() => r(fe(i, s.props), s.ref), [r, s.props, i, s.ref]),
      [, c] = yv(o, Vu),
      { buttonProps: d } = wd({ onPress: l, isDisabled: a }, n),
      f = w.useMemo(() => (c == null ? void 0 : c[0]) !== void 0, [c]);
    return w.cloneElement(s, fe(u, f ? { onPress: l, isDisabled: a } : d));
  });
yy.displayName = "NextUI.PopoverTrigger";
var F3 = yy,
  wy = Be((e, t) => {
    const { children: n, ...r } = e,
      o = qE({ ...r, ref: t }),
      [i, s] = w.Children.toArray(n),
      l = k.jsx(Ig, { portalContainer: o.portalContainer, children: s });
    return k.jsxs(e3, {
      value: o,
      children: [
        i,
        o.disableAnimation && o.isOpen
          ? l
          : k.jsx(gd, { children: o.isOpen ? l : null }),
      ],
    });
  });
wy.displayName = "NextUI.Popover";
var V3 = wy,
  [D3, Ur] = al({
    name: "NavbarContext",
    strict: !0,
    errorMessage:
      "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />",
  }),
  j3 = {
    enter: {
      height: "calc(100vh - var(--navbar-height))",
      transition: { duration: 0.3, easings: "easeOut" },
    },
    exit: { height: 0, transition: { duration: 0.25, easings: "easeIn" } },
  },
  by = Be((e, t) => {
    var n, r;
    const {
        className: o,
        children: i,
        portalContainer: s,
        motionProps: l,
        style: a,
        ...u
      } = e,
      c = xt(t),
      {
        slots: d,
        isMenuOpen: f,
        height: v,
        disableAnimation: y,
        classNames: b,
      } = Ur(),
      C = Ke(b == null ? void 0 : b.menu, o),
      h = w.useCallback(
        ({ children: m }) =>
          k.jsx(bd, {
            forwardProps: !0,
            enabled: f,
            removeScrollBar: !1,
            children: m,
          }),
        [f]
      ),
      p = y
        ? k.jsx(h, {
            children: k.jsx("ul", {
              ref: c,
              className:
                (n = d.menu) == null ? void 0 : n.call(d, { class: C }),
              "data-open": ne(f),
              style: { "--navbar-height": v },
              ...u,
              children: i,
            }),
          })
        : k.jsx(gd, {
            mode: "wait",
            children: f
              ? k.jsx(Yo, {
                  features: Qo,
                  children: k.jsx(h, {
                    children: k.jsx(Go.ul, {
                      ref: c,
                      layoutScroll: !0,
                      animate: "enter",
                      className:
                        (r = d.menu) == null ? void 0 : r.call(d, { class: C }),
                      "data-open": ne(f),
                      exit: "exit",
                      initial: "exit",
                      style: { "--navbar-height": v, ...a },
                      variants: j3,
                      ...fe(l, u),
                      children: i,
                    }),
                  }),
                })
              : null,
          });
    return k.jsx(Ig, { portalContainer: s, children: p });
  });
by.displayName = "NextUI.NavbarMenu";
var xy = by,
  z3 = {
    visible: { y: 0, transition: { ease: qt.easeOut } },
    hidden: { y: "-100%", transition: { ease: qt.easeIn } },
  },
  B3 = typeof window < "u";
function Zp(e) {
  return B3
    ? e
      ? { x: e.scrollLeft, y: e.scrollTop }
      : { x: window.scrollX, y: window.scrollY }
    : { x: 0, y: 0 };
}
var H3 = (e) => {
  const { elementRef: t, delay: n = 30, callback: r, isEnabled: o } = e,
    i = w.useRef(o ? Zp(t == null ? void 0 : t.current) : { x: 0, y: 0 }),
    s = w.useRef(null),
    l = w.useCallback(() => {
      const a = Zp(t == null ? void 0 : t.current);
      typeof r == "function" && r({ prevPos: i.current, currPos: a }),
        (i.current = a),
        (s.current = null);
    }, [r, t]);
  return (
    w.useEffect(() => {
      if (!o) return;
      const a = () => {
          n
            ? (s.current && clearTimeout(s.current),
              (s.current = setTimeout(l, n)))
            : l();
        },
        u = (t == null ? void 0 : t.current) || window;
      return (
        u.addEventListener("scroll", a),
        () => {
          u.removeEventListener("scroll", a),
            s.current && clearTimeout(s.current);
        }
      );
    }, [t == null ? void 0 : t.current, n, l, o]),
    i.current
  );
};
function W3(e) {
  var t, n;
  const r = ul(),
    [o, i] = Wr(e, jp.variantKeys),
    {
      ref: s,
      as: l,
      parentRef: a,
      height: u = "4rem",
      shouldHideOnScroll: c = !1,
      disableScrollHandler: d = !1,
      onScrollPositionChange: f,
      isMenuOpen: v,
      isMenuDefaultOpen: y,
      onMenuOpenChange: b = () => {},
      motionProps: C,
      className: h,
      classNames: p,
      ...m
    } = o,
    S = l || "nav",
    P =
      (n =
        (t = e.disableAnimation) != null
          ? t
          : r == null
          ? void 0
          : r.disableAnimation) != null
        ? n
        : !1,
    $ = xt(s),
    O = w.useRef(0),
    g = w.useRef(0),
    [M, I] = w.useState(!1),
    R = w.useCallback(
      (A) => {
        b(A || !1);
      },
      [b]
    ),
    [_, E] = Vc(v, y ?? !1, R),
    T = () => {
      if ($.current) {
        const A = $.current.offsetWidth;
        A !== O.current && (O.current = A);
      }
    };
  Iv({
    ref: $,
    onResize: () => {
      var A;
      ((A = $.current) == null ? void 0 : A.offsetWidth) !== O.current &&
        (T(), E(!1));
    },
  }),
    w.useEffect(() => {
      var A;
      T(),
        (g.current = ((A = $.current) == null ? void 0 : A.offsetHeight) || 0);
    }, []);
  const V = w.useMemo(
      () => jp({ ...i, disableAnimation: P, hideOnScroll: c }),
      [Dr(i), P, c]
    ),
    j = Ke(p == null ? void 0 : p.base, h);
  return (
    H3({
      elementRef: a,
      isEnabled: c || !d,
      callback: ({ prevPos: A, currPos: D }) => {
        f == null || f(D.y),
          c &&
            I((x) => {
              const L = D.y > A.y && D.y > g.current;
              return L !== x ? L : x;
            });
      },
    }),
    {
      Component: S,
      slots: V,
      domRef: $,
      height: u,
      isHidden: M,
      disableAnimation: P,
      shouldHideOnScroll: c,
      isMenuOpen: _,
      classNames: p,
      setIsMenuOpen: E,
      motionProps: C,
      getBaseProps: (A = {}) => ({
        ...fe(m, A),
        "data-hidden": ne(M),
        "data-menu-open": ne(_),
        ref: $,
        className: V.base({ class: Ke(j, A == null ? void 0 : A.className) }),
        style: {
          "--navbar-height": u,
          ...(m == null ? void 0 : m.style),
          ...(A == null ? void 0 : A.style),
        },
      }),
      getWrapperProps: (A = {}) => ({
        ...A,
        "data-menu-open": ne(_),
        className: V.wrapper({
          class: Ke(
            p == null ? void 0 : p.wrapper,
            A == null ? void 0 : A.className
          ),
        }),
      }),
    }
  );
}
var Sy = Be((e, t) => {
  const { children: n, ...r } = e,
    o = W3({ ...r, ref: t }),
    i = o.Component,
    [s, l] = yv(n, xy),
    a = k.jsxs(k.Fragment, {
      children: [k.jsx("header", { ...o.getWrapperProps(), children: s }), l],
    });
  return k.jsx(D3, {
    value: o,
    children: o.shouldHideOnScroll
      ? k.jsx(Yo, {
          features: Qo,
          children: k.jsx(Go.nav, {
            animate: o.isHidden ? "hidden" : "visible",
            initial: !1,
            variants: z3,
            ...fe(o.getBaseProps(), o.motionProps),
            children: a,
          }),
        })
      : k.jsx(i, { ...o.getBaseProps(), children: a }),
  });
});
Sy.displayName = "NextUI.Navbar";
var U3 = Sy,
  Cy = Be((e, t) => {
    var n;
    const { as: r, className: o, children: i, ...s } = e,
      l = r || "div",
      a = xt(t),
      { slots: u, classNames: c } = Ur(),
      d = Ke(c == null ? void 0 : c.brand, o);
    return k.jsx(l, {
      ref: a,
      className: (n = u.brand) == null ? void 0 : n.call(u, { class: d }),
      ...s,
      children: i,
    });
  });
Cy.displayName = "NextUI.NavbarBrand";
var qp = Cy,
  Py = Be((e, t) => {
    var n;
    const { as: r, className: o, children: i, justify: s = "start", ...l } = e,
      a = r || "ul",
      u = xt(t),
      { slots: c, classNames: d } = Ur(),
      f = Ke(d == null ? void 0 : d.content, o);
    return k.jsx(a, {
      ref: u,
      className: (n = c.content) == null ? void 0 : n.call(c, { class: f }),
      "data-justify": s,
      ...l,
      children: i,
    });
  });
Py.displayName = "NextUI.NavbarContent";
var ma = Py,
  Ey = Be((e, t) => {
    var n;
    const { as: r, className: o, children: i, isActive: s, ...l } = e,
      a = r || "li",
      u = xt(t),
      { slots: c, classNames: d } = Ur(),
      f = Ke(d == null ? void 0 : d.item, o);
    return k.jsx(a, {
      ref: u,
      className: (n = c.item) == null ? void 0 : n.call(c, { class: f }),
      "data-active": ne(s),
      ...l,
      children: i,
    });
  });
Ey.displayName = "NextUI.NavbarItem";
var va = Ey,
  $y = Be((e, t) => {
    var n;
    const { className: r, children: o, isActive: i, ...s } = e,
      l = xt(t),
      { slots: a, isMenuOpen: u, classNames: c } = Ur(),
      d = Ke(c == null ? void 0 : c.menuItem, r);
    return k.jsx("li", {
      ref: l,
      className: (n = a.menuItem) == null ? void 0 : n.call(a, { class: d }),
      "data-active": ne(i),
      "data-open": ne(u),
      ...s,
      children: o,
    });
  });
$y.displayName = "NextUI.NavbarMenuItem";
var K3 = $y;
function G3(e, t, n) {
  const { isSelected: r } = t,
    { isPressed: o, buttonProps: i } = wd(
      { ...e, onPress: dl(t.toggle, e.onPress) },
      n
    );
  return { isPressed: o, buttonProps: fe(i, { "aria-pressed": r }) };
}
var ky = Be((e, t) => {
  var n;
  const {
      as: r,
      icon: o,
      className: i,
      onChange: s,
      autoFocus: l,
      srOnlyText: a,
      ...u
    } = e,
    c = r || "button",
    d = xt(t),
    { slots: f, classNames: v, isMenuOpen: y, setIsMenuOpen: b } = Ur(),
    h = KE({
      ...u,
      isSelected: y,
      onChange: (R) => {
        s == null || s(R), b(R);
      },
    }),
    { buttonProps: p, isPressed: m } = G3(e, h, d),
    { isFocusVisible: S, focusProps: P } = pl({ autoFocus: l }),
    { isHovered: $, hoverProps: O } = Xv({}),
    g = Ke(v == null ? void 0 : v.toggle, i),
    M = w.useMemo(
      () =>
        typeof o == "function"
          ? o(y ?? !1)
          : o ||
            k.jsx("span", {
              className: f.toggleIcon({
                class: v == null ? void 0 : v.toggleIcon,
              }),
            }),
      [o, y, f.toggleIcon, v == null ? void 0 : v.toggleIcon]
    ),
    I = w.useMemo(
      () =>
        a || (h.isSelected ? "close navigation menu" : "open navigation menu"),
      [a, y]
    );
  return k.jsxs(c, {
    ref: d,
    className: (n = f.toggle) == null ? void 0 : n.call(f, { class: g }),
    "data-focus-visible": ne(S),
    "data-hover": ne($),
    "data-open": ne(y),
    "data-pressed": ne(m),
    ...fe(p, P, O, u),
    children: [k.jsx("span", { className: f.srOnly(), children: I }), M],
  });
});
ky.displayName = "NextUI.NavbarMenuToggle";
var Y3 = ky;
function Q3(e = {}) {
  const {
      domRef: t,
      isEnabled: n = !0,
      overflowCheck: r = "vertical",
      visibility: o = "auto",
      offset: i = 0,
      onVisibilityChange: s,
      updateDeps: l = [],
    } = e,
    a = w.useRef(o);
  w.useEffect(() => {
    const u = t == null ? void 0 : t.current;
    if (!u || !n) return;
    const c = (v, y, b, C, h) => {
        if (o === "auto") {
          const p = `${C}${ob(h)}Scroll`;
          y && b
            ? ((u.dataset[p] = "true"),
              u.removeAttribute(`data-${C}-scroll`),
              u.removeAttribute(`data-${h}-scroll`))
            : ((u.dataset[`${C}Scroll`] = y.toString()),
              (u.dataset[`${h}Scroll`] = b.toString()),
              u.removeAttribute(`data-${C}-${h}-scroll`));
        } else {
          const p = y && b ? "both" : y ? C : b ? h : "none";
          p !== a.current && (s == null || s(p), (a.current = p));
        }
      },
      d = () => {
        const v = [
          { type: "vertical", prefix: "top", suffix: "bottom" },
          { type: "horizontal", prefix: "left", suffix: "right" },
        ];
        for (const { type: y, prefix: b, suffix: C } of v)
          if (r === y || r === "both") {
            const h = y === "vertical" ? u.scrollTop > i : u.scrollLeft > i,
              p =
                y === "vertical"
                  ? u.scrollTop + u.clientHeight + i < u.scrollHeight
                  : u.scrollLeft + u.clientWidth + i < u.scrollWidth;
            c(y, h, p, b, C);
          }
      },
      f = () => {
        ["top", "bottom", "top-bottom", "left", "right", "left-right"].forEach(
          (v) => {
            u.removeAttribute(`data-${v}-scroll`);
          }
        );
      };
    return (
      d(),
      u.addEventListener("scroll", d),
      o !== "auto" &&
        (f(),
        o === "both"
          ? ((u.dataset.topBottomScroll = String(r === "vertical")),
            (u.dataset.leftRightScroll = String(r === "horizontal")))
          : ((u.dataset.topBottomScroll = "false"),
            (u.dataset.leftRightScroll = "false"),
            ["top", "bottom", "left", "right"].forEach((v) => {
              u.dataset[`${v}Scroll`] = String(o === v);
            }))),
      () => {
        u.removeEventListener("scroll", d), f();
      }
    );
  }, [...l, n, o, r, s, t]);
}
function X3(e) {
  var t;
  const [n, r] = Wr(e, Vp.variantKeys),
    {
      ref: o,
      as: i,
      children: s,
      className: l,
      style: a,
      size: u = 40,
      offset: c = 0,
      visibility: d = "auto",
      isEnabled: f = !0,
      onVisibilityChange: v,
      ...y
    } = n,
    b = i || "div",
    C = xt(o);
  Q3({
    domRef: C,
    offset: c,
    visibility: d,
    isEnabled: f,
    onVisibilityChange: v,
    updateDeps: [s],
    overflowCheck: (t = e.orientation) != null ? t : "vertical",
  });
  const h = w.useMemo(() => Vp({ ...r, className: l }), [Dr(r), l]);
  return {
    Component: b,
    styles: h,
    domRef: C,
    children: s,
    getBaseProps: (m = {}) => {
      var S;
      return {
        ref: C,
        className: h,
        "data-orientation": (S = e.orientation) != null ? S : "vertical",
        style: { "--scroll-shadow-size": `${u}px`, ...a, ...m.style },
        ...y,
        ...m,
      };
    },
  };
}
var Ty = Be((e, t) => {
  const { Component: n, children: r, getBaseProps: o } = X3({ ...e, ref: t });
  return k.jsx(n, { ...o(), children: r });
});
Ty.displayName = "NextUI.ScrollShadow";
var Z3 = Ty;
const q3 =
    "data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%237F00FF'/%3e%3c/svg%3e",
  J3 =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%237F00FF'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20310%20310'%20xml:space='preserve'%3e%3cg%20id='XMLID_801_'%3e%3cpath%20id='XMLID_802_'%20d='M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73%20C77.16,101.969,74.922,99.73,72.16,99.73z'/%3e%3cpath%20id='XMLID_803_'%20d='M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4%20c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z'/%3e%3cpath%20id='XMLID_804_'%20d='M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599%20c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319%20c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995%20C310,145.43,300.549,94.761,230.454,94.761z'/%3e%3c/g%3e%3c/svg%3e",
  e$ =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%237F00FF'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20388.424%20388.424'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M384.202,59.111H4.209C1.888,59.111,0,61,0,63.33v261.766c0,2.33,1.888,4.217,4.209,4.217h379.993%20c2.317,0,4.222-1.887,4.222-4.217V63.33C388.424,61,386.52,59.111,384.202,59.111z%20M319.937,92.888L194.212,185.09L68.485,92.888%20H319.937z%20M354.647,295.535H33.779V109.328l157.935,115.82c1.494,1.089,3.508,1.089,5.004,0l157.934-115.82v186.207H354.647z'/%3e%3c/g%3e%3c/svg%3e";
function t$() {
  const [e, t] = w.useState(!1),
    [n, r] = w.useState([]),
    [o, i] = w.useState(!1),
    [s, l] = w.useState(""),
    a = ["Profile", "Projects", "Contact"],
    u = (c) => {
      c.preventDefault(),
        navigator.clipboard
          .writeText("samuelnummela06@gmail.com")
          .then(() => {
            l("Email address copied to clipboard!"),
              i(!0),
              setTimeout(() => i(!1), 1500);
          })
          .catch((f) => {
            console.error("Failed to copy email to clipboard: ", f);
          });
    };
  return (
    w.useEffect(() => {
      fetch("projects.json")
        .then((c) => c.json())
        .then((c) => r(c))
        .catch((c) => console.error("Error fetching projects:", c));
    }, []),
    k.jsxs(k.Fragment, {
      children: [
        k.jsxs(U3, {
          isBordered: !0,
          isMenuOpen: e,
          onMenuOpenChange: t,
          children: [
            k.jsx(ma, {
              className: "md:hidden",
              justify: "start",
              children: k.jsx(Y3, {
                "aria-label": e ? "Close menu" : "Open menu",
              }),
            }),
            k.jsx(ma, {
              className: "md:hidden pr-3",
              justify: "center",
              children: k.jsx(qp, {
                children: k.jsx("p", {
                  className: "font-bold text-inherit",
                  children: "Samuel Nummela",
                }),
              }),
            }),
            k.jsxs(ma, {
              className: "hidden md:flex gap-4",
              justify: "center",
              children: [
                k.jsx(qp, {
                  children: k.jsx("p", {
                    className: "font-bold text-inherit",
                    children: "SN",
                  }),
                }),
                k.jsx(va, {
                  children: k.jsx(Di, {
                    color: "foreground",
                    href: "#profile",
                    className: "hover:text-purple-500 hover:opacity-85",
                    children: "Profile",
                  }),
                }),
                k.jsx(va, {
                  children: k.jsx(Di, {
                    color: "foreground",
                    href: "#projects",
                    className: "hover:text-yellow-500 hover:opacity-85",
                    children: "Projects",
                  }),
                }),
                k.jsx(va, {
                  children: k.jsx(Di, {
                    color: "foreground",
                    href: "#contact",
                    className: "hover:text-green-500 hover:opacity-85",
                    children: "Contact me",
                  }),
                }),
              ],
            }),
            k.jsx(xy, {
              children: a.map((c, d) =>
                k.jsx(
                  K3,
                  {
                    children: k.jsx(Di, {
                      className: "w-full",
                      color:
                        d === 1
                          ? "warning"
                          : d === a.length - 1
                          ? "danger"
                          : "foreground",
                      href: "#",
                      size: "lg",
                      children: c,
                    }),
                  },
                  `${c}-${d}`
                )
              ),
            }),
          ],
        }),
        k.jsxs(Z3, {
          hideScrollBar: !0,
          className: "h-[770px] w-full",
          children: [
            k.jsxs("div", {
              className:
                "flex flex-col items-center justify-center mt-24 mb-12 gap-4 px-4 sm:px-6 md:px-12 lg:px-24",
              id: "profile",
              children: [
                k.jsx(Vi, {
                  className:
                    "p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-yellow-500",
                  color: "warning",
                  children: k.jsxs("p", {
                    className: "text-xl md:text-3xl",
                    children: [
                      k.jsx("span", {
                        className: "font-main",
                        children: "Hello",
                      }),
                      ", I am",
                    ],
                  }),
                }),
                k.jsx(Vi, {
                  className:
                    "p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500",
                  color: "secondary",
                  children: k.jsx("p", {
                    className: "text-xl md:text-2xl",
                    children: "Samuel Nummela",
                  }),
                }),
                k.jsx(Vi, {
                  className:
                    "p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-blue-500",
                  color: "primary",
                  children: k.jsx("p", {
                    className: "text-xl md:text-2xl",
                    children: "18 yo",
                  }),
                }),
                k.jsx(Vi, {
                  className:
                    "p-4 border-3 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-green-500",
                  color: "success",
                  children: k.jsx("p", {
                    className: "text-lg md:text-xl",
                    children: "A Fullstack Developer",
                  }),
                }),
              ],
            }),
            k.jsxs("div", {
              className:
                "flex items-center justify-center flex-wrap gap-8 px-4 sm:px-6 md:px-12 lg:px-24",
              children: [
                k.jsx("a", {
                  href: "https://www.github.com/saow",
                  target: "_blank",
                  className:
                    "bg-slate-300 p-3 rounded-2xl border-4 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500",
                  children: k.jsx("img", {
                    src: q3,
                    alt: "github",
                    className: "w-10 h-10",
                  }),
                }),
                k.jsx("a", {
                  href: "https://www.linkedin.com/in/samuelnummela",
                  target: "_blank",
                  className:
                    "bg-slate-300 p-3 rounded-2xl border-4 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500",
                  children: k.jsx("img", {
                    src: J3,
                    alt: "linkedin",
                    className: "w-10 h-10",
                  }),
                }),
                k.jsxs(V3, {
                  placement: "right",
                  showArrow: !1,
                  isOpen: o,
                  children: [
                    k.jsx(F3, {
                      children: k.jsx("a", {
                        href: "mailto:samuelnummela06@gmail.com",
                        onClick: u,
                        className:
                          "bg-slate-300 p-3 rounded-2xl border-4 border-transparent hover:opacity-85 transition-all duration-300 ease-in-out hover:border-purple-500",
                        children: k.jsx("img", {
                          src: e$,
                          alt: "email",
                          className: "w-10 h-10",
                        }),
                      }),
                    }),
                    k.jsx(I3, {
                      children: k.jsxs("div", {
                        className: "px-3 py-2",
                        children: [
                          k.jsx("div", {
                            className: "text-small font-bold",
                            children: "Notification",
                          }),
                          k.jsx("div", { className: "text-tiny", children: s }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            k.jsxs("div", {
              className:
                "flex flex-col items-center my-32 px-4 sm:px-6 md:px-12 lg:px-24",
              id: "projects",
              children: [
                k.jsx("div", {
                  className: "mb-12",
                  children: k.jsx("p", {
                    className:
                      "text-3xl md:text-4xl font-semibold font-main text-yellow-500",
                    children: "Projects",
                  }),
                }),
                k.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-6 md:mx-12 lg:mx-24",
                  children:
                    n.length > 0
                      ? n.map((c) =>
                          k.jsxs(
                            "div",
                            {
                              className: "rounded-xl border-3 p-4 sm:p-6",
                              children: [
                                k.jsx("div", {
                                  className:
                                    "font-main font-bold text-lg sm:text-xl",
                                  children: c.name,
                                }),
                                k.jsx("br", {}),
                                k.jsx("div", {
                                  children: k.jsx("a", {
                                    href: c.demo ? c.demo : c.github,
                                    children: k.jsx("img", {
                                      src: c.image
                                        ? c.image
                                        : "https://via.placeholder.com/200",
                                      alt: c.name,
                                      className:
                                        "rounded-md w-full h-[180px] sm:h-[220px] mb-4 hover:opacity-85 transition-all duration-300 ease-in-out",
                                    }),
                                  }),
                                }),
                                k.jsx("div", {
                                  className: "text-sm",
                                  children: c.description,
                                }),
                                k.jsx("br", {}),
                                k.jsx("div", {
                                  className:
                                    "font-main font-bold text-md sm:text-lg",
                                  children: "Tech stack:",
                                }),
                                k.jsx("div", {
                                  className: "text-sm",
                                  children: c.techStack.join(", "),
                                }),
                                k.jsx("br", {}),
                                k.jsxs("div", {
                                  className: "flex justify-end gap-2 sm:gap-4",
                                  children: [
                                    c.github &&
                                      k.jsx(Vu, {
                                        color: "secondary",
                                        onClick: () =>
                                          window.open(c.github, "_blank"),
                                        children: "Github",
                                      }),
                                    c.demo &&
                                      k.jsx(Vu, {
                                        color: "success",
                                        onClick: () =>
                                          window.open(c.demo, "_blank"),
                                        children: "Demo",
                                      }),
                                  ],
                                }),
                              ],
                            },
                            c.id
                          )
                        )
                      : k.jsx("p", { children: "Loading projects..." }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
pv(document.getElementById("root")).render(
  k.jsx(BP, { children: k.jsx(w.StrictMode, { children: k.jsx(t$, {}) }) })
);
