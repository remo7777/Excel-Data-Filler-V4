import{U as o,bi as p,bj as u,bk as l,bl as c,bm as f,bn as d,bo as m,bp as b,bq as h,br as g,d as A,u as v,y as P,x as y,bs as C,bt as w,bu as E,bv as R}from"./chunks/framework.CcvpjY6B.js";import{t as S}from"./chunks/theme.8JIVp2Pj.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(S),_=A({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return P(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),w(),E(),s.setup&&s.setup(),()=>R(s.Layout)}});async function T(){globalThis.__VITEPRESS__=!0;const e=x(),t=j();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function j(){return b(_)}function x(){let e=o,t;return h(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&T().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{T as createApp};