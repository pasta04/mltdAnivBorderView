(this["webpackJsonpmltd-aniv-border-view"]=this["webpackJsonpmltd-aniv-border-view"]||[]).push([[0],{12:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),o=t.n(c),i=(t(12),t(2)),s=t(1),l=t.n(s),u=t(5),d=t.n(u),m=t(6);t(25);function f(e){var a,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(fetch(e));case 2:return a=n.sent,n.next=5,l.a.awrap(a.json());case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}))}var v=function(e,a,t){var n,r;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n="".concat("https://api.matsurihi.me/mltd/v1/","events/").concat(e,"/rankings/logs/idolPoint/").concat(a,"/").concat(t.join(",")),c.next=3,l.a.awrap(f(n));case 3:return r=(r=c.sent).map((function(e){return{rank:e.rank,data:e.data.map((function(e){return{score:e.score,summaryTime:(a=new Date(e.summaryTime),t="yyyy/MM/dd HH:mm",t=(t=(t=(t=(t=(t=(t=t.replace(/yyyy/g,"".concat(a.getFullYear()))).replace(/MM/g,("0"+(a.getMonth()+1)).slice(-2))).replace(/dd/g,("0"+a.getDate()).slice(-2))).replace(/HH/g,("0"+a.getHours()).slice(-2))).replace(/mm/g,("0"+a.getMinutes()).slice(-2))).replace(/ss/g,("0"+a.getSeconds()).slice(-2))).replace(/SSS/g,("00"+a.getMilliseconds()).slice(-3)))};var a,t}))}})),c.abrupt("return",r);case 6:case"end":return c.stop()}}))},h=function(){var e=r.a.useState([]),a=Object(i.a)(e,2),t=a[0],n=a[1],c=r.a.useState(0),o=Object(i.a)(c,2),s=o[0],l=o[1],u=r.a.useState(0),f=Object(i.a)(u,2),h=f[0],g=f[1],p=r.a.useState([]),w=Object(i.a)(p,2),b=w[0],N=w[1],y=r.a.useState(),k=Object(i.a)(y,2),E=k[0],S=k[1];return r.a.useEffect((function(){var e=35,a=142,t=[1,10,50,80,100];if(window.location.search){var r=d.a.parse(window.location.search);r.idol&&r.idol.match(/^\d+$/)&&(e=Number(r.idol)),r.event&&r.event.match(/^\d+$/)&&(a=Number(r.event)),r.rank&&r.rank.match(/^[\d|,]+$/)&&(t=r.rank.split(","))}l(e),g(a),N(t),v(a,e,t).then((function(e){if(e.length>0){n(e);var a=e[e.length-1].data[e[e.length-1].data.length-1].summaryTime;S(a)}}))}),[]),Object(m.a)((function(){console.log(new Date),v(h,s,b).then((function(e){n(e);var a=e[e.length-1].data[e[e.length-1].data.length-1].summaryTime;S(a)}))}),6e5),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"updateTime"},"update: ",E)),r.a.createElement("div",{className:"rank"},r.a.createElement("div",{className:"rankValue"}),r.a.createElement("div",{className:"borderValue"}),r.a.createElement("div",{className:"borderDiff"},r.a.createElement("div",{className:"borderDiffValue"},"1h"),r.a.createElement("div",{className:"borderDiffValue"},"6h"),r.a.createElement("div",{className:"borderDiffValue"},"12h"))),t.map((function(e){for(var a=e.data[e.data.length-1].score,t=new Date(e.data[e.data.length-1].summaryTime).getTime(),n=[],c=function(){var r=i[o],c=t-36e5*r,s=e.data.filter((function(e){return new Date(e.summaryTime).getTime()===c})),l=s?a-s[0].score:NaN;Number.isNaN(l)||n.push(l)},o=0,i=[1,6,12];o<i.length;o++)c();return r.a.createElement("div",{className:"rank"},r.a.createElement("div",{className:"rankValue"},e.rank," \u4f4d"),r.a.createElement("div",{className:"borderValue"},a," pts"),r.a.createElement("div",{className:"borderDiff"},n.map((function(e){return r.a.createElement("div",{className:"borderDiffValue"},"+".concat(e," pts"))}))))})))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");g?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(a,e)}))}}()},7:function(e,a,t){e.exports=t(26)}},[[7,1,2]]]);
//# sourceMappingURL=main.5f5d00b3.chunk.js.map