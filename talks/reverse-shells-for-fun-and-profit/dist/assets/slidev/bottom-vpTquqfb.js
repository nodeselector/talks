function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as n,al as T,am as b,an as k,I as p,ao as z,ap as F,T as a,V as h,U as j,aq as E,d as v,a1 as S,o as g,b as _,F as L,g as A,e as y,W as r,ar as w,c as B,h as P,i as O,ae as $,z as N,as as R,v as D}from"../modules/vue--2rrS9jf.js";import{e as I,_ as M,c,b as x,Q as V,R as W,S as q,T as G,U}from"../index-BQcGyKHg.js";const te=n(!1),ae=n(!1),ne=n(!1),K=n(!1),oe=n(!0),ie=T({xs:460,...E}),C=b(),le=k(),re=p(()=>C.height.value-C.width.value/I.value>120),ce=z(h?document.body:null),m=F(),de=p(()=>{var s,e;return["INPUT","TEXTAREA"].includes(((s=m.value)==null?void 0:s.tagName)||"")||((e=m.value)==null?void 0:e.classList.contains("CodeMirror-code"))}),ue=p(()=>{var s;return["BUTTON","A"].includes(((s=m.value)==null?void 0:s.tagName)||"")});a("slidev-camera","default",{listenToStorageChanges:!1});a("slidev-mic","default",{listenToStorageChanges:!1});const fe=a("slidev-scale",0),pe=a("slidev-presenter-cursor",!0,{listenToStorageChanges:!1}),ve=a("slidev-show-editor",!1,{listenToStorageChanges:!1}),ge=a("slidev-editor-vertical",!1,{listenToStorageChanges:!1});a("slidev-editor-width",h?window.innerWidth*.4:318,{listenToStorageChanges:!1});a("slidev-editor-height",h?window.innerHeight*.4:300,{listenToStorageChanges:!1});const f=a("slidev-presenter-font-size",1,{listenToStorageChanges:!1}),u=a("slidev-presenter-layout",1,{listenToStorageChanges:!1});function me(){u.value=u.value+1,u.value>2&&(u.value=1)}function he(){f.value=Math.min(2,f.value+.1)}function _e(){f.value=Math.max(.5,f.value-.1)}const we=j(K);function Ce(s,e=""){var t,o;const i=["slidev-page",e],l=(o=(t=s==null?void 0:s.meta)==null?void 0:t.slide)==null?void 0:o.no;return l!=null&&i.push(`slidev-page-${l}`),i.filter(Boolean).join(" ")}async function Se(){const{saveAs:s}=await M(()=>import("../modules/file-saver-EUMWMpoS.js").then(e=>e.F),__vite__mapDeps([]));s(typeof c.download=="string"?c.download:c.exportFilename?`${c.exportFilename}.pdf`:"/talks/reverse-shells-for-fun-and-profit/distslidev-exported.pdf",`${c.title}.pdf`)}const H={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},Q=y("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),X=y("div",null,"Loading slide...",-1),J=v({__name:"SlideLoading",setup(s){const e=n(!1);return S(()=>{setTimeout(()=>{e.value=!0},200)}),(i,l)=>(g(),_("div",H,[e.value?(g(),_(L,{key:0},[Q,X],64)):A("v-if",!0)]))}}),Y=x(J,[["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideLoading.vue"]]),Z=v({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},active:{type:Boolean,default:!1},is:{type:Function,required:!0},route:{type:Object,required:!0}},setup(s){const e=s;r(V,e.route),r(W,n(e.route.no)),r(q,n(e.renderContext)),r(G,w(e,"active")),r(U,w(e,"clicksContext"));const i=p(()=>{var o,d;const t=((d=(o=e.route.meta)==null?void 0:o.slide)==null?void 0:d.frontmatter.zoom)??1;return t===1?void 0:{width:`${100/t}%`,height:`${100/t}%`,transformOrigin:"top left",transform:`scale(${t})`}}),l=R({loader:async()=>{const t=await e.is();return v({setup(o,{attrs:d}){return S(()=>{e.clicksContext.onMounted()}),()=>D(t.default,d)}})},delay:300,loadingComponent:Y});return(t,o)=>(g(),B($(N(l)),{style:P(i.value),class:O({"disable-view-transition":!["slide","presenter"].includes(e.renderContext)})},null,8,["style","class"]))}}),ye=x(Z,[["__scopeId","data-v-bffe1831"],["__file","/opt/homebrew/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/SlideWrapper.vue"]]),xe={render(){return[]}},Te={render(){return[]}};export{Te as G,ye as S,xe as a,f as b,K as c,_e as d,te as e,ae as f,Ce as g,re as h,he as i,ve as j,fe as k,ge as l,ne as m,le as n,oe as o,u as p,ue as q,de as r,pe as s,we as t,ce as u,ie as v,C as w,me as x,Se as y,m as z};
