/*! For license information please see 930.0cedc4c919aff84ce58c.js.LICENSE.txt */
"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[930],{"../../opt/drone/yarncache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.js":(e,n,o)=>{o.r(n),o.d(n,{conf:()=>t,language:()=>s});var t={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"""',close:'"""',notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"""',close:'"""'},{open:'"',close:'"'}],folding:{offSide:!0}},s={defaultToken:"invalid",tokenPostfix:".gql",keywords:["null","true","false","query","mutation","subscription","extend","schema","directive","scalar","type","interface","union","enum","input","implements","fragment","on"],typeKeywords:["Int","Float","String","Boolean","ID"],directiveLocations:["SCHEMA","SCALAR","OBJECT","FIELD_DEFINITION","ARGUMENT_DEFINITION","INTERFACE","UNION","ENUM","ENUM_VALUE","INPUT_OBJECT","INPUT_FIELD_DEFINITION","QUERY","MUTATION","SUBSCRIPTION","FIELD","FRAGMENT_DEFINITION","FRAGMENT_SPREAD","INLINE_FRAGMENT","VARIABLE_DEFINITION"],operators:["=","!","?",":","&","|"],symbols:/[=!?:&|]+/,escapes:/\\(?:["\\\/bfnrt]|u[0-9A-Fa-f]{4})/,tokenizer:{root:[[/[a-z_][\w$]*/,{cases:{"@keywords":"keyword","@default":"key.identifier"}}],[/[$][\w$]*/,{cases:{"@keywords":"keyword","@default":"argument.identifier"}}],[/[A-Z][\w\$]*/,{cases:{"@typeKeywords":"keyword","@default":"type.identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/@\s*[a-zA-Z_\$][\w\$]*/,{token:"annotation",log:"annotation token: $0"}],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/0[xX][0-9a-fA-F]+/,"number.hex"],[/\d+/,"number"],[/[;,.]/,"delimiter"],[/"""/,{token:"string",next:"@mlstring",nextEmbedded:"markdown"}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,{token:"string.quote",bracket:"@open",next:"@string"}]],mlstring:[[/[^"]+/,"string"],['"""',{token:"string",next:"@pop",nextEmbedded:"@pop"}]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,{token:"string.quote",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/#.*$/,"comment"]]}}}}]);
//# sourceMappingURL=930.0cedc4c919aff84ce58c.js.map