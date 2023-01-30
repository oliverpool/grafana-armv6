"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{43137:(F,S,n)=>{n.d(S,{l:()=>x,S:()=>p});var l=n(52423),e=n(68404),m=n(29516),u=n(2323),v=n(90723),c=n(86475);const d=g=>({alertContent:l.css`
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: space-between;
    align-items: center;
  `,alertParagraph:l.css`
    margin: 0 ${g.spacing(1)} 0 0;
    line-height: ${g.spacing(g.components.height.sm)};
    color: ${g.colors.text.primary};
  `});var p=(g=>(g.dataSources="dataSources",g.connectData="connectData",g))(p||{});const y={dataSources:c.Z.DataSources,connectData:c.Z.ConnectData};function x({destinationPage:g}){const h=(0,m.wW)(d);return e.createElement(u.b,{severity:"warning",title:""},e.createElement("div",{className:h.alertContent},e.createElement("p",{className:h.alertParagraph},"Data sources have a new home! You can discover new data sources or manage existing ones in the new Connections page, accessible from the lefthand nav."),e.createElement(v.Qj,{"aria-label":"Link to Connections",icon:"adjust-circle",href:y[g]},"See data sources in Connections")))}},75260:(F,S,n)=>{n.d(S,{SX:()=>u,IF:()=>I,oZ:()=>y,xh:()=>b});var l=n(68404),e=n(24699),m=n(68884);function u({error:r}){const D=v(r);return l.createElement(m.C,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:D})}function v(r){switch(r){case e.w2.modifiedSignature:return"Plugin disabled due to modified content";case e.w2.invalidSignature:return"Plugin disabled due to invalid plugin signature";case e.w2.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${r?`: ${r}`:""}`}}var c=n(29516),d=n(52423);const p=r=>d.css`
  background: ${r.colors.background.primary};
  border-color: ${r.colors.border.strong};
  color: ${r.colors.text.secondary};
`;function y(){const r=(0,c.wW)(p);return l.createElement(m.C,{text:"Installed",color:"orange",className:r})}var x=n(14876),g=n(90701),h=n(80914),$=n(90723);function I({plugin:r}){const D=(0,c.wW)(p),C=L=>{L.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${r.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")};return(0,x.v)("enterprise.plugins")?l.createElement(m.C,{text:"Enterprise",color:"blue"}):l.createElement(g.Lh,null,l.createElement(h.o,{status:r.signature}),l.createElement(m.C,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:D}),l.createElement($.zx,{size:"sm",fill:"text",icon:"external-link-alt",onClick:C},"Learn more"))}function b({plugin:r}){const D=(0,c.wW)(A);return r.hasUpdate&&!r.isCore&&r.type!==e.zV.renderer?l.createElement("p",{className:D.hasUpdate},"Update available!"):null}const A=r=>({hasUpdate:d.css`
      color: ${r.colors.text.secondary};
      font-size: ${r.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},21048:(F,S,n)=>{n.d(S,{L:()=>u});var l=n(52423),e=n(68404),m=n(29516);const u=({children:c,wrap:d,className:p})=>{const y=(0,m.l4)(),x=v(y,d);return e.createElement("div",{className:(0,l.cx)(x.container,p)},c)},v=(c,d)=>({container:l.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${d?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${c.spacing()};
      margin-right: ${c.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `})},21701:(F,S,n)=>{n.r(S),n.d(S,{default:()=>X});var l=n(52423),e=n(68404),m=n(70356),u=n(57388),v=n(93003),c=n(29516),d=n(74955),p=n(46739),y=n(318),x=n(48756),g=n(90090),h=n(79396),$=n(86245),I=n(43137),b=n(81168),A=n(21048),r=n(48996),D=n(81697),C=n(90701),L=n(80914),f=n(75260);function M({plugin:a}){return a.isEnterprise?e.createElement(C.Lh,{height:"auto",wrap:!0},e.createElement(f.IF,{plugin:a}),a.isDisabled&&e.createElement(f.SX,{error:a.error}),e.createElement(f.xh,{plugin:a})):e.createElement(C.Lh,{height:"auto",wrap:!0},e.createElement(L.o,{status:a.signature}),a.isDisabled&&e.createElement(f.SX,{error:a.error}),a.isInstalled&&e.createElement(f.oZ,null),e.createElement(f.xh,{plugin:a}))}function W({alt:a,className:t,src:s,height:o}){return e.createElement("img",{src:s,className:t,alt:a,loading:"lazy",height:o})}const z="48px";function U({plugin:a,pathName:t,displayMode:s=r.lL.Grid}){const o=(0,c.wW)(k),i=s===r.lL.List;return e.createElement("a",{href:`${t}/${a.id}`,className:(0,l.cx)(o.container,{[o.list]:i})},e.createElement(W,{src:a.info.logos.small,className:o.pluginLogo,height:z,alt:""}),e.createElement("h2",{className:(0,l.cx)(o.name,"plugin-name")},a.name),e.createElement("div",{className:(0,l.cx)(o.content,"plugin-content")},e.createElement("p",null,"By ",a.orgName),e.createElement(M,{plugin:a})),e.createElement("div",{className:o.pluginType},a.type&&e.createElement(D.J,{name:r.Co[a.type],title:`${a.type} plugin`})))}const k=a=>({container:l.css`
      display: grid;
      grid-template-columns: ${z} 1fr ${a.spacing(3)};
      grid-template-rows: auto;
      gap: ${a.spacing(2)};
      grid-auto-flow: row;
      background: ${a.colors.background.secondary};
      border-radius: ${a.shape.borderRadius()};
      padding: ${a.spacing(3)};
      transition: ${a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short})};

      &:hover {
        background: ${a.colors.emphasize(a.colors.background.secondary,.03)};
      }
    `,list:l.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${a.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:l.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${a.colors.text.secondary};
    `,pluginLogo:l.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:l.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${a.colors.text.secondary};
    `,name:l.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${a.typography.h4.fontSize};
      color: ${a.colors.text.primary};
      margin: 0;
    `}),O=({plugins:a,displayMode:t})=>{const s=t===r.lL.List,o=(0,c.wW)(Z),i=(0,m.TH)(),E=v.v.appSubUrl+i.pathname;return e.createElement("div",{className:(0,l.cx)(o.container,{[o.list]:s}),"data-testid":"plugin-list"},a.map(P=>e.createElement(U,{key:P.id,plugin:P,pathName:E,displayMode:t})))},Z=a=>({container:l.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${a.spacing(3)};
    `,list:l.css`
      grid-template-columns: 1fr;
    `});var Q=n(70197),H=n(79230);const R=(a,t=0,s=[])=>{const o=(0,e.useRef)(!0),i=[...s,o];return(0,Q.Z)(()=>{if(o.current){o.current=!1;return}return a()},t,i)},j=({value:a,onSearch:t})=>{const[s,o]=(0,e.useState)(a);return R(()=>t(s??""),500,[s]),e.createElement(H.H,{value:s,onKeyDown:i=>{(i.key==="Enter"||i.keyCode===13)&&t(i.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:i=>{o(i)},width:46})};var K=n(59210);const V=()=>({push:({query:a})=>{u.E1.partial(a)}});var N=n(74509);function X({route:a}){const t=(0,m.TH)(),s=(0,u.Ox)(t.search),o=(0,b.useSelector)(B=>(0,$.ht)(B.navIndex,"plugins")),{displayMode:i,setDisplayMode:E}=(0,N.iY)(),P=(0,c.wW)(Y),T=V(),w=(0,N.y9)(),q=s.q||"",J=s.filterBy||"installed",G=s.filterByType||"all",_=s.sortBy||K.Nh.nameAsc,{isLoading:ne,error:ee,plugins:ae}=(0,N.GE)({query:q,filterBy:J,filterByType:G,sortBy:_}),te=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],oe=B=>{T.push({query:{sortBy:B.value}})},se=B=>{T.push({query:{filterBy:B}})},le=B=>{T.push({query:{filterByType:B.value}})},re=B=>{T.push({query:{filterBy:"all",filterByType:"all",q:B}})};return ee?(console.error(ee.message),null):e.createElement(h.T,{navModel:o},e.createElement(h.T.Contents,null,v.v.featureToggles.dataConnectionsConsole&&(G==="all"||G==="datasource")&&e.createElement(I.l,{destinationPage:I.S.connectData}),e.createElement(A.L,{wrap:!0},e.createElement(d.g,{label:"Search"},e.createElement(j,{value:q,onSearch:re})),e.createElement(A.L,{wrap:!0,className:P.actionBar},e.createElement(d.g,{label:"Type"},e.createElement(p.Ph,{"aria-label":"Plugin type filter",value:G,onChange:le,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})),w?e.createElement(d.g,{label:"State"},e.createElement(y.S,{value:J,onChange:se,options:te})):e.createElement(x.u,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top"},e.createElement("div",null,e.createElement(d.g,{label:"State"},e.createElement(y.S,{disabled:!0,value:J,onChange:se,options:te})))),e.createElement(d.g,{label:"Sort"},e.createElement(p.Ph,{"aria-label":"Sort Plugins List",width:24,value:_,onChange:oe,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})),e.createElement(d.g,{label:"View"},e.createElement(y.S,{className:P.displayAs,value:i,onChange:E,options:[{value:r.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:r.lL.List,icon:"list-ul",description:"Display plugins in list"}]})))),e.createElement("div",{className:P.listWrap},ne?e.createElement(g.u,{className:l.css`
                margin-bottom: 0;
              `,text:"Loading results"}):e.createElement(O,{plugins:ae,displayMode:i}))))}const Y=a=>({actionBar:l.css`
    ${a.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:l.css`
    margin-top: ${a.spacing(2)};
  `,displayAs:l.css`
    svg {
      margin-right: 0;
    }
  `})},74509:(F,S,n)=>{n.d(S,{iY:()=>a,bt:()=>j,ZV:()=>R,GE:()=>W,UQ:()=>O,bJ:()=>U,x3:()=>Z,IS:()=>K,y9:()=>H,S1:()=>Q,wq:()=>V});var l=n(68404),e=n(81168),m=n(59210),u=n(85805),v=n(66552),c=n(90158),d=n(29076),p=n(48996);const y=t=>t.plugins,x=(0,c.P1)(y,({items:t})=>t),g=(0,c.P1)(y,({settings:t})=>t.displayMode),{selectAll:h,selectById:$}=v.CD.getSelectors(x),I=t=>(0,c.P1)(h,s=>s.filter(o=>t==="installed"?o.isInstalled:!o.isCore)),b=(t,s)=>(0,c.P1)(I(t),o=>o.filter(i=>s==="all"||i.type===s)),A=t=>(0,c.P1)(h,s=>t===""?[]:s.filter(o=>{const i=[];return o.name&&i.push(o.name.toLowerCase()),o.orgName&&i.push(o.orgName.toLowerCase()),i.some(E=>E.includes((0,d.x6)(t).toLowerCase()))})),r=(t,s,o)=>(0,c.P1)(b(s,o),A(t),(i,E)=>t===""?i:E),D=(0,c.P1)(h,t=>t?t.filter(s=>Boolean(s.error)).map(s=>({pluginId:s.id,errorCode:s.error})):[]),C=t=>(0,c.P1)(y,({requests:s={}})=>s[t]),L=t=>(0,c.P1)(C(t),s=>s?.status===p.eE.Pending),f=t=>(0,c.P1)(C(t),s=>s?.status===p.eE.Rejected?s?.error:null),M=t=>(0,c.P1)(C(t),s=>s===void 0),W=({query:t="",filterBy:s="installed",filterByType:o="all",sortBy:i=m.Nh.nameAsc})=>{N();const E=(0,e.useSelector)(r(t,s,o)),{isLoading:P,error:T}=R(),w=(0,m.AA)(E,i);return{isLoading:P,error:T,plugins:w}},z=()=>(N(),useSelector(selectAll)),U=t=>(N(),Y(t),(0,e.useSelector)(s=>$(s,t))),k=t=>(X(),useSelector(s=>selectById(s,t))),O=()=>(N(),(0,e.useSelector)(D)),Z=()=>{const t=(0,e.useDispatch)();return(s,o,i)=>t((0,u.N9)({id:s,version:o,isUpdating:i}))},Q=()=>{const t=(0,e.useDispatch)();return s=>t((0,u.Tz)(s))},H=()=>(0,e.useSelector)(f(u.tQ.typePrefix))===null,R=()=>{const t=(0,e.useSelector)(L(u.Qd.typePrefix)),s=(0,e.useSelector)(f(u.Qd.typePrefix));return{isLoading:t,error:s}},j=()=>{const t=(0,e.useSelector)(L(u.DD.typePrefix)),s=(0,e.useSelector)(f(u.DD.typePrefix));return{isLoading:t,error:s}},K=()=>{const t=(0,e.useSelector)(L(u.N9.typePrefix)),s=(0,e.useSelector)(f(u.N9.typePrefix));return{isInstalling:t,error:s}},V=()=>{const t=(0,e.useSelector)(L(u.Tz.typePrefix)),s=(0,e.useSelector)(f(u.Tz.typePrefix));return{isUninstalling:t,error:s}},N=()=>{const t=(0,e.useDispatch)(),s=(0,e.useSelector)(M(u.Qd.typePrefix));(0,l.useEffect)(()=>{s&&t((0,u.Qd)())},[])},X=()=>{const t=useDispatch(),s=useSelector(selectIsRequestNotFetched(fetchAllLocal.typePrefix));useEffect(()=>{s&&t(fetchAllLocal())},[])},Y=t=>{const s=(0,e.useDispatch)(),o=(0,e.useSelector)(P=>$(P,t)),E=!(0,e.useSelector)(L(u.DD.typePrefix))&&o&&!o.details;(0,l.useEffect)(()=>{E&&s((0,u.DD)(t))},[o])},a=()=>{const t=(0,e.useDispatch)();return{displayMode:(0,e.useSelector)(g),setDisplayMode:o=>t((0,v.UC)(o))}}}}]);

//# sourceMappingURL=PluginListPage.d5cecec0b44e4dcf259d.js.map