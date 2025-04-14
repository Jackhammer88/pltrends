var Xt=t=>{throw TypeError(t)};var Oe=(t,e,n)=>e.has(t)||Xt("Cannot "+n);var A=(t,e,n)=>(Oe(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Xt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{w as Ot,o as Qt,ao as C,e as O,Q as N,ap as Ne}from"./IDmWtmY4.js";new URL("sveltekit-internal://");function je(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function $e(t){return t.split("%25").map(decodeURI).join("%25")}function De(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function It({href:t}){return t.split("#")[0]}function Fe(t,e,n,a=!1){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return r}function Ve(...t){let e=5381;for(const n of t)if(typeof n=="string"){let a=n.length;for(;a;)e=e*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)e=e*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Be(t){const e=atob(t),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n.buffer}const Me=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&W.delete(Nt(t)),Me(t,e));const W=new Map;function qe(t,e){const n=Nt(t,e),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&W.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Be(r)),Promise.resolve(new Response(r,s))}return window.fetch(t,e)}function Ge(t,e,n){if(W.size>0){const a=Nt(t,n),r=W.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);W.delete(a)}}return window.fetch(e,n)}function Nt(t,e){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const r=[];e.headers&&r.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&r.push(e.body),a+=`[data-hash="${Ve(...r)}"]`}return a}const He=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ke(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ye(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ut(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=He.exec(c),[,u,w,f,m]=d;return e.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ut(c)}).join("")}).join("")}/?$`),params:e}}function We(t){return!/^\([^)]+\)$/.test(t)}function Ye(t){return t.slice(1).split("/").filter(We)}function Je(t,e,n){const a={},r=t.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=r[o-i];if(c.chained&&c.rest&&i&&(l=r.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){a[c.name]=l;const d=e[o+1],u=r[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function Ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ze({nodes:t,server_loads:e,dictionary:n,matchers:a}){const r=new Set(e);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:w}=Ke(o),f={id:o,exec:m=>{const p=u.exec(m);if(p)return Je(p,w,a)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[r.has(o),t[o]]}}function de(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function Zt(t,e,n=JSON.stringify){const a=n(e);try{sessionStorage[t]=a}catch{}}var ce;const x=((ce=globalThis.__sveltekit_11cd2gg)==null?void 0:ce.base)??"/pltrends";var le;const Xe=((le=globalThis.__sveltekit_11cd2gg)==null?void 0:le.assets)??x,Qe="1744638066538",pe="sveltekit:snapshot",ge="sveltekit:scroll",me="sveltekit:states",Ze="sveltekit:pageurl",q="sveltekit:history",X="sveltekit:navigation",F={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ut=location.origin;function jt(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function $t(){return{x:pageXOffset,y:pageYOffset}}function M(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const te={...F,"":F.hover};function we(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ye(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=we(t)}}function xt(t,e,n){let a;try{if(a=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,s=!a||!!r||bt(a,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===ut&&t.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function dt(t){let e=null,n=null,a=null,r=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)a===null&&(a=M(o,"preload-code")),r===null&&(r=M(o,"preload-data")),e===null&&(e=M(o,"keepfocus")),n===null&&(n=M(o,"noscroll")),s===null&&(s=M(o,"reload")),i===null&&(i=M(o,"replacestate")),o=we(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:te[a??"off"],preload_data:te[r??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function ee(t){const e=Ot(t);let n=!0;function a(){n=!0,e.update(i=>i)}function r(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const _e={v:()=>{}};function tn(){const{set:t,subscribe:e}=Ot(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Xe}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Qe;return i&&(t(!0),_e.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:a}}function bt(t,e,n){return t.origin!==ut||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Dn(t){}function ne(t){const e=nn(t),n=new ArrayBuffer(e.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,e.charCodeAt(r));return n}const en="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function nn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,a=0;for(let r=0;r<t.length;r++)n<<=6,n|=en.indexOf(t[r]),a+=6,a===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,e+=String.fromCharCode(n)):a===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const rn=-1,an=-2,on=-3,sn=-4,cn=-5,ln=-6;function fn(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,a=Array(n.length);function r(s,i=!1){if(s===rn)return;if(s===on)return NaN;if(s===sn)return 1/0;if(s===cn)return-1/0;if(s===ln)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return a[s]=l(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const d=new Set;a[s]=d;for(let f=1;f<o.length;f+=1)d.add(r(o[f]));break;case"Map":const u=new Map;a[s]=u;for(let f=1;f<o.length;f+=2)u.set(r(o[f]),r(o[f+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);a[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=r(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],p=ne(m),h=new f(p);a[s]=h;break}case"ArrayBuffer":{const f=o[1],m=ne(f);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==an&&(c[l]=r(d))}}else{const c={};a[s]=c;for(const l in o){const d=o[l];c[l]=r(d)}}return a[s]}return r(0)}const ve=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ve];const un=new Set([...ve]);[...un];function hn(t){return t.filter(e=>e!=null)}class At{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Dt{constructor(e,n){this.status=e,this.location=n}}class Ft extends Error{constructor(e,n,a){super(a),this.status=e,this.text=n}}const dn="x-sveltekit-invalidated",pn="x-sveltekit-trailing-slash";function pt(t){return t instanceof At||t instanceof Ft?t.status:500}function gn(t){return t instanceof Ft?t.text:"Internal Error"}let U,Q,Lt;const mn=Qt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Qt.toString());var et,nt,rt,at,ot,st,it,ct,fe,lt,ue,ft,he;mn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null},Lt={current:!1}):(U=new(fe=class{constructor(){P(this,et,C({}));P(this,nt,C(null));P(this,rt,C(null));P(this,at,C({}));P(this,ot,C({id:null}));P(this,st,C({}));P(this,it,C(-1));P(this,ct,C(new URL("https://example.com")))}get data(){return O(A(this,et))}set data(e){N(A(this,et),e)}get form(){return O(A(this,nt))}set form(e){N(A(this,nt),e)}get error(){return O(A(this,rt))}set error(e){N(A(this,rt),e)}get params(){return O(A(this,at))}set params(e){N(A(this,at),e)}get route(){return O(A(this,ot))}set route(e){N(A(this,ot),e)}get state(){return O(A(this,st))}set state(e){N(A(this,st),e)}get status(){return O(A(this,it))}set status(e){N(A(this,it),e)}get url(){return O(A(this,ct))}set url(e){N(A(this,ct),e)}},et=new WeakMap,nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,fe),Q=new(ue=class{constructor(){P(this,lt,C(null))}get current(){return O(A(this,lt))}set current(e){N(A(this,lt),e)}},lt=new WeakMap,ue),Lt=new(he=class{constructor(){P(this,ft,C(!1))}get current(){return O(A(this,ft))}set current(e){N(A(this,ft),e)}},ft=new WeakMap,he),_e.v=()=>Lt.current=!0);function wn(t){Object.assign(U,t)}const yn="/__data.json",_n=".html__data.json";function vn(t){return t.endsWith(".html")?t.replace(/\.html$/,_n):t.replace(/\/$/,"")+yn}const bn=new Set(["icon","shortcut icon","apple-touch-icon"]),B=de(ge)??{},Z=de(pe)??{},$={url:ee({}),page:ee({}),navigating:Ot(null),updated:tn()};function Vt(t){B[t]=$t()}function An(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;Z[n];)delete Z[n],n+=1}function H(t){return location.href=t.href,new Promise(()=>{})}async function be(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function re(){}let Bt,Pt,gt,j,Ct,k;const mt=[],wt=[];let L=null;const ht=new Map,Ae=new Set,kn=new Set,Y=new Set;let v={branch:[],error:null,url:null},Mt=!1,yt=!1,ae=!0,tt=!1,K=!1,ke=!1,qt=!1,Ee,S,T,V;const J=new Set;async function Mn(t,e,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),k=t,await((s=(r=t.hooks).init)==null?void 0:s.call(r)),Bt=ze(t),j=document.documentElement,Ct=e,Pt=t.nodes[0],gt=t.nodes[1],Pt(),gt(),S=(i=history.state)==null?void 0:i[q],T=(o=history.state)==null?void 0:o[X],S||(S=T=Date.now(),history.replaceState({...history.state,[q]:S,[X]:T},""));const a=B[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await Cn(Ct,n):await z({type:"enter",url:jt(k.hash?Nn(new URL(location.href)):location.href),replace_state:!0}),Pn()}function En(){mt.length=0,qt=!1}function Se(t){wt.some(e=>e==null?void 0:e.snapshot)&&(Z[t]=wt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Re(t){var e;(e=Z[t])==null||e.forEach((n,a)=>{var r,s;(s=(r=wt[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function oe(){Vt(S),Zt(ge,B),Se(T),Zt(pe,Z)}async function Gt(t,e,n,a){return z({type:"goto",url:jt(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:a,accept:()=>{e.invalidateAll&&(qt=!0),e.invalidate&&e.invalidate.forEach(xn)}})}async function Sn(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:Le({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Tt(t){var n;const e=(n=await Et(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(a=>a==null?void 0:a[1]()))}function Ie(t,e,n){var r;v=t.state;const a=document.querySelector("style[data-sveltekit]");if(a&&a.remove(),Object.assign(U,t.props.page),Ee=new k.root({target:e,props:{...t.props,stores:$,components:wt},hydrate:n,sync:!1}),Re(T),n){const s={from:null,to:{params:v.params,route:{id:((r=v.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(s))}yt=!0}function _t({url:t,params:e,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=je(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:r,route:s},props:{constructors:hn(n).map(f=>f.node.component),page:Yt(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],p=v.branch[f];(m==null?void 0:m.data)!==(p==null?void 0:p.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||t.href!==v.url.href||v.error!==r||i!==void 0&&i!==U.form||d)&&(c.props.page={error:r,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:d?l:U.data}),c}async function Ht({loader:t,parent:e,url:n,params:a,route:r,server_data_node:s}){var d,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let f=function(...p){for(const h of p){const{href:_}=new URL(h,n);c.dependencies.add(_)}};const m={route:new Proxy(r,{get:(p,h)=>(o&&(c.route=!0),p[h])}),params:new Proxy(a,{get:(p,h)=>(o&&c.params.add(h),p[h])}),data:(s==null?void 0:s.data)??null,url:Fe(n,()=>{o&&(c.url=!0)},p=>{o&&c.search_params.add(p)},k.hash),async fetch(p,h){p instanceof Request&&(h={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:[...p.headers].length?p.headers:void 0,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...h});const{resolved:_,promise:R}=Ue(p,h,n);return o&&f(_.href),R},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(p){o=!1;try{return p()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Ue(t,e,n){let a=t instanceof Request?t.url:t;const r=new URL(a,n);r.origin===n.origin&&(a=r.href.slice(n.origin.length));const s=yt?Ge(a,r.href,e):qe(a,e);return{resolved:r,promise:s}}function se(t,e,n,a,r,s){if(qt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&e||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==v.params[i])return!0;for(const i of r.dependencies)if(mt.some(o=>o(new URL(i))))return!0;return!1}function Kt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Rn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const a of n){const r=t.searchParams.getAll(a),s=e.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function ie({error:t,url:e,route:n,params:a}){return{type:"loaded",state:{error:t,url:e,route:n,params:a,branch:[]},props:{page:Yt(U),constructors:[]}}}async function Le({id:t,invalidating:e,url:n,params:a,route:r,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=r,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const u=v.url?t!==vt(v.url):!1,w=v.route?r.id!==v.route.id:!1,f=Rn(v.url,n);let m=!1;const p=l.map((g,y)=>{var D;const b=v.branch[y],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||se(m,w,u,f,(D=b.server)==null?void 0:D.uses,a));return E&&(m=!0),E});if(p.some(Boolean)){try{d=await Pe(n,p)}catch(g){const y=await G(g,{url:n,params:a,route:{id:t}});return J.has(s)?ie({error:y,url:n,params:a,route:r}):kt({status:pt(g),error:y,url:n,route:r})}if(d.type==="redirect")return d}const h=d==null?void 0:d.nodes;let _=!1;const R=l.map(async(g,y)=>{var St;if(!g)return;const b=v.branch[y],E=h==null?void 0:h[y];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!se(_,w,u,f,(St=b.universal)==null?void 0:St.uses,a))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Ht({loader:g[1],url:n,params:a,route:r,parent:async()=>{var zt;const Jt={};for(let Rt=0;Rt<y;Rt+=1)Object.assign(Jt,(zt=await R[Rt])==null?void 0:zt.data);return Jt},server_data_node:Kt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of R)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await R[g])}catch(y){if(y instanceof Dt)return{type:"redirect",location:y.location};if(J.has(s))return ie({error:await G(y,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let b=pt(y),E;if(h!=null&&h.includes(y))b=y.status??b,E=y.error;else if(y instanceof At)E=y.body;else{if(await $.updated.check())return await be(),await H(n);E=await G(y,{params:a,url:n,route:{id:r.id}})}const D=await In(g,I,i);return D?_t({url:n,params:a,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:r}):await xe(n,{id:r.id},E,b)}else I.push(void 0);return _t({url:n,params:a,branch:I,status:200,error:null,route:r,form:e?void 0:null})}async function In(t,e,n){for(;t--;)if(n[t]){let a=t;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function kt({status:t,error:e,url:n,route:a}){const r={};let s=null;if(k.server_loads[0]===0)try{const o=await Pe(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ut||n.pathname!==location.pathname||Mt)&&await H(n)}try{const o=await Ht({loader:Pt,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Kt(s)}),c={node:await gt(),loader:gt,universal:null,server:null,data:null};return _t({url:n,params:r,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Dt)return Gt(new URL(o.location,location.href),{},0);throw o}}async function Un(t){const e=t.href;if(ht.has(e))return ht.get(e);let n;try{const a=(async()=>{let r=await k.hooks.reroute({url:new URL(t),fetch:async(s,i)=>Ue(s,i,t).promise})??t;if(typeof r=="string"){const s=new URL(t);k.hash?s.hash=r:s.pathname=r,r=s}return r})();ht.set(e,a),n=await a}catch{ht.delete(e);return}return n}async function Et(t,e){if(t&&!bt(t,x,k.hash)){const n=await Un(t);if(!n)return;const a=Ln(n);for(const r of Bt){const s=r.exec(a);if(s)return{id:vt(t),invalidating:e,route:r,params:De(s),url:t}}}}function Ln(t){return $e(k.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function vt(t){return(k.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Te({url:t,type:e,intent:n,delta:a}){let r=!1;const s=Wt(v,n,t,e);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return tt||Ae.forEach(o=>o(i)),r?null:s}async function z({type:t,url:e,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=re,block:d=re}){const u=V;V=c;const w=await Et(e,!1),f=t==="enter"?Wt(v,w,e,t):Te({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){d(),V===c&&(V=u);return}const m=S,p=T;l(),tt=!0,yt&&f.navigation.type!=="enter"&&$.navigating.set(Q.current=f.navigation);let h=w&&await Le(w);if(!h){if(bt(e,x,k.hash))return await H(e);h=await xe(e,{id:null},await G(new Ft(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,V!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await kt({status:500,error:await G(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Gt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await be(),await H(e));if(En(),Vt(m),Se(p),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,y={[q]:S+=g,[X]:T+=g,[me]:i};(s?history.replaceState:history.pushState).call(history,y,"",e),s||An(S,T)}if(L=null,h.props.page.state=i,yt){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(kn,y=>y(f.navigation)))).filter(y=>typeof y=="function");if(g.length>0){let y=function(){g.forEach(b=>{Y.delete(b)})};g.push(y),g.forEach(b=>{Y.add(b)})}Ee.$set(h.props),wn(h.props.page),ke=!0}else Ie(h,Ct,!1);const{activeElement:_}=document;await Ne();const R=n?n.scroll:r?$t():null;if(ae){const g=e.hash&&document.getElementById(decodeURIComponent(k.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));R?scrollTo(R.x,R.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==_&&document.activeElement!==document.body;!a&&!I&&On(),ae=!0,h.props.page&&Object.assign(U,h.props.page),tt=!1,t==="popstate"&&Re(T),f.fulfil(void 0),Y.forEach(g=>g(f.navigation)),$.navigating.set(Q.current=null)}async function xe(t,e,n,a){return t.origin===ut&&t.pathname===location.pathname&&!Mt?await kt({status:a,error:n,url:t,route:e}):await H(t)}function Tn(){let t,e,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(t),t=setTimeout(()=>{s(c,F.hover)},20)});function a(o){o.defaultPrevented||s(o.composedPath()[0],F.tap)}j.addEventListener("mousedown",a),j.addEventListener("touchstart",a,{passive:!0});const r=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(Tt(new URL(c.target.href)),r.unobserve(c.target))},{threshold:0});async function s(o,c){const l=ye(o,j),d=l===e&&c>=n;if(!l||d)return;const{url:u,external:w,download:f}=xt(l,x,k.hash);if(w||f)return;const m=dt(l),p=u&&vt(v.url)===vt(u);if(!(m.reload||p))if(c<=m.preload_data){e=l,n=F.tap;const h=await Et(u,!1);if(!h)return;Sn(h)}else c<=m.preload_code&&(e=l,n=c,Tt(u))}function i(){r.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:d}=xt(o,x,k.hash);if(l||d)continue;const u=dt(o);u.reload||(u.preload_code===F.viewport&&r.observe(o),u.preload_code===F.eager&&Tt(c))}}Y.add(i),i()}function G(t,e){if(t instanceof At)return t.body;const n=pt(t),a=gn(t);return k.hooks.handleError({error:t,event:e,status:n,message:a})??{message:a}}function qn(t,e={}){return t=new URL(jt(t)),t.origin!==ut?Promise.reject(new Error("goto: invalid URL")):Gt(t,e,0)}function xn(t){if(typeof t=="function")mt.push(t);else{const{href:e}=new URL(t,location.href);mt.push(n=>n.href===e)}}function Pn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(oe(),!tt){const r=Wt(v,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};Ae.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&oe()}),(e=navigator.connection)!=null&&e.saveData||Tn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=ye(n.composedPath()[0],j);if(!a)return;const{url:r,external:s,target:i,download:o}=xt(a,x,k.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=dt(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[d,u]=(k.hash?r.hash.replace(/^#/,""):r.href).split("#"),w=d===It(location);if(s||c.reload&&(!w||!u)){Te({url:r,type:"link"})?tt=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,Vt(S),t(r),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await z({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(bt(o,x,!1))return;const c=n.target,l=dt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=r==null?void 0:r.getAttribute("name");u&&d.append(u,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),z({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[q]){const r=n.state[q];if(V={},r===S)return;const s=B[r],i=n.state[me]??{},o=new URL(n.state[Ze]??location.href),c=n.state[X],l=v.url?It(location)===It(v.url):!1;if(c===T&&(ke||l)){i!==U.state&&(U.state=i),t(o),B[S]=$t(),s&&scrollTo(s.x,s.y),S=r;return}const u=r-S;await z({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{S=r,T=c},block:()=>{history.go(-u)},nav_token:V})}else if(!K){const r=new URL(location.href);t(r),k.hash&&location.reload()}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[q]:++S,[X]:T},"",location.href))});for(const n of document.querySelectorAll("link"))bn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Q.current=null)});function t(n){v.url=U.url=n,$.page.set(Yt(U)),$.page.notify()}}async function Cn(t,{status:e=200,error:n,node_ids:a,params:r,route:s,server_route:i,data:o,form:c}){Mt=!0;const l=new URL(location.href);let d;({params:r={},route:s={id:null}}=await Et(l,!1)||{}),d=Bt.find(({id:f})=>f===s.id);let u,w=!0;try{const f=a.map(async(p,h)=>{const _=o[h];return _!=null&&_.uses&&(_.uses=Ce(_.uses)),Ht({loader:k.nodes[p],url:l,params:r,route:s,parent:async()=>{const R={};for(let I=0;I<h;I+=1)Object.assign(R,(await f[I]).data);return R},server_data_node:Kt(_)})}),m=await Promise.all(f);if(d){const p=d.layouts;for(let h=0;h<p.length;h++)p[h]||m.splice(h,0,void 0)}u=_t({url:l,params:r,branch:m,status:e,error:n,form:c,route:d??null})}catch(f){if(f instanceof Dt){await H(new URL(f.location,location.href));return}u=await kt({status:pt(f),error:await G(f,{url:l,params:r,route:s}),url:l,route:s}),t.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Ie(u,t,w)}async function Pe(t,e){var s;const n=new URL(t);n.pathname=vn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(pn,"1"),n.searchParams.append(dn,e.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new At(r.status,i)}return new Promise(async i=>{var w;const o=new Map,c=r.body.getReader(),l=new TextDecoder;function d(f){return fn(f,{...k.decoders,Promise:m=>new Promise((p,h)=>{o.set(m,{fulfil:p,reject:h})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const p=u.indexOf(`
`);if(p===-1)break;const h=JSON.parse(u.slice(0,p));if(u=u.slice(p+1),h.type==="redirect")return i(h);if(h.type==="data")(w=h.nodes)==null||w.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Ce(_.uses),_.data=d(_.data))}),i(h);else if(h.type==="chunk"){const{id:_,data:R,error:I}=h,g=o.get(_);o.delete(_),I?g.reject(d(I)):g.fulfil(d(R))}}}})}function Ce(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function On(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function Wt(t,e,n,a){var c,l;let r,s;const i=new Promise((d,u)=>{r=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:a,complete:i},fulfil:r,reject:s}}function Yt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Nn(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Mn as a,qn as g,Dn as l,U as p,$ as s};
