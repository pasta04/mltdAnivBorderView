(this["webpackJsonpmltd-aniv-border-view"]=this["webpackJsonpmltd-aniv-border-view"]||[]).push([[0],{12:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),i=(a(12),a(1)),s=a(2),l=a.n(s),u=a(5),d=a.n(u),m=a(6),f=(a(25),"https://api.matsurihi.me/mltd/v1/"),g=["\u5929\u6d77\u6625\u9999","\u5982\u6708\u5343\u65e9","\u661f\u4e95\u7f8e\u5e0c","\u8429\u539f\u96ea\u6b69","\u9ad8\u69fb\u3084\u3088\u3044","\u83ca\u5730\u771f","\u6c34\u702c\u4f0a\u7e54","\u56db\u6761\u8cb4\u97f3","\u79cb\u6708\u5f8b\u5b50","\u4e09\u6d66\u3042\u305a\u3055","\u53cc\u6d77\u4e9c\u7f8e","\u53cc\u6d77\u771f\u7f8e","\u6211\u90a3\u8987\u97ff","\u6625\u65e5\u672a\u6765","\u6700\u4e0a\u9759\u9999","\u4f0a\u5439\u7ffc","\u7530\u4e2d\u7434\u8449","\u5cf6\u539f\u30a8\u30ec\u30ca","\u4f50\u7af9\u7f8e\u5948\u5b50","\u6240\u6075\u7f8e","\u5fb3\u5ddd\u307e\u3064\u308a","\u7bb1\u5d0e\u661f\u68a8\u82b1","\u91ce\u3005\u539f\u831c","\u671b\u6708\u674f\u5948","\u30ed\u30b3","\u4e03\u5c3e\u767e\u5408\u5b50","\u9ad8\u5c71\u7d17\u4ee3\u5b50","\u677e\u7530\u4e9c\u5229\u6c99","\u9ad8\u5742\u6d77\u7f8e","\u4e2d\u8c37\u80b2","\u5929\u7a7a\u6a4b\u670b\u82b1","\u30a8\u30df\u30ea\u30fc","\u5317\u6ca2\u5fd7\u4fdd","\u821e\u6d5c\u6b69","\u6728\u4e0b\u3072\u306a\u305f","\u77e2\u5439\u53ef\u5948","\u6a2a\u5c71\u5948\u7dd2","\u4e8c\u968e\u5802\u5343\u9db4","\u99ac\u5834\u3053\u306e\u307f","\u5927\u795e\u74b0","\u8c4a\u5ddd\u98a8\u82b1","\u5bae\u5c3e\u7f8e\u4e5f","\u798f\u7530\u306e\u308a\u5b50","\u771f\u58c1\u745e\u5e0c","\u7be0\u5bae\u53ef\u6190","\u767e\u702c\u8389\u7dd2","\u6c38\u5409\u6634","\u5317\u4e0a\u9e97\u82b1","\u5468\u9632\u6843\u5b50","\u30b8\u30e5\u30ea\u30a2","\u767d\u77f3\u7d2c","\u685c\u5b88\u6b4c\u7e54"];function v(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(fetch(e));case 2:return t=n.sent,n.next=5,l.a.awrap(t.json());case 5:return a=n.sent,n.abrupt("return",a);case 7:case"end":return n.stop()}}))}var p=function(e,t,a,n){var r,o;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return r=5===e?"".concat(f,"events/").concat(t,"/rankings/logs/idolPoint/").concat(n,"/").concat(a.join(","),"?prettyPrint=false"):"".concat(f,"events/").concat(t,"/rankings/logs/eventPoint/").concat(a.join(","),"?prettyPrint=false"),console.log(r),c.next=4,l.a.awrap(v(r));case 4:return o=(o=c.sent).map((function(e){return{rank:e.rank,data:e.data.map((function(e){return{score:e.score,summaryTime:(t=new Date(e.summaryTime),a="yyyy/MM/dd HH:mm",a=(a=(a=(a=(a=(a=(a=a.replace(/yyyy/g,"".concat(t.getFullYear()))).replace(/MM/g,("0"+(t.getMonth()+1)).slice(-2))).replace(/dd/g,("0"+t.getDate()).slice(-2))).replace(/HH/g,("0"+t.getHours()).slice(-2))).replace(/mm/g,("0"+t.getMinutes()).slice(-2))).replace(/ss/g,("0"+t.getSeconds()).slice(-2))).replace(/SSS/g,("00"+t.getMilliseconds()).slice(-3)))};var t,a}))}})),c.abrupt("return",o);case 7:case"end":return c.stop()}}))},h=function(){var e=r.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],o=r.a.useState(0),c=Object(i.a)(o,2),s=c[0],u=c[1],h=r.a.useState(0),w=Object(i.a)(h,2),b=w[0],y=w[1],S=r.a.useState([]),N=Object(i.a)(S,2),k=N[0],E=N[1],j=r.a.useState(""),I=Object(i.a)(j,2),O=I[0],T=I[1],W=r.a.useState([]),x=Object(i.a)(W,2),D=x[0],M=x[1],P=r.a.useState(0),A=Object(i.a)(P,2),H=A[0],U=A[1],V=r.a.useState(""),$=Object(i.a)(V,2),C=$[0],R=$[1];return r.a.useEffect((function(){var e=NaN,t=NaN,a=[],r=[];if(window.location.search){var o,c=d.a.parse(window.location.search);c.idol&&c.idol.match(/^\d+$/)&&(e=Number(c.idol),localStorage.setItem("idol",e.toString())),c.event&&c.event.match(/^\d+$/)&&(t=Number(c.event),localStorage.setItem("event",t.toString())),c.rank&&c.rank.match(/^[\d|,]+$/)&&(o=c.rank.split(","),a=o.map((function(e){return Number(e)})),localStorage.setItem("rank",c.rank.toString())),c.diff&&c.diff.match(/^[\d|,]+$/)&&(r=(o=c.diff.split(",")).map((function(e){return Number(e)})),localStorage.setItem("diff",c.diff.toString()))}if(!e){var i=localStorage.getItem("idol");e=i?parseInt(i):35}if(!t){var s=localStorage.getItem("event");t=s?parseInt(s):192}if(0===a.length){var m=localStorage.getItem("rank");if(m){var g=m.split(",");a=g.map((function(e){return Number(e)}))}else a=[1,10,50,80,100,200]}if(0===r.length){var h=localStorage.getItem("diff");if(h)r=h.split(",").map((function(e){return Number(e)}));else r=[1,6,24]}u(e),y(t),E(a),M(r),function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(f,"events/").concat(e,"?prettyPrint=false"),n.next=3,l.a.awrap(v(t));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}))}(t).then((function(r){R(r.name),U(r.type),p(r.type,t,a,e).then((function(e){if(e.length>0){n(e);var t=e[e.length-1].data[e[e.length-1].data.length-1].summaryTime;T(t)}}))}))}),[]),Object(m.a)((function(){console.log(new Date),p(H,b,k,s).then((function(e){n(e);var t=e[e.length-1].data[e[e.length-1].data.length-1].summaryTime;T(t)}))}),3e5),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"SW-update-dialog"}),r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"eventName"},C),r.a.createElement("div",{className:"subHeader"},r.a.createElement("div",{className:"idolName"},5===H&&g[s-1]),r.a.createElement("div",{className:"updateTime"},"update: ",O))),r.a.createElement("div",{className:"rank"},r.a.createElement("div",{className:"rankValue"}),r.a.createElement("div",{className:"borderValue"}),r.a.createElement("div",{className:"borderDiff"},D.map((function(e){return r.a.createElement("div",{className:"borderDiffValue"},e,"h")})))),a.map((function(e){var t=e.data[e.data.length-1].score,a=new Date(e.data[e.data.length-1].summaryTime).getTime(),n=D,o=[],c=!0,i=!1,s=void 0;try{for(var l,u=function(){var n=l.value,r=a-36e5*n,c=e.data.filter((function(e){return new Date(e.summaryTime).getTime()===r})),i=c.length>0?"+".concat(t-c[0].score," pts"):"-";o.push(i)},d=n[Symbol.iterator]();!(c=(l=d.next()).done);c=!0)u()}catch(m){i=!0,s=m}finally{try{c||null==d.return||d.return()}finally{if(i)throw s}}return r.a.createElement("div",{className:"rank"},r.a.createElement("div",{className:"rankValue"},e.rank," \u4f4d"),r.a.createElement("div",{className:"borderValue"},t," pts"),r.a.createElement("div",{className:"borderDiff"},o.map((function(e){return r.a.createElement("div",{className:"borderDiffValue"},"".concat(e))}))))})))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,t){navigator.serviceWorker.register(e).then((function(e){e.waiting&&t&&t.onUpdate&&t.onUpdate(e),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=function(e){var t=e.registration,a=Object(n.useState)(!!t.waiting),o=Object(i.a)(a,2),c=o[0],s=o[1];return c?r.a.createElement("div",{style:{width:"100%",background:"linear-gradient(180deg, #fe8ad1 0%, #eaa1cd 20%, #7fd6fd 70%, #a4f1e8 100%)"}},r.a.createElement("span",null,"\u66f4\u65b0\u304c\u3042\u308a\u307e\u3059\ud83c\udf89"),r.a.createElement("button",{onClick:function(){var e;null===(e=t.waiting)||void 0===e||e.postMessage({type:"SKIP_WAITING"}),s(!1),window.location.reload()}},"\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8")):r.a.createElement(r.a.Fragment,null)};c.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="./service-worker.js";w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(t,e)}))}}({onSuccess:function(e){console.log("'ServiceWorker registration successful with scope: ".concat(e.scope))},onUpdate:function(e){e.waiting&&c.a.render(r.a.createElement(y,{registration:e}),document.querySelector(".SW-update-dialog"))}})},7:function(e,t,a){e.exports=a(26)}},[[7,1,2]]]);
//# sourceMappingURL=main.d96b525b.chunk.js.map