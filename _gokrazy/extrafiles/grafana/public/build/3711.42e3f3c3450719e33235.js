(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3711],{"../../opt/drone/yarncache/brace-npm-0.11.1-a66ecae2b2-def78159ab.zip/node_modules/brace/mode/sql.js":()=>{ace.define("ace/mode/sql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var n=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,i=function(){var e=this.createKeywordMapper({"support.function":"avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",keyword:"select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant","constant.language":"true|false","storage.type":"int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer"},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"string",regex:"`.*?`"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};n.inherits(i,a),t.SqlHighlightRules=i})),ace.define("ace/mode/sql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sql_highlight_rules"],(function(e,t,r){"use strict";var n=e("../lib/oop"),a=e("./text").Mode,i=e("./sql_highlight_rules").SqlHighlightRules,o=function(){this.HighlightRules=i,this.$behaviour=this.$defaultBehaviour};n.inherits(o,a),function(){this.lineCommentStart="--",this.$id="ace/mode/sql"}.call(o.prototype),t.Mode=o}))}}]);
//# sourceMappingURL=3711.42e3f3c3450719e33235.js.map