import{c as d,d as f}from"./components.8013e964.js";import{b as m}from"./elements.6395be39.js";import{_ as p}from"./elevation.f7de2a7a.js";import{d as g,r as _,y as u,o as C,c as v,G as y,n as b}from"./vendor.efca09d3.js";function O(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}function h(e){return["flex-start","center","flex-end"].includes(e)}const j={gutter:{type:[String,Number],default:0},justify:{type:String,default:"flex-start",validator:O},align:{type:String,default:"flex-start",validator:h},onClick:{type:Function}},R=Symbol("ROW_BIND_COL_KEY"),w=Symbol("ROW_COUNT_COL_KEY");function x(){const{bindChildren:e,childProviders:t}=d(R),{length:n}=f(w);return{length:n,cols:t,bindCols:e}}const S=g({name:"VarRow",props:j,setup(e){const{cols:t,bindCols:n,length:i}=x(),r=_("0 0"),o=()=>{const a=m(e.gutter)/2;r.value=`0 -${a}px`,t.forEach(c=>{c.setPadding({left:a,right:a})})},s={computePadding:o};return u(()=>i.value,o),u(()=>e.gutter,o),n(s),{margin:r}}});function k(e,t,n,i,r,o){return C(),v("div",{class:"var-row var--box",style:b({justifyContent:e.justify,alignItems:e.align,margin:e.margin}),onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},[y(e.$slots,"default")],4)}var l=p(S,[["render",k]]);l.install=function(e){e.component(l.name,l)};export{l as R,R as a,w as b};
