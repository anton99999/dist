var nc=Object.defineProperty,ic=Object.defineProperties;var sc=Object.getOwnPropertyDescriptors;var _o=Object.getOwnPropertySymbols;var rc=Object.prototype.hasOwnProperty,oc=Object.prototype.propertyIsEnumerable;var mo=(n,e,t)=>e in n?nc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,go=(n,e)=>{for(var t in e||(e={}))rc.call(e,t)&&mo(n,t,e[t]);if(_o)for(var t of _o(e))oc.call(e,t)&&mo(n,t,e[t]);return n},vo=(n,e)=>ic(n,sc(e));const ac=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};ac();function U(){}function Wa(n,e){for(const t in e)n[t]=e[t];return n}function ja(n){return n()}function yo(){return Object.create(null)}function Re(n){n.forEach(ja)}function os(n){return typeof n=="function"}function Oe(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ci;function ze(n,e){return ci||(ci=document.createElement("a")),ci.href=e,n===ci.href}function lc(n){return Object.keys(n).length===0}function uc(n,...e){if(n==null)return U;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function m(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function A(n){n.parentNode.removeChild(n)}function g(n){return document.createElement(n)}function ye(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function se(n){return document.createTextNode(n)}function k(){return se(" ")}function nt(){return se("")}function Z(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function f(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Va(n){return n===""?null:+n}function cc(n){return Array.from(n.childNodes)}function De(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function re(n,e){n.value=e==null?"":e}function pi(n,e,t,i){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,i?"important":"")}function Ci(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function za(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function hc(n,e,{bubbles:t=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,t,i,e),s}let xn;function Sn(n){xn=n}function cr(){if(!xn)throw new Error("Function called outside component initialization");return xn}function dc(n){cr().$$.after_update.push(n)}function fc(n){cr().$$.on_destroy.push(n)}function pc(){const n=cr();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=hc(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function Eo(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const bn=[],Do=[],_i=[],Co=[],qa=Promise.resolve();let Hs=!1;function Ga(){Hs||(Hs=!0,qa.then(Ka))}function _c(){return Ga(),qa}function Bn(n){_i.push(n)}const ws=new Set;let hi=0;function Ka(){const n=xn;do{for(;hi<bn.length;){const e=bn[hi];hi++,Sn(e),mc(e.$$)}for(Sn(null),bn.length=0,hi=0;Do.length;)Do.pop()();for(let e=0;e<_i.length;e+=1){const t=_i[e];ws.has(t)||(ws.add(t),t())}_i.length=0}while(bn.length);for(;Co.length;)Co.pop()();Hs=!1,ws.clear(),Sn(n)}function mc(n){if(n.fragment!==null){n.update(),Re(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Bn)}}const mi=new Set;let Ct;function hr(){Ct={r:0,c:[],p:Ct}}function dr(){Ct.r||Re(Ct.c),Ct=Ct.p}function Ze(n,e){n&&n.i&&(mi.delete(n),n.i(e))}function St(n,e,t,i){if(n&&n.o){if(mi.has(n))return;mi.add(n),Ct.c.push(()=>{mi.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}function fr(n,e){n.d(1),e.delete(n.key)}function pr(n,e,t,i,s,r,o,a,l,u,c,h){let d=n.length,_=r.length,p=d;const v={};for(;p--;)v[n[p].key]=p;const D=[],N=new Map,E=new Map;for(p=_;p--;){const C=h(s,r,p),S=t(C);let F=o.get(S);F?i&&F.p(C,e):(F=u(S,C),F.c()),N.set(S,D[p]=F),S in v&&E.set(S,Math.abs(p-v[S]))}const R=new Set,y=new Set;function w(C){Ze(C,1),C.m(a,c),o.set(C.key,C),c=C.first,_--}for(;d&&_;){const C=D[_-1],S=n[d-1],F=C.key,O=S.key;C===S?(c=C.first,d--,_--):N.has(O)?!o.has(F)||R.has(F)?w(C):y.has(O)?d--:E.get(F)>E.get(O)?(y.add(F),w(C)):(R.add(O),d--):(l(S,o),d--)}for(;d--;){const C=n[d];N.has(C.key)||l(C,o)}for(;_;)w(D[_-1]);return D}function Ya(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Qa(n){return typeof n=="object"&&n!==null?n:{}}function Un(n){n&&n.c()}function Jt(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||Bn(()=>{const l=r.map(ja).filter(os);o?o.push(...l):Re(l),n.$$.on_mount=[]}),a.forEach(Bn)}function Zt(n,e){const t=n.$$;t.fragment!==null&&(Re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function gc(n,e){n.$$.dirty[0]===-1&&(bn.push(n),Ga(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Ue(n,e,t,i,s,r,o,a=[-1]){const l=xn;Sn(n);const u=n.$$={fragment:null,ctx:null,props:r,update:U,not_equal:s,bound:yo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:yo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let c=!1;if(u.ctx=t?t(n,e.props||{},(h,d,..._)=>{const p=_.length?_[0]:d;return u.ctx&&s(u.ctx[h],u.ctx[h]=p)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](p),c&&gc(n,h)),d}):[],u.update(),c=!0,Re(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){const h=cc(e.target);u.fragment&&u.fragment.l(h),h.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&Ze(n.$$.fragment),Jt(n,e.target,e.anchor,e.customElement),Ka()}Sn(l)}class He{$destroy(){Zt(this,1),this.$destroy=U}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!lc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(n,e){if(!n)throw an(e)},an=function(n){return new Error("Firebase Database ("+Xa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},_r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,c=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(d=64)),i.push(t[c],t[h],t[d],t[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ja(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||u==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),u!==64){const _=a<<4&240|u>>2;if(i.push(_),h!==64){const p=u<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Za=function(n){const e=Ja(n);return _r.encodeByteArray(e,!0)},el=function(n){return Za(n).replace(/\./g,"")},$s=function(n){try{return _r.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n){return tl(void 0,n)}function tl(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ec(t)||(n[t]=tl(n[t],e[t]));return n}function Ec(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mr(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Dc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function nl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cc(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function il(){return Xa.NODE_ADMIN===!0}function wc(){return typeof indexedDB=="object"}function bc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="FirebaseError";class ln extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ic,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ac(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,i)}}function Ac(n,e){return n.replace(Tc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Tc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n){return JSON.parse(n)}function _e(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Hn($s(r[0])||""),t=Hn($s(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Sc=function(n){const e=sl(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},kc=function(n){const e=sl(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function en(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ws(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wi(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function bi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(wo(r)&&wo(o)){if(!bi(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function wo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function In(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function An(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^r&(o^a),c=1518500249):(u=r^o^a,c=1859775393):h<60?(u=r&o|a&(r|o),c=2400959708):(u=r^o^a,c=3395469782);const d=(s<<5|s>>>27)+u+l+c+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Rc(n,e){const t=new Oc(n,e);return t.subscribe.bind(t)}class Oc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Fc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=bs),s.error===void 0&&(s.error=bs),s.complete===void 0&&(s.complete=bs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bs(){}function ls(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},us=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n){return n&&n._delegate?n._delegate:n}class kt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new as;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xc(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Mc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mc(n){return n===yt?void 0:n}function xc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const Uc={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Hc=J.INFO,$c={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Wc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=$c[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gr{constructor(e){this.name=e,this._logLevel=Hc,this._logHandler=Wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const jc=(n,e)=>e.some(t=>n instanceof t);let bo,Io;function Vc(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zc(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,js=new WeakMap,ol=new WeakMap,Is=new WeakMap,vr=new WeakMap;function qc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ct(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&rl.set(t,n)}).catch(()=>{}),vr.set(e,n),e}function Gc(n){if(js.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});js.set(n,e)}let Vs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return js.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ol.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ct(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kc(n){Vs=n(Vs)}function Yc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(As(this),e,...t);return ol.set(i,e.sort?e.sort():[e]),ct(i)}:zc().includes(n)?function(...e){return n.apply(As(this),e),ct(rl.get(this))}:function(...e){return ct(n.apply(As(this),e))}}function Qc(n){return typeof n=="function"?Yc(n):(n instanceof IDBTransaction&&Gc(n),jc(n,Vc())?new Proxy(n,Vs):n)}function ct(n){if(n instanceof IDBRequest)return qc(n);if(Is.has(n))return Is.get(n);const e=Qc(n);return e!==n&&(Is.set(n,e),vr.set(e,n)),e}const As=n=>vr.get(n);function Xc(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ct(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ct(o.result),l.oldVersion,l.newVersion,ct(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Jc=["get","getKey","getAll","getAllKeys","count"],Zc=["put","add","delete","clear"],Ts=new Map;function Ao(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ts.get(e))return Ts.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Zc.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Jc.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return Ts.set(e,r),r}Kc(n=>vo(go({},n),{get:(e,t,i)=>Ao(e,t)||n.get(e,t,i),has:(e,t)=>!!Ao(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(th(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function th(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zs="@firebase/app",To="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new gr("@firebase/app"),nh="@firebase/app-compat",ih="@firebase/analytics-compat",sh="@firebase/analytics",rh="@firebase/app-check-compat",oh="@firebase/app-check",ah="@firebase/auth",lh="@firebase/auth-compat",uh="@firebase/database",ch="@firebase/database-compat",hh="@firebase/functions",dh="@firebase/functions-compat",fh="@firebase/installations",ph="@firebase/installations-compat",_h="@firebase/messaging",mh="@firebase/messaging-compat",gh="@firebase/performance",vh="@firebase/performance-compat",yh="@firebase/remote-config",Eh="@firebase/remote-config-compat",Dh="@firebase/storage",Ch="@firebase/storage-compat",wh="@firebase/firestore",bh="@firebase/firestore-compat",Ih="firebase",Ah="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="[DEFAULT]",Th={[zs]:"fire-core",[nh]:"fire-core-compat",[sh]:"fire-analytics",[ih]:"fire-analytics-compat",[oh]:"fire-app-check",[rh]:"fire-app-check-compat",[ah]:"fire-auth",[lh]:"fire-auth-compat",[uh]:"fire-rtdb",[ch]:"fire-rtdb-compat",[hh]:"fire-fn",[dh]:"fire-fn-compat",[fh]:"fire-iid",[ph]:"fire-iid-compat",[_h]:"fire-fcm",[mh]:"fire-fcm-compat",[gh]:"fire-perf",[vh]:"fire-perf-compat",[yh]:"fire-rc",[Eh]:"fire-rc-compat",[Dh]:"fire-gcs",[Ch]:"fire-gcs-compat",[wh]:"fire-fst",[bh]:"fire-fst-compat","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map,qs=new Map;function Sh(n,e){try{n.container.addComponent(e)}catch(t){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tn(n){const e=n.name;if(qs.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;qs.set(e,n);for(const t of Ii.values())Sh(t,n);return!0}function Er(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Nt=new Jn("app","Firebase",kh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=Ah;function Rh(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:al,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Nt.create("bad-app-name",{appName:String(i)});const s=Ii.get(i);if(s){if(bi(n,s.options)&&bi(t,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}const r=new Bc(i);for(const a of qs.values())r.addComponent(a);const o=new Nh(n,t,r);return Ii.set(i,o),o}function ll(n=al){const e=Ii.get(n);if(!e)throw Nt.create("no-app",{appName:n});return e}function ht(n,e,t){var i;let s=(i=Th[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(a.join(" "));return}tn(new kt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="firebase-heartbeat-database",Fh=1,$n="firebase-heartbeat-store";let Ss=null;function ul(){return Ss||(Ss=Xc(Oh,Fh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($n)}}}).catch(n=>{throw Nt.create("storage-open",{originalErrorMessage:n.message})})),Ss}async function Ph(n){try{return(await ul()).transaction($n).objectStore($n).get(cl(n))}catch(e){throw Nt.create("storage-get",{originalErrorMessage:e.message})}}async function So(n,e){try{const i=(await ul()).transaction($n,"readwrite");return await i.objectStore($n).put(e,cl(n)),i.done}catch(t){throw Nt.create("storage-set",{originalErrorMessage:t.message})}}function cl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1024,Mh=30*24*60*60*1e3;class xh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Uh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Mh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ko(),{heartbeatsToSend:t,unsentEntries:i}=Bh(this._heartbeatsCache.heartbeats),s=el(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ko(){return new Date().toISOString().substring(0,10)}function Bh(n,e=Lh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),No(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),No(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Uh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wc()?bc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ph(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return So(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function No(n){return el(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n){tn(new kt("platform-logger",e=>new eh(e),"PRIVATE")),tn(new kt("heartbeat",e=>new xh(e),"PRIVATE")),ht(zs,To,n),ht(zs,To,"esm2017"),ht("fire-js","")}Hh("");var $h="firebase",Wh="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht($h,Wh,"app");const Ht=[];function hl(n,e){return{subscribe:dl(n,e).subscribe}}function dl(n,e=U){let t;const i=new Set;function s(a){if(Oe(n,a)&&(n=a,t)){const l=!Ht.length;for(const u of i)u[1](),Ht.push(u,n);if(l){for(let u=0;u<Ht.length;u+=2)Ht[u][0](Ht[u+1]);Ht.length=0}}}function r(a){s(a(n))}function o(a,l=U){const u=[a,l];return i.add(u),i.size===1&&(t=e(s)||U),a(n),()=>{i.delete(u),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function fl(n,e,t){const i=!Array.isArray(n),s=i?[n]:n,r=e.length<2;return hl(t,o=>{let a=!1;const l=[];let u=0,c=U;const h=()=>{if(u)return;c();const _=e(i?l[0]:l,o);r?o(_):c=os(_)?_:U},d=s.map((_,p)=>uc(_,v=>{l[p]=v,u&=~(1<<p),a&&h()},()=>{u|=1<<p}));return a=!0,h(),function(){Re(d),c()}})}function jh(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,i,s,r,o=[],a="",l=n.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push("wild"),a+="/(.*)"):t===":"?(i=s.indexOf("?",1),r=s.indexOf(".",1),o.push(s.substring(1,~i?i:~r?r:s.length)),a+=!!~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~i?"?":"")+"\\"+s.substring(r))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function Vh(n){let e,t,i;const s=[n[2]];var r=n[0];function o(a){let l={};for(let u=0;u<s.length;u+=1)l=Wa(l,s[u]);return{props:l}}return r&&(e=new r(o()),e.$on("routeEvent",n[7])),{c(){e&&Un(e.$$.fragment),t=nt()},m(a,l){e&&Jt(e,a,l),T(a,t,l),i=!0},p(a,l){const u=l&4?Ya(s,[Qa(a[2])]):{};if(r!==(r=a[0])){if(e){hr();const c=e;St(c.$$.fragment,1,0,()=>{Zt(c,1)}),dr()}r?(e=new r(o()),e.$on("routeEvent",a[7]),Un(e.$$.fragment),Ze(e.$$.fragment,1),Jt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){i||(e&&Ze(e.$$.fragment,a),i=!0)},o(a){e&&St(e.$$.fragment,a),i=!1},d(a){a&&A(t),e&&Zt(e,a)}}}function zh(n){let e,t,i;const s=[{params:n[1]},n[2]];var r=n[0];function o(a){let l={};for(let u=0;u<s.length;u+=1)l=Wa(l,s[u]);return{props:l}}return r&&(e=new r(o()),e.$on("routeEvent",n[6])),{c(){e&&Un(e.$$.fragment),t=nt()},m(a,l){e&&Jt(e,a,l),T(a,t,l),i=!0},p(a,l){const u=l&6?Ya(s,[l&2&&{params:a[1]},l&4&&Qa(a[2])]):{};if(r!==(r=a[0])){if(e){hr();const c=e;St(c.$$.fragment,1,0,()=>{Zt(c,1)}),dr()}r?(e=new r(o()),e.$on("routeEvent",a[6]),Un(e.$$.fragment),Ze(e.$$.fragment,1),Jt(e,t.parentNode,t)):e=null}else r&&e.$set(u)},i(a){i||(e&&Ze(e.$$.fragment,a),i=!0)},o(a){e&&St(e.$$.fragment,a),i=!1},d(a){a&&A(t),e&&Zt(e,a)}}}function qh(n){let e,t,i,s;const r=[zh,Vh],o=[];function a(l,u){return l[1]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=nt()},m(l,u){o[e].m(l,u),T(l,i,u),s=!0},p(l,[u]){let c=e;e=a(l),e===c?o[e].p(l,u):(hr(),St(o[c],1,1,()=>{o[c]=null}),dr(),t=o[e],t?t.p(l,u):(t=o[e]=r[e](l),t.c()),Ze(t,1),t.m(i.parentNode,i))},i(l){s||(Ze(t),s=!0)},o(l){St(t),s=!1},d(l){o[e].d(l),l&&A(i)}}}function Ro(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let i="";return t>-1&&(i=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:i}}const Dr=hl(null,function(e){e(Ro());const t=()=>{e(Ro())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});fl(Dr,n=>n.location);fl(Dr,n=>n.querystring);const Oo=dl(void 0);function Gh(n,e,t){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class o{constructor(w,C){if(!C||typeof C!="function"&&(typeof C!="object"||C._sveltesparouter!==!0))throw Error("Invalid component object");if(!w||typeof w=="string"&&(w.length<1||w.charAt(0)!="/"&&w.charAt(0)!="*")||typeof w=="object"&&!(w instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:S,keys:F}=jh(w);this.path=w,typeof C=="object"&&C._sveltesparouter===!0?(this.component=C.component,this.conditions=C.conditions||[],this.userData=C.userData,this.props=C.props||{}):(this.component=()=>Promise.resolve(C),this.conditions=[],this.props={}),this._pattern=S,this._keys=F}match(w){if(s){if(typeof s=="string")if(w.startsWith(s))w=w.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const O=w.match(s);if(O&&O[0])w=w.substr(O[0].length)||"/";else return null}}const C=this._pattern.exec(w);if(C===null)return null;if(this._keys===!1)return C;const S={};let F=0;for(;F<this._keys.length;){try{S[this._keys[F]]=decodeURIComponent(C[F+1]||"")||null}catch{S[this._keys[F]]=null}F++}return S}async checkConditions(w){for(let C=0;C<this.conditions.length;C++)if(!await this.conditions[C](w))return!1;return!0}}const a=[];i instanceof Map?i.forEach((y,w)=>{a.push(new o(w,y))}):Object.keys(i).forEach(y=>{a.push(new o(y,i[y]))});let l=null,u=null,c={};const h=pc();async function d(y,w){await _c(),h(y,w)}let _=null,p=null;r&&(p=y=>{y.state&&y.state.__svelte_spa_router_scrollY?_=y.state:_=null},window.addEventListener("popstate",p),dc(()=>{_?window.scrollTo(_.__svelte_spa_router_scrollX,_.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let v=null,D=null;const N=Dr.subscribe(async y=>{v=y;let w=0;for(;w<a.length;){const C=a[w].match(y.location);if(!C){w++;continue}const S={route:a[w].path,location:y.location,querystring:y.querystring,userData:a[w].userData,params:C&&typeof C=="object"&&Object.keys(C).length?C:null};if(!await a[w].checkConditions(S)){t(0,l=null),D=null,d("conditionsFailed",S);return}d("routeLoading",Object.assign({},S));const F=a[w].component;if(D!=F){F.loading?(t(0,l=F.loading),D=F,t(1,u=F.loadingParams),t(2,c={}),d("routeLoaded",Object.assign({},S,{component:l,name:l.name,params:u}))):(t(0,l=null),D=null);const O=await F();if(y!=v)return;t(0,l=O&&O.default||O),D=F}C&&typeof C=="object"&&Object.keys(C).length?t(1,u=C):t(1,u=null),t(2,c=a[w].props),d("routeLoaded",Object.assign({},S,{component:l,name:l.name,params:u})).then(()=>{Oo.set(u)});return}t(0,l=null),D=null,Oo.set(void 0)});fc(()=>{N(),p&&window.removeEventListener("popstate",p)});function E(y){Eo.call(this,n,y)}function R(y){Eo.call(this,n,y)}return n.$$set=y=>{"routes"in y&&t(3,i=y.routes),"prefix"in y&&t(4,s=y.prefix),"restoreScrollState"in y&&t(5,r=y.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=r?"manual":"auto")},[l,u,c,i,s,r,E,R]}class Kh extends He{constructor(e){super(),Ue(this,e,Gh,qh,Oe,{routes:3,prefix:4,restoreScrollState:5})}}function Yh(n){let e;return{c(){e=g("div"),e.innerHTML=`<h1 class="svelte-1vyr2yy">404</h1> 
    <h2 text="">\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043B\u0435 \u0442\u0430\u043A\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435\u043C\u0430\u0454</h2> 
    <a href="#/" class="svelte-1vyr2yy">\u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443</a>`,f(e,"flex","center"),f(e,"class","over")},m(t,i){T(t,e,i)},p:U,i:U,o:U,d(t){t&&A(e)}}}class Qh extends He{constructor(e){super(),Ue(this,e,null,Yh,Oe,{})}}const Fo="@firebase/database",Po="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl="";function Xh(n){pl=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Hn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return qe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=function(n){try{if(typeof window!="undefined"&&typeof window[n]!="undefined"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jh(e)}}catch{}return new Zh},wt=_l("localStorage"),Gs=_l("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new gr("@firebase/database"),ed=function(){let n=1;return function(){return n++}}(),ml=function(n){const e=Pc(n),t=new Nc;t.update(e);const i=t.digest();return _r.encodeByteArray(i)},ei=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ei.apply(null,i):typeof i=="object"?e+=_e(i):e+=i,e+=" "}return e};let It=null,Lo=!0;const td=function(n,e){I(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Yt.logLevel=J.VERBOSE,It=Yt.log.bind(Yt),e&&Gs.set("logging_enabled",!0)):typeof n=="function"?It=n:(It=null,Gs.remove("logging_enabled"))},Ee=function(...n){if(Lo===!0&&(Lo=!1,It===null&&Gs.get("logging_enabled")===!0&&td(!0)),It){const e=ei.apply(null,n);It(e)}},ti=function(n){return function(...e){Ee(n,...e)}},Ks=function(...n){const e="FIREBASE INTERNAL ERROR: "+ei(...n);Yt.error(e)},Rt=function(...n){const e=`FIREBASE FATAL ERROR: ${ei(...n)}`;throw Yt.error(e),new Error(e)},Ie=function(...n){const e="FIREBASE WARNING: "+ei(...n);Yt.warn(e)},nd=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},id=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ot="[MIN_NAME]",ft="[MAX_NAME]",cn=function(n,e){if(n===e)return 0;if(n===Ot||e===ft)return-1;if(e===Ot||n===ft)return 1;{const t=Mo(n),i=Mo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},sd=function(n,e){return n===e?0:n<e?-1:1},mn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+_e(e))},wr=function(n){if(typeof n!="object"||n===null)return _e(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=_e(e[i]),t+=":",t+=wr(n[e[i]]);return t+="}",t},gl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const vl=function(n){I(!Cr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(s?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(c.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},rd=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},od=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},ad=new RegExp("^-?(0*)\\d{1,10}$"),ld=-2147483648,ud=2147483647,Mo=function(n){if(ad.test(n)){const e=Number(n);if(e>=ld&&e<=ud)return e}return null},hn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ie("Exception was thrown by user callback.",t),e},Math.floor(0))}},cd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kn=function(n,e){const t=setTimeout(n,e);return typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ee("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ie(e)}}class Ys{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ys.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="5",yl="v",El="s",Dl="r",Cl="f",wl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bl="ls",Il="p",Qs="ac",Al="websocket",Tl="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t,i,s,r=!1,o="",a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function pd(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Sl(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===Al)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Tl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pd(n)&&(t.ns=n.namespace);const s=[];return Ne(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.counters_={}}incrementCounter(e,t=1){qe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks={},Ns={};function Ir(n){const e=n.toString();return ks[e]||(ks[e]=new _d),ks[e]}function md(n,e){const t=n.toString();return Ns[t]||(Ns[t]=e()),Ns[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&hn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="start",vd="close",yd="pLPCommand",Ed="pRTLPCB",kl="id",Nl="pw",Rl="ser",Dd="cb",Cd="seg",wd="ts",bd="d",Id="dframe",Ol=1870,Fl=30,Ad=Ol-Fl,Td=25e3,Sd=3e4;class Wt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Ir(t),this.urlFn=l=>(this.appCheckToken&&(l[Qs]=this.appCheckToken),Sl(t,Tl,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new gd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sd)),id(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ar((...r)=>{const[o,a,l,u,c]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xo)this.id=a,this.password=l;else if(o===vd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[xo]="t",i[Rl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Dd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[yl]=br,this.transportSessionId&&(i[El]=this.transportSessionId),this.lastSessionId&&(i[bl]=this.lastSessionId),this.applicationId&&(i[Il]=this.applicationId),this.appCheckToken&&(i[Qs]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&wl.test(location.hostname)&&(i[Dl]=Cl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wt.forceAllow_=!0}static forceDisallow(){Wt.forceDisallow_=!0}static isAvailable(){return Wt.forceAllow_?!0:!Wt.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!rd()&&!od()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=_e(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Za(t),s=gl(i,Ad);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Id]="t",i[kl]=e,i[Nl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=_e(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ar{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ed(),window[yd+this.uniqueCallbackIdentifier]=e,window[Ed+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ar.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ee("frame writing exception"),a.stack&&Ee(a.stack),Ee(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ee("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kl]=this.myID,e[Nl]=this.myPW,e[Rl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fl+i.length<=Ol;){const o=this.pendingSegs.shift();i=i+"&"+Cd+s+"="+o.seg+"&"+wd+s+"="+o.ts+"&"+bd+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Td)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Ee("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=16384,Nd=45e3;let Ai=null;typeof MozWebSocket!="undefined"?Ai=MozWebSocket:typeof WebSocket!="undefined"&&(Ai=WebSocket);class Le{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Ir(t),this.connURL=Le.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[yl]=br,typeof location!="undefined"&&location.hostname&&wl.test(location.hostname)&&(o[Dl]=Cl),t&&(o[El]=t),i&&(o[bl]=i),s&&(o[Qs]=s),r&&(o[Il]=r),Sl(e,Al,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wt.set("previous_websocket_failure",!0);try{let i;il(),this.mySock=new Ai(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ai!==null&&!Le.forceDisallow_}static previouslyFailed(){return wt.isInMemoryStorage||wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Hn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=_e(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=gl(t,kd);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nd))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Le&&Le.isAvailable();let i=t&&!Le.previouslyFailed();if(e.webSocketOnly&&(t||Ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Le];else{const s=this.transports_=[];for(const r of Wn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=6e4,Od=5e3,Fd=10*1024,Pd=100*1024,Rs="t",Bo="d",Ld="s",Uo="r",Md="e",Ho="o",$o="a",Wo="n",jo="p",xd="h";class Bd{constructor(e,t,i,s,r,o,a,l,u,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new Wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=kn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rs in e){const t=e[Rs];t===$o?this.upgradeIfSecondaryHealthy_():t===Uo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ho&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=mn("t",e),i=mn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$o,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=mn("t",e),i=mn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=mn(Rs,e);if(Bo in e){const i=e[Bo];if(t===xd)this.onHandshake_(i);else if(t===Wo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ld?this.onConnectionShutdown_(i):t===Uo?this.onReset_(i):t===Md?Ks("Server Error: "+i):t===Ho?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ks("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),br!==i&&Ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),kn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Od))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Ll{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!mr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ti}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=32,zo=768;class X{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function G(){return new X("")}function $(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function pt(n){return n.pieces_.length-n.pieceNum_}function ne(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new X(n.pieces_,e)}function Ml(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Ud(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function xl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Bl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new X(e,0)}function ue(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof X)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new X(t,0)}function W(n){return n.pieceNum_>=n.pieces_.length}function Te(n,e){const t=$(n),i=$(e);if(t===null)return e;if(t===i)return Te(ne(n),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Tr(n,e){if(pt(n)!==pt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Me(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(pt(n)>pt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Hd{constructor(e,t){this.errorPrefix_=t,this.parts_=xl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=us(this.parts_[i]);Ul(this)}}function $d(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=us(e),Ul(n)}function Wd(n){const e=n.parts_.pop();n.byteLength_-=us(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ul(n){if(n.byteLength_>zo)throw new Error(n.errorPrefix_+"has a key path longer than "+zo+" bytes ("+n.byteLength_+").");if(n.parts_.length>Vo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vo+") or object contains a cycle "+Et(n))}function Et(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ll{constructor(){super(["visible"]);let e,t;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(t="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Sr}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=1e3,jd=60*5*1e3,Vd=3*1e3,qo=30*1e3,zd=1.3,qd=3e4,Gd="server_kill",Go=3;class Je extends Pl{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Je.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gn,this.maxReconnectDelay_=jd,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!il())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(_e(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new as,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,a,!1,null),t.resolve(a)):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Vd),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;Je.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&qe(e,"w")){const i=en(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Sc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ks("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qd&&(this.reconnectDelay_=gn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zd)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Je.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ee("getToken() completed but was canceled"):(Ee("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Bd(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,_=>{Ie(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gd)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ie(h),l())}}}interrupt(e){Ee("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ee("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ws(this.interruptReasons_)&&(this.reconnectDelay_=gn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>wr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new X(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){Ee("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Go&&(this.reconnectDelay_=qo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ee("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Go&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+pl.replace(/\./g,"-")]=1,mr()?e["framework.cordova"]=1:nl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ti.getInstance().currentlyOnline();return Ws(this.interruptReasons_)&&e}}Je.nextPersistentConnectionId_=0;Je.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new B(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new B(Ot,e),s=new B(Ot,t);return this.compare(i,s)!==0}minPost(){return B.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class Hl extends cs{static get __EMPTY_NODE(){return di}static set __EMPTY_NODE(e){di=e}compare(e,t){return cn(e.name,t.name)}isDefinedOn(e){throw an("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return B.MIN}maxPost(){return new B(ft,di)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,di)}toString(){return".key"}}const At=new Hl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:fe.RED,this.left=s!=null?s:be.EMPTY_NODE,this.right=r!=null?r:be.EMPTY_NODE}copy(e,t,i,s,r){return new fe(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class Kd{copy(e,t,i,s,r){return this}insert(e,t,i){return new fe(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,t=be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new fi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new fi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new fi(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new Kd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n,e){return cn(n.name,e.name)}function kr(n,e){return cn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;function Qd(n){Xs=n}const $l=function(n){return typeof n=="number"?"number:"+vl(n):"string:"+n},Wl=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&qe(e,".sv"),"Priority must be a string or number.")}else I(n===Xs||n.isEmpty(),"priority of unexpected type.");I(n===Xs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;class de{constructor(e,t=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wl(this.priorityNode_)}static set __childrenNodeConstructor(e){Ko=e}static get __childrenNodeConstructor(){return Ko}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:$(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=$(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$l(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=vl(this.value_):e+=this.value_,this.lazyHash_=ml(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=de.VALUE_TYPE_ORDER.indexOf(t),r=de.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jl,Vl;function Xd(n){jl=n}function Jd(n){Vl=n}class Zd extends cs{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?cn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return B.MIN}maxPost(){return new B(ft,new de("[PRIORITY-POST]",Vl))}makePost(e,t){const i=jl(e);return new B(t,new de("[PRIORITY-POST]",i))}toString(){return".priority"}}const oe=new Zd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=Math.log(2);class tf{constructor(e){const t=r=>parseInt(Math.log(r)/ef,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Si=function(n,e,t,i){n.sort(e);const s=function(l,u){const c=u-l;let h,d;if(c===0)return null;if(c===1)return h=n[l],d=t?t(h):h,new fe(d,h.node,fe.BLACK,null,null);{const _=parseInt(c/2,10)+l,p=s(l,_),v=s(_+1,u);return h=n[_],d=t?t(h):h,new fe(d,h.node,fe.BLACK,p,v)}},r=function(l){let u=null,c=null,h=n.length;const d=function(p,v){const D=h-p,N=h;h-=p;const E=s(D+1,N),R=n[D],y=t?t(R):R;_(new fe(y,R.node,v,null,E))},_=function(p){u?(u.left=p,u=p):(c=p,u=p)};for(let p=0;p<l.count;++p){const v=l.nextBitIsOne(),D=Math.pow(2,l.count-(p+1));v?d(D,fe.BLACK):(d(D,fe.BLACK),d(D,fe.RED))}return c},o=new tf(n.length),a=r(o);return new be(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;const $t={};class Ye{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I($t&&oe,"ChildrenNode.ts has not been loaded"),Os=Os||new Ye({".priority":$t},{".priority":oe}),Os}get(e){const t=en(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof be?t:null}hasIndex(e){return qe(this.indexSet_,e.toString())}addIndex(e,t){I(e!==At,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(B.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Si(i,e.getCompare()):a=$t;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Ye(c,u)}addToIndexes(e,t){const i=wi(this.indexes_,(s,r)=>{const o=en(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===$t)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(B.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Si(a,o.getCompare())}else return $t;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new Ye(i,this.indexSet_)}removeFromIndexes(e,t){const i=wi(this.indexes_,s=>{if(s===$t)return s;{const r=t.get(e.name);return r?s.remove(new B(e.name,r)):s}});return new Ye(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vn;class L{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Wl(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vn||(vn=new L(new be(kr),null,Ye.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vn}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?vn:t}}getChild(e){const t=$(e);return t===null?this:this.getImmediateChild(t).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new B(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?vn:this.priorityNode_;return new L(s,o,r)}}updateChild(e,t){const i=$(e);if(i===null)return t;{I($(e)!==".priority"||pt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(ne(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(oe,(o,a)=>{t[o]=a.val(e),i++,r&&L.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$l(this.getPriority().val())+":"),this.forEachChild(oe,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ml(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new B(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new B(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new B(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,B.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ni?-1:0}withIndex(e){if(e===At||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===At||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(oe),s=t.getIterator(oe);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===At?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nf extends L{constructor(){super(new be(kr),L.EMPTY_NODE,Ye.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const ni=new nf;Object.defineProperties(B,{MIN:{value:new B(Ot,L.EMPTY_NODE)},MAX:{value:new B(ft,ni)}});Hl.__EMPTY_NODE=L.EMPTY_NODE;de.__childrenNodeConstructor=L;Qd(ni);Jd(ni);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=!0;function pe(n,e=null){if(n===null)return L.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new de(t,pe(e))}if(!(n instanceof Array)&&sf){const t=[];let i=!1;if(Ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=pe(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new B(o,l)))}}),t.length===0)return L.EMPTY_NODE;const r=Si(t,Yd,o=>o.name,kr);if(i){const o=Si(t,oe.getCompare());return new L(r,pe(e),new Ye({".priority":o},{".priority":oe}))}else return new L(r,pe(e),Ye.Default)}else{let t=L.EMPTY_NODE;return Ne(n,(i,s)=>{if(qe(n,i)&&i.substring(0,1)!=="."){const r=pe(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(pe(e))}}Xd(pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends cs{constructor(e){super(),this.indexPath_=e,I(!W(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?cn(e.name,t.name):r}makePost(e,t){const i=pe(e),s=L.EMPTY_NODE.updateChild(this.indexPath_,i);return new B(t,s)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,ni);return new B(ft,e)}toString(){return xl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends cs{compare(e,t){const i=e.node.compareTo(t.node);return i===0?cn(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,t){const i=pe(e);return new B(t,i)}toString(){return".value"}}const zl=new rf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n){return{type:"value",snapshotNode:n}}function jn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Vn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function zn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function af(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Vn(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(jn(t,i)):o.trackChildChange(zn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,r)=>{t.hasChild(s)||i.trackChildChange(Vn(s,r))}),t.isLeafNode()||t.forEachChild(oe,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(zn(s,r,o))}else i.trackChildChange(jn(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.indexedFilter_=new Rr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qn.getStartPost_(e),this.endPost_=qn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,i,s,r,o){return this.matches(new B(t,i))||(i=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=L.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(L.EMPTY_NODE);const r=this;return t.forEachChild(oe,(o,a)=>{r.matches(new B(o,a))||(s=s.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.rangedFilter_=new qn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new B(t,i))||(i=L.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=L.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)s=s.updateImmediateChild(a.name,a.node),o++;else break}}else{s=t.withIndex(this.index_),s=s.updatePriority(L.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,_)=>h(_,d)}else l=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const h=l.getNext();!c&&a(r,h)<=0&&(c=!0),c&&u<this.limit_&&a(h,o)<=0?u++:s=s.updateImmediateChild(h.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new B(t,i),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(c&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(zn(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Vn(t,h));const v=a.updateImmediateChild(t,L.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(jn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:c&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Vn(u.name,u.node)),r.trackChildChange(jn(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ot}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ft}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Or;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uf(n){return n.loadsAllData()?new Rr(n.getIndex()):n.hasLimit()?new lf(n):new qn(n)}function cf(n,e,t){const i=n.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,t!=null?(i.startNameSet_=!0,i.indexStartName_=t):(i.startNameSet_=!1,i.indexStartName_=""),i}function hf(n,e,t){const i=n.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,t!==void 0?(i.endNameSet_=!0,i.indexEndName_=t):(i.endNameSet_=!1,i.indexEndName_=""),i}function df(n,e){const t=n.copy();return t.index_=e,t}function Yo(n){const e={};if(n.isDefault())return e;let t;return n.index_===oe?t="$priority":n.index_===zl?t="$value":n.index_===At?t="$key":(I(n.index_ instanceof Nr,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=_e(t),n.startSet_&&(e.startAt=_e(n.indexStartValue_),n.startNameSet_&&(e.startAt+=","+_e(n.indexStartName_))),n.endSet_&&(e.endAt=_e(n.indexEndValue_),n.endNameSet_&&(e.endAt+=","+_e(n.indexEndName_))),n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Qo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_)),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_)),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==oe&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Pl{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ki.getListenId_(e,i),a={};this.listens_[o]=a;const l=Yo(e._queryParams);this.restRequest_(r+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,i),en(this.listens_,o)===a){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",s(d,null)}})}unlisten(e,t){const i=ki.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Yo(e._queryParams),i=e._path.toString(),s=new as;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+un(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hn(a.responseText)}catch{Ie("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ie("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){return{value:null,children:new Map}}function ql(n,e,t){if(W(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=$(e);n.children.has(i)||n.children.set(i,Ni());const s=n.children.get(i);e=ne(e),ql(s,e,t)}}function Js(n,e,t){n.value!==null?t(e,n.value):pf(n,(i,s)=>{const r=new X(e.toString()+"/"+i);Js(s,r,t)})}function pf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ne(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=10*1e3,mf=30*1e3,gf=5*60*1e3;class vf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _f(e);const i=Xo+(mf-Xo)*Math.random();kn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ne(e,(s,r)=>{r>0&&qe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),kn(this.reportStats_.bind(this),Math.floor(Math.random()*2*gf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(We||(We={}));function Gl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yl(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=We.ACK_USER_WRITE,this.source=Gl()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new X(e));return new Ri(G(),t,this.revert)}}else return I($(this.path)===e,"operationForChild called for unrelated child."),new Ri(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=We.OVERWRITE}operationForChild(e){return W(this.path)?new Ft(this.source,G(),this.snap.getImmediateChild(e)):new Ft(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=We.MERGE}operationForChild(e){if(W(this.path)){const t=this.children.subtree(new X(e));return t.isEmpty()?null:t.value?new Ft(this.source,G(),t.value):new Gn(this.source,G(),t)}else return I($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gn(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const t=$(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ef(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(af(o.childName,o.snapshotNode))}),yn(n,s,"child_removed",e,i,t),yn(n,s,"child_added",e,i,t),yn(n,s,"child_moved",r,i,t),yn(n,s,"child_changed",e,i,t),yn(n,s,"value",e,i,t),s}function yn(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Cf(n,a,l)),o.forEach(a=>{const l=Df(n,a,r);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function Df(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Cf(n,e,t){if(e.childName==null||t.childName==null)throw an("Should only compare child_ events.");const i=new B(e.childName,e.snapshotNode),s=new B(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n,e){return{eventCache:n,serverCache:e}}function Nn(n,e,t,i){return hs(new _t(e,t,i),n.serverCache)}function Ql(n,e,t,i){return hs(n.eventCache,new _t(e,t,i))}function Oi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;const wf=()=>(Fs||(Fs=new be(sd)),Fs);class te{constructor(e,t=wf()){this.value=e,this.children=t}static fromObject(e){let t=new te(null);return Ne(e,(i,s)=>{t=t.set(new X(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:G(),value:this.value};if(W(e))return null;{const i=$(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(ne(e),t);return r!=null?{path:ue(new X(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const t=$(e),i=this.children.get(t);return i!==null?i.subtree(ne(e)):new te(null)}}set(e,t){if(W(e))return new te(t,this.children);{const i=$(e),r=(this.children.get(i)||new te(null)).set(ne(e),t),o=this.children.insert(i,r);return new te(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const t=$(e),i=this.children.get(t);if(i){const s=i.remove(ne(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new te(null):new te(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const t=$(e),i=this.children.get(t);return i?i.get(ne(e)):null}}setTree(e,t){if(W(e))return t;{const i=$(e),r=(this.children.get(i)||new te(null)).setTree(ne(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new te(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ue(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,G(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(W(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ne(e),ue(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,G(),t)}foreachOnPath_(e,t,i){if(W(e))return this;{this.value&&i(t,this.value);const s=$(e),r=this.children.get(s);return r?r.foreachOnPath_(ne(e),ue(t,s),i):new te(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ue(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.writeTree_=e}static empty(){return new xe(new te(null))}}function Rn(n,e,t){if(W(e))return new xe(new te(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Te(s,e);return r=r.updateChild(o,t),new xe(n.writeTree_.set(s,r))}else{const s=new te(t),r=n.writeTree_.setTree(e,s);return new xe(r)}}}function Jo(n,e,t){let i=n;return Ne(t,(s,r)=>{i=Rn(i,ue(e,s),r)}),i}function Zo(n,e){if(W(e))return xe.empty();{const t=n.writeTree_.setTree(e,new te(null));return new xe(t)}}function Zs(n,e){return xt(n,e)!=null}function xt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Te(t.path,e)):null}function ea(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(oe,(i,s)=>{e.push(new B(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new B(i,s.value))}),e}function dt(n,e){if(W(e))return n;{const t=xt(n,e);return t!=null?new xe(new te(t)):new xe(n.writeTree_.subtree(e))}}function er(n){return n.writeTree_.isEmpty()}function nn(n,e){return Xl(G(),n.writeTree_,e)}function Xl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Xl(ue(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ue(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e){return tu(e,n)}function bf(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Rn(n.visibleWrites,e,t)),n.lastWriteId=i}function If(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Af(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Tf(a,i.path)?s=!1:Me(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Sf(n),!0;if(i.snap)n.visibleWrites=Zo(n.visibleWrites,i.path);else{const a=i.children;Ne(a,l=>{n.visibleWrites=Zo(n.visibleWrites,ue(i.path,l))})}return!0}else return!1}function Tf(n,e){if(n.snap)return Me(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Me(ue(n.path,t),e))return!0;return!1}function Sf(n){n.visibleWrites=Jl(n.allWrites,kf,G()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function kf(n){return n.visible}function Jl(n,e,t){let i=xe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Me(t,o)?(a=Te(t,o),i=Rn(i,a,r.snap)):Me(o,t)&&(a=Te(o,t),i=Rn(i,G(),r.snap.getChild(a)));else if(r.children){if(Me(t,o))a=Te(t,o),i=Jo(i,a,r.children);else if(Me(o,t))if(a=Te(o,t),W(a))i=Jo(i,G(),r.children);else{const l=en(r.children,$(a));if(l){const u=l.getChild(ne(a));i=Rn(i,G(),u)}}}else throw an("WriteRecord should have .snap or .children")}}return i}function Zl(n,e,t,i,s){if(!i&&!s){const r=xt(n.visibleWrites,e);if(r!=null)return r;{const o=dt(n.visibleWrites,e);if(er(o))return t;if(t==null&&!Zs(o,G()))return null;{const a=t||L.EMPTY_NODE;return nn(o,a)}}}else{const r=dt(n.visibleWrites,e);if(!s&&er(r))return t;if(!s&&t==null&&!Zs(r,G()))return null;{const o=function(u){return(u.visible||s)&&(!i||!~i.indexOf(u.writeId))&&(Me(u.path,e)||Me(e,u.path))},a=Jl(n.allWrites,o,e),l=t||L.EMPTY_NODE;return nn(a,l)}}}function Nf(n,e,t){let i=L.EMPTY_NODE;const s=xt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=dt(n.visibleWrites,e);return t.forEachChild(oe,(o,a)=>{const l=nn(dt(r,new X(o)),a);i=i.updateImmediateChild(o,l)}),ea(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=dt(n.visibleWrites,e);return ea(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Rf(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ue(e,t);if(Zs(n.visibleWrites,r))return null;{const o=dt(n.visibleWrites,r);return er(o)?s.getChild(t):nn(o,s.getChild(t))}}function Of(n,e,t,i){const s=ue(e,t),r=xt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=dt(n.visibleWrites,s);return nn(o,i.getNode().getImmediateChild(t))}else return null}function Ff(n,e){return xt(n.visibleWrites,e)}function Pf(n,e,t,i,s,r,o){let a;const l=dt(n.visibleWrites,e),u=xt(l,G());if(u!=null)a=u;else if(t!=null)a=nn(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=d.getNext();for(;_&&c.length<s;)h(_,i)!==0&&c.push(_),_=d.getNext();return c}else return[]}function Lf(){return{visibleWrites:xe.empty(),allWrites:[],lastWriteId:-1}}function Fi(n,e,t,i){return Zl(n.writeTree,n.treePath,e,t,i)}function Pr(n,e){return Nf(n.writeTree,n.treePath,e)}function ta(n,e,t,i){return Rf(n.writeTree,n.treePath,e,t,i)}function Pi(n,e){return Ff(n.writeTree,ue(n.treePath,e))}function Mf(n,e,t,i,s,r){return Pf(n.writeTree,n.treePath,e,t,i,s,r)}function Lr(n,e,t){return Of(n.writeTree,n.treePath,e,t)}function eu(n,e){return tu(ue(n.treePath,e),n.writeTree)}function tu(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,zn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Vn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,jn(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,zn(i,e.snapshotNode,s.oldSnap));else throw an("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const nu=new Bf;class Mr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pt(this.viewCache_),r=Mf(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(n){return{filter:n}}function Hf(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function $f(n,e,t,i,s){const r=new xf;let o,a;if(t.type===We.OVERWRITE){const u=t;u.source.fromUser?o=tr(n,e,u.path,u.snap,i,s,r):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Li(n,e,u.path,u.snap,i,s,a,r))}else if(t.type===We.MERGE){const u=t;u.source.fromUser?o=jf(n,e,u.path,u.children,i,s,r):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=nr(n,e,u.path,u.children,i,s,a,r))}else if(t.type===We.ACK_USER_WRITE){const u=t;u.revert?o=qf(n,e,u.path,i,s,r):o=Vf(n,e,u.path,u.affectedTree,i,s,r)}else if(t.type===We.LISTEN_COMPLETE)o=zf(n,e,t.path,i,r);else throw an("Unknown operation type: "+t.type);const l=r.getChanges();return Wf(e,o,l),{viewCache:o,changes:l}}function Wf(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Oi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(of(Oi(e)))}}function iu(n,e,t,i,s,r){const o=e.eventCache;if(Pi(i,t)!=null)return e;{let a,l;if(W(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pt(e),c=u instanceof L?u:L.EMPTY_NODE,h=Pr(i,c);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=Fi(i,Pt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=$(t);if(u===".priority"){I(pt(t)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=ta(i,t,c,l);h!=null?a=n.filter.updatePriority(c,h):a=o.getNode()}else{const c=ne(t);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const d=ta(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=Lr(i,u,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),u,h,c,s,r):a=o.getNode()}}return Nn(e,a,o.isFullyInitialized()||W(t),n.filter.filtersNodes())}}function Li(n,e,t,i,s,r,o,a){const l=e.serverCache;let u;const c=o?n.filter:n.filter.getIndexedFilter();if(W(t))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(t,i);u=c.updateFullNode(l.getNode(),_,null)}else{const _=$(t);if(!l.isCompleteForPath(t)&&pt(t)>1)return e;const p=ne(t),D=l.getNode().getImmediateChild(_).updateChild(p,i);_===".priority"?u=c.updatePriority(l.getNode(),D):u=c.updateChild(l.getNode(),_,D,p,nu,null)}const h=Ql(e,u,l.isFullyInitialized()||W(t),c.filtersNodes()),d=new Mr(s,h,r);return iu(n,h,t,s,d,a)}function tr(n,e,t,i,s,r,o){const a=e.eventCache;let l,u;const c=new Mr(s,e,r);if(W(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Nn(e,u,!0,n.filter.filtersNodes());else{const h=$(t);if(h===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),l=Nn(e,u,a.isFullyInitialized(),a.isFiltered());else{const d=ne(t),_=a.getNode().getImmediateChild(h);let p;if(W(d))p=i;else{const v=c.getCompleteChild(h);v!=null?Ml(d)===".priority"&&v.getChild(Bl(d)).isEmpty()?p=v:p=v.updateChild(d,i):p=L.EMPTY_NODE}if(_.equals(p))l=e;else{const v=n.filter.updateChild(a.getNode(),h,p,d,c,o);l=Nn(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function na(n,e){return n.eventCache.isCompleteForChild(e)}function jf(n,e,t,i,s,r,o){let a=e;return i.foreach((l,u)=>{const c=ue(t,l);na(e,$(c))&&(a=tr(n,a,c,u,s,r,o))}),i.foreach((l,u)=>{const c=ue(t,l);na(e,$(c))||(a=tr(n,a,c,u,s,r,o))}),a}function ia(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function nr(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;W(t)?u=i:u=new te(null).setTree(t,i);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),p=ia(n,_,d);l=Li(n,l,new X(h),p,s,r,o,a)}}),u.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!c.hasChild(h)&&!_){const p=e.serverCache.getNode().getImmediateChild(h),v=ia(n,p,d);l=Li(n,l,new X(h),v,s,r,o,a)}}),l}function Vf(n,e,t,i,s,r,o){if(Pi(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(W(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Li(n,e,t,l.getNode().getChild(t),s,r,a,o);if(W(t)){let u=new te(null);return l.getNode().forEachChild(At,(c,h)=>{u=u.set(new X(c),h)}),nr(n,e,t,u,s,r,a,o)}else return e}else{let u=new te(null);return i.foreach((c,h)=>{const d=ue(t,c);l.isCompleteForPath(d)&&(u=u.set(c,l.getNode().getChild(d)))}),nr(n,e,t,u,s,r,a,o)}}function zf(n,e,t,i,s){const r=e.serverCache,o=Ql(e,r.getNode(),r.isFullyInitialized()||W(t),r.isFiltered());return iu(n,o,t,i,nu,s)}function qf(n,e,t,i,s,r){let o;if(Pi(i,t)!=null)return e;{const a=new Mr(i,e,s),l=e.eventCache.getNode();let u;if(W(t)||$(t)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Fi(i,Pt(e));else{const h=e.serverCache.getNode();I(h instanceof L,"serverChildren would be complete if leaf node"),c=Pr(i,h)}c=c,u=n.filter.updateFullNode(l,c,r)}else{const c=$(t);let h=Lr(i,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=n.filter.updateChild(l,c,h,ne(t),a,r):e.eventCache.getNode().hasChild(c)?u=n.filter.updateChild(l,c,L.EMPTY_NODE,ne(t),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fi(i,Pt(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Pi(i,G())!=null,Nn(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Rr(i.getIndex()),r=uf(i);this.processor_=Uf(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(L.EMPTY_NODE,a.getNode(),null),c=new _t(l,o.isFullyInitialized(),s.filtersNodes()),h=new _t(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=hs(h,c),this.eventGenerator_=new yf(this.query_)}get query(){return this.query_}}function Kf(n){return Oi(n.viewCache_)}function Yf(n,e){const t=Pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!W(e)&&!t.getImmediateChild($(e)).isEmpty())?t.getChild(e):null}function sa(n,e,t,i){e.type===We.MERGE&&e.source.queryId!==null&&(I(Pt(n.viewCache_),"We should always have a full cache before handling merges"),I(Oi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=$f(n.processor_,s,e,t,i);return Hf(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Qf(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Qf(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Ef(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;class Xf{constructor(){this.views=new Map}}function Jf(n){I(!ra,"__referenceConstructor has already been defined"),ra=n}function xr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),sa(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(sa(o,e,t,i));return r}}function Zf(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Fi(t,s?i:null),l=!1;a?l=!0:i instanceof L?(a=Pr(t,i),l=!1):(a=L.EMPTY_NODE,l=!1);const u=hs(new _t(a,l,!1),new _t(i,s,!1));return new Gf(e,u)}return o}function Kn(n,e){let t=null;for(const i of n.views.values())t=t||Yf(i,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa;function ep(n){I(!oa,"__referenceConstructor has already been defined"),oa=n}class aa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=Lf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function su(n,e,t,i,s){return bf(n.pendingWriteTree_,e,t,i,s),s?ds(n,new Ft(Gl(),e,t)):[]}function bt(n,e,t=!1){const i=If(n.pendingWriteTree_,e);if(Af(n.pendingWriteTree_,e)){let r=new te(null);return i.snap!=null?r=r.set(G(),!0):Ne(i.children,o=>{r=r.set(new X(o),!0)}),ds(n,new Ri(i.path,r,t))}else return[]}function ii(n,e,t){return ds(n,new Ft(Kl(),e,t))}function tp(n,e,t){const i=te.fromObject(t);return ds(n,new Gn(Kl(),e,i))}function np(n,e,t,i){const s=au(n,i);if(s!=null){const r=lu(s),o=r.path,a=r.queryId,l=Te(o,e),u=new Ft(Yl(a),l,t);return uu(n,o,u)}else return[]}function ip(n,e,t,i){const s=au(n,i);if(s){const r=lu(s),o=r.path,a=r.queryId,l=Te(o,e),u=te.fromObject(t),c=new Gn(Yl(a),l,u);return uu(n,o,c)}else return[]}function Br(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Te(o,e),u=Kn(a,l);if(u)return u});return Zl(s,e,r,t,!0)}function sp(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(u,c)=>{const h=Te(u,t);i=i||Kn(c,h)});let s=n.syncPointTree_.get(t);s?i=i||Kn(s,G()):(s=new Xf,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new _t(i,!0,!1):null,a=Fr(n.pendingWriteTree_,e._path),l=Zf(s,e,a,r?o.getNode():L.EMPTY_NODE,r);return Kf(l)}function ds(n,e){return ru(e,n.syncPointTree_,null,Fr(n.pendingWriteTree_,G()))}function ru(n,e,t,i){if(W(n.path))return ou(n,e,t,i);{const s=e.get(G());t==null&&s!=null&&(t=Kn(s,G()));let r=[];const o=$(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,c=eu(i,o);r=r.concat(ru(a,l,u,c))}return s&&(r=r.concat(xr(s,n,i,t))),r}}function ou(n,e,t,i){const s=e.get(G());t==null&&s!=null&&(t=Kn(s,G()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=eu(i,o),c=n.operationForChild(o);c&&(r=r.concat(ou(c,a,l,u)))}),s&&(r=r.concat(xr(s,n,i,t))),r}function au(n,e){return n.tagToQueryMap.get(e)}function lu(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new X(n.substr(0,e))}}function uu(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=Fr(n.pendingWriteTree_,e);return xr(i,t,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ur(t)}node(){return this.node_}}class Hr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ue(this.path_,e);return new Hr(this.syncTree_,t)}node(){return Br(this.syncTree_,this.path_)}}const rp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},la=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return op(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ap(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},op=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},ap=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},lp=function(n,e,t,i){return $r(e,new Hr(t,n),i)},cu=function(n,e,t){return $r(n,new Ur(e),t)};function $r(n,e,t){const i=n.getPriority().val(),s=la(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=la(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new de(a,pe(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new de(s))),o.forEachChild(oe,(a,l)=>{const u=$r(l,e.getImmediateChild(a),t);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function jr(n,e){let t=e instanceof X?e:new X(e),i=n,s=$(t);for(;s!==null;){const r=en(i.node.children,s)||{children:{},childCount:0};i=new Wr(s,i,r),t=ne(t),s=$(t)}return i}function dn(n){return n.node.value}function hu(n,e){n.node.value=e,ir(n)}function du(n){return n.node.childCount>0}function up(n){return dn(n)===void 0&&!du(n)}function fs(n,e){Ne(n.node.children,(t,i)=>{e(new Wr(t,n,i))})}function fu(n,e,t,i){t&&!i&&e(n),fs(n,s=>{fu(s,e,!0,i)}),t&&i&&e(n)}function cp(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function si(n){return new X(n.parent===null?n.name:si(n.parent)+"/"+n.name)}function ir(n){n.parent!==null&&hp(n.parent,n.name,n)}function hp(n,e,t){const i=up(t),s=qe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ir(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ir(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=/[\[\].#$\/\u0000-\u001F\u007F]/,fp=/[\[\].#$\u0000-\u001F\u007F]/,Ps=10*1024*1024,Vr=function(n){return typeof n=="string"&&n.length!==0&&!dp.test(n)},pu=function(n){return typeof n=="string"&&n.length!==0&&!fp.test(n)},pp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pu(n)},ua=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Cr(n)||n&&typeof n=="object"&&qe(n,".sv")},ps=function(n,e,t,i){i&&e===void 0||zr(ls(n,"value"),e,t)},zr=function(n,e,t){const i=t instanceof X?new Hd(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Et(i));if(typeof e=="function")throw new Error(n+"contains a function "+Et(i)+" with contents = "+e.toString());if(Cr(e))throw new Error(n+"contains "+e.toString()+" "+Et(i));if(typeof e=="string"&&e.length>Ps/3&&us(e)>Ps)throw new Error(n+"contains a string greater than "+Ps+" utf8 bytes "+Et(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ne(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Et(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$d(i,o),zr(n,a,i),Wd(i)}),s&&r)throw new Error(n+' contains ".value" child '+Et(i)+" in addition to actual children.")}},_p=function(n,e,t,i){if(!(i&&t===void 0)&&!Vr(t))throw new Error(ls(n,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},qr=function(n,e,t,i){if(!(i&&t===void 0)&&!pu(t))throw new Error(ls(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qr(n,e,t,i)},gp=function(n,e){if($(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},vp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!pp(t))throw new Error(ls(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Tr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ep(n,e,t){Gr(n,t),_u(n,i=>Tr(i,e))}function et(n,e,t){Gr(n,t),_u(n,i=>Me(i,e)||Me(e,i))}function _u(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Dp(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Dp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();It&&Ee("event: "+t.toString()),hn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="repo_interrupt",wp=25;class bp{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ni(),this.transactionQueueTree_=new Wr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ip(n,e,t){if(n.stats_=Ir(n.repoInfo_),n.forceRestClient_||cd())n.server_=new ki(n.repoInfo_,(i,s,r,o)=>{ca(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ha(n,!0),0);else{if(typeof t!="undefined"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Je(n.repoInfo_,e,(i,s,r,o)=>{ca(n,i,s,r,o)},i=>{ha(n,i)},i=>{Tp(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=md(n.repoInfo_,()=>new vf(n.stats_,n.server_)),n.infoData_=new ff,n.infoSyncTree_=new aa({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=ii(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yr(n,"connected",!1),n.serverSyncTree_=new aa({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const u=o(a,l);et(n.eventQueue_,i._path,u)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Ap(n){const t=n.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Kr(n){return rp({timestamp:Ap(n)})}function ca(n,e,t,i,s){n.dataUpdateCount++;const r=new X(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=wi(t,u=>pe(u));o=ip(n.serverSyncTree_,r,l,s)}else{const l=pe(t);o=np(n.serverSyncTree_,r,l,s)}else if(i){const l=wi(t,u=>pe(u));o=tp(n.serverSyncTree_,r,l)}else{const l=pe(t);o=ii(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ms(n,r)),et(n.eventQueue_,a,o)}function ha(n,e){Yr(n,"connected",e),e===!1&&Np(n)}function Tp(n,e){Ne(e,(t,i)=>{Yr(n,t,i)})}function Yr(n,e,t){const i=new X("/.info/"+e),s=pe(t);n.infoData_.updateSnapshot(i,s);const r=ii(n.infoSyncTree_,i,s);et(n.eventQueue_,i,r)}function mu(n){return n.nextWriteId_++}function Sp(n,e){const t=sp(n.serverSyncTree_,e);return t!=null?Promise.resolve(t):n.server_.get(e).then(i=>{const s=pe(i).withIndex(e._queryParams.getIndex()),r=ii(n.serverSyncTree_,e._path,s);return Ep(n.eventQueue_,e._path,r),Promise.resolve(s)},i=>(_s(n,"get for query "+_e(e)+" failed: "+i),Promise.reject(new Error(i))))}function kp(n,e,t,i,s){_s(n,"set",{path:e.toString(),value:t,priority:i});const r=Kr(n),o=pe(t,i),a=Br(n.serverSyncTree_,e),l=cu(o,a,r),u=mu(n),c=su(n.serverSyncTree_,e,l,u,!0);Gr(n.eventQueue_,c),n.server_.put(e.toString(),o.val(!0),(d,_)=>{const p=d==="ok";p||Ie("set at "+e+" failed: "+d);const v=bt(n.serverSyncTree_,u,!p);et(n.eventQueue_,e,v),Op(n,s,d,_)});const h=Du(n,e);ms(n,h),et(n.eventQueue_,h,[])}function Np(n){_s(n,"onDisconnectEvents");const e=Kr(n),t=Ni();Js(n.onDisconnect_,G(),(s,r)=>{const o=lp(s,r,n.serverSyncTree_,e);ql(t,s,o)});let i=[];Js(t,G(),(s,r)=>{i=i.concat(ii(n.serverSyncTree_,s,r));const o=Du(n,s);ms(n,o)}),n.onDisconnect_=Ni(),et(n.eventQueue_,G(),i)}function Rp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Cp)}function _s(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ee(t,...e)}function Op(n,e,t,i){e&&hn(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function gu(n,e,t){return Br(n.serverSyncTree_,e,t)||L.EMPTY_NODE}function Qr(n,e=n.transactionQueueTree_){if(e||gs(n,e),dn(e)){const t=yu(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Fp(n,si(e),t)}else du(e)&&fs(e,t=>{Qr(n,t)})}function Fp(n,e,t){const i=t.map(u=>u.currentWriteId),s=gu(n,e,i);let r=s;const o=s.hash();for(let u=0;u<t.length;u++){const c=t[u];I(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Te(e,c.path);r=r.updateChild(h,c.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,u=>{_s(n,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,c=c.concat(bt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();gs(n,jr(n.transactionQueueTree_,e)),Qr(n,n.transactionQueueTree_),et(n.eventQueue_,e,c);for(let d=0;d<h.length;d++)hn(h[d])}else{if(u==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ie("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=u}ms(n,e)}},o)}function ms(n,e){const t=vu(n,e),i=si(t),s=yu(n,t);return Pp(n,s,i),i}function Pp(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Te(t,l.path);let c=!1,h;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,s=s.concat(bt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wp)c=!0,h="maxretry",s=s.concat(bt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=gu(n,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){zr("transaction failed: Data returned ",_,l.path);let p=pe(_);typeof _=="object"&&_!=null&&qe(_,".priority")||(p=p.updatePriority(d.getPriority()));const D=l.currentWriteId,N=Kr(n),E=cu(p,d,N);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=E,l.currentWriteId=mu(n),o.splice(o.indexOf(D),1),s=s.concat(su(n.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),s=s.concat(bt(n.serverSyncTree_,D,!0))}else c=!0,h="nodata",s=s.concat(bt(n.serverSyncTree_,l.currentWriteId,!0))}et(n.eventQueue_,t,s),s=[],c&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}gs(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)hn(i[a]);Qr(n,n.transactionQueueTree_)}function vu(n,e){let t,i=n.transactionQueueTree_;for(t=$(e);t!==null&&dn(i)===void 0;)i=jr(i,t),e=ne(e),t=$(e);return i}function yu(n,e){const t=[];return Eu(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Eu(n,e,t){const i=dn(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);fs(e,s=>{Eu(n,s,t)})}function gs(n,e){const t=dn(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,hu(e,t.length>0?t:void 0)}fs(e,i=>{gs(n,i)})}function Du(n,e){const t=si(vu(n,e)),i=jr(n.transactionQueueTree_,e);return cp(i,s=>{Ls(n,s)}),Ls(n,i),fu(i,s=>{Ls(n,s)}),t}function Ls(n,e){const t=dn(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(bt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hu(e,void 0):t.length=r+1,et(n.eventQueue_,si(e),s);for(let o=0;o<i.length;o++)hn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Mp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ie(`Invalid query segment '${t}' in query '${n}'`)}return e}const da=function(n,e){const t=xp(n),i=t.namespace;t.domain==="firebase.com"&&Rt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||nd();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fd(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new X(t.pathString)}},xp=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let c=n.indexOf("/");c===-1&&(c=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(c,h)),c<h&&(s=Lp(n.substring(c,h)));const d=Mp(n.substring(Math.min(n.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return W(this._path)?null:Ml(this._path)}get ref(){return new gt(this._repo,this._path)}get _queryIdentifier(){const e=Qo(this._queryParams),t=wr(e);return t==="{}"?"default":t}get _queryObject(){return Qo(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof fn))return!1;const t=this._repo===e._repo,i=Tr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ud(this._path)}}function Bp(n,e){if(n._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Xr(n){let e=null,t=null;if(n.hasStart()&&(e=n.getIndexStartValue()),n.hasEnd()&&(t=n.getIndexEndValue()),n.getIndex()===At){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(n.hasStart()){if(n.getIndexStartName()!==Ot)throw new Error(i);if(typeof e!="string")throw new Error(s)}if(n.hasEnd()){if(n.getIndexEndName()!==ft)throw new Error(i);if(typeof t!="string")throw new Error(s)}}else if(n.getIndex()===oe){if(e!=null&&!ua(e)||t!=null&&!ua(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(n.getIndex()instanceof Nr||n.getIndex()===zl,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Cu(n){if(n.hasStart()&&n.hasEnd()&&n.hasLimit()&&!n.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class gt extends fn{constructor(e,t){super(e,t,new Or,!1)}get parent(){const e=Bl(this._path);return e===null?null:new gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mi{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new X(e),i=sr(this.ref,e);return new Mi(this._node.getChild(t),i,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Mi(s,sr(this.ref,i),oe)))}hasChild(e){const t=new X(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ae(n,e){return n=Se(n),n._checkNotDeleted("ref"),e!==void 0?sr(n._root,e):n._root}function sr(n,e){return n=Se(n),$(n._path)===null?mp("child","path",e,!1):qr("child","path",e,!1),new gt(n._repo,ue(n._path,e))}function sn(n,e){n=Se(n),gp("set",n._path),ps("set",e,n._path,!1);const t=new as;return kp(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function mt(n){return n=Se(n),Sp(n._repo,n).then(e=>new Mi(e,new gt(n._repo,n._path),n._queryParams.getIndex()))}class vs{}class Up extends vs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){ps("endAt",this._value,e._path,!0);const t=hf(e._queryParams,this._value,this._key);if(Cu(t),Xr(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new fn(e._repo,e._path,t,e._orderByCalled)}}class Hp extends vs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){ps("startAt",this._value,e._path,!0);const t=cf(e._queryParams,this._value,this._key);if(Cu(t),Xr(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new fn(e._repo,e._path,t,e._orderByCalled)}}class $p extends vs{constructor(e){super(),this._path=e}_apply(e){Bp(e,"orderByChild");const t=new X(this._path);if(W(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new Nr(t),s=df(e._queryParams,i);return Xr(s),new fn(e._repo,e._path,s,!0)}}function Wp(n){if(n==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(n==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(n==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return qr("orderByChild","path",n,!1),new $p(n)}class jp extends vs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(ps("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Up(this._value,this._key)._apply(new Hp(this._value,this._key)._apply(e))}}function Vp(n,e){return _p("equalTo","key",e,!0),new jp(n,e)}function zp(n,...e){let t=Se(n);for(const i of e)t=i._apply(t);return t}Jf(gt);ep(gt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="FIREBASE_DATABASE_EMULATOR_HOST",rr={};let Gp=!1;function Kp(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ee("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=da(r,s),a=o.repoInfo,l,u;typeof process!="undefined"&&process.env&&(u=process.env[qp]),u?(l=!0,r=`http://${u}?ns=${a.namespace}`,o=da(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const c=s&&l?new Ys(Ys.OWNER):new dd(n.name,n.options,e);vp("Invalid Firebase Database URL",o),W(o.path)||Rt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Qp(a,n,c,new hd(n.name,t));return new Xp(h,n)}function Yp(n,e){const t=rr[e];(!t||t[n.key]!==n)&&Rt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Rp(n),delete t[n.key]}function Qp(n,e,t,i){let s=rr[e.name];s||(s={},rr[e.name]=s);let r=s[n.toURLString()];return r&&Rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new bp(n,Gp,t,i),s[n.toURLString()]=r,r}class Xp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ip(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Yp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rt("Cannot call "+e+" on a deleted database.")}}function Bt(n=ll(),e){return Er(n,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){Xh(Zn),tn(new kt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Kp(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),ht(Fo,Po,n),ht(Fo,Po,"esm2017")}Je.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Je.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Jp();function Jr(n){this.j={},this.jr=[],this.jd=null,this.t=n}Jr.prototype={accepts:function(){return!!this.t},tt:function(e,t){if(t&&t.j)return this.j[e]=t,t;var i=t,s=this.j[e];if(s)return i&&(s.t=i),s;s=Q();var r=xi(this,e);return r?(Object.assign(s.j,r.j),s.jr.append(r.jr),s.jr=r.jd,s.t=i||r.t):s.t=i,this.j[e]=s,s}};var Q=function(){return new Jr},P=function(e){return new Jr(e)},b=function(e,t,i){e.j[t]||(e.j[t]=i)},he=function(e,t,i){e.jr.push([t,i])},xi=function(e,t){var i=e.j[t];if(i)return i;for(var s=0;s<e.jr.length;s++){var r=e.jr[s][0],o=e.jr[s][1];if(r.test(t))return o}return e.jd},H=function(e,t,i){for(var s=0;s<t.length;s++)b(e,t[s],i)},Zp=function(e,t){for(var i=0;i<t.length;i++){var s=t[i][0],r=t[i][1];b(e,s,r)}},vt=function(e,t,i,s){for(var r=0,o=t.length,a;r<o&&(a=e.j[t[r]]);)e=a,r++;if(r>=o)return[];for(;r<o-1;)a=s(),b(e,t[r],a),e=a,r++;b(e,t[o-1],i)},Pe="DOMAIN",Ge="LOCALHOST",$e="TLD",ke="NUM",rn="PROTOCOL",Zr="MAILTO",wu="WS",eo="NL",jt="OPENBRACE",On="OPENBRACKET",Fn="OPENANGLEBRACKET",Pn="OPENPAREN",Dt="CLOSEBRACE",Vt="CLOSEBRACKET",zt="CLOSEANGLEBRACKET",qt="CLOSEPAREN",Bi="AMPERSAND",Ui="APOSTROPHE",Hi="ASTERISK",Gt="AT",$i="BACKSLASH",Wi="BACKTICK",ji="CARET",Ln="COLON",to="COMMA",Vi="DOLLAR",rt="DOT",zi="EQUALS",no="EXCLAMATION",qi="HYPHEN",Gi="PERCENT",Ki="PIPE",Yi="PLUS",Qi="POUND",Xi="QUERY",io="QUOTE",so="SEMI",Ke="SLASH",Ji="TILDE",Zi="UNDERSCORE",es="SYM",e_=Object.freeze({__proto__:null,DOMAIN:Pe,LOCALHOST:Ge,TLD:$e,NUM:ke,PROTOCOL:rn,MAILTO:Zr,WS:wu,NL:eo,OPENBRACE:jt,OPENBRACKET:On,OPENANGLEBRACKET:Fn,OPENPAREN:Pn,CLOSEBRACE:Dt,CLOSEBRACKET:Vt,CLOSEANGLEBRACKET:zt,CLOSEPAREN:qt,AMPERSAND:Bi,APOSTROPHE:Ui,ASTERISK:Hi,AT:Gt,BACKSLASH:$i,BACKTICK:Wi,CARET:ji,COLON:Ln,COMMA:to,DOLLAR:Vi,DOT:rt,EQUALS:zi,EXCLAMATION:no,HYPHEN:qi,PERCENT:Gi,PIPE:Ki,PLUS:Yi,POUND:Qi,QUERY:Xi,QUOTE:io,SEMI:so,SLASH:Ke,TILDE:Ji,UNDERSCORE:Zi,SYM:es}),fa="aaa aarp abarth abb abbott abbvie abc able abogado abudhabi ac academy accenture accountant accountants aco actor ad adac ads adult ae aeg aero aetna af afamilycompany afl africa ag agakhan agency ai aig airbus airforce airtel akdn al alfaromeo alibaba alipay allfinanz allstate ally alsace alstom am amazon americanexpress americanfamily amex amfam amica amsterdam analytics android anquan anz ao aol apartments app apple aq aquarelle ar arab aramco archi army arpa art arte as asda asia associates at athleta attorney au auction audi audible audio auspost author auto autos avianca aw aws ax axa az azure ba baby baidu banamex bananarepublic band bank bar barcelona barclaycard barclays barefoot bargains baseball basketball bauhaus bayern bb bbc bbt bbva bcg bcn bd be beats beauty beer bentley berlin best bestbuy bet bf bg bh bharti bi bible bid bike bing bingo bio biz bj black blackfriday blockbuster blog bloomberg blue bm bms bmw bn bnpparibas bo boats boehringer bofa bom bond boo book booking bosch bostik boston bot boutique box br bradesco bridgestone broadway broker brother brussels bs bt budapest bugatti build builders business buy buzz bv bw by bz bzh ca cab cafe cal call calvinklein cam camera camp cancerresearch canon capetown capital capitalone car caravan cards care career careers cars casa case cash casino cat catering catholic cba cbn cbre cbs cc cd center ceo cern cf cfa cfd cg ch chanel channel charity chase chat cheap chintai christmas chrome church ci cipriani circle cisco citadel citi citic city cityeats ck cl claims cleaning click clinic clinique clothing cloud club clubmed cm cn co coach codes coffee college cologne com comcast commbank community company compare computer comsec condos construction consulting contact contractors cooking cookingchannel cool coop corsica country coupon coupons courses cpa cr credit creditcard creditunion cricket crown crs cruise cruises csc cu cuisinella cv cw cx cy cymru cyou cz dabur dad dance data date dating datsun day dclk dds de deal dealer deals degree delivery dell deloitte delta democrat dental dentist desi design dev dhl diamonds diet digital direct directory discount discover dish diy dj dk dm dnp do docs doctor dog domains dot download drive dtv dubai duck dunlop dupont durban dvag dvr dz earth eat ec eco edeka edu education ee eg email emerck energy engineer engineering enterprises epson equipment er ericsson erni es esq estate et etisalat eu eurovision eus events exchange expert exposed express extraspace fage fail fairwinds faith family fan fans farm farmers fashion fast fedex feedback ferrari ferrero fi fiat fidelity fido film final finance financial fire firestone firmdale fish fishing fit fitness fj fk flickr flights flir florist flowers fly fm fo foo food foodnetwork football ford forex forsale forum foundation fox fr free fresenius frl frogans frontdoor frontier ftr fujitsu fujixerox fun fund furniture futbol fyi ga gal gallery gallo gallup game games gap garden gay gb gbiz gd gdn ge gea gent genting george gf gg ggee gh gi gift gifts gives giving gl glade glass gle global globo gm gmail gmbh gmo gmx gn godaddy gold goldpoint golf goo goodyear goog google gop got gov gp gq gr grainger graphics gratis green gripe grocery group gs gt gu guardian gucci guge guide guitars guru gw gy hair hamburg hangout haus hbo hdfc hdfcbank health healthcare help helsinki here hermes hgtv hiphop hisamitsu hitachi hiv hk hkt hm hn hockey holdings holiday homedepot homegoods homes homesense honda horse hospital host hosting hot hoteles hotels hotmail house how hr hsbc ht hu hughes hyatt hyundai ibm icbc ice icu id ie ieee ifm ikano il im imamat imdb immo immobilien in inc industries infiniti info ing ink institute insurance insure int international intuit investments io ipiranga iq ir irish is ismaili ist istanbul it itau itv iveco jaguar java jcb je jeep jetzt jewelry jio jll jm jmp jnj jo jobs joburg jot joy jp jpmorgan jprs juegos juniper kaufen kddi ke kerryhotels kerrylogistics kerryproperties kfh kg kh ki kia kim kinder kindle kitchen kiwi km kn koeln komatsu kosher kp kpmg kpn kr krd kred kuokgroup kw ky kyoto kz la lacaixa lamborghini lamer lancaster lancia land landrover lanxess lasalle lat latino latrobe law lawyer lb lc lds lease leclerc lefrak legal lego lexus lgbt li lidl life lifeinsurance lifestyle lighting like lilly limited limo lincoln linde link lipsy live living lixil lk llc llp loan loans locker locus loft lol london lotte lotto love lpl lplfinancial lr ls lt ltd ltda lu lundbeck luxe luxury lv ly ma macys madrid maif maison makeup man management mango map market marketing markets marriott marshalls maserati mattel mba mc mckinsey md me med media meet melbourne meme memorial men menu merckmsd mg mh miami microsoft mil mini mint mit mitsubishi mk ml mlb mls mm mma mn mo mobi mobile moda moe moi mom monash money monster mormon mortgage moscow moto motorcycles mov movie mp mq mr ms msd mt mtn mtr mu museum mutual mv mw mx my mz na nab nagoya name nationwide natura navy nba nc ne nec net netbank netflix network neustar new news next nextdirect nexus nf nfl ng ngo nhk ni nico nike nikon ninja nissan nissay nl no nokia northwesternmutual norton now nowruz nowtv np nr nra nrw ntt nu nyc nz obi observer off office okinawa olayan olayangroup oldnavy ollo om omega one ong onl online onyourside ooo open oracle orange org organic origins osaka otsuka ott ovh pa page panasonic paris pars partners parts party passagens pay pccw pe pet pf pfizer pg ph pharmacy phd philips phone photo photography photos physio pics pictet pictures pid pin ping pink pioneer pizza pk pl place play playstation plumbing plus pm pn pnc pohl poker politie porn post pr pramerica praxi press prime pro prod productions prof progressive promo properties property protection pru prudential ps pt pub pw pwc py qa qpon quebec quest qvc racing radio raid re read realestate realtor realty recipes red redstone redumbrella rehab reise reisen reit reliance ren rent rentals repair report republican rest restaurant review reviews rexroth rich richardli ricoh ril rio rip rmit ro rocher rocks rodeo rogers room rs rsvp ru rugby ruhr run rw rwe ryukyu sa saarland safe safety sakura sale salon samsclub samsung sandvik sandvikcoromant sanofi sap sarl sas save saxo sb sbi sbs sc sca scb schaeffler schmidt scholarships school schule schwarz science scjohnson scot sd se search seat secure security seek select sener services ses seven sew sex sexy sfr sg sh shangrila sharp shaw shell shia shiksha shoes shop shopping shouji show showtime si silk sina singles site sj sk ski skin sky skype sl sling sm smart smile sn sncf so soccer social softbank software sohu solar solutions song sony soy spa space sport spot spreadbetting sr srl ss st stada staples star statebank statefarm stc stcgroup stockholm storage store stream studio study style su sucks supplies supply support surf surgery suzuki sv swatch swiftcover swiss sx sy sydney systems sz tab taipei talk taobao target tatamotors tatar tattoo tax taxi tc tci td tdk team tech technology tel temasek tennis teva tf tg th thd theater theatre tiaa tickets tienda tiffany tips tires tirol tj tjmaxx tjx tk tkmaxx tl tm tmall tn to today tokyo tools top toray toshiba total tours town toyota toys tr trade trading training travel travelchannel travelers travelersinsurance trust trv tt tube tui tunes tushu tv tvs tw tz ua ubank ubs ug uk unicom university uno uol ups us uy uz va vacations vana vanguard vc ve vegas ventures verisign versicherung vet vg vi viajes video vig viking villas vin vip virgin visa vision viva vivo vlaanderen vn vodka volkswagen volvo vote voting voto voyage vu vuelos wales walmart walter wang wanggou watch watches weather weatherchannel webcam weber website wed wedding weibo weir wf whoswho wien wiki williamhill win windows wine winners wme wolterskluwer woodside work works world wow ws wtc wtf xbox xerox xfinity xihuan xin xxx xyz yachts yahoo yamaxun yandex ye yodobashi yoga yokohama you youtube yt yun za zappos zara zero zip zm zone zuerich zw verm\xF6gensberater-ctb verm\xF6gensberatung-pwb \u03B5\u03BB \u03B5\u03C5 \u0431\u0433 \u0431\u0435\u043B \u0434\u0435\u0442\u0438 \u0435\u044E \u043A\u0430\u0442\u043E\u043B\u0438\u043A \u043A\u043E\u043C \u049B\u0430\u0437 \u043C\u043A\u0434 \u043C\u043E\u043D \u043C\u043E\u0441\u043A\u0432\u0430 \u043E\u043D\u043B\u0430\u0439\u043D \u043E\u0440\u0433 \u0440\u0443\u0441 \u0440\u0444 \u0441\u0430\u0439\u0442 \u0441\u0440\u0431 \u0443\u043A\u0440 \u10D2\u10D4 \u0570\u0561\u0575 \u05D9\u05E9\u05E8\u05D0\u05DC \u05E7\u05D5\u05DD \u0627\u0628\u0648\u0638\u0628\u064A \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u0644\u0627\u0631\u062F\u0646 \u0627\u0644\u0628\u062D\u0631\u064A\u0646 \u0627\u0644\u062C\u0632\u0627\u0626\u0631 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629 \u0627\u0644\u0639\u0644\u064A\u0627\u0646 \u0627\u0644\u0645\u063A\u0631\u0628 \u0627\u0645\u0627\u0631\u0627\u062A \u0627\u06CC\u0631\u0627\u0646 \u0628\u0627\u0631\u062A \u0628\u0627\u0632\u0627\u0631 \u0628\u06BE\u0627\u0631\u062A \u0628\u064A\u062A\u0643 \u067E\u0627\u06A9\u0633\u062A\u0627\u0646 \u0680\u0627\u0631\u062A \u062A\u0648\u0646\u0633 \u0633\u0648\u062F\u0627\u0646 \u0633\u0648\u0631\u064A\u0629 \u0634\u0628\u0643\u0629 \u0639\u0631\u0627\u0642 \u0639\u0631\u0628 \u0639\u0645\u0627\u0646 \u0641\u0644\u0633\u0637\u064A\u0646 \u0642\u0637\u0631 \u0643\u0627\u062B\u0648\u0644\u064A\u0643 \u0643\u0648\u0645 \u0645\u0635\u0631 \u0645\u0644\u064A\u0633\u064A\u0627 \u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627 \u0645\u0648\u0642\u0639 \u0647\u0645\u0631\u0627\u0647 \u0915\u0949\u092E \u0928\u0947\u091F \u092D\u093E\u0930\u0924 \u092D\u093E\u0930\u0924\u092E\u094D \u092D\u093E\u0930\u094B\u0924 \u0938\u0902\u0917\u0920\u0928 \u09AC\u09BE\u0982\u09B2\u09BE \u09AD\u09BE\u09B0\u09A4 \u09AD\u09BE\u09F0\u09A4 \u0A2D\u0A3E\u0A30\u0A24 \u0AAD\u0ABE\u0AB0\u0AA4 \u0B2D\u0B3E\u0B30\u0B24 \u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE \u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8 \u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD \u0C2D\u0C3E\u0C30\u0C24\u0C4D \u0CAD\u0CBE\u0CB0\u0CA4 \u0D2D\u0D3E\u0D30\u0D24\u0D02 \u0DBD\u0D82\u0D9A\u0DCF \u0E04\u0E2D\u0E21 \u0E44\u0E17\u0E22 \u0EA5\u0EB2\u0EA7 \uB2F7\uB137 \uB2F7\uCEF4 \uC0BC\uC131 \uD55C\uAD6D \u30A2\u30DE\u30BE\u30F3 \u30B0\u30FC\u30B0\u30EB \u30AF\u30E9\u30A6\u30C9 \u30B3\u30E0 \u30B9\u30C8\u30A2 \u30BB\u30FC\u30EB \u30D5\u30A1\u30C3\u30B7\u30E7\u30F3 \u30DD\u30A4\u30F3\u30C8 \u307F\u3093\u306A \u4E16\u754C \u4E2D\u4FE1 \u4E2D\u56FD \u4E2D\u570B \u4E2D\u6587\u7F51 \u4E9A\u9A6C\u900A \u4F01\u4E1A \u4F5B\u5C71 \u4FE1\u606F \u5065\u5EB7 \u516B\u5366 \u516C\u53F8 \u516C\u76CA \u53F0\u6E7E \u53F0\u7063 \u5546\u57CE \u5546\u5E97 \u5546\u6807 \u5609\u91CC \u5609\u91CC\u5927\u9152\u5E97 \u5728\u7EBF \u5927\u4F17\u6C7D\u8F66 \u5927\u62FF \u5929\u4E3B\u6559 \u5A31\u4E50 \u5BB6\u96FB \u5E7F\u4E1C \u5FAE\u535A \u6148\u5584 \u6211\u7231\u4F60 \u624B\u673A \u62DB\u8058 \u653F\u52A1 \u653F\u5E9C \u65B0\u52A0\u5761 \u65B0\u95FB \u65F6\u5C1A \u66F8\u7C4D \u673A\u6784 \u6DE1\u9A6C\u9521 \u6E38\u620F \u6FB3\u9580 \u70B9\u770B \u79FB\u52A8 \u7EC4\u7EC7\u673A\u6784 \u7F51\u5740 \u7F51\u5E97 \u7F51\u7AD9 \u7F51\u7EDC \u8054\u901A \u8BFA\u57FA\u4E9A \u8C37\u6B4C \u8D2D\u7269 \u901A\u8CA9 \u96C6\u56E2 \u96FB\u8A0A\u76C8\u79D1 \u98DE\u5229\u6D66 \u98DF\u54C1 \u9910\u5385 \u9999\u683C\u91CC\u62C9 \u9999\u6E2F".split(" "),En=/(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,Dn=/(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEDD-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6])/,Cn=/\uFE0F/,wn=/\d/,pa=/\s/;function t_(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=Q(),t=P(ke),i=P(Pe),s=Q(),r=P(wu),o=[[wn,i],[En,i],[Dn,i],[Cn,i]],a=function(){var y=P(Pe);return y.j={"-":s},y.jr=[].concat(o),y},l=function(y){var w=a();return w.t=y,w};Zp(e,[["'",P(Ui)],["{",P(jt)],["[",P(On)],["<",P(Fn)],["(",P(Pn)],["}",P(Dt)],["]",P(Vt)],[">",P(zt)],[")",P(qt)],["&",P(Bi)],["*",P(Hi)],["@",P(Gt)],["`",P(Wi)],["^",P(ji)],[":",P(Ln)],[",",P(to)],["$",P(Vi)],[".",P(rt)],["=",P(zi)],["!",P(no)],["-",P(qi)],["%",P(Gi)],["|",P(Ki)],["+",P(Yi)],["#",P(Qi)],["?",P(Xi)],['"',P(io)],["/",P(Ke)],[";",P(so)],["~",P(Ji)],["_",P(Zi)],["\\",P($i)]]),b(e,`
`,P(eo)),he(e,pa,r),b(r,`
`,Q()),he(r,pa,r);for(var u=0;u<fa.length;u++)vt(e,fa[u],l($e),a);var c=a(),h=a(),d=a(),_=a();vt(e,"file",c,a),vt(e,"ftp",h,a),vt(e,"http",d,a),vt(e,"mailto",_,a);var p=a(),v=P(rn),D=P(Zr);b(h,"s",p),b(h,":",v),b(d,"s",p),b(d,":",v),b(c,":",v),b(p,":",v),b(_,":",D);for(var N=a(),E=0;E<n.length;E++)vt(e,n[E],N,a);return b(N,":",v),vt(e,"localhost",l(Ge),a),he(e,wn,t),he(e,En,i),he(e,Dn,i),he(e,Cn,i),he(t,wn,t),he(t,En,i),he(t,Dn,i),he(t,Cn,i),b(t,"-",s),b(i,"-",s),b(s,"-",s),he(i,wn,i),he(i,En,i),he(i,Dn,i),he(i,Cn,i),he(s,wn,i),he(s,En,i),he(s,Dn,i),he(s,Cn,i),e.jd=P(es),e}function n_(n,e){for(var t=i_(e.replace(/[A-Z]/g,function(_){return _.toLowerCase()})),i=t.length,s=[],r=0,o=0;o<i;){for(var a=n,l=null,u=0,c=null,h=-1,d=-1;o<i&&(l=xi(a,t[o]));)a=l,a.accepts()?(h=0,d=0,c=a):h>=0&&(h+=t[o].length,d++),u+=t[o].length,r+=t[o].length,o++;r-=h,o-=d,u-=h,s.push({t:c.t,v:e.substr(r-u,u),s:r-u,e:r})}return s}function i_(n){for(var e=[],t=n.length,i=0;i<t;){var s=n.charCodeAt(i),r=void 0,o=s<55296||s>56319||i+1===t||(r=n.charCodeAt(i+1))<56320||r>57343?n[i]:n.slice(i,i+2);e.push(o),i+=o.length}return e}function gi(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?gi=function(e){return typeof e}:gi=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gi(n)}var ge={defaultProtocol:"http",events:null,format:_a,formatHref:_a,nl2br:!1,tagName:"a",target:null,rel:null,validate:!0,truncate:0,className:null,attributes:null,ignoreTags:[]};function bu(n){n=n||{},this.defaultProtocol="defaultProtocol"in n?n.defaultProtocol:ge.defaultProtocol,this.events="events"in n?n.events:ge.events,this.format="format"in n?n.format:ge.format,this.formatHref="formatHref"in n?n.formatHref:ge.formatHref,this.nl2br="nl2br"in n?n.nl2br:ge.nl2br,this.tagName="tagName"in n?n.tagName:ge.tagName,this.target="target"in n?n.target:ge.target,this.rel="rel"in n?n.rel:ge.rel,this.validate="validate"in n?n.validate:ge.validate,this.truncate="truncate"in n?n.truncate:ge.truncate,this.className="className"in n?n.className:ge.className,this.attributes=n.attributes||ge.attributes,this.ignoreTags=[];for(var e=("ignoreTags"in n)?n.ignoreTags:ge.ignoreTags,t=0;t<e.length;t++)this.ignoreTags.push(e[t].toUpperCase())}bu.prototype={resolve:function(e){var t=e.toHref(this.defaultProtocol);return{formatted:this.get("format",e.toString(),e),formattedHref:this.get("formatHref",t,e),tagName:this.get("tagName",t,e),className:this.get("className",t,e),target:this.get("target",t,e),rel:this.get("rel",t,e),events:this.getObject("events",t,e),attributes:this.getObject("attributes",t,e),truncate:this.get("truncate",t,e)}},check:function(e){return this.get("validate",e.toString(),e)},get:function(e,t,i){var s=this[e];if(!s)return s;var r;switch(gi(s)){case"function":return s(t,i.t);case"object":return r=i.t in s?s[i.t]:ge[e],typeof r=="function"?r(t,i.t):r}return s},getObject:function(e,t,i){var s=this[e];return typeof s=="function"?s(t,i.t):s}};function _a(n){return n}function s_(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=Object.create(n.prototype);for(var s in t)i[s]=t[s];return i.constructor=e,e.prototype=i,e}function ts(){}ts.prototype={t:"token",isLink:!1,toString:function(){return this.v},toHref:function(){return this.toString()},startIndex:function(){return this.tk[0].s},endIndex:function(){return this.tk[this.tk.length-1].e},toObject:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ge.defaultProtocol;return{type:this.t,value:this.v,isLink:this.isLink,href:this.toHref(e),start:this.startIndex(),end:this.endIndex()}}};function Ut(n,e){function t(i,s){this.t=n,this.v=i,this.tk=s}return s_(ts,t,e),t}var Iu=Ut("email",{isLink:!0}),or=Ut("email",{isLink:!0,toHref:function(){return"mailto:"+this.toString()}}),ar=Ut("text"),Au=Ut("nl"),st=Ut("url",{isLink:!0,toHref:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ge.defaultProtocol,t=this.tk,i=!1,s=!1,r=[],o=0;t[o].t===rn;)i=!0,r.push(t[o].v),o++;for(;t[o].t===Ke;)s=!0,r.push(t[o].v),o++;for(;o<t.length;o++)r.push(t[o].v);return r=r.join(""),i||s||(r="".concat(e,"://").concat(r)),r},hasProtocol:function(){return this.tk[0].t===rn}}),r_=Object.freeze({__proto__:null,MultiToken:ts,Base:ts,createTokenClass:Ut,MailtoEmail:Iu,Email:or,Text:ar,Nl:Au,Url:st});function o_(){var n=Q(),e=Q(),t=Q(),i=Q(),s=Q(),r=Q(),o=Q(),a=P(st),l=Q(),u=P(st),c=P(st),h=Q(),d=Q(),_=Q(),p=Q(),v=Q(),D=P(st),N=P(st),E=P(st),R=P(st),y=Q(),w=Q(),C=Q(),S=Q(),F=Q(),O=Q(),j=P(or),ae=Q(),le=P(or),K=P(Iu),ce=Q(),ie=Q(),q=Q(),me=Q(),V=P(Au);b(n,eo,V),b(n,rn,e),b(n,Zr,t),b(e,Ke,i),b(i,Ke,s),b(n,$e,r),b(n,Pe,r),b(n,Ge,a),b(n,ke,r),b(s,$e,c),b(s,Pe,c),b(s,ke,c),b(s,Ge,c),b(r,rt,o),b(F,rt,O),b(o,$e,a),b(o,Pe,r),b(o,ke,r),b(o,Ge,r),b(O,$e,j),b(O,Pe,F),b(O,ke,F),b(O,Ge,F),b(a,rt,o),b(j,rt,O),b(a,Ln,l),b(a,Ke,c),b(l,ke,u),b(u,Ke,c),b(j,Ln,ae),b(ae,ke,le);var z=[Bi,Hi,Gt,$i,Wi,ji,Vi,Pe,zi,qi,Ge,ke,Gi,Ki,Yi,Qi,rn,Ke,es,Ji,$e,Zi],x=[Ui,zt,Dt,Vt,qt,Ln,to,rt,no,Fn,jt,On,Pn,Xi,io,so];b(c,jt,d),b(c,On,_),b(c,Fn,p),b(c,Pn,v),b(h,jt,d),b(h,On,_),b(h,Fn,p),b(h,Pn,v),b(d,Dt,c),b(_,Vt,c),b(p,zt,c),b(v,qt,c),b(D,Dt,c),b(N,Vt,c),b(E,zt,c),b(R,qt,c),b(y,Dt,c),b(w,Vt,c),b(C,zt,c),b(S,qt,c),H(d,z,D),H(_,z,N),H(p,z,E),H(v,z,R),H(d,x,y),H(_,x,w),H(p,x,C),H(v,x,S),H(D,z,D),H(N,z,N),H(E,z,E),H(R,z,R),H(D,x,D),H(N,x,N),H(E,x,E),H(R,x,R),H(y,z,D),H(w,z,N),H(C,z,E),H(S,z,R),H(y,x,y),H(w,x,w),H(C,x,C),H(S,x,S),H(c,z,c),H(h,z,c),H(c,x,h),H(h,x,h),b(t,$e,K),b(t,Pe,K),b(t,ke,K),b(t,Ge,K),H(K,z,K),H(K,x,ce),H(ce,z,K),H(ce,x,ce);var Y=[Bi,Ui,Hi,$i,Wi,ji,Dt,Vi,Pe,zi,qi,ke,jt,Gi,Ki,Yi,Qi,Xi,Ke,es,Ji,$e,Zi];return H(r,Y,ie),b(r,Gt,q),H(a,Y,ie),b(a,Gt,q),H(o,Y,ie),H(ie,Y,ie),b(ie,Gt,q),b(ie,rt,me),H(me,Y,ie),b(q,$e,F),b(q,Pe,F),b(q,ke,F),b(q,Ge,j),n}function a_(n,e,t){for(var i=t.length,s=0,r=[],o=[];s<i;){for(var a=n,l=null,u=null,c=0,h=null,d=-1;s<i&&!(l=xi(a,t[s].t));)o.push(t[s++]);for(;s<i&&(u=l||xi(a,t[s].t));)l=null,a=u,a.accepts()?(d=0,h=a):d>=0&&d++,s++,c++;if(d<0)for(var _=s-c;_<s;_++)o.push(t[_]);else{o.length>0&&(r.push(Ms(ar,e,o)),o=[]),s-=d,c-=d;var p=h.t,v=t.slice(s-c,s);r.push(Ms(p,e,v))}}return o.length>0&&r.push(Ms(ar,e,o)),r}function Ms(n,e,t){var i=t[0].s,s=t[t.length-1].e,r=e.substr(i,s-i);return new n(r,t)}var ma=typeof console!="undefined"&&console&&console.warn||function(){},ve={scanner:null,parser:null,pluginQueue:[],customProtocols:[],initialized:!1};function l_(n,e){for(var t=0;t<ve.pluginQueue.length;t++)if(n===ve.pluginQueue[t][0]){ma('linkifyjs: plugin "'.concat(n,'" already registered - will be overwritten')),ve.pluginQueue[t]=[n,e];return}ve.pluginQueue.push([n,e]),ve.initialized&&ma('linkifyjs: already initialized - will not register plugin "'.concat(n,'" until you manually call linkify.init(). To avoid this warning, please register all plugins before invoking linkify the first time.'))}function u_(){ve.scanner={start:t_(ve.customProtocols),tokens:e_},ve.parser={start:o_(),tokens:r_};for(var n={createTokenClass:Ut},e=0;e<ve.pluginQueue.length;e++)ve.pluginQueue[e][1]({scanner:ve.scanner,parser:ve.parser,utils:n});ve.initialized=!0}function c_(n){return ve.initialized||u_(),a_(ve.parser.start,n,n_(ve.scanner.start,n))}function ga(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tn(n){return n.replace(/"/g,"&quot;")}function h_(n){if(!n)return"";var e=[];for(var t in n){var i=n[t]+"";e.push("".concat(t,'="').concat(Tn(i),'"'))}return e.join(" ")}function Yn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e=new bu(e);for(var t=c_(n),i=[],s=0;s<t.length;s++){var r=t[s];if(r.t==="nl"&&e.nl2br){i.push(`<br>
`);continue}else if(!r.isLink||!e.check(r)){i.push(ga(r.toString()));continue}var o=e.resolve(r),a=o.formatted,l=o.formattedHref,u=o.tagName,c=o.className,h=o.target,d=o.rel,_=o.attributes,p=["<".concat(u,' href="').concat(Tn(l),'"')];c&&p.push(' class="'.concat(Tn(c),'"')),h&&p.push(' target="'.concat(Tn(h),'"')),d&&p.push(' rel="'.concat(Tn(d),'"')),_&&p.push(" ".concat(h_(_))),p.push(">".concat(ga(a),"</").concat(u,">")),i.push(p.join(""))}return i.join("")}String.prototype.linkify||Object.defineProperty(String.prototype,"linkify",{writable:!1,value:function(e){return Yn(this,e)}});var d_=function(e){var t=e.scanner,i=e.parser,s=e.utils,r=t.tokens,o=r.DOMAIN,a=r.LOCALHOST,l=r.TLD,u=r.NUM,c=r.SLASH,h=r.UNDERSCORE,d=r.DOT,_=r.AT,p=i.start,v=s.createTokenClass("mention",{isLink:!0,toHref:function(){return"/"+this.toString().substr(1)}}),D=p.tt(_),N=D.tt(h);N.tt(h,N),N.tt(d,N);var E=D.tt(o,v);D.tt(l,E),D.tt(a,E),D.tt(u,E),N.tt(o,E),N.tt(a,E),N.tt(l,E),N.tt(u,E),E.tt(o,E),E.tt(a,E),E.tt(l,E),E.tt(u,E),E.tt(h,E);var R=E.tt(c);E.tt(c,R),E.tt(d,R),E.tt(_,R);var y=R.tt(h);y.tt(h,y),R.tt(o,E),R.tt(a,E),R.tt(l,E),R.tt(u,E),y.tt(o,E),y.tt(a,E),y.tt(l,E),y.tt(u,E)};l_("mention",d_);const Ce={hash(n){let e=n||32,t="";for(let i=0;i<e;++i){let s=Math.floor(62*Math.random());t+="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".substring(s,s+1)}return t},valid:(n,e)=>n=="email"?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e):n=="login"?/^[a-z0-9]+$/.test(e):n=="pass"?/^[A-Za-z0-9!@#$%^&*]{6,20}/.test(e):void 0,time(n,e){if(!e)return!1;let t=new Date(e),i=String(t.getMonth()+1),s=String(t.getDate()),r=String(t.getMinutes()),o=String(t.getHours()),a=String(t.getSeconds()),l=t.getFullYear(),u=i.length==1?"0"+i:i,c=s.length==1?"0"+s:s,h=o.length==1?"0"+o:o,d=r.length==1?"0"+r:r,_=a.length==1?"0"+a:a,p=["\u0441\u0456\u0447","\u043B\u044E\u0442","\u0431\u0435\u0440","\u043A\u0432\u0456\u0442","\u0442\u0440\u0430\u0432","\u0447\u0435\u0440","\u043B\u0438\u043F","\u0441\u0435\u0440","\u0432\u0435\u0440","\u0436\u043E\u0432","\u043B\u0438\u0441\u0442","\u0433\u0440\u0443\u0434"],v=["\u044F\u043D\u0432","\u0444\u0435\u0432","\u043C\u0430\u0440\u0442","\u0430\u043F\u0440","\u043C\u0430\u0439","\u0438\u044E\u043D","\u0438\u044E\u043B","\u0430\u0432\u0433","\u0441\u0435\u043D","\u043E\u043A\u0442","\u043D\u043E\u044F\u0431","\u0434\u0435\u043A"],D=["jun","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];return n=="year"?Number(l):n=="month"?Number(u):n=="day"?Number(c):n=="hour"?Number(h):n=="min"?Number(d):n=="sec"?Number(_):n=="date(/)"?`${c}/${u}/${l}`:n=="date(.)"?`${c}.${u}.${l}`:n=="hm"?`${h}:${d}`:n=="hms"?`${h}:${d}:${_}`:n=="date(/) hm"?`${c}/${u}/${l} ${h}:${d}`:n=="date(.) hm"?`${c}.${u}.${l} ${h}:${d}`:n=="date(/) hms"?`${c}/${u}/${l} ${h}:${d}:${_}`:n=="date(.) hms"?`${c}.${u}.${l} ${h}:${d}:${_}`:n=="date(ua)"?`${c} ${p[u-1]} ${l}`:n=="date(ru)"?`${c} ${v[u-1]} ${l}`:n=="date(en)"?`${c} ${D[u-1]} ${l}`:n=="date(ua) hm"?`${c} ${p[u-1]} ${l} ${h}:${d}`:n=="date(ru) hm"?`${c} ${v[u-1]} ${l} ${h}:${d}`:n=="date(en) hm"?`${c} ${D[u-1]} ${l} ${h}:${d}`:n=="date(ua) hms"?`${c} ${p[u-1]} ${l} ${h}:${d}:${_}`:n=="date(ru) hms"?`${c} ${v[u-1]} ${l} ${h}:${d}:${_}`:n=="date(en) hms"?`${c} ${D[u-1]} ${l} ${h}:${d}:${_}`:void console.warn("invalid time format. check docs")},cipher(n){if(!n)return!1;let e="";for(let t=0;n&&t<n.length+1;++t){for(let i=0;i<5;++i)e+="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"[Math.floor(62*Math.random())];e+=n[t]||""}return e},decipher(n){if(!n)return!1;let e="";for(let t=5;n&&t<n.length-3;t+=6)e+=n[t];return e}};function va(n,e,t){const i=n.slice();return i[8]=e[t],i}function f_(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="loading" height="50px"/>',f(e,"class","sto"),f(e,"flex","center")},m(t,i){T(t,e,i)},p:U,d(t){t&&A(e)}}}function p_(n){let e,t,i,s,r=[],o=new Map,a=n[0];const l=u=>u[8].id;for(let u=0;u<a.length;u+=1){let c=va(n,a,u),h=l(c);o.set(h,r[u]=ya(h,c))}return{c(){e=g("div"),t=g("h1"),t.textContent="\u0413\u043E\u043B\u043E\u0432\u043D\u0430",i=k(),s=g("div");for(let u=0;u<r.length;u+=1)r[u].c();f(t,"class","svelte-14nr8en"),f(s,"flex","col-rev"),f(e,"class","wrapper")},m(u,c){T(u,e,c),m(e,t),m(e,i),m(e,s);for(let h=0;h<r.length;h+=1)r[h].m(s,null)},p(u,c){c&27&&(a=u[0],r=pr(r,c,l,1,u,a,o,s,fr,ya,null,va))},d(u){u&&A(e);for(let c=0;c<r.length;c+=1)r[c].d()}}}function __(n){let e,t,i,s;return{c(){e=ye("svg"),t=ye("path"),f(t,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),f(t,"fill","#ffffff"),f(e,"width","22"),f(e,"height","19"),f(e,"viewBox","0 0 22 19"),f(e,"fill","none"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){T(r,e,o),m(e,t),i||(s=Z(e,"click",function(){os((n[8].id,void 0))&&(n[8].id,void 0).apply(this,arguments)}),i=!0)},p(r,o){n=r},d(r){r&&A(e),i=!1,s()}}}function m_(n){let e,t;return{c(){e=ye("svg"),t=ye("path"),f(t,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),f(t,"fill","orange"),f(e,"width","22"),f(e,"height","19"),f(e,"viewBox","0 0 22 19"),f(e,"fill","none"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(i,s){T(i,e,s),m(e,t)},p:U,d(i){i&&A(e)}}}function g_(n){let e,t,i,s;return{c(){e=ye("svg"),t=ye("path"),f(t,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),f(t,"fill","#ff0000"),f(e,"width","22"),f(e,"height","19"),f(e,"viewBox","0 0 22 19"),f(e,"fill","none"),f(e,"xmlns","http://www.w3.org/2000/svg")},m(r,o){T(r,e,o),m(e,t),i||(s=Z(e,"click",function(){os((n[8].id,void 0))&&(n[8].id,void 0).apply(this,arguments)}),i=!0)},p(r,o){n=r},d(r){r&&A(e),i=!1,s()}}}function ya(n,e){let t,i,s,r,o,a,l,u,c=e[1][e[8].user].name+"",h,d,_=e[8].tema+"",p,v,D,N=Yn(e[8].textPost,e[4])+"",E,R,y,w,C,S,F=e[8].likeCount+Ea+"",O,j,ae,le,K=(Ce.time("date(ua) hm",e[8].time)||"\u0434\u043E \u0447\u0435\u0440\u0432\u043D\u044F 2022")+"",ce,ie;function q(z,x){return x&1&&(w=null),w==null&&(w=!!z[8].likedUsers.includes(z[3])),w?g_:z[3]?__:m_}let me=q(e,-1),V=me(e);return{key:n,first:null,c(){t=g("div"),i=g("div"),s=g("a"),r=g("img"),l=k(),u=g("h3"),h=se(c),d=se(", \u0422\u0435\u043C\u0430: "),p=se(_),v=k(),D=g("h5"),E=k(),R=g("div"),y=g("div"),V.c(),C=k(),S=g("h5"),O=se(F),ae=k(),le=g("h5"),ce=se(K),ie=k(),ze(r.src,o=e[1][e[8].user].img)||f(r,"src",o),f(r,"alt","ava"),f(r,"height","35px"),f(r,"width","35px"),f(s,"href",a="#/user/"+e[8].user),f(u,"class","svelte-14nr8en"),f(i,"class","postHead"),f(i,"flex","ai-c g10"),f(D,"class","postBody svelte-14nr8en"),f(S,"id","likeCount"),f(S,"class","svelte-14nr8en"),f(y,"flex","ai-c g5"),f(y,"id",j=e[8].id),f(le,"class","svelte-14nr8en"),f(R,"flex","between"),f(R,"class","postFoot"),f(t,"class","post svelte-14nr8en"),f(t,"flex","col"),this.first=t},m(z,x){T(z,t,x),m(t,i),m(i,s),m(s,r),m(i,l),m(i,u),m(u,h),m(u,d),m(u,p),m(t,v),m(t,D),D.innerHTML=N,m(t,E),m(t,R),m(R,y),V.m(y,null),m(y,C),m(y,S),m(S,O),m(R,ae),m(R,le),m(le,ce),m(t,ie)},p(z,x){e=z,x&3&&!ze(r.src,o=e[1][e[8].user].img)&&f(r,"src",o),x&1&&a!==(a="#/user/"+e[8].user)&&f(s,"href",a),x&3&&c!==(c=e[1][e[8].user].name+"")&&De(h,c),x&1&&_!==(_=e[8].tema+"")&&De(p,_),x&1&&N!==(N=Yn(e[8].textPost,e[4])+"")&&(D.innerHTML=N),me===(me=q(e,x))&&V?V.p(e,x):(V.d(1),V=me(e),V&&(V.c(),V.m(y,C))),x&1&&F!==(F=e[8].likeCount+Ea+"")&&De(O,F),x&1&&j!==(j=e[8].id)&&f(y,"id",j),x&1&&K!==(K=(Ce.time("date(ua) hm",e[8].time)||"\u0434\u043E \u0447\u0435\u0440\u0432\u043D\u044F 2022")+"")&&De(ce,K)},d(z){z&&A(t),V.d()}}}function v_(n){let e;function t(r,o){return r[2]?p_:f_}let i=t(n),s=i(n);return{c(){s.c(),e=nt()},m(r,o){s.m(r,o),T(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:U,o:U,d(r){s.d(r),r&&A(e)}}}let Ea=0;function y_(n,e,t){const i=Bt();let s,r,o,a,l=Ce.decipher(localStorage.uid);const u={defaultProtocol:"https",rel:"nofollow noreferrer noopener",formatHref:{mention:c=>`#/user/${c.substr(1)}`}};return mt(Ae(i)).then(c=>{s=c.val(),t(0,r=s.posts),t(1,o=s.users),t(2,a=!0)}),[r,o,a,l,u]}class E_ extends He{constructor(e){super(),Ue(this,e,y_,v_,Oe,{})}}function Da(n,e,t){const i=n.slice();return i[3]=e[t][0],i[4]=e[t][1],i}function D_(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="" height="50px" class="svelte-184uhp7"/>',pi(e,"height","100%"),f(e,"flex","center")},m(t,i){T(t,e,i)},p:U,d(t){t&&A(e)}}}function C_(n){let e,t,i,s,r,o=[],a=new Map,l=Object.entries(n[0]);const u=c=>c[3];for(let c=0;c<l.length;c+=1){let h=Da(n,l,c),d=u(h);a.set(d,o[c]=Ca(d,h))}return{c(){e=g("div"),t=g("input"),i=k(),s=g("hr"),r=k();for(let c=0;c<o.length;c+=1)o[c].c();f(t,"type","search"),f(t,"class","findUser svelte-184uhp7"),f(t,"placeholder","\u041F\u043E\u0448\u0443\u043A..."),f(s,"noshade",""),f(s,"size","1"),f(s,"color","888888"),f(e,"class","wrapper")},m(c,h){T(c,e,h),m(e,t),m(e,i),m(e,s),m(e,r);for(let d=0;d<o.length;d+=1)o[d].m(e,null)},p(c,h){h&1&&(l=Object.entries(c[0]),o=pr(o,h,u,1,c,l,a,e,fr,Ca,null,Da))},d(c){c&&A(e);for(let h=0;h<o.length;h+=1)o[h].d()}}}function Ca(n,e){let t,i,s,r,o,a,l,u=e[4].name+"",c,h,d,_=e[4].bio+"",p,v,D;return{key:n,first:null,c(){t=g("a"),i=g("div"),s=g("img"),o=k(),a=g("div"),l=g("h3"),c=se(u),h=k(),d=g("h6"),p=se(_),v=k(),ze(s.src,r=e[4].img)||f(s,"src",r),f(s,"alt","ava"),f(s,"class","svelte-184uhp7"),f(l,"class","svelte-184uhp7"),f(d,"class","svelte-184uhp7"),f(a,"flex","col"),f(a,"class","svelte-184uhp7"),f(i,"class","user svelte-184uhp7"),f(i,"flex","row ai-c"),f(t,"href",D="#/user/"+e[4].login),this.first=t},m(N,E){T(N,t,E),m(t,i),m(i,s),m(i,o),m(i,a),m(a,l),m(l,c),m(a,h),m(a,d),m(d,p),m(t,v)},p(N,E){e=N,E&1&&!ze(s.src,r=e[4].img)&&f(s,"src",r),E&1&&u!==(u=e[4].name+"")&&De(c,u),E&1&&_!==(_=e[4].bio+"")&&De(p,_),E&1&&D!==(D="#/user/"+e[4].login)&&f(t,"href",D)},d(N){N&&A(t)}}}function w_(n){let e;function t(r,o){return r[1]?C_:D_}let i=t(n),s=i(n);return{c(){s.c(),e=nt()},m(r,o){s.m(r,o),T(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:U,o:U,d(r){s.d(r),r&&A(e)}}}function b_(n,e,t){const i=Bt();let s,r;return mt(Ae(i,"users")).then(o=>{t(0,s=o.val()),t(1,r=!0)}),[s,r]}class I_ extends He{constructor(e){super(),Ue(this,e,b_,w_,Oe,{})}}function A_(n){let e,t,i,s,r,o,a,l,u,c,h,d,_,p,v,D,N,E,R,y,w;return{c(){e=g("div"),t=g("h1"),t.textContent="\u041D\u0430\u043F\u0438\u0448\u0438 \u0449\u043E \u043D\u0435\u0431\u0443\u0434\u044C \u0446\u0456\u043A\u0430\u0432\u0435\u043D\u044C\u043A\u043E\u0433\u043E",i=k(),s=g("textarea"),r=k(),o=g("select"),a=g("option"),a.textContent="\u0412\u0438\u0431\u0435\u0440\u0438 \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0443...",l=g("option"),l.textContent="\u0406\u0433\u0440\u0438",u=g("option"),u.textContent="\u041C\u0443\u0437\u0438\u043A\u0430",c=g("option"),c.textContent="\u0410\u0440\u0442",h=g("option"),h.textContent="\u041A\u0456\u043D\u043E",d=g("option"),d.textContent="\u0410\u043D\u0456\u043C\u0435",_=g("option"),_.textContent="\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F",p=g("option"),p.textContent="\u0406\u043D\u0448\u0435",v=k(),D=g("button"),D.textContent="\u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0434\u043E\u043F\u0438\u0441",N=k(),E=ye("svg"),R=ye("path"),f(t,"text","center"),f(s,"rows","7"),f(s,"placeholder","\u041F\u0438\u0441\u0430\u0442\u0438 \u0442\u0443\u0442"),a.__value="\u041D\u0435\u043C\u0430\u0454",a.value=a.__value,l.__value="\u0406\u0433\u0440\u0438",l.value=l.__value,u.__value="\u041C\u0443\u0437\u0438\u043A\u0430",u.value=u.__value,c.__value="\u0410\u0440\u0442",c.value=c.__value,h.__value="\u041A\u0456\u043D\u043E",h.value=h.__value,d.__value="\u0410\u043D\u0456\u043C\u0435",d.value=d.__value,_.__value="\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0443\u0432\u0430\u043D\u043D\u044F",_.value=_.__value,p.__value="\u0406\u043D\u0448\u0435",p.value=p.__value,f(o,"id","tematica"),n[1]===void 0&&Bn(()=>n[4].call(o)),f(D,"color","orange"),f(R,"d","M19.4414 0.558671C18.6965 -0.186224 17.4887 -0.186224 16.7438 0.558671L10 7.30248L3.2562 0.558671C2.51129 -0.186224 1.30359 -0.186224 0.55868 0.558671C-0.186227 1.30356 -0.186227 2.51129 0.55868 3.25619L7.30252 10L0.55868 16.7438C-0.186227 17.4887 -0.186227 18.6964 0.55868 19.4413C1.30359 20.1862 2.51129 20.1862 3.2562 19.4413L10 12.6975L16.7438 19.4413C17.4887 20.1862 18.6965 20.1862 19.4413 19.4413C20.1862 18.6964 20.1862 17.4887 19.4413 16.7438L12.6976 10L19.4414 3.25619C20.1862 2.5113 20.1862 1.30358 19.4414 0.558671Z"),f(R,"fill","#808080"),f(E,"pointer",""),f(E,"width","20"),f(E,"height","20"),f(E,"viewBox","0 0 20 20"),f(E,"fill","none"),f(E,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","over"),f(e,"flex","center")},m(C,S){T(C,e,S),m(e,t),m(e,i),m(e,s),re(s,n[0]),m(e,r),m(e,o),m(o,a),m(o,l),m(o,u),m(o,c),m(o,h),m(o,d),m(o,_),m(o,p),Ci(o,n[1]),m(e,v),m(e,D),m(e,N),m(e,E),m(E,R),y||(w=[Z(s,"input",n[3]),Z(o,"change",n[4]),Z(D,"click",n[2]),Z(E,"click",n[5])],y=!0)},p(C,[S]){S&1&&re(s,C[0]),S&2&&Ci(o,C[1])},i:U,o:U,d(C){C&&A(e),y=!1,Re(w)}}}function T_(n,e,t){const i=Bt();let s=Ce.decipher(localStorage.uid);s||(location.hash="#/",location.hash="#/login");let r,o;function a(){r&&mt(Ae(i,"postCount")).then(h=>{let d=h.val();d++,sn(Ae(i,"/posts/"+d),{id:d,likeCount:0,likedUsers:[""],user:s,textPost:r,tema:o,time:Date.now()}),sn(Ae(i,"/postCount"),d),location.hash="/",localStorage.last=Date.now()})}function l(){r=this.value,t(0,r)}function u(){o=za(this),t(1,o)}return[r,o,a,l,u,()=>{history.back()}]}class S_ extends He{constructor(e){super(),Ue(this,e,T_,A_,Oe,{})}}function k_(n){let e;return{c(){e=g("div"),e.innerHTML='<h1 text="">B \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443 <br/> \u0442\u0443\u0442 \u0449\u043E\u0441\u044C \u0431\u0443\u0434\u0435</h1>',f(e,"class","sto"),f(e,"flex","center")},m(t,i){T(t,e,i)},p:U,i:U,o:U,d(t){t&&A(e)}}}class N_ extends He{constructor(e){super(),Ue(this,e,null,k_,Oe,{})}}function ro(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Tu(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R_=Tu,Su=new Jn("auth","Firebase",Tu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new gr("@firebase/auth");function vi(n,...e){wa.logLevel<=J.ERROR&&wa.error(`Auth (${Zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw oo(n,...e)}function je(n,...e){return oo(n,...e)}function O_(n,e,t){const i=Object.assign(Object.assign({},R_()),{[e]:t});return new Jn("auth","Firebase",i).create(e,{appName:n.name})}function oo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Su.create(n,...e)}function M(n,e,...t){if(!n)throw oo(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vi(e),new Error(e)}function tt(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map;function Xe(n){tt(n instanceof Function,"Expected a class definition");let e=ba.get(n);return e?(tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ba.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n,e){const t=Er(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(bi(r,e!=null?e:{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function P_(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Xe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function L_(){return Ia()==="http:"||Ia()==="https:"}function Ia(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L_()||Dc()||"connection"in navigator)?navigator.onLine:!0}function x_(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=mr()||nl()}get(){return M_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,e){tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new ri(3e4,6e4);function oi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pn(n,e,t,i,s={}){return Nu(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=un(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ku.fetch()(Ru(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Nu(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},B_),e);try{const s=new H_(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw xs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw xs(n,"email-already-in-use",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw O_(n,c,u);Be(n,c)}}catch(s){if(s instanceof ln)throw s;Be(n,"network-request-failed")}}async function ai(n,e,t,i,s={}){const r=await pn(n,e,t,i,s);return"mfaPendingCredential"in r&&Be(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ru(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?ao(n.config,s):`${n.config.apiScheme}://${s}`}class H_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(je(this.auth,"network-request-failed")),U_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=je(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function W_(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j_(n,e=!1){const t=Se(n),i=await t.getIdToken(e),s=lo(i);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Mn(Bs(s.auth_time)),issuedAtTime:Mn(Bs(s.iat)),expirationTime:Mn(Bs(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bs(n){return Number(n)*1e3}function lo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=$s(t);return s?JSON.parse(s):(vi("Failed to decode base64 JWT payload"),null)}catch(s){return vi("Caught error parsing JWT payload as JSON",s),null}}function V_(n){const e=lo(n);return M(e,"internal-error"),M(typeof e.exp!="undefined","internal-error"),M(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ln&&z_(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function z_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n){var e;const t=n.auth,i=await n.getIdToken(),s=await on(n,W_(t,{idToken:i}));M(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Y_(r.providerUserInfo):[],a=K_(n.providerData,o),l=n.isAnonymous,u=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ou(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function G_(n){const e=Se(n);await ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K_(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Y_(n){return n.map(e=>{var{providerId:t}=e,i=ro(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(n,e){const t=await Nu(n,{},async()=>{const i=un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Ru(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken!="undefined","internal-error"),M(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):V_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Q_(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Qn;return i&&(M(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(M(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,e){M(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=ro(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ou(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await on(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return j_(this,e)}reload(){return G_(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ns(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await on(this,$_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,u,c;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,_=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,N=(u=t.createdAt)!==null&&u!==void 0?u:void 0,E=(c=t.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:R,emailVerified:y,isAnonymous:w,providerData:C,stsTokenManager:S}=t;M(R&&S,e,"internal-error");const F=Qn.fromJSON(this.name,S);M(typeof R=="string",e,"internal-error"),it(h,e.name),it(d,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof w=="boolean",e,"internal-error"),it(_,e.name),it(p,e.name),it(v,e.name),it(D,e.name),it(N,e.name),it(E,e.name);const O=new Tt({uid:R,auth:e,email:d,emailVerified:y,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:_,tenantId:v,stsTokenManager:F,createdAt:N,lastLoginAt:E});return C&&Array.isArray(C)&&(O.providerData=C.map(j=>Object.assign({},j))),D&&(O._redirectEventId=D),O}static async _fromIdTokenResponse(e,t,i=!1){const s=new Qn;s.updateFromServerResponse(t);const r=new Tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ns(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fu.type="NONE";const Aa=Fu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n,e,t){return`firebase:${n}:${e}:${t}`}class Qt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=yi(this.userKey,s.apiKey,r),this.fullPersistenceKey=yi("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Qt(Xe(Aa),e,i);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||Xe(Aa);const o=yi(i,e.config.apiKey,e.name);let a=null;for(const u of t)try{const c=await u._get(o);if(c){const h=Tt._fromJSON(e,c);u!==r&&(a=h),r=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Qt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Qt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bu(e))return"Blackberry";if(Uu(e))return"Webos";if(uo(e))return"Safari";if((e.includes("chrome/")||Lu(e))&&!e.includes("edge/"))return"Chrome";if(xu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pu(n=we()){return/firefox\//i.test(n)}function uo(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lu(n=we()){return/crios\//i.test(n)}function Mu(n=we()){return/iemobile/i.test(n)}function xu(n=we()){return/android/i.test(n)}function Bu(n=we()){return/blackberry/i.test(n)}function Uu(n=we()){return/webos/i.test(n)}function ys(n=we()){return/iphone|ipad|ipod/i.test(n)}function X_(n=we()){var e;return ys(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J_(){return Cc()&&document.documentMode===10}function Hu(n=we()){return ys(n)||xu(n)||Uu(n)||Bu(n)||/windows phone/i.test(n)||Mu(n)}function Z_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(n,e=[]){let t;switch(n){case"Browser":t=Ta(we());break;case"Worker":t=`${Ta(we())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sa(this),this.idTokenSubscription=new Sa(this),this.beforeStateQueue=new em(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Su,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Qt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ns(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Se(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Qt.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$u(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}}function Es(n){return Se(n)}class Sa{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rc(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function nm(n,e){return pn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(n,e){return ai(n,"POST","/v1/accounts:signInWithPassword",oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e){return ai(n,"POST","/v1/accounts:signInWithEmailLink",oi(n,e))}async function rm(n,e){return ai(n,"POST","/v1/accounts:signInWithEmailLink",oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends co{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Xn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Xn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return im(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sm(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nm(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rm(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(n,e){return ai(n,"POST","/v1/accounts:signInWithIdp",oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="http://localhost";class Lt extends co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=ro(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Lt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xt(e,t)}buildRequest(){const e={requestUri:om,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=un(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lm(n){const e=In(An(n)).link,t=e?In(An(e)).deep_link_id:null,i=In(An(n)).deep_link_id;return(i?In(An(i)).link:null)||i||t||e||n}class ho{constructor(e){var t,i,s,r,o,a;const l=In(An(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,c=(i=l.oobCode)!==null&&i!==void 0?i:null,h=am((s=l.mode)!==null&&s!==void 0?s:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=lm(e);try{return new ho(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,t){return Xn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ho.parseLink(t);return M(i,"argument-error"),Xn._fromEmailAndCode(e,i.code,i.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Wu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends li{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return at.credential(t,i)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends li{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends li{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ut.credential(t,i)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(n,e){return ai(n,"POST","/v1/accounts:signUp",oi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Tt._fromIdTokenResponse(e,i,s),o=ka(i);return new Mt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ka(i);return new Mt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ka(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends ln{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,is.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new is(e,t,i,s)}}function ju(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?is._fromErrorAndOperation(n,r,e,i):r})}async function cm(n,e,t=!1){const i=await on(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await on(n,ju(i,s,e,n),t);M(r.idToken,i,"internal-error");const o=lo(r.idToken);M(o,i,"internal-error");const{sub:a}=o;return M(n.uid===a,i,"user-mismatch"),Mt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Be(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(n,e,t=!1){const i="signIn",s=await ju(n,i,e),r=await Mt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function dm(n,e){return Vu(Es(n),e)}async function fm(n,e,t){const i=Es(n),s=await um(i,{returnSecureToken:!0,email:e,password:t}),r=await Mt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function pm(n,e,t){return dm(Se(n),_n.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(n,e){return pn(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Se(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await on(i,_m(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function gm(n){return Se(n).signOut()}const ss="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ss,"1"),this.storage.removeItem(ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){const n=we();return uo(n)||ys(n)}const ym=1e3,Em=10;class qu extends zu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vm()&&Z_(),this.fallbackToPolling=Hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);J_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Em):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}qu.type="LOCAL";const Dm=qu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends zu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gu.type="SESSION";const Ku=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ds(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,r)),l=await Cm(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ds.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=fo("",20);s.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(c),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function bm(n){Ve().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){return typeof Ve().WorkerGlobalScope!="undefined"&&typeof Ve().importScripts=="function"}async function Im(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Am(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Tm(){return Yu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="firebaseLocalStorageDb",Sm=1,rs="firebaseLocalStorage",Xu="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Cs(n,e){return n.transaction([rs],e?"readwrite":"readonly").objectStore(rs)}function km(){const n=indexedDB.deleteDatabase(Qu);return new ui(n).toPromise()}function ur(){const n=indexedDB.open(Qu,Sm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(rs,{keyPath:Xu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(rs)?e(i):(i.close(),await km(),e(await ur()))})})}async function Na(n,e,t){const i=Cs(n,!0).put({[Xu]:e,value:t});return new ui(i).toPromise()}async function Nm(n,e){const t=Cs(n,!1).get(e),i=await new ui(t).toPromise();return i===void 0?null:i.value}function Ra(n,e){const t=Cs(n,!0).delete(e);return new ui(t).toPromise()}const Rm=800,Om=3;class Ju{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ur(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Om)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ds._getInstance(Tm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Im(),!this.activeServiceWorker)return;this.sender=new wm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Am()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ur();return await Na(e,ss,"1"),await Ra(e,ss),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Na(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Nm(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ra(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Cs(s,!1).getAll();return new ui(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ju.type="LOCAL";const Fm=Ju;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Lm(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=je("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Pm().appendChild(i)})}function Mm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n,e){return e?Xe(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Bm(n){return Vu(n.auth,new po(n),n.bypassAuthState)}function Um(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),hm(t,new po(n),n.bypassAuthState)}async function Hm(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),cm(t,new po(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bm;case"linkViaPopup":case"linkViaRedirect":return Hm;case"reauthViaPopup":case"reauthViaRedirect":return Um;default:Be(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=new ri(2e3,1e4);class Kt extends Zu{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=fo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$m.get())};e()}}Kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="pendingRedirect",Ei=new Map;class jm extends Zu{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ei.get(this.auth._key());if(!e){try{const i=await Vm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ei.set(this.auth._key(),e)}return this.bypassAuthState||Ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vm(n,e){const t=Gm(e),i=qm(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function zm(n,e){Ei.set(n._key(),e)}function qm(n){return Xe(n._redirectPersistence)}function Gm(n){return yi(Wm,n.config.apiKey,n.name)}async function Km(n,e,t=!1){const i=Es(n),s=xm(i,e),o=await new jm(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=10*60*1e3;class Qm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ec(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ym&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oa(e))}saveEventToCache(e){this.cachedEventUids.add(Oa(e)),this.lastProcessedEventTime=Date.now()}}function Oa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ec({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ec(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function tg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Jm(n);for(const t of e)try{if(ng(t))return}catch{}Be(n,"unauthorized-domain")}function ng(n){const e=lr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!eg.test(t))return!1;if(Zm.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new ri(3e4,6e4);function Fa(){const n=Ve().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function sg(n){return new Promise((e,t)=>{var i,s,r;function o(){Fa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fa(),t(je(n,"network-request-failed"))},timeout:ig.get()})}if(!((s=(i=Ve().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ve().gapi)===null||r===void 0)&&r.load)o();else{const a=Mm("iframefcb");return Ve()[a]=()=>{gapi.load?o():t(je(n,"network-request-failed"))},Lm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Di=null,e})}let Di=null;function rg(n){return Di=Di||sg(n),Di}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new ri(5e3,15e3),ag="__/auth/iframe",lg="emulator/auth/iframe",ug={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ao(e,lg):`https://${n.config.authDomain}/${ag}`,i={apiKey:e.apiKey,appName:n.name,v:Zn},s=cg.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${un(i).slice(1)}`}async function dg(n){const e=await rg(n),t=Ve().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:hg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ug,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=je(n,"network-request-failed"),a=Ve().setTimeout(()=>{r(o)},og.get());function l(){Ve().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pg=500,_g=600,mg="_blank",gg="http://localhost";class Pa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vg(n,e,t,i=pg,s=_g){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fg),{width:i.toString(),height:s.toString(),top:r,left:o}),u=we().toLowerCase();t&&(a=Lu(u)?mg:t),Pu(u)&&(e=e||gg,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[_,p])=>`${d}${_}=${p},`,"");if(X_(u)&&a!=="_self")return yg(e||"",a),new Pa(null);const h=window.open(e||"",a,c);M(h,n,"popup-blocked");try{h.focus()}catch{}return new Pa(h)}function yg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="__/auth/handler",Dg="emulator/auth/handler";function La(n,e,t,i,s,r){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Zn,eventId:s};if(e instanceof Wu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ws(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(r||{}))o[l]=u}if(e instanceof li){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Cg(n)}?${un(a).slice(1)}`}function Cg({config:n}){return n.emulator?ao(n,Dg):`https://${n.authDomain}/${Eg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="webStorageSupport";class wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ku,this._completeRedirectFn=Km,this._overrideRedirectResult=zm}async _openPopup(e,t,i,s){var r;tt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=La(e,t,i,lr(),s);return vg(e,o,fo())}async _openRedirect(e,t,i,s){return await this._originValidation(e),bm(La(e,t,i,lr(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(tt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await dg(e),i=new Qm(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Us,{type:Us},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Us];o!==void 0&&t(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hu()||uo()||ys()}}const bg=wg;var Ma="@firebase/auth",xa="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tg(n){tn(new kt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{M(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:r,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$u(n)},c=new tm(a,l,u);return P_(c,t),c})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),tn(new kt("auth-internal",e=>{const t=Es(e.getProvider("auth").getImmediate());return(i=>new Ig(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Ma,xa,Ag(n)),ht(Ma,xa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n=ll()){const e=Er(n,"auth");return e.isInitialized()?e.getImmediate():F_(n,{popupRedirectResolver:bg,persistence:[Fm,Dm,Ku]})}Tg("Browser");function Ba(n,e,t){const i=n.slice();return i[10]=e[t][0],i[11]=e[t][1],i}function Ua(n){let e,t,i,s,r,o,a,l,u,c,h;return{c(){e=g("div"),t=g("h6"),t.textContent="\u0437\u0430\u043A\u0440\u0438\u0442\u0438",i=k(),s=g("div"),r=g("a"),r.innerHTML="<p>\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0444\u0456\u043B\u044C</p>",o=k(),a=g("p"),a.textContent="\u0412\u0438\u0439\u0442\u0438 \u0437 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443",l=k(),u=g("div"),f(t,"m","20"),f(r,"color","white"),f(r,"href","#/edit"),f(a,"color","red"),f(a,"pointer",""),f(s,"class","menu svelte-1a1euhs"),f(u,"close",""),f(e,"modal","")},m(d,_){T(d,e,_),m(e,t),m(e,i),m(e,s),m(s,r),m(s,o),m(s,a),m(e,l),m(e,u),c||(h=[Z(a,"click",n[6]),Z(u,"click",n[7])],c=!0)},p:U,d(d){d&&A(e),c=!1,Re(h)}}}function Sg(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="" height="50px"/>',f(e,"class","sto"),f(e,"flex","center")},m(t,i){T(t,e,i)},p:U,d(t){t&&A(e)}}}function kg(n){let e;return{c(){e=g("div"),e.innerHTML=`<svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="38" cy="38" r="36.5" stroke="white" stroke-width="3"></circle><circle cx="24.8154" cy="31.8154" r="4.81544" fill="#D9D9D9"></circle><circle cx="50.5762" cy="31.8154" r="4.81544" fill="#D9D9D9"></circle><path d="M21.7227 52.4476C24.2876 50.337 31.7622 46.1836 37.947 46.1836C44.1319 46.1836 50.7354 50.337 53.5907 52.4476" stroke="white" stroke-width="3" stroke-linecap="round"></path></svg> 
    <h1 text="center">\u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043D\u0435 \u0456\u0441\u043D\u0443\u0454 <br/> \u0430\u0431\u043E \u0432\u0456\u043D \u0431\u0443\u0432 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0438\u0439</h1> 
    <a style="font-size: 18px;" href="#/">\u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0443</a>`,f(e,"class","sto"),f(e,"flex","center g20")},m(t,i){T(t,e,i)},p:U,d(t){t&&A(e)}}}function Ng(n){let e,t,i,s,r=n[0].name==Ce.decipher(localStorage.uid),o,a,l,u,c,h,d,_=n[1].name+"",p,v,D,N,E=(n[1].age||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"",R,y,w,C,S=(n[1].gen||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"",F,O,j,ae,le,K=(Yn(n[1].bio,n[5])||"\u0422\u0443\u0442 \u043F\u043E\u043A\u0438 \u043F\u0443\u0441\u0442\u043E")+"",ce,ie,q,me,V=r&&Ha(n);function z(ee,Fe){return ee[2]?Og:Rg}let x=z(n),Y=x(n);return{c(){e=g("div"),t=g("div"),i=g("h1"),i.textContent="\u041F\u0440\u043E\u0444\u0456\u043B\u044C",s=k(),V&&V.c(),o=k(),a=g("div"),l=g("img"),c=k(),h=g("div"),d=g("h3"),p=se(_),v=k(),D=g("h3"),N=se("\u0412\u0456\u043A: "),R=se(E),y=k(),w=g("h3"),C=se("\u0421\u0442\u0430\u0442\u044C: "),F=se(S),O=k(),j=g("h4"),j.textContent="\u041F\u0440\u043E \u043C\u0435\u043D\u0435:",ae=k(),le=g("h3"),ce=k(),ie=g("h4"),ie.textContent="\u0414\u043E\u043F\u0438\u0441\u0438",q=k(),me=g("div"),Y.c(),f(t,"flex","between"),ze(l.src,u=n[1].img)||f(l,"src",u),f(l,"alt","ava"),f(l,"height","68px"),f(l,"width","68px"),f(l,"class","svelte-1a1euhs"),f(d,"class","svelte-1a1euhs"),f(D,"class","svelte-1a1euhs"),f(w,"class","svelte-1a1euhs"),f(h,"flex","col between"),f(h,"class","svelte-1a1euhs"),f(a,"flex","row ai-c"),f(a,"id","prop"),f(a,"class","svelte-1a1euhs"),f(le,"class","svelte-1a1euhs"),f(me,"flex","col-rev"),f(me,"class","svelte-1a1euhs"),f(e,"class","wrapper svelte-1a1euhs")},m(ee,Fe){T(ee,e,Fe),m(e,t),m(t,i),m(t,s),V&&V.m(t,null),m(e,o),m(e,a),m(a,l),m(a,c),m(a,h),m(h,d),m(d,p),m(h,v),m(h,D),m(D,N),m(D,R),m(h,y),m(h,w),m(w,C),m(w,F),m(e,O),m(e,j),m(e,ae),m(e,le),le.innerHTML=K,m(e,ce),m(e,ie),m(e,q),m(e,me),Y.m(me,null)},p(ee,Fe){Fe&1&&(r=ee[0].name==Ce.decipher(localStorage.uid)),r?V?V.p(ee,Fe):(V=Ha(ee),V.c(),V.m(t,null)):V&&(V.d(1),V=null),Fe&2&&!ze(l.src,u=ee[1].img)&&f(l,"src",u),Fe&2&&_!==(_=ee[1].name+"")&&De(p,_),Fe&2&&E!==(E=(ee[1].age||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"")&&De(R,E),Fe&2&&S!==(S=(ee[1].gen||"\u043D\u0435\u0432\u0456\u0434\u043E\u043C\u043E")+"")&&De(F,S),Fe&2&&K!==(K=(Yn(ee[1].bio,ee[5])||"\u0422\u0443\u0442 \u043F\u043E\u043A\u0438 \u043F\u0443\u0441\u0442\u043E")+"")&&(le.innerHTML=K),x===(x=z(ee))&&Y?Y.p(ee,Fe):(Y.d(1),Y=x(ee),Y&&(Y.c(),Y.m(me,null)))},d(ee){ee&&A(e),V&&V.d(),Y.d()}}}function Ha(n){let e,t,i;return{c(){e=g("h1"),e.textContent="\u2022\u2022\u2022",f(e,"pointer",""),f(e,"class","points")},m(s,r){T(s,e,r),t||(i=Z(e,"click",n[8]),t=!0)},p:U,d(s){s&&A(e),t=!1,i()}}}function Rg(n){let e;return{c(){e=g("div"),e.innerHTML='<h4 class="noposts svelte-1a1euhs" text="">\u0434\u043E\u043F\u0441\u0456\u0432 \u043D\u0435\u043C\u0430\u0454</h4>',f(e,"flex","center")},m(t,i){T(t,e,i)},p:U,d(t){t&&A(e)}}}function Og(n){let e=[],t=new Map,i,s=Object.entries(n[2]);const r=o=>o[10];for(let o=0;o<s.length;o+=1){let a=Ba(n,s,o),l=r(a);t.set(l,e[o]=$a(l,a))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();i=nt()},m(o,a){for(let l=0;l<e.length;l+=1)e[l].m(o,a);T(o,i,a)},p(o,a){a&6&&(s=Object.entries(o[2]),e=pr(e,a,r,1,o,s,t,i.parentNode,fr,$a,i,Ba))},d(o){for(let a=0;a<e.length;a+=1)e[a].d(o);o&&A(i)}}}function $a(n,e){let t,i,s,r,o,a,l=e[1].name+"",u,c,h=e[11].tema+"",d,_,p,v=e[11].textPost+"",D,N,E,R,y,w,C,S,F=e[11].likeCount+"",O,j,ae,le=(Ce.time("date(ua) hm",e[11].time)||"\u0434\u043E \u0447\u0435\u0440\u0432\u043D\u044F 2022")+"",K,ce;return{key:n,first:null,c(){t=g("div"),i=g("div"),s=g("img"),o=k(),a=g("h3"),u=se(l),c=se(", \u0422\u0435\u043C\u0430: "),d=se(h),_=k(),p=g("h5"),D=se(v),N=k(),E=g("div"),R=g("div"),y=ye("svg"),w=ye("path"),C=k(),S=g("h5"),O=se(F),j=k(),ae=g("h5"),K=se(le),ce=k(),ze(s.src,r=e[1].img)||f(s,"src",r),f(s,"alt","ava"),f(s,"height","35px"),f(s,"width","35px"),f(s,"class","svelte-1a1euhs"),f(a,"class","svelte-1a1euhs"),f(i,"class","postHead svelte-1a1euhs"),f(i,"flex","row ai-c"),f(p,"class","postBody svelte-1a1euhs"),f(w,"class","likes"),f(w,"d","M11 19C-10.1988 6.1863 4.64026 -4.49179 10.9999 1.91508C17.3597 -4.49178 32.1988 6.18631 11 19Z"),f(w,"fill","orange"),f(y,"width","22"),f(y,"height","19"),f(y,"viewBox","0 0 22 19"),f(y,"fill","none"),f(y,"xmlns","http://www.w3.org/2000/svg"),f(S,"id","likeCount"),f(S,"class","svelte-1a1euhs"),f(R,"flex",""),f(R,"class","svelte-1a1euhs"),f(ae,"class","svelte-1a1euhs"),f(E,"flex","between ai-c"),f(E,"class","postFoot svelte-1a1euhs"),f(t,"class","post svelte-1a1euhs"),f(t,"flex","col"),this.first=t},m(ie,q){T(ie,t,q),m(t,i),m(i,s),m(i,o),m(i,a),m(a,u),m(a,c),m(a,d),m(t,_),m(t,p),m(p,D),m(t,N),m(t,E),m(E,R),m(R,y),m(y,w),m(R,C),m(R,S),m(S,O),m(E,j),m(E,ae),m(ae,K),m(t,ce)},p(ie,q){e=ie,q&2&&!ze(s.src,r=e[1].img)&&f(s,"src",r),q&2&&l!==(l=e[1].name+"")&&De(u,l),q&4&&h!==(h=e[11].tema+"")&&De(d,h),q&4&&v!==(v=e[11].textPost+"")&&De(D,v),q&4&&F!==(F=e[11].likeCount+"")&&De(O,F),q&4&&le!==(le=(Ce.time("date(ua) hm",e[11].time)||"\u0434\u043E \u0447\u0435\u0440\u0432\u043D\u044F 2022")+"")&&De(K,le)},d(ie){ie&&A(t)}}}function Fg(n){let e,t,i=n[4]&&Ua(n);function s(a,l){return a[1]?Ng:a[3]?kg:Sg}let r=s(n),o=r(n);return{c(){i&&i.c(),e=k(),o.c(),t=nt()},m(a,l){i&&i.m(a,l),T(a,e,l),o.m(a,l),T(a,t,l)},p(a,[l]){a[4]?i?i.p(a,l):(i=Ua(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r===(r=s(a))&&o?o.p(a,l):(o.d(1),o=r(a),o&&(o.c(),o.m(t.parentNode,t)))},i:U,o:U,d(a){i&&i.d(a),a&&A(e),o.d(a),a&&A(t)}}}function Pg(n,e,t){let{params:i}=e;const s=Bt(),r={defaultProtocol:"https",formatHref:{mention:_=>`#/user/${_.substr(1)}`}};let o,a,l,u;location.hash=="#/user/!user"&&(location.hash="/",location.hash="login");function c(){localStorage.clear("uid"),gm(tc()),location.hash="/",location.reload()}const h=()=>{t(4,u=!1)},d=()=>{t(4,u=!0)};return n.$$set=_=>{"params"in _&&t(0,i=_.params)},n.$$.update=()=>{n.$$.dirty&3&&mt(Ae(s,"users/"+i.name)).then(_=>{t(1,a=_.val()),a?mt(zp(Ae(s,"posts/"),Wp("user"),Vp(i.name))).then(p=>{t(2,o=p.val())}):t(3,l=!0)})},[i,a,o,l,u,r,c,h,d]}class Lg extends He{constructor(e){super(),Ue(this,e,Pg,Fg,Oe,{params:0})}}function Mg(n){let e,t,i;return{c(){e=g("h1"),t=se("\u041F\u0440\u0438\u0432\u0456\u0442, "),i=se(n[0])},m(s,r){T(s,e,r),m(e,t),m(e,i)},p(s,r){r&1&&De(i,s[0])},d(s){s&&A(e)}}}function xg(n){let e;function t(r,o){return r[3]?Bg:Ug}let i=t(n),s=i(n);return{c(){s.c(),e=nt()},m(r,o){s.m(r,o),T(r,e,o)},p(r,o){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},d(r){s.d(r),r&&A(e)}}}function Bg(n){let e,t,i,s,r,o,a,l,u,c,h,d,_;return{c(){e=g("h1"),e.textContent="\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043F\u043E\u043B\u044F, \u0449\u043E\u0431 \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C",t=k(),i=g("input"),s=k(),r=g("input"),o=k(),a=g("input"),l=k(),u=g("button"),u.textContent="\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438",c=k(),h=g("p"),h.textContent="\u042F \u0432\u0436\u0435 \u043C\u0430\u044E \u0430\u043A\u043A\u0430\u0443\u043D\u0442",f(e,"text",""),f(i,"type","email"),f(i,"placeholder","\u041F\u043E\u0448\u0442\u0430"),f(r,"type","text"),f(r,"placeholder","\u041B\u043E\u0433\u0456\u043D"),f(a,"type","password"),f(a,"placeholder","\u041F\u0430\u0440\u043E\u043B\u044C"),f(u,"color","orange"),f(h,"class","svelte-owl3xf")},m(p,v){T(p,e,v),T(p,t,v),T(p,i,v),re(i,n[4]),T(p,s,v),T(p,r,v),re(r,n[0]),T(p,o,v),T(p,a,v),re(a,n[1]),T(p,l,v),T(p,u,v),T(p,c,v),T(p,h,v),d||(_=[Z(i,"input",n[10]),Z(r,"input",n[11]),Z(a,"input",n[12]),Z(u,"click",n[6]),Z(h,"click",n[13])],d=!0)},p(p,v){v&16&&i.value!==p[4]&&re(i,p[4]),v&1&&r.value!==p[0]&&re(r,p[0]),v&2&&a.value!==p[1]&&re(a,p[1])},d(p){p&&A(e),p&&A(t),p&&A(i),p&&A(s),p&&A(r),p&&A(o),p&&A(a),p&&A(l),p&&A(u),p&&A(c),p&&A(h),d=!1,Re(_)}}}function Ug(n){let e,t,i,s,r,o,a,l,u,c,h;return{c(){e=g("h1"),e.innerHTML="\u041D\u0430\u043F\u0438\u0448\u0438 \u043B\u043E\u0433\u0456\u043D \u0442\u0430 \u043F\u043E\u0440\u043E\u043B\u044C <br/> \u0449\u043E\u0431 \u0443\u0432\u0456\u0439\u0442\u0438",t=k(),i=g("input"),s=k(),r=g("input"),o=k(),a=g("button"),a.textContent="\u0423\u0432\u0456\u0439\u0442\u0438",l=k(),u=g("p"),u.textContent="\u042F \u0449\u0435 \u043D\u0435 \u043C\u0430\u044E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443",f(e,"text",""),f(i,"type","email"),f(i,"placeholder","\u041F\u043E\u0448\u0442\u0430"),f(i,"autocomplete","email"),f(r,"type","password"),f(r,"placeholder","\u041F\u0430\u0440\u043E\u043B\u044C"),f(r,"autocomplete","new-password"),f(a,"color","orange"),f(u,"class","svelte-owl3xf")},m(d,_){T(d,e,_),T(d,t,_),T(d,i,_),re(i,n[4]),T(d,s,_),T(d,r,_),re(r,n[1]),T(d,o,_),T(d,a,_),T(d,l,_),T(d,u,_),c||(h=[Z(i,"input",n[7]),Z(r,"input",n[8]),Z(a,"click",n[5]),Z(u,"click",n[9])],c=!0)},p(d,_){_&16&&i.value!==d[4]&&re(i,d[4]),_&2&&r.value!==d[1]&&re(r,d[1])},d(d){d&&A(e),d&&A(t),d&&A(i),d&&A(s),d&&A(r),d&&A(o),d&&A(a),d&&A(l),d&&A(u),c=!1,Re(h)}}}function Hg(n){let e;function t(r,o){return r[2]?Mg:xg}let i=t(n),s=i(n);return{c(){e=g("div"),s.c(),f(e,"class","over"),f(e,"flex","center")},m(r,o){T(r,e,o),s.m(e,null)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},i:U,o:U,d(r){r&&A(e),s.d()}}}function $g(n,e,t){const i=Bt(),s=tc();let r,o,a,l,u,c;localStorage.uid&&(location.hash="/");function h(){c&&o?pm(s,c,o).then(y=>{t(0,r=y.user.displayName),localStorage.uid=Ce.cipher(r),t(2,l=!0),setTimeout(()=>{location.hash="/",location.reload()},1500)}).catch(()=>{alert("\u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043B\u043E\u0433\u0456\u043D \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C")}):alert("\u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043F\u043E\u043B\u044F")}function d(){Ce.valid("email",c)&&Ce.valid("login",r)&&Ce.valid("pass",o)?(fm(s,c,o).then(y=>{mm(y.user,{displayName:r}).then(()=>{localStorage.uid=Ce.cipher(r)})}),mt(Ae(i,"users/"+r)).then(y=>{a=y.val(),a?alert("\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0442\u0430\u043A\u0438\u043C \u043B\u043E\u0433\u0456\u043D\u043E\u043C \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454"):sn(Ae(i,"users/"+r),{name:r,email:c,login:r,img:"https://firebasestorage.googleapis.com/v0/b/test-f886d.appspot.com/o/profileImg%2Fdefault.jpg?alt=media",pass:o,age:"",gen:"",bio:"",countMyPost:0,countTotalLikes:0}).then(()=>{t(2,l=!0),setTimeout(()=>{location.hash="/edit",location.reload()},1500)})})):alert(`\u043F\u0440\u0430\u0432\u0438\u043B\u0430:
          \u043F\u043E\u0448\u0442\u0430 - \u043F\u0440\u0438\u043A\u043B\u0430\u0434 (test@gmail.com)
          \u043B\u043E\u0433\u0456\u043D - \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0456 \u043B\u0430\u0442. \u043B\u0456\u0442\u0435\u0440\u0438 \u0442\u0430 \u0446\u0438\u0444\u0440\u0438
          \u043F\u0430\u0440\u043E\u043B\u044C - \u043B\u0430\u0442. \u043B\u0456\u0442\u0435\u0440\u0438, \u0446\u0438\u0444\u0440\u0438 \u0442\u0430 !@#$%^&*`)}function _(){c=this.value,t(4,c)}function p(){o=this.value,t(1,o)}const v=()=>{t(3,u=!0)};function D(){c=this.value,t(4,c)}function N(){r=this.value,t(0,r)}function E(){o=this.value,t(1,o)}return[r,o,l,u,c,h,d,_,p,v,D,N,E,()=>{t(3,u=!1)}]}class Wg extends He{constructor(e){super(),Ue(this,e,$g,Hg,Oe,{})}}function jg(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://i.gifer.com/XVo6.gif" alt="" height="50px"/>',f(e,"class","sto"),f(e,"flex","center")},m(t,i){T(t,e,i)},p:U,d(t){t&&A(e)}}}function Vg(n){let e,t,i,s,r,o,a,l,u,c,h,d,_,p,v,D,N,E,R,y,w,C,S,F,O,j,ae,le,K,ce,ie,q,me,V,z,x;return{c(){e=g("div"),t=g("div"),i=g("input"),s=k(),r=g("label"),o=g("img"),l=k(),u=g("h4"),u.textContent="\u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u043F\u0456\u043A\u0447\u0443",c=k(),h=g("div"),d=g("div"),_=g("h6"),_.textContent="\u0456\u043C'\u044F",p=k(),v=g("input"),D=k(),N=g("div"),E=g("h6"),E.textContent="\u0432\u0456\u043A",R=k(),y=g("input"),w=k(),C=g("div"),S=g("h6"),S.textContent="\u0441\u0442\u0430\u0442\u044C",F=k(),O=g("select"),j=g("option"),j.textContent="\u0427\u043E\u043B\u043E\u0432\u0456\u043A",ae=g("option"),ae.textContent="\u0416\u0456\u043D\u043A\u0430",le=k(),K=g("div"),ce=g("h6"),ce.textContent="\u043F\u0440\u043E \u043C\u0435\u043D\u0435",ie=k(),q=g("textarea"),me=k(),V=g("button"),V.textContent="\u0437\u043C\u0456\u043D\u0438\u0442\u0438",f(i,"type","file"),f(i,"id","selectFileImg"),f(i,"accept","image/*"),pi(i,"display","none"),ze(o.src,a=n[5])||f(o,"src",a),f(o,"alt","ava"),f(o,"width","100px"),f(o,"height","100px"),f(r,"for","selectFileImg"),f(t,"flex","center"),f(v,"type","text"),pi(d,"flex","3"),f(y,"type","number"),f(y,"min","0"),pi(N,"flex","1"),f(h,"flex","row g10"),j.__value="\u0427\u043E\u043B\u043E\u0432\u0456\u043A",j.value=j.__value,f(j,"class","svelte-1745fd3"),ae.__value="\u0416\u0456\u043D\u043A\u0430",ae.value=ae.__value,f(ae,"class","svelte-1745fd3"),n[3]===void 0&&Bn(()=>n[9].call(O)),f(q,"rows","5"),f(V,"color","orange"),f(e,"class","wrapper")},m(Y,ee){T(Y,e,ee),m(e,t),m(t,i),m(t,s),m(t,r),m(r,o),m(r,l),m(r,u),m(e,c),m(e,h),m(h,d),m(d,_),m(d,p),m(d,v),re(v,n[0]),m(h,D),m(h,N),m(N,E),m(N,R),m(N,y),re(y,n[1]),m(e,w),m(e,C),m(C,S),m(C,F),m(C,O),m(O,j),m(O,ae),Ci(O,n[3]),m(e,le),m(e,K),m(K,ce),m(K,ie),m(K,q),re(q,n[2]),m(e,me),m(e,V),z||(x=[Z(v,"input",n[7]),Z(y,"input",n[8]),Z(O,"change",n[9]),Z(q,"input",n[10]),Z(V,"click",n[6],{once:!0})],z=!0)},p(Y,ee){ee&32&&!ze(o.src,a=Y[5])&&f(o,"src",a),ee&1&&v.value!==Y[0]&&re(v,Y[0]),ee&2&&Va(y.value)!==Y[1]&&re(y,Y[1]),ee&8&&Ci(O,Y[3]),ee&4&&re(q,Y[2])},d(Y){Y&&A(e),z=!1,Re(x)}}}function zg(n){let e;function t(r,o){return r[4]?Vg:jg}let i=t(n),s=i(n);return{c(){s.c(),e=nt()},m(r,o){s.m(r,o),T(r,e,o)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e.parentNode,e)))},i:U,o:U,d(r){s.d(r),r&&A(e)}}}function qg(n,e,t){const i=Bt();let s=Ce.decipher(localStorage.uid);s||(location.hash="/login");let r,o,a,l,u,c="https://anton99999.github.io/avatars/8.jpg";mt(Ae(i,"users/"+s)).then(D=>{t(4,u=D.val()),t(5,c=u.img),t(0,r=u.name),t(1,o=u.age),t(3,l=u.gen),t(2,a=u.bio)});function h(){t(4,u.img=c,u),t(4,u.name=r,u),t(4,u.age=o,u),t(4,u.gen=l,u),t(4,u.bio=a,u),sn(Ae(i,"users/"+s),u).then(()=>{location.hash="#/user/"+s})}function d(){r=this.value,t(0,r)}function _(){o=Va(this.value),t(1,o)}function p(){l=za(this),t(3,l)}function v(){a=this.value,t(2,a)}return[r,o,a,l,u,c,h,d,_,p,v]}class Gg extends He{constructor(e){super(),Ue(this,e,qg,zg,Oe,{})}}function Kg(n){let e,t,i=n[3].name+"",s;return{c(){e=g("h1"),t=se("\u041F\u0440\u0438\u0432\u0456\u0442, "),s=se(i)},m(r,o){T(r,e,o),m(e,t),m(e,s)},p(r,o){o&8&&i!==(i=r[3].name+"")&&De(s,i)},d(r){r&&A(e)}}}function Yg(n){let e,t,i,s,r,o,a,l,u,c,h,d,_;return{c(){e=g("h1"),e.textContent="\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u043F\u043E\u043B\u044F, \u0449\u043E\u0431 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",t=k(),i=g("input"),s=k(),r=g("input"),o=k(),a=g("input"),l=k(),u=g("button"),u.textContent="\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F",c=k(),h=g("a"),h.textContent="\u0412 \u043C\u0435\u043D\u0435 \u0432\u0436\u0435 \u0454 \u0430\u043A\u043A\u0430\u0443\u043D\u0442",f(e,"text",""),f(i,"type","email"),f(i,"placeholder","\u043F\u043E\u0448\u0442\u0430"),f(i,"autocomplete","email"),f(r,"type","text"),f(r,"placeholder","\u043B\u043E\u0433\u0456\u043D"),f(r,"autocomplete","name"),f(a,"type","password"),f(a,"placeholder","\u043F\u0430\u0440\u043E\u043B\u044C"),f(a,"autocomplete","new-password"),f(u,"color","orange"),f(h,"href","#/login")},m(p,v){T(p,e,v),T(p,t,v),T(p,i,v),re(i,n[1]),T(p,s,v),T(p,r,v),re(r,n[0]),T(p,o,v),T(p,a,v),re(a,n[2]),T(p,l,v),T(p,u,v),T(p,c,v),T(p,h,v),d||(_=[Z(i,"input",n[6]),Z(r,"input",n[7]),Z(a,"input",n[8]),Z(u,"click",n[5])],d=!0)},p(p,v){v&2&&i.value!==p[1]&&re(i,p[1]),v&1&&r.value!==p[0]&&re(r,p[0]),v&4&&a.value!==p[2]&&re(a,p[2])},d(p){p&&A(e),p&&A(t),p&&A(i),p&&A(s),p&&A(r),p&&A(o),p&&A(a),p&&A(l),p&&A(u),p&&A(c),p&&A(h),d=!1,Re(_)}}}function Qg(n){let e;function t(r,o){return r[4]?Kg:Yg}let i=t(n),s=i(n);return{c(){e=g("div"),s.c(),f(e,"flex","center"),f(e,"class","over")},m(r,o){T(r,e,o),s.m(e,null)},p(r,[o]){i===(i=t(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null)))},i:U,o:U,d(r){r&&A(e),s.d()}}}function Xg(n,e,t){const i=Bt();let s,r,o,a,l,u;localStorage.name&&(location.hash="/");function c(){s&&r&&a?mt(Ae(i,"users/"+r)).then(p=>{t(3,l=p.val()),l?alert("\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0442\u0430\u043A\u0438\u043C \u043B\u043E\u0433\u0456\u043D\u043E\u043C \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454"):sn(Ae(i,"users/"+r),{name:r,email:o,login:r,img:"https://firebasestorage.googleapis.com/v0/b/test-f886d.appspot.com/o/profileImg%2Fdefault.jpg?alt=media",pass:a,age:"",gen:"",bio:"",countMyPost:0,countTotalLikes:0}).then(()=>{t(4,u=!0),token=Ce.hash(),sn(Ae(i,"authUsers/"+token),r),localStorage.token=token,setTimeout(()=>{location.hash="/",location.reload()},1e3)})}):alert(`\u043F\u0440\u0430\u0432\u0438\u043B\u0430:
          \u043F\u043E\u0448\u0442\u0430 - \u043F\u0440\u0438\u043A\u043B\u0430\u0434 (test@mail.com)
          \u043B\u043E\u0433\u0456\u043D - \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0456 \u043B\u0430\u0442. \u043B\u0456\u0442\u0435\u0440\u0438 \u0442\u0430 \u0446\u0438\u0444\u0440\u0438
          \u043F\u0430\u0440\u043E\u043B\u044C - \u043B\u0430\u0442. \u043B\u0456\u0442\u0435\u0440\u0438, \u0446\u0438\u0444\u0440\u0438 \u0442\u0430 !@#$%^&*`)}function h(){o=this.value,t(1,o)}function d(){r=this.value,t(0,r)}function _(){a=this.value,t(2,a)}return n.$$.update=()=>{n.$$.dirty&7&&(s=EMAIL_REGEX.test(o)&&LOGIN_REGEX.test(r)&&PASS_REGEX.test(a))},[r,o,a,l,u,c,h,d,_]}class Jg extends He{constructor(e){super(),Ue(this,e,Xg,Qg,Oe,{})}}function Zg(n){let e,t,i,s,r,o,a,l,u,c,h,d,_,p,v,D,N,E,R,y,w,C,S,F;return o=new Kh({props:{routes:n[0]}}),{c(){e=g("link"),t=k(),i=g("header"),i.innerHTML='<svg width="121" height="25" viewBox="0 0 121 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0640259 21.5519V8.57608C0.0640259 6.18853 0.877175 4.18161 2.50347 2.55531C4.16437 0.894414 6.18859 0.0639648 8.57614 0.0639648C10.9637 0.0639648 12.9706 0.894414 14.5969 2.55531C16.2578 4.18161 17.0882 6.18853 17.0882 8.57608V21.5519C17.0882 23.9394 16.2578 25.9636 14.5969 27.6245C12.9706 29.2508 10.9637 30.064 8.57614 30.064C6.18859 30.064 4.16437 29.2508 2.50347 27.6245C0.877175 25.9636 0.0640259 23.9394 0.0640259 21.5519ZM4.11247 21.5519C4.11247 22.7283 4.54499 23.7837 5.41005 24.7179C6.3443 25.583 7.39967 26.0155 8.57614 26.0155C9.75261 26.0155 10.808 25.583 11.7422 24.7179C12.6073 23.7837 13.0398 22.7283 13.0398 21.5519V8.57608C13.0398 7.3996 12.6073 6.34424 11.7422 5.40998C10.808 4.54493 9.75261 4.11241 8.57614 4.11241C7.39967 4.11241 6.3443 4.54493 5.41005 5.40998C4.54499 6.34424 4.11247 7.3996 4.11247 8.57608V21.5519Z" fill="#FFA500"></path><path d="M30.064 30.064H26.0156V0.0639648H34.5277C36.9152 0.0639648 38.9222 0.894414 40.5485 2.55531C42.2094 4.18161 43.0398 6.18853 43.0398 8.57608C43.0398 9.92556 42.7976 11.0847 42.3132 12.0536C41.8633 13.0224 41.1194 14.0259 40.0813 15.064C41.1194 16.102 41.8633 17.1055 42.3132 18.0743C42.7976 19.0432 43.0398 20.2024 43.0398 21.5519V30.064H38.9914V21.5519C38.9914 20.3754 38.5588 19.32 37.6938 18.3858C36.7595 17.5207 35.7042 17.0882 34.5277 17.0882H30.064V30.064ZM30.064 13.0397H34.5277C35.7042 13.0397 36.7595 12.6072 37.6938 11.7422C38.5588 10.8079 38.9914 9.75255 38.9914 8.57608C38.9914 7.3996 38.5588 6.34424 37.6938 5.40998C36.7595 4.54493 35.7042 4.11241 34.5277 4.11241H30.064V13.0397Z" fill="#FFA500"></path><path d="M51.9671 8.57608C51.9671 6.18853 52.7803 4.18161 54.4066 2.55531C56.0675 0.894414 58.0917 0.0639648 60.4793 0.0639648C62.8668 0.0639648 64.8737 0.894414 66.5 2.55531C68.1609 4.18161 68.9914 6.18853 68.9914 8.57608V30.064H64.9429V17.0882H56.0156V30.064H51.9671V8.57608ZM56.0156 13.0397H64.9429V8.57608C64.9429 7.3996 64.5104 6.34424 63.6453 5.40998C62.7111 4.54493 61.6557 4.11241 60.4793 4.11241C59.3028 4.11241 58.2474 4.54493 57.3132 5.40998C56.4481 6.34424 56.0156 7.3996 56.0156 8.57608V13.0397Z" fill="#FFA500"></path><path d="M77.9187 0.0639648H81.9671V26.0155H86.4308C87.6073 26.0155 88.6626 25.583 89.5969 24.7179C90.462 23.7837 90.8945 22.7283 90.8945 21.5519V0.0639648H94.9429V21.5519C94.9429 23.9394 94.1125 25.9636 92.4516 27.6245C90.8253 29.2508 88.8184 30.064 86.4308 30.064H77.9187V0.0639648Z" fill="#FFA500"></path><path d="M103.87 8.57608C103.87 6.18853 104.683 4.18161 106.31 2.55531C107.971 0.894414 109.995 0.0639648 112.382 0.0639648C114.77 0.0639648 116.777 0.894414 118.403 2.55531C120.064 4.18161 120.894 6.18853 120.894 8.57608V30.064H116.846V17.0882H107.919V30.064H103.87V8.57608ZM107.919 13.0397H116.846V8.57608C116.846 7.3996 116.414 6.34424 115.548 5.40998C114.614 4.54493 113.559 4.11241 112.382 4.11241C111.206 4.11241 110.151 4.54493 109.216 5.40998C108.351 6.34424 107.919 7.3996 107.919 8.57608V13.0397Z" fill="#FFA500"></path></svg>',s=k(),r=g("main"),Un(o.$$.fragment),a=k(),l=g("footer"),u=g("a"),u.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8689 9.51317C19.1949 9.29789 19.5741 9.20472 19.944 9.22371C20.313 9.20126 20.6924 9.29045 21.02 9.50185L32.1935 16.7126C32.9649 17.2104 33.157 18.1973 32.6225 18.9169C32.0881 19.6366 31.0295 19.8164 30.2581 19.3186L30.1824 19.2697L30.232 28.6127C30.2382 29.7794 29.229 30.7306 27.9777 30.7372L22.3139 30.7673L22.2634 21.2613L17.7323 21.2854L17.7828 30.7914L12.119 30.8215C10.8678 30.8282 9.84845 29.8878 9.84224 28.7211L9.79264 19.3899L9.73567 19.4276C8.96963 19.9335 7.90921 19.765 7.36715 19.0511C6.82508 18.3372 7.00665 17.3483 7.77269 16.8423L18.8689 9.51317ZM10.9215 18.6443L10.975 28.7151C10.9781 29.2984 11.4878 29.7686 12.1134 29.7653L16.6445 29.7412L16.5995 21.2914C16.5964 20.7081 17.1011 20.2325 17.7267 20.2291L22.2578 20.2051C22.8834 20.2017 23.393 20.6719 23.3961 21.2553L23.4411 29.7051L27.9721 29.681C28.5977 29.6777 29.1024 29.2021 29.0993 28.6187L29.0457 18.5361L19.9612 12.6736L10.9215 18.6443Z" fill="white"></path></svg>',c=k(),h=g("a"),h.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.2966 21.8979C27.018 19.429 27.7521 15.3087 25.8435 11.9917C23.6471 8.17458 18.7826 6.86672 14.9783 9.07056C11.174 11.2744 9.87054 16.1554 12.0669 19.9726C14.0327 23.3889 18.1357 24.7953 21.703 23.473L26.1718 31.2394C26.5903 31.9667 27.5171 32.2159 28.242 31.796C28.9669 31.3761 29.2152 30.4461 28.7967 29.7188L24.2966 21.8979ZM24.9685 12.4986C26.8859 15.8309 25.7481 20.0919 22.427 22.0158C19.106 23.9397 14.8593 22.798 12.9419 19.4657C11.0245 16.1334 12.1624 11.8724 15.4834 9.9485C18.8045 8.0246 23.0511 9.16633 24.9685 12.4986Z" fill="white"></path></svg>',d=k(),_=g("a"),p=ye("svg"),v=ye("rect"),D=ye("path"),N=k(),E=g("a"),E.innerHTML='<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0001 31.5002C26.3514 31.5002 31.5002 26.3514 31.5002 20.0001C31.5002 13.6488 26.3514 8.5 20.0001 8.5C13.6488 8.5 8.5 13.6488 8.5 20.0001C8.5 26.3514 13.6488 31.5002 20.0001 31.5002Z" stroke="white"></path><circle cx="14.4994" cy="17.2503" r="1.83335" fill="white"></circle><circle cx="20.4222" cy="17.2503" r="1.83335" fill="white"></circle><circle cx="20.4222" cy="23.1471" r="1.83335" fill="white"></circle><circle cx="26.3451" cy="17.2503" r="1.83335" fill="white"></circle><circle cx="26.3451" cy="23.1993" r="1.83335" fill="white"></circle><circle cx="14.4994" cy="23.1471" r="1.83335" fill="white"></circle></svg>',R=k(),y=g("a"),w=ye("svg"),C=ye("path"),S=ye("rect"),f(e,"rel","stylesheet"),f(e,"href","/public/css/orange.css"),f(i,"flex","center"),f(i,"class","svelte-1yqrxkf"),f(r,"class","svelte-1yqrxkf"),f(u,"href","#/"),f(u,"class","svelte-1yqrxkf"),f(h,"href","#/find"),f(h,"class","svelte-1yqrxkf"),f(v,"width","40"),f(v,"height","40"),f(v,"rx","10"),f(v,"fill","#FFA500"),f(D,"d","M20 11C19.1716 11 18.5 11.6716 18.5 12.5V18H13C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21H18.5V26.5C18.5 27.3284 19.1716 28 20 28C20.8284 28 21.5 27.3284 21.5 26.5V21H27C27.8284 21 28.5 20.3284 28.5 19.5C28.5 18.6716 27.8284 18 27 18H21.5V12.5C21.5 11.6716 20.8284 11 20 11Z"),f(D,"fill","#111111"),f(p,"width","40"),f(p,"height","40"),f(p,"viewBox","0 0 40 40"),f(p,"fill","none"),f(p,"xmlns","http://www.w3.org/2000/svg"),f(_,"href",n[2]),f(_,"class","svelte-1yqrxkf"),f(E,"href","#/more"),f(E,"class","svelte-1yqrxkf"),f(C,"d","M10.3389 29.0902C10.3389 24.5576 14.0132 20.8833 18.5458 20.8833H21.2546C25.7871 20.8833 29.4615 24.5576 29.4615 29.0902C29.4615 30.4169 28.3859 31.4925 27.0592 31.4925H12.7412C11.4144 31.4925 10.3389 30.4169 10.3389 29.0902Z"),f(C,"stroke","white"),f(S,"x","15.9824"),f(S,"y","9.5"),f(S,"width","7.83523"),f(S,"height","7.83523"),f(S,"rx","3.91762"),f(S,"stroke","white"),f(S,"stroke-width","3"),f(w,"width","40"),f(w,"height","40"),f(w,"viewBox","0 0 40 40"),f(w,"fill","none"),f(w,"xmlns","http://www.w3.org/2000/svg"),f(y,"href",n[1]),f(y,"class","svelte-1yqrxkf"),f(l,"flex","between ai-c"),f(l,"class","svelte-1yqrxkf")},m(O,j){m(document.head,e),T(O,t,j),T(O,i,j),T(O,s,j),T(O,r,j),Jt(o,r,null),T(O,a,j),T(O,l,j),m(l,u),m(l,c),m(l,h),m(l,d),m(l,_),m(_,p),m(p,v),m(p,D),m(l,N),m(l,E),m(l,R),m(l,y),m(y,w),m(w,C),m(w,S),F=!0},p:U,i(O){F||(Ze(o.$$.fragment,O),F=!0)},o(O){St(o.$$.fragment,O),F=!1},d(O){A(e),O&&A(t),O&&A(i),O&&A(s),O&&A(r),Zt(o),O&&A(a),O&&A(l)}}}function e0(n){Rh({apiKey:"AIzaSyBMsehRdFlZkPgVzD27A3_NCz-1nA4SuY8",authDomain:"test-f886d.firebaseapp.com",databaseURL:"https://test-f886d-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-f886d",storageBucket:"gs://test-f886d.appspot.com",messagingSenderId:"560596790548",appId:"1:560596790548:web:fadcd34c3ce8cbb3e42601"});let e={"/":E_,"/user/:name":Lg,"/find":I_,"/more":N_,"/add":S_,"/login":Wg,"/edit":Gg,"/regist":Jg,"*":Qh},t=localStorage.uid?"#/user/"+Ce.decipher(localStorage.uid):"#/login",i=localStorage.uid?"#/add":"#/login";return[e,t,i]}class t0 extends He{constructor(e){super(),Ue(this,e,e0,Zg,Oe,{})}}new t0({target:document.body});
