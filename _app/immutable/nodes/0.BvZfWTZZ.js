import{c as i,a as c}from"../chunks/DlUoe6oq.js";import{k as f,E as l,l as p,n as m,m as h,q as u,s as T,p as g,o as k,t as d,a as v}from"../chunks/IDmWtmY4.js";import{T as E,g as _}from"../chunks/DP2ydwBf.js";function y(r,e,...t){var s=r,o=m,a;f(()=>{o!==(o=e())&&(a&&(h(a),a=null),a=p(()=>o(s,...t)))},l),u&&(s=T)}function w(r,e){g(e,!0),k(()=>{let o=null;const a=localStorage.getItem("ghToken");if(a)try{const n=JSON.parse(a);n!=null&&n.AccessToken&&(n!=null&&n.ExpiresIn)&&(o=new E(n.AccessToken,n.ExpiresIn))}catch{console.warn("Invalid token format in localStorage")}_.set(o)});var t=i(),s=d(t);y(s,()=>e.children),c(r,t),v()}export{w as component};
