"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9975],{"./public/app/features/playlist/PlaylistForm.tsx":(e,a,t)=>{t.d(a,{H:()=>D});var s=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("./packages/grafana-runtime/src/index.ts"),n=t("./packages/grafana-ui/src/index.ts"),i=t("./packages/grafana-e2e-selectors/src/index.ts"),r=t("./public/app/core/components/TagFilter/TagFilter.tsx"),o=t("./public/app/core/services/search_srv.ts");var c=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=t("./public/app/core/components/TagFilter/TagBadge.tsx"),p=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const u=e=>{let{item:a,onDelete:t,onMoveDown:s,onMoveUp:l,first:r,last:o}=e;const u=(0,n.useStyles)(m);return(0,p.jsxs)("tr",{"aria-label":i.wl.pages.PlaylistForm.itemRow,children:["dashboard_by_id"===a.type?(0,p.jsxs)("td",{className:(0,c.cx)(u.td,u.item),children:[(0,p.jsx)(n.Icon,{name:"apps","aria-label":i.wl.pages.PlaylistForm.itemIdType}),(0,p.jsx)("span",{children:a.title})]}):null,"dashboard_by_tag"===a.type?(0,p.jsxs)("td",{className:(0,c.cx)(u.td,u.item),children:[(0,p.jsx)(n.Icon,{name:"tag-alt","aria-label":i.wl.pages.PlaylistForm.itemTagType}),(0,p.jsx)(d.e,{label:a.title,removeIcon:!1,count:0},a.id)]}):null,(0,p.jsxs)("td",{className:(0,c.cx)(u.td,u.settings),children:[r?null:(0,p.jsx)(n.IconButton,{name:"arrow-up",size:"md",onClick:e=>{e.preventDefault(),l(a)},"aria-label":i.wl.pages.PlaylistForm.itemMoveUp,type:"button"}),o?null:(0,p.jsx)(n.IconButton,{name:"arrow-down",size:"md",onClick:e=>{e.preventDefault(),s(a)},"aria-label":i.wl.pages.PlaylistForm.itemMoveDown,type:"button"}),(0,p.jsx)(n.IconButton,{name:"times",size:"md",onClick:e=>{e.preventDefault(),t(a)},"aria-label":i.wl.pages.PlaylistForm.itemDelete,type:"button"})]})]},a.title)};function m(e){return{td:c.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,item:c.css`
      label: item;
      span {
        margin-left: ${e.spacing.xs};
      }
    `,settings:c.css`
      label: settings;
      text-align: right;
    `}}var b;const g=e=>{let{items:a,onMoveUp:t,onMoveDown:s,onDelete:l}=e;return 0===a.length?b||(b=(0,p.jsx)("tr",{children:(0,p.jsx)("td",{children:(0,p.jsx)("em",{children:"Playlist is empty. Add dashboards below."})})})):(0,p.jsx)(p.Fragment,{children:a.map(((e,n)=>{const i=0===n,r=n===a.length-1;return(0,p.jsx)(u,{first:i,last:r,item:e,onDelete:l,onMoveDown:s,onMoveUp:t},e.title)}))})};var y;const h=e=>{let{items:a,onMoveUp:t,onMoveDown:s,onDelete:l}=e;return(0,p.jsxs)("div",{className:"gf-form-group",children:[y||(y=(0,p.jsx)("h3",{className:"page-headering",children:"Dashboards"})),(0,p.jsx)("table",{className:"filter-table",children:(0,p.jsx)("tbody",{children:(0,p.jsx)(g,{items:a,onMoveUp:t,onMoveDown:s,onDelete:l})})})]})};var v=t("../../opt/drone/yarncache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js"),x=t.n(v),f=t("./public/app/core/services/backend_srv.ts");const j=e=>{let{onChange:a,value:t,width:s,isClearable:l=!1,invalid:i,disabled:r,id:o}=e;const c=x()(w,300),d=t?{value:t,label:t.label}:void 0;return(0,p.jsx)(n.AsyncSelect,{inputId:o,menuShouldPortal:!0,width:s,isClearable:l,defaultOptions:!0,loadOptions:c,onChange:e=>{a(null==e?void 0:e.value)},placeholder:"Select dashboard",noOptionsMessage:"No dashboards found",value:d,invalid:i,disabled:r})};async function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const a=await f.ae.search({type:"dash-db",query:e,limit:100});return a.map((e=>{let{id:a,uid:t="",title:s,folderTitle:l}=e;const n={id:a,uid:t,label:`${null!=l?l:"General"}/${s}`};return{value:n,label:n.label}}))}var _;const k=new o.i,D=e=>{var a,t;let{onSubmit:o,playlist:c}=e;const{name:d,interval:u,items:m}=c,{items:b,addById:g,addByTag:y,deleteItem:v,moveDown:x,moveUp:f}=function(e){const[a,t]=(0,s.useState)(null!=e?e:[]),l=(0,s.useCallback)((e=>{if(!e||a.find((a=>a.id===e.id)))return;const s={id:e.id,title:e.label,type:"dashboard_by_id",value:e.id.toString(10),order:a.length+1};t([...a,s])}),[a]),n=(0,s.useCallback)((e=>{const s=e[0];if(!s||a.find((e=>e.value===s)))return;const l={title:s,type:"dashboard_by_tag",value:s,order:a.length+1};t([...a,l])}),[a]),i=(0,s.useCallback)(((e,s)=>{const l=[...a],n=l.indexOf(e),i=n+s;i>=0&&i<l.length&&(l.splice(n,1),l.splice(i,0,e)),t(l)}),[a]),r=(0,s.useCallback)((e=>{i(e,-1)}),[i]),o=(0,s.useCallback)((e=>{i(e,1)}),[i]),c=(0,s.useCallback)((e=>{t(a.filter((a=>a!==e)))}),[a]);return{items:a,addById:l,addByTag:n,deleteItem:c,moveDown:o,moveUp:r}}(m);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(n.Form,{onSubmit:e=>o(Object.assign({},e,{items:b})),validateOn:"onBlur",children:e=>{var s,o;let{register:c,errors:m}=e;const w=0===b.length||Object.keys(m).length>0;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.Field,{label:"Name",invalid:!!m.name,error:null==m||null===(s=m.name)||void 0===s?void 0:s.message,children:(0,p.jsx)(n.Input,Object.assign({type:"text"},c("name",{required:"Name is required"}),{placeholder:"Name",defaultValue:d,"aria-label":i.wl.pages.PlaylistForm.name}))}),(0,p.jsx)(n.Field,{label:"Interval",invalid:!!m.interval,error:null==m||null===(o=m.interval)||void 0===o?void 0:o.message,children:(0,p.jsx)(n.Input,Object.assign({type:"text"},c("interval",{required:"Interval is required"}),{placeholder:"5m",defaultValue:null!=u?u:"5m","aria-label":i.wl.pages.PlaylistForm.interval}))}),a||(a=(0,p.jsx)(h,{items:b,onMoveUp:f,onMoveDown:x,onDelete:v})),(0,p.jsxs)("div",{className:"gf-form-group",children:[_||(_=(0,p.jsx)("h3",{className:"page-headering",children:"Add dashboards"})),t||(t=(0,p.jsx)(n.Field,{label:"Add by title",children:(0,p.jsx)(j,{onChange:g,id:"dashboard-picker",isClearable:!0})})),(0,p.jsx)(n.Field,{label:"Add by tag",children:(0,p.jsx)(r.D,{isClearable:!0,tags:[],hideValues:!0,tagOptions:k.getDashboardTags,onChange:y,placeholder:""})})]}),(0,p.jsxs)(n.HorizontalGroup,{children:[(0,p.jsx)(n.Button,{variant:"primary",disabled:w,children:"Save"}),(0,p.jsx)(n.LinkButton,{variant:"secondary",href:`${l.config.appSubUrl}/playlists`,children:"Cancel"})]})]})}})})}},"./public/app/features/playlist/PlaylistNewPage.tsx":(e,a,t)=>{t.r(a),t.d(a,{PlaylistNewPage:()=>m,default:()=>b});t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),l=t("./packages/grafana-runtime/src/index.ts"),n=t("./packages/grafana-ui/src/index.ts"),i=t("./public/app/core/components/Page/Page.tsx"),r=t("./public/app/core/selectors/navModel.ts"),o=t("./public/app/features/playlist/PlaylistForm.tsx"),c=t("./public/app/features/playlist/api.ts"),d=t("./public/app/features/playlist/usePlaylist.tsx"),p=t("./public/app/features/playlist/styles.ts"),u=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{navModel:a}=e;const t=(0,n.useStyles2)(p.e),{playlist:s,loading:r}=(0,d.Z)();return(0,u.jsx)(i.Z,{navModel:a,children:(0,u.jsxs)(i.Z.Contents,{isLoading:r,children:[(0,u.jsx)("h3",{className:t.subHeading,children:"New Playlist"}),(0,u.jsx)("p",{className:t.description,children:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."}),(0,u.jsx)(o.H,{onSubmit:async e=>{await(0,c.cg)(e),l.locationService.push("/playlists")},playlist:s})]})})},b=(0,s.connect)((e=>({navModel:(0,r.h)(e.navIndex,"playlists")})))(m)},"./public/app/features/playlist/api.ts":(e,a,t)=>{t.d(a,{cg:()=>r,CE:()=>o,l8:()=>c,A5:()=>d,Dv:()=>p});var s=t("./packages/grafana-runtime/src/index.ts"),l=t("./public/app/store/store.ts"),n=t("./public/app/core/actions/index.ts"),i=t("./public/app/core/copy/appNotification.ts");async function r(e){await u((()=>(0,s.getBackendSrv)().post("/api/playlists",e)))}async function o(e,a){await u((()=>(0,s.getBackendSrv)().put(`/api/playlists/${e}`,a)))}async function c(e){await u((()=>(0,s.getBackendSrv)().delete(`/api/playlists/${e}`)),"Playlist deleted")}async function d(e){return await(0,s.getBackendSrv)().get(`/api/playlists/${e}`)}async function p(e){return await(0,s.getBackendSrv)().get("/api/playlists/",{query:e})}async function u(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Playlist saved";try{await e(),(0,l.WI)((0,n.$l)((0,i.AT)(a)))}catch(e){(0,l.WI)((0,n.$l)((0,i.t_)("Unable to save playlist",e)))}}},"./public/app/features/playlist/styles.ts":(e,a,t)=>{t.d(a,{e:()=>l});var s=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");function l(e){return{description:s.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,subHeading:s.css`
      label: sub-heading;
      margin-bottom: ${e.spacing(2)};
    `}}},"./public/app/features/playlist/usePlaylist.tsx":(e,a,t)=>{t.d(a,{Z:()=>n});var s=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=t("./public/app/features/playlist/api.ts");function n(e){const[a,t]=(0,s.useState)({items:[],interval:"5m",name:""}),[n,i]=(0,s.useState)(!0);return(0,s.useEffect)((()=>{(async()=>{if(!e)return void i(!1);const a=await(0,l.A5)(e);t(a),i(!1)})()}),[e]),{playlist:a,loading:n}}}}]);
//# sourceMappingURL=PlaylistNewPage.0cedc4c919aff84ce58c.js.map