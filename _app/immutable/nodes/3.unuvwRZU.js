import{t as s,a as p}from"../chunks/DlUoe6oq.js";import{i}from"../chunks/BqzgQrvp.js";import{p as c,o as m,a as f}from"../chunks/IDmWtmY4.js";import{g as e}from"../chunks/BPQSsSeE.js";import{e as g,T as l,g as d}from"../chunks/DP2ydwBf.js";var u=s("<p>Подождите, выполняется авторизация...</p>");function y(r,t){c(t,!1),m(async()=>{const a=new URL(window.location.href).searchParams.get("code");if(!a){console.error("Missing code"),e("/");return}let o=await g(a);console.log(o),o instanceof l&&d.update(w=>o),e("/")}),i();var n=u();p(r,n),f()}export{y as component};
