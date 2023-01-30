"use strict";/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
* Released under the MIT license
* https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
*-----------------------------------------------------------------------------*/define("vs/basic-languages/bicep/bicep",["require","require"],C=>{var c=(()=>{var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,p=(e,t)=>{for(var o in t)r(e,o,{get:t[o],enumerable:!0})},m=(e,t,o,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of l(t))!g.call(e,n)&&n!==o&&r(e,n,{get:()=>t[n],enumerable:!(a=s(t,n))||a.enumerable});return e},u=e=>m(r({},"__esModule",{value:!0}),e),i={};p(i,{conf:()=>$,language:()=>P});var k=e=>`\\b${e}\\b`,x="[_a-zA-Z]",d="[_a-zA-Z0-9]",b=k(`${x}${d}*`),f=["targetScope","resource","module","param","var","output","for","in","if","existing"],v=["true","false","null"],y="[ \\t\\r\\n]",w="[0-9]+",$={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'"},{open:"'''",close:"'''"}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:"'''",close:"'''",notIn:["string","comment"]}],autoCloseBefore:`:.,=}])' 
	`,indentationRules:{increaseIndentPattern:new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),decreaseIndentPattern:new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")}},P={defaultToken:"",tokenPostfix:".bicep",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],symbols:/[=><!~?:&|+\-*/^%]+/,keywords:f,namedLiterals:v,escapes:"\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",tokenizer:{root:[{include:"@expression"},{include:"@whitespace"}],stringVerbatim:[{regex:"(|'|'')[^']",action:{token:"string"}},{regex:"'''",action:{token:"string.quote",next:"@pop"}}],stringLiteral:[{regex:"\\${",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"[^\\\\'$]+",action:{token:"string"}},{regex:"@escapes",action:{token:"string.escape"}},{regex:"\\\\.",action:{token:"string.escape.invalid"}},{regex:"'",action:{token:"string",next:"@pop"}}],bracketCounting:[{regex:"{",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"}",action:{token:"delimiter.bracket",next:"@pop"}},{include:"expression"}],comment:[{regex:"[^\\*]+",action:{token:"comment"}},{regex:"\\*\\/",action:{token:"comment",next:"@pop"}},{regex:"[\\/*]",action:{token:"comment"}}],whitespace:[{regex:y},{regex:"\\/\\*",action:{token:"comment",next:"@comment"}},{regex:"\\/\\/.*$",action:{token:"comment"}}],expression:[{regex:"'''",action:{token:"string.quote",next:"@stringVerbatim"}},{regex:"'",action:{token:"string.quote",next:"@stringLiteral"}},{regex:w,action:{token:"number"}},{regex:b,action:{cases:{"@keywords":{token:"keyword"},"@namedLiterals":{token:"keyword"},"@default":{token:"identifier"}}}}]}};return u(i)})();return c});

//# sourceMappingURL=bicep.js.map