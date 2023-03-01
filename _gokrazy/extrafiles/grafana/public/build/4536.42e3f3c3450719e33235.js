/*! For license information please see 4536.42e3f3c3450719e33235.js.LICENSE.txt */
"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4536],{"../../opt/drone/yarncache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/esm/vs/language/css/cssMode.js":(e,t,n)=>{n.r(t),n.d(t,{setupMode:()=>mt});var r=n("../../opt/drone/yarncache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/esm/vs/editor/editor.api.js"),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,u={};i(u,"__esModule",{value:!0}),((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of a(t))s.call(e,r)||"default"===r||i(e,r,{get:()=>t[r],enumerable:!(n=o(t,r))||n.enumerable})})(u,r);var c,d,g,l,h,f,p,v,m,_,w,b,k,y,C,E,x,I,A,S,T,R,M,P,D,L,j,O,F,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne,re;(d=c||(c={})).MIN_VALUE=-2147483648,d.MAX_VALUE=2147483647,(l=g||(g={})).MIN_VALUE=0,l.MAX_VALUE=2147483647,(f=h||(h={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=g.MAX_VALUE),t===Number.MAX_VALUE&&(t=g.MAX_VALUE),{line:e,character:t}},f.is=function(e){var t=e;return rt.objectLiteral(t)&&rt.uinteger(t.line)&&rt.uinteger(t.character)},(v=p||(p={})).create=function(e,t,n,r){if(rt.uinteger(e)&&rt.uinteger(t)&&rt.uinteger(n)&&rt.uinteger(r))return{start:h.create(e,t),end:h.create(n,r)};if(h.is(e)&&h.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},v.is=function(e){var t=e;return rt.objectLiteral(t)&&h.is(t.start)&&h.is(t.end)},(_=m||(m={})).create=function(e,t){return{uri:e,range:t}},_.is=function(e){var t=e;return rt.defined(t)&&p.is(t.range)&&(rt.string(t.uri)||rt.undefined(t.uri))},(b=w||(w={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},b.is=function(e){var t=e;return rt.defined(t)&&p.is(t.targetRange)&&rt.string(t.targetUri)&&(p.is(t.targetSelectionRange)||rt.undefined(t.targetSelectionRange))&&(p.is(t.originSelectionRange)||rt.undefined(t.originSelectionRange))},(y=k||(k={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},y.is=function(e){var t=e;return rt.numberRange(t.red,0,1)&&rt.numberRange(t.green,0,1)&&rt.numberRange(t.blue,0,1)&&rt.numberRange(t.alpha,0,1)},(E=C||(C={})).create=function(e,t){return{range:e,color:t}},E.is=function(e){var t=e;return p.is(t.range)&&k.is(t.color)},(I=x||(x={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},I.is=function(e){var t=e;return rt.string(t.label)&&(rt.undefined(t.textEdit)||H.is(t))&&(rt.undefined(t.additionalTextEdits)||rt.typedArray(t.additionalTextEdits,H.is))},(S=A||(A={})).Comment="comment",S.Imports="imports",S.Region="region",(R=T||(T={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return rt.defined(n)&&(o.startCharacter=n),rt.defined(r)&&(o.endCharacter=r),rt.defined(i)&&(o.kind=i),o},R.is=function(e){var t=e;return rt.uinteger(t.startLine)&&rt.uinteger(t.startLine)&&(rt.undefined(t.startCharacter)||rt.uinteger(t.startCharacter))&&(rt.undefined(t.endCharacter)||rt.uinteger(t.endCharacter))&&(rt.undefined(t.kind)||rt.string(t.kind))},(P=M||(M={})).create=function(e,t){return{location:e,message:t}},P.is=function(e){var t=e;return rt.defined(t)&&m.is(t.location)&&rt.string(t.message)},(L=D||(D={})).Error=1,L.Warning=2,L.Information=3,L.Hint=4,(O=j||(j={})).Unnecessary=1,O.Deprecated=2,(F||(F={})).is=function(e){var t=e;return null!=t&&rt.string(t.href)},(U=N||(N={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return rt.defined(n)&&(a.severity=n),rt.defined(r)&&(a.code=r),rt.defined(i)&&(a.source=i),rt.defined(o)&&(a.relatedInformation=o),a},U.is=function(e){var t,n=e;return rt.defined(n)&&p.is(n.range)&&rt.string(n.message)&&(rt.number(n.severity)||rt.undefined(n.severity))&&(rt.integer(n.code)||rt.string(n.code)||rt.undefined(n.code))&&(rt.undefined(n.codeDescription)||rt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(rt.string(n.source)||rt.undefined(n.source))&&(rt.undefined(n.relatedInformation)||rt.typedArray(n.relatedInformation,M.is))},(V=W||(W={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return rt.defined(n)&&n.length>0&&(i.arguments=n),i},V.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.title)&&rt.string(t.command)},(K=H||(H={})).replace=function(e,t){return{range:e,newText:t}},K.insert=function(e,t){return{range:{start:e,end:e},newText:t}},K.del=function(e){return{range:e,newText:""}},K.is=function(e){var t=e;return rt.objectLiteral(t)&&rt.string(t.newText)&&p.is(t.range)},(X=z||(z={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},X.is=function(e){var t=e;return void 0!==t&&rt.objectLiteral(t)&&rt.string(t.label)&&(rt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(rt.string(t.description)||void 0===t.description)},(B||(B={})).is=function(e){return"string"==typeof e},(q=$||($={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},q.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},q.del=function(e,t){return{range:e,newText:"",annotationId:t}},q.is=function(e){var t=e;return H.is(t)&&(z.is(t.annotationId)||B.is(t.annotationId))},(G=Q||(Q={})).create=function(e,t){return{textDocument:e,edits:t}},G.is=function(e){var t=e;return rt.defined(t)&&ue.is(t.textDocument)&&Array.isArray(t.edits)},(Y=J||(J={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Y.is=function(e){var t=e;return t&&"create"===t.kind&&rt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||rt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||rt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||B.is(t.annotationId))},(ee=Z||(Z={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},ee.is=function(e){var t=e;return t&&"rename"===t.kind&&rt.string(t.oldUri)&&rt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||rt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||rt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||B.is(t.annotationId))},(ne=te||(te={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},ne.is=function(e){var t=e;return t&&"delete"===t.kind&&rt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||rt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||rt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||B.is(t.annotationId))},(re||(re={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return rt.string(e.kind)?J.is(e)||Z.is(e)||te.is(e):Q.is(e)})))};var ie,oe,ae,se,ue,ce,de,ge,le,he,fe,pe,ve,me,_e,we,be,ke,ye,Ce,Ee,xe,Ie,Ae,Se,Te,Re,Me,Pe,De,Le,je,Oe,Fe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,Ze,et,tt=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=H.insert(e,t):B.is(n)?(i=n,r=$.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=$.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=H.replace(e,t):B.is(n)?(i=n,r=$.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=$.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=H.del(e):B.is(t)?(r=t,n=$.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=$.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),nt=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if(B.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new nt(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(Q.is(e)){var n=new tt(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new tt(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(ue.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new tt(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new tt(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new nt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(z.is(t)||B.is(t)?r=t:n=t,void 0===r?i=J.create(e,n):(o=B.is(r)?r:this._changeAnnotations.manage(r),i=J.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(z.is(n)||B.is(n)?i=n:r=n,void 0===i?o=Z.create(e,t,r):(a=B.is(i)?i:this._changeAnnotations.manage(i),o=Z.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(z.is(t)||B.is(t)?r=t:n=t,void 0===r?i=te.create(e,n):(o=B.is(r)?r:this._changeAnnotations.manage(r),i=te.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}();(oe=ie||(ie={})).create=function(e){return{uri:e}},oe.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)},(se=ae||(ae={})).create=function(e,t){return{uri:e,version:t}},se.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)&&rt.integer(t.version)},(ce=ue||(ue={})).create=function(e,t){return{uri:e,version:t}},ce.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)&&(null===t.version||rt.integer(t.version))},(ge=de||(de={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},ge.is=function(e){var t=e;return rt.defined(t)&&rt.string(t.uri)&&rt.string(t.languageId)&&rt.integer(t.version)&&rt.string(t.text)},(he=le||(le={})).PlainText="plaintext",he.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(le||(le={})),(fe||(fe={})).is=function(e){var t=e;return rt.objectLiteral(e)&&le.is(t.kind)&&rt.string(t.value)},(ve=pe||(pe={})).Text=1,ve.Method=2,ve.Function=3,ve.Constructor=4,ve.Field=5,ve.Variable=6,ve.Class=7,ve.Interface=8,ve.Module=9,ve.Property=10,ve.Unit=11,ve.Value=12,ve.Enum=13,ve.Keyword=14,ve.Snippet=15,ve.Color=16,ve.File=17,ve.Reference=18,ve.Folder=19,ve.EnumMember=20,ve.Constant=21,ve.Struct=22,ve.Event=23,ve.Operator=24,ve.TypeParameter=25,(_e=me||(me={})).PlainText=1,_e.Snippet=2,(we||(we={})).Deprecated=1,(ke=be||(be={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},ke.is=function(e){var t=e;return t&&rt.string(t.newText)&&p.is(t.insert)&&p.is(t.replace)},(Ce=ye||(ye={})).asIs=1,Ce.adjustIndentation=2,(Ee||(Ee={})).create=function(e){return{label:e}},(xe||(xe={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Ae=Ie||(Ie={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Ae.is=function(e){var t=e;return rt.string(t)||rt.objectLiteral(t)&&rt.string(t.language)&&rt.string(t.value)},(Se||(Se={})).is=function(e){var t=e;return!!t&&rt.objectLiteral(t)&&(fe.is(t.contents)||Ie.is(t.contents)||rt.typedArray(t.contents,Ie.is))&&(void 0===e.range||p.is(e.range))},(Te||(Te={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Re||(Re={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return rt.defined(t)&&(i.documentation=t),rt.defined(n)?i.parameters=n:i.parameters=[],i},(Pe=Me||(Me={})).Text=1,Pe.Read=2,Pe.Write=3,(De||(De={})).create=function(e,t){var n={range:e};return rt.number(t)&&(n.kind=t),n},(je=Le||(Le={})).File=1,je.Module=2,je.Namespace=3,je.Package=4,je.Class=5,je.Method=6,je.Property=7,je.Field=8,je.Constructor=9,je.Enum=10,je.Interface=11,je.Function=12,je.Variable=13,je.Constant=14,je.String=15,je.Number=16,je.Boolean=17,je.Array=18,je.Object=19,je.Key=20,je.Null=21,je.EnumMember=22,je.Struct=23,je.Event=24,je.Operator=25,je.TypeParameter=26,(Oe||(Oe={})).Deprecated=1,(Fe||(Fe={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ue=Ne||(Ne={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ue.is=function(e){var t=e;return t&&rt.string(t.name)&&rt.number(t.kind)&&p.is(t.range)&&p.is(t.selectionRange)&&(void 0===t.detail||rt.string(t.detail))&&(void 0===t.deprecated||rt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Ve=We||(We={})).Empty="",Ve.QuickFix="quickfix",Ve.Refactor="refactor",Ve.RefactorExtract="refactor.extract",Ve.RefactorInline="refactor.inline",Ve.RefactorRewrite="refactor.rewrite",Ve.Source="source",Ve.SourceOrganizeImports="source.organizeImports",Ve.SourceFixAll="source.fixAll",(Ke=He||(He={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},Ke.is=function(e){var t=e;return rt.defined(t)&&rt.typedArray(t.diagnostics,N.is)&&(void 0===t.only||rt.typedArray(t.only,rt.string))},(Xe=ze||(ze={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):W.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},Xe.is=function(e){var t=e;return t&&rt.string(t.title)&&(void 0===t.diagnostics||rt.typedArray(t.diagnostics,N.is))&&(void 0===t.kind||rt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||W.is(t.command))&&(void 0===t.isPreferred||rt.boolean(t.isPreferred))&&(void 0===t.edit||re.is(t.edit))},($e=Be||(Be={})).create=function(e,t){var n={range:e};return rt.defined(t)&&(n.data=t),n},$e.is=function(e){var t=e;return rt.defined(t)&&p.is(t.range)&&(rt.undefined(t.command)||W.is(t.command))},(Qe=qe||(qe={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Qe.is=function(e){var t=e;return rt.defined(t)&&rt.uinteger(t.tabSize)&&rt.boolean(t.insertSpaces)},(Je=Ge||(Ge={})).create=function(e,t,n){return{range:e,target:t,data:n}},Je.is=function(e){var t=e;return rt.defined(t)&&p.is(t.range)&&(rt.undefined(t.target)||rt.string(t.target))},(Ze=Ye||(Ye={})).create=function(e,t){return{range:e,parent:t}},Ze.is=function(e){var t=e;return void 0!==t&&p.is(t.range)&&(void 0===t.parent||Ze.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new at(e,t,n,r)},e.is=function(e){var t=e;return!!(rt.defined(t)&&rt.string(t.uri)&&(rt.undefined(t.languageId)||rt.string(t.languageId))&&rt.uinteger(t.lineCount)&&rt.func(t.getText)&&rt.func(t.positionAt)&&rt.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(et||(et={}));var rt,it,ot,at=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return h.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return h.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();it=rt||(rt={}),ot=Object.prototype.toString,it.defined=function(e){return void 0!==e},it.undefined=function(e){return void 0===e},it.boolean=function(e){return!0===e||!1===e},it.string=function(e){return"[object String]"===ot.call(e)},it.number=function(e){return"[object Number]"===ot.call(e)},it.numberRange=function(e,t,n){return"[object Number]"===ot.call(e)&&t<=e&&e<=n},it.integer=function(e){return"[object Number]"===ot.call(e)&&-2147483648<=e&&e<=2147483647},it.uinteger=function(e){return"[object Number]"===ot.call(e)&&0<=e&&e<=2147483647},it.func=function(e){return"[object Function]"===ot.call(e)},it.objectLiteral=function(e){return null!==e&&"object"==typeof e},it.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};function st(e){switch(e){case D.Error:return u.MarkerSeverity.Error;case D.Warning:return u.MarkerSeverity.Warning;case D.Information:return u.MarkerSeverity.Info;case D.Hint:return u.MarkerSeverity.Hint;default:return u.MarkerSeverity.Info}}function ut(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ct(e){if(e)return new u.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function dt(e){const t=u.languages.CompletionItemKind;switch(e){case pe.Text:return t.Text;case pe.Method:return t.Method;case pe.Function:return t.Function;case pe.Constructor:return t.Constructor;case pe.Field:return t.Field;case pe.Variable:return t.Variable;case pe.Class:return t.Class;case pe.Interface:return t.Interface;case pe.Module:return t.Module;case pe.Property:return t.Property;case pe.Unit:return t.Unit;case pe.Value:return t.Value;case pe.Enum:return t.Enum;case pe.Keyword:return t.Keyword;case pe.Snippet:return t.Snippet;case pe.Color:return t.Color;case pe.File:return t.File;case pe.Reference:return t.Reference}return t.Property}function gt(e){if(e)return{range:ct(e.range),text:e.newText}}function lt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function ht(e){if(e)return Array.isArray(e)?e.map(lt):[lt(e)]}function ft(e){switch(e){case Me.Read:return u.languages.DocumentHighlightKind.Read;case Me.Write:return u.languages.DocumentHighlightKind.Write;case Me.Text:return u.languages.DocumentHighlightKind.Text}return u.languages.DocumentHighlightKind.Text}function pt(e){return{uri:u.Uri.parse(e.uri),range:ct(e.range)}}function vt(e){let t=u.languages.SymbolKind;switch(e){case Le.File:return t.Array;case Le.Module:return t.Module;case Le.Namespace:return t.Namespace;case Le.Package:return t.Package;case Le.Class:return t.Class;case Le.Method:return t.Method;case Le.Property:return t.Property;case Le.Field:return t.Field;case Le.Constructor:return t.Constructor;case Le.Enum:return t.Enum;case Le.Interface:return t.Interface;case Le.Function:return t.Function;case Le.Variable:return t.Variable;case Le.Constant:return t.Constant;case Le.String:return t.String;case Le.Number:return t.Number;case Le.Boolean:return t.Boolean;case Le.Array:return t.Array}return t.Function}function mt(e){const t=[],n=[],r=new class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=u.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}}(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;wt(n),r.completionItems&&n.push(u.languages.registerCompletionItemProvider(t,new class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),ut(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new u.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:dt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:ct(e.textEdit.insert),replace:ct(e.textEdit.replace)}:t.range=ct(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(gt)),e.insertTextFormat===me.Snippet&&(t.insertTextRules=u.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}}(i,["/","-",":"]))),r.hovers&&n.push(u.languages.registerHoverProvider(t,new class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),ut(t)))).then((e=>{if(e)return{range:ct(e.range),contents:ht(e.contents)}}))}}(i))),r.documentHighlights&&n.push(u.languages.registerDocumentHighlightProvider(t,new class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),ut(t)))).then((e=>{if(e)return e.map((e=>({range:ct(e.range),kind:ft(e.kind)})))}))}}(i))),r.definitions&&n.push(u.languages.registerDefinitionProvider(t,new class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),ut(t)))).then((e=>{if(e)return[pt(e)]}))}}(i))),r.references&&n.push(u.languages.registerReferenceProvider(t,new class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),ut(t)))).then((e=>{if(e)return e.map(pt)}))}}(i))),r.documentSymbols&&n.push(u.languages.registerDocumentSymbolProvider(t,new class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:vt(e.kind),range:ct(e.location.range),selectionRange:ct(e.location.range),tags:[]})))}))}}(i))),r.rename&&n.push(u.languages.registerRenameProvider(t,new class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),ut(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=u.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,edit:{range:ct(i.range),text:i.newText}})}return{edits:t}}(e)))}}(i))),r.colors&&n.push(u.languages.registerColorProvider(t,new class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:ct(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=gt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(gt)),t}))}))}}(i))),r.foldingRanges&&n.push(u.languages.registerFoldingRangeProvider(t,new class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case A.Comment:return u.languages.FoldingRangeKind.Comment;case A.Imports:return u.languages.FoldingRangeKind.Imports;case A.Region:return u.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}}(i))),r.diagnostics&&n.push(new class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{u.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(u.editor.onDidCreateModel(r)),this._disposables.push(u.editor.onWillDisposeModel(i)),this._disposables.push(u.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{u.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{u.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),u.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:st(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=u.editor.getModel(e);i&&i.getLanguageId()===t&&u.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}}(t,i,e.onDidChange)),r.selectionRanges&&n.push(u.languages.registerSelectionRangeProvider(t,new class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(ut)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:ct(e.range)}),e=e.parent;return t}))}))}}(i)))}(),t.push(_t(n)),_t(t)}function _t(e){return{dispose:()=>wt(e)}}function wt(e){for(;e.length;)e.pop().dispose()}}}]);
//# sourceMappingURL=4536.42e3f3c3450719e33235.js.map