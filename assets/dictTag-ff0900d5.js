import{a7 as r,l as a,a8 as u}from"./index-8610761f.js";function m(e,i){const s=r().dictAllMap[e];if(!s||!s.length)return a("span");const n=s.find(l=>l.value===i);return n?a(u,{type:n.remarks,bordered:!1},{default:()=>n.label}):a("span")}function g(e){const t=r().dictAllMap[e];return!t||!t.length?[]:t}export{m as a,g as u};