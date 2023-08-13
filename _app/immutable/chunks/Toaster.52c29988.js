import{m as J,p as Te,s as R,n as V,q as z,c as ae,u as ce,g as fe,d as ue,o as De,b as Ie,r as Ee,e as Ve}from"./scheduler.1b9dbb88.js";import{S as B,i as L,g as S,h as N,j as P,f as h,k as y,l as p,a as v,e as C,p as j,t as g,b as H,d,r as k,s as _e,u as D,c as de,v as w,x as me,w as $,q,m as ge,n as he,o as pe,H as Z,I as Q,A as x}from"./index.d828f90c.js";import{e as ee,u as Ce,o as Se}from"./each.e3268d82.js";import{d as Ne,w as be}from"./index.ad9736a5.js";function F(s,e){const t={},n={},o={$$scope:1};let i=s.length;for(;i--;){const r=s[i],c=e[i];if(c){for(const l in r)l in c||(n[l]=1);for(const l in c)o[l]||(t[l]=c[l],o[l]=1);s[i]=c}else for(const l in r)o[l]=1}for(const r in n)r in t||(t[r]=void 0);return t}function K(s){return typeof s=="object"&&s!==null?s:{}}function Pe(s,e,t,n){var o,i,r=!1,c=t.length>=2,l=(_,T,M)=>{if(o=T,c&&(i=_),!r){let E=e(_,T,M);if(e.length<2)T(E);else return E}r=!1},f=Ne(s,l,n),a=!Array.isArray(s);function u(_){var T=t(_,i);a?(r=!0,s.set(T)):T.forEach((M,E)=>{r=!0,s[E].set(M)}),r=!1}var m=!1;function b(_){var T,M,E,A;if(m){A=_(J(f)),o(A);return}var we=f.subscribe($e=>{m?T?M=!0:T=!0:E=$e});A=_(E),m=!0,o(A),we(),m=!1,M&&(A=J(f)),T&&u(A)}return{subscribe:f.subscribe,set(_){b(()=>_)},update:b}}const je=20,O=be([]),X=be(null),U=new Map,te=s=>{if(U.has(s))return;const e=setTimeout(()=>{U.delete(s),ye(s)},1e3);U.set(s,e)},He=s=>{const e=U.get(s);e&&clearTimeout(e)};function ve(s){s.id&&He(s.id),O.update(e=>e.map(t=>t.id===s.id?{...t,...s}:t))}function Me(s){O.update(e=>[s,...e].slice(0,je))}function Ae(s){J(O).find(e=>e.id===s.id)?ve(s):Me(s)}function Re(s){O.update(e=>(s?te(s):e.forEach(t=>{te(t.id)}),e.map(t=>t.id===s||s===void 0?{...t,visible:!1}:t)))}function ye(s){O.update(e=>s===void 0?[]:e.filter(t=>t.id!==s))}function Be(s){X.set(s)}function Le(s){let e;X.update(t=>(e=s-(t||0),null)),O.update(t=>t.map(n=>({...n,pauseDuration:n.pauseDuration+e})))}const Oe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3};function qe(s={}){return{toasts:Pe(O,t=>t.map(n=>{var o,i;return{...s,...s[n.type],...n,duration:n.duration||((o=s[n.type])==null?void 0:o.duration)||(s==null?void 0:s.duration)||Oe[n.type],style:[s.style,(i=s[n.type])==null?void 0:i.style,n.style].join(";")}}),t=>t),pausedAt:X}}const Qe=s=>typeof s=="function",ne=(s,e)=>Qe(s)?s(e):s,We=(()=>{let s=0;return()=>(s+=1,s.toString())})(),ke=(()=>{let s;return()=>{if(s===void 0&&typeof window<"u"){const e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s}})(),Ue=(s,e="blank",t)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:s,pauseDuration:0,...t,id:(t==null?void 0:t.id)||We()}),W=s=>(e,t)=>{const n=Ue(e,s,t);return Ae(n),n.id},I=(s,e)=>W("blank")(s,e);I.error=W("error");I.success=W("success");I.loading=W("loading");I.custom=W("custom");I.dismiss=s=>{Re(s)};I.remove=s=>ye(s);I.promise=(s,e,t)=>{const n=I.loading(e.loading,{...t,...t==null?void 0:t.loading});return s.then(o=>(I.success(ne(e.success,o),{id:n,...t,...t==null?void 0:t.success}),o)).catch(o=>{I.error(ne(e.error,o),{id:n,...t,...t==null?void 0:t.error})}),s};function ze(s,e,t){const{reverseOrder:n,gutter:o=8,defaultPosition:i}=t||{},r=e.filter(a=>(a.position||i)===(s.position||i)&&a.height),c=r.findIndex(a=>a.id===s.id),l=r.filter((a,u)=>u<c&&a.visible).length;return r.filter(a=>a.visible).slice(...n?[l+1]:[0,l]).reduce((a,u)=>a+(u.height||0)+o,0)}const Fe={startPause(){Be(Date.now())},endPause(){Le(Date.now())},updateHeight:(s,e)=>{ve({id:s,height:e})},calculateOffset:ze};function Ge(s){const{toasts:e,pausedAt:t}=qe(s),n=new Map;let o;const i=[t.subscribe(r=>{if(r){for(const[,c]of n)clearTimeout(c);n.clear()}o=r}),e.subscribe(r=>{if(o)return;const c=Date.now();for(const l of r){if(n.has(l.id)||l.duration===1/0)continue;const f=(l.duration||0)+l.pauseDuration-(c-l.createdAt);if(f<0)return l.visible&&I.dismiss(l.id),null;n.set(l.id,setTimeout(()=>I.dismiss(l.id),f))}})];return Te(()=>{for(const r of i)r()}),{toasts:e,handlers:Fe}}function Je(s){let e;return{c(){e=S("div"),this.h()},l(t){e=N(t,"DIV",{class:!0}),P(e).forEach(h),this.h()},h(){y(e,"class","svelte-11kvm4p"),p(e,"--primary",s[0]),p(e,"--secondary",s[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&p(e,"--primary",t[0]),n&2&&p(e,"--secondary",t[1])},i:V,o:V,d(t){t&&h(e)}}}function Ke(s,e,t){let{primary:n="#61d345"}=e,{secondary:o="#fff"}=e;return s.$$set=i=>{"primary"in i&&t(0,n=i.primary),"secondary"in i&&t(1,o=i.secondary)},[n,o]}class Xe extends B{constructor(e){super(),L(this,e,Ke,Je,R,{primary:0,secondary:1})}}function Ye(s){let e;return{c(){e=S("div"),this.h()},l(t){e=N(t,"DIV",{class:!0}),P(e).forEach(h),this.h()},h(){y(e,"class","svelte-1ee93ns"),p(e,"--primary",s[0]),p(e,"--secondary",s[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&p(e,"--primary",t[0]),n&2&&p(e,"--secondary",t[1])},i:V,o:V,d(t){t&&h(e)}}}function Ze(s,e,t){let{primary:n="#ff4b4b"}=e,{secondary:o="#fff"}=e;return s.$$set=i=>{"primary"in i&&t(0,n=i.primary),"secondary"in i&&t(1,o=i.secondary)},[n,o]}class xe extends B{constructor(e){super(),L(this,e,Ze,Ye,R,{primary:0,secondary:1})}}function et(s){let e;return{c(){e=S("div"),this.h()},l(t){e=N(t,"DIV",{class:!0}),P(e).forEach(h),this.h()},h(){y(e,"class","svelte-1j7dflg"),p(e,"--primary",s[0]),p(e,"--secondary",s[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&p(e,"--primary",t[0]),n&2&&p(e,"--secondary",t[1])},i:V,o:V,d(t){t&&h(e)}}}function tt(s,e,t){let{primary:n="#616161"}=e,{secondary:o="#e0e0e0"}=e;return s.$$set=i=>{"primary"in i&&t(0,n=i.primary),"secondary"in i&&t(1,o=i.secondary)},[n,o]}class nt extends B{constructor(e){super(),L(this,e,tt,et,R,{primary:0,secondary:1})}}function st(s){let e,t,n,o;const i=[s[0]];let r={};for(let l=0;l<i.length;l+=1)r=z(r,i[l]);t=new nt({props:r});let c=s[2]!=="loading"&&se(s);return{c(){e=S("div"),k(t.$$.fragment),n=_e(),c&&c.c(),this.h()},l(l){e=N(l,"DIV",{class:!0});var f=P(e);D(t.$$.fragment,f),n=de(f),c&&c.l(f),f.forEach(h),this.h()},h(){y(e,"class","indicator svelte-1kgeier")},m(l,f){v(l,e,f),w(t,e,null),me(e,n),c&&c.m(e,null),o=!0},p(l,f){const a=f&1?F(i,[K(l[0])]):{};t.$set(a),l[2]!=="loading"?c?(c.p(l,f),f&4&&d(c,1)):(c=se(l),c.c(),d(c,1),c.m(e,null)):c&&(j(),g(c,1,1,()=>{c=null}),H())},i(l){o||(d(t.$$.fragment,l),d(c),o=!0)},o(l){g(t.$$.fragment,l),g(c),o=!1},d(l){l&&h(e),$(t),c&&c.d()}}}function rt(s){let e,t,n;var o=s[1];function i(r,c){return{}}return o&&(e=q(o,i())),{c(){e&&k(e.$$.fragment),t=C()},l(r){e&&D(e.$$.fragment,r),t=C()},m(r,c){e&&w(e,r,c),v(r,t,c),n=!0},p(r,c){if(c&2&&o!==(o=r[1])){if(e){j();const l=e;g(l.$$.fragment,1,0,()=>{$(l,1)}),H()}o?(e=q(o,i()),k(e.$$.fragment),d(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}},i(r){n||(e&&d(e.$$.fragment,r),n=!0)},o(r){e&&g(e.$$.fragment,r),n=!1},d(r){r&&h(t),e&&$(e,r)}}}function it(s){let e,t;return{c(){e=S("div"),t=ge(s[1]),this.h()},l(n){e=N(n,"DIV",{class:!0});var o=P(e);t=he(o,s[1]),o.forEach(h),this.h()},h(){y(e,"class","animated svelte-1kgeier")},m(n,o){v(n,e,o),me(e,t)},p(n,o){o&2&&pe(t,n[1])},i:V,o:V,d(n){n&&h(e)}}}function se(s){let e,t,n,o;const i=[lt,ot],r=[];function c(l,f){return l[2]==="error"?0:1}return t=c(s),n=r[t]=i[t](s),{c(){e=S("div"),n.c(),this.h()},l(l){e=N(l,"DIV",{class:!0});var f=P(e);n.l(f),f.forEach(h),this.h()},h(){y(e,"class","status svelte-1kgeier")},m(l,f){v(l,e,f),r[t].m(e,null),o=!0},p(l,f){let a=t;t=c(l),t===a?r[t].p(l,f):(j(),g(r[a],1,1,()=>{r[a]=null}),H(),n=r[t],n?n.p(l,f):(n=r[t]=i[t](l),n.c()),d(n,1),n.m(e,null))},i(l){o||(d(n),o=!0)},o(l){g(n),o=!1},d(l){l&&h(e),r[t].d()}}}function ot(s){let e,t;const n=[s[0]];let o={};for(let i=0;i<n.length;i+=1)o=z(o,n[i]);return e=new Xe({props:o}),{c(){k(e.$$.fragment)},l(i){D(e.$$.fragment,i)},m(i,r){w(e,i,r),t=!0},p(i,r){const c=r&1?F(n,[K(i[0])]):{};e.$set(c)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){g(e.$$.fragment,i),t=!1},d(i){$(e,i)}}}function lt(s){let e,t;const n=[s[0]];let o={};for(let i=0;i<n.length;i+=1)o=z(o,n[i]);return e=new xe({props:o}),{c(){k(e.$$.fragment)},l(i){D(e.$$.fragment,i)},m(i,r){w(e,i,r),t=!0},p(i,r){const c=r&1?F(n,[K(i[0])]):{};e.$set(c)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){g(e.$$.fragment,i),t=!1},d(i){$(e,i)}}}function at(s){let e,t,n,o;const i=[it,rt,st],r=[];function c(l,f){return typeof l[1]=="string"?0:typeof l[1]<"u"?1:l[2]!=="blank"?2:-1}return~(e=c(s))&&(t=r[e]=i[e](s)),{c(){t&&t.c(),n=C()},l(l){t&&t.l(l),n=C()},m(l,f){~e&&r[e].m(l,f),v(l,n,f),o=!0},p(l,[f]){let a=e;e=c(l),e===a?~e&&r[e].p(l,f):(t&&(j(),g(r[a],1,1,()=>{r[a]=null}),H()),~e?(t=r[e],t?t.p(l,f):(t=r[e]=i[e](l),t.c()),d(t,1),t.m(n.parentNode,n)):t=null)},i(l){o||(d(t),o=!0)},o(l){g(t),o=!1},d(l){l&&h(n),~e&&r[e].d(l)}}}function ct(s,e,t){let n,o,i,{toast:r}=e;return s.$$set=c=>{"toast"in c&&t(3,r=c.toast)},s.$$.update=()=>{s.$$.dirty&8&&t(2,{type:n,icon:o,iconTheme:i}=r,n,(t(1,o),t(3,r)),(t(0,i),t(3,r)))},[i,o,n,r]}class Y extends B{constructor(e){super(),L(this,e,ct,at,R,{toast:3})}}function ft(s){let e,t,n;var o=s[0].message;function i(r,c){return{props:{toast:r[0]}}}return o&&(e=q(o,i(s))),{c(){e&&k(e.$$.fragment),t=C()},l(r){e&&D(e.$$.fragment,r),t=C()},m(r,c){e&&w(e,r,c),v(r,t,c),n=!0},p(r,c){if(c&1&&o!==(o=r[0].message)){if(e){j();const l=e;g(l.$$.fragment,1,0,()=>{$(l,1)}),H()}o?(e=q(o,i(r)),k(e.$$.fragment),d(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}else if(o){const l={};c&1&&(l.toast=r[0]),e.$set(l)}},i(r){n||(e&&d(e.$$.fragment,r),n=!0)},o(r){e&&g(e.$$.fragment,r),n=!1},d(r){r&&h(t),e&&$(e,r)}}}function ut(s){let e=s[0].message+"",t;return{c(){t=ge(e)},l(n){t=he(n,e)},m(n,o){v(n,t,o)},p(n,o){o&1&&e!==(e=n[0].message+"")&&pe(t,e)},i:V,o:V,d(n){n&&h(t)}}}function _t(s){let e,t,n,o;const i=[ut,ft],r=[];function c(a,u){return typeof a[0].message=="string"?0:1}t=c(s),n=r[t]=i[t](s);let l=[{class:"message"},s[0].ariaProps],f={};for(let a=0;a<l.length;a+=1)f=z(f,l[a]);return{c(){e=S("div"),n.c(),this.h()},l(a){e=N(a,"DIV",{class:!0});var u=P(e);n.l(u),u.forEach(h),this.h()},h(){Z(e,f),Q(e,"svelte-1nauejd",!0)},m(a,u){v(a,e,u),r[t].m(e,null),o=!0},p(a,[u]){let m=t;t=c(a),t===m?r[t].p(a,u):(j(),g(r[m],1,1,()=>{r[m]=null}),H(),n=r[t],n?n.p(a,u):(n=r[t]=i[t](a),n.c()),d(n,1),n.m(e,null)),Z(e,f=F(l,[{class:"message"},u&1&&a[0].ariaProps])),Q(e,"svelte-1nauejd",!0)},i(a){o||(d(n),o=!0)},o(a){g(n),o=!1},d(a){a&&h(e),r[t].d()}}}function dt(s,e,t){let{toast:n}=e;return s.$$set=o=>{"toast"in o&&t(0,n=o.toast)},[n]}class G extends B{constructor(e){super(),L(this,e,dt,_t,R,{toast:0})}}const mt=s=>({toast:s&1}),re=s=>({ToastIcon:Y,ToastMessage:G,toast:s[0]});function gt(s){let e;const t=s[6].default,n=ae(t,s,s[7],re),o=n||pt(s);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,r){o&&o.m(i,r),e=!0},p(i,r){n?n.p&&(!e||r&129)&&ce(n,t,i,i[7],e?ue(t,i[7],r,mt):fe(i[7]),re):o&&o.p&&(!e||r&1)&&o.p(i,e?r:-1)},i(i){e||(d(o,i),e=!0)},o(i){g(o,i),e=!1},d(i){o&&o.d(i)}}}function ht(s){let e,t,n;var o=s[2];function i(r,c){return{props:{$$slots:{message:[vt],icon:[bt]},$$scope:{ctx:r}}}}return o&&(e=q(o,i(s))),{c(){e&&k(e.$$.fragment),t=C()},l(r){e&&D(e.$$.fragment,r),t=C()},m(r,c){e&&w(e,r,c),v(r,t,c),n=!0},p(r,c){if(c&4&&o!==(o=r[2])){if(e){j();const l=e;g(l.$$.fragment,1,0,()=>{$(l,1)}),H()}o?(e=q(o,i(r)),k(e.$$.fragment),d(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}else if(o){const l={};c&129&&(l.$$scope={dirty:c,ctx:r}),e.$set(l)}},i(r){n||(e&&d(e.$$.fragment,r),n=!0)},o(r){e&&g(e.$$.fragment,r),n=!1},d(r){r&&h(t),e&&$(e,r)}}}function pt(s){let e,t,n,o;return e=new Y({props:{toast:s[0]}}),n=new G({props:{toast:s[0]}}),{c(){k(e.$$.fragment),t=_e(),k(n.$$.fragment)},l(i){D(e.$$.fragment,i),t=de(i),D(n.$$.fragment,i)},m(i,r){w(e,i,r),v(i,t,r),w(n,i,r),o=!0},p(i,r){const c={};r&1&&(c.toast=i[0]),e.$set(c);const l={};r&1&&(l.toast=i[0]),n.$set(l)},i(i){o||(d(e.$$.fragment,i),d(n.$$.fragment,i),o=!0)},o(i){g(e.$$.fragment,i),g(n.$$.fragment,i),o=!1},d(i){i&&h(t),$(e,i),$(n,i)}}}function bt(s){let e,t;return e=new Y({props:{toast:s[0],slot:"icon"}}),{c(){k(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.toast=n[0]),e.$set(i)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function vt(s){let e,t;return e=new G({props:{toast:s[0],slot:"message"}}),{c(){k(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.toast=n[0]),e.$set(i)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function yt(s){let e,t,n,o,i,r;const c=[ht,gt],l=[];function f(a,u){return a[2]?0:1}return t=f(s),n=l[t]=c[t](s),{c(){e=S("div"),n.c(),this.h()},l(a){e=N(a,"DIV",{class:!0,style:!0});var u=P(e);n.l(u),u.forEach(h),this.h()},h(){y(e,"class",o="base "+(s[0].height?s[4]:"transparent")+" "+(s[0].className||"")+" svelte-ug60r4"),y(e,"style",i=s[1]+"; "+s[0].style),p(e,"--factor",s[3])},m(a,u){v(a,e,u),l[t].m(e,null),r=!0},p(a,[u]){let m=t;t=f(a),t===m?l[t].p(a,u):(j(),g(l[m],1,1,()=>{l[m]=null}),H(),n=l[t],n?n.p(a,u):(n=l[t]=c[t](a),n.c()),d(n,1),n.m(e,null)),(!r||u&17&&o!==(o="base "+(a[0].height?a[4]:"transparent")+" "+(a[0].className||"")+" svelte-ug60r4"))&&y(e,"class",o),(!r||u&3&&i!==(i=a[1]+"; "+a[0].style))&&y(e,"style",i),(u&3||u&11)&&p(e,"--factor",a[3])},i(a){r||(d(n),r=!0)},o(a){g(n),r=!1},d(a){a&&h(e),l[t].d()}}}function kt(s,e,t){let{$$slots:n={},$$scope:o}=e,{toast:i}=e,{position:r=void 0}=e,{style:c=""}=e,{Component:l=void 0}=e,f,a;return s.$$set=u=>{"toast"in u&&t(0,i=u.toast),"position"in u&&t(5,r=u.position),"style"in u&&t(1,c=u.style),"Component"in u&&t(2,l=u.Component),"$$scope"in u&&t(7,o=u.$$scope)},s.$$.update=()=>{if(s.$$.dirty&33){const u=(i.position||r||"top-center").includes("top");t(3,f=u?1:-1);const[m,b]=ke()?["fadeIn","fadeOut"]:["enter","exit"];t(4,a=i.visible?m:b)}},[i,c,l,f,a,r,n,o]}class wt extends B{constructor(e){super(),L(this,e,kt,yt,R,{toast:0,position:5,style:1,Component:2})}}const $t=s=>({toast:s&1}),ie=s=>({toast:s[0]});function Tt(s){let e;const t=s[8].default,n=ae(t,s,s[7],ie),o=n||It(s);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,r){o&&o.m(i,r),e=!0},p(i,r){n?n.p&&(!e||r&129)&&ce(n,t,i,i[7],e?ue(t,i[7],r,$t):fe(i[7]),ie):o&&o.p&&(!e||r&1)&&o.p(i,e?r:-1)},i(i){e||(d(o,i),e=!0)},o(i){g(o,i),e=!1},d(i){o&&o.d(i)}}}function Dt(s){let e,t;return e=new G({props:{toast:s[0]}}),{c(){k(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.toast=n[0]),e.$set(i)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function It(s){let e,t;return e=new wt({props:{toast:s[0],position:s[0].position}}),{c(){k(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const i={};o&1&&(i.toast=n[0]),o&1&&(i.position=n[0].position),e.$set(i)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){$(e,n)}}}function Et(s){let e,t,n,o;const i=[Dt,Tt],r=[];function c(l,f){return l[0].type==="custom"?0:1}return t=c(s),n=r[t]=i[t](s),{c(){e=S("div"),n.c(),this.h()},l(l){e=N(l,"DIV",{class:!0});var f=P(e);n.l(f),f.forEach(h),this.h()},h(){y(e,"class","wrapper svelte-v01oml"),Q(e,"active",s[0].visible),Q(e,"transition",!ke()),p(e,"--factor",s[3]),p(e,"--offset",s[0].offset),p(e,"top",s[5]),p(e,"bottom",s[4]),p(e,"justify-content",s[2])},m(l,f){v(l,e,f),r[t].m(e,null),s[9](e),o=!0},p(l,[f]){let a=t;t=c(l),t===a?r[t].p(l,f):(j(),g(r[a],1,1,()=>{r[a]=null}),H(),n=r[t],n?n.p(l,f):(n=r[t]=i[t](l),n.c()),d(n,1),n.m(e,null)),(!o||f&1)&&Q(e,"active",l[0].visible),f&8&&p(e,"--factor",l[3]),f&1&&p(e,"--offset",l[0].offset),f&32&&p(e,"top",l[5]),f&16&&p(e,"bottom",l[4]),f&4&&p(e,"justify-content",l[2])},i(l){o||(d(n),o=!0)},o(l){g(n),o=!1},d(l){l&&h(e),r[t].d(),s[9](null)}}}function Vt(s,e,t){let n,o,i,r,{$$slots:c={},$$scope:l}=e,{toast:f}=e,{setHeight:a}=e,u;De(()=>{a(u.getBoundingClientRect().height)});function m(b){Ie[b?"unshift":"push"](()=>{u=b,t(1,u)})}return s.$$set=b=>{"toast"in b&&t(0,f=b.toast),"setHeight"in b&&t(6,a=b.setHeight),"$$scope"in b&&t(7,l=b.$$scope)},s.$$.update=()=>{var b,_,T,M,E,A;s.$$.dirty&1&&t(5,n=(b=f.position)!=null&&b.includes("top")?0:null),s.$$.dirty&1&&t(4,o=(_=f.position)!=null&&_.includes("bottom")?0:null),s.$$.dirty&1&&t(3,i=(T=f.position)!=null&&T.includes("top")?1:-1),s.$$.dirty&1&&t(2,r=((M=f.position)==null?void 0:M.includes("center"))&&"center"||(((E=f.position)==null?void 0:E.includes("right"))||((A=f.position)==null?void 0:A.includes("end")))&&"flex-end"||null)},[f,u,r,i,o,n,a,l,c,m]}class Ct extends B{constructor(e){super(),L(this,e,Vt,Et,R,{toast:0,setHeight:6})}}function oe(s,e,t){const n=s.slice();return n[11]=e[t],n}function le(s,e){let t,n,o;function i(...r){return e[10](e[11],...r)}return n=new Ct({props:{toast:e[11],setHeight:i}}),{key:s,first:null,c(){t=C(),k(n.$$.fragment),this.h()},l(r){t=C(),D(n.$$.fragment,r),this.h()},h(){this.first=t},m(r,c){v(r,t,c),w(n,r,c),o=!0},p(r,c){e=r;const l={};c&4&&(l.toast=e[11]),c&4&&(l.setHeight=i),n.$set(l)},i(r){o||(d(n.$$.fragment,r),o=!0)},o(r){g(n.$$.fragment,r),o=!1},d(r){r&&h(t),$(n,r)}}}function St(s){let e,t=[],n=new Map,o,i,r,c,l=ee(s[2]);const f=a=>a[11].id;for(let a=0;a<l.length;a+=1){let u=oe(s,l,a),m=f(u);n.set(m,t[a]=le(m,u))}return{c(){e=S("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=N(a,"DIV",{class:!0,style:!0,role:!0});var u=P(e);for(let m=0;m<t.length;m+=1)t[m].l(u);u.forEach(h),this.h()},h(){y(e,"class",o="toaster "+(s[1]||"")+" svelte-1phplh9"),y(e,"style",s[0]),y(e,"role","alert")},m(a,u){v(a,e,u);for(let m=0;m<t.length;m+=1)t[m]&&t[m].m(e,null);i=!0,r||(c=[x(e,"mouseenter",s[4].startPause),x(e,"mouseleave",s[4].endPause)],r=!0)},p(a,[u]){u&20&&(l=ee(a[2]),j(),t=Ce(t,u,f,1,a,l,n,e,Se,le,null,oe),H()),(!i||u&2&&o!==(o="toaster "+(a[1]||"")+" svelte-1phplh9"))&&y(e,"class",o),(!i||u&1)&&y(e,"style",a[0])},i(a){if(!i){for(let u=0;u<l.length;u+=1)d(t[u]);i=!0}},o(a){for(let u=0;u<t.length;u+=1)g(t[u]);i=!1},d(a){a&&h(e);for(let u=0;u<t.length;u+=1)t[u].d();r=!1,Ee(c)}}}function Nt(s,e,t){let n,{reverseOrder:o=!1}=e,{position:i="top-center"}=e,{toastOptions:r=void 0}=e,{gutter:c=8}=e,{containerStyle:l=void 0}=e,{containerClassName:f=void 0}=e;const{toasts:a,handlers:u}=Ge(r);Ve(s,a,_=>t(9,n=_));let m;const b=(_,T)=>u.updateHeight(_.id,T);return s.$$set=_=>{"reverseOrder"in _&&t(5,o=_.reverseOrder),"position"in _&&t(6,i=_.position),"toastOptions"in _&&t(7,r=_.toastOptions),"gutter"in _&&t(8,c=_.gutter),"containerStyle"in _&&t(0,l=_.containerStyle),"containerClassName"in _&&t(1,f=_.containerClassName)},s.$$.update=()=>{s.$$.dirty&864&&t(2,m=n.map(_=>({..._,position:_.position||i,offset:u.calculateOffset(_,n,{reverseOrder:o,gutter:c,defaultPosition:i})})))},[l,f,m,a,u,o,i,r,c,n,b]}class At extends B{constructor(e){super(),L(this,e,Nt,St,R,{reverseOrder:5,position:6,toastOptions:7,gutter:8,containerStyle:0,containerClassName:1})}}export{At as T,I as t};