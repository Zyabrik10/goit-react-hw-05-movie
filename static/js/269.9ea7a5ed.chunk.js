"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[269],{269:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(439),a=n(689),o=n(633),c=n(791),s=n(215),u=n(983),i=n(894),l=n.n(i),f=n(984),p=n(42),h=n(184),v=p.Z.review_name,d=p.Z.review_text;function g(t){var e=t.author,n=t.content;return(0,h.jsxs)("li",{children:[(0,h.jsx)("p",{className:"".concat(v," global-p"),children:e}),(0,h.jsx)("p",{className:"".concat(d," global-p"),children:n})]})}g.propsType={author:l().string,content:l().string};var m=p.Z.reviews_list;function x(t){var e=t.reviews;return(0,h.jsx)("ul",{className:"".concat(m," global-list"),children:e.map((function(t){var e=t.author,n=t.content;return(0,h.jsx)(g,{author:e,content:n},(0,f.x0)())}))})}function w(){var t=(0,a.UO)().id,e=(0,c.useState)([]),n=(0,r.Z)(e,2),i=n[0],l=n[1],f=(0,c.useState)(!1),p=(0,r.Z)(f,2),v=p[0],d=p[1],g=(0,c.useState)(!1),m=(0,r.Z)(g,2),w=m[0],j=m[1];return(0,c.useEffect)((function(){j(!0),(0,o.DF)(t).then((function(t){var e=t.data.results;0===e.length?d(!0):d(!1),l(e),j(!1)})).catch((function(t){console.log(t),j(!1),d(!0)}))}),[t]),w?(0,h.jsx)(u.a,{}):v?(0,h.jsx)(s.Z,{message:"There is no info\ud83d\ude22"}):(0,h.jsx)(x,{reviews:i})}x.propsType={credits:l().array}},984:function(t,e,n){n.d(e,{x0:function(){return r}});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=269.9ea7a5ed.chunk.js.map