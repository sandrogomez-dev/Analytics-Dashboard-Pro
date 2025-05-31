import{r as u,a as se,R as U}from"./vendor-b993c031.js";import{M as ae,T as re,a as J,B as le,U as z,D as ne,C as ie}from"./ui-d2d696e5.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(l){if(l.ep)return;l.ep=!0;const t=r(l);fetch(l.href,t)}})();var q={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe=u,ce=Symbol.for("react.element"),de=Symbol.for("react.fragment"),ue=Object.prototype.hasOwnProperty,me=oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pe={key:!0,ref:!0,__self:!0,__source:!0};function K(e,a,r){var n,l={},t=null,i=null;r!==void 0&&(t=""+r),a.key!==void 0&&(t=""+a.key),a.ref!==void 0&&(i=a.ref);for(n in a)ue.call(a,n)&&!pe.hasOwnProperty(n)&&(l[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps,a)l[n]===void 0&&(l[n]=a[n]);return{$$typeof:ce,type:e,key:t,ref:i,props:l,_owner:me.current}}P.Fragment=de;P.jsx=K;P.jsxs=K;q.exports=P;var s=q.exports,_={},V=se;_.createRoot=V.createRoot,_.hydrateRoot=V.hydrateRoot;let xe={data:""},he=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||xe,fe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ge=/\/\*[^]*?\*\/|  +/g,B=/\n+/g,N=(e,a)=>{let r="",n="",l="";for(let t in e){let i=e[t];t[0]=="@"?t[1]=="i"?r=t+" "+i+";":n+=t[1]=="f"?N(i,t):t+"{"+N(i,t[1]=="k"?"":a)+"}":typeof i=="object"?n+=N(i,a?a.replace(/([^,])+/g,o=>t.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,o):o?o+" "+d:d)):t):i!=null&&(t=/^--/.test(t)?t:t.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=N.p?N.p(t,i):t+":"+i+";")}return r+(a&&l?a+"{"+l+"}":l)+n},y={},Y=e=>{if(typeof e=="object"){let a="";for(let r in e)a+=r+Y(e[r]);return a}return e},ve=(e,a,r,n,l)=>{let t=Y(e),i=y[t]||(y[t]=(d=>{let c=0,m=11;for(;c<d.length;)m=101*m+d.charCodeAt(c++)>>>0;return"go"+m})(t));if(!y[i]){let d=t!==e?e:(c=>{let m,p,x=[{}];for(;m=fe.exec(c.replace(ge,""));)m[4]?x.shift():m[3]?(p=m[3].replace(B," ").trim(),x.unshift(x[0][p]=x[0][p]||{})):x[0][m[1]]=m[2].replace(B," ").trim();return x[0]})(e);y[i]=N(l?{["@keyframes "+i]:d}:d,r?"":"."+i)}let o=r&&y.g?y.g:null;return r&&(y.g=y[i]),((d,c,m,p)=>{p?c.data=c.data.replace(p,d):c.data.indexOf(d)===-1&&(c.data=m?d+c.data:c.data+d)})(y[i],a,n,o),i},be=(e,a,r)=>e.reduce((n,l,t)=>{let i=a[t];if(i&&i.call){let o=i(r),d=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=d?"."+d:o&&typeof o=="object"?o.props?"":N(o,""):o===!1?"":o}return n+l+(i??"")},"");function T(e){let a=this||{},r=e.call?e(a.p):e;return ve(r.unshift?r.raw?be(r,[].slice.call(arguments,1),a.p):r.reduce((n,l)=>Object.assign(n,l&&l.call?l(a.p):l),{}):r,he(a.target),a.g,a.o,a.k)}let X,F,I;T.bind({g:1});let j=T.bind({k:1});function ye(e,a,r,n){N.p=a,X=e,F=r,I=n}function k(e,a){let r=this||{};return function(){let n=arguments;function l(t,i){let o=Object.assign({},t),d=o.className||l.className;r.p=Object.assign({theme:F&&F()},o),r.o=/ *go\d+/.test(d),o.className=T.apply(r,n)+(d?" "+d:""),a&&(o.ref=i);let c=e;return e[0]&&(c=o.as||e,delete o.as),I&&c[0]&&I(o),X(c,o)}return a?a(l):l}}var je=e=>typeof e=="function",M=(e,a)=>je(e)?e(a):e,Ne=(()=>{let e=0;return()=>(++e).toString()})(),Z=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");e=!a||a.matches}return e}})(),ke=20,G=(e,a)=>{switch(a.type){case 0:return{...e,toasts:[a.toast,...e.toasts].slice(0,ke)};case 1:return{...e,toasts:e.toasts.map(t=>t.id===a.toast.id?{...t,...a.toast}:t)};case 2:let{toast:r}=a;return G(e,{type:e.toasts.find(t=>t.id===r.id)?1:0,toast:r});case 3:let{toastId:n}=a;return{...e,toasts:e.toasts.map(t=>t.id===n||n===void 0?{...t,dismissed:!0,visible:!1}:t)};case 4:return a.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(t=>t.id!==a.toastId)};case 5:return{...e,pausedAt:a.time};case 6:let l=a.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(t=>({...t,pauseDuration:t.pauseDuration+l}))}}},L=[],w={toasts:[],pausedAt:void 0},$=e=>{w=G(w,e),L.forEach(a=>{a(w)})},we={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$e=(e={})=>{let[a,r]=u.useState(w),n=u.useRef(w);u.useEffect(()=>(n.current!==w&&r(w),L.push(r),()=>{let t=L.indexOf(r);t>-1&&L.splice(t,1)}),[]);let l=a.toasts.map(t=>{var i,o,d;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||((i=e[t.type])==null?void 0:i.removeDelay)||e?.removeDelay,duration:t.duration||((o=e[t.type])==null?void 0:o.duration)||e?.duration||we[t.type],style:{...e.style,...(d=e[t.type])==null?void 0:d.style,...t.style}}});return{...a,toasts:l}},Ee=(e,a="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Ne()}),D=e=>(a,r)=>{let n=Ee(a,e,r);return $({type:2,toast:n}),n.id},h=(e,a)=>D("blank")(e,a);h.error=D("error");h.success=D("success");h.loading=D("loading");h.custom=D("custom");h.dismiss=e=>{$({type:3,toastId:e})};h.remove=e=>$({type:4,toastId:e});h.promise=(e,a,r)=>{let n=h.loading(a.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(l=>{let t=a.success?M(a.success,l):void 0;return t?h.success(t,{id:n,...r,...r?.success}):h.dismiss(n),l}).catch(l=>{let t=a.error?M(a.error,l):void 0;t?h.error(t,{id:n,...r,...r?.error}):h.dismiss(n)}),e};var Se=(e,a)=>{$({type:1,toast:{id:e,height:a}})},Oe=()=>{$({type:5,time:Date.now()})},O=new Map,De=1e3,Ce=(e,a=De)=>{if(O.has(e))return;let r=setTimeout(()=>{O.delete(e),$({type:4,toastId:e})},a);O.set(e,r)},Le=e=>{let{toasts:a,pausedAt:r}=$e(e);u.useEffect(()=>{if(r)return;let t=Date.now(),i=a.map(o=>{if(o.duration===1/0)return;let d=(o.duration||0)+o.pauseDuration-(t-o.createdAt);if(d<0){o.visible&&h.dismiss(o.id);return}return setTimeout(()=>h.dismiss(o.id),d)});return()=>{i.forEach(o=>o&&clearTimeout(o))}},[a,r]);let n=u.useCallback(()=>{r&&$({type:6,time:Date.now()})},[r]),l=u.useCallback((t,i)=>{let{reverseOrder:o=!1,gutter:d=8,defaultPosition:c}=i||{},m=a.filter(f=>(f.position||c)===(t.position||c)&&f.height),p=m.findIndex(f=>f.id===t.id),x=m.filter((f,E)=>E<p&&f.visible).length;return m.filter(f=>f.visible).slice(...o?[x+1]:[0,x]).reduce((f,E)=>f+(E.height||0)+d,0)},[a]);return u.useEffect(()=>{a.forEach(t=>{if(t.dismissed)Ce(t.id,t.removeDelay);else{let i=O.get(t.id);i&&(clearTimeout(i),O.delete(t.id))}})},[a]),{toasts:a,handlers:{updateHeight:Se,startPause:Oe,endPause:n,calculateOffset:l}}},Me=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Pe=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ae=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Pe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Te} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Re=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_e=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Re} 1s linear infinite;
`,Fe=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ie=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ue=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Fe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ie} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ze=k("div")`
  position: absolute;
`,Ve=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Be=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,We=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,He=({toast:e})=>{let{icon:a,type:r,iconTheme:n}=e;return a!==void 0?typeof a=="string"?u.createElement(We,null,a):a:r==="blank"?null:u.createElement(Ve,null,u.createElement(_e,{...n}),r!=="loading"&&u.createElement(ze,null,r==="error"?u.createElement(Ae,{...n}):u.createElement(Ue,{...n})))},Je=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ke="0%{opacity:0;} 100%{opacity:1;}",Ye="0%{opacity:1;} 100%{opacity:0;}",Xe=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ze=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ge=(e,a)=>{let r=e.includes("top")?1:-1,[n,l]=Z()?[Ke,Ye]:[Je(r),qe(r)];return{animation:a?`${j(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Qe=u.memo(({toast:e,position:a,style:r,children:n})=>{let l=e.height?Ge(e.position||a||"top-center",e.visible):{opacity:0},t=u.createElement(He,{toast:e}),i=u.createElement(Ze,{...e.ariaProps},M(e.message,e));return u.createElement(Xe,{className:e.className,style:{...l,...r,...e.style}},typeof n=="function"?n({icon:t,message:i}):u.createElement(u.Fragment,null,t,i))});ye(u.createElement);var et=({id:e,className:a,style:r,onHeightUpdate:n,children:l})=>{let t=u.useCallback(i=>{if(i){let o=()=>{let d=i.getBoundingClientRect().height;n(e,d)};o(),new MutationObserver(o).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return u.createElement("div",{ref:t,className:a,style:r},l)},tt=(e,a)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(r?1:-1)}px)`,...n,...l}},st=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,C=16,at=({reverseOrder:e,position:a="top-center",toastOptions:r,gutter:n,children:l,containerStyle:t,containerClassName:i})=>{let{toasts:o,handlers:d}=Le(r);return u.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:C,left:C,right:C,bottom:C,pointerEvents:"none",...t},className:i,onMouseEnter:d.startPause,onMouseLeave:d.endPause},o.map(c=>{let m=c.position||a,p=d.calculateOffset(c,{reverseOrder:e,gutter:n,defaultPosition:a}),x=tt(m,p);return u.createElement(et,{id:c.id,key:c.id,onHeightUpdate:d.updateHeight,className:c.visible?st:"",style:x},c.type==="custom"?M(c.message,c):l?l(c):u.createElement(Qe,{toast:c,position:m}))}))};const W=(e,a="number")=>{const r=typeof e=="string"?parseFloat(e):e;switch(a){case"currency":return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r);case"percentage":return`${r.toFixed(1)}%`;case"duration":const n=Math.floor(r/3600),l=Math.floor(r%3600/60);return n>0?`${n}h ${l}m`:`${l}m`;default:return r>=1e6?`${(r/1e6).toFixed(1)}M`:r>=1e3?`${(r/1e3).toFixed(1)}K`:r.toLocaleString()}},rt=e=>{switch(e){case"up":return s.jsx(J,{className:"h-4 w-4"});case"down":return s.jsx(re,{className:"h-4 w-4"});default:return s.jsx(ae,{className:"h-4 w-4"})}},lt=e=>{switch(e){case"up":return"text-emerald-600 dark:text-emerald-400";case"down":return"text-red-600 dark:text-red-400";default:return"text-slate-600 dark:text-slate-400"}},Q=U.memo(({title:e,value:a,previousValue:r,unit:n,trend:l="neutral",changePercentage:t,format:i="number",loading:o=!1})=>{if(o)return s.jsxs("div",{className:"card p-6 space-y-2",children:[s.jsx("div",{className:"h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),s.jsx("div",{className:"h-8 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"}),s.jsx("div",{className:"h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2 animate-pulse"})]});const d=W(a,i),c=lt(l),m=rt(l);return s.jsxs("div",{className:"card p-6 space-y-2 hover:shadow-card-hover transition-shadow duration-200",children:[s.jsx("h3",{className:"text-sm font-medium text-slate-600 dark:text-slate-400",children:e}),s.jsxs("div",{className:"flex items-baseline justify-between",children:[s.jsxs("p",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100",children:[d,n&&s.jsx("span",{className:"ml-1 text-sm font-normal text-slate-500 dark:text-slate-400",children:n})]}),t!==void 0&&s.jsxs("div",{className:`flex items-center gap-1 text-xs font-medium ${c}`,children:[m,s.jsxs("span",{children:[t>0?"+":"",t.toFixed(1),"%"]})]})]}),r&&s.jsxs("p",{className:"text-xs text-slate-500 dark:text-slate-400",children:["vs ",W(r,i)," previous period"]})]})});Q.displayName="MetricCard";const S=U.forwardRef(({className:e="",variant:a="primary",size:r="md",loading:n=!1,children:l,disabled:t,...i},o)=>{const d="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",c={primary:"bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",danger:"bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"},m={sm:"h-8 px-3 text-xs",md:"h-9 px-4 py-2 text-sm",lg:"h-10 px-8 text-base"},p=[d,c[a],m[r],e].filter(Boolean).join(" ");return s.jsxs("button",{ref:o,className:p,disabled:t||n,...i,children:[n&&s.jsx("div",{className:"mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"}),l]})});S.displayName="Button";const H=({data:e,type:a="line",height:r=200,color:n="#14b8a6",className:l=""})=>{if(!e||e.length===0)return s.jsx("div",{className:`flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded ${l}`,style:{height:r},children:s.jsx("p",{className:"text-slate-500 dark:text-slate-400",children:"No data available"})});const t=Math.max(...e.map(g=>g.value)),i=Math.min(...e.map(g=>g.value)),o=t-i||1,d=400,c=40,m=d-c*2,p=r-c*2,x=g=>c+g*m/(e.length-1),f=g=>c+p-(g-i)/o*p;if(a==="line"){const g=e.map((v,b)=>{const A=x(b),R=f(v.value);return`${b===0?"M":"L"} ${A} ${R}`}).join(" ");return s.jsxs("div",{className:`relative ${l}`,children:[s.jsxs("svg",{width:"100%",height:r,viewBox:`0 0 ${d} ${r}`,children:[s.jsx("defs",{children:s.jsx("pattern",{id:"grid",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:s.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"currentColor",strokeWidth:"0.5",className:"text-slate-200 dark:text-slate-700"})})}),s.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),s.jsx("path",{d:g,fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.map((v,b)=>s.jsx("circle",{cx:x(b),cy:f(v.value),r:"4",fill:n,className:"hover:r-6 transition-all duration-200"},b)),s.jsx("text",{x:c-10,y:c,textAnchor:"end",className:"text-xs fill-slate-600 dark:fill-slate-400",children:t.toLocaleString()}),s.jsx("text",{x:c-10,y:r-c,textAnchor:"end",className:"text-xs fill-slate-600 dark:fill-slate-400",children:i.toLocaleString()})]}),s.jsx("div",{className:"flex justify-between mt-2 px-10",children:e.map((v,b)=>s.jsx("span",{className:"text-xs text-slate-600 dark:text-slate-400",children:v.label},b))})]})}const E=m/e.length*.8,te=m/e.length*.2;return s.jsxs("div",{className:`relative ${l}`,children:[s.jsxs("svg",{width:"100%",height:r,viewBox:`0 0 ${d} ${r}`,children:[s.jsx("defs",{children:s.jsx("pattern",{id:"grid-bar",width:"40",height:"40",patternUnits:"userSpaceOnUse",children:s.jsx("path",{d:"M 40 0 L 0 0 0 40",fill:"none",stroke:"currentColor",strokeWidth:"0.5",className:"text-slate-200 dark:text-slate-700"})})}),s.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid-bar)"}),e.map((g,v)=>{const b=(g.value-i)/o*p,A=c+v*(E+te),R=r-c-b;return s.jsx("rect",{x:A,y:R,width:E,height:b,fill:n,className:"hover:opacity-80 transition-opacity duration-200",rx:"2"},v)}),s.jsx("text",{x:c-10,y:c,textAnchor:"end",className:"text-xs fill-slate-600 dark:fill-slate-400",children:t.toLocaleString()}),s.jsx("text",{x:c-10,y:r-c,textAnchor:"end",className:"text-xs fill-slate-600 dark:fill-slate-400",children:i.toLocaleString()})]}),s.jsx("div",{className:"flex justify-between mt-2 px-10",children:e.map((g,v)=>s.jsx("span",{className:"text-xs text-slate-600 dark:text-slate-400",children:g.label},v))})]})},nt=[{id:"revenue",title:"Total Revenue",value:45231.89,previousValue:42150.32,format:"currency",trend:"up",changePercentage:7.3},{id:"users",title:"Active Users",value:2350,previousValue:2180,format:"number",trend:"up",changePercentage:7.8},{id:"conversion",title:"Conversion Rate",value:3.24,previousValue:2.98,format:"percentage",trend:"up",changePercentage:8.7},{id:"session",title:"Avg Session Duration",value:245,previousValue:238,format:"duration",trend:"up",changePercentage:2.9}],it=[{label:"Jan",value:35e3},{label:"Feb",value:42e3},{label:"Mar",value:38e3},{label:"Apr",value:45e3},{label:"May",value:52e3},{label:"Jun",value:48e3},{label:"Jul",value:55e3}],ot=[{label:"Mon",value:1200},{label:"Tue",value:1800},{label:"Wed",value:2100},{label:"Thu",value:2350},{label:"Fri",value:2800},{label:"Sat",value:1900},{label:"Sun",value:1400}],ct=()=>{const[e,a]=u.useState(!0),[r,n]=u.useState(!1);u.useEffect(()=>{const t=setTimeout(()=>a(!1),1500);return()=>clearTimeout(t)},[]),u.useEffect(()=>{const t=()=>{const o=document.documentElement.classList.contains("dark");n(o)};t();const i=new MutationObserver(t);return i.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>i.disconnect()},[]);const l=()=>{const t=document.documentElement,o=(t.classList.contains("dark")?"dark":"light")==="dark"?"light":"dark";t.classList.remove("light","dark"),t.classList.add(o),localStorage.setItem("theme",o)};return s.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-950",children:[s.jsx("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700",children:s.jsx("div",{className:"container-dashboard py-4",children:s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 bg-teal-100 dark:bg-teal-900 rounded-lg",children:s.jsx(le,{className:"h-6 w-6 text-teal-600 dark:text-teal-400"})}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-2xl font-bold text-slate-900 dark:text-slate-100",children:"Analytics Dashboard Pro"}),s.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"Real-time insights and performance metrics"})]})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx(S,{variant:"ghost",size:"sm",onClick:l,className:"p-2",children:r?"☀️":"🌙"}),s.jsx(S,{variant:"primary",size:"sm",children:"Export Report"})]})]})})}),s.jsxs("main",{className:"container-dashboard py-8",children:[s.jsxs("section",{className:"mb-8",children:[s.jsxs("div",{className:"flex items-center justify-between mb-6",children:[s.jsx("h2",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100",children:"Key Performance Metrics"}),s.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400",children:[s.jsx("div",{className:"h-2 w-2 bg-emerald-500 rounded-full animate-pulse"}),"Live Data"]})]}),s.jsx("div",{className:"grid-metrics",children:nt.map(t=>s.jsx(Q,{title:t.title,value:t.value,previousValue:t.previousValue,format:t.format,trend:t.trend,changePercentage:t.changePercentage,loading:e},t.id))})]}),s.jsxs("section",{className:"mb-8",children:[s.jsx("h2",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6",children:"Analytics Overview"}),s.jsxs("div",{className:"grid-charts",children:[s.jsxs("div",{className:"card p-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-base font-medium text-slate-900 dark:text-slate-100",children:"Revenue Trend"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(J,{className:"h-4 w-4 text-emerald-500"}),s.jsx("span",{className:"text-sm text-emerald-600 dark:text-emerald-400",children:"+12.5%"})]})]}),e?s.jsx("div",{className:"h-64 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"}):s.jsx(H,{data:it,type:"line",height:250,color:"#14b8a6"})]}),s.jsxs("div",{className:"card p-6",children:[s.jsxs("div",{className:"flex items-center justify-between mb-4",children:[s.jsx("h3",{className:"text-base font-medium text-slate-900 dark:text-slate-100",children:"User Activity"}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(z,{className:"h-4 w-4 text-blue-500"}),s.jsx("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:"2,350 active"})]})]}),e?s.jsx("div",{className:"h-64 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"}):s.jsx(H,{data:ot,type:"bar",height:250,color:"#3b82f6"})]})]})]}),s.jsxs("section",{className:"mb-8",children:[s.jsx("h2",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6",children:"Performance Summary"}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[s.jsxs("div",{className:"card p-6",children:[s.jsx("h3",{className:"text-base font-medium text-slate-900 dark:text-slate-100 mb-4",children:"Conversion Funnel"}),s.jsx("div",{className:"space-y-3",children:[{stage:"Visitors",value:1e4,percentage:100},{stage:"Leads",value:2500,percentage:25},{stage:"Prospects",value:750,percentage:7.5},{stage:"Customers",value:324,percentage:3.24}].map((t,i)=>s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-400",children:t.stage}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-32 bg-slate-200 dark:bg-slate-700 rounded-full h-2",children:s.jsx("div",{className:"bg-teal-500 h-2 rounded-full transition-all duration-500",style:{width:`${t.percentage}%`}})}),s.jsx("span",{className:"text-sm font-medium text-slate-900 dark:text-slate-100 w-16 text-right",children:t.value.toLocaleString()})]})]},i))})]}),s.jsxs("div",{className:"card p-6",children:[s.jsx("h3",{className:"text-base font-medium text-slate-900 dark:text-slate-100 mb-4",children:"Top Traffic Channels"}),s.jsx("div",{className:"space-y-3",children:[{channel:"Organic Search",value:45,color:"bg-emerald-500"},{channel:"Direct",value:25,color:"bg-blue-500"},{channel:"Social Media",value:18,color:"bg-purple-500"},{channel:"Email",value:12,color:"bg-amber-500"}].map((t,i)=>s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:`w-3 h-3 rounded-full ${t.color}`}),s.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-400",children:t.channel})]}),s.jsxs("span",{className:"text-sm font-medium text-slate-900 dark:text-slate-100",children:[t.value,"%"]})]},i))})]})]})]}),s.jsxs("section",{children:[s.jsx("h2",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6",children:"Quick Actions"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[s.jsxs(S,{variant:"secondary",className:"p-4 h-auto flex-col gap-2",children:[s.jsx(ne,{className:"h-6 w-6"}),s.jsx("span",{children:"Generate Revenue Report"})]}),s.jsxs(S,{variant:"secondary",className:"p-4 h-auto flex-col gap-2",children:[s.jsx(z,{className:"h-6 w-6"}),s.jsx("span",{children:"User Analytics"})]}),s.jsxs(S,{variant:"secondary",className:"p-4 h-auto flex-col gap-2",children:[s.jsx(ie,{className:"h-6 w-6"}),s.jsx("span",{children:"Performance Metrics"})]})]})]})]})]})};function dt(){return u.useEffect(()=>{const e=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e||(a?"dark":"light");if(document.documentElement.classList.remove("light","dark"),document.documentElement.classList.add(r),"PerformanceObserver"in window){const n=new PerformanceObserver(l=>{l.getEntries().forEach(t=>{t.entryType})});try{return n.observe({type:"navigation",buffered:!0}),()=>n.disconnect()}catch{return}}},[]),s.jsx("div",{className:"min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-200",children:s.jsx(ct,{})})}const ee=document.getElementById("root");if(!ee)throw new Error("Root element not found");const ut=_.createRoot(ee);ut.render(s.jsxs(U.StrictMode,{children:[s.jsx(dt,{}),s.jsx(at,{position:"top-right",toastOptions:{duration:4e3,style:{background:"rgb(var(--color-surface))",color:"rgb(var(--color-text))",border:"1px solid rgb(var(--color-text-muted) / 0.2)"}}})]}));
