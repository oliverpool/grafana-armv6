"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5048],{94762:(I,C,t)=>{t.d(C,{F:()=>v});var a=t(52423),e=t(68404),f=t(29516),y=t(53731);const v=({renderExpandedContent:d,...g})=>{const o=(0,f.wW)($);return e.createElement(y.t,{renderExpandedContent:d?(N,D,T)=>e.createElement(e.Fragment,null,D!==T.length-1&&e.createElement("div",{className:(0,a.cx)(o.contentGuideline,o.guideline)}),d(N,D,T)):void 0,renderPrefixHeader:()=>e.createElement("div",{className:o.relative},e.createElement("div",{className:(0,a.cx)(o.headerGuideline,o.guideline)})),renderPrefixCell:(N,D,T)=>e.createElement("div",{className:o.relative},e.createElement("div",{className:(0,a.cx)(o.topGuideline,o.guideline)}),D!==T.length-1&&e.createElement("div",{className:(0,a.cx)(o.bottomGuideline,o.guideline)})),...g})},$=d=>({relative:a.css`
    position: relative;
    height: 100%;
  `,guideline:a.css`
    left: -19px;
    border-left: 1px solid ${d.colors.border.medium};
    position: absolute;

    ${d.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:a.css`
    width: 18px;
    border-bottom: 1px solid ${d.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:a.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:a.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:a.css`
    top: -25px;
    bottom: 0;
  `})},29721:(I,C,t)=>{t.d(C,{V:()=>f});var a=t(68404),e=t(81697);const f=({namespace:y,group:v})=>v?a.createElement(a.Fragment,null,y," ",a.createElement(e.J,{name:"angle-right"})," ",v):a.createElement(a.Fragment,null,y)},25048:(I,C,t)=>{t.d(C,{i:()=>ye});var a=t(52423),e=t(68404),f=t(29516),y=t(84952),v=t(8055),$=t(37190),d=t(79662),g=t(53731),o=t(94762),N=t(40106),D=t(29721),T=t(46587),J=t(70356),Q=t(26418),W=t(93003),Y=t(57388),S=t(48756),P=t(90723),Z=t(38120),F=t(81202),X=t(60499),w=t(81168),k=t(44391),q=t(72004),U=t(45849),_=t(10505),L=t(60048),K=t(93411);const $e=n=>window.matchMedia(`(max-width: ${n}px)`).matches,ee=({rule:n,rulesSource:s})=>{const r=(0,w.useDispatch)(),u=(0,J.TH)(),h=(0,X.iG)(),l=(0,f.wW)(ne),{namespace:i,group:c,rulerRule:E}=n,[m,x]=(0,e.useState)(),[p,O]=(0,e.useState)(void 0),De=(0,U.EG)(s),A=(0,d.Pc)(n.rulerRule)&&Boolean(n.rulerRule.grafana_alert.provenance),b=[],j=(0,d.Jq)(c),{isEditable:xe,isRemovable:be}=(0,k.M)(De,E),H=u.pathname+u.search,z=te(u.pathname),Me=()=>{if(m&&m.rulerRule){const R=L.Zk((0,U.EG)(m.namespace.rulesSource),m.namespace.name,m.group.name,m.rulerRule);r((0,q.hS)(R,{navigateTo:z?"/alerting/list":void 0})),x(void 0)}},Ne=()=>{if((0,U.jq)(s)){const{appUrl:R,appSubUrl:M}=W.v,B=M!==""?`${R}${M}/`:W.v.appUrl,V=`${encodeURIComponent(s.name)}/${encodeURIComponent(n.name)}`;return`${B}alerting/${V}/find`}return window.location.href.split("?")[0]},Te=(0,U.EG)(s);if(z||b.push(e.createElement(S.u,{placement:"top",content:"View"},e.createElement(P.Qj,{className:l.button,title:"View",size:"sm",key:"view",variant:"secondary",icon:"eye",href:(0,_.V2)(s,n,H)}))),xe&&E&&!j){const R=L.Zk(Te,i.name,c.name,E);if(!A){const B=(0,K.u)(`/alerting/${encodeURIComponent(L.$V(R))}/edit`,{returnTo:H});z&&b.push(e.createElement(Z.m,{key:"copy",icon:"copy",onClipboardError:V=>{h.error("Error while copying URL",V)},className:l.button,size:"sm",getText:Ne},"Copy link to rule")),b.push(e.createElement(S.u,{placement:"top",content:"Edit"},e.createElement(P.Qj,{title:"Edit",className:l.button,size:"sm",key:"edit",variant:"secondary",icon:"pen",href:B})))}const M=(0,K.u)("/alerting/new",{copyFrom:L.$V(R)});b.push(e.createElement(S.u,{placement:"top",content:"Duplicate"},e.createElement(P.Qj,{title:"Duplicate",className:l.button,size:"sm",key:"clone",variant:"secondary",icon:"copy",href:A?void 0:M,onClick:A?()=>O(M):void 0})))}return be&&E&&!j&&!A&&b.push(e.createElement(S.u,{placement:"top",content:"Delete"},e.createElement(P.zx,{title:"Delete",className:l.button,size:"sm",type:"button",key:"delete",variant:"secondary",icon:"trash-alt",onClick:()=>x(n)}))),b.length?e.createElement(e.Fragment,null,e.createElement(Q.Stack,{gap:1},b.map((R,M)=>e.createElement(e.Fragment,{key:M},R))),!!m&&e.createElement(F.s,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:Me,onDismiss:()=>x(void 0)}),e.createElement(F.s,{isOpen:!!p,title:"Clone provisioned rule",body:e.createElement("div",null,e.createElement("p",null,"The new rule will ",e.createElement("span",{className:l.bold},"NOT")," be marked as a provisioned rule."),e.createElement("p",null,"You will need to set a new alert group for the cloned rule because the original one has been provisioned and cannot be used for rules created in the UI.")),confirmText:"Clone",onConfirm:()=>p&&Y.E1.push(p),onDismiss:()=>O(void 0)})):null};function te(n){return n.endsWith("/view")}const ne=n=>({button:a.css`
    padding: 0 ${n.spacing(2)};
  `,bold:a.css`
    font-weight: ${n.typography.fontWeightBold};
  `});var ae=t(81697),le=t(82963);function se({rule:n}){const s=(0,f.wW)(oe),{exceedsLimit:r}=(0,e.useMemo)(()=>(0,le.f)(n.group.interval),[n.group.interval]);return r?e.createElement(S.u,{theme:"error",content:e.createElement("div",null,"A minimum evaluation interval of"," ",e.createElement("span",{className:s.globalLimitValue},W.v.unifiedAlerting.minInterval)," has been configured in Grafana and will be used instead of the ",n.group.interval," interval configured for the Rule Group.")},e.createElement(ae.J,{name:"stopwatch-slash",className:s.icon})):null}function oe(n){return{globalLimitValue:a.css`
      font-weight: ${n.typography.fontWeightBold};
    `,icon:a.css`
      fill: ${n.colors.warning.text};
    `}}var re=t(52694),G=t(80498),ie=t(49279),ce=t(68854),de=t(24990),me=t(8674),ue=t(78443);const pe=15,ve=({rule:n})=>{const s=(0,f.wW)(Ee),{namespace:{rulesSource:r}}=n,u=Object.entries(n.annotations).filter(([h,l])=>!!l.trim());return e.createElement("div",null,e.createElement(ie.f,{rule:n,rulesSource:r,isViewMode:!1}),e.createElement("div",{className:s.wrapper},e.createElement("div",{className:s.leftSide},e.createElement(ge,{rule:n}),!!n.labels&&!!Object.keys(n.labels).length&&e.createElement(G.C,{label:"Labels",horizontal:!0},e.createElement(re.s,{labels:n.labels})),e.createElement(me.C,{rulesSource:r,rule:n,annotations:u}),e.createElement(ce.J,{annotations:u})),e.createElement("div",{className:s.rightSide},e.createElement(de.C,{rulesSource:r,rule:n}))),e.createElement(ue.M,{rule:n,itemsDisplayLimit:pe}))},ge=({rule:n})=>{let s,r=n.group.interval;return(0,d.yF)(n.rulerRule)||(s=n.rulerRule?.for),e.createElement(e.Fragment,null,r&&e.createElement(G.C,{label:"Evaluate",horizontal:!0},"Every ",r),s&&e.createElement(G.C,{label:"For",horizontal:!0},s))},Ee=n=>({wrapper:a.css`
    display: flex;
    flex-direction: row;

    ${n.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:a.css`
    flex: 1;
  `,rightSide:a.css`
    ${n.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var fe=t(80399),he=t(48208);const ye=({rules:n,className:s,showGuidelines:r=!1,emptyMessage:u="No rules found.",showGroupColumn:h=!1,showSummaryColumn:l=!1})=>{const i=(0,f.wW)(Re),c=(0,a.cx)(i.wrapper,s,{[i.wrapperMargin]:r}),E=(0,e.useMemo)(()=>n.map((p,O)=>({id:`${p.namespace.name}-${p.group.name}-${p.name}-${O}`,data:p})),[n]),m=Ce(l,h);if(!n.length)return e.createElement("div",{className:(0,a.cx)(c,i.emptyMessage)},u);const x=r?o.F:g.t;return e.createElement("div",{className:c,"data-testid":"rules-table"},e.createElement(x,{cols:m,isExpandable:!0,items:E,renderExpandedContent:({data:p})=>e.createElement(ve,{rule:p}),pagination:{itemsPerPage:y.gN},paginationStyles:i.pagination}))},Re=n=>({wrapperMargin:a.css`
    ${n.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:a.css`
    padding: ${n.spacing(1)};
  `,wrapper:a.css`
    width: auto;
    border-radius: ${n.shape.borderRadius()};
  `,pagination:a.css`
    display: flex;
    margin: 0;
    padding-top: ${n.spacing(1)};
    padding-bottom: ${n.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${n.colors.border.strong};
    border-right: 1px solid ${n.colors.border.strong};
    border-bottom: 1px solid ${n.colors.border.strong};
  `});function Ce(n,s){const{hasRuler:r,rulerRulesLoaded:u}=(0,v.h)();return(0,e.useMemo)(()=>{const h=[{id:"state",label:"State",renderCell:({data:l})=>{const{namespace:i}=l,{rulesSource:c}=i,{promRule:E,rulerRule:m}=l,x=!!(r(c)&&u(c)&&E&&!m),p=!!(r(c)&&u(c)&&m&&!E);return e.createElement(he.p,{rule:l,isDeleting:x,isCreating:p})},size:"165px"},{id:"name",label:"Name",renderCell:({data:l})=>l.name,size:5},{id:"provisioned",label:"",renderCell:({data:l})=>{const i=l.rulerRule;return(0,d.Pc)(i)&&i.grafana_alert.provenance?e.createElement(N.C0,null):null},size:"100px"},{id:"warnings",label:"",renderCell:({data:l})=>e.createElement(se,{rule:l}),size:"45px"},{id:"health",label:"Health",renderCell:({data:{promRule:l,group:i}})=>l?e.createElement(fe.V,{rule:l}):null,size:"75px"}];return n&&h.push({id:"summary",label:"Summary",renderCell:({data:l})=>e.createElement(T.Z,{input:l.annotations[$.q6.summary]??""}),size:5}),s&&h.push({id:"group",label:"Group",renderCell:({data:l})=>{const{namespace:i,group:c}=l;return c.name==="default"?e.createElement(D.V,{namespace:i.name}):e.createElement(D.V,{namespace:i.name,group:c.name})},size:5}),h.push({id:"actions",label:"Actions",renderCell:({data:l})=>e.createElement(ee,{rule:l,rulesSource:l.namespace.rulesSource}),size:"200px"}),h},[n,s,r,u])}},8055:(I,C,t)=>{t.d(C,{h:()=>y});var a=t(68404),e=t(45849),f=t(79370);function y(){const v=(0,f._)(g=>g.rulerRules),$=(0,a.useCallback)(g=>{const o=typeof g=="string"?g:g.name;return o===e.GC||!!v[o]?.result},[v]),d=(0,a.useCallback)(g=>{const o=(0,e.EG)(g),N=v[o]?.result;return Boolean(N)},[v]);return{hasRuler:$,rulerRulesLoaded:d}}}}]);

//# sourceMappingURL=5048.e8bb584c0a2f54465ce7.js.map