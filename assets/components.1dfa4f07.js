var V=Object.defineProperty;var u=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var v=(n,t,e)=>t in n?V(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,d=(n,t)=>{for(var e in t||(t={}))h.call(t,e)&&v(n,e,t[e]);if(u)for(var e of u(t))p.call(t,e)&&v(n,e,t[e]);return n};var m=(n,t)=>{var e={};for(var r in n)h.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&u)for(var r of u(n))t.indexOf(r)<0&&p.call(n,r)&&(e[r]=n[r]);return e};import{a as P,ap as w,o as f,D as A,E as $,G as B,B as l,r as M,aq as C,b as E,ar as x,n as g,a3 as O,as as y,e as N,at as U,U as W}from"./elevation.b6664af0.js";function G(n,t){return Array.isArray(t)?t.reduce((e,r)=>(e[r]=n[r],e),{}):n[t]}function j(n){const t=O(n),e=document.createElement("div");return document.body.appendChild(e),{instance:t.mount(e),unmount(){t.unmount(),document.body.removeChild(e)}}}function H(n,t={},e={}){const r={setup(){return()=>U(n,d(d({},t),e))}},{unmount:a}=j(r);return{unmountInstance:a}}function D(n){const t=[],e=r=>{if(r!=null&&r.component){e(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(a=>{W(a)&&(t.push(a),e(a))})};return e(n),t}function R(n){const t=M([]),e=l(),r=()=>{const s=D(e.subTree);t.sort((i,L)=>s.indexOf(i.vnode)-s.indexOf(L.vnode))};return C(n,{collect:s=>{t.push(s),r()},clear:s=>{y(t,s)},instances:t}),{length:E(()=>t.length)}}function S(n){if(!I(n))return{index:null};const t=x(n),{collect:e,clear:r,instances:a}=t,o=l();return f(()=>{g().then(()=>e(o))}),A(()=>{g().then(()=>r(o))}),{index:E(()=>a.indexOf(o))}}function z(n){const t=[],e=o=>{t.push(o)},r=o=>{y(t,o)};return{childProviders:t,bindChildren:o=>{C(n,d({collect:e,clear:r},o))}}}function F(n){if(!I(n))return{parentProvider:null,bindParent:null};const c=x(n),{collect:e,clear:r}=c;return{parentProvider:m(c,["collect","clear"]),bindParent:s=>{f(()=>e(s)),N(()=>r(s))}}}function I(n){const t=l();return n in t.provides}function J(){const n=P(""),t=async(a,o,c)=>!w(a)||!a.length?!0:!(await Promise.all(a.map(i=>i(o,c)))).some(i=>i!==!0?(n.value=String(i),!0):!1);return{errorMessage:n,validate:t,resetValidation:()=>{n.value=""},validateWithTrigger:async(a,o,c,s,i)=>{a.includes(o)&&await t(c,s,i)&&(n.value="")}}}function Q(n){f(()=>{window.addEventListener("hashchange",n),window.addEventListener("popstate",n)}),A(()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)})}function X(){const n=P(!1);return $(()=>{n.value=!1}),B(()=>{n.value=!0}),{disabled:n}}function Y(n){const t=l();t&&Object.assign(t.proxy,n)}function Z(n){const t=`var-${n}`;return{n:a=>a?a.startsWith("--")?`${t}${a}`:`${t}__${a}`:t,classes:(...a)=>a.map(o=>{if(w(o)){const[c,s,i=null]=o;return c?s:i}return o})}}function k(n,...t){if(n)return n(...t)}export{R as a,F as b,Z as c,S as d,k as e,X as f,Q as g,Y as h,J as i,H as m,G as p,z as u};
