import{R as U}from"./index.6f8d2b65.js";import{L as N}from"./index.e28610cc.js";import{a as R}from"./elements.e9a3cb11.js";import{c as B,e as f}from"./components.1dfa4f07.js";import{d as $,_ as C,ab as b,j as S,f as y,h as w,H as z,K as j,t,ag as a,P as n,F as I,M as d,N as c,l as o,ai as D,aj as A}from"./elevation.b6664af0.js";import{A as u}from"./AppType.12f592ea.js";import{R as F}from"./index.e24f4bc9.js";import{a as M}from"./utils.0c1f0941.js";import{u as V,a as k,_ as T,b as H,c as K}from"./en-US.ee95b3a9.js";import"./index.907bdd7e.js";/* empty css               */import"./shared.f68fafdb.js";function P(e){return["fill","contain","cover","none","scale-down"].includes(e)}const q={src:{type:String},fit:{type:String,validator:P,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}};const{n:G,classes:J}=B("image"),O=$({name:"VarImage",directives:{Lazy:N,Ripple:U},props:q,setup(e){return{n:G,classes:J,toSizeUnit:R,handleLoad:l=>{const p=l.currentTarget,{lazy:g,onLoad:h,onError:_}=e;g?(p._lazy.state==="success"&&f(h,l),p._lazy.state==="error"&&f(_,l)):f(h,l)},handleError:l=>{const{lazy:p,onError:g}=e;!p&&f(g,l)}}}}),Q=["alt","lazy-error","lazy-loading"],W=["alt","src"];function X(e,s,L,l,p,g){const h=b("lazy"),_=b("ripple");return S((y(),w("div",{class:z(e.classes(e.n(),"var--box",[!e.block,"var--inline-block"])),style:j({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?S((y(),w("img",{key:0,class:z(e.n("image")),alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:j({objectFit:e.fit}),onLoad:s[0]||(s[0]=(...r)=>e.handleLoad&&e.handleLoad(...r)),onError:s[1]||(s[1]=(...r)=>e.handleError&&e.handleError(...r)),onClick:s[2]||(s[2]=(...r)=>e.onClick&&e.onClick(...r))},null,46,Q)),[[h,e.src]]):(y(),w("img",{key:1,class:z(e.n("image")),alt:e.alt,style:j({objectFit:e.fit}),src:e.src,onLoad:s[3]||(s[3]=(...r)=>e.handleLoad&&e.handleLoad(...r)),onError:s[4]||(s[4]=(...r)=>e.handleError&&e.handleError(...r)),onClick:s[5]||(s[5]=(...r)=>e.onClick&&e.onClick(...r))},null,46,W))],6)),[[_,{disabled:!e.ripple}]])}var i=C(O,[["render",X]]);i.install=function(e){e.component(i.name,i)};var Y={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},Z={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:E,use:x,pack:m,packs:be,merge:Se}=V(),ee=e=>{K(e),x(e)};k("zh-CN",T);k("en-US",H);E("zh-CN",Y);E("en-US",Z);const v=e=>(D("data-v-8d13c490"),e=e(),A(),e),ae={class:"image-example-fit-item"},te=v(()=>o("div",{class:"image-example-margin-bottom"},"fill",-1)),se={class:"image-example-fit-item"},ie=v(()=>o("div",{class:"image-example-margin-bottom"},"cover",-1)),re={class:"image-example-fit-item"},oe=v(()=>o("div",{class:"image-example-margin-bottom"},"contain",-1)),le={class:"image-example-fit-item"},ne=v(()=>o("div",{class:"image-example-margin-bottom"},"none",-1)),pe={class:"image-example-fit-item"},de=v(()=>o("div",{class:"image-example-margin-bottom"},"scale-down",-1)),ce={setup(e){return M(ee),(s,L)=>(y(),w(I,null,[t(a(u),null,{default:n(()=>[d(c(a(m).basicUsage),1)]),_:1}),t(a(i),{src:"https://varlet-varletjs.vercel.app/cat.jpg"}),t(a(u),null,{default:n(()=>[d(c(a(m).fitMode),1)]),_:1}),t(a(F),null,{default:n(()=>[o("div",ae,[t(a(i),{width:"22.666vw",height:"22.666vw",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),te]),o("div",se,[t(a(i),{width:"22.666vw",height:"22.666vw",fit:"cover",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),ie]),o("div",re,[t(a(i),{width:"22.666vw",height:"22.666vw",fit:"contain",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),oe]),o("div",le,[t(a(i),{width:"22.666vw",height:"22.666vw",fit:"none",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),ne]),o("div",pe,[t(a(i),{width:"22.666vw",height:"22.666vw",fit:"scale-down",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),de])]),_:1}),t(a(u),null,{default:n(()=>[d(c(a(m).setRadius),1)]),_:1}),t(a(F),null,{default:n(()=>[t(a(i),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:10,src:"https://varlet-varletjs.vercel.app/cat.jpg",class:"image-example-fit-item"}),t(a(i),{width:"22.666vw",height:"22.666vw",fit:"cover",radius:"50%",src:"https://varlet-varletjs.vercel.app/cat.jpg"})]),_:1}),t(a(u),null,{default:n(()=>[d(c(a(m).useRipple),1)]),_:1}),t(a(i),{ripple:"",src:"https://varlet-varletjs.vercel.app/cat.jpg"}),t(a(u),null,{default:n(()=>[d(c(a(m).useLazyLoad),1)]),_:1}),t(a(i),{lazy:"",src:"https://varlet-varletjs.vercel.app/cat.jpg"})],64))}};var Fe=C(ce,[["__scopeId","data-v-8d13c490"]]);export{Fe as default};
