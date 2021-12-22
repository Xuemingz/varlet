var _=Object.defineProperty,F=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var g=(n,o,i)=>o in n?_(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,y=(n,o)=>{for(var i in o||(o={}))j.call(o,i)&&g(n,i,o[i]);if(b)for(var i of b(o))S.call(o,i)&&g(n,i,o[i]);return n},C=(n,o)=>F(n,B(o));import{M as h}from"./index.e8ef3977.js";import{B as A}from"./index.10c9052f.js";import{C as U}from"./index.858eb3bd.js";import{S as E}from"./index.0e19eb5e.js";import{A as M}from"./AppType.4ff4df53.js";import{c as v}from"./index.15644cea.js";import{u as T,a as O,_ as Y,b as N,c as X}from"./en-US.fd4fd1d9.js";import{w as z,a as L,b as V}from"./utils.16c24a31.js";import{d as I}from"./index.77fe3760.js";import{_ as R}from"./elevation.83e98fef.js";import{q as D,r as x,C as q,_ as P,e as k,o as Z,c as G,i as l,j as t,a as d,F as H,Y as J,Z as K,m as a,t as s,n as p}from"./vendor.8243c41e.js";import"./zIndex.a9a0aa57.js";import"./components.33314818.js";import"./index.b947dc5d.js";import"./index.59104e3c.js";import"./index.5c7f3a83.js";import"./lock.cbce9ccd.js";var Q={alignmentMethods:"\u5BF9\u9F50\u65B9\u5F0F",topAlignment:"\u9876\u90E8\u5BF9\u9F50",menuOption:"\u83DC\u5355\u9879",bottomAlignment:"\u5E95\u90E8\u5BF9\u9F50",offset:"\u504F\u79FB\u91CF",offsetRight:"\u53F3\u504F\u79FB",offsetLeft:"\u5DE6\u504F\u79FB",offsetBottom:"\u4E0B\u504F\u79FB",offsetTop:"\u4E0A\u504F\u79FB",events:"\u6CE8\u518C\u4E8B\u4EF6"},W={alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",menuOption:"Menu Option",bottomAlignment:"Bottom Alignment",offset:"Offset",offsetRight:"Offset Right",offsetLeft:"Offset Left",offsetBottom:"Offset Bottom",offsetTop:"Offset Top",events:"Events"};const{add:w,use:$,pack:oo,packs:Eo,merge:Mo}=T(),eo=n=>{X(n),$(n)};O("zh-CN",Y);O("en-US",N);w("zh-CN",Q);w("en-US",W);const to={name:"MenuExample",components:{VarMenu:h,VarButton:A,VarCell:U,AppType:M},setup(){const n=D({top:!1,bottom:!1,offsetX:!1,offsetX1:!1,offsetY:!1,offsetY1:!1,event:!1}),o=x("#fff");z(eo),L(I,e=>{o.value=e==="darkThemes"?"#272727":"#fff"});const i=v.touchmoveForbid;return V(e=>{e==="pc"&&(v.touchmoveForbid=!1)}),q(()=>{v.touchmoveForbid=i}),C(y({pack:oo},P(n)),{bgColor:o,Snackbar:E})}},no=n=>(J("data-v-262e4fc4"),n=n(),K(),n),lo={class:"block-1"},ao={class:"block"},so={class:"block-1"},fo={class:"block-2"},uo=no(()=>d("div",{style:{"margin-bottom":"100px"}},null,-1));function io(n,o,i,e,ro,mo){const c=k("app-type"),r=k("var-button"),f=k("var-cell"),m=k("var-menu");return Z(),G(H,null,[l(c,null,{default:t(()=>[a(s(e.pack.alignmentMethods),1)]),_:1}),d("div",lo,[l(m,{show:n.top,"onUpdate:show":o[1]||(o[1]=u=>n.top=u)},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[0]||(o[0]=u=>n.top=!0)},{default:t(()=>[a(s(e.pack.topAlignment),1)]),_:1})]),_:1},8,["show"])]),d("div",ao,[l(m,{alignment:"bottom",show:n.bottom,"onUpdate:show":o[3]||(o[3]=u=>n.bottom=u)},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[2]||(o[2]=u=>n.bottom=!0)},{default:t(()=>[a(s(e.pack.bottomAlignment),1)]),_:1})]),_:1},8,["show"])]),l(c,null,{default:t(()=>[a(s(e.pack.offset),1)]),_:1}),d("div",so,[l(m,{"offset-x":72,show:n.offsetX,"onUpdate:show":o[5]||(o[5]=u=>n.offsetX=u)},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[4]||(o[4]=u=>n.offsetX=!0)},{default:t(()=>[a(s(e.pack.offsetRight),1)]),_:1})]),_:1},8,["show"]),l(m,{"offset-x":-72,show:n.offsetX1,"onUpdate:show":o[7]||(o[7]=u=>n.offsetX1=u)},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[6]||(o[6]=u=>n.offsetX1=!0)},{default:t(()=>[a(s(e.pack.offsetLeft),1)]),_:1})]),_:1},8,["show"])]),d("div",fo,[l(m,{"offset-y":36,show:n.offsetY,"onUpdate:show":o[9]||(o[9]=u=>n.offsetY=u)},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[8]||(o[8]=u=>n.offsetY=!0)},{default:t(()=>[a(s(e.pack.offsetBottom),1)]),_:1})]),_:1},8,["show"]),l(m,{"offset-y":-36,show:n.offsetY1,"onUpdate:show":o[11]||(o[11]=u=>n.offsetY1=u)},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[10]||(o[10]=u=>n.offsetY1=!0)},{default:t(()=>[a(s(e.pack.offsetTop),1)]),_:1})]),_:1},8,["show"])]),l(c,null,{default:t(()=>[a(s(e.pack.events),1)]),_:1}),l(m,{show:n.event,"onUpdate:show":o[13]||(o[13]=u=>n.event=u),onOpen:o[14]||(o[14]=()=>e.Snackbar.info("open")),onOpened:o[15]||(o[15]=()=>e.Snackbar.success("opened")),onClose:o[16]||(o[16]=()=>e.Snackbar.warning("close")),onClosed:o[17]||(o[17]=()=>e.Snackbar.error("closed"))},{menu:t(()=>[d("div",{class:"cell-list",style:p({background:e.bgColor})},[l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1}),l(f,null,{default:t(()=>[a(s(e.pack.menuOption),1)]),_:1})],4)]),default:t(()=>[l(r,{type:"primary",onClick:o[12]||(o[12]=u=>n.event=!0)},{default:t(()=>[a(s(e.pack.events),1)]),_:1})]),_:1},8,["show"]),uo],64)}var To=R(to,[["render",io],["__scopeId","data-v-262e4fc4"]]);export{To as default};