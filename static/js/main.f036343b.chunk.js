(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{100:function(e,t,c){},108:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),r=c(23),j=c.n(r),o=(c(81),c(30)),l=c(3),d=c(117),b=c(115),h=c(118),O=c(116),x=c(75),u=(c(82),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),p=c(55),m=c(53),f=c.n(m),g=c(8),v=c(56),N=(c(100),c(1)),S=v.a.div(n||(n=Object(p.a)(["\n    padding: 20px;\n\n"]))),k=v.a.h4(i||(i=Object(p.a)(["\n    font-size: 25px;\n    color : ","\n"])),(function(e){return e.\uc0c9\uc0c1}));function w(e){return Object(N.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[0]]})}var C=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)(""),r=Object(l.a)(a,2),j=r[0],o=r[1];Object(s.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return console.log("\uc548\ub155"),function(){clearTimeout(e)}}),[n]);var d=Object(g.g)().id,b=Object(g.f)(),h=e.shoes.find((function(e){return e.id==d}));return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(S,{children:Object(N.jsx)(k,{className:"red",children:"Detail"})}),j,Object(N.jsx)("input",{onChange:function(e){o(e.target.value)}}),!0===n?Object(N.jsx)("div",{className:"my-alert2",children:Object(N.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!"})}):null,Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(h.id+1)+".jpg",width:"100%"})}),Object(N.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(N.jsx)("h4",{className:"pt-5",children:h.title}),Object(N.jsx)("p",{children:h.content}),Object(N.jsxs)("p",{children:[h.price,"\uc6d0"]}),Object(N.jsx)(w,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,11,12])},children:"\uc8fc\ubb38\ud558\uae30"}),"\xa0",Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){b.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},B=c(29);function y(e){return Object(N.jsxs)("div",{className:"col-md-4",children:[Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(N.jsx)("h4",{children:e.shoes.title}),Object(N.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var I=function(){var e=Object(s.useState)(u),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(l.a)(i,2),r=a[0],j=a[1];return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(d.a,{bg:"light",expand:"lg",children:Object(N.jsxs)(b.a,{children:[Object(N.jsx)(d.a.Brand,{href:"#home",children:"ShoeShop"}),Object(N.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(h.a,{className:"me-auto",children:[Object(N.jsx)(h.a.Link,{as:B.b,to:"/",children:"Home"}),Object(N.jsx)(h.a.Link,{as:B.b,to:"/detail",children:"Detail"}),Object(N.jsxs)(O.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(N.jsx)(O.a.Item,{href:"#action/3.1",children:"Action"}),Object(N.jsx)(O.a.Item,{href:"#action/3.2",children:"Another action"}),Object(N.jsx)(O.a.Item,{href:"#action/3.3",children:"Something"}),Object(N.jsx)(O.a.Divider,{}),Object(N.jsx)(O.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(N.jsxs)(g.c,{children:[Object(N.jsxs)(g.a,{exact:!0,path:"/",children:[Object(N.jsx)("div",{className:"background",children:Object(N.jsxs)("div",{className:"background-text",children:[Object(N.jsx)("h1",{children:"20% Season Off"}),Object(N.jsxs)("p",{children:["This is a simple hero unit, a simple jumbotron-style component for calling",Object(N.jsx)("br",{}),"extra attention to featured content of information."]}),Object(N.jsx)("p",{children:Object(N.jsx)(x.a,{variant:"primary",children:"Learn more"})})]})}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(N.jsx)(y,{shoes:c[t],i:t},t)}))}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){return f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(o.a)(c),Object(o.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(N.jsx)(g.a,{path:"/detail/:id",children:Object(N.jsx)(C,{shoes:c,"\uc7ac\uace0":r,"\uc7ac\uace0\ubcc0\uacbd":j})}),Object(N.jsx)(g.a,{path:"/:id",children:Object(N.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c \uc774\uac70 \ubcf4\uc5ec\uc8fc\uc148"})})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};j.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(B.a,{children:Object(N.jsx)(I,{})})}),document.getElementById("root")),T()},81:function(e,t,c){},82:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.f036343b.chunk.js.map