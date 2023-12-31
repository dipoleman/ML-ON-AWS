/*! For license information please see main.b7ab8ae7.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      249: function (e) {
        function t(e, t, i) {
          e instanceof RegExp && (e = n(e, i)),
            t instanceof RegExp && (t = n(t, i));
          var a = r(e, t, i);
          return (
            a && {
              start: a[0],
              end: a[1],
              pre: i.slice(0, a[0]),
              body: i.slice(a[0] + e.length, a[1]),
              post: i.slice(a[1] + t.length),
            }
          );
        }
        function n(e, t) {
          var n = t.match(e);
          return n ? n[0] : null;
        }
        function r(e, t, n) {
          var r,
            i,
            a,
            o,
            l,
            u = n.indexOf(e),
            s = n.indexOf(t, u + 1),
            c = u;
          if (u >= 0 && s > 0) {
            if (e === t) return [u, s];
            for (r = [], a = n.length; c >= 0 && !l; )
              c == u
                ? (r.push(c), (u = n.indexOf(e, c + 1)))
                : 1 == r.length
                ? (l = [r.pop(), s])
                : ((i = r.pop()) < a && ((a = i), (o = s)),
                  (s = n.indexOf(t, c + 1))),
                (c = u < s && u >= 0 ? u : s);
            r.length && (l = [a, o]);
          }
          return l;
        }
        (e.exports = t), (t.range = r);
      },
      725: function (e) {
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function i(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (i) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var o, l, u = i(e), s = 1; s < arguments.length; s++) {
                for (var c in (o = Object(arguments[s])))
                  n.call(o, c) && (u[c] = o[c]);
                if (t) {
                  l = t(o);
                  for (var d = 0; d < l.length; d++)
                    r.call(o, l[d]) && (u[l[d]] = o[l[d]]);
                }
              }
              return u;
            };
      },
      463: function (e, t, n) {
        var r = n(791),
          i = n(725),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        if (!r) throw Error(o(227));
        var l = new Set(),
          u = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          v = {};
        function m(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var _ = /[\-:]([a-z])/g;
        function w(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 === i.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!p.call(v, e) ||
                    (!p.call(h, e) &&
                      (f.test(e) ? (v[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(_, w);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(_, w);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(_, w);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = 60103,
          k = 60106,
          E = 60107,
          S = 60108,
          C = 60114,
          z = 60109,
          R = 60110,
          P = 60112,
          N = 60113,
          O = 60120,
          L = 60115,
          T = 60116,
          M = 60121,
          j = 60128,
          I = 60129,
          B = 60130,
          D = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
          var F = Symbol.for;
          (x = F("react.element")),
            (k = F("react.portal")),
            (E = F("react.fragment")),
            (S = F("react.strict_mode")),
            (C = F("react.profiler")),
            (z = F("react.provider")),
            (R = F("react.context")),
            (P = F("react.forward_ref")),
            (N = F("react.suspense")),
            (O = F("react.suspense_list")),
            (L = F("react.memo")),
            (T = F("react.lazy")),
            (M = F("react.block")),
            F("react.scope"),
            (j = F("react.opaque.id")),
            (I = F("react.debug_trace_mode")),
            (B = F("react.offscreen")),
            (D = F("react.legacy_hidden"));
        }
        var H,
          A = "function" === typeof Symbol && Symbol.iterator;
        function W(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (A && e[A]) || e["@@iterator"])
            ? e
            : null;
        }
        function U(e) {
          if (void 0 === H)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              H = (t && t[1]) || "";
            }
          return "\n" + H + e;
        }
        var V = !1;
        function q(e, t) {
          if (!e || V) return "";
          V = !0;
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
                "object" === typeof Reflect && Reflect.construct)
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
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l]))
                        return "\n" + i[o].replace(" at new ", " at ");
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function K(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = q(e.type, !1));
            case 11:
              return (e = q(e.type.render, !1));
            case 22:
              return (e = q(e.type._render, !1));
            case 1:
              return (e = q(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case E:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case S:
              return "StrictMode";
            case N:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case R:
                return (e.displayName || "Context") + ".Consumer";
              case z:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case L:
                return $(e.type);
              case M:
                return $(e._render);
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function X(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ie(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ie(e, t.type, Q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ie(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = i({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Q(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Q(n) };
        }
        function se(e, t) {
          var n = Q(t.value),
            r = Q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = "http://www.w3.org/1999/xhtml",
          fe = "http://www.w3.org/2000/svg";
        function pe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? pe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ve,
          me,
          ge =
            ((me = function (e, t) {
              if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (ve = ve || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ve.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function _e(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var we = {
            animationIterationCount: !0,
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
          be = ["Webkit", "ms", "Moz", "O"];
        function ye(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (we.hasOwnProperty(e) && we[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function xe(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ye(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(we).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (we[t] = we[e]);
          });
        });
        var ke = i(
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
        function Ee(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        function Ce(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ze = null,
          Re = null,
          Pe = null;
        function Ne(e) {
          if ((e = ri(e))) {
            if ("function" !== typeof ze) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ai(t)), ze(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          Re ? (Pe ? Pe.push(e) : (Pe = [e])) : (Re = e);
        }
        function Le() {
          if (Re) {
            var e = Re,
              t = Pe;
            if (((Pe = Re = null), Ne(e), t))
              for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Me(e, t, n, r, i) {
          return e(t, n, r, i);
        }
        function je() {}
        var Ie = Te,
          Be = !1,
          De = !1;
        function Fe() {
          (null === Re && null === Pe) || (je(), Le());
        }
        function He(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ai(n);
          if (null === r) return null;
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
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (d)
          try {
            var We = {};
            Object.defineProperty(We, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", We, We),
              window.removeEventListener("test", We, We);
          } catch (me) {
            Ae = !1;
          }
        function Ue(e, t, n, r, i, a, o, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ve = !1,
          qe = null,
          Ke = !1,
          $e = null,
          Qe = {
            onError: function (e) {
              (Ve = !0), (qe = e);
            },
          };
        function Ge(e, t, n, r, i, a, o, l, u) {
          (Ve = !1), (qe = null), Ue.apply(Qe, arguments);
        }
        function Xe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ye(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (Xe(e) !== e) throw Error(o(188));
        }
        function Je(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Xe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return Ze(i), e;
                    if (a === r) return Ze(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var l = !1, u = i.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = a.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = a), (r = i);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = a), (n = i);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          it,
          at = !1,
          ot = [],
          lt = null,
          ut = null,
          st = null,
          ct = new Map(),
          dt = new Map(),
          ft = [],
          pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function ht(e, t, n, r, i) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: i,
            targetContainers: [r],
          };
        }
        function vt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              lt = null;
              break;
            case "dragenter":
            case "dragleave":
              ut = null;
              break;
            case "mouseover":
            case "mouseout":
              st = null;
              break;
            case "pointerover":
            case "pointerout":
              ct.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              dt.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = ht(t, n, r, i, a)),
              null !== t && null !== (t = ri(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function gt(e) {
          var t = ni(e.target);
          if (null !== t) {
            var n = Xe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ye(n)))
                  return (
                    (e.blockedOn = t),
                    void it(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function _t(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ri(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function wt(e, t, n) {
          _t(e) && n.delete(t);
        }
        function bt() {
          for (at = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = ri(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Jt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== lt && _t(lt) && (lt = null),
            null !== ut && _t(ut) && (ut = null),
            null !== st && _t(st) && (st = null),
            ct.forEach(wt),
            dt.forEach(wt);
        }
        function yt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, bt)));
        }
        function xt(e) {
          function t(t) {
            return yt(t, e);
          }
          if (0 < ot.length) {
            yt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== lt && yt(lt, e),
              null !== ut && yt(ut, e),
              null !== st && yt(st, e),
              ct.forEach(t),
              dt.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
            gt(n), null === n.blockedOn && ft.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Et = {
            animationend: kt("Animation", "AnimationEnd"),
            animationiteration: kt("Animation", "AnimationIteration"),
            animationstart: kt("Animation", "AnimationStart"),
            transitionend: kt("Transition", "TransitionEnd"),
          },
          St = {},
          Ct = {};
        function zt(e) {
          if (St[e]) return St[e];
          if (!Et[e]) return e;
          var t,
            n = Et[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Ct) return (St[e] = n[t]);
          return e;
        }
        d &&
          ((Ct = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Et.animationend.animation,
            delete Et.animationiteration.animation,
            delete Et.animationstart.animation),
          "TransitionEvent" in window || delete Et.transitionend.transition);
        var Rt = zt("animationend"),
          Pt = zt("animationiteration"),
          Nt = zt("animationstart"),
          Ot = zt("transitionend"),
          Lt = new Map(),
          Tt = new Map(),
          Mt = [
            "abort",
            "abort",
            Rt,
            "animationEnd",
            Pt,
            "animationIteration",
            Nt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Ot,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function jt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            (i = "on" + (i[0].toUpperCase() + i.slice(1))),
              Tt.set(r, t),
              Lt.set(r, i),
              s(i, [r]);
          }
        }
        (0, a.unstable_now)();
        var It = 8;
        function Bt(e) {
          if (0 !== (1 & e)) return (It = 15), 1;
          if (0 !== (2 & e)) return (It = 14), 2;
          if (0 !== (4 & e)) return (It = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((It = 12), t)
            : 0 !== (32 & e)
            ? ((It = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((It = 10), t)
            : 0 !== (256 & e)
            ? ((It = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((It = 8), t)
            : 0 !== (4096 & e)
            ? ((It = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((It = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((It = 5), t)
            : 67108864 & e
            ? ((It = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((It = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((It = 2), t)
            : 0 !== (1073741824 & e)
            ? ((It = 1), 1073741824)
            : ((It = 8), e);
        }
        function Dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (It = 0);
          var r = 0,
            i = 0,
            a = e.expiredLanes,
            o = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (i = It = 15);
          else if (0 !== (a = 134217727 & n)) {
            var u = a & ~o;
            0 !== u
              ? ((r = Bt(u)), (i = It))
              : 0 !== (l &= a) && ((r = Bt(l)), (i = It));
          } else
            0 !== (a = n & ~o)
              ? ((r = Bt(a)), (i = It))
              : 0 !== l && ((r = Bt(l)), (i = It));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Vt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & o))
          ) {
            if ((Bt(t), i <= It)) return t;
            It = i;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - Vt(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function Ft(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ht(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = At(24 & ~t)) ? Ht(10, t) : e;
            case 10:
              return 0 === (e = At(192 & ~t)) ? Ht(8, t) : e;
            case 8:
              return (
                0 === (e = At(3584 & ~t)) &&
                  0 === (e = At(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = At(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(o(358, e));
        }
        function At(e) {
          return e & -e;
        }
        function Wt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ut(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Vt(t))] = n);
        }
        var Vt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((qt(e) / Kt) | 0)) | 0;
              },
          qt = Math.log,
          Kt = Math.LN2;
        var $t = a.unstable_UserBlockingPriority,
          Qt = a.unstable_runWithPriority,
          Gt = !0;
        function Xt(e, t, n, r) {
          Be || je();
          var i = Zt,
            a = Be;
          Be = !0;
          try {
            Me(i, e, t, n, r);
          } finally {
            (Be = a) || Fe();
          }
        }
        function Yt(e, t, n, r) {
          Qt($t, Zt.bind(null, e, t, n, r));
        }
        function Zt(e, t, n, r) {
          var i;
          if (Gt)
            if ((i = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
              (e = ht(null, e, t, n, r)), ot.push(e);
            else {
              var a = Jt(e, t, n, r);
              if (null === a) i && vt(e, r);
              else {
                if (i) {
                  if (-1 < pt.indexOf(e))
                    return (e = ht(a, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, i) {
                      switch (t) {
                        case "focusin":
                          return (lt = mt(lt, e, t, n, r, i)), !0;
                        case "dragenter":
                          return (ut = mt(ut, e, t, n, r, i)), !0;
                        case "mouseover":
                          return (st = mt(st, e, t, n, r, i)), !0;
                        case "pointerover":
                          var a = i.pointerId;
                          return (
                            ct.set(a, mt(ct.get(a) || null, e, t, n, r, i)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = i.pointerId),
                            dt.set(a, mt(dt.get(a) || null, e, t, n, r, i)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  vt(e, r);
                }
                jr(e, t, r, null, n);
              }
            }
        }
        function Jt(e, t, n, r) {
          var i = Ce(r);
          if (null !== (i = ni(i))) {
            var a = Xe(i);
            if (null === a) i = null;
            else {
              var o = a.tag;
              if (13 === o) {
                if (null !== (i = Ye(a))) return i;
                i = null;
              } else if (3 === o) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                i = null;
              } else a !== i && (i = null);
            }
          }
          return jr(e, t, r, i, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            i = "value" in en ? en.value : en.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (nn = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function an(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function on() {
          return !0;
        }
        function ln() {
          return !1;
        }
        function un(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? on
                : ln),
              (this.isPropagationStopped = ln),
              this
            );
          }
          return (
            i(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
              },
              persist: function () {},
              isPersistent: on,
            }),
            t
          );
        }
        var sn,
          cn,
          dn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = un(fn),
          hn = i({}, fn, { view: 0, detail: 0 }),
          vn = un(hn),
          mn = i({}, hn, {
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
            getModifierState: Rn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== dn &&
                    (dn && "mousemove" === e.type
                      ? ((sn = e.screenX - dn.screenX),
                        (cn = e.screenY - dn.screenY))
                      : (cn = sn = 0),
                    (dn = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          gn = un(mn),
          _n = un(i({}, mn, { dataTransfer: 0 })),
          wn = un(i({}, hn, { relatedTarget: 0 })),
          bn = un(
            i({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = i({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = un(yn),
          kn = un(i({}, fn, { data: 0 })),
          En = {
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
          Sn = {
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
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function zn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function Rn() {
          return zn;
        }
        var Pn = i({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = an(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
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
            getModifierState: Rn,
            charCode: function (e) {
              return "keypress" === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? an(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = un(Pn),
          On = un(
            i({}, mn, {
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
            })
          ),
          Ln = un(
            i({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Rn,
            })
          ),
          Tn = un(
            i({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Mn = i({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
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
          jn = un(Mn),
          In = [9, 13, 27, 32],
          Bn = d && "CompositionEvent" in window,
          Dn = null;
        d && "documentMode" in document && (Dn = document.documentMode);
        var Fn = d && "TextEvent" in window && !Dn,
          Hn = d && (!Bn || (Dn && 8 < Dn && 11 >= Dn)),
          An = String.fromCharCode(32),
          Wn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== In.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Kn = {
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
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Kn[e.type] : "textarea" === t;
        }
        function Qn(e, t, n, r) {
          Oe(r),
            0 < (t = Br(t, "onChange")).length &&
              ((n = new pn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Xn = null;
        function Yn(e) {
          Pr(e, 0);
        }
        function Zn(e) {
          if (Y(ii(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var er = !1;
        if (d) {
          var tr;
          if (d) {
            var nr = "oninput" in document;
            if (!nr) {
              var rr = document.createElement("div");
              rr.setAttribute("oninput", "return;"),
                (nr = "function" === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function ir() {
          Gn && (Gn.detachEvent("onpropertychange", ar), (Xn = Gn = null));
        }
        function ar(e) {
          if ("value" === e.propertyName && Zn(Xn)) {
            var t = [];
            if ((Qn(t, Xn, e, Ce(e)), (e = Yn), Be)) e(t);
            else {
              Be = !0;
              try {
                Te(e, t);
              } finally {
                (Be = !1), Fe();
              }
            }
          }
        }
        function or(e, t, n) {
          "focusin" === e
            ? (ir(), (Xn = n), (Gn = t).attachEvent("onpropertychange", ar))
            : "focusout" === e && ir();
        }
        function lr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Zn(Xn);
        }
        function ur(e, t) {
          if ("click" === e) return Zn(t);
        }
        function sr(e, t) {
          if ("input" === e || "change" === e) return Zn(t);
        }
        var cr =
            "function" === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          dr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (cr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function vr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? vr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var _r = d && "documentMode" in document && 11 >= document.documentMode,
          wr = null,
          br = null,
          yr = null,
          xr = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == wr ||
            wr !== Z(r) ||
            ("selectionStart" in (r = wr) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && fr(yr, r)) ||
              ((yr = r),
              0 < (r = Br(br, "onSelect")).length &&
                ((t = new pn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = wr))));
        }
        jt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          jt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          jt(Mt, 2);
        for (
          var Er =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Sr = 0;
          Sr < Er.length;
          Sr++
        )
          Tt.set(Er[Sr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Cr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          zr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Cr)
          );
        function Rr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, l, u, s) {
              if ((Ge.apply(this, arguments), Ve)) {
                if (!Ve) throw Error(o(198));
                var c = qe;
                (Ve = !1), (qe = null), Ke || ((Ke = !0), ($e = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Pr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && i.isPropagationStopped()))
                    break e;
                  Rr(i, l, s), (a = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (l = r[o]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && i.isPropagationStopped())
                  )
                    break e;
                  Rr(i, l, s), (a = u);
                }
            }
          }
          if (Ke) throw ((e = $e), (Ke = !1), ($e = null), e);
        }
        function Nr(e, t) {
          var n = oi(t),
            r = e + "__bubble";
          n.has(r) || (Mr(t, e, 2, !1), n.add(r));
        }
        var Or = "_reactListening" + Math.random().toString(36).slice(2);
        function Lr(e) {
          e[Or] ||
            ((e[Or] = !0),
            l.forEach(function (t) {
              zr.has(t) || Tr(t, !1, e, null), Tr(t, !0, e, null);
            }));
        }
        function Tr(e, t, n, r) {
          var i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && zr.has(e))
          ) {
            if ("scroll" !== e) return;
            (i |= 2), (a = r);
          }
          var o = oi(a),
            l = e + "__" + (t ? "capture" : "bubble");
          o.has(l) || (t && (i |= 4), Mr(a, e, i, t), o.add(l));
        }
        function Mr(e, t, n, r) {
          var i = Tt.get(t);
          switch (void 0 === i ? 2 : i) {
            case 0:
              i = Xt;
              break;
            case 1:
              i = Yt;
              break;
            default:
              i = Zt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function jr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === i ||
                        (8 === u.nodeType && u.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ni(l))) return;
                  if (5 === (u = o.tag) || 6 === u) {
                    r = a = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (De) return e(t, n);
            De = !0;
            try {
              Ie(e, t, n);
            } finally {
              (De = !1), Fe();
            }
          })(function () {
            var r = a,
              i = Ce(n),
              o = [];
            e: {
              var l = Lt.get(e);
              if (void 0 !== l) {
                var u = pn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === an(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = wn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = wn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = wn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = _n;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Ln;
                    break;
                  case Rt:
                  case Pt:
                  case Nt:
                    u = bn;
                    break;
                  case Ot:
                    u = Tn;
                    break;
                  case "scroll":
                    u = vn;
                    break;
                  case "wheel":
                    u = jn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = On;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== f &&
                        null != (v = He(h, f)) &&
                        c.push(Ir(h, v, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 !== (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ni(s) && !s[ei])) &&
                  (u || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ni(s)
                          : null) &&
                        (s !== (d = Xe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = gn),
                  (v = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (v = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == u ? l : ii(u)),
                  (p = null == s ? l : ii(s)),
                  ((l = new c(v, h + "leave", u, n, i)).target = d),
                  (l.relatedTarget = p),
                  (v = null),
                  ni(i) === r &&
                    (((c = new c(f, h + "enter", s, n, i)).target = p),
                    (c.relatedTarget = d),
                    (v = c)),
                  (d = v),
                  u && s)
                )
                  e: {
                    for (f = s, h = 0, p = c = u; p; p = Dr(p)) h++;
                    for (p = 0, v = f; v; v = Dr(v)) p++;
                    for (; 0 < h - p; ) (c = Dr(c)), h--;
                    for (; 0 < p - h; ) (f = Dr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Dr(c)), (f = Dr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Fr(o, l, u, c, !1),
                  null !== s && null !== d && Fr(o, d, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? ii(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Jn;
              else if ($n(l))
                if (er) m = sr;
                else {
                  m = lr;
                  var g = or;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ur);
              switch (
                (m && (m = m(e, r))
                  ? Qn(o, m, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ie(l, "number", l.value)),
                (g = r ? ii(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(g) || "true" === g.contentEditable) &&
                    ((wr = g), (br = r), (yr = null));
                  break;
                case "focusout":
                  yr = br = wr = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), kr(o, n, i);
                  break;
                case "selectionchange":
                  if (_r) break;
                case "keydown":
                case "keyup":
                  kr(o, n, i);
              }
              var _;
              if (Bn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var w = "onCompositionStart";
                      break e;
                    case "compositionend":
                      w = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      w = "onCompositionUpdate";
                      break e;
                  }
                  w = void 0;
                }
              else
                qn
                  ? Un(e, n) && (w = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (w = "onCompositionStart");
              w &&
                (Hn &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== w
                    ? "onCompositionEnd" === w && qn && (_ = rn())
                    : ((tn = "value" in (en = i) ? en.value : en.textContent),
                      (qn = !0))),
                0 < (g = Br(r, w)).length &&
                  ((w = new kn(w, e, null, n, i)),
                  o.push({ event: w, listeners: g }),
                  _ ? (w.data = _) : null !== (_ = Vn(n)) && (w.data = _))),
                (_ = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Wn = !0), An);
                        case "textInput":
                          return (e = t.data) === An && Wn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!Bn && Un(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Hn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Br(r, "onBeforeInput")).length &&
                  ((i = new kn("onBeforeInput", "beforeinput", null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = _));
            }
            Pr(o, t);
          });
        }
        function Ir(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Br(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = He(e, n)) && r.unshift(Ir(e, a, i)),
              null != (a = He(e, t)) && r.push(Ir(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function Dr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Fr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              i
                ? null != (u = He(n, a)) && o.unshift(Ir(n, u, l))
                : i || (null != (u = He(n, a)) && o.push(Ir(n, u, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        function Hr() {}
        var Ar = null,
          Wr = null;
        function Ur(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Vr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var qr = "function" === typeof setTimeout ? setTimeout : void 0,
          Kr = "function" === typeof clearTimeout ? clearTimeout : void 0;
        function $r(e) {
          1 === e.nodeType
            ? (e.textContent = "")
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
        }
        function Qr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Gr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Xr = 0;
        var Yr = Math.random().toString(36).slice(2),
          Zr = "__reactFiber$" + Yr,
          Jr = "__reactProps$" + Yr,
          ei = "__reactContainer$" + Yr,
          ti = "__reactEvents$" + Yr;
        function ni(e) {
          var t = e[Zr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ei] || n[Zr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Gr(e); null !== e; ) {
                  if ((n = e[Zr])) return n;
                  e = Gr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ri(e) {
          return !(e = e[Zr] || e[ei]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ii(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ai(e) {
          return e[Jr] || null;
        }
        function oi(e) {
          var t = e[ti];
          return void 0 === t && (t = e[ti] = new Set()), t;
        }
        var li = [],
          ui = -1;
        function si(e) {
          return { current: e };
        }
        function ci(e) {
          0 > ui || ((e.current = li[ui]), (li[ui] = null), ui--);
        }
        function di(e, t) {
          ui++, (li[ui] = e.current), (e.current = t);
        }
        var fi = {},
          pi = si(fi),
          hi = si(!1),
          vi = fi;
        function mi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fi;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function gi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function _i() {
          ci(hi), ci(pi);
        }
        function wi(e, t, n) {
          if (pi.current !== fi) throw Error(o(168));
          di(pi, t), di(hi, n);
        }
        function bi(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(o(108, $(t) || "Unknown", a));
          return i({}, n, r);
        }
        function yi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              fi),
            (vi = pi.current),
            di(pi, e),
            di(hi, hi.current),
            !0
          );
        }
        function xi(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = bi(e, t, vi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ci(hi),
              ci(pi),
              di(pi, e))
            : ci(hi),
            di(hi, n);
        }
        var ki = null,
          Ei = null,
          Si = a.unstable_runWithPriority,
          Ci = a.unstable_scheduleCallback,
          zi = a.unstable_cancelCallback,
          Ri = a.unstable_shouldYield,
          Pi = a.unstable_requestPaint,
          Ni = a.unstable_now,
          Oi = a.unstable_getCurrentPriorityLevel,
          Li = a.unstable_ImmediatePriority,
          Ti = a.unstable_UserBlockingPriority,
          Mi = a.unstable_NormalPriority,
          ji = a.unstable_LowPriority,
          Ii = a.unstable_IdlePriority,
          Bi = {},
          Di = void 0 !== Pi ? Pi : function () {},
          Fi = null,
          Hi = null,
          Ai = !1,
          Wi = Ni(),
          Ui =
            1e4 > Wi
              ? Ni
              : function () {
                  return Ni() - Wi;
                };
        function Vi() {
          switch (Oi()) {
            case Li:
              return 99;
            case Ti:
              return 98;
            case Mi:
              return 97;
            case ji:
              return 96;
            case Ii:
              return 95;
            default:
              throw Error(o(332));
          }
        }
        function qi(e) {
          switch (e) {
            case 99:
              return Li;
            case 98:
              return Ti;
            case 97:
              return Mi;
            case 96:
              return ji;
            case 95:
              return Ii;
            default:
              throw Error(o(332));
          }
        }
        function Ki(e, t) {
          return (e = qi(e)), Si(e, t);
        }
        function $i(e, t, n) {
          return (e = qi(e)), Ci(e, t, n);
        }
        function Qi() {
          if (null !== Hi) {
            var e = Hi;
            (Hi = null), zi(e);
          }
          Gi();
        }
        function Gi() {
          if (!Ai && null !== Fi) {
            Ai = !0;
            var e = 0;
            try {
              var t = Fi;
              Ki(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Fi = null);
            } catch (n) {
              throw (null !== Fi && (Fi = Fi.slice(e + 1)), Ci(Li, Qi), n);
            } finally {
              Ai = !1;
            }
          }
        }
        var Xi = y.ReactCurrentBatchConfig;
        function Yi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Zi = si(null),
          Ji = null,
          ea = null,
          ta = null;
        function na() {
          ta = ea = Ji = null;
        }
        function ra(e) {
          var t = Zi.current;
          ci(Zi), (e.type._context._currentValue = t);
        }
        function ia(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function aa(e, t) {
          (Ji = e),
            (ta = ea = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Bo = !0), (e.firstContext = null));
        }
        function oa(e, t) {
          if (ta !== e && !1 !== t && 0 !== t)
            if (
              (("number" === typeof t && 1073741823 !== t) ||
                ((ta = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ea)
            ) {
              if (null === Ji) throw Error(o(308));
              (ea = t),
                (Ji.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ea = ea.next = t;
          return e._currentValue;
        }
        var la = !1;
        function ua(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function sa(e, t) {
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
        function ca(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function da(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function fa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function pa(e, t, n, r) {
          var a = e.updateQueue;
          la = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (o = c) : (l.next = c), (l = s);
            var d = e.alternate;
            if (null !== d) {
              var f = (d = d.updateQueue).lastBaseUpdate;
              f !== l &&
                (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
                (d.lastBaseUpdate = s));
            }
          }
          if (null !== o) {
            for (f = a.baseState, l = 0, d = c = s = null; ; ) {
              u = o.lane;
              var p = o.eventTime;
              if ((r & u) === u) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = o;
                  switch (((u = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, u);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (u =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, u)
                              : h) ||
                        void 0 === u
                      )
                        break e;
                      f = i({}, f, u);
                      break e;
                    case 2:
                      la = !0;
                  }
                }
                null !== o.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [o]) : u.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === d ? ((c = d = p), (s = f)) : (d = d.next = p),
                  (l |= u);
              if (null === (o = o.next)) {
                if (null === (u = a.shared.pending)) break;
                (o = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === d && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = d),
              (Al |= l),
              (e.lanes = l),
              (e.memoizedState = f);
          }
        }
        function ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var va = new r.Component().refs;
        function ma(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ga = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Xe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fu(),
              i = pu(e),
              a = ca(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              hu(e, i, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fu(),
              i = pu(e),
              a = ca(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              hu(e, i, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fu(),
              r = pu(e),
              i = ca(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              da(e, i),
              hu(e, r, n);
          },
        };
        function _a(e, t, n, r, i, a, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !fr(n, r) ||
                !fr(i, a);
        }
        function wa(e, t, n) {
          var r = !1,
            i = fi,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = oa(a))
              : ((i = gi(t) ? vi : pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? mi(e, i)
                  : fi)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ga),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ba(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ga.enqueueReplaceState(t, t.state, null);
        }
        function ya(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = va), ua(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (i.context = oa(a))
            : ((a = gi(t) ? vi : pi.current), (i.context = mi(e, a))),
            pa(e, n, i, r),
            (i.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (ma(e, t, a, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && ga.enqueueReplaceState(i, i.state, null),
              pa(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4);
        }
        var xa = Array.isArray;
        function ka(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === va && (t = r.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ea(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              o(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Sa(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Ku(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Xu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = i(t, n.props)).ref = ka(e, t, n)), (r.return = e), r)
              : (((r = $u(n.type, n.key, n.props, null, e.mode, r)).ref = ka(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Yu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Qu(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if ("string" === typeof t || "number" === typeof t)
              return ((t = Xu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = $u(t.type, t.key, t.props, null, e.mode, n)).ref = ka(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Yu(t, e.mode, n)).return = e), t;
              }
              if (xa(t) || W(t))
                return ((t = Qu(t, e.mode, n, null)).return = e), t;
              Ea(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" === typeof n || "number" === typeof n)
              return null !== i ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === i
                    ? n.type === E
                      ? d(e, t, n.props.children, r, i)
                      : s(e, t, n, r)
                    : null;
                case k:
                  return n.key === i ? c(e, t, n, r) : null;
              }
              if (xa(n) || W(n)) return null !== i ? null : d(e, t, n, r, null);
              Ea(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if ("string" === typeof r || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === E
                      ? d(t, e, r.props.children, i, r.key)
                      : s(t, e, r, i)
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
              }
              if (xa(r) || W(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              Ea(t, r);
            }
            return null;
          }
          function v(i, o, l, u) {
            for (
              var s = null, c = null, d = o, v = (o = 0), m = null;
              null !== d && v < l.length;
              v++
            ) {
              d.index > v ? ((m = d), (d = null)) : (m = d.sibling);
              var g = p(i, d, l[v], u);
              if (null === g) {
                null === d && (d = m);
                break;
              }
              e && d && null === g.alternate && t(i, d),
                (o = a(g, o, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (d = m);
            }
            if (v === l.length) return n(i, d), s;
            if (null === d) {
              for (; v < l.length; v++)
                null !== (d = f(i, l[v], u)) &&
                  ((o = a(d, o, v)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d));
              return s;
            }
            for (d = r(i, d); v < l.length; v++)
              null !== (m = h(d, i, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? v : m.key),
                (o = a(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              s
            );
          }
          function m(i, l, u, s) {
            var c = W(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var d = (c = null), v = l, m = (l = 0), g = null, _ = u.next();
              null !== v && !_.done;
              m++, _ = u.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var w = p(i, v, _.value, s);
              if (null === w) {
                null === v && (v = g);
                break;
              }
              e && v && null === w.alternate && t(i, v),
                (l = a(w, l, m)),
                null === d ? (c = w) : (d.sibling = w),
                (d = w),
                (v = g);
            }
            if (_.done) return n(i, v), c;
            if (null === v) {
              for (; !_.done; m++, _ = u.next())
                null !== (_ = f(i, _.value, s)) &&
                  ((l = a(_, l, m)),
                  null === d ? (c = _) : (d.sibling = _),
                  (d = _));
              return c;
            }
            for (v = r(i, v); !_.done; m++, _ = u.next())
              null !== (_ = h(v, i, m, _.value, s)) &&
                (e &&
                  null !== _.alternate &&
                  v.delete(null === _.key ? m : _.key),
                (l = a(_, l, m)),
                null === d ? (c = _) : (d.sibling = _),
                (d = _));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              c
            );
          }
          return function (e, r, a, u) {
            var s =
              "object" === typeof a &&
              null !== a &&
              a.type === E &&
              null === a.key;
            s && (a = a.props.children);
            var c = "object" === typeof a && null !== a;
            if (c)
              switch (a.$$typeof) {
                case x:
                  e: {
                    for (c = a.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (a.type === E) {
                            n(e, s.sibling),
                              ((r = i(s, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (s.elementType === a.type) {
                          n(e, s.sibling),
                            ((r = i(s, a.props)).ref = ka(e, s, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    a.type === E
                      ? (((r = Qu(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = $u(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u
                        )).ref = ka(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case k:
                  e: {
                    for (s = a.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = i(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Yu(a, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" === typeof a || "number" === typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = i(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Xu(a, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (xa(a)) return v(e, r, a, u);
            if (W(a)) return m(e, r, a, u);
            if ((c && Ea(e, a), "undefined" === typeof a && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(o(152, $(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Ca = Sa(!0),
          za = Sa(!1),
          Ra = {},
          Pa = si(Ra),
          Na = si(Ra),
          Oa = si(Ra);
        function La(e) {
          if (e === Ra) throw Error(o(174));
          return e;
        }
        function Ta(e, t) {
          switch ((di(Oa, t), di(Na, e), di(Pa, Ra), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ci(Pa), di(Pa, t);
        }
        function Ma() {
          ci(Pa), ci(Na), ci(Oa);
        }
        function ja(e) {
          La(Oa.current);
          var t = La(Pa.current),
            n = he(t, e.type);
          t !== n && (di(Na, e), di(Pa, n));
        }
        function Ia(e) {
          Na.current === e && (ci(Pa), ci(Na));
        }
        var Ba = si(0);
        function Da(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fa = null,
          Ha = null,
          Aa = !1;
        function Wa(e, t) {
          var n = Vu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function Va(e) {
          if (Aa) {
            var t = Ha;
            if (t) {
              var n = t;
              if (!Ua(e, t)) {
                if (!(t = Qr(n.nextSibling)) || !Ua(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Aa = !1), void (Fa = e)
                  );
                Wa(Fa, n);
              }
              (Fa = e), (Ha = Qr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Aa = !1), (Fa = e);
          }
        }
        function qa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Fa = e;
        }
        function Ka(e) {
          if (e !== Fa) return !1;
          if (!Aa) return qa(e), (Aa = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
          )
            for (t = Ha; t; ) Wa(e, t), (t = Qr(t.nextSibling));
          if ((qa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ha = Qr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ha = null;
            }
          } else Ha = Fa ? Qr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function $a() {
          (Ha = Fa = null), (Aa = !1);
        }
        var Qa = [];
        function Ga() {
          for (var e = 0; e < Qa.length; e++)
            Qa[e]._workInProgressVersionPrimary = null;
          Qa.length = 0;
        }
        var Xa = y.ReactCurrentDispatcher,
          Ya = y.ReactCurrentBatchConfig,
          Za = 0,
          Ja = null,
          eo = null,
          to = null,
          no = !1,
          ro = !1;
        function io() {
          throw Error(o(321));
        }
        function ao(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function oo(e, t, n, r, i, a) {
          if (
            ((Za = a),
            (Ja = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Xa.current = null === e || null === e.memoizedState ? To : Mo),
            (e = n(r, i)),
            ro)
          ) {
            a = 0;
            do {
              if (((ro = !1), !(25 > a))) throw Error(o(301));
              (a += 1),
                (to = eo = null),
                (t.updateQueue = null),
                (Xa.current = jo),
                (e = n(r, i));
            } while (ro);
          }
          if (
            ((Xa.current = Lo),
            (t = null !== eo && null !== eo.next),
            (Za = 0),
            (to = eo = Ja = null),
            (no = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function lo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === to ? (Ja.memoizedState = to = e) : (to = to.next = e), to
          );
        }
        function uo() {
          if (null === eo) {
            var e = Ja.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = eo.next;
          var t = null === to ? Ja.memoizedState : to.next;
          if (null !== t) (to = t), (eo = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (eo = e).memoizedState,
              baseState: eo.baseState,
              baseQueue: eo.baseQueue,
              queue: eo.queue,
              next: null,
            }),
              null === to ? (Ja.memoizedState = to = e) : (to = to.next = e);
          }
          return to;
        }
        function so(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function co(e) {
          var t = uo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = eo,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var l = i.next;
              (i.next = a.next), (a.next = l);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (i = i.next), (r = r.baseState);
            var u = (l = a = null),
              s = i;
            do {
              var c = s.lane;
              if ((Za & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = d), (a = r)) : (u = u.next = d),
                  (Ja.lanes |= c),
                  (Al |= c);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === u ? (a = r) : (u.next = l),
              cr(r, t.memoizedState) || (Bo = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fo(e) {
          var t = uo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== i);
            cr(a, t.memoizedState) || (Bo = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function po(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var i = t._workInProgressVersionPrimary;
          if (
            (null !== i
              ? (e = i === r)
              : ((e = e.mutableReadLanes),
                (e = (Za & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Qa.push(t))),
            e)
          )
            return n(t._source);
          throw (Qa.push(t), Error(o(350)));
        }
        function ho(e, t, n, r) {
          var i = Tl;
          if (null === i) throw Error(o(349));
          var a = t._getVersion,
            l = a(t._source),
            u = Xa.current,
            s = u.useState(function () {
              return po(i, t, n);
            }),
            c = s[1],
            d = s[0];
          s = to;
          var f = e.memoizedState,
            p = f.refs,
            h = p.getSnapshot,
            v = f.source;
          f = f.subscribe;
          var m = Ja;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = a(t._source);
                if (!cr(l, e)) {
                  (e = n(t._source)),
                    cr(d, e) ||
                      (c(e),
                      (e = pu(m)),
                      (i.mutableReadLanes |= e & i.pendingLanes)),
                    (e = i.mutableReadLanes),
                    (i.entangledLanes |= e);
                  for (var r = i.entanglements, o = e; 0 < o; ) {
                    var u = 31 - Vt(o),
                      s = 1 << u;
                    (r[u] |= e), (o &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pu(m);
                    i.mutableReadLanes |= r & i.pendingLanes;
                  } catch (a) {
                    n(function () {
                      throw a;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(h, n) && cr(v, t) && cr(f, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: so,
                lastRenderedState: d,
              }).dispatch = c =
                Oo.bind(null, Ja, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (d = po(i, t, n)),
              (s.memoizedState = s.baseState = d)),
            d
          );
        }
        function vo(e, t, n) {
          return ho(uo(), e, t, n);
        }
        function mo(e) {
          var t = lo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: so,
                lastRenderedState: e,
              }).dispatch =
              Oo.bind(null, Ja, e)),
            [t.memoizedState, e]
          );
        }
        function go(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Ja.updateQueue)
              ? ((t = { lastEffect: null }),
                (Ja.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function _o(e) {
          return (e = { current: e }), (lo().memoizedState = e);
        }
        function wo() {
          return uo().memoizedState;
        }
        function bo(e, t, n, r) {
          var i = lo();
          (Ja.flags |= e),
            (i.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function yo(e, t, n, r) {
          var i = uo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== eo) {
            var o = eo.memoizedState;
            if (((a = o.destroy), null !== r && ao(r, o.deps)))
              return void go(t, n, a, r);
          }
          (Ja.flags |= e), (i.memoizedState = go(1 | t, n, a, r));
        }
        function xo(e, t) {
          return bo(516, 4, e, t);
        }
        function ko(e, t) {
          return yo(516, 4, e, t);
        }
        function Eo(e, t) {
          return yo(4, 2, e, t);
        }
        function So(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Co(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            yo(4, 2, So.bind(null, t, e), n)
          );
        }
        function zo() {}
        function Ro(e, t) {
          var n = uo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ao(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Po(e, t) {
          var n = uo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ao(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function No(e, t) {
          var n = Vi();
          Ki(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Ki(97 < n ? 97 : n, function () {
              var n = Ya.transition;
              Ya.transition = 1;
              try {
                e(!1), t();
              } finally {
                Ya.transition = n;
              }
            });
        }
        function Oo(e, t, n) {
          var r = fu(),
            i = pu(e),
            a = {
              lane: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            o = t.pending;
          if (
            (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (t.pending = a),
            (o = e.alternate),
            e === Ja || (null !== o && o === Ja))
          )
            ro = no = !0;
          else {
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = o(l, n);
                if (((a.eagerReducer = o), (a.eagerState = u), cr(u, l)))
                  return;
              } catch (s) {}
            hu(e, i, r);
          }
        }
        var Lo = {
            readContext: oa,
            useCallback: io,
            useContext: io,
            useEffect: io,
            useImperativeHandle: io,
            useLayoutEffect: io,
            useMemo: io,
            useReducer: io,
            useRef: io,
            useState: io,
            useDebugValue: io,
            useDeferredValue: io,
            useTransition: io,
            useMutableSource: io,
            useOpaqueIdentifier: io,
            unstable_isNewReconciler: !1,
          },
          To = {
            readContext: oa,
            useCallback: function (e, t) {
              return (lo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oa,
            useEffect: xo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                bo(4, 2, So.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return bo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = lo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = lo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Oo.bind(null, Ja, e)),
                [r.memoizedState, e]
              );
            },
            useRef: _o,
            useState: mo,
            useDebugValue: zo,
            useDeferredValue: function (e) {
              var t = mo(e),
                n = t[0],
                r = t[1];
              return (
                xo(
                  function () {
                    var t = Ya.transition;
                    Ya.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ya.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = mo(!1),
                t = e[0];
              return _o((e = No.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = lo();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                ho(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Aa) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: j, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Xr++).toString(36))),
                      Error(o(355)))
                    );
                  }),
                  n = mo(t)[1];
                return (
                  0 === (2 & Ja.mode) &&
                    ((Ja.flags |= 516),
                    go(
                      5,
                      function () {
                        n("r:" + (Xr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return mo((t = "r:" + (Xr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Mo = {
            readContext: oa,
            useCallback: Ro,
            useContext: oa,
            useEffect: ko,
            useImperativeHandle: Co,
            useLayoutEffect: Eo,
            useMemo: Po,
            useReducer: co,
            useRef: wo,
            useState: function () {
              return co(so);
            },
            useDebugValue: zo,
            useDeferredValue: function (e) {
              var t = co(so),
                n = t[0],
                r = t[1];
              return (
                ko(
                  function () {
                    var t = Ya.transition;
                    Ya.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ya.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = co(so)[0];
              return [wo().current, e];
            },
            useMutableSource: vo,
            useOpaqueIdentifier: function () {
              return co(so)[0];
            },
            unstable_isNewReconciler: !1,
          },
          jo = {
            readContext: oa,
            useCallback: Ro,
            useContext: oa,
            useEffect: ko,
            useImperativeHandle: Co,
            useLayoutEffect: Eo,
            useMemo: Po,
            useReducer: fo,
            useRef: wo,
            useState: function () {
              return fo(so);
            },
            useDebugValue: zo,
            useDeferredValue: function (e) {
              var t = fo(so),
                n = t[0],
                r = t[1];
              return (
                ko(
                  function () {
                    var t = Ya.transition;
                    Ya.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ya.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fo(so)[0];
              return [wo().current, e];
            },
            useMutableSource: vo,
            useOpaqueIdentifier: function () {
              return fo(so)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Io = y.ReactCurrentOwner,
          Bo = !1;
        function Do(e, t, n, r) {
          t.child = null === e ? za(t, null, n, r) : Ca(t, e.child, n, r);
        }
        function Fo(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            aa(t, i),
            (r = oo(e, t, n, r, a, i)),
            null === e || Bo
              ? ((t.flags |= 1), Do(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                al(e, t, i))
          );
        }
        function Ho(e, t, n, r, i, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              qu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = $u(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ao(e, t, o, r, i, a));
          }
          return (
            (o = e.child),
            0 === (i & a) &&
            ((i = o.memoizedProps),
            (n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref)
              ? al(e, t, a)
              : ((t.flags |= 1),
                ((e = Ku(o, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ao(e, t, n, r, i, a) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Bo = !1), 0 === (a & i)))
              return (t.lanes = e.lanes), al(e, t, a);
            0 !== (16384 & e.flags) && (Bo = !0);
          }
          return Vo(e, t, n, r, a);
        }
        function Wo(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), xu(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  xu(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                xu(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              xu(t, r);
          return Do(e, t, i, n), t.child;
        }
        function Uo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Vo(e, t, n, r, i) {
          var a = gi(n) ? vi : pi.current;
          return (
            (a = mi(t, a)),
            aa(t, i),
            (n = oo(e, t, n, r, a, i)),
            null === e || Bo
              ? ((t.flags |= 1), Do(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                al(e, t, i))
          );
        }
        function qo(e, t, n, r, i) {
          if (gi(n)) {
            var a = !0;
            yi(t);
          } else a = !1;
          if ((aa(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              wa(t, n, r),
              ya(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var u = o.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = oa(s))
              : (s = mi(t, (s = gi(n) ? vi : pi.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || u !== s) && ba(t, o, r, s)),
              (la = !1);
            var f = t.memoizedState;
            (o.state = f),
              pa(t, r, o, i),
              (u = t.memoizedState),
              l !== r || f !== u || hi.current || la
                ? ("function" === typeof c &&
                    (ma(t, n, c, r), (u = t.memoizedState)),
                  (l = la || _a(t, n, l, r, f, u, s))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = l))
                : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (o = t.stateNode),
              sa(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : Yi(t.type, l)),
              (o.props = s),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = oa(u))
                : (u = mi(t, (u = gi(n) ? vi : pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== d || f !== u) && ba(t, o, r, u)),
              (la = !1),
              (f = t.memoizedState),
              (o.state = f),
              pa(t, r, o, i);
            var h = t.memoizedState;
            l !== d || f !== h || hi.current || la
              ? ("function" === typeof p &&
                  (ma(t, n, p, r), (h = t.memoizedState)),
                (s = la || _a(t, n, s, r, f, h, u))
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Ko(e, t, n, r, a, i);
        }
        function Ko(e, t, n, r, i, a) {
          Uo(e, t);
          var o = 0 !== (64 & t.flags);
          if (!r && !o) return i && xi(t, n, !1), al(e, t, a);
          (r = t.stateNode), (Io.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ca(t, e.child, null, a)),
                (t.child = Ca(t, null, l, a)))
              : Do(e, t, l, a),
            (t.memoizedState = r.state),
            i && xi(t, n, !0),
            t.child
          );
        }
        function $o(e) {
          var t = e.stateNode;
          t.pendingContext
            ? wi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && wi(0, t.context, !1),
            Ta(e, t.containerInfo);
        }
        var Qo,
          Go,
          Xo,
          Yo = { dehydrated: null, retryLane: 0 };
        function Zo(e, t, n) {
          var r,
            i = t.pendingProps,
            a = Ba.current,
            o = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((o = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (a |= 1),
            di(Ba, 1 & a),
            null === e
              ? (void 0 !== i.fallback && Va(t),
                (e = i.children),
                (a = i.fallback),
                o
                  ? ((e = Jo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Yo),
                    e)
                  : "number" === typeof i.unstable_expectedLoadTime
                  ? ((e = Jo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Yo),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Gu(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                o
                  ? ((i = tl(e, t, i.children, i.fallback, n)),
                    (o = t.child),
                    (a = e.child.memoizedState),
                    (o.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Yo),
                    i)
                  : ((n = el(e, t, i.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Jo(e, t, n, r) {
          var i = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 === (2 & i) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Gu(t, i, 0, null)),
            (n = Qu(n, i, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function el(e, t, n, r) {
          var i = e.child;
          return (
            (e = i.sibling),
            (n = Ku(i, { mode: "visible", children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function tl(e, t, n, r, i) {
          var a = t.mode,
            o = e.child;
          e = o.sibling;
          var l = { mode: "hidden", children: n };
          return (
            0 === (2 & a) && t.child !== o
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = l),
                null !== (o = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = o),
                    (o.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Ku(o, l)),
            null !== e ? (r = Ku(e, r)) : ((r = Qu(r, a, i, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function nl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ia(e.return, t);
        }
        function rl(e, t, n, r, i, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                lastEffect: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i),
              (o.lastEffect = a));
        }
        function il(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((Do(e, t, r.children, n), 0 !== (2 & (r = Ba.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && nl(e, n);
                else if (19 === e.tag) nl(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((di(Ba, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === Da(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  rl(t, !1, i, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === Da(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                rl(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                rl(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function al(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Al |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
              for (
                n = Ku((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Ku(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function ol(e, t) {
          if (!Aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ll(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
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
              return null;
            case 1:
            case 17:
              return gi(t.type) && _i(), null;
            case 3:
              return (
                Ma(),
                ci(hi),
                ci(pi),
                Ga(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ka(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ia(t);
              var a = La(Oa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Go(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return null;
                }
                if (((e = La(Pa.current)), Ka(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Zr] = t), (r[Jr] = l), n)) {
                    case "dialog":
                      Nr("cancel", r), Nr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Nr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Cr.length; e++) Nr(Cr[e], r);
                      break;
                    case "source":
                      Nr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Nr("error", r), Nr("load", r);
                      break;
                    case "details":
                      Nr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Nr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Nr("invalid", r);
                      break;
                    case "textarea":
                      ue(r, l), Nr("invalid", r);
                  }
                  for (var s in (Ee(n, l), (e = null), l))
                    l.hasOwnProperty(s) &&
                      ((a = l[s]),
                      "children" === s
                        ? "string" === typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" === typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : u.hasOwnProperty(s) &&
                          null != a &&
                          "onScroll" === s &&
                          Nr("scroll", r));
                  switch (n) {
                    case "input":
                      X(r), re(r, l, !0);
                      break;
                    case "textarea":
                      X(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Hr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === a.nodeType ? a : a.ownerDocument),
                    e === de && (e = pe(n)),
                    e === de
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Zr] = t),
                    (e[Jr] = r),
                    Qo(e, t),
                    (t.stateNode = e),
                    (s = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Nr("cancel", e), Nr("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Nr("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Cr.length; a++) Nr(Cr[a], e);
                      a = r;
                      break;
                    case "source":
                      Nr("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Nr("error", e), Nr("load", e), (a = r);
                      break;
                    case "details":
                      Nr("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Nr("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = i({}, r, { value: void 0 })),
                        Nr("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (a = le(e, r)), Nr("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  Ee(n, a);
                  var c = a;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var d = c[l];
                      "style" === l
                        ? xe(e, d)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (d = d ? d.__html : void 0) && ge(e, d)
                        : "children" === l
                        ? "string" === typeof d
                          ? ("textarea" !== n || "" !== d) && _e(e, d)
                          : "number" === typeof d && _e(e, "" + d)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (u.hasOwnProperty(l)
                            ? null != d && "onScroll" === l && Nr("scroll", e)
                            : null != d && b(e, l, d, s));
                    }
                  switch (n) {
                    case "input":
                      X(e), re(e, r, !1);
                      break;
                    case "textarea":
                      X(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + Q(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? oe(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" === typeof a.onClick && (e.onclick = Hr);
                  }
                  Ur(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Xo(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                (n = La(Oa.current)),
                  La(Pa.current),
                  Ka(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Zr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Zr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ci(Ba),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Ka(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Ba.current)
                        ? 0 === Dl && (Dl = 3)
                        : ((0 !== Dl && 3 !== Dl) || (Dl = 4),
                          null === Tl ||
                            (0 === (134217727 & Al) &&
                              0 === (134217727 & Wl)) ||
                            _u(Tl, jl))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ma(), null === e && Lr(t.stateNode.containerInfo), null;
            case 10:
              return ra(t), null;
            case 19:
              if ((ci(Ba), null === (r = t.memoizedState))) return null;
              if (((l = 0 !== (64 & t.flags)), null === (s = r.rendering)))
                if (l) ol(r, !1);
                else {
                  if (0 !== Dl || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = Da(e))) {
                        for (
                          t.flags |= 64,
                            ol(r, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return di(Ba, (1 & Ba.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Ui() > Kl &&
                    ((t.flags |= 64),
                    (l = !0),
                    ol(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Da(s))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      ol(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !s.alternate &&
                        !Aa)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Ui() - r.renderingStartTime > Kl &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      ol(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                    (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ui()),
                  (n.sibling = null),
                  (t = Ba.current),
                  di(Ba, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                ku(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(o(156, t.tag));
        }
        function ul(e) {
          switch (e.tag) {
            case 1:
              gi(e.type) && _i();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ma(), ci(hi), ci(pi), Ga(), 0 !== (64 & (t = e.flags))))
                throw Error(o(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ia(e), null;
            case 13:
              return (
                ci(Ba),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return ci(Ba), null;
            case 4:
              return Ma(), null;
            case 10:
              return ra(e), null;
            case 23:
            case 24:
              return ku(), null;
            default:
              return null;
          }
        }
        function sl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += K(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function cl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Qo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Go = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), La(Pa.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (l = []);
                  break;
                case "select":
                  (a = i({}, a, { value: void 0 })),
                    (r = i({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = le(e, a)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Hr);
              }
              for (d in (Ee(n, r), (n = null), a))
                if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && null != a[d])
                  if ("style" === d) {
                    var s = a[d];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== d &&
                      "children" !== d &&
                      "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      "autoFocus" !== d &&
                      (u.hasOwnProperty(d)
                        ? l || (l = [])
                        : (l = l || []).push(d, null));
              for (d in r) {
                var c = r[d];
                if (
                  ((s = null != a ? a[d] : void 0),
                  r.hasOwnProperty(d) && c !== s && (null != c || null != s))
                )
                  if ("style" === d)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          s[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (l || (l = []), l.push(d, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === d
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(d, c))
                      : "children" === d
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(d, "" + c)
                      : "suppressContentEditableWarning" !== d &&
                        "suppressHydrationWarning" !== d &&
                        (u.hasOwnProperty(d)
                          ? (null != c && "onScroll" === d && Nr("scroll", e),
                            l || s === c || (l = []))
                          : "object" === typeof c &&
                            null !== c &&
                            c.$$typeof === j
                          ? c.toString()
                          : (l = l || []).push(d, c));
              }
              n && (l = l || []).push("style", n);
              var d = l;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (Xo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function fl(e, t, n) {
          ((n = ca(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Xl || ((Xl = !0), (Yl = r)), cl(0, t);
            }),
            n
          );
        }
        function pl(e, t, n) {
          (n = ca(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            n.payload = function () {
              return cl(0, t), r(i);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" !== typeof r &&
                  (null === Zl ? (Zl = new Set([this])) : Zl.add(this),
                  cl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var hl = "function" === typeof WeakSet ? WeakSet : Set;
        function vl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" === typeof t)
              try {
                t(null);
              } catch (n) {
                Hu(e, n);
              }
            else t.current = null;
        }
        function ml(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Yi(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && $r(t.stateNode.containerInfo));
          }
          throw Error(o(163));
        }
        function gl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var i = e;
                  (r = i.next),
                    0 !== (4 & (i = i.tag)) &&
                      0 !== (1 & i) &&
                      (Bu(n, e), Iu(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Yi(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ha(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ha(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Ur(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && xt(n))))
              );
          }
          throw Error(o(163));
        }
        function _l(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" === typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                (i =
                  void 0 !== i && null !== i && i.hasOwnProperty("display")
                    ? i.display
                    : null),
                  (r.style.display = ye("display", i));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function wl(e, t) {
          if (Ei && "function" === typeof Ei.onCommitFiberUnmount)
            try {
              Ei.onCommitFiberUnmount(ki, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    i = r.destroy;
                  if (((r = r.tag), void 0 !== i))
                    if (0 !== (4 & r)) Bu(t, n);
                    else {
                      r = t;
                      try {
                        i();
                      } catch (a) {
                        Hu(r, a);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (vl(t),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Hu(t, a);
                }
              break;
            case 5:
              vl(t);
              break;
            case 4:
              Sl(e, t);
          }
        }
        function bl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function yl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function xl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (yl(t)) break e;
              t = t.return;
            }
            throw Error(o(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(o(161));
          }
          16 & n.flags && (_e(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || yl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? kl(e, n, t) : El(e, n, t);
        }
        function kl(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Hr));
          else if (4 !== r && null !== (e = e.child))
            for (kl(e, t, n), e = e.sibling; null !== e; )
              kl(e, t, n), (e = e.sibling);
        }
        function El(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (El(e, t, n), e = e.sibling; null !== e; )
              El(e, t, n), (e = e.sibling);
        }
        function Sl(e, t) {
          for (var n, r, i = t, a = !1; ; ) {
            if (!a) {
              a = i.return;
              e: for (;;) {
                if (null === a) throw Error(o(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var l = e, u = i, s = u; ; )
                if ((wl(l, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === u) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === u) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((l = n),
                  (u = i.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (r = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((wl(e, i), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (a = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Cl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Jr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Se(e, i),
                      t = Se(e, r),
                      i = 0;
                    i < a.length;
                    i += 2
                  ) {
                    var l = a[i],
                      u = a[i + 1];
                    "style" === l
                      ? xe(n, u)
                      : "dangerouslySetInnerHTML" === l
                      ? ge(n, u)
                      : "children" === l
                      ? _e(n, u)
                      : b(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      se(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? oe(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? oe(n, !!r.multiple, r.defaultValue, !0)
                              : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(o(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), xt(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((ql = Ui()), _l(t.child, !0)),
                void zl(t)
              );
            case 19:
              return void zl(t);
            case 23:
            case 24:
              return void _l(t, null !== t.memoizedState);
          }
          throw Error(o(163));
        }
        function zl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hl()),
              t.forEach(function (t) {
                var r = Wu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Rl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Pl = Math.ceil,
          Nl = y.ReactCurrentDispatcher,
          Ol = y.ReactCurrentOwner,
          Ll = 0,
          Tl = null,
          Ml = null,
          jl = 0,
          Il = 0,
          Bl = si(0),
          Dl = 0,
          Fl = null,
          Hl = 0,
          Al = 0,
          Wl = 0,
          Ul = 0,
          Vl = null,
          ql = 0,
          Kl = 1 / 0;
        function $l() {
          Kl = Ui() + 500;
        }
        var Ql,
          Gl = null,
          Xl = !1,
          Yl = null,
          Zl = null,
          Jl = !1,
          eu = null,
          tu = 90,
          nu = [],
          ru = [],
          iu = null,
          au = 0,
          ou = null,
          lu = -1,
          uu = 0,
          su = 0,
          cu = null,
          du = !1;
        function fu() {
          return 0 !== (48 & Ll) ? Ui() : -1 !== lu ? lu : (lu = Ui());
        }
        function pu(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === Vi() ? 1 : 2;
          if ((0 === uu && (uu = Hl), 0 !== Xi.transition)) {
            0 !== su && (su = null !== Vl ? Vl.pendingLanes : 0), (e = uu);
            var t = 4186112 & ~su;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Vi()),
            0 !== (4 & Ll) && 98 === e
              ? (e = Ht(12, uu))
              : (e = Ht(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  uu
                )),
            e
          );
        }
        function hu(e, t, n) {
          if (50 < au) throw ((au = 0), (ou = null), Error(o(185)));
          if (null === (e = vu(e, t))) return null;
          Ut(e, t, n), e === Tl && ((Wl |= t), 4 === Dl && _u(e, jl));
          var r = Vi();
          1 === t
            ? 0 !== (8 & Ll) && 0 === (48 & Ll)
              ? wu(e)
              : (mu(e, n), 0 === Ll && ($l(), Qi()))
            : (0 === (4 & Ll) ||
                (98 !== r && 99 !== r) ||
                (null === iu ? (iu = new Set([e])) : iu.add(e)),
              mu(e, n)),
            (Vl = e);
        }
        function vu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function mu(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              i = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Vt(l),
              s = 1 << u,
              c = a[u];
            if (-1 === c) {
              if (0 === (s & r) || 0 !== (s & i)) {
                (c = t), Bt(s);
                var d = It;
                a[u] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            l &= ~s;
          }
          if (((r = Dt(e, e === Tl ? jl : 0)), (t = It), 0 === r))
            null !== n &&
              (n !== Bi && zi(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Bi && zi(n);
            }
            15 === t
              ? ((n = wu.bind(null, e)),
                null === Fi ? ((Fi = [n]), (Hi = Ci(Li, Gi))) : Fi.push(n),
                (n = Bi))
              : 14 === t
              ? (n = $i(99, wu.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                (n = $i(n, gu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gu(e) {
          if (((lu = -1), (su = uu = 0), 0 !== (48 & Ll))) throw Error(o(327));
          var t = e.callbackNode;
          if (ju() && e.callbackNode !== t) return null;
          var n = Dt(e, e === Tl ? jl : 0);
          if (0 === n) return null;
          var r = n,
            i = Ll;
          Ll |= 16;
          var a = Cu();
          for ((Tl === e && jl === r) || ($l(), Eu(e, r)); ; )
            try {
              Pu();
              break;
            } catch (u) {
              Su(e, u);
            }
          if (
            (na(),
            (Nl.current = a),
            (Ll = i),
            null !== Ml ? (r = 0) : ((Tl = null), (jl = 0), (r = Dl)),
            0 !== (Hl & Wl))
          )
            Eu(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Ll |= 64),
                e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
                0 !== (n = Ft(e)) && (r = zu(e, n))),
              1 === r)
            )
              throw ((t = Fl), Eu(e, 0), _u(e, n), mu(e, Ui()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Lu(e);
                break;
              case 3:
                if (
                  (_u(e, n), (62914560 & n) === n && 10 < (r = ql + 500 - Ui()))
                ) {
                  if (0 !== Dt(e, 0)) break;
                  if (((i = e.suspendedLanes) & n) !== n) {
                    fu(), (e.pingedLanes |= e.suspendedLanes & i);
                    break;
                  }
                  e.timeoutHandle = qr(Lu.bind(null, e), r);
                  break;
                }
                Lu(e);
                break;
              case 4:
                if ((_u(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, i = -1; 0 < n; ) {
                  var l = 31 - Vt(n);
                  (a = 1 << l), (l = r[l]) > i && (i = l), (n &= ~a);
                }
                if (
                  ((n = i),
                  10 <
                    (n =
                      (120 > (n = Ui() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Pl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = qr(Lu.bind(null, e), n);
                  break;
                }
                Lu(e);
                break;
              default:
                throw Error(o(329));
            }
          }
          return mu(e, Ui()), e.callbackNode === t ? gu.bind(null, e) : null;
        }
        function _u(e, t) {
          for (
            t &= ~Ul,
              t &= ~Wl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Vt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function wu(e) {
          if (0 !== (48 & Ll)) throw Error(o(327));
          if ((ju(), e === Tl && 0 !== (e.expiredLanes & jl))) {
            var t = jl,
              n = zu(e, t);
            0 !== (Hl & Wl) && (n = zu(e, (t = Dt(e, t))));
          } else n = zu(e, (t = Dt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Ll |= 64),
              e.hydrate && ((e.hydrate = !1), $r(e.containerInfo)),
              0 !== (t = Ft(e)) && (n = zu(e, t))),
            1 === n)
          )
            throw ((n = Fl), Eu(e, 0), _u(e, t), mu(e, Ui()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Lu(e),
            mu(e, Ui()),
            null
          );
        }
        function bu(e, t) {
          var n = Ll;
          Ll |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ll = n) && ($l(), Qi());
          }
        }
        function yu(e, t) {
          var n = Ll;
          (Ll &= -2), (Ll |= 8);
          try {
            return e(t);
          } finally {
            0 === (Ll = n) && ($l(), Qi());
          }
        }
        function xu(e, t) {
          di(Bl, Il), (Il |= t), (Hl |= t);
        }
        function ku() {
          (Il = Bl.current), ci(Bl);
        }
        function Eu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Kr(n)), null !== Ml))
            for (n = Ml.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    _i();
                  break;
                case 3:
                  Ma(), ci(hi), ci(pi), Ga();
                  break;
                case 5:
                  Ia(r);
                  break;
                case 4:
                  Ma();
                  break;
                case 13:
                case 19:
                  ci(Ba);
                  break;
                case 10:
                  ra(r);
                  break;
                case 23:
                case 24:
                  ku();
              }
              n = n.return;
            }
          (Tl = e),
            (Ml = Ku(e.current, null)),
            (jl = Il = Hl = t),
            (Dl = 0),
            (Fl = null),
            (Ul = Wl = Al = 0);
        }
        function Su(e, t) {
          for (;;) {
            var n = Ml;
            try {
              if ((na(), (Xa.current = Lo), no)) {
                for (var r = Ja.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                no = !1;
              }
              if (
                ((Za = 0),
                (to = eo = Ja = null),
                (ro = !1),
                (Ol.current = null),
                null === n || null === n.return)
              ) {
                (Dl = 1), (Fl = t), (Ml = null);
                break;
              }
              e: {
                var a = e,
                  o = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = jl),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u;
                  if (0 === (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var d = 0 !== (1 & Ba.current),
                    f = o;
                  do {
                    var p;
                    if ((p = 13 === f.tag)) {
                      var h = f.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var v = f.memoizedProps;
                        p =
                          void 0 !== v.fallback &&
                          (!0 !== v.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (p) {
                      var m = f.updateQueue;
                      if (null === m) {
                        var g = new Set();
                        g.add(s), (f.updateQueue = g);
                      } else m.add(s);
                      if (0 === (2 & f.mode)) {
                        if (
                          ((f.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var _ = ca(-1, 1);
                            (_.tag = 2), da(l, _);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var w = a.pingCache;
                      if (
                        (null === w
                          ? ((w = a.pingCache = new dl()),
                            (u = new Set()),
                            w.set(s, u))
                          : void 0 === (u = w.get(s)) &&
                            ((u = new Set()), w.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var b = Au.bind(null, a, s, l);
                        s.then(b, b);
                      }
                      (f.flags |= 4096), (f.lanes = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  u = Error(
                    ($(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Dl && (Dl = 2), (u = sl(u, l)), (f = o);
                do {
                  switch (f.tag) {
                    case 3:
                      (a = u),
                        (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        fa(f, fl(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var y = f.type,
                        x = f.stateNode;
                      if (
                        0 === (64 & f.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === Zl || !Zl.has(x))))
                      ) {
                        (f.flags |= 4096),
                          (t &= -t),
                          (f.lanes |= t),
                          fa(f, pl(f, a, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              Ou(n);
            } catch (k) {
              (t = k), Ml === n && null !== n && (Ml = n = n.return);
              continue;
            }
            break;
          }
        }
        function Cu() {
          var e = Nl.current;
          return (Nl.current = Lo), null === e ? Lo : e;
        }
        function zu(e, t) {
          var n = Ll;
          Ll |= 16;
          var r = Cu();
          for ((Tl === e && jl === t) || Eu(e, t); ; )
            try {
              Ru();
              break;
            } catch (i) {
              Su(e, i);
            }
          if ((na(), (Ll = n), (Nl.current = r), null !== Ml))
            throw Error(o(261));
          return (Tl = null), (jl = 0), Dl;
        }
        function Ru() {
          for (; null !== Ml; ) Nu(Ml);
        }
        function Pu() {
          for (; null !== Ml && !Ri(); ) Nu(Ml);
        }
        function Nu(e) {
          var t = Ql(e.alternate, e, Il);
          (e.memoizedProps = e.pendingProps),
            null === t ? Ou(e) : (Ml = t),
            (Ol.current = null);
        }
        function Ou(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ll(n, t, Il))) return void (Ml = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Il) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, i = n.child; null !== i; )
                  (r |= i.lanes | i.childLanes), (i = i.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = ul(t))) return (n.flags &= 2047), void (Ml = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Ml = t);
            Ml = t = e;
          } while (null !== t);
          0 === Dl && (Dl = 5);
        }
        function Lu(e) {
          var t = Vi();
          return Ki(99, Tu.bind(null, e, t)), null;
        }
        function Tu(e, t) {
          do {
            ju();
          } while (null !== eu);
          if (0 !== (48 & Ll)) throw Error(o(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(o(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            i = r,
            a = e.pendingLanes & ~i;
          (e.pendingLanes = i),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= i),
            (e.mutableReadLanes &= i),
            (e.entangledLanes &= i),
            (i = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var s = 31 - Vt(a),
              c = 1 << s;
            (i[s] = 0), (l[s] = -1), (u[s] = -1), (a &= ~c);
          }
          if (
            (null !== iu && 0 === (24 & r) && iu.has(e) && iu.delete(e),
            e === Tl && ((Ml = Tl = null), (jl = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((i = Ll),
              (Ll |= 32),
              (Ol.current = null),
              (Ar = Gt),
              gr((l = mr())))
            ) {
              if ("selectionStart" in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (c = u.getSelection && u.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (u = c.anchorNode),
                    (a = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    u.nodeType, s.nodeType;
                  } catch (C) {
                    u = null;
                    break e;
                  }
                  var d = 0,
                    f = -1,
                    p = -1,
                    h = 0,
                    v = 0,
                    m = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var _;
                      m !== u || (0 !== a && 3 !== m.nodeType) || (f = d + a),
                        m !== s || (0 !== c && 3 !== m.nodeType) || (p = d + c),
                        3 === m.nodeType && (d += m.nodeValue.length),
                        null !== (_ = m.firstChild);

                    )
                      (g = m), (m = _);
                    for (;;) {
                      if (m === l) break t;
                      if (
                        (g === u && ++h === a && (f = d),
                        g === s && ++v === c && (p = d),
                        null !== (_ = m.nextSibling))
                      )
                        break;
                      g = (m = g).parentNode;
                    }
                    m = _;
                  }
                  u = -1 === f || -1 === p ? null : { start: f, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Wr = { focusedElem: l, selectionRange: u }),
              (Gt = !1),
              (cu = null),
              (du = !1),
              (Gl = r);
            do {
              try {
                Mu();
              } catch (C) {
                if (null === Gl) throw Error(o(330));
                Hu(Gl, C), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (cu = null), (Gl = r);
            do {
              try {
                for (l = e; null !== Gl; ) {
                  var w = Gl.flags;
                  if ((16 & w && _e(Gl.stateNode, ""), 128 & w)) {
                    var b = Gl.alternate;
                    if (null !== b) {
                      var y = b.ref;
                      null !== y &&
                        ("function" === typeof y
                          ? y(null)
                          : (y.current = null));
                    }
                  }
                  switch (1038 & w) {
                    case 2:
                      xl(Gl), (Gl.flags &= -3);
                      break;
                    case 6:
                      xl(Gl), (Gl.flags &= -3), Cl(Gl.alternate, Gl);
                      break;
                    case 1024:
                      Gl.flags &= -1025;
                      break;
                    case 1028:
                      (Gl.flags &= -1025), Cl(Gl.alternate, Gl);
                      break;
                    case 4:
                      Cl(Gl.alternate, Gl);
                      break;
                    case 8:
                      Sl(l, (u = Gl));
                      var x = u.alternate;
                      bl(u), null !== x && bl(x);
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (C) {
                if (null === Gl) throw Error(o(330));
                Hu(Gl, C), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            if (
              ((y = Wr),
              (b = mr()),
              (w = y.focusedElem),
              (l = y.selectionRange),
              b !== w &&
                w &&
                w.ownerDocument &&
                vr(w.ownerDocument.documentElement, w))
            ) {
              null !== l &&
                gr(w) &&
                ((b = l.start),
                void 0 === (y = l.end) && (y = b),
                "selectionStart" in w
                  ? ((w.selectionStart = b),
                    (w.selectionEnd = Math.min(y, w.value.length)))
                  : (y =
                      ((b = w.ownerDocument || document) && b.defaultView) ||
                      window).getSelection &&
                    ((y = y.getSelection()),
                    (u = w.textContent.length),
                    (x = Math.min(l.start, u)),
                    (l = void 0 === l.end ? x : Math.min(l.end, u)),
                    !y.extend && x > l && ((u = l), (l = x), (x = u)),
                    (u = hr(w, x)),
                    (a = hr(w, l)),
                    u &&
                      a &&
                      (1 !== y.rangeCount ||
                        y.anchorNode !== u.node ||
                        y.anchorOffset !== u.offset ||
                        y.focusNode !== a.node ||
                        y.focusOffset !== a.offset) &&
                      ((b = b.createRange()).setStart(u.node, u.offset),
                      y.removeAllRanges(),
                      x > l
                        ? (y.addRange(b), y.extend(a.node, a.offset))
                        : (b.setEnd(a.node, a.offset), y.addRange(b))))),
                (b = []);
              for (y = w; (y = y.parentNode); )
                1 === y.nodeType &&
                  b.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
              for (
                "function" === typeof w.focus && w.focus(), w = 0;
                w < b.length;
                w++
              )
                ((y = b[w]).element.scrollLeft = y.left),
                  (y.element.scrollTop = y.top);
            }
            (Gt = !!Ar), (Wr = Ar = null), (e.current = n), (Gl = r);
            do {
              try {
                for (w = e; null !== Gl; ) {
                  var k = Gl.flags;
                  if ((36 & k && gl(w, Gl.alternate, Gl), 128 & k)) {
                    b = void 0;
                    var E = Gl.ref;
                    if (null !== E) {
                      var S = Gl.stateNode;
                      Gl.tag,
                        (b = S),
                        "function" === typeof E ? E(b) : (E.current = b);
                    }
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (C) {
                if (null === Gl) throw Error(o(330));
                Hu(Gl, C), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (Gl = null), Di(), (Ll = i);
          } else e.current = n;
          if (Jl) (Jl = !1), (eu = e), (tu = t);
          else
            for (Gl = r; null !== Gl; )
              (t = Gl.nextEffect),
                (Gl.nextEffect = null),
                8 & Gl.flags &&
                  (((k = Gl).sibling = null), (k.stateNode = null)),
                (Gl = t);
          if (
            (0 === (r = e.pendingLanes) && (Zl = null),
            1 === r ? (e === ou ? au++ : ((au = 0), (ou = e))) : (au = 0),
            (n = n.stateNode),
            Ei && "function" === typeof Ei.onCommitFiberRoot)
          )
            try {
              Ei.onCommitFiberRoot(
                ki,
                n,
                void 0,
                64 === (64 & n.current.flags)
              );
            } catch (C) {}
          if ((mu(e, Ui()), Xl)) throw ((Xl = !1), (e = Yl), (Yl = null), e);
          return 0 !== (8 & Ll) || Qi(), null;
        }
        function Mu() {
          for (; null !== Gl; ) {
            var e = Gl.alternate;
            du ||
              null === cu ||
              (0 !== (8 & Gl.flags)
                ? et(Gl, cu) && (du = !0)
                : 13 === Gl.tag && Rl(e, Gl) && et(Gl, cu) && (du = !0));
            var t = Gl.flags;
            0 !== (256 & t) && ml(e, Gl),
              0 === (512 & t) ||
                Jl ||
                ((Jl = !0),
                $i(97, function () {
                  return ju(), null;
                })),
              (Gl = Gl.nextEffect);
          }
        }
        function ju() {
          if (90 !== tu) {
            var e = 97 < tu ? 97 : tu;
            return (tu = 90), Ki(e, Du);
          }
          return !1;
        }
        function Iu(e, t) {
          nu.push(t, e),
            Jl ||
              ((Jl = !0),
              $i(97, function () {
                return ju(), null;
              }));
        }
        function Bu(e, t) {
          ru.push(t, e),
            Jl ||
              ((Jl = !0),
              $i(97, function () {
                return ju(), null;
              }));
        }
        function Du() {
          if (null === eu) return !1;
          var e = eu;
          if (((eu = null), 0 !== (48 & Ll))) throw Error(o(331));
          var t = Ll;
          Ll |= 32;
          var n = ru;
          ru = [];
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              a = n[r + 1],
              l = i.destroy;
            if (((i.destroy = void 0), "function" === typeof l))
              try {
                l();
              } catch (s) {
                if (null === a) throw Error(o(330));
                Hu(a, s);
              }
          }
          for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
            (i = n[r]), (a = n[r + 1]);
            try {
              var u = i.create;
              i.destroy = u();
            } catch (s) {
              if (null === a) throw Error(o(330));
              Hu(a, s);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Ll = t), Qi(), !0;
        }
        function Fu(e, t, n) {
          da(e, (t = fl(0, (t = sl(n, t)), 1))),
            (t = fu()),
            null !== (e = vu(e, 1)) && (Ut(e, 1, t), mu(e, t));
        }
        function Hu(e, t) {
          if (3 === e.tag) Fu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Fu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" === typeof n.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r)))
                ) {
                  var i = pl(n, (e = sl(t, e)), 1);
                  if ((da(n, i), (i = fu()), null !== (n = vu(n, 1))))
                    Ut(n, 1, i), mu(n, i);
                  else if (
                    "function" === typeof r.componentDidCatch &&
                    (null === Zl || !Zl.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (a) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Au(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Tl === e &&
              (jl & n) === n &&
              (4 === Dl ||
              (3 === Dl && (62914560 & jl) === jl && 500 > Ui() - ql)
                ? Eu(e, 0)
                : (Ul |= n)),
            mu(e, t);
        }
        function Wu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === Vi() ? 1 : 2)
                : (0 === uu && (uu = Hl),
                  0 === (t = At(62914560 & ~uu)) && (t = 4194304))),
            (n = fu()),
            null !== (e = vu(e, t)) && (Ut(e, t, n), mu(e, n));
        }
        function Uu(e, t, n, r) {
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
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Vu(e, t, n, r) {
          return new Uu(e, t, n, r);
        }
        function qu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ku(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Vu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function $u(e, t, n, r, i, a) {
          var l = 2;
          if (((r = e), "function" === typeof e)) qu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case E:
                return Qu(n.children, i, a, t);
              case I:
                (l = 8), (i |= 16);
                break;
              case S:
                (l = 8), (i |= 1);
                break;
              case C:
                return (
                  ((e = Vu(12, n, t, 8 | i)).elementType = C),
                  (e.type = C),
                  (e.lanes = a),
                  e
                );
              case N:
                return (
                  ((e = Vu(13, n, t, i)).type = N),
                  (e.elementType = N),
                  (e.lanes = a),
                  e
                );
              case O:
                return (
                  ((e = Vu(19, n, t, i)).elementType = O), (e.lanes = a), e
                );
              case B:
                return Gu(n, i, a, t);
              case D:
                return (
                  ((e = Vu(24, n, t, i)).elementType = D), (e.lanes = a), e
                );
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case z:
                      l = 10;
                      break e;
                    case R:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case T:
                      (l = 16), (r = null);
                      break e;
                    case M:
                      l = 22;
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Vu(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Qu(e, t, n, r) {
          return ((e = Vu(7, e, r, t)).lanes = n), e;
        }
        function Gu(e, t, n, r) {
          return ((e = Vu(23, e, r, t)).elementType = B), (e.lanes = n), e;
        }
        function Xu(e, t, n) {
          return ((e = Vu(6, e, null, t)).lanes = n), e;
        }
        function Yu(e, t, n) {
          return (
            ((t = Vu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Zu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Wt(0)),
            (this.expirationTimes = Wt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Wt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ju(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function es(e, t, n, r) {
          var i = t.current,
            a = fu(),
            l = pu(i);
          e: if (n) {
            t: {
              if (Xe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(o(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (gi(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(o(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (gi(s)) {
                n = bi(n, s, u);
                break e;
              }
            }
            n = u;
          } else n = fi;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ca(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(i, t),
            hu(i, l, a),
            l
          );
        }
        function ts(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function ns(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function rs(e, t) {
          ns(e, t), (e = e.alternate) && ns(e, t);
        }
        function is(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Zu(e, t, null != n && !0 === n.hydrate)),
            (t = Vu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ua(t),
            (e[ei] = n.current),
            Lr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var i = (t = r[e])._getVersion;
              (i = i(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, i])
                  : n.mutableSourceEagerHydrationData.push(t, i);
            }
          this._internalRoot = n;
        }
        function as(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function os(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a._internalRoot;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = ts(o);
                l.call(e);
              };
            }
            es(t, o, e, i);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new is(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (o = a._internalRoot),
              "function" === typeof i)
            ) {
              var u = i;
              i = function () {
                var e = ts(o);
                u.call(e);
              };
            }
            yu(function () {
              es(t, o, e, i);
            });
          }
          return ts(o);
        }
        function ls(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!as(t)) throw Error(o(200));
          return Ju(e, t, null, n);
        }
        (Ql = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || hi.current) Bo = !0;
            else {
              if (0 === (n & r)) {
                switch (((Bo = !1), t.tag)) {
                  case 3:
                    $o(t), $a();
                    break;
                  case 5:
                    ja(t);
                    break;
                  case 1:
                    gi(t.type) && yi(t);
                    break;
                  case 4:
                    Ta(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var i = t.type._context;
                    di(Zi, i._currentValue), (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Zo(e, t, n)
                        : (di(Ba, 1 & Ba.current),
                          null !== (t = al(e, t, n)) ? t.sibling : null);
                    di(Ba, 1 & Ba.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return il(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      di(Ba, Ba.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Wo(e, t, n);
                }
                return al(e, t, n);
              }
              Bo = 0 !== (16384 & e.flags);
            }
          else Bo = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = mi(t, pi.current)),
                aa(t, n),
                (i = oo(null, t, r, e, i, n)),
                (t.flags |= 1),
                "object" === typeof i &&
                  null !== i &&
                  "function" === typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  gi(r))
                ) {
                  var a = !0;
                  yi(t);
                } else a = !1;
                (t.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  ua(t);
                var l = r.getDerivedStateFromProps;
                "function" === typeof l && ma(t, r, l, e),
                  (i.updater = ga),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  ya(t, r, e, n),
                  (t = Ko(null, t, r, !0, a, n));
              } else (t.tag = 0), Do(null, t, i, n), (t = t.child);
              return t;
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (i = (a = i._init)(i._payload)),
                  (t.type = i),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return qu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = Yi(i, e)),
                  a)
                ) {
                  case 0:
                    t = Vo(null, t, i, e, n);
                    break e;
                  case 1:
                    t = qo(null, t, i, e, n);
                    break e;
                  case 11:
                    t = Fo(null, t, i, e, n);
                    break e;
                  case 14:
                    t = Ho(null, t, i, Yi(i.type, e), r, n);
                    break e;
                }
                throw Error(o(306, i, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Vo(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                qo(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
              );
            case 3:
              if (($o(t), (r = t.updateQueue), null === e || null === r))
                throw Error(o(282));
              if (
                ((r = t.pendingProps),
                (i = null !== (i = t.memoizedState) ? i.element : null),
                sa(e, t),
                pa(t, r, null, n),
                (r = t.memoizedState.element) === i)
              )
                $a(), (t = al(e, t, n));
              else {
                if (
                  ((a = (i = t.stateNode).hydrate) &&
                    ((Ha = Qr(t.stateNode.containerInfo.firstChild)),
                    (Fa = t),
                    (a = Aa = !0)),
                  a)
                ) {
                  if (null != (e = i.mutableSourceEagerHydrationData))
                    for (i = 0; i < e.length; i += 2)
                      ((a = e[i])._workInProgressVersionPrimary = e[i + 1]),
                        Qa.push(a);
                  for (n = za(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Do(e, t, r, n), $a();
                t = t.child;
              }
              return t;
            case 5:
              return (
                ja(t),
                null === e && Va(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = i.children),
                Vr(r, i)
                  ? (l = null)
                  : null !== a && Vr(r, a) && (t.flags |= 16),
                Uo(e, t),
                Do(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Va(t), null;
            case 13:
              return Zo(e, t, n);
            case 4:
              return (
                Ta(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ca(t, null, r, n)) : Do(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Fo(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
              );
            case 7:
              return Do(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Do(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (i = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = i.value);
                var u = t.type._context;
                if (
                  (di(Zi, u._currentValue), (u._currentValue = a), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ===
                      (a = cr(u, a)
                        ? 0
                        : 0 |
                          ("function" === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (l.children === i.children && !hi.current) {
                      t = al(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & a)) {
                            1 === u.tag &&
                              (((c = ca(-1, n & -n)).tag = 2), da(u, c)),
                              (u.lanes |= n),
                              null !== (c = u.alternate) && (c.lanes |= n),
                              ia(u.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Do(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = (a = t.pendingProps).children),
                aa(t, n),
                (r = r((i = oa(i, a.unstable_observedBits)))),
                (t.flags |= 1),
                Do(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Yi((i = t.type), t.pendingProps)),
                Ho(e, t, i, (a = Yi(i.type, a)), r, n)
              );
            case 15:
              return Ao(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Yi(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                gi(r) ? ((e = !0), yi(t)) : (e = !1),
                aa(t, n),
                wa(t, r, i),
                ya(t, r, i, n),
                Ko(null, t, r, !0, e, n)
              );
            case 19:
              return il(e, t, n);
            case 23:
            case 24:
              return Wo(e, t, n);
          }
          throw Error(o(156, t.tag));
        }),
          (is.prototype.render = function (e) {
            es(e, this._internalRoot, null, null);
          }),
          (is.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            es(null, e, null, function () {
              t[ei] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hu(e, 4, fu()), rs(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hu(e, 67108864, fu()), rs(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fu(),
                n = pu(e);
              hu(e, n, t), rs(e, n);
            }
          }),
          (it = function (e, t) {
            return t();
          }),
          (ze = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
                      var i = ai(r);
                      if (!i) throw Error(o(90));
                      Y(r), ne(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && oe(e, !!n.multiple, t, !1);
            }
          }),
          (Te = bu),
          (Me = function (e, t, n, r, i) {
            var a = Ll;
            Ll |= 4;
            try {
              return Ki(98, e.bind(null, t, n, r, i));
            } finally {
              0 === (Ll = a) && ($l(), Qi());
            }
          }),
          (je = function () {
            0 === (49 & Ll) &&
              ((function () {
                if (null !== iu) {
                  var e = iu;
                  (iu = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), mu(e, Ui());
                    });
                }
                Qi();
              })(),
              ju());
          }),
          (Ie = function (e, t) {
            var n = Ll;
            Ll |= 2;
            try {
              return e(t);
            } finally {
              0 === (Ll = n) && ($l(), Qi());
            }
          });
        var us = { Events: [ri, ii, ai, Oe, Le, ju, { current: !1 }] },
          ss = {
            findFiberByHostInstance: ni,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          cs = {
            bundleType: ss.bundleType,
            version: ss.version,
            rendererPackageName: ss.rendererPackageName,
            rendererConfig: ss.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: y.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Je(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ss.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ds.isDisabled && ds.supportsFiber)
            try {
              (ki = ds.inject(cs)), (Ei = ds);
            } catch (me) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = us),
          (t.createPortal = ls),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw Error(o(268, Object.keys(e)));
            }
            return (e = null === (e = Je(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = Ll;
            if (0 !== (48 & n)) return e(t);
            Ll |= 1;
            try {
              if (e) return Ki(99, e.bind(null, t));
            } finally {
              (Ll = n), Qi();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!as(t)) throw Error(o(200));
            return os(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!as(t)) throw Error(o(200));
            return os(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!as(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (yu(function () {
                os(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ei] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = bu),
          (t.unstable_createPortal = function (e, t) {
            return ls(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!as(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return os(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      372: function (e, t) {
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          i = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          o = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          u = n ? Symbol.for("react.provider") : 60109,
          s = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          v = n ? Symbol.for("react.memo") : 60115,
          m = n ? Symbol.for("react.lazy") : 60116,
          g = n ? Symbol.for("react.block") : 60121,
          _ = n ? Symbol.for("react.fundamental") : 60117,
          w = n ? Symbol.for("react.responder") : 60118,
          b = n ? Symbol.for("react.scope") : 60119;
        function y(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case a:
                  case l:
                  case o:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case f:
                      case m:
                      case v:
                      case u:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function x(e) {
          return y(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = s),
          (t.ContextProvider = u),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = a),
          (t.Lazy = m),
          (t.Memo = v),
          (t.Portal = i),
          (t.Profiler = l),
          (t.StrictMode = o),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return x(e) || y(e) === c;
          }),
          (t.isConcurrentMode = x),
          (t.isContextConsumer = function (e) {
            return y(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return y(e) === u;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return y(e) === f;
          }),
          (t.isFragment = function (e) {
            return y(e) === a;
          }),
          (t.isLazy = function (e) {
            return y(e) === m;
          }),
          (t.isMemo = function (e) {
            return y(e) === v;
          }),
          (t.isPortal = function (e) {
            return y(e) === i;
          }),
          (t.isProfiler = function (e) {
            return y(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return y(e) === o;
          }),
          (t.isSuspense = function (e) {
            return y(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === a ||
              e === d ||
              e === l ||
              e === o ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === v ||
                  e.$$typeof === u ||
                  e.$$typeof === s ||
                  e.$$typeof === f ||
                  e.$$typeof === _ ||
                  e.$$typeof === w ||
                  e.$$typeof === b ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = y);
      },
      441: function (e, t, n) {
        e.exports = n(372);
      },
      2: function (e, t, n) {
        var r = n(791),
          i = n(441);
        t.Z = function e(t, n, a) {
          return (
            void 0 === n && (n = 0),
            void 0 === a && (a = []),
            r.Children.toArray(t).reduce(function (t, o, l) {
              return (
                i.isFragment(o)
                  ? t.push.apply(
                      t,
                      e(o.props.children, n + 1, a.concat(o.key || l))
                    )
                  : r.isValidElement(o)
                  ? t.push(
                      r.cloneElement(o, {
                        key: a.concat(String(o.key)).join("."),
                      })
                    )
                  : ("string" !== typeof o && "number" !== typeof o) ||
                    t.push(o),
                t
              );
            }, [])
          );
        };
      },
      374: function (e, t, n) {
        n(725);
        var r = n(791),
          i = 60103;
        if ((60107, "function" === typeof Symbol && Symbol.for)) {
          var a = Symbol.for;
          (i = a("react.element")), a("react.fragment");
        }
        var o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = Object.prototype.hasOwnProperty,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            a = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: s,
            ref: c,
            props: a,
            _owner: o.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t, n) {
        var r = n(725),
          i = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var o = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" === typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (i = d("react.element")),
            (a = d("react.portal")),
            (t.Fragment = d("react.fragment")),
            (t.StrictMode = d("react.strict_mode")),
            (t.Profiler = d("react.profiler")),
            (o = d("react.provider")),
            (l = d("react.context")),
            (u = d("react.forward_ref")),
            (t.Suspense = d("react.suspense")),
            (s = d("react.memo")),
            (c = d("react.lazy"));
        }
        var f = "function" === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function g() {}
        function _(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = m.prototype);
        var w = (_.prototype = new g());
        (w.constructor = _), r(w, m.prototype), (w.isPureReactComponent = !0);
        var b = { current: null },
          y = Object.prototype.hasOwnProperty,
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function k(e, t, n) {
          var r,
            a = {},
            o = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              y.call(t, r) && !x.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: i,
            type: e,
            key: o,
            ref: l,
            props: a,
            _owner: b.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === i;
        }
        var S = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function z(e, t, n, r, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === r ? "." + C(u, 0) : r),
              Array.isArray(o)
                ? ((n = ""),
                  null != e && (n = e.replace(S, "$&/") + "/"),
                  z(o, t, n, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      n +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(S, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + C((l = e[s]), s);
              u += z(l, t, n, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (f && e[f]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += z((l = l.value), t, n, (c = r + C(l, s++)), o);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return u;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var N = { current: null };
        function O() {
          var e = N.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var L = {
          ReactCurrentDispatcher: N,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: b,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
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
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = m),
          (t.PureComponent = _),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var a = r({}, e.props),
              o = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = b.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                y.call(t, c) &&
                  !x.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var d = 0; d < c; d++) s[d] = arguments[d + 2];
              a.children = s;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = k),
          (t.createFactory = function (e) {
            var t = k.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return O().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return O().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return O().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O().useRef(e);
          }),
          (t.useState = function (e) {
            return O().useState(e);
          }),
          (t.version = "17.0.2");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        var n, r, i, a;
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var s = null,
            c = null,
            d = function e() {
              if (null !== s)
                try {
                  var n = t.unstable_now();
                  s(!0, n), (s = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (i = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" !== typeof console) {
            var h = window.cancelAnimationFrame;
            "function" !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var v = !1,
            m = null,
            g = -1,
            _ = 5,
            w = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= w;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var b = new MessageChannel(),
            y = b.port2;
          (b.port1.onmessage = function () {
            if (null !== m) {
              var e = t.unstable_now();
              w = e + _;
              try {
                m(!0, e) ? y.postMessage(null) : ((v = !1), (m = null));
              } catch (n) {
                throw (y.postMessage(null), n);
              }
            } else v = !1;
          }),
            (n = function (e) {
              (m = e), v || ((v = !0), y.postMessage(null));
            }),
            (r = function (e, n) {
              g = f(function () {
                e(t.unstable_now());
              }, n);
            }),
            (i = function () {
              p(g), (g = -1);
            });
        }
        function x(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(void 0 !== i && 0 < S(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function k(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function E(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, i = e.length; r < i; ) {
                var a = 2 * (r + 1) - 1,
                  o = e[a],
                  l = a + 1,
                  u = e[l];
                if (void 0 !== o && 0 > S(o, n))
                  void 0 !== u && 0 > S(u, o)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = o), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > S(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function S(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var C = [],
          z = [],
          R = 1,
          P = null,
          N = 3,
          O = !1,
          L = !1,
          T = !1;
        function M(e) {
          for (var t = k(z); null !== t; ) {
            if (null === t.callback) E(z);
            else {
              if (!(t.startTime <= e)) break;
              E(z), (t.sortIndex = t.expirationTime), x(C, t);
            }
            t = k(z);
          }
        }
        function j(e) {
          if (((T = !1), M(e), !L))
            if (null !== k(C)) (L = !0), n(I);
            else {
              var t = k(z);
              null !== t && r(j, t.startTime - e);
            }
        }
        function I(e, n) {
          (L = !1), T && ((T = !1), i()), (O = !0);
          var a = N;
          try {
            for (
              M(n), P = k(C);
              null !== P &&
              (!(P.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var o = P.callback;
              if ("function" === typeof o) {
                (P.callback = null), (N = P.priorityLevel);
                var l = o(P.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (P.callback = l)
                    : P === k(C) && E(C),
                  M(n);
              } else E(C);
              P = k(C);
            }
            if (null !== P) var u = !0;
            else {
              var s = k(z);
              null !== s && r(j, s.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (P = null), (N = a), (O = !1);
          }
        }
        var B = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            L || O || ((L = !0), n(I));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return k(C);
          }),
          (t.unstable_next = function (e) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = N;
            }
            var n = N;
            N = t;
            try {
              return e();
            } finally {
              N = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = B),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = N;
            N = e;
            try {
              return t();
            } finally {
              N = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: R++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  x(z, e),
                  null === k(C) &&
                    e === k(z) &&
                    (T ? i() : (T = !0), r(j, o - l)))
                : ((e.sortIndex = u), x(C, e), L || O || ((L = !0), n(I))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = N;
            return function () {
              var n = N;
              N = t;
              try {
                return e.apply(this, arguments);
              } finally {
                N = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  !(function () {
    var e = n(791),
      t = n(164);
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              r(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function l(e, t) {
      if (e) {
        if ("string" === typeof e) return o(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? o(e, t)
            : void 0
        );
      }
    }
    function u(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return o(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        l(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              i,
              a = [],
              o = !0,
              l = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) &&
                (a.push(r.value), !t || a.length !== t);
                o = !0
              );
            } catch (u) {
              (l = !0), (i = u);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (l) throw i;
              }
            }
            return a;
          }
        })(e, t) ||
        l(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var c = function () {
      return (
        (c =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }),
        c.apply(this, arguments)
      );
    };
    function d(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    Object.create;
    function f(e, t, n) {
      if (n || 2 === arguments.length)
        for (var r, i = 0, a = t.length; i < a; i++)
          (!r && i in t) ||
            (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
      return e.concat(r || Array.prototype.slice.call(t));
    }
    Object.create;
    var p = "3.0.0 (bd34605)",
      h = "open-source-classic";
    function v(e) {
      var t = {};
      return (
        Object.keys(e).forEach(function (n) {
          ("id" === n || "className" === n || n.match(/^data-/)) &&
            (t[n] = e[n]);
        }),
        t
      );
    }
    function m(e) {
      var t,
        n,
        r = "";
      if ("string" == typeof e || "number" == typeof e) r += e;
      else if ("object" == typeof e)
        if (Array.isArray(e))
          for (t = 0; t < e.length; t++)
            e[t] && (n = m(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
      return r;
    }
    "undefined" !== typeof window &&
      (window.awsuiVersions || (window.awsuiVersions = {}),
      window.awsuiVersions.components || (window.awsuiVersions.components = []),
      window.awsuiVersions.components.push(p));
    var g = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = m(e)) && (r && (r += " "), (r += t));
        return r;
      },
      _ = n(2),
      w = [
        ["xl", 1840],
        ["l", 1320],
        ["m", 1120],
        ["s", 912],
        ["xs", 688],
        ["xxs", 465],
        ["default", -1],
      ],
      b = w.filter(function (e) {
        return "xs" === e[0];
      })[0][1],
      y = w.map(function (e) {
        return e[0];
      });
    function x(e, t) {
      for (var n = 0, r = w; n < r.length; n++) {
        var i = r[n],
          a = i[0];
        if (e > i[1] && (!t || -1 !== t.indexOf(a))) return a;
      }
      return "default";
    }
    var k,
      E = {
        grid: "awsui_grid_14yj0_1f6ba_93",
        "no-gutters": "awsui_no-gutters_14yj0_1f6ba_107",
        "grid-column": "awsui_grid-column_14yj0_1f6ba_111",
        "colspan-1": "awsui_colspan-1_14yj0_1f6ba_120",
        "push-1": "awsui_push-1_14yj0_1f6ba_124",
        "pull-1": "awsui_pull-1_14yj0_1f6ba_127",
        "colspan-2": "awsui_colspan-2_14yj0_1f6ba_130",
        "push-2": "awsui_push-2_14yj0_1f6ba_134",
        "pull-2": "awsui_pull-2_14yj0_1f6ba_137",
        "colspan-3": "awsui_colspan-3_14yj0_1f6ba_140",
        "push-3": "awsui_push-3_14yj0_1f6ba_144",
        "pull-3": "awsui_pull-3_14yj0_1f6ba_147",
        "colspan-4": "awsui_colspan-4_14yj0_1f6ba_150",
        "push-4": "awsui_push-4_14yj0_1f6ba_154",
        "pull-4": "awsui_pull-4_14yj0_1f6ba_157",
        "colspan-5": "awsui_colspan-5_14yj0_1f6ba_160",
        "push-5": "awsui_push-5_14yj0_1f6ba_164",
        "pull-5": "awsui_pull-5_14yj0_1f6ba_167",
        "colspan-6": "awsui_colspan-6_14yj0_1f6ba_170",
        "push-6": "awsui_push-6_14yj0_1f6ba_174",
        "pull-6": "awsui_pull-6_14yj0_1f6ba_177",
        "colspan-7": "awsui_colspan-7_14yj0_1f6ba_180",
        "push-7": "awsui_push-7_14yj0_1f6ba_184",
        "pull-7": "awsui_pull-7_14yj0_1f6ba_187",
        "colspan-8": "awsui_colspan-8_14yj0_1f6ba_190",
        "push-8": "awsui_push-8_14yj0_1f6ba_194",
        "pull-8": "awsui_pull-8_14yj0_1f6ba_197",
        "colspan-9": "awsui_colspan-9_14yj0_1f6ba_200",
        "push-9": "awsui_push-9_14yj0_1f6ba_204",
        "pull-9": "awsui_pull-9_14yj0_1f6ba_207",
        "colspan-10": "awsui_colspan-10_14yj0_1f6ba_210",
        "push-10": "awsui_push-10_14yj0_1f6ba_214",
        "pull-10": "awsui_pull-10_14yj0_1f6ba_217",
        "colspan-11": "awsui_colspan-11_14yj0_1f6ba_220",
        "push-11": "awsui_push-11_14yj0_1f6ba_224",
        "pull-11": "awsui_pull-11_14yj0_1f6ba_227",
        "colspan-12": "awsui_colspan-12_14yj0_1f6ba_230",
        "push-12": "awsui_push-12_14yj0_1f6ba_234",
        "pull-12": "awsui_pull-12_14yj0_1f6ba_237",
        "push-0": "awsui_push-0_14yj0_1f6ba_240",
        "pull-0": "awsui_pull-0_14yj0_1f6ba_243",
        "offset-1": "awsui_offset-1_14yj0_1f6ba_246",
        "offset-2": "awsui_offset-2_14yj0_1f6ba_249",
        "offset-3": "awsui_offset-3_14yj0_1f6ba_252",
        "offset-4": "awsui_offset-4_14yj0_1f6ba_255",
        "offset-5": "awsui_offset-5_14yj0_1f6ba_258",
        "offset-6": "awsui_offset-6_14yj0_1f6ba_261",
        "offset-7": "awsui_offset-7_14yj0_1f6ba_264",
        "offset-8": "awsui_offset-8_14yj0_1f6ba_267",
        "offset-9": "awsui_offset-9_14yj0_1f6ba_270",
        "offset-10": "awsui_offset-10_14yj0_1f6ba_273",
        "offset-11": "awsui_offset-11_14yj0_1f6ba_276",
        "restore-pointer-events":
          "awsui_restore-pointer-events_14yj0_1f6ba_280",
      },
      S = [],
      C = "ResizeObserver loop completed with undelivered notifications.";
    !(function (e) {
      (e.BORDER_BOX = "border-box"),
        (e.CONTENT_BOX = "content-box"),
        (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
    })(k || (k = {}));
    var z,
      R = function (e) {
        return Object.freeze(e);
      },
      P = function (e, t) {
        (this.inlineSize = e), (this.blockSize = t), R(this);
      },
      N = (function () {
        function e(e, t, n, r) {
          return (
            (this.x = e),
            (this.y = t),
            (this.width = n),
            (this.height = r),
            (this.top = this.y),
            (this.left = this.x),
            (this.bottom = this.top + this.height),
            (this.right = this.left + this.width),
            R(this)
          );
        }
        return (
          (e.prototype.toJSON = function () {
            var e = this;
            return {
              x: e.x,
              y: e.y,
              top: e.top,
              right: e.right,
              bottom: e.bottom,
              left: e.left,
              width: e.width,
              height: e.height,
            };
          }),
          (e.fromRect = function (t) {
            return new e(t.x, t.y, t.width, t.height);
          }),
          e
        );
      })(),
      O = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
      },
      L = function (e) {
        if (O(e)) {
          var t = e.getBBox(),
            n = t.width,
            r = t.height;
          return !n && !r;
        }
        var i = e,
          a = i.offsetWidth,
          o = i.offsetHeight;
        return !(a || o || e.getClientRects().length);
      },
      T = function (e) {
        var t, n;
        if (e instanceof Element) return !0;
        var r =
          null ===
            (n = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
          void 0 === n
            ? void 0
            : n.defaultView;
        return !!(r && e instanceof r.Element);
      },
      M = "undefined" !== typeof window ? window : {},
      j = new WeakMap(),
      I = /auto|scroll/,
      B = /^tb|vertical/,
      D = /msie|trident/i.test(M.navigator && M.navigator.userAgent),
      F = function (e) {
        return parseFloat(e || "0");
      },
      H = function (e, t, n) {
        return (
          void 0 === e && (e = 0),
          void 0 === t && (t = 0),
          void 0 === n && (n = !1),
          new P((n ? t : e) || 0, (n ? e : t) || 0)
        );
      },
      A = R({
        devicePixelContentBoxSize: H(),
        borderBoxSize: H(),
        contentBoxSize: H(),
        contentRect: new N(0, 0, 0, 0),
      }),
      W = function (e, t) {
        if ((void 0 === t && (t = !1), j.has(e) && !t)) return j.get(e);
        if (L(e)) return j.set(e, A), A;
        var n = getComputedStyle(e),
          r = O(e) && e.ownerSVGElement && e.getBBox(),
          i = !D && "border-box" === n.boxSizing,
          a = B.test(n.writingMode || ""),
          o = !r && I.test(n.overflowY || ""),
          l = !r && I.test(n.overflowX || ""),
          u = r ? 0 : F(n.paddingTop),
          s = r ? 0 : F(n.paddingRight),
          c = r ? 0 : F(n.paddingBottom),
          d = r ? 0 : F(n.paddingLeft),
          f = r ? 0 : F(n.borderTopWidth),
          p = r ? 0 : F(n.borderRightWidth),
          h = r ? 0 : F(n.borderBottomWidth),
          v = d + s,
          m = u + c,
          g = (r ? 0 : F(n.borderLeftWidth)) + p,
          _ = f + h,
          w = l ? e.offsetHeight - _ - e.clientHeight : 0,
          b = o ? e.offsetWidth - g - e.clientWidth : 0,
          y = i ? v + g : 0,
          x = i ? m + _ : 0,
          k = r ? r.width : F(n.width) - y - b,
          E = r ? r.height : F(n.height) - x - w,
          S = k + v + b + g,
          C = E + m + w + _,
          z = R({
            devicePixelContentBoxSize: H(
              Math.round(k * devicePixelRatio),
              Math.round(E * devicePixelRatio),
              a
            ),
            borderBoxSize: H(S, C, a),
            contentBoxSize: H(k, E, a),
            contentRect: new N(d, u, k, E),
          });
        return j.set(e, z), z;
      },
      U = function (e, t, n) {
        var r = W(e, n),
          i = r.borderBoxSize,
          a = r.contentBoxSize,
          o = r.devicePixelContentBoxSize;
        switch (t) {
          case k.DEVICE_PIXEL_CONTENT_BOX:
            return o;
          case k.BORDER_BOX:
            return i;
          default:
            return a;
        }
      },
      V = function (e) {
        var t = W(e);
        (this.target = e),
          (this.contentRect = t.contentRect),
          (this.borderBoxSize = R([t.borderBoxSize])),
          (this.contentBoxSize = R([t.contentBoxSize])),
          (this.devicePixelContentBoxSize = R([t.devicePixelContentBoxSize]));
      },
      q = function (e) {
        if (L(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
        return t;
      },
      K = function () {
        var e = 1 / 0,
          t = [];
        S.forEach(function (n) {
          if (0 !== n.activeTargets.length) {
            var r = [];
            n.activeTargets.forEach(function (t) {
              var n = new V(t.target),
                i = q(t.target);
              r.push(n),
                (t.lastReportedSize = U(t.target, t.observedBox)),
                i < e && (e = i);
            }),
              t.push(function () {
                n.callback.call(n.observer, r, n.observer);
              }),
              n.activeTargets.splice(0, n.activeTargets.length);
          }
        });
        for (var n = 0, r = t; n < r.length; n++) {
          (0, r[n])();
        }
        return e;
      },
      $ = function (e) {
        S.forEach(function (t) {
          t.activeTargets.splice(0, t.activeTargets.length),
            t.skippedTargets.splice(0, t.skippedTargets.length),
            t.observationTargets.forEach(function (n) {
              n.isActive() &&
                (q(n.target) > e
                  ? t.activeTargets.push(n)
                  : t.skippedTargets.push(n));
            });
        });
      },
      Q = function () {
        var e = 0;
        for (
          $(e);
          S.some(function (e) {
            return e.activeTargets.length > 0;
          });

        )
          (e = K()), $(e);
        return (
          S.some(function (e) {
            return e.skippedTargets.length > 0;
          }) &&
            (function () {
              var e;
              "function" === typeof ErrorEvent
                ? (e = new ErrorEvent("error", { message: C }))
                : ((e = document.createEvent("Event")).initEvent(
                    "error",
                    !1,
                    !1
                  ),
                  (e.message = C)),
                window.dispatchEvent(e);
            })(),
          e > 0
        );
      },
      G = [],
      X = function (e) {
        if (!z) {
          var t = 0,
            n = document.createTextNode("");
          new MutationObserver(function () {
            return G.splice(0).forEach(function (e) {
              return e();
            });
          }).observe(n, { characterData: !0 }),
            (z = function () {
              n.textContent = "" + (t ? t-- : t++);
            });
        }
        G.push(e), z();
      },
      Y = 0,
      Z = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
      J = [
        "resize",
        "load",
        "transitionend",
        "animationend",
        "animationstart",
        "animationiteration",
        "keyup",
        "keydown",
        "mouseup",
        "mousedown",
        "mouseover",
        "mouseout",
        "blur",
        "focus",
      ],
      ee = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
      },
      te = !1,
      ne = new ((function () {
        function e() {
          var e = this;
          (this.stopped = !0),
            (this.listener = function () {
              return e.schedule();
            });
        }
        return (
          (e.prototype.run = function (e) {
            var t = this;
            if ((void 0 === e && (e = 250), !te)) {
              te = !0;
              var n,
                r = ee(e);
              (n = function () {
                var n = !1;
                try {
                  n = Q();
                } finally {
                  if (((te = !1), (e = r - ee()), !Y)) return;
                  n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                }
              }),
                X(function () {
                  requestAnimationFrame(n);
                });
            }
          }),
          (e.prototype.schedule = function () {
            this.stop(), this.run();
          }),
          (e.prototype.observe = function () {
            var e = this,
              t = function () {
                return e.observer && e.observer.observe(document.body, Z);
              };
            document.body ? t() : M.addEventListener("DOMContentLoaded", t);
          }),
          (e.prototype.start = function () {
            var e = this;
            this.stopped &&
              ((this.stopped = !1),
              (this.observer = new MutationObserver(this.listener)),
              this.observe(),
              J.forEach(function (t) {
                return M.addEventListener(t, e.listener, !0);
              }));
          }),
          (e.prototype.stop = function () {
            var e = this;
            this.stopped ||
              (this.observer && this.observer.disconnect(),
              J.forEach(function (t) {
                return M.removeEventListener(t, e.listener, !0);
              }),
              (this.stopped = !0));
          }),
          e
        );
      })())(),
      re = function (e) {
        !Y && e > 0 && ne.start(), !(Y += e) && ne.stop();
      },
      ie = (function () {
        function e(e, t) {
          (this.target = e),
            (this.observedBox = t || k.CONTENT_BOX),
            (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
          (e.prototype.isActive = function () {
            var e,
              t = U(this.target, this.observedBox, !0);
            return (
              (e = this.target),
              O(e) ||
                (function (e) {
                  switch (e.tagName) {
                    case "INPUT":
                      if ("image" !== e.type) break;
                    case "VIDEO":
                    case "AUDIO":
                    case "EMBED":
                    case "OBJECT":
                    case "CANVAS":
                    case "IFRAME":
                    case "IMG":
                      return !0;
                  }
                  return !1;
                })(e) ||
                "inline" !== getComputedStyle(e).display ||
                (this.lastReportedSize = t),
              this.lastReportedSize.inlineSize !== t.inlineSize ||
                this.lastReportedSize.blockSize !== t.blockSize
            );
          }),
          e
        );
      })(),
      ae = function (e, t) {
        (this.activeTargets = []),
          (this.skippedTargets = []),
          (this.observationTargets = []),
          (this.observer = e),
          (this.callback = t);
      },
      oe = new WeakMap(),
      le = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
      },
      ue = (function () {
        function e() {}
        return (
          (e.connect = function (e, t) {
            var n = new ae(e, t);
            oe.set(e, n);
          }),
          (e.observe = function (e, t, n) {
            var r = oe.get(e),
              i = 0 === r.observationTargets.length;
            le(r.observationTargets, t) < 0 &&
              (i && S.push(r),
              r.observationTargets.push(new ie(t, n && n.box)),
              re(1),
              ne.schedule());
          }),
          (e.unobserve = function (e, t) {
            var n = oe.get(e),
              r = le(n.observationTargets, t),
              i = 1 === n.observationTargets.length;
            r >= 0 &&
              (i && S.splice(S.indexOf(n), 1),
              n.observationTargets.splice(r, 1),
              re(-1));
          }),
          (e.disconnect = function (e) {
            var t = this,
              n = oe.get(e);
            n.observationTargets.slice().forEach(function (n) {
              return t.unobserve(e, n.target);
            }),
              n.activeTargets.splice(0, n.activeTargets.length);
          }),
          e
        );
      })(),
      se = (function () {
        function e(e) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if ("function" !== typeof e)
            throw new TypeError(
              "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
            );
          ue.connect(this, e);
        }
        return (
          (e.prototype.observe = function (e, t) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if (!T(e))
              throw new TypeError(
                "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
              );
            ue.observe(this, e, t);
          }),
          (e.prototype.unobserve = function (e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if (!T(e))
              throw new TypeError(
                "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
              );
            ue.unobserve(this, e);
          }),
          (e.prototype.disconnect = function () {
            ue.disconnect(this);
          }),
          (e.toString = function () {
            return "function ResizeObserver () { [polyfill code] }";
          }),
          e
        );
      })();
    function ce(t) {
      var n = (0, e.useRef)();
      return (
        (0, e.useEffect)(function () {
          n.current = t;
        }),
        (0, e.useCallback)(function () {
          for (var e, t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return null === (e = n.current) || void 0 === e
            ? void 0
            : e.apply(void 0, t);
        }, [])
      );
    }
    function de(t, n) {
      var r = ce(n);
      (0, e.useLayoutEffect)(function () {
        var e =
          "function" === typeof t
            ? t()
            : null === t || void 0 === t
            ? void 0
            : t.current;
        e && n(fe(new V(e)));
      }, []),
        (0, e.useEffect)(
          function () {
            var e =
              "function" === typeof t
                ? t()
                : null === t || void 0 === t
                ? void 0
                : t.current;
            if (e) {
              var n = !0,
                i = new se(function (e) {
                  n && r(fe(e[0]));
                });
              return (
                i.observe(e),
                function () {
                  (n = !1), i.disconnect();
                }
              );
            }
          },
          [t, r]
        );
    }
    function fe(e) {
      return {
        target: e.target,
        contentBoxWidth: e.contentBoxSize[0].inlineSize,
        contentBoxHeight: e.contentBoxSize[0].blockSize,
        borderBoxWidth: e.borderBoxSize[0].inlineSize,
        borderBoxHeight: e.borderBoxSize[0].blockSize,
        width: e.contentBoxSize[0].inlineSize,
        height: e.contentBoxSize[0].blockSize,
      };
    }
    function pe(t, n) {
      void 0 === n && (n = []);
      var r = (0, e.useRef)(null),
        i = (0, e.useState)(null),
        a = i[0],
        o = i[1];
      return (
        de(
          (0, e.useCallback)(function () {
            return r.current;
          }, n),
          function (e) {
            return o(function (n) {
              return t(e, n);
            });
          }
        ),
        [a, r]
      );
    }
    function he(e) {
      return pe(
        function (t) {
          return x(t.width, e);
        },
        [null === e || void 0 === e ? void 0 : e.join()]
      );
    }
    function ve() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return (0, e.useMemo)(function () {
        return t.every(function (e) {
          return null === e || void 0 === e;
        })
          ? null
          : function (e) {
              t.forEach(function (t) {
                "function" === typeof t
                  ? t(e)
                  : null !== t && void 0 !== t && (t.current = e);
              });
            };
      }, t);
    }
    var me = e.forwardRef(function (t, n) {
      var r,
        i = t.__breakpoint,
        a = t.gridDefinition,
        o = void 0 === a ? [] : a,
        l = t.disableGutters,
        u = void 0 !== l && l,
        s = t.children,
        f = t.__responsiveClassName,
        p = t.__internalRootRef,
        h = void 0 === p ? null : p,
        m = d(t, [
          "__breakpoint",
          "gridDefinition",
          "disableGutters",
          "children",
          "__responsiveClassName",
          "__internalRootRef",
        ]),
        w = he(void 0),
        b = w[0],
        y = w[1];
      void 0 !== i && ((b = i), (y = n));
      var x = v(m),
        k = (0, _.Z)(s),
        S = ve(y, h);
      return e.createElement(
        "div",
        c({}, x, {
          className: g(
            E.grid,
            x.className,
            ((r = {}), (r[E["no-gutters"]] = u), r),
            f ? f(b) : null
          ),
          ref: S,
        }),
        k.map(function (t, n) {
          var r,
            i,
            a,
            l,
            u = t.key;
          return e.createElement(
            "div",
            {
              key: u,
              className: g(
                E["grid-column"],
                ge(
                  "colspan",
                  null === (r = o[n]) || void 0 === r ? void 0 : r.colspan,
                  b
                ),
                ge(
                  "offset",
                  null === (i = o[n]) || void 0 === i ? void 0 : i.offset,
                  b
                ),
                ge(
                  "pull",
                  null === (a = o[n]) || void 0 === a ? void 0 : a.pull,
                  b
                ),
                ge(
                  "push",
                  null === (l = o[n]) || void 0 === l ? void 0 : l.push,
                  b
                )
              ),
            },
            e.createElement(
              "div",
              { className: E["restore-pointer-events"] },
              t
            )
          );
        })
      );
    });
    function ge(e, t, n) {
      return "number" === typeof t
        ? E["".concat(e, "-").concat(t)]
        : null === n || void 0 === t
        ? null
        : E[
            "".concat(e, "-").concat(
              (function (e, t) {
                for (var n = 0, r = w.slice(y.indexOf(t)); n < r.length; n++) {
                  var i = e[r[n][0]];
                  if (void 0 !== i) return i;
                }
                return null;
              })(t, n)
            )
          ];
    }
    var _e = me;
    function we(e, t) {
      e.displayName = t;
    }
    var be = {},
      ye = function (e) {
        return e.replace(/\s/g, "");
      },
      xe = function (e, t) {
        return "".concat(e.charAt(0)).concat(
          (function (e) {
            var t = e.match(/^(\d+\.\d+)/);
            return t ? t[1] : "";
          })(t).replace(".", "")
        );
      },
      ke = function e(t) {
        try {
          if (
            "object" === typeof (null === t || void 0 === t ? void 0 : t.AWSC)
          )
            return null === t || void 0 === t ? void 0 : t.AWSC;
          if (!t || t.parent === t) return;
          return e(t.parent);
        } catch (n) {
          return;
        }
      },
      Ee = "react";
    var Se = {
      initMetrics: function (e) {
        !(function (e) {
          Ee = e;
        })(e);
      },
      sendMetric: function (e, t, n) {
        if (e && /^[a-zA-Z0-9_-]{1,32}$/.test(e))
          if (n && n.length > 200)
            console.error(
              "Detail for metric ".concat(e, " is too long: ").concat(n)
            );
          else {
            var r = ke(window);
            "object" === typeof r &&
              "object" === typeof r.Clog &&
              "function" === typeof r.Clog.log &&
              r.Clog.log(e, t, n);
          }
        else console.error("Invalid metric name: ".concat(e));
      },
      sendMetricObject: function (e, t) {
        this.sendMetric(
          (function (e) {
            var t = e.source,
              n = e.version;
            return ["awsui", t, "".concat(xe(h, n))].join("_");
          })(e),
          t,
          (function (e) {
            var t = e.source,
              n = e.action,
              r = e.version,
              i = {
                o:
                  "undefined" !== typeof AWSUI_METRIC_ORIGIN
                    ? AWSUI_METRIC_ORIGIN
                    : "main",
                s: t,
                t: h,
                a: n,
                f: Ee,
                v: ye(r),
              };
            return JSON.stringify(i);
          })(e)
        );
      },
      sendMetricObjectOnce: function (e, t) {
        var n = (function (e) {
          var t = e.source,
            n = e.action;
          return ["src".concat(t), "action".concat(n)].join("_");
        })(e);
        be[n] || (this.sendMetricObject(e, t), (be[n] = !0));
      },
      sendMetricOnce: function (e, t, n) {
        be[e] || (this.sendMetric(e, t, n), (be[e] = !0));
      },
      logComponentLoaded: function () {
        this.sendMetricObjectOnce(
          { source: "components", action: "loaded", version: p },
          1
        );
      },
      logComponentUsed: function (e) {
        this.sendMetricObjectOnce({ source: e, action: "used", version: p }, 1);
      },
    };
    var Ce = "__awsuiMetadata__";
    function ze(t) {
      var n = (0, e.useRef)(null);
      return (
        (function (t) {
          (0, e.useEffect)(function () {
            "undefined" !== typeof window &&
              (Se.sendMetricOnce(
                "awsui-viewport-width",
                window.innerWidth || 0
              ),
              Se.sendMetricOnce(
                "awsui-viewport-height",
                window.innerHeight || 0
              )),
              Se.logComponentLoaded(),
              Se.logComponentUsed(t.toLowerCase());
          }, []);
        })(t),
        (function (t, n) {
          (0, e.useEffect)(
            function () {
              if (
                n.current &&
                !Object.prototype.hasOwnProperty.call(n.current, Ce)
              ) {
                var e = n.current,
                  r = { name: t, version: p };
                Object.freeze(r),
                  Object.defineProperty(e, Ce, { value: r, writable: !1 });
              }
            },
            [n.current]
          );
        })(t, n),
        { __internalRootRef: n }
      );
    }
    function Re(t) {
      var n = t.gridDefinition,
        r = void 0 === n ? [] : n,
        i = t.disableGutters,
        a = void 0 !== i && i,
        o = t.children,
        l = d(t, ["gridDefinition", "disableGutters", "children"]),
        u = ze("Grid"),
        s = v(l),
        f = he(void 0),
        p = f[0],
        h = f[1];
      return e.createElement(
        _e,
        c({}, s, u, {
          ref: h,
          __breakpoint: p,
          gridDefinition: r,
          disableGutters: a,
        }),
        o
      );
    }
    we(Re, "Grid");
    var Pe = (function () {
      function e(e, t) {
        void 0 === e && (e = !1),
          void 0 === t && (t = null),
          (this.cancelable = e),
          (this.detail = t),
          (this.defaultPrevented = !1),
          (this.cancelBubble = !1);
      }
      return (
        (e.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }),
        (e.prototype.stopPropagation = function () {
          this.cancelBubble = !0;
        }),
        e
      );
    })();
    function Ne(e) {
      var t = e.cancelable,
        n = e.detail;
      return new Pe(t, n);
    }
    function Oe(e, t) {
      e && e(Ne({ cancelable: !1, detail: t }));
    }
    function Le(e, t, n) {
      if (!e) return !1;
      var r = Ne({ cancelable: !0, detail: t });
      return (
        e(r),
        r.defaultPrevented && n && n.preventDefault(),
        r.cancelBubble && n && n.stopPropagation(),
        r.defaultPrevented
      );
    }
    function Te(e, t) {
      return Le(
        e,
        {
          keyCode: t.keyCode,
          key: t.key,
          ctrlKey: t.ctrlKey,
          shiftKey: t.shiftKey,
          altKey: t.altKey,
          metaKey: t.metaKey,
        },
        t
      );
    }
    var Me = function (e) {
        return e.relatedTarget || document.activeElement;
      },
      je = (0, e.createContext)({
        topOffset: 0,
        bottomOffset: 0,
        leftOffset: 0,
        rightOffset: 0,
        position: "bottom",
        size: 0,
        getMaxWidth: function () {
          return 0;
        },
        getMaxHeight: function () {
          return 0;
        },
        getHeader: function () {
          return null;
        },
        isCopy: !1,
        isOpen: !0,
        isMobile: !1,
        isRefresh: !1,
        isForcedPosition: !1,
        lastInteraction: void 0,
        splitPanelRef: void 0,
        splitPanelHeaderRef: void 0,
        onResize: function () {},
        onToggle: function () {},
        onPreferencesChange: function () {},
        reportSize: function () {},
      });
    var Ie = {
      appbar: "awsui_appbar_hyvsj_18us6_93",
      "appbar-nav": "awsui_appbar-nav_hyvsj_18us6_117",
      breadcrumbs: "awsui_breadcrumbs_hyvsj_18us6_121",
      "appbar-tools": "awsui_appbar-tools_hyvsj_18us6_125",
      "has-breadcrumbs": "awsui_has-breadcrumbs_hyvsj_18us6_160",
      "has-notifications-content":
        "awsui_has-notifications-content_hyvsj_18us6_167",
      "has-header": "awsui_has-header_hyvsj_18us6_173",
      "has-dynamic-overlap-height":
        "awsui_has-dynamic-overlap-height_hyvsj_18us6_173",
      "content-type-wizard": "awsui_content-type-wizard_hyvsj_18us6_174",
      "content-type-cards": "awsui_content-type-cards_hyvsj_18us6_177",
      "content-type-table": "awsui_content-type-table_hyvsj_18us6_178",
      background: "awsui_background_hyvsj_18us6_213",
      "notifications-appbar-header":
        "awsui_notifications-appbar-header_hyvsj_18us6_216",
      "sticky-notifications": "awsui_sticky-notifications_hyvsj_18us6_228",
      overlap: "awsui_overlap_hyvsj_18us6_234",
      content: "awsui_content_hyvsj_18us6_174",
      layout: "awsui_layout_hyvsj_18us6_322",
      "has-max-content-width": "awsui_has-max-content-width_hyvsj_18us6_404",
      "is-overlap-disabled": "awsui_is-overlap-disabled_hyvsj_18us6_431",
      "disable-body-scroll": "awsui_disable-body-scroll_hyvsj_18us6_434",
      "has-sticky-notifications":
        "awsui_has-sticky-notifications_hyvsj_18us6_438",
      "has-split-panel": "awsui_has-split-panel_hyvsj_18us6_452",
      "split-panel-position-bottom":
        "awsui_split-panel-position-bottom_hyvsj_18us6_452",
      "has-content-gap-left": "awsui_has-content-gap-left_hyvsj_18us6_464",
      "has-content-gap-right": "awsui_has-content-gap-right_hyvsj_18us6_467",
      "block-body-scroll": "awsui_block-body-scroll_hyvsj_18us6_482",
      container: "awsui_container_hyvsj_18us6_490",
      "disable-content-paddings":
        "awsui_disable-content-paddings_hyvsj_18us6_507",
      "is-navigation-open": "awsui_is-navigation-open_hyvsj_18us6_512",
      "is-tools-open": "awsui_is-tools-open_hyvsj_18us6_515",
      "is-split-panel-open": "awsui_is-split-panel-open_hyvsj_18us6_515",
      "split-panel-position-side":
        "awsui_split-panel-position-side_hyvsj_18us6_515",
      "content-type-default": "awsui_content-type-default_hyvsj_18us6_535",
      "content-type-form": "awsui_content-type-form_hyvsj_18us6_535",
      unfocusable: "awsui_unfocusable_hyvsj_18us6_576",
      "navigation-container": "awsui_navigation-container_hyvsj_18us6_584",
      "show-navigation": "awsui_show-navigation_hyvsj_18us6_608",
      animating: "awsui_animating_hyvsj_18us6_630",
      showButtons: "awsui_showButtons_hyvsj_18us6_1",
      navigation: "awsui_navigation_hyvsj_18us6_584",
      openNavigation: "awsui_openNavigation_hyvsj_18us6_1",
      "animated-content": "awsui_animated-content_hyvsj_18us6_690",
      "hide-navigation": "awsui_hide-navigation_hyvsj_18us6_699",
      notifications: "awsui_notifications_hyvsj_18us6_216",
      "split-panel-bottom": "awsui_split-panel-bottom_hyvsj_18us6_766",
      "position-bottom": "awsui_position-bottom_hyvsj_18us6_801",
      openSplitPanelBottom: "awsui_openSplitPanelBottom_hyvsj_18us6_1",
      "split-panel-side": "awsui_split-panel-side_hyvsj_18us6_830",
      "position-side": "awsui_position-side_hyvsj_18us6_857",
      openSplitPanelSide: "awsui_openSplitPanelSide_hyvsj_18us6_1",
      "tools-container": "awsui_tools-container_hyvsj_18us6_894",
      tools: "awsui_tools_hyvsj_18us6_894",
      openTools: "awsui_openTools_hyvsj_18us6_1",
      "has-tools-form-persistence":
        "awsui_has-tools-form-persistence_hyvsj_18us6_977",
      "hide-tools": "awsui_hide-tools_hyvsj_18us6_987",
      "show-tools": "awsui_show-tools_hyvsj_18us6_999",
      "has-tools-form": "awsui_has-tools-form_hyvsj_18us6_977",
      trigger: "awsui_trigger_hyvsj_18us6_1056",
      selected: "awsui_selected_hyvsj_18us6_1094",
    };
    function Be(t, n) {
      var r = (0, e.useRef)(!0);
      (0, e.useEffect)(function () {
        if (!r.current) return t();
        r.current = !1;
      }, n);
    }
    function De(e, t) {
      return (
        (De = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        De(e, t)
      );
    }
    var Fe = !1,
      He = e.createContext(null),
      Ae = "unmounted",
      We = "exited",
      Ue = "entering",
      Ve = "entered",
      qe = "exiting",
      Ke = (function (n) {
        var r, i;
        function a(e, t) {
          var r;
          r = n.call(this, e, t) || this;
          var i,
            a = t && !t.isMounting ? e.enter : e.appear;
          return (
            (r.appearStatus = null),
            e.in
              ? a
                ? ((i = We), (r.appearStatus = Ue))
                : (i = Ve)
              : (i = e.unmountOnExit || e.mountOnEnter ? Ae : We),
            (r.state = { status: i }),
            (r.nextCallback = null),
            r
          );
        }
        (i = n),
          ((r = a).prototype = Object.create(i.prototype)),
          (r.prototype.constructor = r),
          De(r, i),
          (a.getDerivedStateFromProps = function (e, t) {
            return e.in && t.status === Ae ? { status: We } : null;
          });
        var o = a.prototype;
        return (
          (o.componentDidMount = function () {
            this.updateStatus(!0, this.appearStatus);
          }),
          (o.componentDidUpdate = function (e) {
            var t = null;
            if (e !== this.props) {
              var n = this.state.status;
              this.props.in
                ? n !== Ue && n !== Ve && (t = Ue)
                : (n !== Ue && n !== Ve) || (t = qe);
            }
            this.updateStatus(!1, t);
          }),
          (o.componentWillUnmount = function () {
            this.cancelNextCallback();
          }),
          (o.getTimeouts = function () {
            var e,
              t,
              n,
              r = this.props.timeout;
            return (
              (e = t = n = r),
              null != r &&
                "number" !== typeof r &&
                ((e = r.exit),
                (t = r.enter),
                (n = void 0 !== r.appear ? r.appear : t)),
              { exit: e, enter: t, appear: n }
            );
          }),
          (o.updateStatus = function (e, t) {
            void 0 === e && (e = !1),
              null !== t
                ? (this.cancelNextCallback(),
                  t === Ue ? this.performEnter(e) : this.performExit())
                : this.props.unmountOnExit &&
                  this.state.status === We &&
                  this.setState({ status: Ae });
          }),
          (o.performEnter = function (e) {
            var n = this,
              r = this.props.enter,
              i = this.context ? this.context.isMounting : e,
              a = this.props.nodeRef ? [i] : [t.findDOMNode(this), i],
              o = a[0],
              l = a[1],
              u = this.getTimeouts(),
              s = i ? u.appear : u.enter;
            (!e && !r) || Fe
              ? this.safeSetState({ status: Ve }, function () {
                  n.props.onEntered(o);
                })
              : (this.props.onEnter(o, l),
                this.safeSetState({ status: Ue }, function () {
                  n.props.onEntering(o, l),
                    n.onTransitionEnd(s, function () {
                      n.safeSetState({ status: Ve }, function () {
                        n.props.onEntered(o, l);
                      });
                    });
                }));
          }),
          (o.performExit = function () {
            var e = this,
              n = this.props.exit,
              r = this.getTimeouts(),
              i = this.props.nodeRef ? void 0 : t.findDOMNode(this);
            n && !Fe
              ? (this.props.onExit(i),
                this.safeSetState({ status: qe }, function () {
                  e.props.onExiting(i),
                    e.onTransitionEnd(r.exit, function () {
                      e.safeSetState({ status: We }, function () {
                        e.props.onExited(i);
                      });
                    });
                }))
              : this.safeSetState({ status: We }, function () {
                  e.props.onExited(i);
                });
          }),
          (o.cancelNextCallback = function () {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (o.safeSetState = function (e, t) {
            (t = this.setNextCallback(t)), this.setState(e, t);
          }),
          (o.setNextCallback = function (e) {
            var t = this,
              n = !0;
            return (
              (this.nextCallback = function (r) {
                n && ((n = !1), (t.nextCallback = null), e(r));
              }),
              (this.nextCallback.cancel = function () {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (o.onTransitionEnd = function (e, n) {
            this.setNextCallback(n);
            var r = this.props.nodeRef
                ? this.props.nodeRef.current
                : t.findDOMNode(this),
              i = null == e && !this.props.addEndListener;
            if (r && !i) {
              if (this.props.addEndListener) {
                var a = this.props.nodeRef
                    ? [this.nextCallback]
                    : [r, this.nextCallback],
                  o = a[0],
                  l = a[1];
                this.props.addEndListener(o, l);
              }
              null != e && setTimeout(this.nextCallback, e);
            } else setTimeout(this.nextCallback, 0);
          }),
          (o.render = function () {
            var t = this.state.status;
            if (t === Ae) return null;
            var n = this.props,
              r = n.children,
              i =
                (n.in,
                n.mountOnEnter,
                n.unmountOnExit,
                n.appear,
                n.enter,
                n.exit,
                n.timeout,
                n.addEndListener,
                n.onEnter,
                n.onEntering,
                n.onEntered,
                n.onExit,
                n.onExiting,
                n.onExited,
                n.nodeRef,
                (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    i = {},
                    a = Object.keys(e);
                  for (r = 0; r < a.length; r++)
                    (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                  return i;
                })(n, [
                  "children",
                  "in",
                  "mountOnEnter",
                  "unmountOnExit",
                  "appear",
                  "enter",
                  "exit",
                  "timeout",
                  "addEndListener",
                  "onEnter",
                  "onEntering",
                  "onEntered",
                  "onExit",
                  "onExiting",
                  "onExited",
                  "nodeRef",
                ]));
            return e.createElement(
              He.Provider,
              { value: null },
              "function" === typeof r
                ? r(t, i)
                : e.cloneElement(e.Children.only(r), i)
            );
          }),
          a
        );
      })(e.Component);
    function $e() {}
    (Ke.contextType = He),
      (Ke.propTypes = {}),
      (Ke.defaultProps = {
        in: !1,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
        enter: !0,
        exit: !0,
        onEnter: $e,
        onEntering: $e,
        onEntered: $e,
        onExit: $e,
        onExiting: $e,
        onExited: $e,
      }),
      (Ke.UNMOUNTED = Ae),
      (Ke.EXITED = We),
      (Ke.ENTERING = Ue),
      (Ke.ENTERED = Ve),
      (Ke.EXITING = qe);
    var Qe = Ke;
    n(249);
    function Ge(e) {
      var t = void 0;
      return function () {
        return void 0 === t && (t = e()), t;
      };
    }
    function Xe(e, t) {
      for (var n = e; n && !t(n); )
        for (n = n.parentElement; n && !(n instanceof HTMLElement); )
          n = n.parentElement;
      return n;
    }
    function Ye() {
      var e, t, n;
      return (
        "undefined" !== typeof window &&
        null !==
          (n =
            null ===
              (t =
                null === (e = window.CSS) || void 0 === e
                  ? void 0
                  : e.supports) || void 0 === t
              ? void 0
              : t.call(e, "position", "sticky")) &&
        void 0 !== n &&
        n
      );
    }
    var Ze = Ge(function () {
      var e = document.createElement("div");
      (e.style.transform = "translateY(5px)"), document.body.appendChild(e);
      var t = document.createElement("div");
      (t.style.position = "fixed"), (t.style.top = "0"), e.appendChild(t);
      var n = e.getBoundingClientRect().top === t.getBoundingClientRect().top;
      return document.body.removeChild(e), n;
    });
    function Je(e, t) {
      return null !== e && (e === t || e.contains(t));
    }
    function et(n) {
      var r,
        i = [],
        a = function (e) {
          (0, t.unstable_batchedUpdates)(function () {
            for (var t = 0, n = i; t < n.length; t++) {
              (0, n[t])(e);
            }
          });
        };
      return function (t) {
        (0, e.useEffect)(function () {
          return (
            0 === i.length && (r = n(a)),
            i.push(t),
            function () {
              i.splice(i.indexOf(t), 1), 0 === i.length && (r(), (r = void 0));
            }
          );
        }, []);
      };
    }
    function tt(t) {
      var n = t.factory,
        r = t.initialState,
        i = et(n),
        a = r;
      return function () {
        var t = (0, e.useState)(a),
          n = t[0],
          r = t[1];
        return (
          i(function (e) {
            (a = e), r(e);
          }),
          n
        );
      };
    }
    var nt = et(function (e) {
      var t = new MutationObserver(function () {
        return e();
      });
      return (
        t.observe(document.body, { attributes: !0, subtree: !0 }),
        function () {
          return t.disconnect();
        }
      );
    });
    function rt(t, n) {
      var r = ce(function () {
        t.current && n(t.current);
      });
      nt(r),
        (0, e.useEffect)(
          function () {
            r();
          },
          [r]
        );
    }
    function it(t) {
      var n = (0, e.useState)(Boolean(false)),
        r = n[0],
        i = n[1];
      return (
        rt(t, function (e) {
          var t, n;
          if (
            null ===
              (n =
                null === (t = window.CSS) || void 0 === t
                  ? void 0
                  : t.supports) || void 0 === n
              ? void 0
              : n.call(t, "color", "var(--test-var)")
          ) {
            var r = Xe(e, function (e) {
              return e.classList.contains("awsui-visual-refresh");
            });
            i(!!r);
          }
        }),
        r
      );
    }
    function at(t) {
      var n = (0, e.useState)(!1),
        r = n[0],
        i = n[1];
      return (
        rt(t, function (e) {
          i(
            (function (e) {
              var t;
              return (
                !!Xe(e, function (e) {
                  return e.classList.contains("awsui-motion-disabled");
                }) ||
                (window.matchMedia &&
                  (null ===
                    (t = window.matchMedia(
                      "(prefers-reduced-motion: reduce)"
                    )) || void 0 === t
                    ? void 0
                    : t.matches))
              );
            })(e)
          );
        }),
        r
      );
    }
    function ot(t) {
      var n = t.in,
        r = t.children,
        i = t.exit,
        a = void 0 === i || i,
        o = t.onStatusChange,
        l = void 0 === o ? function () {} : o,
        u = t.disabled,
        s = void 0 !== u && u,
        f = t.transitionChangeDelay,
        p = d(t, [
          "in",
          "children",
          "exit",
          "onStatusChange",
          "disabled",
          "transitionChangeDelay",
        ]),
        h = (0, e.useRef)(null),
        v = (0, e.useState)(n ? "entered" : "exited"),
        m = v[0],
        g = v[1],
        _ = at(h) || s,
        w = (0, e.useCallback)(function (e) {
          var t = h.current;
          if (null !== t) {
            var n = function n(r) {
              r.target === t &&
                (t.removeEventListener("transitionend", n),
                t.removeEventListener("animationend", n),
                e());
            };
            t.addEventListener("transitionend", n),
              t.addEventListener("animationend", n);
          }
        }, []);
      return e.createElement(
        Qe,
        c(
          {
            addEndListener: w,
            timeout: _ ? 0 : void 0,
            in: n,
            nodeRef: h,
            exit: a,
            onEnter: function (e) {
              e || (g("enter"), l("enter"));
            },
            onEntering: function (e) {
              var t;
              e ||
                (null === (t = h.current) || void 0 === t || t.offsetHeight,
                (null === f || void 0 === f ? void 0 : f.entering)
                  ? setTimeout(
                      function () {
                        g("entering"), l("entering");
                      },
                      null === f || void 0 === f ? void 0 : f.entering
                    )
                  : (g("entering"), l("entering")));
            },
            onEntered: function (e) {
              e || (g("entered"), l("entered"));
            },
            onExit: function () {
              g("exit"), l("exit");
            },
            onExiting: function () {
              g("exiting"), l("exiting");
            },
            onExited: function () {
              g("exited"), l("exited");
            },
          },
          p
        ),
        function () {
          return r(m, h);
        }
      );
    }
    var lt = {
      offsetTop: "--awsui-offset-top-ujkcpl",
      offsetTopWithNotifications:
        "--awsui-offset-top-with-notifications-ujkcpl",
      contentGapLeft: "--awsui-content-gap-left-ujkcpl",
      contentGapRight: "--awsui-content-gap-right-ujkcpl",
      contentHeight: "--awsui-content-height-ujkcpl",
      defaultMaxContentWidth: "--awsui-default-max-content-width-ujkcpl",
      defaultMinContentWidth: "--awsui-default-min-content-width-ujkcpl",
      footerHeight: "--awsui-footer-height-ujkcpl",
      headerHeight: "--awsui-header-height-ujkcpl",
      layoutWidth: "--awsui-layout-width-ujkcpl",
      mainOffsetLeft: "--awsui-main-offset-left-ujkcpl",
      maxContentWidth: "--awsui-max-content-width-ujkcpl",
      minContentWidth: "--awsui-min-content-width-ujkcpl",
      notificationsHeight: "--awsui-notifications-height-ujkcpl",
      overlapHeight: "--awsui-overlap-height-ujkcpl",
      navigationWidth: "--awsui-navigation-width-ujkcpl",
      splitPanelReportedHeaderSize:
        "--awsui-split-panel-reported-header-size-ujkcpl",
      splitPanelReportedSize: "--awsui-split-panel-reported-size-ujkcpl",
      splitPanelMinWidth: "--awsui-split-panel-min-width-ujkcpl",
      splitPanelMaxWidth: "--awsui-split-panel-max-width-ujkcpl",
      toolsMaxWidth: "--awsui-tools-max-width-ujkcpl",
      toolsWidth: "--awsui-tools-width-ujkcpl",
      toolsAnimationStartingOpacity:
        "--awsui-tools-animation-starting-opacity-ujkcpl",
      contentScrollMargin: "--awsui-content-scroll-margin-ujkcpl",
    };
    function ut(t) {
      var n = t.children,
        r = (0, e.useContext)(vt),
        i = r.handleSplitPanelClick,
        a = r.handleSplitPanelPreferencesChange,
        o = r.handleSplitPanelResize,
        l = r.isMobile,
        u = r.isSplitPanelForcedPosition,
        s = r.isSplitPanelOpen,
        d = r.setSplitPanelReportedSize,
        f = r.splitPanelPosition,
        p = r.splitPanelSize,
        h = (0, e.useState)(void 0),
        v = h[0],
        m = h[1],
        g = (0, e.useState)(),
        _ = g[0],
        w = g[1];
      Be(
        function () {
          return w(s ? { type: "open" } : { type: "close" });
        },
        [s]
      ),
        Be(
          function () {
            return w({ type: "position" });
          },
          [f]
        );
      var b = (0, e.useRef)(null),
        y = (0, e.useRef)(null),
        x = {
          bottomOffset: 0,
          getMaxHeight: function () {
            return document.documentElement.clientHeight - 250;
          },
          getMaxWidth: function () {
            return document.documentElement.clientWidth;
          },
          getHeader: function () {
            return y.current;
          },
          isForcedPosition: u,
          isMobile: l,
          isOpen: s,
          isRefresh: !0,
          leftOffset: 0,
          onPreferencesChange: a,
          onResize: o,
          onToggle: i,
          position: f,
          reportSize: d,
          rightOffset: 0,
          size: p || 0,
          splitPanelRef: b,
          splitPanelHeaderRef: y,
          topOffset: 0,
          openButtonAriaLabel: v,
          setOpenButtonAriaLabel: m,
          lastInteraction: _,
        };
      return e.createElement(je.Provider, { value: c({}, x) }, n);
    }
    (ut.Bottom = function () {
      var t = (0, e.useContext)(vt),
        n = t.disableBodyScroll,
        r = t.isNavigationOpen,
        i = t.isSplitPanelOpen,
        a = t.isToolsOpen,
        o = t.splitPanel,
        l = t.splitPanelReportedSize,
        u = (0, e.useContext)(je),
        s = u.position,
        c = (function (t) {
          var n = (0, e.useCallback)(
              function () {
                var e, n;
                return "string" === typeof t
                  ? document.querySelector(t)
                  : "function" === typeof t
                  ? null !== (e = t()) && void 0 !== e
                    ? e
                    : null
                  : null !==
                      (n = null === t || void 0 === t ? void 0 : t.current) &&
                    void 0 !== n
                  ? n
                  : null;
              },
              [t]
            ),
            r = (0, e.useState)(0),
            i = r[0],
            a = r[1];
          return (
            de(n, function (e) {
              return a(e.borderBoxHeight);
            }),
            i
          );
        })(u.getHeader);
      return o
        ? e.createElement(
            ot,
            { in: null !== i && void 0 !== i && i, exit: !1 },
            function (t, u) {
              var d, f;
              return e.createElement(
                "section",
                {
                  className: g(
                    Ie["split-panel-bottom"],
                    Ie["position-".concat(s)],
                    ((d = {}),
                    (d[Ie.animating] = "entering" === t),
                    (d[Ie["disable-body-scroll"]] = n),
                    (d[Ie["is-navigation-open"]] = r),
                    (d[Ie["is-split-panel-open"]] = i),
                    (d[Ie["is-tools-open"]] = a),
                    d)
                  ),
                  ref: u,
                  style:
                    ((f = {}),
                    (f[lt.splitPanelReportedSize] = "".concat(l, "px")),
                    (f[lt.splitPanelReportedHeaderSize] = "".concat(c, "px")),
                    f),
                },
                e.createElement(ut, null),
                "bottom" === s && o
              );
            }
          )
        : null;
    }),
      (ut.Side = function () {
        var t = (0, e.useContext)(vt),
          n = t.isSplitPanelOpen,
          r = t.splitPanel,
          i = t.splitPanelMaxWidth,
          a = t.splitPanelMinWidth,
          o = t.splitPanelReportedSize,
          l = (0, e.useContext)(je).position;
        return r
          ? e.createElement(
              ot,
              { in: null !== n && void 0 !== n && n, exit: !1 },
              function (t, u) {
                var s, c;
                return e.createElement(
                  "section",
                  {
                    "aria-hidden": !n || "bottom" === l,
                    className: g(
                      Ie["split-panel-side"],
                      Ie["position-".concat(l)],
                      ((s = {}),
                      (s[Ie.animating] = "entering" === t),
                      (s[Ie["is-split-panel-open"]] = n),
                      s)
                    ),
                    ref: u,
                    style:
                      ((c = {}),
                      (c[lt.splitPanelMaxWidth] = "".concat(i, "px")),
                      (c[lt.splitPanelMinWidth] = "".concat(a, "px")),
                      (c[lt.splitPanelReportedHeaderSize] = "".concat(o, "px")),
                      c),
                  },
                  e.createElement(
                    "div",
                    { className: g(Ie["animated-content"]) },
                    "side" === l && r
                  )
                );
              }
            )
          : null;
      });
    function st(t, n, r, i) {
      i.componentName, i.changeHandler, i.controlledProp;
      var a = e.useState(void 0 !== t)[0];
      var o = e.useState(r),
        l = o[0],
        u = o[1],
        s = e.useState(!1),
        c = s[0],
        d = s[1],
        f = c ? l : r,
        p = e.useCallback(
          function (e) {
            u(e), d(!0);
          },
          [u, d]
        );
      return a ? [t, ct] : [f, p];
    }
    function ct() {}
    function dt() {
      return (
        "undefined" !== typeof window &&
        (window.matchMedia
          ? window.matchMedia("(max-width: ".concat(b, "px)")).matches
          : "xs" !== x(window.innerWidth, ["xs"]))
      );
    }
    var ft = tt({
      initialState: function () {
        return dt();
      },
      factory: function (e) {
        var t = function () {
          return e(dt());
        };
        return (
          window.addEventListener("resize", t),
          function () {
            window.removeEventListener("resize", t);
          }
        );
      },
    });
    var pt = {
      default: c(
        {},
        { navigationOpen: !0, minContentWidth: 280, maxContentWidth: void 0 }
      ),
      cards: {
        navigationOpen: !0,
        minContentWidth: 280,
        maxContentWidth: void 0,
      },
      form: { navigationOpen: !1, minContentWidth: 280, maxContentWidth: 800 },
      table: {
        navigationOpen: !0,
        minContentWidth: 280,
        maxContentWidth: void 0,
      },
      wizard: {
        navigationOpen: !1,
        minContentWidth: 280,
        maxContentWidth: 1080,
      },
    };
    var ht = {
        breadcrumbs: null,
        content: null,
        contentHeader: null,
        contentType: "default",
        disableBodyScroll: !1,
        disableContentHeaderOverlap: !1,
        disableContentPaddings: !1,
        dynamicOverlapHeight: 0,
        footerSelector: "#b #f",
        handleNavigationClick: function (e) {
          return e;
        },
        handleSplitPanelClick: function () {},
        handleSplitPanelPreferencesChange: function () {},
        handleSplitPanelResize: function () {},
        handleToolsClick: function (e) {
          return e;
        },
        hasDefaultToolsWidth: !0,
        hasNotificationsContent: !1,
        headerSelector: "#b #h",
        isAnyPanelOpen: !1,
        isMobile: !1,
        isNavigationOpen: !1,
        isSplitPanelForcedPosition: !1,
        isSplitPanelOpen: !1,
        isToolsOpen: !1,
        layoutElement: (0, e.createRef)(),
        layoutWidth: 0,
        mainElement: (0, e.createRef)(),
        mainOffsetLeft: 0,
        maxContentWidth: 0,
        minContentWidth: 280,
        navigation: null,
        navigationHide: !1,
        navigationOpen: !1,
        notifications: null,
        notificationsElement: (0, e.createRef)(),
        notificationsHeight: 0,
        offsetBottom: 0,
        onNavigationChange: function () {},
        onSplitPanelResize: function () {},
        onSplitPanelToggle: function () {},
        onSplitPanelPreferencesChange: function () {},
        setDynamicOverlapHeight: function (e) {},
        setIsNavigationOpen: function (e) {
          return e;
        },
        setIsToolsOpen: function (e) {
          return e;
        },
        setOffsetBottom: function (e) {},
        setSplitPanelReportedSize: function (e) {},
        splitPanelMaxWidth: 280,
        splitPanelMinWidth: 280,
        splitPanelOpen: !1,
        splitPanelPosition: "bottom",
        splitPanelPreferences: { position: "bottom" },
        splitPanelReportedSize: 0,
        splitPanelSize: 0,
        stickyNotifications: !1,
        tools: null,
      },
      vt = (0, e.createContext)(c({}, ht));
    e.forwardRef(function (t, n) {
      var r,
        i,
        a,
        o = t.toolsHide,
        l = t.toolsOpen,
        u = t.navigationHide,
        s = t.navigationOpen,
        f = t.contentType,
        p = void 0 === f ? "default" : f,
        h = t.children,
        v = d(t, [
          "toolsHide",
          "toolsOpen",
          "navigationHide",
          "navigationOpen",
          "contentType",
          "children",
        ]),
        m = ft();
      var g = (0, e.useState)(0),
        _ = g[0],
        w = g[1],
        b = 8947848.525,
        y =
          v.maxContentWidth && v.maxContentWidth > b
            ? b
            : null !== (r = v.maxContentWidth) && void 0 !== r
            ? r
            : 0,
        x = null !== (i = v.minContentWidth) && void 0 !== i ? i : 280,
        k = (function (e, t, n) {
          var r,
            i,
            a,
            o,
            l = n ? c(c({}, pt[e]), { maxContentWidth: void 0 }) : pt[e];
          return {
            maxContentWidth:
              null !== (r = t.maxContentWidth) && void 0 !== r
                ? r
                : l.maxContentWidth,
            minContentWidth:
              null !== (i = t.minContentWidth) && void 0 !== i
                ? i
                : l.minContentWidth,
            navigationOpen:
              null !== (a = t.navigationOpen) && void 0 !== a
                ? a
                : l.navigationOpen,
            toolsOpen:
              null !== (o = t.toolsOpen) && void 0 !== o ? o : l.toolsOpen,
          };
        })(p, { maxContentWidth: y, minContentWidth: x }, !0),
        E = st(s, v.onNavigationChange, !m && k.navigationOpen, {
          componentName: "AppLayout",
          controlledProp: "navigationOpen",
          changeHandler: "onNavigationChange",
        }),
        S = E[0],
        C = void 0 !== S && S,
        z = E[1],
        R = (0, e.useCallback)(
          function (e) {
            z(e), Oe(v.onNavigationChange, { open: e });
          },
          [v.onNavigationChange, z]
        ),
        P = null !== (a = v.toolsWidth) && void 0 !== a ? a : 290,
        N = void 0 === v.toolsWidth,
        O = st(l, v.onToolsChange, !m && k.toolsOpen, {
          componentName: "AppLayout",
          controlledProp: "toolsOpen",
          changeHandler: "onToolsChange",
        }),
        L = O[0],
        T = void 0 !== L && L,
        M = O[1],
        j = (0, e.useCallback)(
          function (e) {
            M(e), Oe(v.onToolsChange, { open: e });
          },
          [v.onToolsChange, M]
        ),
        I = (!u && C) || (!o && T);
      (0, e.useEffect)(
        function () {
          return (
            m && (C || T)
              ? document.body.classList.add(Ie["block-body-scroll"])
              : document.body.classList.remove(Ie["block-body-scroll"]),
            function () {
              document.body.classList.remove(Ie["block-body-scroll"]);
            }
          );
        },
        [m, C, T]
      ),
        (0, e.useImperativeHandle)(
          n,
          function () {
            return {
              closeNavigationIfNecessary: function () {
                m && R(!1);
              },
              openTools: function () {
                j(!0);
              },
            };
          },
          [m, R, j]
        );
      var B = 280,
        D = (0, e.useState)(B),
        F = D[0],
        H = D[1],
        A = st(v.splitPanelOpen, v.onSplitPanelToggle, !1, {
          componentName: "AppLayout",
          controlledProp: "splitPanelOpen",
          changeHandler: "onSplitPanelToggle",
        }),
        W = A[0],
        U = A[1],
        V = (0, e.useCallback)(
          function () {
            U(!W), Oe(v.onSplitPanelToggle, { open: !W });
          },
          [v.onSplitPanelToggle, W, U]
        ),
        q = st(
          v.splitPanelPreferences,
          v.onSplitPanelPreferencesChange,
          void 0,
          {
            componentName: "AppLayout",
            controlledProp: "splitPanelPreferences",
            changeHandler: "onSplitPanelPreferencesChange",
          }
        ),
        K = q[0],
        $ = q[1],
        Q = (0, e.useState)(!1),
        G = Q[0],
        X = Q[1],
        Y = (function (e, t) {
          var n = "bottom";
          return (
            e ||
              "side" !== (null === t || void 0 === t ? void 0 : t.position) ||
              (n = "side"),
            n
          );
        })(G, K);
      (0, e.useLayoutEffect)(
        function () {
          X(B > F);
        },
        [F, B]
      );
      var Z,
        J = (0, e.useState)(0),
        ee = J[0],
        te = J[1],
        ne = st(
          v.splitPanelSize,
          v.onSplitPanelResize,
          ((Z = Y),
          "undefined" === typeof document
            ? 0
            : "side" === Z
            ? document.documentElement.clientWidth / 3
            : document.documentElement.clientHeight / 2),
          {
            componentName: "AppLayout",
            controlledProp: "splitPanelSize",
            changeHandler: "onSplitPanelResize",
          }
        ),
        re = ne[0],
        ie = ne[1],
        ae = (0, e.useCallback)(
          function (e) {
            ie(e.size), Oe(v.onSplitPanelResize, e);
          },
          [v.onSplitPanelResize, ie]
        ),
        oe = (0, e.useCallback)(
          function (e) {
            $(e), Oe(v.onSplitPanelPreferencesChange, e);
          },
          [v.onSplitPanelPreferencesChange, $]
        ),
        le = pe(function (e) {
          return e.width;
        }),
        ue = le[0],
        se = le[1],
        ce = null !== ue && void 0 !== ue ? ue : 0,
        de = (0, e.useRef)(null),
        fe = (0, e.useState)(0),
        he = fe[0],
        ve = fe[1];
      (0, e.useLayoutEffect)(
        function () {
          var e, t;
          ve(
            null !==
              (t =
                null ===
                  (e = null === de || void 0 === de ? void 0 : de.current) ||
                void 0 === e
                  ? void 0
                  : e.offsetLeft) && void 0 !== t
              ? t
              : 0
          );
        },
        [ce, C, T, ee]
      ),
        (0, e.useLayoutEffect)(
          function () {
            H(ce - he - x - 80 - (T ? P : 0) - 160);
          },
          [C, T, ce, he, x, P]
        );
      var me = pe(function (e) {
          return e.height;
        }),
        ge = me[0],
        _e = me[1],
        we = (0, e.useState)(0),
        be = we[0],
        ye = we[1],
        xe = (0, e.useState)(!1),
        ke = xe[0],
        Ee = xe[1];
      (0, e.useEffect)(
        function () {
          ye(null !== ge && void 0 !== ge ? ge : 0), Ee(!!(ge && ge > 0));
        },
        [ge]
      );
      var Se = (0, e.useState)(0),
        Ce = Se[0],
        ze = Se[1];
      return e.createElement(
        vt.Provider,
        {
          value: c(c(c({}, ht), v), {
            contentType: p,
            dynamicOverlapHeight: _,
            hasDefaultToolsWidth: N,
            handleNavigationClick: R,
            handleSplitPanelClick: V,
            handleSplitPanelPreferencesChange: oe,
            handleSplitPanelResize: ae,
            handleToolsClick: j,
            hasNotificationsContent: ke,
            isAnyPanelOpen: I,
            isMobile: m,
            isNavigationOpen: null !== C && void 0 !== C && C,
            isSplitPanelForcedPosition: G,
            isSplitPanelOpen: W,
            isToolsOpen: T,
            layoutElement: se,
            layoutWidth: ce,
            mainElement: de,
            mainOffsetLeft: he,
            maxContentWidth: y,
            minContentWidth: x,
            navigationHide: u,
            notificationsElement: _e,
            notificationsHeight: be,
            offsetBottom: Ce,
            setDynamicOverlapHeight: w,
            setOffsetBottom: ze,
            setSplitPanelReportedSize: te,
            splitPanelMaxWidth: F,
            splitPanelMinWidth: B,
            splitPanelPosition: Y,
            splitPanelPreferences: K,
            splitPanelReportedSize: ee,
            splitPanelSize: re,
            toolsHide: o,
            toolsOpen: T,
            toolsWidth: P,
          }),
        },
        h
      );
    });
    function mt(e, t) {
      return e[t];
    }
    function gt(t, n) {
      var r = (0, e.createContext)(n),
        i = "__awsui_context_".concat(t),
        a = r.Provider;
      return {
        context: r,
        RootProvider: function (t) {
          var n = t.value,
            r = d(t, ["value"]),
            o = (0, e.useRef)(null);
          return (
            (0, e.useLayoutEffect)(
              function () {
                o.current &&
                  (function (e, t, n) {
                    e[t] = n;
                    var r = document.createEvent("CustomEvent");
                    r.initCustomEvent(t, !1, !1, null), e.dispatchEvent(r);
                  })(o.current, i, n);
              },
              [n]
            ),
            e.createElement(
              a,
              { value: n },
              e.createElement("div", c({ ref: o }, r))
            )
          );
        },
        IntermediateProvider: function (t) {
          var n = t.children,
            r = t.parentElement,
            o = (0, e.useState)(void 0),
            l = o[0],
            u = o[1];
          return (
            (0, e.useLayoutEffect)(
              function () {
                var e = (function (e, t) {
                  for (var n = t; n; ) {
                    if (void 0 !== mt(n, e)) return n;
                    n = n.parentElement;
                  }
                  return null;
                })(i, r);
                if (e) {
                  u(mt(e, i));
                  var t = function () {
                    var t = mt(e, i);
                    u(t);
                  };
                  return (
                    e.addEventListener(i, t),
                    function () {
                      return e.removeEventListener(i, t);
                    }
                  );
                }
                u(null);
              },
              [r]
            ),
            void 0 === l
              ? null
              : null === l
              ? e.createElement(e.Fragment, null, n)
              : e.createElement(a, { value: l }, n)
          );
        },
      };
    }
    var _t = gt("app-layout-context", {
      stickyOffsetTop: 0,
      stickyOffsetBottom: 0,
    });
    function wt() {
      var t = (0, e.useContext)(_t.context);
      return c({}, t);
    }
    var bt = function (e) {
        for (var t = [], n = e; (n = n.parentElement) && n !== document.body; )
          "visible" !== getComputedStyle(n).overflow && t.push(n);
        return t;
      },
      yt = function (e, t, n, r) {
        void 0 === t && (t = !1),
          void 0 === n && (n = !1),
          void 0 === r && (r = !1);
        var i = n
          ? []
          : bt(e).map(function (e) {
              var t = e.getBoundingClientRect(),
                n = t.height,
                i = t.width,
                a = t.top,
                o = t.left;
              return {
                height: r ? e.scrollHeight : n,
                width: i,
                top: a,
                left: o,
              };
            });
        if (r) {
          var a = document.documentElement.getBoundingClientRect();
          i.push({
            width: Math.max(a.width, document.documentElement.clientWidth),
            height: Math.max(a.height, document.documentElement.clientHeight),
            top: a.top,
            left: a.left,
          });
        } else
          i.push({
            height: window.innerHeight,
            width: window.innerWidth,
            top: 0,
            left: 0,
          });
        return t && !n && i.shift(), i;
      };
    var xt = (0, e.createContext)({ isStuck: !1 }),
      kt = function (t, n, r, i) {
        var a = t.current,
          o = n.current,
          l = (0, e.useMemo)(
            function () {
              return (
                (a
                  ? parseInt(
                      getComputedStyle(a).getPropertyValue("border-top-width"),
                      10
                    )
                  : 0) +
                (o
                  ? parseInt(
                      getComputedStyle(o).getPropertyValue("border-top-width"),
                      10
                    )
                  : 0)
              );
            },
            [a, o]
          ),
          u = (0, e.useState)(!1),
          s = u[0],
          c = u[1],
          d = (0, e.useState)(!1),
          f = d[0],
          p = d[1];
        (0, e.useLayoutEffect)(
          function () {
            var e = t.current && bt(t.current).length;
            c(!e);
          },
          [t]
        );
        var h = wt().stickyOffsetTop,
          v = null !== i && void 0 !== i ? i : s ? h : 0,
          m =
            (function () {
              var e = ft();
              return Ye() && !e;
            })() && !!r,
          g = it(t),
          _ = "".concat(v - l, "px");
        s &&
          g &&
          (_ = "var("
            .concat(lt.offsetTopWithNotifications, ", ")
            .concat(_, ")"));
        var w = m ? { style: { top: _ } } : {},
          b = (0, e.useCallback)(
            function () {
              if (t.current && n.current) {
                var e = t.current.getBoundingClientRect().top,
                  r = n.current.getBoundingClientRect().top;
                p(e + l < r);
              }
            },
            [t, n, l]
          );
        return (
          (0, e.useEffect)(
            function () {
              if (m)
                return (
                  window.addEventListener("scroll", b, !0),
                  window.addEventListener("resize", b),
                  function () {
                    window.removeEventListener("scroll", b, !0),
                      window.removeEventListener("resize", b);
                  }
                );
            },
            [m, b]
          ),
          { isSticky: m, isStuck: f, stickyStyles: w }
        );
      };
    var Et = {
      root: "awsui_root_14iqq_1asmt_97",
      "variant-default": "awsui_variant-default_14iqq_1asmt_109",
      "variant-stacked": "awsui_variant-stacked_14iqq_1asmt_109",
      header: "awsui_header_14iqq_1asmt_132",
      "header-sticky-disabled": "awsui_header-sticky-disabled_14iqq_1asmt_136",
      "header-sticky-enabled": "awsui_header-sticky-enabled_14iqq_1asmt_140",
      "header-stuck": "awsui_header-stuck_14iqq_1asmt_146",
      "header-dynamic-height": "awsui_header-dynamic-height_14iqq_1asmt_151",
      "with-paddings": "awsui_with-paddings_14iqq_1asmt_157",
      "header-variant-cards": "awsui_header-variant-cards_14iqq_1asmt_160",
      "dark-header": "awsui_dark-header_14iqq_1asmt_189",
      content: "awsui_content_14iqq_1asmt_193",
      footer: "awsui_footer_14iqq_1asmt_200",
      "with-divider": "awsui_with-divider_14iqq_1asmt_203",
    };
    function St(t) {
      var n,
        r,
        i,
        a = t.header,
        o = t.footer,
        l = t.children,
        u = t.variant,
        s = void 0 === u ? "default" : u,
        f = t.disableHeaderPaddings,
        p = void 0 !== f && f,
        h = t.disableContentPaddings,
        m = void 0 !== h && h,
        _ = t.__stickyOffset,
        w = t.__stickyHeader,
        b = void 0 !== w && w,
        y = t.__internalRootRef,
        x = void 0 === y ? null : y,
        k = t.__disableFooterDivider,
        E = void 0 !== k && k,
        S = t.__disableFooterPaddings,
        C = void 0 !== S && S,
        z = t.__headerRef,
        R = v(
          d(t, [
            "header",
            "footer",
            "children",
            "variant",
            "disableHeaderPaddings",
            "disableContentPaddings",
            "__stickyOffset",
            "__stickyHeader",
            "__internalRootRef",
            "__disableFooterDivider",
            "__disableFooterPaddings",
            "__headerRef",
          ])
        ),
        P = (0, e.useRef)(null),
        N = (0, e.useRef)(null),
        O = it(P) && "full-page" === s,
        L = kt(P, N, b, _),
        T = L.isSticky,
        M = L.isStuck,
        j = L.stickyStyles,
        I = (0, e.useContext)(vt).setDynamicOverlapHeight,
        B = pe(function (e) {
          return e.height;
        }),
        D = B[0],
        F = B[1];
      (0, e.useLayoutEffect)(
        function () {
          O && I(null !== D && void 0 !== D ? D : 0);
        },
        [O, D, I]
      );
      var H = ve(P, x),
        A = ve(N, F, z);
      return e.createElement(
        "div",
        c({}, R, {
          className: g(R.className, Et.root, Et["variant-".concat(s)]),
          ref: H,
        }),
        a &&
          e.createElement(
            xt.Provider,
            { value: { isStuck: M } },
            e.createElement(
              "div",
              c(
                {
                  className: g(
                    Et.header,
                    Et["header-variant-".concat(s)],
                    ((n = {}),
                    (n[Et["header-sticky-disabled"]] = b && !T),
                    (n[Et["header-sticky-enabled"]] = T),
                    (n[Et["header-dynamic-height"]] = O),
                    (n[Et["header-stuck"]] = M),
                    (n[Et["with-paddings"]] = !p),
                    n)
                  ),
                },
                j,
                { ref: A }
              ),
              O
                ? e.createElement(
                    "div",
                    {
                      className: g(
                        Et["dark-header"],
                        "awsui-context-content-header"
                      ),
                    },
                    a
                  )
                : a
            )
          ),
        e.createElement(
          "div",
          {
            className: g(
              Et.content,
              ((r = {}), (r[Et["with-paddings"]] = !m), r)
            ),
          },
          l
        ),
        o &&
          e.createElement(
            "div",
            {
              className: g(
                Et.footer,
                ((i = {}),
                (i[Et["with-divider"]] = !E),
                (i[Et["with-paddings"]] = !C),
                i)
              ),
            },
            o
          )
      );
    }
    function Ct(t) {
      var n = t.variant,
        r = void 0 === n ? "default" : n,
        i = t.disableHeaderPaddings,
        a = void 0 !== i && i,
        o = t.disableContentPaddings,
        l = void 0 !== o && o,
        u = d(t, [
          "variant",
          "disableHeaderPaddings",
          "disableContentPaddings",
        ]),
        s = ze("Container"),
        f = (function (e) {
          return Object.keys(e)
            .filter(function (e) {
              return 0 !== e.indexOf("__");
            })
            .reduce(function (t, n) {
              return (t[n] = e[n]), t;
            }, {});
        })(u);
      return e.createElement(
        St,
        c(
          { variant: r, disableHeaderPaddings: a, disableContentPaddings: l },
          f,
          s
        )
      );
    }
    we(Ct, "Container");
    var zt = {
      root: "awsui_root_18582_66aol_93",
      child: "awsui_child_18582_66aol_97",
      horizontal: "awsui_horizontal_18582_66aol_108",
      "horizontal-xxxs": "awsui_horizontal-xxxs_18582_66aol_112",
      "horizontal-xxs": "awsui_horizontal-xxs_18582_66aol_116",
      "horizontal-xs": "awsui_horizontal-xs_18582_66aol_120",
      "horizontal-s": "awsui_horizontal-s_18582_66aol_124",
      "horizontal-m": "awsui_horizontal-m_18582_66aol_128",
      "horizontal-l": "awsui_horizontal-l_18582_66aol_132",
      "horizontal-xl": "awsui_horizontal-xl_18582_66aol_136",
      "horizontal-xxl": "awsui_horizontal-xxl_18582_66aol_140",
      "child-horizontal-xxxs": "awsui_child-horizontal-xxxs_18582_66aol_145",
      "child-horizontal-xxs": "awsui_child-horizontal-xxs_18582_66aol_151",
      "child-horizontal-xs": "awsui_child-horizontal-xs_18582_66aol_157",
      "child-horizontal-s": "awsui_child-horizontal-s_18582_66aol_163",
      "child-horizontal-m": "awsui_child-horizontal-m_18582_66aol_169",
      "child-horizontal-l": "awsui_child-horizontal-l_18582_66aol_175",
      "child-horizontal-xl": "awsui_child-horizontal-xl_18582_66aol_181",
      "child-horizontal-xxl": "awsui_child-horizontal-xxl_18582_66aol_187",
      vertical: "awsui_vertical_18582_66aol_196",
      "child-vertical-xxxs": "awsui_child-vertical-xxxs_18582_66aol_200",
      "child-vertical-xxs": "awsui_child-vertical-xxs_18582_66aol_204",
      "child-vertical-xs": "awsui_child-vertical-xs_18582_66aol_208",
      "child-vertical-s": "awsui_child-vertical-s_18582_66aol_212",
      "child-vertical-m": "awsui_child-vertical-m_18582_66aol_216",
      "child-vertical-l": "awsui_child-vertical-l_18582_66aol_220",
      "child-vertical-xl": "awsui_child-vertical-xl_18582_66aol_224",
      "child-vertical-xxl": "awsui_child-vertical-xxl_18582_66aol_228",
    };
    function Rt(t) {
      var n = t.direction,
        r = void 0 === n ? "vertical" : n,
        i = t.size,
        a = t.children,
        o = t.__internalRootRef,
        l = v(d(t, ["direction", "size", "children", "__internalRootRef"])),
        u = (0, _.Z)(a);
      return e.createElement(
        "div",
        c({}, l, {
          className: g(
            l.className,
            zt.root,
            zt[r],
            zt["".concat(r, "-").concat(i)]
          ),
          ref: o,
        }),
        u.map(function (t) {
          var n = t.key;
          return e.createElement(
            "div",
            {
              key: n,
              className: g(zt.child, zt["child-".concat(r, "-").concat(i)]),
            },
            t
          );
        })
      );
    }
    function Pt(t) {
      var n = t.direction,
        r = void 0 === n ? "vertical" : n,
        i = d(t, ["direction"]),
        a = ze("SpaceBetween");
      return e.createElement(Rt, c({ direction: r }, i, a));
    }
    we(Pt, "SpaceBetween");
    var Nt = gt("form-field-context", {});
    function Ot(t) {
      return (function (e, t, n) {
        var r = {};
        return (
          n.forEach(function (n) {
            r[n] = void 0 === e[n] ? t[n] : e[n];
          }),
          r
        );
      })(t, (0, e.useContext)(Nt.context), [
        "invalid",
        "controlId",
        "ariaLabelledby",
        "ariaDescribedby",
      ]);
    }
    var Lt = 0;
    function Tt(e) {
      return ""
        .concat(e || "")
        .concat(Lt++, "-")
        .concat(Date.now(), "-")
        .concat(Math.round(1e4 * Math.random()));
    }
    function Mt(t) {
      var n = (0, e.useRef)(null);
      return n.current || (n.current = Tt(t)), n.current;
    }
    var jt = {
        icon: "awsui_icon_h11ix_31bp4_98",
        "icon-flex-height": "awsui_icon-flex-height_h11ix_31bp4_104",
        "size-small": "awsui_size-small_h11ix_31bp4_129",
        "size-small-mapped-height":
          "awsui_size-small-mapped-height_h11ix_31bp4_133",
        "size-normal": "awsui_size-normal_h11ix_31bp4_147",
        "size-normal-mapped-height":
          "awsui_size-normal-mapped-height_h11ix_31bp4_151",
        "size-medium": "awsui_size-medium_h11ix_31bp4_165",
        "size-medium-mapped-height":
          "awsui_size-medium-mapped-height_h11ix_31bp4_169",
        "size-big": "awsui_size-big_h11ix_31bp4_183",
        "size-big-mapped-height":
          "awsui_size-big-mapped-height_h11ix_31bp4_187",
        "size-large": "awsui_size-large_h11ix_31bp4_201",
        "size-large-mapped-height":
          "awsui_size-large-mapped-height_h11ix_31bp4_205",
        "variant-normal": "awsui_variant-normal_h11ix_31bp4_219",
        "variant-disabled": "awsui_variant-disabled_h11ix_31bp4_222",
        "variant-inverted": "awsui_variant-inverted_h11ix_31bp4_225",
        "variant-subtle": "awsui_variant-subtle_h11ix_31bp4_228",
        "variant-warning": "awsui_variant-warning_h11ix_31bp4_231",
        "variant-error": "awsui_variant-error_h11ix_31bp4_234",
        "variant-success": "awsui_variant-success_h11ix_31bp4_237",
        "variant-link": "awsui_variant-link_h11ix_31bp4_240",
        badge: "awsui_badge_h11ix_31bp4_244",
      },
      It = {
        "add-plus":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M8 1v14M15 8H1"/></svg>',
        "angle-down":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="m1 4 7 7 7-7"/></svg>',
        "angle-left-double":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M14 1 7 8l7 7"/><path d="M9 1 2 8l7 7"/></svg>',
        "angle-left":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M12 1 5 8l7 7"/></svg>',
        "angle-right-double":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="m2 1 7 7-7 7"/><path d="m7 1 7 7-7 7"/></svg>',
        "angle-right":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="m4 1 7 7-7 7"/></svg>',
        "angle-up":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="m1 12 7-7 7 7"/></svg>',
        "arrow-left":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M9 1 2 8l7 7M2 8h13"/></svg>',
        bug: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M5 5h6a1 1 0 0 1 1 1v5.5A3.5 3.5 0 0 1 8.5 15h-1A3.5 3.5 0 0 1 4 11.5V6a1 1 0 0 1 1-1ZM5 5a3 3 0 0 1 6 0"/><path d="M12 9h3M1 9h3M12 12h2l1 2M4 12H2l-1 2M12 6h2l1-2M4 6H2L1 4"/></svg>',
        calendar:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M2 2h12v12H2z"/><path d="M4.99 8H5v.01h-.01zM7.99 8H8v.01h-.01zM10.99 8H11v.01h-.01zM4.99 5H5v.01h-.01zM7.99 5H8v.01h-.01zM10.99 5H11v.01h-.01zM4.99 11H5v.01h-.01zM7.99 11H8v.01h-.01z"/></svg>',
        call: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M9 2c2.8 0 5 2.2 5 5M7.9 13c1.3 1.3 3.5 1.3 4.8 0l1-1c.4-.4.4-1 0-1.4l-1.5-1.5c-.3-.3-1-.2-1.3.1l-.1.1c-.5.5-1.4.5-2 0L6.6 7.2c-.5-.5-.5-1.4 0-2l.1-.1c.3-.3.4-1 .1-1.3L5.3 2.3c-.3-.4-1-.4-1.3 0l-1 1C1.7 4.6 1.7 6.7 3 8.1L7.9 13z"/></svg>',
        "caret-down-filled":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled stroke-linejoin-round" d="M4 5h8l-4 6-4-6z"/></svg>',
        "caret-down":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M4 5h8l-4 6-4-6z"/></svg>',
        "caret-left-filled":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled stroke-linejoin-round" d="M11 4v8L5 8l6-4z"/></svg>',
        "caret-right-filled":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled stroke-linejoin-round" d="M5 4v8l6-4-6-4z"/></svg>',
        "caret-up-filled":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled stroke-linejoin-round" d="M4 11h8L8 5l-4 6z"/></svg>',
        "caret-up":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M4 11h8L8 5l-4 6z"/></svg>',
        close:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="m2 2 12 12M14 2 2 14"/></svg>',
        contact:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round stroke-linecap-round" d="M2 12.286h5.143L8.857 14l1.714-1.714H14V2H2v10.286z"/><path class="stroke-linecap-round" d="M4.99 7H5v.01h-.01zM7.99 7H8v.01h-.01zM10.99 7H11v.01h-.01z"/></svg>',
        copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M2 5h9v9H2z"/><path class="stroke-linejoin-round" d="M5 5V2h9v9h-3"/></svg>',
        download:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M11 2h3v12H2V2h3"/><path d="m4 6 4 4 4-4M8 1v9"/></svg>',
        edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M13 8v6H3V2h6.5M6 10l8-8"/></svg>',
        ellipsis:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="filled" cx="8" cy="2.5" r=".5"/><circle class="filled" cx="8" cy="8" r=".5"/><circle class="filled" cx="8" cy="13.5" r=".5"/></svg>',
        envelope:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M1 2h14v12H1z"/><path class="stroke-linejoin-round" d="m1 4 7 6 7-6"/></svg>',
        expand:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M9 2h5v5M7 2H2v5M7 14H2V9M9 14h5V9M2 2l12 12M14 2 2 14"/></svg>',
        external:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linecap-square" d="M10 2h4v4"/><path d="m6 10 8-8"/><path class="stroke-linejoin-round" d="M14 9.048V14H2V2h5"/></svg>',
        "file-open":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M8 1v4a1 1 0 0 0 1 1h4"/><path class="stroke-linejoin-round" d="M3 15h10V5L9 1H3v14z"/><path d="m3 8 7 7"/></svg>',
        file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M8 1v5h5"/><path class="stroke-linejoin-round" d="M3 15V1h6l4 4v10H3z"/></svg>',
        filter:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M15 2H1l5 6v7h4V8l5-6z"/></svg>',
        "folder-open":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M2 7V2h7l1 2h5v9a1 1 0 0 1-1 1H3L1 7h10l2.006 7"/></svg>',
        folder:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M14 14H2V2h5.143L9 5h5v9z"/></svg>',
        heart:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M13.92 3.061a3.729 3.729 0 0 0-5.21 0L8 3.76l-.71-.699a3.729 3.729 0 0 0-5.21 0 3.58 3.58 0 0 0 0 5.123l5.21 5.124.003-.004L8 14l.707-.696.004.004 5.21-5.124a3.58 3.58 0 0 0 0-5.123Z"/></svg>',
        key: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M9 10a5.023 5.023 0 0 1 0 1 3.996 3.996 0 1 1-3-3.874L13 1h2v5h-2v2h-2l.016 1.983Z"/><path d="M4.99 11H5v.01h-.01z"/></svg>',
        "lock-private":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M2 7h12v7H2z"/><path d="M4 7V5a4 4 0 0 1 8 0v2"/></svg>',
        menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M15 8H1M15 3H1M15 13H1"/></svg>',
        microphone:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><rect class="stroke-linejoin-round" x="6" y="1" width="4" height="8" rx="2"/><path class="stroke-linejoin-round" d="M3 6v1a5 5 0 0 0 10 0V6M8 12v3M3 15h10"/></svg>',
        notification:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M8 2.167c-3.5 0-3.5 4.666-3.5 4.666L1 11.5h14l-3.5-4.667s0-4.666-3.5-4.666ZM5.667 11.5v1.167a2.333 2.333 0 0 0 4.666 0V11.5"/><path class="stroke-linecap-round" d="M8 1v1.167"/></svg>',
        refresh:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M10 5h5V0"/><path d="M15 8a6.957 6.957 0 0 1-7 7 6.957 6.957 0 0 1-7-7 6.957 6.957 0 0 1 7-7 6.87 6.87 0 0 1 6.3 4"/></svg>',
        search:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle cx="7" cy="7" r="5"/><path d="m15 15-4.5-4.5"/></svg>',
        settings:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path d="M13.33 5.792a1.942 1.942 0 0 1 .287-1.97 6.984 6.984 0 0 0-1.44-1.439 1.943 1.943 0 0 1-3.159-1.308 6.965 6.965 0 0 0-2.037 0 1.943 1.943 0 0 1-3.158 1.308 6.962 6.962 0 0 0-1.44 1.44 1.943 1.943 0 0 1-1.308 3.158 6.972 6.972 0 0 0 0 2.037 1.943 1.943 0 0 1 1.308 3.159 6.952 6.952 0 0 0 1.44 1.44 1.942 1.942 0 0 1 3.159 1.308 6.962 6.962 0 0 0 2.036 0 1.942 1.942 0 0 1 3.159-1.308 6.974 6.974 0 0 0 1.44-1.44 1.943 1.943 0 0 1 1.308-3.159 6.974 6.974 0 0 0 0-2.037 1.942 1.942 0 0 1-1.596-1.189Z"/><circle cx="8" cy="8" r="2"/></svg>',
        share:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle cx="11" cy="4" r="2"/><circle cx="4" cy="8" r="2"/><circle cx="11" cy="12" r="2"/><path d="M9.2 4.9 5.8 7.1M9.2 11.1 5.8 8.9"/></svg>',
        "status-in-progress":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="stroke-linejoin-round" cx="8" cy="8" r="7"/><path class="stroke-linecap-round" d="M4.99 7.995H5v.01h-.01zM7.99 7.995H8v.01h-.01zM10.99 7.995H11v.01h-.01z"/></svg>',
        "status-info":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="stroke-linejoin-round" cx="8" cy="8" r="7"/><path d="M8 11V8H6"/><path class="stroke-linejoin-round" d="M10 11H6"/><path d="M7.99 5H8v.01h-.01z"/></svg>',
        "status-negative":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="stroke-linejoin-round" cx="8" cy="8" r="7"/><path d="m10.828 5.172-5.656 5.656M10.828 10.828 5.172 5.172"/></svg>',
        "status-pending":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="stroke-linejoin-round" cx="8" cy="8" r="7"/><path class="stroke-linecap-square" d="M8 5v4H5"/></svg>',
        "status-positive":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="stroke-linejoin-round" cx="8" cy="8" r="7"/><path class="stroke-linecap-square" d="m5 8 2 2 3.521-3.521"/></svg>',
        "status-stopped":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle class="stroke-linejoin-round" cx="8" cy="8" r="7"/><path class="stroke-linecap-square" d="M11 8H5"/></svg>',
        "status-warning":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="m8 1 7 14H1L8 1z"/><path d="M7.99 12H8v.01h-.01zM8 6v4"/></svg>',
        "treeview-collapse":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M5 8h6M2 2h12v12H2z"/></svg>',
        "treeview-expand":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M5 8h6M8 11V5M2 2h12v12H2z"/></svg>',
        undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M4 13h5.625c4.5 0 4.5-8 0-8H3"/><path class="stroke-linejoin-round" d="M6 2 3 5l3 3"/></svg>',
        unlocked:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M2 7h12v7H2z"/><path d="M11.874 4A4 4 0 0 0 4 5v2"/></svg>',
        upload:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M5 14H2V2h12v12h-3"/><path d="M12 10 8 6l-4 4M8 6v9"/></svg>',
        "user-profile":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="stroke-linejoin-round" d="M4.61 4.39C4.61 2.52 6.13 1 8 1s3.39 1.52 3.39 3.39S9.87 7.78 8 7.78 4.61 6.26 4.61 4.39M2.05 14.08h11.91c0-2.25-1.17-4.23-2.9-5.3A5.77 5.77 0 0 0 8 7.91c-3.29 0-5.95 2.76-5.95 6.17z"/></svg>',
        "view-full":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled" d="M5 5h6v6H5z"/><path class="stroke-linejoin-round" d="M2 2h12v12H2z"/></svg>',
        "view-horizontal":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled" d="M5 9h6v2H5z"/><path class="stroke-linejoin-round" d="M2 2h12v12H2z"/></svg>',
        "view-vertical":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path class="filled" d="M11 5v6H9V5z"/><path class="stroke-linejoin-round" d="M2 2h12v12H2z"/></svg>',
        "zoom-in":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle cx="6.885" cy="6.885" r="5.385"/><path d="m14.5 14.5-3.846-3.846M7 4v6M10 7H4"/></svg>',
        "zoom-out":
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><circle cx="6.885" cy="6.885" r="5.385"/><path d="m14.5 14.5-3.846-3.846M10 7H4"/></svg>',
      };
    var Bt = function (t) {
      var n = t.name,
        r = t.size,
        i = void 0 === r ? "normal" : r,
        a = t.variant,
        o = void 0 === a ? "normal" : a,
        l = t.url,
        u = t.alt,
        s = t.svg,
        f = t.badge,
        p = t.__internalRootRef,
        h = void 0 === p ? null : p,
        m = d(t, [
          "name",
          "size",
          "variant",
          "url",
          "alt",
          "svg",
          "badge",
          "__internalRootRef",
        ]),
        _ = (0, e.useRef)(null);
      it(_);
      var w = (0, e.useState)(0),
        b = w[0],
        y = w[1],
        x = "inherit" === i,
        k = x
          ? (function (e) {
              if (e)
                return e >= 50
                  ? "large"
                  : e >= 36
                  ? "big"
                  : e >= 24
                  ? "medium"
                  : e <= 16
                  ? "small"
                  : "normal";
            })(b)
          : i,
        E = { height: x ? "".concat(b, "px") : "" },
        S = v(m);
      (S.className = g(
        S.className,
        jt.icon,
        x && jt["icon-flex-height"],
        f && jt.badge,
        !x && jt["size-".concat(k, "-mapped-height")],
        jt["size-".concat(k)],
        jt["variant-".concat(o)]
      )),
        (0, e.useLayoutEffect)(function () {
          if (x && _.current) {
            var e = getComputedStyle(_.current).lineHeight,
              t = parseInt(e, 10);
            y(t);
          }
        });
      var C = ve(_, h);
      if (s)
        return e.createElement(
          "span",
          c({}, S, { ref: C, "aria-hidden": "true", style: E }),
          s
        );
      if (l)
        return e.createElement(
          "span",
          c({}, S, { ref: C, style: E }),
          e.createElement("img", { src: l, alt: u })
        );
      var z = n && Object.prototype.hasOwnProperty.call(It, n);
      return e.createElement(
        "span",
        c({}, S, {
          dangerouslySetInnerHTML: z ? { __html: It[n] } : void 0,
          ref: C,
          style: E,
        })
      );
    };
    function Dt(e, t, n) {
      if (e) return "".concat(t, "-").concat(n);
    }
    var Ft = "awsui_error-icon-shake-wrapper_14mhv_1iax8_97",
      Ht = "awsui_error-icon-scale-wrapper_14mhv_1iax8_124",
      At = "awsui_error_14mhv_1iax8_97",
      Wt = "awsui_root_14mhv_1iax8_168",
      Ut = "awsui_label_14mhv_1iax8_180",
      Vt = "awsui_info_14mhv_1iax8_193",
      qt = "awsui_description_14mhv_1iax8_198",
      Kt = "awsui_constraint_14mhv_1iax8_199",
      $t = "awsui_hints_14mhv_1iax8_206",
      Qt = "awsui_constraint-has-error_14mhv_1iax8_207",
      Gt = "awsui_secondary-control_14mhv_1iax8_211",
      Xt = "awsui_controls_14mhv_1iax8_215",
      Yt = "awsui_label-hidden_14mhv_1iax8_215",
      Zt = "awsui_control_14mhv_1iax8_215",
      Jt = "awsui_error__message_14mhv_1iax8_234",
      en = "awsui_visually-hidden_14mhv_1iax8_238",
      tn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e
          .filter(function (e) {
            return e;
          })
          .join(" ");
        return n || void 0;
      },
      nn = function (t) {
        var n = t.id,
          r = t.children;
        return e.createElement(
          "div",
          { className: At },
          e.createElement(
            "div",
            { className: Ft },
            e.createElement(
              "div",
              { className: Ht },
              e.createElement(Bt, { name: "status-warning", size: "small" })
            )
          ),
          e.createElement("span", { id: n, className: Jt }, r)
        );
      };
    function rn(t) {
      var n = t.controlId,
        r = t.stretch,
        i = void 0 !== r && r,
        a = t.label,
        o = t.info,
        l = t.children,
        u = t.secondaryControl,
        s = t.description,
        f = t.constraintText,
        p = t.errorText,
        h = t.__hideLabel,
        m = t.__internalRootRef,
        _ = void 0 === m ? null : m,
        w = v(
          d(t, [
            "controlId",
            "stretch",
            "label",
            "info",
            "children",
            "secondaryControl",
            "description",
            "constraintText",
            "errorText",
            "__hideLabel",
            "__internalRootRef",
          ])
        ),
        b = (0, e.useRef)(null),
        y = it(b),
        x = Mt("formField"),
        k = n || x,
        E = (function (e, t, n, r, i) {
          return {
            label: Dt(t, e, "label"),
            description: Dt(n, e, "description"),
            constraint: Dt(r, e, "constraint"),
            error: Dt(i, e, "error"),
          };
        })(n || k, a, s, f, p),
        S = (function (e) {
          var t = [e.error, e.description, e.constraint].filter(function (e) {
            return !!e;
          });
          return t.length ? t.join(" ") : void 0;
        })(E),
        C = (function (e, t, n) {
          var r;
          return (
            (r = e
              ? [{ colspan: 12 }, { colspan: 12 }]
              : n
              ? [
                  { colspan: { default: 12, xs: 8 } },
                  { colspan: { default: 12, xs: 4 } },
                ]
              : [
                  { colspan: { default: 12, xs: 9 } },
                  { colspan: { default: 12, xs: 3 } },
                ]),
            t ? r : [r[0]]
          );
        })(i, !!u, y),
        z = Ot({}),
        R = z.ariaLabelledby,
        P = z.ariaDescribedby,
        N = z.invalid,
        O = {
          ariaLabelledby: tn(R, E.label) || void 0,
          ariaDescribedby: tn(P, S) || void 0,
          invalid: !!p || !!N,
        },
        L = ve(b, _);
      return e.createElement(
        "div",
        c({}, w, { className: g(w.className, Wt), ref: L }),
        e.createElement(
          "div",
          { className: g(h && en) },
          a &&
            e.createElement(
              "label",
              { className: Ut, id: E.label, htmlFor: k },
              a
            ),
          !h && o && e.createElement("span", { className: Vt }, o)
        ),
        s && e.createElement("div", { className: qt, id: E.description }, s),
        e.createElement(
          "div",
          { className: g(Xt, h && Yt) },
          e.createElement(
            _e,
            { gridDefinition: C },
            e.createElement(
              Nt.RootProvider,
              { value: c({ controlId: k }, O) },
              l && e.createElement("div", { className: Zt }, l)
            ),
            u &&
              e.createElement(
                Nt.RootProvider,
                { value: O },
                e.createElement("div", { className: Gt }, u)
              )
          )
        ),
        (f || p) &&
          e.createElement(
            "div",
            { className: $t },
            p && e.createElement(nn, { id: E.error }, p),
            f &&
              e.createElement(
                "div",
                { className: g(Kt, p && Qt), id: E.constraint },
                f
              )
          )
      );
    }
    function an(t) {
      var n = t.stretch,
        r = void 0 !== n && n,
        i = d(t, ["stretch"]),
        a = ze("FormField");
      return e.createElement(rn, c({ stretch: r }, i, { __hideLabel: !1 }, a));
    }
    we(an, "FormField");
    var on = {
      root: "awsui_root_2rhyz_6eyay_93",
      input: "awsui_input_2rhyz_6eyay_97",
      "input-readonly": "awsui_input-readonly_2rhyz_6eyay_118",
      "input-invalid": "awsui_input-invalid_2rhyz_6eyay_179",
      "input-has-icon-left": "awsui_input-has-icon-left_2rhyz_6eyay_190",
      "input-type-search": "awsui_input-type-search_2rhyz_6eyay_195",
      "input-has-icon-right": "awsui_input-has-icon-right_2rhyz_6eyay_213",
      "input-has-no-border-radius":
        "awsui_input-has-no-border-radius_2rhyz_6eyay_216",
      "input-container": "awsui_input-container_2rhyz_6eyay_220",
      "input-icon": "awsui_input-icon_2rhyz_6eyay_225",
      "input-icon-hoverable": "awsui_input-icon-hoverable_2rhyz_6eyay_228",
      "input-icon-left": "awsui_input-icon-left_2rhyz_6eyay_232",
      "input-icon-right": "awsui_input-icon-right_2rhyz_6eyay_237",
    };
    function ln(t, n) {
      var r = (0, e.useRef)();
      return (
        (r.current = t),
        (0, e.useCallback)(
          (function (e, t) {
            var n;
            return (
              void 0 === t && (t = 200),
              function () {
                for (var r = [], i = 0; i < arguments.length; i++)
                  r[i] = arguments[i];
                n && clearTimeout(n),
                  (n = setTimeout(function () {
                    (n = null), e.apply(void 0, r);
                  }, t));
              }
            );
          })(function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            r.current && r.current.apply(r, e);
          }, n),
          []
        )
      );
    }
    var un = function (e, t) {
        var n;
        return g(
          on["input-icon"],
          on["input-icon-".concat(e)],
          (((n = {})[on["input-icon-hoverable"]] = t), n)
        );
      },
      sn = function (e) {
        return e.preventDefault();
      };
    var cn = e.forwardRef(function (t, n) {
        var r,
          i = t.type,
          a = void 0 === i ? "text" : i,
          o = t.step,
          l = t.inputMode,
          u = t.autoComplete,
          s = void 0 === u || u,
          f = t.ariaLabel,
          p = t.ariaLabelledby,
          h = t.ariaDescribedby,
          m = t.name,
          _ = t.value,
          w = t.controlId,
          b = t.placeholder,
          y = t.autoFocus,
          x = t.disabled,
          k = t.readOnly,
          E = t.disableBrowserAutocorrect,
          S = t.__noBorderRadius,
          C = t.__leftIcon,
          z = t.__leftIconVariant,
          R = void 0 === z ? "subtle" : z,
          P = t.__onLeftIconClick,
          N = t.invalid,
          O = t.ariaRequired,
          L = t.__rightIcon,
          T = t.__rightIconVariant,
          M = void 0 === T ? "normal" : T,
          j = t.__onRightIconClick,
          I = t.onKeyDown,
          B = t.onKeyUp,
          D = t.onChange,
          F = t.__onDelayedInput,
          H = t.__onBlurWithDetail,
          A = t.onBlur,
          W = t.onFocus,
          U = t.__nativeAttributes,
          V = t.__internalRootRef,
          q = v(
            d(t, [
              "type",
              "step",
              "inputMode",
              "autoComplete",
              "ariaLabel",
              "ariaLabelledby",
              "ariaDescribedby",
              "name",
              "value",
              "controlId",
              "placeholder",
              "autoFocus",
              "disabled",
              "readOnly",
              "disableBrowserAutocorrect",
              "__noBorderRadius",
              "__leftIcon",
              "__leftIconVariant",
              "__onLeftIconClick",
              "invalid",
              "ariaRequired",
              "__rightIcon",
              "__rightIconVariant",
              "__onRightIconClick",
              "onKeyDown",
              "onKeyUp",
              "onChange",
              "__onDelayedInput",
              "__onBlurWithDetail",
              "onBlur",
              "onFocus",
              "__nativeAttributes",
              "__internalRootRef",
            ])
          ),
          K = ln(function (e) {
            return Oe(F, { value: e });
          }),
          $ = function (e) {
            K(e), Oe(D, { value: e });
          },
          Q = (0, e.useRef)(null),
          G = (function (t, n, r, i, a, o) {
            var l = {},
              u = (0, e.useCallback)(
                function () {
                  var e;
                  null === (e = a.current) || void 0 === e || e.focus(), o("");
                },
                [a, o]
              );
            return (
              "search" === t &&
                ((l.__leftIcon = "search"),
                n ||
                  r ||
                  !i ||
                  ((l.__rightIcon = "close"), (l.__onRightIconClick = u))),
              l
            );
          })(a, x, k, _, Q, $);
        (C = null !== C && void 0 !== C ? C : G.__leftIcon),
          (L = null !== L && void 0 !== L ? L : G.__rightIcon),
          (j = null !== j && void 0 !== j ? j : G.__onRightIconClick);
        var X,
          Y = c(
            {
              "aria-label": f,
              "aria-labelledby": p,
              "aria-describedby": h,
              name: m,
              placeholder: b,
              autoFocus: y,
              id: w,
              className: g(
                on.input,
                a && on["input-type-".concat(a)],
                L && on["input-has-icon-right"],
                C && on["input-has-icon-left"],
                S && on["input-has-no-border-radius"],
                ((r = {}),
                (r[on["input-readonly"]] = k),
                (r[on["input-invalid"]] = N),
                r)
              ),
              autoComplete:
                ((X = s),
                void 0 === X && (X = !1),
                !0 === X ? "on" : X || "off"),
              disabled: x,
              readOnly: k,
              type: a,
              step: o,
              inputMode: l,
              onKeyDown:
                I &&
                function (e) {
                  return Te(I, e);
                },
              onKeyUp:
                B &&
                function (e) {
                  return Te(B, e);
                },
              value: null !== _ && void 0 !== _ ? _ : "",
              onChange:
                D &&
                function (e) {
                  return $(e.target.value);
                },
              onBlur: function (e) {
                A && Oe(A), H && Oe(H, { relatedTarget: Me(e.nativeEvent) });
              },
              onFocus:
                W &&
                function () {
                  return Oe(W);
                },
            },
            U
          );
        E && ((Y.autoCorrect = "off"), (Y.autoCapitalize = "off")),
          O && (Y["aria-required"] = "true"),
          N && (Y["aria-invalid"] = "true");
        var Z = ve(n, Q);
        return e.createElement(
          "div",
          c({}, q, {
            className: g(q.className, on["input-container"]),
            ref: V,
          }),
          C &&
            e.createElement(
              "span",
              { onClick: P, className: un("left", !!P) },
              e.createElement(Bt, { name: C, variant: x ? "disabled" : R })
            ),
          e.createElement("input", c({ ref: Z }, Y)),
          L &&
            e.createElement(
              "span",
              { onClick: j, onMouseDown: sn, className: un("right", !!j) },
              e.createElement(Bt, { name: L, variant: x ? "disabled" : M })
            )
        );
      }),
      dn = e.forwardRef(function (t, n) {
        var r = t.value,
          i = t.type,
          a = void 0 === i ? "text" : i,
          o = t.step,
          l = t.inputMode,
          u = t.autoComplete,
          s = void 0 === u || u,
          f = t.disabled,
          p = t.readOnly,
          h = t.disableBrowserAutocorrect,
          m = t.onKeyDown,
          _ = t.onKeyUp,
          w = t.onChange,
          b = t.onBlur,
          y = t.onFocus,
          x = t.ariaRequired,
          k = t.name,
          E = t.placeholder,
          S = t.autoFocus,
          C = t.ariaLabel,
          z = d(t, [
            "value",
            "type",
            "step",
            "inputMode",
            "autoComplete",
            "disabled",
            "readOnly",
            "disableBrowserAutocorrect",
            "onKeyDown",
            "onKeyUp",
            "onChange",
            "onBlur",
            "onFocus",
            "ariaRequired",
            "name",
            "placeholder",
            "autoFocus",
            "ariaLabel",
          ]),
          R = ze("Input"),
          P = v(z),
          N = Ot(z),
          O = N.ariaLabelledby,
          L = N.ariaDescribedby,
          T = N.controlId,
          M = N.invalid,
          j = (0, e.useRef)(null);
        return (
          (0, e.useImperativeHandle)(
            n,
            function () {
              return {
                focus: function () {
                  for (var e, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  null === (e = j.current) ||
                    void 0 === e ||
                    e.focus.apply(e, t);
                },
                select: function () {
                  var e;
                  null === (e = j.current) || void 0 === e || e.select();
                },
              };
            },
            [j]
          ),
          e.createElement(
            cn,
            c(
              { ref: j },
              c(c(c({}, P), R), {
                autoComplete: s,
                ariaLabel: C,
                ariaDescribedby: L,
                ariaLabelledby: O,
                ariaRequired: x,
                autoFocus: S,
                controlId: T,
                disabled: f,
                disableBrowserAutocorrect: h,
                invalid: M,
                name: k,
                onKeyDown: m,
                onKeyUp: _,
                onChange: w,
                onBlur: b,
                onFocus: y,
                placeholder: E,
                readOnly: p,
                type: a,
                step: o,
                inputMode: l,
                value: r,
              }),
              { className: g(on.root, P.className) }
            )
          )
        );
      });
    we(dn, "Input");
    var fn,
      pn = dn,
      hn = ["value", "label", "description", "labelTag"],
      vn = function (e, t, n) {
        if (!e) return !1;
        var r = e.toLowerCase().indexOf(t);
        return n ? 0 === r : r > -1;
      },
      mn = function (e, t, n) {
        var r = t.toLowerCase(),
          i = e.option,
          a = ["tags"];
        return (
          n || a.push("filteringTags"),
          hn.some(function (e) {
            return vn(i[e], r, n);
          }) ||
            a.some(function (e) {
              var t;
              return null === (t = i[e]) || void 0 === t
                ? void 0
                : t.some(function (e) {
                    return vn(e, r, n);
                  });
            })
        );
      },
      gn = function (e, t, n) {
        if ((void 0 === n && (n = !1), "" === t)) return e;
        var r = null,
          i = !1;
        return e.reduce(function (e, a) {
          return "parent" === a.type
            ? ((i = !1), (r = a), mn(a, t, n) && ((i = !0), e.push(r)), e)
            : ("child" !== a.type && ((r = null), (i = !1)),
              i
                ? e.push(a)
                : mn(a, t, n) && (r && (e.push(r), (r = null)), e.push(a)),
              e);
        }, []);
      },
      _n = function (e) {
        return !!e && !e.disabled && "parent" !== e.type;
      },
      wn = function (e) {
        return !!e && !e.disabled;
      },
      bn = function (e) {
        return !!e && "options" in e;
      },
      yn = "awsui_root_1afi9_1ehx9_93",
      xn = "awsui_hidden_1afi9_1ehx9_103",
      kn = "awsui_no-items_1afi9_1ehx9_106",
      En = {
        link: "awsui_link_4c84z_1jc1o_93",
        "variant-secondary": "awsui_variant-secondary_4c84z_1jc1o_138",
        "variant-primary": "awsui_variant-primary_4c84z_1jc1o_173",
        "variant-info": "awsui_variant-info_4c84z_1jc1o_208",
        "variant-value-large": "awsui_variant-value-large_4c84z_1jc1o_243",
        "variant-top-navigation":
          "awsui_variant-top-navigation_4c84z_1jc1o_277",
        "variant-recovery": "awsui_variant-recovery_4c84z_1jc1o_312",
        button: "awsui_button_4c84z_1jc1o_347",
        "color-inverted": "awsui_color-inverted_4c84z_1jc1o_382",
        "font-size-body-s": "awsui_font-size-body-s_4c84z_1jc1o_401",
        "font-size-body-m": "awsui_font-size-body-m_4c84z_1jc1o_406",
        "font-size-heading-xs": "awsui_font-size-heading-xs_4c84z_1jc1o_410",
        "font-size-heading-s": "awsui_font-size-heading-s_4c84z_1jc1o_414",
        "font-size-heading-m": "awsui_font-size-heading-m_4c84z_1jc1o_419",
        "font-size-heading-l": "awsui_font-size-heading-l_4c84z_1jc1o_424",
        "font-size-heading-xl": "awsui_font-size-heading-xl_4c84z_1jc1o_429",
        "font-size-display-l": "awsui_font-size-display-l_4c84z_1jc1o_434",
        icon: "awsui_icon_4c84z_1jc1o_440",
      };
    !(function (e) {
      (e[(e.pageUp = 33)] = "pageUp"),
        (e[(e.pageDown = 34)] = "pageDown"),
        (e[(e.end = 35)] = "end"),
        (e[(e.home = 36)] = "home"),
        (e[(e.backspace = 8)] = "backspace"),
        (e[(e.space = 32)] = "space"),
        (e[(e.down = 40)] = "down"),
        (e[(e.left = 37)] = "left"),
        (e[(e.right = 39)] = "right"),
        (e[(e.up = 38)] = "up"),
        (e[(e.escape = 27)] = "escape"),
        (e[(e.enter = 13)] = "enter"),
        (e[(e.tab = 9)] = "tab"),
        (e[(e.shift = 16)] = "shift"),
        (e[(e.control = 17)] = "control"),
        (e[(e.alt = 18)] = "alt"),
        (e[(e.meta = 91)] = "meta");
    })(fn || (fn = {}));
    var Sn = tt({
      initialState: !1,
      factory: function (e) {
        var t = function () {
            return e(!1);
          },
          n = function (t) {
            [fn.shift, fn.alt, fn.control, fn.meta].indexOf(t.keyCode) > -1 ||
              e(!0);
          };
        return (
          document.addEventListener("mousedown", t),
          document.addEventListener("keydown", n),
          function () {
            document.removeEventListener("mousedown", t),
              document.removeEventListener("keydown", n);
          }
        );
      },
    });
    function Cn() {
      var e = Sn();
      return e ? { "data-awsui-focus-visible": e } : {};
    }
    function zn(t, n) {
      (0, e.useImperativeHandle)(
        t,
        function () {
          return {
            focus: function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              null === (e = n.current) || void 0 === e || e.focus.apply(e, t);
            },
          };
        },
        [n]
      );
    }
    var Rn = ["javascript:void(0)", "javascript:void(0);", "javascript:;"];
    var Pn = e.forwardRef(function (t, n) {
      var r = t.variant,
        i = void 0 === r ? "secondary" : r,
        a = t.fontSize,
        o = void 0 === a ? "body-m" : a,
        l = t.color,
        u = void 0 === l ? "normal" : l,
        s = t.external,
        f = void 0 !== s && s,
        p = t.target,
        h = t.href,
        m = t.rel,
        _ = t.ariaLabel,
        w = t.externalIconAriaLabel,
        b = t.onFollow,
        y = t.children,
        x = t.__internalRootRef,
        k = void 0 === x ? null : x,
        E = d(t, [
          "variant",
          "fontSize",
          "color",
          "external",
          "target",
          "href",
          "rel",
          "ariaLabel",
          "externalIconAriaLabel",
          "onFollow",
          "children",
          "__internalRootRef",
        ]);
      !(function (e, t) {
        if (t && -1 === Rn.indexOf(t.toLowerCase())) {
          var n;
          try {
            n = new URL(t);
          } catch (r) {
            return;
          }
          if ("javascript:" === n.protocol)
            throw (
              ('A javascript: URL was blocked as a security precaution. The URL was "'.concat(
                t,
                '".'
              ),
              new Error(
                "A javascript: URL was blocked as a security precaution."
              ))
            );
        }
      })(0, h);
      var S = !h,
        C = ["top-navigation", "link", "recovery"].indexOf(i) > -1,
        z = Cn(),
        R = v(E),
        P = null !== p && void 0 !== p ? p : f ? "_blank" : void 0,
        N =
          null !== m && void 0 !== m
            ? m
            : "_blank" === P
            ? "noopener noreferrer"
            : void 0,
        O = function (e) {
          Le(b, { href: h, external: f, target: P }, e);
        },
        L = (0, e.useRef)(null),
        T = it(L);
      zn(n, L);
      var M = S && T && !C,
        j = c(c(c({}, z), R), {
          ref: ve(L, k),
          className: g(
            En.link,
            R.className,
            M ? En.button : null,
            En[Nn(i)],
            En[On(i, o)],
            En[Ln(i, u)]
          ),
          "aria-label": _,
        }),
        I = e.createElement(
          e.Fragment,
          null,
          y,
          f &&
            e.createElement(
              e.Fragment,
              null,
              " ",
              e.createElement(
                "span",
                {
                  className: En.icon,
                  "aria-label": w,
                  role: w ? "img" : void 0,
                },
                e.createElement(Bt, { name: "external", size: "inherit" })
              )
            )
        );
      return S
        ? e.createElement(
            "a",
            c({}, j, {
              role: "button",
              tabIndex: 0,
              onKeyDown: function (e) {
                e.keyCode === fn.space && e.preventDefault();
              },
              onKeyUp: function (e) {
                (e.keyCode !== fn.space && e.keyCode !== fn.enter) || O(e);
              },
              onClick: function (e) {
                O(e);
              },
            }),
            I
          )
        : e.createElement(
            "a",
            c({}, j, {
              target: P,
              rel: N,
              href: h,
              onClick: function (e) {
                (function (e) {
                  return (
                    e &&
                    (!(void 0 !== e.button) || 0 === e.button) &&
                    !e.ctrlKey &&
                    !e.altKey &&
                    !e.shiftKey &&
                    !e.metaKey
                  );
                })(e) && O(e);
              },
            }),
            I
          );
    });
    function Nn(e) {
      return "variant-".concat(e.replace(/^awsui-/, ""));
    }
    function On(e, t) {
      switch (e) {
        case "info":
          return "font-size-body-s";
        case "awsui-value-large":
          return "font-size-display-l";
        default:
          return "font-size-".concat(t);
      }
    }
    function Ln(e, t) {
      return "color-".concat("info" === e ? "normal" : t);
    }
    var Tn = Pn,
      Mn = {
        "icon-shake": "awsui_icon-shake_1cbgc_1ugus_97",
        "awsui-motion-shake-horizontally":
          "awsui_awsui-motion-shake-horizontally_1cbgc_1ugus_1",
        "container-fade-in": "awsui_container-fade-in_1cbgc_1ugus_125",
        "awsui-motion-fade-in-0": "awsui_awsui-motion-fade-in-0_1cbgc_1ugus_1",
        root: "awsui_root_1cbgc_1ugus_147",
        "status-error": "awsui_status-error_1cbgc_1ugus_154",
        "status-warning": "awsui_status-warning_1cbgc_1ugus_157",
        "status-success": "awsui_status-success_1cbgc_1ugus_160",
        "status-info": "awsui_status-info_1cbgc_1ugus_163",
        "status-stopped": "awsui_status-stopped_1cbgc_1ugus_166",
        "status-pending": "awsui_status-pending_1cbgc_1ugus_169",
        "status-in-progress": "awsui_status-in-progress_1cbgc_1ugus_172",
        "status-loading": "awsui_status-loading_1cbgc_1ugus_175",
        "color-override-red": "awsui_color-override-red_1cbgc_1ugus_178",
        "color-override-grey": "awsui_color-override-grey_1cbgc_1ugus_181",
        "color-override-blue": "awsui_color-override-blue_1cbgc_1ugus_184",
        "color-override-green": "awsui_color-override-green_1cbgc_1ugus_187",
        icon: "awsui_icon_1cbgc_1ugus_97",
        container: "awsui_container_1cbgc_1ugus_125",
        "overflow-ellipsis": "awsui_overflow-ellipsis_1cbgc_1ugus_201",
      },
      jn = {
        root: "awsui_root_1612d_ormt8_127",
        "spinner-rotator": "awsui_spinner-rotator_1612d_ormt8_1",
        "size-normal": "awsui_size-normal_1612d_ormt8_135",
        "size-big": "awsui_size-big_1612d_ormt8_143",
        "size-large": "awsui_size-large_1612d_ormt8_151",
        "variant-normal": "awsui_variant-normal_1612d_ormt8_159",
        "variant-disabled": "awsui_variant-disabled_1612d_ormt8_162",
        "variant-inverted": "awsui_variant-inverted_1612d_ormt8_165",
        circle: "awsui_circle_1612d_ormt8_169",
        "circle-left": "awsui_circle-left_1612d_ormt8_193",
        "spinner-line-left": "awsui_spinner-line-left_1612d_ormt8_1",
        "circle-right": "awsui_circle-right_1612d_ormt8_198",
        "spinner-line-right": "awsui_spinner-line-right_1612d_ormt8_1",
      };
    function In(t) {
      var n = t.size,
        r = void 0 === n ? "normal" : n,
        i = t.variant,
        a = void 0 === i ? "normal" : i,
        o = t.__internalRootRef,
        l = v(d(t, ["size", "variant", "__internalRootRef"]));
      return e.createElement(
        "span",
        c({}, l, {
          className: g(
            l.className,
            jn.root,
            jn["size-".concat(r)],
            jn["variant-".concat(a)]
          ),
          ref: o,
        }),
        e.createElement("span", { className: g(jn.circle, jn["circle-left"]) }),
        e.createElement("span", { className: g(jn.circle, jn["circle-right"]) })
      );
    }
    function Bn(t) {
      var n,
        r = t.type,
        i = t.children,
        a = t.iconAriaLabel,
        o = t.colorOverride,
        l = t.wrapText,
        u = void 0 === l || l,
        s = t.__animate,
        f = void 0 !== s && s,
        p = t.__internalRootRef,
        h = t.__size,
        m = void 0 === h ? "normal" : h,
        _ = v(
          d(t, [
            "type",
            "children",
            "iconAriaLabel",
            "colorOverride",
            "wrapText",
            "__animate",
            "__internalRootRef",
            "__size",
          ])
        );
      return e.createElement(
        "span",
        c({}, _, {
          className: g(
            Mn.root,
            Mn["status-".concat(r)],
            ((n = {}), (n[Mn["color-override-".concat(o)]] = o), n),
            _.className
          ),
          ref: p,
        }),
        e.createElement(
          "span",
          {
            className: g(
              Mn.container,
              !1 === u && Mn["overflow-ellipsis"],
              f && Mn["container-fade-in"]
            ),
          },
          e.createElement(
            "span",
            {
              className: g(Mn.icon, f && Mn["icon-shake"]),
              "aria-label": a,
              role: a ? "img" : void 0,
            },
            (function (t) {
              return {
                error: e.createElement(Bt, {
                  name: "status-negative",
                  size: t,
                }),
                warning: e.createElement(Bt, {
                  name: "status-warning",
                  size: t,
                }),
                success: e.createElement(Bt, {
                  name: "status-positive",
                  size: t,
                }),
                info: e.createElement(Bt, { name: "status-info", size: t }),
                stopped: e.createElement(Bt, {
                  name: "status-stopped",
                  size: t,
                }),
                pending: e.createElement(Bt, {
                  name: "status-pending",
                  size: t,
                }),
                "in-progress": e.createElement(Bt, {
                  name: "status-in-progress",
                  size: t,
                }),
                loading: e.createElement(In, null),
              };
            })(m)[r]
          ),
          i
        )
      );
    }
    var Dn = function (t) {
        var n = (0, e.useRef)();
        return (
          (0, e.useEffect)(function () {
            n.current = t;
          }),
          n.current
        );
      },
      Fn = "awsui_root_vrgzu_foq7p_93",
      Hn = "awsui_recovery_vrgzu_foq7p_105";
    var An = function (t) {
        var n = t.children;
        return e.createElement("div", { className: Fn }, n);
      },
      Wn = function (t) {
        var n,
          r = t.content,
          i = t.hasItems,
          a = void 0 === i || i;
        return e.createElement(
          "div",
          {
            className: g(yn, ((n = {}), (n[xn] = null === r), (n[kn] = !a), n)),
            "aria-live": "polite",
            "aria-atomic": "true",
          },
          r && e.createElement(An, null, r)
        );
      },
      Un = new WeakMap();
    function Vn(e, t, n) {
      var r = (function (e) {
          var t = new Map();
          return {
            flatOptions: e.reduce(function (e, n) {
              if ("options" in n) {
                var r = n.options,
                  i = d(n, ["options"]),
                  a = { type: "parent", option: n },
                  o = r.every(function (e) {
                    return e.disabled;
                  });
                (n.disabled || o) && (a.disabled = !0),
                  e.push(a),
                  r.forEach(function (n) {
                    var r = { type: "child", option: n };
                    (i.disabled || n.disabled) && (r.disabled = !0),
                      e.push(r),
                      t.set(r, a);
                  });
              } else {
                var l = { option: n };
                n.disabled && (l.disabled = !0), e.push(l);
              }
              return e;
            }, []),
            parentMap: t,
          };
        })(e),
        i = r.flatOptions,
        a = r.parentMap,
        o = "auto" !== t ? i : gn(i, n);
      return (
        (function (e, t) {
          var n = 1,
            r = 0,
            i = 1,
            a = null;
          e.forEach(function (e) {
            if ("type" in e) {
              if ("child" === e.type) {
                var o = t(e);
                o && o !== a
                  ? ((a = o),
                    (i = 1),
                    Un.set(e, {
                      throughIndex: n++,
                      groupIndex: ++r,
                      inGroupIndex: i++,
                    }))
                  : Un.set(e, {
                      throughIndex: n++,
                      groupIndex: r,
                      inGroupIndex: i++,
                    });
              }
            } else Un.set(e, { throughIndex: n++ });
          });
        })(o, a.get.bind(a)),
        { filteredOptions: o, parentMap: a }
      );
    }
    var qn = "awsui_dropdown-content-wrapper_qwoo0_1ed3x_93",
      Kn = "awsui_refresh_qwoo0_1ed3x_114",
      $n = "awsui_root_qwoo0_1ed3x_143",
      Qn = "awsui_interior_qwoo0_1ed3x_155",
      Gn = "awsui_dropdown_qwoo0_1ed3x_93",
      Xn = "awsui_use-portal_qwoo0_1ed3x_166",
      Yn = "awsui_dropdown-drop-up_qwoo0_1ed3x_211",
      Zn = "awsui_with-limited-width_qwoo0_1ed3x_215",
      Jn = "awsui_dropdown-drop-left_qwoo0_1ed3x_218",
      er = "awsui_dropdown-drop-right_qwoo0_1ed3x_221",
      tr = "awsui_occupy-entire-width_qwoo0_1ed3x_224",
      nr = "awsui_hide-upper-border_qwoo0_1ed3x_227",
      rr = "awsui_open_qwoo0_1ed3x_234",
      ir = "awsui_nowrap_qwoo0_1ed3x_243",
      ar = "awsui_is-empty_qwoo0_1ed3x_247",
      or = "awsui_dropdown-content_qwoo0_1ed3x_93",
      lr = "awsui_ie11-wrapper_qwoo0_1ed3x_257",
      ur = "awsui_stretch-trigger-height_qwoo0_1ed3x_261",
      sr = function (e, t, n, r, i, a, o, l) {
        void 0 === i && (i = !1),
          void 0 === a && (a = !1),
          void 0 === o && (o = !1);
        var u = (function (e, t, n, r, i, a) {
            void 0 === r && (r = !1), void 0 === i && (i = !1);
            var o = i ? 0 : a ? 19 : 50,
              l = r ? 0 : a ? 20 : 50,
              u = e.getBoundingClientRect(),
              s = u.bottom,
              c = u.left,
              d = u.right;
            return n.reduce(
              function (t, n) {
                var r = t.above,
                  i = t.below,
                  a = t.left,
                  u = t.right,
                  f = s - n.top,
                  p = f - e.offsetHeight - o,
                  h = n.height - f - o,
                  v = d - n.left - l,
                  m = n.left + n.width - c - l;
                return {
                  above: Math.min(r, p),
                  below: Math.min(i, h),
                  left: Math.min(a, v),
                  right: Math.min(u, m),
                };
              },
              {
                above: Number.MAX_VALUE,
                below: Number.MAX_VALUE,
                left: Number.MAX_VALUE,
                right: Number.MAX_VALUE,
              }
            );
          })(e, 0, n, a, o, l),
          s = e.getBoundingClientRect().width;
        r = r ? Math.min(s, r) : s;
        var c,
          d = t.getBoundingClientRect().width,
          f = Math.max(d, r),
          p = null,
          h = f;
        if (
          (f <= u.right
            ? (c = !1)
            : f <= u.left
            ? (c = !0)
            : ((c = u.left > u.right), (h = Math.max(u.left, u.right, r))),
          i)
        ) {
          var v = (f - s) / 2,
            m = u.left - s,
            g = u.right - s;
          m >= v && g >= v && (p = -v);
        }
        var _ = u.below < t.offsetHeight && u.above > u.below,
          w = _ ? u.above : u.below,
          b = 31 * Math.floor(w / 31) + 16;
        return {
          dropUp: _,
          dropLeft: c,
          left: null === p ? "auto" : "".concat(p, "px"),
          height: "".concat(b, "px"),
          width: "".concat(h, "px"),
        };
      },
      cr = function (e, t, n, r) {
        var i,
          a = (function (e, t, n, r) {
            var i = r ? 19 : 50,
              a = r ? 20 : 50,
              o = e.getBoundingClientRect(),
              l = o.bottom,
              u = o.top,
              s = o.left,
              c = o.right;
            return n.reduce(
              function (e, t) {
                var n = e.above,
                  r = e.below,
                  o = e.left,
                  d = e.right,
                  f = l - t.top - i,
                  p = t.height - u + t.top - i,
                  h = s - t.left - a,
                  v = t.left + t.width - c - a;
                return {
                  above: Math.min(n, f),
                  below: Math.min(r, p),
                  left: Math.min(o, h),
                  right: Math.min(d, v),
                };
              },
              {
                above: Number.MAX_VALUE,
                below: Number.MAX_VALUE,
                left: Number.MAX_VALUE,
                right: Number.MAX_VALUE,
              }
            );
          })(e, 0, n, r),
          o = e.getBoundingClientRect(),
          l = o.bottom,
          u = o.top,
          s = o.width,
          c = (function (e) {
            var t = bt(e).map(function (e) {
              var t = e.getBoundingClientRect();
              return {
                height: t.height,
                width: t.width,
                top: t.top,
                left: t.left,
              };
            });
            return t.shift();
          })(e),
          d = c.top,
          f = c.height,
          p = t.getBoundingClientRect().width,
          h = u - d;
        p <= a.right
          ? (i = !1)
          : p <= a.left
          ? (i = !0)
          : ((i = a.left > a.right), (p = Math.max(a.left, a.right)));
        var v = i ? 0 - p : s,
          m = a.below < t.offsetHeight && a.above > a.below,
          g = m ? d + f - l : 0,
          _ = m ? a.above : a.below,
          w = 31 * Math.floor(_ / 31) + 16;
        return {
          dropUp: m,
          dropLeft: i,
          height: "".concat(w, "px"),
          width: "".concat(p, "px"),
          top: "".concat(h, "px"),
          bottom: "".concat(g, "px"),
          left: "".concat(v, "px"),
        };
      };
    function dr(t) {
      var n,
        r = (function (t) {
          var n = (0, e.useState)("light"),
            r = n[0],
            i = n[1];
          return (
            rt(t, function (e) {
              var t = Xe(e, function (e) {
                return (
                  e.classList.contains("awsui-polaris-dark-mode") ||
                  e.classList.contains("awsui-dark-mode")
                );
              });
              i(t ? "dark" : "light");
            }),
            r
          );
        })(t),
        i = (function (t) {
          var n = (0, e.useState)("comfortable"),
            r = n[0],
            i = n[1];
          return (
            rt(t, function (e) {
              var t = Xe(e, function (e) {
                return (
                  e.classList.contains("awsui-polaris-compact-mode") ||
                  e.classList.contains("awsui-compact-mode")
                );
              });
              i(t ? "compact" : "comfortable");
            }),
            r
          );
        })(t),
        a = (function (t) {
          var n = /awsui-context-([\w-]+)/,
            r = (0, e.useState)(""),
            i = r[0],
            a = r[1];
          return (
            rt(t, function (e) {
              var t = Xe(e, function (e) {
                return !!e.className.match(n);
              });
              a(t ? t.className.match(n)[1] : "");
            }),
            i
          );
        })(t),
        o = it(t);
      return g(
        (((n = {
          "awsui-polaris-dark-mode awsui-dark-mode": "dark" === r,
          "awsui-polaris-compact-mode awsui-compact-mode": "compact" === i,
          "awsui-visual-refresh": o,
        })["awsui-context-".concat(a)] = a),
        n)
      );
    }
    var fr = e.createContext({ position: "bottom-right" });
    function pr(t) {
      var n = t.children,
        r = t.position,
        i = void 0 === r ? "bottom-right" : r;
      return e.createElement(fr.Provider, { value: { position: i } }, n);
    }
    var hr = function (n) {
        var r = n.children,
          i = n.renderWithPortal,
          a = void 0 !== i && i,
          o = n.id,
          l = n.open;
        return a
          ? l
            ? (0, t.createPortal)(
                e.createElement("div", { id: o }, r),
                document.body
              )
            : null
          : e.createElement(e.Fragment, null, r);
      },
      vr = function (t) {
        var n,
          r = t.state,
          i = t.transitionRef,
          a = t.dropdownClasses,
          o = t.stretchWidth,
          l = t.interior,
          u = t.hasContent,
          s = t.isRefresh,
          c = t.dropdownRef,
          d = t.verticalContainerRef,
          f = t.expandToViewport,
          p = t.header,
          h = t.children,
          v = t.footer,
          m = t.position,
          _ = t.open,
          w = t.onMouseDown,
          b = ve(c, i);
        return e.createElement(
          "div",
          {
            className: g(
              Gn,
              a,
              ((n = {}),
              (n[rr] = _),
              (n[Zn] = !o),
              (n[nr] = o),
              (n[Qn] = l),
              (n[ar] = !p && !u),
              (n[Kn] = s),
              (n[Xn] = f && !l),
              n)
            ),
            ref: b,
            "data-open": _,
            "data-animating": "exited" !== r,
            onMouseDown: w,
          },
          e.createElement(
            "div",
            { className: g(qn, s && Kn) },
            e.createElement(
              "div",
              { className: lr },
              e.createElement(
                "div",
                { ref: d, className: or },
                e.createElement(pr, { position: m }, p, h, v)
              )
            )
          )
        );
      },
      mr = function (e) {
        return void 0 !== e.bottom;
      },
      gr = function (t) {
        var n = t.children,
          r = t.trigger,
          i = t.open,
          a = t.onDropdownClose,
          o = t.onMouseDown,
          l = t.header,
          u = t.footer,
          s = t.dropdownId,
          c = t.stretchTriggerHeight,
          d = void 0 !== c && c,
          p = t.stretchWidth,
          h = void 0 === p || p,
          v = t.stretchHeight,
          m = void 0 !== v && v,
          _ = t.stretchToTriggerWidth,
          w = void 0 === _ || _,
          b = t.expandToViewport,
          y = void 0 !== b && b,
          x = t.preferCenter,
          k = void 0 !== x && x,
          E = t.interior,
          S = void 0 !== E && E,
          C = t.minWidth,
          z = t.hasContent,
          R = void 0 === z || z,
          P = t.scrollable,
          N = void 0 === P || P,
          O = (0, e.useRef)(null),
          L = (0, e.useRef)(null),
          T = (0, e.useRef)(null),
          M = (0, e.useRef)(null),
          j = it(O),
          I = dr(O),
          B = (0, e.useState)("bottom-right"),
          D = B[0],
          F = B[1],
          H = ft(),
          A = function (e, t, n, r) {
            var i = !S && h;
            if (
              ((r.style.maxHeight = h
                ? e.height
                : "".concat(parseInt(e.height) + 1, "px")),
              i && !y ? w && n.classList.add(tr) : (n.style.width = e.width),
              e.dropUp && !S
                ? (n.classList.add(Yn), y || (n.style.bottom = "100%"))
                : n.classList.remove(Yn),
              n.classList.add(e.dropLeft ? Jn : er),
              e.left && "auto" !== e.left && (n.style.left = e.left),
              y && !S)
            )
              return (
                (n.style.position = "fixed"),
                e.dropUp
                  ? (n.style.bottom = "calc(100% - ".concat(t.top, "px)"))
                  : (n.style.top = "".concat(t.bottom, "px")),
                e.dropLeft
                  ? (n.style.left = "calc("
                      .concat(t.right, "px - ")
                      .concat(e.width, ")"))
                  : (n.style.left = "".concat(t.left, "px")),
                void (M.current = e)
              );
            S &&
              mr(e) &&
              (e.dropUp ? (n.style.bottom = e.bottom) : (n.style.top = e.top),
              (n.style.left = e.left)),
              e.dropUp && e.dropLeft
                ? F("top-left")
                : e.dropUp
                ? F("top-right")
                : e.dropLeft
                ? F("bottom-left")
                : F("bottom-right");
          };
        return (
          (0, e.useLayoutEffect)(
            function () {
              var e = function () {
                i &&
                  L.current &&
                  O.current &&
                  T.current &&
                  (N && L.current.classList.add(ir),
                  A.apply(
                    void 0,
                    f(
                      f(
                        [],
                        (function (e, t, n, r, i, a, o, l, u, s) {
                          (n.style.maxHeight = ""),
                            (e.style.width = ""),
                            (e.style.top = ""),
                            (e.style.bottom = ""),
                            (e.style.left = ""),
                            e.classList.remove(Jn),
                            e.classList.remove(er),
                            e.classList.remove(Yn);
                          var c = yt(e, r, i, l);
                          return [
                            r ? cr(t, e, c, u) : sr(t, e, c, s, a, o, l, u),
                            t.getBoundingClientRect(),
                          ];
                        })(
                          L.current,
                          O.current,
                          T.current,
                          S,
                          y,
                          k,
                          h,
                          m,
                          H,
                          C
                        ),
                        !1
                      ),
                      [L.current, T.current],
                      !1
                    )
                  ),
                  N && L.current.classList.remove(ir));
              };
              if ((e(), i)) {
                window.addEventListener("scroll", e);
                var t = setTimeout(function () {
                  window.removeEventListener("scroll", e);
                }, 500);
                return function () {
                  clearTimeout(t), window.removeEventListener("scroll", e);
                };
              }
            },
            [i, L, O, T, S, h, H]
          ),
          (0, e.useEffect)(
            function () {
              if (i) {
                var e = function (e) {
                    var t;
                    (null === (t = L.current) || void 0 === t
                      ? void 0
                      : t.contains(e.target)) || Oe(a);
                  },
                  t = setTimeout(function () {
                    window.addEventListener("click", e);
                  }, 0);
                return function () {
                  clearTimeout(t), window.removeEventListener("click", e);
                };
              }
            },
            [i, a]
          ),
          (0, e.useLayoutEffect)(
            function () {
              if (y && i) {
                var e = function () {
                  if (O.current && L.current && T.current) {
                    var e = O.current.getBoundingClientRect(),
                      t = L.current;
                    M.current &&
                      (M.current.dropUp
                        ? (L.current.style.bottom = "calc(100% - ".concat(
                            e.top,
                            "px)"
                          ))
                        : (t.style.top = "".concat(e.bottom, "px")),
                      M.current.dropLeft
                        ? (t.style.left = "calc("
                            .concat(e.right, "px - ")
                            .concat(M.current.width, ")"))
                        : (t.style.left = "".concat(e.left, "px")));
                  }
                };
                return (
                  e(),
                  window.addEventListener("scroll", e, !0),
                  window.addEventListener("resize", e, !0),
                  function () {
                    window.removeEventListener("scroll", e, !0),
                      window.removeEventListener("resize", e, !0);
                  }
                );
              }
            },
            [i, y]
          ),
          e.createElement(
            "div",
            { className: g($n, S && Qn, d && ur) },
            e.createElement("div", { className: g(d && ur), ref: O }, r),
            e.createElement(
              hr,
              { renderWithPortal: y && !S, id: s, open: i },
              e.createElement(
                ot,
                { in: null !== i && void 0 !== i && i, exit: !1 },
                function (t, r) {
                  return e.createElement(
                    vr,
                    {
                      state: t,
                      transitionRef: r,
                      dropdownClasses: I,
                      open: i,
                      stretchWidth: h,
                      interior: S,
                      header: l,
                      hasContent: R,
                      expandToViewport: y,
                      footer: u,
                      onMouseDown: o,
                      isRefresh: j,
                      dropdownRef: L,
                      verticalContainerRef: T,
                      position: D,
                    },
                    n
                  );
                }
              )
            )
          )
        );
      };
    var _r = function (e, t) {
        if (!(t < 0)) return "".concat(e, "-option-").concat(t);
      },
      wr = function (e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (r === t || r.value === t.value) return n;
        }
        return -1;
      };
    function br(t) {
      var n = t.selectedOptions,
        r = t.updateSelectedOption,
        i = t.options,
        a = t.filteringType,
        o = t.onBlur,
        l = t.onFocus,
        u = t.externalRef,
        s = t.keepOpen,
        c = t.fireLoadItems,
        d = t.setFilteringValue,
        f = t.useInteractiveGroups,
        p = void 0 !== f && f,
        h = p ? wn : _n,
        v = function (e) {
          return !!e && (p || "parent" !== e.type);
        },
        m = (function (t) {
          var n = t.isHighlightable;
          return function (t) {
            var r = (0, e.useState)(-1),
              i = r[0],
              a = r[1],
              o = t[i] && n(t[i]) ? t[i] : void 0,
              l = function (e, r) {
                void 0 === r && (r = i);
                var o = r;
                do {
                  o += e;
                } while (t[o] && !n(t[o]));
                t[o] && a(o);
              },
              u = (0, e.useCallback)(
                function (e) {
                  var n = t.indexOf(e);
                  a(n);
                },
                [t]
              );
            return {
              setHighlightedIndex: a,
              highlightedIndex: i,
              highlightedOption: o,
              moveHighlight: function (e) {
                return l(e);
              },
              resetHighlight: function () {
                return a(-1);
              },
              goHome: function () {
                return l(1, -1);
              },
              goEnd: function () {
                return l(-1, t.length);
              },
              highlightOption: u,
            };
          };
        })({ isHighlightable: v }),
        g = (0, e.useRef)(null),
        _ = (0, e.useRef)(null),
        w = (0, e.useRef)(null),
        b = "none" !== a,
        y = b ? g : w,
        x = (0, e.useRef)(!1),
        k = (0, e.useRef)(!1),
        E = (function (e, t) {
          return (t || []).map(function (t) {
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              if ("parent" !== i.type && i.option.value === t.value) return i;
            }
            return { option: t };
          });
        })(i, n),
        S = n.reduce(function (e, t) {
          return t.value && e.add(t.value), e;
        }, new Set()),
        C = m(i),
        z = C.highlightedOption,
        R = C.highlightedIndex,
        P = C.moveHighlight,
        N = C.resetHighlight,
        O = C.setHighlightedIndex,
        L = C.highlightOption,
        T = C.goHome,
        M = C.goEnd,
        j = (function (t) {
          var n = t.onOpen,
            r = t.onClose,
            i = (0, e.useState)(!1),
            a = i[0],
            o = i[1],
            l = function () {
              a || (o(!0), null === n || void 0 === n || n());
            },
            u = function () {
              a && (o(!1), null === r || void 0 === r || r());
            };
          return {
            isOpen: a,
            openDropdown: l,
            closeDropdown: u,
            toggleDropdown: function () {
              a ? u() : l();
            },
          };
        })({
          onOpen: function () {
            return c("");
          },
          onClose: function () {
            N(), d("");
          },
        }),
        I = j.isOpen,
        B = j.openDropdown,
        D = j.closeDropdown,
        F = j.toggleDropdown,
        H = (0, e.useRef)(!1),
        A = function () {
          H.current || (Le(l, {}), (H.current = !0));
        },
        W = function (e) {
          var t = e.detail.relatedTarget,
            n = !!t && Je(_.current, t),
            r = !!t && (Je(w.current, t) || Je(g.current, t)),
            i = n || r,
            a = H.current && !i;
          (n || a) && D(), a && (Le(o, {}), (H.current = !1));
        },
        U = E.length > 0,
        V = (function (t) {
          var n = t.hasSelectedOption;
          return {
            selectedOptionId: (0, e.useMemo)(
              function () {
                return n ? Tt() : void 0;
              },
              [n]
            ),
            menuId: Mt("option-list"),
          };
        })({ hasSelectedOption: U }),
        q = V.selectedOptionId,
        K = V.menuId,
        $ = _r(K, R),
        Q = function (e) {
          var t;
          k.current = !1;
          var n = e || z;
          n &&
            h(n) &&
            (r(n.option),
            s || (null === (t = _.current) || void 0 === t || t.focus(), D()));
        },
        G = (function (t) {
          var n = t.moveHighlight,
            r = t.selectOption,
            i = t.goHome,
            a = t.goEnd,
            o = t.closeDropdown,
            l = t.isKeyboard,
            u = t.isSelectingUsingSpace,
            s = t.preventNativeSpace,
            c = void 0 !== s && s;
          return (0, e.useCallback)(
            function (e) {
              switch (((l.current = !0), e.detail.keyCode)) {
                case fn.up:
                  e.preventDefault(), n(-1);
                  break;
                case fn.down:
                  e.preventDefault(), n(1);
                  break;
                case 36:
                  i();
                  break;
                case 35:
                  a();
                  break;
                case fn.escape:
                  o();
                  break;
                case fn.enter:
                  e.preventDefault(), r();
                  break;
                case fn.space:
                  c && (e.preventDefault(), r(), (u.current = !0));
              }
            },
            [n, r, i, a, o, l, u, c]
          );
        })({
          moveHighlight: P,
          selectOption: Q,
          goHome: T,
          goEnd: M,
          closeDropdown: function () {
            var e;
            null === (e = _.current) || void 0 === e || e.focus(), D();
          },
          isKeyboard: x,
          isSelectingUsingSpace: k,
          preventNativeSpace: !b,
        }),
        X = (function (t) {
          var n = t.openDropdown,
            r = t.goHome,
            i = t.isKeyboard;
          return (0, e.useCallback)(
            function (e) {
              switch (((i.current = !0), e.detail.keyCode)) {
                case fn.up:
                case fn.down:
                  e.preventDefault(), r(), n();
                  break;
                case fn.space:
                  e.preventDefault(), n();
              }
            },
            [n, r, i]
          );
        })({ openDropdown: B, goHome: T, isKeyboard: x }),
        Y = function (e) {
          var t = e.options.filter(function (e) {
              return !!e.value && S.has(e.value);
            }).length,
            n = t > 0,
            r = t === e.options.length;
          return { selected: n && r, indeterminate: n && !r };
        },
        Z = Dn(I);
      (0, e.useEffect)(
        function () {
          I && !Z && U && O(i.indexOf(E[0]));
        },
        [I, E, U, O, i, Z]
      ),
        (0, e.useEffect)(
          function () {
            var e;
            I &&
              (null === (e = y.current) ||
                void 0 === e ||
                e.focus({ preventScroll: !0 }));
          },
          [I, y]
        ),
        zn(u, _);
      var J = !!z && bn(z.option) && Y(z.option).selected,
        ee = !!z && (E.indexOf(z) > -1 || J);
      return {
        isOpen: I,
        highlightedOption: z,
        highlightedIndex: R,
        getTriggerProps: function (e) {
          void 0 === e && (e = !1);
          var t = { ref: _, onFocus: A, onBlur: W };
          return (
            e ||
              ((t.onMouseDown = function (e) {
                var t;
                e.preventDefault(),
                  I && (null === (t = _.current) || void 0 === t || t.focus()),
                  F();
              }),
              (t.onKeyDown = X)),
            U && (t.ariaLabelledby = q),
            t
          );
        },
        getMenuProps: function () {
          var e = {
            id: K,
            ref: w,
            open: I,
            onFocus: A,
            onBlur: W,
            onMouseUp: function (e) {
              (x.current = !1), e > -1 && Q(i[e]);
            },
            onMouseMove: function (e) {
              (x.current = !1), e > -1 && O(e);
            },
          };
          return (
            b ||
              ((e.onKeyDown = G),
              (e.onBlur = W),
              (e.onFocus = A),
              (e.nativeAttributes = { "aria-activedescendant": $ })),
            e
          );
        },
        getFilterProps: function () {
          var e;
          return b
            ? {
                ref: g,
                onKeyDown: G,
                __onBlurWithDetail: W,
                onFocus: A,
                onChange: function (e) {
                  d(e.detail.value), N();
                },
                __onDelayedInput: function (e) {
                  c(e.detail.value);
                },
                __nativeAttributes:
                  ((e = { "aria-activedescendant": $ }),
                  (e["aria-owns"] = K),
                  e),
              }
            : {};
        },
        getOptionProps: function (e, t) {
          var n,
            r,
            a = e === z,
            o = bn(e.option) ? Y(e.option) : void 0,
            l =
              E.indexOf(e) > -1 ||
              !!(null === o || void 0 === o ? void 0 : o.selected),
            u = null === (r = i[t + 1]) || void 0 === r ? void 0 : r.option;
          return (
            ((n = {
              key: t,
              option: e,
              highlighted: a,
              selected: l,
              isNextSelected:
                u && bn(u) ? Y(u).selected : E.indexOf(i[t + 1]) > -1,
              indeterminate: !!(null === o || void 0 === o
                ? void 0
                : o.indeterminate),
            })["data-mouse-target"] = v(e) ? t : -1),
            (n.id = _r(K, t)),
            n
          );
        },
        isKeyboard: x,
        highlightOption: L,
        selectOption: Q,
        announceSelected: ee,
      };
    }
    function yr(t) {
      var n = t.isEnabled,
        r = t.options,
        i = t.isKeyboard,
        a = t.highlightOption,
        o = t.highlightedOption,
        l = t.useInteractiveGroups,
        u = (0, e.useRef)(""),
        s = ln(function () {
          return (u.current = "");
        }, 500);
      return function (e) {
        if (((i.current = !0), n)) {
          var t = e.charCode;
          if (((c = t), -1 === [0, fn.enter, fn.space, fn.tab].indexOf(c))) {
            var c;
            s();
            var d = u.current + String.fromCharCode(t);
            u.current = d;
            var f = (function (e, t, n, r) {
              var i,
                a = r ? wn : _n,
                o = function (t) {
                  return gn(e, t, !0).filter(function (e) {
                    return a(e);
                  });
                },
                l = o(t);
              if (1 === l.length) return l[0];
              if (
                n &&
                t.length > 1 &&
                (i = t).split("").every(function (e) {
                  return e === i[0];
                })
              ) {
                var u = o(t[0]);
                if (u.length > 0) {
                  var s = bn(n)
                    ? u
                        .map(function (e) {
                          return e.option;
                        })
                        .indexOf(n)
                    : u
                        .map(function (e) {
                          return e.option.value;
                        })
                        .indexOf(n.value);
                  return (s += 1), u[(s %= u.length)];
                }
              }
              return l.length > 0 ? l[0] : null;
            })(r, d, o, l);
            f && a(f);
          }
        }
      };
    }
    var xr = function (e, t) {
      return [t && t.label, e.label || e.value, e.description, e.labelTag]
        .concat(e.tags)
        .filter(function (e) {
          return !!e;
        })
        .join(" ");
    };
    var kr = "awsui_options-list_19gcf_hqaan_93",
      Er = "awsui_decrease-top-margin_19gcf_hqaan_113",
      Sr = function (e, t) {
        var n = Xe(t.target, function (t) {
            return t === e.current || !!t.dataset.mouseTarget;
          }),
          r = null === n || void 0 === n ? void 0 : n.dataset.mouseTarget;
        return r ? parseInt(r) : -1;
      },
      Cr = e.forwardRef(function (t, n) {
        var r,
          i = t.open,
          a = t.children,
          o = t.nativeAttributes,
          l = void 0 === o ? {} : o,
          u = t.onKeyDown,
          s = t.onBlur,
          f = t.onFocus,
          p = t.onLoadMore,
          h = t.onMouseUp,
          m = t.onMouseMove,
          _ = t.position,
          w = void 0 === _ ? "relative" : _,
          b = t.role,
          y = void 0 === b ? "listbox" : b,
          x = t.decreaseTopMargin,
          k = void 0 !== x && x,
          E = t.ariaLabelledby,
          S = v(
            d(t, [
              "open",
              "children",
              "nativeAttributes",
              "onKeyDown",
              "onBlur",
              "onFocus",
              "onLoadMore",
              "onMouseUp",
              "onMouseMove",
              "position",
              "role",
              "decreaseTopMargin",
              "ariaLabelledby",
            ])
          ),
          C = (0, e.useRef)(null),
          z = function () {
            var e = null === C || void 0 === C ? void 0 : C.current;
            if (e) {
              var t = e.scrollTop + e.clientHeight;
              e.scrollHeight - t < 80 && Oe(p);
            }
          };
        (0, e.useEffect)(function () {
          i && z();
        });
        var R = g(kr, (((r = {})[Er] = k), r)),
          P = ve(n, C);
        return e.createElement(
          "ul",
          c({}, S, l, {
            className: R,
            ref: P,
            style: { position: w },
            role: y,
            onScroll: z,
            onKeyDown: function (e) {
              return u && Te(u, e);
            },
            onMouseMove: function (e) {
              return null === m || void 0 === m ? void 0 : m(Sr(C, e));
            },
            onMouseUp: function (e) {
              return null === h || void 0 === h ? void 0 : h(Sr(C, e));
            },
            onBlur: function (e) {
              return Oe(s, { relatedTarget: Me(e.nativeEvent) });
            },
            onFocus: function () {
              return Oe(f);
            },
            tabIndex: -1,
            "aria-labelledby": E,
          }),
          i && a
        );
      }),
      zr = {
        placeholder: "awsui_placeholder_dwuol_1b8cz_93",
        item: "awsui_item_dwuol_1b8cz_98",
        checkbox: "awsui_checkbox_dwuol_1b8cz_102",
        filter: "awsui_filter_dwuol_1b8cz_111",
        trigger: "awsui_trigger_dwuol_1b8cz_116",
        "layout-strut": "awsui_layout-strut_dwuol_1b8cz_122",
        "list-bottom": "awsui_list-bottom_dwuol_1b8cz_128",
      },
      Rr = "awsui_option_1p2cx_q2hb5_97",
      Pr = "awsui_disabled_1p2cx_q2hb5_113",
      Nr = "awsui_parent_1p2cx_q2hb5_116",
      Or = "awsui_content_1p2cx_q2hb5_123",
      Lr = "awsui_label-content_1p2cx_q2hb5_130",
      Tr = "awsui_label_1p2cx_q2hb5_130",
      Mr = "awsui_tag_1p2cx_q2hb5_137",
      jr = "awsui_label-tag_1p2cx_q2hb5_138",
      Ir = "awsui_label-prefix_1p2cx_q2hb5_149",
      Br = "awsui_tags_1p2cx_q2hb5_162",
      Dr = "awsui_description_1p2cx_q2hb5_163",
      Fr = "awsui_icon_1p2cx_q2hb5_180",
      Hr = "awsui_icon-size-big_1p2cx_q2hb5_187",
      Ar = "awsui_filtering-match-highlight_1p2cx_q2hb5_191",
      Wr = "awsui_trigger-variant_1p2cx_q2hb5_206",
      Ur = function (t) {
        var n = t.str;
        return n ? e.createElement("span", { className: g(Ar) }, n) : null;
      };
    function Vr(t) {
      var n = t.str,
        r = t.highlightText;
      if (!n || !r) return e.createElement(e.Fragment, null, n);
      if (n === r) return e.createElement(Ur, { str: n });
      var i = (function (e, t) {
          var n = t.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"),
            r = new RegExp(n, "gi");
          return { noMatches: e.split(r), matches: e.match(r) };
        })(n, r),
        a = i.noMatches,
        o = i.matches,
        l = [];
      return (
        a.forEach(function (t, n) {
          l.push(t),
            o &&
              n < o.length &&
              l.push(e.createElement(Ur, { key: n, str: o[n] }));
        }),
        e.createElement("span", null, l)
      );
    }
    var qr = function (t) {
        var n = t.label,
          r = t.prefix,
          i = t.highlightText,
          a = t.triggerVariant;
        return e.createElement(
          "span",
          { className: g(Tr, a && Wr) },
          r && e.createElement("span", { className: g(Ir, a && Wr) }, r, " "),
          e.createElement(Vr, { str: n, highlightText: i })
        );
      },
      Kr = function (t) {
        var n = t.labelTag,
          r = t.highlightText,
          i = t.triggerVariant;
        return n
          ? e.createElement(
              "span",
              { className: g(jr, i && Wr) },
              e.createElement(Vr, { str: n, highlightText: r })
            )
          : null;
      },
      $r = function (t) {
        var n = t.description,
          r = t.highlightText,
          i = t.triggerVariant;
        return n
          ? e.createElement(
              "div",
              { className: g(Dr, i && Wr), "aria-disabled": !0 },
              e.createElement(Vr, { str: n, highlightText: r })
            )
          : null;
      },
      Qr = function (t) {
        var n = t.tags,
          r = t.highlightText,
          i = t.triggerVariant;
        return n
          ? e.createElement(
              "div",
              { className: g(Br) },
              n.map(function (t, n) {
                return e.createElement(
                  "span",
                  { key: n, className: g(Mr, i && Wr), "aria-disabled": !0 },
                  e.createElement(Vr, { str: t, highlightText: r })
                );
              })
            )
          : null;
      },
      Gr = function (t) {
        var n = t.filteringTags,
          r = t.highlightText,
          i = t.triggerVariant;
        if (!r || !n) return null;
        var a = r.toLowerCase();
        return e.createElement(
          "div",
          { className: g(Br) },
          n.map(function (t, n) {
            return -1 !== t.toLowerCase().indexOf(a)
              ? e.createElement(
                  "span",
                  { className: g(Mr, i && Wr), key: n, "aria-disabled": !0 },
                  e.createElement(Vr, { str: t, highlightText: r })
                )
              : null;
          })
        );
      },
      Xr = function (t) {
        return t.name || t.url || t.svg
          ? e.createElement(
              "span",
              { className: g(Fr, "big" === t.size && [Hr]) },
              e.createElement(Bt, c({}, t))
            )
          : null;
      };
    var Yr = function (t) {
        var n = t.option,
          r = t.highlightText,
          i = t.triggerVariant,
          a = void 0 !== i && i,
          o = t.isGroupOption,
          l = void 0 !== o && o,
          u = d(t, [
            "option",
            "highlightText",
            "triggerVariant",
            "isGroupOption",
          ]);
        if (!n) return null;
        var s = n.disabled,
          f = v(u);
        var p = g(Rr, s && Pr, l && Nr),
          h =
            n.__customIcon ||
            e.createElement(Xr, {
              name: n.iconName,
              url: n.iconUrl,
              svg: n.iconSvg,
              alt: n.iconAlt,
              size: n.description || n.tags ? "big" : "normal",
            });
        return e.createElement(
          "div",
          c(
            {
              title: n.label || n.value,
              "data-value": n.value,
              className: p,
              "aria-disabled": s,
            },
            f
          ),
          h,
          e.createElement(
            "div",
            { className: g(Or) },
            e.createElement(
              "div",
              { className: g(Lr) },
              e.createElement(qr, {
                label: n.label || n.value,
                prefix: n.__labelPrefix,
                highlightText: r,
                triggerVariant: a,
              }),
              e.createElement(Kr, {
                labelTag: n.labelTag,
                highlightText: r,
                triggerVariant: a,
              })
            ),
            e.createElement($r, {
              description: n.description,
              highlightText: r,
              triggerVariant: a,
            }),
            e.createElement(Qr, {
              tags: n.tags,
              highlightText: r,
              triggerVariant: a,
            }),
            e.createElement(Gr, {
              filteringTags: n.filteringTags,
              highlightText: r,
              triggerVariant: a,
            })
          )
        );
      },
      Zr = "awsui_selectable-item_15o6u_1y7sx_93",
      Jr = "awsui_pad-bottom_15o6u_1y7sx_113",
      ei = "awsui_has-background_15o6u_1y7sx_122",
      ti = "awsui_highlighted_15o6u_1y7sx_125",
      ni = "awsui_selected_15o6u_1y7sx_125",
      ri = "awsui_disabled_15o6u_1y7sx_139",
      ii = "awsui_next-item-selected_15o6u_1y7sx_149",
      ai = "awsui_is-keyboard_15o6u_1y7sx_157",
      oi = "awsui_parent_15o6u_1y7sx_160",
      li = "awsui_interactiveGroups_15o6u_1y7sx_164",
      ui = "awsui_child_15o6u_1y7sx_176",
      si = "awsui_virtual_15o6u_1y7sx_191",
      ci = "awsui_measure-strut_15o6u_1y7sx_202",
      di = "awsui_screenreader-content_15o6u_1y7sx_215",
      fi = "awsui_option-content_15o6u_1y7sx_221",
      pi = e.forwardRef(function (t, n) {
        var r,
          i = t.children,
          a = t.ariaSelected,
          o = t.ariaChecked,
          l = t.selected,
          u = t.highlighted,
          s = t.disabled,
          f = t.hasBackground,
          p = t.isParent,
          h = t.isChild,
          m = t.isKeyboard,
          _ = t.virtualPosition,
          w = t.padBottom,
          b = t.isNextSelected,
          y = t.useInteractiveGroups,
          x = t.screenReaderContent,
          k = t.ariaPosinset,
          E = t.ariaSetsize,
          S = v(
            d(t, [
              "children",
              "ariaSelected",
              "ariaChecked",
              "selected",
              "highlighted",
              "disabled",
              "hasBackground",
              "isParent",
              "isChild",
              "isKeyboard",
              "virtualPosition",
              "padBottom",
              "isNextSelected",
              "useInteractiveGroups",
              "screenReaderContent",
              "ariaPosinset",
              "ariaSetsize",
            ])
          ),
          C = S.className,
          z = d(S, ["className"]),
          R = g(
            C,
            Zr,
            (((r = {})[ni] = l),
            (r[ti] = u),
            (r[ei] = f),
            (r[oi] = p),
            (r[ui] = h),
            (r[ai] = m),
            (r[ri] = s),
            (r[si] = void 0 !== _),
            (r[Jr] = w),
            (r[ii] = b),
            (r[li] = y),
            r)
          ),
          P = (0, e.useRef)(null),
          N = (0, e.useRef)(null);
        (0, e.useLayoutEffect)(
          function () {
            u &&
              x &&
              (P.current && P.current.setAttribute("aria-hidden", "true"),
              N.current && (N.current.textContent = x));
          },
          [u, x, P, N]
        );
        var O =
            void 0 !== _
              ? { transform: "translateY(".concat(_, "px)") }
              : void 0,
          L = { "aria-disabled": s };
        return (
          p && !y && (L["aria-hidden"] = !0),
          a && (L["aria-selected"] = a),
          o && (L["aria-checked"] = o),
          k && E && ((L["aria-posinset"] = k), (L["aria-setsize"] = E)),
          e.createElement(
            "li",
            c({ role: "option", className: R, style: O }, L, z),
            e.createElement("div", { className: fi, ref: P }, i),
            e.createElement("div", { className: ci, ref: n }),
            e.createElement("div", { className: di, ref: N })
          )
        );
      }),
      hi = "awsui_root_1fn7j_1sy12_93",
      vi = "awsui_styled-box_1fn7j_1sy12_100",
      mi = "awsui_styled-box-checked_1fn7j_1sy12_106",
      gi = "awsui_styled-box-indeterminate_1fn7j_1sy12_106",
      _i = "awsui_styled-box-disabled_1fn7j_1sy12_110",
      wi = "awsui_styled-line_1fn7j_1sy12_124",
      bi = "awsui_styled-line-disabled_1fn7j_1sy12_129",
      yi = {
        default: {
          viewBox: "0 0 14 14",
          indeterminate: "2.5,7 11.5,7",
          checked: "2.5,7 6,10 11,3",
          xy: 0.5,
          r: 1.5,
          size: 13,
        },
        refresh: {
          viewBox: "0 0 16 16",
          indeterminate: "3.5,8 12.5,8",
          checked: "3.5,8 7,11 12,4",
          xy: 1,
          r: 2,
          size: 14,
        },
      },
      xi = function (t) {
        var n,
          r,
          i = t.checked,
          a = t.indeterminate,
          o = t.disabled,
          l = void 0 !== o && o,
          u = v(d(t, ["checked", "indeterminate", "disabled"])),
          s = (0, e.useRef)(null),
          f = it(s) ? "refresh" : "default",
          p = yi[f];
        return e.createElement(
          "svg",
          c(
            {
              className: hi,
              viewBox: p.viewBox,
              "aria-hidden": "true",
              focusable: "false",
              ref: s,
            },
            u
          ),
          e.createElement("rect", {
            className: g(
              vi,
              ((n = {}), (n[mi] = i), (n[gi] = a), (n[_i] = l), n)
            ),
            x: p.xy,
            y: p.xy,
            rx: p.r,
            ry: p.r,
            width: p.size,
            height: p.size,
          }),
          i || a
            ? e.createElement("polyline", {
                className: g(wi, ((r = {}), (r[bi] = l), r)),
                points: a ? p.indeterminate : p.checked,
              })
            : null
        );
      },
      ki = e.memo(
        e.forwardRef(function (t, n) {
          var r = t.option,
            i = t.highlighted,
            a = t.selected,
            o = t.filteringValue,
            l = t.hasCheckbox,
            u = t.isKeyboard,
            s = t.virtualPosition,
            f = t.padBottom,
            p = t.isNextSelected,
            h = t.screenReaderContent,
            m = t.ariaPosinset,
            g = t.ariaSetsize,
            _ = v(
              d(t, [
                "option",
                "highlighted",
                "selected",
                "filteringValue",
                "hasCheckbox",
                "isKeyboard",
                "virtualPosition",
                "padBottom",
                "isNextSelected",
                "screenReaderContent",
                "ariaPosinset",
                "ariaSetsize",
              ])
            ),
            w = "parent" === r.type,
            b = "child" === r.type,
            y = r.option,
            x = r.disabled || y.disabled;
          return e.createElement(
            pi,
            c(
              {
                ariaSelected: a,
                selected: a,
                isNextSelected: p,
                highlighted: i,
                disabled: r.disabled,
                isParent: w,
                isChild: b,
                isKeyboard: u,
                ref: n,
                virtualPosition: s,
                padBottom: f,
                screenReaderContent: h,
                ariaPosinset: m,
                ariaSetsize: g,
              },
              _
            ),
            e.createElement(
              "div",
              { className: zr.item },
              l &&
                !w &&
                e.createElement(
                  "div",
                  { className: zr.checkbox },
                  e.createElement(xi, {
                    checked: a || !1,
                    disabled: r.disabled,
                  })
                ),
              w
                ? y.label || y.value
                : e.createElement(Yr, {
                    option: c(c({}, y), { disabled: x }),
                    highlightText: o,
                  })
            )
          );
        })
      ),
      Ei = e.memo(
        e.forwardRef(function (t, n) {
          var r,
            i = t.option,
            a = t.highlighted,
            o = t.selected,
            l = t.filteringValue,
            u = t.hasCheckbox,
            s = t.isKeyboard,
            f = t.virtualPosition,
            p = t.padBottom,
            h = t.isNextSelected,
            m = t.indeterminate,
            _ = t.screenReaderContent,
            w = t.ariaPosinset,
            b = t.ariaSetsize,
            y = v(
              d(t, [
                "option",
                "highlighted",
                "selected",
                "filteringValue",
                "hasCheckbox",
                "isKeyboard",
                "virtualPosition",
                "padBottom",
                "isNextSelected",
                "indeterminate",
                "screenReaderContent",
                "ariaPosinset",
                "ariaSetsize",
              ])
            ),
            x = "parent" === i.type,
            k = "child" === i.type,
            E = i.option,
            S = i.disabled || E.disabled,
            C = g(zr.item, (((r = {})[zr.disabled] = S), r));
          return e.createElement(
            pi,
            c(
              {
                ariaChecked: o,
                selected: o,
                isNextSelected: h,
                highlighted: a,
                disabled: S,
                isParent: x,
                isChild: k,
                isKeyboard: s,
                ref: n,
                virtualPosition: f,
                padBottom: p,
                useInteractiveGroups: !0,
                screenReaderContent: _,
                ariaPosinset: w,
                ariaSetsize: b,
              },
              y
            ),
            e.createElement(
              "div",
              { className: C },
              u &&
                e.createElement(
                  "div",
                  { className: zr.checkbox },
                  e.createElement(xi, {
                    checked: o,
                    indeterminate: x && m,
                    disabled: i.disabled,
                  })
                ),
              e.createElement(Yr, {
                option: c(c({}, E), { disabled: S }),
                highlightText: l,
                isGroupOption: x,
              })
            )
          );
        })
      ),
      Si = function (e) {
        var t,
          n = e.option,
          r = e.index,
          i = e.getOptionProps,
          a = e.filteringValue,
          o = e.isKeyboard,
          l = void 0 !== o && o,
          u = e.checkboxes,
          s = void 0 !== u && u,
          d = i(n, r);
        d.filteringValue = a;
        var f =
            (function (e) {
              return Un.get(e);
            })(n) || {},
          p = f.inGroupIndex,
          h = f.groupIndex,
          v = f.throughIndex;
        return c(
          c({}, d),
          (((t = { isKeyboard: l, hasCheckbox: s })["data-group-index"] = h),
          (t["data-child-index"] = p),
          (t["data-test-index"] = v),
          t)
        );
      },
      Ci = function (t) {
        var n = t.options,
          r = t.getOptionProps,
          i = t.filteringValue,
          a = t.isKeyboard,
          o = void 0 !== a && a,
          l = t.checkboxes,
          u = void 0 !== l && l,
          s = t.hasDropdownStatus,
          d = t.virtualItems,
          f = t.useInteractiveGroups,
          p = t.screenReaderContent,
          h = t.ariaSetsize;
        return n.map(function (t, a) {
          var l = d && d[a],
            v = l ? l.index : a,
            m = Si({
              option: t,
              index: v,
              getOptionProps: r,
              filteringValue: i,
              isKeyboard: o,
              checkboxes: u,
            }),
            g = a === n.length - 1,
            _ = !s && g,
            w = f ? Ei : ki;
          return e.createElement(
            w,
            c({ key: v }, m, {
              virtualPosition: l && l.start,
              ref: l && l.measureRef,
              padBottom: _,
              screenReaderContent: p,
              ariaPosinset: v + 1,
              ariaSetsize: h,
            })
          );
        });
      },
      zi = (0, e.forwardRef)(function (t, n) {
        var r = t.menuProps,
          i = t.getOptionProps,
          a = t.filteredOptions,
          o = t.filteringValue,
          l = t.isKeyboard,
          u = t.checkboxes,
          s = t.hasDropdownStatus,
          d = t.listBottom,
          f = t.useInteractiveGroups,
          p = t.screenReaderContent,
          h = r.ref;
        return (
          (0, e.useImperativeHandle)(
            n,
            function () {
              return function (e) {
                var t,
                  n =
                    null === (t = h.current) || void 0 === t
                      ? void 0
                      : t.querySelector('[data-mouse-target="'.concat(e, '"]'));
                l &&
                  n &&
                  (function (e) {
                    var t,
                      n =
                        null !== (t = e.offsetParent) && void 0 !== t
                          ? t
                          : document.documentElement;
                    e.offsetTop < n.scrollTop && (n.scrollTop = e.offsetTop),
                      e.offsetTop + e.clientHeight >
                        n.scrollTop + n.clientHeight &&
                        (n.scrollTop =
                          e.offsetTop + e.clientHeight - n.clientHeight);
                  })(n);
              };
            },
            [l, h]
          ),
          e.createElement(
            Cr,
            c({}, r),
            Ci({
              options: a,
              getOptionProps: i,
              filteringValue: o,
              isKeyboard: l,
              checkboxes: u,
              hasDropdownStatus: s,
              useInteractiveGroups: f,
              screenReaderContent: p,
            }),
            d
              ? e.createElement(
                  "li",
                  { role: "option", className: zr["list-bottom"] },
                  d
                )
              : null
          )
        );
      });
    function Ri() {
      return (
        (Ri =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        Ri.apply(this, arguments)
      );
    }
    var Pi,
      Ni = ["bottom", "height", "left", "right", "top", "width"],
      Oi = new Map(),
      Li = function e() {
        var t = [];
        Oi.forEach(function (e, n) {
          var r,
            i,
            a = n.getBoundingClientRect();
          (r = a),
            (i = e.rect),
            void 0 === r && (r = {}),
            void 0 === i && (i = {}),
            Ni.some(function (e) {
              return r[e] !== i[e];
            }) && ((e.rect = a), t.push(e));
        }),
          t.forEach(function (e) {
            e.callbacks.forEach(function (t) {
              return t(e.rect);
            });
          }),
          (Pi = window.requestAnimationFrame(e));
      };
    var Ti = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect;
    function Mi(t, n) {
      void 0 === n && (n = { width: 0, height: 0 });
      var r = e.useState(t.current),
        i = r[0],
        a = r[1],
        o = e.useReducer(ji, n),
        l = o[0],
        u = o[1],
        s = e.useRef(!1);
      return (
        Ti(function () {
          t.current !== i && a(t.current);
        }),
        Ti(
          function () {
            if (i && !s.current) {
              s.current = !0;
              var e = i.getBoundingClientRect();
              u({ rect: e });
            }
          },
          [i]
        ),
        e.useEffect(
          function () {
            if (i) {
              var e,
                t,
                n =
                  ((e = i),
                  (t = function (e) {
                    u({ rect: e });
                  }),
                  {
                    observe: function () {
                      var n = 0 === Oi.size;
                      Oi.has(e)
                        ? Oi.get(e).callbacks.push(t)
                        : Oi.set(e, {
                            rect: void 0,
                            hasRectChanged: !1,
                            callbacks: [t],
                          }),
                        n && Li();
                    },
                    unobserve: function () {
                      var n = Oi.get(e);
                      if (n) {
                        var r = n.callbacks.indexOf(t);
                        r >= 0 && n.callbacks.splice(r, 1),
                          n.callbacks.length || Oi.delete(e),
                          Oi.size || cancelAnimationFrame(Pi);
                      }
                    },
                  });
              return (
                n.observe(),
                function () {
                  n.unobserve();
                }
              );
            }
          },
          [i]
        ),
        l
      );
    }
    function ji(e, t) {
      var n = t.rect;
      return e.height !== n.height || e.width !== n.width ? n : e;
    }
    var Ii = function () {
        return 50;
      },
      Bi = function (e) {
        return e;
      },
      Di = function (e, t) {
        return e[t ? "offsetWidth" : "offsetHeight"];
      },
      Fi = function (e) {
        for (
          var t = Math.max(e.start - e.overscan, 0),
            n = Math.min(e.end + e.overscan, e.size - 1),
            r = [],
            i = t;
          i <= n;
          i++
        )
          r.push(i);
        return r;
      };
    function Hi(t) {
      var n,
        r = t.size,
        i = void 0 === r ? 0 : r,
        a = t.estimateSize,
        o = void 0 === a ? Ii : a,
        l = t.overscan,
        u = void 0 === l ? 1 : l,
        s = t.paddingStart,
        c = void 0 === s ? 0 : s,
        d = t.paddingEnd,
        f = void 0 === d ? 0 : d,
        p = t.parentRef,
        h = t.horizontal,
        v = t.scrollToFn,
        m = t.useObserver,
        g = t.initialRect,
        _ = t.onScrollElement,
        w = t.scrollOffsetFn,
        b = t.keyExtractor,
        y = void 0 === b ? Bi : b,
        x = t.measureSize,
        k = void 0 === x ? Di : x,
        E = t.rangeExtractor,
        S = void 0 === E ? Fi : E,
        C = h ? "width" : "height",
        z = h ? "scrollLeft" : "scrollTop",
        R = e.useRef({ scrollOffset: 0, measurements: [] }),
        P = e.useState(0),
        N = P[0],
        O = P[1];
      R.current.scrollOffset = N;
      var L = (m || Mi)(p, g)[C];
      R.current.outerSize = L;
      var T = e.useCallback(
          function (e) {
            p.current && (p.current[z] = e);
          },
          [p, z]
        ),
        M = v || T;
      v = e.useCallback(
        function (e) {
          M(e, T);
        },
        [T, M]
      );
      var j = e.useState({}),
        I = j[0],
        B = j[1],
        D = e.useCallback(function () {
          return B({});
        }, []),
        F = e.useRef([]),
        H = e.useMemo(
          function () {
            var e = F.current.length > 0 ? Math.min.apply(Math, F.current) : 0;
            F.current = [];
            for (
              var t = R.current.measurements.slice(0, e), n = e;
              n < i;
              n++
            ) {
              var r = y(n),
                a = I[r],
                l = t[n - 1] ? t[n - 1].end : c,
                u = "number" === typeof a ? a : o(n),
                s = l + u;
              t[n] = { index: n, start: l, size: u, end: s, key: r };
            }
            return t;
          },
          [o, I, c, i, y]
        ),
        A = ((null == (n = H[i - 1]) ? void 0 : n.end) || c) + f;
      (R.current.measurements = H), (R.current.totalSize = A);
      var W = _ ? _.current : p.current,
        U = e.useRef(w);
      (U.current = w),
        Ti(
          function () {
            if (W) {
              var e = function (e) {
                var t = U.current ? U.current(e) : W[z];
                O(t);
              };
              return (
                e(),
                W.addEventListener("scroll", e, { capture: !1, passive: !0 }),
                function () {
                  W.removeEventListener("scroll", e);
                }
              );
            }
            O(0);
          },
          [W, z]
        );
      var V = (function (e) {
          var t = e.measurements,
            n = e.outerSize,
            r = e.scrollOffset,
            i = t.length - 1,
            a = (function (e, t, n, r) {
              for (; e <= t; ) {
                var i = ((e + t) / 2) | 0,
                  a = n(i);
                if (a < r) e = i + 1;
                else {
                  if (!(a > r)) return i;
                  t = i - 1;
                }
              }
              return e > 0 ? e - 1 : 0;
            })(
              0,
              i,
              function (e) {
                return t[e].start;
              },
              r
            ),
            o = a;
          for (; o < i && t[o].end < r + n; ) o++;
          return { start: a, end: o };
        })(R.current),
        q = V.start,
        K = V.end,
        $ = e.useMemo(
          function () {
            return S({ start: q, end: K, overscan: u, size: H.length });
          },
          [q, K, u, H.length, S]
        ),
        Q = e.useRef(k);
      Q.current = k;
      var G = e.useMemo(
          function () {
            for (
              var e = [],
                t = function (t, n) {
                  var r = $[t],
                    i = Ri(
                      Ri({}, H[r]),
                      {},
                      {
                        measureRef: function (e) {
                          if (e) {
                            var t = Q.current(e, h);
                            if (t !== i.size) {
                              var n = R.current.scrollOffset;
                              i.start < n && T(n + (t - i.size)),
                                F.current.push(r),
                                B(function (e) {
                                  var n;
                                  return Ri(
                                    Ri({}, e),
                                    {},
                                    (((n = {})[i.key] = t), n)
                                  );
                                });
                            }
                          }
                        },
                      }
                    );
                  e.push(i);
                },
                n = 0,
                r = $.length;
              n < r;
              n++
            )
              t(n);
            return e;
          },
          [$, T, h, H]
        ),
        X = e.useRef(!1);
      Ti(
        function () {
          X.current && B({}), (X.current = !0);
        },
        [o]
      );
      var Y = e.useCallback(
          function (e, t) {
            var n = (void 0 === t ? {} : t).align,
              r = void 0 === n ? "start" : n,
              i = R.current,
              a = i.scrollOffset,
              o = i.outerSize;
            "auto" === r &&
              (r = e <= a ? "start" : e >= a + o ? "end" : "start"),
              "start" === r
                ? v(e)
                : "end" === r
                ? v(e - o)
                : "center" === r && v(e - o / 2);
          },
          [v]
        ),
        Z = e.useCallback(
          function (e, t) {
            var n = void 0 === t ? {} : t,
              r = n.align,
              a = void 0 === r ? "auto" : r,
              o = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++)
                  (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
              })(n, ["align"]),
              l = R.current,
              u = l.measurements,
              s = l.scrollOffset,
              c = l.outerSize,
              d = u[Math.max(0, Math.min(e, i - 1))];
            if (d) {
              if ("auto" === a)
                if (d.end >= s + c) a = "end";
                else {
                  if (!(d.start <= s)) return;
                  a = "start";
                }
              var f =
                "center" === a
                  ? d.start + d.size / 2
                  : "end" === a
                  ? d.end
                  : d.start;
              Y(f, Ri({ align: a }, o));
            }
          },
          [Y, i]
        ),
        J = e.useCallback(
          function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            Z.apply(void 0, t),
              requestAnimationFrame(function () {
                Z.apply(void 0, t);
              });
          },
          [Z]
        );
      return {
        virtualItems: G,
        totalSize: A,
        scrollToOffset: Y,
        scrollToIndex: J,
        measure: D,
      };
    }
    var Ai = (0, e.forwardRef)(function (t, n) {
        var r = t.menuProps,
          i = t.getOptionProps,
          a = t.filteredOptions,
          o = t.filteringValue,
          l = t.isKeyboard,
          u = t.checkboxes,
          s = t.hasDropdownStatus,
          d = t.listBottom,
          f = t.useInteractiveGroups,
          p = t.screenReaderContent,
          h = pe(function (e) {
            return e.width;
          }, []),
          v = h[0],
          m = h[1],
          g = (0, e.useRef)(null),
          _ = ve(m, g, r.ref),
          w = Hi({
            size: a.length,
            parentRef: g,
            estimateSize: (0, e.useCallback)(
              function () {
                return 31;
              },
              [v, o]
            ),
            overscan: 5,
          }),
          b = w.virtualItems,
          y = w.totalSize,
          x = w.scrollToIndex;
        (0, e.useImperativeHandle)(
          n,
          function () {
            return function (e) {
              l && x(e);
            };
          },
          [l, x]
        );
        var k = Ci({
          options: b.map(function (e) {
            var t = e.index;
            return a[t];
          }),
          getOptionProps: i,
          filteringValue: o,
          isKeyboard: l,
          checkboxes: u,
          hasDropdownStatus: s,
          virtualItems: b,
          useInteractiveGroups: f,
          screenReaderContent: p,
          ariaSetsize: a.length,
        });
        return e.createElement(
          Cr,
          c({}, r, { ref: _ }),
          e.createElement("div", {
            "aria-hidden": "true",
            key: "total-size",
            className: zr["layout-strut"],
            style: { height: y },
          }),
          k,
          d
            ? e.createElement(
                "li",
                { role: "option", className: zr["list-bottom"] },
                d
              )
            : null
        );
      }),
      Wi = (0, e.forwardRef)(function (t, n) {
        var r = t.menuProps,
          i = t.listBottom;
        return (
          (0, e.useImperativeHandle)(
            n,
            function () {
              return function () {};
            },
            []
          ),
          e.createElement(
            Cr,
            c({}, r, { ref: r.ref }),
            i
              ? e.createElement(
                  "li",
                  { role: "option", className: zr["list-bottom"] },
                  i
                )
              : null
          )
        );
      }),
      Ui = (0, e.forwardRef)(function (t, n) {
        return t.menuProps.open
          ? e.createElement(Ai, c({}, t, { ref: n }))
          : e.createElement(Wi, c({}, t, { ref: n }));
      });
    var Vi = e.forwardRef(function (t, n) {
        var r = t.filteringType,
          i = d(t, ["filteringType"]);
        return "none" === r
          ? null
          : e.createElement(
              cn,
              c(
                {
                  ref: n,
                  type: "search",
                  className: zr.filter,
                  autoComplete: !1,
                  disableBrowserAutocorrect: !0,
                  invalid: !1,
                  __noBorderRadius: !0,
                },
                i,
                {
                  __nativeAttributes: c(
                    {
                      "aria-expanded": !0,
                      "aria-haspopup": !0,
                      role: "combobox",
                      autoCorrect: "off",
                      autoCapitalize: "off",
                    },
                    i.__nativeAttributes
                  ),
                }
              )
            );
      }),
      qi = Vi,
      Ki = "awsui_button-trigger_18eso_1sw4s_97",
      $i = "awsui_arrow_18eso_1sw4s_97",
      Qi = "awsui_has-caret_18eso_1sw4s_135",
      Gi = "awsui_pressed_18eso_1sw4s_151",
      Xi = "awsui_disabled_18eso_1sw4s_154",
      Yi = "awsui_in-filtering-token_18eso_1sw4s_163",
      Zi = "awsui_read-only_18eso_1sw4s_169",
      Ji = "awsui_invalid_18eso_1sw4s_186",
      ea = e.forwardRef(function (t, n) {
        var r = t.children,
          i = t.pressed,
          a = void 0 !== i && i,
          o = t.hideCaret,
          l = void 0 !== o && o,
          u = t.disabled,
          s = void 0 !== u && u,
          f = t.readOnly,
          p = void 0 !== f && f,
          h = t.invalid,
          m = void 0 !== h && h,
          _ = t.inFilteringToken,
          w = t.ariaHasPopup,
          b = t.ariaLabel,
          y = t.ariaLabelledby,
          x = t.ariaDescribedby,
          k = t.onKeyDown,
          E = t.onKeyUp,
          S = t.onMouseDown,
          C = t.onClick,
          z = t.onFocus,
          R = t.onBlur,
          P = v(
            d(t, [
              "children",
              "pressed",
              "hideCaret",
              "disabled",
              "readOnly",
              "invalid",
              "inFilteringToken",
              "ariaHasPopup",
              "ariaLabel",
              "ariaLabelledby",
              "ariaDescribedby",
              "onKeyDown",
              "onKeyUp",
              "onMouseDown",
              "onClick",
              "onFocus",
              "onBlur",
            ])
          ),
          N = Cn(),
          O = c(c(c({}, N), P), {
            type: "button",
            className: g(
              Ki,
              P.className,
              a && Gi,
              s && Xi,
              m && Ji,
              !l && Qi,
              p && Zi,
              _ && Yi
            ),
            disabled: s || p,
            "aria-expanded": a,
            "aria-label": b,
            "aria-labelledby": y,
            "aria-describedby": x,
            "aria-haspopup": null !== w && void 0 !== w ? w : "listbox",
            onKeyDown:
              k &&
              function (e) {
                return Te(k, e);
              },
            onKeyUp:
              E &&
              function (e) {
                return Te(E, e);
              },
            onMouseDown:
              S &&
              function (e) {
                return Le(S, {}, e);
              },
            onClick:
              C &&
              function (e) {
                return Le(C, {}, e);
              },
            onFocus:
              z &&
              function (e) {
                return Le(z, {}, e);
              },
            onBlur:
              R &&
              function (e) {
                return Le(R, { relatedTarget: Me(e.nativeEvent) }, e);
              },
          });
        return (
          m && (O["aria-invalid"] = m),
          e.createElement(
            "button",
            c({ ref: n }, O),
            r,
            !l &&
              e.createElement(
                "span",
                { className: $i },
                e.createElement(Bt, {
                  name: "caret-down-filled",
                  variant: s ? "disabled" : "normal",
                })
              )
          )
        );
      }),
      ta = e.forwardRef(function (t, n) {
        var r = t.ariaLabelledby,
          i = t.ariaDescribedby,
          a = t.controlId,
          o = t.invalid,
          l = t.triggerProps,
          u = t.selectedOption,
          s = t.triggerVariant,
          d = t.inFilteringToken,
          f = t.isOpen,
          p = t.placeholder,
          h = t.disabled,
          v = t.ariaLabel,
          m = (0, e.useMemo)(
            function () {
              return null !== a && void 0 !== a ? a : Tt();
            },
            [a]
          ),
          _ = null;
        _ = u
          ? "option" === s
            ? e.createElement(Yr, {
                id: l.ariaLabelledby,
                option: c(c({}, u), { disabled: h }),
                triggerVariant: !0,
              })
            : e.createElement(
                "span",
                { id: l.ariaLabelledby, className: zr.trigger },
                u.label || u.value
              )
          : e.createElement(
              "span",
              {
                "aria-disabled": "true",
                className: g(zr.placeholder, zr.trigger),
                id: l.ariaLabelledby,
              },
              p
            );
        var w = ve(l.ref, n);
        return e.createElement(
          ea,
          c({}, l, {
            id: m,
            ref: w,
            pressed: f,
            disabled: h,
            invalid: o,
            inFilteringToken: d,
            ariaLabel: v,
            ariaDescribedby: i,
            ariaLabelledby: [r, l.ariaLabelledby]
              .filter(function (e) {
                return !!e;
              })
              .join(" "),
          }),
          _
        );
      }),
      na = ta;
    var ra = "awsui_root_dm8gx_1vdgh_97",
      ia = "awsui_has-items_dm8gx_1vdgh_107",
      aa = "awsui_token_dm8gx_1vdgh_111",
      oa = "awsui_dismiss-button_dm8gx_1vdgh_123",
      la = "awsui_token-disabled_dm8gx_1vdgh_157",
      ua = "awsui_toggle_dm8gx_1vdgh_172",
      sa = "awsui_description_dm8gx_1vdgh_233";
    function ca(t) {
      var n = t.disabled,
        r = t.dismissLabel,
        i = t.onDismiss,
        a = { tabIndex: -1 };
      r && (a["aria-label"] = r), n || ((a.onClick = i), (a.tabIndex = 0));
      var o = Cn();
      return e.createElement(
        "button",
        c({ type: "button", className: g(oa) }, a, o),
        e.createElement(Bt, { name: "close" })
      );
    }
    var da = function (t) {
      var n = t.controlId,
        r = t.allHidden,
        i = t.expanded,
        a = t.numberOfHiddenOptions,
        o = t.onClick,
        l = t.i18nStrings,
        u = void 0 === l ? {} : l,
        s = Cn(),
        d = r ? a : "+".concat(a),
        f = i
          ? u.limitShowFewer
          : "".concat(u.limitShowMore || "", " (").concat(d, ")"),
        p = (0, e.useCallback)(
          function () {
            Oe(o, null);
          },
          [o]
        );
      return e.createElement(
        "button",
        c(
          {
            type: "button",
            className: ua,
            onClick: p,
            "aria-controls": n,
            "aria-expanded": i,
          },
          s
        ),
        e.createElement(Bt, {
          name: i ? "treeview-collapse" : "treeview-expand",
        }),
        e.createElement("span", { className: sa }, f)
      );
    };
    function fa(t) {
      var n = t.items,
        r = t.alignment,
        i = t.onDismiss,
        a = t.__internalRootRef,
        o = t.limit,
        l = d(t, [
          "items",
          "alignment",
          "onDismiss",
          "__internalRootRef",
          "limit",
        ]),
        u = (0, e.useState)(!1),
        s = u[0],
        f = u[1],
        p = Mt(),
        h = n.length > 0,
        m = h && void 0 !== o && n.length > o,
        _ = m && !s ? n.slice(0, o) : n,
        w = v(l),
        b = g(w.className, ra, h && ia);
      return e.createElement(
        "div",
        c({}, w, { className: b, ref: a }),
        h &&
          e.createElement(
            Rt,
            { id: p, direction: r, size: "xs" },
            _.map(function (t, n) {
              return e.createElement(
                pa,
                c({ key: n }, t, {
                  onDismiss: function () {
                    return Oe(i, { itemIndex: n });
                  },
                })
              );
            })
          ),
        m &&
          e.createElement(da, {
            controlId: p,
            allHidden: 0 === o,
            expanded: s,
            numberOfHiddenOptions: n.length - _.length,
            i18nStrings: l.i18nStrings,
            onClick: function () {
              return f(!s);
            },
          })
      );
    }
    function pa(t) {
      var n = t.disabled,
        r = t.dismissLabel,
        i = t.onDismiss,
        a = d(t, ["disabled", "dismissLabel", "onDismiss"]);
      return e.createElement(
        "div",
        { className: g(aa, n && la), "aria-disabled": n ? "true" : void 0 },
        e.createElement(Yr, { option: c(c({}, a), { disabled: n }) }),
        e.createElement(ca, { disabled: n, dismissLabel: r, onDismiss: i })
      );
    }
    function ha(t) {
      var n = t.items,
        r = void 0 === n ? [] : n,
        i = t.alignment,
        a = void 0 === i ? "horizontal" : i,
        o = d(t, ["items", "alignment"]),
        l = ze("TokenGroup");
      return e.createElement(fa, c({ items: r, alignment: a }, o, l));
    }
    we(ha, "TokenGroup");
    var va = "awsui_root_f8g6q_wid5c_93",
      ma = e.forwardRef(function (t, n) {
        var r,
          i = t.options,
          a = void 0 === i ? [] : i,
          o = t.filteringType,
          l = void 0 === o ? "none" : o,
          u = t.filteringPlaceholder,
          s = t.filteringAriaLabel,
          p = t.ariaRequired,
          h = t.placeholder,
          m = t.disabled,
          _ = t.ariaLabel,
          w = t.statusType,
          b = void 0 === w ? "finished" : w,
          y = t.empty,
          x = t.loadingText,
          k = t.finishedText,
          E = t.errorText,
          S = t.recoveryText,
          C = t.noMatch,
          z = t.selectedAriaLabel,
          R = t.renderHighlightedAriaLive,
          P = t.selectedOptions,
          N = void 0 === P ? [] : P,
          O = t.deselectAriaLabel,
          L = t.keepOpen,
          T = void 0 === L || L,
          M = t.tokenLimit,
          j = t.i18nStrings,
          I = t.onBlur,
          B = t.onFocus,
          D = t.onLoadItems,
          F = t.onChange,
          H = t.virtualScroll,
          A = t.hideTokens,
          W = void 0 !== A && A,
          U = t.expandToViewport,
          V = t.__internalRootRef,
          q = void 0 === V ? null : V,
          K = d(t, [
            "options",
            "filteringType",
            "filteringPlaceholder",
            "filteringAriaLabel",
            "ariaRequired",
            "placeholder",
            "disabled",
            "ariaLabel",
            "statusType",
            "empty",
            "loadingText",
            "finishedText",
            "errorText",
            "recoveryText",
            "noMatch",
            "selectedAriaLabel",
            "renderHighlightedAriaLive",
            "selectedOptions",
            "deselectAriaLabel",
            "keepOpen",
            "tokenLimit",
            "i18nStrings",
            "onBlur",
            "onFocus",
            "onLoadItems",
            "onChange",
            "virtualScroll",
            "hideTokens",
            "expandToViewport",
            "__internalRootRef",
          ]),
          $ = v(K),
          Q = Ot(K),
          G = (function (t) {
            var n = t.onLoadItems,
              r = t.options,
              i = t.statusType,
              a = (0, e.useRef)(void 0);
            return {
              fireLoadItems: function (e) {
                a.current !== e &&
                  ((a.current = e),
                  Oe(n, { filteringText: e, firstPage: !0, samePage: !1 }));
              },
              handleLoadMore: function () {
                var e = 0 === r.length;
                "pending" === i &&
                  Oe(n, {
                    firstPage: e,
                    samePage: !1,
                    filteringText: a.current || "",
                  });
              },
              handleRecoveryClick: function () {
                return Oe(n, {
                  firstPage: !1,
                  samePage: !0,
                  filteringText: a.current || "",
                });
              },
            };
          })({ onLoadItems: D, options: a, statusType: b }),
          X = G.handleLoadMore,
          Y = G.handleRecoveryClick,
          Z = G.fireLoadItems,
          J = !0,
          ee = (0, e.useState)(""),
          te = ee[0],
          ne = ee[1],
          re = Vn(a, l, te),
          ie = re.filteredOptions,
          ae = re.parentMap,
          oe = (0, e.useCallback)(
            function (e) {
              var t = ie
                  .filter(function (e) {
                    return "parent" !== e.type;
                  })
                  .map(function (e) {
                    return e.option;
                  }),
                n = function (e) {
                  return e.every(function (e) {
                    return wr(N, e) > -1 || e.disabled;
                  });
                },
                r = function (e, t) {
                  return (function (e, t) {
                    return e
                      .filter(function (e) {
                        return -1 === wr(t, e);
                      })
                      .concat(t);
                  })(t, e);
                },
                i = function (e, t) {
                  return t.filter(function (t) {
                    return -1 === wr(e, t);
                  });
                },
                a = f([], N, !0);
              if (bn(e)) {
                var o = (function (e, t) {
                  return e.filter(function (e) {
                    return wr(t, e) > -1 && !e.disabled;
                  });
                })(f([], e.options, !0), t);
                a = n(o) ? i(o, a) : r(o, a);
              } else a = n([e]) ? i([e], a) : r([e], a);
              Oe(F, { selectedOptions: a });
            },
            [F, N, ie]
          ),
          le = (0, e.useRef)(null),
          ue = Mt("trigger"),
          se = null !== (r = Q.controlId) && void 0 !== r ? r : ue,
          ce = (0, e.useRef)(null),
          de = br({
            selectedOptions: N,
            updateSelectedOption: oe,
            options: ie,
            filteringType: l,
            onFocus: B,
            onBlur: I,
            externalRef: n,
            keepOpen: T,
            fireLoadItems: Z,
            setFilteringValue: ne,
            useInteractiveGroups: J,
          }),
          fe = de.isOpen,
          pe = de.highlightedOption,
          he = de.highlightedIndex,
          me = de.getTriggerProps,
          ge = de.getFilterProps,
          _e = de.getMenuProps,
          we = de.getOptionProps,
          be = de.isKeyboard,
          ye = de.highlightOption,
          xe = de.announceSelected,
          ke = yr({
            isEnabled: "none" === l && fe,
            options: ie,
            highlightOption: ye,
            highlightedOption:
              null === pe || void 0 === pe ? void 0 : pe.option,
            isKeyboard: be,
            useInteractiveGroups: J,
          }),
          Ee = (function (t) {
            var n = t.statusType,
              r = t.empty,
              i = t.loadingText,
              a = t.finishedText,
              o = t.errorText,
              l = t.recoveryText,
              u = t.isEmpty,
              s = t.isNoMatch,
              c = t.noMatch,
              d = t.onRecoveryClick,
              f = (0, e.useRef)(null),
              p = Dn(n),
              h = {
                isSticky: !0,
                content: null,
                focusRecoveryLink: function () {
                  var e;
                  return null === (e = f.current) || void 0 === e
                    ? void 0
                    : e.focus();
                },
              };
            return (
              "loading" === n
                ? (h.content = e.createElement(Bn, { type: "loading" }, i))
                : "error" === n
                ? (h.content = e.createElement(
                    e.Fragment,
                    null,
                    e.createElement(
                      Bn,
                      { type: "error", __animate: "error" !== p },
                      o
                    ),
                    " ",
                    l &&
                      e.createElement(
                        Tn,
                        {
                          ref: f,
                          onFollow: function () {
                            return Oe(d);
                          },
                          variant: "recovery",
                          className: Hn,
                        },
                        l
                      )
                  ))
                : u && r
                ? (h.content = r)
                : s && c
                ? (h.content = c)
                : "finished" === n && a && ((h.content = a), (h.isSticky = !1)),
              h
            );
          })({
            statusType: b,
            empty: y,
            loadingText: x,
            finishedText: k,
            errorText: E,
            recoveryText: S,
            isEmpty: !a || 0 === a.length,
            isNoMatch: ie && 0 === ie.length,
            noMatch: C,
            onRecoveryClick: Y,
          }),
          Se = e.createElement(
            qi,
            c(
              {
                filteringType: l,
                placeholder: u,
                ariaLabel: s,
                ariaRequired: p,
                value: te,
              },
              ge()
            )
          ),
          Ce = e.createElement(
            na,
            c(
              {
                placeholder: h,
                disabled: m,
                ariaLabel: _,
                triggerProps: me(m),
                selectedOption: null,
                isOpen: fe,
              },
              Q,
              { controlId: se }
            )
          ),
          ze = c(c({}, _e()), { onLoadMore: X, ariaLabelledby: se }),
          Re = (function (t) {
            var n = t.announceSelected,
              r = t.highlightedOption,
              i = t.getParent,
              a = t.selectedAriaLabel,
              o = t.renderHighlightedAriaLive,
              l = (0, e.useRef)(void 0);
            if (
              ((0, e.useEffect)(function () {
                if (r) {
                  var e = requestAnimationFrame(function () {
                    l.current = i(r);
                  });
                  return function () {
                    return cancelAnimationFrame(e);
                  };
                }
              }),
              !r)
            )
              return "";
            var u = r.option,
              s = i(r),
              c = s && s !== l.current ? s : void 0;
            return o
              ? o(u, c)
              : [n && a ? a : "", xr(u, c)].filter(Boolean).join(" ");
          })({
            announceSelected: xe,
            highlightedOption: pe,
            getParent: function (e) {
              var t;
              return null === (t = ae.get(e)) || void 0 === t
                ? void 0
                : t.option;
            },
            selectedAriaLabel: z,
            renderHighlightedAriaLive: R,
          }),
          Pe = N.map(function (e) {
            return {
              label: e.label,
              disabled: m || e.disabled,
              labelTag: e.labelTag,
              description: e.description,
              iconAlt: e.iconAlt,
              iconName: e.iconName,
              iconUrl: e.iconUrl,
              iconSvg: e.iconSvg,
              tags: e.tags,
              dismissLabel: O ? O(e) : void 0,
            };
          });
        (0, e.useEffect)(
          function () {
            var e;
            null === (e = ce.current) || void 0 === e || e.call(ce, he);
          },
          [he]
        );
        var Ne = H ? Ui : zi,
          Le = !W && Pe.length > 0,
          Te = {
            limitShowFewer:
              null === j || void 0 === j ? void 0 : j.tokenLimitShowFewer,
            limitShowMore:
              null === j || void 0 === j ? void 0 : j.tokenLimitShowMore,
          },
          Me = ve(le, q);
        return e.createElement(
          "div",
          c({}, $, { ref: Me, className: g(va, $.className), onKeyPress: ke }),
          e.createElement(
            gr,
            {
              open: fe,
              trigger: Ce,
              header: Se,
              onMouseDown: function (e) {
                e.target !== document.activeElement && e.preventDefault();
              },
              footer: Ee.isSticky
                ? e.createElement(Wn, { content: Ee.content })
                : null,
              expandToViewport: U,
            },
            e.createElement(Ne, {
              listBottom: Ee.isSticky
                ? null
                : e.createElement(Wn, { content: Ee.content }),
              menuProps: ze,
              getOptionProps: we,
              filteredOptions: ie,
              filteringValue: te,
              isKeyboard: be.current,
              ref: ce,
              hasDropdownStatus: null !== Ee.content,
              checkboxes: !0,
              useInteractiveGroups: J,
              screenReaderContent: Re,
            })
          ),
          Le &&
            e.createElement(ha, {
              limit: M,
              items: Pe,
              onDismiss: function (e) {
                var t = e.detail,
                  n = N[t.itemIndex];
                oe(n);
                var r = me().ref;
                r.current && r.current.focus();
              },
              i18nStrings: Te,
            })
        );
      }),
      ga = ma,
      _a = e.forwardRef(function (t, n) {
        var r = t.options,
          i = void 0 === r ? [] : r,
          a = t.filteringType,
          o = void 0 === a ? "none" : a,
          l = t.statusType,
          u = void 0 === l ? "finished" : l,
          s = t.selectedOptions,
          f = void 0 === s ? [] : s,
          p = t.keepOpen,
          h = void 0 === p || p,
          v = t.hideTokens,
          m = void 0 !== v && v,
          g = d(t, [
            "options",
            "filteringType",
            "statusType",
            "selectedOptions",
            "keepOpen",
            "hideTokens",
          ]),
          _ = ze("Multiselect");
        return e.createElement(
          ga,
          c(
            {
              options: i,
              filteringType: o,
              statusType: u,
              selectedOptions: f,
              keepOpen: h,
              hideTokens: m,
            },
            g,
            _,
            { ref: n }
          )
        );
      });
    we(_a, "Multiselect");
    var wa = _a,
      ba = {
        root: "awsui_root_wih1l_1rmtk_97",
        tools: "awsui_tools_wih1l_1rmtk_106",
        "tools-filtering": "awsui_tools-filtering_wih1l_1rmtk_112",
        "tools-align-right": "awsui_tools-align-right_wih1l_1rmtk_116",
        "tools-pagination": "awsui_tools-pagination_wih1l_1rmtk_120",
        "tools-preferences": "awsui_tools-preferences_wih1l_1rmtk_120",
        "tools-small": "awsui_tools-small_wih1l_1rmtk_126",
        table: "awsui_table_wih1l_1rmtk_132",
        "table-layout-fixed": "awsui_table-layout-fixed_wih1l_1rmtk_138",
        wrapper: "awsui_wrapper_wih1l_1rmtk_142",
        "variant-stacked": "awsui_variant-stacked_wih1l_1rmtk_152",
        "variant-container": "awsui_variant-container_wih1l_1rmtk_152",
        "variant-embedded": "awsui_variant-embedded_wih1l_1rmtk_156",
        "has-header": "awsui_has-header_wih1l_1rmtk_159",
        "has-footer": "awsui_has-footer_wih1l_1rmtk_162",
        "cell-merged": "awsui_cell-merged_wih1l_1rmtk_172",
        "cell-merged-content": "awsui_cell-merged-content_wih1l_1rmtk_176",
        empty: "awsui_empty_wih1l_1rmtk_191",
        loading: "awsui_loading_wih1l_1rmtk_195",
        "selection-control": "awsui_selection-control_wih1l_1rmtk_199",
        "selection-control-header":
          "awsui_selection-control-header_wih1l_1rmtk_206",
        "sticky-scrollbar": "awsui_sticky-scrollbar_wih1l_1rmtk_211",
        "sticky-scrollbar-content":
          "awsui_sticky-scrollbar-content_wih1l_1rmtk_221",
        "sticky-scrollbar-visible":
          "awsui_sticky-scrollbar-visible_wih1l_1rmtk_224",
        "header-secondary": "awsui_header-secondary_wih1l_1rmtk_228",
        "header-controls": "awsui_header-controls_wih1l_1rmtk_248",
        divider: "awsui_divider_wih1l_1rmtk_265",
        "footer-wrapper": "awsui_footer-wrapper_wih1l_1rmtk_272",
        footer: "awsui_footer_wih1l_1rmtk_272",
        "thead-active": "awsui_thead-active_wih1l_1rmtk_281",
        row: "awsui_row_wih1l_1rmtk_282",
        "row-selected": "awsui_row-selected_wih1l_1rmtk_283",
      };
    function ya(t) {
      var n = t.header,
        r = t.filter,
        i = t.pagination,
        a = t.preferences,
        o = he(["xs"]),
        l = o[0],
        u = o[1],
        s = "default" === l,
        c = r || i || a;
      return e.createElement(
        e.Fragment,
        null,
        n,
        c &&
          e.createElement(
            "div",
            { ref: u, className: g(ba.tools, s && ba["tools-small"]) },
            r &&
              e.createElement("div", { className: ba["tools-filtering"] }, r),
            e.createElement(
              "div",
              { className: ba["tools-align-right"] },
              i &&
                e.createElement(
                  "div",
                  { className: ba["tools-pagination"] },
                  i
                ),
              a &&
                e.createElement(
                  "div",
                  { className: ba["tools-preferences"] },
                  a
                )
            )
          )
      );
    }
    var xa = "awsui_wrapper_1wepg_sgaq2_93",
      ka = "awsui_label-wrapper_1wepg_sgaq2_100",
      Ea = "awsui_content_1wepg_sgaq2_105",
      Sa = "awsui_empty-content_1wepg_sgaq2_111",
      Ca = "awsui_description_1wepg_sgaq2_115",
      za = "awsui_description-bottom-padding_1wepg_sgaq2_121",
      Ra = "awsui_label_1wepg_sgaq2_100",
      Pa = "awsui_label-disabled_1wepg_sgaq2_129",
      Na = "awsui_description-disabled_1wepg_sgaq2_130",
      Oa = "awsui_control_1wepg_sgaq2_135",
      La = "awsui_outline_1wepg_sgaq2_138";
    function Ta(e) {
      return e
        .filter(function (e) {
          return !!e;
        })
        .join(" ");
    }
    function Ma(t) {
      var n,
        r,
        i = t.controlId,
        a = t.controlClassName,
        o = t.disabled,
        l = t.nativeControl,
        u = t.styledControl,
        s = t.label,
        f = t.description,
        p = t.descriptionBottomPadding,
        h = t.ariaLabel,
        v = t.ariaLabelledby,
        m = t.ariaDescribedby,
        _ = t.withoutLabel,
        w = t.__internalRootRef,
        b = d(t, [
          "controlId",
          "controlClassName",
          "disabled",
          "nativeControl",
          "styledControl",
          "label",
          "description",
          "descriptionBottomPadding",
          "ariaLabel",
          "ariaLabelledby",
          "ariaDescribedby",
          "withoutLabel",
          "__internalRootRef",
        ]),
        y = Mt(),
        x = i || y,
        k = Cn(),
        E = "".concat(x, "-wrapper"),
        S = "".concat(x, "-label"),
        C = "".concat(x, "-description"),
        z = _ ? "div" : "label",
        R = {};
      _ || ((R.id = E), (R.htmlFor = x));
      var P = [];
      s && P.push(S), v && P.push(v);
      var N = [];
      return (
        m && N.push(m),
        f && N.push(C),
        e.createElement(
          "div",
          c({}, b, { className: g(xa, b.className), ref: w }),
          e.createElement(
            z,
            c({}, R, { className: ka, "aria-disabled": o ? "true" : void 0 }),
            e.createElement(
              "div",
              { className: g(Oa, a) },
              u,
              l(
                c(c({}, k), {
                  id: x,
                  disabled: o,
                  "aria-describedby": N.length ? Ta(N) : void 0,
                  "aria-labelledby": P.length ? Ta(P) : void 0,
                  "aria-label": h,
                })
              ),
              e.createElement("div", { className: La })
            ),
            e.createElement(
              "div",
              { className: g(Ea, !s && !f && Sa) },
              s &&
                e.createElement(
                  "div",
                  { id: S, className: g(Ra, ((n = {}), (n[Pa] = o), n)) },
                  s
                ),
              f &&
                e.createElement(
                  "div",
                  {
                    id: C,
                    className: g(Ca, ((r = {}), (r[Na] = o), (r[za] = p), r)),
                  },
                  f
                )
            )
          )
        )
      );
    }
    var ja = "awsui_root_k2y2q_a4m0p_93",
      Ia = "awsui_checkbox-control_k2y2q_a4m0p_105",
      Ba = "awsui_input_k2y2q_a4m0p_113",
      Da = e.forwardRef(function (t, n) {
        var r = t.controlId,
          i = t.name,
          a = t.checked,
          o = t.disabled,
          l = t.indeterminate,
          u = t.children,
          s = t.description,
          f = t.ariaLabel,
          p = t.ariaLabelledby,
          h = t.ariaDescribedby,
          m = t.onFocus,
          _ = t.onBlur,
          w = t.onChange,
          b = t.withoutLabel,
          y = t.tabIndex,
          x = t.__internalRootRef,
          k = v(
            d(t, [
              "controlId",
              "name",
              "checked",
              "disabled",
              "indeterminate",
              "children",
              "description",
              "ariaLabel",
              "ariaLabelledby",
              "ariaDescribedby",
              "onFocus",
              "onBlur",
              "onChange",
              "withoutLabel",
              "tabIndex",
              "__internalRootRef",
            ])
          ),
          E = (0, e.useRef)(null);
        return (
          zn(n, E),
          (0, e.useEffect)(function () {
            E.current && (E.current.indeterminate = Boolean(l));
          }),
          e.createElement(
            Ma,
            c({}, k, {
              className: g(ja, k.className),
              controlClassName: Ia,
              controlId: r,
              disabled: o,
              label: u,
              description: s,
              descriptionBottomPadding: !0,
              ariaLabel: f,
              ariaLabelledby: p,
              ariaDescribedby: h,
              nativeControl: function (t) {
                return e.createElement(
                  "input",
                  c({}, t, {
                    ref: E,
                    className: Ba,
                    type: "checkbox",
                    checked: a,
                    name: i,
                    tabIndex: y,
                    onFocus:
                      m &&
                      function () {
                        return Oe(m);
                      },
                    onBlur:
                      _ &&
                      function () {
                        return Oe(_);
                      },
                    onChange: function () {},
                    onClick:
                      w &&
                      function () {
                        return Oe(
                          w,
                          l
                            ? { checked: !0, indeterminate: !1 }
                            : { checked: !a, indeterminate: !1 }
                        );
                      },
                  })
                );
              },
              styledControl: e.createElement(xi, {
                checked: a,
                indeterminate: l,
                disabled: o,
              }),
              withoutLabel: b,
              __internalRootRef: x,
            })
          )
        );
      }),
      Fa = Da,
      Ha = "awsui_radio_1mabk_da7qz_105",
      Aa = "awsui_radio--has-description_1mabk_da7qz_113",
      Wa = "awsui_radio-control_1mabk_da7qz_117",
      Ua = "awsui_input_1mabk_da7qz_125",
      Va = "awsui_styled-circle-border_1mabk_da7qz_147",
      qa = "awsui_styled-circle-disabled_1mabk_da7qz_151",
      Ka = "awsui_styled-circle-fill_1mabk_da7qz_156",
      $a = "awsui_styled-circle-checked_1mabk_da7qz_162";
    function Qa(t) {
      var n,
        r,
        i = t.name,
        a = t.label,
        o = t.value,
        l = t.checked,
        u = t.withoutLabel,
        s = t.description,
        d = t.disabled,
        f = t.controlId,
        p = t.onChange,
        h = (0, e.useRef)(null),
        v = it(h);
      return e.createElement(Ma, {
        className: g(Ha, s && Aa),
        controlClassName: Wa,
        label: a,
        description: s,
        disabled: d,
        controlId: f,
        nativeControl: function (t) {
          return e.createElement(
            "input",
            c({}, t, {
              className: Ua,
              type: "radio",
              name: i,
              value: o,
              checked: l,
              onChange:
                p &&
                function () {
                  return Oe(p, { value: o });
                },
            })
          );
        },
        styledControl: e.createElement(
          "svg",
          {
            viewBox: "0 0 100 100",
            focusable: "false",
            "aria-hidden": "true",
            ref: h,
          },
          e.createElement("circle", {
            className: g(Va, ((n = {}), (n[qa] = d), n)),
            strokeWidth: v ? 12 : 8,
            cx: 50,
            cy: 50,
            r: v ? 44 : 46,
          }),
          e.createElement("circle", {
            className: g(Ka, ((r = {}), (r[qa] = d), (r[$a] = l), r)),
            strokeWidth: 30,
            cx: 50,
            cy: 50,
            r: 35,
          })
        ),
        withoutLabel: u,
      });
    }
    var Ga = "awsui_root_1ut8b_8i78g_93",
      Xa = "awsui_label_1ut8b_8i78g_97",
      Ya = "awsui_stud_1ut8b_8i78g_113";
    function Za(t) {
      var n = t.selectionType,
        r = t.indeterminate,
        i = void 0 !== r && r,
        a = t.onShiftToggle,
        o = t.onFocusUp,
        l = t.onFocusDown,
        u = t.name,
        s = t.ariaLabel,
        f = d(t, [
          "selectionType",
          "indeterminate",
          "onShiftToggle",
          "onFocusUp",
          "onFocusDown",
          "name",
          "ariaLabel",
        ]),
        p = Mt(),
        h = "multi" === n,
        v = function (e) {
          h && a && a(e.shiftKey);
        },
        m = h
          ? e.createElement(
              Fa,
              c({}, f, { controlId: p, withoutLabel: !0, indeterminate: i })
            )
          : e.createElement(
              Qa,
              c({}, f, {
                controlId: p,
                withoutLabel: !0,
                name: u,
                value: "",
                label: "",
              })
            );
      return e.createElement(
        e.Fragment,
        null,
        e.createElement(
          "label",
          {
            onKeyDown: function (e) {
              v(e),
                h &&
                  (e.keyCode === fn.up && (e.preventDefault(), o && o(e)),
                  e.keyCode === fn.down && (e.preventDefault(), l && l(e)));
            },
            onKeyUp: v,
            onMouseDown: function (e) {
              v(e), h && e.preventDefault();
            },
            onMouseUp: v,
            onClick: function (e) {
              var t = e.currentTarget,
                n = "INPUT" === t.tagName ? t : t.querySelector("input");
              null === n || void 0 === n || n.focus();
            },
            htmlFor: p,
            className: g(Xa, Ga),
            "aria-label": s,
          },
          m
        ),
        e.createElement("span", { className: g(Ya), "aria-hidden": !0 }, "\xa0")
      );
    }
    var Ja,
      eo,
      to,
      no = function (e, t) {
        return "function" === typeof e ? e(t) : t[e];
      },
      ro = function (e, t, n) {
        return e ? no(e, t) : n;
      },
      io = function (e, t) {
        return e ? no(e, t) : t;
      },
      ao = function (e, t) {
        return e.id || t;
      },
      oo = function (e) {
        return !e || "container" === e ? "default" : e;
      };
    var lo = "selection-item";
    function uo(e, t) {
      return -1 === t
        ? e.querySelector("[data-".concat(lo, '="all"] .').concat(Ga, " input"))
        : e.querySelectorAll(
            "[data-".concat(lo, '="item"] .').concat(Ga, " input")
          )[t];
    }
    function so(e, t) {
      if ("multi" !== e) return {};
      function n(e, n, r) {
        for (
          var i = n,
            a = Xe(e, function (e) {
              return "true" === e.dataset.selectionRoot;
            });
          i >= -1 && i < t;

        ) {
          var o = uo(a, (i += r));
          if (o && !o.disabled) {
            o.focus();
            break;
          }
        }
      }
      var r = [1, -1].map(function (e) {
        return function (t) {
          var r = t.currentTarget,
            i = Xe(r, function (e) {
              return "item" === e.dataset.selectionItem;
            });
          n(r, Array.prototype.indexOf.call(i.parentElement.children, i), e);
        };
      });
      return { moveFocusDown: r[0], moveFocusUp: r[1], moveFocus: n };
    }
    var co = function (e, t) {
        var n = this;
        (this.map = new Map()),
          (this.put = function (e) {
            return n.map.set.call(n.map, io(n.trackBy, e), e);
          }),
          (this.has = function (e) {
            return n.map.has.call(n.map, io(n.trackBy, e));
          }),
          (this.forEach = this.map.forEach.bind(this.map)),
          (this.trackBy = e),
          t.forEach(this.put);
      },
      fo = {
        item: ((Ja = {}), (Ja["data-selection-item"] = "item"), Ja),
        all: ((eo = {}), (eo["data-selection-item"] = "all"), eo),
        root: ((to = {}), (to["data-selection-root"] = "true"), to),
      };
    function po(t) {
      var n,
        r = t.items,
        i = t.selectedItems,
        a = void 0 === i ? [] : i,
        o = t.selectionType,
        l = t.isItemDisabled,
        u =
          void 0 === l
            ? function () {
                return !1;
              }
            : l,
        s = t.trackBy,
        c = t.onSelectionChange,
        d = t.ariaLabels,
        p = (0, e.useState)(!1),
        h = p[0],
        v = p[1],
        m = (0, e.useState)(null),
        g = m[0],
        _ = m[1],
        w = Mt(),
        b = "single" === o ? a.slice(0, 1) : a,
        y = new co(s, b),
        x = new Map();
      r.forEach(function (e, t) {
        return x.set(io(s, e), t);
      });
      var k = y.has.bind(y),
        E = function (e) {
          return { disabled: u(e), selected: k(e) };
        },
        S = o
          ? r.reduce(
              function (e, t) {
                var n = e[0],
                  r = e[1],
                  i = e[2],
                  a = E(t),
                  o = a.disabled,
                  l = a.selected;
                return [n && o, r && (l || o), i || l];
              },
              [!0, !0, !1]
            )
          : [!0, !0, !1],
        C = S[0],
        z = S[1],
        R = S[2],
        P = function (e) {
          var t = [];
          return (
            a.forEach(function (n) {
              (e.has(n) && !u(n)) || t.push(n);
            }),
            t
          );
        },
        N = function (e) {
          var t = f([], a, !0);
          return (
            e.forEach(function (e) {
              var n = E(e),
                r = n.selected,
                i = n.disabled;
              r || i || t.push(e);
            }),
            t
          );
        },
        O = function (e) {
          return function () {
            var t = E(e),
              n = t.disabled,
              i = t.selected;
            if (!(n || ("single" === o && i)))
              if ("single" === o) Oe(c, { selectedItems: [e] });
              else {
                var a = (function (e) {
                    var t = new co(s, [e]),
                      n = g ? x.get(io(s, g)) : -1;
                    if ((void 0 === n && (n = -1), h && -1 !== n)) {
                      var i = x.get(io(s, e)),
                        a = Math.min(i, n),
                        o = Math.max(i, n);
                      r.slice(a, o + 1).forEach(function (e) {
                        return t.put(e);
                      });
                    }
                    return t;
                  })(e),
                  l = i ? P(a) : N(a);
                Oe(c, { selectedItems: l }), _(e);
              }
          };
        };
      return {
        isItemSelected: k,
        selectAllProps: {
          name: w,
          disabled: C,
          selectionType: o,
          indeterminate: R && !z,
          checked: R && z,
          onChange: function () {
            var e = new co(s, r),
              t = z ? P(e) : N(e);
            Oe(c, { selectedItems: t });
          },
          ariaLabel: tn(
            null === d || void 0 === d ? void 0 : d.selectionGroupLabel,
            null ===
              (n =
                null === d || void 0 === d
                  ? void 0
                  : d.allItemsSelectionLabel) || void 0 === n
              ? void 0
              : n.call(d, { selectedItems: a })
          ),
        },
        getItemSelectionProps: function (e) {
          var t;
          return {
            name: w,
            selectionType: o,
            ariaLabel: tn(
              null === d || void 0 === d ? void 0 : d.selectionGroupLabel,
              null ===
                (t =
                  null === d || void 0 === d ? void 0 : d.itemSelectionLabel) ||
                void 0 === t
                ? void 0
                : t.call(d, { selectedItems: a }, e)
            ),
            onChange: O(e),
            checked: k(e),
            disabled: u(e),
          };
        },
        updateShiftToggle: function (e) {
          v(e);
        },
      };
    }
    var ho = {
        sortable: "caret-down",
        ascending: "caret-up-filled",
        descending: "caret-down-filled",
      },
      vo = {
        sortable: "none",
        ascending: "ascending",
        descending: "descending",
      },
      mo = function (e) {
        return ho[e];
      },
      go = {
        "header-cell": "awsui_header-cell_1spae_3i1an_93",
        "header-cell-sticky": "awsui_header-cell-sticky_1spae_3i1an_103",
        "header-cell-stuck": "awsui_header-cell-stuck_1spae_3i1an_106",
        "header-cell-variant-full-page":
          "awsui_header-cell-variant-full-page_1spae_3i1an_109",
        "header-cell-sortable": "awsui_header-cell-sortable_1spae_3i1an_115",
        "sorting-icon": "awsui_sorting-icon_1spae_3i1an_128",
        "header-cell-disabled": "awsui_header-cell-disabled_1spae_3i1an_135",
        "header-cell-sorted": "awsui_header-cell-sorted_1spae_3i1an_135",
        "header-cell-content": "awsui_header-cell-content_1spae_3i1an_135",
        "header-cell-fake-focus":
          "awsui_header-cell-fake-focus_1spae_3i1an_168",
        "header-cell-text": "awsui_header-cell-text_1spae_3i1an_197",
        "header-cell-text-wrap": "awsui_header-cell-text-wrap_1spae_3i1an_197",
        "header-cell-ascending": "awsui_header-cell-ascending_1spae_3i1an_203",
        "header-cell-descending":
          "awsui_header-cell-descending_1spae_3i1an_204",
      };
    function _o(t) {
      var n,
        r,
        i,
        a,
        o = t.className,
        l = t.style,
        u = t.tabIndex,
        s = t.column,
        d = t.activeSortingColumn,
        f = t.sortingDescending,
        p = t.sortingDisabled,
        h = t.wrapLines,
        v = t.resizer,
        m = t.showFocusRing,
        _ = t.onClick,
        w = t.onFocus,
        b = t.onBlur,
        y = Cn(),
        x = !!s.sortingComparator || !!s.sortingField,
        k =
          !!d &&
          (function (e, t) {
            return (
              e === t ||
              (void 0 !== e.sortingField &&
                e.sortingField === t.sortingField) ||
              (void 0 !== e.sortingComparator &&
                e.sortingComparator === t.sortingComparator)
            );
          })(s, d),
        E = (function (e, t, n, r) {
          return t
            ? n
              ? "descending"
              : "ascending"
            : e && !r
            ? "sortable"
            : void 0;
        })(x, k, !!f, !!p),
        S = function () {
          return _({ sortingColumn: s, isDescending: !!k && !f });
        };
      return e.createElement(
        "th",
        {
          className: g(
            o,
            ((n = {}),
            (n[go["header-cell-sortable"]] = E),
            (n[go["header-cell-sorted"]] =
              "ascending" === E || "descending" === E),
            (n[go["header-cell-disabled"]] = p),
            (n[go["header-cell-ascending"]] = "ascending" === E),
            (n[go["header-cell-descending"]] = "descending" === E),
            n)
          ),
          "aria-sort": E && ((a = E), vo[a]),
          style: l,
        },
        e.createElement(
          "div",
          c(
            {
              className: g(
                go["header-cell-content"],
                ((r = {}),
                (r[go["header-cell-fake-focus"]] =
                  m && y["data-awsui-focus-visible"]),
                r)
              ),
              "aria-label": s.ariaLabel
                ? s.ariaLabel({
                    sorted: k,
                    descending: k && !!f,
                    disabled: !!p,
                  })
                : void 0,
            },
            p || !E
              ? (((i = {})["aria-disabled"] = "true"), i)
              : c(
                  c(
                    {
                      onKeyPress: function (e) {
                        var t = e.nativeEvent;
                        (t.keyCode !== fn.enter && t.keyCode !== fn.space) ||
                          (t.preventDefault(), S());
                      },
                      tabIndex: u,
                      role: "button",
                    },
                    y
                  ),
                  { onClick: S, onFocus: w, onBlur: b }
                )
          ),
          e.createElement(
            "div",
            {
              className: g(
                go["header-cell-text"],
                h && go["header-cell-text-wrap"]
              ),
            },
            s.header
          ),
          E &&
            e.createElement(
              "span",
              { className: go["sorting-icon"] },
              e.createElement(Bt, { name: mo(E) })
            )
        ),
        v
      );
    }
    var wo = "awsui_resize-active_x7peu_132gz_93",
      bo = "awsui_resizer_x7peu_132gz_98",
      yo = "awsui_resizer-active_x7peu_132gz_114",
      xo = "awsui_tracker_x7peu_132gz_124";
    function ko(t) {
      var n = t.onDragMove,
        r = t.onFinish,
        i = (0, e.useState)(!1),
        a = i[0],
        o = i[1],
        l = (0, e.useState)(),
        u = l[0],
        s = l[1],
        c = (0, e.useRef)(),
        d = ce(r),
        f = ce(n);
      return (
        (0, e.useEffect)(
          function () {
            if (a && u) {
              var e = Xe(u, function (e) {
                  return e.className.indexOf(ba.root) > -1;
                }),
                t = e.querySelector("table"),
                n = e.querySelector(".".concat(xo)),
                r = bt(u)[0],
                i = r.getBoundingClientRect(),
                l = i.left,
                s = i.right,
                p = function (e) {
                  var r = t.getBoundingClientRect().left;
                  (n.style.top = u.getBoundingClientRect().height + "px"),
                    (n.style.left = e - r - 1 + "px");
                },
                h = function (e) {
                  f(e), p(u.getBoundingClientRect().right);
                },
                v = function (e) {
                  if (e > l) {
                    var t = u.getBoundingClientRect().left;
                    h(e - t);
                  }
                },
                m = function e() {
                  var t = u.getBoundingClientRect().width;
                  (c.current = setTimeout(e, 10)),
                    h(t + 5),
                    (r.scrollLeft += 5);
                },
                g = function (e) {
                  clearTimeout(c.current);
                  var t = e.pageX;
                  t > s ? (c.current = setTimeout(m, 10)) : v(t);
                },
                _ = function (e) {
                  v(e.pageX), o(!1), d(), clearTimeout(c.current);
                };
              return (
                p(u.getBoundingClientRect().right),
                document.body.classList.add(wo),
                document.addEventListener("mousemove", g),
                document.addEventListener("mouseup", _),
                function () {
                  clearTimeout(c.current),
                    document.body.classList.remove(wo),
                    document.removeEventListener("mousemove", g),
                    document.removeEventListener("mouseup", _);
                }
              );
            }
          },
          [u, a, f, d]
        ),
        e.createElement("span", {
          className: g(bo, a && yo),
          onMouseDown: function (e) {
            if (0 === e.button) {
              e.preventDefault();
              var t = Xe(e.currentTarget, function (e) {
                return "th" === e.tagName.toLowerCase();
              });
              o(!0), s(t);
            }
          },
        })
      );
    }
    function Eo() {
      return e.createElement("span", { className: xo });
    }
    var So = 120;
    var Co = (0, e.createContext)({
      totalWidth: 0,
      columnWidths: {},
      updateColumn: function () {},
    });
    function zo(t) {
      var n = t.tableRef,
        r = t.visibleColumnDefinitions,
        i = t.resizableColumns,
        a = t.hasSelection,
        o = t.children,
        l = (0, e.useRef)(null),
        u = (0, e.useState)({}),
        s = u[0],
        d = u[1];
      (0, e.useEffect)(
        function () {
          if (i) {
            var e = l.current;
            if (e)
              for (
                var t = function (t) {
                    var n = r[t],
                      i = ao(n, t);
                    s[i] ||
                      -1 !== e.indexOf(n.id) ||
                      d(function (e) {
                        var t;
                        return c(c({}, e), (((t = {})[i] = n.width || So), t));
                      });
                  },
                  n = 0;
                n < r.length;
                n++
              )
                t(n);
            l.current = r.map(function (e) {
              return e.id;
            });
          }
        },
        [s, i, r]
      ),
        (0, e.useEffect)(function () {
          i &&
            d(function () {
              return (function (e, t, n) {
                for (var r = {}, i = 0; i < t.length; i++) {
                  var a = t[i],
                    o = ao(t[i], i),
                    l = a.width || 0,
                    u = a.minWidth || l || So;
                  if (!l && i !== t.length - 1) {
                    var s = n ? i + 2 : i + 1;
                    l = e
                      .querySelector(
                        "."
                          .concat(go["header-cell"], ":nth-child(")
                          .concat(s, ")")
                      )
                      .getBoundingClientRect().width;
                  }
                  r[o] = Math.max(l, u);
                }
                return r;
              })(n.current, r, a);
            });
        }, []);
      var f = r.reduce(function (e, t, n) {
        return e + (s[ao(t, n)] || So);
      }, 0);
      return (
        a && (f += 54),
        e.createElement(
          Co.Provider,
          {
            value: {
              columnWidths: s,
              totalWidth: f,
              updateColumn: function (e, t) {
                d(function (n) {
                  return (function (e, t, n, r) {
                    var i,
                      a = e[r],
                      o = ao(a, r),
                      l = "number" === typeof a.minWidth ? a.minWidth : So;
                    return (
                      (n = Math.max(n, l)),
                      t[o] === n ? t : c(c({}, t), (((i = {})[o] = n), i))
                    );
                  })(r, n, t, e);
                });
              },
            },
          },
          o
        )
      );
    }
    var Ro = e.forwardRef(function (t, n) {
        var r = t.containerWidth,
          i = t.selectionType,
          a = t.selectAllProps,
          o = t.columnDefinitions,
          l = t.sortingColumn,
          u = t.sortingDisabled,
          s = t.sortingDescending,
          d = t.resizableColumns,
          f = t.variant,
          p = t.wrapLines,
          h = t.onFocusMove,
          v = t.onCellFocus,
          m = t.onCellBlur,
          _ = t.onSortingChange,
          w = t.onResizeFinish,
          b = t.showFocusRing,
          y = void 0 === b ? null : b,
          x = t.sticky,
          k = void 0 !== x && x,
          E = t.hidden,
          S = void 0 !== E && E,
          C = t.stuck,
          z = void 0 !== C && C,
          R = g(
            go["header-cell"],
            go["header-cell-variant-".concat(f)],
            k && go["header-cell-sticky"],
            z && go["header-cell-stuck"]
          ),
          P = g(ba["selection-control"], ba["selection-control-header"]),
          N = (0, e.useContext)(Co),
          O = N.columnWidths,
          L = N.totalWidth,
          T = N.updateColumn;
        return e.createElement(
          "thead",
          { className: g(!S && ba["thead-active"]) },
          e.createElement(
            "tr",
            c({}, fo.all, { ref: n }),
            "multi" === i &&
              e.createElement(
                "th",
                { className: g(R, P), scope: "col" },
                e.createElement(
                  Za,
                  c(
                    {
                      onFocusDown: function (e) {
                        return h(e.target, -1, 1);
                      },
                    },
                    a,
                    S ? { tabIndex: -1 } : {}
                  )
                )
              ),
            "single" === i &&
              e.createElement(
                "th",
                { className: g(R, P), scope: "col" },
                e.createElement("span", { "aria-hidden": !0 }, "\xa0")
              ),
            o.map(function (t, n) {
              var i;
              return (
                d &&
                  (O && (i = O[ao(t, n)]),
                  n === o.length - 1 && r && r > L && (i = "auto")),
                e.createElement(_o, {
                  key: ao(t, n),
                  className: R,
                  style: {
                    width: i || t.width,
                    minWidth: k ? void 0 : t.minWidth,
                    maxWidth: d || k ? void 0 : t.maxWidth,
                  },
                  tabIndex: k ? -1 : 0,
                  showFocusRing: n === y,
                  column: t,
                  activeSortingColumn: l,
                  sortingDescending: s,
                  sortingDisabled: u,
                  wrapLines: p,
                  resizer:
                    d &&
                    e.createElement(ko, {
                      onDragMove: function (e) {
                        return T(n, e);
                      },
                      onFinish: function () {
                        return w(O);
                      },
                    }),
                  onClick: function (e) {
                    return Oe(_, e);
                  },
                  onFocus: function () {
                    return null === v || void 0 === v ? void 0 : v(n);
                  },
                  onBlur: m,
                })
              );
            })
          )
        );
      }),
      Po = Ro,
      No = "awsui_body-cell_c6tup_2w3z4_9",
      Oo = "awsui_body-cell-wrap_c6tup_2w3z4_18",
      Lo = "awsui_body-cell-first-row_c6tup_2w3z4_31",
      To = "awsui_body-cell-last-row_c6tup_2w3z4_34",
      Mo = "awsui_body-cell-selected_c6tup_2w3z4_37",
      jo = "awsui_body-cell-next-selected_c6tup_2w3z4_56",
      Io = "awsui_body-cell-prev-selected_c6tup_2w3z4_60";
    function Bo(t) {
      var n = t.className,
        r = t.style,
        i = t.children,
        a = t.wrapLines,
        o = t.isFirstRow,
        l = t.isLastRow,
        u = t.isSelected,
        s = t.isNextSelected,
        c = t.isPrevSelected;
      return e.createElement(
        "td",
        {
          style: r,
          className: g(
            n,
            No,
            a && Oo,
            o && Lo,
            l && To,
            u && Mo,
            s && jo,
            c && Io
          ),
        },
        i
      );
    }
    function Do(t) {
      var n = t.item,
        r = t.column,
        i = d(t, ["item", "column"]);
      return e.createElement(Bo, c({}, i), r.cell(n));
    }
    function Fo(e, t) {
      var n = t.getBoundingClientRect(),
        r = e.getBoundingClientRect();
      return n.top - r.top;
    }
    function Ho(e, t) {
      var n = bt(t);
      n.length
        ? (n[0].scrollTop -= e)
        : window.scrollTo({ top: window.pageYOffset - e });
    }
    var Ao = function (t, n, r, i, a) {
        var o = ft(),
          l = (0, e.useCallback)(
            function () {
              t.current &&
                n.current &&
                r.current &&
                i.current &&
                a.current &&
                (!(function (e, t) {
                  for (
                    var n = Array.prototype.slice.apply(e.children),
                      r = Array.prototype.slice.apply(t.children),
                      i = 0;
                    i < n.length;
                    i++
                  ) {
                    var a = n[i].style.width;
                    "auto" !== a && (a = "".concat(n[i].offsetWidth, "px")),
                      (r[i].style.width = a);
                  }
                })(n.current, r.current),
                (i.current.style.width = "".concat(
                  t.current.offsetWidth,
                  "px"
                )),
                (a.current.style.marginTop = "-".concat(
                  n.current.offsetHeight,
                  "px"
                )));
            },
            [n, r, i, a, t]
          );
        (0, e.useLayoutEffect)(function () {
          l(),
            setTimeout(function () {
              return l();
            }, 0);
          var e = i.current,
            t = a.current;
          return function () {
            e && (e.style.width = ""), t && (t.style.marginTop = "");
          };
        }),
          de(n, l);
        var u,
          s,
          c = ((u = a),
          (s = r),
          {
            scrollToTop: function () {
              if (u.current && s.current) {
                var e = Fo(u.current, s.current);
                e > 0 && Ho(e, u.current);
              }
            },
            scrollToItem: function (e) {
              if (e && u.current && s.current) {
                var t =
                  s.current.getBoundingClientRect().bottom -
                  e.getBoundingClientRect().top;
                t > 0 && Ho(t, u.current);
              }
            },
          }).scrollToItem;
        return {
          scrollToRow: function (e) {
            o || c(e);
          },
          scrollToTop: function () {
            if (!o && n.current && r.current && a.current) {
              var e = Fo(n.current, r.current);
              e > 0 && Ho(e, a.current);
            }
          },
        };
      },
      Wo = (0, e.forwardRef)(function (t, n) {
        var r,
          i = t.variant,
          a = t.theadProps,
          o = t.wrapperRef,
          l = t.theadRef,
          u = t.secondaryWrapperRef,
          s = t.onScroll,
          d = t.tableRef,
          f = (0, e.useRef)(null),
          p = (0, e.useRef)(null),
          h = (0, e.useContext)(xt).isStuck,
          v = (0, e.useState)(null),
          m = v[0],
          _ = v[1],
          w = Ao(d, l, f, p, o),
          b = w.scrollToRow,
          y = w.scrollToTop;
        return (
          (0, e.useImperativeHandle)(n, function () {
            return { scrollToTop: y, scrollToRow: b, setFocusedColumn: _ };
          }),
          e.createElement(
            "div",
            {
              className: g(
                ba["header-secondary"],
                ba["variant-".concat(i)],
                ((r = {}), (r[ba.stuck] = h), r)
              ),
              "aria-hidden": !0,
              tabIndex: -1,
              ref: u,
              onScroll: s,
            },
            e.createElement(
              "table",
              {
                className: g(ba.table, ba["table-layout-fixed"]),
                role: "table",
                ref: p,
              },
              e.createElement(
                Po,
                c({ ref: f, sticky: !0, stuck: h, showFocusRing: m }, a)
              )
            )
          )
        );
      });
    var Uo = Ge(function () {
        if ("undefined" === typeof document) return { width: 0, height: 0 };
        var e = document.createElement("div");
        (e.style.overflow = "scroll"),
          (e.style.height = "100px"),
          (e.style.width = "100px"),
          (e.style.position = "absolute"),
          (e.style.top = "-9999px"),
          (e.style.left = "-9999px"),
          document.body.appendChild(e);
        var t = e.offsetWidth - e.clientWidth,
          n = e.offsetHeight - e.clientHeight;
        return document.body.removeChild(e), { width: t, height: n };
      }),
      Vo = function (e, t, n, r, i, a) {
        if (e && n && t) {
          var o = yt(t)[0],
            l = o.top + o.height,
            u = e.getBoundingClientRect(),
            s = u.top,
            c = u.bottom,
            d = u.width,
            f = t.getBoundingClientRect().width,
            p = Uo().height,
            h = p > 0 ? p : -7.5;
          if (
            (l - a >= c + h || s >= l - a - h || !(d > f)
              ? n.classList.remove(ba["sticky-scrollbar-visible"])
              : (n.classList.contains(ba["sticky-scrollbar-visible"]) ||
                  requestAnimationFrame(function () {
                    n.scrollLeft = t.scrollLeft;
                  }),
                n.classList.add(ba["sticky-scrollbar-visible"])),
            p &&
              n &&
              r &&
              ((n.style.height = "".concat(p, "px")),
              (r.style.height = "".concat(p, "px"))),
            e && t && r && n)
          ) {
            var v = yt(t)[0],
              m = t.getBoundingClientRect(),
              g = e.getBoundingClientRect();
            (n.style.width = "".concat(m.width, "px")),
              (r.style.width = "".concat(g.width, "px")),
              (n.style.left = i ? "0px" : "".concat(m.left, "px")),
              (n.style.top = i
                ? "0px"
                : "".concat(
                    Math.min(v.top + v.height, window.innerHeight - a),
                    "px"
                  ));
          }
        }
      };
    function qo(t, n, r, i, a) {
      var o = (0, e.useState)(!1),
        l = o[0],
        u = o[1],
        s = l ? 0 : a;
      (0, e.useEffect)(
        function () {
          if (Ye()) {
            var e = function () {
              Vo(r.current, i.current, t.current, n.current, l, s);
            };
            return (
              e(),
              window.addEventListener("scroll", e, !0),
              function () {
                window.removeEventListener("scroll", e, !0);
              }
            );
          }
        },
        [t, r, i, s, n, l]
      );
      var c = i.current;
      (0, e.useEffect)(
        function () {
          var e;
          c &&
            Ye() &&
            u(
              !!(
                (e = c).parentElement &&
                Ze() &&
                Xe(e.parentElement, function (e) {
                  var t = getComputedStyle(e);
                  return (
                    (!!t.transform && "none" !== t.transform) ||
                    (!!t.perspective && "none" !== t.perspective)
                  );
                })
              )
            );
        },
        [c]
      ),
        (0, e.useEffect)(
          function () {
            if (Ye() && r.current) {
              var e = new se(function (e) {
                n.current &&
                  ((n.current.style.width = "".concat(
                    e[0].borderBoxSize[0].inlineSize,
                    "px"
                  )),
                  Vo(r.current, i.current, t.current, n.current, l, s));
              });
              return (
                e.observe(r.current),
                function () {
                  e.disconnect();
                }
              );
            }
          },
          [n, t, r, i, s, l]
        ),
        (0, e.useEffect)(
          function () {
            if (Ye()) {
              var e = function () {
                Vo(r.current, i.current, t.current, n.current, l, s);
              };
              return (
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }
          },
          [r, i, t, n, l, s]
        );
    }
    var Ko = (0, e.forwardRef)(function (t, n) {
      var r = t.wrapperRef,
        i = t.tableRef,
        a = t.onScroll,
        o = e.useRef(null),
        l = e.useRef(null),
        u = it(o),
        s = ve(n, o),
        c = wt().stickyOffsetBottom,
        d = (0, e.useContext)(vt).offsetBottom;
      return (
        qo(o, l, i, r, u ? d : c),
        e.createElement(
          "div",
          { ref: s, className: ba["sticky-scrollbar"], onScroll: a },
          e.createElement("div", {
            ref: l,
            className: ba["sticky-scrollbar-content"],
          })
        )
      );
    });
    var $o = e.forwardRef(function (t, n) {
        var r,
          i = t.header,
          a = t.footer,
          o = t.empty,
          l = t.filter,
          u = t.pagination,
          s = t.preferences,
          f = t.items,
          p = t.columnDefinitions,
          h = t.trackBy,
          m = t.loading,
          _ = t.loadingText,
          w = t.selectionType,
          b = t.selectedItems,
          y = t.isItemDisabled,
          x = t.ariaLabels,
          k = t.onSelectionChange,
          E = t.onSortingChange,
          S = t.sortingColumn,
          C = t.sortingDescending,
          z = t.sortingDisabled,
          R = t.visibleColumns,
          P = t.stickyHeader,
          N = t.stickyHeaderVerticalOffset,
          O = t.onRowClick,
          L = t.onRowContextMenu,
          T = t.wrapLines,
          M = t.resizableColumns,
          j = t.onColumnWidthsChange,
          I = t.variant,
          B = t.__internalRootRef,
          D = v(
            d(t, [
              "header",
              "footer",
              "empty",
              "filter",
              "pagination",
              "preferences",
              "items",
              "columnDefinitions",
              "trackBy",
              "loading",
              "loadingText",
              "selectionType",
              "selectedItems",
              "isItemDisabled",
              "ariaLabels",
              "onSelectionChange",
              "onSortingChange",
              "sortingColumn",
              "sortingDescending",
              "sortingDisabled",
              "visibleColumns",
              "stickyHeader",
              "stickyHeaderVerticalOffset",
              "onRowClick",
              "onRowContextMenu",
              "wrapLines",
              "resizableColumns",
              "onColumnWidthsChange",
              "variant",
              "__internalRootRef",
            ])
          );
        P = P && Ye();
        var F = pe(function (e) {
            return e.width;
          }),
          H = F[0],
          A = F[1],
          W = (0, e.useRef)(null),
          U = ve(A, W),
          V = pe(function (e) {
            return e.width;
          }),
          q = V[0],
          K = V[1],
          $ = (0, e.useRef)(null),
          Q = ve(K, $),
          G = e.useRef(null),
          X = (0, e.useRef)(null),
          Y = e.useRef(null),
          Z = e.useRef(null);
        (0, e.useImperativeHandle)(n, function () {
          var e;
          return {
            scrollToTop:
              (null === (e = Y.current) || void 0 === e
                ? void 0
                : e.scrollToTop) || function () {},
          };
        });
        var J = (function (t, n) {
            void 0 === n && (n = !1);
            var r = (0, e.useRef)(null);
            return n
              ? void 0
              : function (e) {
                  var n = e.target;
                  !n ||
                    (null !== r.current && r.current !== n) ||
                    requestAnimationFrame(function () {
                      (r.current = n),
                        t.forEach(function (e) {
                          var t = e.current;
                          t && t !== n && (t.scrollLeft = n.scrollLeft);
                        }),
                        requestAnimationFrame(function () {
                          r.current = null;
                        });
                    });
                };
          })([W, Z, G], !Ye()),
          ee = so(w, f.length),
          te = ee.moveFocusDown,
          ne = ee.moveFocusUp,
          re = ee.moveFocus,
          ie = (function (e) {
            var t = e.onRowClick,
              n = e.onRowContextMenu;
            return {
              onRowClickHandler:
                t &&
                function (e, n, r) {
                  var i = Xe(r.target, function (e) {
                    return "td" === e.tagName.toLowerCase();
                  });
                  (i && i.classList.contains(ba["selection-control"])) ||
                    Oe(t, { rowIndex: e, item: n });
                },
              onRowContextMenuHandler:
                n &&
                function (e, t, r) {
                  var i = {
                    rowIndex: e,
                    item: t,
                    clientX: r.clientX,
                    clientY: r.clientY,
                  };
                  Le(n, i, r);
                },
            };
          })({ onRowClick: O, onRowContextMenu: L }),
          ae = ie.onRowClickHandler,
          oe = ie.onRowContextMenuHandler,
          le = R
            ? p.filter(function (e) {
                return e.id && -1 !== R.indexOf(e.id);
              })
            : p,
          ue = po({
            items: f,
            trackBy: h,
            selectedItems: b,
            selectionType: w,
            isItemDisabled: y,
            onSelectionChange: k,
            ariaLabels: x,
          }),
          se = ue.isItemSelected,
          ce = ue.selectAllProps,
          de = ue.getItemSelectionProps,
          fe = ue.updateShiftToggle;
        m && (ce.disabled = !0);
        var he = it($)
            ? I
            : ["embedded", "full-page"].indexOf(I) > -1
            ? "container"
            : I,
          me = !!(i || l || u || s),
          ge = {
            containerWidth: H,
            selectionType: w,
            selectAllProps: ce,
            columnDefinitions: le,
            variant: he,
            wrapLines: T,
            resizableColumns: M,
            sortingColumn: S,
            sortingDisabled: z,
            sortingDescending: C,
            onSortingChange: E,
            onFocusMove: re,
            onResizeFinish: function (e) {
              var t = p.map(function (t, n) {
                return e[ao(t, n)] || t.width || So;
              });
              t.some(function (e, t) {
                return p[t].width !== e;
              }) && Oe(j, { widths: t });
            },
          },
          _e =
            q && H && q > H
              ? {
                  role: "region",
                  tabIndex: 0,
                  "aria-label":
                    null === x || void 0 === x ? void 0 : x.tableLabel,
                }
              : {},
          we = Cn();
        return e.createElement(
          zo,
          {
            tableRef: $,
            visibleColumnDefinitions: le,
            resizableColumns: M,
            hasSelection: !!w,
          },
          e.createElement(
            St,
            c(
              {},
              D,
              {
                __internalRootRef: B,
                className: g(D.className, ba.root),
                header: e.createElement(
                  e.Fragment,
                  null,
                  me &&
                    e.createElement(
                      "div",
                      {
                        className: g(
                          ba["header-controls"],
                          ba["variant-".concat(he)]
                        ),
                      },
                      e.createElement(ya, {
                        header: i,
                        filter: l,
                        pagination: u,
                        preferences: s,
                      })
                    ),
                  P &&
                    e.createElement(Wo, {
                      ref: Y,
                      variant: he,
                      theadProps: ge,
                      wrapperRef: W,
                      theadRef: X,
                      secondaryWrapperRef: G,
                      tableRef: $,
                      onScroll: J,
                    })
                ),
                disableHeaderPaddings: !0,
                disableContentPaddings: !0,
                variant: oo(he),
                __disableFooterPaddings: !0,
                __disableFooterDivider: !0,
                footer:
                  a &&
                  e.createElement(
                    "div",
                    {
                      className: g(
                        ba["footer-wrapper"],
                        ba["variant-".concat(he)]
                      ),
                    },
                    e.createElement("hr", { className: ba.divider }),
                    e.createElement("div", { className: ba.footer }, a)
                  ),
                __stickyHeader: P,
                __stickyOffset: N,
              },
              fo.root
            ),
            e.createElement(
              "div",
              c(
                {
                  ref: U,
                  className: g(
                    ba.wrapper,
                    ba["variant-".concat(he)],
                    ((r = {}),
                    (r[ba["has-footer"]] = !!a),
                    (r[ba["has-header"]] = me),
                    r)
                  ),
                  onScroll: J,
                },
                _e,
                we
              ),
              e.createElement(
                "table",
                {
                  ref: Q,
                  className: g(ba.table, M && ba["table-layout-fixed"]),
                  role: "table",
                  "aria-label":
                    null === x || void 0 === x ? void 0 : x.tableLabel,
                },
                e.createElement(
                  Po,
                  c(
                    {
                      ref: X,
                      hidden: P,
                      onCellFocus: function (e) {
                        var t;
                        return null === (t = Y.current) || void 0 === t
                          ? void 0
                          : t.setFocusedColumn(e);
                      },
                      onCellBlur: function () {
                        var e;
                        return null === (e = Y.current) || void 0 === e
                          ? void 0
                          : e.setFocusedColumn(null);
                      },
                    },
                    ge
                  )
                ),
                e.createElement(
                  "tbody",
                  null,
                  m || 0 === f.length
                    ? e.createElement(
                        "tr",
                        null,
                        e.createElement(
                          "td",
                          {
                            colSpan: w ? le.length + 1 : le.length,
                            className: ba["cell-merged"],
                          },
                          e.createElement(
                            "div",
                            {
                              className: ba["cell-merged-content"],
                              style: {
                                width: (Ye() && H && Math.floor(H)) || void 0,
                              },
                            },
                            m
                              ? e.createElement(
                                  Bn,
                                  {
                                    type: "loading",
                                    className: ba.loading,
                                    wrapText: !0,
                                  },
                                  _
                                )
                              : e.createElement(
                                  "div",
                                  { className: ba.empty },
                                  o
                                )
                          )
                        )
                      )
                    : f.map(function (t, n) {
                        var r = 0 === n,
                          i = n === f.length - 1,
                          a = !!w && se(t),
                          o = !!w && !r && se(f[n - 1]),
                          l = !!w && !i && se(f[n + 1]);
                        return e.createElement(
                          "tr",
                          c(
                            {
                              key: ro(h, t, n),
                              className: g(ba.row, a && ba["row-selected"]),
                              onFocus: function (e) {
                                var t,
                                  n = e.currentTarget;
                                return null === (t = Y.current) || void 0 === t
                                  ? void 0
                                  : t.scrollToRow(n);
                              },
                            },
                            fo.item,
                            {
                              onClick: ae && ae.bind(null, n, t),
                              onContextMenu: oe && oe.bind(null, n, t),
                            }
                          ),
                          void 0 !== w &&
                            e.createElement(
                              Bo,
                              {
                                className: ba["selection-control"],
                                isFirstRow: r,
                                isLastRow: i,
                                isSelected: a,
                                isNextSelected: l,
                                isPrevSelected: o,
                                wrapLines: !1,
                              },
                              e.createElement(
                                Za,
                                c(
                                  {
                                    onFocusDown: te,
                                    onFocusUp: ne,
                                    onShiftToggle: fe,
                                  },
                                  de(t)
                                )
                              )
                            ),
                          le.map(function (n, u) {
                            return e.createElement(Do, {
                              key: ao(n, u),
                              style: M
                                ? {}
                                : {
                                    width: n.width,
                                    minWidth: n.minWidth,
                                    maxWidth: n.maxWidth,
                                  },
                              column: n,
                              item: t,
                              wrapLines: T,
                              isFirstRow: r,
                              isLastRow: i,
                              isSelected: a,
                              isNextSelected: l,
                              isPrevSelected: o,
                            });
                          })
                        );
                      })
                )
              ),
              M && e.createElement(Eo, null)
            ),
            e.createElement(Ko, {
              ref: Z,
              wrapperRef: W,
              tableRef: $,
              onScroll: J,
            })
          )
        );
      }),
      Qo = $o,
      Go = e.forwardRef(function (t, n) {
        var r = t.items,
          i = void 0 === r ? [] : r,
          a = t.selectedItems,
          o = void 0 === a ? [] : a,
          l = t.variant,
          u = void 0 === l ? "container" : l,
          s = d(t, ["items", "selectedItems", "variant"]),
          f = ze("Table");
        return e.createElement(
          Qo,
          c({ items: i, selectedItems: o, variant: u }, s, f, { ref: n })
        );
      });
    we(Go, "Table");
    var Xo = Go,
      Yo = n(184);
    var Zo = function () {
      var t = s((0, e.useState)([]), 2),
        n = t[0],
        r = t[1],
        i = s((0, e.useState)([]), 2),
        o = i[0],
        l = i[1],
        c = s((0, e.useState)([]), 2),
        d = c[0],
        f = c[1],
        p = s((0, e.useState)([]), 2),
        h = p[0],
        v = p[1],
        m = s((0, e.useState)([]), 2),
        g = m[0],
        _ = m[1],
        w = s((0, e.useState)([]), 2),
        b = w[0],
        y = w[1],
        x = s((0, e.useState)(55), 2),
        k = x[0],
        E = x[1];
      return (
        (0, e.useEffect)(function () {
          fetch("./data.json")
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              !(function (e) {
                l(e), r(e);
                var t = e.flatMap(function (e) {
                  return e.Labels.map(function (e) {
                    return {
                      name: e.Name,
                      parents: e.Parents,
                      confidence: e.Confidence,
                    };
                  });
                });
                f(t);
                var n = u(
                  new Set(
                    t.flatMap(function (e) {
                      return e.parents.length
                        ? e.parents.map(function (t) {
                            return "".concat(t.Name, ":").concat(e.name);
                          })
                        : [e.name];
                    })
                  )
                ).sort();
                v(
                  n.map(function (e) {
                    return { label: e, value: e };
                  })
                );
              })(e);
            });
        }, []),
        (0, Yo.jsx)("div", {
          children: (0, Yo.jsxs)(Re, {
            gridDefinition: [
              { colspan: { default: 2 } },
              { colspan: { default: 8 } },
              { colspan: { default: 2 } },
            ],
            children: [
              (0, Yo.jsx)(Ct, {
                children: (0, Yo.jsxs)(Pt, {
                  size: "l",
                  children: [
                    (0, Yo.jsx)(an, {
                      label: "Min Confidence",
                      description:
                        "Exclude labels below the confidence threshold.",
                      children: (0, Yo.jsx)(pn, {
                        onChange: function (e) {
                          return (function (e) {
                            if (Number.isInteger(Number(e.detail.value))) {
                              E(e.detail.value);
                              var t = u(
                                new Set(
                                  d
                                    .filter(function (t) {
                                      return (
                                        t.confidence >= parseInt(e.detail.value)
                                      );
                                    })
                                    .flatMap(function (e) {
                                      return e.parents.length
                                        ? e.parents.map(function (t) {
                                            return ""
                                              .concat(t.Name, ":")
                                              .concat(e.name);
                                          })
                                        : [e.name];
                                    })
                                )
                              ).sort();
                              v(
                                t.map(function (e) {
                                  return { label: e, value: e };
                                })
                              );
                            }
                          })(e);
                        },
                        value: k,
                      }),
                    }),
                    (0, Yo.jsx)(an, {
                      label: "Labels",
                      description: "Select from ".concat(h.length, " labels."),
                      children: (0, Yo.jsx)(wa, {
                        filteringType: "auto",
                        options: h,
                        selectedOptions: g,
                        onChange: function (e) {
                          return (function (e) {
                            if (
                              (_(e.detail.selectedOptions),
                              0 !== e.detail.selectedOptions.length)
                            ) {
                              var t = e.detail.selectedOptions.map(function (
                                  e
                                ) {
                                  return e.value.split(":").slice(-1)[0];
                                }),
                                n = o.filter(function (e) {
                                  return e.Labels.map(function (e) {
                                    return e.Name;
                                  }).some(function (e) {
                                    return t.includes(e);
                                  });
                                });
                              r(n);
                            } else r(o);
                          })(e);
                        },
                      }),
                    }),
                  ],
                }),
              }),
              (0, Yo.jsx)(Ct, {
                children: n.map(function (e) {
                  return (0, Yo.jsx)(
                    "span",
                    {
                      style: { padding: "5px" },
                      children: (0, Yo.jsx)("img", {
                        onMouseEnter: function (t) {
                          return (function (e, t) {
                            var n = "" != k ? parseInt(k) : 0,
                              r = o.filter(function (e) {
                                return e.Filename === t;
                              })[0],
                              i = g.map(function (e) {
                                return e.value;
                              }),
                              l = r.Labels.filter(function (e) {
                                return e.Confidence >= n;
                              })
                                .flatMap(function (e) {
                                  return e.Parents.length
                                    ? e.Parents.map(function (t) {
                                        return {
                                          label: ""
                                            .concat(t.Name, ":")
                                            .concat(e.Name),
                                          confidence: e.Confidence.toFixed(1),
                                        };
                                      })
                                    : [
                                        {
                                          label: "".concat(e.Name),
                                          confidence: e.Confidence.toFixed(1),
                                        },
                                      ];
                                })
                                .map(function (e) {
                                  return a(
                                    a({}, e),
                                    {},
                                    { highlight: i.includes(e.label) }
                                  );
                                });
                            y(l);
                          })(0, e.Filename);
                        },
                        onMouseLeave: function (e) {
                          y([]);
                        },
                        width: "250",
                        src: e.Filename,
                        alt: "",
                      }),
                    },
                    e.Filename
                  );
                }),
              }),
              (0, Yo.jsx)(Xo, {
                empty: (0, Yo.jsx)("span", { children: "no labels" }),
                columnDefinitions: [
                  {
                    id: "label",
                    header: "Label",
                    cell: function (e) {
                      return e.highlight
                        ? (0, Yo.jsx)("b", { children: e.label })
                        : (0, Yo.jsx)("span", { children: e.label });
                    },
                  },
                  {
                    id: "confidence",
                    header: "Confidence",
                    cell: function (e) {
                      return e.confidence;
                    },
                  },
                ],
                items: b,
              }),
            ],
          }),
        })
      );
    };
    t.render(
      (0, Yo.jsx)(e.StrictMode, { children: (0, Yo.jsx)(Zo, {}) }),
      document.getElementById("root")
    );
  })();
})();
//# sourceMappingURL=main.b7ab8ae7.js.map
