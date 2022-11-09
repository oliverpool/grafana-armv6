"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7878],{"./public/app/features/library-panels/LibraryPanelsPage.tsx":(e,a,n)=>{n.r(a),n.d(a,{LibraryPanelsPage:()=>p,default:()=>u});var s=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=n("./public/app/core/components/Page/Page.tsx"),l=n("./public/app/core/selectors/navModel.ts"),t=n("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx"),i=n("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx"),d=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=e=>({navModel:(0,l.h)(e.navIndex,"library-panels")}),p=((0,r.connect)(c,void 0),e=>{let{navModel:a}=e;const[n,r]=(0,s.useState)(void 0);return(0,d.jsx)(o.Z,{navModel:a,children:(0,d.jsxs)(o.Z.Contents,{children:[(0,d.jsx)(t.N,{onClick:r,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0,showFolderFilter:!0}),n?(0,d.jsx)(i.b,{onDismiss:()=>r(void 0),libraryPanel:n}):null]})})}),u=(0,r.connect)(c)(p)},"./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":(e,a,n)=>{n.d(a,{b:()=>u});var s,r=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=n("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),l=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=n("./packages/grafana-data/src/index.ts"),i=n("./packages/grafana-runtime/src/index.ts"),d=n("./packages/grafana-ui/src/index.ts"),c=n("./public/app/features/library-panels/state/api.ts"),p=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function u(e){let{libraryPanel:a,onDismiss:n}=e;const r=(0,d.useStyles2)(b),[u,h]=(0,l.useState)(!1),[m,y]=(0,l.useState)(0),[f,x]=(0,l.useState)(void 0);(0,l.useEffect)((()=>{(async()=>{const e=await(0,c.Ef)(a.uid);y(e.length)})()}),[a.uid]);const v=(0,l.useCallback)((e=>async function(e,a,n){n(!0);const s=(await(0,c.E8)(e)).filter((e=>e.title.toLowerCase().includes(a.toLowerCase()))).map((e=>({label:e.title,value:e})));return n(!1),s}(a.uid,e,h)),[a.uid]),j=(0,l.useMemo)((()=>(0,o.debounce)(v,300,{leading:!0,trailing:!0})),[v]);return(0,p.jsxs)(d.Modal,{title:"View panel in dashboard",onDismiss:n,onClickBackdrop:n,isOpen:!0,children:[(0,p.jsxs)("div",{className:r.container,children:[0===m?s||(s=(0,p.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,m>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{children:["This panel is being used in"," ",(0,p.jsxs)("strong",{children:[m," ",m>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),(0,p.jsx)(d.AsyncSelect,{menuShouldPortal:!0,isClearable:!0,isLoading:u,defaultOptions:!0,loadOptions:j,onChange:x,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),(0,p.jsxs)(d.Modal.ButtonRow,{children:[(0,p.jsx)(d.Button,{variant:"secondary",onClick:n,fill:"outline",children:"Cancel"}),(0,p.jsx)(d.Button,{onClick:e=>{var a;e.preventDefault(),i.locationService.push(t.urlUtil.renderUrl(`/d/${null==f||null===(a=f.value)||void 0===a?void 0:a.uid}`,{}))},disabled:!Boolean(f),children:f?`View panel in ${null==f?void 0:f.label}...`:"View panel in dashboard..."})]})]})}function b(e){return{container:r.css``}}}}]);
//# sourceMappingURL=LibraryPanelsPage.cf625893e14b53d42c9c.js.map