"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[319],{"./public/app/plugins/datasource/testdata/module.tsx":(e,a,t)=>{t.r(a),t.d(a,{plugin:()=>ye});var n=t("./packages/grafana-data/src/index.ts"),r=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),s=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js"),l=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),i=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js"),o=t("./packages/grafana-runtime/src/index.ts");function d(e,a){const t=["A","B","C"],n=[];if(a>5)return[];for(const r of t){const t=`${e}${r}`;n.push({name:t,children:d(t,a+1)})}return n}function u(e,a,t){if(t>=a.length)return e;if("*"===a[t])return e;const n=a[t];let r=[],s=[n];n.startsWith("{")&&(s=n.replace(/\{|\}/g,"").split(","));for(const n of e)for(const e of s)if(-1!==e.indexOf("*")){const s=e.replace("*","");new RegExp(`^${s}.*`,"gi").test(n.name)&&(r=r.concat(u([n],a,t+1)))}else n.name===e&&(r=r.concat(u(n.children,a,t+1)));return r}function c(e){if(0===e.indexOf("value"))return[{name:e,children:[]}];return u(d("",0),e.split("."),0)}var p=t("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),m=t("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");let h=0;function g(){return h=(h+Math.floor(5*Math.random()))%v.length,v[h]}const v=["At","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","occaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","Et","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","Temporibus","autem","quibusdam","et","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","et","molestiae","non","recusandae","Itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","ut","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat"];var b=t("./public/app/features/dashboard/dashgrid/liveTimer.ts"),f=t("./public/app/features/live/data/StreamingDataFrame.ts");const y={type:"signal",speed:250,spread:3.5,noise:2.2,bands:1};function F(e,a){const t=(0,p.defaults)(e.stream,y);if("signal"===t.type)return function(e,a,t){return new m.y((r=>{const s=`signal-${t.panelId}-${e.refId}`,l=t.maxDataPoints||1e3,i={refId:e.refId,name:e.alias||"Signal "+e.refId,fields:[{name:"time",type:n.FieldType.time},{name:"value",type:n.FieldType.number}]},{spread:o,speed:d,bands:u=0,noise:c}=a;for(let e=0;e<u;e++){const a=u>1?` ${e+1}`:"";i.fields.push({name:"Min"+a,type:n.FieldType.number}),i.fields.push({name:"Max"+a,type:n.FieldType.number})}const p=f.Av.fromDataFrameJSON({schema:i},{maxLength:l});let m=100*Math.random(),h=null,g=-1;const v=e=>{m+=(Math.random()-.5)*o;const a={values:[[e],[m]]};let t=m,n=m;for(let e=0;e<u;e++)t-=Math.random()*c,n+=Math.random()*c,a.values.push([t]),a.values.push([n]);const r={data:a};return p.push(r)};{let e=Date.now()-l*d;for(let a=0;a<l;a++)v(e),e+=d}const y=()=>{v(Date.now());(b.A.lastUpdate-g>1e3||b.A.ok)&&(r.next({data:[p],key:s,state:n.LoadingState.Streaming}),g=b.A.lastUpdate),h=setTimeout(y,d)};return setTimeout(y,5),()=>{console.log("unsubscribing to stream "+s),clearTimeout(h)}}))}(e,t,a);if("logs"===t.type)return function(e,a,t){return new m.y((r=>{const s=`logs-${t.panelId}-${e.refId}`,l=t.maxDataPoints||1e3,i=new n.CircularDataFrame({append:"tail",capacity:l});i.refId=e.refId,i.name=e.alias||"Logs "+e.refId,i.addField({name:"line",type:n.FieldType.string}),i.addField({name:"time",type:n.FieldType.time}),i.meta={preferredVisualisationType:"logs"};const{speed:o}=a;let d=null;const u=()=>{i.fields[0].values.add(Date.now()),i.fields[1].values.add(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,a=g();for(;a.length<e;)a+=" "+g();return a}()),r.next({data:[i],key:s}),d=setTimeout(u,o)};return setTimeout(u,5),()=>{console.log("unsubscribing to stream "+s),clearTimeout(d)}}))}(e,t,a);if("fetch"===t.type)return function(e,a,t){return new m.y((r=>{const s=`fetch-${t.panelId}-${e.refId}`,l=t.maxDataPoints||1e3;let i,o=new n.CircularDataFrame({append:"tail",capacity:l});o.refId=e.refId,o.name=e.alias||"Fetch "+e.refId;const d=new n.CSVReader({callback:{onHeader:a=>{o.fields.length&&(o=new n.CircularDataFrame({append:"tail",capacity:l}),o.refId=e.refId,o.name="Fetch "+e.refId);for(const e of a)o.addField(e)},onRow:e=>{o.add(e)}}}),u=e=>{if(e.value){const a=(new TextDecoder).decode(e.value);d.readCSV(a)}return r.next({data:[o],key:s,state:e.done?n.LoadingState.Done:n.LoadingState.Streaming}),e.done?(console.log("Finished stream"),void r.complete()):i.read().then(u)};if(!a.url)throw new Error("query.url is not defined");return fetch(new Request(a.url)).then((e=>{e.body&&(i=e.body.getReader(),i.read().then(u))})),()=>{console.log("unsubscribing to stream "+s)}}))}(e,t,a);throw new Error(`Unknown Stream Type: ${t.type}`)}var x=t("./public/app/features/variables/utils.ts");class w extends n.StandardVariableSupport{toDataQuery(e){return{refId:"TestDataDataSource-QueryVariable",stringInput:e.query,scenarioId:"variables-query",csvWave:void 0}}}const j={fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string,config:{links:[{title:"Traces/All",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}"))'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/OK",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { ok = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Errors",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { error = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Faults",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { fault = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}}]},values:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{name:n.NodeGraphDataFrameFieldNames.title,type:n.FieldType.string,config:{displayName:"Name"},values:["auth","products","customers","orders","products","orders","api","shipping","orders","execute-api","shipping","www","api","www","products"]},{name:n.NodeGraphDataFrameFieldNames.subTitle,type:n.FieldType.string,config:{displayName:"Type"},values:["Compute","SQL","SQL","SQL","remote","Function","Compute","Function","Function","remote","Function","Compute","client","client","Compute"]},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.number,config:{unit:"ms/t",displayName:"Average response time"},values:[3.5394042646735553,15.906441318223264,4.913011921591567,7.4163203042094095,1092,22.85961441405067,56.135855729084696,4.45946191601527,12.818300278280843,4.25,12.565442646791492,77.63447512700567,40.387096774193544,77.63447512700567,27.648950187374872]},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.number,config:{unit:"t/min",displayName:"Transactions per minute"},values:[50.56317154501667,682.4,512.8416666666667,125.64444444444445,.005585812037424941,137.59722222222223,300.0527777777778,30.582348853370394,125.77222222222223,.028706417080318163,30.582348853370394,165.675,.100021510002151,165.675,162.33055555555555]},{name:n.NodeGraphDataFrameFieldNames.arc+"success",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"green"},displayName:"Sucesss"},values:[.9338865684765882,1,1,1,.5,1,.9901128505170387,.9069260134520997,1,0,.9069260134520997,.9624432037288534,0,.9624432037288534,.9824945669843769]},{name:n.NodeGraphDataFrameFieldNames.arc+"faults",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"red"},displayName:"Faults"},values:[0,0,0,0,.5,0,.009479813736472288,0,0,0,0,.017168821152524185,0,.017168821152524185,.01750543301562313]},{name:n.NodeGraphDataFrameFieldNames.arc+"errors",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"semi-dark-yellow"},displayName:"Errors"},values:[.06611343152341174,0,0,0,0,0,.0004073357464890436,.09307398654790038,0,1,.09307398654790038,.02038797511862247,1,.02038797511862247,0]},{name:n.NodeGraphDataFrameFieldNames.arc+"throttled",type:n.FieldType.number,config:{color:{mode:n.FieldColorModeId.Fixed,fixedColor:"purple"},displayName:"Throttled"},values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}],meta:{preferredVisualisationType:"nodeGraph"},name:"nodes"},C={fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string,config:{links:[{title:"Traces/All",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}")'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/OK",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { ok = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Errors",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { error = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Faults",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { fault = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}}]},values:["0__2","5__8","6__0","6__5","6__9","6__2","6__14","6__4","8__3","10__7","11__0","11__6","12__6","13__11","14__1","14__2","14__10"]},{name:n.NodeGraphDataFrameFieldNames.source,type:n.FieldType.string,config:{},values:[0,5,6,6,6,6,6,6,8,10,11,11,12,13,14,14,14]},{name:"sourceName",type:n.FieldType.string,config:{},values:["auth","orders","api","api","api","api","api","api","orders","shipping","www","www","api","www","products","products","products"]},{name:n.NodeGraphDataFrameFieldNames.target,type:n.FieldType.string,config:{},values:[2,8,0,5,9,2,14,4,3,7,0,6,6,11,1,2,10]},{name:"targetName",type:n.FieldType.string,config:{},values:["customers","orders","auth","orders","execute-api","customers","products","products","orders","shipping","auth","api","api","www","products","customers","shipping"]},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.string,config:{displayName:"Response percentage"},values:["Success 100.00%","Success 100.00%","Success 100.00%","Success 100.00%","Errors 100.00%","Success 100.00%","Faults 1.75%","Faults 50.00%","Success 100.00%","Errors 9.31%","Errors 6.62%","Faults 1.13%","Errors 100.00%","Faults 1.72%","Success 100.00%","Success 100.00%","Faults 9.30%"]},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.number,config:{unit:"t/min",displayName:"Transactions per minute"},values:[50.56317154501667,125.77222222222223,.03333333333333333,137.59722222222223,.022222222222222223,299.96666666666664,162.33055555555555,.005555555555555556,125.64444444444445,30.582348853370394,50.51111111111111,299.9166666666667,.100021510002151,165.675,682.4,162.33055555555555,30.558333333333334]}],meta:{preferredVisualisationType:"nodeGraph"},name:"edges"};function I(e){const a=Math.random(),t=1-a;return{id:e.toString(),title:`service:${e}`,subTitle:"service",success:a,error:t,stat1:Math.random(),stat2:Math.random(),edges:[]}}class T extends o.DataSourceWithBackend{constructor(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.getTemplateSrv)();var t,n,r;super(e),r=void 0,(n="scenariosCache")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.templateSrv=a,this.variables=new w}query(e){const a=[],t=[];for(const n of e.targets)if(!n.hide)switch(this.resolveTemplateVariables(n,e.scopedVars),n.scenarioId){case"live":t.push(N(n,e));break;case"streaming_client":t.push(F(n,e));break;case"grafana_api":t.push(S(n,e));break;case"annotations":t.push(this.annotationDataTopicTest(n,e));break;case"variables-query":t.push(this.variablesQuery(n,e));break;case"node_graph":t.push(this.nodesQuery(n,e));break;case"raw_frame":t.push(this.rawFrameQuery(n,e));break;case"manual_entry":{let e="Time,Value\n";if(n.points)for(const a of n.points)e+=`${a[1]},${a[0]}\n`;n.scenarioId="csv_content",n.csvContent=e}default:n.alias&&(n.alias=this.templateSrv.replace(n.alias,e.scopedVars)),a.push(n)}if(a.length){const n=Object.assign({},e,{targets:a});t.push(super.query(n))}return 0===t.length?(0,r.of)({data:[]}):(0,s.T)(...t)}resolveTemplateVariables(e,a){e.labels=this.templateSrv.replace(e.labels,a)}annotationDataTopicTest(e,a){const t=this.buildFakeAnnotationEvents(a.range,50),s=new n.ArrayDataFrame(t);return s.meta={dataTopic:n.DataTopic.Annotations},(0,r.of)({key:e.refId,data:[s]}).pipe((0,i.g)(100))}buildFakeAnnotationEvents(e,a){let t=e.from.valueOf();const n=[],r=(e.to.valueOf()-t)/a;for(let e=0;e<a;e++)n.push({time:t,text:'This is the text, <a href="https://grafana.com">Grafana.com</a>',tags:["text","server"]}),t+=r;return n}annotationQuery(e){return Promise.resolve(this.buildFakeAnnotationEvents(e.range,10))}getQueryDisplayText(e){return e.alias?e.scenarioId+" as "+e.alias:e.scenarioId}testDatasource(){return Promise.resolve({status:"success",message:"Data source is working"})}getScenarios(){return this.scenariosCache||(this.scenariosCache=this.getResource("scenarios")),this.scenariosCache}variablesQuery(e,a){var t;const s=null!==(t=e.stringInput)&&void 0!==t?t:"",l=c(this.templateSrv.replace(s,(0,x._6)({query:s,wildcardChar:"*",options:a.scopedVars}))).map((e=>({value:e.name,text:e.name}))),o=new n.ArrayDataFrame(l);return(0,r.of)({data:[o]}).pipe((0,i.g)(100))}nodesQuery(e,a){var t,s;const l=(null===(t=e.nodes)||void 0===t?void 0:t.type)||"random";let o;switch(l){case"random":o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;const a=[],t={id:"0",title:"root",subTitle:"client",success:1,error:0,stat1:Math.random(),stat2:Math.random(),edges:[]};a.push(t);const r=[t],s=3;for(let t=1;t<e;t++){const e=I(t);a.push(e);const n=Math.floor(Math.random()*Math.floor(r.length-1)),l=r[n];l.edges.push(e.id),l.edges.length>=s&&r.splice(n,1),r.push(e)}const l=Math.floor(e/2);for(let e=0;e<=l;e++){const e=Math.floor(Math.random()*Math.floor(a.length-1));e!==Math.floor(Math.random()*Math.floor(a.length-1))&&"0"!==a[e].id&&"0"!==a[e].id&&a[e].edges.push(a[e].id)}const i={[n.NodeGraphDataFrameFieldNames.id]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.title]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.subTitle]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.mainStat]:{values:new n.ArrayVector,type:n.FieldType.number,config:{displayName:"Transactions per second"}},[n.NodeGraphDataFrameFieldNames.secondaryStat]:{values:new n.ArrayVector,type:n.FieldType.number,config:{displayName:"Average duration"}},[n.NodeGraphDataFrameFieldNames.arc+"success"]:{values:new n.ArrayVector,type:n.FieldType.number,config:{color:{fixedColor:"green",mode:n.FieldColorModeId.Fixed},displayName:"Success"}},[n.NodeGraphDataFrameFieldNames.arc+"errors"]:{values:new n.ArrayVector,type:n.FieldType.number,config:{color:{fixedColor:"red",mode:n.FieldColorModeId.Fixed},displayName:"Errors"}}},o=new n.MutableDataFrame({name:"nodes",fields:Object.keys(i).map((e=>Object.assign({},i[e],{name:e}))),meta:{preferredVisualisationType:"nodeGraph"}}),d={[n.NodeGraphDataFrameFieldNames.id]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.source]:{values:new n.ArrayVector,type:n.FieldType.string},[n.NodeGraphDataFrameFieldNames.target]:{values:new n.ArrayVector,type:n.FieldType.string}},u=new n.MutableDataFrame({name:"edges",fields:Object.keys(d).map((e=>Object.assign({},d[e],{name:e}))),meta:{preferredVisualisationType:"nodeGraph"}}),c=new Set;for(const e of a){i.id.values.add(e.id),i.title.values.add(e.title),i.subTitle.values.add(e.subTitle),i.mainStat.values.add(e.stat1),i.secondaryStat.values.add(e.stat2),i.arc__success.values.add(e.success),i.arc__errors.values.add(e.error);for(const a of e.edges){const t=`${e.id}--${a}`;c.has(t)||(c.add(t),d.id.values.add(`${e.id}--${a}`),d.source.values.add(e.id),d.target.values.add(a))}}return[o,u]}(null===(s=e.nodes)||void 0===s?void 0:s.count);break;case"response":o=[new n.MutableDataFrame(j),new n.MutableDataFrame(C)];break;default:throw new Error(`Unknown node_graph sub type ${l}`)}return(0,r.of)({data:o}).pipe((0,i.g)(100))}rawFrameQuery(e,a){try{var t;const a=JSON.parse(null!==(t=e.rawFrameContent)&&void 0!==t?t:"[]").map((a=>{const t=(0,n.toDataFrame)(a);return t.refId=e.refId,t}));return(0,r.of)({data:a,state:n.LoadingState.Done}).pipe((0,i.g)(100))}catch(e){return(0,r.of)({data:[],error:e}).pipe((0,i.g)(100))}}}function S(e,a){const t=`/api/${e.stringInput}`;return(0,l.D)((0,o.getBackendSrv)().get(t).then((e=>{const a=new n.ArrayDataFrame(e);return{state:n.LoadingState.Done,data:[a]}})))}let _=1e3;function N(e,a){if(!e.channel)throw new Error("Missing channel config");return(0,o.getGrafanaLiveSrv)().getDataStream({addr:{scope:n.LiveChannelScope.Plugin,namespace:"testdata",path:e.channel},key:"testStream."+_++})}var D,q,k=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),A=t("./packages/grafana-ui/src/index.ts"),M=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");class O extends k.PureComponent{constructor(e){super(e)}render(){return D||(D=(0,M.jsxs)("div",{children:["See github for more information about setting up a reproducible test environment.",(0,M.jsx)("br",{}),(0,M.jsx)("br",{}),(0,M.jsx)(A.LinkButton,{variant:"secondary",href:"https://github.com/grafana/grafana/tree/main/devenv",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),(0,M.jsx)("br",{})]}))}}class $ extends k.PureComponent{render(){return q||(q=(0,M.jsx)("div",{}))}}var V=t("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),G=t("./packages/grafana-e2e-selectors/src/index.ts");const W=[{label:"Speed (ms)",id:"speed",placeholder:"value",min:10,step:10},{label:"Spread",id:"spread",placeholder:"value",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"value",min:0,step:.1},{label:"Bands",id:"bands",placeholder:"bands",min:0,step:1}],E=[{value:"signal",label:"Signal"},{value:"logs",label:"Logs"},{value:"fetch",label:"Fetch"}],L=e=>{var a,t,n;let{onChange:r,query:s}=e;const l=e=>{const{name:a,value:t}=e.target;r({target:{name:a,value:Number(t)}})};return(0,M.jsxs)(A.InlineFieldRow,{children:[(0,M.jsx)(A.InlineField,{label:"Type",labelWidth:14,children:(0,M.jsx)(A.Select,{menuShouldPortal:!0,width:32,onChange:e=>{let{value:a}=e;r({target:{name:"type",value:a}})},defaultValue:E[0],options:E})}),"signal"===(null==s||null===(a=s.stream)||void 0===a?void 0:a.type)&&W.map((e=>{var a;let{label:t,id:n,min:r,step:i,placeholder:o}=e;return(0,M.jsx)(A.InlineField,{label:t,labelWidth:14,children:(0,M.jsx)(A.Input,{width:32,type:"number",id:`stream.${n}-${s.refId}`,name:n,min:r,step:i,value:null===(a=s.stream)||void 0===a?void 0:a[n],placeholder:o,onChange:l})},n)})),"fetch"===(null==s||null===(t=s.stream)||void 0===t?void 0:t.type)&&(0,M.jsx)(A.InlineField,{label:"URL",labelWidth:14,grow:!0,children:(0,M.jsx)(A.Input,{type:"text",name:"url",id:`stream.url-${s.refId}`,value:null==s||null===(n=s.stream)||void 0===n?void 0:n.url,placeholder:"Fetch URL",onChange:r})})]})},R=[{label:"Series count",id:"seriesCount",placeholder:"1",min:1,step:1},{label:"Start value",id:"startValue",placeholder:"auto",step:1},{label:"Min",id:"min",placeholder:"none",step:.1},{label:"Max",id:"max",placeholder:"none",step:.1},{label:"Spread",id:"spread",placeholder:"1",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"0",min:0,step:.1},{label:"Drop (%)",id:"drop",placeholder:"0",min:0,max:100,step:1,tooltip:"Exclude some percent (chance) points"}],P=G.wl.components.DataSource.TestData.QueryTab,z=e=>{let{onChange:a,query:t}=e;return(0,M.jsx)(A.InlineFieldRow,{children:R.map((e=>{let{label:n,id:r,min:s,step:l,placeholder:i,tooltip:o}=e;const d=null==P?void 0:P[r];return(0,M.jsx)(A.InlineField,{label:n,labelWidth:14,"aria-label":d,tooltip:o,children:(0,M.jsx)(A.Input,{width:32,name:r,type:"number",id:`randomWalk-${r}-${t.refId}`,min:s,step:l,value:t[r]||i,placeholder:i,onChange:a})},r)}))})},Q=[{label:"Step",id:"timeStep",placeholder:"60",tooltip:"The number of seconds between datapoints."},{label:"On Count",id:"onCount",placeholder:"3",tooltip:"The number of values within a cycle, at the start of the cycle, that should have the onValue."},{label:"Off Count",id:"offCount",placeholder:"6",tooltip:"The number of offValues within the cycle."},{label:"On Value",id:"onValue",placeholder:"1",tooltip:'The value for "on values", may be an int, float, or null.'},{label:"Off Value",id:"offValue",placeholder:"1",tooltip:'The value for "off values", may be a int, float, or null.'}],H=e=>{let{onChange:a,query:t}=e;const n=e=>{const{name:t,value:n}=e.target;a({target:{name:t,value:Number(n)}})};return(0,M.jsx)(A.InlineFieldRow,{children:Q.map((e=>{var a;let{label:r,id:s,placeholder:l,tooltip:i}=e;return(0,M.jsx)(A.InlineField,{label:r,labelWidth:14,tooltip:i,children:(0,M.jsx)(A.Input,{width:32,type:"number",name:s,id:`pulseWave.${s}-${t.refId}`,value:null===(a=t.pulseWave)||void 0===a?void 0:a[s],placeholder:l,onChange:n})},s)}))})},U={timeStep:60,onCount:3,onValue:2,offCount:3,offValue:1},B=[{timeStep:60,valuesCSV:"0,0,2,2,1,1"}],J={scenarioId:"random_walk",refId:""};function K(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class Y extends k.PureComponent{constructor(){super(...arguments),K(this,"onFieldChange",(e=>a=>{const{value:t}=a.target;this.props.onChange(this.props.index,Object.assign({},this.props.wave,{[e]:t}))})),K(this,"onNameChange",this.onFieldChange("name")),K(this,"onLabelsChange",this.onFieldChange("labels")),K(this,"onCSVChange",this.onFieldChange("valuesCSV")),K(this,"onTimeStepChange",(e=>{const a=e.target.valueAsNumber;this.props.onChange(this.props.index,Object.assign({},this.props.wave,{timeStep:a}))}))}render(){const{wave:e,last:a}=this.props;let t=this.props.onAdd;return a||(t=()=>{this.props.onChange(this.props.index,void 0)}),(0,M.jsxs)(A.InlineFieldRow,{children:[(0,M.jsx)(A.InlineField,{label:"Values",grow:!0,tooltip:"Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",children:(0,M.jsx)(A.Input,{value:e.valuesCSV,placeholder:"CSV values",onChange:this.onCSVChange,autoFocus:!0})}),(0,M.jsx)(A.InlineField,{label:"Step",tooltip:"The number of seconds between datapoints.",children:(0,M.jsx)(A.Input,{value:e.timeStep,type:"number",placeholder:"60",width:6,onChange:this.onTimeStepChange})}),(0,M.jsx)(A.InlineField,{label:"Labels",children:(0,M.jsx)(A.Input,{value:e.labels,placeholder:"labels",width:12,onChange:this.onLabelsChange})}),(0,M.jsx)(A.InlineField,{label:"Name",children:(0,M.jsx)(A.Input,{value:e.name,placeholder:"name",width:10,onChange:this.onNameChange})}),(0,M.jsx)(A.Button,{icon:a?"plus":"minus",variant:"secondary",onClick:t})]})}}class Z extends k.PureComponent{constructor(){super(...arguments),K(this,"onChange",((e,a)=>{var t;let n=[...null!==(t=this.props.waves)&&void 0!==t?t:B];a?n[e]=Object.assign({},a):n.splice(e,1),this.props.onChange(n)})),K(this,"onAdd",(()=>{var e;const a=[...null!==(e=this.props.waves)&&void 0!==e?e:B];a.push(Object.assign({},B[0])),this.props.onChange(a)}))}render(){var e;let a=null!==(e=this.props.waves)&&void 0!==e?e:B;return a.length||(a=B),(0,M.jsx)(M.Fragment,{children:a.map(((e,t)=>(0,M.jsx)(Y,{wave:e,index:t,onAdd:this.onAdd,onChange:this.onChange,last:t===a.length-1},`${t}/${e.valuesCSV}`)))})}}const X=[{label:"random-2s-stream",value:"random-2s-stream",description:"Random stream with points every 2s"},{label:"random-flakey-stream",value:"random-flakey-stream",description:"Stream that returns data in random intervals"},{label:"random-labeled-stream",value:"random-labeled-stream",description:"Value with moving labels"},{label:"random-20Hz-stream",value:"random-20Hz-stream",description:"Random stream with points in 20Hz"}],ee=e=>{let{onChange:a,query:t}=e;return(0,M.jsx)(A.InlineFieldRow,{children:(0,M.jsx)(A.InlineField,{label:"Channel",labelWidth:14,children:(0,M.jsx)(A.Select,{menuShouldPortal:!0,width:32,onChange:e=>{let{value:n}=e;a(Object.assign({},t,{channel:n}))},placeholder:"Select channel",options:X,value:X.find((e=>e.value===t.channel))})})})};function ae(e){var a,t;let{query:n,onChange:r}=e;const s=(null===(a=n.nodes)||void 0===a?void 0:a.type)||"random";return(0,M.jsxs)(A.InlineFieldRow,{children:[(0,M.jsx)(A.InlineField,{label:"Data type",labelWidth:14,children:(0,M.jsx)(A.Select,{options:te.map((e=>({label:e,value:e}))),value:te.find((e=>e===s)),onChange:e=>r(Object.assign({},n.nodes,{type:e.value})),width:32})}),"random"===s&&(0,M.jsx)(A.InlineField,{label:"Count",labelWidth:14,children:(0,M.jsx)(A.Input,{type:"number",name:"count",value:null===(t=n.nodes)||void 0===t?void 0:t.count,width:32,onChange:e=>r(Object.assign({},n.nodes,{count:e.currentTarget.value?parseInt(e.currentTarget.value,10):0})),placeholder:"10"})})]})}const te=["random","response"],ne=e=>{var a;let{onChange:t,query:r}=e;const[s,l]=(0,k.useState)(),[i,d]=(0,k.useState)(),u=e=>{try{const s=JSON.parse(e);if((0,p.isArray)(s))return l(void 0),d(void 0),void t(Object.assign({},r,{rawFrameContent:e}));let i;if((0,p.isArray)(s.series)&&s.state)i=s.series.map((e=>(0,n.toDataFrameDTO)((0,n.toDataFrame)(e))));else{var a;const e=(0,o.toDataQueryResponse)({data:s});null!==(a=e.data)&&void 0!==a&&a.length&&!e.error&&(i=e.data.map((e=>(0,n.dataFrameToJSON)(e))))}if(i)return console.log("Original",s),console.log("Save",i),l(void 0),d("Converted to direct frame result"),void t(Object.assign({},r,{rawFrameContent:JSON.stringify(i,null,2)}));l("Unable to read dataframes in text")}catch(e){console.log("Error parsing json",e),l("Enter JSON array of data frames (or raw query results body)"),d(void 0)}};return(0,M.jsxs)(M.Fragment,{children:[s&&(0,M.jsx)(A.Alert,{title:s,severity:"error"}),i&&(0,M.jsx)(A.Alert,{title:i,severity:"warning"}),(0,M.jsx)(A.CodeEditor,{height:300,language:"json",value:null!==(a=r.rawFrameContent)&&void 0!==a?a:"[]",onBlur:u,onSave:u,showMiniMap:!0,showLineNumbers:!0})]})},re=e=>{let{onChange:a,query:t}=e;const n=["flight_info_by_state.csv","population_by_state.csv","gdp_per_capita.csv","js_libraries.csv","ohlc_dogecoin.csv","weight_height.csv","browser_marketshare.csv"].map((e=>({label:e,value:e})));return(0,M.jsx)(A.InlineFieldRow,{children:(0,M.jsx)(A.InlineField,{label:"File",labelWidth:14,children:(0,M.jsx)(A.Select,{menuShouldPortal:!0,width:32,onChange:e=>{let{value:n}=e;a(Object.assign({},t,{csvFileName:n}))},placeholder:"Select csv file",options:n,value:n.find((e=>e.value===t.csvFileName))})})})},se=e=>{var a;let{onChange:t,query:n}=e;const r=e=>{t(Object.assign({},n,{csvContent:e}))};return(0,M.jsx)(A.CodeEditor,{height:300,language:"csv",value:null!==(a=n.csvContent)&&void 0!==a?a:"",onBlur:r,onSave:r,showMiniMap:!1,showLineNumbers:!0})};function le(e){let{query:a,onChange:t}=e;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(A.InlineFieldRow,{children:[(0,M.jsx)(A.InlineField,{labelWidth:14,label:"Mode",children:(0,M.jsx)(A.Select,{menuShouldPortal:!0,options:ie,onChange:e=>{t(Object.assign({},a,{mode:e.value}))},width:32,value:ie.find((e=>e.value===a.mode))})}),(0,M.jsx)(A.InlineField,{label:"Period",children:(0,M.jsx)(A.Input,{value:a.period,placeholder:"30m",onChange:e=>{t(Object.assign({},a,{period:e.currentTarget.value}))}})})]}),(0,M.jsxs)(A.InlineFieldRow,{children:[(0,M.jsx)(A.InlineField,{labelWidth:14,label:"Fields",children:(0,M.jsx)(A.MultiSelect,{menuShouldPortal:!0,options:oe,onChange:e=>{t(Object.assign({},a,{fields:e.map((e=>e.value))}))},width:32,placeholder:"all",value:a.fields})}),(0,M.jsx)(A.InlineField,{label:"States",grow:!0,children:(0,M.jsx)(A.MultiSelect,{menuShouldPortal:!0,options:de,onChange:e=>{t(Object.assign({},a,{states:e.map((e=>e.value))}))},placeholder:"all",value:a.states})})]})]})}const ie=["values-as-rows","values-as-fields","values-as-labeled-fields","timeseries","timeseries-wide"].map((e=>({label:e,value:e}))),oe=["foo","bar","baz"].map((e=>({label:e,value:e}))),de=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","MD","MA","MI","MN","MS","MO","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((e=>({label:e,value:e})));var ue,ce,pe,me;const he=["random_walk","predictable_pulse"],ge=[{value:"datasources",label:"Data Sources"},{value:"search",label:"Search"},{value:"annotations",label:"Annotations"}],ve=G.wl.components.DataSource.TestData.QueryTab;function be(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class fe{constructor(){be(this,"annotation",void 0)}}be(fe,"template","<h2>Annotation scenario</h2>");const ye=new n.DataSourcePlugin(T).setConfigEditor($).setQueryEditor((e=>{var a,t;let{query:n,datasource:r,onChange:s,onRunQuery:l}=e;n=Object.assign({},J,n);const{loading:i,value:o}=(0,V.Z)((async()=>{if("manual_entry"===n.scenarioId&&n.points){let e="Time,Value\n";for(const a of n.points)e+=`${a[1]},${a[0]}\n`;s({refId:n.refId,datasource:n.datasource,scenarioId:"csv_content",csvContent:e})}return r.getScenarios()}),[]),d=e=>{s(e),l()},u=(0,k.useMemo)((()=>null==o?void 0:o.find((e=>e.id===n.scenarioId))),[o,n]),c=null==u?void 0:u.id,p=e=>{const{name:a,value:t,type:r}=e.target;let s=t;"number"===r&&(s=Number(t)),"levelColumn"===a&&(s=e.target.checked),d(Object.assign({},n,{[a]:s}))},m=e=>a=>{const{name:t,value:r,type:s}=a.target;let l=r;"number"===s&&(l=Number(r)),d(Object.assign({},n,{[e]:Object.assign({},n[e],{[t]:l})}))},h=m("stream"),g=m("pulseWave"),v=(0,k.useMemo)((()=>(o||[]).map((e=>({label:e.name,value:e.id}))).sort(((e,a)=>e.label.localeCompare(a.label)))),[o]),b=(0,k.useMemo)((()=>he.includes(n.scenarioId)),[n]);return i?null:(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(A.InlineFieldRow,{"aria-label":ve.scenarioSelectContainer,children:[(0,M.jsx)(A.InlineField,{labelWidth:14,label:"Scenario",children:(0,M.jsx)(A.Select,{inputId:`test-data-scenario-select-${n.refId}`,menuShouldPortal:!0,options:v,value:v.find((e=>e.value===n.scenarioId)),onChange:e=>{const a=null==o?void 0:o.find((a=>a.id===e.value));if(!a)return;const t={scenarioId:e.value,refId:n.refId,alias:n.alias,datasource:n.datasource};switch(a.stringInput&&(t.stringInput=a.stringInput),a.id){case"grafana_api":t.stringInput="datasources";break;case"streaming_client":t.stream=y;break;case"live":t.channel="random-2s-stream";break;case"predictable_pulse":t.pulseWave=U;break;case"predictable_csv_wave":t.csvWave=B;break;case"usa":t.usa={mode:ie[0].value}}d(t)},width:32})}),(null==u?void 0:u.stringInput)&&(0,M.jsx)(A.InlineField,{label:"String Input",children:(0,M.jsx)(A.Input,{width:32,id:`stringInput-${n.refId}`,name:"stringInput",placeholder:n.stringInput,value:n.stringInput,onChange:p})}),(0,M.jsx)(A.InlineField,{label:"Alias",labelWidth:14,children:(0,M.jsx)(A.Input,{width:32,id:`alias-${n.refId}`,type:"text",placeholder:"optional",pattern:'[^<>&\\\\"]+',name:"alias",value:n.alias,onChange:p})}),b&&(0,M.jsx)(A.InlineField,{label:"Labels",labelWidth:14,tooltip:(0,M.jsxs)(M.Fragment,{children:["Set labels using a key=value syntax:",ue||(ue=(0,M.jsx)("br",{})),'{ key = "value", key2 = "value" }',ce||(ce=(0,M.jsx)("br",{})),'key="value", key2="value"',pe||(pe=(0,M.jsx)("br",{})),"key=value, key2=value",me||(me=(0,M.jsx)("br",{}))]}),children:(0,M.jsx)(A.Input,{width:32,id:`labels-${n.refId}`,name:"labels",onChange:p,value:null===(a=n)||void 0===a?void 0:a.labels,placeholder:"key=value, key2=value2"})})]}),"random_walk"===c&&(0,M.jsx)(z,{onChange:p,query:n}),"streaming_client"===c&&(0,M.jsx)(L,{onChange:h,query:n}),"live"===c&&(0,M.jsx)(ee,{onChange:d,query:n}),"raw_frame"===c&&(0,M.jsx)(ne,{onChange:d,query:n}),"csv_file"===c&&(0,M.jsx)(re,{onChange:d,query:n}),"csv_content"===c&&(0,M.jsx)(se,{onChange:d,query:n}),"logs"===c&&(0,M.jsxs)(A.InlineFieldRow,{children:[(0,M.jsx)(A.InlineField,{label:"Lines",labelWidth:14,children:(0,M.jsx)(A.Input,{type:"number",name:"lines",value:n.lines,width:32,onChange:p,placeholder:"10"})}),(0,M.jsx)(A.InlineField,{label:"Level",labelWidth:14,children:(0,M.jsx)(A.InlineSwitch,{onChange:p,name:"levelColumn",value:!!n.levelColumn})})]}),"usa"===c&&(0,M.jsx)(le,{onChange:e=>{d(Object.assign({},n,{usa:e}))},query:null!==(t=n.usa)&&void 0!==t?t:{}}),"grafana_api"===c&&(0,M.jsx)(A.InlineField,{labelWidth:14,label:"Endpoint",children:(0,M.jsx)(A.Select,{menuShouldPortal:!0,options:ge,onChange:e=>{let{value:a}=e;d(Object.assign({},n,{stringInput:a}))},width:32,value:ge.find((e=>e.value===n.stringInput))})}),"arrow"===c&&(0,M.jsx)(A.InlineField,{grow:!0,children:(0,M.jsx)(A.TextArea,{name:"stringInput",value:n.stringInput,rows:10,placeholder:"Copy base64 text data from query result",onChange:p})}),"predictable_pulse"===c&&(0,M.jsx)(H,{onChange:g,query:n}),"predictable_csv_wave"===c&&(0,M.jsx)(Z,{onChange:e=>{d(Object.assign({},n,{csvWave:e}))},waves:n.csvWave}),"node_graph"===c&&(0,M.jsx)(ae,{onChange:e=>s(Object.assign({},n,{nodes:e})),query:n})]})})).setAnnotationQueryCtrl(fe).addConfigPage({title:"Setup",icon:"list-ul",body:O,id:"setup"})}}]);
//# sourceMappingURL=testDataDSPlugin.0cedc4c919aff84ce58c.js.map