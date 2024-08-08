import{g as N,l as r,c as Xe,a as Ye,am as Ze,s as et,an as tt,ao as lt,ap as at,aq as rt,b as ot,f as nt,t as re,ar as st,aa as U,as as it,at as dt,au as ct,av as ut,r as w,aw as ft,ax as mt,N as ie,ae as ce,q as pt,w as vt,x as ae,j as O,d as M,e as Y,n as L,o as he,ay as ht,h as gt,u as Se,az as bt,aA as J,aB as yt,p as _t,aC as St,z as se,ah as H,a7 as X,ai as ee,S as xe,T as G,A as j,Q,J as d,I as n,ac as P,K as a,B as we,V as xt,W as wt,aj as kt,a9 as K,ak as ke,aD as ue,aE as fe,ad as A,aF as Ct,a8 as de,al as Ce,D as Rt,ag as Re,E as Tt,aG as zt,ab as Z,af as Dt}from"./index-c17896f8.js";import{u as Te}from"./table-a84f3163.js";import{_ as me}from"./FormItemGridItem-7a584310.js";import{a as It,b as Nt,_ as ze}from"./DataTable-19a8255a.js";import{_ as pe}from"./Grid-5bd7fcd6.js";import{_ as ve}from"./FormItem-af78cc3d.js";import{_ as De}from"./Scrollbar-bf5eb4f1.js";import{N as Ie,_ as Ft}from"./TreeSelect-1c0a50e6.js";import"./Forward-600c26c3.js";const Ot=N({name:"Search",render(){return r("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:"enable-background: new 0 0 512 512"},r("path",{d:`M443.5,420.2L336.7,312.4c20.9-26.2,33.5-59.4,33.5-95.5c0-84.5-68.5-153-153.1-153S64,132.5,64,217s68.5,153,153.1,153
  c36.6,0,70.1-12.8,96.5-34.2l106.1,107.1c3.2,3.4,7.6,5.1,11.9,5.1c4.1,0,8.2-1.5,11.3-4.5C449.5,437.2,449.7,426.8,443.5,420.2z
   M217.1,337.1c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-84.9c0-32.1,12.5-62.3,35.2-84.9c22.7-22.7,52.9-35.2,85-35.2
  c32.1,0,62.3,12.5,85,35.2c22.7,22.7,35.2,52.9,35.2,84.9c0,32.1-12.5,62.3-35.2,84.9C279.4,324.6,249.2,337.1,217.1,337.1z`}))}}),Ut=t=>{const{fontWeight:s,fontSizeLarge:o,fontSizeMedium:p,fontSizeSmall:u,heightLarge:f,heightMedium:c,borderRadius:i,cardColor:h,tableHeaderColor:m,textColor1:S,textColorDisabled:x,textColor2:k,textColor3:g,borderColor:v,hoverColor:_,closeColorHover:b,closeColorPressed:y,closeIconColor:C,closeIconColorHover:F,closeIconColorPressed:e}=t;return Object.assign(Object.assign({},rt),{itemHeightSmall:c,itemHeightMedium:c,itemHeightLarge:f,fontSizeSmall:u,fontSizeMedium:p,fontSizeLarge:o,borderRadius:i,dividerColor:v,borderColor:v,listColor:h,headerColor:ot(h,m),titleTextColor:S,titleTextColorDisabled:x,extraTextColor:g,extraTextColorDisabled:x,itemTextColor:k,itemTextColorDisabled:x,itemColorPending:_,titleFontWeight:s,closeColorHover:b,closeColorPressed:y,closeIconColor:C,closeIconColorHover:F,closeIconColorPressed:e})},$t=Xe({name:"Transfer",common:Ye,peers:{Checkbox:Ze,Scrollbar:et,Input:tt,Empty:lt,Button:at},self:Ut}),Lt=$t,te=nt("n-transfer"),ge=N({name:"TransferHeader",props:{size:{type:String,required:!0},selectAllText:String,clearText:String,source:Boolean,onCheckedAll:Function,onClearAll:Function,title:String},setup(t){const{targetOptionsRef:s,canNotSelectAnythingRef:o,canBeClearedRef:p,allCheckedRef:u,mergedThemeRef:f,disabledRef:c,mergedClsPrefixRef:i,srcOptionsLengthRef:h}=re(te),{localeRef:m}=st("Transfer");return()=>{const{source:S,onClearAll:x,onCheckedAll:k,selectAllText:g,clearText:v}=t,{value:_}=f,{value:b}=i,{value:y}=m,C=t.size==="large"?"small":"tiny",{title:F}=t;return r("div",{class:`${b}-transfer-list-header`},F&&r("div",{class:`${b}-transfer-list-header__title`},F),S&&r(U,{class:`${b}-transfer-list-header__button`,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button,size:C,tertiary:!0,onClick:u.value?x:k,disabled:o.value||c.value},{default:()=>u.value?v||y.unselectAll:g||y.selectAll}),!S&&p.value&&r(U,{class:`${b}-transfer-list-header__button`,theme:_.peers.Button,themeOverrides:_.peerOverrides.Button,size:C,tertiary:!0,onClick:x,disabled:c.value},{default:()=>y.clearAll}),r("div",{class:`${b}-transfer-list-header__extra`},S?y.total(h.value):y.selected(s.value.length)))}}}),be=N({name:"NTransferListItem",props:{source:Boolean,label:{type:String,required:!0},value:{type:[String,Number],required:!0},disabled:Boolean,option:{type:Object,required:!0}},setup(t){const{targetValueSetRef:s,mergedClsPrefixRef:o,mergedThemeRef:p,handleItemCheck:u,renderSourceLabelRef:f,renderTargetLabelRef:c,showSelectedRef:i}=re(te),h=it(()=>s.value.has(t.value));function m(){t.disabled||u(!h.value,t.value)}return{mergedClsPrefix:o,mergedTheme:p,checked:h,showSelected:i,renderSourceLabel:f,renderTargetLabel:c,handleClick:m}},render(){const{disabled:t,mergedTheme:s,mergedClsPrefix:o,label:p,checked:u,source:f,renderSourceLabel:c,renderTargetLabel:i}=this;return r("div",{class:[`${o}-transfer-list-item`,t&&`${o}-transfer-list-item--disabled`,f?`${o}-transfer-list-item--source`:`${o}-transfer-list-item--target`],onClick:f?this.handleClick:void 0},r("div",{class:`${o}-transfer-list-item__background`}),f&&this.showSelected&&r("div",{class:`${o}-transfer-list-item__checkbox`},r(ut,{theme:s.peers.Checkbox,themeOverrides:s.peerOverrides.Checkbox,disabled:t,checked:u})),r("div",{class:`${o}-transfer-list-item__label`,title:ct(p)},f?c?c({option:this.option}):p:i?i({option:this.option}):p),!f&&!t&&r(dt,{focusable:!1,class:`${o}-transfer-list-item__close`,clsPrefix:o,onClick:this.handleClick}))}}),ye=N({name:"TransferList",props:{virtualScroll:{type:Boolean,required:!0},itemSize:{type:Number,required:!0},options:{type:Array,required:!0},disabled:{type:Boolean,required:!0},source:Boolean},setup(){const{mergedThemeRef:t,mergedClsPrefixRef:s}=re(te),o=w(null),p=w(null);function u(){var i;(i=o.value)===null||i===void 0||i.sync()}function f(){const{value:i}=p;if(!i)return null;const{listElRef:h}=i;return h}function c(){const{value:i}=p;if(!i)return null;const{itemsElRef:h}=i;return h}return{mergedTheme:t,mergedClsPrefix:s,scrollerInstRef:o,vlInstRef:p,syncVLScroller:u,scrollContainer:f,scrollContent:c}},render(){const{mergedTheme:t,options:s}=this;if(s.length===0)return r(ft,{theme:t.peers.Empty,themeOverrides:t.peerOverrides.Empty});const{mergedClsPrefix:o,virtualScroll:p,source:u,disabled:f,syncVLScroller:c}=this;return r(ie,{ref:"scrollerInstRef",theme:t.peers.Scrollbar,themeOverrides:t.peerOverrides.Scrollbar,container:p?this.scrollContainer:void 0,content:p?this.scrollContent:void 0},{default:()=>p?r(mt,{ref:"vlInstRef",style:{height:"100%"},class:`${o}-transfer-list-content`,items:this.options,itemSize:this.itemSize,showScrollbar:!1,onResize:c,onScroll:c,keyField:"value"},{default:({item:i})=>{const{source:h,disabled:m}=this;return r(be,{source:h,key:i.value,value:i.value,disabled:i.disabled||m,label:i.label,option:i})}}):r("div",{class:`${o}-transfer-list-content`},s.map(i=>r(be,{source:u,key:i.value,value:i.value,disabled:i.disabled||f,label:i.label,option:i})))})}}),_e=N({name:"TransferFilter",props:{value:String,placeholder:String,disabled:Boolean,onUpdateValue:{type:Function,required:!0}},setup(){const{mergedThemeRef:t,mergedClsPrefixRef:s}=re(te);return{mergedClsPrefix:s,mergedTheme:t}},render(){const{mergedTheme:t,mergedClsPrefix:s}=this;return r("div",{class:`${s}-transfer-filter`},r(ce,{value:this.value,onUpdateValue:this.onUpdateValue,disabled:this.disabled,placeholder:this.placeholder,theme:t.peers.Input,themeOverrides:t.peerOverrides.Input,clearable:!0,size:"small"},{"clear-icon-placeholder":()=>r(pt,{clsPrefix:s},{default:()=>r(Ot,null)})}))}});function Bt(t){const s=w(t.defaultValue),o=vt(ae(t,"value"),s),p=O(()=>{const e=new Map;return(t.options||[]).forEach(l=>e.set(l.value,l)),e}),u=O(()=>new Set(o.value||[])),f=O(()=>{const e=p.value,l=[];return(o.value||[]).forEach(T=>{const z=e.get(T);z&&l.push(z)}),l}),c=w(""),i=w(""),h=O(()=>t.sourceFilterable||!!t.filterable),m=O(()=>{const{showSelected:e,options:l,filter:T}=t;return h.value?l.filter(z=>T(c.value,z,"source")&&(e||!u.value.has(z.value))):e?l:l.filter(z=>!u.value.has(z.value))}),S=O(()=>{if(!t.targetFilterable)return f.value;const{filter:e}=t;return f.value.filter(l=>e(i.value,l,"target"))}),x=O(()=>{const{value:e}=o;return e===null?new Set:new Set(e)}),k=O(()=>{const e=new Set(x.value);return m.value.forEach(l=>{!l.disabled&&!e.has(l.value)&&e.add(l.value)}),e}),g=O(()=>{const e=new Set(x.value);return m.value.forEach(l=>{!l.disabled&&e.has(l.value)&&e.delete(l.value)}),e}),v=O(()=>{const e=new Set(x.value);return S.value.forEach(l=>{l.disabled||e.delete(l.value)}),e}),_=O(()=>m.value.every(e=>e.disabled)),b=O(()=>{if(!m.value.length)return!1;const e=x.value;return m.value.every(l=>l.disabled||e.has(l.value))}),y=O(()=>S.value.some(e=>!e.disabled));function C(e){c.value=e??""}function F(e){i.value=e??""}return{uncontrolledValueRef:s,mergedValueRef:o,targetValueSetRef:u,valueSetForCheckAllRef:k,valueSetForUncheckAllRef:g,valueSetForClearRef:v,filteredTgtOptionsRef:S,filteredSrcOptionsRef:m,targetOptionsRef:f,canNotSelectAnythingRef:_,canBeClearedRef:y,allCheckedRef:b,srcPatternRef:c,tgtPatternRef:i,mergedSrcFilterableRef:h,handleSrcFilterUpdateValue:C,handleTgtFilterUpdateValue:F}}const Mt=M("transfer",`
 width: 100%;
 font-size: var(--n-font-size);
 height: 300px;
 display: flex;
 flex-wrap: nowrap;
 word-break: break-word;
`,[Y("disabled",[M("transfer-list",[M("transfer-list-header",[L("title",`
 color: var(--n-header-text-color-disabled);
 `),L("extra",`
 color: var(--n-header-extra-text-color-disabled);
 `)])])]),M("transfer-list",`
 flex: 1;
 min-width: 0;
 height: inherit;
 display: flex;
 flex-direction: column;
 background-clip: padding-box;
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-list-color);
 `,[Y("source",`
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[L("border","border-right: 1px solid var(--n-divider-color);")]),Y("target",`
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[L("border","border-left: none;")]),L("border",`
 padding: 0 12px;
 border: 1px solid var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),M("transfer-list-header",`
 min-height: var(--n-header-height);
 box-sizing: border-box;
 display: flex;
 padding: 12px 12px 10px 12px;
 align-items: center;
 background-clip: padding-box;
 border-radius: inherit;
 border-bottom-left-radius: 0;
 border-bottom-right-radius: 0;
 line-height: 1.5;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[he("> *:not(:first-child)",`
 margin-left: 8px;
 `),L("title",`
 flex: 1;
 min-width: 0;
 line-height: 1.5;
 font-size: var(--n-header-font-size);
 font-weight: var(--n-header-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-header-text-color);
 `),L("button",`
 position: relative;
 `),L("extra",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-extra-font-size);
 margin-right: 0;
 white-space: nowrap;
 color: var(--n-header-extra-text-color);
 `)]),M("transfer-list-body",`
 flex-basis: 0;
 flex-grow: 1;
 box-sizing: border-box;
 position: relative;
 display: flex;
 flex-direction: column;
 border-radius: inherit;
 border-top-left-radius: 0;
 border-top-right-radius: 0;
 `,[M("transfer-filter",`
 padding: 4px 12px 8px 12px;
 box-sizing: border-box;
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),M("transfer-list-flex-container",`
 flex: 1;
 position: relative;
 `,[M("scrollbar",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 height: unset;
 `),M("empty",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 `),M("transfer-list-content",`
 padding: 0;
 margin: 0;
 position: relative;
 `,[M("transfer-list-item",`
 padding: 0 12px;
 min-height: var(--n-item-height);
 display: flex;
 align-items: center;
 color: var(--n-item-text-color);
 position: relative;
 transition: color .3s var(--n-bezier);
 `,[L("background",`
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),L("checkbox",`
 position: relative;
 margin-right: 8px;
 `),L("close",`
 opacity: 0;
 pointer-events: none;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 position: relative;
 min-width: 0;
 flex-grow: 1;
 `),Y("source","cursor: pointer;"),Y("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `),ht("disabled",[he("&:hover",[L("background","background-color: var(--n-item-color-pending);"),L("close",`
 opacity: 1;
 pointer-events: all;
 `)])])])])])])])]),At=Object.assign(Object.assign({},Se.props),{value:Array,defaultValue:{type:Array,default:null},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:void 0},virtualScroll:Boolean,sourceTitle:String,selectAllText:String,clearText:String,targetTitle:String,filterable:{type:Boolean,default:void 0},sourceFilterable:Boolean,targetFilterable:Boolean,showSelected:{type:Boolean,default:!0},sourceFilterPlaceholder:String,targetFilterPlaceholder:String,filter:{type:Function,default:(t,s)=>t?~(""+s.label).toLowerCase().indexOf((""+t).toLowerCase()):!0},size:String,renderSourceLabel:Function,renderTargetLabel:Function,renderSourceList:Function,renderTargetList:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]}),Pt=N({name:"Transfer",props:At,setup(t){const{mergedClsPrefixRef:s}=gt(t),o=Se("Transfer","-transfer",Mt,Lt,t,s),p=bt(t),{mergedSizeRef:u,mergedDisabledRef:f}=p,c=O(()=>{const{value:I}=u,{self:{[J("itemHeight",I)]:$}}=o.value;return yt($)}),{uncontrolledValueRef:i,mergedValueRef:h,targetValueSetRef:m,valueSetForCheckAllRef:S,valueSetForUncheckAllRef:x,valueSetForClearRef:k,filteredTgtOptionsRef:g,filteredSrcOptionsRef:v,targetOptionsRef:_,canNotSelectAnythingRef:b,canBeClearedRef:y,allCheckedRef:C,srcPatternRef:F,tgtPatternRef:e,mergedSrcFilterableRef:l,handleSrcFilterUpdateValue:T,handleTgtFilterUpdateValue:z}=Bt(t);function B(I){const{onUpdateValue:$,"onUpdate:value":W,onChange:le}=t,{nTriggerFormInput:oe,nTriggerFormChange:ne}=p;$&&se($,I),W&&se(W,I),le&&se(le,I),i.value=I,oe(),ne()}function E(){B([...S.value])}function V(){B([...x.value])}function R(){B([...k.value])}function q(I,$){B(I?(h.value||[]).concat($):(h.value||[]).filter(W=>W!==$))}function D(I){B(I)}return _t(te,{targetValueSetRef:m,mergedClsPrefixRef:s,disabledRef:f,mergedThemeRef:o,targetOptionsRef:_,canNotSelectAnythingRef:b,canBeClearedRef:y,allCheckedRef:C,srcOptionsLengthRef:O(()=>t.options.length),handleItemCheck:q,renderSourceLabelRef:ae(t,"renderSourceLabel"),renderTargetLabelRef:ae(t,"renderTargetLabel"),showSelectedRef:ae(t,"showSelected")}),{mergedClsPrefix:s,mergedDisabled:f,itemSize:c,isMounted:St(),mergedTheme:o,filteredSrcOpts:v,filteredTgtOpts:g,srcPattern:F,tgtPattern:e,mergedSize:u,mergedSrcFilterable:l,handleSrcFilterUpdateValue:T,handleTgtFilterUpdateValue:z,handleSourceCheckAll:E,handleSourceUncheckAll:V,handleTargetClearAll:R,handleItemCheck:q,handleChecked:D,cssVars:O(()=>{const{value:I}=u,{common:{cubicBezierEaseInOut:$},self:{borderRadius:W,borderColor:le,listColor:oe,titleTextColor:ne,titleTextColorDisabled:Ne,extraTextColor:Fe,itemTextColor:Oe,itemColorPending:Ue,itemTextColorDisabled:$e,titleFontWeight:Le,closeColorHover:Be,closeColorPressed:Me,closeIconColor:Ae,closeIconColorHover:Pe,closeIconColorPressed:Ve,closeIconSize:je,closeSize:Ke,dividerColor:Ee,extraTextColorDisabled:qe,[J("extraFontSize",I)]:He,[J("fontSize",I)]:Ge,[J("titleFontSize",I)]:We,[J("itemHeight",I)]:Je,[J("headerHeight",I)]:Qe}}=o.value;return{"--n-bezier":$,"--n-border-color":le,"--n-border-radius":W,"--n-extra-font-size":He,"--n-font-size":Ge,"--n-header-font-size":We,"--n-header-extra-text-color":Fe,"--n-header-extra-text-color-disabled":qe,"--n-header-font-weight":Le,"--n-header-text-color":ne,"--n-header-text-color-disabled":Ne,"--n-item-color-pending":Ue,"--n-item-height":Je,"--n-item-text-color":Oe,"--n-item-text-color-disabled":$e,"--n-list-color":oe,"--n-header-height":Qe,"--n-close-size":Ke,"--n-close-icon-size":je,"--n-close-color-hover":Be,"--n-close-color-pressed":Me,"--n-close-icon-color":Ae,"--n-close-icon-color-hover":Pe,"--n-close-icon-color-pressed":Ve,"--n-divider-color":Ee}})}},render(){const{mergedClsPrefix:t,renderSourceList:s,renderTargetList:o,mergedTheme:p,mergedSrcFilterable:u,targetFilterable:f}=this;return r("div",{class:[`${t}-transfer`,this.mergedDisabled&&`${t}-transfer--disabled`],style:this.cssVars},r("div",{class:`${t}-transfer-list ${t}-transfer-list--source`},r(ge,{source:!0,selectAllText:this.selectAllText,clearText:this.clearText,title:this.sourceTitle,onCheckedAll:this.handleSourceCheckAll,onClearAll:this.handleSourceUncheckAll,size:this.mergedSize}),r("div",{class:`${t}-transfer-list-body`},u?r(_e,{onUpdateValue:this.handleSrcFilterUpdateValue,value:this.srcPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,r("div",{class:`${t}-transfer-list-flex-container`},s?r(ie,{theme:p.peers.Scrollbar,themeOverrides:p.peerOverrides.Scrollbar},{default:()=>s({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.srcPattern})}):r(ye,{source:!0,options:this.filteredSrcOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),r("div",{class:`${t}-transfer-list__border`})),r("div",{class:`${t}-transfer-list ${t}-transfer-list--target`},r(ge,{onClearAll:this.handleTargetClearAll,size:this.mergedSize,title:this.targetTitle}),r("div",{class:`${t}-transfer-list-body`},f?r(_e,{onUpdateValue:this.handleTgtFilterUpdateValue,value:this.tgtPattern,disabled:this.mergedDisabled,placeholder:this.sourceFilterPlaceholder}):null,r("div",{class:`${t}-transfer-list-flex-container`},o?r(ie,{theme:p.peers.Scrollbar,themeOverrides:p.peerOverrides.Scrollbar},{default:()=>o({onCheck:this.handleChecked,checkedOptions:this.filteredTgtOpts,pattern:this.tgtPattern})}):r(ye,{options:this.filteredTgtOpts,disabled:this.mergedDisabled,virtualScroll:this.virtualScroll,itemSize:this.itemSize}))),r("div",{class:`${t}-transfer-list__border`})))}}),Vt=N({name:"RoleOperateModal"}),jt=N({...Vt,props:H({operateType:{},rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:H(["submitted"],["update:visible"]),setup(t,{emit:s}){const o=t,p=s,u=X(),f=w(null),c=ee(t,"visible"),i=O(()=>({add:"新增角色",edit:"编辑角色"})[o.operateType]);function h(){c.value=!1}const m=xe(S());function S(){return{roleName:"",roleCode:"",dsType:"0",disableRole:"0",roleDesc:"",sortno:1}}const x={roleName:{required:!0,trigger:["blur","input"],message:"请输入角色名称"},roleCode:{required:!0,trigger:["blur","input"],message:"请输入角色名称"},dsType:{required:!0,trigger:["blur","change"],message:"请选择数据权限"}};function k(){Object.assign(m,S()),o.rowData&&o.operateType==="edit"&&Object.assign(m,o.rowData,{id:o.rowData.roleId})}async function g(){var v;(v=f.value)==null||v.validate(async _=>{_||(o.operateType==="add"?await u.addSystemRole(m):await u.putSystemRole(m),h(),p("submitted"))})}return G(c,()=>{var v;c.value&&(k(),console.log(m),(v=f.value)==null||v.restoreValidation())}),(v,_)=>{const b=ce,y=me,C=kt,F=It,e=Nt,l=pe,T=ve,z=De,B=U,E=K,V=ke;return j(),Q(V,{show:c.value,"onUpdate:show":_[5]||(_[5]=R=>c.value=R),title:a(i),preset:"card",class:"w-800px"},{footer:d(()=>[n(E,{justify:"end",size:16},{default:d(()=>[n(B,{onClick:h},{default:d(()=>[P("取消")]),_:1}),n(B,{type:"primary",onClick:g},{default:d(()=>[P(" 确认 ")]),_:1})]),_:1})]),default:d(()=>[n(z,{class:"h-280px pr-20px"},{default:d(()=>[n(T,{ref_key:"formRoleRef",ref:f,model:a(m),rules:x,"label-placement":"left","label-width":100},{default:d(()=>[n(l,{responsive:"screen","item-responsive":""},{default:d(()=>[n(y,{span:"24 m:12",label:"角色名称",path:"roleName"},{default:d(()=>[n(b,{value:a(m).roleName,"onUpdate:value":_[0]||(_[0]=R=>a(m).roleName=R),placeholder:"请输入角色名称"},null,8,["value"])]),_:1}),n(y,{span:"24 m:12",label:"角色标识",path:"roleCode"},{default:d(()=>[n(b,{value:a(m).roleCode,"onUpdate:value":_[1]||(_[1]=R=>a(m).roleCode=R),placeholder:"请输入角色标识"},null,8,["value"])]),_:1}),n(y,{span:"24 m:24",label:"数据权限",path:"dsType"},{default:d(()=>[n(C,{value:a(m).dsType,"onUpdate:value":_[2]||(_[2]=R=>a(m).dsType=R),options:a(u).dsTypeOptions,placeholder:"请选择数据权限"},null,8,["value","options"])]),_:1}),n(y,{span:"24 m:12",label:"是否启用",path:"disableRole"},{default:d(()=>[n(e,{value:a(m).disableRole,"onUpdate:value":_[3]||(_[3]=R=>a(m).disableRole=R)},{default:d(()=>[(j(!0),we(xt,null,wt(a(u).roleSwatchOptions,R=>(j(),Q(F,{key:R.value,value:R.value,label:R.label},null,8,["value","label"]))),128))]),_:1},8,["value"])]),_:1}),n(y,{span:"24 m:24",label:"角色描述",path:"roleDesc"},{default:d(()=>[n(b,{value:a(m).roleDesc,"onUpdate:value":_[4]||(_[4]=R=>a(m).roleDesc=R),placeholder:"请输入角色描述"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show","title"])}}}),Kt=N({name:"OperateDepartmentDrawer"}),Et=N({...Kt,props:H({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(t){const s=t,o=X(),p=w(!1),u=ee(t,"visible"),f=w([]),c=w([]),i=w([]),h=async()=>{const g=await o.getSystemOrganizationalTree();g.code===200&&(f.value=g.data)},m=async()=>{if(!s.rowData)return;const g=await o.getSystemOrganizationalByRole(s.rowData.roleId);g.code===200&&(c.value=g.data.records.map(v=>v.orgId),i.value=[...c.value])},S=g=>{i.value=g},x=async()=>{if(!s.rowData)return;(await o.addSystemDep({roleId:s.rowData.roleId,orgIds:i.value})).code===200&&k()};function k(){u.value=!1}return G(u,async g=>{g&&(await h(),await m())}),(g,v)=>(j(),Q(a(fe),{show:u.value,"onUpdate:show":v[0]||(v[0]=_=>u.value=_),width:400},{default:d(()=>[n(a(ue),{title:"部门列表权限配置","native-scrollbar":!1},{footer:d(()=>[n(a(K),{justify:"end",size:16},{default:d(()=>[n(a(U),{onClick:k},{default:d(()=>[P("取消")]),_:1}),n(a(U),{type:"primary",onClick:x},{default:d(()=>[P(" 确认 ")]),_:1})]),_:1})]),default:d(()=>[n(a(Ie),{loading:p.value,"checked-keys":i.value,data:f.value,"key-field":"id","label-field":"name","show-line":"","default-expand-all":"",checkable:"",cascade:"","expand-on-click":"",selectable:"","onUpdate:checkedKeys":S},null,8,["loading","checked-keys","data"])]),_:1})]),_:1},8,["show"]))}}),qt=N({name:"OperateMenuDrawer"}),Ht=N({...qt,props:H({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(t){const s=t,o=X(),p=w(!1),u=w(null),f=ee(t,"visible"),c=w([]),i=w([]),h=w([]),m=async()=>{const v=await o.getSystemMenuTree();v.code===200&&(c.value=v.data)},S=async()=>{if(!s.rowData)return;const v=await o.getSystemActiveMenuList(s.rowData.roleId);v.code===200&&(i.value=v.data,h.value=[...i.value])},x=v=>{h.value=v},k=async()=>{if(!s.rowData)return;const v=u.value&&u.value.getIndeterminateData()&&u.value.getIndeterminateData().keys;(await o.putSystemAuthMenu({roleId:s.rowData.roleId,menuIds:h.value.concat(v||[])})).code===200&&g()};function g(){f.value=!1}return G(f,async v=>{v&&(await m(),await S())}),(v,_)=>{const b=U,y=K;return j(),Q(a(fe),{show:f.value,"onUpdate:show":_[0]||(_[0]=C=>f.value=C),width:400},{default:d(()=>[n(a(ue),{title:"菜单权限配置","native-scrollbar":!1},{footer:d(()=>[n(y,{justify:"end",size:16},{default:d(()=>[n(b,{onClick:g},{default:d(()=>[P("取消")]),_:1}),n(b,{type:"primary",onClick:k},{default:d(()=>[P(" 确认 ")]),_:1})]),_:1})]),default:d(()=>[n(a(Ie),{ref_key:"treeRef",ref:u,loading:p.value,"checked-keys":h.value,data:c.value,"key-field":"id","label-field":"label","show-line":"","default-expand-all":"",checkable:"",cascade:"","expand-on-click":"",selectable:"","onUpdate:checkedKeys":x},null,8,["loading","checked-keys","data"])]),_:1})]),_:1},8,["show"])}}}),Gt=N({name:"RoleUserOperateModal"}),Wt=N({...Gt,props:H({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:H(["submitted"],["update:visible"]),setup(t,{emit:s}){const o=t,p=s,u=X(),f=w(null),c=ee(t,"visible");function i(){c.value=!1}const h=w([]),m=w([]),S=xe(x());function x(){return{transferValue:[]}}const k={transferValue:{type:"array",required:!0,trigger:"change",message:"请选择人员"}};function g(){Object.assign(S,x()),o.rowData}const v=e=>{b.value=e,F(b.value)};async function _(){var e;(e=f.value)==null||e.validate(async l=>{!l&&o.rowData&&(await u.addUserRoleRelation({roleId:o.rowData.roleId,userList:m.value}),i(),p("submitted"))})}const b=w(),y=w([]),C=async()=>{const e=await u.getSystemOrganizationalTree();e.code===200&&(y.value=e.data)},F=async e=>{const l=await u.getUserListByDeptId({deptId:e});l.code===200&&(h.value=l.data.map(T=>({label:T.displayname,value:T.userId,userInfo:T})))};return G(()=>S.transferValue,e=>{console.log(e),console.log(h),m.value=h.value.filter(l=>e.includes(l.value)).map(l=>l.userInfo)}),G(c,async()=>{var e;c.value&&(g(),console.log(S),(e=f.value)==null||e.restoreValidation(),await C())}),(e,l)=>{const T=Ft,z=me,B=Pt,E=pe,V=ve,R=De,q=U,D=K,I=ke;return j(),Q(I,{show:c.value,"onUpdate:show":l[2]||(l[2]=$=>c.value=$),title:"人员关联",preset:"card",class:"w-800px"},{footer:d(()=>[n(D,{justify:"end",size:16},{default:d(()=>[n(q,{onClick:i},{default:d(()=>[P("取消")]),_:1}),n(q,{type:"primary",onClick:_},{default:d(()=>[P(" 确认 ")]),_:1})]),_:1})]),default:d(()=>[n(R,null,{default:d(()=>[n(V,{ref_key:"formRoleRef",ref:f,model:a(S),rules:k,"label-placement":"left","label-width":100},{default:d(()=>[n(E,{responsive:"screen","item-responsive":""},{default:d(()=>[n(z,{span:"24 m:24",path:"username"},{default:d(()=>[n(T,{value:a(b),"onUpdate:value":l[0]||(l[0]=$=>A(b)?b.value=$:null),filterable:"",options:a(y),"default-value":"Drive My Car","key-field":"id","label-field":"name",clearable:"",placeholder:"请选择组织架构","on-update:value":v},null,8,["value","options"])]),_:1}),n(z,{span:"24 m:24",path:"roleName"},{default:d(()=>[n(B,{value:a(S).transferValue,"onUpdate:value":l[1]||(l[1]=$=>a(S).transferValue=$),"virtual-scroll":"","source-filterable":"",options:a(h),class:"h-420px"},null,8,["value","options"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1},8,["show"])}}}),Jt={class:"h-full flex flex-col"},Qt=N({name:"OperateUserDrawer"}),Xt=N({...Qt,props:H({rowData:{}},{visible:{type:Boolean,default:!1},visibleModifiers:{}}),emits:["update:visible"],setup(t){const s=t,o=X(),p=ee(t,"visible"),{rowData:u}=Ct(s);console.log(u);const f=w([]),{columns:c,columnChecks:i,data:h,loading:m,getData:S,pagination:x,searchParams:k}=Te({apiFn:o.getSystemByRoleUserList,apiParams:{current:1,size:10,roleID:null},showTotal:!0,immediate:!1,columns:()=>[{key:"username",title:"登录名",width:120,align:"center",fixed:"left"},{key:"workno",title:"工号",width:120,align:"center",fixed:"left"},{key:"displayname",title:"姓名",width:120,align:"center"},{key:"phone",title:"手机号",width:120,align:"center"},{key:"mail",title:"邮箱",width:120,align:"center"},{key:"disableUser",title:"是否启用",width:120,align:"center",render:b=>r(de,{type:b.disableUser==="1"?"error":"success"},{default:()=>b.disableUser==="1"?"否":"是"})},{key:"active",title:"操作",width:120,align:"center",fixed:"right",render:b=>r(K,{justify:"center"},{default:()=>[r(Ce,{onPositiveClick:()=>_(b)},{default:()=>"确认删除吗？",trigger:()=>r(U,{size:"small",type:"error",ghost:!0},{default:()=>"删除"})})]})}]}),g=w(!1),v=()=>{g.value=!0},_=async b=>{var y;await o.delSystemByRoleUserItem({roleId:(y=u.value)==null?void 0:y.roleId,userId:b.userId}),S()};return G(p,async b=>{b&&(s!=null&&s.rowData)&&(k.roleID=s==null?void 0:s.rowData.roleId,await S())}),G(x,async()=>{console.log(x)}),(b,y)=>{const C=Re,F=ze,e=ue;return j(),Q(a(fe),{show:p.value,"onUpdate:show":y[3]||(y[3]=l=>p.value=l),width:"60%"},{default:d(()=>[n(e,{title:"用户权限配置",closable:""},{default:d(()=>[Rt("div",Jt,[n(C,{columns:a(i),"onUpdate:columns":y[0]||(y[0]=l=>A(i)?i.value=l:null),class:"flex-1 p-y-12px","is-delete-btn":!1,loading:a(m),"add-btn-text":"关联人员",onAdd:v,onRefresh:a(S)},null,8,["columns","loading","onRefresh"]),n(F,{"checked-row-keys":a(f),"onUpdate:checkedRowKeys":y[1]||(y[1]=l=>A(f)?f.value=l:null),columns:a(c),data:a(h),size:"small","flex-height":!0,remote:!0,"scroll-x":640,loading:a(m),pagination:a(x),"row-key":l=>l.id,class:"sm:h-full"},null,8,["checked-row-keys","columns","data","loading","pagination","row-key"])])]),_:1}),n(Wt,{visible:a(g),"onUpdate:visible":y[2]||(y[2]=l=>A(g)?g.value=l:null),"row-data":a(u),onSubmitted:a(S)},null,8,["visible","row-data","onSubmitted"])]),_:1},8,["show"])}}}),Yt={class:"flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto"},Zt=N({name:"SystemManagementRole"}),dl=N({...Zt,setup(t){var F;(F=Tt())==null||F.proxy;const s=X(),{columns:o,columnChecks:p,data:u,loading:f,getData:c,pagination:i,searchParams:h,resetSearchParams:m}=Te({apiFn:s.getSystemRoleList,showTotal:!0,apiParams:{current:1,size:10,roleName:null},columns:()=>[{key:"index",title:"序号",width:64,align:"center"},{key:"roleName",title:"角色名称",width:120,align:"center"},{key:"roleCode",title:"角色标识",width:120,align:"center"},{key:"roleDesc",title:"角色描述",width:120,align:"center"},{key:"dsType",title:"数据权限",width:120,align:"center",render:e=>{var l;return r(de,{type:(l=s.dsTypeOptions.find(T=>T.value===e.dsType+""))==null?void 0:l.type,bordered:!1},{default:()=>{var T;return(T=s.dsTypeOptions.find(z=>z.value===e.dsType+""))==null?void 0:T.label}})}},{key:"disableRole",title:"是否启用",width:120,align:"center",render:e=>r(de,{type:e.disableRole==="1"?"error":"success"},{default:()=>e.disableRole==="1"?"否":"是"})},{key:"active",title:"操作",width:120,align:"center",render:e=>r(K,{justify:"center"},{default:()=>[r(zt,{trigger:"click"},{default:()=>r(K,{vertical:!0},{default:()=>[r(U,{text:!0,onClick:()=>{g.value={...e},b.value=!0}},{default:()=>"部门列表",icon:()=>r(Z,{icon:"icon-loufang"})}),r(U,{text:!0,onClick:()=>{g.value={...e},y.value=!0}},{default:()=>"菜单信息",icon:()=>r(Z,{icon:"icon-caidan"})}),r(U,{text:!0,onClick:()=>{g.value={...e},C.value=!0}},{default:()=>"人员列表",icon:()=>r(Z,{icon:"icon-pintuan"})})]}),trigger:()=>r(U,{size:"small",type:"warning",ghost:!0},{default:()=>"授权"})}),r(U,{size:"small",type:"primary",ghost:!0,onClick:()=>{k.value="edit",g.value={...e},x.value=!0}},{default:()=>"编辑"}),r(Ce,{onPositiveClick:()=>_(e)},{default:()=>"确认删除吗？",trigger:()=>r(U,{size:"small",type:"error",ghost:!0},{default:()=>"删除"})})]})}],immediate:void 0});console.log(i);const S=w([]),x=w(!1),k=w("add"),g=w(void 0),v=()=>{k.value="add",x.value=!0},_=async e=>{await s.delSystemRole(e.roleId),c()},b=w(!1),y=w(!1),C=w(!1);return(e,l)=>{const T=ce,z=me,B=pe,E=ve,V=Dt,R=Re,q=ze;return j(),we("div",Yt,[n(V,{title:"搜索",bordered:!1,size:"small",class:"card-wrapper"},{default:d(()=>[n(E,{model:a(h),"label-placement":"left","label-width":80},{default:d(()=>[n(B,{responsive:"screen","item-responsive":""},{default:d(()=>[n(z,{span:"24 s:12 m:6",label:"角色名称",path:"roleName",class:"pr-24px"},{default:d(()=>[n(T,{value:a(h).roleName,"onUpdate:value":l[0]||(l[0]=D=>a(h).roleName=D),placeholder:"请输入角色名称"},null,8,["value"])]),_:1}),n(z,{span:"24 s:12 m:18"},{default:d(()=>[n(a(K),{class:"w-full",justify:"end"},{default:d(()=>[n(a(U),{type:"primary",ghost:"",onClick:a(c)},{icon:d(()=>[n(Z,{icon:"icon-sousuo1"})]),default:d(()=>[P(" 搜索 ")]),_:1},8,["onClick"]),n(a(U),{onClick:a(m)},{icon:d(()=>[n(Z,{icon:"icon-shuaxin-01"})]),default:d(()=>[P(" 清空 ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n(V,{title:"角色管理",bordered:!1,size:"small",class:"card-wrapper sm:flex-1-hidden"},{"header-extra":d(()=>[n(R,{columns:a(p),"onUpdate:columns":l[1]||(l[1]=D=>A(p)?p.value=D:null),"is-delete-btn":!1,loading:a(f),onAdd:v,onRefresh:a(c)},null,8,["columns","loading","onRefresh"])]),default:d(()=>[n(q,{"checked-row-keys":a(S),"onUpdate:checkedRowKeys":l[2]||(l[2]=D=>A(S)?S.value=D:null),columns:a(o),data:a(u),size:"small","flex-height":!0,remote:!0,"scroll-x":640,loading:a(f),pagination:a(i),"row-key":D=>D.id,class:"sm:h-full"},null,8,["checked-row-keys","columns","data","loading","pagination","row-key"]),n(jt,{visible:a(x),"onUpdate:visible":l[3]||(l[3]=D=>A(x)?x.value=D:null),"operate-type":a(k),"row-data":a(g),onSubmitted:a(c)},null,8,["visible","operate-type","row-data","onSubmitted"]),n(Et,{visible:a(b),"onUpdate:visible":l[4]||(l[4]=D=>A(b)?b.value=D:null),"row-data":a(g),onSubmitted:a(c)},null,8,["visible","row-data","onSubmitted"]),n(Ht,{visible:a(y),"onUpdate:visible":l[5]||(l[5]=D=>A(y)?y.value=D:null),"row-data":a(g),onSubmitted:a(c)},null,8,["visible","row-data","onSubmitted"]),n(Xt,{visible:a(C),"onUpdate:visible":l[6]||(l[6]=D=>A(C)?C.value=D:null),"row-data":a(g),onSubmitted:a(c)},null,8,["visible","row-data","onSubmitted"])]),_:1})])}}});export{dl as default};
