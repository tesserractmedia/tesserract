(this.webpackJsonptesserract=this.webpackJsonptesserract||[]).push([[0],{103:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(20),r=c.n(n),i=(c(91),c(92),c(157)),l=c(148),d=c(156),o=c(23),j=c(1);var b=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"sfckbyzk2y35s33d8sh6668x14uw3emhu8t"}),Object(j.jsx)("script",{type:"text/javascript",src:"https://counter10.stat.ovh/private/counter.js?c=kbyzk2y35s33d8sh6668x14uw3emhu8t&down=async",async:!0}),Object(j.jsx)("noscript",{children:Object(j.jsx)("a",{href:"https://www.freecounterstat.com",title:"hit counter",children:Object(j.jsx)("img",{src:"https://counter10.stat.ovh/private/freecounterstat.php?c=kbyzk2y35s33d8sh6668x14uw3emhu8t",border:"0",title:"hit counter",alt:"hit counter"})})})]})};var u=function(e){var t=e.title;return Object(j.jsx)(i.a,{className:"sticky-top",bg:"secondary",expand:"lg",variant:"dark",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(o.b,{to:"/",className:"navbar-brand",children:t}),Object(j.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(i.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(d.a,{className:"ms-auto",children:[Object(j.jsx)(b,{}),Object(j.jsx)(o.b,{to:"/",className:"nav-link",children:"Home"}),Object(j.jsx)(o.b,{to:"/about",className:"nav-link",children:"About"})]})})]})})},h=c(8),x=(c(103),c(78));var O=function(e){var t=e.url;return Object(j.jsx)("div",{className:"video-container",children:Object(j.jsx)(x.a,{videoId:function(e){var c=t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!c||11!=c[7].length)&&c[7]}(),opts:{height:"390",width:"640",playerVars:{autoplay:0}},onReady:function(e){e.target.pauseVideo()}})})},m=c(150),v=c(151),p=c(158),f=c(149),g=c(10);var y=function(e){var t=e.data,c=Object(g.f)();return Object(j.jsxs)(p.a,{children:[Object(j.jsx)(p.a.Header,{className:"p-0",children:Object(j.jsx)(O,{url:t.url})}),Object(j.jsxs)(p.a.Body,{className:"p-2",children:[Object(j.jsx)("h6",{className:"p-1",children:t.title}),Object(j.jsx)(f.a,{variant:"primary",size:"sm",onClick:function(e){c.push("/video/"+t.id.toString())},children:"Open"})]})]})},w=c(81),N=c.n(w);var k=function(){var e=s.a.useContext(P),t=s.a.useState(null),c=Object(h.a)(t,2);return c[0],c[1],s.a.useEffect((function(){N.a.get("https://tesserract-green-screen.herokuapp.com/v1/video/latest/10").then((function(e){console.log(e)}))}),[]),Object(j.jsx)(l.a,{children:Object(j.jsx)(m.a,{xl:4,lg:4,md:3,sm:2,xs:1,className:"g-4",children:e.videos.slice(0,8).map((function(e){return Object(j.jsx)(v.a,{children:Object(j.jsx)(y,{data:e})})}))})})},S=c(155),C=c(83),M=c(159),F=c(160);var T=function(e){var t=e.id,c=e.tags,a=function(e,t,c){for(var a=[],s=e.length,n=0;n<s;n++)e[n].tags.some((function(e){return c.includes(e)}))&&e[n].id!=t&&a.push(e[n]);if(a.length<5)for(var r=0;r<s&&a.length<=10;)a.includes(e[r])||e[r].id===t||a.push(e[r]),r++;return a}(s.a.useContext(P).videos,t,c);return Object(j.jsx)("div",{className:"d-flex flex-column",children:a.map((function(e){return Object(j.jsx)(y,{data:e})}))})},B=c(152),z=c(153),D=c(154);var G=function(){var e=Object(g.g)().id,t=function(e,t){for(var c=e.length,a=0;a<c;a++)if(e[a].id==t)return e[a]}(s.a.useContext(P).videos,e),c=s.a.useState(!1),a=Object(h.a)(c,2),n=a[0],r=a[1],i=function(){return r(!1)};return Object(j.jsx)(l.a,{className:"pb-5",children:Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(v.a,{sm:8,md:8,lg:8,children:[Object(j.jsxs)("div",{className:"d-flex flex-column pb-5",children:[Object(j.jsx)(O,{url:t.url}),Object(j.jsx)("h4",{children:t.title}),Object(j.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(j.jsx)("span",{children:t.date}),Object(j.jsxs)("div",{children:[Object(j.jsx)(f.a,{className:"me-1",variant:"primary",onClick:function(){return r(!0)},children:Object(j.jsx)(B.a,{})}),Object(j.jsx)("a",{className:"btn btn-danger",href:"https://www.ssyoutube.com/watch?v="+function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/);return!(!t||11!=t[7].length)&&t[7]}(t.url),target:"_blank",children:Object(j.jsx)(z.a,{})})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{children:t.tags.map((function(e){return Object(j.jsx)(f.a,{className:"me-1",size:"sm",variant:"outline-primary",children:e})}))})]}),Object(j.jsxs)(S.a,{show:n,onHide:i,centered:!0,children:[Object(j.jsxs)(S.a.Header,{children:[Object(j.jsx)(S.a.Title,{children:"Share"}),Object(j.jsx)(C.a,{onClick:i,variant:"white"})]}),Object(j.jsx)(S.a.Body,{children:Object(j.jsxs)(M.a,{className:"mb-3",children:[Object(j.jsx)(F.a,{id:"share",placeholder:"link","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:window.location.href,disabled:!0}),Object(j.jsx)(f.a,{id:"share-btn",onClick:function(){navigator.clipboard.writeText(window.location.href)},children:Object(j.jsx)(D.a,{})})]})})]})]}),Object(j.jsx)(v.a,{children:Object(j.jsx)(T,{id:t.id,tags:t.tags})})]})})};var A=function(){return Object(j.jsx)("div",{})},E=c(84),H=c.n(E);var L=function(){var e=s.a.useContext(P);return Object(j.jsx)(l.a,{className:"p-5 d-flex justify-content-center ",children:Object(j.jsx)(p.a,{children:Object(j.jsxs)(p.a.Body,{children:[Object(j.jsx)("h2",{className:"text-center",children:"About Us"}),Object(j.jsx)("p",{className:"text-center",children:e.about}),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("img",{className:"w-25 img-fluid",src:"/tesserract/android-chrome-512x512.png"})}),Object(j.jsxs)("address",{className:"text-center",children:[Object(j.jsx)(H.a,{}),"  ",Object(j.jsx)("a",{href:"mailto:"+e.contact.email,children:e.contact.email})]})]})})})};var _=function(){return Object(j.jsx)(l.a,{className:"h-75 d-flex flex-row align-items-center justify-content-center",children:Object(j.jsx)("h1",{className:"text-danger",children:"Not Found!"})})},I=c(63),P=s.a.createContext();var R=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"bg-secondary min-vh-100",children:[Object(j.jsx)(u,{title:I.brandname}),Object(j.jsx)("div",{className:"p-2"}),Object(j.jsx)(P.Provider,{value:I,children:Object(j.jsxs)(g.c,{children:[Object(j.jsx)(g.a,{path:"/",exact:!0,children:Object(j.jsx)(k,{})}),Object(j.jsx)(g.a,{path:"/video/:id",children:Object(j.jsx)(G,{})}),Object(j.jsx)(g.a,{path:"/about",children:Object(j.jsx)(L,{})}),Object(j.jsx)(g.a,{path:"/contact",children:Object(j.jsx)(A,{})}),Object(j.jsx)(g.a,{children:Object(j.jsx)(_,{})})]})})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,161)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(136);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o.a,{basename:"/tesserract",children:Object(j.jsx)(R,{})})}),document.getElementById("root")),U()},63:function(e){e.exports=JSON.parse('{"brandname":"Tesserract Green Screen","contact":{"email":"tesserractmediainbox@gmail.com"},"about":"This website is produdly created by Tesserract Media","id_count":8,"videos":[{"id":8,"title":"Free | Subscribe Button Green Screen No Copyright","date":"October 2, 2021","url":"https://youtu.be/_mzUDpmBaAk","tags":["subscribe","button","youtube"]},{"id":1,"title":"india New Delhi Earth Zoom Free Download","date":"Mar 5, 2019","url":"https://youtu.be/RM8OYqpLAVg","tags":["india","new ","delhi","earth","zoom"]},{"id":2,"title":"Mig 21 side view running Green Screen | Only Available here","date":"Mar 27, 2018","url":"https://youtu.be/XsGAycFDnzQ","tags":["fighter","jet","mig","21"]},{"id":3,"title":"Free | Rocket Blast Green Screen Effect","date":"Mar 27, 2018","url":"https://youtu.be/_l9xsCOxZr0","tags":["rocket","blast","explosion","missile"]},{"id":4,"title":"Free | clash of clans Green screen","date":"Mar 27, 2018","url":"https://youtu.be/56Br_YY9ZYU","tags":["clash","of","clans","fire"]},{"id":5,"title":"Free | Missile + explosion green screen footage","date":"Mar 27, 2018","url":"https://youtu.be/iiKwDbdKOHE","tags":["missile","explosion","blast"]},{"id":6,"title":"free | Moving Clouds Side Scroll Loop Green Screen","date":"Mar 27, 2018","url":"https://youtu.be/DT-0QrPEjvU","tags":["cloud","moving","side","clouds"]},{"id":7,"title":"Lower Third News Video backgrounds Green Screen HD","date":"Mar 27, 2018","url":"https://youtu.be/tiIx-8T1SpM","tags":["lower","third","news","background"]}]}')},91:function(e,t,c){},92:function(e,t,c){}},[[138,1,2]]]);
//# sourceMappingURL=main.11983884.chunk.js.map