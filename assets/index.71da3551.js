import{t as T}from"./elements.78a8f643.js";import{_ as v}from"./elevation.49b7c3d2.js";import{d as U,o as l,c as r,a as e,n as B,G as b,h as F,r as y,e as p,i,j as d,F as k,m as S,t as n,k as z,Z as $,_ as D}from"./vendor.efca09d3.js";import"./index.706d6237.js";import{A as V}from"./AppType.e6037b59.js";import{d as w}from"./index.77fe3760.js";import{w as E,a as A}from"./utils.77a9ee56.js";import{u as I,a as j,_ as P,b as L,c as M}from"./en-US.f8762106.js";import{P as W}from"./Pagination.93f4fc91.js";const G=U({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:T}}}),J={class:"var-table var-elevation--1 var--box"},O={class:"var-table__main"},Z={key:0,class:"var-table__footer"};function q(a,o,u,t,s,N){return l(),r("div",J,[e("div",O,[e("table",{class:"var-table__table",style:B({width:a.toSizeUnit(a.fullWidth)})},[b(a.$slots,"default")],4)]),a.$slots.footer?(l(),r("div",Z,[b(a.$slots,"footer")])):F("v-if",!0)])}var _=v(G,[["render",q]]);_.install=function(a){a.component(_.name,_)};var H={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},K={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:C,use:Q,pack:R,packs:fe,merge:ge}=I(),X=a=>{M(a),Q(a)};j("zh-CN",P);j("en-US",L);C("zh-CN",H);C("en-US",K);const h=(a,o)=>Array.from({length:o}).map((u,t)=>{const s=(a-1)*o+t+1;return{name:`Name ${s}`,math:s,english:s}}),Y={name:"TableExample",components:{VarTable:_,VarPagination:W,AppType:V},setup(){const a=y([{name:"tom",math:100,english:135},{name:"jerry",math:124,english:38}]),o=y(h(1,10)),u=(t,s)=>{o.value=h(t,s)};return E(X),A(w),{pack:R,data:a,list:o,get:u}}},m=a=>($("data-v-e033b6de"),a=a(),D(),a),ee=m(()=>e("td",null,"124",-1)),ae=m(()=>e("td",null,"38",-1)),te=m(()=>e("td",null,"100",-1)),ne=m(()=>e("td",null,"135",-1)),oe={class:"footer"};function se(a,o,u,t,s,N){const f=p("app-type"),g=p("var-table"),x=p("var-pagination");return l(),r(k,null,[i(f,null,{default:d(()=>[S(n(t.pack.basicUsage),1)]),_:1}),i(g,null,{default:d(()=>[e("thead",null,[e("tr",null,[e("th",null,n(t.pack.name),1),e("th",null,n(t.pack.math),1),e("th",null,n(t.pack.english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,n(t.pack.jerry),1),ee,ae]),e("tr",null,[e("td",null,n(t.pack.tom),1),te,ne])])]),_:1}),i(f,null,{default:d(()=>[S(n(t.pack.slot),1)]),_:1}),i(g,null,{footer:d(()=>[e("div",oe,[i(x,{current:1,total:100,"size-option":[5,10],onChange:t.get},null,8,["onChange"])])]),default:d(()=>[e("thead",null,[e("tr",null,[e("th",null,n(t.pack.name),1),e("th",null,n(t.pack.math),1),e("th",null,n(t.pack.english),1)])]),e("tbody",null,[(l(!0),r(k,null,z(t.list,c=>(l(),r("tr",{key:c.name},[e("td",null,n(c.name),1),e("td",null,n(c.math),1),e("td",null,n(c.english),1)]))),128))])]),_:1})],64)}var le=v(Y,[["render",se],["__scopeId","data-v-e033b6de"]]),ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",gen:h,default:le});export{_ as T,h as g,ve as i,R as p,X as u};