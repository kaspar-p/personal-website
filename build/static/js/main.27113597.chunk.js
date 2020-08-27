(this["webpackJsonppersonal-react-website"] =
  this["webpackJsonppersonal-react-website"] || []).push([
  [0],
  {
    103: function (e, t, a) {
      e.exports = a(171);
    },
    108: function (e, t, a) {},
    126: function (e, t, a) {},
    127: function (e, t, a) {},
    129: function (e, t, a) {},
    130: function (e, t, a) {},
    132: function (e, t, a) {},
    136: function (e, t, a) {},
    137: function (e, t, a) {},
    138: function (e, t, a) {},
    167: function (e, t) {},
    171: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        i = a(21),
        s = a.n(i),
        r = (a(108), a(5)),
        A = a(6),
        l = a(12),
        c = a(11),
        m = (a(109), a(22)),
        h = a.n(m),
        d = a(96),
        u = a(3),
        p = a(76),
        g = a.n(p);
      a(126);
      var f = function (e) {
        for (var t = [], a = 0; a < 20; a++)
          t.push(
            o.a.createElement(
              "div",
              {
                className: "square",
                key: a,
                style: {
                  left: 920 + 20 * a,
                  animationDelay: "".concat(0.6 * a - 12, "s"),
                },
              },
              o.a.createElement("img", {
                className: "customImg",
                src: g.a,
                alt: "Black Circle",
                height: "40",
                width: "40",
              })
            )
          );
        return o.a.createElement("div", { className: "squareWrapper" }, t);
      };
      a(127);
      var E = function (e) {
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: "three-margin verticalCenter" },
              o.a.createElement(
                "header",
                {
                  className: "header container-fluid no-padding no-margin row",
                },
                o.a.createElement(
                  "h1",
                  { className: "montserrat-medium homePageTitle" },
                  "kaspar poland"
                )
              ),
              o.a.createElement("br", null),
              o.a.createElement(
                "ul",
                { className: "navMenu montserrat-medium" },
                o.a.createElement("hr", {
                  className: "showForSmallScreen pageDivider",
                }),
                o.a.createElement(
                  "a",
                  { href: "../projects" },
                  o.a.createElement(
                    "li",
                    {
                      className: "max-width hover-underline text-left pageLink",
                    },
                    "my creations"
                  )
                ),
                o.a.createElement("hr", {
                  className: "showForSmallScreen pageDivider",
                }),
                o.a.createElement(
                  "a",
                  { href: "../updates" },
                  o.a.createElement(
                    "li",
                    {
                      className: "max-width hover-underline text-left pageLink",
                    },
                    "recent updates"
                  )
                ),
                o.a.createElement("hr", {
                  className: "showForSmallScreen pageDivider",
                }),
                o.a.createElement(
                  "a",
                  { href: "../contactme" },
                  o.a.createElement(
                    "li",
                    {
                      className: "max-width hover-underline text-left pageLink",
                    },
                    "contact me"
                  )
                )
              )
            ),
            o.a.createElement(f, null)
          );
        },
        w = a(18),
        y = a.n(w),
        v = a(24),
        b = a(25),
        C = a(15);
      a(129);
      var I = function (e) {
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              "div",
              { className: "row headerWrapper" },
              o.a.createElement(
                "div",
                { className: "col-auto text-center" },
                o.a.createElement(
                  "a",
                  { href: "/" },
                  o.a.createElement(
                    "h1",
                    {
                      className:
                        "montserrat-medium buttonsButton homeButton hover-underline",
                    },
                    "home"
                  )
                )
              ),
              o.a.createElement("div", {
                className: "col no-margin no-padding",
              }),
              o.a.createElement(
                "div",
                { className: "col-auto text-center" },
                o.a.createElement(
                  "button",
                  {
                    id: "backButton",
                    onClick: function () {
                      return console.log(window.history.back(-1));
                    },
                    href: "#",
                  },
                  o.a.createElement(
                    "h1",
                    {
                      className:
                        "montserrat-medium buttonsButton backButton hover-underline",
                    },
                    "back"
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "row no-margin no-padding" },
              o.a.createElement(
                "div",
                { className: "col text-center" },
                e.title
                  ? o.a.createElement(
                      "h1",
                      { id: "title", className: "montserrat-medium" },
                      e.title
                    )
                  : null
              )
            )
          );
        },
        B = a(186),
        N =
          (a(130),
          a(59),
          a(60),
          (function (e) {
            Object(l.a)(a, e);
            var t = Object(c.a)(a);
            function a(e) {
              var n;
              return (
                Object(r.a)(this, a),
                ((n = t.call(this, e)).getUpdateData = n.getUpdateData.bind(
                  Object(C.a)(n)
                )),
                (n.fillTable = n.fillTable.bind(Object(C.a)(n))),
                n
              );
            }
            return (
              Object(A.a)(a, [
                {
                  key: "fillTable",
                  value: function (e) {
                    var t,
                      a = Object(b.a)(e);
                    try {
                      for (a.s(); !(t = a.n()).done; ) {
                        var n = t.value,
                          o = document.createElement("tr"),
                          i = document.createElement("th");
                        i.appendChild(
                          document.createTextNode(e.indexOf(n) + 1)
                        ),
                          o.appendChild(i);
                        for (
                          var s = ["title", "date", "desc"], r = 0;
                          r < s.length;
                          r++
                        ) {
                          var A = s[r],
                            l = document.createElement("td"),
                            c = n[A];
                          "date" === A &&
                            (c = new Date(c).toLocaleDateString()),
                            l.appendChild(document.createTextNode(c)),
                            o.appendChild(l);
                        }
                        document.getElementById("tableBody").appendChild(o);
                      }
                    } catch (m) {
                      a.e(m);
                    } finally {
                      a.f();
                    }
                  },
                },
                {
                  key: "getUpdateData",
                  value: (function () {
                    var e = Object(v.a)(
                      y.a.mark(function e() {
                        var t;
                        return y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  h()({ method: "GET", url: "/api/updates" })
                                );
                              case 2:
                                return (t = e.sent), (e.next = 5), t.data;
                              case 5:
                                return e.abrupt("return", e.sent);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "componentDidMount",
                  value: (function () {
                    var e = Object(v.a)(
                      y.a.mark(function e() {
                        return y.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.t0 = this),
                                    (e.next = 3),
                                    this.getUpdateData()
                                  );
                                case 3:
                                  (e.t1 = e.sent),
                                    e.t0.fillTable.call(e.t0, e.t1);
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(I, { title: "recent updates" }),
                      o.a.createElement(
                        "div",
                        { className: "container-fluid" },
                        o.a.createElement(
                          "div",
                          {
                            className:
                              "custompadding row justify-content-center",
                          },
                          o.a.createElement(
                            "div",
                            {
                              className:
                                "col-lg-7 col-md-10 col-sm-12 text-center",
                            },
                            o.a.createElement(
                              B.a,
                              {
                                hover: !0,
                                size: "md",
                                className: "updateList text-center",
                              },
                              o.a.createElement(
                                "thead",
                                null,
                                o.a.createElement(
                                  "tr",
                                  { align: "center" },
                                  o.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "#"
                                  ),
                                  o.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "What happened"
                                  ),
                                  o.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "When it happened"
                                  ),
                                  o.a.createElement(
                                    "th",
                                    { scope: "col" },
                                    "Some details"
                                  )
                                )
                              ),
                              o.a.createElement("tbody", { id: "tableBody" })
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(o.a.Component)),
        k = a(78),
        T = a.n(k),
        Q = a(79),
        D = a.n(Q),
        M = a(80),
        O = a.n(M),
        R = a(81),
        j = a.n(R),
        q = a(82),
        P = a.n(q),
        J = a(188);
      a(132);
      var x = function (e) {
          var t = new Map();
          t.set("double-pendulum", D.a),
            t.set("reed-solomon", j.a),
            t.set("double-pendulum_hover", O.a),
            t.set("reed-solomon_hover", P.a);
          var a = function () {
            var e = document.querySelector(".carousel-item.active");
            if (e) return e.getAttribute("project-name");
          };
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(I, { title: "projects" }),
            o.a.createElement(
              "div",
              {
                className: "carouselWrapper carouselImgWrapper",
                onMouseOver: function (e) {
                  document.getElementById(a() + "-image").src = t.get(
                    a() + "_hover"
                  );
                },
                onMouseOut: function (e) {
                  document.getElementById(a() + "-image").src = t.get(a());
                },
              },
              o.a.createElement(
                J.a,
                { indicators: !0 },
                T.a.map(
                  {
                    doublePendulum: {
                      path: "/double-pendulum",
                      description: "Double Pendulum Learning Simulation",
                      imagePath: "double-pendulum/headliner.png",
                      srcName: "double-pendulum",
                    },
                    reedSolomon: {
                      path: "/reed-solomon",
                      description: "On the Construction of Reed-Solomon Codes",
                      imagePath: "reed-solomon/headliner.png",
                      srcName: "reed-solomon",
                    },
                  },
                  function (e) {
                    return o.a.createElement(
                      J.a.Item,
                      {
                        "project-name": e.srcName,
                        key: e.srcName,
                        href: e.path,
                      },
                      o.a.createElement(
                        "a",
                        { href: e.path },
                        o.a.createElement("img", {
                          className: "d-block w-100",
                          id: "".concat(e.srcName, "-image"),
                          src: t.get(e.srcName),
                          alt: 'Project "'.concat(e.srcName, '"'),
                        }),
                        o.a.createElement(
                          J.a.Caption,
                          null,
                          o.a.createElement(
                            "h5",
                            { className: "description" },
                            e.description
                          )
                        )
                      )
                    );
                  }
                )
              )
            )
          );
        },
        U = a(85),
        Y = a.n(U),
        G = a(86),
        W = a.n(G),
        Z = a(87),
        K = a.n(Z),
        H = a(88),
        F = a.n(H),
        S = a(187);
      a(61);
      var V = function (e) {
          var t = new Map();
          t.set("Github", W.a),
            t.set("Twitter", Y.a),
            t.set("Instagram", K.a),
            t.set("LinkedIn", F.a);
          var a = o.a.createElement(
              S.a,
              { container: !0, direction: "row", justify: "center" },
              o.a.createElement(
                "a",
                {
                  className: "col-12 socialBox text-center",
                  href: e.socialLink,
                },
                o.a.createElement(
                  S.a,
                  {
                    container: !0,
                    direction: "column",
                    justify: "center",
                    alignItems: "center",
                    className: "no-margin no-padding",
                  },
                  o.a.createElement(
                    S.a,
                    {
                      direction: "row",
                      justify: "center",
                      className: "no-margin no-padding imgDiv",
                    },
                    o.a.createElement("img", {
                      className: "logoImg",
                      width: "20%",
                      alt: "".concat(e.socialName, "Logo"),
                      src: t.get(e.socialName),
                    })
                  ),
                  o.a.createElement(
                    "div",
                    { item: !0, className: "col no-margin no-padding" },
                    o.a.createElement(
                      "h2",
                      { className: "montserrat-medium socialHandle" },
                      e.handle
                    )
                  )
                )
              )
            ),
            n = o.a.createElement(
              S.a,
              { container: !0, direction: "row", justify: "center" },
              o.a.createElement(
                "a",
                {
                  className: "col-7 socialBox text-center",
                  href: e.socialLink,
                },
                o.a.createElement(
                  S.a,
                  {
                    container: !0,
                    direction: "column",
                    justify: "center",
                    alignItems: "center",
                    className: "no-margin no-padding",
                  },
                  o.a.createElement(
                    "div",
                    {
                      item: !0,
                      className: "col no-margin no-padding socialTitle",
                    },
                    o.a.createElement(
                      "h2",
                      { className: "montserrat-medium socialName" },
                      e.socialName
                    )
                  ),
                  o.a.createElement(
                    S.a,
                    {
                      direction: "row",
                      justify: "center",
                      className: "no-margin no-padding imgDiv",
                    },
                    o.a.createElement("img", {
                      className: "logoImg",
                      width: "50%",
                      alt: "".concat(e.socialName, "Logo"),
                      src: t.get(e.socialName),
                    })
                  ),
                  o.a.createElement(
                    "div",
                    { item: !0, className: "col no-margin no-padding" },
                    o.a.createElement(
                      "h2",
                      { className: "montserrat-medium socialHandle" },
                      e.handle
                    )
                  )
                )
              )
            ),
            i = o.a.createElement(
              "div",
              { className: "socialBox col-4" },
              o.a.createElement(
                "a",
                { className: "text-center", href: e.socialLink },
                o.a.createElement(
                  S.a,
                  {
                    container: !0,
                    direction: "row",
                    justify: "center",
                    alignItems: "center",
                    className: "row no-margin no-padding",
                  },
                  o.a.createElement(
                    S.a,
                    {
                      container: !0,
                      direction: "row",
                      alignItems: "center",
                      justify: "center",
                      className: "col-4 no-margin no-padding imgDiv",
                    },
                    o.a.createElement("img", {
                      className: "logoImg",
                      width: "100%",
                      alt: "".concat(e.socialName, "Logo!"),
                      src: t.get(e.socialName),
                    })
                  ),
                  o.a.createElement(
                    S.a,
                    {
                      direction: "column",
                      justify: "center",
                      className: "col no-margin no-padding socialTitle",
                    },
                    o.a.createElement(
                      "h2",
                      { className: "montserrat-medium socialName" },
                      e.socialName
                    ),
                    o.a.createElement(
                      "h2",
                      { className: "montserrat-medium socialHandle" },
                      e.handle
                    )
                  )
                )
              )
            );
          return e.width > 1400 ? i : e.width <= 1400 && e.width > 700 ? n : a;
        },
        z = (function (e) {
          Object(l.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var n;
            return (
              Object(r.a)(this, a),
              ((n = t.call(this, e)).updateWidth = n.updateWidth.bind(
                Object(C.a)(n)
              )),
              (n.state = { width: window.innerWidth }),
              n
            );
          }
          return (
            Object(A.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({ width: window.innerWidth }),
                    window.addEventListener("resize", this.updateWidth);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.updateWidth);
                },
              },
              {
                key: "updateWidth",
                value: function () {
                  this.setState({ width: window.innerWidth });
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(I, { title: "contact me" }),
                    o.a.createElement(
                      "div",
                      { className: "socialWrapper" },
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-center" },
                        o.a.createElement(
                          "h4",
                          { className: "col-auto montserrat-medium" },
                          " kaspar78@mouco.com "
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "row socialRow justify-content-center" },
                        o.a.createElement(V, {
                          socialName: "Github",
                          handle: "@kaspar78",
                          socialLink: "https://github.com/kaspar78",
                          width: this.state.width,
                        }),
                        o.a.createElement(V, {
                          socialName: "Instagram",
                          handle: "@kaspar.p",
                          socialLink: "https://instagram.com/kaspar.p",
                          width: this.state.width,
                        })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "row socialRow justify-content-center" },
                        o.a.createElement(V, {
                          socialName: "Twitter",
                          handle: "@kasparFpoland",
                          socialLink: "https://twitter.com/kasparFpoland",
                          width: this.state.width,
                        }),
                        o.a.createElement(V, {
                          socialName: "LinkedIn",
                          handle: "@Kaspar Poland",
                          socialLink:
                            "https://www.linkedin.com/in/kaspar-p-48b115110/",
                          width: this.state.width,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component);
      a(136);
      var L = function (e) {
          return o.a.createElement(
            S.a,
            {
              container: !0,
              direction: "column",
              justify: "center",
              alignItems: "center",
              style: {
                height: "100vh",
                padding: "0",
                margin: 0,
                textAlign: "center",
              },
            },
            o.a.createElement(
              "div",
              { item: "true", className: "text-center", style: { margin: 0 } },
              "It seems that you have stumbled onto a page that doesn't exist.",
              "\n"
            ),
            o.a.createElement(
              "a",
              { href: "/" },
              o.a.createElement(
                "h3",
                {
                  item: "true",
                  className:
                    "hover-underline montserrat-medium fs-2rem return-to-safety",
                },
                "return to safety"
              )
            )
          );
        },
        X = a(45),
        _ =
          (a(137),
          (function (e) {
            Object(l.a)(a, e);
            var t = Object(c.a)(a);
            function a(e) {
              var n;
              return (
                Object(r.a)(this, a),
                ((n = t.call(this, e)).callBackend = Object(v.a)(
                  y.a.mark(function e() {
                    var t, a, n, o;
                    return y.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = document.getElementById("messageInput")),
                              (a = t.getAttribute("value")),
                              (e.next = 4),
                              h()({
                                method: "post",
                                url: "/api/RS",
                                data: { message: a },
                              })
                            );
                          case 4:
                            return (n = e.sent), (e.next = 7), n.data;
                          case 7:
                            (o = e.sent),
                              (document.getElementById("staticErrors").value =
                                o[0]),
                              (document.getElementById("staticEncoded").value =
                                o[1]),
                              (document.getElementById(
                                "staticCorrupted"
                              ).value = o[2]),
                              (document.getElementById("staticDecoded").value =
                                o[3]);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                (n.copyText = n.copyText.bind(Object(C.a)(n))),
                (n.state = {
                  pageNumber: 1,
                  numPages: null,
                  messageVal: "Change this text!",
                  citePaperText: "cite the paper",
                  buttonText: "Wait...",
                }),
                n
              );
            }
            return (
              Object(A.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.callBackend();
                  },
                },
                {
                  key: "copyText",
                  value: function () {
                    var e = this;
                    navigator.permissions
                      .query({ name: "clipboard-write" })
                      .then(function (t) {
                        ("granted" !== t.state && "prompt" !== t.state) ||
                          navigator.clipboard.writeText("CITATION").then(
                            function () {
                              e.setState({ citePaperText: "citation copied!" });
                              var t = setTimeout(function () {
                                return e.setState(
                                  { citePaperText: "cite the paper" },
                                  function () {
                                    return clearTimeout(t);
                                  }
                                );
                              }, 2e3);
                            },
                            function () {
                              console.log("failed");
                            }
                          );
                      });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(I, {
                        title: "reed solomon encoding/decoding",
                      }),
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-center" },
                        o.a.createElement(
                          "div",
                          {
                            className:
                              "col-11 col-lg-7 col-md-10 col-sm-10 textWrapper",
                          },
                          o.a.createElement(
                            "form",
                            { className: "text-center" },
                            o.a.createElement("hr", null),
                            o.a.createElement(
                              "div",
                              { className: "form-group row" },
                              o.a.createElement(
                                "label",
                                {
                                  id: "messageField",
                                  htmlFor: "messageInput",
                                  className: "col-4 col-form-label",
                                },
                                "Message"
                              ),
                              o.a.createElement(
                                "div",
                                { className: "col-5" },
                                o.a.createElement("input", {
                                  type: "text",
                                  className: "form-control-plaintext",
                                  id: "messageInput",
                                  name: "messageVal",
                                  onChange: function (t) {
                                    var a;
                                    e.setState(
                                      ((a = {}),
                                      Object(X.a)(
                                        a,
                                        t.target.name,
                                        t.target.value
                                      ),
                                      Object(X.a)(a, "buttonText", "Go!"),
                                      a)
                                    );
                                  },
                                  value: this.state.messageVal,
                                })
                              ),
                              o.a.createElement("input", {
                                type: "button",
                                id: "RSButton",
                                onClick: this.callBackend,
                                className:
                                  "btn btn-primary mb-2 col-2 montserrat-medium",
                                value: this.state.buttonText,
                              })
                            ),
                            o.a.createElement("hr", null),
                            o.a.createElement(
                              "div",
                              { className: "form-group row" },
                              o.a.createElement(
                                "label",
                                {
                                  htmlFor: "staticEncoded",
                                  className: "col-4 col-form-label",
                                },
                                "Encoded Message"
                              ),
                              o.a.createElement(
                                "div",
                                { className: "col-8" },
                                o.a.createElement("input", {
                                  type: "text",
                                  disabled: !0,
                                  className: "form-control",
                                  id: "staticEncoded",
                                  placeholder: "",
                                })
                              )
                            ),
                            o.a.createElement("hr", null),
                            o.a.createElement(
                              "div",
                              { className: "form-group row" },
                              o.a.createElement(
                                "label",
                                {
                                  htmlFor: "staticErrors",
                                  className: "col-4 col-form-label",
                                },
                                "# of correctable errors"
                              ),
                              o.a.createElement(
                                "div",
                                { className: "col-8" },
                                o.a.createElement("input", {
                                  type: "text",
                                  disabled: !0,
                                  className: "form-control",
                                  id: "staticErrors",
                                  placeholder: "",
                                })
                              )
                            ),
                            o.a.createElement("hr", null),
                            o.a.createElement(
                              "div",
                              { className: "form-group row" },
                              o.a.createElement(
                                "label",
                                {
                                  htmlFor: "staticEncoded",
                                  className: "col-4 col-form-label",
                                },
                                "Corrupted Message"
                              ),
                              o.a.createElement(
                                "div",
                                { className: "col-8" },
                                o.a.createElement("input", {
                                  type: "text",
                                  disabled: !0,
                                  className: "form-control",
                                  id: "staticCorrupted",
                                  placeholder: "",
                                })
                              )
                            ),
                            o.a.createElement("hr", null),
                            o.a.createElement(
                              "div",
                              { className: "form-group row" },
                              o.a.createElement(
                                "label",
                                {
                                  htmlFor: "staticDecoded",
                                  className: "col-4 col-form-label",
                                },
                                "Decoded Message"
                              ),
                              o.a.createElement(
                                "div",
                                { className: "col-8" },
                                o.a.createElement("input", {
                                  type: "text",
                                  disabled: !0,
                                  className: "form-control",
                                  id: "staticDecoded",
                                  placeholder: "",
                                })
                              )
                            ),
                            o.a.createElement("hr", null)
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "What is this page?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Above is an example of a Reed-Solomon Encoder and Decoder. It uses the Berlekamp-Massey Algorithm to decode Reed-Solomon codes. An RS encoder/decoder is a way to protect data from any type of corruption. That may be the static through the phone, or the natural imperfections of the wires we use to transmit digital data. I conceptualized/planned this for my AP Computer Science Principles Class in April of 2018, and finally built it in December 2018 and January 2019."
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "What does an RS encoder/decoder do?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "As previously stated, it protects data. Specifically, it adds specially chosen characters on the end of some data so that if the data gets corrupted, it can be recovered again. There are a couple terms to remember here. A 'message' is the data that is inputted. In the example above, the 'message' is simply a string of characters that you can put in yourself. An 'encoded message' is the message + the other specially chosen characters. You will see this as the message with some weird symbols on the end. The 'corrupted message' is a way I am pretending that the message has experienced some corruption, like what happens over old phone lines or imperfect wires. The 'decoded message' is then the message, but recovered. The algorithm has used the special characters on the end and done some math and gotten the original message back."
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "How is this useful?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "RS encoding/decoding techniques are used in nearly all forms of signal engineering. One of the most important/famous examples of RS encoding being used is in the Voyager 1 spacecraft. It flew beyond the solar system and used a method of RS encoding and decoding to make sure the pictures it took got back to NASA safely, without corruption from the radiation in space."
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "What do I do?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "This program is one of the least exciting I've ever written. Simply type some characters into the message field, press the button, and witness the algorithm work. You could learn more about it, though. I've written a very long paper explaining how someone can construct a Reed-Solomon code, and use this technique themselves."
                          ),
                          o.a.createElement("br", null)
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "link-wrapper" },
                        o.a.createElement(
                          "div",
                          { className: "row justify-content-center" },
                          o.a.createElement(
                            "div",
                            { className: "col-auto text-right" },
                            o.a.createElement(
                              "a",
                              {
                                href:
                                  "/assets/OnTheConstructionOfReedSolomonCodes.pdf",
                                download: "",
                                className: "like-link",
                              },
                              o.a.createElement(
                                "h1",
                                {
                                  className:
                                    "montserrat-medium hover-underline reed-solomon-paper-link",
                                },
                                "read the paper"
                              )
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "col-auto text-left" },
                            o.a.createElement(
                              "button",
                              {
                                onClick: this.copyText,
                                className: "like-link",
                              },
                              o.a.createElement(
                                "h1",
                                {
                                  className:
                                    "montserrat-medium hover-underline reed-solomon-paper-link",
                                },
                                this.state.citePaperText
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(o.a.Component)),
        $ = a(92),
        ee = a.n($),
        te = a(93),
        ae = a.n(te),
        ne = a(99);
      function oe(e, t) {
        for (var a = 0, n = Math.random(1); n > 0; )
          (n -= e[a].fitness), (a += 1);
        return e[(a -= 1)].copy();
      }
      var ie,
        se,
        re,
        Ae = (function () {
          function e(t, a) {
            var n = this;
            Object(r.a)(this, e),
              (this.rows = t),
              (this.cols = a),
              (this.data = Array(this.rows)
                .fill()
                .map(function () {
                  return Array(n.cols).fill(0);
                }));
          }
          return (
            Object(A.a)(
              e,
              [
                {
                  key: "copy",
                  value: function () {
                    for (
                      var t = new e(this.rows, this.cols), a = 0;
                      a < this.rows;
                      a++
                    )
                      for (var n = 0; n < this.cols; n++)
                        t.data[a][n] = this.data[a][n];
                    return t;
                  },
                },
                {
                  key: "toArray",
                  value: function () {
                    for (var e = [], t = 0; t < this.rows; t++)
                      for (var a = 0; a < this.cols; a++)
                        e.push(this.data[t][a]);
                    return e;
                  },
                },
                {
                  key: "randomize",
                  value: function () {
                    return this.map(function (e) {
                      return 2 * Math.random() - 1;
                    });
                  },
                },
                {
                  key: "add",
                  value: function (t) {
                    return t instanceof e
                      ? this.rows !== t.rows || this.cols !== t.cols
                        ? void console.log(
                            "Columns and Rows of A must match Columns and Rows of B."
                          )
                        : this.map(function (e, a, n) {
                            return e + t.data[a][n];
                          })
                      : this.map(function (e) {
                          return e + t;
                        });
                  },
                },
                {
                  key: "multiply",
                  value: function (t) {
                    return t instanceof e
                      ? this.rows !== t.rows || this.cols !== t.cols
                        ? void console.log(
                            "Columns and Rows of A must match Columns and Rows of B."
                          )
                        : this.map(function (e, a, n) {
                            return e * t.data[a][n];
                          })
                      : this.map(function (e) {
                          return e * t;
                        });
                  },
                },
                {
                  key: "map",
                  value: function (e) {
                    for (var t = 0; t < this.rows; t++)
                      for (var a = 0; a < this.cols; a++) {
                        var n = this.data[t][a];
                        this.data[t][a] = e(n, t, a);
                      }
                    return this;
                  },
                },
                {
                  key: "print",
                  value: function () {
                    return console.table(this.data), this;
                  },
                },
                {
                  key: "serialize",
                  value: function () {
                    return JSON.stringify(this);
                  },
                },
              ],
              [
                {
                  key: "fromArray",
                  value: function (t) {
                    return new e(t.length, 1).map(function (e, a) {
                      return t[a];
                    });
                  },
                },
                {
                  key: "subtract",
                  value: function (t, a) {
                    if (t.rows === a.rows && t.cols === a.cols)
                      return new e(t.rows, t.cols).map(function (e, n, o) {
                        return t.data[n][o] - a.data[n][o];
                      });
                    console.log(
                      "Columns and Rows of A must match Columns and Rows of B."
                    );
                  },
                },
                {
                  key: "transpose",
                  value: function (t) {
                    return new e(t.cols, t.rows).map(function (e, a, n) {
                      return t.data[n][a];
                    });
                  },
                },
                {
                  key: "multiply",
                  value: function (t, a) {
                    if (t.cols === a.rows)
                      return new e(t.rows, a.cols).map(function (e, n, o) {
                        for (var i = 0, s = 0; s < t.cols; s++)
                          i += t.data[n][s] * a.data[s][o];
                        return i;
                      });
                    console.log("Columns of A must match rows of B.");
                  },
                },
                {
                  key: "map",
                  value: function (t, a) {
                    return new e(t.rows, t.cols).map(function (e, n, o) {
                      return a(t.data[n][o], n, o);
                    });
                  },
                },
                {
                  key: "deserialize",
                  value: function (t) {
                    "string" == typeof t && (t = JSON.parse(t));
                    var a = new e(t.rows, t.cols);
                    return (a.data = t.data), a;
                  },
                },
              ]
            ),
            e
          );
        })(),
        le = function e(t, a) {
          Object(r.a)(this, e), (this.func = t), (this.dfunc = a);
        },
        ce = new le(
          function (e) {
            return 1 / (1 + Math.exp(-e));
          },
          function (e) {
            return e * (1 - e);
          }
        ),
        me =
          (new le(
            function (e) {
              return Math.tanh(e);
            },
            function (e) {
              return 1 - e * e;
            }
          ),
          (function () {
            function e(t, a, n, o) {
              Object(r.a)(this, e),
                t instanceof e
                  ? ((this.input_nodes = t.input_nodes),
                    (this.hidden_nodes1 = t.hidden_nodes1),
                    (this.hidden_nodes2 = t.hidden_nodes2),
                    (this.output_nodes = t.output_nodes),
                    (this.weights_ih = t.weights_ih.copy()),
                    (this.weights_hh = t.weights_hh.copy()),
                    (this.weights_ho = t.weights_ho.copy()),
                    (this.bias_h1 = t.bias_h1.copy()),
                    (this.bias_h2 = t.bias_h2.copy()),
                    (this.bias_o = t.bias_o.copy()))
                  : ((this.input_nodes = t),
                    (this.hidden_nodes1 = a),
                    (this.hidden_nodes2 = n),
                    (this.output_nodes = o),
                    (this.weights_ih = new Ae(
                      this.hidden_nodes1,
                      this.input_nodes
                    )),
                    (this.weights_hh = new Ae(
                      this.hidden_nodes2,
                      this.hidden_nodes1
                    )),
                    (this.weights_ho = new Ae(
                      this.output_nodes,
                      this.hidden_nodes2
                    )),
                    this.weights_ih.randomize(),
                    this.weights_hh.randomize(),
                    this.weights_ho.randomize(),
                    (this.bias_h1 = new Ae(this.hidden_nodes1, 1)),
                    (this.bias_h2 = new Ae(this.hidden_nodes2, 1)),
                    (this.bias_o = new Ae(this.output_nodes, 1)),
                    this.bias_h1.randomize(),
                    this.bias_h2.randomize(),
                    this.bias_o.randomize()),
                this.setLearningRate(),
                this.setActivationFunction();
            }
            return (
              Object(A.a)(
                e,
                [
                  {
                    key: "predict",
                    value: function (e) {
                      var t = Ae.fromArray(e),
                        a = Ae.multiply(this.weights_ih, t),
                        n = Ae.multiply(this.weights_hh, a);
                      a.add(this.bias_h1),
                        n.add(this.bias_h2),
                        a.map(this.activation_function.func),
                        n.map(this.activation_function.func);
                      var o = Ae.multiply(this.weights_ho, n);
                      return (
                        o.add(this.bias_o),
                        o.map(this.activation_function.func),
                        o.toArray()
                      );
                    },
                  },
                  {
                    key: "setLearningRate",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0.1;
                      this.learning_rate = e;
                    },
                  },
                  {
                    key: "setActivationFunction",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : ce;
                      this.activation_function = e;
                    },
                  },
                  {
                    key: "train",
                    value: function (e, t) {
                      var a = Ae.fromArray(e),
                        n = Ae.multiply(this.weights_ih, a);
                      n.add(this.bias_h), n.map(this.activation_function.func);
                      var o = Ae.multiply(this.weights_ho, n);
                      o.add(this.bias_o), o.map(this.activation_function.func);
                      var i = Ae.fromArray(t),
                        s = Ae.subtract(i, o),
                        r = Ae.map(o, this.activation_function.dfunc);
                      r.multiply(s), r.multiply(this.learning_rate);
                      var A = Ae.transpose(n),
                        l = Ae.multiply(r, A);
                      this.weights_ho.add(l), this.bias_o.add(r);
                      var c = Ae.transpose(this.weights_ho),
                        m = Ae.multiply(c, s),
                        h = Ae.map(n, this.activation_function.dfunc);
                      h.multiply(m), h.multiply(this.learning_rate);
                      var d = Ae.transpose(a),
                        u = Ae.multiply(h, d);
                      this.weights_ih.add(u), this.bias_h.add(h);
                    },
                  },
                  {
                    key: "serialize",
                    value: function () {
                      return JSON.stringify(this);
                    },
                  },
                  {
                    key: "copy",
                    value: function () {
                      return new e(this);
                    },
                  },
                  {
                    key: "mutate",
                    value: function (e) {
                      this.weights_ih.map(e),
                        this.weights_hh.map(e),
                        this.weights_ho.map(e),
                        this.bias_h1.map(e),
                        this.bias_h2.map(e),
                        this.bias_o.map(e);
                    },
                  },
                ],
                [
                  {
                    key: "deserialize",
                    value: function (t) {
                      "string" == typeof t && (t = JSON.parse(t));
                      var a = new e(
                        t.input_nodes,
                        t.hidden_nodes,
                        t.output_nodes
                      );
                      return (
                        (a.weights_ih = Ae.deserialize(t.weights_ih)),
                        (a.weights_ho = Ae.deserialize(t.weights_ho)),
                        (a.bias_h = Ae.deserialize(t.bias_h)),
                        (a.bias_o = Ae.deserialize(t.bias_o)),
                        (a.learning_rate = t.learning_rate),
                        a
                      );
                    },
                  },
                ]
              ),
              e
            );
          })()),
        he = [],
        de = [],
        ue = 0,
        pe = 0,
        ge = 0,
        fe = function (e) {
          function t(e) {
            var t = e.state[0],
              a = e.state[2],
              n = e.state[4];
            return (
              t < -25 ||
              t > 25 ||
              a > 0.785 ||
              a < -0.785 ||
              n > 0.785 ||
              n < -0.785
            );
          }
          function a() {
            !(function (e) {
              for (var t = 0; t < e.length; t++)
                e[t].score = Math.pow(e[t].score, 2);
              for (var a = 0, n = 0; n < e.length; n++) a += e[n].score;
              for (var o = 0; o < e.length; o++) e[o].fitness = e[o].score / a;
            })(de),
              (he = (function (e, t) {
                for (var a = [], n = 0; n < e.length; n++) {
                  var o = oe(e, t);
                  a[n] = o;
                }
                return a;
              })(de)),
              (de = Object(ne.a)(he));
          }
          function n(t) {
            return Math.random() < 0.1 ? t + 0.5 * e.randomGaussian() : t;
          }
          e,
            (e.windowResized = function () {
              (se = 0.4 * e.windowWidth),
                (re = e.map(se, 200, 600, 15, 50)),
                e.resizeCanvas(se, se),
                ie.position((-0.35 * e.windowWidth) / 2, se - se / 12);
            }),
            (e.setup = function () {
              (se = 0.4 * e.windowWidth),
                (re = e.map(se, 200, 600, 15, 50)),
                e.createCanvas(se, se).parent("sketchHolder"),
                e.background(51);
              for (var t = 0; t < 1e3; t++) he.push(new o(null, e));
              var a,
                n = Object(b.a)(he);
              try {
                for (n.s(); !(a = n.n()).done; ) {
                  var i = a.value;
                  de.push(i);
                }
              } catch (s) {
                n.e(s);
              } finally {
                n.f();
              }
              e.push(),
                (ie = e.createSlider(1, 1e3, 2)).style("width", "35vw"),
                ie.position((-0.35 * e.windowWidth) / 2, se - se / 12),
                ie.id("slider"),
                ie.parent("sliderHolder"),
                e.pop();
            }),
            (e.draw = function () {
              ge = ie.value();
              for (var n = 0; n < ge; n++) {
                e.background(51);
                for (var o = he.length - 1; o >= 0; o--) {
                  var i = he[o];
                  !1 === t(i) ? i.update(e) : !0 === t(i) && he.splice(o, 1);
                }
                0 === he.length && (a(), (pe = 0), ue++), pe++;
              }
              !(function () {
                e.stroke(255),
                  e.strokeWeight(e.map(se, 200, 600, 0.5, 3)),
                  e.line(0, se / 2, e.width, se / 2);
                for (var t = 0; t < he.length; t += 1) {
                  var a = he[t];
                  e.strokeWeight(1), a.display(e);
                }
                e.fill(255),
                  e.noStroke(),
                  e.textAlign(e.LEFT, e.BOTTOM),
                  e.textSize(re),
                  e.text("Current Score: ", se / 30, se - se / 6),
                  e.text(pe, se - se / 6, se - se / 6),
                  e.text("Generation: ", se / 30, (3 * se) / 4),
                  e.text(ue, se - se / 6, (3 * se) / 4);
              })();
            });
          var o = (function () {
            function t(a) {
              Object(r.a)(this, t),
                (this.gravity = 9.8),
                (this.cart_mass = 1),
                (this.pole_mass1 = 0.1),
                (this.pole_mass2 = 0.1),
                (this.l1 = 0.5),
                (this.l2 = 0.5),
                (this.radius = se / 6),
                (this.dt = 0.02),
                a instanceof me
                  ? ((this.brain = a.copy()), this.brain.mutate(n))
                  : (this.brain = new me(6, 25, 25, 3)),
                (this.score = 0),
                (this.fitness = 0),
                (this.state = [
                  e.random(-2, 2),
                  e.random(-1, 1),
                  e.random(-1.9, 1.9),
                  e.random(-1, 1),
                  e.random(-1.9, 1.9),
                  e.random(-1, 1),
                ]);
            }
            return (
              Object(A.a)(t, [
                {
                  key: "copy",
                  value: function () {
                    return new t(this.brain);
                  },
                },
                {
                  key: "chooseAction",
                  value: function () {
                    var t,
                      a = [],
                      n = Object(b.a)(this.state);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var o = t.value;
                        a.push(o);
                      }
                    } catch (A) {
                      n.e(A);
                    } finally {
                      n.f();
                    }
                    var i = this.brain.predict(a),
                      s = [i[0], i[1]],
                      r = e.map(i[2], 0, 1, 0, 10);
                    return (
                      (2 *
                        (function (e) {
                          for (var t, a = 0, n = 0; n < e.length; n++) {
                            var o = e[n];
                            o > a && ((a = o), (t = n));
                          }
                          return t;
                        })(s) -
                        1) *
                      r
                    );
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this.chooseAction();
                    this.runDoublePhysics(e), this.score++;
                  },
                },
                {
                  key: "display",
                  value: function () {
                    var t = this.state,
                      a = se / 2 + 5 * t[0],
                      n = se / 2,
                      o = t[2],
                      i = t[4],
                      s = (3 * e.PI) / 2,
                      r = a + this.radius * this.l1 * e.cos(o + s),
                      A = n + this.radius * this.l1 * e.sin(o + s),
                      l = r + this.radius * this.l2 * e.cos(i + s),
                      c = A + this.radius * this.l2 * e.sin(i + s);
                    e.rectMode(e.CENTER),
                      e.fill(47, 73, 114),
                      e.rect(a, se / 2, se / 10, se / 40),
                      e.line(a, n, r, A),
                      e.fill(0),
                      e.fill(209, 132, 16),
                      e.ellipse(r, A, se / 60),
                      e.line(r, A, l, c),
                      e.fill(209, 132, 16),
                      e.ellipse(l, c, se / 60);
                  },
                },
                {
                  key: "runDoublePhysics",
                  value: function (t) {
                    var a = 0,
                      n = 0,
                      o = 0,
                      i = t,
                      s = this.state,
                      r = s[0],
                      A = s[1],
                      l = s[2],
                      c = s[3],
                      m = s[4],
                      h = s[5],
                      d = 2 * this.l1,
                      u = (1 / 3) * this.pole_mass1 * this.l1 * this.l1,
                      p = (1 / 3) * this.pole_mass2 * this.l2 * this.l2,
                      g = this.cart_mass + this.pole_mass1 + this.pole_mass2,
                      f = this.pole_mass1 * this.l1 + this.pole_mass2 * d,
                      E = this.pole_mass2 * this.l2,
                      w =
                        this.pole_mass1 * this.l1 * this.l1 +
                        this.pole_mass2 * d * d +
                        u,
                      y = this.pole_mass2 * this.l2 * d,
                      v = this.pole_mass2 * this.l2 * this.l2 + p,
                      b =
                        this.pole_mass1 * this.l1 * this.gravity +
                        this.pole_mass2 * d * this.gravity,
                      C = this.pole_mass2 * this.l2 * this.gravity;
                    (a =
                      (f * c * c * e.sin(l) +
                        E * h * h * e.sin(m) +
                        i -
                        f * n * e.cos(l) -
                        E * o * e.cos(m)) /
                      g),
                      (n =
                        (b * e.sin(l) -
                          y * h * h * e.sin(l - m) -
                          f * e.cos(l) * a -
                          y * e.cos(l - m) * o) /
                        w),
                      (o =
                        (y * c * c * e.sin(l - m) +
                          C * e.sin(m) -
                          E * e.cos(m) * a -
                          y * e.cos(l - m) * n) /
                        v),
                      (r += A * this.dt),
                      (A += this.dt * a),
                      (l += c * this.dt),
                      (c += n * this.dt),
                      (m += h * this.dt),
                      (h += o * this.dt),
                      (a = 0),
                      (n = 0),
                      (o = 0),
                      (this.state = [r, A, l, c, m, h]);
                  },
                },
              ]),
              t
            );
          })();
        };
      var Ee = a(94),
        we = a.n(Ee),
        ye =
          (a(138),
          (function (e) {
            Object(l.a)(a, e);
            var t = Object(c.a)(a);
            function a() {
              return Object(r.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(A.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.mySketch = new we.a(fe);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.a.createElement(
                      "div",
                      { style: { overflow: "hidden" } },
                      o.a.createElement(I, {
                        title: "double pendulum learning simulation",
                      }),
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-center" },
                        o.a.createElement("div", { id: "sliderHolder" })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-center" },
                        o.a.createElement("div", { id: "sketchHolder" })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "row justify-content-center textWrapper" },
                        o.a.createElement(
                          "div",
                          { className: "col-10 col-lg-7" },
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            " How do I use the program?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Well, you watch it. The slider at the bottom controls how fast you want the simulation to go. Far left is one tick per frame, far right is 200 ticks per frame. I suggest 80, since too much really does lag a laptop. My desktop at home runs 200 fine, however, so if that suits you, go for it! Other than that, there is no interaction. Think of it as a science experiment!"
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "What does this program actually do?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Well, put simply, it learns. Each cartpole (each little cart attached to a pole) is its own thing, and has a brain. That brain is a neural network, and it is set randomly in the beginning. The point of this program is for them to learn how to stand up and stay up for as long as possible. This is done with a genetic algorithm in combination with a neural network, to create something called",
                            o.a.createElement(
                              "strong",
                              null,
                              " neuroevolution"
                            ),
                            ". It sounds fancy and it kind of is, but the effect is really cool to watch."
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "How does that work and what do those words mean?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Calculus, to put it simply. I should do a little introductory paragraph about neural networks, but I won't. Not my place. Essentially dummy AI, and there are many many places you can get better info than here."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Back to my program. The algorithm starts every generation of cartpoles with a population of 1000. There are bounds to how far their poles can go down before they are classified as dead and removed from the simulation. Every frame, the remaining cartpoles gain +1 score. This has to do with the fitness function, which I will address later. This keeps going, until they all die. The BEST cartpole (evalutated through the fitness function) is then chosen to be the father of his people. (I laughed when writing that). From its specific characteristics, the new generation of 1000 cartpoles are born, all based upon their father, but with a 10% mutation rate (another piece of jargon I'll get to later). This makes them slightly different so that they have the chance to improve. This process goes on and on until one succeeds, and he is crowned the best of Balance Land!"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "There is a little more that goes on behind the scenes, though. How does the cartpole balance? What is a fitness function? What are mutation rates?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "A mutation rate is essentially a function. It takes a number, and changes it by what is called a normed value. The image below is a normal distribution of values over an interval."
                          ),
                          o.a.createElement(
                            "div",
                            { className: "row justify-content-center" },
                            o.a.createElement(
                              "div",
                              { className: "col-10 text-center" },
                              o.a.createElement("img", {
                                className: "w-75",
                                src: ee.a,
                                alt: "Normal Distribution Graph",
                              })
                            )
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Imagine the number passed into the mutation function is at the very crest. If the mutation happens (a 10% chance), then a number is chosen from this normal distribution. This number is more likely to be closer to the number passed in than farther away, and we get a desired",
                            o.a.createElement(
                              "strong",
                              null,
                              " edging towards victory "
                            ),
                            " effect. If you know AI, its like a hack for gradient descent. It's like genetic's cheat to be like \"please AI notice me I'm inefficient but I try\". This mutation function, when used on a child's characteristics, causes it to be slightly different than its parent, which sometimes makes them fail harder and other times, succeed. The mutation function ends up being used within the brain of the cartpole to change the outcome of each decision it makes. The weights, specifically, for AI people."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Another term: fitness functions. This one gets complicated for other AI, but is really simple for this one. Essentially for AI to succeed, we need to quantify success. The fitness function is a function that takes in any amount of inputs, and spits one one",
                            " ",
                            o.a.createElement(
                              "strong",
                              null,
                              "scalar quantity"
                            ),
                            " (a number). This number is usually made to be the higher the better. The trick is finding the right function. Mine is really simple. The cartpoles that lasted the longest are obviously better, so my fitness function IS each cartpoles score value. If a cartpole is bad, it will fall fast, and have one of maybe 50, and if it lasts for 10,000 ticks, then it is good, and it should have a greater fitness value than its bad cartpole friend."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Now to the",
                            o.a.createElement("strong", null, "really"),
                            " good stuff: how does the cartpole",
                            o.a.createElement("strong", null, "actually"),
                            " balance? Well, that requires me to talk about its brain. Its brain is a neural network, with 6 input neurons, 2 hidden layers with 10 nodes each, and an output layer with 3 neurons."
                          ),
                          o.a.createElement(
                            "div",
                            { className: "row justify-content-center" },
                            o.a.createElement(
                              "div",
                              { className: "col-10 text-center" },
                              o.a.createElement("img", {
                                className: "w-75",
                                src: ae.a,
                                alt: "Neural Network",
                              })
                            )
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "The picture above depicts a neural network with 6 inputs, 2 hidden layers with 10 nodes each, and 3 output nodes. Each circle either represents a calculation point (for the hidden layers), an input, or an output. The circles on the left represent each of the 6 inputs, and the circles on the right represent each of the three outputs. The circles in the middle are all points of calculation, and they are the source of complexity for the neural network."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "If that made no sense to you, don't worry about it. The only important part to non AI people is the 3 output neurons. Essentially, the neural networks take INPUTS, does calculations (remember the calculus up there), and spits out numbers in each of the 3 neurons. So every time our cartpole makes a decision, a total of ",
                            o.a.createElement("strong", null, "three"),
                            " numbers are outputted, one for each neuron. At every frame, the cartpole makes a decision. To make that decision, it uses its six inputs: its position, its velocity, the angle of first pole, the angular velocity of the first pole, the angle of the second pole, and the angular velocity of the second pole. Essentially, those 6 pieces of data that tell the cartpole where each of its body parts are and how they are moving. The cartpole then uses these inputs, does some number crunching, and spits out three output numbers. Each number means something specific in how the decision is affected. The first number means:",
                            o.a.createElement(
                              "strong",
                              null,
                              "How much force do I want to put into my next movement"
                            ),
                            "on a scale of 0 to 1 (0 being no force, 1 being lots of force). The second and third numbers are simpler. They compare against each other and whichever is highest is the direction that force is applied. The decision numbers go",
                            o.a.createElement(
                              "strong",
                              null,
                              "[amount_of_force, go_left_confidence, go_right_confidence]"
                            ),
                            ". For example, if the numbers are [1, 1, 0], then lots of force is applied to the left, but at [0.4, 0.2, 0.3], there is a medium amount of force applied to the right. At every frame, the cartpole makes this decision. This force is applied into the physics equations, and the cycle begins again."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "In essence, that's all there is to it. They learn. They end up learning how to stand at an average (not tested or measured, only noticed) at generation 1400. Because it is based on random chance (as all genetic algorithms are), the lowest generation I've seen them learn at was 565, and the highest was ~14,000."
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "Where is this project going?"
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Right now, nowhere, but hopefully in the future, somewhere. When I finished this version of the program I immediately had the coolest idea to make it better. I wanted the pendulum to learn to succeed with 1 joint on top, and once it hit some arbitrary point of success, say, a score of 10,000, it would get another joint added onto the end. This would be really interesting to learn if the skills would carry over. I imagine they would, and would simply refine to the point of perfection, but who knows. This ended up never being finished, as THERE WAS SO MUCH MATH. I'm still working on understanding the",
                            o.a.createElement(
                              "a",
                              {
                                className: "colored",
                                href:
                                  "https://en.wikipedia.org/wiki/Functional_(mathematics)",
                              },
                              "functionals"
                            ),
                            ",",
                            o.a.createElement(
                              "a",
                              {
                                className: "colored",
                                href:
                                  "https://en.wikipedia.org/wiki/Partial_derivative",
                              },
                              "partial derivatives"
                            ),
                            ",",
                            o.a.createElement(
                              "a",
                              {
                                className: "colored",
                                href:
                                  "https://en.wikipedia.org/wiki/Multivariable_calculus",
                              },
                              "multi-variate functions"
                            ),
                            ', and taking numerical derivatives of all of it. The problem arises when calculating the physics formulae for each different number of links. It really is cool stuff. Point is, taking a second order numeric partial derivatives is hard when solving for lots of unknown variables (accelerations the angles of each "pole"). I do hope someday I come back and am able to do it.'
                          ),
                          o.a.createElement(
                            "h3",
                            { className: "montserrat-light" },
                            "That's it..."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Hope you learned something or at least thought it was interesting... This might be the only project I do this long of a writeup for, but that's only because I loved working on it."
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(o.a.Component)),
        ve = a(95),
        be = a.n(ve),
        Ce = (function (e) {
          Object(l.a)(a, e);
          var t = Object(c.a)(a);
          function a() {
            return Object(r.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(A.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.socket = be()();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.socket.emit("disconnect");
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    d.a,
                    null,
                    o.a.createElement(
                      u.c,
                      null,
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "/projects" },
                        o.a.createElement(x, null)
                      ),
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "/updates" },
                        o.a.createElement(N, null)
                      ),
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "/contactme" },
                        o.a.createElement(z, null)
                      ),
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "/double-pendulum" },
                        o.a.createElement(ye, null)
                      ),
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "/reed-solomon" },
                        o.a.createElement(_, null)
                      ),
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "/" },
                        o.a.createElement(E, null)
                      ),
                      o.a.createElement(
                        u.a,
                        { exact: !0, path: "*" },
                        o.a.createElement(L, null)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      s.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(Ce, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    59: function (e, t, a) {},
    60: function (e, t, a) {},
    61: function (e, t, a) {},
    76: function (e, t, a) {
      e.exports = a.p + "static/media/blackCircle.cf4ccf2e.png";
    },
    79: function (e, t, a) {
      e.exports = a.p + "static/media/headliner.417224b4.png";
    },
    80: function (e, t, a) {
      e.exports = a.p + "static/media/headliner_hover.b255704d.png";
    },
    81: function (e, t, a) {
      e.exports = a.p + "static/media/headliner.fe96c322.png";
    },
    82: function (e, t, a) {
      e.exports = a.p + "static/media/headliner_hover.87b9f436.png";
    },
    85: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    86: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    87: function (e, t, a) {
      e.exports = a.p + "static/media/instagramLogo.11ee7e0b.jpg";
    },
    88: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///9MTEz8/PyTk5PNzc339/c4ODjo6OhPT0+MjIzu7u6xsbERERGnp6fy8vIiIiLe3t6fn58+Pj5GRkaBgYF6enpfX1/R0dG6urqPj4/X19eZmZlmZmZZWVlkZGQuLi4xMTEZGRlycnK3t7fExMQnJycdHR0+1Fr0AAAFB0lEQVR4nO2daXeqMBCGQW8RcEG02kXa2lbo//+H17WKLJPKjFnO+3wup/Mck5BkksHzrwhHcTQdezYynkbxKLwW8sp62UB3mJ0ZZGGjYRDrjo6JOKg3nOgOjJFJjWES6Y6KlSi5NkwL3TExU6RlwwfdAQnwcGmY6o5GhPRsmLjWRA8Uya+hW4PMmehk6NJroszkYBjojkOQYG/oykymjnhnGOqOQpRwa5jpDkKUbGto/2qijYHvud1It83UG+kOQZiR5/JIuiP2XJ3PnIi8qe4QhJl6dm46qeO6HwAAACBB722ZbWaLt3fdgcjwcZG6GuZL3eGwsxxeJeb6bu0OPFUyjy6l47bMavycynfkDYK+H651x8ZCXQv9xYWdrOZfcD+q6g6vO0198MSz7gC78kQI+v5Md4gdae2EB+xOPy5pQf9Fd5CduJ7J1PKpO8oOfKgIWt0TR0qGNic/FMaZHXPdcd5MT03QX+gO9GbeFA3tPeyg8q7YkesO9GYyRUN7D1VtnDekZt32Gy4UDe3th+6Ppe+Khq+6A70dpYm371u8Q9y+g3Ei0R1mB9Re+VYfyuk73kjVZjUr3UF2I6ANe7pj7EZMCtr7uj/yQAgOv3RH2Blinf+oO77urFsFv3WHx8GgZWbjhOCW56Y+6EATPVK/UMztH2TOFC8Vv5Xl78EKn7PLQTUZWT1Va2K+mORpmuaTVyf1AAAAAAAAAACA+zL+Wc/n6+JHdxwyPC436anGU/j8Ejt2E3s+q+6vDx8Wwnd5e36/Hf9f/YMB9dz1ZY1lWtE70M+fZA0pGgzJ3GrZcNF6ZCAUvGZ1H8PKraqqo9j5x3sY/lAZvD0roVOsdzCkk7BHZA4myRtW8wWNpBJn5qUN100jaC2BQDZP2PBR4SRECf47j7KGc6XzOiXYO6Oo4effBflPYEka/iTU39TC/CtKGiq9Bmvg7YtyhvnrjYLM5yPkDIe3dMIDAed7Uc6wC5xH58005BxtDDVkvENuqiHfoVZTDX22NbGxhmzXOo01ZPsRzTXk+hHNNfSZduAMNmQ6YH43w2G6SsO/PWSTYf5d7He2p++bPyz6eTYY72DYL1cs+Fa8TsbVTOUNN5UqsZniszw3ysQN65papLj4ZznmKmzYrw/yS62YA8tiX9iwMT+o1Bk35hs2j4aPKs+zLDBEDdtq96jcI2eZuEka9ltT9Qrb/QFHASdJw/bKiyqFVThW+oKGAXHlZkUbcqQUBQ2pKYlCXpHj3pWgIbWELWhDjotJgobkKRK6mRpuSP7vpkuBthjSNSXp/LfZhnRJSboYgNmGdAHbfzCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEoYBhRP6Xhpug5HP0NWX6VhBHqehx1GsnWtc/SDzWi+j7n2vyfwuXiQYAAAAAAPfC9Ynd2KtUEnOMqefYl2oqRB5/IX6ziD3uIvWmMfLYatUaSugxVo02kYHvEfW2bCfbGrrdTMOtocBnTcwh9neGge4wBAn2hkJfUTKBiX8wZNlWNZH9ZvbeMOGor2geRfJryPo9DHM41M48ZhfoJIl9HD/Tc8qfpK411OJU/fQ3Q5S4Ndyci0lf5MBcemlMzlqXWb7AldlNfFm4vpzHDDP7VxqDrFwKvJKpDUdxNLVze2o8jeJRpdL5f2YjU4xtkVEnAAAAAElFTkSuQmCC";
    },
    92: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,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";
    },
    93: function (e, t, a) {
      e.exports = a.p + "static/media/nn.313db627.png";
    },
  },
  [[103, 1, 2]],
]);
//# sourceMappingURL=main.27113597.chunk.js.map
