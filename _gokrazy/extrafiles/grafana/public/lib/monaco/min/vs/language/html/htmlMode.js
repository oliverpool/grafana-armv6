/*! For license information please see htmlMode.js.LICENSE.txt */
define("vs/language/html/htmlMode",[],(()=>(()=>{var e,t,n=Object.create,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,a=Object.getPrototypeOf,s=Object.prototype.hasOwnProperty,u=e=>r(e,"__esModule",{value:!0}),c=(e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of o(t))!s.call(e,a)&&"default"!==a&&r(e,a,{get:()=>t[a],enumerable:!(n=i(t,a))||n.enumerable});return e},d=(e=(e,t)=>{t.exports=self.monaco},()=>(t||e((t={exports:{}}).exports,t),t.exports)),g={};((e,t)=>{for(var n in u(e),t)r(e,n,{get:t[n],enumerable:!0})})(g,{setupMode:()=>He,setupMode1:()=>Ve});var l={};u(l),c(l,(e=>c(u(r(null!=e?n(a(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e))(d()));var f,h,p,v,m,w,_,b,k,y,x,E,C,I,A,R,S,P,T,F,D,L,j,O,M,N,U=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=l.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};!function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647}(f||(f={})),function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647}(h||(h={})),function(e){e.create=function(e,t){return e===Number.MAX_VALUE&&(e=h.MAX_VALUE),t===Number.MAX_VALUE&&(t=h.MAX_VALUE),{line:e,character:t}},e.is=function(e){var t=e;return _e.objectLiteral(t)&&_e.uinteger(t.line)&&_e.uinteger(t.character)}}(p||(p={})),function(e){e.create=function(e,t,n,r){if(_e.uinteger(e)&&_e.uinteger(t)&&_e.uinteger(n)&&_e.uinteger(r))return{start:p.create(e,t),end:p.create(n,r)};if(p.is(e)&&p.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},e.is=function(e){var t=e;return _e.objectLiteral(t)&&p.is(t.start)&&p.is(t.end)}}(v||(v={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return _e.defined(t)&&v.is(t.range)&&(_e.string(t.uri)||_e.undefined(t.uri))}}(m||(m={})),function(e){e.create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},e.is=function(e){var t=e;return _e.defined(t)&&v.is(t.targetRange)&&_e.string(t.targetUri)&&(v.is(t.targetSelectionRange)||_e.undefined(t.targetSelectionRange))&&(v.is(t.originSelectionRange)||_e.undefined(t.originSelectionRange))}}(w||(w={})),function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return _e.numberRange(t.red,0,1)&&_e.numberRange(t.green,0,1)&&_e.numberRange(t.blue,0,1)&&_e.numberRange(t.alpha,0,1)}}(_||(_={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return v.is(t.range)&&_.is(t.color)}}(b||(b={})),function(e){e.create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},e.is=function(e){var t=e;return _e.string(t.label)&&(_e.undefined(t.textEdit)||P.is(t))&&(_e.undefined(t.additionalTextEdits)||_e.typedArray(t.additionalTextEdits,P.is))}}(k||(k={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(y||(y={})),function(e){e.create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return _e.defined(n)&&(o.startCharacter=n),_e.defined(r)&&(o.endCharacter=r),_e.defined(i)&&(o.kind=i),o},e.is=function(e){var t=e;return _e.uinteger(t.startLine)&&_e.uinteger(t.startLine)&&(_e.undefined(t.startCharacter)||_e.uinteger(t.startCharacter))&&(_e.undefined(t.endCharacter)||_e.uinteger(t.endCharacter))&&(_e.undefined(t.kind)||_e.string(t.kind))}}(x||(x={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return _e.defined(t)&&m.is(t.location)&&_e.string(t.message)}}(E||(E={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(C||(C={})),function(e){e.Unnecessary=1,e.Deprecated=2}(I||(I={})),function(e){e.is=function(e){var t=e;return null!=t&&_e.string(t.href)}}(A||(A={})),function(e){e.create=function(e,t,n,r,i,o){var a={range:e,message:t};return _e.defined(n)&&(a.severity=n),_e.defined(r)&&(a.code=r),_e.defined(i)&&(a.source=i),_e.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var t,n=e;return _e.defined(n)&&v.is(n.range)&&_e.string(n.message)&&(_e.number(n.severity)||_e.undefined(n.severity))&&(_e.integer(n.code)||_e.string(n.code)||_e.undefined(n.code))&&(_e.undefined(n.codeDescription)||_e.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(_e.string(n.source)||_e.undefined(n.source))&&(_e.undefined(n.relatedInformation)||_e.typedArray(n.relatedInformation,E.is))}}(R||(R={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return _e.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return _e.defined(t)&&_e.string(t.title)&&_e.string(t.command)}}(S||(S={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return _e.objectLiteral(t)&&_e.string(t.newText)&&v.is(t.range)}}(P||(P={})),function(e){e.create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},e.is=function(e){var t=e;return void 0!==t&&_e.objectLiteral(t)&&_e.string(t.label)&&(_e.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(_e.string(t.description)||void 0===t.description)}}(T||(T={})),function(e){e.is=function(e){return"string"==typeof e}}(F||(F={})),function(e){e.replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},e.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},e.del=function(e,t){return{range:e,newText:"",annotationId:t}},e.is=function(e){var t=e;return P.is(t)&&(T.is(t.annotationId)||F.is(t.annotationId))}}(D||(D={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return _e.defined(t)&&H.is(t.textDocument)&&Array.isArray(t.edits)}}(L||(L={})),function(e){e.create=function(e,t,n){var r={kind:"create",uri:e};return void 0!==t&&(void 0!==t.overwrite||void 0!==t.ignoreIfExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},e.is=function(e){var t=e;return t&&"create"===t.kind&&_e.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||_e.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||_e.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}}(j||(j={})),function(e){e.create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0!==n&&(void 0!==n.overwrite||void 0!==n.ignoreIfExists)&&(i.options=n),void 0!==r&&(i.annotationId=r),i},e.is=function(e){var t=e;return t&&"rename"===t.kind&&_e.string(t.oldUri)&&_e.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||_e.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||_e.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}}(O||(O={})),function(e){e.create=function(e,t,n){var r={kind:"delete",uri:e};return void 0!==t&&(void 0!==t.recursive||void 0!==t.ignoreIfNotExists)&&(r.options=t),void 0!==n&&(r.annotationId=n),r},e.is=function(e){var t=e;return t&&"delete"===t.kind&&_e.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||_e.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||_e.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||F.is(t.annotationId))}}(M||(M={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return _e.string(e.kind)?j.is(e)||O.is(e)||M.is(e):L.is(e)})))}}(N||(N={}));var W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,ge,le,fe,he,pe,ve,me=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=P.insert(e,t):F.is(n)?(i=n,r=D.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=D.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=P.replace(e,t):F.is(n)?(i=n,r=D.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=D.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=P.del(e):F.is(t)?(r=t,n=D.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=D.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),we=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(F.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new we(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(L.is(e)){var n=new me(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new me(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(H.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new me(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new me(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new we,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(T.is(t)||F.is(t)?r=t:n=t,void 0===r?i=j.create(e,n):(o=F.is(r)?r:this._changeAnnotations.manage(r),i=j.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(T.is(n)||F.is(n)?i=n:r=n,void 0===i?o=O.create(e,t,r):(a=F.is(i)?i:this._changeAnnotations.manage(i),o=O.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(T.is(t)||F.is(t)?r=t:n=t,void 0===r?i=M.create(e,n):(o=F.is(r)?r:this._changeAnnotations.manage(r),i=M.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return _e.defined(t)&&_e.string(t.uri)}}(W||(W={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return _e.defined(t)&&_e.string(t.uri)&&_e.integer(t.version)}}(V||(V={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return _e.defined(t)&&_e.string(t.uri)&&(null===t.version||_e.integer(t.version))}}(H||(H={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return _e.defined(t)&&_e.string(t.uri)&&_e.string(t.languageId)&&_e.integer(t.version)&&_e.string(t.text)}}(K||(K={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(z||(z={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(z||(z={})),function(e){e.is=function(e){var t=e;return _e.objectLiteral(e)&&z.is(t.kind)&&_e.string(t.value)}}(X||(X={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(B||(B={})),function(e){e.PlainText=1,e.Snippet=2}($||($={})),function(e){e.Deprecated=1}(q||(q={})),function(e){e.create=function(e,t,n){return{newText:e,insert:t,replace:n}},e.is=function(e){var t=e;return t&&_e.string(t.newText)&&v.is(t.insert)&&v.is(t.replace)}}(Q||(Q={})),function(e){e.asIs=1,e.adjustIndentation=2}(G||(G={})),function(e){e.create=function(e){return{label:e}}}(J||(J={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(Y||(Y={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return _e.string(t)||_e.objectLiteral(t)&&_e.string(t.language)&&_e.string(t.value)}}(Z||(Z={})),function(e){e.is=function(e){var t=e;return!!t&&_e.objectLiteral(t)&&(X.is(t.contents)||Z.is(t.contents)||_e.typedArray(t.contents,Z.is))&&(void 0===e.range||v.is(e.range))}}(ee||(ee={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(te||(te={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return _e.defined(t)&&(i.documentation=t),_e.defined(n)?i.parameters=n:i.parameters=[],i}}(ne||(ne={})),function(e){e.Text=1,e.Read=2,e.Write=3}(re||(re={})),function(e){e.create=function(e,t){var n={range:e};return _e.number(t)&&(n.kind=t),n}}(ie||(ie={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(oe||(oe={})),function(e){e.Deprecated=1}(ae||(ae={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(se||(se={})),function(e){e.create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var t=e;return t&&_e.string(t.name)&&_e.number(t.kind)&&v.is(t.range)&&v.is(t.selectionRange)&&(void 0===t.detail||_e.string(t.detail))&&(void 0===t.deprecated||_e.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))}}(ue||(ue={})),function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"}(ce||(ce={})),function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return _e.defined(t)&&_e.typedArray(t.diagnostics,R.is)&&(void 0===t.only||_e.typedArray(t.only,_e.string))}}(de||(de={})),function(e){e.create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):S.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},e.is=function(e){var t=e;return t&&_e.string(t.title)&&(void 0===t.diagnostics||_e.typedArray(t.diagnostics,R.is))&&(void 0===t.kind||_e.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||S.is(t.command))&&(void 0===t.isPreferred||_e.boolean(t.isPreferred))&&(void 0===t.edit||N.is(t.edit))}}(ge||(ge={})),function(e){e.create=function(e,t){var n={range:e};return _e.defined(t)&&(n.data=t),n},e.is=function(e){var t=e;return _e.defined(t)&&v.is(t.range)&&(_e.undefined(t.command)||S.is(t.command))}}(le||(le={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return _e.defined(t)&&_e.uinteger(t.tabSize)&&_e.boolean(t.insertSpaces)}}(fe||(fe={})),function(e){e.create=function(e,t,n){return{range:e,target:t,data:n}},e.is=function(e){var t=e;return _e.defined(t)&&v.is(t.range)&&(_e.undefined(t.target)||_e.string(t.target))}}(he||(he={})),function(e){e.create=function(e,t){return{range:e,parent:t}},e.is=function(t){var n=t;return void 0!==n&&v.is(n.range)&&(void 0===n.parent||e.is(n.parent))}}(pe||(pe={})),function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new be(e,t,n,r)},e.is=function(e){var t=e;return!!(_e.defined(t)&&_e.string(t.uri)&&(_e.undefined(t.languageId)||_e.string(t.languageId))&&_e.uinteger(t.lineCount)&&_e.func(t.getText)&&_e.func(t.positionAt)&&_e.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(ve||(ve={}));var _e,be=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return p.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return p.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r},e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(_e||(_e={}));function ke(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ye(e){if(e)return new l.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function xe(e){let t=l.languages.CompletionItemKind;switch(e){case B.Text:return t.Text;case B.Method:return t.Method;case B.Function:return t.Function;case B.Constructor:return t.Constructor;case B.Field:return t.Field;case B.Variable:return t.Variable;case B.Class:return t.Class;case B.Interface:return t.Interface;case B.Module:return t.Module;case B.Property:return t.Property;case B.Unit:return t.Unit;case B.Value:return t.Value;case B.Enum:return t.Enum;case B.Keyword:return t.Keyword;case B.Snippet:return t.Snippet;case B.Color:return t.Color;case B.File:return t.File;case B.Reference:return t.Reference}return t.Property}function Ee(e){if(e)return{range:ye(e.range),text:e.newText}}function Ce(e){return e&&"editor.action.triggerSuggest"===e.command?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Ie=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),ke(t)))).then((e=>{if(e)return{range:ye(e.range),contents:Re(e.contents)}}))}};function Ae(e){return"string"==typeof e?{value:e}:function(e){return e&&"object"==typeof e&&"string"==typeof e.kind}(e)?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"}}function Re(e){if(e)return Array.isArray(e)?e.map(Ae):[Ae(e)]}var Se=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),ke(t)))).then((e=>{if(e)return e.map((e=>({range:ye(e.range),kind:Pe(e.kind)})))}))}};function Pe(e){switch(e){case re.Read:return l.languages.DocumentHighlightKind.Read;case re.Write:return l.languages.DocumentHighlightKind.Write;case re.Text:return l.languages.DocumentHighlightKind.Text}return l.languages.DocumentHighlightKind.Text}var Te=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),ke(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){let r=l.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:ye(i.range),text:i.newText}})}return{edits:t}}(e)))}};var Fe=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:De(e.kind),range:ye(e.location.range),selectionRange:ye(e.location.range),tags:[]})))}))}};function De(e){let t=l.languages.SymbolKind;switch(e){case oe.File:return t.Array;case oe.Module:return t.Module;case oe.Namespace:return t.Namespace;case oe.Package:return t.Package;case oe.Class:return t.Class;case oe.Method:return t.Method;case oe.Property:return t.Property;case oe.Field:return t.Field;case oe.Constructor:return t.Constructor;case oe.Enum:return t.Enum;case oe.Interface:return t.Interface;case oe.Function:return t.Function;case oe.Variable:return t.Variable;case oe.Constant:return t.Constant;case oe.String:return t.String;case oe.Number:return t.Number;case oe.Boolean:return t.Boolean;case oe.Array:return t.Array}return t.Function}var Le=class{constructor(e){this._worker=e}provideLinks(e,t){let n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:ye(e.range),url:e.target})))}}))}},je=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Me(t)).then((e=>{if(e&&0!==e.length)return e.map(Ee)}))))}},Oe=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t),Me(n)).then((e=>{if(e&&0!==e.length)return e.map(Ee)}))))}};function Me(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Ne=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{let t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case y.Comment:return l.languages.FoldingRangeKind.Comment;case y.Imports:return l.languages.FoldingRangeKind.Imports;case y.Region:return l.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}};var Ue=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(ke)))).then((e=>{if(e)return e.map((e=>{let t=[];for(;e;)t.push({range:ye(e.range)}),e=e.parent;return t}))}))}},We=class extends class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){let i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),ke(t)))).then((n=>{if(!n)return;let r=e.getWordUntilPosition(t),i=new l.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{let t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:Ce(e.command),range:i,kind:xe(e.kind)};return e.textEdit&&(function(e){return void 0!==e.insert&&void 0!==e.replace}(e.textEdit)?t.range={insert:ye(e.textEdit.insert),replace:ye(e.textEdit.replace)}:t.range=ye(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(Ee)),e.insertTextFormat===$.Snippet&&(t.insertTextRules=l.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}}{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function Ve(e){let t=new U(e),n=(...e)=>t.getLanguageServiceWorker(...e),r=e.languageId;l.languages.registerCompletionItemProvider(r,new We(n)),l.languages.registerHoverProvider(r,new Ie(n)),l.languages.registerDocumentHighlightProvider(r,new Se(n)),l.languages.registerLinkProvider(r,new Le(n)),l.languages.registerFoldingRangeProvider(r,new Ne(n)),l.languages.registerDocumentSymbolProvider(r,new Fe(n)),l.languages.registerSelectionRangeProvider(r,new Ue(n)),l.languages.registerRenameProvider(r,new Te(n)),"html"===r&&(l.languages.registerDocumentFormattingEditProvider(r,new je(n)),l.languages.registerDocumentRangeFormattingEditProvider(r,new Oe(n)))}function He(e){let t=[],n=[],r=new U(e);t.push(r);let i=(...e)=>r.getLanguageServiceWorker(...e);return function(){let{languageId:t,modeConfiguration:r}=e;ze(n),r.completionItems&&n.push(l.languages.registerCompletionItemProvider(t,new We(i))),r.hovers&&n.push(l.languages.registerHoverProvider(t,new Ie(i))),r.documentHighlights&&n.push(l.languages.registerDocumentHighlightProvider(t,new Se(i))),r.links&&n.push(l.languages.registerLinkProvider(t,new Le(i))),r.documentSymbols&&n.push(l.languages.registerDocumentSymbolProvider(t,new Fe(i))),r.rename&&n.push(l.languages.registerRenameProvider(t,new Te(i))),r.foldingRanges&&n.push(l.languages.registerFoldingRangeProvider(t,new Ne(i))),r.selectionRanges&&n.push(l.languages.registerSelectionRangeProvider(t,new Ue(i))),r.documentFormattingEdits&&n.push(l.languages.registerDocumentFormattingEditProvider(t,new je(i))),r.documentRangeFormattingEdits&&n.push(l.languages.registerDocumentRangeFormattingEditProvider(t,new Oe(i)))}(),t.push(Ke(n)),Ke(t)}function Ke(e){return{dispose:()=>ze(e)}}function ze(e){for(;e.length;)e.pop().dispose()}return g})()));