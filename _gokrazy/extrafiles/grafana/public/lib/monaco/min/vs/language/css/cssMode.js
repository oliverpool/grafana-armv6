"use strict";/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
* Released under the MIT license
* https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
*-----------------------------------------------------------------------------*/define("vs/language/css/cssMode",["require","require"],C=>{var qe=(()=>{var Ge=Object.create,O=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyNames,nt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty,it=(e=>typeof C<"u"?C:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof C<"u"?C:r)[i]}):e)(function(e){if(typeof C<"u")return C.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')}),ot=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),at=(e,r)=>{for(var i in r)O(e,i,{get:r[i],enumerable:!0})},N=(e,r,i,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of tt(r))!rt.call(e,t)&&t!==i&&O(e,t,{get:()=>r[t],enumerable:!(n=et(r,t))||n.enumerable});return e},st=(e,r,i)=>(N(e,r,"default"),i&&N(i,r,"default")),G=(e,r,i)=>(i=e!=null?Ge(nt(e)):{},N(r||!e||!e.__esModule?O(i,"default",{value:e,enumerable:!0}):i,e)),ut=e=>N(O({},"__esModule",{value:!0}),e),ct=ot((e,r)=>{var i=G(it("vs/editor/editor.api"));r.exports=i}),ee={};at(ee,{CompletionAdapter:()=>Le,DefinitionAdapter:()=>Ne,DiagnosticsAdapter:()=>Pe,DocumentColorAdapter:()=>Be,DocumentFormattingEditProvider:()=>Ke,DocumentHighlightAdapter:()=>Oe,DocumentLinkAdapter:()=>kt,DocumentRangeFormattingEditProvider:()=>ze,DocumentSymbolAdapter:()=>He,FoldingRangeAdapter:()=>$e,HoverAdapter:()=>Fe,ReferenceAdapter:()=>We,RenameAdapter:()=>Ve,SelectionRangeAdapter:()=>Qe,WorkerManager:()=>te,fromPosition:()=>x,fromRange:()=>q,setupMode:()=>xt,toRange:()=>_,toTextEdit:()=>S});var c={};st(c,G(ct()));var dt=2*60*1e3,te=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>dt&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let r;return this._getClient().then(i=>{r=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(e)}).then(i=>r)}},ne;(function(e){e.MIN_VALUE=-2147483648,e.MAX_VALUE=2147483647})(ne||(ne={}));var U;(function(e){e.MIN_VALUE=0,e.MAX_VALUE=2147483647})(U||(U={}));var b;(function(e){function r(n,t){return n===Number.MAX_VALUE&&(n=U.MAX_VALUE),t===Number.MAX_VALUE&&(t=U.MAX_VALUE),{line:n,character:t}}e.create=r;function i(n){var t=n;return s.objectLiteral(t)&&s.uinteger(t.line)&&s.uinteger(t.character)}e.is=i})(b||(b={}));var p;(function(e){function r(n,t,o,a){if(s.uinteger(n)&&s.uinteger(t)&&s.uinteger(o)&&s.uinteger(a))return{start:b.create(n,t),end:b.create(o,a)};if(b.is(n)&&b.is(t))return{start:n,end:t};throw new Error("Range#create called with invalid arguments["+n+", "+t+", "+o+", "+a+"]")}e.create=r;function i(n){var t=n;return s.objectLiteral(t)&&b.is(t.start)&&b.is(t.end)}e.is=i})(p||(p={}));var B;(function(e){function r(n,t){return{uri:n,range:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&p.is(t.range)&&(s.string(t.uri)||s.undefined(t.uri))}e.is=i})(B||(B={}));var re;(function(e){function r(n,t,o,a){return{targetUri:n,targetRange:t,targetSelectionRange:o,originSelectionRange:a}}e.create=r;function i(n){var t=n;return s.defined(t)&&p.is(t.targetRange)&&s.string(t.targetUri)&&(p.is(t.targetSelectionRange)||s.undefined(t.targetSelectionRange))&&(p.is(t.originSelectionRange)||s.undefined(t.originSelectionRange))}e.is=i})(re||(re={}));var $;(function(e){function r(n,t,o,a){return{red:n,green:t,blue:o,alpha:a}}e.create=r;function i(n){var t=n;return s.numberRange(t.red,0,1)&&s.numberRange(t.green,0,1)&&s.numberRange(t.blue,0,1)&&s.numberRange(t.alpha,0,1)}e.is=i})($||($={}));var ie;(function(e){function r(n,t){return{range:n,color:t}}e.create=r;function i(n){var t=n;return p.is(t.range)&&$.is(t.color)}e.is=i})(ie||(ie={}));var oe;(function(e){function r(n,t,o){return{label:n,textEdit:t,additionalTextEdits:o}}e.create=r;function i(n){var t=n;return s.string(t.label)&&(s.undefined(t.textEdit)||k.is(t))&&(s.undefined(t.additionalTextEdits)||s.typedArray(t.additionalTextEdits,k.is))}e.is=i})(oe||(oe={}));var T;(function(e){e.Comment="comment",e.Imports="imports",e.Region="region"})(T||(T={}));var ae;(function(e){function r(n,t,o,a,u){var l={startLine:n,endLine:t};return s.defined(o)&&(l.startCharacter=o),s.defined(a)&&(l.endCharacter=a),s.defined(u)&&(l.kind=u),l}e.create=r;function i(n){var t=n;return s.uinteger(t.startLine)&&s.uinteger(t.startLine)&&(s.undefined(t.startCharacter)||s.uinteger(t.startCharacter))&&(s.undefined(t.endCharacter)||s.uinteger(t.endCharacter))&&(s.undefined(t.kind)||s.string(t.kind))}e.is=i})(ae||(ae={}));var Q;(function(e){function r(n,t){return{location:n,message:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&B.is(t.location)&&s.string(t.message)}e.is=i})(Q||(Q={}));var I;(function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4})(I||(I={}));var se;(function(e){e.Unnecessary=1,e.Deprecated=2})(se||(se={}));var ue;(function(e){function r(i){var n=i;return n!=null&&s.string(n.href)}e.is=r})(ue||(ue={}));var W;(function(e){function r(n,t,o,a,u,l){var d={range:n,message:t};return s.defined(o)&&(d.severity=o),s.defined(a)&&(d.code=a),s.defined(u)&&(d.source=u),s.defined(l)&&(d.relatedInformation=l),d}e.create=r;function i(n){var t,o=n;return s.defined(o)&&p.is(o.range)&&s.string(o.message)&&(s.number(o.severity)||s.undefined(o.severity))&&(s.integer(o.code)||s.string(o.code)||s.undefined(o.code))&&(s.undefined(o.codeDescription)||s.string((t=o.codeDescription)===null||t===void 0?void 0:t.href))&&(s.string(o.source)||s.undefined(o.source))&&(s.undefined(o.relatedInformation)||s.typedArray(o.relatedInformation,Q.is))}e.is=i})(W||(W={}));var D;(function(e){function r(n,t){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];var u={title:n,command:t};return s.defined(o)&&o.length>0&&(u.arguments=o),u}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.title)&&s.string(t.command)}e.is=i})(D||(D={}));var k;(function(e){function r(o,a){return{range:o,newText:a}}e.replace=r;function i(o,a){return{range:{start:o,end:o},newText:a}}e.insert=i;function n(o){return{range:o,newText:""}}e.del=n;function t(o){var a=o;return s.objectLiteral(a)&&s.string(a.newText)&&p.is(a.range)}e.is=t})(k||(k={}));var A;(function(e){function r(n,t,o){var a={label:n};return t!==void 0&&(a.needsConfirmation=t),o!==void 0&&(a.description=o),a}e.create=r;function i(n){var t=n;return t!==void 0&&s.objectLiteral(t)&&s.string(t.label)&&(s.boolean(t.needsConfirmation)||t.needsConfirmation===void 0)&&(s.string(t.description)||t.description===void 0)}e.is=i})(A||(A={}));var m;(function(e){function r(i){var n=i;return typeof n=="string"}e.is=r})(m||(m={}));var E;(function(e){function r(o,a,u){return{range:o,newText:a,annotationId:u}}e.replace=r;function i(o,a,u){return{range:{start:o,end:o},newText:a,annotationId:u}}e.insert=i;function n(o,a){return{range:o,newText:"",annotationId:a}}e.del=n;function t(o){var a=o;return k.is(a)&&(A.is(a.annotationId)||m.is(a.annotationId))}e.is=t})(E||(E={}));var V;(function(e){function r(n,t){return{textDocument:n,edits:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&K.is(t.textDocument)&&Array.isArray(t.edits)}e.is=i})(V||(V={}));var M;(function(e){function r(n,t,o){var a={kind:"create",uri:n};return t!==void 0&&(t.overwrite!==void 0||t.ignoreIfExists!==void 0)&&(a.options=t),o!==void 0&&(a.annotationId=o),a}e.create=r;function i(n){var t=n;return t&&t.kind==="create"&&s.string(t.uri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}e.is=i})(M||(M={}));var P;(function(e){function r(n,t,o,a){var u={kind:"rename",oldUri:n,newUri:t};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(u.options=o),a!==void 0&&(u.annotationId=a),u}e.create=r;function i(n){var t=n;return t&&t.kind==="rename"&&s.string(t.oldUri)&&s.string(t.newUri)&&(t.options===void 0||(t.options.overwrite===void 0||s.boolean(t.options.overwrite))&&(t.options.ignoreIfExists===void 0||s.boolean(t.options.ignoreIfExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}e.is=i})(P||(P={}));var L;(function(e){function r(n,t,o){var a={kind:"delete",uri:n};return t!==void 0&&(t.recursive!==void 0||t.ignoreIfNotExists!==void 0)&&(a.options=t),o!==void 0&&(a.annotationId=o),a}e.create=r;function i(n){var t=n;return t&&t.kind==="delete"&&s.string(t.uri)&&(t.options===void 0||(t.options.recursive===void 0||s.boolean(t.options.recursive))&&(t.options.ignoreIfNotExists===void 0||s.boolean(t.options.ignoreIfNotExists)))&&(t.annotationId===void 0||m.is(t.annotationId))}e.is=i})(L||(L={}));var J;(function(e){function r(i){var n=i;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(function(t){return s.string(t.kind)?M.is(t)||P.is(t)||L.is(t):V.is(t)}))}e.is=r})(J||(J={}));var H=function(){function e(r,i){this.edits=r,this.changeAnnotations=i}return e.prototype.insert=function(r,i,n){var t,o;if(n===void 0?t=k.insert(r,i):m.is(n)?(o=n,t=E.insert(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),t=E.insert(r,i,o)),this.edits.push(t),o!==void 0)return o},e.prototype.replace=function(r,i,n){var t,o;if(n===void 0?t=k.replace(r,i):m.is(n)?(o=n,t=E.replace(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),t=E.replace(r,i,o)),this.edits.push(t),o!==void 0)return o},e.prototype.delete=function(r,i){var n,t;if(i===void 0?n=k.del(r):m.is(i)?(t=i,n=E.del(r,i)):(this.assertChangeAnnotations(this.changeAnnotations),t=this.changeAnnotations.manage(i),n=E.del(r,t)),this.edits.push(n),t!==void 0)return t},e.prototype.add=function(r){this.edits.push(r)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(r){if(r===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),ce=function(){function e(r){this._annotations=r===void 0?Object.create(null):r,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(r,i){var n;if(m.is(r)?n=r:(n=this.nextId(),i=r),this._annotations[n]!==void 0)throw new Error("Id "+n+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+n);return this._annotations[n]=i,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}(),Ct=function(){function e(r){var i=this;this._textEditChanges=Object.create(null),r!==void 0?(this._workspaceEdit=r,r.documentChanges?(this._changeAnnotations=new ce(r.changeAnnotations),r.changeAnnotations=this._changeAnnotations.all(),r.documentChanges.forEach(function(n){if(V.is(n)){var t=new H(n.edits,i._changeAnnotations);i._textEditChanges[n.textDocument.uri]=t}})):r.changes&&Object.keys(r.changes).forEach(function(n){var t=new H(r.changes[n]);i._textEditChanges[n]=t})):this._workspaceEdit={}}return Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(r){if(K.is(r)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:r.uri,version:r.version},n=this._textEditChanges[i.uri];if(!n){var t=[],o={textDocument:i,edits:t};this._workspaceEdit.documentChanges.push(o),n=new H(t,this._changeAnnotations),this._textEditChanges[i.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[r];if(!n){var t=[];this._workspaceEdit.changes[r]=t,n=new H(t),this._textEditChanges[r]=n}return n}},e.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new ce,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;A.is(i)||m.is(i)?t=i:n=i;var o,a;if(t===void 0?o=M.create(r,n):(a=m.is(t)?t:this._changeAnnotations.manage(t),o=M.create(r,n,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a},e.prototype.renameFile=function(r,i,n,t){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o;A.is(n)||m.is(n)?o=n:t=n;var a,u;if(o===void 0?a=P.create(r,i,t):(u=m.is(o)?o:this._changeAnnotations.manage(o),a=P.create(r,i,t,u)),this._workspaceEdit.documentChanges.push(a),u!==void 0)return u},e.prototype.deleteFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var t;A.is(i)||m.is(i)?t=i:n=i;var o,a;if(t===void 0?o=L.create(r,n):(a=m.is(t)?t:this._changeAnnotations.manage(t),o=L.create(r,n,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a},e}(),de;(function(e){function r(n){return{uri:n}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)}e.is=i})(de||(de={}));var ge;(function(e){function r(n,t){return{uri:n,version:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)&&s.integer(t.version)}e.is=i})(ge||(ge={}));var K;(function(e){function r(n,t){return{uri:n,version:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)&&(t.version===null||s.integer(t.version))}e.is=i})(K||(K={}));var le;(function(e){function r(n,t,o,a){return{uri:n,languageId:t,version:o,text:a}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.string(t.uri)&&s.string(t.languageId)&&s.integer(t.version)&&s.string(t.text)}e.is=i})(le||(le={}));var F;(function(e){e.PlainText="plaintext",e.Markdown="markdown"})(F||(F={})),function(e){function r(i){var n=i;return n===e.PlainText||n===e.Markdown}e.is=r}(F||(F={}));var Y;(function(e){function r(i){var n=i;return s.objectLiteral(i)&&F.is(n.kind)&&s.string(n.value)}e.is=r})(Y||(Y={}));var f;(function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25})(f||(f={}));var Z;(function(e){e.PlainText=1,e.Snippet=2})(Z||(Z={}));var fe;(function(e){e.Deprecated=1})(fe||(fe={}));var he;(function(e){function r(n,t,o){return{newText:n,insert:t,replace:o}}e.create=r;function i(n){var t=n;return t&&s.string(t.newText)&&p.is(t.insert)&&p.is(t.replace)}e.is=i})(he||(he={}));var ve;(function(e){e.asIs=1,e.adjustIndentation=2})(ve||(ve={}));var pe;(function(e){function r(i){return{label:i}}e.create=r})(pe||(pe={}));var me;(function(e){function r(i,n){return{items:i||[],isIncomplete:!!n}}e.create=r})(me||(me={}));var z;(function(e){function r(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}e.fromPlainText=r;function i(n){var t=n;return s.string(t)||s.objectLiteral(t)&&s.string(t.language)&&s.string(t.value)}e.is=i})(z||(z={}));var _e;(function(e){function r(i){var n=i;return!!n&&s.objectLiteral(n)&&(Y.is(n.contents)||z.is(n.contents)||s.typedArray(n.contents,z.is))&&(i.range===void 0||p.is(i.range))}e.is=r})(_e||(_e={}));var we;(function(e){function r(i,n){return n?{label:i,documentation:n}:{label:i}}e.create=r})(we||(we={}));var be;(function(e){function r(i,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];var a={label:i};return s.defined(n)&&(a.documentation=n),s.defined(t)?a.parameters=t:a.parameters=[],a}e.create=r})(be||(be={}));var j;(function(e){e.Text=1,e.Read=2,e.Write=3})(j||(j={}));var ye;(function(e){function r(i,n){var t={range:i};return s.number(n)&&(t.kind=n),t}e.create=r})(ye||(ye={}));var h;(function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26})(h||(h={}));var ke;(function(e){e.Deprecated=1})(ke||(ke={}));var Ee;(function(e){function r(i,n,t,o,a){var u={name:i,kind:n,location:{uri:o,range:t}};return a&&(u.containerName=a),u}e.create=r})(Ee||(Ee={}));var xe;(function(e){function r(n,t,o,a,u,l){var d={name:n,detail:t,kind:o,range:a,selectionRange:u};return l!==void 0&&(d.children=l),d}e.create=r;function i(n){var t=n;return t&&s.string(t.name)&&s.number(t.kind)&&p.is(t.range)&&p.is(t.selectionRange)&&(t.detail===void 0||s.string(t.detail))&&(t.deprecated===void 0||s.boolean(t.deprecated))&&(t.children===void 0||Array.isArray(t.children))&&(t.tags===void 0||Array.isArray(t.tags))}e.is=i})(xe||(xe={}));var Ce;(function(e){e.Empty="",e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports",e.SourceFixAll="source.fixAll"})(Ce||(Ce={}));var Ie;(function(e){function r(n,t){var o={diagnostics:n};return t!=null&&(o.only=t),o}e.create=r;function i(n){var t=n;return s.defined(t)&&s.typedArray(t.diagnostics,W.is)&&(t.only===void 0||s.typedArray(t.only,s.string))}e.is=i})(Ie||(Ie={}));var Ae;(function(e){function r(n,t,o){var a={title:n},u=!0;return typeof t=="string"?(u=!1,a.kind=t):D.is(t)?a.command=t:a.edit=t,u&&o!==void 0&&(a.kind=o),a}e.create=r;function i(n){var t=n;return t&&s.string(t.title)&&(t.diagnostics===void 0||s.typedArray(t.diagnostics,W.is))&&(t.kind===void 0||s.string(t.kind))&&(t.edit!==void 0||t.command!==void 0)&&(t.command===void 0||D.is(t.command))&&(t.isPreferred===void 0||s.boolean(t.isPreferred))&&(t.edit===void 0||J.is(t.edit))}e.is=i})(Ae||(Ae={}));var Se;(function(e){function r(n,t){var o={range:n};return s.defined(t)&&(o.data=t),o}e.create=r;function i(n){var t=n;return s.defined(t)&&p.is(t.range)&&(s.undefined(t.command)||D.is(t.command))}e.is=i})(Se||(Se={}));var Re;(function(e){function r(n,t){return{tabSize:n,insertSpaces:t}}e.create=r;function i(n){var t=n;return s.defined(t)&&s.uinteger(t.tabSize)&&s.boolean(t.insertSpaces)}e.is=i})(Re||(Re={}));var Te;(function(e){function r(n,t,o){return{range:n,target:t,data:o}}e.create=r;function i(n){var t=n;return s.defined(t)&&p.is(t.range)&&(s.undefined(t.target)||s.string(t.target))}e.is=i})(Te||(Te={}));var De;(function(e){function r(n,t){return{range:n,parent:t}}e.create=r;function i(n){var t=n;return t!==void 0&&p.is(t.range)&&(t.parent===void 0||e.is(t.parent))}e.is=i})(De||(De={}));var Me;(function(e){function r(o,a,u,l){return new gt(o,a,u,l)}e.create=r;function i(o){var a=o;return!!(s.defined(a)&&s.string(a.uri)&&(s.undefined(a.languageId)||s.string(a.languageId))&&s.uinteger(a.lineCount)&&s.func(a.getText)&&s.func(a.positionAt)&&s.func(a.offsetAt))}e.is=i;function n(o,a){for(var u=o.getText(),l=t(a,function(R,X){var Ze=R.range.start.line-X.range.start.line;return Ze===0?R.range.start.character-X.range.start.character:Ze}),d=u.length,v=l.length-1;v>=0;v--){var w=l[v],y=o.offsetAt(w.range.start),g=o.offsetAt(w.range.end);if(g<=d)u=u.substring(0,y)+w.newText+u.substring(g,u.length);else throw new Error("Overlapping edit");d=y}return u}e.applyEdits=n;function t(o,a){if(o.length<=1)return o;var u=o.length/2|0,l=o.slice(0,u),d=o.slice(u);t(l,a),t(d,a);for(var v=0,w=0,y=0;v<l.length&&w<d.length;){var g=a(l[v],d[w]);g<=0?o[y++]=l[v++]:o[y++]=d[w++]}for(;v<l.length;)o[y++]=l[v++];for(;w<d.length;)o[y++]=d[w++];return o}})(Me||(Me={}));var gt=function(){function e(r,i,n,t){this._uri=r,this._languageId=i,this._version=n,this._content=t,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(r){if(r){var i=this.offsetAt(r.start),n=this.offsetAt(r.end);return this._content.substring(i,n)}return this._content},e.prototype.update=function(r,i){this._content=r.text,this._version=i,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var r=[],i=this._content,n=!0,t=0;t<i.length;t++){n&&(r.push(t),n=!1);var o=i.charAt(t);n=o==="\r"||o===`
`,o==="\r"&&t+1<i.length&&i.charAt(t+1)===`
`&&t++}n&&i.length>0&&r.push(i.length),this._lineOffsets=r}return this._lineOffsets},e.prototype.positionAt=function(r){r=Math.max(Math.min(r,this._content.length),0);var i=this.getLineOffsets(),n=0,t=i.length;if(t===0)return b.create(0,r);for(;n<t;){var o=Math.floor((n+t)/2);i[o]>r?t=o:n=o+1}var a=n-1;return b.create(a,r-i[a])},e.prototype.offsetAt=function(r){var i=this.getLineOffsets();if(r.line>=i.length)return this._content.length;if(r.line<0)return 0;var n=i[r.line],t=r.line+1<i.length?i[r.line+1]:this._content.length;return Math.max(Math.min(n+r.character,t),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}(),s;(function(e){var r=Object.prototype.toString;function i(g){return typeof g<"u"}e.defined=i;function n(g){return typeof g>"u"}e.undefined=n;function t(g){return g===!0||g===!1}e.boolean=t;function o(g){return r.call(g)==="[object String]"}e.string=o;function a(g){return r.call(g)==="[object Number]"}e.number=a;function u(g,R,X){return r.call(g)==="[object Number]"&&R<=g&&g<=X}e.numberRange=u;function l(g){return r.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}e.integer=l;function d(g){return r.call(g)==="[object Number]"&&0<=g&&g<=2147483647}e.uinteger=d;function v(g){return r.call(g)==="[object Function]"}e.func=v;function w(g){return g!==null&&typeof g=="object"}e.objectLiteral=w;function y(g,R){return Array.isArray(g)&&g.every(R)}e.typedArray=y})(s||(s={}));var Pe=class{constructor(e,r,i){this._languageId=e,this._worker=r;let n=o=>{let a=o.getLanguageId();if(a!==this._languageId)return;let u;this._listener[o.uri.toString()]=o.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(o.uri,a),500)}),this._doValidate(o.uri,a)},t=o=>{c.editor.setModelMarkers(o,this._languageId,[]);let a=o.uri.toString(),u=this._listener[a];u&&(u.dispose(),delete this._listener[a])};this._disposables.push(c.editor.onDidCreateModel(n)),this._disposables.push(c.editor.onWillDisposeModel(t)),this._disposables.push(c.editor.onDidChangeModelLanguage(o=>{t(o.model),n(o.model)})),this._disposables.push(i(o=>{c.editor.getModels().forEach(a=>{a.getLanguageId()===this._languageId&&(t(a),n(a))})})),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(t);for(let o in this._listener)this._listener[o].dispose()}}),c.editor.getModels().forEach(n)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables.length=0}_doValidate(e,r){this._worker(e).then(i=>i.doValidation(e.toString())).then(i=>{let n=i.map(o=>ft(e,o)),t=c.editor.getModel(e);t&&t.getLanguageId()===r&&c.editor.setModelMarkers(t,r,n)}).then(void 0,i=>{console.error(i)})}};function lt(e){switch(e){case I.Error:return c.MarkerSeverity.Error;case I.Warning:return c.MarkerSeverity.Warning;case I.Information:return c.MarkerSeverity.Info;case I.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}function ft(e,r){let i=typeof r.code=="number"?String(r.code):r.code;return{severity:lt(r.severity),startLineNumber:r.range.start.line+1,startColumn:r.range.start.character+1,endLineNumber:r.range.end.line+1,endColumn:r.range.end.character+1,message:r.message,code:i,source:r.source}}var Le=class{constructor(e,r){this._worker=e,this._triggerCharacters=r}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,r,i,n){let t=e.uri;return this._worker(t).then(o=>o.doComplete(t.toString(),x(r))).then(o=>{if(!o)return;let a=e.getWordUntilPosition(r),u=new c.Range(r.lineNumber,a.startColumn,r.lineNumber,a.endColumn),l=o.items.map(d=>{let v={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:pt(d.command),range:u,kind:vt(d.kind)};return d.textEdit&&(ht(d.textEdit)?v.range={insert:_(d.textEdit.insert),replace:_(d.textEdit.replace)}:v.range=_(d.textEdit.range),v.insertText=d.textEdit.newText),d.additionalTextEdits&&(v.additionalTextEdits=d.additionalTextEdits.map(S)),d.insertTextFormat===Z.Snippet&&(v.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:o.isIncomplete,suggestions:l}})}};function x(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function q(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function _(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ht(e){return typeof e.insert<"u"&&typeof e.replace<"u"}function vt(e){let r=c.languages.CompletionItemKind;switch(e){case f.Text:return r.Text;case f.Method:return r.Method;case f.Function:return r.Function;case f.Constructor:return r.Constructor;case f.Field:return r.Field;case f.Variable:return r.Variable;case f.Class:return r.Class;case f.Interface:return r.Interface;case f.Module:return r.Module;case f.Property:return r.Property;case f.Unit:return r.Unit;case f.Value:return r.Value;case f.Enum:return r.Enum;case f.Keyword:return r.Keyword;case f.Snippet:return r.Snippet;case f.Color:return r.Color;case f.File:return r.File;case f.Reference:return r.Reference}return r.Property}function S(e){if(e)return{range:_(e.range),text:e.newText}}function pt(e){return e&&e.command==="editor.action.triggerSuggest"?{id:e.command,title:e.title,arguments:e.arguments}:void 0}var Fe=class{constructor(e){this._worker=e}provideHover(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.doHover(n.toString(),x(r))).then(t=>{if(t)return{range:_(t.range),contents:_t(t.contents)}})}};function mt(e){return e&&typeof e=="object"&&typeof e.kind=="string"}function je(e){return typeof e=="string"?{value:e}:mt(e)?e.kind==="plaintext"?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+`
`+e.value+"\n```\n"}}function _t(e){if(e)return Array.isArray(e)?e.map(je):[je(e)]}var Oe=class{constructor(e){this._worker=e}provideDocumentHighlights(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.findDocumentHighlights(n.toString(),x(r))).then(t=>{if(t)return t.map(o=>({range:_(o.range),kind:wt(o.kind)}))})}};function wt(e){switch(e){case j.Read:return c.languages.DocumentHighlightKind.Read;case j.Write:return c.languages.DocumentHighlightKind.Write;case j.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var Ne=class{constructor(e){this._worker=e}provideDefinition(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.findDefinition(n.toString(),x(r))).then(t=>{if(t)return[Ue(t)]})}};function Ue(e){return{uri:c.Uri.parse(e.uri),range:_(e.range)}}var We=class{constructor(e){this._worker=e}provideReferences(e,r,i,n){let t=e.uri;return this._worker(t).then(o=>o.findReferences(t.toString(),x(r))).then(o=>{if(o)return o.map(Ue)})}},Ve=class{constructor(e){this._worker=e}provideRenameEdits(e,r,i,n){let t=e.uri;return this._worker(t).then(o=>o.doRename(t.toString(),x(r),i)).then(o=>bt(o))}};function bt(e){if(!e||!e.changes)return;let r=[];for(let i in e.changes){let n=c.Uri.parse(i);for(let t of e.changes[i])r.push({resource:n,versionId:void 0,textEdit:{range:_(t.range),text:t.newText}})}return{edits:r}}var He=class{constructor(e){this._worker=e}provideDocumentSymbols(e,r){let i=e.uri;return this._worker(i).then(n=>n.findDocumentSymbols(i.toString())).then(n=>{if(n)return n.map(t=>({name:t.name,detail:"",containerName:t.containerName,kind:yt(t.kind),range:_(t.location.range),selectionRange:_(t.location.range),tags:[]}))})}};function yt(e){let r=c.languages.SymbolKind;switch(e){case h.File:return r.Array;case h.Module:return r.Module;case h.Namespace:return r.Namespace;case h.Package:return r.Package;case h.Class:return r.Class;case h.Method:return r.Method;case h.Property:return r.Property;case h.Field:return r.Field;case h.Constructor:return r.Constructor;case h.Enum:return r.Enum;case h.Interface:return r.Interface;case h.Function:return r.Function;case h.Variable:return r.Variable;case h.Constant:return r.Constant;case h.String:return r.String;case h.Number:return r.Number;case h.Boolean:return r.Boolean;case h.Array:return r.Array}return r.Function}var kt=class{constructor(e){this._worker=e}provideLinks(e,r){let i=e.uri;return this._worker(i).then(n=>n.findDocumentLinks(i.toString())).then(n=>{if(n)return{links:n.map(t=>({range:_(t.range),url:t.target}))}})}},Ke=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.format(n.toString(),null,Xe(r)).then(o=>{if(!(!o||o.length===0))return o.map(S)}))}},ze=class{constructor(e){this._worker=e}provideDocumentRangeFormattingEdits(e,r,i,n){let t=e.uri;return this._worker(t).then(o=>o.format(t.toString(),q(r),Xe(i)).then(a=>{if(!(!a||a.length===0))return a.map(S)}))}};function Xe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Be=class{constructor(e){this._worker=e}provideDocumentColors(e,r){let i=e.uri;return this._worker(i).then(n=>n.findDocumentColors(i.toString())).then(n=>{if(n)return n.map(t=>({color:t.color,range:_(t.range)}))})}provideColorPresentations(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.getColorPresentations(n.toString(),r.color,q(r.range))).then(t=>{if(t)return t.map(o=>{let a={label:o.label};return o.textEdit&&(a.textEdit=S(o.textEdit)),o.additionalTextEdits&&(a.additionalTextEdits=o.additionalTextEdits.map(S)),a})})}},$e=class{constructor(e){this._worker=e}provideFoldingRanges(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.getFoldingRanges(n.toString(),r)).then(t=>{if(t)return t.map(o=>{let a={start:o.startLine+1,end:o.endLine+1};return typeof o.kind<"u"&&(a.kind=Et(o.kind)),a})})}};function Et(e){switch(e){case T.Comment:return c.languages.FoldingRangeKind.Comment;case T.Imports:return c.languages.FoldingRangeKind.Imports;case T.Region:return c.languages.FoldingRangeKind.Region}}var Qe=class{constructor(e){this._worker=e}provideSelectionRanges(e,r,i){let n=e.uri;return this._worker(n).then(t=>t.getSelectionRanges(n.toString(),r.map(x))).then(t=>{if(t)return t.map(o=>{let a=[];for(;o;)a.push({range:_(o.range)}),o=o.parent;return a})})}};function xt(e){let r=[],i=[],n=new te(e);r.push(n);let t=(...a)=>n.getLanguageServiceWorker(...a);function o(){let{languageId:a,modeConfiguration:u}=e;Ye(i),u.completionItems&&i.push(c.languages.registerCompletionItemProvider(a,new Le(t,["/","-",":"]))),u.hovers&&i.push(c.languages.registerHoverProvider(a,new Fe(t))),u.documentHighlights&&i.push(c.languages.registerDocumentHighlightProvider(a,new Oe(t))),u.definitions&&i.push(c.languages.registerDefinitionProvider(a,new Ne(t))),u.references&&i.push(c.languages.registerReferenceProvider(a,new We(t))),u.documentSymbols&&i.push(c.languages.registerDocumentSymbolProvider(a,new He(t))),u.rename&&i.push(c.languages.registerRenameProvider(a,new Ve(t))),u.colors&&i.push(c.languages.registerColorProvider(a,new Be(t))),u.foldingRanges&&i.push(c.languages.registerFoldingRangeProvider(a,new $e(t))),u.diagnostics&&i.push(new Pe(a,t,e.onDidChange)),u.selectionRanges&&i.push(c.languages.registerSelectionRangeProvider(a,new Qe(t))),u.documentFormattingEdits&&i.push(c.languages.registerDocumentFormattingEditProvider(a,new Ke(t))),u.documentRangeFormattingEdits&&i.push(c.languages.registerDocumentRangeFormattingEditProvider(a,new ze(t)))}return o(),r.push(Je(i)),Je(r)}function Je(e){return{dispose:()=>Ye(e)}}function Ye(e){for(;e.length;)e.pop().dispose()}return ut(ee)})();return qe});

//# sourceMappingURL=cssMode.js.map