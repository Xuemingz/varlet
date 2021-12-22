import{R as b}from"./index.b947dc5d.js";import{p as s,L as c}from"./index.59104e3c.js";import{p as d}from"./components.33314818.js";import{_ as m}from"./elevation.83e98fef.js";import{d as y,e as g,f as B,w as h,o as u,c as k,l as C,h as z,a as S,G as $,p,n as T}from"./vendor.8243c41e.js";function V(e){return["default","primary","info","success","warning","danger"].includes(e)}function j(e){return["normal","mini","small","large"].includes(e)}const R={type:{type:String,default:"default",validator:V},size:{type:String,default:"normal",validator:j},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},loadingRadius:{type:[Number,String],default:12},loadingType:d(s,"type"),loadingSize:d(s,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const w=y({name:"VarButton",components:{VarLoading:c},directives:{Ripple:b},props:R,setup(e){return{handleClick:o=>{const{loading:n,disabled:l,onClick:a}=e;n||l||a==null||a(o)},handleTouchstart:o=>{const{loading:n,disabled:l,onTouchstart:a}=e;n||l||a==null||a(o)}}}}),L=["disabled"];function N(e,t,f,o,n,l){const a=g("var-loading"),v=B("ripple");return h((u(),k("button",{class:p(["var-button var--box",[`var-button--${e.size}`,e.block?"var--flex var-button--block":"var--inline-flex",e.disabled?"var-button--disabled":null,e.text?`var-button--text-${e.type}`:`var-button--${e.type}`,e.text?"var-button--text":"var-elevation--2",e.text&&e.disabled?"var-button--text-disabled":null,e.round?"var-button--round":null,e.outline?"var-button--outline":null]]),style:T({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:t[0]||(t[0]=(...i)=>e.handleClick&&e.handleClick(...i)),onTouchstart:t[1]||(t[1]=(...i)=>e.handleTouchstart&&e.handleTouchstart(...i))},[e.loading?(u(),C(a,{key:0,class:"var-button__loading",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["type","size","radius"])):z("v-if",!0),S("div",{class:p(["var-button__content",[e.loading?"var-button--hidden":null]])},[$(e.$slots,"default")],2)],46,L)),[[v,{disabled:e.disabled||!e.ripple}]])}var r=m(w,[["render",N]]);r.install=function(e){e.component(r.name,r)};export{r as B};