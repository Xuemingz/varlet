import{S as v}from"./index.ea93796c.js";import{S as h}from"./index.db26a4a5.js";import{A as f}from"./AppType.e6037b59.js";import{S as w}from"./index.9545ea2c.js";import{u as j,a as _,_ as S,b,c as x}from"./en-US.f8762106.js";import{w as A}from"./utils.77a9ee56.js";import{_ as C}from"./elevation.49b7c3d2.js";import{e as r,o as k,c as F,i as e,j as t,F as y,Z as I,_ as U,m as n,t as i,a}from"./vendor.efca09d3.js";import"./provide.84c0f88e.js";import"./components.7ab0cf36.js";import"./shared.61f3a471.js";import"./elements.78a8f643.js";import"./index.6a5b4e65.js";import"./index.6e97e0ec.js";import"./zIndex.2548bfbd.js";import"./index.45528475.js";import"./lock.363e6814.js";var E={basicUsage:"\u57FA\u672C\u4F7F\u7528",forbidLoop:"\u7981\u6B62\u5FAA\u73AF\u8F6E\u64AD",autoplay:"\u5F00\u542F\u81EA\u52A8\u64AD\u653E",vertical:"\u5782\u76F4\u8F6E\u64AD",handleChange:"\u76D1\u542C\u5207\u6362",customIndicator:"\u81EA\u5B9A\u4E49\u6307\u793A\u5668"},N={basicUsage:"Basic Usage",forbidLoop:"Forbid Loop",autoplay:"Autoplay",vertical:"Vertical Swipe",handleChange:"Handle Change",customIndicator:"Custom Indicator"};const{add:d,use:B,pack:L,packs:Ct,merge:kt}=j(),V=o=>{x(o),B(o)};_("zh-CN",S);_("en-US",b);d("zh-CN",E);d("en-US",N);const z={name:"SwipeExample",components:{VarSwipe:v,VarSwipeItem:h,AppType:f},setup(){return A(V),{pack:L,Snackbar:w}}},s=o=>(I("data-v-582d87c7"),o=o(),U(),o),D=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),T=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),H=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Z=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),G=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),J=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),K=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),M=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),O=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),P=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),Q=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),R=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),W=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),X=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),Y=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat.jpg",alt:""},null,-1)),$=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat2.jpg",alt:""},null,-1)),tt=s(()=>a("img",{class:"swipe-item",src:"https://varlet.gitee.io/varlet-ui/cat3.jpg",alt:""},null,-1)),et={class:"indicators"},at=s(()=>a("div",{class:"space"},null,-1));function st(o,lt,it,c,ot,ct){const u=r("app-type"),l=r("var-swipe-item"),p=r("var-swipe");return k(),F(y,null,[e(u,null,{default:t(()=>[n(i(c.pack.basicUsage),1)]),_:1}),e(p,{class:"swipe",ref:"swipe"},{default:t(()=>[e(l,null,{default:t(()=>[D]),_:1}),e(l,null,{default:t(()=>[T]),_:1}),e(l,null,{default:t(()=>[H]),_:1})]),_:1},512),e(u,null,{default:t(()=>[n(i(c.pack.forbidLoop),1)]),_:1}),e(p,{class:"swipe",loop:!1},{default:t(()=>[e(l,null,{default:t(()=>[Z]),_:1}),e(l,null,{default:t(()=>[q]),_:1}),e(l,null,{default:t(()=>[G]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(c.pack.autoplay),1)]),_:1}),e(p,{class:"swipe",autoplay:2e3},{default:t(()=>[e(l,null,{default:t(()=>[J]),_:1}),e(l,null,{default:t(()=>[K]),_:1}),e(l,null,{default:t(()=>[M]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(c.pack.vertical),1)]),_:1}),e(p,{class:"swipe",vertical:""},{default:t(()=>[e(l,null,{default:t(()=>[O]),_:1}),e(l,null,{default:t(()=>[P]),_:1}),e(l,null,{default:t(()=>[Q]),_:1})]),_:1}),e(u,null,{default:t(()=>[n(i(c.pack.handleChange),1)]),_:1}),e(p,{class:"swipe",onChange:c.Snackbar},{default:t(()=>[e(l,null,{default:t(()=>[R]),_:1}),e(l,null,{default:t(()=>[W]),_:1}),e(l,null,{default:t(()=>[X]),_:1})]),_:1},8,["onChange"]),e(u,null,{default:t(()=>[n(i(c.pack.customIndicator),1)]),_:1}),e(p,{class:"swipe"},{default:t(()=>[e(l,null,{default:t(()=>[Y]),_:1}),e(l,null,{default:t(()=>[$]),_:1}),e(l,null,{default:t(()=>[tt]),_:1})]),indicator:t(({index:m,length:g})=>[a("div",et,i(m+1)+" / "+i(g),1)]),_:1}),at],64)}var Ft=C(z,[["render",st],["__scopeId","data-v-582d87c7"]]);export{Ft as default};