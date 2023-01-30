"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{97629:(C,g,a)=>{a.r(g),a.d(g,{ServerStats:()=>D});var s=a(52423),e=a(68404),m=a(93003),d=a(29516),o=a(90723),x=a(38603),f=a(81168),i=a(82002),N=a(43714),h=a(62626),w=a(72274),p=a(47214),y=a(6694),b=a(57172);const A=()=>{const t=O((0,d.l4)()),[l,n]=(0,e.useState)(!1),[c,r]=(0,e.useState)({mode:"thumbs",theme:m.v.theme2.isLight?"light":"dark"}),u=()=>n(!1),S=()=>{(0,p.i)().post("/api/admin/crawler/start",c).then(v=>{console.log("GOT",v),u()})};return e.createElement(e.Fragment,null,e.createElement(y.u,{title:"Start crawler",isOpen:l,onDismiss:u},e.createElement("div",{className:t.wrap},e.createElement(b.p,{height:200,value:JSON.stringify(c,null,2)??"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:v=>{r(JSON.parse(v))}})),e.createElement(y.u.ButtonRow,null,e.createElement(o.zx,{type:"submit",onClick:S},"Start"),e.createElement(o.zx,{variant:"secondary",onClick:u},"Cancel"))),e.createElement(o.zx,{onClick:()=>n(!0),variant:"primary"},"Start"))},O=t=>({wrap:s.css`
      border: 2px solid #111;
    `}),L=()=>{const t=M((0,d.l4)()),[l,n]=(0,e.useState)();return(0,e.useEffect)(()=>{const c=(0,w.gj)().getStream({scope:h.z.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:r=>{((0,h.RL)(r)||(0,h.se)(r))&&n(r.message)}});return()=>{c.unsubscribe()}},[]),l?e.createElement("div",{className:t.wrap},e.createElement("pre",null,JSON.stringify(l,null,2)),l.state!=="running"&&e.createElement(A,null),l.state!=="stopped"&&e.createElement(o.zx,{variant:"secondary",onClick:()=>{(0,p.i)().post("/api/admin/crawler/stop")}},"Stop")):e.createElement("div",{className:t.wrap},"No status (never run)",e.createElement("br",null),e.createElement(A,null))},M=t=>({wrap:s.css`
      border: 4px solid red;
    `,running:s.css`
      border: 4px solid green;
    `}),R=async()=>(0,p.i)().get("api/admin/stats").catch(t=>(console.error(t),null)),D=()=>{const[t,l]=(0,e.useState)(null),[n,c]=(0,e.useState)(!1),r=(0,d.wW)(T),u=i.Vt.hasAccess(f.AccessControlAction.DataSourcesRead,i.Vt.isGrafanaAdmin),S=i.Vt.hasAccess(f.AccessControlAction.UsersRead,i.Vt.isGrafanaAdmin);return(0,e.useEffect)(()=>{i.Vt.hasAccess(f.AccessControlAction.ActionServerStatsRead,i.Vt.isGrafanaAdmin)&&(c(!0),R().then(v=>{l(v),c(!1)}))},[]),i.Vt.hasAccess(f.AccessControlAction.ActionServerStatsRead,i.Vt.isGrafanaAdmin)?e.createElement(e.Fragment,null,e.createElement("h2",{className:r.title},"Instance statistics"),n?e.createElement("div",{className:r.loader},e.createElement(N.a,{text:"Loading instance stats..."})):t?e.createElement("div",{className:r.row},e.createElement(E,{content:[{name:"Dashboards (starred)",value:`${t.dashboards} (${t.stars})`},{name:"Tags",value:t.tags},{name:"Playlists",value:t.playlists},{name:"Snapshots",value:t.snapshots}],footer:e.createElement(o.Qj,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),e.createElement("div",{className:r.doubleRow},e.createElement(E,{content:[{name:"Data sources",value:t.datasources}],footer:u&&e.createElement(o.Qj,{href:"/datasources",variant:"secondary"},"Manage data sources")}),e.createElement(E,{content:[{name:"Alerts",value:t.alerts}],footer:e.createElement(o.Qj,{href:"/alerting/list",variant:"secondary"},"Alerts")})),e.createElement(E,{content:[{name:"Organisations",value:t.orgs},{name:"Users total",value:t.users},{name:"Active users in last 30 days",value:t.activeUsers},{name:"Active sessions",value:t.activeSessions}],footer:S&&e.createElement(o.Qj,{href:"/admin/users",variant:"secondary"},"Manage users")})):e.createElement("p",{className:r.notFound},"No stats found."),m.v.featureToggles.dashboardPreviews&&m.v.featureToggles.dashboardPreviewsAdmin&&e.createElement(L,null)):null},T=t=>({title:s.css`
      margin-bottom: ${t.spacing(4)};
    `,row:s.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${t.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:s.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${t.spacing(2)};
      }
    `,loader:s.css`
      height: 290px;
    `,notFound:s.css`
      font-size: ${t.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),E=({content:t,footer:l})=>{const n=(0,d.wW)(j);return e.createElement(x._,{className:n.container,disableHover:!0},e.createElement("div",{className:n.inner},e.createElement("div",{className:n.content},t.map(c=>e.createElement("div",{key:c.name,className:n.row},e.createElement("span",null,c.name),e.createElement("span",null,c.value)))),l&&e.createElement("div",null,l)))},j=t=>({container:s.css`
      padding: ${t.spacing(2)};
    `,inner:s.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:s.css`
      flex: 1 0 auto;
    `,row:s.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${t.spacing(2)};
      align-items: center;
    `})},43714:(C,g,a)=>{a.d(g,{a:()=>m});var s=a(68404),e=a(90090);const m=({text:d="Loading..."})=>s.createElement("div",{className:"page-loader-wrapper"},s.createElement(e.u,{text:d}))}}]);

//# sourceMappingURL=ServerStats.b130504882521f1de39e.js.map