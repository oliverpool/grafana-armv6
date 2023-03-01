"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[335],{"./public/app/plugins/datasource/cloudwatch/metric-math/language.ts":(e,n,t)=>{t.r(n),t.d(n,{METRIC_MATH_FNS:()=>s,METRIC_MATH_KEYWORDS:()=>i,METRIC_MATH_OPERATORS:()=>r,METRIC_MATH_PERIODS:()=>a,METRIC_MATH_STATISTIC_KEYWORD_STRINGS:()=>o,conf:()=>u,language:()=>l});const s=["ABS","ANOMALY_DETECTION_BAND","AVG","CEIL","DATAPOINT_COUNT","DIFF","DIFF_TIME","FILL","FIRST","LAST","FLOOR","IF","INSIGHT_RULE_METRIC","LOG","LOG10","MAX","METRIC_COUNT","METRICS","MIN","MINUTE","HOUR","DAY","DATE","MONTH","YEAR","EPOCH","PERIOD","RATE","REMOVE_EMPTY","RUNNING_SUM","SEARCH","SERVICE_QUOTA","SLICE","SORT","STDDEV","SUM","TIME_SERIES"],o=["Average","Maximum","Minimum","Sum","SampleCount"],i=["REPEAT","LINEAR","ASC","DSC"],r=["+","-","*","/","^","==","!=","<=",">=","<",">","AND","&&","OR","||"],a=[10,60,300,900,3e3,21600,86400],l={id:"metricMath",ignoreCase:!1,brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"{",close:"}",token:"delimiter.curly"}],tokenizer:{root:[{include:"@nonNestableStates"},{include:"@strings"}],nonNestableStates:[{include:"@variables"},{include:"@whitespace"},{include:"@numbers"},{include:"@assignment"},{include:"@keywords"},{include:"@operators"},{include:"@builtInFunctions"},[/[;,.]/,"delimiter"],[/[(){}\[\]]/,"@brackets"]],keywords:[[i.map(p).join("|"),"keyword"]],operators:[[r.map(p).join("|"),"operator"]],builtInFunctions:[[s.map(p).join("|"),"predefined"]],variables:[[/\$[a-zA-Z0-9-_]+/,"variable"]],whitespace:[[/\s+/,"white"]],assignment:[[/=/,"tag"]],numbers:[[/0[xX][0-9a-fA-F]*/,"number"],[/[$][+-]*\d*(\.\d*)?/,"number"],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,"number"]],strings:[[/'/,{token:"string",next:"@string"}],[/"/,{token:"type",next:"@string_double"}]],string:[[/{/,{token:"delimiter.curly",next:"@nestedCurly"}],[/\(/,{token:"delimiter.parenthesis",next:"@nestedParens"}],[/"/,{token:"type",next:"@string_double"}],[/'/,{token:"string",next:"@pop"}],{include:"@nonNestableStates"},[/[^']/,"string"]],string_double:[[/[^"]/,"type"],[/"/,{token:"type",next:"@pop"}]],nestedCurly:[[/}/,{token:"delimiter.curly",next:"@pop"}],[/'/,{token:"string",next:"@string"}],[/"/,{token:"type",next:"@string_double"}]],nestedParens:[[/\)/,{token:"delimiter.parenthesis",next:"@pop"}],[/'/,{token:"string",next:"@string"}],[/"/,{token:"type",next:"@string_double"}]]}},u={brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}]};function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}}]);
//# sourceMappingURL=335.42e3f3c3450719e33235.js.map