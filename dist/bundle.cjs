"use strict";function t(t,e,r,n){return new(r||(r=Promise))((function(s,i){function o(t){try{u(n.next(t))}catch(t){i(t)}}function l(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?s(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,l)}u((n=n.apply(t,e||[])).next())}))}function e(t,e,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(t):n?n.value:e.get(t)}function r(t,e,r,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(t,r):s?s.value=r:e.set(t,r),r}var n,s,i,o,l,u,a,h,c,f;"function"==typeof SuppressedError&&SuppressedError;n=new WeakMap,s=new WeakMap;class d{constructor(){i.set(this,void 0),r(this,i,new Map([]),"f")}hasKey(t){return e(this,i,"f").has(t)}get(t){return e(this,i,"f").get(t)}set(t,r){e(this,i,"f").set(t,r)}remove(t){e(this,i,"f").delete(t)}clear(){e(this,i,"f").clear()}isEmpty(){return 0===e(this,i,"f").size}isFull(){return!1}}i=new WeakMap;o=new WeakMap;class v{get isNone(){return null==e(this,l,"f")}constructor(t){l.set(this,void 0),r(this,l,t,"f")}unwrap(){if(null==e(this,l,"f"))throw new Error("Data in none");return e(this,l,"f")}then(t){if(null==e(this,l,"f"))return new v(v.None);try{return new v(t(e(this,l,"f")))}catch(t){return new v(v.None)}}or(t){return this.isNone?t:this}}l=new WeakMap,v.None=void 0;class m{get isError(){return e(this,u,"f")instanceof Error}constructor(t){u.set(this,void 0),r(this,u,t,"f")}unwrap(){if(this.isError)throw e(this,u,"f");return e(this,u,"f")}then(t){if(console.log(e(this,u,"f")),this.isError)return new m(e(this,u,"f"));try{return new m(t(e(this,u,"f")))}catch(t){return new m(t)}}catch(t){if(!this.isError)return new m(e(this,u,"f"));try{return new m(t(e(this,u,"f")))}catch(t){return new m(t)}}}u=new WeakMap;a=new WeakMap;class p{constructor(t,e){this.data=t,this.next=null!=e?e:null}[Symbol.iterator](){let t=this;return{next(){if(t){const e=t;return t=t.next,{done:!1,value:e.data}}return{done:!0,value:null}},[Symbol.iterator](){return this}}}}class y{get first(){var t,e;return null!==(e=null===(t=this.firstNode)||void 0===t?void 0:t.data)&&void 0!==e?e:null}get length(){return this.lengthList}constructor(t){if(this.firstNode=null,this.lengthList=0,t)for(const e of t)this.insertFirst(e)}[Symbol.iterator](){return this.firstNode?this.firstNode[Symbol.iterator]():{next:()=>({done:!0,value:null}),[Symbol.iterator](){return this}}}insertFirst(t){const e=new p(t);this.lengthList++,e.next=this.firstNode,this.firstNode=e}removeFirst(){if(null===this.firstNode)return null;const t=this.firstNode;return this.lengthList--,this.firstNode=this.firstNode.next,t.data}reverse(){if(this.isEmpty())return;let t=null,e=this.firstNode,r=null;for(;null!==e;)r=e.next,e.next=t,t=e,e=r;this.firstNode=t}isEmpty(){return null===this.firstNode}clear(){this.lengthList=0,this.firstNode=null}}class x{constructor(t,e){this.data=t,this.next=null!=e?e:null}[Symbol.iterator](){let t=this;return{next(){if(t){const e=t;return t=t.next,{done:!1,value:e.data}}return{done:!0,value:null}},[Symbol.iterator](){return this}}}}class N{get first(){var t,e;return null!==(e=null===(t=this.firstNode)||void 0===t?void 0:t.data)&&void 0!==e?e:null}get last(){var t,e;return null!==(e=null===(t=this.lastNode)||void 0===t?void 0:t.data)&&void 0!==e?e:null}get length(){return this.lengthList}constructor(t){if(this.firstNode=null,this.lastNode=null,this.lengthList=0,t)for(const e of t)this.insertFirst(e)}[Symbol.iterator](){return this.firstNode?this.firstNode[Symbol.iterator]():{next:()=>({done:!0,value:null}),[Symbol.iterator](){return this}}}insertFirst(t){const e=new x(t);this.lengthList++,null===this.firstNode&&(this.lastNode=e),e.next=this.firstNode,this.firstNode=e}removeFirst(){if(null===this.firstNode)return null;null===this.firstNode.next&&(this.lastNode=null);const t=this.firstNode;return this.lengthList--,this.firstNode=this.firstNode.next,t.data}insertLast(t){const e=new x(t);if(this.lengthList++,null===this.lastNode)return this.firstNode=e,void(this.lastNode=e);this.lastNode.next=e,this.lastNode=e}reverse(){if(this.isEmpty())return;let t=null,e=null,r=this.firstNode;for(;null!==r;)e=r.next,r.next=t,t=r,r=e;[this.lastNode,this.firstNode]=[this.firstNode,t]}isEmpty(){return null===this.firstNode&&null===this.lastNode}clear(){this.firstNode=null,this.lastNode=null,this.lengthList=0}}class w{constructor(t,e,r){this.data=t,this.prev=null!=e?e:null,this.next=null!=r?r:null}[Symbol.iterator](){let t=this;return{next(){if(t){const e=t;return t=t.next,{done:!1,value:e.data}}return{done:!0,value:null}},[Symbol.iterator](){return this}}}}class S{get first(){var t,e;return null!==(e=null===(t=this.firstNode)||void 0===t?void 0:t.data)&&void 0!==e?e:null}get last(){var t,e;return null!==(e=null===(t=this.lastNode)||void 0===t?void 0:t.data)&&void 0!==e?e:null}get length(){return this.lengthList}constructor(t){if(this.firstNode=null,this.lastNode=null,this.lengthList=0,t)for(const e of t)this.insertFirst(e)}[Symbol.iterator](){return this.firstNode?this.firstNode[Symbol.iterator]():{next:()=>({done:!0,value:null}),[Symbol.iterator](){return this}}}insertFirst(t){const e=new w(t);null==this.firstNode?this.lastNode=e:this.firstNode.prev=e,e.next=this.firstNode,this.firstNode=e}removeFirst(){if(null==this.firstNode)return null;const t=this.firstNode;return null===this.firstNode.next?this.lastNode=null:this.firstNode.next.prev=null,this.firstNode=this.firstNode.next,t.data}insertLast(t){const e=new w(t);null===this.lastNode?this.firstNode=e:(this.lastNode.next=e,e.prev=this.lastNode),this.lastNode=e}removeLast(){if(null==this.firstNode)return null;if(null==this.lastNode)return null;const t=this.lastNode;return null===this.lastNode.prev?this.firstNode=null:this.lastNode.prev.next=null,this.lastNode=this.lastNode.prev,t.data}isEmpty(){return null==this.firstNode&&null==this.lastNode}clear(){this.firstNode=null,this.lastNode=null}}class g{constructor(){h.add(this)}log(t,...e){console.log(t,...e)}warn(t,...e){console.warn(t,...e)}error(t,...e){console.error(t,...e)}}h=new WeakSet;c=new WeakMap;class b{get first(){return this.innerStruct.first}get last(){return this.innerStruct.last}get length(){return this.innerStruct.length}constructor(t){this.innerStruct=new N(t)}[Symbol.iterator](){return this.innerStruct[Symbol.iterator]()}insert(t){this.innerStruct.insertLast(t)}remove(){return this.innerStruct.removeFirst()}isEmpty(){return this.innerStruct.isEmpty()}clear(){this.innerStruct.clear()}}class E{get first(){return this.innerStruct.first}get last(){return this.innerStruct.last}get length(){return this.innerStruct.length}constructor(t){this.innerStruct=new S(t)}[Symbol.iterator](){return this.innerStruct[Symbol.iterator]()}insertFirst(t){this.innerStruct.insertFirst(t)}removeFirst(){return this.innerStruct.removeFirst()}insertLast(t){this.innerStruct.insertLast(t)}removeLast(){return this.innerStruct.removeLast()}isEmpty(){return this.innerStruct.isEmpty()}clear(){this.innerStruct.clear()}}class L{constructor(t,e){var r;if(e&&typeof t!=typeof e)throw new TypeError("Start and end must be of the same type.");this.type="number"==typeof t?"number":"string",this.start="number"==typeof t?t:t.charCodeAt(0),this.end=null!==(r="number"==typeof e?e:null==e?void 0:e.charCodeAt(0))&&void 0!==r?r:1/0}[Symbol.iterator](){let t=this.start;const e=this;return"number"===this.type?{next:()=>t<=e.end?{value:t++,done:!1}:{value:null,done:!0},[Symbol.iterator](){return this}}:{next:()=>t<=e.end?{value:String.fromCharCode(t++),done:!1}:{value:null,done:!0},[Symbol.iterator](){return this}}}}class F{constructor(){f.set(this,void 0),r(this,f,new N,"f")}[(f=new WeakMap,Symbol.iterator)](){return e(this,f,"f")[Symbol.iterator]()}insert(t){e(this,f,"f").insertFirst(t)}remove(){return e(this,f,"f").removeFirst()}isEmpty(){return e(this,f,"f").isEmpty()}clear(){e(this,f,"f").clear()}}function k(t){const e=/^.+$/gm;let r=e.exec(t);return{next(){if(r){const n=r[0];return r=e.exec(t),{value:n,done:!1}}return{value:null,done:!0}},[Symbol.iterator](){return this}}}function P(t){const e=/\b[^\s]+\b/g;let r=e.exec(t);return{next(){if(r){const n=r[0];return r=e.exec(t),{value:n,done:!1}}return{value:null,done:!0}},[Symbol.iterator](){return this}}}exports.CacheData=class{constructor(t){var e;o.set(this,void 0),r(this,o,null!==(e=null==t?void 0:t.strategy)&&void 0!==e?e:new d,"f")}get(t){return e(this,o,"f").get(t)}hasKey(t){return e(this,o,"f").hasKey(t)}set(t,r){e(this,o,"f").set(t,r)}remove(t){e(this,o,"f").remove(t)}clear(){e(this,o,"f").clear()}isEmpty(){return e(this,o,"f").isEmpty()}isFull(){return e(this,o,"f").isFull()}},exports.ConsoleEngine=g,exports.Deque=E,exports.DoubleList=S,exports.EventEmitter=class{get handlers(){return e(this,a,"f")}constructor(){a.set(this,void 0),r(this,a,new Map,"f")}hasKey(t){return e(this,a,"f").has(t)}clear(){e(this,a,"f").clear()}once(t,r){const n=e(this,a,"f").get(t),s=i=>{r(i),n?n.delete(s):e(this,a,"f").delete(t)};n?n.add(s):e(this,a,"f").set(t,new Set([s]))}on(t,r){const n=e(this,a,"f").get(t);n?n.add(r):e(this,a,"f").set(t,new Set([r]))}off(t,r){if(!r)return void e(this,a,"f").delete(t);const n=e(this,a,"f").get(t);n&&n.delete(r)}emit(t,r){const n=e(this,a,"f").get(t);if(n)for(const t of n)t(r)}},exports.FirstLastList=N,exports.LRUCache=class{constructor(t){var e;n.set(this,void 0),s.set(this,void 0),r(this,s,null!==(e=null==t?void 0:t.maxSize)&&void 0!==e?e:10,"f"),r(this,n,new Map([]),"f")}hasKey(t){return e(this,n,"f").has(t)}get(t){const r=e(this,n,"f").get(t);if(r)return e(this,n,"f").delete(t),e(this,n,"f").set(t,r),r}set(t,r){e(this,n,"f").has(t)&&e(this,n,"f").delete(t),e(this,s,"f")<=e(this,n,"f").size&&e(this,n,"f").delete(e(this,n,"f").keys().next().value),e(this,n,"f").set(t,r)}remove(t){e(this,n,"f").delete(t)}clear(){e(this,n,"f").clear()}isEmpty(){return 0===e(this,n,"f").size}isFull(){return e(this,n,"f").size===e(this,s,"f")}},exports.LinkedList=y,exports.Logger=class{constructor(t,e){var n;c.set(this,void 0),this.namespace=t,r(this,c,null!==(n=null==e?void 0:e.engine)&&void 0!==n?n:new g,"f")}log(t,...r){e(this,c,"f").log(t,...r)}warn(t,...r){e(this,c,"f").warn(t,...r)}error(t,...r){e(this,c,"f").error(t,...r)}},exports.Option=v,exports.Queue=b,exports.Range=L,exports.Result=m,exports.SimpleCache=d,exports.Stack=F,exports.asyncForeach=function(e,r=100,n=200){const s=e[Symbol.iterator]();let i,o=Date.now();return{[Symbol.asyncIterator](){return this},next(){return t(this,void 0,void 0,(function*(){const t=s.next();return Date.now()-o>r?(yield new Promise(((t,e)=>{i=setTimeout((()=>{o=Date.now(),clearTimeout(i),t("setTimeout is done")}),n)})).then((t=>{console.log(t)})),Promise.resolve(t)):Promise.resolve(t)}))}}},exports.debounce=function(t,e){let r;return function(...n){null!=r&&clearTimeout(r),r=setTimeout((()=>{t.apply(this,n),r=null}),e)}},exports.enumerate=function(t){const e=t[Symbol.iterator]();let r=1;return{[Symbol.iterator](){return this},next(){const t=e.next();return t.done?t:{value:[r++,t.value],done:t.done}}}},exports.filter=function(t,e,r){const n=t[Symbol.iterator]();let s=0;return{[Symbol.iterator](){return this},next(){let i=n.next(),o=e.call(r,i.value,s++,t);for(;!i.done&&!o;)i=n.next(),o=e.call(r,i.value,s++,t);return i}}},exports.iterInterval=function(e,r){const n=e[Symbol.asyncIterator]();return{[Symbol.asyncIterator](){return this},next(){return t(this,void 0,void 0,(function*(){const t=n.next();return yield new Promise(((e,n)=>{const s=setTimeout((()=>{clearTimeout(s),e(t)}),r)})),Promise.resolve(t)}))}}},exports.lines=function(t){return[...k(t)]},exports.linesIter=k,exports.map=function(t,e,r){const n=t[Symbol.iterator]();let s=0;return{[Symbol.iterator](){return this},next(){const i=n.next();return i.done?i:{value:e.call(r,i.value,s++,t),done:i.done}}}},exports.repeat=function(t,e){if(0===e)return{[Symbol.iterator](){return this},next:()=>({value:null,done:!0})};let r=t[Symbol.iterator](),n=1;return{[Symbol.iterator](){return this},next(){let s=r.next();return s.done&&n>=e?{value:null,done:!0}:(s.done&&(n++,r=t[Symbol.iterator](),s=r.next()),{value:s.value,done:!1})}}},exports.streamEvent=function(t,e){const r=new Set,n=[];return t.on(e,(function(t){if(r.size>0)try{r.forEach((e=>e(t)))}finally{r.clear()}else n.push(t)})),{[Symbol.asyncIterator](){return this},next:()=>new Promise((t=>{const e=n.shift();e?t({done:!1,value:e}):r.add((e=>t({done:!1,value:e})))}))}},exports.symbolGenerator=function(){return new Proxy({},{get:(t,e)=>e in t?t[e]:t[e]=Symbol(String(e))})},exports.take=function(t,e){const r=t[Symbol.iterator]();let n=0;return{[Symbol.iterator](){return this},next(){const t=r.next();return!t.done&&n++<e?{value:t.value,done:t.done}:{value:null,done:!0}}}},exports.throttle=function(t,e){let r,n=[];return function s(...i){n=i,null==r&&(t.apply(this,i),r=setTimeout((()=>{r=null,n!==i&&s.apply(this,n)}),e))}},exports.unLines=function(t){const e=[...t];return 0===e.length?"":e.join("\n")},exports.unWords=function(t,e=" "){const r=[...t];return 0===r.length?"":r.join(e)},exports.watch=function t(e,r,n=[]){const s=new Proxy(e,{get(e,s,i){const o=Reflect.get(e,s,i);if("function"==typeof o&&/\[native code]/.test(o.toString())){if(Array.isArray(e))return o;if(e instanceof Map)switch(s){case"set":return(t,s)=>(r(s,e.get(t),[...n,t]),o.call(e,t,s));case"get":return i=>{const l=o.call(e,i);if(null!=l&&"object"==typeof l)return t(l,r,[...n,s])}}}return null!=o&&"object"==typeof o?t(o,r,[...n,s]):o},set(t,e,s,i){const o=Reflect.get(t,e,i),l=Reflect.set(t,e,s,i);return l&&r(s,o,[...n,e]),l},deleteProperty(t,e){const i=Reflect.get(t,e,s),o=Reflect.deleteProperty(t,e);return o&&r(void 0,i,[...n,e]),o}});return s},exports.words=function(t){return[...P(t)]},exports.wordsIter=P;
//# sourceMappingURL=bundle.cjs.map
