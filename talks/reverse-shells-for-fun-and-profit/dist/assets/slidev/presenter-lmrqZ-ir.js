import{_ as A,a as G,b as H,c as J,d as U}from"../modules/unplugin-icons-BakdvmhU.js";import{t as T,_ as W,d as q,o as u,c as x,i as m,z as o,I as b,b as g,e as t,l as c,x as S,F as O,X as E,$ as X,a0 as K,h as $,p as L,a as Q,C as B,Q as Y,a1 as Z,J as ee,a2 as te,a3 as se,k,g as z,a4 as oe}from"../modules/vue--2rrS9jf.js";import{b as D,c as M,k as ne,l as le,f as ae,u as re,m as C,n as w,o as ie,q as ce,r as ue,v as de,w as pe,x as F,t as me}from"../index-BQcGyKHg.js";import{r as ve,u as _e,S as fe,a as P,I as R,Q as xe,N as be,G as he}from"./SlidesShow-CKcHQuvU.js";import{s as ye,p as ge,S as ke,g as Ce,b as we,i as Se,d as $e,c as I}from"./bottom-vpTquqfb.js";import{i as Ne}from"./DrawingPreview-CbYjeuBC.js";import{N as ze}from"./NoteDisplay-RRJlHaAY.js";import Fe from"./DrawingControls-DzR1ygAE.js";import"../modules/shiki-BQ1XKe-f.js";function Ie(l){if(l==null)return{info:T(),update:async()=>{}};const r=`/@slidev/slide/${l}.json`,{data:s,execute:a}=W(r).json().get();return a(),{info:s,update:async d=>await fetch(r,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(d)}).then(n=>n.json())}}const Te=q({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(l){const r=l,{info:s}=Ie(r.no);return(a,v)=>{var d,n;return u(),x(ze,{class:m(r.class),note:(d=o(s))==null?void 0:d.note,"note-html":(n=o(s))==null?void 0:n.noteHTML,"clicks-context":a.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),qe=D(Te,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteStatic.vue"]]),De=l=>(L("data-v-2fc53ccb"),l=l(),Q(),l),Ve=["title"],je={class:"flex gap-1 items-center min-w-16"},Be={"text-primary":""},Me=De(()=>t("span",{op50:""},"/",-1)),Pe={op50:""},Re=["max"],Oe=q({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(l){const r=l,s=b(()=>r.clicksContext.total),a=b({get(){return r.clicksContext.current>s.value?-1:r.clicksContext.current},set(n){r.clicksContext.current=n}}),v=b(()=>Array.from({length:s.value+1},(n,i)=>i));function d(){(a.value<0||a.value>s.value)&&(a.value=0)}return(n,i)=>{const _=A;return u(),g("div",{class:m(["flex gap-0.5 items-center select-none",s.value?"":"op50"]),title:`Clicks in this slide: ${s.value}`},[t("div",je,[c(_,{"text-sm":"",op50:""}),t("span",Be,S(a.value),1),Me,t("span",Pe,S(s.value),1)]),t("div",{relative:"","flex-auto":"",h5:"",flex:"~",onDblclick:i[2]||(i[2]=e=>a.value=n.clicksContext.total)},[(u(!0),g(O,null,E(v.value,e=>(u(),g("div",{key:e,border:"y main","of-hidden":"",relative:"",class:m([e===0?"rounded-l border-l":"",e===s.value?"rounded-r border-r":""]),style:$({width:s.value>0?`${1/s.value*100}%`:"100%"})},[t("div",{absolute:"","inset-0":"",class:m(e<=a.value?"bg-primary op20":"")},null,2),t("div",{class:m([+e==+a.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===s.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},S(e),3)],6))),128)),X(t("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>a.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:s.value,step:1,"z-10":"",op0:"",style:$({"--thumb-width":`${1/(s.value+1)*100}%`}),onMousedown:d,onFocus:i[1]||(i[1]=e=>{var f;return(f=e.currentTarget)==null?void 0:f.blur()})},null,44,Re),[[K,a.value]])],32)],10,Ve)}}}),Le=D(Oe,[["__scopeId","data-v-2fc53ccb"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),V=l=>(L("data-v-c5d74655"),l=l(),Q(),l),Qe={class:"bg-main h-full slidev-presenter"},Ae=V(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),Ge={class:"relative grid-section next flex flex-col p-2 lg:p-4"},He=V(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Je={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ue={class:"border-t border-main py-1 px-2 text-sm"},We={class:"grid-section bottom flex"},Ee=V(()=>t("div",{"flex-auto":""},null,-1)),Xe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ke={class:"progress-bar"},Ye=q({__name:"presenter",setup(l){const r=T();ve(),_e(r);const s=M.titleTemplate.replace("%s",M.title||"Slidev");ne({title:`Presenter - ${s}`}),T(!1);const{timer:a,resetTimer:v}=le(),d=b(()=>ae.value.map(_=>re(_))),n=b(()=>C.value.current<C.value.total?[w.value,C.value.current+1]:ie.value?[ce.value,0]:null),i=b(()=>n.value&&d.value[n.value[0].no-1]);return B([w,ue],()=>{i.value&&(i.value.current=n.value[1])},{immediate:!0}),Y(),Z(()=>{const _=r.value.querySelector("#slide-content"),e=ee(te()),f=se();B(()=>{if(!f.value||Ne.value||!ye.value)return;const p=_.getBoundingClientRect(),h=(e.x-p.left)/p.width*100,y=(e.y-p.top)/p.height*100;if(!(h<0||h>100||y<0||y>100))return{x:h,y}},p=>{de.cursor=p})}),(_,e)=>{var j;const f=G,p=H,h=J,y=U;return u(),g(O,null,[t("div",Qe,[t("div",{class:m(["grid-container",`layout${o(ge)}`])},[t("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col"},[c(P,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:k(()=>[c(fe,{"render-context":"presenter"})]),_:1}),(u(),x(Le,{key:(j=o(w))==null?void 0:j.no,"clicks-context":o(pe)(o(w)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Ae],512),t("div",Ge,[n.value&&i.value?(u(),x(P,{key:"next",class:"h-full w-full"},{default:k(()=>[(u(),x(ke,{is:n.value[0].component,key:n.value[0].no,"clicks-context":i.value,class:m(o(Ce)(n.value[0])),route:n.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):z("v-if",!0),He]),z(" Notes "),(u(),g("div",Je,[(u(),x(qe,{key:`static-${o(F)}`,no:o(F),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:$({fontSize:`${o(we)}em`}),"clicks-context":o(C)},null,8,["no","style","clicks-context"])),t("div",Ue,[c(R,{title:"Increase font size",onClick:o(Se)},{default:k(()=>[c(f)]),_:1},8,["onClick"]),c(R,{title:"Decrease font size",onClick:o($e)},{default:k(()=>[c(p)]),_:1},8,["onClick"]),z("v-if",!0)])])),t("div",We,[c(be,{persist:!0}),Ee,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:e[2]||(e[2]=(...N)=>o(v)&&o(v)(...N))},[c(h,{class:"absolute"}),c(y,{class:"absolute opacity-0"})]),t("div",Xe,S(o(a)),1)]),(u(),x(Fe,{key:2}))],2),t("div",Ke,[t("div",{class:"progress h-3px bg-primary transition-all",style:$({width:`${(o(F)-1)/(o(me)-1)*100}%`})},null,4)])]),c(he),c(xe,{modelValue:o(I),"onUpdate:modelValue":e[3]||(e[3]=N=>oe(I)?I.value=N:null)},null,8,["modelValue"])],64)}}}),it=D(Ye,[["__scopeId","data-v-c5d74655"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter.vue"]]);export{it as default};
