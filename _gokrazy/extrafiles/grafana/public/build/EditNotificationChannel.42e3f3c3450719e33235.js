"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7384],{"./public/app/core/components/connectWithCleanUp.tsx":(e,t,n)=>{n.d(t,{$:()=>c});var i=n("../../opt/drone/yarncache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),s=n.n(i),a=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=n("./public/app/core/actions/cleanUp.ts"),l=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=(e,t,n)=>i=>{const c=(0,r.connect)(e,t)(i),d=e=>{const t=(0,r.useDispatch)();return(0,a.useEffect)((()=>function(){t((0,o.e)({stateSelector:n}))}),[t]),(0,l.jsx)(c,Object.assign({},e))};return d.displayName=`ConnectWithCleanUp(${c.displayName})`,s()(d,i),d}},"./public/app/features/alerting/EditNotificationChannelPage.tsx":(e,t,n)=>{n.r(t),n.d(t,{EditNotificationChannelPage:()=>b,default:()=>v});var i,s,a=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./packages/grafana-runtime/src/index.ts"),o=n("./packages/grafana-ui/src/index.ts"),l=n("./public/app/core/components/Page/Page.tsx"),c=n("./public/app/core/components/connectWithCleanUp.tsx"),d=n("./public/app/core/selectors/navModel.ts"),u=n("./public/app/features/alerting/components/NotificationChannelForm.tsx"),p=n("./public/app/features/alerting/state/actions.ts"),h=n("./public/app/features/alerting/state/reducers.ts"),g=n("./public/app/features/alerting/utils/notificationChannels.ts"),f=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class b extends a.PureComponent{constructor(){super(...arguments),m(this,"onSubmit",(e=>{const{notificationChannel:t}=this.props;this.props.updateNotificationChannel(Object.assign({},(0,g.YV)(Object.assign({},t,e,{settings:Object.assign({},t.settings,e.settings)})),{id:t.id}))})),m(this,"onTestChannel",(e=>{const{notificationChannel:t}=this.props;this.props.testNotificationChannel((0,g.dv)(Object.assign({},t,e,{settings:Object.assign({},t.settings,e.settings)})))}))}componentDidMount(){this.props.loadNotificationChannel(parseInt(this.props.match.params.id,10))}render(){const{navModel:e,notificationChannel:t,notificationChannelTypes:n}=this.props;return(0,f.jsx)(l.Z,{navModel:e,children:(0,f.jsxs)(l.Z.Contents,{children:[i||(i=(0,f.jsx)("h2",{className:"page-sub-heading",children:"Edit notification channel"})),t&&t.id>0?(0,f.jsx)(o.Form,{maxWidth:600,onSubmit:this.onSubmit,defaultValues:Object.assign({},t,{type:n.find((e=>e.value===t.type))}),children:e=>{let{control:i,errors:s,getValues:a,register:o,watch:l}=e;const c=n.find((e=>e.value===a().type.value));return(0,f.jsx)(u.w,{selectableChannels:(0,g.t7)(n,!0),selectedChannel:c,imageRendererAvailable:r.config.rendererAvailable,onTestChannel:this.onTestChannel,register:o,watch:l,errors:s,getValues:a,control:i,resetSecureField:this.props.resetSecureField,secureFields:t.secureFields})}}):s||(s=(0,f.jsxs)("div",{children:["Loading notification channel",(0,f.jsx)(o.Spinner,{})]}))]})})}}const j={loadNotificationChannel:p.tk,testNotificationChannel:p.c1,updateNotificationChannel:p.fg,resetSecureField:h.J0},v=(0,c.$)((e=>({navModel:(0,d.h)(e.navIndex,"channels"),notificationChannel:e.notificationChannel.notificationChannel,notificationChannelTypes:e.notificationChannel.notificationChannelTypes})),j,(e=>e.notificationChannel))(b)},"./public/app/features/alerting/components/NotificationChannelForm.tsx":(e,t,n)=>{n.d(t,{w:()=>x});var i=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a=n("./packages/grafana-ui/src/index.ts"),r=n("./public/app/core/config.ts"),o=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=["ref"];const c=e=>{let{control:t,option:n,register:i,invalid:s}=e;const r=n.secure?`secureSettings.${n.propertyName}`:`settings.${n.propertyName}`;switch(n.element){case"input":return(0,o.jsx)(a.Input,Object.assign({},i(`${r}`,{required:!!n.required&&"Required",validate:e=>""===n.validationRule||d(e,n.validationRule)}),{invalid:s,type:n.inputType,placeholder:n.placeholder}));case"select":return(0,o.jsx)(a.InputControl,{control:t,name:`${r}`,render:e=>{var t;let{}=e,i=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e.field,l);return(0,o.jsx)(a.Select,Object.assign({menuShouldPortal:!0},i,{options:null!==(t=n.selectOptions)&&void 0!==t?t:void 0,invalid:s}))}});case"textarea":return(0,o.jsx)(a.TextArea,Object.assign({invalid:s},i(`${r}`,{required:!!n.required&&"Required",validate:e=>""===n.validationRule||d(e,n.validationRule)})));default:return console.error("Element not supported",n.element),null}},d=(e,t)=>!!RegExp(t).test(e)||"Invalid format",u=e=>{let{control:t,currentFormValues:n,errors:i,selectedChannelOptions:s,register:r,onResetSecureField:l,secureFields:d}=e;return(0,o.jsx)(o.Fragment,{children:s.map(((e,s)=>{var u;const p=`${e.label}-${s}`,h=n[`settings.${e.showWhen.field}`]&&n[`settings.${e.showWhen.field}`].value;return e.showWhen.field&&h!==e.showWhen.is?null:"checkbox"===e.element?(0,o.jsx)(a.Field,{children:(0,o.jsx)(a.Checkbox,Object.assign({},r(e.secure?`secureSettings.${e.propertyName}`:`settings.${e.propertyName}`),{label:e.label,description:e.description}))},p):(0,o.jsx)(a.Field,{label:e.label,description:e.description,invalid:i.settings&&!!i.settings[e.propertyName],error:i.settings&&(null===(u=i.settings[e.propertyName])||void 0===u?void 0:u.message),children:d&&d[e.propertyName]?(0,o.jsx)(a.Input,{readOnly:!0,value:"Configured",suffix:(0,o.jsx)(a.Button,{onClick:()=>l(e.propertyName),fill:"text",type:"button",size:"sm",children:"Clear"})}):(0,o.jsx)(c,{option:e,register:r,control:t})},p)}))})},p=["ref"];const h=e=>{let{control:t,currentFormValues:n,errors:i,secureFields:s,selectedChannel:r,channels:l,register:c,resetSecureField:d}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Field,{label:"Name",invalid:!!i.name,error:i.name&&i.name.message,children:(0,o.jsx)(a.Input,Object.assign({},c("name",{required:"Name is required"})))}),(0,o.jsx)(a.Field,{label:"Type",children:(0,o.jsx)(a.InputControl,{name:"type",render:e=>{let{}=e,t=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e.field,p);return(0,o.jsx)(a.Select,Object.assign({menuShouldPortal:!0},t,{options:l}))},control:t,rules:{required:!0}})}),(0,o.jsx)(u,{selectedChannelOptions:r.options.filter((e=>e.required)),currentFormValues:n,secureFields:s,onResetSecureField:d,register:c,errors:i,control:t})]})},g=e=>{var t;let{control:n,currentFormValues:i,errors:s,selectedChannel:r,secureFields:l,register:c,resetSecureField:d}=e;return(0,o.jsxs)(a.CollapsableSection,{label:`Optional ${r.heading}`,isOpen:!1,children:[""!==r.info&&(0,o.jsx)(a.Alert,{severity:"info",title:null!==(t=r.info)&&void 0!==t?t:""}),(0,o.jsx)(u,{selectedChannelOptions:r.options.filter((e=>!e.required)),currentFormValues:i,register:c,errors:s,control:n,onResetSecureField:d,secureFields:l})]})};var f;const m=e=>{let{currentFormValues:t,imageRendererAvailable:n,register:i}=e;return(0,o.jsxs)(a.CollapsableSection,{label:"Notification settings",isOpen:!1,children:[(0,o.jsx)(a.Field,{children:(0,o.jsx)(a.Checkbox,Object.assign({},i("isDefault"),{label:"Default",description:"Use this notification for all alerts"}))}),(0,o.jsx)(a.Field,{children:(0,o.jsx)(a.Checkbox,Object.assign({},i("settings.uploadImage"),{label:"Include image",description:"Captures an image and include it in the notification"}))}),t.uploadImage&&!n&&(f||(f=(0,o.jsx)(a.InfoBox,{title:"No image renderer available/installed",children:"Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."}))),(0,o.jsx)(a.Field,{children:(0,o.jsx)(a.Checkbox,Object.assign({},i("disableResolveMessage"),{label:"Disable Resolve Message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false"}))}),(0,o.jsx)(a.Field,{children:(0,o.jsx)(a.Checkbox,Object.assign({},i("sendReminder"),{label:"Send reminders",description:"Send additional notifications for triggered alerts"}))}),t.sendReminder&&(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Field,{label:"Send reminder every",description:"Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",children:(0,o.jsx)(a.Input,Object.assign({},i("frequency"),{width:8}))})})]})};var b,j,v;const x=e=>{let{control:t,errors:n,selectedChannel:i,selectableChannels:l,register:c,watch:d,getValues:u,imageRendererAvailable:p,onTestChannel:f,resetSecureField:x,secureFields:C}=e;const S=y((0,a.useTheme)());(0,s.useEffect)((()=>{const e=new Set(null==i?void 0:i.options.filter((e=>e.showWhen.field)).map((e=>`settings.${e.showWhen.field}`)))||[];d(["type","sendReminder","uploadImage",...e])}),[null==i?void 0:i.options,d]);const F=u();return i?(0,o.jsxs)("div",{className:S.formContainer,children:[(0,o.jsx)("div",{className:S.formItem,children:(0,o.jsx)(h,{selectedChannel:i,channels:l,secureFields:C,resetSecureField:x,currentFormValues:F,register:c,errors:n,control:t})}),i.options.filter((e=>!e.required)).length>0&&(0,o.jsx)("div",{className:S.formItem,children:(0,o.jsx)(g,{selectedChannel:i,secureFields:C,resetSecureField:x,currentFormValues:F,register:c,errors:n,control:t})}),(0,o.jsx)("div",{className:S.formItem,children:(0,o.jsx)(m,{imageRendererAvailable:p,currentFormValues:F,register:c,errors:n,control:t})}),(0,o.jsx)("div",{className:S.formButtons,children:(0,o.jsxs)(a.HorizontalGroup,{children:[j||(j=(0,o.jsx)(a.Button,{type:"submit",children:"Save"})),(0,o.jsx)(a.Button,{type:"button",variant:"secondary",onClick:()=>f(u()),children:"Test"}),(0,o.jsx)("a",{href:`${r.ZP.appSubUrl}/alerting/notifications`,children:v||(v=(0,o.jsx)(a.Button,{type:"button",variant:"secondary",children:"Back"}))})]})})]}):b||(b=(0,o.jsx)(a.Spinner,{}))},y=(0,a.stylesFactory)((e=>({formContainer:i.css``,formItem:i.css`
      flex-grow: 1;
      padding-top: ${e.spacing.md};
    `,formButtons:i.css`
      padding-top: ${e.spacing.xl};
    `})))},"./public/app/features/alerting/state/actions.ts":(e,t,n)=>{n.d(t,{Au:()=>o,C2:()=>c,c1:()=>u,en:()=>l,fA:()=>p,fg:()=>d,tk:()=>h});var i=n("./packages/grafana-runtime/src/index.ts"),s=n("./public/app/core/actions/index.ts"),a=n("./public/app/core/copy/appNotification.ts"),r=n("./public/app/features/alerting/state/reducers.ts");function o(e){return async t=>{t((0,r.gz)());const n=await(0,i.getBackendSrv)().get("/api/alerts",e);t((0,r.Oc)(n))}}function l(e,t){return async n=>{await(0,i.getBackendSrv)().post(`/api/alerts/${e}/pause`,t);n(o({state:(i.locationService.getSearchObject().state||"all").toString()}))}}function c(e){return async t=>{try{await(0,i.getBackendSrv)().post("/api/alert-notifications",e),t((0,s.$l)((0,a.AT)("Notification created"))),i.locationService.push("/alerting/notifications")}catch(e){t((0,s.$l)((0,a.t_)(e.data.error)))}}}function d(e){return async t=>{try{await(0,i.getBackendSrv)().put(`/api/alert-notifications/${e.id}`,e),t((0,s.$l)((0,a.AT)("Notification updated")))}catch(e){t((0,s.$l)((0,a.t_)(e.data.error)))}}}function u(e){return async(t,n)=>{const s=n().notificationChannel.notificationChannel;await(0,i.getBackendSrv)().post("/api/alert-notifications/test",Object.assign({id:s.id},e))}}function p(){return async e=>{const t=(await(0,i.getBackendSrv)().get("/api/alert-notifiers")).sort(((e,t)=>e.name>t.name?1:-1));e((0,r.T2)(t))}}function h(e){return async t=>{await t(p());const n=await(0,i.getBackendSrv)().get(`/api/alert-notifications/${e}`);t((0,r.K)(n))}}},"./public/app/features/alerting/utils/notificationChannels.ts":(e,t,n)=>{n.d(t,{Pg:()=>s,YV:()=>r,dv:()=>o,t7:()=>a});var i=n("../../opt/drone/yarncache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");const s={id:-1,name:"",type:{value:"email",label:"Email"},sendReminder:!1,disableResolveMessage:!1,frequency:"15m",settings:{uploadImage:n("./packages/grafana-runtime/src/index.ts").config.rendererAvailable,autoResolve:!0,httpMethod:"POST",severity:"critical"},secureSettings:{},secureFields:{},isDefault:!1},a=(0,i.Z)(((e,t)=>e.map((e=>t?{value:e.value,label:e.label,description:e.description}:{value:e.value,label:e.label})))),r=e=>{const t=Object.fromEntries(Object.entries(e.settings).map((e=>{let[t,n]=e;return[t,n&&n.hasOwnProperty("value")?n.value:n]})));return Object.assign({},s,e,{frequency:""===e.frequency?s.frequency:e.frequency,type:e.type.value,settings:Object.assign({},s.settings,t),secureSettings:Object.assign({},e.secureSettings)})},o=e=>{var t;return{name:e.name,type:e.type.value,frequency:null!==(t=e.frequency)&&void 0!==t?t:s.frequency,settings:Object.assign({},Object.assign(s.settings,e.settings)),secureSettings:Object.assign({},e.secureSettings)}}}}]);
//# sourceMappingURL=EditNotificationChannel.42e3f3c3450719e33235.js.map