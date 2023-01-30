"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2446,7641],{97629:(U,E,s)=>{s.r(E),s.d(E,{ServerStats:()=>T});var l=s(52423),e=s(68404),v=s(93003),u=s(29516),o=s(90723),A=s(38603),f=s(81168),m=s(82002),C=s(43714),y=s(62626),N=s(72274),S=s(47214),x=s(6694),w=s(57172);const b=()=>{const n=D((0,u.l4)()),[c,a]=(0,e.useState)(!1),[r,i]=(0,e.useState)({mode:"thumbs",theme:v.v.theme2.isLight?"light":"dark"}),g=()=>a(!1),p=()=>{(0,S.i)().post("/api/admin/crawler/start",r).then(h=>{console.log("GOT",h),g()})};return e.createElement(e.Fragment,null,e.createElement(x.u,{title:"Start crawler",isOpen:c,onDismiss:g},e.createElement("div",{className:n.wrap},e.createElement(w.p,{height:200,value:JSON.stringify(r,null,2)??"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:h=>{i(JSON.parse(h))}})),e.createElement(x.u.ButtonRow,null,e.createElement(o.zx,{type:"submit",onClick:p},"Start"),e.createElement(o.zx,{variant:"secondary",onClick:g},"Cancel"))),e.createElement(o.zx,{onClick:()=>a(!0),variant:"primary"},"Start"))},D=n=>({wrap:l.css`
      border: 2px solid #111;
    `}),P=()=>{const n=L((0,u.l4)()),[c,a]=(0,e.useState)();return(0,e.useEffect)(()=>{const r=(0,N.gj)().getStream({scope:y.z.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:i=>{((0,y.RL)(i)||(0,y.se)(i))&&a(i.message)}});return()=>{r.unsubscribe()}},[]),c?e.createElement("div",{className:n.wrap},e.createElement("pre",null,JSON.stringify(c,null,2)),c.state!=="running"&&e.createElement(b,null),c.state!=="stopped"&&e.createElement(o.zx,{variant:"secondary",onClick:()=>{(0,S.i)().post("/api/admin/crawler/stop")}},"Stop")):e.createElement("div",{className:n.wrap},"No status (never run)",e.createElement("br",null),e.createElement(b,null))},L=n=>({wrap:l.css`
      border: 4px solid red;
    `,running:l.css`
      border: 4px solid green;
    `}),G=async()=>(0,S.i)().get("api/admin/stats").catch(n=>(console.error(n),null)),T=()=>{const[n,c]=(0,e.useState)(null),[a,r]=(0,e.useState)(!1),i=(0,u.wW)(O),g=m.Vt.hasAccess(f.AccessControlAction.DataSourcesRead,m.Vt.isGrafanaAdmin),p=m.Vt.hasAccess(f.AccessControlAction.UsersRead,m.Vt.isGrafanaAdmin);return(0,e.useEffect)(()=>{m.Vt.hasAccess(f.AccessControlAction.ActionServerStatsRead,m.Vt.isGrafanaAdmin)&&(r(!0),G().then(h=>{c(h),r(!1)}))},[]),m.Vt.hasAccess(f.AccessControlAction.ActionServerStatsRead,m.Vt.isGrafanaAdmin)?e.createElement(e.Fragment,null,e.createElement("h2",{className:i.title},"Instance statistics"),a?e.createElement("div",{className:i.loader},e.createElement(C.a,{text:"Loading instance stats..."})):n?e.createElement("div",{className:i.row},e.createElement(d,{content:[{name:"Dashboards (starred)",value:`${n.dashboards} (${n.stars})`},{name:"Tags",value:n.tags},{name:"Playlists",value:n.playlists},{name:"Snapshots",value:n.snapshots}],footer:e.createElement(o.Qj,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),e.createElement("div",{className:i.doubleRow},e.createElement(d,{content:[{name:"Data sources",value:n.datasources}],footer:g&&e.createElement(o.Qj,{href:"/datasources",variant:"secondary"},"Manage data sources")}),e.createElement(d,{content:[{name:"Alerts",value:n.alerts}],footer:e.createElement(o.Qj,{href:"/alerting/list",variant:"secondary"},"Alerts")})),e.createElement(d,{content:[{name:"Organisations",value:n.orgs},{name:"Users total",value:n.users},{name:"Active users in last 30 days",value:n.activeUsers},{name:"Active sessions",value:n.activeSessions}],footer:p&&e.createElement(o.Qj,{href:"/admin/users",variant:"secondary"},"Manage users")})):e.createElement("p",{className:i.notFound},"No stats found."),v.v.featureToggles.dashboardPreviews&&v.v.featureToggles.dashboardPreviewsAdmin&&e.createElement(P,null)):null},O=n=>({title:l.css`
      margin-bottom: ${n.spacing(4)};
    `,row:l.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${n.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:l.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${n.spacing(2)};
      }
    `,loader:l.css`
      height: 290px;
    `,notFound:l.css`
      font-size: ${n.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),d=({content:n,footer:c})=>{const a=(0,u.wW)(t);return e.createElement(A._,{className:a.container,disableHover:!0},e.createElement("div",{className:a.inner},e.createElement("div",{className:a.content},n.map(r=>e.createElement("div",{key:r.name,className:a.row},e.createElement("span",null,r.name),e.createElement("span",null,r.value)))),c&&e.createElement("div",null,c)))},t=n=>({container:l.css`
      padding: ${n.spacing(2)};
    `,inner:l.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:l.css`
      flex: 1 0 auto;
    `,row:l.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${n.spacing(2)};
      align-items: center;
    `})},62446:(U,E,s)=>{s.r(E),s.d(E,{UpgradeInfo:()=>b,UpgradePage:()=>x,default:()=>c});var l=s(52423),e=s(68404),v=s(36635),u=s(29516),o=s(90723),A=s(79396),f=s(86245);const m={fontWeight:500,fontSize:"26px",lineHeight:"123%"},C=a=>{const r=a.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",i=a.isDark?a.v1.palette.dark9:a.v1.palette.gray6;return{container:l.css`
      padding: 36px 79px;
      background: ${a.components.panel.background};
    `,footer:l.css`
      text-align: center;
      padding: 16px;
      background: ${i};
    `,header:l.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${r}') right;
    `}};function y({header:a,editionNotice:r,subheader:i,children:g}){const p=(0,u.wW)(C);return e.createElement(e.Fragment,null,e.createElement("div",{className:p.header},e.createElement("h2",{style:m},a),i&&e.createElement("h3",null,i),e.createElement(N,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"}},e.createElement("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}}))),e.createElement("div",{className:p.container},g),r&&e.createElement("div",{className:p.footer},r))}const N=({size:a,style:r,children:i})=>e.createElement("div",{style:{width:a,height:a,position:"absolute",bottom:0,right:0,borderRadius:"50%",...r}},i);var S=s(97629);function x({navModel:a}){return e.createElement(A.T,{navModel:a},e.createElement(A.T.Contents,null,e.createElement(S.ServerStats,null),e.createElement(b,{editionNotice:`You are running the open-source version of Grafana.
        You have to install the Enterprise edition in order enable Enterprise features.`})))}const w={fontWeight:500,fontSize:"26px",lineHeight:"123%"},b=({editionNotice:a})=>{const r=(0,u.wW)(D);return e.createElement(e.Fragment,null,e.createElement("h2",{className:r.title},"Enterprise license"),e.createElement(y,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:a},e.createElement("div",{className:r.column},e.createElement(T,null),e.createElement(G,null))))},D=a=>({column:l.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:l.css`
      margin: ${a.spacing(4)} 0;
    `}),P=()=>e.createElement("div",{style:{marginTop:"40px",marginBottom:"30px"}},e.createElement("h2",{style:w},"Get Grafana Enterprise"),e.createElement(L,null),e.createElement("p",{style:{paddingTop:"12px"}},"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends.")),L=()=>e.createElement(o.Qj,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page"},"Contact us and get a free trial"),G=()=>e.createElement("div",null,e.createElement("h4",null,"At your service"),e.createElement(d,null,e.createElement(t,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),e.createElement(t,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),e.createElement(t,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg"},"24 x 7 x 365 support via",e.createElement(d,{nested:!0},e.createElement(t,{title:"Email"}),e.createElement(t,{title:"Private Slack channel"}),e.createElement(t,{title:"Phone"}))),e.createElement(t,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg"},"in the upgrade process")),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("strong",null,"Also included:"),e.createElement("br",null),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."),e.createElement(P,null)),T=()=>e.createElement("div",{style:{paddingRight:"11px"}},e.createElement("h4",null,"Enhanced functionality"),e.createElement(O,null)),O=()=>e.createElement(d,null,e.createElement(t,{title:"Data source permissions"}),e.createElement(t,{title:"Reporting"}),e.createElement(t,{title:"SAML authentication"}),e.createElement(t,{title:"Enhanced LDAP integration"}),e.createElement(t,{title:"Team Sync"},"LDAP, GitHub OAuth, Auth Proxy, Okta"),e.createElement(t,{title:"White labeling"}),e.createElement(t,{title:"Auditing"}),e.createElement(t,{title:"Settings updates at runtime"}),e.createElement(t,{title:"Grafana usage insights"},e.createElement(d,{nested:!0},e.createElement(t,{title:"Sort dashboards by popularity in search"}),e.createElement(t,{title:"Find unused dashboards"}),e.createElement(t,{title:"Dashboard usage stats drawer"}),e.createElement(t,{title:"Dashboard presence indicators"}))),e.createElement(t,{title:"Enterprise plugins"},e.createElement(d,{nested:!0},e.createElement(t,{title:"Oracle"}),e.createElement(t,{title:"Splunk"}),e.createElement(t,{title:"Service Now"}),e.createElement(t,{title:"Dynatrace"}),e.createElement(t,{title:"New Relic"}),e.createElement(t,{title:"DataDog"}),e.createElement(t,{title:"AppDynamics"}),e.createElement(t,{title:"SAP HANA\xAE"}),e.createElement(t,{title:"Gitlab"}),e.createElement(t,{title:"Honeycomb"}),e.createElement(t,{title:"Jira"}),e.createElement(t,{title:"MongoDB"}),e.createElement(t,{title:"Salesforce"}),e.createElement(t,{title:"Snowflake"}),e.createElement(t,{title:"Wavefront"})))),d=({children:a,nested:r})=>{const i=l.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${r?0:8}px;
    }
  `;return e.createElement("div",{className:i},a)},t=({children:a,title:r,image:i})=>{const g=i||"public/img/licensing/checkmark.svg",p=l.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,h=l.css`
    font-weight: 500;
    line-height: 1.7;
  `;return e.createElement("div",{className:p},e.createElement("img",{src:g,alt:""}),e.createElement("div",null,e.createElement("div",{className:h},r),a))},n=a=>({navModel:(0,f.ht)(a.navIndex,"upgrading")}),c=(0,v.connect)(n)(x)},43714:(U,E,s)=>{s.d(E,{a:()=>v});var l=s(68404),e=s(90090);const v=({text:u="Loading..."})=>l.createElement("div",{className:"page-loader-wrapper"},l.createElement(e.u,{text:u}))}}]);

//# sourceMappingURL=2446.6ddcfc29fa4240b1a873.js.map