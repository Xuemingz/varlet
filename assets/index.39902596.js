import{ap as d,an as C,ao as I,d as A,t as $,aw as B,F as E}from"./elevation.b6664af0.js";import{t as f}from"./elements.e9a3cb11.js";/* empty css               */import{e as F,c as D}from"./components.1dfa4f07.js";const w=e=>["mini","small","normal","large"].includes(e),N=e=>w(e)||d(e)||C(e)||I(e),P=e=>["start","end","center","space-around","space-between"].includes(e),W={align:{type:String},size:{type:[String,Number,Array],default:"normal",validator:N},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"start",validator:P},inline:{type:Boolean,default:!1}};const{n:g,classes:k}=D("space"),q={mini:[4,4],small:[6,6],normal:[8,12],large:[12,20]};var m=A({name:"VarSpace",props:W,setup(e,{slots:S}){const h=(s,n)=>n?q[s]:d(s)?s.map(f):[f(s),f(s)];return()=>{var y;const{inline:s,justify:n,align:b,wrap:V,direction:l,size:x}=e;let p=(y=F(S.default))!=null?y:[];const j=w(x),[t,o]=h(x,j);p=(u=>{const r=[];return u.forEach(i=>{if(i.type!==B){if(i.type===E&&d(i.children)){i.children.forEach(a=>{r.push(a)});return}r.push(i)}}),r})(p);const c=p.length-1,v=p.map((u,r)=>{const i=l==="row"?void 0:"100%";let a="0";return l==="row"&&(n==="start"||n==="center"||n==="end"?r!==c?a=`${t/2}px ${o}px ${t/2}px 0`:a=`${t/2}px 0`:n==="space-around"?a=`${t/2}px ${o/2}px`:n==="space-between"&&(r===0?a=`${t/2}px ${o/2}px ${t/2}px 0`:r===c?a=`${t/2}px 0 ${t/2}px ${o/2}px`:a=`${t/2}px ${o/2}px`)),l==="column"&&r!==c&&(a=`0 0 ${t}px 0`),$("div",{style:{margin:a,width:i}},[u])});return $("div",{class:k(g(),"var--box",[s,g("--inline")]),style:{flexDirection:l,justifyContent:n,alignItems:b,flexWrap:V?"wrap":"nowrap",margin:l==="row"?`-${t/2}px 0`:void 0}},[v])}}});m.install=function(e){e.component(m.name,m)};export{m as S};
