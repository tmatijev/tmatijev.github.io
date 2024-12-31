const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./home-CAgYNlnt.js","./vendor-Ox64Kbc6.js","./portfolio-nZJ2IcWE.js","./services-CsVfKJK8.js","./projects-B-E-6l9P.js","./contact-B3hNUvuz.js"])))=>i.map(i=>d[i]);
import{a as e,r as t,j as r,m as o,A as n}from"./vendor-Ox64Kbc6.js";import{u as i}from"./home-CAgYNlnt.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var s,l={};var a=function(){if(s)return l;s=1;var t=e();return l.createRoot=t.createRoot,l.hydrateRoot=t.hydrateRoot,l}();const c={},d=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),i=(null==n?void 0:n.nonce)||(null==n?void 0:n.getAttribute("nonce"));o=Promise.allSettled(t.map((t=>{if(t=function(e,t){return new URL(e,t).href}(t,r),t in c)return;c[t]=!0;const o=t.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(!!r)for(let r=e.length-1;r>=0;r--){const n=e[r];if(n.href===t&&(!o||"stylesheet"===n.rel))return}else if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");return s.rel=o?"stylesheet":"modulepreload",o||(s.as="script"),s.crossOrigin="",s.href=t,i&&s.setAttribute("nonce",i),document.head.appendChild(s),o?new Promise(((e,r)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}function n(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then((t=>{for(const e of t||[])"rejected"===e.status&&n(e.reason);return e().catch(n)}))};function u(){const[e,s]=t.useState(!1),{activeSection:l}=i(),a=[{id:"home",label:"Home"},{id:"portfolio",label:"Portfolio"},{id:"what-can-i-do",label:"Services"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],c=t.useCallback((e=>{var t;null==(t=document.getElementById(e))||t.scrollIntoView({behavior:"smooth",block:"start"}),s(!1)}),[]),d=({id:e,label:t})=>r.jsx("button",{onClick:()=>c(e),className:"text-gray-600 hover:text-blue-600 transition-colors "+(l===e?"text-blue-600 font-semibold":""),children:t}),u=({id:e,label:t})=>r.jsx("button",{onClick:()=>c(e),className:"block w-full text-left px-4 py-3 rounded-md text-base font-medium "+(l===e?"text-blue-600 bg-blue-50":"text-gray-600 hover:text-blue-600 hover:bg-blue-50"),children:t});return r.jsx(o.nav,{className:"fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm",initial:{y:-100},animate:{y:0},transition:{duration:.5},children:r.jsxs("div",{className:"max-w-6xl mx-auto px-6",children:[r.jsxs("div",{className:"flex items-center justify-between h-16",children:[r.jsx(o.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:"text-2xl font-bold text-blue-600 cursor-pointer",onClick:()=>c("home"),children:"TM"}),r.jsx("div",{className:"hidden md:flex items-center space-x-8",children:a.map((e=>r.jsx(d,{...e},e.id)))}),r.jsx("button",{onClick:()=>s(!e),className:"md:hidden text-gray-600 hover:text-blue-600 focus:outline-none","aria-label":"Toggle menu","aria-expanded":e,children:r.jsx("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})})]}),r.jsx(n,{children:e&&r.jsx(o.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"md:hidden bg-white absolute left-0 right-0 shadow-lg px-6",children:r.jsx("div",{className:"py-2 space-y-1",children:a.map((e=>r.jsx(u,{...e},e.id)))})})})]})})}const m=t.lazy((()=>d((()=>import("./home-CAgYNlnt.js").then((e=>e.H))),__vite__mapDeps([0,1]),import.meta.url))),h=t.lazy((()=>d((()=>import("./portfolio-nZJ2IcWE.js")),__vite__mapDeps([2,1,0]),import.meta.url))),x=t.lazy((()=>d((()=>import("./services-CsVfKJK8.js")),__vite__mapDeps([3,1]),import.meta.url))),f=t.lazy((()=>d((()=>import("./projects-B-E-6l9P.js")),__vite__mapDeps([4,1]),import.meta.url))),p=t.lazy((()=>d((()=>import("./contact-B3hNUvuz.js")),__vite__mapDeps([5,1]),import.meta.url))),j=()=>r.jsx("div",{className:"min-h-screen flex items-center justify-center",children:r.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"})});function b(){return r.jsxs("div",{className:"min-h-screen",children:[r.jsx(u,{}),r.jsx("section",{id:"home",children:r.jsx(t.Suspense,{fallback:r.jsx(j,{}),children:r.jsx(m,{})})}),r.jsx("section",{id:"portfolio",children:r.jsx(t.Suspense,{fallback:r.jsx(j,{}),children:r.jsx(h,{})})}),r.jsx("section",{id:"what-can-i-do",children:r.jsx(t.Suspense,{fallback:r.jsx(j,{}),children:r.jsx(x,{})})}),r.jsx("section",{id:"projects",children:r.jsx(t.Suspense,{fallback:r.jsx(j,{}),children:r.jsx(f,{})})}),r.jsx("section",{id:"contact",children:r.jsx(t.Suspense,{fallback:r.jsx(j,{}),children:r.jsx(p,{})})})]})}a.createRoot(document.getElementById("root")).render(r.jsx(t.StrictMode,{children:r.jsx(b,{})}));
