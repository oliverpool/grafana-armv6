"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3959],{"./public/app/features/datasources/settings/DataSourceSettingsPage.tsx":(e,t,a)=>{a.r(t),a.d(t,{DataSourceSettingsPage:()=>R,default:()=>U});var s=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),r=a("./packages/grafana-data/src/index.ts"),o=a("./packages/grafana-e2e-selectors/src/index.ts"),i=a("./packages/grafana-ui/src/index.ts"),l=a("./public/app/core/actions/cleanUp.ts"),c=a("./public/app/core/app_events.ts"),d=a("./public/app/core/components/Page/Page.tsx"),u=a("./public/app/core/core.ts"),p=a("./public/app/core/selectors/navModel.ts"),h=a("./public/app/features/plugins/components/PluginStateInfo.tsx"),g=a("./public/app/types/index.ts"),m=a("./public/app/types/events.ts"),f=a("./public/app/features/datasources/state/actions.ts"),b=a("./public/app/features/datasources/state/navModel.ts"),S=a("./public/app/features/datasources/state/reducers.ts"),x=a("./public/app/features/datasources/state/selectors.ts"),v=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const y=e=>{let{dataSourceName:t,isDefault:a,onDefaultChange:s,onNameChange:n}=e;return(0,v.jsx)("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings",children:(0,v.jsxs)("div",{className:"gf-form-inline",children:[(0,v.jsx)("div",{className:"gf-form max-width-30",children:(0,v.jsx)(i.InlineField,{label:"Name",tooltip:"The name is used when you select the data source in panels. The default data source is 'preselected in new panels.",grow:!0,children:(0,v.jsx)(i.Input,{id:"basic-settings-name",type:"text",value:t,placeholder:"Name",onChange:e=>n(e.currentTarget.value),required:!0,"aria-label":o.wl.pages.DataSource.name})})}),(0,v.jsx)(i.InlineField,{label:"Default",labelWidth:8,children:(0,v.jsx)(i.InlineSwitch,{id:"basic-settings-default",value:a,onChange:e=>{s(e.currentTarget.checked)}})})]})})},D=e=>{let{canSave:t,canDelete:a,onDelete:s,onSubmit:n,onTest:r,exploreUrl:l}=e;const c=u.Vt.hasPermission(g.bW.DataSourcesExplore);return(0,v.jsxs)("div",{className:"gf-form-button-row",children:[(0,v.jsx)(i.Button,{variant:"secondary",fill:"solid",type:"button",onClick:()=>history.back(),children:"Back"}),(0,v.jsx)(i.LinkButton,{variant:"secondary",fill:"solid",href:l,disabled:!c,children:"Explore"}),(0,v.jsx)(i.Button,{type:"button",variant:"destructive",disabled:!a,onClick:s,"aria-label":o.wl.pages.DataSource.delete,children:"Delete"}),t&&(0,v.jsx)(i.Button,{type:"submit",variant:"primary",disabled:!t,onClick:e=>n(e),"aria-label":o.wl.pages.DataSource.saveAndTest,children:"Save & test"}),!t&&(0,v.jsx)(i.Button,{type:"submit",variant:"primary",onClick:r,children:"Test"})]})};var j=a("./packages/grafana-data/src/types/config.ts"),C=a("./public/app/core/components/LocalStorageValueProvider/index.tsx"),M=a("./public/app/core/config.ts");const k=e=>{var t;let{dataSource:a}=e,s="",n="";if(a.readOnly||(null!==(t=a.version)&&void 0!==t?t:0)>2)return null;if(M.vc.buildInfo.edition!==j.e.OpenSource)return null;switch(a.type){case"prometheus":s="Prometheus",n="Loki";break;case"loki":s="Loki",n="Prometheus";break;default:return null}return(0,v.jsx)(C.G,{storageKey:"datasources.settings.cloudInfoBox.isDismissed",defaultValue:!1,children:(e,t)=>e?null:(0,v.jsxs)(i.Alert,{title:`Configure your ${s} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{t(!0)},children:["Or skip the effort and get ",s," (and ",n,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",(0,v.jsx)("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${a.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage.",children:"free-forever Grafana Cloud plan"}),"."]})})};var P=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),w=a("./packages/grafana-runtime/src/index.ts");function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class N extends s.PureComponent{constructor(e){super(e),I(this,"element",null),I(this,"component",void 0),I(this,"scopeProps",void 0),I(this,"onModelChanged",(e=>{this.props.onModelChange(e)})),this.scopeProps={ctrl:{datasourceMeta:e.dataSourceMeta,current:(0,P.cloneDeep)(e.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:e}=this.props;if(this.element&&!e.components.ConfigEditor){const e=(0,w.getAngularLoader)(),t='<plugin-component type="datasource-config-ctrl" />';this.component=e.load(this.element,this.scopeProps,t)}}componentDidUpdate(e){const{plugin:t}=this.props;var a;t.components.ConfigEditor||this.props.dataSource===e.dataSource||(this.scopeProps.ctrl.current=(0,P.cloneDeep)(this.props.dataSource),null===(a=this.component)||void 0===a||a.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:e,dataSource:t}=this.props;return e?(0,v.jsx)("div",{ref:e=>this.element=e,children:e.components.ConfigEditor&&s.createElement(e.components.ConfigEditor,{options:t,onOptionsChange:this.onModelChanged})}):null}}var O,T;function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const B={deleteDataSource:f.xU,loadDataSource:f.gv,setDataSourceName:S.BX,updateDataSource:f.oe,setIsDefault:S.yr,dataSourceLoaded:S.rl,initDataSourceSettings:f.M9,testDataSource:f.kY,cleanUpAction:l.e},L=(0,n.connect)((function(e,t){const a=t.match.params.uid,s=new URLSearchParams(t.location.search),n=(0,x.f6)(e.dataSources,a),{plugin:r,loadError:o,loading:i,testingStatus:l}=e.dataSourceSettings,c=s.get("page"),d=r?(0,b.nI)((0,b.B1)(n,r),c||"settings"):(0,b.xG)("settings"),u=(0,p.h)(e.navIndex,c?`datasource-page-${c}`:`datasource-settings-${a}`,d);return{dataSource:(0,x.f6)(e.dataSources,a),dataSourceMeta:(0,x.G4)(e.dataSources,n.type),dataSourceId:a,page:c,plugin:r,loadError:o,loading:i,testingStatus:l,navModel:u}}),B);class R extends s.PureComponent{constructor(){super(...arguments),E(this,"onSubmit",(async e=>{e.preventDefault(),await this.props.updateDataSource(Object.assign({},this.props.dataSource)),this.testDataSource()})),E(this,"onTest",(async e=>{e.preventDefault(),this.testDataSource()})),E(this,"onDelete",(()=>{c.Z.publish(new m.VJ({title:"Delete",text:`Are you sure you want to delete the "${this.props.dataSource.name}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>{this.confirmDelete()}}))})),E(this,"confirmDelete",(()=>{this.props.deleteDataSource()})),E(this,"onModelChange",(e=>{this.props.dataSourceLoaded(e)}))}componentDidMount(){const{initDataSourceSettings:e,dataSourceId:t}=this.props;e(t)}componentWillUnmount(){this.props.cleanUpAction({stateSelector:e=>e.dataSourceSettings})}isReadOnly(){return!0===this.props.dataSource.readOnly}renderIsReadOnlyMessage(){return(0,v.jsx)(i.Alert,{"aria-label":o.wl.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source",children:"This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."})}renderMissingEditRightsMessage(){return O||(O=(0,v.jsx)(i.Alert,{severity:"info",title:"Missing rights",children:"You are not allowed to modify this data source. Please contact your server admin to update this data source."}))}testDataSource(){const{dataSource:e,testDataSource:t}=this.props;t(e.name)}get hasDataSource(){return this.props.dataSource.id>0}onNavigateToExplore(){const{dataSource:e}=this.props,t=JSON.stringify({datasource:e.name,context:"explore"});return r.urlUtil.renderUrl("/explore",{left:t})}renderLoadError(){const{loadError:e,dataSource:t}=this.props,a=!this.isReadOnly()&&u.Vt.hasPermissionInMetadata(g.bW.DataSourcesDelete,t),s={text:e,subTitle:"Data Source Error",icon:"exclamation-triangle"},n={node:s,main:s};return(0,v.jsx)(d.Z,{navModel:n,children:(0,v.jsxs)(d.Z.Contents,{isLoading:this.props.loading,children:[this.isReadOnly()&&this.renderIsReadOnlyMessage(),(0,v.jsxs)("div",{className:"gf-form-button-row",children:[a&&(0,v.jsx)(i.Button,{type:"submit",variant:"destructive",onClick:this.onDelete,children:"Delete"}),(0,v.jsx)(i.Button,{variant:"secondary",fill:"outline",type:"button",onClick:()=>history.back(),children:"Back"})]})]})})}renderConfigPageBody(e){const{plugin:t}=this.props;if(!t||!t.configPages)return null;for(const a of t.configPages)if(a.id===e)return(0,v.jsx)(a.body,{plugin:t,query:{}});return(0,v.jsxs)("div",{children:["Page not found: ",e]})}renderAlertDetails(){var e,t,a;const{testingStatus:s}=this.props;return(0,v.jsxs)(v.Fragment,{children:[null==s||null===(e=s.details)||void 0===e?void 0:e.message,null!=s&&null!==(t=s.details)&&void 0!==t&&t.verboseMessage?(0,v.jsx)("details",{style:{whiteSpace:"pre-wrap"},children:null==s||null===(a=s.details)||void 0===a?void 0:a.verboseMessage}):null]})}renderSettings(){const{dataSourceMeta:e,setDataSourceName:t,setIsDefault:a,dataSource:s,plugin:n,testingStatus:r}=this.props,l=u.Vt.hasPermissionInMetadata(g.bW.DataSourcesWrite,s),c=u.Vt.hasPermissionInMetadata(g.bW.DataSourcesDelete,s);return(0,v.jsxs)("form",{onSubmit:this.onSubmit,children:[!l&&this.renderMissingEditRightsMessage(),this.isReadOnly()&&this.renderIsReadOnlyMessage(),e.state&&(0,v.jsxs)("div",{className:"gf-form",children:[T||(T=(0,v.jsx)("label",{className:"gf-form-label width-10",children:"Plugin state"})),(0,v.jsx)("label",{className:"gf-form-label gf-form-label--transparent",children:(0,v.jsx)(h.u,{state:e.state})})]}),(0,v.jsx)(k,{dataSource:s}),(0,v.jsx)(y,{dataSourceName:s.name,isDefault:s.isDefault,onDefaultChange:e=>a(e),onNameChange:e=>t(e)}),n&&(0,v.jsx)(N,{plugin:n,dataSource:s,dataSourceMeta:e,onModelChange:this.onModelChange}),(null==r?void 0:r.message)&&(0,v.jsx)("div",{className:"gf-form-group p-t-2",children:(0,v.jsx)(i.Alert,{severity:"error"===r.status?"error":"success",title:r.message,"aria-label":o.wl.pages.DataSource.alert,children:r.details&&this.renderAlertDetails()})}),(0,v.jsx)(D,{onSubmit:e=>this.onSubmit(e),canSave:!this.isReadOnly()&&l,canDelete:!this.isReadOnly()&&c,onDelete:this.onDelete,onTest:e=>this.onTest(e),exploreUrl:this.onNavigateToExplore()})]})}render(){const{navModel:e,page:t,loadError:a,loading:s}=this.props;return a?this.renderLoadError():(0,v.jsx)(d.Z,{navModel:e,children:(0,v.jsx)(d.Z.Contents,{isLoading:s,children:this.hasDataSource?(0,v.jsx)("div",{children:t?this.renderConfigPageBody(t):this.renderSettings()}):null})})}}const U=L(R)},"./public/app/features/plugins/components/PluginStateInfo.tsx":(e,t,a)=>{a.d(t,{u:()=>o});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-ui/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const o=e=>{const t=function(e){switch(e){case s.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case s.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case s.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return t?(0,r.jsx)(n.Badge,{color:t.color,title:t.tooltip,text:t.text,icon:t.icon}):null}}}]);
//# sourceMappingURL=DataSourceSettingsPage.42e3f3c3450719e33235.js.map