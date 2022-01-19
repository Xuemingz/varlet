var j=Object.defineProperty;var h=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var k=(o,n,l)=>n in o?j(o,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[n]=l,S=(o,n)=>{for(var l in n||(n={}))V.call(n,l)&&k(o,l,n[l]);if(h)for(var l of h(n))$.call(n,l)&&k(o,l,n[l]);return o};import{p as P,P as U}from"./index.6753302c.js";import{B as A}from"./index.91fedec9.js";import{p as R,m as F}from"./components.7ab0cf36.js";import{e as N,f as z,c as I,i as q}from"./shared.61f3a471.js";import{p as G}from"./en-US.f8762106.js";import{_ as H}from"./elevation.49b7c3d2.js";import{d as E,r as w,y as O,e as T,o as y,l as g,j as p,a as f,G as b,n as J,m,t as C,h as _,H as K,q as L,z as M}from"./vendor.efca09d3.js";function Q(o){return["left","center","right"].includes(o)}const W=S({show:{type:Boolean,default:!1},title:{type:String},message:{type:String},messageAlign:{type:String,default:"left",validator:Q},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:{type:String},cancelButtonText:{type:String},confirmButtonTextColor:{type:String},cancelButtonTextColor:{type:String},confirmButtonColor:{type:String},cancelButtonColor:{type:String},onBeforeClose:{type:Function},onConfirm:{type:Function},onCancel:{type:Function},"onUpdate:show":{type:Function}},R(P,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"]));const X=E({name:"VarDialog",components:{VarPopup:U,VarButton:A},inheritAttrs:!1,props:W,setup(o){const n=w(!1),l=w(!1),e=()=>{var a;return(a=o["onUpdate:show"])==null?void 0:a.call(o,!1)},u=()=>{var B;const{closeOnClickOverlay:a,onClickOverlay:r,onBeforeClose:s}=o;if(r==null||r(),!!a){if(s!=null){s("close",e);return}(B=o["onUpdate:show"])==null||B.call(o,!1)}},t=()=>{var s;const{onBeforeClose:a,onConfirm:r}=o;if(r==null||r(),a!=null){a("confirm",e);return}(s=o["onUpdate:show"])==null||s.call(o,!1)},d=()=>{var s;const{onBeforeClose:a,onCancel:r}=o;if(r==null||r(),a!=null){a("cancel",e);return}(s=o["onUpdate:show"])==null||s.call(o,!1)};return O(()=>o.show,a=>{n.value=a},{immediate:!0}),O(()=>o.closeOnClickOverlay,a=>{if(o.onBeforeClose!=null){l.value=!1;return}l.value=a},{immediate:!0}),{pack:G,dt:N,popupShow:n,popupCloseOnClickOverlay:l,handleClickOverlay:u,confirm:t,cancel:d}}}),Y={class:"var-dialog__title"},Z={class:"var-dialog__actions"};function D(o,n,l,e,u,t){const d=T("var-button"),a=T("var-popup");return y(),g(a,{class:"var-dialog__popup-radius","var-dialog-cover":"",show:o.popupShow,overlay:o.overlay,"overlay-class":o.overlayClass,"overlay-style":o.overlayStyle,"lock-scroll":o.lockScroll,"close-on-click-overlay":o.popupCloseOnClickOverlay,teleport:o.teleport,onOpen:o.onOpen,onClose:o.onClose,onClosed:o.onClosed,onOpened:o.onOpened,onRouteChange:o.onRouteChange,onClickOverlay:o.handleClickOverlay},{default:p(()=>[f("div",K({class:"var--box var-dialog"},o.$attrs),[f("div",Y,[b(o.$slots,"title",{},()=>[m(C(o.dt(o.title,o.pack.dialogTitle)),1)])]),f("div",{class:"var-dialog__message",style:J({textAlign:o.messageAlign})},[b(o.$slots,"default",{},()=>[m(C(o.message),1)])],4),f("div",Z,[o.cancelButton?(y(),g(d,{key:0,class:"var-dialog__button var-dialog__cancel-button","var-dialog-cover":"",text:"","text-color":o.cancelButtonTextColor,color:o.cancelButtonColor,onClick:o.cancel},{default:p(()=>[m(C(o.dt(o.cancelButtonText,o.pack.dialogCancelButtonText)),1)]),_:1},8,["text-color","color","onClick"])):_("v-if",!0),o.confirmButton?(y(),g(d,{key:1,class:"var-dialog__button var-dialog__confirm-button","var-dialog-cover":"",text:"","text-color":o.confirmButtonTextColor,color:o.confirmButtonColor,onClick:o.confirm},{default:p(()=>[m(C(o.dt(o.confirmButtonText,o.pack.dialogConfirmButtonText)),1)]),_:1},8,["text-color","color","onClick"])):_("v-if",!0)])],16)]),_:3},8,["show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])}var i=H(X,[["render",D]]);let c;function v(o){return z()?new Promise(n=>{v.close();const l=I(o)||q(o)?{message:String(o)}:o,e=L(l);e.teleport="body",c=e;const{unmountInstance:u}=F(i,e,{onConfirm:()=>{var t;(t=e.onConfirm)==null||t.call(e),n("confirm")},onCancel:()=>{var t;(t=e.onCancel)==null||t.call(e),n("cancel")},onClose:()=>{var t;(t=e.onClose)==null||t.call(e),n("close")},onClosed:()=>{var t;(t=e.onClosed)==null||t.call(e),u(),c===e&&(c=null)},onRouteChange:()=>{u(),c===e&&(c=null)},"onUpdate:show":t=>{e.show=t}});e.show=!0}):Promise.resolve()}i.install=function(o){o.component(i.name,i)};v.install=function(o){o.component(i.name,i)};v.close=()=>{if(c!=null){const o=c;c=null,M().then(()=>{o.show=!1})}};v.Component=i;export{v as D};