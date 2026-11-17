/*!
 * GSAP 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&ze}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Mt(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=dt.length,i=dt.slice(0);for(ct={},t=dt.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){dt.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),dt.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(Z(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||Ot(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Qt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(dt.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Mt(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Mt(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=y[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f<d&&f--}for(c=y[d]=[],i=T?Math.min(f,d)*w-.5:m%f,n=f===U?0:T?d*x/f-.5:m/f|0,l=U,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ya(p.amount||p.each)||0,_=_&&d<0?Yt(_):_}return d=(c[t]-c.min)/c.max||0,ja(c.b+(_?_(d):d)*c.v)+c.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=Z(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Mt(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa(Z(t)?!e:!0===r?!!(r=0):!i,function(){return Z(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&Ct(t,"onInterrupt"),t}function wb(t){if(t)if(t=!t.name&&t.default||t,x()||t.headless){var e=t.name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Wt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(ze,i,_e)}else At.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,d,c,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:zt.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),zt[e])p=zt[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=c=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||zt.transparent;p=p.map(Number)}return r&&!c&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(d=l-f,u=.5<h?d/(2-l-f):d/(l+f),o=l===n?(a-s)/d+(a<s?6:0):l===a?(s-n)/d+2:(n-a)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Et).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Et),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Et,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Et)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Et.lastIndex=0,Et.test(r))return e=Dt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Lt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Bt,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Lt._CE&&It.test(t)?Lt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Lt[t]=ot[t]=a,Lt[n=t.toLowerCase()]=r,a)Lt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Lt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var F,L,l,I,h,n,a,i,o,f,d,c,p,_,m,g,b,O,k,M,C,A,z,E,D,B,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,G=N/4,W=0,K=Math.sqrt,J=Math.cos,H=Math.sin,$="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Z=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},dt=[],ct={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*(Z(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},Ot=function _clamp(t,e,r){return r<t?t:e<r?e:r},kt=[].slice,Mt=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?Z(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Mt(t)):i.push(t)})||i}(t,i):_a(t)?kt.call(t,0):t?[t]:[]:kt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},Ct=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&dt.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},At=[],St=255,zt={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Et=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in zt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Dt=/hsl[a]?\(/,Rt=(k=Date.now,M=500,C=33,A=k(),z=A,D=E=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=ze,(h.gsapVersions||(h.gsapVersions=[])).push(ze.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),At.forEach(wb)),m="undefined"!=typeof requestAnimationFrame&&requestAnimationFrame,p&&g.sleep(),_=m||function(t){return setTimeout(t,D-1e3*g.time+1|0)},c=1,yl(2))},sleep:function sleep(){(m?cancelAnimationFrame:clearTimeout)(p),c=0,_=T},lagSmoothing:function lagSmoothing(t,e){M=t||1/0,C=Math.min(e||33,M)},fps:function fps(t){E=1e3/(t||240),D=1e3*g.time+E},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),B[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=B.indexOf(t))&&B.splice(e,1)&&e<=O&&O--},_listeners:B=[]}),Ft=function _wake(){return!c&&Rt.wake()},Lt={},It=/^[\d.\-M][\d.\-,\s]/,Bt=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Lt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=k()-z,s=!0===t;if((M<a||a<0)&&(A+=a-C),(0<(e=(i=(z+=a)-A)-D)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,D+=e+(E<=e?4:E-e),r=1),s||(p=_(yl)),r)for(O=0;O<B.length;O++)B[O](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Lt.Linear.easeNone=Lt.none=Lt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*G)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Lt.SteppedEase=Lt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*Ot(0,.99999999,t)|0)+n)*r}}},V.ease=Lt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=W++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):0<this.rawTime()?1:0},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):0<this.rawTime()?1:0},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t,e){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var r=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(Ot(-Math.abs(this._delay),this._tDur,r),!1!==e),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(Math.abs(e._ts)||1),e=e._dp;return!this.parent&&this._sat?this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Co(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Co():i._prom=Co})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),c||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(c=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=Tt(this._tTime,o),!_&&this._tTime&&d!==s&&this._tTime-d*o-this._dur<=0&&(d=s),c&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ct(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(Ct(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&Ct(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(Ct(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if(Z(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=$t.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Mt(e),s=this._first,o=t(r);s;)s instanceof $t?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||Z(t)||$(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==d))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(Z(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Gt,Wt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var d,c=t[e],p="get"!==i?i:s(c)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,_=s(c)?l?re:te:Zt;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(d=ka(p,n)+(Ya(p)||0))&&0!==d||(n=d))),!f||p!==n||Gt)return isNaN(p*n)||""===n?(c||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ka(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(d=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof c?se:ae,0,_),l&&(d.fp=l),u&&d.modifier(u,this,t),this._pt=d)},Qt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.runBackwards,O=m.yoyoEase,k=m.keyframes,M=m.autoRevert,P=t._dur,C=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.vars.targets:A,E="auto"===t._overwrite&&!F,D=t.timeline;if(!D||k&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!D&&!!m.runBackwards,!D||k&&!m.stagger){if(p=(l=A[0]?fa(A[0]).harness:0)&&m[l.prop],i=ua(m,ft),C&&(C._zTime<0&&C.progress(1),e<0&&x&&y&&!M?C.render(-1,!0):C.revert(x&&P?ht:ut),C._lazy=0),v){if(za(t._startAt=$t.set(A,qa({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!C&&w(T),startAt:null,delay:0,onUpdate:b&&function(){return Ct(t,"onUpdate")},stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!M)&&t._startAt.revert(ht),y&&P&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(x&&P&&!C)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!C&&w(T),immediateRender:y,stagger:0,parent:S},i),p&&(a[l.prop]=p),za(t._startAt=$t.set(A,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=P&&w(T)||T&&!P,n=0;n<A.length;n++){if(h=(o=A[n])._gsap||ea(A)[n]._gsap,t._ptLookup[n]=d={},ct[h.id]&&dt.length&&ma(),c=z===A?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,c,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,c,o,z))?f.priority&&(u=1):d[a]=s=Wt.call(t,o,a,"get",i[a],c,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),E&&t._pt&&(Nt=t,I.killTweensOf(o,d,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(ct[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,k&&e<=0&&D.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var $t=function(D){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,d,c,p=(a=D.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,O=p.defaults,k=p.scrollTrigger,M=p.yoyoEase,P=r.parent||I,C=(Z(e)||$(e)?t(e[0]):"length"in r)?[e]:Mt(e);if(a._targets=C.length?ea(C):R("GSAP target "+e+" not found. https://gsap.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:O||{},targets:P&&"nested"===P.data?P.vars.targets:C})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=C.length,d=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((c=c||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,M&&(u.yoyoEase=M),c&&yt(u,c),f=C[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,C),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,C)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,d?d(o,f,C):0),s._ease=Lt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var A,S,z,E=0;if(Z(x))x.forEach(function(t){return s.to(C,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(A=u[l].sort(function(t,e){return t.t-e.t}),o=E=0;o<A.length;o++)(z={ease:(S=A[o]).e,duration:(S.t-(o?A[o-1].t:0))/100*_})[l]=S.v,s.to(C,z,E),E+=z.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||F||(Nt=_assertThisInitialized(a),I.killTweensOf(C),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),k&&La(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,D);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=t<0,m=c-X<t&&!_?c:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===c?(a=this._repeat,i=p):((a=~~(m/s))&&a===ja(m/s)&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===d&&!r&&this._initted&&a===o)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),this.vars.repeatRefresh&&!u&&!this._lock&&this._time!==s&&this._initted&&(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(!(d===this._time||r&&this.vars.repeatRefresh&&a!==o))return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&!a&&(Ct(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),Ct(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ct(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!d||!(m||d||u)||(Ct(this,m===c?"onComplete":"onReverseComplete",!0),!this._prom||m<c&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=Ot(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&Ct(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ct(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(Ct(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),D.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i,n){c||Rt.wake(),this._ts||this.play();var a,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Qt(this,s),a=this._ease(s/this._dur),function _updatePropTweens(t,e,r,i,n,a,s,o){var u,h,l,f,d=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!d)for(d=t._ptCache[e]=[],l=t._ptLookup,f=t._targets.length;f--;){if((u=l[f][e])&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Gt=1,t.vars[e]="+=0",Qt(t,s),Gt=0,o?R(e+" not eligible for reset"):1;d.push(u)}for(f=d.length;f--;)(u=(h=d[f])._pt||h).s=!i&&0!==i||n?u.s+(i||0)+a*u.c:i,u.c=r-u.s,h.e&&(h.e=ia(r)+Ya(h.e)),h.b&&(h.b=u.s+Ya(h.b))}(this,t,e,r,i,a,s,n)?this.resetTo(t,e,r,i,1):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,d=t?Mt(t):f,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in a=c[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Xt,e=kt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Zt=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:Zt},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Oe&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Oe=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Oe=0,Me=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Gw(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Gw,t===s?Gw(a,function(t){return a.add(null,t)}):t?a[t]=Gw:Gw},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof $t&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(i,t){var n=this;if(i?function(){for(var t,e=n.getTweens(),r=n.data.length;r--;)"isFlip"===(t=n.data[r]).data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return e.splice(e.indexOf(t),1)}));for(e.map(function(t){return{g:t._dur||t._delay||t._sat&&!t._sat.vars.immediateRender?t.globalTime(0):-1/0,t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(i)}),r=n.data.length;r--;)(t=n.data[r])instanceof Xt?"nested"!==t.data&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):t instanceof $t||!t.revert||t.revert(i);n._r.forEach(function(t){return t(i,n)}),n.isReverted=!0}():this.data.forEach(function(t){return t.kill&&t.kill()}),this.clear(),t)for(var e=ge.length;e--;)ge[e].id===this.id&&ge.splice(e,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Me++,t&&this.add(t)}var Ce,Ae=((Ce=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s,function(t){return s.add(null,t)}),this},Ce.revert=function revert(t){this.kill(t||{})},Ce.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t,l&&l.data.push(this)}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Mt(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Mt(r)).length){var n=r.map(function(t){return ze.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&he(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function $x(t,e,r){return n.resetTo(i,t,e,r)}var r,n=ze.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return $x.tween=n,$x},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Mt(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Lt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Lt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof $t&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ae(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return Z(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return Z(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return Ot(e,r,t)})},splitColor:Ab,toArray:Mt,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),d={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if(Z(e)&&!Z(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt(Z(e)?[]:{},e));if(!u){for(s in i)Wt.call(d,e,s,"get",i[s]);a=function func(t){return he(t,d)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:$t,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return F=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=$t[t]}),Rt.add(Xt.updateRoot),d=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var ze=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;$t.version=Xt.version=ze.version="3.12.5",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style,a=i._gsap;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return dr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=dr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=a.x?a[t]:yr(i,t),t===pr&&(this.tfm.zOrigin=a.zOrigin),0<=this.props.indexOf(cr))return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=cr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Be())&&t.isStart||n[cr]||(Kd(n),a.zOrigin&&n[pr]&&(n[pr]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=De.createElementNS?De.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):De.createElement(t);return r&&r.style?r:De.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(Ee=window,De=Ee.document,Re=De.documentElement,Le=Od("div")||{style:{}},Od("div"),cr=mr(cr),pr=cr+"Origin",Le.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Be=ze.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r,i=t.style;e in ar&&e!==pr&&(e=cr),i.removeProperty?("ms"!==(r=e.substr(0,2))&&"webkit"!==e.substr(0,6)||(e="-"+e),i.removeProperty("--"===r?e:e.replace(hr,"-$1").toLowerCase())):i.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Le.style,f=lr.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;if(i===h||!u||gr[i]||gr[h])return u;if("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),(_||"%"===h)&&(ar[e]||~e.indexOf("adius")))return n=o?t.getBBox()[f?"width":"height"]:t[c],ia(_?u/n*100:u/100*n);if(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==De&&a.appendChild||(a=De.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache)return ia(u/s.width*100);if(!_||"height"!==e&&"width"!==e)!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Le),n=Le[c],a.removeChild(Le),l.position="absolute";else{var m=t.style[e];t.style[e]=100+i,n=t[c],m?t.style[e]=m:Xd(t,e)}return f&&_&&((s=fa(a)).time=Rt.time,s.width=a[c]),ia(p?n*u/100:n&&u?100/n*u:0)}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,d,c,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(f=t.style[e],t.style[e]=i,i=Pd(t,e)||i,f?t.style[e]=f:Xd(t,e)),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ka(h,d)+m),c=parseFloat(d),_=d.substr((c+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:c-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:cr),Xd(a,r);i&&(Xd(a,cr),u&&(u.svg&&a.removeAttribute("transform"),Or(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,cr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",d,x),Yd(a,h,"xOffset",c,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[cr]=e,i=Or(r,1),Xd(r,cr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[cr],f[cr]=e,i=Or(r,1),f[cr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var Ee,De,Re,Fe,Le,Ie,Be,Ye,qe=Lt.Power0,Ve=Lt.Power1,Ue=Lt.Power2,Xe=Lt.Power3,Ne=Lt.Power4,Ge=Lt.Linear,We=Lt.Quad,Qe=Lt.Cubic,Ke=Lt.Quart,Je=Lt.Quint,He=Lt.Strong,$e=Lt.Elastic,Ze=Lt.Back,tr=Lt.SteppedEase,er=Lt.Bounce,rr=Lt.Sine,ir=Lt.Expo,nr=Lt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cr="transform",pr=cr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Le).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in dr&&"transform"!==e&&~(e=dr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=Or(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:kr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},Or=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,O,k,M,P,C,A,S,z,E,D,R,F=t.style,L=r.scaleX<0,I="deg",B=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),B.translate&&("none"===B.translate&&"none"===B.scale&&"none"===B.rotate||(F[cr]=("none"!==B.translate?"translate3d("+(B.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==B.rotate?"rotate("+B.rotate+") ":"")+("none"!==B.scale?"scale("+B.scale.split(" ").join(",")+") ":"")+("none"!==B[cr]?B[cr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(M=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,M||Y,!!M||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=O=m[4],n=k=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],E=m[7],A=m[8],S=m[9],z=m[10],D=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,z))*sr,g&&(M=O*(v=Math.cos(-g))+A*(y=Math.sin(-g)),P=k*v+S*y,C=R*v+z*y,A=O*-y+A*v,S=k*-y+S*v,z=R*-y+z*v,D=E*-y+D*v,O=M,k=P,R=C),l=(g=ur(-w,z))*sr,g&&(v=Math.cos(-g),D=x*(y=Math.sin(-g))+D*v,T=M=T*v-A*y,b=P=b*v-S*y,w=C=w*v-z*y),u=(g=ur(b,T))*sr,g&&(M=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=O*v+k*y,b=b*v-T*y,k=k*v-O*y,T=M,O=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(k*k+R*R)),g=ur(O,k),f=2e-4<Math.abs(g)?g*sr:0,c=D?1/(D<0?-D:D):0),r.svg&&(M=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,cr)),M&&t.setAttribute("transform",M))),90<Math.abs(f)&&Math.abs(f)<270&&(L?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+I,r.rotationX=ia(h)+I,r.rotationY=ia(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||!e&&r.zOrigin||0)&&(F[pr]=kr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?zr:Ye?Sr:Mr,r.uncache=0,r},kr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Mr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Cr="0px",Ar=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),O=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,O*b*-v+v)}_!==Cr&&(y+="perspective("+_+Ar),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Cr&&s===Cr&&o===Cr||(y+=o!==Cr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ar),u!==Pr&&(y+="rotate("+u+Ar),h!==Pr&&(y+="rotateY("+h+Ar),l!==Pr&&(y+="rotateX("+l+Ar),f===Pr&&d===Pr||(y+="skew("+f+", "+d+Ar),1===c&&1===p||(y+="scale("+c+", "+p+Ar),g.style[cr]=y||"translate(0, 0)"},zr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),O=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=or,c*=or,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=or,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),O=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),O=ia(O+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),O=ia(O+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+O+")",g.setAttribute("transform",s),w&&(g.style[cr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Er,Dr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w=this._props,x=t.style,O=i.vars.startAt;for(d in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==d&&(o=e[d],!pt[d]||!ac(d,e,i,n,t,a)))if(l=typeof o,f=br[d],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,d,o,i)&&(T=1);else if("--"===d.substr(0,2))s=(getComputedStyle(t).getPropertyValue(d)+"").trim(),o+="",Et.lastIndex=0,Et.test(s)||(c=Ya(s),p=Ya(o)),p?c!==p&&(s=_d(t,d,s,p)+p):c&&(o+=c),this.add(x,"setProperty",s,o,n,a,0,0,d),w.push(d),b.push(d,0,x[d]);else if("undefined"!==l){if(O&&d in O?(s="function"==typeof O[d]?O[d].call(i,n,t,a):O[d],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||"auto"===s||(s+=q.units[d]||Ya(yr(t,d))||""),"="===(s+"").charAt(1)&&(s=yr(t,d))):s=yr(t,d),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),d in dr&&("autoAlpha"===d&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=dr[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in ar)if(this.styles.save(d),g||((v=t._gsap).renderTransform&&!e.parseTransform||Or(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,cr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",d),d+="X";else{if("transformOrigin"===d){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,d,kr(s),kr(o)));continue}if("svgOrigin"===d){le(t,o,1,y,0,this);continue}if(d in xr){ve(this,v,d,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===d){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===d){v[d]=o;continue}if("transform"===d){xe(this,o,t);continue}}else d in x||(d=mr(d)||d);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&d in x)u=u||0,(c=(s+"").substr((h+"").length))!==(p=Ya(o)||(d in q.units?q.units[d]:c))&&(h=_d(t,d,s,p)),this._pt=new _e(this._pt,m?v:x,d,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?vd:yd),this._pt.u=p||0,c!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(d in x)be.call(this,t,d,s,_?_+o:o);else if(d in t)this.add(t,d,s||t[d],_?_+o:o,n,a);else if("parseTransform"!==d){Q(d,o);continue}m||(d in x?b.push(d,0,x[d]):b.push(d,1,s||t[d])),w.push(d)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Be())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:dr,getSetter:function getSetter(t,e,r){var i=dr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Ie===r?"scale"===e?Ed:Dd:(Ie=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};ze.utils.checkPrefix=mr,ze.core.getStyleSaver=Md,Rr=ha((Er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(Dr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(Dr,function(t){q.units[t]="deg",xr[t]=1}),dr[Rr[13]]=Er+","+Dr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");dr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),ze.registerPlugin(Fr);var Lr=ze.registerPlugin(Fr)||ze,Ir=Lr.core.Tween;e.Back=Ze,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Qe,e.Elastic=$e,e.Expo=ir,e.Linear=Ge,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=We,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=$t,e.TweenMax=Ir,e.default=Lr,e.gsap=Lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * Flip 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function p(t){var e=t.ownerDocument||t;!(w in t.style)&&"msTransform"in t.style&&(k=(w="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(y=window,d=new M,e){a=(g=e).documentElement,b=e.body,(s=g.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var i=e.createElement("div"),n=e.createElement("div"),r=e&&(e.body||e.firstElementChild);r&&r.appendChild&&(r.appendChild(i),i.appendChild(n),i.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),m=n.offsetParent!==i,r.removeChild(i))}return e}function t(){return y.pageYOffset||g.scrollTop||a.scrollTop||b.scrollTop||0}function u(){return y.pageXOffset||g.scrollLeft||a.scrollLeft||b.scrollLeft||0}function v(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function x(t,e){if(t.parentNode&&(g||p(t))){var i=v(t),n=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=i?e?"rect":"g":"div",a=2!==e?0:100,s=3===e?100:0,o="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=g.createElementNS?g.createElementNS(n.replace(/^https/,"http"),r):g.createElement(r);return e&&(i?(f=f||x(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+a+","+s+")"),f.appendChild(l)):(c||((c=x(t)).style.cssText=o),l.style.cssText=o+"width:0.1px;height:0.1px;top:"+s+"px;left:"+a+"px",c.appendChild(l))),l}throw"Need document and parent."}function z(t){var e,i=t.getCTM();return i||(e=t.style[w],t.style[w]="none",t.appendChild(s),i=s.getCTM(),t.removeChild(s),e?t.style[w]=e:t.style.removeProperty(w.replace(/([A-Z])/g,"-$1").toLowerCase())),i||d.clone()}function A(t,e){var i,n,r,a,s,o,l=v(t),u=t===l,p=l?C:E,h=t.parentNode;if(t===y)return t;if(p.length||p.push(x(t,1),x(t,2),x(t,3)),i=l?f:c,l)u?(a=-(r=z(t)).e/r.a,s=-r.f/r.d,n=d):t.getBBox?(r=t.getBBox(),a=(n=(n=t.transform?t.transform.baseVal:{}).numberOfItems?1<n.numberOfItems?function _consolidate(t){for(var e=new M,i=0;i<t.numberOfItems;i++)e.multiply(t.getItem(i).matrix);return e}(n):n.getItem(0).matrix:d).a*r.x+n.c*r.y,s=n.b*r.x+n.d*r.y):(n=new M,a=s=0),e&&"g"===t.tagName.toLowerCase()&&(a=s=0),(u?l:h).appendChild(i),i.setAttribute("transform","matrix("+n.a+","+n.b+","+n.c+","+n.d+","+(n.e+a)+","+(n.f+s)+")");else{if(a=s=0,m)for(n=t.offsetParent,r=t;(r=r&&r.parentNode)&&r!==n&&r.parentNode;)4<(y.getComputedStyle(r)[w]+"").length&&(a=r.offsetLeft,s=r.offsetTop,r=0);if("absolute"!==(o=y.getComputedStyle(t)).position&&"fixed"!==o.position)for(n=t.offsetParent;h&&h!==n;)a+=h.scrollLeft||0,s+=h.scrollTop||0,h=h.parentNode;(r=i.style).top=t.offsetTop-s+"px",r.left=t.offsetLeft-a+"px",r[w]=o[w],r[k]=o[k],r.position="fixed"===o.position?"fixed":"absolute",t.parentNode.appendChild(i)}return i}function B(t,e,i,n,r,a,s){return t.a=e,t.b=i,t.c=n,t.d=r,t.e=a,t.f=s,t}var g,y,a,b,c,f,d,s,m,i,w="transform",k=w+"Origin",C=[],E=[],M=((i=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,i=this.c,n=this.d,r=this.e,a=this.f,s=t*n-e*i||1e-10;return B(this,n/s,-e/s,-i/s,t/s,(i*a-n*r)/s,-(t*a-e*r)/s)},i.multiply=function multiply(t){var e=this.a,i=this.b,n=this.c,r=this.d,a=this.e,s=this.f,o=t.a,l=t.c,u=t.b,p=t.d,h=t.e,c=t.f;return B(this,o*e+u*n,o*i+u*r,l*e+p*n,l*i+p*r,a+h*e+c*n,s+h*i+c*r)},i.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},i.equals=function equals(t){var e=this.a,i=this.b,n=this.c,r=this.d,a=this.e,s=this.f;return e===t.a&&i===t.b&&n===t.c&&r===t.d&&a===t.e&&s===t.f},i.apply=function apply(t,e){void 0===e&&(e={});var i=t.x,n=t.y,r=this.a,a=this.b,s=this.c,o=this.d,l=this.e,u=this.f;return e.x=i*r+n*s+l||0,e.y=i*a+n*o+u||0,e},Matrix2D);function Matrix2D(t,e,i,n,r,a){void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===r&&(r=0),void 0===a&&(a=0),B(this,t,e,i,n,r,a)}function getGlobalMatrix(e,i,n,r){if(!e||!e.parentNode||(g||p(e)).documentElement===e)return new M;var a=function _forceNonZeroScale(t){for(var e,i;t&&t!==b;)(i=t._gsap)&&i.uncache&&i.get(t,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),e?e.push(i):e=[i]),t=t.parentNode;return e}(e),s=v(e)?C:E,o=A(e,n),l=s[0].getBoundingClientRect(),h=s[1].getBoundingClientRect(),c=s[2].getBoundingClientRect(),f=o.parentNode,d=!r&&function _isFixed(t){return"fixed"===y.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(e),m=new M((h.left-l.left)/100,(h.top-l.top)/100,(c.left-l.left)/100,(c.top-l.top)/100,l.left+(d?0:u()),l.top+(d?0:t()));if(f.removeChild(o),a)for(l=a.length;l--;)(h=a[l]).scaleX=h.scaleY=0,h.renderTransform(1,h);return i?m.inverse():m}function L(t,e){return t.actions.forEach(function(t){return t.vars[e]&&t.vars[e](t)})}function S(t){return"string"==typeof t?t.split(" ").join("").split(","):t}function V(t){return I(t)[0]||console.warn("Element not found:",t)}function W(t){return Math.round(1e4*t)/1e4||0}function X(t,e,i){return t.forEach(function(t){return t.classList[i](e)})}function $(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function _(t,e){var i,n={};for(i in t)e[i]||(n[i]=t[i]);return n}function ba(t){var e=st[t]=S(t);return et[t]=e.concat(nt),e}function ea(t,e,i){return t.forEach(function(t){return t.d=function _getDOMDepth(t,e,i){void 0===i&&(i=0);for(var n=t.parentNode,r=1e3*Math.pow(10,i)*(e?-1:1),a=e?900*-r:0;t;)a+=r,t=t.previousSibling;return n?a+_getDOMDepth(n,e,i+1):a}(i?t.element:t.t,e)}),t.sort(function(t,e){return t.d-e.d}),t}function fa(t,e){for(var i,n,r=t.element.style,a=t.css=t.css||[],s=e.length;s--;)n=r[i=e[s]]||r.getPropertyValue(i),a.push(n?i:Y[i]||(Y[i]=$(i)),n);return r}function ga(t){var e=t.css,i=t.element.style,n=0;for(t.cache.uncache=1;n<e.length;n+=2)e[n+1]?i[e[n]]=e[n+1]:i.removeProperty(e[n]);!e[e.indexOf("transform")+1]&&i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))}function ha(t,e){t.forEach(function(t){return t.a.cache.uncache=1}),e||t.finalStates.forEach(ga)}function ja(e,i,n){var r,a,s,o=e.element,l=e.width,p=e.height,h=e.uncache,c=e.getProp,f=o.style,d=4;if("object"!=typeof i&&(i=e),tt&&1!==n)return tt._abs.push({t:o,b:e,a:e,sd:0}),tt._final.push(function(){return(e.cache.uncache=1)&&ga(e)}),o;for(a="none"===c("display"),e.isVisible&&!a||(a&&(fa(e,["display"]).display=i.display),e.matrix=i.matrix,e.width=l=e.width||i.width,e.height=p=e.height||i.height),fa(e,R),s=window.getComputedStyle(o);d--;)f[R[d]]=s[R[d]];if(f.gridArea="1 / 1 / 1 / 1",f.transition="none",f.position="absolute",f.width=l+"px",f.height=p+"px",f.top||(f.top="0px"),f.left||(f.left="0px"),h)r=new pt(o);else if((r=_(e,D)).position="absolute",e.simple){var m=o.getBoundingClientRect();r.matrix=new M(1,0,0,1,m.left+u(),m.top+t())}else r.matrix=getGlobalMatrix(o,!1,!1,!0);return r=ot(r,e,!0),e.x=P(r.x,.01),e.y=P(r.y,.01),o}function ka(t,e){return!0!==e&&(e=I(e),t=t.filter(function(t){if(-1!==e.indexOf((t.sd<0?t.b:t.a).element))return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")})),t}function la(t){return ea(t,!0).forEach(function(t){return(t.a.isVisible||t.b.isVisible)&&ja(t.sd<0?t.b:t.a,t.b,1)})}function pa(t,e){var i,n=t.style||t;for(i in e)n[i]=e[i]}function ra(t){return t.map(function(t){return t.element})}function sa(t,e,i){return t&&e.length&&i.add(t(ra(e),i,new ut(e,0,!0)),0)}function ua(t,e){return t instanceof ut?t:new ut(t,e)}function va(t,e,i){var n=t.idLookup[i],r=t.alt[i];return!r.isVisible||(e.getElementState(r.element)||r).isVisible&&n.isVisible?n:r}function za(t){if(t!==l){var e=o.style,i=o.clientWidth===window.outerWidth,n=o.clientHeight===window.outerHeight,r=4;if(t&&(i||n)){for(;r--;)j[r]=e[H[r]];i&&(e.width=o.clientWidth+"px",e.overflowY="hidden"),n&&(e.height=o.clientHeight+"px",e.overflowX="hidden"),l=t}else if(l){for(;r--;)j[r]?e[H[r]]=j[r]:e.removeProperty($(H[r]));l=t}}}function Aa(t,e,r,i){t instanceof ut&&e instanceof ut||console.warn("Not a valid state object.");var a,s,o,l,u,p,h,c,f,n,d,m,g,v,y,x=(r=r||{}).clearProps,b=r.onEnter,w=r.onLeave,S=r.absolute,k=r.absoluteOnLeave,C=r.custom,V=r.delay,E=r.paused,M=r.repeat,B=r.repeatDelay,F=r.yoyo,L=r.toggleClass,I=r.nested,P=r.zIndex,A=r.scale,T=r.fade,O=r.stagger,N=r.spin,D=r.prune,Y=("props"in r?r:t).props,z=_(r,rt),R=Q.timeline({delay:V,paused:E,repeat:M,repeatDelay:B,yoyo:F,data:"isFlip"}),W=z,G=[],j=[],H=[],q=[],$=!0===N?1:N||0,Z="function"==typeof N?N:function(){return $},J=t.interrupted||e.interrupted,U=R[1!==i?"to":"from"];for(s in e.idLookup)d=e.alt[s]?va(e,t,s):e.idLookup[s],u=d.element,n=t.idLookup[s],!t.alt[s]||u!==n.element||!t.alt[s].isVisible&&d.isVisible||(n=t.alt[s]),n?(p={t:u,b:n,a:d,sd:n.element===u?0:d.isVisible?1:-1},H.push(p),p.sd&&(p.sd<0&&(p.b=d,p.a=n),J&&fa(p.b,Y?et[Y]:nt),T&&H.push(p.swap={t:n.element,b:p.b,a:p.a,sd:-p.sd,swap:p})),u._flip=n.element._flip=tt?tt.timeline:R):d.isVisible&&(H.push({t:u,b:_(d,{isVisible:1}),a:d,sd:0,entering:1}),u._flip=tt?tt.timeline:R);Y&&(st[Y]||ba(Y)).forEach(function(e){return z[e]=function(t){return H[t].a.props[e]}}),H.finalStates=f=[],m=function run(){for(ea(H),za(!0),l=0;l<H.length;l++)p=H[l],g=p.a,v=p.b,!D||g.isDifferent(v)||p.entering?(u=p.t,!I||p.sd<0||!l||(g.matrix=getGlobalMatrix(u,!1,!1,!0)),v.isVisible&&g.isVisible?(p.sd<0?(h=new pt(u,Y,t.simple),ot(h,g,A,0,0,h),h.matrix=getGlobalMatrix(u,!1,!1,!0),h.css=p.b.css,p.a=g=h,T&&(u.style.opacity=J?v.opacity:g.opacity),O&&q.push(u)):0<p.sd&&T&&(u.style.opacity=J?g.opacity-v.opacity:"0"),ot(g,v,A,Y)):v.isVisible!==g.isVisible&&(v.isVisible?g.isVisible||(v.css=g.css,j.push(v),H.splice(l--,1),S&&I&&ot(g,v,A,Y)):(g.isVisible&&G.push(g),H.splice(l--,1))),A||(u.style.maxWidth=Math.max(g.width,v.width)+"px",u.style.maxHeight=Math.max(g.height,v.height)+"px",u.style.minWidth=Math.min(g.width,v.width)+"px",u.style.minHeight=Math.min(g.height,v.height)+"px"),I&&L&&u.classList.add(L)):H.splice(l--,1),f.push(g);var e;if(L&&(e=f.map(function(t){return t.element}),I&&e.forEach(function(t){return t.classList.remove(L)})),za(!1),A?(z.scaleX=function(t){return H[t].a.scaleX},z.scaleY=function(t){return H[t].a.scaleY}):(z.width=function(t){return H[t].a.width+"px"},z.height=function(t){return H[t].a.height+"px"},z.autoRound=r.autoRound||!1),z.x=function(t){return H[t].a.x+"px"},z.y=function(t){return H[t].a.y+"px"},z.rotation=function(t){return H[t].a.rotation+(N?360*Z(t,c[t],c):0)},z.skewX=function(t){return H[t].a.skewX},c=H.map(function(t){return t.t}),!P&&0!==P||(z.modifiers={zIndex:function zIndex(){return P}},z.zIndex=P,z.immediateRender=!1!==r.immediateRender),T&&(z.opacity=function(t){return H[t].sd<0?0:0<H[t].sd?H[t].a.opacity:"+=0"}),q.length){O=Q.utils.distribute(O);var i=c.slice(q.length);z.stagger=function(t,e){return O(~q.indexOf(e)?c.indexOf(H[t].swap.t):t,e,i)}}if(it.forEach(function(t){return r[t]&&R.eventCallback(t,r[t],r[t+"Params"])}),C&&c.length)for(s in W=_(z,rt),"scale"in C&&(C.scaleX=C.scaleY=C.scale,delete C.scale),C)(a=_(C[s],at))[s]=z[s],!("duration"in a)&&"duration"in z&&(a.duration=z.duration),a.stagger=z.stagger,U.call(R,c,a,0),delete W[s];(c.length||j.length||G.length)&&(L&&R.add(function(){return X(e,L,R._zTime<0?"remove":"add")},0)&&!E&&X(e,L,"add"),c.length&&U.call(R,c,W,0)),sa(b,G,R),sa(w,j,R);var n=tt&&tt.timeline;n&&(n.add(R,0),tt._final.push(function(){return ha(H,!x)})),o=R.duration(),R.call(function(){var t=R.time()>=o;t&&!n&&ha(H,!x),L&&X(e,L,t?"remove":"add")})},k&&(S=H.filter(function(t){return!t.sd&&!t.a.isVisible&&t.b.isVisible}).map(function(t){return t.a.element})),tt?(S&&(y=tt._abs).push.apply(y,ka(H,S)),tt._run.push(m)):(S&&la(ka(H,S)),m());var K=tt?tt.timeline:R;return K.revert=function(){return lt(K,1,1)},K}function Da(t){for(var e,i=t.idLookup={},n=t.alt={},r=t.elementStates,a=r.length;a--;)i[(e=r[a]).id]?n[e.id]=e:i[e.id]=e}var I,Q,tt,r,o,P,T,l,n,h=1,F={},O=180/Math.PI,N=Math.PI/180,D={},Y={},et={},it=S("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),nt=S("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),rt={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},at={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},st={},R="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),G=function _parseElementState(t,e,i,n){return t instanceof pt?t:t instanceof ut?function _findElStateInState(t,e){return e&&t.idLookup[G(e).id]||t.elementStates[0]}(t,n):new pt("string"==typeof t?V(t)||console.warn(t+" not found"):t,e,i)},ot=function _fit(t,e,i,n,r,a){var s,o,l,u,p,h,c,f=t.element,d=t.cache,m=t.parent,g=t.x,v=t.y,y=e.width,x=e.height,b=e.scaleX,w=e.scaleY,S=e.rotation,k=e.bounds,_=a&&T&&T(f,"transform"),C=t,V=e.matrix,E=V.e,M=V.f,B=t.bounds.width!==k.width||t.bounds.height!==k.height||t.scaleX!==b||t.scaleY!==w||t.rotation!==S,F=!B&&t.simple&&e.simple&&!r;return F||!m?(b=w=1,S=s=0):(h=(p=function _getInverseGlobalMatrix(t){var e=t._gsap||Q.core.getCache(t);return e.gmCache===Q.ticker.frame?e.gMatrix:(e.gmCache=Q.ticker.frame,e.gMatrix=getGlobalMatrix(t,!0,!1,!0))}(m)).clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),S=W(Math.atan2(h.b,h.a)*O),s=W(Math.atan2(h.c,h.d)*O+S)%360,b=Math.sqrt(Math.pow(h.a,2)+Math.pow(h.b,2)),w=Math.sqrt(Math.pow(h.c,2)+Math.pow(h.d,2))*Math.cos(s*N),r&&(r=I(r)[0],u=Q.getProperty(r),c=r.getBBox&&"function"==typeof r.getBBox&&r.getBBox(),C={scaleX:u("scaleX"),scaleY:u("scaleY"),width:c?c.width:Math.ceil(parseFloat(u("width","px"))),height:c?c.height:parseFloat(u("height","px"))}),d.rotation=S+"deg",d.skewX=s+"deg"),i?(b*=y!==C.width&&C.width?y/C.width:1,w*=x!==C.height&&C.height?x/C.height:1,d.scaleX=b,d.scaleY=w):(y=P(y*b/C.scaleX,0),x=P(x*w/C.scaleY,0),f.style.width=y+"px",f.style.height=x+"px"),n&&pa(f,e.props),F||!m?(g+=E-t.matrix.e,v+=M-t.matrix.f):B||m!==e.parent?(d.renderTransform(1,d),h=getGlobalMatrix(r||f,!1,!1,!0),o=p.apply({x:h.e,y:h.f}),g+=(l=p.apply({x:E,y:M})).x-o.x,v+=l.y-o.y):(p.e=p.f=0,g+=(l=p.apply({x:E-t.matrix.e,y:M-t.matrix.f})).x,v+=l.y),g=P(g,.02),v=P(v,.02),!a||a instanceof pt?(d.x=g+"px",d.y=v+"px",d.renderTransform(1,d)):_&&_.revert(),a&&(a.x=g,a.y=v,a.rotation=S,a.skewX=s,i?(a.scaleX=b,a.scaleY=w):(a.width=y,a.height=x)),a||d},j=[],H="width,height,overflowX,overflowY".split(","),lt=function _killFlip(t,e,i){if(t&&t.progress()<1&&(!t.paused()||i))return e&&(function _interrupt(t){t.vars.onInterrupt&&t.vars.onInterrupt.apply(t,t.vars.onInterruptParams||[]),t.getChildren(!0,!1,!0).forEach(_interrupt)}(t),e<2&&t.progress(1),t.kill()),!0},ut=((n=FlipState.prototype).update=function update(t){var e=this;return this.elementStates=this.targets.map(function(t){return new pt(t,e.props,e.simple)}),Da(this),this.interrupt(t),this.recordInlineStyles(),this},n.clear=function clear(){return this.targets.length=this.elementStates.length=0,Da(this),this},n.fit=function fit(t,e,i){for(var n,r,a=ea(this.elementStates.slice(0),!1,!0),s=(t||this).idLookup,o=0;o<a.length;o++)n=a[o],i&&(n.matrix=getGlobalMatrix(n.element,!1,!1,!0)),(r=s[n.id])&&ot(n,r,e,!0,0,n),n.matrix=getGlobalMatrix(n.element,!1,!1,!0);return this},n.getProperty=function getProperty(t,e){var i=this.getElementState(t)||D;return(e in i?i:i.props||D)[e]},n.add=function add(t){for(var e,i,n,r=t.targets.length,a=this.idLookup,s=this.alt;r--;)(n=a[(i=t.elementStates[r]).id])&&(i.element===n.element||s[i.id]&&s[i.id].element===i.element)?(e=this.elementStates.indexOf(i.element===n.element?n:s[i.id]),this.targets.splice(e,1,t.targets[r]),this.elementStates.splice(e,1,i)):(this.targets.push(t.targets[r]),this.elementStates.push(i));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),Da(this),this},n.compare=function compare(t){function kh(t,e,i){return(t.isVisible!==e.isVisible?t.isVisible?f:d:t.isVisible?c:h).push(i)&&m.push(i)}function lh(t,e,i){return m.indexOf(i)<0&&kh(t,e,i)}var e,i,n,r,a,s,o,l,u=t.idLookup,p=this.idLookup,h=[],c=[],f=[],d=[],m=[],g=t.alt,v=this.alt;for(n in u)a=g[n],s=v[n],r=(e=a?va(t,this,n):u[n]).element,i=p[n],s?(l=i.isVisible||!s.isVisible&&r===i.element?i:s,(o=!a||e.isVisible||a.isVisible||l.element!==a.element?e:a).isVisible&&l.isVisible&&o.element!==l.element?((o.isDifferent(l)?c:h).push(o.element,l.element),m.push(o.element,l.element)):kh(o,l,o.element),a&&o.element===a.element&&(a=u[n]),lh(o.element!==i.element&&a?a:o,i,i.element),lh(a&&a.element===s.element?a:o,s,s.element),a&&lh(a,s.element===a.element?s:i,a.element)):(i?i.isDifferent(e)?kh(e,i,r):h.push(r):f.push(r),a&&lh(a,i,a.element));for(n in p)u[n]||(d.push(p[n].element),v[n]&&d.push(v[n].element));return{changed:c,unchanged:h,enter:f,leave:d}},n.recordInlineStyles=function recordInlineStyles(){for(var t=et[this.props]||nt,e=this.elementStates.length;e--;)fa(this.elementStates[e],t)},n.interrupt=function interrupt(n){var r=this,a=[];this.targets.forEach(function(t){var e=t._flip,i=lt(e,n?0:1);n&&i&&a.indexOf(e)<0&&e.add(function(){return r.updateVisibility()}),i&&a.push(e)}),!n&&a.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!a.length)},n.updateVisibility=function updateVisibility(){this.elementStates.forEach(function(t){var e=t.element.getBoundingClientRect();t.isVisible=!!(e.width||e.height||e.top||e.left),t.uncache=1})},n.getElementState=function getElementState(t){return this.elementStates[this.targets.indexOf(V(t))]},n.makeAbsolute=function makeAbsolute(){return ea(this.elementStates.slice(0),!0,!0).map(ja)},FlipState);function FlipState(t,e,i){if(this.props=e&&e.props,this.simple=!(!e||!e.simple),i)this.targets=ra(t),this.elementStates=t,Da(this);else{this.targets=I(t);var n=e&&(!1===e.kill||e.batch&&!e.kill);tt&&!n&&tt._kill.push(this),this.update(n||!!tt)}}var q,pt=((q=ElementState.prototype).isDifferent=function isDifferent(t){var e=this.bounds,i=t.bounds;return e.top!==i.top||e.left!==i.left||e.width!==i.width||e.height!==i.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},q.update=function update(e,i){var n=this,r=n.element,a=Q.getProperty(r),s=Q.core.getCache(r),o=r.getBoundingClientRect(),l=r.getBBox&&"function"==typeof r.getBBox&&"svg"!==r.nodeName.toLowerCase()&&r.getBBox(),p=i?new M(1,0,0,1,o.left+u(),o.top+t()):getGlobalMatrix(r,!1,!1,!0);n.getProp=a,n.element=r,n.id=function _getID(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+h++),e}(r),n.matrix=p,n.cache=s,n.bounds=o,n.isVisible=!!(o.width||o.height||o.left||o.top),n.display=a("display"),n.position=a("position"),n.parent=r.parentNode,n.x=a("x"),n.y=a("y"),n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.rotation=a("rotation"),n.skewX=a("skewX"),n.opacity=a("opacity"),n.width=l?l.width:P(a("width","px"),.04),n.height=l?l.height:P(a("height","px"),.04),e&&function _recordProps(t,e){for(var i=Q.getProperty(t.element,null,"native"),n=t.props={},r=e.length;r--;)n[e[r]]=(i(e[r])+"").trim();n.zIndex&&(n.zIndex=parseFloat(n.zIndex)||0)}(n,st[e]||ba(e)),n.ctm=r.getCTM&&"svg"===r.nodeName.toLowerCase()&&z(r).inverse(),n.simple=i||1===W(p.a)&&!W(p.b)&&!W(p.c)&&1===W(p.d),n.uncache=0},ElementState);function ElementState(t,e,i){this.element=t,this.update(e,i)}var Z,J=((Z=FlipAction.prototype).getStateById=function getStateById(t){for(var e=this.states.length;e--;)if(this.states[e].idLookup[t])return this.states[e]},Z.kill=function kill(){this.batch.remove(this)},FlipAction);function FlipAction(t,e){this.vars=t,this.batch=e,this.states=[],this.timeline=e.timeline}var U,K=((U=FlipBatch.prototype).add=function add(e){var t=this.actions.filter(function(t){return t.vars===e});return t.length?t[0]:(t=new J("function"==typeof e?{animate:e}:e,this),this.actions.push(t),t)},U.remove=function remove(t){var e=this.actions.indexOf(t);return 0<=e&&this.actions.splice(e,1),this},U.getState=function getState(e){var i=this,t=tt,n=r;return(tt=this).state.clear(),this._kill.length=0,this.actions.forEach(function(t){t.vars.getState&&(t.states.length=0,(r=t).state=t.vars.getState(t)),e&&t.states.forEach(function(t){return i.state.add(t)})}),r=n,tt=t,this.killConflicts(),this},U.animate=function animate(){var t,e,i=this,n=tt,r=this.timeline,a=this.actions.length;for(tt=this,r.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(t){t.vars.animate&&t.vars.animate(t);var e,i,n=t.vars.onEnter,r=t.vars.onLeave,a=t.targets;a&&a.length&&(n||r)&&(e=new ut,t.states.forEach(function(t){return e.add(t)}),(i=e.compare(ht.getState(a))).enter.length&&n&&n(i.enter),i.leave.length&&r&&r(i.leave))}),la(this._abs),this._run.forEach(function(t){return t()}),e=r.duration(),t=this._final.slice(0),r.add(function(){e<=r.time()&&(t.forEach(function(t){return t()}),L(i,"onComplete"))}),tt=n;a--;)this.actions[a].vars.once&&this.actions[a].kill();return L(this,"onStart"),r.restart(),this},U.loadState=function loadState(n){n=n||function done(){return 0};var r=[];return this.actions.forEach(function(e){if(e.vars.loadState){var i,t=function f(t){t&&(e.targets=t),~(i=r.indexOf(f))&&(r.splice(i,1),r.length||n())};r.push(t),e.vars.loadState(t)}}),r.length||n(),this},U.setState=function setState(){return this.actions.forEach(function(t){return t.targets=t.vars.setState&&t.vars.setState(t)}),this},U.killConflicts=function killConflicts(e){return this.state.interrupt(e),this._kill.forEach(function(t){return t.interrupt(e)}),this},U.run=function run(t,e){var i=this;return this!==tt&&(t||this.getState(e),this.loadState(function(){i._killed||(i.setState(),i.animate())})),this},U.clear=function clear(t){this.state.clear(),t||(this.actions.length=0)},U.getStateById=function getStateById(t){for(var e,i=this.actions.length;i--;)if(e=this.actions[i].getStateById(t))return e;return this.state.idLookup[t]&&this.state},U.kill=function kill(){this._killed=1,this.clear(),delete F[this.id]},FlipBatch);function FlipBatch(t){this.id=t,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new ut,this.timeline=Q.timeline()}var ht=(Flip.getState=function getState(t,e){var i=ua(t,e);return r&&r.states.push(i),e&&e.batch&&Flip.batch(e.batch).state.add(i),i},Flip.from=function from(t,e){return"clearProps"in(e=e||{})||(e.clearProps=!0),Aa(t,ua(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,-1)},Flip.to=function to(t,e){return Aa(t,ua(e.targets||t.targets,{props:e.props||t.props,simple:e.simple,kill:!!e.kill}),e,1)},Flip.fromTo=function fromTo(t,e,i){return Aa(t,e,i)},Flip.fit=function fit(t,e,i){var n=i?_(i,at):{},r=i||n,a=r.absolute,s=r.scale,o=r.getVars,l=r.props,u=r.runBackwards,p=r.onComplete,h=r.simple,c=i&&i.fitChild&&V(i.fitChild),f=G(e,l,h,t),d=G(t,0,h,f),m=l?et[l]:nt,g=Q.context();return l&&pa(n,f.props),fa(d,m),u&&("immediateRender"in n||(n.immediateRender=!0),n.onComplete=function(){ga(d),p&&p.apply(this,arguments)}),a&&ja(d,f),n=ot(d,f,s||c,l,c,n.duration||o?n:0),g&&!o&&g.add(function(){return function(){return ga(d)}}),o?n:n.duration?Q.to(d.element,n):null},Flip.makeAbsolute=function makeAbsolute(t,e){return(t instanceof ut?t:new ut(t,e)).makeAbsolute()},Flip.batch=function batch(t){return F[t=t||"default"]||(F[t]=new K(t))},Flip.killFlipsOf=function killFlipsOf(t,e){(t instanceof ut?t.targets:I(t)).forEach(function(t){return t&&lt(t._flip,!1!==e?1:2)})},Flip.isFlipping=function isFlipping(t){var e=Flip.getByTarget(t);return!!e&&e.isActive()},Flip.getByTarget=function getByTarget(t){return(V(t)||D)._flip},Flip.getElementState=function getElementState(t,e){return new pt(V(t),e)},Flip.convertCoordinates=function convertCoordinates(t,e,i){var n=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return i?n.apply(i):n},Flip.register=function register(t){if(o="undefined"!=typeof document&&document.body){Q=t,p(o),I=Q.utils.toArray,T=Q.core.getStyleSaver;var i=Q.utils.snap(.1);P=function _closestTenth(t,e){return i(parseFloat(t)+e)}}},Flip);function Flip(){}ht.version="3.12.5","undefined"!=typeof window&&window.gsap&&window.gsap.registerPlugin(ht),e.Flip=ht,e.default=ht;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return Ce||"undefined"!=typeof window&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce}function z(e,t){return~Le.indexOf(e)&&Le[Le.indexOf(e)+1][t]}function A(e){return!!~t.indexOf(e)}function B(e,t,r,n,o){return e.addEventListener(t,r,{passive:!1!==n,capture:!!o})}function C(e,t,r,n){return e.removeEventListener(t,r,!!n)}function F(){return De&&De.isPressed||Ie.cache++}function G(r,n){function dd(e){if(e||0===e){o&&(Se.history.scrollRestoration="manual");var t=De&&De.isPressed;e=dd.v=Math.round(e)||(De&&De.iOS?1:0),r(e),dd.cacheID=Ie.cache,t&&i("ss",e)}else(n||Ie.cache!==dd.cacheID||i("ref"))&&(dd.cacheID=Ie.cache,dd.v=r());return dd.v+dd.offset}return dd.offset=0,r&&dd}function J(e,t){return(t&&t._ctx&&t._ctx.selector||Ce.utils.toArray)(e)[0]||("string"==typeof e&&!1!==Ce.config().nullTargetWarn?console.warn("Element not found:",e):null)}function K(t,e){var r=e.s,n=e.sc;A(t)&&(t=ke.scrollingElement||Pe);var o=Ie.indexOf(t),i=n===Fe.sc?1:2;~o||(o=Ie.push(t)-1),Ie[o+i]||B(t,"scroll",F);var a=Ie[o+i],s=a||(Ie[o+i]=G(z(t,r),!0)||(A(t)?n:G(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===Ce.getProperty(t,"scrollBehavior")),s}function L(e,t,o){function Cd(e,t){var r=ze();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=ze(),l=s,n=t||50,c=Math.max(500,3*n);return{update:Cd,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=ze();return!e&&0!==e||e===i||Cd(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function M(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function N(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function O(){(Ae=Ce.core.globals().ScrollTrigger)&&Ae.core&&function _integrate(){var e=Ae.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,Ie),n.push.apply(n,Le),Ie=t,Le=n,i=function _bridge(e,t){return r[e](t)}}()}function P(e){return Ce=e||r(),!Te&&Ce&&"undefined"!=typeof document&&document.body&&(Se=window,Pe=(ke=document).documentElement,Me=ke.body,t=[Se,ke,Pe,Me],Ce.utils.clamp,Be=Ce.core.context||function(){},Oe="onpointerenter"in Me?"pointer":"mouse",Ee=k.isTouch=Se.matchMedia&&Se.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Se||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,Re=k.eventTypes=("ontouchstart"in Pe?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pe?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),O(),Te=1),Te}var Ce,Te,Se,ke,Pe,Me,Ee,Oe,Ae,t,De,Re,Be,o=1,qe=[],Ie=[],Le=[],ze=Date.now,i=function _bridge(e,t){return t},n="scrollLeft",a="scrollTop",Ye={s:n,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:G(function(e){return arguments.length?Se.scrollTo(e,Fe.sc()):Se.pageXOffset||ke[n]||Pe[n]||Me[n]||0})},Fe={s:a,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ye,sc:G(function(e){return arguments.length?Se.scrollTo(Ye.sc(),e):Se.pageYOffset||ke[a]||Pe[a]||Me[a]||0})};Ye.op=Fe,Ie.cache=0;var k=(Observer.prototype.init=function init(e){Te||P(Ce)||console.warn("Please gsap.registerPlugin(Observer)"),Ae||O();var o=e.tolerance,a=e.dragMinimum,t=e.type,i=e.target,r=e.lineHeight,n=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,T=e.onChangeY,S=e.onChange,k=e.onToggleX,E=e.onToggleY,D=e.onHover,R=e.onHoverEnd,q=e.onMove,I=e.ignoreCheck,z=e.isNormalizer,Y=e.onGestureStart,H=e.onGestureEnd,X=e.onWheel,W=e.onEnable,V=e.onDisable,U=e.onClick,j=e.scrollSpeed,G=e.capture,Q=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function cf(){return xe=ze()}function df(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&he&&"touch"!==e.pointerType||I&&I(e,t)}function ff(){var e=se.deltaX=N(me),t=se.deltaY=N(ye),r=Math.abs(e)>=o,n=Math.abs(t)>=o;S&&(r||n)&&S(se,e,t,me,ye),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,me[0]=me[1]=me[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),T&&T(se),E&&se.deltaY<0!=ce<0&&E(se),ce=se.deltaY,ye[0]=ye[1]=ye[2]=0),(ne||re)&&(q&&q(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(X(se),oe=!1),ee=0}function gf(e,t,r){me[r]+=e,ye[r]+=t,se._vx.update(e),se._vy.update(t),n?ee=ee||requestAnimationFrame(ff):ff()}function hf(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(me[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(ye[2]+=t,se._vy.update(t,!0)),n?ee=ee||requestAnimationFrame(ff):ff()}function jf(e){if(!df(e,1)){var t=(e=M(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),hf(n,o),i||p&&p(se))}}function mf(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&Y(e,se.isDragging)}function nf(){return(se.isGesturing=!1)||H(se)}function of(e){if(!df(e)){var t=fe(),r=de();gf((t-pe)*j,(r-ge)*j,1),pe=t,ge=r,l&&te.restart(!0)}}function pf(e){if(!df(e)){e=M(e,s),X&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Se.innerHeight:1)*f;gf(e.deltaX*t,e.deltaY*t,0),l&&!z&&te.restart(!0)}}function qf(e){if(!df(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,l&&te.restart(!0),(n||o)&&hf(n,o)}}function rf(e){se.event=e,D(se)}function sf(e){se.event=e,R(se)}function tf(e){return df(e)||M(e,s)&&U(se)}this.target=i=J(i)||Pe,this.vars=e,u=u&&Ce.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,j=j||1,t=t||"wheel,touch,pointer",n=!1!==n,r=r||parseFloat(Se.getComputedStyle(Me).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=e.passive||!s,fe=K(i,Ye),de=K(i,Fe),pe=fe(),ge=de(),he=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===Re[0],ve=A(i),be=i.ownerDocument||ke,me=[0,0,0],ye=[0,0,0],xe=0,we=se.onPress=function(e){df(e,1)||e&&e.button||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=M(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),B(z?i:be,Re[1],jf,ue,!0),se.deltaX=se.deltaY=0,v&&v(se))},_e=se.onRelease=function(t){if(!df(t,1)){C(z?i:be,Re[1],jf,!0);var e=!isNaN(se.y-se.startY),r=se.isDragging,n=r&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),o=M(t);!n&&e&&(se._vx.reset(),se._vy.reset(),s&&Q&&Ce.delayedCall(.08,function(){if(300<ze()-xe&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(be.createEvent){var e=be.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Se,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&r&&!z&&te.restart(!0),g&&r&&g(se),b&&b(se,n)}};te=se._dc=Ce.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=L(0,50,!0),se._vy=L(0,50,!0),se.scrollX=fe,se.scrollY=de,se.isDragging=se.isGesturing=se.isPressed=!1,Be(this),se.enable=function(e){return se.isEnabled||(B(ve?be:i,"scroll",F),0<=t.indexOf("scroll")&&B(ve?be:i,"scroll",of,ue,G),0<=t.indexOf("wheel")&&B(i,"wheel",pf,ue,G),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(B(i,Re[0],we,ue,G),B(be,Re[2],_e),B(be,Re[3],_e),Q&&B(i,"click",cf,!0,!0),U&&B(i,"click",tf),Y&&B(be,"gesturestart",mf),H&&B(be,"gestureend",nf),D&&B(i,Oe+"enter",rf),R&&B(i,Oe+"leave",sf),q&&B(i,Oe+"move",qf)),se.isEnabled=!0,e&&e.type&&we(e),W&&W(se)),se},se.disable=function(){se.isEnabled&&(qe.filter(function(e){return e!==se&&A(e.target)}).length||C(ve?be:i,"scroll",F),se.isPressed&&(se._vx.reset(),se._vy.reset(),C(z?i:be,Re[1],jf,!0)),C(ve?be:i,"scroll",of,G),C(i,"wheel",pf,G),C(i,Re[0],we,G),C(be,Re[2],_e),C(be,Re[3],_e),C(i,"click",cf,!0),C(i,"click",tf),C(be,"gesturestart",mf),C(be,"gestureend",nf),C(i,Oe+"enter",rf),C(i,Oe+"leave",sf),C(i,Oe+"move",qf),se.isEnabled=se.isPressed=se.isDragging=!1,V&&V(se))},se.kill=se.revert=function(){se.disable();var e=qe.indexOf(se);0<=e&&qe.splice(e,1),De===se&&(De=0)},qe.push(se),z&&A(i)&&(De=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.12.5",k.create=function(e){return new k(e)},k.register=P,k.getAll=function(){return qe.slice()},k.getById=function(t){return qe.filter(function(e){return e.vars.id===t})[0]},r()&&Ce.registerPlugin(k);function Ca(e,t,r){var n=ct(e)&&("clamp("===e.substr(0,6)||-1<e.indexOf("max"));return(r["_"+t+"Clamp"]=n)?e.substr(6,e.length-7):e}function Da(e,t){return!t||ct(e)&&"clamp("===e.substr(0,6)?e:"clamp("+e+")"}function Fa(){return Ge=1}function Ga(){return Ge=0}function Ha(e){return e}function Ia(e){return Math.round(1e5*e)/1e5||0}function Ja(){return"undefined"!=typeof window}function Ka(){return He||Ja()&&(He=window.gsap)&&He.registerPlugin&&He}function La(e){return!!~l.indexOf(e)}function Ma(e){return("Height"===e?T:Ne["inner"+e])||Je["client"+e]||We["client"+e]}function Na(e){return z(e,"getBoundingClientRect")||(La(e)?function(){return Ot.width=Ne.innerWidth,Ot.height=T,Ot}:function(){return wt(e)})}function Qa(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return Math.max(0,(r="scroll"+n)&&(i=z(e,r))?i()-Na(e)()[o]:La(e)?(Je[r]||We[r])-Ma(n):e[r]-e["offset"+n])}function Ra(e,t){for(var r=0;r<g.length;r+=3)t&&!~t.indexOf(g[r+1])||e(g[r],g[r+1],g[r+2])}function Ta(e){return"function"==typeof e}function Ua(e){return"number"==typeof e}function Va(e){return"object"==typeof e}function Wa(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Xa(e,t){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e)}):t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function mb(e){return Ne.getComputedStyle(e)}function ob(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function qb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function rb(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function tb(o){var i=He.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function vb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function wb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function xb(e,t,r,n){return e.removeEventListener(t,r,!!n)}function yb(e,t,r){(r=r&&r.wheelHandler)&&(e(t,"wheel",r),e(t,"touchmove",r))}function Cb(e,t){if(ct(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in H?H[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Db(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,d=o.fontWeight,p=Xe.createElement("div"),g=La(r)||"fixed"===z(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?We:r,b=-1!==e.indexOf("start"),m=b?l:c,y="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(y+=(n===Fe?q:I)+":"+(i+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=y,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],X(p,0,n,b),p}function Ib(){return 34<at()-st&&(D=D||requestAnimationFrame(Z))}function Jb(){v&&v.isPressed&&!(v.startX>We.clientWidth)||(Ie.cache++,v?D=D||requestAnimationFrame(Z):Z(),st||U("scrollStart"),st=at())}function Kb(){y=Ne.innerWidth,m=Ne.innerHeight}function Lb(){Ie.cache++,je||h||Xe.fullscreenElement||Xe.webkitFullscreenElement||b&&y===Ne.innerWidth&&!(Math.abs(Ne.innerHeight-m)>.25*Ne.innerHeight)||c.restart(!0)}function Ob(){return xb(ne,"scrollEnd",Ob)||Pt(!0)}function Rb(e){for(var t=0;t<j.length;t+=5)(!e||j[t+4]&&j[t+4].query===e)&&(j[t].style.cssText=j[t+1],j[t].getBBox&&j[t].setAttribute("transform",j[t+2]||""),j[t+3].uncache=1)}function Sb(e,t){var r;for(Qe=0;Qe<Tt.length;Qe++)!(r=Tt[Qe])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));S=!0,t&&Rb(t),t||U("revert")}function Tb(e,t){Ie.cache++,!t&&rt||Ie.forEach(function(e){return Ta(e)&&e.cacheID++&&(e.rec=0)}),ct(e)&&(Ne.history.scrollRestoration=w=e)}function Yb(){We.appendChild(_),T=!v&&_.offsetHeight||Ne.innerHeight,We.removeChild(_)}function Zb(t){return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})}function gc(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=$.length,a=t.style,s=e.style;i--;)a[o=$[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[I]=s[q]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ft]=qb(e,Ye)+xt,a[dt]=qb(e,Fe)+xt,a[bt]=s[mt]=s.top=s.left="0",Et(n),s[ft]=s.maxWidth=r[ft],s[dt]=s.maxHeight=r[dt],s[bt]=r[bt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function jc(e){for(var t=ee.length,r=e.style,n=[],o=0;o<t;o++)n.push(ee[o],r[ee[o]]);return n.t=e,n}function mc(e,t,r,n,o,i,a,s,l,c,u,f,d,p){Ta(e)&&(e=e(s)),ct(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?Cb("0"+e.substr(3),r):0));var g,h,v,b=d?d.time():0;if(d&&d.seek(0),isNaN(e)||(e=+e),Ua(e))d&&(e=He.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&X(a,r,n,!0);else{Ta(t)&&(t=t(s));var m,y,x,w,_=(e||"0").split(" ");v=J(t,s)||We,(m=wt(v)||{})&&(m.left||m.top)||"none"!==mb(v).display||(w=v.style.display,v.style.display="block",m=wt(v),w?v.style.display=w:v.style.removeProperty("display")),y=Cb(_[0],m[n.d]),x=Cb(_[1]||"0",r),e=m[n.p]-l[n.p]-c+y+o-x,a&&X(a,x,n,r-x<20||a._isStart&&20<x),r-=r-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),i){var C=e+r,T=i._isStart;g="scroll"+n.d2,X(i,C,n,T&&20<C||!T&&(u?Math.max(We[g],Je[g]):i.parentNode[g])<=C+1),u&&(l=wt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+xt))}return d&&v&&(g=wt(v),d.seek(f),h=wt(v),d._caScrollDist=g[n.p]-h[n.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)}function oc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===We){for(o in e._stOrig=a.cssText,i=mb(e))+o||re.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}}function pc(r,e,n){var o=e,i=o;return function(e){var t=Math.round(r());return t!==o&&t!==i&&3<Math.abs(t-o)&&3<Math.abs(t-i)&&(e=t,n&&n()),i=o,o=e}}function qc(e,t,r){var n={};n[t.p]="+="+r,He.set(e,n)}function rc(c,e){function Ck(e,t,r,n,o){var i=Ck.tween,a=t.onComplete,s={};r=r||u();var l=pc(u,r,function(){i.kill(),Ck.tween=0});return o=n&&o||0,n=n||e-r,i&&i.kill(),t[f]=e,t.inherit=!1,(t.modifiers=s)[f]=function(){return l(r+n*i.ratio+o*i.ratio*i.ratio)},t.onUpdate=function(){Ie.cache++,Ck.tween&&Z()},t.onComplete=function(){Ck.tween=0,a&&a.call(i)},i=Ck.tween=He.to(c,t)}var u=K(c,e),f="_scroll"+e.p2;return(c[f]=u).wheelHandler=function(){return Ck.tween&&Ck.tween.kill()&&(Ck.tween=0)},wb(c,"wheel",u.wheelHandler),ne.isTouch&&wb(c,"touchmove",u.wheelHandler),Ck}var He,s,Ne,Xe,Je,We,l,c,Ve,Ue,Ke,u,je,Ge,f,Qe,d,p,g,Ze,$e,h,v,b,m,y,E,x,w,_,T,S,et,tt,D,rt,nt,ot,it=1,at=Date.now,R=at(),st=0,lt=0,ct=function _isString(e){return"string"==typeof e},ut=Math.abs,q="right",I="bottom",ft="width",dt="height",pt="Right",gt="Left",ht="Top",vt="Bottom",bt="padding",mt="margin",yt="Width",Y="Height",xt="px",wt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==mb(e)[f]&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},_t={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},H={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+yt]=1,o["border"+a+yt]=0,o[r.p]=t+"px",He.set(e,o)},Tt=[],St={},W={},V=[],U=function _dispatch(e){return W[e]&&W[e].map(function(e){return e()})||V},j=[],kt=0,Pt=function _refreshAll(e,t){if(!st||e||S){Yb(),rt=ne.isRefreshing=!0,Ie.forEach(function(e){return Ta(e)&&++e.cacheID&&(e.rec=e())});var r=U("refreshInit");Ze&&ne.sort(),t||Sb(),Ie.forEach(function(e){Ta(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Tt.slice(0).forEach(function(e){return e.refresh()}),S=!1,Tt.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?"offsetWidth":"offsetHeight",r=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-r),e.refresh()}}),et=1,Zb(!0),Tt.forEach(function(e){var t=Qa(e.scroller,e._dir),r="max"===e.vars.end||e._endClamp&&e.end>t,n=e._startClamp&&e.start>=t;(r||n)&&e.setPositions(n?t-1:e.start,r?Math.max(n?t:e.start+1,t):e.end,!0)}),Zb(!1),et=0,r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ie.forEach(function(e){Ta(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Tb(w,1),c.pause(),kt++,Z(rt=2),Tt.forEach(function(e){return Ta(e.vars.onRefresh)&&e.vars.onRefresh(e)}),rt=ne.isRefreshing=!1,U("refresh")}else wb(ne,"scrollEnd",Ob)},Q=0,Mt=1,Z=function _updateAll(e){if(2===e||!rt&&!S){ne.isUpdating=!0,ot&&ot.update(0);var t=Tt.length,r=at(),n=50<=r-R,o=t&&Tt[0].scroll();if(Mt=o<Q?-1:1,rt||(Q=o),n&&(st&&!Ge&&200<r-st&&(st=0,U("scrollEnd")),Ke=R,R=r),Mt<0){for(Qe=t;0<Qe--;)Tt[Qe]&&Tt[Qe].update(0,n);Mt=1}else for(Qe=0;Qe<t;Qe++)Tt[Qe]&&Tt[Qe].update(0,n);ne.isUpdating=!1}D=0},$=["left","top",I,q,mt+vt,mt+pt,mt+ht,mt+gt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ee=$.concat([ft,dt,"boxSizing","max"+yt,"max"+Y,"position",mt,bt,bt+ht,bt+pt,bt+vt,bt+gt]),te=/([A-Z])/g,Et=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(te,"-$1").toLowerCase())}},Ot={left:0,top:0},re=/(webkit|moz|length|cssText|inset)/i,ne=(ScrollTrigger.prototype.init=function init(E,O){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),lt){var A,n,p,D,R,B,q,I,L,Y,F,e,H,N,X,W,V,U,t,j,b,G,Q,m,Z,y,$,x,r,w,_,ee,o,g,te,re,ne,C,i,T=(E=ob(ct(E)||Ua(E)||E.nodeType?{trigger:E}:E,Ct)).onUpdate,S=E.toggleClass,a=E.id,k=E.onToggle,oe=E.onRefresh,P=E.scrub,ie=E.trigger,ae=E.pin,se=E.pinSpacing,le=E.invalidateOnRefresh,M=E.anticipatePin,s=E.onScrubComplete,h=E.onSnapComplete,ce=E.once,ue=E.snap,fe=E.pinReparent,l=E.pinSpacer,de=E.containerAnimation,pe=E.fastScrollEnd,ge=E.preventOverlaps,he=E.horizontal||E.containerAnimation&&!1!==E.horizontal?Ye:Fe,ve=!P&&0!==P,be=J(E.scroller||Ne),c=He.core.getCache(be),me=La(be),ye="fixed"===("pinType"in E?E.pinType:z(be,"pinType")||me&&"fixed"),xe=[E.onEnter,E.onLeave,E.onEnterBack,E.onLeaveBack],we=ve&&E.toggleActions.split(" "),_e="markers"in E?E.markers:Ct.markers,Ce=me?0:parseFloat(mb(be)["border"+he.p2+yt])||0,Te=this,Se=E.onRefreshInit&&function(){return E.onRefreshInit(Te)},ke=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=z(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Ma(o):e["client"+o])||0}}(be,me,he),Pe=function _getOffsetsFunc(e,t){return!t||~Le.indexOf(e)?Na(e):function(){return Ot}}(be,me),Me=0,Ee=0,Oe=0,Ae=K(be,he);if(Te._startClamp=Te._endClamp=!1,Te._dir=he,M*=45,Te.scroller=be,Te.scroll=de?de.time.bind(de):Ae,D=Ae(),Te.vars=E,O=O||E.animation,"refreshPriority"in E&&(Ze=1,-9999===E.refreshPriority&&(ot=Te)),c.tweenScroll=c.tweenScroll||{top:rc(be,Fe),left:rc(be,Ye)},Te.tweenTo=A=c.tweenScroll[he.p],Te.scrubDuration=function(e){(o=Ua(e)&&e)?ee?ee.duration(e):ee=He.to(O,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:o,paused:!0,onComplete:function onComplete(){return s&&s(Te)}}):(ee&&ee.progress(1).kill(),ee=0)},O&&(O.vars.lazy=!1,O._initted&&!Te.isReverted||!1!==O.vars.immediateRender&&!1!==E.immediateRender&&O.duration()&&O.render(0,!0,!0),Te.animation=O.pause(),(O.scrollTrigger=Te).scrubDuration(P),w=0,a=a||O.vars.id),ue&&(Va(ue)&&!ue.push||(ue={snapTo:ue}),"scrollBehavior"in We.style&&He.set(me?[We,Je]:be,{scrollBehavior:"auto"}),Ie.forEach(function(e){return Ta(e)&&e.target===(me?Xe.scrollingElement||Je:be)&&(e.smooth=!1)}),p=Ta(ue.snapTo)?ue.snapTo:"labels"===ue.snapTo?function _getClosestLabel(t){return function(e){return He.utils.snap(rb(t),e)}}(O):"labelsDirectional"===ue.snapTo?function _getLabelAtDirection(r){return function(e,t){return tb(rb(r))(e,t.direction)}}(O):!1!==ue.directional?function(e,t){return tb(ue.snapTo)(e,at()-Ee<500?0:t.direction)}:He.utils.snap(ue.snapTo),g=ue.duration||{min:.1,max:2},g=Va(g)?Ue(g.min,g.max):Ue(g,g),te=He.delayedCall(ue.delay||o/2||.1,function(){var e=Ae(),t=at()-Ee<500,r=A.tween;if(!(t||Math.abs(Te.getVelocity())<10)||r||Ge||Me===e)Te.isActive&&Me!==e&&te.restart(!0);else{var n,o,i=(e-B)/N,a=O&&!ve?O.totalProgress():i,s=t?0:(a-_)/(at()-Ke)*1e3||0,l=He.utils.clamp(-i,1-i,ut(s/2)*s/.185),c=i+(!1===ue.inertia?0:l),u=ue.onStart,f=ue.onInterrupt,d=ue.onComplete;if(n=p(c,Te),Ua(n)||(n=c),o=Math.round(B+n*N),e<=q&&B<=e&&o!==e){if(r&&!r._initted&&r.data<=ut(o-e))return;!1===ue.inertia&&(l=n-i),A(o,{duration:g(ut(.185*Math.max(ut(c-a),ut(n-a))/s/.05||0)),ease:ue.ease||"power3",data:ut(o-e),onInterrupt:function onInterrupt(){return te.restart(!0)&&f&&f(Te)},onComplete:function onComplete(){Te.update(),Me=Ae(),O&&(ee?ee.resetTo("totalProgress",n,O._tTime/O._tDur):O.progress(n)),w=_=O&&!ve?O.totalProgress():Te.progress,h&&h(Te),d&&d(Te)}},e,l*N,o-e-l*N),u&&u(Te,A.tween)}}}).pause()),a&&(St[a]=Te),i=(i=(ie=Te.trigger=J(ie||!0!==ae&&ae))&&ie._gsap&&ie._gsap.stRevert)&&i(Te),ae=!0===ae?ie:J(ae),ct(S)&&(S={targets:ie,className:S}),ae&&(!1===se||se===mt||(se=!(!se&&ae.parentNode&&ae.parentNode.style&&"flex"===mb(ae.parentNode).display)&&bt),Te.pin=ae,(n=He.core.getCache(ae)).spacer?X=n.pinState:(l&&((l=J(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=jc(l))),n.spacer=U=l||Xe.createElement("div"),U.classList.add("pin-spacer"),a&&U.classList.add("pin-spacer-"+a),n.pinState=X=jc(ae)),!1!==E.force3D&&He.set(ae,{force3D:!0}),Te.spacer=U=n.spacer,r=mb(ae),m=r[se+he.os2],j=He.getProperty(ae),b=He.quickSetter(ae,he.a,xt),gc(ae,U,r),V=jc(ae)),_e){e=Va(_e)?ob(_e,_t):_t,Y=Db("scroller-start",a,be,he,e,0),F=Db("scroller-end",a,be,he,e,0,Y),t=Y["offset"+he.op.d2];var u=J(z(be,"content")||be);I=this.markerStart=Db("start",a,u,he,e,t,0,de),L=this.markerEnd=Db("end",a,u,he,e,t,0,de),de&&(C=He.quickSetter([I,L],he.a,xt)),ye||Le.length&&!0===z(be,"fixedMarkers")||(function _makePositionable(e){var t=mb(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(me?We:be),He.set([Y,F],{force3D:!0}),y=He.quickSetter(Y,he.a,xt),x=He.quickSetter(F,he.a,xt))}if(de){var f=de.vars.onUpdate,d=de.vars.onUpdateParams;de.eventCallback("onUpdate",function(){Te.update(0,0,1),f&&f.apply(de,d||[])})}if(Te.previous=function(){return Tt[Tt.indexOf(Te)-1]},Te.next=function(){return Tt[Tt.indexOf(Te)+1]},Te.revert=function(e,t){if(!t)return Te.kill(!0);var r=!1!==e||!Te.enabled,n=je;r!==Te.isReverted&&(r&&(re=Math.max(Ae(),Te.scroll.rec||0),Oe=Te.progress,ne=O&&O.progress()),I&&[I,L,Y,F].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(je=Te).update(r),!ae||fe&&Te.isActive||(r?function _swapPinOut(e,t,r){Et(r);var n=e._gsap;if(n.spacerIsNative)Et(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(ae,U,X):gc(ae,U,mb(ae),Z)),r||Te.update(r),je=n,Te.isReverted=r)},Te.refresh=function(e,t,r,n){if(!je&&Te.enabled||t)if(ae&&e&&st)wb(ScrollTrigger,"scrollEnd",Ob);else{!rt&&Se&&Se(Te),je=Te,A.tween&&!r&&(A.tween.kill(),A.tween=0),ee&&ee.pause(),le&&O&&O.revert({kill:!1}).invalidate(),Te.isReverted||Te.revert(!0,!0),Te._subPinOffset=!1;var o,i,a,s,l,c,u,f,d,p,g,h,v,b=ke(),m=Pe(),y=de?de.duration():Qa(be,he),x=N<=.01,w=0,_=n||0,C=Va(r)?r.end:E.end,T=E.endTrigger||ie,S=Va(r)?r.start:E.start||(0!==E.start&&ie?ae?"0 0":"0 100%":0),k=Te.pinnedContainer=E.pinnedContainer&&J(E.pinnedContainer,Te),P=ie&&Math.max(0,Tt.indexOf(Te))||0,M=P;for(_e&&Va(r)&&(h=He.getProperty(Y,he.p),v=He.getProperty(F,he.p));M--;)(c=Tt[M]).end||c.refresh(0,1)||(je=Te),!(u=c.pin)||u!==ie&&u!==ae&&u!==k||c.isReverted||((p=p||[]).unshift(c),c.revert(!0,!0)),c!==Tt[M]&&(P--,M--);for(Ta(S)&&(S=S(Te)),S=Ca(S,"start",Te),B=mc(S,ie,b,he,Ae(),I,Y,Te,m,Ce,ye,y,de,Te._startClamp&&"_startClamp")||(ae?-.001:0),Ta(C)&&(C=C(Te)),ct(C)&&!C.indexOf("+=")&&(~C.indexOf(" ")?C=(ct(S)?S.split(" ")[0]:"")+C:(w=Cb(C.substr(2),b),C=ct(S)?S:(de?He.utils.mapRange(0,de.duration(),de.scrollTrigger.start,de.scrollTrigger.end,B):B)+w,T=ie)),C=Ca(C,"end",Te),q=Math.max(B,mc(C||(T?"100% 0":y),T,b,he,Ae()+w,L,F,Te,m,Ce,ye,y,de,Te._endClamp&&"_endClamp"))||-.001,w=0,M=P;M--;)(u=(c=Tt[M]).pin)&&c.start-c._pinPush<=B&&!de&&0<c.end&&(o=c.end-(Te._startClamp?Math.max(0,c.start):c.start),(u===ie&&c.start-c._pinPush<B||u===k)&&isNaN(S)&&(w+=o*(1-c.progress)),u===ae&&(_+=o));if(B+=w,q+=w,Te._startClamp&&(Te._startClamp+=w),Te._endClamp&&!rt&&(Te._endClamp=q||-.001,q=Math.min(q,Qa(be,he))),N=q-B||(B-=.01)&&.001,x&&(Oe=He.utils.clamp(0,1,He.utils.normalize(B,q,re))),Te._pinPush=_,I&&w&&((o={})[he.a]="+="+w,k&&(o[he.p]="-="+Ae()),He.set([I,L],o)),!ae||et&&Te.end>=Qa(be,he)){if(ie&&Ae()&&!de)for(i=ie.parentNode;i&&i!==We;)i._pinOffset&&(B-=i._pinOffset,q-=i._pinOffset),i=i.parentNode}else o=mb(ae),s=he===Fe,a=Ae(),G=parseFloat(j(he.a))+_,!y&&1<q&&(g={style:g=(me?Xe.scrollingElement||Je:be).style,value:g["overflow"+he.a.toUpperCase()]},me&&"scroll"!==mb(We)["overflow"+he.a.toUpperCase()]&&(g.style["overflow"+he.a.toUpperCase()]="scroll")),gc(ae,U,o),V=jc(ae),i=wt(ae,!0),f=ye&&K(be,s?Ye:Fe)(),se?((Z=[se+he.os2,N+_+xt]).t=U,(M=se===bt?qb(ae,he)+N+_:0)&&(Z.push(he.d,M+xt),"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt)),Et(Z),k&&Tt.forEach(function(e){e.pin===k&&!1!==e.vars.pinSpacing&&(e._subPinOffset=!0)}),ye&&Ae(re)):(M=qb(ae,he))&&"auto"!==U.style.flexBasis&&(U.style.flexBasis=M+xt),ye&&((l={top:i.top+(s?a-B:f)+xt,left:i.left+(s?f:a-B)+xt,boxSizing:"border-box",position:"fixed"})[ft]=l.maxWidth=Math.ceil(i.width)+xt,l[dt]=l.maxHeight=Math.ceil(i.height)+xt,l[mt]=l[mt+ht]=l[mt+pt]=l[mt+vt]=l[mt+gt]="0",l[bt]=o[bt],l[bt+ht]=o[bt+ht],l[bt+pt]=o[bt+pt],l[bt+vt]=o[bt+vt],l[bt+gt]=o[bt+gt],W=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(X,l,fe),rt&&Ae(0)),O?(d=O._initted,$e(1),O.render(O.duration(),!0,!0),Q=j(he.a)-G+N+_,$=1<Math.abs(N-Q),ye&&$&&W.splice(W.length-2,2),O.render(0,!0,!0),d||O.invalidate(!0),O.parent||O.totalTime(O.totalTime()),$e(0)):Q=N,g&&(g.value?g.style["overflow"+he.a.toUpperCase()]=g.value:g.style.removeProperty("overflow-"+he.a));p&&p.forEach(function(e){return e.revert(!1,!0)}),Te.start=B,Te.end=q,D=R=rt?re:Ae(),de||rt||(D<re&&Ae(re),Te.scroll.rec=0),Te.revert(!1,!0),Ee=at(),te&&(Me=-1,te.restart(!0)),je=0,O&&ve&&(O._initted||ne)&&O.progress()!==ne&&O.progress(ne||0,!0).render(O.time(),!0,!0),(x||Oe!==Te.progress||de||le)&&(O&&!ve&&O.totalProgress(de&&B<-.001&&!Oe?He.utils.normalize(B,q,0):Oe,!0),Te.progress=x||(D-B)/N===Oe?0:Oe),ae&&se&&(U._pinOffset=Math.round(Te.progress*Q)),ee&&ee.invalidate(),isNaN(h)||(h-=He.getProperty(Y,he.p),v-=He.getProperty(F,he.p),qc(Y,he,h),qc(I,he,h-(n||0)),qc(F,he,v),qc(L,he,v-(n||0))),x&&!rt&&Te.update(),!oe||rt||H||(H=!0,oe(Te),H=!1)}},Te.getVelocity=function(){return(Ae()-R)/(at()-Ke)*1e3||0},Te.endAnimation=function(){Wa(Te.callbackAnimation),O&&(ee?ee.progress(1):O.paused()?ve||Wa(O,Te.direction<0,1):Wa(O,O.reversed()))},Te.labelToScroll=function(e){return O&&O.labels&&(B||Te.refresh()||B)+O.labels[e]/O.duration()*N||0},Te.getTrailing=function(t){var e=Tt.indexOf(Te),r=0<Te.direction?Tt.slice(0,e).reverse():Tt.slice(e+1);return(ct(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Te.direction?e.end<=B:e.start>=q})},Te.update=function(e,t,r){if(!de||r||e){var n,o,i,a,s,l,c,u=!0===rt?re:Te.scroll(),f=e?0:(u-B)/N,d=f<0?0:1<f?1:f||0,p=Te.progress;if(t&&(R=D,D=de?Ae():u,ue&&(_=w,w=O&&!ve?O.totalProgress():d)),M&&ae&&!je&&!it&&st&&(!d&&B<u+(u-R)/(at()-Ke)*M?d=1e-4:1===d&&q>u+(u-R)/(at()-Ke)*M&&(d=.9999)),d!==p&&Te.enabled){if(a=(s=(n=Te.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Te.direction=p<d?1:-1,Te.progress=d,a&&!je&&(o=d&&!p?0:1===d?1:1===p?2:3,ve&&(i=!s&&"none"!==we[o+1]&&we[o+1]||we[o],c=O&&("complete"===i||"reset"===i||i in O))),ge&&(s||c)&&(c||P||!O)&&(Ta(ge)?ge(Te):Te.getTrailing(ge).forEach(function(e){return e.endAnimation()})),ve||(!ee||je||it?O&&O.totalProgress(d,!(!je||!Ee&&!e)):(ee._dp._time-ee._start!==ee._time&&ee.render(ee._dp._time-ee._start),ee.resetTo?ee.resetTo("totalProgress",d,O._tTime/O._tDur):(ee.vars.totalProgress=d,ee.invalidate().restart()))),ae)if(e&&se&&(U.style[se+he.os2]=m),ye){if(a){if(l=!e&&p<d&&u<q+1&&u+1>=Qa(be,he),fe)if(e||!n&&!l)oc(ae,U);else{var g=wt(ae,!0),h=u-B;oc(ae,We,g.top+(he===Fe?h:0)+xt,g.left+(he===Fe?0:h)+xt)}Et(n||l?W:V),$&&d<1&&n||b(G+(1!==d||l?0:Q))}}else b(Ia(G+Q*d));!ue||A.tween||je||it||te.restart(!0),S&&(s||ce&&d&&(d<1||!tt))&&Ve(S.targets).forEach(function(e){return e.classList[n||ce?"add":"remove"](S.className)}),!T||ve||e||T(Te),a&&!je?(ve&&(c&&("complete"===i?O.pause().totalProgress(1):"reset"===i?O.restart(!0).pause():"restart"===i?O.restart(!0):O[i]()),T&&T(Te)),!s&&tt||(k&&s&&Xa(Te,k),xe[o]&&Xa(Te,xe[o]),ce&&(1===d?Te.kill(!1,1):xe[o]=0),s||xe[o=1===d?1:3]&&Xa(Te,xe[o])),pe&&!n&&Math.abs(Te.getVelocity())>(Ua(pe)?pe:2500)&&(Wa(Te.callbackAnimation),ee?ee.progress(1):Wa(O,"reverse"===i?1:!d,1))):ve&&T&&!je&&T(Te)}if(x){var v=de?u/de.duration()*(de._caScrollDist||0):u;y(v+(Y._isFlipped?1:0)),x(v)}C&&C(-u/de.duration()*(de._caScrollDist||0))}},Te.enable=function(e,t){Te.enabled||(Te.enabled=!0,wb(be,"resize",Lb),me||wb(be,"scroll",Jb),Se&&wb(ScrollTrigger,"refreshInit",Se),!1!==e&&(Te.progress=Oe=0,D=R=Me=Ae()),!1!==t&&Te.refresh())},Te.getTween=function(e){return e&&A?A.tween:ee},Te.setPositions=function(e,t,r,n){if(de){var o=de.scrollTrigger,i=de.duration(),a=o.end-o.start;e=o.start+a*e/i,t=o.start+a*t/i}Te.refresh(!1,!1,{start:Da(e,r&&!!Te._startClamp),end:Da(t,r&&!!Te._endClamp)},n),Te.update()},Te.adjustPinSpacing=function(e){if(Z&&e){var t=Z.indexOf(he.d)+1;Z[t]=parseFloat(Z[t])+e+xt,Z[1]=parseFloat(Z[1])+e+xt,Et(Z)}},Te.disable=function(e,t){if(Te.enabled&&(!1!==e&&Te.revert(!0,!0),Te.enabled=Te.isActive=!1,t||ee&&ee.pause(),re=0,n&&(n.uncache=1),Se&&xb(ScrollTrigger,"refreshInit",Se),te&&(te.pause(),A.tween&&A.tween.kill()&&(A.tween=0)),!me)){for(var r=Tt.length;r--;)if(Tt[r].scroller===be&&Tt[r]!==Te)return;xb(be,"resize",Lb),me||xb(be,"scroll",Jb)}},Te.kill=function(e,t){Te.disable(e,t),ee&&!t&&ee.kill(),a&&delete St[a];var r=Tt.indexOf(Te);0<=r&&Tt.splice(r,1),r===Qe&&0<Mt&&Qe--,r=0,Tt.forEach(function(e){return e.scroller===Te.scroller&&(r=1)}),r||rt||(Te.scroll.rec=0),O&&(O.scrollTrigger=null,e&&O.revert({kill:!1}),t||O.kill()),I&&[I,L,Y,F].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ot===Te&&(ot=0),ae&&(n&&(n.uncache=1),r=0,Tt.forEach(function(e){return e.pin===ae&&r++}),r||(n.spacer=0)),E.onKill&&E.onKill(Te)},Tt.push(Te),Te.enable(!1,!1),i&&i(Te),O&&O.add&&!N){var v=Te.update;Te.update=function(){Te.update=v,B||q||Te.refresh()},He.delayedCall(.01,Te.update),N=.01,B=q=0}else Te.refresh();ae&&function _queueRefreshAll(){if(nt!==kt){var e=nt=kt;requestAnimationFrame(function(){return e===kt&&Pt(!0)})}}()}else this.update=this.refresh=this.kill=Ha},ScrollTrigger.register=function register(e){return s||(He=e||Ka(),Ja()&&window.document&&ScrollTrigger.enable(),s=lt),s},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){lt=0,Tt.forEach(function(e){return e[r?"kill":"disable"](t)}),xb(Ne,"wheel",Jb),xb(Xe,"scroll",Jb),clearInterval(u),xb(Xe,"touchcancel",Ha),xb(We,"touchstart",Ha),vb(xb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(xb,Xe,"pointerup,touchend,mouseup",Ga),c.kill(),Ra(xb);for(var e=0;e<Ie.length;e+=3)yb(xb,Ie[e],Ie[e+1]),yb(xb,Ie[e],Ie[e+2])},ScrollTrigger.enable=function enable(){if(Ne=window,Xe=document,Je=Xe.documentElement,We=Xe.body,He&&(Ve=He.utils.toArray,Ue=He.utils.clamp,x=He.core.context||Ha,$e=He.core.suppressOverwrites||Ha,w=Ne.history.scrollRestoration||"auto",Q=Ne.pageYOffset,He.core.globals("ScrollTrigger",ScrollTrigger),We)){lt=1,(_=document.createElement("div")).style.height="100vh",_.style.position="absolute",Yb(),function _rafBugFix(){return lt&&requestAnimationFrame(_rafBugFix)}(),k.register(He),ScrollTrigger.isTouch=k.isTouch,E=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),b=1===k.isTouch,wb(Ne,"wheel",Jb),l=[Ne,Xe,Je,We],He.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=He.matchMedia();for(t in e)r.add(t,e[t]);return r},He.addEventListener("matchMediaInit",function(){return Sb()}),He.addEventListener("matchMediaRevert",function(){return Rb()}),He.addEventListener("matchMedia",function(){Pt(0,1),U("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Kb(),Kb})):console.warn("Requires GSAP 3.11.0 or later"),Kb(),wb(Xe,"scroll",Jb);var e,t,r=We.style,n=r.borderTopStyle,o=He.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=wt(We),Fe.m=Math.round(e.top+Fe.sc())||0,Ye.m=Math.round(e.left+Ye.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),u=setInterval(Ib,250),He.delayedCall(.5,function(){return it=0}),wb(Xe,"touchcancel",Ha),wb(We,"touchstart",Ha),vb(wb,Xe,"pointerdown,touchstart,mousedown",Fa),vb(wb,Xe,"pointerup,touchend,mouseup",Ga),f=He.utils.checkPrefix("transform"),ee.push(f),s=at(),c=He.delayedCall(.2,Pt).pause(),g=[Xe,"visibilitychange",function(){var e=Ne.innerWidth,t=Ne.innerHeight;Xe.hidden?(d=e,p=t):d===e&&p===t||Lb()},Xe,"DOMContentLoaded",Pt,Ne,"load",Pt,Ne,"resize",Lb],Ra(wb),Tt.forEach(function(e){return e.enable(0,1)}),t=0;t<Ie.length;t+=3)yb(xb,Ie[t],Ie[t+1]),yb(xb,Ie[t],Ie[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(tt=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(u)||(u=t)&&setInterval(Ib,t),"ignoreMobileResize"in e&&(b=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ra(xb)||Ra(wb,e.autoRefreshEvents||"none"),h=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=J(e),n=Ie.indexOf(r),o=La(r);~n&&Ie.splice(n,o?6:2),t&&(o?Le.unshift(Ne,t,We,t,Je,t):Le.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Tt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(ct(e)?J(e):e).getBoundingClientRect(),o=n[r?ft:dt]*t||0;return r?0<n.right-o&&n.left+o<Ne.innerWidth:0<n.bottom-o&&n.top+o<Ne.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){ct(e)&&(e=J(e));var n=e.getBoundingClientRect(),o=n[r?ft:dt],i=null==t?o/2:t in H?H[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/Ne.innerWidth:(n.top+i)/Ne.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Tt.slice(0).forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=W.killAll||[];W={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){s||ScrollTrigger.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),x(this),this.init(e,t)}ne.version="3.12.5",ne.saveStyles=function(e){return e?Ve(e).forEach(function(e){if(e&&e.style){var t=j.indexOf(e);0<=t&&j.splice(t,5),j.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),x())}}):j},ne.revert=function(e,t){return Sb(!e,t)},ne.create=function(e,t){return new ne(e,t)},ne.refresh=function(e){return e?Lb():(s||ne.register())&&Pt(!0)},ne.update=function(e){return++Ie.cache&&Z(!0===e?2:0)},ne.clearScrollMemory=Tb,ne.maxScroll=function(e,t){return Qa(e,t?Ye:Fe)},ne.getScrollFunc=function(e,t){return K(J(e),t?Ye:Fe)},ne.getById=function(e){return St[e]},ne.getAll=function(){return Tt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},ne.isScrolling=function(){return!!st},ne.snapDirectional=tb,ne.addEventListener=function(e,t){var r=W[e]||(W[e]=[]);~r.indexOf(t)||r.push(t)},ne.removeEventListener=function(e,t){var r=W[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},ne.batch=function(e,t){function Cp(e,t){var r=[],n=[],o=He.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ta(t[r])&&"onRefreshInit"!==r?Cp(0,t[r]):t[r];return Ta(a)&&(a=a(),wb(ne,"refresh",function(){return a=t.batchMax()})),Ve(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(ne.create(t))}),n};function tc(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function uc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===Je&&uc(We,t)}function wc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||He.core.getCache(i),s=at();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i!==We&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!ie[(t=mb(i)).overflowY]&&!ie[t.overflowX]);)i=i.parentNode;a._isScroll=i&&i!==n&&!La(i)&&(ie[(t=mb(i)).overflowY]||ie[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function xc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&wc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&wb(Xe,k.eventTypes[0],se,!1,!0)},onDisable:function onDisable(){return xb(Xe,k.eventTypes[0],se,!0)}})}function Bc(e){function zq(){return o=!1}function Cq(){i=Qa(p,Fe),S=Ue(E?1:0,i),f&&(T=Ue(0,Qa(p,Ye))),l=kt}function Dq(){v._gsap.y=Ia(parseFloat(v._gsap.y)+b.offset)+"px",v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(v._gsap.y)+", 0, 1)",b.offset=b.cacheID=0}function Jq(){Cq(),a.isActive()&&a.vars.scrollY>i&&(b()>i?a.progress(1)&&b(i):a.resetTo("scrollY",i))}Va(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,d=e.onRelease,p=J(e.target)||Je,g=He.core.globals().ScrollSmoother,h=g&&g.get(),v=E&&(e.content&&J(e.content)||h&&!1!==e.content&&!h.smooth()&&h.content()),b=K(p,Fe),m=K(p,Ye),y=1,x=(k.isTouch&&Ne.visualViewport?Ne.visualViewport.scale*Ne.visualViewport.width:Ne.outerWidth)/Ne.innerWidth,w=0,_=Ta(t)?function(){return t(n)}:function(){return t||2.8},C=xc(p,e.type,!0,r),T=Ha,S=Ha;return v&&He.set(v,{y:"+=0"}),e.ignoreCheck=function(e){return E&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(zq);var e=Ia(n.deltaY/2),t=S(b.v-e);if(v&&t!==b.v+b.offset){b.offset=t-b.v;var r=Ia((parseFloat(v&&v._gsap.y)||0)-b.offset);v.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",v._gsap.y=r+"px",b.cacheID=Ie.cache,Z()}return!0}b.offset&&Dq(),o=!0}()||1.05<y&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){o=!1;var e=y;y=Ia((Ne.visualViewport&&Ne.visualViewport.scale||1)/x),a.pause(),e!==y&&uc(p,1.01<y||!f&&"x"),c=m(),u=b(),Cq(),l=kt},e.onRelease=e.onGestureStart=function(e,t){if(b.offset&&Dq(),t){Ie.cache++;var r,n,o=_();f&&(n=(r=m())+.05*o*-e.velocityX/.227,o*=tc(m,r,n,Qa(p,Ye)),a.vars.scrollX=T(n)),n=(r=b())+.05*o*-e.velocityY/.227,o*=tc(b,r,n,Qa(p,Fe)),a.vars.scrollY=S(n),a.invalidate().duration(o).play(.01),(E&&a.vars.scrollY>=i||i-1<=r)&&He.to({},{onUpdate:Jq,duration:o})}else s.restart(!0);d&&d(e)},e.onWheel=function(){a._ts&&a.pause(),1e3<at()-w&&(l=0,w=at())},e.onChange=function(e,t,r,n,o){if(kt!==l&&Cq(),t&&f&&m(T(n[2]===t?c+(e.startX-e.x):m()+t-n[1])),r){b.offset&&Dq();var i=o[2]===r,a=i?u+e.startY-e.y:b()+r-o[1],s=S(a);i&&a!==s&&(u+=s-a),b(s)}(r||t)&&Z()},e.onEnable=function(){uc(p,!f&&"x"),ne.addEventListener("refresh",Jq),wb(Ne,"resize",Jq),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=m.smooth=!1),C.enable()},e.onDisable=function(){uc(p,!0),xb(Ne,"resize",Jq),ne.removeEventListener("refresh",Jq),C.kill()},e.lockAxis=!1!==e.lockAxis,((n=new k(e)).iOS=E)&&!b()&&b(1),E&&He.ticker.add(Ha),s=n._dc,a=He.to(n,{ease:"power4",paused:!0,inherit:!1,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:pc(b,b(),function(){return a.pause()})},onUpdate:Z,onComplete:s.vars.onComplete}),n}var oe,ie={auto:1,scroll:1},ae=/(input|label|select|textarea)/i,se=function _captureInputs(e){var t=ae.test(e.target.tagName);(t||oe)&&(e._gsapAllow=!0,oe=t)};ne.sort=function(e){return Tt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},ne.observe=function(e){return new k(e)},ne.normalizeScroll=function(e){if(void 0===e)return v;if(!0===e&&v)return v.enable();if(!1===e)return v&&v.kill(),void(v=e);var t=e instanceof k?e:Bc(e);return v&&v.target===t.target&&v.kill(),La(t.target)&&(v=t),t},ne.core={_getVelocityProp:L,_inputObserver:xc,_scrollers:Ie,_proxies:Le,bridge:{ss:function ss(){st||U("scrollStart"),st=at()},ref:function ref(){return je}}},Ka()&&He.registerPlugin(ne),e.ScrollTrigger=ne,e.default=ne;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/**
 * SplitType
 * https://github.com/lukePeavey/SplitType
 * @version 0.3.4
 * @author Luke Peavey <lwpeavey@gmail.com>
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).SplitType=e()}(this,(function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((function(n,r){var o=Object.getOwnPropertyDescriptor(Object(t),r),i=Object.getOwnPropertyDescriptor(Object(e),r);return Object.defineProperty(n,r,i||o)}),{})}function u(t){return"string"==typeof t}function f(t){return Array.isArray(t)}function p(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l(e);return void 0!==n.types?t=n.types:void 0!==n.split&&(t=n.split),void 0!==t&&(n.types=(u(t)||f(t)?String(t):"").split(",").map((function(t){return String(t).trim()})).filter((function(t){return/((line)|(word)|(char))/i.test(t)}))),(n.absolute||n.position)&&(n.absolute=n.absolute||/absolute/.test(e.position)),n}function d(t){var e=u(t)||f(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function h(t){return null!==t&&"object"==typeof t}function y(t){return h(t)&&/^(1|3|11)$/.test(t.nodeType)}function g(t){return f(t)?t:null==t?[]:function(t){return h(t)&&function(t){return"number"==typeof t&&t>-1&&t%1==0}(t.length)}(t)?Array.prototype.slice.call(t):[t]}function v(t){var e=t;return u(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),g(e).reduce((function(t,e){return[].concat(a(t),a(g(e).filter(y)))}),[])}!function(){function t(){for(var t=arguments.length,e=0;e<t;e++){var n=e<0||arguments.length<=e?void 0:arguments[e];1===n.nodeType||11===n.nodeType?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function n(){for(var t=this.parentNode,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=n.length;if(t)for(o||t.removeChild(this);o--;){var i=n[o];"object"!=typeof i?i=this.ownerDocument.createTextNode(i):i.parentNode&&i.parentNode.removeChild(i),o?t.insertBefore(this.previousSibling,i):t.replaceChild(i,this)}}"undefined"!=typeof Element&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))}();var m=Object.entries,b="_splittype",w={},O=0;function j(t,e,n){if(!h(t))return console.warn("[data.set] owner is not an object"),null;var r=t[b]||(t[b]=++O),i=w[r]||(w[r]={});return void 0===n?e&&Object.getPrototypeOf(e)===Object.prototype&&(w[r]=o(o({},i),e)):void 0!==e&&(i[e]=n),n}function C(t,e){var n=h(t)?t[b]:null,r=n&&w[n]||{};return void 0===e?r:r[e]}function E(t){var e=t&&t[b];e&&(delete t[e],delete w[e])}var S="\\ud800-\\udfff",x="\\u0300-\\u036f\\ufe20-\\ufe23",T="\\u20d0-\\u20f0",W="\\ufe0e\\ufe0f",k="[".concat(S,"]"),A="[".concat(x).concat(T,"]"),P="\\ud83c[\\udffb-\\udfff]",D="(?:".concat(A,"|").concat(P,")"),N="[^".concat(S,"]"),R="(?:\\ud83c[\\udde6-\\uddff]){2}",$="[\\ud800-\\udbff][\\udc00-\\udfff]",B="\\u200d",F="".concat(D,"?"),I="[".concat(W,"]?"),L=I+F+("(?:\\u200d(?:"+[N,R,$].join("|")+")"+I+F+")*"),H="(?:".concat(["".concat(N).concat(A,"?"),A,R,$,k].join("|"),"\n)"),M=RegExp("".concat(P,"(?=").concat(P,")|").concat(H).concat(L),"g"),z=RegExp("[".concat([B,S,x,T,W].join(""),"]"));function V(t){return z.test(t)}function q(t){return V(t)?function(t){return t.match(M)||[]}(t):function(t){return t.split("")}(t)}function U(t){return null==t?"":String(t)}function X(t,e){var n=document.createElement(t);return e?(Object.keys(e).forEach((function(t){var r=e[t],o=u(r)?r.trim():r;null!==o&&""!==o&&("children"===t?n.append.apply(n,a(g(o))):n.setAttribute(t,o))})),n):n}var Y={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function _(t,e){var n,r=d((e=l(Y,e)).types),o=e.tagName,i=t.nodeValue,c=document.createDocumentFragment(),s=[];return/^\s/.test(i)&&c.append(" "),n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return(t?String(t):"").trim().replace(/\s+/g," ").split(e)}(i).reduce((function(t,n,i,l){var f,p;return r.chars&&(p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=U(t))&&u(t)&&!e&&V(t)?q(t):t.split(e)}(n).map((function(t){var n=X(o,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:t});return j(n,"isChar",!0),s=[].concat(a(s),[n]),n}))),r.words||r.lines?(j(f=X(o,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?p:n}),{isWord:!0,isWordStart:!0,isWordEnd:!0}),c.appendChild(f)):p.forEach((function(t){c.appendChild(t)})),i<l.length-1&&c.append(" "),r.words?t.concat(f):t}),[]),/\s$/.test(i)&&c.append(" "),t.replaceWith(c),{words:n,chars:s}}function G(t,e){var n=t.nodeType,r={words:[],chars:[]};if(!/(1|3|11)/.test(n))return r;if(3===n&&/\S/.test(t.nodeValue))return _(t,e);var o=g(t.childNodes);if(o.length&&(j(t,"isSplit",!0),!C(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var i=t.nextSibling,c=t.previousSibling,s=t.textContent||"",l=i?i.textContent:" ",u=c?c.textContent:" ";j(t,{isWordEnd:/\s$/.test(s)||/^\s/.test(l),isWordStart:/^\s/.test(s)||/\s$/.test(u)})}return o.reduce((function(t,n){var r=G(n,e),o=r.words,i=r.chars;return{words:[].concat(a(t.words),a(o)),chars:[].concat(a(t.chars),a(i))}}),r)}function J(t){C(t).isWord?(E(t),t.replaceWith.apply(t,a(t.childNodes))):g(t.children).forEach((function(t){return J(t)}))}function K(t,e,n){var r,o,a,c=d(e.types),s=e.tagName,l=t.getElementsByTagName("*"),u=[],f=[],p=null,h=[],y=t.parentElement,v=t.nextElementSibling,m=document.createDocumentFragment(),b=window.getComputedStyle(t),w=b.textAlign,O=.2*parseFloat(b.fontSize);return e.absolute&&(a={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},o=t.offsetWidth,r=t.offsetHeight,j(t,{cssWidth:t.style.width,cssHeight:t.style.height})),g(l).forEach((function(r){var o=r.parentElement===t,a=function(t,e,n,r){if(!n.absolute)return{top:e?t.offsetTop:null};var o=t.offsetParent,a=i(r,2),c=a[0],s=a[1],l=0,u=0;if(o&&o!==document.body){var f=o.getBoundingClientRect();l=f.x+c,u=f.y+s}var p=t.getBoundingClientRect(),d=p.width,h=p.height,y=p.x;return{width:d,height:h,top:p.y+s-u,left:y+c-l}}(r,o,e,n),s=a.width,l=a.height,d=a.top,h=a.left;/^br$/i.test(r.nodeName)||(c.lines&&o&&((null===p||d-p>=O)&&(p=d,u.push(f=[])),f.push(r)),e.absolute&&j(r,{top:d,left:h,width:s,height:l}))})),y&&y.removeChild(t),c.lines&&(h=u.map((function(t){var n=X(s,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(w,"; width: 100%;")});j(n,"isLine",!0);var r={height:0,top:1e4};return m.appendChild(n),t.forEach((function(t,e,o){var i=C(t),a=i.isWordEnd,c=i.top,s=i.height,l=o[e+1];r.height=Math.max(r.height,s),r.top=Math.min(r.top,c),n.appendChild(t),a&&C(l).isWordStart&&n.append(" ")})),e.absolute&&j(n,{height:r.height,top:r.top}),n})),c.words||J(m),t.replaceChildren(m)),e.absolute&&(t.style.width="".concat(t.style.width||o,"px"),t.style.height="".concat(r,"px"),g(l).forEach((function(t){var e=C(t),n=e.isLine,r=e.top,o=e.left,i=e.width,c=e.height,s=C(t.parentElement),l=!n&&s.isLine;t.style.top="".concat(l?r-s.top:r,"px"),t.style.left="".concat(n?a.left:o-(l?a.left:0),"px"),t.style.height="".concat(c,"px"),t.style.width="".concat(n?a.width:i,"px"),t.style.position="absolute"}))),y&&(v?y.insertBefore(t,v):y.appendChild(t)),h}var Q=l(Y,{});return function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isSplit=!1,this.settings=l(Q,p(n)),this.elements=v(e),this.split()}return e(t,null,[{key:"clearData",value:function(){Object.keys(w).forEach((function(t){delete w[t]}))}},{key:"setDefaults",value:function(t){return Q=l(Q,p(t)),Y}},{key:"revert",value:function(t){v(t).forEach((function(t){var e=C(t),n=e.isSplit,r=e.html,o=e.cssWidth,i=e.cssHeight;n&&(t.innerHTML=r,t.style.width=o||"",t.style.height=i||"",E(t))}))}},{key:"create",value:function(e,n){return new t(e,n)}},{key:"data",get:function(){return w}},{key:"defaults",get:function(){return Q},set:function(t){Q=l(Q,p(t))}}]),e(t,[{key:"split",value:function(t){var e=this;this.revert(),this.elements.forEach((function(t){j(t,"html",t.innerHTML)})),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];void 0!==t&&(this.settings=l(this.settings,p(t)));var r=d(this.settings.types);r.none||(this.elements.forEach((function(t){j(t,"isRoot",!0);var n=G(t,e.settings),r=n.words,o=n.chars;e.words=[].concat(a(e.words),a(r)),e.chars=[].concat(a(e.chars),a(o))})),this.elements.forEach((function(t){if(r.lines||e.settings.absolute){var o=K(t,e.settings,n);e.lines=[].concat(a(e.lines),a(o))}})),this.isSplit=!0,window.scrollTo(n[0],n[1]),m(w).forEach((function(t){var e=i(t,2),n=e[0],r=e[1],o=r.isRoot,a=r.isSplit;o&&a||(w[n]=null,delete w[n])})))}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}()}));

// canvas-confetti v1.9.3 built on 2024-04-30T22:19:17.794Z
!(function (window, module) {
// source content
/* globals Map */

(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(
    global.Worker &&
    global.Blob &&
    global.Promise &&
    global.OffscreenCanvas &&
    global.OffscreenCanvasRenderingContext2D &&
    global.HTMLCanvasElement &&
    global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
    global.URL &&
    global.URL.createObjectURL);

  var canUsePaths = typeof Path2D === 'function' && typeof DOMMatrix === 'function';
  var canDrawBitmap = (function () {
    // this mostly supports ssr
    if (!global.OffscreenCanvas) {
      return false;
    }

    var canvas = new OffscreenCanvas(1, 1);
    var ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, 1, 1);
    var bitmap = canvas.transferToImageBitmap();

    try {
      ctx.createPattern(bitmap, 'no-repeat');
    } catch (e) {
      return false;
    }

    return true;
  })();

  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;

    if (typeof Prom === 'function') {
      return new Prom(func);
    }

    func(noop, noop);

    return null;
  }

  var bitmapMapper = (function (skipTransform, map) {
    // see https://github.com/catdad/canvas-confetti/issues/209
    // creating canvases is actually pretty expensive, so we should create a
    // 1:1 map for bitmap:canvas, so that we can animate the confetti in
    // a performant manner, but also not store them forever so that we don't
    // have a memory leak
    return {
      transform: function(bitmap) {
        if (skipTransform) {
          return bitmap;
        }

        if (map.has(bitmap)) {
          return map.get(bitmap);
        }

        var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0);

        map.set(bitmap, canvas);

        return canvas;
      },
      clear: function () {
        map.clear();
      }
    };
  })(canDrawBitmap, new Map());

  var raf = (function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;

    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();

        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];

            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });

        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }

    return { frame: frame, cancel: cancel };
  }());

  var getWorker = (function () {
    var worker;
    var prom;
    var resolves = {};

    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({ options: options || {}, callback: callback });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({ canvas: offscreen }, [offscreen]);
      };

      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }

        var id = Math.random().toString(36).slice(2);

        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }

            delete resolves[id];
            worker.removeEventListener('message', workerDone);

            prom = null;

            bitmapMapper.clear();

            done();
            resolve();
          }

          worker.addEventListener('message', workerDone);
          execute(options, id);

          resolves[id] = workerDone.bind(null, { data: { callback: id }});
        });

        return prom;
      };

      worker.reset = function resetWorker() {
        worker.postMessage({ reset: true });

        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }

    return function () {
      if (worker) {
        return worker;
      }

      if (!isWorker && canUseWorker) {
        var code = [
          'var CONFETTI, SIZE = {}, module = {};',
          '(' + main.toString() + ')(this, module, true, SIZE);',
          'onmessage = function(msg) {',
          '  if (msg.data.options) {',
          '    CONFETTI(msg.data.options).then(function () {',
          '      if (msg.data.callback) {',
          '        postMessage({ callback: msg.data.callback });',
          '      }',
          '    });',
          '  } else if (msg.data.reset) {',
          '    CONFETTI && CONFETTI.reset();',
          '  } else if (msg.data.resize) {',
          '    SIZE.width = msg.data.resize.width;',
          '    SIZE.height = msg.data.resize.height;',
          '  } else if (msg.data.canvas) {',
          '    SIZE.width = msg.data.canvas.width;',
          '    SIZE.height = msg.data.canvas.height;',
          '    CONFETTI = module.exports.create(msg.data.canvas);',
          '  }',
          '}',
        ].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;

          return null;
        }

        decorate(worker);
      }

      return worker;
    };
  })();

  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: [
      '#26ccff',
      '#a25afd',
      '#ff5e7e',
      '#88ff5a',
      '#fcff42',
      '#ffa62d',
      '#ff36ff'
    ],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };

  function convert(val, transform) {
    return transform ? transform(val) : val;
  }

  function isOk(val) {
    return !(val === null || val === undefined);
  }

  function prop(options, name, transform) {
    return convert(
      options && isOk(options[name]) ? options[name] : defaults[name],
      transform
    );
  }

  function onlyPositiveInt(number){
    return number < 0 ? 0 : Math.floor(number);
  }

  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function toDecimal(str) {
    return parseInt(str, 16);
  }

  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }

  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');

    if (val.length < 6) {
        val = val[0]+val[0]+val[1]+val[1]+val[2]+val[2];
    }

    return {
      r: toDecimal(val.substring(0,2)),
      g: toDecimal(val.substring(2,4)),
      b: toDecimal(val.substring(4,6))
    };
  }

  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);

    return origin;
  }

  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }

  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;

    return canvas;
  }

  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }

  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);

    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: (opts.startVelocity * 0.5) + (Math.random() * opts.startVelocity),
      angle2D: -radAngle + ((0.5 * radSpread) - (Math.random() * radSpread)),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar,
      flat: opts.flat
    };
  }

  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.velocity *= fetti.decay;

    if (fetti.flat) {
      fetti.wobble = 0;
      fetti.wobbleX = fetti.x + (10 * fetti.scalar);
      fetti.wobbleY = fetti.y + (10 * fetti.scalar);

      fetti.tiltSin = 0;
      fetti.tiltCos = 0;
      fetti.random = 1;
    } else {
      fetti.wobble += fetti.wobbleSpeed;
      fetti.wobbleX = fetti.x + ((10 * fetti.scalar) * Math.cos(fetti.wobble));
      fetti.wobbleY = fetti.y + ((10 * fetti.scalar) * Math.sin(fetti.wobble));

      fetti.tiltAngle += 0.1;
      fetti.tiltSin = Math.sin(fetti.tiltAngle);
      fetti.tiltCos = Math.cos(fetti.tiltAngle);
      fetti.random = Math.random() + 2;
    }

    var progress = (fetti.tick++) / fetti.totalTicks;

    var x1 = fetti.x + (fetti.random * fetti.tiltCos);
    var y1 = fetti.y + (fetti.random * fetti.tiltSin);
    var x2 = fetti.wobbleX + (fetti.random * fetti.tiltCos);
    var y2 = fetti.wobbleY + (fetti.random * fetti.tiltSin);

    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';

    context.beginPath();

    if (canUsePaths && fetti.shape.type === 'path' && typeof fetti.shape.path === 'string' && Array.isArray(fetti.shape.matrix)) {
      context.fill(transformPath2D(
        fetti.shape.path,
        fetti.shape.matrix,
        fetti.x,
        fetti.y,
        Math.abs(x2 - x1) * 0.1,
        Math.abs(y2 - y1) * 0.1,
        Math.PI / 10 * fetti.wobble
      ));
    } else if (fetti.shape.type === 'bitmap') {
      var rotation = Math.PI / 10 * fetti.wobble;
      var scaleX = Math.abs(x2 - x1) * 0.1;
      var scaleY = Math.abs(y2 - y1) * 0.1;
      var width = fetti.shape.bitmap.width * fetti.scalar;
      var height = fetti.shape.bitmap.height * fetti.scalar;

      var matrix = new DOMMatrix([
        Math.cos(rotation) * scaleX,
        Math.sin(rotation) * scaleX,
        -Math.sin(rotation) * scaleY,
        Math.cos(rotation) * scaleY,
        fetti.x,
        fetti.y
      ]);

      // apply the transform matrix from the confetti shape
      matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));

      var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), 'no-repeat');
      pattern.setTransform(matrix);

      context.globalAlpha = (1 - progress);
      context.fillStyle = pattern;
      context.fillRect(
        fetti.x - (width / 2),
        fetti.y - (height / 2),
        width,
        height
      );
      context.globalAlpha = 1;
    } else if (fetti.shape === 'circle') {
      context.ellipse ?
        context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) :
        ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else if (fetti.shape === 'star') {
      var rot = Math.PI / 2 * 3;
      var innerRadius = 4 * fetti.scalar;
      var outerRadius = 8 * fetti.scalar;
      var x = fetti.x;
      var y = fetti.y;
      var spikes = 5;
      var step = Math.PI / spikes;

      while (spikes--) {
        x = fetti.x + Math.cos(rot) * outerRadius;
        y = fetti.y + Math.sin(rot) * outerRadius;
        context.lineTo(x, y);
        rot += step;

        x = fetti.x + Math.cos(rot) * innerRadius;
        y = fetti.y + Math.sin(rot) * innerRadius;
        context.lineTo(x, y);
        rot += step;
      }
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }

    context.closePath();
    context.fill();

    return fetti.tick < fetti.totalTicks;
  }

  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;

    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;

        context.clearRect(0, 0, size.width, size.height);
        bitmapMapper.clear();

        done();
        resolve();
      }

      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }

        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }

        context.clearRect(0, 0, size.width, size.height);

        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });

        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }

      animationFrame = raf.frame(update);
      destroy = onDone;
    });

    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);

        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }

        if (destroy) {
          destroy();
        }
      }
    };
  }

  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var hasResizeEventRegistered = false;
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = (canvas && worker) ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;

    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var flat = !!prop(options, 'flat');
      var origin = getOrigin(options);

      var temp = particleCount;
      var fettis = [];

      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;

      while (temp--) {
        fettis.push(
          randomPhysics({
            x: startX,
            y: startY,
            angle: angle,
            spread: spread,
            startVelocity: startVelocity,
            color: colors[temp % colors.length],
            shape: shapes[randomInt(0, shapes.length)],
            ticks: ticks,
            decay: decay,
            gravity: gravity,
            drift: drift,
            scalar: scalar,
            flat: flat
          })
        );
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }

      animationObj = animate(canvas, fettis, resizer, size , done);

      return animationObj.promise;
    }

    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);

      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }

      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }

      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }

      var size = {
        width: canvas.width,
        height: canvas.height
      };

      if (worker && !initialized) {
        worker.init(canvas);
      }

      initialized = true;

      if (worker) {
        canvas.__confetti_initialized = true;
      }

      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };

          resizer(obj);

          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }

      function done() {
        animationObj = null;

        if (allowResize) {
          hasResizeEventRegistered = false;
          global.removeEventListener('resize', onResize);
        }

        if (isLibCanvas && canvas) {
          if (document.body.contains(canvas)) {
            document.body.removeChild(canvas); 
          }
          canvas = null;
          initialized = false;
        }
      }

      if (allowResize && !hasResizeEventRegistered) {
        hasResizeEventRegistered = true;
        global.addEventListener('resize', onResize, false);
      }

      if (worker) {
        return worker.fire(options, size, done);
      }

      return fireLocal(options, size, done);
    }

    fire.reset = function () {
      if (worker) {
        worker.reset();
      }

      if (animationObj) {
        animationObj.reset();
      }
    };

    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, { useWorker: true, resize: true });
    }
    return defaultFire;
  }

  function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
    var path2d = new Path2D(pathString);

    var t1 = new Path2D();
    t1.addPath(path2d, new DOMMatrix(pathMatrix));

    var t2 = new Path2D();
    // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
    t2.addPath(t1, new DOMMatrix([
      Math.cos(rotation) * scaleX,
      Math.sin(rotation) * scaleX,
      -Math.sin(rotation) * scaleY,
      Math.cos(rotation) * scaleY,
      x,
      y
    ]));

    return t2;
  }

  function shapeFromPath(pathData) {
    if (!canUsePaths) {
      throw new Error('path confetti are not supported in this browser');
    }

    var path, matrix;

    if (typeof pathData === 'string') {
      path = pathData;
    } else {
      path = pathData.path;
      matrix = pathData.matrix;
    }

    var path2d = new Path2D(path);
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    if (!matrix) {
      // attempt to figure out the width of the path, up to 1000x1000
      var maxSize = 1000;
      var minX = maxSize;
      var minY = maxSize;
      var maxX = 0;
      var maxY = 0;
      var width, height;

      // do some line skipping... this is faster than checking
      // every pixel and will be mostly still correct
      for (var x = 0; x < maxSize; x += 2) {
        for (var y = 0; y < maxSize; y += 2) {
          if (tempCtx.isPointInPath(path2d, x, y, 'nonzero')) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }

      width = maxX - minX;
      height = maxY - minY;

      var maxDesiredSize = 10;
      var scale = Math.min(maxDesiredSize/width, maxDesiredSize/height);

      matrix = [
        scale, 0, 0, scale,
        -Math.round((width/2) + minX) * scale,
        -Math.round((height/2) + minY) * scale
      ];
    }

    return {
      type: 'path',
      path: path,
      matrix: matrix
    };
  }

  function shapeFromText(textData) {
    var text,
        scalar = 1,
        color = '#000000',
        // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';

    if (typeof textData === 'string') {
      text = textData;
    } else {
      text = textData.text;
      scalar = 'scalar' in textData ? textData.scalar : scalar;
      fontFamily = 'fontFamily' in textData ? textData.fontFamily : fontFamily;
      color = 'color' in textData ? textData.color : color;
    }

    // all other confetti are 10 pixels,
    // so this pixel size is the de-facto 100% scale confetti
    var fontSize = 10 * scalar;
    var font = '' + fontSize + 'px ' + fontFamily;

    var canvas = new OffscreenCanvas(fontSize, fontSize);
    var ctx = canvas.getContext('2d');

    ctx.font = font;
    var size = ctx.measureText(text);
    var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
    var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);

    var padding = 2;
    var x = size.actualBoundingBoxLeft + padding;
    var y = size.actualBoundingBoxAscent + padding;
    width += padding + padding;
    height += padding + padding;

    canvas = new OffscreenCanvas(width, height);
    ctx = canvas.getContext('2d');
    ctx.font = font;
    ctx.fillStyle = color;

    ctx.fillText(text, x, y);

    var scale = 1 / scalar;

    return {
      type: 'bitmap',
      // TODO these probably need to be transfered for workers
      bitmap: canvas.transferToImageBitmap(),
      matrix: [scale, 0, 0, scale, -width * scale / 2, -height * scale / 2]
    };
  }

  module.exports = function() {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function() {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
  module.exports.shapeFromPath = shapeFromPath;
  module.exports.shapeFromText = shapeFromText;
}((function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof self !== 'undefined') {
    return self;
  }

  return this || {};
})(), module, false));

// end source content

  window.confetti = module.exports;
}(window, {}));

/**
 * Atropos 2.0.2
 * Touch-friendly 3D parallax hover effects
 * https://atroposjs.com
 *
 * Copyright 2021-2023 
 *
 * Released under the MIT License
 *
 * Released on: July 4, 2023
 */

var Atropos=function(){"use strict";function t(){return t=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},t.apply(this,arguments)}var e=function(t,e){return t.querySelector(e)},o=function(t){void 0===t&&(t={});var e={};return Object.keys(t).forEach((function(o){void 0!==t[o]&&(e[o]=t[o])})),e},a={alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0};return function(n){void 0===n&&(n={});var r,i,s,c,p,u,l,d,f,v,h,m,y=n,g=y.el,M=y.eventsEl,x=n.isComponent,O={__atropos__:!0,params:t({},a,{onEnter:null,onLeave:null,onRotate:null},o(n||{})),destroyed:!1,isActive:!1},w=O.params,b=[];!function t(){m=requestAnimationFrame((function(){b.forEach((function(t){if("function"==typeof t)t();else{var e=t.element,o=t.prop,a=t.value;e.style[o]=a}})),b.splice(0,b.length),t()}))}();var X,Y=function(t,e){b.push({element:t,prop:"transitionDuration",value:e})},_=function(t,e){b.push({element:t,prop:"transitionTimingFunction",value:e})},L=function(t,e){b.push({element:t,prop:"transform",value:e})},T=function(t,e){b.push({element:t,prop:"opacity",value:e})},A=function(t,e,o,a){return t.addEventListener(e,o,a)},E=function(t,e,o,a){return t.removeEventListener(e,o,a)},R=function(t){var e=t.rotateXPercentage,o=void 0===e?0:e,a=t.rotateYPercentage,n=void 0===a?0:a,i=t.duration,s=t.opacityOnly,c=t.easeOut;(function(t,e){return t.querySelectorAll(e)})(r,"[data-atropos-offset], [data-atropos-opacity]").forEach((function(t){Y(t,i),_(t,c?"ease-out":"");var e=function(t){if(t.dataset.atroposOpacity&&"string"==typeof t.dataset.atroposOpacity)return t.dataset.atroposOpacity.split(";").map((function(t){return parseFloat(t)}))}(t);if(0===o&&0===n)s||L(t,"translate3d(0, 0, 0)"),e&&T(t,e[0]);else{var a=parseFloat(t.dataset.atroposOffset)/100;if(Number.isNaN(a)||s||L(t,"translate3d("+-n*-a+"%, "+o*-a+"%, 0)"),e){var r=e[0],p=e[1],u=Math.max(Math.abs(o),Math.abs(n));T(t,r+(p-r)*u/100)}}}))},I=function(t,e){var o=g!==M;if(p||(p=g.getBoundingClientRect()),o&&!u&&(u=M.getBoundingClientRect()),void 0===t&&void 0===e){var a=o?u:p;t=a.left+a.width/2,e=a.top+a.height/2}var n,r=0,s=0,c=p,l=c.top,f=c.left,v=c.width,h=c.height;if(o){var m=u,y=m.top,x=m.left,O=m.width,X=m.height,A=v/2+(f-x),E=h/2+(l-y),I=t-x,P=e-y;s=w.rotateYMax*(I-A)/(O-v/2)*-1,r=w.rotateXMax*(P-E)/(X-h/2),n=t-f+"px "+(e-l)+"px"}else{var j=v/2,C=h/2,D=t-f,F=e-l;s=w.rotateYMax*(D-j)/(v/2)*-1,r=w.rotateXMax*(F-C)/(h/2)}r=Math.min(Math.max(-r,-w.rotateXMax),w.rotateXMax),w.rotateXInvert&&(r=-r),s=Math.min(Math.max(-s,-w.rotateYMax),w.rotateYMax),w.rotateYInvert&&(s=-s);var N,S,k=r/w.rotateXMax*100,q=s/w.rotateYMax*100,B=(o?q/100*w.stretchX:0)*(w.rotateYInvert?-1:1),Z=(o?k/100*w.stretchY:0)*(w.rotateXInvert?-1:1),z=o?Math.max(Math.abs(k),Math.abs(q))/100*w.stretchZ:0;L(i,"translate3d("+B+"%, "+-Z+"%, "+-z+"px) rotateX("+r+"deg) rotateY("+s+"deg)"),n&&w.commonOrigin&&(N=i,S=n,b.push({element:N,prop:"transformOrigin",value:S})),d&&(Y(d,w.duration+"ms"),_(d,"ease-out"),L(d,"translate3d("+.25*-q+"%, "+.25*k+"%, 0)"),T(d,Math.max(Math.abs(k),Math.abs(q))/100)),R({rotateXPercentage:k,rotateYPercentage:q,duration:w.duration+"ms",easeOut:!0}),"function"==typeof w.onRotate&&w.onRotate(r,s)},P=function(){b.push((function(){return g.classList.add("atropos-active")})),Y(i,w.duration+"ms"),_(i,"ease-out"),L(s,"translate3d(0,0, "+w.activeOffset+"px)"),Y(s,w.duration+"ms"),_(s,"ease-out"),l&&(Y(l,w.duration+"ms"),_(l,"ease-out")),O.isActive=!0},j=function(t){if(f=void 0,!("pointerdown"===t.type&&"mouse"===t.pointerType||"pointerenter"===t.type&&"mouse"!==t.pointerType)){if("pointerdown"===t.type&&t.preventDefault(),v=t.clientX,h=t.clientY,w.alwaysActive)return p=void 0,void(u=void 0);P(),"function"==typeof w.onEnter&&w.onEnter()}},C=function(t){!1===f&&t.cancelable&&t.preventDefault()},D=function(t){if(w.rotate&&O.isActive){if("mouse"!==t.pointerType){if(!w.rotateTouch)return;t.preventDefault()}var e=t.clientX,o=t.clientY,a=e-v,n=o-h;if("string"==typeof w.rotateTouch&&(0!==a||0!==n)&&void 0===f){if(a*a+n*n>=25){var r=180*Math.atan2(Math.abs(n),Math.abs(a))/Math.PI;f="scroll-y"===w.rotateTouch?r>45:90-r>45}!1===f&&(g.classList.add("atropos-rotate-touch"),t.cancelable&&t.preventDefault())}"mouse"!==t.pointerType&&f||I(e,o)}},F=function(t){if(p=void 0,u=void 0,O.isActive&&!(t&&"pointerup"===t.type&&"mouse"===t.pointerType||t&&"pointerleave"===t.type&&"mouse"!==t.pointerType)){if("string"==typeof w.rotateTouch&&f&&g.classList.remove("atropos-rotate-touch"),w.alwaysActive)return I(),"function"==typeof w.onRotate&&w.onRotate(0,0),void("function"==typeof w.onLeave&&w.onLeave());b.push((function(){return g.classList.remove("atropos-active")})),Y(s,w.duration+"ms"),_(s,""),L(s,"translate3d(0,0, 0px)"),l&&(Y(l,w.duration+"ms"),_(l,"")),d&&(Y(d,w.duration+"ms"),_(d,""),L(d,"translate3d(0, 0, 0)"),T(d,0)),Y(i,w.duration+"ms"),_(i,""),L(i,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),R({duration:w.duration+"ms"}),O.isActive=!1,"function"==typeof w.onRotate&&w.onRotate(0,0),"function"==typeof w.onLeave&&w.onLeave()}},N=function(t){var e=t.target;!M.contains(e)&&e!==M&&O.isActive&&F()};return O.destroy=function(){O.destroyed=!0,cancelAnimationFrame(m),E(document,"click",N),E(M,"pointerdown",j),E(M,"pointerenter",j),E(M,"pointermove",D),E(M,"touchmove",C),E(M,"pointerleave",F),E(M,"pointerup",F),E(M,"lostpointercapture",F),delete g.__atropos__},"string"==typeof g&&(g=e(document,g)),g&&(g.__atropos__||(void 0!==M?"string"==typeof M&&(M=e(document,M)):M=g,r=x?g.parentNode.host:g,Object.assign(O,{el:g}),i=e(g,".atropos-rotate"),s=e(g,".atropos-scale"),c=e(g,".atropos-inner"),g.__atropos__=O)),g&&M&&(w.shadow&&((l=e(g,".atropos-shadow"))||((l=document.createElement("span")).classList.add("atropos-shadow"),X=!0),L(l,"translate3d(0,0,-"+w.shadowOffset+"px) scale("+w.shadowScale+")"),X&&i.appendChild(l)),w.highlight&&function(){var t;(d=e(g,".atropos-highlight"))||((d=document.createElement("span")).classList.add("atropos-highlight"),t=!0),L(d,"translate3d(0,0,0)"),t&&c.appendChild(d)}(),w.rotateTouch&&("string"==typeof w.rotateTouch?g.classList.add("atropos-rotate-touch-"+w.rotateTouch):g.classList.add("atropos-rotate-touch")),e(r,"[data-atropos-opacity]")&&R({opacityOnly:!0}),A(document,"click",N),A(M,"pointerdown",j),A(M,"pointerenter",j),A(M,"pointermove",D),A(M,"touchmove",C),A(M,"pointerleave",F),A(M,"pointerup",F),A(M,"lostpointercapture",F),w.alwaysActive&&(P(),I())),O}}();
//# sourceMappingURL=atropos.min.js.map
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).Lenis=i()}(this,(function(){"use strict";function clamp(t,i,e){return Math.max(t,Math.min(i,e))}class Animate{constructor(){this.isRunning=!1,this.value=0,this.from=0,this.to=0,this.currentTime=0}advance(t){var i;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=clamp(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=function damp(t,i,e,s){return function lerp(t,i,e){return(1-e)*t+e*i}(t,i,1-Math.exp(-e*s))}(this.value,this.to,60*this.lerp,t),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),null===(i=this.onUpdate)||void 0===i||i.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,i,{lerp:e,duration:s,easing:o,onStart:n,onUpdate:l}){this.from=this.value=t,this.to=i,this.lerp=e,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,null==n||n(),this.onUpdate=l}}class Dimensions{constructor(t,i,{autoResize:e=!0,debounce:s=250}={}){this.wrapper=t,this.content=i,this.width=0,this.height=0,this.scrollHeight=0,this.scrollWidth=0,this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)},e&&(this.debouncedResize=function debounce(t,i){let e;return function(...s){let o=this;clearTimeout(e),e=setTimeout((()=>{e=void 0,t.apply(o,s)}),i)}}(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,i;null===(t=this.wrapperResizeObserver)||void 0===t||t.disconnect(),null===(i=this.contentResizeObserver)||void 0===i||i.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class Emitter{constructor(){this.events={}}emit(t,...i){var e;let s=this.events[t]||[];for(let t=0,o=s.length;t<o;t++)null===(e=s[t])||void 0===e||e.call(s,...i)}on(t,i){var e;return(null===(e=this.events[t])||void 0===e?void 0:e.push(i))||(this.events[t]=[i]),()=>{var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t))}}off(t,i){var e;this.events[t]=null===(e=this.events[t])||void 0===e?void 0:e.filter((t=>i!==t))}destroy(){this.events={}}}const t=100/6,i={passive:!1};class VirtualScroll{constructor(e,s={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=s,this.touchStart={x:0,y:0},this.lastDelta={x:0,y:0},this.window={width:0,height:0},this.emitter=new Emitter,this.onTouchStart=t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})},this.onTouchMove=t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t,s=-(i-this.touchStart.x)*this.options.touchMultiplier,o=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})},this.onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})},this.onWheel=i=>{let{deltaX:e,deltaY:s,deltaMode:o}=i;e*=1===o?t:2===o?this.window.width:1,s*=1===o?t:2===o?this.window.height:1,e*=this.options.wheelMultiplier,s*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:s,event:i})},this.onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}},window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,i),this.element.addEventListener("touchstart",this.onTouchStart,i),this.element.addEventListener("touchmove",this.onTouchMove,i),this.element.addEventListener("touchend",this.onTouchEnd,i)}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,i),this.element.removeEventListener("touchstart",this.onTouchStart,i),this.element.removeEventListener("touchmove",this.onTouchMove,i),this.element.removeEventListener("touchend",this.onTouchEnd,i)}}return class Lenis{constructor({wrapper:t=window,content:i=document.documentElement,eventsTarget:e=t,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:n=.075,touchInertiaMultiplier:l=35,duration:r,easing:h=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:a=.1,infinite:c=!1,orientation:u="vertical",gestureOrientation:d="vertical",touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:v=!0,prevent:g,virtualScroll:S,__experimental__naiveDimensions:w=!1}={}){this._isScrolling=!1,this._isStopped=!1,this._isLocked=!1,this._preventNextNativeScrollEvent=!1,this._resetVelocityTimeout=null,this.time=0,this.userData={},this.lastVelocity=0,this.velocity=0,this.direction=0,this.animate=new Animate,this.emitter=new Emitter,this.onPointerDown=t=>{1===t.button&&this.reset()},this.onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;const{deltaX:i,deltaY:e,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:i,deltaY:e,event:s}),s.ctrlKey)return;const o=s.type.includes("touch"),n=s.type.includes("wheel");this.isTouching="touchstart"===s.type||"touchmove"===s.type;if(this.options.syncTouch&&o&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked)return void this.reset();const l=0===i&&0===e,r="vertical"===this.options.gestureOrientation&&0===e||"horizontal"===this.options.gestureOrientation&&0===i;if(l||r)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const a=this.options.prevent;if(h.find((t=>{var i,e,s,l,r;return t instanceof HTMLElement&&("function"==typeof a&&(null==a?void 0:a(t))||(null===(i=t.hasAttribute)||void 0===i?void 0:i.call(t,"data-lenis-prevent"))||o&&(null===(e=t.hasAttribute)||void 0===e?void 0:e.call(t,"data-lenis-prevent-touch"))||n&&(null===(s=t.hasAttribute)||void 0===s?void 0:s.call(t,"data-lenis-prevent-wheel"))||(null===(l=t.classList)||void 0===l?void 0:l.contains("lenis"))&&!(null===(r=t.classList)||void 0===r?void 0:r.contains("lenis-stopped")))})))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(!(this.options.syncTouch&&o||this.options.smoothWheel&&n))return this.isScrolling="native",void this.animate.stop();s.preventDefault();let c=e;"both"===this.options.gestureOrientation?c=Math.abs(e)>Math.abs(i)?e:i:"horizontal"===this.options.gestureOrientation&&(c=i);const u=o&&this.options.syncTouch,d=o&&"touchend"===s.type&&Math.abs(c)>5;d&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,Object.assign({programmatic:!1},u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent)this._preventNextNativeScrollEvent=!1;else if(!1===this.isScrolling||"native"===this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout((()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()}),400))}},window.lenisVersion="1.1.13",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,eventsTarget:e,smoothWheel:s,syncTouch:o,syncTouchLerp:n,touchInertiaMultiplier:l,duration:r,easing:h,lerp:a,infinite:c,gestureOrientation:d,orientation:u,touchMultiplier:p,wheelMultiplier:m,autoResize:v,prevent:g,virtualScroll:S,__experimental__naiveDimensions:w},this.dimensions=new Dimensions(t,i,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new VirtualScroll(e,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:e=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:l=this.options.lerp,onStart:r,onComplete:h,force:a=!1,programmatic:c=!0,userData:u}={}){if(!this.isStopped&&!this.isLocked||a){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let e;if("string"==typeof t?e=document.querySelector(t):t instanceof HTMLElement&&(null==t?void 0:t.nodeType)&&(e=t),e){if(this.options.wrapper!==window){const t=this.rootElement.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=clamp(0,t,this.limit),t===this.targetScroll)return null==r||r(this),void(null==h||h(this));if(this.userData=null!=u?u:{},e)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),null==h||h(this),void(this.userData={});c||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:n,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",null==r||r(this)},onUpdate:(t,i)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),i||this.emit(),i&&(this.reset(),this.emit(),null==h||h(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame((()=>{this._preventNextNativeScrollEvent=!1}))}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function modulo(t,i){return(t%i+i)%i}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}}));
//# sourceMappingURL=lenis.min.js.map

!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((t="undefined"!=typeof globalThis?globalThis:t||self).countUp={})}(this,(function(t){"use strict";var i=function(){return i=Object.assign||function(t){for(var i,n=1,s=arguments.length;n<s;n++)for(var e in i=arguments[n])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t},i.apply(this,arguments)},n=function(){function t(t,n,s){var e=this;this.endVal=n,this.options=s,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){e.startTime||(e.startTime=t);var i=t-e.startTime;e.remaining=e.duration-i,e.useEasing?e.countDown?e.frameVal=e.startVal-e.easingFn(i,0,e.startVal-e.endVal,e.duration):e.frameVal=e.easingFn(i,e.startVal,e.endVal-e.startVal,e.duration):e.frameVal=e.startVal+(e.endVal-e.startVal)*(i/e.duration);var n=e.countDown?e.frameVal<e.endVal:e.frameVal>e.endVal;e.frameVal=n?e.endVal:e.frameVal,e.frameVal=Number(e.frameVal.toFixed(e.options.decimalPlaces)),e.printValue(e.frameVal),i<e.duration?e.rAF=requestAnimationFrame(e.count):null!==e.finalEndVal?e.update(e.finalEndVal):e.options.onCompleteCallback&&e.options.onCompleteCallback()},this.formatNumber=function(t){var i,n,s,a,o=t<0?"-":"";i=Math.abs(t).toFixed(e.options.decimalPlaces);var r=(i+="").split(".");if(n=r[0],s=r.length>1?e.options.decimal+r[1]:"",e.options.useGrouping){a="";for(var l=3,u=0,h=0,p=n.length;h<p;++h)e.options.useIndianSeparators&&4===h&&(l=2,u=1),0!==h&&u%l==0&&(a=e.options.separator+a),u++,a=n[p-h-1]+a;n=a}return e.options.numerals&&e.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return e.options.numerals[+t]})),s=s.replace(/[0-9]/g,(function(t){return e.options.numerals[+t]}))),o+e.options.prefix+n+s+e.options.suffix},this.easeOutExpo=function(t,i,n,s){return n*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=i(i({},this.defaults),s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return e.handleScroll(e)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var i=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),s=n.top+window.pageYOffset,e=n.top+n.height+window.pageYOffset;e<i&&e>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>e||s>i)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i;if(this.el){var n=this.formattingFn(t);if(null===(i=this.options.plugin)||void 0===i?void 0:i.render)this.options.plugin.render(this.el,n);else if("INPUT"===this.el.tagName)this.el.value=n;else"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();t.CountUp=n,Object.defineProperty(t,"__esModule",{value:!0})}));

/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 * 
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t){return Math.round(1e10*t)/1e10||0}function y(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if((o||!r)&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function C(t,e){var n=t.length,r=t[n-1]||[],a=r.length;n&&e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,T=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,V=Math.PI/180,s=180/Math.PI,F=Math.sin,U=Math.cos,H=Math.abs,$=Math.sqrt,l=Math.atan2,A=1e8,h=function _isNumber(t){return"number"==typeof t},S={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+A)%1*e)/e||(t<0?0:1)},N=function _round(t){return Math.round(t*e)/e||0},m=function _getSampleIndex(t,e,n){var r=t.length,a=~~(n*r);if(t[a]>e){for(;--a&&t[a]>e;);a<0&&(a=0)}else for(;t[++a]<e&&a<r;);return a<r?a:r-1},O=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):h(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var B={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,f,g,c,p,d,m,v,y,x,w,P,b,M,R=t.tagName.toLowerCase(),L=.552284749831;return"path"!==R&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,B[R]),"rect"===R?(o=M.rx,i=M.ry||o,r=M.x,a=M.y,f=M.width-2*o,g=M.height-2*i,n=o||i?"M"+(v=(d=(p=r+o)+f)+o)+","+(x=a+i)+" V"+(w=x+g)+" C"+[v,P=w+i*L,m=d+o*L,b=w+i,d,b,d-(d-p)/3,b,p+(d-p)/3,b,p,b,c=r+o*(1-L),b,r,P,r,w,r,w-(w-x)/3,r,x+(w-x)/3,r,x,r,y=a+i*(1-L),c,a,p,a,p+(d-p)/3,a,d-(d-p)/3,a,d,a,m,a,v,y,v,x].join(",")+"z":"M"+(r+f)+","+a+" v"+g+" h"+-f+" v"+-g+" h"+f+"z"):"circle"===R||"ellipse"===R?(h="circle"===R?(o=i=M.r)*L:(o=M.rx,(i=M.ry)*L),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*L),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===R?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==R&&"polygon"!==R||(n="M"+(r=(u=(t.getAttribute("points")+"").match(T)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===R&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,N(l(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){n=function _isUndefined(t){return void 0===t}(n)?1:x(n)||0,e=x(e)||0;var r=Math.max(0,~~(H(n-e)-1e-8)),a=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=O(t[n],t[n].slice(0));return O(t,e)}(t);if(n<e&&(e=1-e,n=1-n,function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(a),a.totalLength=0),e<0||n<0){var o=Math.abs(~~Math.min(e,n))+1;e+=o,n+=o}a.totalLength||cacheRawPathMeasurements(a);var i,s,l,h,u,f,g,c,p=1<n,d=getProgressData(a,e,S,!0),m=getProgressData(a,n,_),v=m.segment,w=d.segment,P=m.segIndex,b=d.segIndex,M=m.i,R=d.i,L=b===P,T=M===R&&L;if(p||r){for(i=P<b||L&&M<R||T&&m.t<d.t,y(a,b,R,d.t)&&(b++,i||(P++,T?(m.t=(m.t-d.t)/(1-d.t),M=0):L&&(M-=R))),Math.abs(1-(n-e))<1e-5?P=b-1:!m.t&&P?P--:y(a,P,M,m.t)&&i&&b++,1===d.t&&(b=(b+1)%a.length),u=[],g=1+(f=a.length)*r,g+=(f-(c=b)+P)%f,h=0;h<g;h++)C(u,a[c++%f]);a=u}else if(l=1===m.t?6:subdivideSegment(v,M,m.t),e!==n)for(s=subdivideSegment(w,R,T?d.t/m.t:d.t),L&&(l+=s),v.splice(M+l+2),(s||R)&&w.splice(0,R+s),h=a.length;h--;)(h<b||P<h)&&a.splice(h,1);else v.angle=getRotationAtBezierT(v,M+l,0),d=v[M+=l],m=v[M+1],v.length=v.totalLength=0,v.totalPoints=a.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return a.totalLength=0,a}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,f,g,c,p,d,m,v,y,x,w=~~t.resolution||12,P=1/w,b=n?e+6*n+1:t.length,M=t[e],R=t[e+1],L=e?e/6*w:0,T=t.samples,C=t.lookup,S=(e?t.minLength:A)||A,_=T[L+n*w-1],N=e?T[L-1]:0;for(T.length=C.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-R,f=t[a+3]-R,g=t[a+1]-R,l=h=c=p=0,H(o)<.01&&H(u)<.01&&H(s)+H(g)<.01)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=w;r++)l=h-(h=((m=P*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),c=p-(p=(m*m*u+3*d*(m*f+d*g))*m),(y=$(c*c+l*l))<S&&(S=y),N+=y,T[L++]=N;M+=o,R+=u}if(_)for(_-=N;L<T.length;L++)T[L]+=_;if(T.length&&S){if(t.totalLength=x=T[T.length-1]||0,x/(t.minLength=S)<9999)for(y=v=0,r=0;r<x;r+=S)C[y++]=T[v]<r?++v:v}else t.totalLength=T[0]=0;return e?N-T[e/2-1]:N}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,f=a+(i-a)*n,g=i+(l-i)*n,c=h+(u-h)*n,p=f+(g-f)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,g+=(m-g)*n,t.splice(e+2,4,N(h),N(f),N(c),N(p),N(c+(u-c)*n),N(p+(g-p)*n),N(u),N(g),N(d),N(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,f=0,g=t[0];if(e)if(1===e)u=1,h=(g=t[f=t.length-1]).length-8;else{if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)f=h;e=(i-(s=l-(g=t[f]).totalLength))/(l-s)||0}a=g.samples,o=g.resolution,i=g.totalLength*e,s=(h=g.lookup.length?g.lookup[~~(i/g.minLength)]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<g.length?(h+=6,u=0):f+1<t.length&&(h=u=0,g=t[++f]))}else u=h=f=0,g=t[0];return n.t=u,n.i=h,n.path=t,n.segment=g,n.segIndex=f,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,f,g,c=t[0],p=r||{};if((e<0||1<e)&&(e=d(e)),c.lookup||cacheRawPathMeasurements(t),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)c=t[h];e=(i-(s=l-c.totalLength))/(l-s)||0}return a=c.samples,o=c.resolution,i=c.totalLength*e,s=(h=c.lookup.length?c.lookup[e<1?~~(i/c.minLength):c.lookup.length-1]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),g=1-(u=1/o*((i-s)/(l-s)+h%o)||0),f=c[h=6*~~(h/o)],p.x=N((u*u*(c[h+6]-f)+3*g*(u*(c[h+4]-f)+g*(c[h+2]-f)))*u+f),p.y=N((u*u*(c[h+7]-(f=c[h+1]))+3*g*(u*(c[h+5]-f)+g*(c[h+3]-f)))*u+f),n&&(p.angle=c.totalLength?getRotationAtBezierT(c,h,1<=u?1-1e-9:u||1e-9):c.angle||0),p}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,f,g=t.length;-1<--g;)for(l=(s=t[g]).length,h=0;h<l;h+=2)u=s[h],f=s[h+1],s[h]=u*e+f*r+o,s[h+1]=u*n+f*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*V,u=U(h),f=F(h),g=Math.PI,c=2*g,p=(t-s)/2,d=(e-l)/2,m=u*p+f*d,v=-f*p+u*d,y=m*m,x=v*v,w=y/(n*n)+x/(r*r);1<w&&(n=$(w)*n,r=$(w)*r);var P=n*n,b=r*r,M=(P*b-P*x-b*y)/(P*x+b*y);M<0&&(M=0);var R=(o===i?-1:1)*$(M),L=n*v/r*R,T=-r*m/n*R,C=u*L-f*T+(t+s)/2,S=f*L+u*T+(e+l)/2,_=(m-L)/n,N=(v-T)/r,A=(-m-L)/n,O=(-v-T)/r,B=_*_+N*N,E=(N<0?-1:1)*Math.acos(_/$(B)),I=(_*O-N*A<0?-1:1)*Math.acos((_*A+N*O)/$(B*(A*A+O*O)));isNaN(I)&&(I=g),!i&&0<I?I-=c:i&&I<0&&(I+=c),E%=c,I%=c;var D,X=Math.ceil(H(I)/(c/4)),k=[],z=I/X,G=4/3*F(z/2)/(1+U(z/2)),Z=u*n,q=f*n,Y=f*-r,j=u*r;for(D=0;D<X;D++)m=U(a=E+D*z),v=F(a),_=U(a+=z),N=F(a),k.push(m-G*v,v+G*m,_+G*N,N-G*_,_,N);for(D=0;D<k.length;D+=2)m=k[D],v=k[D+1],k[D]=m*Z+v*Y+C,k[D+1]=m*q+v*j+S;return k[D-2]=s,k[D-1]=l,k}}function stringToRawPath(t){function Cf(t,e,n,r){u=(n-t)/3,f=(r-e)/3,s.push(t+u,e+f,n-u,r-f,n,r)}var e,n,r,a,o,i,s,l,h,u,f,g,c,p,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],y=0,x=0,w=m.length,P=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<w;e++)if(c=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=y,a+=x),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:P+=s.length),y=l=r,x=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(y=x=0),(s=s||[0,0]).push(r,a,y+1*m[e+3],x+1*m[e+4],y+=1*m[e+5],x+=1*m[e+6]),e+=6;else if("S"===o)u=y,f=x,"C"!==c&&"S"!==c||(u+=y-s[s.length-4],f+=x-s[s.length-3]),i||(y=x=0),s.push(u,f,r,a,y+=1*m[e+3],x+=1*m[e+4]),e+=4;else if("Q"===o)u=y+2/3*(r-y),f=x+2/3*(a-x),i||(y=x=0),y+=1*m[e+3],x+=1*m[e+4],s.push(u,f,y+2/3*(r-y),x+2/3*(a-x),y,x),e+=4;else if("T"===o)u=y-s[s.length-4],f=x-s[s.length-3],s.push(y+u,x+f,r+2/3*(y+1.5*u-r),a+2/3*(x+1.5*f-a),y=r,x=a),e+=2;else if("H"===o)Cf(y,x,y=r,x),e+=1;else if("V"===o)Cf(y,x,y,x=r+(i?x-y:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(y-r)||.5<H(x-a))&&(Cf(y,x,r,a),"L"===o&&(e+=2)),y=r,x=a;else if("A"===o){if(p=m[e+4],d=m[e+5],u=m[e+6],f=m[e+7],n=7,1<p.length&&(p.length<3?(f=u,u=d,n--):(f=d,u=p.substr(2),n-=2),d=p.charAt(1),p=p.charAt(0)),g=arcToSegment(y,x,+m[e+1],+m[e+2],+m[e+3],+p,+d,(i?y:0)+1*u,(i?x:0)+1*f),e+=n,g)for(n=0;n<g.length;n++)s.push(g[n]);y=s[s.length-2],x=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=P+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e){H(t[0]-t[2])<1e-4&&H(t[1]-t[3])<1e-4&&(t=t.slice(2));var n,r,a,o,i,s,l,h,u,f,g,c,p,d,m=t.length-2,v=+t[0],y=+t[1],x=+t[2],w=+t[3],P=[v,y,v,y],b=x-v,M=w-y,R=Math.abs(t[m]-v)<.001&&Math.abs(t[m+1]-y)<.001;for(R&&(t.push(x,w),x=v,w=y,v=t[m-2],y=t[m-1],t.unshift(v,y),m+=4),e=e||0===e?+e:1,a=2;a<m;a+=2)n=v,r=y,v=x,y=w,x=+t[a+2],w=+t[a+3],v===x&&y===w||(o=b,i=M,b=x-v,M=w-y,h=((s=$(o*o+i*i))+(l=$(b*b+M*M)))*e*.25/$(Math.pow(b/l+o/s,2)+Math.pow(M/l+i/s,2)),g=v-((u=v-(v-n)*(s?h/s:0))+(((f=v+(x-v)*(l?h/l:0))-u)*(3*s/(s+l)+.5)/4||0)),d=y-((c=y-(y-r)*(s?h/s:0))+(((p=y+(w-y)*(l?h/l:0))-c)*(3*s/(s+l)+.5)/4||0)),v===n&&y===r||P.push(N(u+g),N(c+d),N(v),N(y),N(f+g),N(p+d)));return v!==x||y!==w||P.length<4?P.push(N(x),N(w),N(x),N(w)):P.length-=2,2===P.length?P.push(v,y,v,y,v,y):R&&(P.splice(0,6),P.length=P.length-6),P}function rawPathToString(t){h(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+N(a[0])+","+N(a[1])+" C",e=a.length,r=2;r<e;r++)o+=N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r])+" ";a.closed&&(o+="z")}return o}function R(t){var e=t.ownerDocument||t;!(k in t.style)&&"msTransform"in t.style&&(z=(k="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(v=window,E=new Y,e){w=(c=e).documentElement,P=e.body,(I=c.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div"),a=e&&(e.body||e.firstElementChild);a&&a.appendChild&&(a.appendChild(n),n.appendChild(r),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),D=r.offsetParent!==n,a.removeChild(n))}return e}function X(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function Z(t,e){if(t.parentNode&&(c||R(t))){var n=X(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=c.createElementNS?c.createElementNS(r.replace(/^https/,"http"),a):c.createElement(a);return e&&(n?(b=b||Z(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),b.appendChild(l)):(g||((g=Z(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",g.appendChild(l))),l}throw"Need document and parent."}function aa(t,e){var n,r,a,o,i,s,l=X(t),h=t===l,u=l?G:q,f=t.parentNode;if(t===v)return t;if(u.length||u.push(Z(t,1),Z(t,2),Z(t,3)),n=l?b:g,l)h?(o=-(a=function _getCTM(t){var e,n=t.getCTM();return n||(e=t.style[k],t.style[k]="none",t.appendChild(I),n=I.getCTM(),t.removeChild(I),e?t.style[k]=e:t.style.removeProperty(k.replace(/([A-Z])/g,"-$1").toLowerCase())),n||E.clone()}(t)).e/a.a,i=-a.f/a.d,r=E):t.getBBox?(a=t.getBBox(),o=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?1<r.numberOfItems?function _consolidate(t){for(var e=new Y,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix:E).a*a.x+r.c*a.y,i=r.b*a.x+r.d*a.y):(r=new Y,o=i=0),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),(h?l:f).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")");else{if(o=i=0,D)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(v.getComputedStyle(a)[k]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);if("absolute"!==(s=v.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;f&&f!==r;)o+=f.scrollLeft||0,i+=f.scrollTop||0,f=f.parentNode;(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",a[k]=s[k],a[z]=s[z],a.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function ba(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var c,v,w,P,g,b,E,I,D,n,k="transform",z=k+"Origin",G=[],q=[],Y=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n||1e-10;return ba(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,f=t.e,g=t.f;return ba(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+f*e+g*r,i+f*n+g*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),ba(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n,r){if(!t||!t.parentNode||(c||R(t)).documentElement===t)return new Y;var a=function _forceNonZeroScale(t){for(var e,n;t&&t!==P;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),o=X(t)?G:q,i=aa(t,n),s=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),u=i.parentNode,f=!r&&function _isFixed(t){return"fixed"===v.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),g=new Y((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(f?0:function _getDocScrollLeft(){return v.pageXOffset||c.scrollLeft||w.scrollLeft||P.scrollLeft||0}()),s.top+(f?0:function _getDocScrollTop(){return v.pageYOffset||c.scrollTop||w.scrollTop||P.scrollTop||0}()));if(u.removeChild(i),a)for(s=a.length;s--;)(l=a[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?g.inverse():g}function na(t,e,n,r){for(var a=e.length,o=2===r?0:r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),2===r&&(t[o+1]=0),o+=2;return t}function oa(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function pa(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function qa(t,e,n,r,a,o,i,s,l){return e="cubic"===i.type?[e]:(!1!==i.fromCurrent&&e.unshift(oa(n,r,s),a?oa(n,a,l):0),i.relative&&pa(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(nt(e,n,i)),rt(t,n,r,e,"x",s),a&&rt(t,n,a,e,"y",l),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ra(t){return t}function ta(t,e,n){var r,a=getGlobalMatrix(t),o=0,i=0;return"svg"===(t.tagName+"").toLowerCase()?(r=t.viewBox.baseVal).width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")}):r=e&&t.getBBox&&t.getBBox(),e&&"auto"!==e&&(o=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?a.apply({x:o,y:i}):{x:a.e,y:a.f})}function ua(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=ta(t,n,o),l=ta(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(et)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),a&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var j,f,Q,W,J,o,K="x,translateX,left,marginLeft,xPercent".split(","),tt="y,translateY,top,marginTop,yPercent".split(","),i=Math.PI/180,et=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,nt=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,f=t[0][0],g=t[0][1],c=oa(e,"x"),p=oa(e,"y");return t&&t.length?(i&&("self"===i||(r=W(i)[0]||e)===e?transformRawPath(t,1,0,0,1,c-f,p-g):(u&&!1!==u[2]?j.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[oa(e,"xPercent")/-100,oa(e,"yPercent")/-100],o=(a=ua(e,r,u,"auto")).apply({x:f,y:g}),transformRawPath(t,a.a,a.b,a.c,a.d,c+a.e-(o.x-a.e),p+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},rt=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new f(t._pt,e,h,0,0,ra,0,i.set(e,h,t));u.u=Q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.12.5",name:"motionPath",register:function register(t,e,n){Q=(j=t).utils.getUnit,W=j.utils.toArray,J=j.core.getStyleSaver,o=j.core.reverting||function(){},f=n},init:function init(t,e,n){if(!j)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var r,a,o=[],i=e.path,s=e.autoRotate,l=e.unitX,h=e.unitY,u=e.x,f=e.y,g=i[0],c=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=o,this.target=t,this.tween=n,this.styles=J&&J(t,"transform"),(this.rotate=s||0===s)&&(this.rOffset=parseFloat(s)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=Q(t._gsap.get(t,this.rProp))||0),!Array.isArray(i)||"closed"in i||"number"==typeof g)cacheRawPathMeasurements(r=c(nt(getRawPath(e.path),t,e)),e.resolution),o.push(r),rt(this,t,e.x||"x",r,"x",e.unitX||"px"),rt(this,t,e.y||"y",r,"y",e.unitY||"px");else{for(a in g)!u&&~K.indexOf(a)?u=a:!f&&~tt.indexOf(a)&&(f=a);for(a in u&&f?o.push(qa(this,na(na([],i,u,0),i,f,1),t,u,f,c,e,l||Q(i[0][u]),h||Q(i[0][f]))):u=f=0,g)a!==u&&a!==f&&o.push(qa(this,na([],i,a,2),t,a,0,c,e,Q(i[0][a])))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;if(e.tween._time||!o()){for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?i:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return W(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:ua,getRelativePosition:function getRelativePosition(t,e,n,r){var a=ua(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=na(na([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&pa(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return j||"undefined"!=typeof window&&(j=window.gsap)&&j.registerPlugin&&j}()||j.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});


/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.


 Copyright (c) 2018 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
(function() {
  'use strict';

  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var F3 = 1.0 / 3.0;
  var G3 = 1.0 / 6.0;
  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

  function SimplexNoise(randomOrSeed) {
    var random;
    if (typeof randomOrSeed == 'function') {
      random = randomOrSeed;
    }
    else if (randomOrSeed) {
      random = alea(randomOrSeed);
    } else {
      random = Math.random;
    }
    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

  }
  SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
      -1, 1, 0,
      1, -1, 0,

      -1, -1, 0,
      1, 0, 1,
      -1, 0, 1,

      1, 0, -1,
      -1, 0, -1,
      0, 1, 1,

      0, -1, 1,
      0, 1, -1,
      0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners
      var n1 = 0;
      var n2 = 0;
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin) * F2; // Hairy factor for 2D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space
      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin
      var y0 = yin - Y0;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1.0 + 2.0 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      var ii = i & 255;
      var jj = j & 255;
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0, n1, n2, n3; // Noise contributions from the four corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var k = Math.floor(zin + s);
      var t = (i + j + k) * G3;
      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
      var Y0 = j - t;
      var Z0 = k - t;
      var x0 = xin - X0; // The x,y,z distances from the cell origin
      var y0 = yin - Y0;
      var z0 = zin - Z0;
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // X Y Z order
        else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // X Z Y order
        else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // Z X Y order
      }
      else { // x0<y0
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Z Y X order
        else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Y Z X order
        else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // Y X Z order
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
      var y2 = y0 - j2 + 2.0 * G3;
      var z2 = z0 - k2 + 2.0 * G3;
      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
      var y3 = y0 - 1.0 + 3.0 * G3;
      var z3 = z0 - 1.0 + 3.0 * G3;
      // Work out the hashed gradient indices of the four simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
        t3 *= t3;
        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to stay just inside [-1,1]
      return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
      var perm = this.perm;
      var grad4 = this.grad4;

      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
      var s = (x + y + z + w) * F4; // Factor for 4D skewing
      var i = Math.floor(x + s);
      var j = Math.floor(y + s);
      var k = Math.floor(z + s);
      var l = Math.floor(w + s);
      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
      var Y0 = j - t;
      var Z0 = k - t;
      var W0 = l - t;
      var x0 = x - X0; // The x,y,z,w distances from the cell origin
      var y0 = y - Y0;
      var z0 = z - Z0;
      var w0 = w - W0;
      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
      // To find out which of the 24 possible simplices we're in, we need to
      // determine the magnitude ordering of x0, y0, z0 and w0.
      // Six pair-wise comparisons are performed between each possible pair
      // of the four coordinates, and the results are used to rank the numbers.
      var rankx = 0;
      var ranky = 0;
      var rankz = 0;
      var rankw = 0;
      if (x0 > y0) rankx++;
      else ranky++;
      if (x0 > z0) rankx++;
      else rankz++;
      if (x0 > w0) rankx++;
      else rankw++;
      if (y0 > z0) ranky++;
      else rankz++;
      if (y0 > w0) ranky++;
      else rankw++;
      if (z0 > w0) rankz++;
      else rankw++;
      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
      // impossible. Only the 24 indices which have non-zero entries make any sense.
      // We use a thresholding to set the coordinates in turn from the largest magnitude.
      // Rank 3 denotes the largest coordinate.
      i1 = rankx >= 3 ? 1 : 0;
      j1 = ranky >= 3 ? 1 : 0;
      k1 = rankz >= 3 ? 1 : 0;
      l1 = rankw >= 3 ? 1 : 0;
      // Rank 2 denotes the second largest coordinate.
      i2 = rankx >= 2 ? 1 : 0;
      j2 = ranky >= 2 ? 1 : 0;
      k2 = rankz >= 2 ? 1 : 0;
      l2 = rankw >= 2 ? 1 : 0;
      // Rank 1 denotes the second smallest coordinate.
      i3 = rankx >= 1 ? 1 : 0;
      j3 = ranky >= 1 ? 1 : 0;
      k3 = rankz >= 1 ? 1 : 0;
      l3 = rankw >= 1 ? 1 : 0;
      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
      var y1 = y0 - j1 + G4;
      var z1 = z0 - k1 + G4;
      var w1 = w0 - l1 + G4;
      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
      var y2 = y0 - j2 + 2.0 * G4;
      var z2 = z0 - k2 + 2.0 * G4;
      var w2 = w0 - l2 + 2.0 * G4;
      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
      var y3 = y0 - j3 + 3.0 * G4;
      var z3 = z0 - k3 + 3.0 * G4;
      var w3 = w0 - l3 + 3.0 * G4;
      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
      var y4 = y0 - 1.0 + 4.0 * G4;
      var z4 = z0 - 1.0 + 4.0 * G4;
      var w4 = w0 - 1.0 + 4.0 * G4;
      // Work out the hashed gradient indices of the five simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      var ll = l & 255;
      // Calculate the contribution from the five corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
        t0 *= t0;
        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
        t1 *= t1;
        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
        t2 *= t2;
        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
        t3 *= t3;
        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
      }
      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) n4 = 0.0;
      else {
        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
        t4 *= t4;
        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
      }
      // Sum up and scale the result to cover the range [-1,1]
      return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }
  };

  function buildPermutationTable(random) {
    var i;
    var p = new Uint8Array(256);
    for (i = 0; i < 256; i++) {
      p[i] = i;
    }
    for (i = 0; i < 255; i++) {
      var r = i + ~~(random() * (256 - i));
      var aux = p[i];
      p[i] = p[r];
      p[r] = aux;
    }
    return p;
  }
  SimplexNoise._buildPermutationTable = buildPermutationTable;

  function alea() {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    var mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < arguments.length; i++) {
      s0 -= mash(arguments[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(arguments[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(arguments[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    return function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
  }
  function masher() {
    var n = 0xefc8249d;
    return function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  // amd
  if (typeof define !== 'undefined' && define.amd) define(function() {return SimplexNoise;});
  // common js
  if (typeof exports !== 'undefined') exports.SimplexNoise = SimplexNoise;
  // browser
  else if (typeof window !== 'undefined') window.SimplexNoise = SimplexNoise;
  // nodejs
  if (typeof module !== 'undefined') {
    module.exports = SimplexNoise;
  }

})();

