import{c as be,a as ge,s as fe,b as Z,d as m,e as B,f as pe,g as C,u as V,r as z,h as q,p as re,i as le,j as w,k as G,l as S,N as ne,m as J,n as y,o as F,q as _e,C as me,t as ve,v as K,w as ye,x as ee,y as Ce,z as W,A as T,B as j,D as O,E as D,F as xe,G as Te,H as Se,I as v,J as I,K as h,L as H,M as U,O as se,_ as N,P as ae,Q as L,R as we,S as ke,T as oe,U as Ie,V as ie,W as Be,X as $e,Y as ze,Z as Re,$ as te,a0 as Pe,a1 as Le,a2 as je,a3 as Oe,a4 as Ee,a5 as Me,a6 as He}from"./index-c17896f8.js";const Ve=e=>{const{baseColor:o,textColor2:t,bodyColor:r,cardColor:i,dividerColor:l,actionColor:c,scrollbarColor:s,scrollbarColorHover:a,invertedColor:p}=e;return{textColor:t,textColorInverted:"#FFF",color:r,colorEmbedded:c,headerColor:i,headerColorInverted:p,footerColor:c,footerColorInverted:p,headerBorderColor:l,headerBorderColorInverted:p,footerBorderColor:l,footerBorderColorInverted:p,siderBorderColor:l,siderBorderColorInverted:p,siderColor:i,siderColorInverted:p,siderToggleButtonBorder:`1px solid ${l}`,siderToggleButtonColor:o,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:Z(r,s),siderToggleBarColorHover:Z(r,a),__invertScrollbar:"true"}},Fe=be({name:"Layout",common:ge,peers:{Scrollbar:fe},self:Ve}),Q=Fe,De=m("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ne={embedded:Boolean,position:J,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ce=pe("n-layout");function de(e){return C({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},V.props),Ne),setup(o){const t=z(null),r=z(null),{mergedClsPrefixRef:i,inlineThemeDisabled:l}=q(o),c=V("Layout","-layout",De,Q,o,i);function s(d,x){if(o.nativeScrollbar){const{value:k}=t;k&&(x===void 0?k.scrollTo(d):k.scrollTo(d,x))}else{const{value:k}=r;k&&k.scrollTo(d,x)}}re(ce,o);let a=0,p=0;const E=d=>{var x;const k=d.target;a=k.scrollLeft,p=k.scrollTop,(x=o.onScroll)===null||x===void 0||x.call(o,d)};le(()=>{if(o.nativeScrollbar){const d=t.value;d&&(d.scrollTop=p,d.scrollLeft=a)}});const R={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},u={scrollTo:s},f=w(()=>{const{common:{cubicBezierEaseInOut:d},self:x}=c.value;return{"--n-bezier":d,"--n-color":o.embedded?x.colorEmbedded:x.color,"--n-text-color":x.textColor}}),_=l?G("layout",w(()=>o.embedded?"e":""),f,o):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:t,scrollbarInstRef:r,hasSiderStyle:R,mergedTheme:c,handleNativeElScroll:E,cssVars:l?void 0:f,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender},u)},render(){var o;const{mergedClsPrefix:t,hasSider:r}=this;(o=this.onRender)===null||o===void 0||o.call(this);const i=r?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return S("div",{class:l,style:this.cssVars},this.nativeScrollbar?S("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):S(ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const Ye=de(!1),Ae=de(!0),We=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),B("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ue={position:J,inverted:Boolean,bordered:{type:Boolean,default:!1}},Xe=C({name:"LayoutHeader",props:Object.assign(Object.assign({},V.props),Ue),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=q(e),r=V("Layout","-layout-header",We,Q,e,o),i=w(()=>{const{common:{cubicBezierEaseInOut:c},self:s}=r.value,a={"--n-bezier":c};return e.inverted?(a["--n-color"]=s.headerColorInverted,a["--n-text-color"]=s.textColorInverted,a["--n-border-color"]=s.headerBorderColorInverted):(a["--n-color"]=s.headerColor,a["--n-text-color"]=s.textColor,a["--n-border-color"]=s.headerBorderColor),a}),l=t?G("layout-header",w(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),S("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ke=m("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[B("bordered",[y("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),y("left-placement",[B("bordered",[y("border",`
 right: 0;
 `)])]),B("right-placement",`
 justify-content: flex-start;
 `,[B("bordered",[y("border",`
 left: 0;
 `)]),B("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[F("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[F("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),B("collapsed",[m("layout-toggle-bar",[F("&:hover",[y("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[y("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),y("bottom",`
 position: absolute;
 top: 34px;
 `),F("&:hover",[y("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),y("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),F("&:hover",[y("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),y("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),B("show-content",[m("layout-sider-scroll-container",{opacity:1})]),B("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),qe=C({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return S("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},S(_e,{clsPrefix:e},{default:()=>S(me,null)}))}}),Ge=C({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return S("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},S("div",{class:`${e}-layout-toggle-bar__top`}),S("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Je={position:J,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Qe=C({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),Je),setup(e){const o=ve(ce),t=z(null),r=z(null),i=w(()=>K(a.value?e.collapsedWidth:e.width)),l=w(()=>e.collapseMode!=="transform"?{}:{minWidth:K(e.width)}),c=w(()=>o?o.siderPlacement:"left"),s=z(e.defaultCollapsed),a=ye(ee(e,"collapsed"),s);function p(b,n){if(e.nativeScrollbar){const{value:g}=t;g&&(n===void 0?g.scrollTo(b):g.scrollTo(b,n))}else{const{value:g}=r;g&&g.scrollTo(b,n)}}function E(){const{"onUpdate:collapsed":b,onUpdateCollapsed:n,onExpand:g,onCollapse:A}=e,{value:M}=a;n&&W(n,!M),b&&W(b,!M),s.value=!M,M?g&&W(g):A&&W(A)}let R=0,u=0;const f=b=>{var n;const g=b.target;R=g.scrollLeft,u=g.scrollTop,(n=e.onScroll)===null||n===void 0||n.call(e,b)};le(()=>{if(e.nativeScrollbar){const b=t.value;b&&(b.scrollTop=u,b.scrollLeft=R)}}),re(Ce,{collapsedRef:a,collapseModeRef:ee(e,"collapseMode")});const{mergedClsPrefixRef:_,inlineThemeDisabled:d}=q(e),x=V("Layout","-layout-sider",Ke,Q,e,_);function k(b){var n,g;b.propertyName==="max-width"&&(a.value?(n=e.onAfterLeave)===null||n===void 0||n.call(e):(g=e.onAfterEnter)===null||g===void 0||g.call(e))}const X={scrollTo:p},Y=w(()=>{const{common:{cubicBezierEaseInOut:b},self:n}=x.value,{siderToggleButtonColor:g,siderToggleButtonBorder:A,siderToggleBarColor:M,siderToggleBarColorHover:he}=n,$={"--n-bezier":b,"--n-toggle-button-color":g,"--n-toggle-button-border":A,"--n-toggle-bar-color":M,"--n-toggle-bar-color-hover":he};return e.inverted?($["--n-color"]=n.siderColorInverted,$["--n-text-color"]=n.textColorInverted,$["--n-border-color"]=n.siderBorderColorInverted,$["--n-toggle-button-icon-color"]=n.siderToggleButtonIconColorInverted,$.__invertScrollbar=n.__invertScrollbar):($["--n-color"]=n.siderColor,$["--n-text-color"]=n.textColor,$["--n-border-color"]=n.siderBorderColor,$["--n-toggle-button-icon-color"]=n.siderToggleButtonIconColor),$}),P=d?G("layout-sider",w(()=>e.inverted?"a":"b"),Y,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:r,mergedClsPrefix:_,mergedTheme:x,styleMaxWidth:i,mergedCollapsed:a,scrollContainerStyle:l,siderPlacement:c,handleNativeElScroll:f,handleTransitionend:k,handleTriggerClick:E,inlineThemeDisabled:d,cssVars:Y,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender},X)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),S("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:K(this.width)}]},this.nativeScrollbar?S("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):S(ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),r?r==="bar"?S(Ge,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):S(qe,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?S("div",{class:`${o}-layout-sider__border`}):null)}}),Ze={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},eo=O("path",{d:"M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",fill:"currentColor"},null,-1),oo=[eo],to=C({name:"Close",render:function(o,t){return T(),j("svg",Ze,oo)}}),ro={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},lo=O("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),no=O("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),so=O("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),ao=[lo,no,so],io=C({name:"HomeOutline",render:function(o,t){return T(),j("svg",ro,ao)}}),co=C({name:"TabItem"}),uo=C({...co,props:{isShowCloseIcon:{type:Boolean,default:!0},tabInfo:{type:Object,default:()=>({})}},emits:["handleTabClose","handleTabClick"],setup(e,{emit:o}){var l;(l=D())==null||l.proxy;const t=o,r=c=>{t("handleTabClose",c)},i=c=>{t("handleTabClick",c)};return(c,s)=>{const a=se;return T(),j("div",{class:U(["wrap-tabs__item",{"bg-primary:25":c.$route.meta.title===e.tabInfo.title}]),onClick:s[1]||(s[1]=p=>i(e.tabInfo))},[xe(c.$slots,"tab-item__header",{},void 0,!0),O("span",null,Te(e.tabInfo.title),1),e.isShowCloseIcon?(T(),j("div",{key:0,class:"tab-item-icon",onClick:s[0]||(s[0]=Se(p=>r(e.tabInfo),["stop"]))},[v(a,{size:"15"},{default:I(()=>[v(h(to))]),_:1})])):H("",!0)],2)}}});const ue=N(uo,[["__scopeId","data-v-9c8e0751"]]),ho=C({name:"TabHeader"}),bo=C({...ho,setup(e){var r;(r=D())==null||r.proxy;const o=ae(),t=()=>{o.push("/home")};return(i,l)=>{const c=se;return T(),L(ue,{class:"warp-tab__header","is-show-close-icon":!1,onClick:t},{"tab-item__header":I(()=>[v(c,{size:"15"},{default:I(()=>[v(h(io),{class:"hover:bg-primary:25"})]),_:1})]),_:1})}}});const go=N(bo,[["__scopeId","data-v-cc3509b1"]]),fo=C({name:"TabContent"}),po=C({...fo,setup(e){var R;(R=D())==null||R.proxy;const o=we(),t=ae(),r=ke([]),i=z(null),l=z(null),c=u=>(console.log(r),r.findIndex(f=>f.path===u)),s=u=>{c(u.fullPath)===-1&&u.fullPath!=="/home"&&r.push({path:u.fullPath,title:u.meta.title})},a=u=>{t.push({path:u.path})},p=u=>{var _;const f=c(u.path);if(r.splice(f,1),u.path===o.fullPath){const d=z(0);f?d.value=f-1:d.value=f,t.push({path:((_=r[d.value])==null?void 0:_.path)||"/home"})}};oe(()=>o,()=>{s(o)},{deep:!0,immediate:!0}),oe(()=>r.length,()=>{r.length||t.push({path:"/"})},{deep:!0,immediate:!0});const E=()=>{var u;(u=i.value)==null||u.addEventListener("wheel",f=>{const _=f.deltaY>0?1:-1;f.preventDefault(),l.value.scrollLeft+=_*50})};return Ie(()=>{E()}),(u,f)=>(T(),j("div",{ref_key:"tabContentDom",ref:i,class:"wrap-tab__content"},[O("div",{ref_key:"scrollContentDom",ref:l,class:"scroll-content"},[(T(!0),j(ie,null,Be(h(r),(_,d)=>(T(),L(ue,{key:d,"tab-info":_,onHandleTabClick:a,onHandleTabClose:p},null,8,["tab-info"]))),128))],512)],512))}});const _o=N(po,[["__scopeId","data-v-d542068c"]]),mo={class:"wrap-tabs"},vo=C({name:"Tab"}),yo=C({...vo,setup(e){var o;return(o=D())==null||o.proxy,(t,r)=>{const i=$e;return T(),j(ie,null,[O("div",mo,[v(go),v(_o)]),v(i,{class:"m-0px!"})],64)}}});const Co=N(yo,[["__scopeId","data-v-18ef91ec"]]),xo=C({name:"CustomLayout"}),To=C({...xo,setup(e){var p;(p=D())==null||p.proxy;const o=ze(),t=w(()=>o.darkMode),r=w(()=>o.header),i=w(()=>o.sider),l=w(()=>o.layout.mode),c=w(()=>o.tab),s=z(!1),a=()=>{s.value=!s.value};return(E,R)=>{const u=je,f=Oe,_=Qe,d=Ee,x=Me,k=He,X=Xe,Y=Re("router-view"),P=Ae,b=Ye;return T(),L(b,{"has-sider":"",class:"wrap-custom h-100%"},{default:I(()=>[h(l).includes("vertical")?(T(),j("div",{key:0,class:U(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",h(i).inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[v(d,{theme:h(i).inverted?h(te):null,class:"h-full"},{default:I(()=>[v(_,{class:"h-full bg-transparent","collapse-mode":"width","collapsed-width":58,width:240,collapsed:h(s),"show-trigger":"",bordered:"",onCollapse:a,onExpand:a},{default:I(()=>[v(u,{collapsed:h(s)},null,8,["collapsed"]),v(f,{mode:"vertical",collapsed:h(s)},null,8,["collapsed"])]),_:1},8,["collapsed"])]),_:1},8,["theme"])],2)):H("",!0),v(b,{class:""},{default:I(()=>[O("div",{class:U(["dark:bg-dark dark:text-white dark:text-opacity-82 transition-all",h(r).inverted?"bg-#001428 text-white":"bg-white text-#333639"])},[v(d,{theme:h(r).inverted?h(te):null},{default:I(()=>[v(X,{class:"h-50px flex justify-between items-center p-x-12px",bordered:""},{default:I(()=>[h(l).includes("horizontal")?(T(),L(u,{key:0,class:"w-240px"})):H("",!0),h(r).crumb.visible&&h(l).includes("vertical")?(T(),L(x,{key:1})):H("",!0),h(l).includes("horizontal")?(T(),L(f,{key:2,mode:"horizontal"})):H("",!0),v(k)]),_:1})]),_:1},8,["theme"])],2),v(P,{class:"wrap-custom__content flex flex-col"},{default:I(()=>[h(c).visible?(T(),L(Co,{key:0})):H("",!0),v(Y,{class:U(["wrap-content p-12px overflow-auto transition-all",{is_show_tabs:h(c).visible,"bg-layout_inverted":h(t),"bg-layout":!h(t)}])},{default:I(({Component:n,route:g})=>[v(Pe,{name:h(o).pageAnimateMode,mode:"out-in",appear:""},{default:I(()=>[(T(),L(Le(n),{key:g.path}))]),_:2},1032,["name"])]),_:1},8,["class"])]),_:1})]),_:1})]),_:1})}}});const wo=N(To,[["__scopeId","data-v-9dad821a"]]);export{wo as default};
