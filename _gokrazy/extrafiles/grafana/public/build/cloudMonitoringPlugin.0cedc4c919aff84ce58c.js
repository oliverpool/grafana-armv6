"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3549],{"./public/app/plugins/datasource/cloud-monitoring/module.ts":(e,t,s)=>{s.r(t),s.d(t,{plugin:()=>ie});var r=s("./packages/grafana-data/src/index.ts"),a=s("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),i=s("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),n=s("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),c=s("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),l=s("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js"),o=s("../../opt/drone/yarncache/rxjs-npm-7.5.1-ce59cbb6a3-78e3eecb16.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),u=s("./packages/grafana-runtime/src/index.ts"),p=s("./public/app/features/templating/template_srv.ts"),d=s("./public/app/features/dashboard/services/TimeSrv.ts"),h=s("./public/app/plugins/datasource/cloud-monitoring/types.ts"),y=s("./public/app/plugins/datasource/cloud-monitoring/constants.ts"),m=s("./public/app/plugins/datasource/cloud-monitoring/functions.ts");class g{constructor(e){this.datasource=e}async execute(e){try{switch(e.projectName||(e.projectName=this.datasource.getDefaultProject()),e.selectedQueryType){case h.Bp.Projects:return this.handleProjectsQuery();case h.Bp.Services:return this.handleServiceQuery(e);case h.Bp.MetricTypes:return this.handleMetricTypesQuery(e);case h.Bp.LabelKeys:return this.handleLabelKeysQuery(e);case h.Bp.LabelValues:return this.handleLabelValuesQuery(e);case h.Bp.ResourceTypes:return this.handleResourceTypeQuery(e);case h.Bp.Aligners:return this.handleAlignersQuery(e);case h.Bp.AlignmentPeriods:return this.handleAlignmentPeriodQuery();case h.Bp.Aggregations:return this.handleAggregationQuery(e);case h.Bp.SLOServices:return this.handleSLOServicesQuery(e);case h.Bp.SLO:return this.handleSLOQuery(e);case h.Bp.Selectors:return this.handleSelectorQuery();default:return[]}}catch(t){return console.error(`Could not run CloudMonitoringMetricFindQuery ${e}`,t),[]}}async handleProjectsQuery(){return(await this.datasource.getProjects()).map((e=>({text:e.label,value:e.value,expandable:!0})))}async handleServiceQuery(e){let{projectName:t}=e;const s=await this.datasource.getMetricTypes(t);return(0,m.qA)(s).map((e=>({text:e.serviceShortName,value:e.service,expandable:!0})))}async handleMetricTypesQuery(e){let{selectedService:t,projectName:s}=e;if(!t)return[];const r=await this.datasource.getMetricTypes(s);return(0,m.Qf)(r,this.datasource.templateSrv.replace(t)).map((e=>({text:e.displayName,value:e.type,expandable:!0})))}async handleLabelKeysQuery(e){let{selectedMetricType:t,projectName:s}=e;if(!t)return[];return(await(0,m.Qd)(this.datasource,t,s)).map(this.toFindQueryResult)}async handleLabelValuesQuery(e){let{selectedMetricType:t,labelKey:s,projectName:r}=e;if(!t)return[];const a=await this.datasource.getLabels(t,"handleLabelValuesQuery",r,{groupBys:[s],crossSeriesReducer:"REDUCE_MEAN"}),i=this.datasource.templateSrv.replace(s);return(a.hasOwnProperty(i)?a[i]:[]).map(this.toFindQueryResult)}async handleResourceTypeQuery(e){var t,s;let{selectedMetricType:r,projectName:a}=e;if(!r)return[];return null!==(t=null===(s=(await this.datasource.getLabels(r,"handleResourceTypeQueryQueryType",a))["resource.type"])||void 0===s?void 0:s.map(this.toFindQueryResult))&&void 0!==t?t:[]}async handleAlignersQuery(e){let{selectedMetricType:t,projectName:s}=e;if(!t)return[];const r=(await this.datasource.getMetricTypes(s)).find((e=>e.type===this.datasource.templateSrv.replace(t)));return r?(0,m.oU)(r.valueType,r.metricKind).map(this.toFindQueryResult):[]}async handleAggregationQuery(e){let{selectedMetricType:t,projectName:s}=e;if(!t)return[];const r=(await this.datasource.getMetricTypes(s)).find((e=>e.type===this.datasource.templateSrv.replace(t)));return r?(0,m.A_)(r.valueType,r.metricKind).map(this.toFindQueryResult):[]}async handleSLOServicesQuery(e){let{projectName:t}=e;return(await this.datasource.getSLOServices(t)).map(this.toFindQueryResult)}async handleSLOQuery(e){let{selectedSLOService:t,projectName:s}=e;return(await this.datasource.getServiceLevelObjectives(s,t)).map(this.toFindQueryResult)}async handleSelectorQuery(){return y.IR.map(this.toFindQueryResult)}handleAlignmentPeriodQuery(){return y.dD.map(this.toFindQueryResult)}toFindQueryResult(e){return(0,a.isString)(e)?{text:e,expandable:!0}:Object.assign({},e,{expandable:!0})}}var v,b=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),j=s("./public/app/plugins/datasource/cloud-monitoring/components/index.ts"),S=s("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const f=["metricDescriptors","labels","metricTypes","services"];function T(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class x extends b.PureComponent{constructor(e){super(e),T(this,"queryTypes",[{value:h.Bp.Projects,label:"Projects"},{value:h.Bp.Services,label:"Services"},{value:h.Bp.MetricTypes,label:"Metric Types"},{value:h.Bp.LabelKeys,label:"Label Keys"},{value:h.Bp.LabelValues,label:"Label Values"},{value:h.Bp.ResourceTypes,label:"Resource Types"},{value:h.Bp.Aggregations,label:"Aggregations"},{value:h.Bp.Aligners,label:"Aligners"},{value:h.Bp.AlignmentPeriods,label:"Alignment Periods"},{value:h.Bp.Selectors,label:"Selectors"},{value:h.Bp.SLOServices,label:"SLO Services"},{value:h.Bp.SLO,label:"Service Level Objectives (SLO)"}]),T(this,"defaults",{selectedQueryType:this.queryTypes[0].value,metricDescriptors:[],selectedService:"",selectedMetricType:"",labels:[],labelKey:"",metricTypes:[],services:[],sloServices:[],selectedSLOService:"",projects:[],projectName:"",loading:!0}),T(this,"onPropsChange",(()=>{const e=function(e,t){if(null==e)return{};var s,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(this.state,f);this.props.onChange(Object.assign({},e,{refId:"CloudMonitoringVariableQueryEditor-VariableQuery"}))})),this.state=Object.assign(this.defaults,{projectName:this.props.datasource.getDefaultProject()},this.props.query)}async componentDidMount(){const e=await this.props.datasource.getProjects(),t=await this.props.datasource.getMetricTypes(this.props.query.projectName||this.props.datasource.getDefaultProject()),s=(0,m.qA)(t).map((e=>({value:e.service,label:e.serviceShortName})));let r="";s.some((e=>e.value===(0,u.getTemplateSrv)().replace(this.state.selectedService)))?r=this.state.selectedService:s&&s.length>0&&(r=s[0].value);const{metricTypes:a,selectedMetricType:i}=(0,m.FL)(t,this.state.selectedMetricType,(0,u.getTemplateSrv)().replace(this.state.selectedMetricType),(0,u.getTemplateSrv)().replace(r)),n=await this.props.datasource.getSLOServices(this.state.projectName),c=Object.assign({services:s,selectedService:r,metricTypes:a,selectedMetricType:i,metricDescriptors:t,projects:e},await this.getLabels(i,this.state.projectName),{sloServices:n,loading:!1});this.setState(c,(()=>this.onPropsChange()))}async onQueryTypeChange(e){const t=Object.assign({selectedQueryType:e},await this.getLabels(this.state.selectedMetricType,this.state.projectName,e));this.setState(t)}async onProjectChange(e){const t=await this.props.datasource.getMetricTypes(e),s=await this.getLabels(this.state.selectedMetricType,e),{metricTypes:r,selectedMetricType:a}=(0,m.FL)(t,this.state.selectedMetricType,(0,u.getTemplateSrv)().replace(this.state.selectedMetricType),(0,u.getTemplateSrv)().replace(this.state.selectedService)),i=await this.props.datasource.getSLOServices(e);this.setState(Object.assign({},s,{metricTypes:r,selectedMetricType:a,metricDescriptors:t,projectName:e,sloServices:i}),(()=>this.onPropsChange()))}async onServiceChange(e){const{metricTypes:t,selectedMetricType:s}=(0,m.FL)(this.state.metricDescriptors,this.state.selectedMetricType,(0,u.getTemplateSrv)().replace(this.state.selectedMetricType),(0,u.getTemplateSrv)().replace(e)),r=Object.assign({selectedService:e,metricTypes:t,selectedMetricType:s},await this.getLabels(s,this.state.projectName));this.setState(r,(()=>this.onPropsChange()))}async onMetricTypeChange(e){const t=Object.assign({selectedMetricType:e},await this.getLabels(e,this.state.projectName));this.setState(t,(()=>this.onPropsChange()))}onLabelKeyChange(e){this.setState({labelKey:e},(()=>this.onPropsChange()))}componentDidUpdate(e,t){const s=t.selectedQueryType!==this.state.selectedQueryType,r=this.state.selectedSLOService!==t.selectedSLOService;(s||r)&&this.onPropsChange()}async getLabels(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.selectedQueryType,r={labels:this.state.labels,labelKey:this.state.labelKey};if(e&&s===h.Bp.LabelValues){const s=await(0,m.Qd)(this.props.datasource,e,t),a=s.some((e=>e===(0,u.getTemplateSrv)().replace(this.state.labelKey)))?this.state.labelKey:s[0];r={labels:s,labelKey:a}}return r}renderQueryTypeSwitch(e){const t={label:"Template Variables",expanded:!1,options:(0,u.getTemplateSrv)().getVariables().map((e=>({value:`$${e.name}`,label:`$${e.name}`})))};switch(e){case h.Bp.MetricTypes:return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(j.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),(0,S.jsx)(j.Th,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"})]});case h.Bp.LabelKeys:case h.Bp.LabelValues:case h.Bp.ResourceTypes:return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(j.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),(0,S.jsx)(j.Th,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"}),(0,S.jsx)(j.Th,{value:this.state.selectedMetricType,options:[t,...this.state.metricTypes.map((e=>{let{value:t,name:s}=e;return{value:t,label:s}}))],onChange:e=>this.onMetricTypeChange(e),label:"Metric Type"}),e===h.Bp.LabelValues&&(0,S.jsx)(j.Th,{value:this.state.labelKey,options:[t,...this.state.labels.map((e=>({value:e,label:e})))],onChange:e=>this.onLabelKeyChange(e),label:"Label Key"})]});case h.Bp.Aligners:case h.Bp.Aggregations:return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(j.Th,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"}),(0,S.jsx)(j.Th,{value:this.state.selectedMetricType,options:[t,...this.state.metricTypes.map((e=>{let{value:t,name:s}=e;return{value:t,label:s}}))],onChange:e=>this.onMetricTypeChange(e),label:"Metric Type"})]});case h.Bp.SLOServices:return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(j.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"})});case h.Bp.SLO:return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(j.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),(0,S.jsx)(j.Th,{value:this.state.selectedSLOService,options:[t,...this.state.sloServices],onChange:e=>{this.setState(Object.assign({},this.state,{selectedSLOService:e}))},label:"SLO Service"})]});default:return""}}render(){return this.state.loading?v||(v=(0,S.jsxs)("div",{className:"gf-form max-width-21",children:[(0,S.jsx)("span",{className:"gf-form-label width-10 query-keyword",children:"Query Type"}),(0,S.jsx)("div",{className:"gf-form-select-wrapper max-width-12",children:(0,S.jsx)("select",{className:"gf-form-input",children:(0,S.jsx)("option",{children:"Loading..."})})})]})):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(j.Th,{value:this.state.selectedQueryType,options:this.queryTypes,onChange:e=>this.onQueryTypeChange(e),label:"Query Type"}),this.renderQueryTypeSwitch(this.state.selectedQueryType)]})}}function Q(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class L extends r.CustomVariableSupport{constructor(e){super(),Q(this,"metricFindQuery",void 0),Q(this,"editor",x),this.datasource=e,this.metricFindQuery=new g(e),this.query=this.query.bind(this)}query(e){const t=(0,c.D)(this.metricFindQuery.execute(e.targets[0]));return(0,c.D)(this.datasource.ensureGCEDefaultProject()).pipe((0,o.z)((()=>t)),(0,l.U)((e=>({data:e}))))}}const O=["hide","refId","datasource","key","queryType","maxLines","metric","intervalMs","type"];function C(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class w extends u.DataSourceWithBackend{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,p.J)(),s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,d.$t)();super(e),C(this,"authenticationType",void 0),C(this,"intervalMs",void 0),this.instanceSettings=e,this.templateSrv=t,this.timeSrv=s,this.authenticationType=e.jsonData.authenticationType||"jwt",this.variables=new L(this),this.intervalMs=0}getVariables(){return this.templateSrv.getVariables().map((e=>`$${e.name}`))}query(e){return e.targets=e.targets.map((t=>Object.assign({},this.migrateQuery(t),{intervalMs:e.intervalMs}))),super.query(e)}async annotationQuery(e){await this.ensureGCEDefaultProject();const t=e.annotation,s=[{refId:"annotationQuery",type:"annotationQuery",datasource:this.getRef(),view:"FULL",crossSeriesReducer:"REDUCE_NONE",perSeriesAligner:"ALIGN_NONE",metricType:this.templateSrv.replace(t.target.metricType,e.scopedVars||{}),title:this.templateSrv.replace(t.target.title,e.scopedVars||{}),text:this.templateSrv.replace(t.target.text,e.scopedVars||{}),projectName:this.templateSrv.replace(t.target.projectName?t.target.projectName:this.getDefaultProject(),e.scopedVars||{}),filters:this.interpolateFilters(t.target.filters||[],e.scopedVars)}];return(0,i.n)((0,u.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:s}}).pipe((0,l.U)((e=>{let{data:s}=e;const r=(0,u.toDataQueryResponse)({data:s}),a=[];if(0!==r.data.length)for(let e=0;e<r.data.length;e++)for(let s=0;s<r.data[e].fields[0].values.length;s++)a.push({annotation:t,time:Date.parse(r.data[e].fields[0].values.get(s)),title:r.data[e].fields[1].values.get(s),tags:[],text:r.data[e].fields[3].values.get(s)});return a}))))}applyTemplateVariables(e,t){let{metricQuery:s,refId:r,queryType:a,sloQuery:i}=e;return{datasource:this.getRef(),refId:r,intervalMs:this.intervalMs,type:"timeSeriesQuery",queryType:a,metricQuery:Object.assign({},this.interpolateProps(s,t),{projectName:this.templateSrv.replace(s.projectName?s.projectName:this.getDefaultProject(),t),filters:this.interpolateFilters(s.filters||[],t),groupBys:this.interpolateGroupBys(s.groupBys||[],t),view:s.view||"FULL",editorMode:s.editorMode}),sloQuery:i&&this.interpolateProps(i,t)}}async getLabels(e,t,s,r){var a;const p={targets:[{refId:t,datasource:this.getRef(),queryType:h.xL.METRICS,metricQuery:{projectName:this.templateSrv.replace(s),metricType:this.templateSrv.replace(e),groupBys:this.interpolateGroupBys((null==r?void 0:r.groupBys)||[],{}),crossSeriesReducer:null!==(a=null==r?void 0:r.crossSeriesReducer)&&void 0!==a?a:"REDUCE_NONE",view:"HEADERS"}}],range:this.timeSrv.timeRange()},d=p.targets;return d.length?(0,i.n)((0,c.D)(this.ensureGCEDefaultProject()).pipe((0,o.z)((()=>(0,u.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:p.range.from.valueOf().toString(),to:p.range.to.valueOf().toString(),queries:d}}))),(0,l.U)((e=>{let{data:t}=e;const s=(0,u.toDataQueryResponse)({data:t}),r=null==s?void 0:s.data.map((e=>{var t,s;return null===(t=e.meta)||void 0===t||null===(s=t.custom)||void 0===s?void 0:s.labels})).filter((e=>!!e)).reduce(((e,t)=>{for(let s in t)e[s]||(e[s]=new Set),t[s]&&e[s].add(t[s]);return e}),{});return Object.fromEntries(Object.entries(r).map((e=>(e[1]=Array.from(e[1]),e))))})))):(0,i.n)((0,n.of)({results:[]}))}async getGCEDefaultProject(){return this.getResource("gceDefaultProject")}getDefaultProject(){const{defaultProject:e,authenticationType:t,gceDefaultProject:s}=this.instanceSettings.jsonData;return"gce"===t?s||"":e||""}async ensureGCEDefaultProject(){const{authenticationType:e,gceDefaultProject:t}=this.instanceSettings.jsonData;"gce"!==e||t||(this.instanceSettings.jsonData.gceDefaultProject=await this.getGCEDefaultProject())}async getMetricTypes(e){return e?this.getResource(`metricDescriptors/v3/projects/${this.templateSrv.replace(e)}/metricDescriptors`):[]}async getSLOServices(e){return this.getResource(`services/v3/projects/${this.templateSrv.replace(e)}/services?pageSize=1000`)}async getServiceLevelObjectives(e,t){if(!t)return Promise.resolve([]);let{projectName:s,serviceId:r}=this.interpolateProps({projectName:e,serviceId:t});return this.getResource(`slo-services/v3/projects/${s}/services/${r}/serviceLevelObjectives`)}getProjects(){return this.getResource("projects")}migrateQuery(e){if(!e.hasOwnProperty("metricQuery")){const t=e,{hide:s,refId:r,intervalMs:a,type:i}=t,n=function(e,t){if(null==e)return{};var s,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(t,O);return{refId:r,intervalMs:a,type:i,hide:s,queryType:h.xL.METRICS,metricQuery:Object.assign({},n,{view:n.view||"FULL"})}}return e}interpolateProps(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e).reduce(((e,s)=>{let[r,i]=s;return Object.assign({},e,{[r]:i&&(0,a.isString)(i)?this.templateSrv.replace(i,t):i})}),{})}filterQuery(e){if(e.hide)return!1;if(e.queryType&&e.queryType===h.xL.SLO&&e.sloQuery){const{selectorName:t,serviceId:s,sloId:r,projectName:a}=e.sloQuery;return!!(t&&s&&r&&a)}if(e.queryType&&e.queryType===h.xL.METRICS&&e.metricQuery.editorMode===h.je.MQL)return!!e.metricQuery.projectName&&!!e.metricQuery.query;const{metricType:t}=e.metricQuery;return!!t}interpolateVariablesInQueries(e,t){return e.map((e=>this.applyTemplateVariables(this.migrateQuery(e),t)))}interpolateFilters(e,t){const s=(0,a.chunk)(e,4).map((e=>{let[t,s,r,a]=e;return Object.assign({key:t,operator:s,value:r},a&&{condition:a})})).filter((e=>e.value));return(0,a.flatten)(s.map((e=>{let{key:s,operator:r,value:i,condition:n}=e;return[this.templateSrv.replace(s,t||{}),r,this.templateSrv.replace(i,t||{},(e=>(0,a.isArray)(e)&&e.length?`(${e.join("|")})`:e)),...n?[n]:[]]})))||[]}interpolateGroupBys(e,t){let s=[];return(e||[]).forEach((e=>{const r=this.templateSrv.replace(e,t||{},"csv").split(",");Array.isArray(r)?s=s.concat(r):s.push(r)})),s}}var M=s("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx"),P=s("../../opt/drone/yarncache/@grafana-google-sdk-npm-0.0.2-9c57af4cfa-a4dfe7a31a.zip/node_modules/@grafana/google-sdk/index.js");class N extends b.PureComponent{render(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(P.ConnectionConfig,Object.assign({},this.props))})}}var B,D,R,F,q,_,E,V,A,k,K,I,$,z,U,G,H,W,J,X,Y,Z,ee,te,se=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");class re extends b.PureComponent{render(){return(0,S.jsxs)("div",{children:[B||(B=(0,S.jsx)("h2",{children:"Cloud Monitoring alias patterns"})),(0,S.jsxs)("div",{children:[D||(D=(0,S.jsx)("p",{children:"Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."})),"Example:",R||(R=(0,S.jsx)("code",{children:"{{metric.name}} - {{metric.label.instance_name}}"})),F||(F=(0,S.jsx)("br",{})),"Result:   ",q||(q=(0,S.jsx)("code",{children:"cpu/usage_time - server1-europe-west-1"})),_||(_=(0,S.jsx)("br",{})),E||(E=(0,S.jsx)("br",{})),V||(V=(0,S.jsx)("label",{children:"Patterns"})),A||(A=(0,S.jsx)("br",{})),(0,S.jsxs)("ul",{className:se.css`
              list-style: none;
            `,children:[k||(k=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{metric.type}}"})," = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]})),K||(K=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{metric.name}}"})," = name part of metric e.g. instance/cpu/usage_time"]})),I||(I=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{metric.service}}"})," = service part of metric e.g. compute"]})),$||($=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{metric.label.label_name}}"})," = Metric label metadata e.g. metric.label.instance_name"]})),z||(z=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{resource.label.label_name}}"})," = Resource label metadata e.g. resource.label.zone"]})),U||(U=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{metadata.system_labels.name}}"})," = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]})),G||(G=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{metadata.user_labels.name}}"})," = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]})),H||(H=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{bucket}}"})," = bucket boundary for distribution metrics when using a heatmap in Grafana"]})),W||(W=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{project}}"})," = The project name that was specified in the query editor"]})),J||(J=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{service}}"})," = The service id that was specified in the SLO query editor"]})),X||(X=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{slo}}"})," = The SLO id that was specified in the SLO query editor"]})),Y||(Y=(0,S.jsxs)("li",{children:[(0,S.jsx)("code",{children:"{{selector}}"})," = The Selector function that was specified in the SLO query editor"]}))]})]})]})}}class ae{constructor(e){this.annotation=e.ctrl.annotation||{},this.annotation.target=e.ctrl.annotation.target||{},this.onQueryChange=this.onQueryChange.bind(this)}onQueryChange(e){Object.assign(this.annotation.target,e)}}ae.$inject=["$scope"],te="partials/annotations.editor.html",(ee="templateUrl")in(Z=ae)?Object.defineProperty(Z,ee,{value:te,enumerable:!0,configurable:!0,writable:!0}):Z[ee]=te;const ie=new r.DataSourcePlugin(w).setQueryEditorHelp(re).setQueryEditor(M.W).setConfigEditor(N).setAnnotationQueryCtrl(ae).setVariableQueryEditor(x)}}]);
//# sourceMappingURL=cloudMonitoringPlugin.0cedc4c919aff84ce58c.js.map