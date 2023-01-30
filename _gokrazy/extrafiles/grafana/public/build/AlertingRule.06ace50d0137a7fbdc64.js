"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4679],{77110:(ee,w,a)=>{a.r(w),a.d(w,{RuleViewer:()=>ge,default:()=>nt});var r=a(52423),D=a(64421),e=a(68404),L=a(86253),V=a(3499),Q=a(49922),b=a(93003),E=a(29516),I=a(2323),x=a(90090),h=a(90701),B=a(90723),K=a(81697),m=a(7917),p=a(78758),S=a(84952),C=a(20091),M=a(82897),$=a(26418),F=a(68884),A=a(13654),O=a(75e3),T=a(97573),H=a(67162),pe=a(76726),Ee=a(89050),te=a(46519),fe=a(27677),ve=a(77213),ye=a(73274),Re=a(57172),xe=a(2974),he=a(81168),ae=a(37190),Ce=a(51981),$e=a(74542);const se=4;function Pe({data:t,refId:n,model:l,datasourceUid:i,relativeTimeRange:o,onTimeRangeChange:c,className:g}){const u=(0,E.l4)(),s=(0,E.wW)(De),v=(0,O.j)(l)?ae.Fe:ae.GC,[d,P]=(0,e.useState)(v),y=(0,ve.F)().getInstanceSettings(i),[W,U]=(0,e.useState)({frameIndex:0,showHeader:!0}),k=(0,e.useCallback)(N=>{const j=(0,te.CQ)().unix()-N.unix();if(o){const z=o.from-o.to;c({from:j+z,to:j})}},[c,o]),q=(0,e.useCallback)(N=>N===0?(0,te.CQ)():(0,te.CQ)().subtract(N,"seconds"),[]);return t?y?e.createElement("div",{className:(0,r.cx)(s.content,g)},e.createElement(Ee.Z,null,({width:N,height:j})=>e.createElement("div",{style:{width:N,height:j}},e.createElement("div",{className:s.header},e.createElement("div",{className:s.actions},!(0,O.j)(l)&&o?e.createElement(xe.x,{date:q(o.to),onChange:k,maxDate:new Date}):null,e.createElement($e.j,{onChange:P,value:d,size:"md"}),e.createElement(Ce.q,{actions:[he.AccessControlAction.DataSourcesExplore]},!(0,O.j)(l)&&e.createElement(e.Fragment,null,e.createElement("div",{className:s.spacing}),e.createElement(B.Qj,{size:"md",variant:"secondary",icon:"compass",target:"_blank",href:Ne(y,l)},"View in Explore"))))),e.createElement(ye.$,{height:j-u.spacing.gridSize*se,width:N,data:t,pluginId:d,title:"",onOptionsChange:U,options:W})))):e.createElement("div",{className:(0,r.cx)(s.content,g)},e.createElement(I.b,{title:"Could not find datasource for query"}),e.createElement(Re.p,{width:"100%",height:"250px",language:"json",showLineNumbers:!1,showMiniMap:!1,value:JSON.stringify(l,null,"	"),readOnly:!0})):null}function Ne(t,n){const{name:l}=t,{refId:i,...o}=n,c={...o,datasource:l};return fe.Cj.renderUrl(`${b.v.appSubUrl}/explore`,{left:JSON.stringify({datasource:l,queries:[{refId:"A",...c}],range:{from:"now-1h",to:"now"}})})}const De=t=>({content:r.css`
      width: 100%;
      height: 250px;
    `,header:r.css`
      height: ${t.spacing(se)};
      display: flex;
      align-items: center;
      justify-content: flex-end;
      white-space: nowrap;
    `,refId:r.css`
      font-weight: ${t.typography.fontWeightMedium};
      color: ${t.colors.text.link};
      overflow: hidden;
    `,dataSource:r.css`
      margin-left: ${t.spacing(1)};
      font-style: italic;
      color: ${t.colors.text.secondary};
    `,actions:r.css`
      display: flex;
      align-items: center;
    `,spacing:r.css`
      padding: ${t.spacing(0,1,0,0)};
    `,errorMessage:r.css`
      white-space: pre-wrap;
    `});function Me({queries:t,condition:n,evalDataByQuery:l={},evalTimeRanges:i={},onTimeRangeChange:o}){const c=(0,M.keyBy)(Object.values(b.v.datasources),s=>s.uid),g=t.filter(s=>!(0,O.j)(s.model)),u=t.filter(s=>(0,O.j)(s.model));return e.createElement($.Stack,{gap:2,direction:"column"},e.createElement($.Stack,{gap:2},g.map(({model:s,relativeTimeRange:v,refId:d,datasourceUid:P},y)=>{const W=c[P];return e.createElement(re,{key:y,refId:d,isAlertCondition:n===d,model:s,relativeTimeRange:v,evalTimeRange:i[d],dataSource:W,queryData:l[d],onEvalTimeRangeChange:U=>o(d,U)})})),e.createElement($.Stack,{gap:1},u.map(({model:s,relativeTimeRange:v,refId:d,datasourceUid:P},y)=>{const W=c[P];return(0,O.j)(s)&&e.createElement(Te,{key:y,refId:d,isAlertCondition:n===d,model:s,dataSource:W,evalData:l[d]})})))}function re({refId:t,relativeTimeRange:n,model:l,dataSource:i,queryData:o,evalTimeRange:c,onEvalTimeRangeChange:g}){const u=(0,E.wW)(Oe),s=[i?.name??"[[Data source not found]]"];return n&&s.push((0,A.C_)(n).display),e.createElement(le,{refId:t,headerItems:s,className:u.contentBox},e.createElement("pre",{className:u.code},e.createElement("code",null,(0,C.$w)(l))),i&&e.createElement(Pe,{refId:t,datasourceUid:i.uid,model:l,data:o,relativeTimeRange:c,onTimeRangeChange:g,className:u.visualization}))}const Oe=t=>({code:r.css`
    margin: ${t.spacing(1)};
  `,contentBox:r.css`
    flex: 1 0 100%; // RuleViewerVisualization uses AutoSizer which doesn't expand the box
  `,visualization:r.css`
    padding: ${t.spacing(1)};
  `});function Te({refId:t,model:n,evalData:l,isAlertCondition:i}){function o(){switch(n.type){case T.Us.math:return e.createElement(Le,{model:n});case T.Us.reduce:return e.createElement(Ae,{model:n});case T.Us.resample:return e.createElement(We,{model:n});case T.Us.classic:return e.createElement(Ie,{model:n});case T.Us.threshold:return e.createElement(we,{model:n});default:return e.createElement(e.Fragment,null,"Expression not supported: ",n.type)}}return e.createElement(le,{refId:t,headerItems:[(0,M.startCase)(n.type)],isAlertCondition:i},o(),l&&e.createElement(pe.bw,{series:l.series,isAlertCondition:i}))}function le({refId:t,headerItems:n=[],children:l,isAlertCondition:i,className:o}){const c=(0,E.wW)(be);return e.createElement("div",{className:(0,r.cx)(c.container,o)},e.createElement("header",{className:c.header},e.createElement("span",{className:c.refId},t),n.map((g,u)=>e.createElement("span",{key:u,className:c.textBlock},g)),i&&e.createElement("div",{className:c.conditionIndicator},e.createElement(F.C,{color:"green",icon:"check",text:"Alert condition"}))),l)}const be=t=>({container:r.css`
    flex: 1 0 25%;
    border: 1px solid ${t.colors.border.strong};
    max-width: 100%;
  `,header:r.css`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
    padding: ${t.spacing(1)};
    background-color: ${t.colors.background.secondary};
  `,textBlock:r.css`
    border: 1px solid ${t.colors.border.weak};
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.primary};
  `,refId:r.css`
    color: ${t.colors.text.link};
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `,conditionIndicator:r.css`
    margin-left: auto;
  `});function Ie({model:t}){const n=(0,E.wW)(Se),l=(0,M.keyBy)(H.Z.reducerTypes,c=>c.value),i=(0,M.keyBy)(H.Z.evalOperators,c=>c.value),o=(0,M.keyBy)(H.Z.evalFunctions,c=>c.value);return e.createElement("div",{className:n.container},t.conditions?.map(({query:c,operator:g,reducer:u,evaluator:s},v)=>{const d=ce(s);return e.createElement(e.Fragment,{key:v},e.createElement("div",{className:n.blue},v===0?"WHEN":!!g?.type&&i[g?.type]?.text),e.createElement("div",{className:n.bold},u?.type&&l[u.type]?.text),e.createElement("div",{className:n.blue},"OF"),e.createElement("div",{className:n.bold},c.params[0]),e.createElement("div",{className:n.blue},o[s.type].text),e.createElement("div",{className:n.bold},d?`(${s.params[0]}; ${s.params[1]})`:s.params[0]))}))}const Se=t=>({container:r.css`
    padding: ${t.spacing(1)};
    display: grid;
    grid-template-columns: max-content max-content max-content max-content max-content max-content;
    gap: ${t.spacing(0,1)};
  `,...Y(t)});function Ae({model:t}){const n=(0,E.wW)(Be),{reducer:l,expression:i,settings:o}=t,c=T.SQ.find(s=>s.value===l),g=o?.mode??T.kN.Strict,u=T.YM.find(s=>s.value===g);return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Function"),e.createElement("div",{className:n.value},c?.label),e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},i),e.createElement("div",{className:n.label},"Mode"),e.createElement("div",{className:n.value},u?.label))}const Be=t=>({container:r.css`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > :nth-child(6) {
      grid-column: span 3;
    }
  `,...Y(t)});function We({model:t}){const n=(0,E.wW)(Ue),{expression:l,window:i,downsampler:o,upsampler:c}=t,g=T.Fr.find(s=>s.value===o),u=T.r8.find(s=>s.value===c);return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},l),e.createElement("div",{className:n.label},"Resample to"),e.createElement("div",{className:n.value},i),e.createElement("div",{className:n.label},"Downsample"),e.createElement("div",{className:n.value},g?.label),e.createElement("div",{className:n.label},"Upsample"),e.createElement("div",{className:n.value},u?.label))}const Ue=t=>({container:r.css`
    padding: ${t.spacing(1)};
    display: grid;
    gap: ${t.spacing(1)};
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `,...Y(t)});function we({model:t}){const n=(0,E.wW)(oe),{expression:l,conditions:i}=t,o=i&&i[0]?.evaluator,c=T.Mi.find(u=>u.value===o?.type),g=o?ce(o):!1;return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},l),o&&e.createElement(e.Fragment,null,e.createElement("div",{className:n.blue},c?.label),e.createElement("div",{className:n.bold},g?`(${o.params[0]}; ${o.params[1]})`:o.params[0])))}const oe=t=>{const{blue:n,bold:l,...i}=Y(t);return{...i,container:r.css`
      padding: ${t.spacing(1)};
      display: flex;
      gap: ${t.spacing(1)};
    `,blue:r.css`
      ${n};
      margin: auto 0;
    `,bold:r.css`
      ${l};
      margin: auto 0;
    `}};function Le({model:t}){const n=(0,E.wW)(oe),{expression:l}=t;return e.createElement("div",{className:n.container},e.createElement("div",{className:n.label},"Input"),e.createElement("div",{className:n.value},l))}const Y=t=>({blue:r.css`
    color: ${t.colors.text.link};
  `,bold:r.css`
    font-weight: ${t.typography.fontWeightBold};
  `,label:r.css`
    display: flex;
    align-items: center;
    padding: ${t.spacing(.5,1)};
    background-color: ${t.colors.background.secondary};
    font-size: ${t.typography.bodySmall.fontSize};
    line-height: ${t.typography.bodySmall.lineHeight};
    font-weight: ${t.typography.fontWeightBold};
  `,value:r.css`
    padding: ${t.spacing(.5,1)};
    border: 1px solid ${t.colors.border.weak};
  `});function ce(t){return t.type===H.$.IsWithinRange||t.type===H.$.IsOutsideRange}var Ve=a(52694),X=a(80498),ie=a(40106),Z=a(28104),Qe=a(49279),je=a(68854),Fe=a(24990),ze=a(8674);const Ke=({group:t})=>{const n=t.source_tenants??[];return e.createElement(X.C,{label:"Tenant sources"},e.createElement(e.Fragment,null,n.map(l=>e.createElement("div",{key:l},l))))};var Ze=a(78443),He=a(80399),Ge=a(48208),Je=a(34111),Ye=a(76277),Xe=a(81001),ne=a(45849),G=a(79662);function ue(t){if(!t)return[];const{namespace:n,rulerRule:l}=t,{rulesSource:i}=n;if((0,ne.HY)(i)&&(0,G.Pc)(l))return l.grafana_alert.data;if((0,ne.jq)(i)){const o=qe(i,t);return[ke(o,i.uid)]}return[]}function ke(t,n){return{refId:t.refId,datasourceUid:n,queryType:"",model:t,relativeTimeRange:{from:360,to:0}}}function qe(t,n){const l="A";switch(t.type){case"prometheus":return{refId:l,expr:n.query};case"loki":return{refId:l,expr:n.query};default:throw new Error(`Query for datasource type ${t.type} is currently not supported by cloud alert rules.`)}}var _e=a(60048);const de="Could not find data source for rule",me="Could not view rule",J="View rule";function ge({match:t}){const n=(0,E.wW)(tt),[l,i]=(0,L.Z)(!1),{id:o}=t.params,c=_e.OA(o,!0),{loading:g,error:u,result:s}=(0,Ye.H)(c,c?.ruleSourceName),v=(0,e.useMemo)(()=>new Xe.v,[]),d=(0,V.Z)(v.get()),P=(0,e.useMemo)(()=>ue(s),[s]),[y,W]=(0,e.useState)({}),{allDataSourcesAvailable:U}=(0,Je.S)(P),k=(0,e.useCallback)(()=>{if(P.length>0&&U){const f=P.map(R=>({...R,relativeTimeRange:y[R.refId]??R.relativeTimeRange}));v.run(f)}},[P,y,v,U]);(0,e.useEffect)(()=>{const f=ue(s),R=Object.fromEntries(f.map(_=>[_.refId,_.relativeTimeRange??{from:0,to:0}]));W(R)},[s]),(0,e.useEffect)(()=>{U&&l&&k()},[k,U,l]),(0,e.useEffect)(()=>()=>v.destroy(),[v]);const q=(0,e.useCallback)((f,R)=>{const _=(0,D.ZP)(y,st=>{st[f]=R});W(_)},[y,W]);if(!c?.ruleSourceName)return e.createElement(Z.$,{title:J},e.createElement(I.b,{title:me},e.createElement("details",{className:n.errorMessage},de)));const N=(0,ne.o_)(c.ruleSourceName);if(g)return e.createElement(Z.$,{title:J},e.createElement(x.u,{text:"Loading rule..."}));if(u||!N)return e.createElement(Z.$,{title:J},e.createElement(I.b,{title:me},e.createElement("details",{className:n.errorMessage},u?.message??de,e.createElement("br",null),!!u?.stack&&u.stack)));if(!s)return e.createElement(Z.$,{title:J},e.createElement("span",null,"Rule could not be found."));const j=Object.entries(s.annotations).filter(([f,R])=>!!R.trim()),z=(0,G.Jq)(s.group),at=(0,G.Pc)(s.rulerRule)&&Boolean(s.rulerRule.grafana_alert.provenance);return e.createElement(Z.$,{wrapInContent:!1,title:J},z&&e.createElement(I.b,{severity:"info",title:"This rule is part of a federated rule group."},e.createElement(h.wc,null,"Federated rule groups are currently an experimental feature.",e.createElement(B.zx,{fill:"text",icon:"book"},e.createElement("a",{href:"https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation"},"Read documentation")))),at&&e.createElement(ie.Xq,{resource:ie.Uv.AlertRule}),e.createElement(Z.l,null,e.createElement("div",null,e.createElement("h4",null,e.createElement(K.J,{name:"bell",size:"lg"})," ",s.name),e.createElement(Ge.p,{rule:s,isCreating:!1,isDeleting:!1}),e.createElement(Qe.f,{rule:s,rulesSource:N,isViewMode:!0})),e.createElement("div",{className:n.details},e.createElement("div",{className:n.leftSide},s.promRule&&e.createElement(X.C,{label:"Health",horizontal:!0},e.createElement(He.V,{rule:s.promRule})),!!s.labels&&!!Object.keys(s.labels).length&&e.createElement(X.C,{label:"Labels",horizontal:!0},e.createElement(Ve.s,{labels:s.labels})),e.createElement(ze.C,{rulesSource:N,rule:s,annotations:j}),e.createElement(je.J,{annotations:j})),e.createElement("div",{className:n.rightSide},e.createElement(Fe.C,{rule:s,rulesSource:N}),z&&e.createElement(Ke,{group:s.group}),e.createElement(X.C,{label:"Namespace / Group"},`${s.namespace.name} / ${s.group.name}`))),e.createElement("div",null,e.createElement(Ze.M,{rule:s,pagination:{itemsPerPage:S.gN}}))),e.createElement(m.U,{label:"Query & Results",isOpen:l,onToggle:i,loading:d&&et(d),collapsible:!0,className:n.collapse},(0,G.Pc)(s.rulerRule)&&!z&&e.createElement(Me,{condition:s.rulerRule.grafana_alert.condition,queries:P,evalDataByQuery:d,evalTimeRanges:y,onTimeRangeChange:q}),!(0,G.Pc)(s.rulerRule)&&!z&&d&&Object.keys(d).length>0&&e.createElement("div",{className:n.queries},P.map(f=>e.createElement(re,{key:f.refId,refId:f.refId,model:f.model,dataSource:Object.values(b.v.datasources).find(R=>R.uid===f.datasourceUid),queryData:d[f.refId],relativeTimeRange:f.relativeTimeRange,evalTimeRange:y[f.refId],onEvalTimeRangeChange:R=>q(f.refId,R),isAlertCondition:!1}))),!z&&!U&&e.createElement(I.b,{title:"Query not available",severity:"warning",className:n.queryWarning},"Cannot display the query preview. Some of the data sources used in the queries are not available.")))}function et(t){return!!Object.values(t).find(n=>n.state===Q.Gu.Loading)}const tt=t=>({errorMessage:r.css`
      white-space: pre-wrap;
    `,queries:r.css`
      height: 100%;
      width: 100%;
    `,collapse:r.css`
      margin-top: ${t.spacing(2)};
      border-color: ${t.colors.border.weak};
      border-radius: ${t.shape.borderRadius()};
    `,queriesTitle:r.css`
      padding: ${t.spacing(2,.5)};
      font-size: ${t.typography.h5.fontSize};
      font-weight: ${t.typography.fontWeightBold};
      font-family: ${t.typography.h5.fontFamily};
    `,query:r.css`
      border-bottom: 1px solid ${t.colors.border.medium};
      padding: ${t.spacing(2)};
    `,queryWarning:r.css`
      margin: ${t.spacing(4,0)};
    `,details:r.css`
      display: flex;
      flex-direction: row;
    `,leftSide:r.css`
      flex: 1;
    `,rightSide:r.css`
      padding-left: 90px;
      width: 300px;
    `}),nt=(0,p.Pf)(ge,{style:"page"})},51981:(ee,w,a)=>{a.d(w,{q:()=>e});var r=a(68404),D=a(82002);const e=({actions:L,children:V,fallback:Q=!0})=>L.some(b=>D.Vt.hasAccess(b,Q))?r.createElement(r.Fragment,null,V):null},28104:(ee,w,a)=>{a.d(w,{$:()=>Q,l:()=>b});var r=a(52423),D=a(68404),e=a(29516),L=a(79396);const V={icon:"bell",id:"alert-rule-view",breadcrumbs:[{title:"Alert rules",url:"alerting/list"}]};function Q(x){const{wrapInContent:h=!0,children:B,title:K}=x,m=(0,e.wW)(E);return D.createElement(L.T,{pageNav:{...V,text:K},navId:"alert-list"},D.createElement(L.T.Contents,null,D.createElement("div",{className:m.content},h?D.createElement(b,{...x}):B)))}function b({children:x,padding:h=2}){const B=(0,e.wW)(I(h));return D.createElement("div",{className:B.wrapper},x)}const E=x=>({content:r.css`
      max-width: ${x.breakpoints.values.xxl}px;
    `}),I=x=>h=>({wrapper:r.css`
      background: ${h.colors.background.primary};
      border: 1px solid ${h.colors.border.weak};
      border-radius: ${h.shape.borderRadius()};
      padding: ${h.spacing(x)};
    `})},76277:(ee,w,a)=>{a.d(w,{H:()=>x,X:()=>h});var r=a(68404),D=a(22350),e=a(81168),L=a(72004),V=a(46818),Q=a(60048),b=a(79662),E=a(61627),I=a(79370);function x(m,p){const S=B(p),C=(0,E.Zo)(p),M=(0,r.useMemo)(()=>{if(!(!m||!p||C.length===0))for(const $ of C)for(const F of $.groups)for(const A of F.rules){const O=Q.Yd(p,A);if(Q.Dg(O,m))return A}},[m,p,C]);return{...S,result:M}}function h(m,p){const S=B(p),C=(0,E.Zo)(p),M=(0,r.useMemo)(()=>{if(!m||!p||C.length===0)return[];const $=[];for(const F of C)for(const A of F.groups)for(const O of A.rules)O.name===m&&$.push(O);return $},[m,p,C]);return{...S,result:M}}function B(m){const p=(0,e.useDispatch)(),S=(0,I._)(A=>A.promRules),C=K(m,S),M=(0,I._)(A=>A.rulerRules),$=K(m,M),{loading:F}=(0,D.Z)(async()=>{m&&await p((0,L.dn)({rulesSourceName:m}))},[p,m]);return{loading:F,error:C.error??(0,b.m$)($)?void 0:$.error,dispatched:C.dispatched&&$.dispatched}}function K(m,p){if(!m)return V.oq;const S=p[m];return S||V.oq}}}]);

//# sourceMappingURL=AlertingRule.06ace50d0137a7fbdc64.js.map