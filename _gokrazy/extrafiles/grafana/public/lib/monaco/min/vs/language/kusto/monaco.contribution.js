/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-kusto version: 5.3.6(undefined)
 * Released under the MIT license
 * https://https://github.com/Azure/monaco-kusto/blob/master/README.md
 *-----------------------------------------------------------------------------*/define("vs/language/kusto/commandHighlighter",["require","exports"],function(f,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function o(t){var i=this;this.editor=t,this.disposables=[],this.decorations=[],this.editor.onDidChangeCursorSelection(function(d){i.editor.getModel().getLanguageId()==="kusto"&&i.highlightCommandUnderCursor(d)})}return o.prototype.getId=function(){return o.ID},o.prototype.dispose=function(){this.disposables.forEach(function(t){return t.dispose()})},o.prototype.highlightCommandUnderCursor=function(t){if(t.selection.isEmpty()){var i=[{range:this.editor.getCurrentCommandRange(t.selection.getStartPosition()),options:o.CURRENT_COMMAND_HIGHLIGHT}];this.decorations=this.editor.deltaDecorations(this.decorations,i)}else this.decorations=this.editor.deltaDecorations(this.decorations,[])},o.ID="editor.contrib.kustoCommandHighliter",o.CURRENT_COMMAND_HIGHLIGHT={className:"selectionHighlight"},o}();r.default=s}),define("vs/language/kusto/commandFormatter",["require","exports"],function(f,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=function(o){var t=this;this.editor=o,this.actionAdded=!1,o.onDidChangeCursorSelection(function(i){t.editor.getModel().getLanguageId()==="kusto"&&(t.actionAdded||(o.addAction({id:"editor.action.kusto.formatCurrentCommand",label:"Format Command Under Cursor",keybindings:[monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyK,monaco.KeyMod.CtrlCmd|monaco.KeyCode.KeyF)],run:function(d){o.trigger("KustoCommandFormatter","editor.action.formatSelection",null)},contextMenuGroupId:"1_modification"}),t.actionAdded=!0))})};r.default=s}),define("vs/language/kusto/extendedEditor",["require","exports"],function(f,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.extend=void 0,r.extend=function(s){Object.getPrototypeOf(s).getCurrentCommandRange=function(o){for(var t=o.lineNumber-1,i=this.getModel().getLinesContent(),d=0,g=[],u=0;u<i.length&&(i[u].trim()===""?g.push({commandOrdinal:d++,lineNumber:u}):g.push({commandOrdinal:d,lineNumber:u}),!(u>t&&d>g[t].commandOrdinal));u++);var m=g[t].commandOrdinal,l=g.filter(function(c){return c.commandOrdinal===m}),e=l[0].lineNumber+1,n=l[l.length-1].lineNumber+1,a=i[n-1].length+1;return new monaco.Range(e,1,n,a)}}}),define("vs/language/kusto/monaco.contribution",["require","exports","./commandHighlighter","./commandFormatter","./extendedEditor"],function(f,r,s,o,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.setupMonacoKusto=r.LanguageServiceDefaultsImpl=void 0;var i=monaco.Emitter,d=function(){function e(n){this._onDidChange=new i,this.setLanguageSettings(n),this._workerMaxIdleTime=0}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageSettings",{get:function(){return this._languageSettings},enumerable:!1,configurable:!0}),e.prototype.setLanguageSettings=function(n){this._languageSettings=n||Object.create(null),this._onDidChange.fire(this)},e.prototype.setMaximumWorkerIdleTime=function(n){this._workerMaxIdleTime=n},e.prototype.getWorkerMaxIdleTime=function(){return this._workerMaxIdleTime},e}();r.LanguageServiceDefaultsImpl=d;var g={includeControlCommands:!0,newlineAfterPipe:!0,openSuggestionDialogAfterPreviousSuggestionAccepted:!0,useIntellisenseV2:!0,useSemanticColorization:!0,useTokenColorization:!1,enableHover:!0,formatter:{indentationSize:4,pipeOperatorStyle:"Smart"},syntaxErrorAsMarkDown:{enableSyntaxErrorAsMarkDown:!1},enableQueryWarnings:!1,enableQuerySuggestions:!1,disabledDiagnoticCodes:[]};function u(){return new Promise(function(e,n){m(function(a){a.getKustoWorker().then(e,n)})})}function m(e){f(["vs/language/kusto/kustoMode"],e)}function l(e){var n=new d(g);e.languages.kusto={kustoDefaults:n,getKustoWorker:u},e.languages.onLanguage("kusto",function(){m(function(a){return a.setupMode(n,e)})}),e.languages.register({id:"kusto",extensions:[".csl",".kql"]}),e.editor.defineTheme("kusto-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"008000"},{token:"variable.predefined",foreground:"800080"},{token:"function",foreground:"0000FF"},{token:"operator.sql",foreground:"CC3700"},{token:"string",foreground:"B22222"},{token:"operator.scss",foreground:"0000FF"},{token:"variable",foreground:"C71585"},{token:"variable.parameter",foreground:"9932CC"},{token:"",foreground:"000000"},{token:"type",foreground:"0000FF"},{token:"tag",foreground:"0000FF"},{token:"annotation",foreground:"2B91AF"},{token:"keyword",foreground:"0000FF"},{token:"number",foreground:"191970"},{token:"annotation",foreground:"9400D3"},{token:"invalid",background:"cd3131"}],colors:{}}),e.editor.defineTheme("kusto-dark",{base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"608B4E"},{token:"variable.predefined",foreground:"4ec9b0"},{token:"function",foreground:"dcdcaa"},{token:"operator.sql",foreground:"9cdcfe"},{token:"string",foreground:"ce9178"},{token:"operator.scss",foreground:"569cd6"},{token:"variable",foreground:"4ec9b0"},{token:"variable.parameter",foreground:"c586c0"},{token:"",foreground:"d4d4d4"},{token:"type",foreground:"569cd6"},{token:"tag",foreground:"569cd6"},{token:"annotation",foreground:"9cdcfe"},{token:"keyword",foreground:"569cd6"},{token:"number",foreground:"d7ba7d"},{token:"annotation",foreground:"b5cea8"},{token:"invalid",background:"cd3131"}],colors:{}}),e.editor.defineTheme("kusto-dark2",{base:"vs-dark",inherit:!0,rules:[],colors:{"editor.background":"#1B1A19","editorSuggestWidget.selectedBackground":"#004E8C"}}),e.editor.onDidCreateEditor(function(a){t.extend(a),new s.default(a),function(c){return c.addAction!==void 0}(a)&&new o.default(a),function(c){c.onDidChangeCursorSelection(function(k){if(n&&n.languageSettings&&n.languageSettings.openSuggestionDialogAfterPreviousSuggestionAccepted){if(!(k.source==="snippet"&&k.reason===monaco.editor.CursorChangeReason.NotSet)||c.getModel().getWordAtPosition(k.selection.getPosition())!==null)return;k.selection,setTimeout(function(){return c.trigger("monaco-kusto","editor.action.triggerSuggest",{})},10)}})}(a)})}r.setupMonacoKusto=l,monaco.editor&&l(monaco)});

//# sourceMappingURL=monaco.contribution.js.map