var e,t,r,n,i,o,a,s,c,u,l,d,p,h,f,g,v,m,y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire3a11;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire3a11=k);var S={},E={},$=function(e){return e&&e.Math==Math&&e};E=$("object"==typeof globalThis&&globalThis)||$("object"==typeof window&&window)||$("object"==typeof self&&self)||$("object"==typeof y&&y)||function(){return this}()||Function("return this")();var L={},T={};L=!(T=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},j={};j=!T(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});"use strict";var M=Function.prototype.call;O=j?M.bind(M):function(){return M.apply(M,arguments)};var F={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;t=x&&!F.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:F;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var A={},I={},H={},D=Function.prototype,q=D.call,N=j&&D.bind.bind(q,q),C={},R=(H=j?N:function(e){return function(){return q.apply(e,arguments)}})({}.toString),W=H("".slice);C=function(e){return W(R(e),8,-1)};var z=Object,U=H("".split);I=T(function(){return!z("z").propertyIsEnumerable(0)})?function(e){return"String"==C(e)?U(e,""):z(e)}:z;var B={},G={};G=function(e){return null==e};var Y=TypeError;B=function(e){if(G(e))throw Y("Can't call method on "+e);return e},A=function(e){return I(B(e))};var J={},Q={},V={},K={},Z={},X="object"==typeof document&&document.all,ee=(Z={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;K=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===ee}:function(e){return"function"==typeof e};var et=Z.all;V=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:K(e)||e===et}:function(e){return"object"==typeof e?null!==e:K(e)};var er={},en={};en=function(e,t){var r;return arguments.length<2?K(r=E[e])?r:void 0:E[e]&&E[e][t]};var ei={};ei=H({}.isPrototypeOf);var eo={},ea={},es={},ec={};ec="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var eu=E.process,el=E.Deno,ed=eu&&eu.versions||el&&el.version,ep=ed&&ed.v8;ep&&(n=(r=ep.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&ec&&(!(r=ec.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=ec.match(/Chrome\/(\d+)/))&&(n=+r[1]),es=n;var eh=Object;er=(eo=(ea=!!Object.getOwnPropertySymbols&&!T(function(){var e=Symbol();return!String(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&es&&es<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator)?function(e){return"symbol"==typeof e}:function(e){var t=en("Symbol");return K(t)&&ei(t.prototype,eh(e))};var ef={},eg={},ev={},em=String;ev=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;eg=function(e){if(K(e))return e;throw ey(ev(e)+" is not a function")},ef=function(e,t){var r=e[t];return G(r)?void 0:eg(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!V(n=O(r,e))||K(r=e.valueOf)&&!V(n=O(r,e))||"string"!==t&&K(r=e.toString)&&!V(n=O(r,e)))return n;throw e_("Can't convert object to primitive value")};var ew={},ek={};ek=!1;var eS={},eE={},e$=Object.defineProperty;eE=function(e,t){try{e$(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var eL="__core-js_shared__";eS=E[eL]||eE(eL,{}),(ew=function(e,t){return eS[e]||(eS[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.0",mode:ek?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eT={},eO={},ej=Object;eO=function(e){return ej(B(e))};var eM=H({}.hasOwnProperty);eT=Object.hasOwn||function(e,t){return eM(eO(e),t)};var eF={},ex=0,eP=Math.random(),eA=H(1..toString);eF=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eA(++ex+eP,36)};var eI=E.Symbol,eH=ew("wks"),eD=eo?eI.for||eI:eI&&eI.withoutSetter||eF,eq=TypeError,eN=function(e){return eT(eH,e)||(eH[e]=ea&&eT(eI,e)?eI[e]:eD("Symbol."+e)),eH[e]}("toPrimitive");Q=function(e,t){if(!V(e)||er(e))return e;var r,n=ef(e,eN);if(n){if(void 0===t&&(t="default"),!V(r=O(n,e,t))||er(r))return r;throw eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},J=function(e){var t=Q(e,"string");return er(t)?t:t+""};var eC={},eR={},eW=E.document,ez=V(eW)&&V(eW.createElement);eR=function(e){return ez?eW.createElement(e):{}},eC=!L&&!T(function(){return 7!=Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});var eU=Object.getOwnPropertyDescriptor;e=L?eU:function(e,r){if(e=A(e),r=J(r),eC)try{return eU(e,r)}catch(e){}if(eT(e,r))return P(!O(t,e,r),e[r])};var eB={},eG={};eG=L&&T(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eY={},eJ=String,eQ=TypeError;eY=function(e){if(V(e))return e;throw eQ(eJ(e)+" is not an object")};var eV=TypeError,eK=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,eX="enumerable",e1="configurable",e0="writable";i=L?eG?function(e,t,r){if(eY(e),t=J(t),eY(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eZ(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(eY(e),t=J(t),eY(r),eC)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eB=L?function(e,t,r){return i(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e3={},e4=Function.prototype,e9=L&&Object.getOwnPropertyDescriptor,e7=eT(e4,"name")&&(!L||L&&e9(e4,"name").configurable),e8={},e5=H(Function.toString);K(eS.inspectSource)||(eS.inspectSource=function(e){return e5(e)}),e8=eS.inspectSource;var e6={},te={},tt=E.WeakMap;te=K(tt)&&/native code/.test(String(tt));var tr={},tn=ew("keys");tr=function(e){return tn[e]||(tn[e]=eF(e))};var ti={};ti={};var to="Object already initialized",ta=E.TypeError,ts=E.WeakMap;if(te||eS.state){var tc=eS.state||(eS.state=new ts);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,o=function(e,t){if(tc.has(e))throw ta(to);return t.facade=e,tc.set(e,t),t},a=function(e){return tc.get(e)||{}},s=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,o=function(e,t){if(eT(e,tu))throw ta(to);return t.facade=e,eB(e,tu,t),t},a=function(e){return eT(e,tu)?e[tu]:{}},s=function(e){return eT(e,tu)}}var tl=(e6={set:o,get:a,has:s,enforce:function(e){return s(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!V(t)||(r=a(t)).type!==e)throw ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=e6.get,th=String,tf=Object.defineProperty,tg=H("".slice),tv=H("".replace),tm=H([].join),ty=L&&!T(function(){return 8!==tf(function(){},"length",{value:8}).length}),tb=String(String).split("String"),t_=e3=function(e,t,r){"Symbol("===tg(th(t),0,7)&&(t="["+tv(th(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eT(e,"name")||e7&&e.name!==t)&&(L?tf(e,"name",{value:t,configurable:!0}):e.name=t),ty&&r&&eT(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&eT(r,"constructor")&&r.constructor?L&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eT(n,"source")||(n.source=tm(tb,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return K(this)&&tp(this).source||e8(this)},"toString"),e2=function(e,t,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:t;if(K(r)&&e3(r,a,n),n.global)o?e[t]=r:eE(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tw={},tk={},tS={},tE={},t$={},tL={},tT=Math.ceil,tO=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?tO:tT)(t)},t$=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var tj=Math.max,tM=Math.min;tE=function(e,t){var r=t$(e);return r<0?tj(r+t,0):tM(r,t)};var tF={},tx={},tP=Math.min;tx=function(e){return e>0?tP(t$(e),9007199254740991):0},tF=function(e){return tx(e.length)};var tA=function(e){return function(t,r,n){var i,o=A(t),a=tF(o),s=tE(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tI={includes:tA(!0),indexOf:tA(!1)}.indexOf,tH=H([].push);tS=function(e,t){var r,n=A(e),i=0,o=[];for(r in n)!eT(ti,r)&&eT(n,r)&&tH(o,r);for(;t.length>i;)eT(n,r=t[i++])&&(~tI(o,r)||tH(o,r));return o};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tS(e,tD)},u=Object.getOwnPropertySymbols;var tq=H([].concat);tk=en("Reflect","ownKeys")||function(e){var t=c(eY(e));return u?tq(t,u(e)):t},tw=function(t,r,n){for(var o=tk(r),a=0;a<o.length;a++){var s=o[a];eT(t,s)||n&&eT(n,s)||i(t,s,e(r,s))}};var tN={},tC=/#|\.prototype\./,tR=function(e,t){var r=tz[tW(e)];return r==tB||r!=tU&&(K(t)?T(t):!!t)},tW=tR.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tz=tR.data={},tU=tR.NATIVE="N",tB=tR.POLYFILL="P";tN=tR,S=function(t,r){var n,i,o,a,s,c=t.target,u=t.global,l=t.stat;if(n=u?E:l?E[c]||eE(c,{}):(E[c]||{}).prototype)for(i in r){if(a=r[i],o=t.dontCallGetSet?(s=e(n,i))&&s.value:n[i],!tN(u?i:c+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;tw(a,o)}(t.sham||o&&o.sham)&&eB(a,"sham",!0),e2(n,i,a,t)}};var tG={},tY={},tJ=Function.prototype,tQ=tJ.apply,tV=tJ.call;tY="object"==typeof Reflect&&Reflect.apply||(j?tV.bind(tQ):function(){return tV.apply(tQ,arguments)});var tK={},tZ={},tX=(tZ=function(e){if("Function"===C(e))return H(e)})(tZ.bind);tK=function(e,t){return eg(e),void 0===t?e:j?tX(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=en("document","documentElement");var t0={};t0=H([].slice);var t2={},t3=TypeError;t2=function(e,t){if(e<t)throw t3("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(ec);var t9={},t7={},t8=t7={};function t5(){throw Error("setTimeout has not been defined")}function t6(){throw Error("clearTimeout has not been defined")}function re(e){if(l===setTimeout)return setTimeout(e,0);if((l===t5||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:t5}catch(e){l=t5}try{d="function"==typeof clearTimeout?clearTimeout:t6}catch(e){d=t6}}();var rt=[],rr=!1,rn=-1;function ri(){rr&&p&&(rr=!1,p.length?rt=p.concat(rt):rn=-1,rt.length&&ro())}function ro(){if(!rr){var e=re(ri);rr=!0;for(var t=rt.length;t;){for(p=rt,rt=[];++rn<t;)p&&p[rn].run();rn=-1,t=rt.length}p=null,rr=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===t6||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function ra(e,t){this.fun=e,this.array=t}function rs(){}t8.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];rt.push(new ra(e,t)),1!==rt.length||rr||re(ro)},ra.prototype.run=function(){this.fun.apply(null,this.array)},t8.title="browser",t8.browser=!0,t8.env={},t8.argv=[],t8.version="",t8.versions={},t8.on=rs,t8.addListener=rs,t8.once=rs,t8.off=rs,t8.removeListener=rs,t8.removeAllListeners=rs,t8.emit=rs,t8.prependListener=rs,t8.prependOnceListener=rs,t8.listeners=function(e){return[]},t8.binding=function(e){throw Error("process.binding is not supported")},t8.cwd=function(){return"/"},t8.chdir=function(e){throw Error("process.chdir is not supported")},t8.umask=function(){return 0},t9=void 0!==t7&&"process"==C(t7);var rc=E.setImmediate,ru=E.clearImmediate,rl=E.process,rd=E.Dispatch,rp=E.Function,rh=E.MessageChannel,rf=E.String,rg=0,rv={},rm="onreadystatechange";T(function(){h=E.location});var ry=function(e){if(eT(rv,e)){var t=rv[e];delete rv[e],t()}},rb=function(e){return function(){ry(e)}},r_=function(e){ry(e.data)},rw=function(e){E.postMessage(rf(e),h.protocol+"//"+h.host)};rc&&ru||(rc=function(e){t2(arguments.length,1);var t=K(e)?e:rp(e),r=t0(arguments,1);return rv[++rg]=function(){tY(t,void 0,r)},f(rg),rg},ru=function(e){delete rv[e]},t9?f=function(e){rl.nextTick(rb(e))}:rd&&rd.now?f=function(e){rd.now(rb(e))}:rh&&!t4?(v=(g=new rh).port2,g.port1.onmessage=r_,f=tK(v.postMessage,v)):E.addEventListener&&K(E.postMessage)&&!E.importScripts&&h&&"file:"!==h.protocol&&!T(rw)?(f=rw,E.addEventListener("message",r_,!1)):f=rm in eR("script")?function(e){t1.appendChild(eR("script"))[rm]=function(){t1.removeChild(this),ry(e)}}:function(e){setTimeout(rb(e),0)});var rk=(tG={set:rc,clear:ru}).clear;S({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rk},{clearImmediate:rk});"use strict";var rS=tG.set,rE={},r$={};r$="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rL=E.Function,rT=/MSIE .\./.test(ec)||r$&&function(){var e=E.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rE=function(e,t){var r=t?2:1;return rT?function(n,i){var o=t2(arguments.length,1)>r,a=K(n)?n:rL(n),s=o?t0(arguments,r):[],c=o?function(){tY(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rO=E.setImmediate?rE(rS,!1):rS;S({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rO},{setImmediate:rO});var rj=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new T(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return j()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};function v(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},S(E.prototype),u(E.prototype,s,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},S(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rj}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rj:Function("r","regeneratorRuntime = r")(rj)}const rM="https://forkify-api.herokuapp.com/api/v2/recipes/",rF="bb636990-944f-4241-892c-de35f19e33b8",rx=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rP={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[],shoppingCart:[],weekend:[[],[],[],[],[],[],[]]},rA=function(e){let t=e.data.recipe;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rI=async function(e){try{let t=await rx(`${rM}${e}?key=${rF}`);rP.recipe=rA(t),console.log(rP.recipe),rP.bookmarks.some(t=>t.id===e)&&(rP.recipe.bookmarked=!0)}catch(e){throw console.error(`${e}💥💥💥`),e}},rH=async function(e){try{rP.search.query=e;let t=await rx(`${rM}?search=${e}&key=${rF}`);rP.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,ingredients:e.ingredients,...e.key&&{key:e.key}})),rP.search.page=1}catch(e){throw console.error(`${e}💥💥💥`),e}},rD=function(e){switch(e.dataset.day){case"mon":rP.weekend[0].push(rP.recipe);break;case"tue":rP.weekend[1].push(rP.recipe);break;case"wed":rP.weekend[2].push(rP.recipe);break;case"thu":rP.weekend[3].push(rP.recipe);break;case"fri":rP.weekend[4].push(rP.recipe);break;case"sat":rP.weekend[5].push(rP.recipe);break;case"sun":rP.weekend[6].push(rP.recipe)}console.log(rP.weekend)},rq=function(e=rP.search.page){rP.search.page=e;let t=(e-1)*rP.search.resultsPerPage,r=e*rP.search.resultsPerPage;return rP.search.results.slice(t,r)},rN=function(e){rP.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rP.recipe.servings}),rP.recipe.servings=e},rC=function(){localStorage.setItem("bookmarks",JSON.stringify(rP.bookmarks))},rR=function(e){rP.bookmarks.push(e),console.log(rP),e.id===rP.recipe.id&&(rP.recipe.bookmarked=!0),rC()},rW=function(e){let t=rP.bookmarks.findIndex(t=>t.id===e);rP.bookmarks.splice(t,1),e===rP.recipe.id&&(rP.recipe.bookmarked=!1),rC()},rz=function(){localStorage.setItem("ingredients",JSON.stringify(rP.shoppingCart))},rU=function(){localStorage.clear("ingredients")},rB=function(){try{rP.shoppingCart.push(rP.recipe.ingredients),rz()}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks"),t=localStorage.getItem("ingredients");e&&(rP.bookmarks=JSON.parse(e)),t&&(rP.shoppingCart=JSON.parse(t))}(),console.log(rP.bookmarks);const rG=async function(e){try{let t=[],r=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]);for(let e=1;e<=6;e++){let n=r.filter(t=>t[0].startsWith(`ingredient-${e}`));t.push({quantity:+n[0][1],unit:n[1][1],description:n[2][1]}),console.log(t)}let n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:e.cookingTime,servings:e.servings,ingredients:t},i=await rx(`${rM}?key=${rF}`,n);rP.recipe=rA(i),rR(rP.recipe)}catch(e){throw e}};var rY={};rY=new URL(k("27Lyk").resolve("lzm8Z"),import.meta.url).toString();class rJ{_data;_clear(){this._parentElement.innerHTML=""}render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this.insertHTMLAfterBegin(r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}insertHTMLAfterBegin(e){this._parentElement.insertAdjacentHTML("afterbegin",e)}renderSpinner(){let e=`
    <div class="spinner">
            <svg>
              <use href="${b(rY)}#icon-loader"></use>
            </svg>
    </div>
    `;this._clear(),this.insertHTMLAfterBegin(e)}renderError(e=this._errorMessage){let t=`
    <div class="error">
            <div>
              <svg>
                <use href="${b(rY)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this.insertHTMLAfterBegin(t)}renderMessage(e=this._message){let t=`
    <div class="message">
            <div>
              <svg>
                <use href="${b(rY)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this.insertHTMLAfterBegin(t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=function(){var e=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r};return function(){if(e(this.denominator)){var r=t(this.denominator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(e(this.numerator)){var r=t(this.numerator,9),n=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},m=Fraction;class rQ extends rJ{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}addHandlerAddRecipeToWeek(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--week-day");r&&e(r)})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rY)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rY)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${b(rY)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${b(rY)}#icon-plus-circle"></use>
            </svg>
          </button>
          
        </div>
      </div>

     
      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${b(rY)}#icon-user"></use>
       </svg>
      </div>
      <button class="btn--addIng">ADD INGRIDIENTS</button>
      <div class= "btn--week btn--round"><span>Week</span>
      <button data-day='mon' class= "btn--week-day btn--mon">Mon</button>
      <button data-day='tue' class= "btn--week-day btn--tue">Tue</button>
      <button data-day='wed' class= "btn--week-day btn--wed">Wed</button>
      <button data-day='thu' class= "btn--week-day btn--thu">Thu</button>
      <button data-day='fri' class= "btn--week-day btn--fri">Fri</button>
      <button data-day='sat' class= "btn--week-day btn--sat">Sat</button>
      <button data-day='sun' class= "btn--week-day btn--sun">Sun</button>
      </div>
      </button>
      <button class="btn--round btn--bookmark">
         <svg class="">
           <use href="${b(rY)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngridient).join("")}
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${b(rY)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
`}_generateMarkupIngridient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${b(rY)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new m(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var rV=new rQ;class rK{_parentEl=document.querySelector(".search");_header=document.querySelector(".header");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rZ=new rK,rX=new class extends rJ{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
          <li class="preview">
                  <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                      <img src="${this._data.image}" alt="${this._data.title}" />
                    </figure>
                    <div class="preview__data">
                      <h4 class="preview__title">${this._data.title}</h4>
                      <p class="preview__publisher">${this._data.publisher}</p>
                      
                      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                        <svg>
                          <use href="${b(rY)}#icon-user"></use>
                        </svg>
                      </div>
                      </div>
                  </a>
                </li>
            `}};class r1 extends rJ{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rX.render(e,!1)).join("")}}var r0=new r1;class r2 extends rJ{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){t.preventDefault();let r=t.target.closest(".pagination__btn");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=function(){if(1===t)return"";let e="";for(let r=1;r<=t;r++)e+=`<a href="#" data-goto = ${r} class="pagination__link pagination__btn" /> ${r}</a>`;return e};return(console.log(r()),1===e&&t>1)?`
      <button data-goto= "${e+1}" class="btn--inline pagination__btn pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
          <use href="${b(rY)}#icon-arrow-right"></use>
        </svg>
      </button>
      <div>
    ${r()}
    </div>`:e===t&&t>1?`
      <div>
    ${r()}
    </div>
      <button data-goto= "${e-1}" class="btn--inline pagination__btn pagination__btn--prev">
        <svg class="search__icon">
          <use href="${b(rY)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
    </button>`:e<t?`
      <button data-goto= "${e-1}" class="btn--inline pagination__btn pagination__btn--prev">
        <svg class="search__icon">
          <use href="${b(rY)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
    </button>
    <div>
    ${r()}
    </div>

    <button data-goto= "${e+1}" class="btn--inline pagination__btn pagination__btn--next">
      <span>Page ${e+1}</span>
      <svg class="search__icon">
        <use href="${b(rY)}#icon-arrow-right"></use>
      </svg>
    </button>`:"only 1 page"}}var r3=new r2;class r4 extends rJ{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rX.render(e,!1)).join("")}}var r9=new r4;class r7 extends rJ{_parentElement=document.querySelector(".upload");_message="Recipe was successfully upload";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");cl;constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);console.log(n),e(n)})}_generateMarkup(){}}var r8=new r7;class r5 extends rJ{_parentElement=document.querySelector(".recipe");_btn=document.querySelector(".nav__btn--shoping-cart");_errorMessage="No ingridients in  shopping cart";addHandlerAddIngridientsToList(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--addIng");r&&e()})}addHandlerDeleteIngridientsFromList(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--delete-all-ing");r&&e()})}addHandlerShoppingCart(e){this._btn.addEventListener("click",e)}_generateMarkup(){return console.log(this._data.flat()),`<div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.flat().map(this._generateMarkupIngridient).join("")}
      </ul>
    </div>;
    <button class="btn--delete-all-ing">Delete All ingridients</button>
    `}_generateMarkupIngridient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${b(rY)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}}var r6=new r5;class ne extends rJ{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found on your weekend! Please add some recipes ;)";_btn=document.querySelector(".nav__btn--calender");addHandlerCalender(e){this._btn.addEventListener("click",function(){e()})}render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return"";this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this.insertHTMLAfterBegin(r)}_generateMarkup(){return`<div class='week'>
    <div class='monday'>
    <h1>MONDAY</h1>
    ${this._data[0].map(e=>rX.render(e,!1)).join("")}</div>
    <div class='tuesday'>
    <h1>TUESDAY</h1>
    ${this._data[1].map(e=>rX.render(e,!1)).join("")}</div>
    <div class='wednesday'>
    <h1>WEDNESDAY</h1>
    ${this._data[2].map(e=>rX.render(e,!1)).join("")}</div>
    <div class='thursday'>
    <h1>THURSDAY</h1>
    ${this._data[3].map(e=>rX.render(e,!1)).join("")}</div>   
    <div class='friday'>
    <h1>FRIDAY</h1>
    ${this._data[4].map(e=>rX.render(e,!1)).join("")}</div>    
    <div class='saturday'>
    <h1>SATURDAY</h1>
    ${this._data[5].map(e=>rX.render(e,!1)).join("")}</div>   
    <div class='sunday'>
    <h1>SUNDAY</h1>
    ${this._data[6].map(e=>rX.render(e,!1)).join("")}</div>   
    </div>;`}}var nt=new ne;const nr=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rV.renderSpinner(),r0.update(rq()),await rI(e),rV.render(rP.recipe),r9.update(rP.bookmarks)}catch(e){rV.renderError(),console.error(e)}},nn=async function(){try{let e=rZ.getQuery();if(!e)return;r0.renderSpinner(),await rH(e),r0.render(rq()),r3.render(rP.search)}catch(e){console.log(e)}},ni=async function(e){try{r8.renderSpinner(),await rG(e),console.log(rP.recipe),rV.render(rP.recipe),setTimeout(function(){r8.toggleWindow()},2500),r8.renderMessage(),r9.render(rP.bookmarks),window.history.pushState(null,"",`#${rP.recipe.id}`)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5",e),r8.renderError(e.message)}};r9.addHandlerRender(function(){r9.render(rP.bookmarks)}),rV.addHandlerRender(nr),rV.addHandlerUpdateServings(function(e){rN(e),rV.update(rP.recipe)}),rV.addHandlerAddBookmark(function(){rP.recipe.bookmarked?rW(rP.recipe.id):rR(rP.recipe),rV.update(rP.recipe),r9.render(rP.bookmarks)}),rV.addHandlerAddRecipeToWeek(function(e){console.log(e.dataset.day),rD(e)}),nt.addHandlerCalender(function(){console.log("Working"),nt.render(rP.weekend)}),r6.addHandlerAddIngridientsToList(function(){rB()}),r6.addHandlerShoppingCart(function(){console.log(rP.shoppingCart),r6.render(rP.shoppingCart)}),r6.addHandlerDeleteIngridientsFromList(function(){rU(),location.reload()}),rZ.addHandlerSearch(nn),r3.addHandlerClick(function(e){r0.render(rq(e)),r3.render(rP.search)}),r8.addHandlerUpload(ni);
//# sourceMappingURL=index.e753d86a.js.map
