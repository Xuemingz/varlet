import{c as R,d as q,e as W,f as G}from"./components.fc1d8498.js";import{_ as B}from"./IconSfc.0738263e.js";import{q as P,b as f,o as u,c as S,O as I,n as E,r as g,y as H,d as h,a as A,m as k,k as j,t as r,f as J,h as a,w as i,F as Q,l as c}from"./vendor.bac705d4.js";import{I as N}from"./index.e786da3e.js";import{S as T}from"./index.bd902c81.js";import{O as F}from"./index.e9b0e00e.js";import{B as z}from"./index.0df32c22.js";import{A as X}from"./AppType.d3c0949a.js";import{u as Z,a as U,_ as ee,b as te,c as ne,d as ae}from"./utils.63a971f5.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";import"./index.d1e77118.js";import"./zIndex.148a12e4.js";import"./index.389a472f.js";import"./index.5ddede98.js";import"./provide.189caf8d.js";import"./index.9dbd940e.js";import"./index.6e85f2d8.js";const V=Symbol("STEPS_BIND_STEP_KEY"),$=Symbol("STEPS_COUNT_STEP_KEY");function ie(){const{bindChildren:e,childProviders:o}=R(V),{length:l}=q($);return{length:l,step:o,bindStep:e}}function oe(e){return["horizontal","vertical"].includes(e)}const re={active:{type:[String,Number],default:0},direction:{type:String,default:"horizontal",validator:oe},activeColor:{type:String},inactiveColor:{type:String},onClickStep:{type:Function}};const ce=P({name:"VarSteps",props:re,setup(e){const o=f(()=>e.active),l=f(()=>e.activeColor),t=f(()=>e.inactiveColor),d=f(()=>e.direction),{length:p,bindStep:s}=ie();s({active:o,length:p,direction:d,activeColor:l,inactiveColor:t,clickStep:m=>{var _;(_=e.onClickStep)==null||_.call(e,m)}})}});function se(e,o,l,t,d,p){return u(),S("div",{class:"var-steps",style:E({flexDirection:e.direction==="horizontal"?"row":"column"})},[I(e.$slots,"default")],4)}var C=B(ce,[["render",se]]);C.install=function(e){e.component(C.name,C)};const le={activeIcon:{type:String,default:"check"},currentIcon:{type:String},inactiveIcon:{type:String}};function ue(){const{parentProvider:e,bindParent:o}=W(V),{index:l}=G($);return{index:l,steps:e,bindSteps:o}}const de=P({name:"VarStep",components:{[N.name]:N},props:le,setup(){const e=g(null),o=g(""),l=g(!1),{index:t,steps:d,bindSteps:p}=ue();if(!d||!p||!t){console.error("[Varlet] Steps: <step/> must in <steps>");return}const{active:s,length:n,activeColor:v,inactiveColor:m,direction:_,clickStep:w}=d,O=f(()=>s.value===t.value),x=f(()=>t.value!==-1&&s.value>t.value),K={index:t},L=()=>w(t.value),Y=b=>{_.value==="horizontal"&&(e.value=b)};return p(K),H(n,b=>{if(l.value=b-1===t.value,e.value){const M=e.value.offsetWidth/2-14;o.value=`0 -${M}px`}}),{main:e,index:t,isActive:x,isCurrent:O,direction:_,lineMargin:o,activeColor:v,inactiveColor:m,isLastChild:l,click:L,getRef:Y}}}),pe={class:"var-step"},ve={key:3};function fe(e,o,l,t,d,p){const s=h("var-icon");return u(),S("div",pe,[A("div",{class:k(`var-step-${e.direction}`)},[A("div",{class:k(`var-step-${e.direction}__main`),ref:e.getRef},[A("div",{class:k({[`var-step-${e.direction}__tag`]:!0,[`var-step-${e.direction}__tag--active`]:e.isActive||e.isCurrent}),style:E({backgroundColor:e.isActive||e.isCurrent?e.activeColor:e.inactiveColor}),onClick:o[0]||(o[0]=(...n)=>e.click&&e.click(...n))},[e.isActive?(u(),j(s,{key:0,class:"var-step__icon","var-step-cover":"",name:e.activeIcon},null,8,["name"])):e.isCurrent&&e.currentIcon?(u(),j(s,{key:1,class:"var-step__icon","var-step-cover":"",name:e.currentIcon},null,8,["name"])):e.inactiveIcon?(u(),j(s,{key:2,class:"var-step__icon","var-step-cover":"",name:e.inactiveIcon},null,8,["name"])):(u(),S("span",ve,r(e.index+1),1))],6),A("div",{class:k({[`var-step-${e.direction}__content`]:!0,[`var-step-${e.direction}__content--active`]:e.isActive||e.isCurrent}),onClick:o[1]||(o[1]=(...n)=>e.click&&e.click(...n))},[I(e.$slots,"default")],2)],2),e.isLastChild?J("v-if",!0):(u(),S("div",{key:0,class:k(`var-step-${e.direction}__line`),style:E({margin:e.lineMargin})},null,6))],2)])}var y=B(de,[["render",fe]]);y.install=function(e){e.component(y.name,y)};var me={basicUsage:"\u57FA\u672C\u4F7F\u7528",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",dynamicSteps:"\u52A8\u6001\u6B65\u9AA4",vertical:"\u5782\u76F4\u6A21\u5F0F",next:"\u4E0B\u4E00\u6B65",first:"\u6B65\u9AA41",second:"\u6B65\u9AA42",third:"\u6B65\u9AA43",fourth:"\u6B65\u9AA44",fifth:"\u6B65\u9AA45",placeholder:"\u6539\u53D8step\u7684\u6570\u91CF",step:"\u6B65\u9AA4",text:"\u63A5\u4E0B\u6765..."},_e={basicUsage:"Basic Usage",customStyle:"Custom Style",dynamicSteps:"Dynamic Steps",vertical:"Vertical Mode",next:"next",first:"Step1",second:"Step2",third:"Step3",fourth:"Step4",fifth:"Step5",placeholder:"Change the number of steps",step:"Step",text:"do something..."};const{add:D,use:Se,pack:he,packs:xe,merge:Ke}=Z(),ke=e=>{ne(e),Se(e)};U("zh-CN",ee);U("en-US",te);D("zh-CN",me);D("en-US",_e);const Ce={name:"StepsExample",components:{[C.name]:C,[y.name]:y,[T.name]:T,[F.name]:F,[z.name]:z,AppType:X},setup(){const e=g(0),o=()=>{e.value=(e.value+1)%4};return ae(ke),{pack:he,next:o,active:e}}};function ye(e,o,l,t,d,p){const s=h("app-type"),n=h("var-step"),v=h("var-steps"),m=h("var-button");return u(),S(Q,null,[a(s,null,{default:i(()=>[c(r(t.pack.basicUsage),1)]),_:1}),a(v,{active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(s,null,{default:i(()=>[c(r(t.pack.customStyle),1)]),_:1}),a(v,{active:t.active,"active-color":"#f44336","inactive-color":"#e99eb4"},{default:i(()=>[a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,{"active-icon":"heart","current-icon":"fire","inactive-icon":"heart-half-full"},{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(s,null,{default:i(()=>[c(r(t.pack.vertical),1)]),_:1}),a(v,{direction:"vertical",active:t.active},{default:i(()=>[a(n,null,{default:i(()=>[c(r(t.pack.first),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.second),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.third),1)]),_:1}),a(n,null,{default:i(()=>[c(r(t.pack.fourth),1)]),_:1})]),_:1},8,["active"]),a(m,{type:"primary",block:"",onClick:t.next,style:{"margin-top":"20px"}},{default:i(()=>[c(r(t.pack.next),1)]),_:1},8,["onClick"])],64)}var Le=B(Ce,[["render",ye]]);export{Le as default};