"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{"./public/app/features/alerting/unified/AlertGroups.tsx":(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var s=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),n=a("./packages/grafana-ui/src/index.ts"),i=a("./public/app/core/hooks/useQueryParams.ts"),l=a("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),c=a("./public/app/plugins/datasource/alertmanager/types.ts"),o=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),p=a("./public/app/features/alerting/unified/components/AlertLabels.tsx"),u=a("./packages/grafana-data/src/index.ts"),d=a("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx"),g=a("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx"),m=a("./public/app/core/services/context_srv.ts"),b=a("./public/app/types/index.ts"),f=a("./public/app/features/alerting/unified/utils/access-control.ts"),x=a("./public/app/features/alerting/unified/utils/datasource.ts"),h=a("./public/app/features/alerting/unified/utils/misc.ts"),j=a("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),y=a("./public/app/features/alerting/unified/components/Authorize.tsx"),v=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const S=e=>{let{alert:t,alertManagerSourceName:a}=e;const s=(0,n.useStyles2)(_),r=(0,f.QX)(a),i=!(0,x.HY)(a)||m.Vt.hasPermission(b.bW.AlertingRuleRead);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:s.actionsRow,children:[(0,v.jsxs)(y.q,{actions:[r.update,r.create],fallback:m.Vt.isEditor,children:[t.status.state===c.Z9.Suppressed&&(0,v.jsx)(n.LinkButton,{href:`${(0,h.eQ)("/alerting/silences",a)}&silenceIds=${t.status.silencedBy.join(",")}`,className:s.button,icon:"bell",size:"sm",children:"Manage silences"}),t.status.state===c.Z9.Active&&(0,v.jsx)(n.LinkButton,{href:(0,h.VN)(a,t.labels),className:s.button,icon:"bell-slash",size:"sm",children:"Silence"})]}),i&&t.generatorURL&&(0,v.jsx)(n.LinkButton,{className:s.button,href:t.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(t.annotations).map((e=>{let[t,a]=e;return(0,v.jsx)(j.a,{annotationKey:t,value:a},t)})),(0,v.jsxs)("div",{className:s.receivers,children:["Receivers:"," ",t.receivers.map((e=>{let{name:t}=e;return t})).filter((e=>!!e)).join(", ")]})]})},_=e=>({button:o.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:o.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:o.css`
    padding: ${e.spacing(1,0)};
  `}),N=e=>{let{alerts:t,alertManagerSourceName:a}=e;const r=(0,n.useStyles2)(k),i=(0,s.useMemo)((()=>[{id:"state",label:"State",renderCell:e=>{let{data:t}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(d.G,{state:t.status.state}),(0,v.jsxs)("span",{className:r.duration,children:["for"," ",(0,u.intervalToAbbreviatedDurationString)({start:new Date(t.startsAt),end:new Date(t.endsAt)})]})]})},size:"220px"},{id:"labels",label:"Labels",renderCell:e=>{let{data:{labels:t}}=e;return(0,v.jsx)(p.s,{className:r.labels,labels:t})},size:1}]),[r]),l=(0,s.useMemo)((()=>t.map((e=>({id:e.fingerprint,data:e})))),[t]);return(0,v.jsx)("div",{className:r.tableWrapper,"data-testid":"alert-group-table",children:(0,v.jsx)(g.F,{cols:i,items:l,isExpandable:!0,renderExpandedContent:e=>{let{data:t}=e;return(0,v.jsx)(S,{alert:t,alertManagerSourceName:a})}})})},k=e=>({tableWrapper:o.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:o.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:o.css`
    padding-bottom: 0;
  `});var $,C=a("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),z=a("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");const A=e=>{let{alertManagerSourceName:t,group:a}=e;const[r,i]=(0,s.useState)(!0),l=(0,n.useStyles2)(w);return(0,v.jsxs)("div",{className:l.wrapper,children:[(0,v.jsxs)("div",{className:l.header,children:[(0,v.jsxs)("div",{className:l.group,"data-testid":"alert-group",children:[(0,v.jsx)(C.U,{isCollapsed:r,onToggle:()=>i(!r),"data-testid":"alert-group-collapse-toggle"}),Object.keys(a.labels).length?(0,v.jsx)(p.s,{className:l.headerLabels,labels:a.labels}):$||($=(0,v.jsx)("span",{children:"No grouping"}))]}),(0,v.jsx)(z.Z,{group:a})]}),!r&&(0,v.jsx)(N,{alertManagerSourceName:t,alerts:a.alerts})]})},w=e=>({wrapper:o.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:o.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:o.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:o.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:o.css``,spanElement:o.css`
    margin-left: ${e.spacing(.5)};
  `,[c.Z9.Active]:o.css`
    color: ${e.colors.error.main};
  `,[c.Z9.Suppressed]:o.css`
    color: ${e.colors.primary.main};
  `,[c.Z9.Unprocessed]:o.css`
    color: ${e.colors.secondary.main};
  `});var M,G=a("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx"),O=a("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");const F=e=>{let{onStateFilterChange:t,stateFilter:a}=e;const s=(0,n.useStyles2)(B),r=Object.entries(c.Z9).sort(((e,t)=>{let[a]=e,[s]=t;return a<s?-1:1})).map((e=>{let[t,a]=e;return{label:t,value:a}}));return(0,v.jsxs)("div",{className:s.wrapper,children:[M||(M=(0,v.jsx)(n.Label,{children:"State"})),(0,v.jsx)(n.RadioButtonGroup,{options:r,value:a,onChange:t})]})},B=e=>({wrapper:o.css`
    margin-left: ${e.spacing(1)};
  `});var L,Z,I=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const P=e=>{let{className:t,groups:a,groupBy:s,onGroupingChange:r}=e;const i=(0,I.uniq)(a.flatMap((e=>e.alerts)).flatMap((e=>{let{labels:t}=e;return Object.keys(t)}))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,v.jsxs)("div",{"data-testid":"group-by-container",className:t,children:[L||(L=(0,v.jsx)(n.Label,{children:"Custom group by"})),(0,v.jsx)(n.MultiSelect,{"aria-label":"group by label keys",value:s,placeholder:"Group by",prefix:Z||(Z=(0,v.jsx)(n.Icon,{name:"tag-alt"})),onChange:e=>{r(e.map((e=>{let{value:t}=e;return t})))},options:i,menuShouldPortal:!0})]})};var q=a("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");const E=e=>{let{groups:t}=e;const[a,r]=(0,s.useState)(Math.floor(100*Math.random())),[l,c]=(0,i.K)(),{groupBy:o=[],queryString:p,alertState:u}=(0,h.lC)(l),d=`matcher-${a}`,[g,m]=(0,q.k)(),b=(0,n.useStyles2)(T),f=!!(o.length>0||p||u);return(0,v.jsxs)("div",{className:b.wrapper,children:[(0,v.jsx)(G.P,{current:g,onChange:m}),(0,v.jsxs)("div",{className:b.filterSection,children:[(0,v.jsx)(O.F,{className:b.filterInput,defaultQueryString:p,onFilterChange:e=>c({queryString:e||null})},d),(0,v.jsx)(P,{className:b.filterInput,groups:t,groupBy:o,onGroupingChange:e=>c({groupBy:e.length?e.join(","):null})}),(0,v.jsx)(F,{stateFilter:u,onStateFilterChange:e=>c({alertState:e||null})}),f&&(0,v.jsx)(n.Button,{className:b.clearButton,variant:"secondary",icon:"times",onClick:()=>{c({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>r(a+1)),100)},children:"Clear filters"})]})]})},T=e=>({wrapper:o.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:o.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:o.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:o.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var W=a("./public/app/features/alerting/unified/state/actions.ts"),D=a("./public/app/features/alerting/unified/utils/redux.ts"),R=a("./public/app/features/alerting/unified/utils/constants.ts"),U=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");var Q=a("./public/app/features/alerting/unified/utils/alertmanager.ts");var K,V;const H=e=>({groupingBanner:o.css`
    margin: ${e.spacing(2,0)};
  `}),J=()=>{var e;const[t]=(0,q.k)(),a=(0,r.useDispatch)(),[c]=(0,i.K)(),{groupBy:o=[]}=(0,h.lC)(c),p=(0,n.useStyles2)(H),u=(0,U._)((e=>e.amAlertGroups)),{loading:d,error:g,result:m=[]}=null!==(e=u[t||""])&&void 0!==e?e:D.oq,b=((e,t)=>(0,s.useMemo)((()=>0===t.length?e.filter((e=>0===Object.keys(e.labels).length)).length>1?e.reduce(((e,t)=>{if(0===Object.keys(t.labels).length){const a=e.find((e=>{let{labels:t}=e;return Object.keys(t)}));a?a.alerts=(0,I.uniqBy)([...a.alerts,...t.alerts],"labels"):e.push({alerts:t.alerts,labels:{},receiver:{name:"NONE"}})}else e.push(t);return e}),[]):e:e.flatMap((e=>{let{alerts:t}=e;return t})).reduce(((e,a)=>{if(t.every((e=>Object.keys(a.labels).includes(e)))){const s=e.find((e=>t.every((t=>e.labels[t]===a.labels[t]))));if(s)s.alerts.push(a);else{const s=t.reduce(((e,t)=>Object.assign({},e,{[t]:a.labels[t]})),{});e.push({alerts:[a],labels:s,receiver:{name:"NONE"}})}}else{const t=e.find((e=>0===Object.keys(e.labels).length));t?t.alerts.push(a):e.push({alerts:[a],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,t]))(m,o),f=(e=>{const[t]=(0,i.K)(),a=(0,h.lC)(t),r=(0,Q.Zh)(a.queryString||"");return(0,s.useMemo)((()=>e.reduce(((e,t)=>{const s=t.alerts.filter((e=>{let{labels:t,status:s}=e;const n=(0,Q.eD)(t,r),i=!a.alertState||s.state===a.alertState;return n&&i}));return s.length>0&&(0===Object.keys(t.labels).length?e.unshift(Object.assign({},t,{alerts:s})):e.push(Object.assign({},t,{alerts:s}))),e}),[])),[e,a,r])})(b);return(0,s.useEffect)((()=>{function e(){t&&a((0,W.mS)(t))}e();const s=setInterval(e,R.iF);return()=>{clearInterval(s)}}),[a,t]),(0,v.jsxs)(l.J,{pageId:"groups",children:[(0,v.jsx)(E,{groups:m}),d&&(K||(K=(0,v.jsx)(n.LoadingPlaceholder,{text:"Loading notifications"}))),g&&!d&&(0,v.jsx)(n.Alert,{title:"Error loading notifications",severity:"error",children:g.message||"Unknown error"}),m&&f.map(((e,a)=>(0,v.jsxs)(s.Fragment,{children:[(1===a&&0===Object.keys(f[0].labels).length||0===a&&Object.keys(e.labels).length>0)&&(0,v.jsxs)("p",{className:p.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,v.jsx)(A,{alertManagerSourceName:t||"",group:e})]},`${JSON.stringify(e.labels)}-group-${a}`))),m&&!f.length&&(V||(V=(0,v.jsx)("p",{children:"No results."})))]})}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,t,a)=>{a.d(t,{J:()=>l});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=a("./public/app/core/components/Page/Page.tsx"),r=a("./public/app/core/selectors/navModel.ts"),n=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=e=>{let{children:t,pageId:a,isLoading:l}=e;const c=(0,r.h)((0,n.useSelector)((e=>e.navIndex)),a);return(0,i.jsx)(s.Z,{navModel:c,children:(0,i.jsx)(s.Z.Contents,{isLoading:l,children:t})})}},"./public/app/features/alerting/unified/components/Authorize.tsx":(e,t,a)=>{a.d(t,{q:()=>n});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=a("./public/app/core/services/context_srv.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const n=e=>{let{actions:t,children:a,fallback:n=!0}=e;return t.some((e=>s.Vt.hasAccess(e,n)))?(0,r.jsx)(r.Fragment,{children:a}):null}},"./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":(e,t,a)=>{a.d(t,{F:()=>c});var s=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),n=(a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a("./public/app/features/alerting/unified/components/DynamicTable.tsx")),i=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=["renderExpandedContent"];const c=e=>{let{renderExpandedContent:t}=e,a=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);const c=(0,r.useStyles2)(o);return(0,i.jsx)(n.t,Object.assign({renderExpandedContent:t?(e,a,r)=>(0,i.jsxs)(i.Fragment,{children:[!(a===r.length-1)&&(0,i.jsx)("div",{className:(0,s.cx)(c.contentGuideline,c.guideline)}),t(e,a,r)]}):void 0,renderPrefixHeader:()=>(0,i.jsx)("div",{className:c.relative,children:(0,i.jsx)("div",{className:(0,s.cx)(c.headerGuideline,c.guideline)})}),renderPrefixCell:(e,t,a)=>(0,i.jsxs)("div",{className:c.relative,children:[(0,i.jsx)("div",{className:(0,s.cx)(c.topGuideline,c.guideline)}),!(t===a.length-1)&&(0,i.jsx)("div",{className:(0,s.cx)(c.bottomGuideline,c.guideline)})]})},a))},o=e=>({relative:s.css`
    position: relative;
    height: 100%;
  `,guideline:s.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:s.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:s.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:s.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:s.css`
    top: -25px;
    bottom: 0;
  `})},"./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":(e,t,a)=>{a.d(t,{F:()=>p});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s,r,n,i=a("./packages/grafana-ui/src/index.ts"),l=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),c=a("./.yarn/__virtual__/@grafana-experimental-virtual-920bad95a1/3/opt/drone/yarncache/@grafana-experimental-npm-0.0.2-canary.22-45d2c4f135-b9a64c0abc.zip/node_modules/@grafana/experimental/index.js"),o=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=e=>{let{className:t,onFilterChange:a,defaultQueryString:l,queryString:p}=e;const d=(0,i.useStyles2)(u),g=s||(s=(0,o.jsx)(i.Icon,{name:"search"}));return(0,o.jsxs)("div",{className:t,children:[(0,o.jsx)(i.Label,{children:(0,o.jsxs)(c.Stack,{gap:.5,children:[r||(r=(0,o.jsx)("span",{children:"Search by label"})),(0,o.jsx)(i.Tooltip,{content:n||(n=(0,o.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,o.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,o.jsx)(i.Icon,{className:d.icon,name:"info-circle",size:"sm"})})]})}),(0,o.jsx)(i.Input,{placeholder:"Search",defaultValue:l,value:p,onChange:e=>{const t=e.target;a(t.value)},"data-testid":"search-query-input",prefix:g,className:d.inputWidth})]})},u=e=>({icon:l.css`
    margin-right: ${e.spacing(.5)};
  `,inputWidth:l.css`
    width: 340px;
    flex-grow: 0;
  `})},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,t,a)=>{a.d(t,{G:()=>l});var s=a("./public/app/plugins/datasource/alertmanager/types.ts"),r=(a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a("./public/app/features/alerting/unified/components/StateTag.tsx")),n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i={[s.Z9.Active]:"bad",[s.Z9.Unprocessed]:"neutral",[s.Z9.Suppressed]:"info"},l=e=>{let{state:t}=e;return(0,n.jsx)(r.i,{state:i[t],children:t})}},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,t,a)=>{a.d(t,{k:()=>o});var s=a("./public/app/core/hooks/useQueryParams.ts"),r=a("./public/app/core/store.ts"),n=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=a("./public/app/features/alerting/unified/utils/constants.ts"),l=a("./public/app/features/alerting/unified/utils/datasource.ts");function c(e){return e===l.GC||!!(0,l.aM)().find((t=>t.name===e))}function o(){const[e,t]=(0,s.K)(),a=(0,n.useCallback)((e=>{c(e)&&(e===l.GC?(r.Z.delete(i.de),t({[i.c4]:null})):(r.Z.set(i.de,e),t({[i.c4]:e})))}),[t]),o=e[i.c4];if(o&&"string"==typeof o)return c(o)?[o,a]:[void 0,a];const p=r.Z.get(i.de);return p&&"string"==typeof p&&c(p)?(a(p),[p,a]):[l.GC,a]}}}]);
//# sourceMappingURL=AlertGroups.15718e8e3083449662a7.js.map