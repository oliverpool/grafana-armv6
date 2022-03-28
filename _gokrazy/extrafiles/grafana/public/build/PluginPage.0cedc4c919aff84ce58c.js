"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2417],{"./public/app/features/datasources/DashboardsTable.tsx":(e,n,a)=>{a.d(n,{Z:()=>i});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var t,s=a("./packages/grafana-ui/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{dashboards:n,onImport:a,onRemove:i}=e;function o(e){return e.revision!==e.importedRevision?"Update":"Re-import"}return(0,r.jsx)("table",{className:"filter-table",children:(0,r.jsx)("tbody",{children:n.map(((e,n)=>(0,r.jsxs)("tr",{children:[t||(t=(0,r.jsx)("td",{className:"width-1",children:(0,r.jsx)(s.Icon,{name:"apps"})})),(0,r.jsx)("td",{children:e.imported?(0,r.jsx)("a",{href:e.importedUrl,children:e.title}):(0,r.jsx)("span",{children:e.title})}),(0,r.jsxs)("td",{style:{textAlign:"right"},children:[e.imported?(0,r.jsx)(s.Button,{variant:"secondary",size:"sm",onClick:()=>a(e,!0),children:o(e)}):(0,r.jsx)(s.Button,{variant:"secondary",size:"sm",onClick:()=>a(e,!1),children:"Import"}),e.imported&&(0,r.jsx)(s.Button,{icon:"trash-alt",variant:"destructive",size:"sm",onClick:()=>i(e)})]})]},`${e.dashboardId}-${n}`)))})})}},"./public/app/features/plugins/admin/components/Badges/index.ts":(e,n,a)=>{a.d(n,{SX:()=>i,IF:()=>p,oZ:()=>c,xh:()=>g});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var t=a("./packages/grafana-data/src/index.ts"),s=a("./packages/grafana-ui/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function i(e){let{error:n}=e;const a=function(e){switch(e){case t.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case t.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case t.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(n);return(0,r.jsx)(s.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:a})}var o=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const l=e=>o.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,s.useStyles2)(l);return(0,r.jsx)(s.Badge,{text:"Installed",color:"orange",className:e})}var d,u=a("./packages/grafana-runtime/src/index.ts");function p(e){let{plugin:n}=e;const a=(0,s.useStyles2)(l);return(0,u.featureEnabled)("enterprise.plugins")?d||(d=(0,r.jsx)(s.Badge,{text:"Enterprise",color:"blue"})):(0,r.jsxs)(s.HorizontalGroup,{children:[(0,r.jsx)(s.PluginSignatureBadge,{status:n.signature}),(0,r.jsx)(s.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:a}),(0,r.jsx)(s.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:e=>{e.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${n.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function g(e){let{plugin:n}=e;const a=(0,s.useStyles2)(h);return n.hasUpdate&&!n.isCore&&n.type!==t.PluginType.renderer?(0,r.jsx)("p",{className:a.hasUpdate,children:"Update available!"}):null}const h=e=>({hasUpdate:o.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(e,n,a)=>{a.d(n,{a:()=>i});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var t=a("./packages/grafana-ui/src/index.ts"),s=a("./public/app/features/plugins/admin/components/Page.tsx"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{text:n="Loading..."}=e;return(0,r.jsx)(s.T,{children:(0,r.jsx)("div",{className:"page-loader-wrapper",children:(0,r.jsx)(t.LoadingPlaceholder,{text:n})})})}},"./public/app/features/plugins/admin/components/Page.tsx":(e,n,a)=>{a.d(n,{T:()=>i});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var t=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=a("./packages/grafana-ui/src/index.ts"),r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{children:n}=e;const a=(0,s.useStyles2)(o);return(0,r.jsx)("div",{className:"page-container",children:(0,r.jsx)("div",{className:a,children:n})})},o=e=>t.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,n,a)=>{a.d(n,{E:()=>s});a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var t=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function s(e){let{alt:n,className:a,src:s,height:r}=e;return(0,t.jsx)("img",{src:s,className:a,alt:n,loading:"lazy",height:r})}},"./public/app/features/plugins/admin/pages/PluginDetails.tsx":(e,n,a)=>{a.r(n),a.d(n,{default:()=>De,getStyles:()=>Ee});var t,s,r=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=a("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js"),l=a("./packages/grafana-ui/src/index.ts"),c=a("./packages/grafana-runtime/src/index.ts"),d=a("./packages/grafana-ui/src/components/Layout/Layout.tsx"),u=a("./public/app/core/components/Page/Page.tsx"),p=a("./packages/grafana-e2e-selectors/src/index.ts"),g=a("./packages/grafana-data/src/index.ts"),h=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function m(e){let{className:n,plugin:a}=e;const r=a.signature===g.PluginSignatureStatus.valid,i=a.signature===g.PluginSignatureStatus.internal,o=a.isDisabled&&function(e){switch(e){case g.PluginErrorCode.invalidSignature:case g.PluginErrorCode.missingSignature:case g.PluginErrorCode.modifiedSignature:return!0;default:return!1}}(a.error);return r||i||o?null:(0,h.jsxs)(l.Alert,{severity:"warning",title:"Invalid plugin signature","aria-label":p.wl.pages.PluginPage.signatureInfo,className:n,children:[t||(t=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can’t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."})),s||(s=(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about plugins signing."}))]})}var f=a("./public/app/features/plugins/admin/helpers.ts"),x=a("./public/app/features/plugins/admin/types.ts");function b(e){let{pluginId:n,pluginStatus:a}=e;const t=`${(0,f.Uj)(n)}/?tab=installation`;return a===x.vF.UPDATE?(0,h.jsxs)(l.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(l.LinkButton,{href:t,target:"_blank",rel:"noopener noreferrer",children:"Update via grafana.com"}),(0,h.jsx)(l.LinkButton,{variant:"destructive",href:t,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"})]}):a===x.vF.UNINSTALL?(0,h.jsx)(l.LinkButton,{variant:"destructive",href:t,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"}):(0,h.jsx)(l.LinkButton,{href:t,target:"_blank",rel:"noopener noreferrer",children:"Install via grafana.com"})}var v=a("./public/app/core/app_events.ts"),y=a("./public/app/features/plugins/admin/state/hooks.ts");function j(e){var n;let{plugin:a,pluginStatus:t,latestCompatibleVersion:s}=e;const{isInstalling:i,error:o}=(0,y.IS)(),{isUninstalling:c,error:d}=(0,y.wq)(),u=(0,y.x3)(),p=(0,y.S1)(),[m,f]=(0,r.useState)(!1),b=()=>f(!0),j=()=>f(!1),S=c?"Uninstalling":"Uninstall",P=async()=>{j(),await p(a.id),d||v.Z.emit(g.AppEvents.alertSuccess,[`Uninstalled ${a.name}`])},N=async()=>{await u(a.id,null==s?void 0:s.version,!0),o||v.Z.emit(g.AppEvents.alertSuccess,[`Updated ${a.name}`])};return t===x.vF.UNINSTALL?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.ConfirmModal,{isOpen:m,title:`Uninstall ${a.name}`,body:"Are you sure you want to uninstall this plugin?",confirmText:"Confirm",icon:"exclamation-triangle",onConfirm:P,onDismiss:j}),(0,h.jsx)(l.HorizontalGroup,{height:"auto",children:(0,h.jsx)(l.Button,{variant:"destructive",disabled:c,onClick:b,children:S})})]}):t===x.vF.UPDATE?(0,h.jsxs)(l.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(l.Button,{disabled:i,onClick:N,children:i?"Updating":"Update"}),n||(n=(0,h.jsx)(l.Button,{variant:"destructive",disabled:c,onClick:P,children:S}))]}):(0,h.jsx)(l.Button,{disabled:i,onClick:async()=>{await u(a.id,null==s?void 0:s.version),o||v.Z.emit(g.AppEvents.alertSuccess,[`Installed ${a.name}`])},children:i?"Installing":"Install"})}var S,P,N,k=a("./public/app/features/plugins/admin/permissions.ts");const _=e=>{let{plugin:n,latestCompatibleVersion:a}=e;const t=(0,l.useStyles2)(w),s=c.config.pluginAdminExternalManageEnabled,r=(0,k.bO)(),i=(0,y.y9)(),o=Boolean(a),d=n.isCore||n.isDisabled||!(0,f.fG)(),u=n.isInstalled?n.hasUpdate?x.vF.UPDATE:x.vF.UNINSTALL:x.vF.INSTALL;if(d)return null;if(n.type===g.PluginType.renderer)return(0,h.jsx)("div",{className:t.message,children:"Renderer plugins cannot be managed by the Plugin Catalog."});if(n.isEnterprise&&!(0,c.featureEnabled)("enterprise.plugins"))return(0,h.jsxs)(l.HorizontalGroup,{height:"auto",align:"center",children:[(0,h.jsx)("span",{className:t.message,children:"No valid Grafana Enterprise license detected."}),(0,h.jsx)(l.LinkButton,{href:`${(0,f.Uj)(n.id)}?utm_source=grafana_catalog_learn_more`,target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt",children:"Learn more"})]});if(n.isDev)return(0,h.jsx)("div",{className:t.message,children:"This is a development build of the plugin and can't be uninstalled."});if(!r&&!s){const e=`You do not have permission to ${u} this plugin.`;return(0,h.jsx)("div",{className:t.message,children:e})}return n.isPublished?o?s?(0,h.jsx)(b,{pluginId:n.id,pluginStatus:u}):i?(0,h.jsx)(j,{plugin:n,pluginStatus:u,latestCompatibleVersion:a}):(0,h.jsx)("div",{className:t.message,children:"The install controls have been disabled because the Grafana server cannot access grafana.com."}):(0,h.jsxs)("div",{className:t.message,children:[N||(N=(0,h.jsx)(l.Icon,{name:"exclamation-triangle"}))," This plugin doesn't support your version of Grafana."]}):(0,h.jsxs)("div",{className:t.message,children:[S||(S=(0,h.jsx)(l.Icon,{name:"exclamation-triangle"}))," This plugin is not published to"," ",P||(P=(0,h.jsx)("a",{href:"https://www.grafana.com/plugins",target:"__blank",rel:"noreferrer",children:"grafana.com/plugins"}))," ","and can't be managed via the catalog."]})},w=e=>({message:i.css`
      color: ${e.colors.text.secondary};
    `});var I=a("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const C={[g.PluginSignatureType.grafana]:"grafana",[g.PluginSignatureType.commercial]:"shield",[g.PluginSignatureType.community]:"shield",DEFAULT:"shield-exclamation"};function $(e){let{signatureType:n,signatureOrg:a=""}=e;const t=(0,l.useStyles2)(E);if(!n&&!a)return null;const s=n===g.PluginSignatureType.grafana?"Grafana Labs":(0,I.capitalize)(n),r=C[n||""]||C.DEFAULT;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(D,{children:[(0,h.jsx)("strong",{className:t.strong,children:"Level: "}),(0,h.jsx)(l.Icon,{size:"xs",name:r})," ",s]}),(0,h.jsxs)(D,{children:[(0,h.jsx)("strong",{className:t.strong,children:"Signed by:"})," ",a]})]})}const D=e=>{let{children:n}=e;const a=(0,l.useStyles2)(E);return(0,h.jsx)(l.Badge,{color:"green",className:a.badge,text:(0,h.jsx)(h.Fragment,{children:n})})},E=e=>({badge:i.css`
    background-color: ${e.colors.background.canvas};
    border-color: ${e.colors.border.strong};
    color: ${e.colors.text.secondary};
    margin-left: ${e.spacing()};
  `,strong:i.css`
    color: ${e.colors.text.primary};
  `,icon:i.css`
    margin-right: ${e.spacing(.5)};
  `});function T(e){let{plugin:n}=e;const a=(0,l.useStyles2)(z),t=n.signature===g.PluginSignatureStatus.valid;return(0,h.jsxs)("div",{className:a.container,children:[(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",target:"_blank",rel:"noreferrer",className:a.link,children:(0,h.jsx)(l.PluginSignatureBadge,{status:n.signature})}),t&&(0,h.jsx)($,{signatureType:n.signatureType,signatureOrg:n.signatureOrg})]})}const z=e=>({container:i.css`
      display: flex;
    `,link:i.css`
      display: inline-flex;
      align-items: center;
    `});function U(e){var n,a,t;let{plugin:s,latestCompatibleVersion:r,className:i}=e;const o=(0,l.useStyles2)(B),c=null===(n=s.details)||void 0===n?void 0:n.pluginDependencies,d=s.isInstalled?null===(a=s.details)||void 0===a?void 0:a.grafanaDependency:(null==r?void 0:r.grafanaDependency)||(null===(t=s.details)||void 0===t?void 0:t.grafanaDependency);return!(d||c&&c.length)?null:(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("div",{className:o.dependencyTitle,children:"Dependencies:"}),Boolean(d)&&(0,h.jsxs)("div",{children:[(0,h.jsx)(l.Icon,{name:"grafana",className:o.icon}),"Grafana ",d]}),c&&c.length>0&&(0,h.jsx)("div",{children:c.map((e=>(0,h.jsxs)("span",{children:[(0,h.jsx)(l.Icon,{name:x.Co[e.type],className:o.icon}),e.name," ",e.version]},e.name)))})]})}const B=e=>({dependencyTitle:i.css`
      font-weight: ${e.typography.fontWeightBold};
      margin-right: ${e.spacing(.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,icon:i.css`
      color: ${e.colors.text.secondary};
      margin-right: ${e.spacing(.5)};
    `});var L=a("./public/app/features/plugins/admin/components/PluginLogo.tsx"),A=a("./public/app/features/plugins/admin/components/Badges/index.ts"),V=a("./public/app/features/datasources/state/actions.ts"),R=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");function O(e){let{plugin:n}=e;const a=(0,R.useDispatch)(),t=(0,r.useCallback)((()=>{const e={name:n.name,id:n.id};a((0,V.J_)(e))}),[a,n]);return(0,k.Gg)()?(0,h.jsxs)(l.Button,{variant:"primary",onClick:t,children:["Create a ",n.name," data source"]}):null}var W=a("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),G=a("./public/app/features/plugins/pluginSettings.ts"),F=a("./public/app/features/plugins/plugin_loader.ts"),H=a("./public/app/features/plugins/importPanelPlugin.ts");const Z=e=>(0,W.Z)((async()=>e&&e.isInstalled&&!e.isDisabled?async function(e){const n=await(0,G.a)(e);let a;n.type===g.PluginType.app&&(a=await(0,F.Av)(n)),n.type===g.PluginType.datasource&&(a=await(0,F.nL)(n)),n.type===g.PluginType.panel&&(a=await(0,H._)(n));if(n.type===g.PluginType.renderer&&(a={meta:n}),!a)throw new Error("Unknown Plugin type: "+n.type);return a}(e.id):null),[null==e?void 0:e.id,null==e?void 0:e.isInstalled,null==e?void 0:e.isDisabled]);var q=a("./public/app/features/plugins/admin/api.ts");function M(e){let{plugin:n}=e;const{value:a}=Z(n);if(!a)return null;const{enabled:t,jsonData:s}=null==a?void 0:a.meta;return(0,h.jsxs)(h.Fragment,{children:[!t&&(0,h.jsx)(l.Button,{variant:"primary",onClick:()=>Q(n.id,{enabled:!0,pinned:!0,jsonData:s}),children:"Enable"}),t&&(0,h.jsx)(l.Button,{variant:"destructive",onClick:()=>{Q(n.id,{enabled:!1,pinned:!1,jsonData:s})},children:"Disable"})]})}const Q=async(e,n)=>{try{await(0,q.P6)(e,n),window.location.reload()}catch(e){console.error("Error while updating the plugin",e)}};function J(e){let{plugin:n}=e;if(!n.isInstalled||n.isDisabled)return null;switch(n.type){case g.PluginType.datasource:return(0,h.jsx)(O,{plugin:n});case g.PluginType.app:return(0,h.jsx)(M,{plugin:n});default:return null}}var X;function Y(e){var n,a;let{plugin:t,currentUrl:s,parentUrl:r}=e;const o=(0,l.useStyles2)(K),c=(0,f.RU)(null===(n=t.details)||void 0===n?void 0:n.versions),d=t.installedVersion||(null==c?void 0:c.version);return(0,h.jsxs)("div",{className:o.headerContainer,children:[(0,h.jsx)(L.E,{alt:`${t.name} logo`,src:t.info.logos.small,className:i.css`
          object-fit: contain;
          width: 100%;
          height: 68px;
          max-width: 68px;
        `}),(0,h.jsxs)("div",{className:o.headerWrapper,children:[(0,h.jsx)("nav",{className:o.breadcrumb,"aria-label":"Breadcrumb",children:(0,h.jsxs)("ol",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{className:o.textUnderline,href:r,children:"Plugins"})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:s,"aria-current":"page",children:t.name})})]})}),(0,h.jsxs)("div",{className:o.headerInformationRow,children:[(0,h.jsx)("span",{children:t.orgName}),null===(a=t.details)||void 0===a?void 0:a.links.map((e=>(0,h.jsx)("a",{href:e.url,children:e.name},e.name))),t.downloads>0&&(0,h.jsxs)("span",{children:[X||(X=(0,h.jsx)(l.Icon,{name:"cloud-download"})),` ${(new Intl.NumberFormat).format(t.downloads)}`," "]}),Boolean(d)&&(0,h.jsx)("span",{children:d}),(0,h.jsx)(T,{plugin:t}),t.isDisabled&&(0,h.jsx)(A.SX,{error:t.error})]}),(0,h.jsx)(U,{plugin:t,latestCompatibleVersion:c,className:(0,i.cx)(o.headerInformationRow,o.headerInformationRowSecondary)}),(0,h.jsx)("p",{children:t.description}),(0,h.jsxs)(l.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(_,{plugin:t,latestCompatibleVersion:c}),(0,h.jsx)(J,{plugin:t})]})]})]})}const K=e=>({headerContainer:i.css`
      display: flex;
      margin-bottom: ${e.spacing(3)};
      margin-top: ${e.spacing(3)};
      min-height: 120px;
    `,headerWrapper:i.css`
      margin-left: ${e.spacing(3)};
    `,breadcrumb:i.css`
      font-size: ${e.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,headerInformationRow:i.css`
      display: flex;
      align-items: center;
      margin-top: ${e.spacing()};
      margin-bottom: ${e.spacing()};
      flex-flow: wrap;
      & > * {
        &::after {
          content: '|';
          padding: 0 ${e.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${e.typography.h4.fontSize};
    `,headerInformationRowSecondary:i.css`
      font-size: ${e.typography.body.fontSize};
    `,headerOrgName:i.css`
      font-size: ${e.typography.h4.fontSize};
    `,signature:i.css`
      margin: ${e.spacing(3)};
      margin-bottom: 0;
    `,textUnderline:i.css`
      text-decoration: underline;
    `});var ee,ne;const ae=e=>{let{versions:n=[],installedVersion:a}=e;const t=(0,l.useStyles2)(te),s=(0,f.RU)(n);return 0===n.length?ee||(ee=(0,h.jsx)("p",{children:"No version history was found."})):(0,h.jsxs)("table",{className:t.table,children:[ne||(ne=(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Version"}),(0,h.jsx)("th",{children:"Last updated"})]})})),(0,h.jsx)("tbody",{children:n.map((e=>{const n=a===e.version;return(0,h.jsxs)("tr",{children:[n?(0,h.jsxs)("td",{className:t.currentVersion,children:[e.version," (installed version)"]}):e.version===(null==s?void 0:s.version)?(0,h.jsxs)("td",{children:[e.version," (latest compatible version)"]}):(0,h.jsx)("td",{children:e.version}),(0,h.jsx)("td",{className:n?t.currentVersion:"",children:(0,g.dateTimeFormatTimeAgo)(e.createdAt)})]},e.version)}))})]})},te=e=>({container:i.css`
    padding: ${e.spacing(2,4,3)};
  `,table:i.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `,currentVersion:i.css`
    font-weight: ${e.typography.fontWeightBold};
  `});var se,re;function ie(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}class oe extends r.PureComponent{constructor(e){super(e),ie(this,"element",null),ie(this,"model",void 0),ie(this,"preUpdateHook",(()=>Promise.resolve())),ie(this,"postUpdateHook",(()=>Promise.resolve())),ie(this,"update",(()=>{const e=this.model.id;this.preUpdateHook().then((()=>{const n=(0,I.extend)({enabled:this.model.enabled,pinned:this.model.pinned,jsonData:this.model.jsonData,secureJsonData:this.model.secureJsonData},{});return(0,c.getBackendSrv)().post(`/api/plugins/${e}/settings`,n)})).then(this.postUpdateHook).then((e=>{window.location.href=window.location.href}))})),ie(this,"setPreUpdateHook",(e=>{this.preUpdateHook=e})),ie(this,"setPostUpdateHook",(e=>{this.postUpdateHook=e})),ie(this,"importDashboards",(()=>((0,g.deprecationWarning)("AppConfig","importDashboards()"),Promise.resolve()))),ie(this,"enable",(()=>{this.model.enabled=!0,this.model.pinned=!0,this.update()})),ie(this,"disable",(()=>{this.model.enabled=!1,this.model.pinned=!1,this.update()})),this.state={angularCtrl:null,refresh:0}}componentDidMount(){setTimeout((()=>{this.setState({refresh:this.state.refresh+1})}),5)}componentDidUpdate(e){if(!this.element||this.state.angularCtrl)return;this.model=(0,I.cloneDeep)(this.props.app.meta);const n={ctrl:this,isAppConfigCtrl:!0},a=(0,c.getAngularLoader)().load(this.element,n,'<plugin-component type="app-config-ctrl"></plugin-component>');this.setState({angularCtrl:a})}render(){const e=this.model,n=(0,i.css)({marginRight:"8px"});return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{ref:e=>this.element=e}),se||(se=(0,h.jsx)("br",{})),re||(re=(0,h.jsx)("br",{})),e&&(0,h.jsxs)("div",{className:"gf-form",children:[!e.enabled&&(0,h.jsx)(l.Button,{variant:"primary",onClick:this.enable,className:n,children:"Enable"}),e.enabled&&(0,h.jsx)(l.Button,{variant:"primary",onClick:this.update,className:n,children:"Update"}),e.enabled&&(0,h.jsx)(l.Button,{variant:"destructive",onClick:this.disable,className:n,children:"Disable"})]})]})}}var le,ce,de,ue=a("./public/app/core/core.ts"),pe=a("./public/app/features/datasources/DashboardsTable.tsx");function ge(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}class he extends r.PureComponent{constructor(e){super(e),ge(this,"importAll",(()=>{this.importNext(0)})),ge(this,"importNext",(e=>{const{dashboards:n}=this.state;return this.import(n[e],!0).then((()=>e+1<n.length?new Promise((n=>{setTimeout((()=>{this.importNext(e+1).then((()=>{n()}))}),500)})):Promise.resolve()))})),ge(this,"import",((e,n)=>{const{plugin:a,datasource:t}=this.props,s={pluginId:a.id,path:e.path,overwrite:n,inputs:[]};return t&&s.inputs.push({name:"*",type:"datasource",pluginId:t.meta.id,value:t.name}),(0,c.getBackendSrv)().post("/api/dashboards/import",s).then((n=>{ue.h$.emit(g.AppEvents.alertSuccess,["Dashboard Imported",e.title]),(0,I.extend)(e,n),this.setState({dashboards:[...this.state.dashboards]})}))})),ge(this,"remove",(e=>{(0,c.getBackendSrv)().delete("/api/dashboards/uid/"+e.uid).then((()=>{e.imported=!1,this.setState({dashboards:[...this.state.dashboards]})}))})),this.state={loading:!0,dashboards:[]}}async componentDidMount(){const e=this.props.plugin.id;(0,c.getBackendSrv)().get(`/api/plugins/${e}/dashboards`).then((e=>{this.setState({dashboards:e,loading:!1})}))}render(){const{loading:e,dashboards:n}=this.state;return e?le||(le=(0,h.jsx)("div",{children:"loading..."})):n&&n.length?(0,h.jsx)("div",{className:"gf-form-group",children:(0,h.jsx)(pe.Z,{dashboards:n,onImport:this.import,onRemove:this.remove})}):ce||(ce=(0,h.jsx)("div",{children:"No dashboards are included with this plugin"}))}}function me(e){let{plugin:n,queryParams:a,pageId:t}=e;const s=(0,l.useStyles2)(fe),{value:r}=Z(n);var o,c,d;if(t===x.tu.OVERVIEW)return(0,h.jsx)("div",{className:(0,i.cx)(s.readme,s.container),dangerouslySetInnerHTML:{__html:null!==(o=null===(c=n.details)||void 0===c?void 0:c.readme)&&void 0!==o?o:"No plugin help or readme markdown file was found"}});if(t===x.tu.VERSIONS)return(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(ae,{versions:null===(d=n.details)||void 0===d?void 0:d.versions,installedVersion:n.installedVersion})});if(t===x.tu.CONFIG&&null!=r&&r.angularConfigCtrl)return(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(oe,{app:r})});if(null!=r&&r.configPages)for(const e of r.configPages){var u;if(t===e.id)return(0,h.jsx)("div",{className:s.container,children:u||(u=(0,h.jsx)(e.body,{plugin:r,query:a}))})}return t===x.tu.DASHBOARDS&&r?(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(he,{plugin:null==r?void 0:r.meta})}):(0,h.jsx)("div",{className:s.container,children:de||(de=(0,h.jsx)("p",{children:"Page not found."}))})}const fe=e=>({container:i.css`
    padding: ${e.spacing(3,4)};
  `,readme:i.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${e.spacing(3)};
      margin-bottom: ${e.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${e.spacing(2)};
      & > p {
        margin: ${e.spacing()} 0;
      }
    }
  `});var xe=a("./public/app/features/plugins/admin/components/Page.tsx"),be=a("./public/app/features/plugins/admin/components/Loader.tsx"),ve=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/3/opt/drone/yarncache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");var ye,je,Se,Pe,Ne,ke,_e,we,Ie=a("./public/app/types/index.ts");function Ce(e){let{className:n,plugin:a}=e;return a.isDisabled?(0,h.jsxs)(l.Alert,{severity:"error",title:"Plugin disabled",className:n,"aria-label":p.wl.pages.PluginPage.disabledInfo,children:[$e(a.error),ye||(ye=(0,h.jsx)("p",{children:"Please contact your server administrator to get this resolved."})),je||(je=(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about managing plugins"}))]}):null}function $e(e){switch(e){case g.PluginErrorCode.modifiedSignature:return Se||(Se=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case g.PluginErrorCode.invalidSignature:return Pe||(Pe=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case g.PluginErrorCode.missingSignature:return Ne||(Ne=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));default:return ke||(ke=(0,h.jsx)("p",{children:"We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."}))}}function De(e){var n;let{match:a,queryParams:t}=e;const{params:{pluginId:s=""},url:i}=a,p=i.substring(0,i.lastIndexOf("/")),f=[{label:x.xc.OVERVIEW,icon:"file-alt",id:x.tu.OVERVIEW,href:`${i}?page=${x.tu.OVERVIEW}`}],b=(0,y.bJ)(s),{tabs:v,defaultTab:j}=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const{loading:a,error:t,value:s}=Z(e),i=Boolean(null==e?void 0:e.isPublished),{pathname:o}=(0,ve.TH)(),[l,c]=(0,r.useMemo)((()=>{const e=(0,k.RN)(),a=[...n];let t;if(i&&a.push({label:x.xc.VERSIONS,icon:"history",id:x.tu.VERSIONS,href:`${o}?page=${x.tu.VERSIONS}`}),!s)return t=x.tu.OVERVIEW,[a,t];if(e&&s.meta.type===g.PluginType.app){var r;if(s.angularConfigCtrl&&(a.push({label:"Config",icon:"cog",id:x.tu.CONFIG,href:`${o}?page=${x.tu.CONFIG}`}),t=x.tu.CONFIG),s.configPages)for(const e of s.configPages)a.push({label:e.title,icon:e.icon,id:e.id,href:`${o}?page=${e.id}`}),t||(t=e.id);null!==(r=s.meta.includes)&&void 0!==r&&r.find((e=>e.type===g.PluginIncludeType.dashboard))&&a.push({label:"Dashboards",icon:"apps",id:x.tu.DASHBOARDS,href:`${o}?page=${x.tu.DASHBOARDS}`})}return t||(t=x.tu.OVERVIEW),[a,t]}),[s,n,o,i]);return{error:t,loading:a,tabs:l,defaultTab:c}}(b,f),{isLoading:S}=(0,y.ZV)(),{isLoading:P}=(0,y.bt)(),N=(0,l.useStyles2)(Ee),_=(0,o.Z)(v),w=t.page||j;return(0,r.useEffect)((()=>{const e=_&&_.length>v.length,n=w!==x.tu.OVERVIEW&&w!==x.tu.VERSIONS;e&&n&&c.locationService.replace(`${i}?page=${x.tu.OVERVIEW}`)}),[w,i,v,_]),S||P?_e||(_e=(0,h.jsx)(u.T,{children:(0,h.jsx)(be.a,{})})):b?(0,h.jsx)(u.T,{children:(0,h.jsxs)(xe.T,{children:[(0,h.jsx)(Y,{currentUrl:`${i}?page=${w}`,parentUrl:p,plugin:b}),(0,h.jsx)(l.TabsBar,{children:v.map((e=>(0,h.jsx)(l.Tab,{label:e.label,href:e.href,icon:e.icon,active:e.id===w},e.label)))}),(0,h.jsxs)(l.TabContent,{className:N.tabContent,children:[(0,h.jsx)(m,{plugin:b,className:N.alert}),(0,h.jsx)(Ce,{plugin:b,className:N.alert}),(0,h.jsx)(me,{queryParams:t,plugin:b,pageId:w})]})]})}):(0,h.jsx)(d.Ar,{justify:"center",align:"center",children:(0,h.jsxs)(l.Alert,{severity:Ie.F1.Warning,title:"Plugin not found",children:["That plugin cannot be found. Please check the url is correct or ",we||(we=(0,h.jsx)("br",{})),"go to the ",n||(n=(0,h.jsx)("a",{href:p,children:"plugin catalog"})),"."]})})}const Ee=e=>({alert:i.css`
      margin: ${e.spacing(3)};
      margin-bottom: 0;
    `,tabContent:i.css`
      overflow: auto;
    `})},"./public/app/features/plugins/admin/state/hooks.ts":(e,n,a)=>{a.d(n,{iY:()=>T,bt:()=>I,ZV:()=>w,GE:()=>j,UQ:()=>P,bJ:()=>S,x3:()=>N,IS:()=>C,y9:()=>_,S1:()=>k,wq:()=>$});var t=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),r=a("./public/app/features/plugins/admin/state/reducer.ts"),i=a("./public/app/features/plugins/admin/state/actions.ts"),o=a("../../opt/drone/yarncache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js"),l=a("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,d=(0,o.P1)(c,(e=>{let{items:n}=e;return n})),u=(0,o.P1)(c,(e=>{let{settings:n}=e;return n.displayMode})),{selectAll:p,selectById:g}=r.CD.getSelectors(d),h=(e,n)=>(0,o.P1)((e=>(0,o.P1)(p,(n=>n.filter((n=>"installed"===e?n.isInstalled:!n.isCore)))))(e),(e=>e.filter((e=>"all"===n||e.type===n)))),m=(e,n,a)=>(0,o.P1)(h(n,a),(e=>(0,o.P1)(p,(n=>""===e?[]:n.filter((n=>{const a=[];return n.name&&a.push(n.name.toLowerCase()),n.orgName&&a.push(n.orgName.toLowerCase()),a.some((n=>n.includes(e.toLowerCase())))})))))(e),((n,a)=>""===e?n:a)),f=(0,o.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),x=e=>(0,o.P1)(c,(n=>{let{requests:a={}}=n;return a[e]})),b=e=>(0,o.P1)(x(e),(e=>(null==e?void 0:e.status)===l.eE.Pending)),v=e=>(0,o.P1)(x(e),(e=>(null==e?void 0:e.status)===l.eE.Rejected?null==e?void 0:e.error:null));var y=a("./public/app/features/plugins/admin/helpers.ts");const j=e=>{let{query:n="",filterBy:a="installed",filterByType:t="all",sortBy:r=y.Nh.nameAsc}=e;D();const i=(0,s.useSelector)(m(n,a,t)),{isLoading:o,error:l}=w();return{isLoading:o,error:l,plugins:(0,y.AA)(i,r)}},S=e=>(D(),E(e),(0,s.useSelector)((n=>g(n,e)))),P=()=>(D(),(0,s.useSelector)(f)),N=()=>{const e=(0,s.useDispatch)();return(n,a,t)=>e((0,i.N9)({id:n,version:a,isUpdating:t}))},k=()=>{const e=(0,s.useDispatch)();return n=>e((0,i.Tz)(n))},_=()=>null===(0,s.useSelector)(v(i.tQ.typePrefix)),w=()=>({isLoading:(0,s.useSelector)(b(i.Qd.typePrefix)),error:(0,s.useSelector)(v(i.Qd.typePrefix))}),I=()=>({isLoading:(0,s.useSelector)(b(i.DD.typePrefix)),error:(0,s.useSelector)(v(i.DD.typePrefix))}),C=()=>({isInstalling:(0,s.useSelector)(b(i.N9.typePrefix)),error:(0,s.useSelector)(v(i.N9.typePrefix))}),$=()=>({isUninstalling:(0,s.useSelector)(b(i.Tz.typePrefix)),error:(0,s.useSelector)(v(i.Tz.typePrefix))}),D=()=>{const e=(0,s.useDispatch)(),n=(0,s.useSelector)((a=i.Qd.typePrefix,(0,o.P1)(x(a),(e=>void 0===e))));var a;(0,t.useEffect)((()=>{n&&e((0,i.Qd)())}),[])},E=e=>{const n=(0,s.useDispatch)(),a=(0,s.useSelector)((n=>g(n,e))),r=!(0,s.useSelector)(b(i.DD.typePrefix))&&a&&!a.details;(0,t.useEffect)((()=>{r&&n((0,i.DD)(e))}),[a])},T=()=>{const e=(0,s.useDispatch)();return{displayMode:(0,s.useSelector)(u),setDisplayMode:n=>e((0,r.UC)(n))}}},"./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":(e,n,a)=>{a.d(n,{Z:()=>s});var t=a("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");function s(e){var n=(0,t.useRef)();return(0,t.useEffect)((function(){n.current=e})),n.current}}}]);
//# sourceMappingURL=PluginPage.0cedc4c919aff84ce58c.js.map