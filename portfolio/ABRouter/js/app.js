(() => {
  "use strict";
  let t = (t, e = 500, a = 0) => {
      t.classList.contains("_slide") ||
        (t.classList.add("_slide"),
        (t.style.transitionProperty = "height, margin, padding"),
        (t.style.transitionDuration = e + "ms"),
        (t.style.height = `${t.offsetHeight}px`),
        t.offsetHeight,
        (t.style.overflow = "hidden"),
        (t.style.height = a ? `${a}px` : "0px"),
        (t.style.paddingTop = 0),
        (t.style.paddingBottom = 0),
        (t.style.marginTop = 0),
        (t.style.marginBottom = 0),
        window.setTimeout(() => {
          (t.hidden = !a),
            !a && t.style.removeProperty("height"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            !a && t.style.removeProperty("overflow"),
            t.style.removeProperty("transition-duration"),
            t.style.removeProperty("transition-property"),
            t.classList.remove("_slide");
        }, e));
    },
    e = (t, e = 500, a = 0) => {
      if (!t.classList.contains("_slide")) {
        t.classList.add("_slide"),
          (t.hidden = !t.hidden && null),
          a && t.style.removeProperty("height");
        let i = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = a ? `${a}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = i + "px"),
          t.style.removeProperty("padding-top"),
          t.style.removeProperty("padding-bottom"),
          t.style.removeProperty("margin-top"),
          t.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            t.style.removeProperty("height"),
              t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e);
      }
    },
    a = !0,
    i = (t = 500) => {
      let e = document.querySelector("body");
      if (a) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let t = 0; t < i.length; t++) {
            i[t].style.paddingRight = "0px";
          }
          (e.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (a = !1),
          setTimeout(function () {
            a = !0;
          }, t);
      }
    },
    s = (t = 500) => {
      let e = document.querySelector("body");
      if (a) {
        let i = document.querySelectorAll("[data-lp]");
        for (let t = 0; t < i.length; t++) {
          i[t].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (e.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (a = !1),
          setTimeout(function () {
            a = !0;
          }, t);
      }
    };
  function o(t, e) {
    const a = Array.from(t).filter(function (t, a, i) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (a.length) {
      const t = [];
      a.forEach((a) => {
        const i = {},
          s = a.dataset[e].split(",");
        (i.value = s[0]),
          (i.type = s[1] ? s[1].trim() : "max"),
          (i.item = a),
          t.push(i);
      });
      let i = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      i = (function (t) {
        return t.filter(function (t, e, a) {
          return a.indexOf(t) === e;
        });
      })(i);
      const s = [];
      if (i.length)
        return (
          i.forEach((e) => {
            const a = e.split(","),
              i = a[1],
              o = a[2],
              n = window.matchMedia(a[0]),
              r = t.filter(function (t) {
                if (t.value === i && t.type === o) return !0;
              });
            s.push({ itemsArray: r, matchMedia: n });
          }),
          s
        );
    }
  }
  let n = !1;
  setTimeout(() => {
    if (n) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function () {
      let t = document.querySelector(".icon-menu");
      t &&
        t.addEventListener("click", function (t) {
          a &&
            (((t = 500) => {
              document.documentElement.classList.contains("lock") ? i(t) : s(t);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const a = document.querySelectorAll("[data-tabs]");
      let i = [];
      if (a.length > 0) {
        const t = location.hash.replace("#", "");
        t.startsWith("tab-") && (i = t.replace("tab-", "").split("-")),
          a.forEach((t, e) => {
            t.classList.add("_tab-init"),
              t.setAttribute("data-tabs-index", e),
              t.addEventListener("click", n),
              (function (t) {
                const e = t.querySelectorAll("[data-tabs-titles]>*"),
                  a = t.querySelectorAll("[data-tabs-body]>*"),
                  s = t.dataset.tabsIndex,
                  o = i[0] == s;
                if (o) {
                  t.querySelector(
                    "[data-tabs-titles]>._tab-active"
                  ).classList.remove("_tab-active");
                }
                a.length > 0 &&
                  a.forEach((t, a) => {
                    e[a].setAttribute("data-tabs-title", ""),
                      t.setAttribute("data-tabs-item", ""),
                      o && a == i[1] && e[a].classList.add("_tab-active"),
                      (t.hidden = !e[a].classList.contains("_tab-active"));
                  });
              })(t);
          });
        let e = o(a, "tabs");
        e &&
          e.length &&
          e.forEach((t) => {
            t.matchMedia.addEventListener("change", function () {
              s(t.itemsArray, t.matchMedia);
            }),
              s(t.itemsArray, t.matchMedia);
          });
      }
      function s(t, e) {
        t.forEach((t) => {
          const a = (t = t.item).querySelector("[data-tabs-titles]"),
            i = t.querySelectorAll("[data-tabs-title]"),
            s = t.querySelector("[data-tabs-body]");
          t.querySelectorAll("[data-tabs-item]").forEach((o, n) => {
            e.matches
              ? (s.append(i[n]), s.append(o), t.classList.add("_tab-spoller"))
              : (a.append(i[n]), t.classList.remove("_tab-spoller"));
          });
        });
      }
      function n(a) {
        const i = a.target;
        if (i.closest("[data-tabs-title]")) {
          const s = i.closest("[data-tabs-title]"),
            o = s.closest("[data-tabs]");
          if (
            !s.classList.contains("_tab-active") &&
            !o.querySelectorAll("._slide").length
          ) {
            const a = o.querySelector("[data-tabs-title]._tab-active");
            a && a.classList.remove("_tab-active"),
              s.classList.add("_tab-active"),
              (function (a) {
                const i = a.querySelectorAll("[data-tabs-title]"),
                  s = a.querySelectorAll("[data-tabs-item]"),
                  o = a.dataset.tabsIndex,
                  n = (function (t) {
                    if (t.hasAttribute("data-tabs-animate"))
                      return t.dataset.tabsAnimate > 0
                        ? t.dataset.tabsAnimate
                        : 500;
                  })(a);
                s.length > 0 &&
                  s.forEach((a, s) => {
                    i[s].classList.contains("_tab-active")
                      ? (n ? e(a, n) : (a.hidden = !1),
                        a.closest(".popup") ||
                          (location.hash = `tab-${o}-${s}`))
                      : n
                      ? t(a, n)
                      : (a.hidden = !0);
                  });
              })(o);
          }
          a.preventDefault();
        }
      }
    })();
})();
