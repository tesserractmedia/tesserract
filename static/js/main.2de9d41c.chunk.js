(this.webpackJsonptesserract=this.webpackJsonptesserract||[]).push([[0],{103:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),r=a(20),n=a.n(r),i=(a(91),a(92),a(158)),l=a(148),o=a(157),d=a(23),j=a(1);var b=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"sfckbyzk2y35s33d8sh6668x14uw3emhu8t"}),Object(j.jsx)("script",{type:"text/javascript",src:"https://counter10.stat.ovh/private/counter.js?c=kbyzk2y35s33d8sh6668x14uw3emhu8t&down=async",async:!0}),Object(j.jsx)("noscript",{children:Object(j.jsx)("a",{href:"https://www.freecounterstat.com",title:"hit counter",children:Object(j.jsx)("img",{src:"https://counter10.stat.ovh/private/freecounterstat.php?c=kbyzk2y35s33d8sh6668x14uw3emhu8t",border:"0",title:"hit counter",alt:"hit counter"})})})]})};var u=function(e){var t=e.title;return Object(j.jsx)(i.a,{className:"sticky-top",bg:"secondary",expand:"lg",variant:"dark",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d.b,{to:"/",className:"navbar-brand",children:t}),Object(j.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(o.a,{className:"ms-auto",children:[Object(j.jsx)(b,{}),Object(j.jsx)(d.b,{to:"/",className:"nav-link",children:"Home"}),Object(j.jsx)(d.b,{to:"/about",className:"nav-link",children:"About"})]})})]})})},h=a(7),x=a(150),O=a(151),m=a(152),v=a(159),p=a(149),f=(a(103),a(79));var g=function(e){var t=e.url;return Object(j.jsx)("div",{className:"video-container",children:Object(j.jsx)(f.a,{videoId:function(e){var a=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!a||11!=a[7].length)&&a[7]}(),opts:{height:"390",width:"640",playerVars:{autoplay:0}},onReady:function(e){e.target.pauseVideo()}})})},y=a(10);var w=function(e){var t=e.data,a=Object(y.f)();return Object(j.jsxs)(v.a,{children:[Object(j.jsx)(v.a.Header,{className:"p-0",children:Object(j.jsx)(g,{url:t.url})}),Object(j.jsxs)(v.a.Body,{className:"p-2",children:[Object(j.jsx)("h6",{className:"p-1",children:t.title}),Object(j.jsx)(p.a,{variant:"primary",size:"sm",onClick:function(e){a.push("/video/"+t.id.toString())},children:"Open"})]})]})},N=a(35),k=a.n(N);var S=function(){var e=s.a.useState(null),t=Object(h.a)(e,2),a=t[0],c=t[1];return s.a.useEffect((function(){k.a.get("https://tesserract-green-screen.herokuapp.com/v1/video/latest/10").then((function(e){c(e.data)}))}),[]),Object(j.jsx)(l.a,{children:null===a?Object(j.jsx)("div",{className:"d-flex ",children:Object(j.jsx)(x.a,{animation:"border",variant:"primary"})}):Object(j.jsx)(O.a,{xl:4,lg:4,md:3,sm:2,xs:1,className:"g-4",children:a.slice(0,8).map((function(e){return Object(j.jsx)(m.a,{children:Object(j.jsx)(w,{data:e})})}))})})},M=a(156),C=a(83),F=a(160),T=a(161);var B=function(e){var t=e.tags,a=s.a.useState(null),c=Object(h.a)(a,2),r=c[0],n=c[1];return s.a.useEffect((function(){for(var e="https://tesserract-green-screen.herokuapp.com/v1/video/suggest?",a=t.length,c=0;c<a;c++)e+=(0==c?"":"&")+"keyword="+t[c].keyword;k.a.get(e).then((function(e){n(e.data)}))}),[t]),Object(j.jsx)("div",{className:"d-flex flex-column",children:null===r?Object(j.jsx)(x.a,{animation:"border",variant:"primary"}):r.map((function(e){return Object(j.jsx)(w,{data:e})}))})},z=a(153),D=a(154),E=a(155);var G=function(){var e=Object(y.g)().id,t=s.a.useState(!1),a=Object(h.a)(t,2),c=a[0],r=a[1],n=function(){return r(!1)},i=s.a.useState(null),o=Object(h.a)(i,2),d=o[0],b=o[1];return s.a.useEffect((function(){k.a.get("https://tesserract-green-screen.herokuapp.com/v1/video/"+e.toString()).then((function(e){b(e.data)}))})),Object(j.jsx)(l.a,{className:"pb-5",children:Object(j.jsxs)(O.a,{children:[Object(j.jsxs)(m.a,{sm:8,md:8,lg:8,children:[Object(j.jsx)("div",{className:"position-fixed container",children:Object(j.jsx)("div",{className:"col-lg-8 col-md-8 col-sm-8 d-flex flex-column pb-5",children:null===d?Object(j.jsx)(x.a,{animation:"border",variant:"primary"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{url:d.url}),Object(j.jsx)("h4",{children:d.title}),Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("span",{children:d.date.slice(0,10)}),Object(j.jsxs)("div",{children:[Object(j.jsx)(p.a,{className:"me-1",variant:"primary",onClick:function(){return r(!0)},children:Object(j.jsx)(z.a,{})}),Object(j.jsx)("a",{className:"btn btn-danger",href:"https://www.ssyoutube.com/watch?v="+function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!=t[7].length)&&t[7]}(d.url),target:"_blank",children:Object(j.jsx)(D.a,{})})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:d.tags.map((function(e){return Object(j.jsx)(p.a,{className:"me-1",size:"sm",variant:"outline-primary",children:e.keyword})}))})]})})}),Object(j.jsxs)(M.a,{show:c,onHide:n,centered:!0,children:[Object(j.jsxs)(M.a.Header,{children:[Object(j.jsx)(M.a.Title,{children:"Share"}),Object(j.jsx)(C.a,{onClick:n,variant:"white"})]}),Object(j.jsx)(M.a.Body,{children:Object(j.jsxs)(F.a,{className:"mb-3",children:[Object(j.jsx)(T.a,{id:"share",placeholder:"link","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:window.location.href,disabled:!0}),Object(j.jsx)(p.a,{id:"share-btn",onClick:function(){navigator.clipboard.writeText(window.location.href)},children:Object(j.jsx)(E.a,{})})]})})]})]}),Object(j.jsx)(m.a,{sm:4,md:4,lg:4,children:null===d?Object(j.jsx)(x.a,{animation:"border",variant:"primary"}):Object(j.jsx)(B,{tags:d.tags})})]})})};var A=function(){return Object(j.jsx)("div",{})},H=a(84),L=a.n(H);var _=function(){var e=s.a.useContext(R);return Object(j.jsx)(l.a,{className:"p-5 d-flex justify-content-center ",children:Object(j.jsx)(v.a,{children:Object(j.jsxs)(v.a.Body,{children:[Object(j.jsx)("h2",{className:"text-center",children:"About Us"}),Object(j.jsx)("p",{className:"text-center",children:e.about}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("img",{className:"w-25 img-fluid",src:"/tesserract/android-chrome-512x512.png"})}),Object(j.jsxs)("address",{className:"text-center",children:[Object(j.jsx)(L.a,{}),"  ",Object(j.jsx)("a",{href:"mailto:"+e.contact.email,children:e.contact.email})]})]})})})};var I=function(){return Object(j.jsx)(l.a,{className:"h-75 d-flex flex-row align-items-center justify-content-center",children:Object(j.jsx)("h1",{className:"text-danger",children:"Not Found!"})})},P=a(64),R=s.a.createContext();var U=function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"bg-secondary min-vh-100",children:[Object(j.jsx)(u,{title:P.brandname}),Object(j.jsx)("div",{className:"p-2"}),Object(j.jsx)(R.Provider,{value:P,children:Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{path:"/",exact:!0,children:Object(j.jsx)(S,{})}),Object(j.jsx)(y.a,{path:"/video/:id",children:Object(j.jsx)(G,{})}),Object(j.jsx)(y.a,{path:"/about",children:Object(j.jsx)(_,{})}),Object(j.jsx)(y.a,{path:"/contact",children:Object(j.jsx)(A,{})}),Object(j.jsx)(y.a,{children:Object(j.jsx)(I,{})})]})})]})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,162)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};a(136);n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d.a,{basename:"/tesserract",children:Object(j.jsx)(U,{})})}),document.getElementById("root")),V()},64:function(e){e.exports=JSON.parse('{"brandname":"Tesserract Green Screen","contact":{"email":"tesserractmediainbox@gmail.com"},"about":"This website is produdly created by Tesserract Media","id_count":8,"videos":[{"id":8,"title":"Free | Subscribe Button Green Screen No Copyright","date":"October 2, 2021","url":"https://youtu.be/_mzUDpmBaAk","tags":["subscribe","button","youtube"]},{"id":1,"title":"india New Delhi Earth Zoom Free Download","date":"Mar 5, 2019","url":"https://youtu.be/RM8OYqpLAVg","tags":["india","new ","delhi","earth","zoom"]},{"id":2,"title":"Mig 21 side view running Green Screen | Only Available here","date":"Mar 27, 2018","url":"https://youtu.be/XsGAycFDnzQ","tags":["fighter","jet","mig","21"]},{"id":3,"title":"Free | Rocket Blast Green Screen Effect","date":"Mar 27, 2018","url":"https://youtu.be/_l9xsCOxZr0","tags":["rocket","blast","explosion","missile"]},{"id":4,"title":"Free | clash of clans Green screen","date":"Mar 27, 2018","url":"https://youtu.be/56Br_YY9ZYU","tags":["clash","of","clans","fire"]},{"id":5,"title":"Free | Missile + explosion green screen footage","date":"Mar 27, 2018","url":"https://youtu.be/iiKwDbdKOHE","tags":["missile","explosion","blast"]},{"id":6,"title":"free | Moving Clouds Side Scroll Loop Green Screen","date":"Mar 27, 2018","url":"https://youtu.be/DT-0QrPEjvU","tags":["cloud","moving","side","clouds"]},{"id":7,"title":"Lower Third News Video backgrounds Green Screen HD","date":"Mar 27, 2018","url":"https://youtu.be/tiIx-8T1SpM","tags":["lower","third","news","background"]}]}')},91:function(e,t,a){},92:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.2de9d41c.chunk.js.map