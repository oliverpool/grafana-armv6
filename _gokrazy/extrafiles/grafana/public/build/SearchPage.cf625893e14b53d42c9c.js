"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1281],{"./public/app/features/search/page/SearchPage.tsx":(e,t,r)=>{r.r(t),r.d(t,{default:()=>be});var n=r("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a=r("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),i=r("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/3/opt/drone/yarncache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),s=r("./packages/grafana-runtime/src/index.ts"),l=r("./packages/grafana-ui/src/index.ts"),u=r("./public/app/core/components/Page/Page.tsx"),c=r("./public/app/core/components/TagFilter/TagFilter.tsx"),d=r("./public/app/features/search/hooks/useSearchQuery.ts"),h=r("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)};function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function v(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}var y,g="KEYS",m="VALUES",x="",w=function(){function e(e,t){var r=e._tree,n=Array.from(r.keys());this.set=e,this._type=t,this._path=n.length>0?[{node:r,keys:n}]:[]}return e.prototype.next=function(){var e=this.dive();return this.backtrack(),e},e.prototype.dive=function(){if(0===this._path.length)return{done:!0,value:void 0};var e=F(this._path),t=e.node,r=e.keys;if(F(r)===x)return{done:!1,value:this.result()};var n=t.get(F(r));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()},e.prototype.backtrack=function(){if(0!==this._path.length){var e=F(this._path).keys;e.pop(),e.length>0||(this._path.pop(),this.backtrack())}},e.prototype.key=function(){return this.set._prefix+this._path.map((function(e){var t=e.keys;return F(t)})).filter((function(e){return e!==x})).join("")},e.prototype.value=function(){return F(this._path).node.get(x)},e.prototype.result=function(){switch(this._type){case m:return this.value();case g:return this.key();default:return[this.key(),this.value()]}},e.prototype[Symbol.iterator]=function(){return this},e}(),F=function(e){return e[e.length-1]},b=function(e,t,r,n,o,a,i,s){var l,u,c=a*i;try{e:for(var d=p(e.keys()),h=d.next();!h.done;h=d.next()){var f=h.value;if(f===x){var v=o[c-1];v<=r&&n.set(s,[e.get(f),v])}else{for(var y=a,g=0;g<f.length;++g,++y){for(var m=f[g],w=i*y,F=w-i,_=o[w],k=Math.max(0,y-r-1),A=Math.min(i-1,y+r),C=k;C<A;++C){var j=m!==t[C],D=o[F+C]+ +j,z=o[F+C+1]+1,I=o[w+C]+1,E=o[w+C+1]=Math.min(D,z,I);E<_&&(_=E)}if(_>r)continue e}b(e.get(f),t,r,n,o,y,i,s+f)}}}catch(e){l={error:e}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(l)throw l.error}}},_=function(){function e(e,t){void 0===e&&(e=new Map),void 0===t&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return e.prototype.atPrefix=function(t){var r,n;if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");var o=v(k(this._tree,t.slice(this._prefix.length)),2),a=o[0],i=o[1];if(void 0===a){var s=v(I(i),2),l=s[0],u=s[1];try{for(var c=p(l.keys()),d=c.next();!d.done;d=c.next()){var h=d.value;if(h!==x&&h.startsWith(u)){var f=new Map;return f.set(h.slice(u.length),l.get(h)),new e(f,t)}}}catch(e){r={error:e}}finally{try{d&&!d.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}}return new e(a,t)},e.prototype.clear=function(){this._size=void 0,this._tree.clear()},e.prototype.delete=function(e){return this._size=void 0,j(this._tree,e)},e.prototype.entries=function(){return new w(this,"ENTRIES")},e.prototype.forEach=function(e){var t,r;try{for(var n=p(this),o=n.next();!o.done;o=n.next()){var a=v(o.value,2);e(a[0],a[1],this)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.fuzzyGet=function(e,t){return function(e,t,r){var n=new Map;if(void 0===t)return n;for(var o=t.length+1,a=o+r,i=new Uint8Array(a*o).fill(r+1),s=0;s<o;++s)i[s]=s;for(var l=1;l<a;++l)i[l*o]=l;return b(e,t,r,n,i,1,o,""),n}(this._tree,e,t)},e.prototype.get=function(e){var t=A(this._tree,e);return void 0!==t?t.get(x):void 0},e.prototype.has=function(e){var t=A(this._tree,e);return void 0!==t&&t.has(x)},e.prototype.keys=function(){return new w(this,g)},e.prototype.set=function(e,t){if("string"!=typeof e)throw new Error("key must be a string");return this._size=void 0,C(this._tree,e).set(x,t),this},Object.defineProperty(e.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),e.prototype.update=function(e,t){if("string"!=typeof e)throw new Error("key must be a string");this._size=void 0;var r=C(this._tree,e);return r.set(x,t(r.get(x))),this},e.prototype.fetch=function(e,t){if("string"!=typeof e)throw new Error("key must be a string");this._size=void 0;var r=C(this._tree,e),n=r.get(x);return void 0===n&&r.set(x,n=t()),n},e.prototype.values=function(){return new w(this,m)},e.prototype[Symbol.iterator]=function(){return this.entries()},e.from=function(t){var r,n,o=new e;try{for(var a=p(t),i=a.next();!i.done;i=a.next()){var s=v(i.value,2),l=s[0],u=s[1];o.set(l,u)}}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return o},e.fromObject=function(t){return e.from(Object.entries(t))},e}(),k=function(e,t,r){var n,o;if(void 0===r&&(r=[]),0===t.length||null==e)return[e,r];try{for(var a=p(e.keys()),i=a.next();!i.done;i=a.next()){var s=i.value;if(s!==x&&t.startsWith(s))return r.push([e,s]),k(e.get(s),t.slice(s.length),r)}}catch(e){n={error:e}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}return r.push([e,t]),k(void 0,"",r)},A=function(e,t){var r,n;if(0===t.length||null==e)return e;try{for(var o=p(e.keys()),a=o.next();!a.done;a=o.next()){var i=a.value;if(i!==x&&t.startsWith(i))return A(e.get(i),t.slice(i.length))}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},C=function(e,t){var r,n,o=t.length;e:for(var a=0;e&&a<o;){try{for(var i=(r=void 0,p(e.keys())),s=i.next();!s.done;s=i.next()){var l=s.value;if(l!==x&&t[a]===l[0]){for(var u=Math.min(o-a,l.length),c=1;c<u&&t[a+c]===l[c];)++c;var d=e.get(l);if(c===l.length)e=d;else{var h=new Map;h.set(l.slice(c),d),e.set(t.slice(a,a+c),h),e.delete(l),e=h}a+=c;continue e}}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}var f=new Map;return e.set(t.slice(a),f),f}return e},j=function(e,t){var r=v(k(e,t),2),n=r[0],o=r[1];if(void 0!==n)if(n.delete(x),0===n.size)D(o);else if(1===n.size){var a=v(n.entries().next().value,2),i=a[0],s=a[1];z(o,i,s)}},D=function(e){if(0!==e.length){var t=v(I(e),2),r=t[0],n=t[1];if(r.delete(n),0===r.size)D(e.slice(0,-1));else if(1===r.size){var o=v(r.entries().next().value,2),a=o[0],i=o[1];a!==x&&z(e.slice(0,-1),a,i)}}},z=function(e,t,r){if(0!==e.length){var n=v(I(e),2),o=n[0],a=n[1];o.set(a+t,r),o.delete(a)}},I=function(e){return e[e.length-1]},E="or",S=function(){function e(e){if(null==(null==e?void 0:e.fields))throw new Error('MiniSearch: option "fields" must be provided');this._options=f(f(f({},B),e),{searchOptions:f(f({},N),e.searchOptions||{})}),this._index=new _,this._documentCount=0,this._documentIds=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this.addFields(this._options.fields)}return e.prototype.add=function(e){var t,r,n,o,a=this._options,i=a.extractField,s=a.tokenize,l=a.processTerm,u=a.fields,c=a.idField,d=i(e,c);if(null==d)throw new Error('MiniSearch: document does not have ID field "'.concat(c,'"'));var h=this.addDocumentId(d);this.saveStoredFields(h,e);try{for(var f=p(u),v=f.next();!v.done;v=f.next()){var y=v.value,g=i(e,y);if(null!=g){var m=s(g.toString(),y),x=this._fieldIds[y],w=new Set(m).size;this.addFieldLength(h,x,this._documentCount-1,w);try{for(var F=(n=void 0,p(m)),b=F.next();!b.done;b=F.next()){var _=l(b.value,y);_&&this.addTerm(x,h,_)}}catch(e){n={error:e}}finally{try{b&&!b.done&&(o=F.return)&&o.call(F)}finally{if(n)throw n.error}}}}}catch(e){t={error:e}}finally{try{v&&!v.done&&(r=f.return)&&r.call(f)}finally{if(t)throw t.error}}},e.prototype.addAll=function(e){var t,r;try{for(var n=p(e),o=n.next();!o.done;o=n.next()){var a=o.value;this.add(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}},e.prototype.addAllAsync=function(e,t){var r=this;void 0===t&&(t={});var n=t.chunkSize,o=void 0===n?10:n,a={chunk:[],promise:Promise.resolve()},i=e.reduce((function(e,t,n){var a=e.chunk,i=e.promise;return a.push(t),(n+1)%o==0?{chunk:[],promise:i.then((function(){return new Promise((function(e){return setTimeout(e,0)}))})).then((function(){return r.addAll(a)}))}:{chunk:a,promise:i}}),a),s=i.chunk;return i.promise.then((function(){return r.addAll(s)}))},e.prototype.remove=function(e){var t,r,n,o,a,i,s=this._options,l=s.tokenize,u=s.processTerm,c=s.extractField,d=s.fields,h=s.idField,f=c(e,h);if(null==f)throw new Error('MiniSearch: document does not have ID field "'.concat(h,'"'));try{for(var y=p(this._documentIds),g=y.next();!g.done;g=y.next()){var m=v(g.value,2),x=m[0];if(f===m[1]){try{for(var w=(n=void 0,p(d)),F=w.next();!F.done;F=w.next()){var b=F.value,_=c(e,b);if(null!=_){var k=l(_.toString(),b),A=this._fieldIds[b],C=new Set(k).size;this.removeFieldLength(x,A,this._documentCount,C);try{for(var j=(a=void 0,p(k)),D=j.next();!D.done;D=j.next()){var z=u(D.value,b);z&&this.removeTerm(A,x,z)}}catch(e){a={error:e}}finally{try{D&&!D.done&&(i=j.return)&&i.call(j)}finally{if(a)throw a.error}}}}}catch(e){n={error:e}}finally{try{F&&!F.done&&(o=w.return)&&o.call(w)}finally{if(n)throw n.error}}return this._storedFields.delete(x),this._documentIds.delete(x),this._fieldLength.delete(x),void(this._documentCount-=1)}}}catch(e){t={error:e}}finally{try{g&&!g.done&&(r=y.return)&&r.call(y)}finally{if(t)throw t.error}}throw new Error("MiniSearch: cannot remove document with ID ".concat(f,": it is not in the index"))},e.prototype.removeAll=function(e){var t,r;if(e)try{for(var n=p(e),o=n.next();!o.done;o=n.next()){var a=o.value;this.remove(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new _,this._documentCount=0,this._documentIds=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},e.prototype.search=function(e,t){var r,n;void 0===t&&(t={});var o=this.executeQuery(e,t),a=[];try{for(var i=p(o),s=i.next();!s.done;s=i.next()){var l=v(s.value,2),u=l[0],c=l[1],d=c.score,h=c.terms,f=c.match,y=h.length,g={id:this._documentIds.get(u),score:d*y,terms:Object.keys(f),match:f};Object.assign(g,this._storedFields.get(u)),(null==t.filter||t.filter(g))&&a.push(g)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a.sort(W),a},e.prototype.autoSuggest=function(e,t){var r,n,o,a;void 0===t&&(t={}),t=f(f({},P),t);var i=new Map;try{for(var s=p(this.search(e,t)),l=s.next();!l.done;l=s.next()){var u=l.value,c=u.score,d=(F=u.terms).join(" ");null!=(x=i.get(d))?(x.score+=c,x.count+=1):i.set(d,{score:c,terms:F,count:1})}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}var h=[];try{for(var y=p(i),g=y.next();!g.done;g=y.next()){var m=v(g.value,2),x=m[0],w=m[1],F=(c=w.score,w.terms),b=w.count;h.push({suggestion:x,terms:F,score:c/b})}}catch(e){o={error:e}}finally{try{g&&!g.done&&(a=y.return)&&a.call(y)}finally{if(o)throw o.error}}return h.sort(W),h},Object.defineProperty(e.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),e.loadJSON=function(t,r){if(null==r)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return e.loadJS(JSON.parse(t),r)},e.getDefault=function(e){if(B.hasOwnProperty(e))return T(B,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},e.loadJS=function(t,r){var n,o,a,i,s=t.index,l=t.documentCount,u=t.nextId,c=t.documentIds,d=t.fieldIds,h=t.fieldLength,f=t.averageFieldLength,y=t.storedFields,g=t.serializationVersion;if(1!==g&&2!==g)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var m=new e(r);m._documentCount=l,m._nextId=u,m._documentIds=H(c),m._fieldIds=d,m._fieldLength=H(h),m._avgFieldLength=f,m._storedFields=H(y),m._index=new _;try{for(var x=p(s),w=x.next();!w.done;w=x.next()){var F=v(w.value,2),b=F[0],k=F[1],A=new Map;try{for(var C=(a=void 0,p(Object.keys(k))),j=C.next();!j.done;j=C.next()){var D=j.value,z=k[D];1===g&&(z=z.ds),A.set(parseInt(D,10),H(z))}}catch(e){a={error:e}}finally{try{j&&!j.done&&(i=C.return)&&i.call(C)}finally{if(a)throw a.error}}m._index.set(b,A)}}catch(e){n={error:e}}finally{try{w&&!w.done&&(o=x.return)&&o.call(x)}finally{if(n)throw n.error}}return m},e.prototype.executeQuery=function(e,t){var r=this;if(void 0===t&&(t={}),"string"!=typeof e){var n=f(f(f({},t),e),{queries:void 0}),o=e.queries.map((function(e){return r.executeQuery(e,n)}));return this.combineResults(o,e.combineWith)}var a=this._options,i=a.tokenize,s=a.processTerm,l=a.searchOptions,u=f(f({tokenize:i,processTerm:s},l),t),c=u.tokenize,d=u.processTerm,h=c(e).map((function(e){return d(e)})).filter((function(e){return!!e})).map(L(u)).map((function(e){return r.executeQuerySpec(e,u)}));return this.combineResults(h,u.combineWith)},e.prototype.executeQuerySpec=function(e,t){var r,n,o,a,i,s,l=f(f({},this._options.searchOptions),t),u=(l.fields||this._options.fields).reduce((function(e,t){var r;return f(f({},e),((r={})[t]=T(e,t)||1,r))}),l.boost||{}),c=l.boostDocument,d=l.weights,h=l.maxFuzzy,y=f(f({},N.weights),d),g=y.fuzzy,m=y.prefix,x=this._index.get(e.term),w=this.termResults(e.term,e.term,1,x,u,c);if(e.prefix&&(i=this._index.atPrefix(e.term)),e.fuzzy){var F=!0===e.fuzzy?.2:e.fuzzy,b=F<1?Math.min(h,Math.round(e.term.length*F)):F;b&&(s=this._index.fuzzyGet(e.term,b))}if(i)try{for(var _=p(i),k=_.next();!k.done;k=_.next()){var A=v(k.value,2),C=A[0],j=A[1];if(E=C.length-e.term.length){null==s||s.delete(C);var D=m*C.length/(C.length+.3*E);this.termResults(e.term,C,D,j,u,c,w)}}}catch(e){r={error:e}}finally{try{k&&!k.done&&(n=_.return)&&n.call(_)}finally{if(r)throw r.error}}if(s)try{for(var z=p(s.keys()),I=z.next();!I.done;I=z.next()){C=I.value;var E,S=v(s.get(C),2),M=S[0];if(E=S[1]){D=g*C.length/(C.length+E);this.termResults(e.term,C,D,M,u,c,w)}}}catch(e){o={error:e}}finally{try{I&&!I.done&&(a=z.return)&&a.call(z)}finally{if(o)throw o.error}}return w},e.prototype.combineResults=function(e,t){if(void 0===t&&(t=E),0===e.length)return new Map;var r=t.toLowerCase();return e.reduce(M[r])||new Map},e.prototype.toJSON=function(){var e,t,r,n,o=[];try{for(var a=p(this._index),i=a.next();!i.done;i=a.next()){var s=v(i.value,2),l=s[0],u=s[1],c={};try{for(var d=(r=void 0,p(u)),h=d.next();!h.done;h=d.next()){var f=v(h.value,2),y=f[0],g=f[1];c[y]=Object.fromEntries(g)}}catch(e){r={error:e}}finally{try{h&&!h.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}o.push([l,c])}}catch(t){e={error:t}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),index:o,serializationVersion:2}},e.prototype.termResults=function(e,t,r,n,o,a,i){var s,l,u,c,d;if(void 0===i&&(i=new Map),null==n)return i;try{for(var h=p(Object.keys(o)),f=h.next();!f.done;f=h.next()){var v=f.value,y=o[v],g=this._fieldIds[v],m=n.get(g);if(null!=m){var x=m.size,w=this._avgFieldLength[g];try{for(var F=(u=void 0,p(m.keys())),b=F.next();!b.done;b=F.next()){var _=b.value,k=a?a(this._documentIds.get(_),t):1;if(k){var A=m.get(_),C=this._fieldLength.get(_)[g],j=r*y*k*O(A,x,this._documentCount,C,w),D=i.get(_);if(D){D.score+=j,V(D.terms,e);var z=T(D.match,t);z?z.push(v):D.match[t]=[v]}else i.set(_,{score:j,terms:[e],match:(d={},d[t]=[v],d)})}}}catch(e){u={error:e}}finally{try{b&&!b.done&&(c=F.return)&&c.call(F)}finally{if(u)throw u.error}}}}}catch(e){s={error:e}}finally{try{f&&!f.done&&(l=h.return)&&l.call(h)}finally{if(s)throw s.error}}return i},e.prototype.addTerm=function(e,t,r){var n=this._index.fetch(r,G),o=n.get(e);if(null==o)(o=new Map).set(t,1),n.set(e,o);else{var a=o.get(t);o.set(t,(a||0)+1)}},e.prototype.removeTerm=function(e,t,r){if(this._index.has(r)){var n=this._index.fetch(r,G),o=n.get(e);null==o||null==o.get(t)?this.warnDocumentChanged(t,e,r):o.get(t)<=1?o.size<=1?n.delete(e):o.delete(t):o.set(t,o.get(t)-1),0===this._index.get(r).size&&this._index.delete(r)}else this.warnDocumentChanged(t,e,r)},e.prototype.warnDocumentChanged=function(e,t,r){var n,o;if(null!=console&&null!=console.warn)try{for(var a=p(Object.keys(this._fieldIds)),i=a.next();!i.done;i=a.next()){var s=i.value;if(this._fieldIds[s]===t)return void console.warn("MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(r,'" was not present in field "').concat(s,'". Removing a document after it has changed can corrupt the index!'))}}catch(e){n={error:e}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}},e.prototype.addDocumentId=function(e){var t=this._nextId;return this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},e.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},e.prototype.addFieldLength=function(e,t,r,n){var o=this._fieldLength.get(e);null==o&&this._fieldLength.set(e,o=[]),o[t]=n;var a=(this._avgFieldLength[t]||0)*r+n;this._avgFieldLength[t]=a/(r+1)},e.prototype.removeFieldLength=function(e,t,r,n){var o=this._avgFieldLength[t]*r-n;this._avgFieldLength[t]=o/(r-1)},e.prototype.saveStoredFields=function(e,t){var r,n,o=this._options,a=o.storeFields,i=o.extractField;if(null!=a&&0!==a.length){var s=this._storedFields.get(e);null==s&&this._storedFields.set(e,s={});try{for(var l=p(a),u=l.next();!u.done;u=l.next()){var c=u.value,d=i(t,c);void 0!==d&&(s[c]=d)}}catch(e){r={error:e}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}}},e}(),T=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},M=((y={}).or=function(e,t){var r,n;try{for(var o=p(t.keys()),a=o.next();!a.done;a=o.next()){var i=a.value,s=e.get(i);if(null==s)e.set(i,t.get(i));else{var l=t.get(i),u=l.score,c=l.terms,d=l.match;s.score=s.score+u,s.match=Object.assign(s.match,d),R(s.terms,c)}}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return e},y.and=function(e,t){var r,n,o=new Map;try{for(var a=p(t.keys()),i=a.next();!i.done;i=a.next()){var s=i.value,l=e.get(s);if(null!=l){var u=t.get(s),c=u.score,d=u.terms,h=u.match;R(l.terms,d),o.set(s,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,h)})}}}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return o},y.and_not=function(e,t){var r,n;try{for(var o=p(t.keys()),a=o.next();!a.done;a=o.next()){var i=a.value;e.delete(i)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return e},y),O=function(e,t,r,n,o){return Math.log(1+(r-t+.5)/(t+.5))*(.5+2.2*e/(e+1.2*(1-.7+.7*n/o)))},L=function(e){return function(t,r,n){return{term:t,fuzzy:"function"==typeof e.fuzzy?e.fuzzy(t,r,n):e.fuzzy||!1,prefix:"function"==typeof e.prefix?e.prefix(t,r,n):!0===e.prefix}}},B={idField:"id",extractField:function(e,t){return e[t]},tokenize:function(e,t){return e.split(q)},processTerm:function(e,t){return e.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[]},N={combineWith:E,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375}},P={prefix:function(e,t,r){return t===r.length-1}},V=function(e,t){e.includes(t)||e.push(t)},R=function(e,t){var r,n;try{for(var o=p(t),a=o.next();!a.done;a=o.next()){var i=a.value;e.includes(i)||e.push(i)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},W=function(e,t){var r=e.score;return t.score-r},G=function(){return new Map},H=function(e){var t,r,n=new Map;try{for(var o=p(Object.keys(e)),a=o.next();!a.done;a=o.next()){var i=a.value;n.set(parseInt(i,10),e[i])}}catch(e){t={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return n},q=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,J=r("./packages/grafana-data/src/index.ts"),$=r("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),Q=r("./public/app/plugins/datasource/grafana/types.ts");async function Z(){const e=await(0,s.getDataSourceSrv)().get("-- Grafana --"),t=await(0,$.n)(e.query({targets:[{refId:"A",queryType:Q.hR.Search}]})),r={};for(const e of t.data){const t=e;for(const e of t.fields){if("tags"===e.name||"datasource"===e.name){const t=e.values.toArray().map((e=>{if(null!=e&&e.length)try{const t=JSON.parse(e);return t.length?t:void 0}catch{}}));e.type=J.FieldType.other,e.values=new J.ArrayVector(t)}e.display=(0,J.getDisplayProcessor)({field:e,theme:s.config.theme2})}switch(t.meta={type:J.DataFrameType.DirectoryListing},t.name){case"dashboards":r.dashboard=t;break;case"panels":r.panel=t;break;case"folders":r.folder=t}}return r}function U(e,t){var r;if(!t)return e;const n=new J.DataFrameView(e),o=[],a=t.datasource?n.fields.datasource:void 0,i=null!==(r=t.tags)&&void 0!==r&&r.length?n.fields.tags:void 0;let s=!0;for(let e=0;e<n.length;e++){if(s=!0,i){const r=i.values.get(e);if(r){for(const e of t.tags)if(!r.includes(e)){s=!1;break}}else s=!1}if(s&&a&&t.datasource){s=!1;const r=a.values.get(e);if(r)for(const e of r)if(e.uid===t.datasource){s=!0;break}}s&&o.push(e)}return{meta:e.meta,name:e.name,fields:e.fields.map((e=>Object.assign({},e,{values:K(o,e.values)}))),length:o.length}}function K(e,t){const r=new Array(e.length);for(let n=0;n<e.length;n++)r[n]=t.get(e[n]);return new J.ArrayVector(r)}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class X{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z;Y(this,"lookup",new Map),Y(this,"data",{}),Y(this,"index",void 0),this.supplier=e,this.supplier=e}async initIndex(){const e=await this.supplier(),t=new S({idField:"__id",fields:["name","description","tags","type","tags"],searchOptions:{boost:{name:3,description:1},boostDocument:(e,t)=>{const r=e.kind;return"dashboard"===r?1.4:"folder"===r?1.2:1},prefix:!0,fuzzy:e=>e.length>4&&.2},extractField:(e,t)=>{if("__id"===t)return{kind:e.kind,index:e.index};const r=e[t];if(!r)return"";const n=r.get(e.index);return(0,h.isString)(n)?n:(0,h.isArray)(n)?n.join(" "):JSON.stringify(n)}}),r=new Map;for(const[n,o]of Object.entries(e)){const e=n,a=te(e,o);r.set(e,a);for(let e=0;e<o.length;e++)a.index=e,t.add(a)}const n=new Map,o=r.get("folder"),a=r.get("dashboard"),i=r.get("panel");if(null!=o&&o.id)for(let e=0;e<(null===(s=o.id)||void 0===s?void 0:s.length);e++){var s;n.set(o.id.get(e),e)}if(null!=a&&a.id&&null!=i&&i.dashboardID&&a.url){let e=new Array(a.id.length);const t=new Map;for(let r=0;r<(null===(l=a.id)||void 0===l?void 0:l.length);r++){var l,u;t.set(a.id.get(r),r);const i=null===(u=a.folder)||void 0===u?void 0:u.get(r);if(null!=i){var c;const t=n.get(i),a=null==o||null===(c=o.name)||void 0===c?void 0:c.get(t);a&&(e[r]=[{kind:"folder",name:a}])}}a.location=new J.ArrayVector(e),e=new Array(i.dashboardID.length);const r=new Array(e.length);for(let n=0;n<i.dashboardID.length;n++){const o=i.dashboardID.get(n),s=t.get(o);if(null!=s){var d,f,p,v;const t=null===(d=i.id)||void 0===d?void 0:d.get(n);r[n]=a.url.get(s)+"?viewPanel="+t;const o=null!==(f=a.location.get(s))&&void 0!==f?f:[],l=null!==(p=null===(v=a.name)||void 0===v?void 0:v.get(s))&&void 0!==p?p:"?";e[n]=[...o,{kind:"dashboard",name:l}]}}i.url=new J.ArrayVector(r),i.location=new J.ArrayVector(e)}this.index=t,this.data=e,this.lookup=r}async search(e,t){if(this.index||await this.initIndex(),!e&&this.data.dashboard)return{body:U(this.data.dashboard,t)};const r=this.index.search(e),n=[],o=[],a=[],i=[],l=[],u=[],c=[],d=[],h=[];for(const e of r){var f,p,v,y,g,m,x,w;const r=e.id,s=r.index,F=this.lookup.get(r.kind);F&&(t&&!ee(t,F,s)||(n.push(null!==(f=null===(p=F.url)||void 0===p?void 0:p.get(s))&&void 0!==f?f:"?"),u.push(null===(v=F.location)||void 0===v?void 0:v.get(s)),c.push(null===(y=F.datasource)||void 0===y?void 0:y.get(s)),l.push(null===(g=F.tags)||void 0===g?void 0:g.get(s)),o.push(r.kind),i.push(null!==(m=null===(x=F.name)||void 0===x?void 0:x.get(s))&&void 0!==m?m:"?"),a.push(null===(w=F.type)||void 0===w?void 0:w.get(s)),d.push(e.match),h.push(e.score)))}const F=[{name:"kind",config:{},type:J.FieldType.string,values:new J.ArrayVector(o)},{name:"name",config:{},type:J.FieldType.string,values:new J.ArrayVector(i)},{name:"url",config:{},type:J.FieldType.string,values:new J.ArrayVector(n)},{name:"type",config:{},type:J.FieldType.string,values:new J.ArrayVector(a)},{name:"info",config:{},type:J.FieldType.other,values:new J.ArrayVector(d)},{name:"tags",config:{},type:J.FieldType.other,values:new J.ArrayVector(l)},{name:"location",config:{},type:J.FieldType.other,values:new J.ArrayVector(u)},{name:"datasource",config:{},type:J.FieldType.other,values:new J.ArrayVector(c)},{name:"score",config:{},type:J.FieldType.number,values:new J.ArrayVector(h)}];for(const e of F)e.display=(0,J.getDisplayProcessor)({field:e,theme:s.config.theme2});return{body:{fields:F,length:o.length}}}}function ee(e,t,r){if(e.tags){var n;const o=null===(n=t.tags)||void 0===n?void 0:n.get(r);if(null==o||!o.length)return!1;for(const t of e.tags)if(!o.includes(t))return!1}let o=!0;if(e.datasource){var a;o=!1;const n=null===(a=t.datasource)||void 0===a?void 0:a.get(r);if(n)for(const t of n)if(t.uid===e.datasource){o=!0;break}}return o}function te(e,t){const r={kind:e,index:0};for(const e of t.fields)switch(e.name){case"name":case"Name":r.name=e.values;break;case"Description":case"Description":r.description=e.values;break;case"url":case"URL":r.url=e.values;break;case"uid":case"UID":r.uid=e.values;break;case"id":case"ID":r.id=e.values;break;case"Tags":case"tags":r.tags=e.values;break;case"DashboardID":case"dashboardID":r.dashboardID=e.values;break;case"Type":case"type":r.type=e.values;break;case"folderID":case"FolderID":r.folder=e.values;break;case"datasource":case"dsList":case"DSList":r.datasource=e.values}return r}let re;var ne=r("./.yarn/__virtual__/react-table-virtual-3932e42729/3/opt/drone/yarncache/react-table-npm-7.7.0-95e9357cd2-a679edecc7.zip/node_modules/react-table/index.js"),oe=r("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/3/opt/drone/yarncache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js"),ae=r("./packages/grafana-ui/src/components/Table/TableCell.tsx"),ie=r("./packages/grafana-ui/src/components/Table/styles.ts"),se=r("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/3/opt/drone/yarncache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js"),le=r("./packages/grafana-ui/src/components/Table/DefaultCell.tsx"),ue=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const ce=(e,t,r,n,o,a,i)=>{const u=[],c=(e.fields.url,e.fields);r-=8;let d=50;d=Math.max(.2*r,200),u.push({Cell:le.G,id:"column-name",field:c.name,Header:"Name",accessor:(e,t)=>c.name.values.get(t),width:d}),r-=d;var h;(d=130,t?(u.push({Cell:le.G,id:"column-type",field:c.name,Header:"Type",accessor:(e,t)=>(0,ue.jsxs)("div",{className:n.typeText,children:[(0,ue.jsx)(l.Icon,{name:"apps",className:n.typeIcon}),"Dashboard"]}),width:d}),r-=d):(u.push(function(e,t,r,n,o){return{Cell:le.G,id:"column-type",field:e,Header:"Type",accessor:(r,a)=>{const i=e.values.get(a);let l="public/img/icons/unicons/apps.svg",u="Dashboard";if(i)switch(u=i,u){case"dashboard":u="Dashboard";break;case"folder":l="public/img/icons/unicons/folder.svg",u="Folder";break;case"panel":l="public/img/icons/unicons/graph-bar.svg";const e=t.values.get(a);if(e){u=e;const t=s.config.panels[u];if(null!=t&&t.name){var c;const e=null===(c=t.info)||void 0===c?void 0:c.logos.small;e&&e.endsWith(".svg")&&(l=e),u=t.name}}}return(0,ue.jsxs)("div",{className:n,children:[(0,ue.jsx)(se.Z,{src:l,width:14,height:14,title:u,className:o}),u]})},width:r}}(c.kind,c.type,d,n.typeText,n.typeIcon)),r-=d),c.datasource&&de(c.datasource)&&(d=200,u.push(function(e,t,r,n){return{Cell:le.G,id:"column-datasource",field:e,Header:"Data source",accessor:(t,o)=>{const a=e.values.get(o);if(null!=a&&a.length){const e=(0,s.getDataSourceSrv)();return(0,ue.jsx)("div",{children:a.map(((t,o)=>{var a,i,s;const l=e.getInstanceSettings(t),u=null==l||null===(a=l.meta)||void 0===a||null===(i=a.info)||void 0===i||null===(s=i.logos)||void 0===s?void 0:s.small;return u?(0,ue.jsxs)("a",{href:`datasources/edit/${l.uid}`,onClick:e=>{e.stopPropagation(),e.preventDefault(),n(l.uid)},children:[(0,ue.jsx)(se.Z,{src:u,width:14,height:14,title:l.type,className:r}),l.name]},o):(0,ue.jsx)("span",{children:t.type},o)}))})}return null},width:t}}(c.datasource,d,n.typeIcon,i)),r-=d),t)?(d=100,u.push({Cell:le.G,id:"column-info",field:c.url,Header:"Info",accessor:(e,t)=>{var r;const o=null===(r=c.panelCount)||void 0===r?void 0:r.values.get(t);return(0,ue.jsx)("div",{className:n.infoWrap,children:null!=o&&(0,ue.jsxs)("span",{children:["Panels: ",o]})})},width:d}),r-=d):(u.push({Cell:le.G,id:"column-location",field:null!==(h=c.location)&&void 0!==h?h:c.url,Header:"Location",accessor:(e,t)=>{var r;const o=null===(r=c.location)||void 0===r?void 0:r.values.get(t);return o?(0,ue.jsx)("div",{children:o.map(((e,t)=>(0,ue.jsxs)("span",{className:n.locationItem,onClick:t=>{t.preventDefault(),alert("CLICK: "+e.name)},children:[(0,ue.jsx)(l.Icon,{name:he(e.kind)})," ",e.name]},t)))}):null},width:200}),r-=d);return c.tags&&de(c.tags)&&(d=Math.max(r,250),u.push(function(e,t,r,n,o){const a=e=>{n.includes(e)||o([...n,e])};return{Cell:le.G,id:"column-tags",field:e,Header:"Tags",accessor:(t,n)=>{const o=e.values.get(n);return o?(0,ue.jsx)(l.TagList,{className:r,tags:o,onClick:a}):null},width:t}}(c.tags,d,n.tagList,o,a))),u};function de(e){for(let t=0;t<e.values.length;t++){const r=e.values.get(t);if(r&&r.length)return!0}return!1}function he(e){return"dashboard"===e?"apps":"folder"===e?"folder":"question-circle"}const fe=["key"],pe=["key"];function ve(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}const ye=e=>{var t,r;let{data:n,width:a,tags:i,onTagFilterChange:s,onDatasourceChange:u}=e;const c=(0,l.useStyles2)(ge),d=(0,l.useStyles2)(ie.V),h=(0,o.useMemo)((()=>n.fields.length?Array(n.length).fill(0):[]),[n]),f=(0,o.useMemo)((()=>new J.DataFrameView(n)),[n]),p=(0,o.useMemo)((()=>{var e;const t=(null===(e=n.meta)||void 0===e?void 0:e.type)===J.DataFrameType.DirectoryListing;return ce(f,t,a,c,i,s,u)}),[null===(t=n.meta)||void 0===t?void 0:t.type,f,a,c,i,s,u]),v=(0,o.useMemo)((()=>({columns:p,data:h})),[p,h]),{getTableProps:y,getTableBodyProps:g,headerGroups:m,rows:x,prepareRow:w}=(0,ne.useTable)(v,ne.useBlockLayout),F=o.useCallback((e=>{var t;let{index:r,style:n}=e;const o=x[r];w(o);const a=null===(t=f.fields.url)||void 0===t?void 0:t.values.get(r);return(0,ue.jsx)("div",Object.assign({},o.getRowProps({style:n}),{className:c.rowContainer,children:o.cells.map(((e,t)=>"column-checkbox"===e.column.id||"column-tags"===e.column.id||"column-datasource"===e.column.id?(0,ue.jsx)("div",{className:c.cellWrapper,children:(0,ue.jsx)(ae.p,{tableStyles:d,cell:e,columnIndex:t,columnCount:o.cells.length},t)},t):(0,ue.jsx)("a",{href:a,children:(0,ue.jsx)("div",{className:c.cellWrapper,children:(0,ue.jsx)(ae.p,{tableStyles:d,cell:e,columnIndex:t,columnCount:o.cells.length},t)})},t)))}))}),[x,w,null===(r=f.fields.url)||void 0===r?void 0:r.values,c.rowContainer,c.cellWrapper,d]);return(0,ue.jsxs)("div",Object.assign({},y(),{style:{width:a},"aria-label":"Search result table",role:"table",children:[(0,ue.jsx)("div",{children:m.map((e=>{const t=e.getHeaderGroupProps(),{key:r}=t,n=ve(t,fe);return(0,ue.jsx)("div",Object.assign({},n,{className:c.headerRow,children:e.headers.map((e=>{const t=e.getHeaderProps(),{key:r}=t,n=ve(t,pe);return(0,ue.jsx)("div",Object.assign({},n,{role:"columnheader",className:c.headerCell,children:e.render("Header")}),r)}))}),r)}))}),(0,ue.jsx)("div",Object.assign({},g(),{children:x.length>0?(0,ue.jsx)(oe.t7,{height:500,itemCount:x.length,itemSize:d.rowHeight,width:"100%",className:c.tableBody,children:F}):(0,ue.jsx)("div",{className:c.noData,children:"No data"})}))]}))},ge=e=>{const t=e.colors.emphasize(e.colors.background.primary,.03);return{noData:n.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,table:n.css`
      width: 100%;
    `,tableBody:n.css`
      overflow: 'hidden auto';
    `,cellIcon:n.css`
      display: flex;
      align-items: center;
    `,cellWrapper:n.css`
      display: flex;
    `,headerCell:n.css`
      padding-top: 2px;
      padding-left: 10px;
    `,headerRow:n.css`
      background-color: ${e.colors.background.secondary};
      height: 36px;
      align-items: center;
    `,rowContainer:n.css`
      &:hover {
        background-color: ${t};
      }
    `,typeIcon:n.css`
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${e.v1.spacing.xxs};
      fill: ${e.colors.text.secondary};
    `,typeText:n.css`
      color: ${e.colors.text.secondary};
    `,locationItem:n.css`
      color: ${e.colors.text.secondary};
      margin-right: 12px;
    `,checkboxHeader:n.css`
      // display: flex;
      // justify-content: flex-start;
    `,checkbox:n.css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,infoWrap:n.css`
      span {
        margin-right: 10px;
      }
    `,tagList:n.css`
      justify-content: flex-start;
      pointer-events: auto;
    `}};var me,xe,we;const Fe={id:"search",text:"Search",icon:"dashboard",url:"search"};function be(){var e;const t=(0,l.useStyles2)(_e),{query:r,onQueryChange:n,onTagFilterChange:o,onDatasourceChange:h}=(0,d.A)({}),f=(0,a.Z)((()=>{const{query:e,tag:t,datasource:n}=r,o={tags:t,datasource:n};return(re||(re=new X),re).search(e,t.length||n?o:void 0)}),[r]);if(!s.config.featureToggles.panelTitleSearch)return(0,ue.jsx)("div",{className:t.unsupported,children:"Unsupported"});const p=e=>{o(e)};return(0,ue.jsx)(u.Z,{navModel:{node:Fe,main:Fe},children:(0,ue.jsxs)(u.Z.Contents,{children:[(0,ue.jsx)(l.Input,{value:r.query,onChange:e=>{n(e.currentTarget.value)},autoFocus:!0,spellCheck:!1}),me||(me=(0,ue.jsx)("br",{})),f.loading&&(xe||(xe=(0,ue.jsx)(l.Spinner,{}))),(null===(e=f.value)||void 0===e?void 0:e.body)&&(0,ue.jsxs)("div",{children:[(0,ue.jsx)(c.D,{isClearable:!0,tags:r.tag,tagOptions:()=>{var e;const t=null===(e=f.value)||void 0===e?void 0:e.body.fields.find((e=>"tags"===e.name));return t?Promise.resolve(function(e){if(!e)return[];const t=new Map;for(let o=0;o<e.values.length;o++){const a=e.values.get(o);if(null!=a&&a.length)if(Array.isArray(a))for(const e of a){var r;const n=null!==(r=t.get(e))&&void 0!==r?r:0;t.set(e,n+1)}else{var n;const e=null!==(n=t.get(a))&&void 0!==n?n:0;t.set(a,e+1)}}t[Symbol.iterator]=function*(){yield*[...this.entries()].sort(((e,t)=>t[1]-e[1]))};const o=[];for(let[e,r]of t)o.push({term:e,count:r});return o}(t)):Promise.resolve([])},onChange:p})," ",we||(we=(0,ue.jsx)("br",{})),r.datasource&&(0,ue.jsxs)(l.Button,{icon:"times",variant:"secondary",onClick:()=>h(void 0),className:t.clearClick,children:["Datasource: ",r.datasource]}),(0,ue.jsx)(i.Z,{style:{width:"100%",height:"2000px"},children:e=>{let{width:t}=e;return(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsx)(ye,{data:f.value.body,width:t,tags:r.tag,onTagFilterChange:p,onDatasourceChange:h})})}})]})]})})}const _e=e=>({unsupported:n.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,clearClick:n.css`
    &:hover {
      text-decoration: line-through;
    }
    margin-bottom: 20px;
  `})},"./public/app/plugins/datasource/grafana/types.ts":(e,t,r)=>{let n;r.d(t,{_$:()=>a,hR:()=>n,wi:()=>o}),function(e){e.LiveMeasurements="measurements",e.Annotations="annotations",e.RandomWalk="randomWalk",e.List="list",e.Read="read",e.Search="search"}(n||(n={}));const o={refId:"A",queryType:n.RandomWalk};let a;!function(e){e.Dashboard="dashboard",e.Tags="tags"}(a||(a={}))}}]);
//# sourceMappingURL=SearchPage.cf625893e14b53d42c9c.js.map