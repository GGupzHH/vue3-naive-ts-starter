import{g as i,j as l,Z as p,A as _,B as m,D as u,I as e,cq as f,J as t,ac as x,aa as d}from"./index-8610761f.js";const h={class:"flex flex-col flex-items-center justify-center gap-24px min-h-520px wh-full overflow-hidden"},y={class:"w-full flex flex-items-center justify-center text-400px text-primary"},k=i({name:"ExceptionBase",__name:"exception-base",props:{type:{}},setup(o){const n=o,s={403:"NoPermission",404:"NotFound",500:"ServiceError"},c=l(()=>s[n.type]);return(v,B)=>{const a=d,r=p("RouterLink");return _(),m("div",h,[u("div",y,[e(f,{"local-icon":c.value},null,8,["local-icon"])]),e(r,{to:"/"},{default:t(()=>[e(a,{type:"primary"},{default:t(()=>[x("回到首页")]),_:1})]),_:1})])}}});export{k as _};