(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=n(2),u=n(9),s=n(0),o=function(t){var e=t.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{className:"campo",type:"text",value:c,onChange:function(t){o(t.target.value)}})})},j=n(6),l=n.n(j),d=n(8),p=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=zyFXU5x3nAQ466a1CN5LzEMBs340ezZ9"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.title,n=t.img;return Object(s.jsxs)("div",{className:"grid_item animate__animated animate__bounceIn",children:[Object(s.jsx)("img",{src:n,alt:e}),Object(s.jsx)("label",{children:e})]})},f=function(t){var e=t.categoria,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:e}),c?Object(s.jsx)("p",{children:"Loading"}):null,r.map((function(t){return Object(s.jsx)(b,{title:t.title,img:t.url},t.id)}))]})},m=function(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setCategorias:r}),Object(s.jsx)("hr",{}),n.map((function(t){return Object(s.jsx)(f,{categoria:t},t)}))]})};n(16);c.a.render(Object(s.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2d147b1e.chunk.js.map