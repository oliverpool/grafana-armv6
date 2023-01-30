"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4259],{40106:(_,y,e)=>{e.d(y,{C0:()=>f,Uv:()=>m,Xq:()=>d});var o=e(68404),t=e(2323),r=e(68884),m=(i=>(i.ContactPoint="contact point",i.Template="template",i.MuteTiming="mute timing",i.AlertRule="alert rule",i.RootNotificationPolicy="root notification policy",i))(m||{});const d=({resource:i})=>o.createElement(t.b,{title:`This ${i} cannot be edited through the UI`,severity:"info"},"This ",i," has been provisioned, that means it was created by config. Please contact your server admin to update this ",i,"."),f=()=>o.createElement(r.C,{text:"Provisioned",color:"purple"})},30151:(_,y,e)=>{e.d(y,{F:()=>T});var o=e(52423),t=e(82897),r=e.n(t),m=e(68404),d=e(26418),f=e(184),i=e(29516),l=e(81697),v=e(38835),p=e(48756),O=e(25474),D=e(41904);const T=({className:A,onFilterChange:g,defaultQueryString:n})=>{const a=(0,i.wW)(I),c=(0,m.useMemo)(()=>(0,t.debounce)(P=>{(0,f.PN)(D.z7.filterByLabel);const R=P.target;g(R.value)},600),[g]);(0,m.useEffect)(()=>c.cancel(),[c]);const u=m.createElement(l.J,{name:"search"});return m.createElement("div",{className:A},m.createElement(v._,null,m.createElement(d.Stack,{gap:.5},m.createElement("span",null,"Search by label"),m.createElement(p.u,{content:m.createElement("div",null,"Filter alerts using label querying, ex:",m.createElement("pre",null,'{severity="critical", instance=~"cluster-us-.+"}'))},m.createElement(l.J,{className:a.icon,name:"info-circle",size:"sm"})))),m.createElement(O.I,{placeholder:"Search",defaultValue:n,onChange:c,"data-testid":"search-query-input",prefix:u,className:a.inputWidth}))},I=A=>({icon:o.css`
    margin-right: ${A.spacing(.5)};
  `,inputWidth:o.css`
    width: 340px;
    flex-grow: 0;
  `})},49279:(_,y,e)=>{e.d(y,{f:()=>Ce});var o=e(52423),t=e(68404),r=e(70356),m=e(8928),d=e(27677),f=e(93003),i=e(29516),l=e(90723),v=e(38120),p=e(90701),O=e(81202),D=e(60499),T=e(82002),I=e(81168),A=e(46063),g=e(44391),n=e(6694),a=e(82897),c=e(38849),u=e(26418),P=e(90090),R=e(2323),x=e(74955),M=e(38835),C=e(48756),b=e(81697),L=e(25474),W=e(72004),B=e(79370);function F(s){const E=(0,I.useDispatch)(),h=(0,B._)(S=>S.managedAlertStateHistory);return(0,t.useEffect)(()=>{E((0,W.Ms)(s))},[E,s]),h}var K=e(24782),te=e(53731),Y=e(45608);const X=({alertId:s})=>{const[E,h]=(0,t.useState)(""),S=(0,t.useCallback)(H=>{h(H.currentTarget.value)},[]),{loading:$,error:N,result:V=[]}=F(s),le=(0,i.wW)(ae);if($&&!N)return t.createElement(P.u,{text:"Loading history..."});if(N&&!$)return t.createElement(R.b,{title:"Failed to fetch alert state history"},N.message);const de=[{id:"state",label:"State",size:"max-content",renderCell:k},{id:"value",label:"",size:"auto",renderCell:w},{id:"timestamp",label:"Time",size:"max-content",renderCell:re}],Ee=Object.entries(U(V)).sort().filter(([H])=>ne(H,E)).map(([H,oe])=>{const ge=oe.map(z=>({id:z.id,data:z}));return t.createElement("div",{key:H},t.createElement("header",{className:le.tableGroupKey},t.createElement("code",null,H)),t.createElement(te.t,{cols:de,items:ge}))});return t.createElement("div",null,t.createElement("nav",null,t.createElement(x.g,{label:t.createElement(M._,null,t.createElement(u.Stack,{gap:.5},t.createElement("span",null,"Filter group"),t.createElement(C.u,{content:t.createElement("div",null,"Filter each state history group either by exact match or a regular expression, ex:"," ",t.createElement("code",null,"region=eu-west-1")," or ",t.createElement("code",null,"/region=us-.+/"))},t.createElement(b.J,{name:"info-circle",size:"sm"}))))},t.createElement(L.I,{prefix:t.createElement(b.J,{name:"search"}),onChange:S,placeholder:"Search"}))),Ee)};function U(s){const E=s.map(h=>{const S=/{.*?}/g,$=h.text.match(S)?.at(-1)??"";return{id:String(h.id),state:h.newState,text:h.text.replace($,""),data:h.data,timestamp:h.updated,stringifiedLabels:$}});return(0,a.groupBy)(E,h=>h.stringifiedLabels)}function ne(s,E){if(E==="")return!0;if(!(E.startsWith("/")&&E.endsWith("/")))return s.includes(E);try{return new RegExp(E.slice(1,-1)).test(s)}catch{return!1}}function w(s){const E=s.data.data?.evalMatches??[];return t.createElement(t.Fragment,null,s.data.text,t.createElement(ie,null,E.map(h=>t.createElement(K.i,{key:h.metric,labelKey:h.metric,value:String(h.value)}))))}function k(s){return t.createElement(Y.l,{state:s.data.state})}function re(s){return t.createElement("div",{className:ce},s.data.timestamp&&t.createElement("span",null,(0,c.dq)(s.data.timestamp)))}const ie=({children:s})=>{const{wrapper:E}=(0,i.wW)(ae);return t.createElement("div",{className:E},s)},ce=o.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,ae=s=>({wrapper:o.css`
    & > * {
      margin-right: ${s.spacing(1)};
    }
  `,tableGroupKey:o.css`
    margin-top: ${s.spacing(2)};
    margin-bottom: ${s.spacing(2)};
  `});function me(s){const[E,h]=(0,t.useState)(!1);return{StateHistoryModal:(0,t.useMemo)(()=>t.createElement(n.u,{isOpen:E,onDismiss:()=>h(!1),closeOnBackdropClick:!0,closeOnEscape:!0,title:"State history"},t.createElement(X,{alertId:s})),[s,E]),showStateHistoryModal:()=>h(!0),hideStateHistoryModal:()=>h(!1)}}var q=e(20194),ee=e(37190),Z=e(45849),ye=e(10505),ue=e(60048),se=e(79662),xe=e(58509),Re=e(2390);const _e=({children:s,plugin:E,loadingComponent:h,notInstalledFallback:S})=>{const{loading:$,installed:N}=usePluginBridge(E);return $?h??null:N?React.createElement(React.Fragment,null,s):S??null};function Oe(s,E,h){const S=new URLSearchParams(h).toString();return`/a/${s}${E}`+(S?"?"+S:"")}const Te=({title:s="",severity:E="",url:h=""})=>{const S=Oe(Re.W.Incident,"/incidents/declare",{title:s,severity:E,url:h}),{loading:$,installed:N,settings:V}=(0,xe.n)(Re.W.Incident);return t.createElement(t.Fragment,null,$===!0&&t.createElement(l.zx,{icon:"fire",size:"sm",type:"button",disabled:!0},"Declare Incident"),N===!1&&t.createElement(C.u,{content:"Grafana Incident is not installed or is not configured correctly"},t.createElement(l.zx,{icon:"fire",size:"sm",type:"button",disabled:!0},"Declare Incident")),V&&t.createElement(l.Qj,{icon:"fire",size:"sm",type:"button",href:S},"Declare Incident"))},Ce=({rule:s,rulesSource:E,isViewMode:h})=>{const S=(0,i.wW)(Ie),{namespace:$,group:N,rulerRule:V}=s,le=(0,se.Pc)(s.rulerRule)?s.rulerRule.grafana_alert.id??"":"",{StateHistoryModal:de,showStateHistoryModal:Ee}=me(le),H=(0,I.useDispatch)(),oe=(0,r.TH)(),ge=(0,D.iG)(),[z,fe]=(0,t.useState)(),Me=(0,Z.HY)(E)?E:(0,q.Xy)(E.jsonData.alertmanagerUid)?.name,Ae=T.Vt.hasPermission(I.AccessControlAction.DataSourcesExplore),j=[],J=[],Le=()=>{if(z&&z.rulerRule){const G=ue.Zk((0,Z.EG)(z.namespace.rulesSource),z.namespace.name,z.group.name,z.rulerRule);H((0,W.hS)(G,{navigateTo:h?"/alerting/list":void 0})),fe(void 0)}},De=()=>{if((0,Z.jq)(E)){const{appUrl:G,appSubUrl:Q}=f.v,pe=Q!==""?`${G}${Q}/`:f.v.appUrl,he=`${encodeURIComponent(E.name)}/${encodeURIComponent(s.name)}`;return`${pe}alerting/${he}/find`}return window.location.href.split("?")[0]},ve=(0,se.Jq)(N),Ue=(0,Z.EG)(E),Pe=(0,se.Pc)(s.rulerRule)&&Boolean(s.rulerRule.grafana_alert.provenance),be=(0,se.x_)(s.promRule)&&s.promRule.state===A.x_.Firing,{isEditable:Be,isRemovable:Se}=(0,g.M)(Ue,V),We=oe.pathname+oe.search;if((0,Z.jq)(E)&&Ae&&!ve&&j.push(t.createElement(l.Qj,{size:"sm",key:"explore",variant:"primary",icon:"chart-line",target:"__blank",href:(0,ye.mH)(E.name,s.query)},"See graph")),s.annotations[ee.q6.runbookURL]&&j.push(t.createElement(l.Qj,{size:"sm",key:"runbook",variant:"primary",icon:"book",target:"__blank",href:m.QX.sanitizeUrl(s.annotations[ee.q6.runbookURL])},"View runbook")),s.annotations[ee.q6.dashboardUID]){const G=s.annotations[ee.q6.dashboardUID];if(G){j.push(t.createElement(l.Qj,{size:"sm",key:"dashboard",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(G)}`},"Go to dashboard"));const Q=s.annotations[ee.q6.panelID];Q&&j.push(t.createElement(l.Qj,{size:"sm",key:"panel",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(G)}?viewPanel=${encodeURIComponent(Q)}`},"Go to panel"))}}if(Me&&T.Vt.hasAccess(I.AccessControlAction.AlertingInstanceCreate,T.Vt.isEditor)&&j.push(t.createElement(l.Qj,{size:"sm",key:"silence",icon:"bell-slash",target:"__blank",href:(0,ye.Vv)(Me,s)},"Silence")),le&&j.push(t.createElement(t.Fragment,{key:"history"},t.createElement(l.zx,{size:"sm",icon:"history",onClick:()=>Ee()},"Show state history"),de)),be&&j.push(t.createElement(t.Fragment,{key:"declare-incident"},t.createElement(Te,{title:s.name,url:De()}))),h){if(Be&&V&&!ve&&!Pe){const G=(0,Z.EG)(E),Q=ue.Zk(G,$.name,N.name,V),pe=d.Cj.renderUrl(`${f.v.appSubUrl}/alerting/${encodeURIComponent(ue.$V(Q))}/edit`,{returnTo:We});J.push(t.createElement(v.m,{key:"copy",icon:"copy",onClipboardError:he=>{ge.error("Error while copying URL",he)},size:"sm",getText:De},"Copy link to rule")),J.push(t.createElement(l.Qj,{size:"sm",key:"edit",variant:"secondary",icon:"pen",href:pe},"Edit"))}Se&&V&&!ve&&!Pe&&J.push(t.createElement(l.zx,{size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>fe(s)},"Delete"))}return j.length||J.length?t.createElement(t.Fragment,null,t.createElement("div",{className:S.wrapper},t.createElement(p.Lh,{width:"auto"},j.length?j:t.createElement("div",null)),t.createElement(p.Lh,{width:"auto"},J.length?J:t.createElement("div",null))),!!z&&t.createElement(O.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:Le,onDismiss:()=>fe(void 0)})):null},Ie=s=>({wrapper:o.css`
    padding: ${s.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${s.colors.border.medium};
  `})},68854:(_,y,e)=>{e.d(y,{J:()=>d});var o=e(52423),t=e(68404),r=e(29516),m=e(78543);function d(i){const{annotations:l}=i,v=(0,r.wW)(f);return l.length===0?null:t.createElement("div",{className:v.annotations},l.map(([p,O])=>t.createElement(m.a,{key:p,annotationKey:p,value:O})))}const f=()=>({annotations:o.css`
    margin-top: 46px;
  `})},24990:(_,y,e)=>{e.d(y,{C:()=>v});var o=e(52423),t=e(68404),r=e(77213),m=e(29516),d=e(47471),f=e(45849),i=e(79662),l=e(80498);function v(O){const{rulesSource:D,rule:T}=O,I=(0,m.wW)(p),A=(0,t.useMemo)(()=>{if((0,f.jq)(D))return[{name:D.name,icon:D.meta.info.logos.small}];if((0,i.Pc)(T.rulerRule)){const{data:g}=T.rulerRule.grafana_alert,n=g.reduce((a,c)=>{const u=(0,r.F)().getInstanceSettings(c.datasourceUid);return!u||u.uid===d.Yq||(a[u.name]={name:u.name,icon:u.meta.info.logos.small}),a},{});return Object.values(n)}return[]},[T,D]);return A.length===0?null:t.createElement(l.C,{label:"Data source"},A.map(({name:g,icon:n},a)=>t.createElement("div",{key:g},n&&t.createElement(t.Fragment,null,t.createElement("img",{alt:`${g} datasource logo`,className:I.dataSourceIcon,src:n})," "),g)))}function p(O){const D=O.spacing(2);return{dataSourceIcon:o.css`
      width: ${D};
      height: ${D};
    `}}},8674:(_,y,e)=>{e.d(y,{C:()=>g});var o=e(52423),t=e(68404),r=e(45849),m=e(80498),d=e(57706),f=e(56747),i=e(1357),l=e(5745),v=e(29516),p=e(19370),O=e(21899),D=e(94884);const T=({language:a,expr:c})=>{const u=(0,t.useMemo)(()=>[(0,i.Z)({onlyIn:R=>R.type==="code_block",getSyntax:()=>a},{...d.languages,[a]:a==="logql"?p.ZP:O.ZP})],[a]),P=(0,t.useMemo)(()=>(0,l.l1)(c),[c]);return t.createElement(f.ML,{"data-testid":"expression-editor",plugins:u,value:P})},I=({expression:a,rulesSource:c})=>{const u=(0,v.wW)(A);return t.createElement(D.t,{className:(0,o.cx)(u.well,"slate-query-field")},(0,r.jq)(c)?t.createElement(T,{expr:a,language:c.type===r.ye.Loki?"logql":"promql"}):a)},A=a=>({well:o.css`
    font-family: ${a.typography.fontFamilyMonospace};
  `});function g(a){const{annotations:c,rulesSource:u,rule:P}=a,R=n();return(0,r.jq)(u)?t.createElement(m.C,{label:"Expression",horizontal:!0,className:(0,o.cx)({[R.exprRow]:!!c.length})},t.createElement(I,{expression:P.query,rulesSource:u})):null}const n=()=>({exprRow:o.css`
    margin-bottom: 46px;
  `})},78443:(_,y,e)=>{e.d(y,{M:()=>P});var o=e(52423),t=e(82897),r=e(68404),m=e(29516),d=e(90723),f=e(30151),i=e(3349),l=e(38835),v=e(318),p=e(46063);const O=({className:M,onStateFilterChange:C,stateFilter:b,filterType:L,itemPerStateStats:W})=>{const B=(0,m.wW)(D),F=U=>function(){return W&&W[U]?r.createElement(i.V,{name:W[U].toFixed(0),colorIndex:9,className:B.tag}):null},K=Object.values(p.bj).map(U=>({label:U,value:U,component:F(U)})),Y=[p.x_.Firing,p.x_.Pending].map(U=>({label:(0,t.capitalize)(U),value:U,component:F(U)})),X=L==="grafana"?K:Y;return r.createElement("div",{className:M,"data-testid":"alert-instance-state-filter"},r.createElement(l._,null,"State"),r.createElement(v.S,{options:X,value:b,onChange:C,onClick:U=>{U===b&&C(void 0)}}))};function D(M){return{tag:o.css`
      font-size: 11px;
      font-weight: normal;
      padding: ${M.spacing(.25,.5)};
      vertical-align: middle;
      margin-left: ${M.spacing(.5)};
    `}}var T=e(20194),I=e(10505),A=e(40286),g=e(45849),n=e(79662),a=e(80498),c=e(48563);function u(M){const C=(0,m.wW)(x),{ruleViewPageLink:b,stats:L}=M;return r.createElement("div",{className:C.footerRow},r.createElement("div",null,"Showing ",L.visibleItemsCount," out of ",L.totalItemsCount," instances"),b&&r.createElement(d.Qj,{href:b,size:"sm",variant:"secondary"},"Show all ",L.totalItemsCount," alert instances"))}function P(M){const{rule:{promRule:C,namespace:b},itemsDisplayLimit:L=Number.POSITIVE_INFINITY,pagination:W}=M,[B,F]=(0,r.useState)(),[K,te]=(0,r.useState)(),[Y]=(0,r.useState)(Math.floor(Math.random()*100)),X=`queryString-${Y}`,U=(0,m.wW)(x),ne=(0,g.HY)(b.rulesSource)?g.GC:"prometheus",w=(0,r.useMemo)(()=>(0,n.x_)(C)&&C.alerts?.length?R(B,K,(0,I.Zl)(A.As.Importance,C.alerts)):[],[C,K,B]);if(!(0,n.x_)(C))return null;const k=w.slice(0,L),re=(0,t.countBy)(C.alerts,q=>(0,p.ED)(q.state)),ie=w.length-k.length,ce={totalItemsCount:w.length,visibleItemsCount:k.length},ae=(0,I.V2)(b.rulesSource,M.rule,location.pathname+location.search),me=ie?r.createElement(u,{stats:ce,ruleViewPageLink:ae}):void 0;return r.createElement(a.C,{label:"Matching instances",horizontal:!0},r.createElement("div",{className:(0,o.cx)(U.flexRow,U.spaceBetween)},r.createElement("div",{className:U.flexRow},r.createElement(f.F,{className:U.rowChild,key:X,defaultQueryString:B,onFilterChange:q=>F(q)}),r.createElement(O,{className:U.rowChild,filterType:ne,stateFilter:K,onStateFilterChange:te,itemPerStateStats:re}))),r.createElement(c.o,{instances:k,pagination:W,footerRow:me}))}function R(M,C,b){let L=[...b];if(M){const W=(0,T.Zh)(M||"");L=L.filter(({labels:B})=>(0,T.eD)(B,W))}return C&&(L=L.filter(W=>(0,p.ED)(W.state)===C)),L}const x=M=>({flexRow:o.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${M.spacing(1)};
    `,spaceBetween:o.css`
      justify-content: space-between;
    `,rowChild:o.css`
      margin-right: ${M.spacing(1)};
    `,footerRow:o.css`
      display: flex;
      flex-direction: column;
      gap: ${M.spacing(1)};
      justify-content: space-between;
      align-items: center;
      width: 100%;
    `})},80399:(_,y,e)=>{e.d(y,{V:()=>f});var o=e(52423),t=e(68404),r=e(29516),m=e(48756),d=e(81697);const f=({rule:l})=>{const v=(0,r.wW)(i);return l.health==="err"||l.health==="error"?t.createElement(m.u,{theme:"error",content:l.lastError||"No error message provided."},t.createElement("div",{className:v.warn},t.createElement(d.J,{name:"exclamation-triangle"}),t.createElement("span",null,"error"))):t.createElement(t.Fragment,null,l.health)},i=l=>({warn:o.css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: ${l.spacing(1)};

    color: ${l.colors.warning.text};
  `})},48208:(_,y,e)=>{e.d(y,{p:()=>p});var o=e(52423),t=e(68404),r=e(37556),m=e(29516),d=e(90701),f=e(40008),i=e(46063),l=e(79662),v=e(45608);const p=({rule:D,isDeleting:T,isCreating:I})=>{const A=(0,m.wW)(O),{promRule:g}=D,n=(0,t.useMemo)(()=>{if(g&&(0,l.x_)(g)&&g.alerts?.length&&g.state!==i.x_.Inactive){const a=(0,l.ub)(g);if(a)return t.createElement("span",{title:String(a),className:A.for},"for"," ",(0,r.vT)({start:a,end:new Date},!1))}return null},[g,A]);return T?t.createElement(d.Lh,{align:"flex-start"},t.createElement(f.$,null),"deleting"):I?t.createElement(d.Lh,{align:"flex-start"}," ",t.createElement(f.$,null),"creating"):g&&(0,l.x_)(g)?t.createElement(d.Lh,{align:"flex-start"},t.createElement(v.l,{state:g.state}),n):g&&(0,l.OP)(g)?t.createElement(t.Fragment,null,"Recording rule"):t.createElement(t.Fragment,null,"n/a")},O=D=>({for:o.css`
    font-size: ${D.typography.bodySmall.fontSize};
    color: ${D.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},61627:(_,y,e)=>{e.d(y,{Kd:()=>l,Zo:()=>i});var o=e(82897),t=e.n(o),r=e(68404),m=e(45849),d=e(79662),f=e(79370);function i(n){const a=(0,f._)(R=>R.promRules),c=(0,f._)(R=>R.rulerRules),u=(0,r.useRef)({}),P=(0,r.useMemo)(()=>{if(n){const R=(0,m.o_)(n);if(!R)throw new Error(`Unknown rules source: ${n}`);return[R]}return(0,m.h_)()},[n]);return(0,r.useMemo)(()=>P.map(R=>{const x=(0,m.jq)(R)?R.name:R,M=a[x]?.result,C=c[x]?.result,b=u.current[x];if(b&&b.promRules===M&&b.rulerRules===C)return b.result;const L={};Object.entries(C||{}).forEach(([B,F])=>{const K={rulesSource:R,name:B,groups:[]};L[B]=K,p(K,F)}),M?.forEach(({name:B,groups:F})=>{const K=L[B]=L[B]||{rulesSource:R,name:B,groups:[]};O(K,F)});const W=Object.values(L);return u.current[x]={promRules:M,rulerRules:C,result:W},W}).flat(),[a,c,P])}function l(n){return n.map(a=>{const c={...a,groups:[]};return c.groups.push({name:"default",rules:v(a.groups.flatMap(u=>u.rules))}),c})}function v(n){return n.sort((a,c)=>a.name.localeCompare(c.name))}function p(n,a=[]){n.groups=a.map(c=>{const u={name:c.name,interval:c.interval,source_tenants:c.source_tenants,rules:[]};return u.rules=c.rules.map(P=>T(P,n,u)),u})}function O(n,a){const c=new Map;n.groups.forEach(u=>c.set(u.name,u)),a.forEach(u=>{let P=c.get(u.name);P||(P={name:u.name,rules:[]},n.groups.push(P),c.set(u.name,P));const R=new Map;P.rules.forEach(x=>{const M=R.get(x.name);M?M.push(x):R.set(x.name,[x])}),(u.rules??[]).forEach(x=>{const M=I(x,R,n.rulesSource);M?M.promRule=x:P.rules.push(D(x,n,P))})})}function D(n,a,c){return{name:n.name,query:n.query,labels:n.labels||{},annotations:(0,d.x_)(n)?n.annotations||{}:{},promRule:n,namespace:a,group:c}}function T(n,a,c){return(0,d.cG)(n)?{name:n.alert,query:n.expr,labels:n.labels||{},annotations:n.annotations||{},rulerRule:n,namespace:a,group:c}:(0,d.yF)(n)?{name:n.record,query:n.expr,labels:n.labels||{},annotations:{},rulerRule:n,namespace:a,group:c}:{name:n.grafana_alert.title,query:"",labels:n.labels||{},annotations:n.annotations||{},rulerRule:n,namespace:a,group:c}}function I(n,a,c){const u=a.get(n.name);if(!u)return;if((0,m.HY)(c))return u[0];const P=u.find(x=>!x.promRule&&A(x,n,!0));if(P)return P;const R=u.find(x=>!x.promRule&&A(x,n,!1));if(R)return R}function A(n,a,c=!0){return n.name===a.name?(0,o.isEqual)([c?g(n.query):"",n.labels,n.annotations],[c?g(a.query):"",a.labels||{},(0,d.x_)(a)?a.annotations||{}:{}]):!1}function g(n){return n.length>1&&n[0]==="("&&n[n.length-1]===")"&&(n=n.slice(1,-1)),n=n.replace(/\s|\n/g,""),n.split("").sort().join("")}},55485:(_,y,e)=>{e.d(y,{W:()=>f});var o=e(68404),t=e(81168),r=e(72004),m=e(46818),d=e(79370);function f(i){const l=(0,t.useDispatch)(),v=(0,d._)(p=>p.folders);if((0,o.useEffect)(()=>{i&&l((0,r.sw)(i))},[l,i]),i){const p=v[i]||m.oq;return{folder:p.result,loading:p.loading}}return{loading:!1}}},44391:(_,y,e)=>{e.d(y,{M:()=>f});var o=e(82002),t=e(97953),r=e(79662),m=e(55485),d=e(79370);function f(i,l){const v=(0,d._)(n=>n.dataSources),p=l&&(0,r.Pc)(l)?l.grafana_alert.namespace_uid:void 0,O=(0,t.Bz)(i),{folder:D,loading:T}=(0,m.W)(p);if(!l)return{isEditable:!1,isRemovable:!1,loading:!1};if((0,r.Pc)(l)){if(!p)throw new Error(`Rule ${l.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);if(!D)return{isEditable:!1,isRemovable:!1,loading:T};const n=D.canSave,a=o.Vt.hasAccessInMetadata(O.update,D,n),c=o.Vt.hasAccessInMetadata(O.delete,D,n);return{isEditable:a,isRemovable:c,loading:T}}const I=Boolean(v[i]?.result?.rulerConfig),A=o.Vt.hasAccess(O.update,o.Vt.isEditor),g=o.Vt.hasAccess(O.delete,o.Vt.isEditor);return{isEditable:A&&I,isRemovable:g&&I,loading:v[i]?.loading}}},58509:(_,y,e)=>{e.d(y,{n:()=>r});var o=e(22350),t=e(13011);function r(m){const{loading:d,error:f,value:i}=(0,o.Z)(()=>(0,t.a)(m,{showErrorAlert:!1})),l=i&&!f&&!d,v=i?.enabled;return d&&!i?{loading:!0}:!l||!v?{loading:!1,installed:!1}:{loading:d,installed:!0,settings:i}}},2390:(_,y,e)=>{e.d(y,{W:()=>o});var o=(t=>(t.Incident="grafana-incident-app",t.OnCall="grafana-oncall-app",t.MachineLearning="grafana-ml-app",t))(o||{})},19370:(_,y,e)=>{e.d(y,{$5:()=>o,EH:()=>m,Rd:()=>r,ZP:()=>l,r8:()=>d,uR:()=>t,xY:()=>i});const o=[{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"}],t=[{label:"json",insertText:"json",documentation:"Extracting labels from the log line using json parser."},{label:"regexp",insertText:'regexp ""',documentation:"Extracting labels from the log line using regexp parser.",move:-1},{label:"logfmt",insertText:"logfmt",documentation:"Extracting labels from the log line using logfmt parser."},{label:"pattern",insertText:"pattern",documentation:"Extracting labels from the log line using pattern parser. Only available in Loki 2.3+."},{label:"unpack",insertText:"unpack",detail:"unpack identifier",documentation:'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.2+.'}],r=[{label:"unwrap",insertText:"unwrap",detail:"unwrap identifier",documentation:"Take labels and use the values as sample data for metric aggregations."},{label:"label_format",insertText:"label_format",documentation:"Use to rename, modify or add labels. For example, | label_format foo=bar ."},{label:"line_format",insertText:"line_format",documentation:'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" .'}],m=[{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average of all values in the specified interval."},{insertText:"bytes_over_time",label:"bytes_over_time",detail:"bytes_over_time(range-vector)",documentation:"Counts the amount of bytes used by each log stream for a given range"},{insertText:"bytes_rate",label:"bytes_rate",detail:"bytes_rate(range-vector)",documentation:"Calculates the number of bytes per second for each stream."},{insertText:"first_over_time",label:"first_over_time",detail:"first_over_time(range-vector)",documentation:"The first of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"last_over_time",label:"last_over_time",detail:"last_over_time(range-vector)",documentation:"The last of all values in the specified interval. Only available in Loki 2.3+."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum of all values in the specified interval."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum of all values in the specified interval."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The \u03C6-quantile (0 \u2264 \u03C6 \u2264 1) of the values in the specified interval."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the number of entries per second."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval."}],d=[...o,...m],f=[...d,...r,...t].map(v=>v.label),i={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((without|by)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},"context-pipe":{pattern:/\s\|[^=~]\s?\w*/i,inside:{"pipe-operator":{pattern:/\|/i,alias:"operator"},"pipe-operations":{pattern:new RegExp(`${[...t,...r].map(v=>v.label).join("|")}`,"i"),alias:"keyword"}}},function:new RegExp(`\\b(?:${d.map(v=>v.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=\])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],quote:{pattern:/"(?:\\.|[^\\"])*"/,alias:"string",greedy:!0},backticks:{pattern:/`(?:\\.|[^\\`])*`/,alias:"string",greedy:!0},number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:/\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,punctuation:/[{}(),.]/},l=i}}]);

//# sourceMappingURL=4259.707d5bffa9c6849f5035.js.map