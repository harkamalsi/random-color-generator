(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){e.exports=t(19)},19:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(11),a=t.n(r),c=(t(18),t(2)),l=t(7),s=t(6),u=t(4),d=t(5),f=(t(10),t(3)),m=t(8),v=function(){var e=Object(o.useState)(!1),n=Object(m.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(!1),c=Object(m.a)(a,2),l=c[0],s=c[1],u=function(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},d=Object(f.b)({from:{opacity:0,animationIterationCount:t?0:"infinite",transform:"scale(1)"},opacity:.75,backgroundColor:u(),animationIterationCount:t?"infinite":0,transform:t?"scale(1)":"scale(0)"}),v=Object(f.b)({from:{opacity:0,animationIterationCount:t?0:"infinite"},opacity:.75,backgroundColor:u(),animationIterationCount:t?"infinite":0,transform:t?"scale(1)":"scale(0)"});return i.a.createElement(f.a.div,{className:"circles"},console.log(t),i.a.createElement("div",{id:"centerCircle",onClick:function(){return r(!t)}}),i.a.createElement(f.a.div,{id:"circle1",style:d,onClick:function(){return s(!l)}},i.a.createElement("p",{id:"colorName1"})),i.a.createElement(f.a.div,{id:"circle2",style:v,onClick:function(){return s(!l)}},i.a.createElement("p",{id:"colorName2"})),i.a.createElement(f.a.div,{id:"circle3",style:d,onClick:function(){return s(!l)}},i.a.createElement("p",{id:"colorName3"})),i.a.createElement(f.a.div,{id:"circle4",style:d,onClick:function(){return s(!l)}},i.a.createElement("p",{id:"colorName4"})),i.a.createElement(f.a.div,{id:"circle5",style:d,onClick:function(){return s(!l)}},i.a.createElement("p",{id:"colorName5"})))},g=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(f.a.div,{className:"App"},i.a.createElement(v,null))}}]),n}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(i.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/random-color-generator",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/random-color-generator","/service-worker.js");p?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):h(e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.d1d48fa9.chunk.js.map