(function(e){function t(t){for(var o,a,i=t[0],u=t[1],s=t[2],b=0,f=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/v-biz/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1a6d":function(e,t,n){"use strict";n("4c8b")},"22a8":function(e,t,n){"use strict";n.r(t);var o=n("7a23");const r={class:"about"},c=Object(o["f"])("h1",null,"This is an about page",-1);function a(e,t){return Object(o["o"])(),Object(o["d"])("div",r,[c])}const i={};i.render=a;t["default"]=i},"4c8b":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");n("22a8");const r={class:"home"},c=Object(o["f"])("h1",null,"hello world!",-1);function a(e,t,n,a,i,u){return Object(o["o"])(),Object(o["d"])("div",r,[c])}var i=Object(o["g"])({name:"Home"});i.render=a;var u=i,s=(n("ddb0"),n("6c02"));const l=[{path:"/",name:"Home",component:u},{path:"/about",name:"About",component:()=>Promise.resolve().then(n.bind(null,"22a8"))}],b=Object(s["a"])({history:Object(s["b"])("/v-biz/"),routes:l});var f=b;const d={id:"nav"},p=Object(o["e"])("Home"),v=Object(o["e"])(" | "),O=Object(o["e"])("About");function j(e,t){const n=Object(o["s"])("router-link"),r=Object(o["s"])("router-view");return Object(o["o"])(),Object(o["d"])(o["a"],null,[Object(o["f"])("div",d,[Object(o["f"])(n,{to:"/"},{default:Object(o["w"])(()=>[p]),_:1}),v,Object(o["f"])(n,{to:"/about"},{default:Object(o["w"])(()=>[O]),_:1})]),Object(o["f"])(r)],64)}n("1a6d");const h={};h.render=j;var g=h,m=n("9483");Object(m["a"])("/v-biz/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var w=n("5502"),y=Object(w["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(g).use(y).use(f).mount("#app")}});
//# sourceMappingURL=app.88ef5841.js.map