import{h as c,I as D,M,N as T,O as L,P as V,K as P,Q as z,R as G,S as K,V as Q,G as W,b as X,W as Z,H as Y,X as N,d as w,s as S,g as v,Y as R,Z as A,a as x,_ as J,$ as U,a0 as ee,a1 as te,a2 as re,f as ae,z as ne,i as ie,B as se}from"./CFWYuFOO.js";import{b as oe}from"./DRuMY4Mm.js";const ue=["touchstart","touchmove"];function fe(e){return ue.includes(e)}function pe(e){c&&D(e)!==null&&M(e)}let H=!1;function le(){H||(H=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function q(e){var t=V,r=P;T(null),L(null);try{return e()}finally{T(t),L(r)}}function ye(e,t,r,n=r){e.addEventListener(t,()=>q(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),le()}const B=new Set,O=new Set;function ge(e){if(!c)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function de(e,t,r,n={}){function i(a){if(n.capture||E.call(t,a),!a.cancelBubble)return q(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Q(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function we(e,t,r,n,i){var a={capture:n,passive:i},f=de(e,t,r,a);(t===document.body||t===window||t===document)&&K(()=>{t.removeEventListener(e,f,a)})}function Ee(e){for(var t=0;t<e.length;t++)B.add(e[t]);for(var r of O)r(e)}function E(e){var C;var t=this,r=t.ownerDocument,n=e.type,i=((C=e.composedPath)==null?void 0:C.call(e))||[],a=i[0]||e.target,f=0,p=e.__root;if(p){var _=i.indexOf(p);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var y=i.indexOf(t);if(y===-1)return;_<=y&&(f=_)}if(a=i[f]||e.target,a!==t){z(e,"currentTarget",{configurable:!0,get(){return a||r}});var m=V,l=P;T(null),L(null);try{for(var s,o=[];a!==null;){var d=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+n];if(h!=null&&(!a.disabled||e.target===a))if(G(h)){var[F,...j]=h;F.apply(a,[e,...j])}else h.call(a,e)}catch(b){s?o.push(b):s=b}if(e.cancelBubble||d===t||d===null)break;a=d}if(s){for(let b of o)queueMicrotask(()=>{throw b});throw s}}finally{e.__root=t,delete e.currentTarget,T(m),L(l)}}}let u;function ce(){u=void 0}function be(e){let t=null,r=c;var n;if(c){for(t=v,u===void 0&&(u=D(document.head));u!==null&&(u.nodeType!==8||u.data!==Y);)u=N(u);u===null?w(!1):u=S(N(u))}c||(n=document.head.appendChild(W()));try{X(()=>e(n),Z)}finally{r&&(w(!0),u=v,S(t))}}let I=!0;function Te(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function _e(e,t){return $(e,t)}function Le(e,t){R(),t.intro=t.intro??!1;const r=t.target,n=c,i=v;try{for(var a=D(r);a&&(a.nodeType!==8||a.data!==Y);)a=N(a);if(!a)throw A;w(!0),S(a),x();const f=$(e,{...t,anchor:a});if(v===null||v.nodeType!==8||v.data!==J)throw U(),A;return w(!1),f}catch(f){if(f===A)return t.recover===!1&&ee(),R(),M(r),w(!1),_e(e,t);throw f}finally{w(n),S(i),ce()}}const g=new Map;function $(e,{target:t,anchor:r,props:n={},events:i,context:a,intro:f=!0}){R();var p=new Set,_=l=>{for(var s=0;s<l.length;s++){var o=l[s];if(!p.has(o)){p.add(o);var d=fe(o);t.addEventListener(o,E,{passive:d});var h=g.get(o);h===void 0?(document.addEventListener(o,E,{passive:d}),g.set(o,1)):g.set(o,h+1)}}};_(te(B)),O.add(_);var y=void 0,m=re(()=>{var l=r??t.appendChild(W());return ae(()=>{if(a){ne({});var s=ie;s.c=a}i&&(n.$$events=i),c&&oe(l,null),I=f,y=e(l,n)||{},I=!0,c&&(P.nodes_end=v),a&&se()}),()=>{var d;for(var s of p){t.removeEventListener(s,E);var o=g.get(s);--o===0?(document.removeEventListener(s,E),g.delete(s)):g.set(s,o)}O.delete(_),l!==r&&((d=l.parentNode)==null||d.removeChild(l))}});return k.set(y,m),y}let k=new WeakMap;function Se(e,t){const r=k.get(e);return r?(k.delete(e),r(t)):Promise.resolve()}export{le as a,I as b,be as c,Ee as d,ge as e,we as f,Le as h,ye as l,_e as m,pe as r,Te as s,Se as u,q as w};
