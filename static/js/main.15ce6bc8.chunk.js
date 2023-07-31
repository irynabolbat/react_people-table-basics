(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(4),a=n(2),i=(n(18),n(19),n(6)),r=n.n(i),l=(n(20),n(0)),j=function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(s.c,{to:"/",className:j,children:"Home"}),Object(l.jsx)(s.c,{to:"/people",className:j,children:"People"})]})})}),Object(l.jsx)(a.b,{})]})},d=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Home Page"}),Object(l.jsx)(a.b,{})]})},b=n(5),h=n(1),u=(n(22),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(e){var t=e.person,n=(null===t||void 0===t?void 0:t.name)||"-";return Object(l.jsx)(s.b,{to:"../".concat(null===t||void 0===t?void 0:t.slug),className:r()({"has-text-danger":"f"===(null===t||void 0===t?void 0:t.sex)}),children:n})},v=function(e){var t=e.person,n=e.findParent,c=Object(a.i)().personId,s=n(null!==t&&void 0!==t&&t.motherName?null===t||void 0===t?void 0:t.motherName:null),i=n(null!==t&&void 0!==t&&t.fatherName?null===t||void 0===t?void 0:t.fatherName:null),j=(null===t||void 0===t?void 0:t.motherName)||"-",o=(null===t||void 0===t?void 0:t.fatherName)||"-";return Object(l.jsxs)("tr",{"data-cy":"person",className:r()({"has-background-warning":c===(null===t||void 0===t?void 0:t.slug)}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(O,{person:t})},null===t||void 0===t?void 0:t.slug),Object(l.jsx)("td",{children:null===t||void 0===t?void 0:t.sex}),Object(l.jsx)("td",{children:null===t||void 0===t?void 0:t.born}),Object(l.jsx)("td",{children:null===t||void 0===t?void 0:t.died}),Object(l.jsx)("td",{children:s?Object(l.jsx)(O,{person:s}):j}),Object(l.jsx)("td",{children:i?Object(l.jsx)(O,{person:i}):o}),Object(l.jsx)(a.b,{})]})},m=function(){var e=Object(h.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(h.useState)(!1),i=Object(b.a)(s,2),r=i[0],j=i[1],o=Object(h.useState)(""),d=Object(b.a)(o,2),O=d[0],m=d[1];Object(h.useEffect)((function(){j(!0),x().then(c).catch((function(){m("Something went wrong")})).finally((function(){j(!1)}))}),[]);var p=!r&&!O&&0!==(null===n||void 0===n?void 0:n.length);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[r&&Object(l.jsx)(u,{}),!r&&O&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:O}),!r&&!O&&0===(null===n||void 0===n?void 0:n.length)&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),p&&Object(l.jsxs)("table",{"data-cy":"peopleTable",className:" table is-striped is-hoverable is-narrow is-fullwidth ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)(v,{person:e,findParent:function(e){return function(e){return(null===n||void 0===n?void 0:n.find((function(t){return t.name===e})))||null}(e)}},e.slug)}))})]})]})})})}),Object(l.jsx)(a.b,{})]})},p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Page not found"}),Object(l.jsx)(a.b,{})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(l.jsx)(s.a,{children:Object(l.jsx)(a.e,{children:Object(l.jsxs)(a.c,{path:"/",element:Object(l.jsx)(o,{}),children:[Object(l.jsx)(a.c,{index:!0,element:Object(l.jsx)(d,{})}),Object(l.jsx)(a.c,{path:"home",element:Object(l.jsx)(a.a,{to:"/"})}),Object(l.jsxs)(a.c,{path:"people",children:[Object(l.jsx)(a.c,{index:!0,element:Object(l.jsx)(m,{})}),Object(l.jsx)(a.c,{path:":personId",element:Object(l.jsx)(m,{})})]}),Object(l.jsx)(a.c,{path:"*",element:Object(l.jsx)(p,{})})]})})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.15ce6bc8.chunk.js.map