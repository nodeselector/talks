import{ay as n,ar as r,t as m,W as u,az as j}from"../modules/vue--2rrS9jf.js";import{h as v,i as $,U as p,R as C,S as x,ad as l,Q as R,ae as S,af as T}from"../index-DZaC20iK.js";function k(){const t=n($),s=r(t,"nav"),a=n(p).value,e=r(a,"current"),i=n(C),c=n(x),o=n(l,{}),d=n(R,void 0),f=n(v,m(1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:f}}function g(t){var i,c;u(l,t);const{$slidev:s,$page:a}=k(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function L(t,s){return{...j(t,s===0?S:T),frontmatter:t}}export{L as f,g as p,k as u};
