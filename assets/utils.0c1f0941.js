import{al as i,D as s,o as c}from"./elevation.b6664af0.js";function d(e){return Object.entries(e!=null?e:{}).reduce((n,[t,a])=>{const o=t.startsWith("--")?t:`--${i(t)}`;return n[o]=a,n},{})}const r=[];function h(e={}){r.forEach(t=>document.documentElement.style.removeProperty(t)),r.length=0;const n=d(e);Object.entries(n).forEach(([t,a])=>{document.documentElement.style.setProperty(t,a),r.push(t)})}function m(){const[,e,n]=window.location.hash.split("/");return{language:e,menuName:n}}function u(){const{href:e}=window.location,n=e.slice(e.indexOf("?"));return new URLSearchParams(n)}function E(e,n="mobile"){const t=()=>{var o;const a=n==="mobile"?(o=u().get("language"))!=null?o:"zh-CN":m().language;e(a)};g(t),t()}function w(e,n=!0){const t=a=>{const{data:o}=a;o.action==="themesChange"&&e(o.data,o.from)};window.addEventListener("message",t),n&&s(()=>{window.removeEventListener("message",t)}),e(l(),"default")}function g(e){c(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),s(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function l(e="VARLET_THEMES"){var t;let n=window.localStorage.getItem(e);return n||(n=(t=window.matchMedia)!=null&&t.call(window,"(prefers-color-scheme: dark)").matches?"darkThemes":"themes",window.localStorage.setItem(e,n)),n}function p(e,n){w(t=>{h(t==="darkThemes"?e:null),n==null||n(t)})}export{E as a,p as b,l as c,m as g,w};
