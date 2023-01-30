"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4074],{48548:(Q,f,e)=>{e.r(f),e.d(f,{DashboardListPage:()=>p,default:()=>j});var c=e(52423),t=e(68404),F=e(22350),A=e(83383),I=e(57388),E=e(79396),S=e(29930),x=e(60492);const M=a=>S.ae.getFolderByUid(a,{withAccessControl:!0}).then(n=>{const s=(0,x.B)(n);return s.children[0].active=!0,{folder:n,folderNav:s}});var P=e(29516),w=e(25474),m=e(82002),u=e(81168),T=e(54350),$=e(71897),B=e(66757),L=e(93003),v=e(63346),V=e(26639),U=e(90723),W=e(81697),g=e(35287);const z=({folderUid:a,canCreateFolders:n=!1,canCreateDashboards:s=!1})=>{const o=d=>{let r=`dashboard/${d}`;return d==="new_folder"&&(r="dashboards/folder/new/"),a&&(r+=`?folderUid=${a}`),r},l=()=>t.createElement(v.v,null,s&&t.createElement(v.v.Item,{url:o("new"),label:(0,g.t)("search.dashboard-actions.new-dashboard","New Dashboard")}),n&&(L.v.featureToggles.nestedFolders||!a)&&t.createElement(v.v.Item,{url:o("new_folder"),label:(0,g.t)("search.dashboard-actions.new-folder","New Folder")}),s&&t.createElement(v.v.Item,{url:o("import"),label:(0,g.t)("search.dashboard-actions.import","Import")}));return t.createElement("div",null,t.createElement(V.L,{overlay:l,placement:"bottom-start"},t.createElement(U.zx,{variant:"primary"},(0,g.t)("search.dashboard-actions.new","New"),t.createElement(W.J,{name:"angle-down"}))))},y=t.memo(({folder:a})=>{const n=(0,P.wW)(Z),s=(0,B.hD)(),o=s.useState(),{onKeyDown:l,keyboardEvents:d}=(0,T.A)(),r=a?.uid,i=a?.canSave,{isEditor:h}=m.Vt,b=a?i:m.Vt.hasEditPermissionInFolders,N=m.Vt.hasAccess(u.AccessControlAction.FoldersCreate,h),C=b||!!i,D=r?m.Vt.hasAccessInMetadata(u.AccessControlAction.DashboardsCreate,a,C):m.Vt.hasAccess(u.AccessControlAction.DashboardsCreate,C),J=a===void 0&&N||D;return(0,t.useEffect)(()=>s.initStateFromUrl(a?.uid),[a?.uid,s]),t.createElement(t.Fragment,null,t.createElement("div",{className:(0,c.cx)(n.actionBar,"page-action-bar")},t.createElement("div",{className:(0,c.cx)(n.inputWrapper,"gf-form gf-form--grow m-r-2")},t.createElement(w.I,{value:o.query??"",onChange:O=>s.onQueryChange(O.currentTarget.value),onKeyDown:l,autoFocus:!0,spellCheck:!1,placeholder:o.includePanels?"Search for dashboards and panels":"Search for dashboards",className:n.searchInput,suffix:null})),J&&t.createElement(z,{folderUid:r,canCreateFolders:N,canCreateDashboards:D})),t.createElement($.Z,{showManage:Boolean(h||b||i),folderDTO:a,hidePseudoFolders:!0,keyboardEvents:d}))});y.displayName="ManageDashboardsNew";const K=y,Z=a=>({actionBar:c.css`
    ${a.breakpoints.down("sm")} {
      flex-wrap: wrap;
    }
  `,inputWrapper:c.css`
    ${a.breakpoints.down("sm")} {
      margin-right: 0 !important;
    }
  `,searchInput:c.css`
    margin-bottom: 6px;
    min-height: ${a.spacing(4)};
  `,unsupported:c.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,noResults:c.css`
    padding: ${a.v1.spacing.md};
    background: ${a.v1.colors.bg2};
    font-style: italic;
    margin-top: ${a.v1.spacing.md};
  `}),p=(0,t.memo)(({match:a,location:n})=>{const{loading:s,value:o}=(0,F.Z)(()=>{const l=a.params.uid,d=n.pathname;return!l||!d.startsWith("/dashboards")?Promise.resolve({}):M(l).then(({folder:r,folderNav:i})=>{const h=A.u.stripBaseFromUrl(r.url);return h!==n.pathname&&I.E1.replace(h),{folder:r,pageNav:i}})},[a.params.uid]);return t.createElement(E.T,{navId:"dashboards/browse",pageNav:o?.pageNav},t.createElement(E.T.Contents,{isLoading:s,className:c.css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `},t.createElement(K,{folder:o?.folder})))});p.displayName="DashboardListPage";const j=p}}]);

//# sourceMappingURL=DashboardListPage.be402a84bcbbf9343620.js.map