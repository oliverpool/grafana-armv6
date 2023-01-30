"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5981],{78014:(H,P,t)=>{t.d(P,{Z:()=>c});var e=t(68404),n=t(79230),D=t(90723),I=t(79979);class c extends e.PureComponent{render(){const{searchQuery:v,linkButton:s,setSearchQuery:O,target:h,placeholder:g="Search by name or type",sortPicker:d}=this.props,N={href:s?.href,disabled:s?.disabled};return h&&(N.target=h),e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(n.H,{value:v,onChange:O,placeholder:g})),d&&e.createElement(I.P,{onChange:d.onChange,value:d.value,getSortOptions:d.getSortOptions}),s&&e.createElement(D.Qj,{...N},s.title))}}},66040:(H,P,t)=>{t.r(P),t.d(P,{default:()=>ue});var e=t(68404),n=t(70356),D=t(31953),I=t(25e3),c=t(81168),l=t(86475),v=t(79396),s=t(52423),O=t(24699),h=t(29516),g=t(90090),d=t(77582),N=t(74509),U=t(66208);const Z=a=>({sourcesList:s.css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 12px;
    list-style: none;
    margin-bottom: 80px;
  `,card:s.css`
    height: 90px;
    padding: 0px 24px;
    margin-bottom: 0;
  `,cardContent:s.css`
    display: flex;
    align-items: center;
  `,logoWrapper:s.css`
    display: flex;
    justify-content: center;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    img {
      max-width: 100%;
      max-height: 100%;
      align-self: center;
    }
  `,label:s.css`
    color: ${a.colors.text.primary};
    margin-bottom: 0;
  `}),$=({items:a,onClickItem:u})=>{const f=(0,h.wW)(Z);return e.createElement("ul",{className:f.sourcesList},a.map(E=>e.createElement(U.Z,{key:E.id,className:f.card,href:E.url,onClick:W=>{u&&u(W,E)}},e.createElement(U.Z.Heading,null,e.createElement("div",{className:f.cardContent},E.logo&&e.createElement("div",{className:f.logoWrapper},e.createElement("img",{src:E.logo,alt:`logo of ${E.name}`})),e.createElement("h4",{className:f.label},E.name))))))};var p=t(81697);const A=a=>({categoryHeader:s.css`
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  `,categoryLabel:s.css`
    margin-bottom: 0px;
    margin-left: 8px;
  `}),K=({iconName:a,label:u})=>{const f=(0,h.wW)(A);return e.createElement("div",{className:f.categoryHeader},e.createElement(p.J,{name:a,size:"xl"}),e.createElement("h3",{className:f.categoryLabel},u))};var V=t(6694),b=t(90723);const C=a=>({modal:s.css`
    width: 500px;
  `,modalContent:s.css`
    overflow: visible;
    color: ${a.colors.text.secondary};

    a {
      color: ${a.colors.text.link};
    }
  `,description:s.css`
    margin-bottom: ${a.spacing(2)};
  `,bottomSection:s.css`
    display: flex;
    border-top: 1px solid ${a.colors.border.weak};
    padding-top: ${a.spacing(3)};
    margin-top: ${a.spacing(3)};
  `,actionsSection:s.css`
    display: flex;
    justify-content: end;
    margin-top: ${a.spacing(3)};
  `,warningIcon:s.css`
    color: ${a.colors.warning.main};
    padding-right: ${a.spacing()};
    margin-top: ${a.spacing(.25)};
  `,header:s.css`
    display: flex;
    align-items: center;
  `,headerTitle:s.css`
    margin: 0;
  `,headerLogo:s.css`
    margin-right: ${a.spacing(2)};
    width: 32px;
    height: 32px;
  `});function T({item:a,isOpen:u,onDismiss:f}){const E=(0,h.wW)(C);return e.createElement(V.u,{className:E.modal,contentClassName:E.modalContent,title:e.createElement(R,{item:a}),isOpen:u,onDismiss:f},e.createElement("div",null,e.createElement("div",null,a.description&&e.createElement("div",{className:E.description},a.description),e.createElement("div",null,"Links",e.createElement("br",null),e.createElement("a",{href:`https://grafana.com/grafana/plugins/${a.id}`,title:`${a.name} on Grafana.com`,target:"_blank",rel:"noopener noreferrer"},a.name))),e.createElement("div",{className:E.bottomSection},e.createElement("div",{className:E.warningIcon},e.createElement(p.J,{name:"exclamation-triangle"})),e.createElement("div",null,e.createElement("p",null,"Editors cannot add new connections. You may check to see if it is already configured in"," ",e.createElement("a",{href:"/connections/your-connections"},"Your Connections"),"."),e.createElement("p",null,"To add a new connection, contact your Grafana admin."))),e.createElement("div",{className:E.actionsSection},e.createElement(b.zx,{onClick:f},"Okay"))))}function R({item:a}){const u=(0,h.wW)(C);return e.createElement("div",null,e.createElement("div",{className:u.header},a.logo&&e.createElement("img",{className:u.headerLogo,src:a.logo,alt:`logo of ${a.name}`}),e.createElement("h4",{className:u.headerTitle},a.name)))}const B=()=>({noResults:s.css`
    text-align: center;
    padding: 50px 0;
    font-style: italic;
  `}),r=()=>{const a=(0,h.wW)(B);return e.createElement("p",{className:a.noResults},"No results matching your query were found.")};var i=t(25474);const o=a=>({searchContainer:s.css`
    display: flex;
    margin: 16px 0;
    justify-content: space-between;

    position: sticky;
    top: 0;
    background-color: ${a.colors.background.primary};
    z-index: 2;
    padding: ${a.spacing(2)};
    margin: 0 -${a.spacing(2)};
  `}),y=({onChange:a})=>{const u=(0,h.wW)(o);return e.createElement("div",{className:u.searchContainer},e.createElement(i.I,{onChange:a,prefix:e.createElement(p.J,{name:"search"}),placeholder:"Search all","aria-label":"Search all"}))},m=()=>({spacer:s.css`
    height: 16px;
  `,modal:s.css`
    width: 500px;
  `,modalContent:s.css`
    overflow: visible;
  `});function S(){const[a,u]=(0,e.useState)(""),[f,E]=(0,e.useState)(!1),[W,F]=(0,e.useState)(null),j=(0,h.wW)(m),k=d.Vt.hasPermission(c.AccessControlAction.DataSourcesCreate),Q=L=>{u(L.currentTarget.value.toLowerCase())},{isLoading:J,error:G,plugins:z}=(0,N.GE)({query:a,filterBy:"",filterByType:O.zV.datasource}),me=(0,e.useMemo)(()=>z.map(L=>({id:L.id,name:L.name,description:L.description,logo:L.info.logos.small,url:l.Z.DataSourcesDetails.replace(":id",L.id)})),[z]),ge=(L,he)=>{k||(L.preventDefault(),L.stopPropagation(),pe(he))},pe=L=>{E(!0),F(L)},Ee=()=>{E(!1),F(null)},ve=(0,e.useMemo)(()=>!J&&!G&&z.length<1,[J,G,z]);return e.createElement(e.Fragment,null,W&&e.createElement(T,{item:W,isOpen:f,onDismiss:Ee}),e.createElement(y,{onChange:Q}),e.createElement("div",{className:j.spacer}),e.createElement(K,{iconName:"database",label:"Data sources"}),J?e.createElement(g.u,{text:"Loading..."}):G?e.createElement("p",null,"Error: ",G.message):e.createElement($,{items:me,onClickItem:ge}),ve&&e.createElement(r,null))}function x(){return e.createElement(v.T,{navId:"connections-connect-data"},e.createElement(v.T.Contents,null,e.createElement(S,null)))}var M=t(2323),q=t(68884),_=t(43795);function ee(){const a="standalone-plugin-page-/connections/connect-data",{id:u}=(0,n.UO)(),f=(0,c.useSelector)(F=>F.navIndex),W=Boolean(f[a])?a:"connections-connect-data";return e.createElement(_.Q,{pluginId:u,navId:W,notFoundComponent:e.createElement(te,null),notFoundNavModel:{text:"Unknown datasource",subTitle:"No datasource with this ID could be found.",active:!0}})}function te(){const{id:a}=(0,n.UO)();return e.createElement(M.b,{severity:c.AppNotificationSeverity.Warning,title:""},"Maybe you mistyped the URL or the plugin with the id ",e.createElement(q.C,{text:a,color:"orange"})," is unavailable.",e.createElement("br",null),"To see a list of available datasources please ",e.createElement("a",{href:l.Z.ConnectData},"click here"),".")}var ae=t(93003),ne=t(19703),se=t(81955);function X(){const a=ae.v.featureToggles.topnav?e.createElement(ne.G,null):void 0;return e.createElement(v.T,{navId:"connections-your-connections-datasources",actions:a},e.createElement(v.T.Contents,null,e.createElement(se.c,null)))}var oe=t(81960),Y=t(24231);function w(a){const{uid:u}=(0,n.UO)(),f=(0,n.TH)(),E=(0,Y.wl)(u),W=(0,N.bJ)(E.type),F=new URLSearchParams(f.search),j=(0,Y.MF)(u,a||F.get("page"));return{navId:"connections-your-connections-datasources",pageNav:{...j.main,text:E.name,subTitle:`Type: ${W?.name}`,active:!0,children:(j.main.children||[]).map(Q=>({...Q,url:Q.url?.replace("datasources/edit/","/connections/your-connections/datasources/edit/")}))}}}function re(){const{uid:a}=(0,n.UO)(),{navId:u,pageNav:f}=w("dashboards");return e.createElement(v.T,{navId:u,pageNav:f},e.createElement(v.T.Contents,null,e.createElement(oe.Z,{uid:a})))}var ce=t(19870);function le(){const{uid:a}=(0,n.UO)(),u=(0,n.TH)(),E=new URLSearchParams(u.search).get("page"),{navId:W,pageNav:F}=w();return e.createElement(v.T,{navId:W,pageNav:F},e.createElement(v.T.Contents,null,e.createElement(ce.H,{uid:a,pageId:E})))}var ie=t(86218);function de(){return e.createElement(v.T,{navId:"connections-your-connections-datasources",pageNav:{text:"Add data source",subTitle:"Choose a data source type",active:!0}},e.createElement(v.T.Contents,null,e.createElement(ie.x,null)))}function ue(){const a=(0,c.useSelector)(f=>f.navIndex),u=Boolean(a["standalone-plugin-page-/connections/connect-data"]);return e.createElement(I.Vj.Provider,{value:{New:l.Z.DataSourcesNew,List:l.Z.DataSources,Edit:l.Z.DataSourcesEdit,Dashboards:l.Z.DataSourcesDashboards}},e.createElement(n.rs,null,e.createElement(n.AW,{exact:!0,path:l.Z.Base,component:()=>e.createElement(n.l_,{to:l.Z.ConnectData})}),e.createElement(n.AW,{exact:!0,path:l.Z.YourConnections,component:()=>e.createElement(D.G,{navId:"connections-your-connections"})}),e.createElement(n.AW,{exact:!0,path:l.Z.DataSources,component:X}),e.createElement(n.AW,{exact:!0,path:l.Z.DataSourcesDetails,component:ee}),e.createElement(n.AW,{exact:!0,path:l.Z.DataSourcesNew,component:de}),e.createElement(n.AW,{exact:!0,path:l.Z.DataSourcesEdit,component:le}),e.createElement(n.AW,{exact:!0,path:l.Z.DataSourcesDashboards,component:re}),!u&&e.createElement(n.AW,{path:l.Z.ConnectData,component:x}),e.createElement(n.AW,{component:X})))}},19703:(H,P,t)=>{t.d(P,{G:()=>v});var e=t(68404),n=t(93003),D=t(90723),I=t(77582),c=t(81168),l=t(25e3);function v(){const s=I.Vt.hasPermission(c.AccessControlAction.DataSourcesCreate),O=(0,l.d7)();return s?e.createElement(D.Qj,{icon:"plus",href:n.v.appSubUrl+O.New},"Add new data source"):null}},81960:(H,P,t)=>{t.d(P,{Z:()=>s});var e=t(68404),n=t(2555),D=t(86977),I=t(85805),c=t(81168),l=t(27786),v=t(25e3);function s({uid:h}){(0,v.wi)(h);const g=(0,c.useDispatch)(),d=(0,c.useSelector)(p=>p.dataSources.dataSource),N=(0,c.useSelector)(p=>p.plugins.dashboards),U=(0,c.useSelector)(p=>p.plugins.isLoadingPluginDashboards);(0,e.useEffect)(()=>{d.id>0&&g((0,I.m3)())},[g,d]);const Z=(p,A)=>{g((0,D.$j)({pluginId:p.pluginId,path:p.path,overwrite:A,inputs:[{name:"*",type:"datasource",pluginId:d.type,value:d.name}]},p.title))},$=({uid:p})=>{g((0,D.fG)(p))};return e.createElement(O,{dashboards:N,isLoading:U,onImportDashboard:Z,onRemoveDashboard:$})}const O=({isLoading:h,dashboards:g,onImportDashboard:d,onRemoveDashboard:N})=>h?e.createElement(n.Z,null):e.createElement(l.Z,{dashboards:g,onImport:d,onRemove:N})},81955:(H,P,t)=>{t.d(P,{c:()=>K});var e=t(52423),n=t(68404),D=t(93003),I=t(29516),c=t(66208),l=t(3349),v=t(90723),s=t(69142),O=t(2555),h=t(77582),g=t(81168),d=t(25e3),N=t(85597),U=t(78014);const Z="alpha-asc",$="alpha-desc",p=[{label:"Sort by A\u2013Z",value:Z},{label:"Sort by Z\u2013A",value:$}];function A(){const C=(0,g.useDispatch)(),T=(0,n.useCallback)(x=>C((0,d.zT)(x)),[C]),R=(0,g.useSelector)(({dataSources:x})=>(0,d.IO)(x)),B=h.Vt.hasPermission(g.AccessControlAction.DataSourcesCreate),r=(0,d.d7)(),o=!D.v.featureToggles.topnav&&B?{href:r.New,title:"Add new data source"}:void 0,y=(0,n.useCallback)(x=>C((0,d.Nu)(x.value===Z)),[C]),m=(0,g.useSelector)(({dataSources:x})=>(0,d.IA)(x)),S={onChange:y,value:m?Z:$,getSortOptions:()=>Promise.resolve(p)};return n.createElement(U.Z,{searchQuery:R,setSearchQuery:T,key:"action-bar",sortPicker:S,linkButton:o})}function K(){(0,d.zJ)();const C=(0,g.useSelector)(o=>(0,d.mt)(o.dataSources)),T=(0,g.useSelector)(({dataSources:o})=>(0,d.r7)(o)),R=(0,g.useSelector)(({dataSources:o})=>o.hasFetched),B=h.Vt.hasPermission(g.AccessControlAction.DataSourcesCreate),r=h.Vt.hasPermission(g.AccessControlAction.DataSourcesWrite),i=h.Vt.hasPermission(g.AccessControlAction.DataSourcesExplore);return n.createElement(V,{dataSources:C,dataSourcesCount:T,isLoading:!R,hasCreateRights:B,hasWriteRights:r,hasExploreRights:i})}function V({dataSources:C,dataSourcesCount:T,isLoading:R,hasCreateRights:B,hasWriteRights:r,hasExploreRights:i}){const o=(0,I.wW)(b),y=(0,d.d7)();return R?n.createElement(O.Z,null):T===0?n.createElement(s.Z,{buttonDisabled:!B,title:"No data sources defined",buttonIcon:"database",buttonLink:y.New,buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"}):n.createElement(n.Fragment,null,n.createElement(A,null),n.createElement("ul",{className:o.list},C.map(m=>{const S=D.v.appSubUrl+y.Edit.replace(/:uid/gi,m.uid);return n.createElement("li",{key:m.uid},n.createElement(c.Z,{href:r?S:void 0},n.createElement(c.Z.Heading,null,m.name),n.createElement(c.Z.Figure,null,n.createElement("img",{src:m.typeLogoUrl,alt:"",height:"40px",width:"40px",className:o.logo})),n.createElement(c.Z.Meta,null,[m.typeName,m.url,m.isDefault&&n.createElement(l.V,{key:"default-tag",name:"default",colorIndex:1})]),n.createElement(c.Z.Tags,null,n.createElement(v.Qj,{icon:"apps",fill:"outline",variant:"secondary",href:`dashboard/new-with-ds/${m.uid}`},"Build a dashboard"),i&&n.createElement(v.Qj,{icon:"compass",fill:"outline",variant:"secondary",className:o.button,href:(0,N.iU)(m)},"Explore"))))})))}const b=C=>({list:(0,e.css)({listStyle:"none",display:"grid"}),logo:(0,e.css)({objectFit:"contain"}),button:(0,e.css)({marginLeft:C.spacing(2)})})},86218:(H,P,t)=>{t.d(P,{x:()=>R});var e=t(68404),n=t(79230),D=t(90723),I=t(2555),c=t(52423),l=t(24699),v=t(68183),s=t(29516),O=t(68698),h=t(15031),g=t(90701),d=t(80914),N=t(74509);function U(){const r=(0,N.UQ)(),{isLoading:i}=(0,N.ZV)(),o=(0,s.wW)($);return i||r.length===0?null:e.createElement(O.v,{"aria-label":v.wl.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/"},e.createElement("div",null,e.createElement("p",null,"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."),"The following plugins are disabled and not shown in the list below:",e.createElement(h.a,{items:r,className:o.list,renderItem:y=>e.createElement("div",{className:o.wrapper},e.createElement(g.Lh,{spacing:"sm",justify:"flex-start",align:"center"},e.createElement("strong",null,y.pluginId),e.createElement(d.o,{status:Z(y.errorCode),className:o.badge})))})))}function Z(r){switch(r){case l.w2.invalidSignature:return l.Xy.invalid;case l.w2.missingSignature:return l.Xy.missing;case l.w2.modifiedSignature:return l.Xy.modified;default:return l.Xy.missing}}function $(r){return{list:(0,c.css)({listStyleType:"circle"}),wrapper:(0,c.css)({marginTop:r.spacing(1)}),badge:(0,c.css)({marginTop:0})}}var p=t(81168),A=t(66208);function K({onClick:r,dataSourcePlugin:i}){const o=i.module==="phantom",y=!o&&!i.unlicensed,m=i.info?.links?.length>0?i.info.links[0]:null,S=(0,s.wW)(V);return e.createElement(A.Z,{className:(0,c.cx)(S.card,"card-parent"),onClick:y?r:()=>{}},e.createElement(A.Z.Heading,{className:S.heading,"aria-label":v.wl.pages.AddDataSource.dataSourcePluginsV2(i.name)},i.name),e.createElement(A.Z.Figure,{align:"center",className:S.figure},e.createElement("img",{className:S.logo,src:i.info.logos.small,alt:""})),e.createElement(A.Z.Description,{className:S.description},i.info.description),!o&&e.createElement(A.Z.Meta,{className:S.meta},e.createElement(d.o,{status:i.signature})),e.createElement(A.Z.Actions,{className:S.actions},m&&e.createElement(D.Qj,{"aria-label":`${i.name}, learn more.`,href:`${m.url}?utm_source=grafana_add_ds`,icon:"external-link-alt",onClick:x=>x.stopPropagation(),rel:"noopener",target:"_blank",variant:"secondary"},m.name)))}function V(r){return{heading:(0,c.css)({fontSize:r.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:r.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:r.typography.size.sm}),actions:(0,c.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,c.css)({gridTemplateAreas:`
        "Figure   Heading   Actions"
        "Figure Description Actions"
        "Figure    Meta     Actions"
        "Figure     -       Actions"`}),logo:(0,c.css)({marginRight:r.v1.spacing.lg,marginLeft:r.v1.spacing.sm,width:r.spacing(7),maxHeight:r.spacing(7)})}}function b({dataSourcePlugins:r,onClickDataSourceType:i}){return!r||!r.length?null:e.createElement(h.a,{items:r,getItemKey:o=>o.id.toString(),renderItem:o=>e.createElement(K,{dataSourcePlugin:o,onClick:()=>i(o)}),className:c.css`
        > li {
          margin-bottom: 2px;
        }
      `})}function C({categories:r,onClickDataSourceType:i}){return e.createElement(e.Fragment,null,r.map(({id:o,title:y,plugins:m})=>e.createElement("div",{className:"add-data-source-category",key:o},e.createElement("div",{className:"add-data-source-category__header",id:o},y),e.createElement(b,{dataSourcePlugins:m,onClickDataSourceType:i}))),e.createElement("div",{className:"add-data-source-more"},e.createElement(D.Qj,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener"},"Find more data source plugins on grafana.com")))}var T=t(25e3);function R(){(0,T.OU)();const r=(0,p.useDispatch)(),i=(0,p.useSelector)(M=>(0,T.I5)(M.dataSources)),o=(0,p.useSelector)(M=>M.dataSources.dataSourceTypeSearchQuery),y=(0,p.useSelector)(M=>M.dataSources.isLoadingDataSources),m=(0,p.useSelector)(M=>M.dataSources.categories),S=(0,T.nH)(),x=M=>r((0,T.Ht)(M));return e.createElement(B,{dataSources:i,dataSourceCategories:m,searchQuery:o,isLoading:y,onAddDataSource:S,onSetSearchQuery:x})}function B({dataSources:r,dataSourceCategories:i,searchQuery:o,isLoading:y,onAddDataSource:m,onSetSearchQuery:S}){const x=(0,T.d7)();return y?e.createElement(I.Z,null):e.createElement(e.Fragment,null,e.createElement("div",{className:"page-action-bar"},e.createElement(n.H,{value:o,onChange:S,placeholder:"Filter by name or type"}),e.createElement("div",{className:"page-action-bar__spacer"}),e.createElement(D.Qj,{href:x.List,fill:"outline",variant:"secondary",icon:"arrow-left"},"Cancel")),!o&&e.createElement(U,null),e.createElement("div",null,o&&e.createElement(b,{dataSourcePlugins:r,onClickDataSourceType:m}),!o&&e.createElement(C,{categories:i,onClickDataSourceType:m})))}}}]);

//# sourceMappingURL=Connections.fccb1c9e928931d75ab4.js.map