"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3778],{"./public/app/features/folders/FolderLibraryPanelsPage.tsx":(e,a,n)=>{n.r(a),n.d(a,{FolderLibraryPanelsPage:()=>h,default:()=>f});var s=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=n("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js"),t=n("./public/app/core/components/Page/Page.tsx"),l=n("./public/app/core/selectors/navModel.ts"),d=n("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx"),i=n("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx"),c=n("./public/app/features/folders/state/actions.ts"),u=n("./public/app/features/folders/state/navModel.ts"),p=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const b={getFolderByUid:c.Pb};function h(e){let{navModel:a,getFolderByUid:n,folderUid:r,folder:l}=e;const{loading:c}=(0,o.Z)((async()=>await n(r)),[n,r]),[u,b]=(0,s.useState)(void 0);return(0,p.jsx)(t.Z,{navModel:a,children:(0,p.jsxs)(t.Z.Contents,{isLoading:c,children:[(0,p.jsx)(d.N,{onClick:b,currentFolderId:l.id,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0}),u?(0,p.jsx)(i.b,{onDismiss:()=>b(void 0),libraryPanel:u}):null]})})}const f=(0,r.connect)(((e,a)=>{const n=a.match.params.uid;return{navModel:(0,l.h)(e.navIndex,`folder-library-panels-${n}`,(0,u._)(1)),folderUid:n,folder:e.folder}}),b)(h)},"./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":(e,a,n)=>{n.d(a,{b:()=>p});var s,r=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=n("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),t=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),l=n("./packages/grafana-data/src/index.ts"),d=n("./packages/grafana-runtime/src/index.ts"),i=n("./packages/grafana-ui/src/index.ts"),c=n("./public/app/features/library-panels/state/api.ts"),u=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function p(e){let{libraryPanel:a,onDismiss:n}=e;const r=(0,i.useStyles2)(b),[p,h]=(0,t.useState)(!1),[f,m]=(0,t.useState)(0),[y,x]=(0,t.useState)(void 0);(0,t.useEffect)((()=>{(async()=>{const e=await(0,c.Ef)(a.uid);m(e.length)})()}),[a.uid]);const v=(0,t.useCallback)((e=>async function(e,a,n){n(!0);const s=(await(0,c.E8)(e)).filter((e=>e.title.toLowerCase().includes(a.toLowerCase()))).map((e=>({label:e.title,value:e})));return n(!1),s}(a.uid,e,h)),[a.uid]),g=(0,t.useMemo)((()=>(0,o.debounce)(v,300,{leading:!0,trailing:!0})),[v]);return(0,u.jsxs)(i.Modal,{title:"View panel in dashboard",onDismiss:n,onClickBackdrop:n,isOpen:!0,children:[(0,u.jsxs)("div",{className:r.container,children:[0===f?s||(s=(0,u.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,f>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["This panel is being used in"," ",(0,u.jsxs)("strong",{children:[f," ",f>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),(0,u.jsx)(i.AsyncSelect,{menuShouldPortal:!0,isClearable:!0,isLoading:p,defaultOptions:!0,loadOptions:g,onChange:x,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),(0,u.jsxs)(i.Modal.ButtonRow,{children:[(0,u.jsx)(i.Button,{variant:"secondary",onClick:n,fill:"outline",children:"Cancel"}),(0,u.jsx)(i.Button,{onClick:e=>{var a;e.preventDefault(),d.locationService.push(l.urlUtil.renderUrl(`/d/${null==y||null===(a=y.value)||void 0===a?void 0:a.uid}`,{}))},disabled:!Boolean(y),children:y?`View panel in ${null==y?void 0:y.label}...`:"View panel in dashboard..."})]})]})}function b(e){return{container:r.css``}}}}]);
//# sourceMappingURL=FolderLibraryPanelsPage.b208037f6b1954dc031d.js.map