function g(){}function O(e){return e()}function A(){return Object.create(null)}function x(e){e.forEach(O)}function q(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let y;function ce(e,t){return y||(y=document.createElement("a")),y.href=t,e===y.href}function T(e){return Object.keys(e).length===0}function Q(e,...t){if(e==null)return g;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ue(e,t,n){e.$$.on_destroy.push(Q(t,n))}let $=!1;function D(){$=!0}function H(){$=!1}function I(e,t,n,l){for(;e<t;){const i=e+(t-e>>1);n(i)<=l?e=i+1:t=i}return e}function P(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const u=[];for(let f=0;f<t.length;f++){const d=t[f];d.claim_order!==void 0&&u.push(d)}t=u}const n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let i=0;for(let u=0;u<t.length;u++){const f=t[u].claim_order,d=(i>0&&t[n[i]].claim_order<=f?i+1:I(1,i,b=>t[n[b]].claim_order,f))-1;l[u]=n[d]+1;const o=d+1;n[o]=u,i=Math.max(o,i)}const s=[],c=[];let r=t.length-1;for(let u=n[i]+1;u!=0;u=l[u-1]){for(s.push(t[u-1]);r>=u;r--)c.push(t[r]);r--}for(;r>=0;r--)c.push(t[r]);s.reverse(),c.sort((u,f)=>u.claim_order-f.claim_order);for(let u=0,f=0;u<c.length;u++){for(;f<s.length&&c[u].claim_order>=s[f].claim_order;)f++;const d=f<s.length?s[f]:null;e.insertBefore(c[u],d)}}function W(e,t){if($){for(P(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function fe(e,t,n){$&&!n?W(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function F(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function se(){return w(" ")}function ae(){return w("")}function oe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function de(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function G(e){return Array.from(e.childNodes)}function J(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function B(e,t,n,l,i=!1){J(e);const s=(()=>{for(let c=e.claim_info.last_index;c<e.length;c++){const r=e[c];if(t(r)){const u=n(r);return u===void 0?e.splice(c,1):e[c]=u,i||(e.claim_info.last_index=c),r}}for(let c=e.claim_info.last_index-1;c>=0;c--){const r=e[c];if(t(r)){const u=n(r);return u===void 0?e.splice(c,1):e[c]=u,i?u===void 0&&e.claim_info.last_index--:e.claim_info.last_index=c,r}}return l()})();return s.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,s}function K(e,t,n,l){return B(e,i=>i.nodeName===t,i=>{const s=[];for(let c=0;c<i.attributes.length;c++){const r=i.attributes[c];n[r.name]||s.push(r.name)}s.forEach(c=>i.removeAttribute(c))},()=>l(t))}function _e(e,t,n){return K(e,t,n,F)}function R(e,t){return B(e,n=>n.nodeType===3,n=>{const l=""+t;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>w(t),!0)}function he(e){return R(e," ")}let N;function p(e){N=e}const h=[],L=[];let m=[];const C=[],V=Promise.resolve();let v=!1;function X(){v||(v=!0,V.then(M))}function E(e){m.push(e)}const k=new Set;let _=0;function M(){if(_!==0)return;const e=N;do{try{for(;_<h.length;){const t=h[_];_++,p(t),Y(t.$$)}}catch(t){throw h.length=0,_=0,t}for(p(null),h.length=0,_=0;L.length;)L.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];k.has(n)||(k.add(n),n())}m.length=0}while(h.length);for(;C.length;)C.pop()();v=!1,k.clear(),p(e)}function Y(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}function Z(e){const t=[],n=[];m.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),m=t}const U=new Set;function ee(e,t){e&&e.i&&(U.delete(e),e.i(t))}function te(e,t,n,l){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),l||E(()=>{const c=e.$$.on_mount.map(O).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...c):x(c),e.$$.on_mount=[]}),s.forEach(E)}function ne(e,t){const n=e.$$;n.fragment!==null&&(Z(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(h.push(e),X(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function me(e,t,n,l,i,s,c,r=[-1]){const u=N;p(e);const f=e.$$={fragment:null,ctx:[],props:s,update:g,not_equal:i,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:A(),dirty:r,skip_bound:!1,root:t.target||u.$$.root};c&&c(f.root);let d=!1;if(f.ctx=n?n(e,t.props||{},(o,b,...S)=>{const j=S.length?S[0]:b;return f.ctx&&i(f.ctx[o],f.ctx[o]=j)&&(!f.skip_bound&&f.bound[o]&&f.bound[o](j),d&&ie(e,o)),b}):[],f.update(),d=!0,x(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){D();const o=G(t.target);f.fragment&&f.fragment.l(o),o.forEach(z)}else f.fragment&&f.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),H(),M()}p(u)}class pe{$destroy(){ne(this,1),this.$destroy=g}$on(t,n){if(!q(n))return g;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!T(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}let a=[],le=(e,t)=>{let n,l=[],i={lc:0,l:t||0,value:e,set(s){i.value=s,i.notify()},get(){return i.lc||i.listen(()=>{})(),i.value},notify(s){n=l;let c=!a.length;for(let r=0;r<n.length;r+=2)a.push(n[r],i.value,s,n[r+1]);if(c){for(let r=0;r<a.length;r+=4){let u=!1;for(let f=r+7;f<a.length;f+=4)if(a[f]<a[r+3]){u=!0;break}u?a.push(a[r],a[r+1],a[r+2],a[r+3]):a[r](a[r+1],a[r+2])}a.length=0}},listen(s,c){return l===n&&(l=l.slice()),i.lc=l.push(s,c||i.l)/2,()=>{l===n&&(l=l.slice());let r=l.indexOf(s);~r&&(l.splice(r,2),i.lc--,i.lc||i.off())}},subscribe(s,c){let r=i.listen(s,c);return s(i.value),r},off(){}};return i};const be=le(1);export{pe as S,se as a,G as b,_e as c,z as d,F as e,he as f,ce as g,de as h,me as i,fe as j,W as k,oe as l,be as m,g as n,ae as o,ue as p,R as q,x as r,re as s,w as t};
