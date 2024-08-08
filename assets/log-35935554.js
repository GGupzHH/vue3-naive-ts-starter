import{g as w,E as U,a7 as z,l as F,a8 as L,r as f,A as P,B as $,I as t,J as n,K as e,a9 as A,aa as g,ab as y,ac as h,ad as k,aj as D,ae as K,af as M,ag as j}from"./index-c17896f8.js";import{u as E}from"./table-a84f3163.js";import{u as G}from"./dictTag-946a4e78.js";import{_ as V}from"./FormItemGridItem-7a584310.js";import{_ as J}from"./Grid-5bd7fcd6.js";import{_ as q}from"./FormItem-af78cc3d.js";import{_ as H}from"./DataTable-19a8255a.js";import"./Forward-600c26c3.js";const O={class:"flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto"},Q=w({name:"SystemManagementLog"}),oe=w({...Q,setup(W){var d;(d=U())==null||d.proxy;const v=z(),{columns:x,columnChecks:i,data:b,loading:p,getData:u,pagination:N,searchParams:o,resetSearchParams:C}=E({apiFn:v.getSystemLogList,showTotal:!0,apiParams:{current:1,size:10,type:null,title:null,createBy:null},columns:()=>[{key:"index",title:"序号",width:64,align:"center"},{key:"disableRole",title:"类型",width:120,align:"center",render:c=>F(L,{type:c.type==="1"?"error":"success"},{default:()=>c.type==="1"?"异常":"正常"})},{key:"title",title:"标题",width:120,align:"center"},{key:"createBy",title:"工号",width:100,align:"center"},{key:"remoteAddr",title:"IP地址",width:120,align:"center"},{key:"method",title:"请求方式",width:120,align:"center"},{key:"serviceId",title:"客户端",width:120,align:"center"},{key:"time",title:"请求时间",width:120,align:"center"},{key:"createTime",title:"创建时间",width:120,align:"center"}],immediate:void 0}),r=f([]);return f(void 0),(c,l)=>{const B=D,s=V,m=K,T=J,I=q,_=M,S=j,R=H;return P(),$("div",O,[t(_,{title:"搜索",bordered:!1,size:"small",class:"card-wrapper"},{default:n(()=>[t(I,{model:e(o),"label-placement":"left","label-width":80},{default:n(()=>[t(T,{responsive:"screen","item-responsive":""},{default:n(()=>[t(s,{span:"24 m:6",label:"类型",path:"type"},{default:n(()=>[t(B,{value:e(o).type,"onUpdate:value":l[0]||(l[0]=a=>e(o).type=a),options:e(G)("org_type"),placeholder:"请选择类型"},null,8,["value","options"])]),_:1}),t(s,{span:"24 s:12 m:6",label:"标题",path:"title",class:"pr-24px"},{default:n(()=>[t(m,{value:e(o).title,"onUpdate:value":l[1]||(l[1]=a=>e(o).title=a),placeholder:"请输入标题"},null,8,["value"])]),_:1}),t(s,{span:"24 s:12 m:6",label:"工号",path:"createBy",class:"pr-24px"},{default:n(()=>[t(m,{value:e(o).createBy,"onUpdate:value":l[2]||(l[2]=a=>e(o).createBy=a),placeholder:"请输入工号"},null,8,["value"])]),_:1}),t(s,{span:"24 s:12 m:6"},{default:n(()=>[t(e(A),{class:"w-full",justify:"end"},{default:n(()=>[t(e(g),{type:"primary",ghost:"",onClick:e(u)},{icon:n(()=>[t(y,{icon:"icon-sousuo1"})]),default:n(()=>[h(" 搜索 ")]),_:1},8,["onClick"]),t(e(g),{onClick:e(C)},{icon:n(()=>[t(y,{icon:"icon-shuaxin-01"})]),default:n(()=>[h(" 清空 ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(_,{title:"日志管理",bordered:!1,size:"small",class:"card-wrapper sm:flex-1-hidden"},{"header-extra":n(()=>[t(S,{columns:e(i),"onUpdate:columns":l[3]||(l[3]=a=>k(i)?i.value=a:null),"is-delete-btn":!1,"is-add-btn":!1,loading:e(p),onRefresh:e(u)},null,8,["columns","loading","onRefresh"])]),default:n(()=>[t(R,{"checked-row-keys":e(r),"onUpdate:checkedRowKeys":l[4]||(l[4]=a=>k(r)?r.value=a:null),columns:e(x),data:e(b),size:"small","flex-height":"",remote:"","scroll-x":640,loading:e(p),pagination:e(N),"row-key":a=>a.id,class:"sm:h-full"},null,8,["checked-row-keys","columns","data","loading","pagination","row-key"])]),_:1})])}}});export{oe as default};
