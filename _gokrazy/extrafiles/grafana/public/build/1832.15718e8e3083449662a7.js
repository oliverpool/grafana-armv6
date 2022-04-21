"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1832],{"./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":(e,a,n)=>{n.d(a,{j:()=>c});var s,t=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./public/app/features/panel/state/util.ts"),i=n("./packages/grafana-ui/src/index.ts"),o=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{onChange:a,maxMenuHeight:n}=e;const o=(0,t.useMemo)((()=>(0,r.x)()),[]),c=(0,t.useMemo)((()=>o.map((e=>({label:e.name,imgUrl:e.info.logos.small,value:e}))).sort(((e,a)=>{var n;return null===(n=e.label)||void 0===n?void 0:n.localeCompare(a.label)}))),[o]),[p,u]=(0,t.useState)([]),m=(0,t.useCallback)((e=>{const n=[];for(const a of e)a.value&&n.push(a.value);a(n),u(e)}),[a]),g=(0,i.useStyles2)(d),b={defaultOptions:!0,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",maxMenuHeight:n,options:c,value:p,onChange:m};return(0,l.jsxs)("div",{className:g.container,children:[p.length>0&&(0,l.jsx)(i.Button,{size:"xs",icon:"trash-alt",variant:"link",className:g.clear,onClick:()=>m([]),"aria-label":"Clear types",children:"Clear types"}),(0,l.jsx)(i.MultiSelect,Object.assign({menuShouldPortal:!0},b,{prefix:s||(s=(0,l.jsx)(i.Icon,{name:"filter"})),"aria-label":"Panel Type filter"}))]})};function d(e){return{container:o.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:o.css`
      label: clear;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(4.5)};
      right: 0;
    `}}},"./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":(e,a,n)=>{n.d(a,{p:()=>z});var s=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx"),o=n("./packages/grafana-data/src/index.ts"),l=n("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts"),c=n("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/3/opt/drone/yarncache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const d={loadingState:o.LoadingState.Loading,dashboardTitles:[]},p=(0,c.PH)("libraryPanels/delete/searchCompleted"),u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;return p.match(a)?Object.assign({},e,{dashboardTitles:a.payload.dashboards.map((e=>e.title)),loadingState:o.LoadingState.Done}):e};var m=n("./public/app/features/library-panels/state/api.ts");var g,b,h,f,x=n("./public/app/features/library-panels/styles.ts"),y=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const j=e=>{let{libraryPanel:a,onDismiss:n,onConfirm:t}=e;const i=(0,r.useStyles)(x.J),[{dashboardTitles:c,loadingState:h},f]=(0,s.useReducer)(u,d),j=(0,s.useMemo)((()=>(0,l.tb)(f)),[f]);(0,s.useEffect)((()=>{j(function(e){return async function(a){const n=await(0,m.E8)(e.uid);a(p({dashboards:n}))}}(a))}),[j,a]);const S=Boolean(c.length),_=h===o.LoadingState.Done;return(0,y.jsxs)(r.Modal,{className:i.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:n,isOpen:!0,children:[_?null:g||(g=(0,y.jsx)(P,{})),_?(0,y.jsxs)("div",{children:[S?(0,y.jsx)(w,{dashboardTitles:c}):null,S?null:b||(b=(0,y.jsx)(v,{})),(0,y.jsxs)(r.Modal.ButtonRow,{children:[(0,y.jsx)(r.Button,{variant:"secondary",onClick:n,fill:"outline",children:"Cancel"}),(0,y.jsx)(r.Button,{variant:"destructive",onClick:t,disabled:S,children:"Delete"})]})]}):null]})},P=()=>h||(h=(0,y.jsx)("span",{children:"Loading library panel..."})),v=()=>{const e=(0,r.useStyles)(x.J);return(0,y.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},w=e=>{let{dashboardTitles:a}=e;const n=(0,r.useStyles)(x.J),s=1===a.length?"dashboard.":"dashboards.",t=`${a.length} ${s}`;return 0===a.length?null:(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:n.textInfo,children:["This library panel can not be deleted because it is connected to ",(0,y.jsx)("strong",{children:t})," Remove the library panel from the dashboards listed below and retry."]}),(0,y.jsxs)("table",{className:n.myTable,children:[f||(f=(0,y.jsx)("thead",{children:(0,y.jsx)("tr",{children:(0,y.jsx)("th",{children:"Dashboard name"})})})),(0,y.jsx)("tbody",{children:a.map(((e,a)=>(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:e})},`dash-title-${a}`)))})]})]})};var S,_,k=n("./packages/grafana-runtime/src/index.ts"),C=n("./public/app/features/panel/components/PanelPluginError.tsx");const z=e=>{var a;let{libraryPanel:n,onClick:t,onDelete:r,showSecondaryActions:o}=e;const[l,c]=(0,s.useState)(!1),d=null!==(a=k.config.panels[n.model.type])&&void 0!==a?a:(0,C.X)(n.model.type).meta;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.X,{isCurrent:!1,title:n.name,description:n.description,plugin:d,onClick:()=>null==t?void 0:t(n),onDelete:o?()=>c(!0):void 0,children:(0,y.jsx)($,{libraryPanel:n})}),l&&(0,y.jsx)(j,{libraryPanel:n,onConfirm:()=>{null==r||r(n),c(!1)},onDismiss:()=>c(!1)})]})};function $(e){let{libraryPanel:a}=e;const n=(0,r.useStyles2)(F);return a.meta.folderUid||a.meta.folderName?a.meta.folderUid?(0,y.jsx)("span",{className:n.metaContainer,children:(0,y.jsxs)(r.Link,{href:`/dashboards/f/${a.meta.folderUid}`,children:[_||(_=(0,y.jsx)(r.Icon,{name:"folder-upload",size:"sm"})),(0,y.jsx)("span",{children:a.meta.folderName})]})}):(0,y.jsxs)("span",{className:n.metaContainer,children:[S||(S=(0,y.jsx)(r.Icon,{name:"folder",size:"sm"})),(0,y.jsx)("span",{children:a.meta.folderName})]}):null}function F(e){return{metaContainer:t.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}},"./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":(e,a,n)=>{n.d(a,{N:()=>k,e:()=>_});var s,t=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=n("./public/app/core/components/Select/SortPicker.tsx"),l=n("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx"),c=n("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx"),d=n("./public/app/core/constants.ts"),p=n("../../opt/drone/yarncache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js"),u=n.n(p),m=n("./public/app/types/index.ts"),g=n("./public/app/core/services/backend_srv.ts"),b=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function h(e){let{onChange:a,maxMenuHeight:n}=e;const i=(0,r.useStyles2)(f),[o,l]=(0,t.useState)(!1),c=(0,t.useCallback)((e=>async function(e,a){a(!0);const n={query:e,type:"dash-folder",permission:m.bf.View},s=(await(0,g.i)().search(n)).map((e=>({label:e.title,value:{id:e.id,title:e.title}})));e&&!"general".includes(e.toLowerCase())||s.unshift({label:"General",value:{id:0,title:"General"}});return a(!1),s}(e,l)),[]),d=(0,t.useMemo)((()=>u()(c,300)),[c]),[p,h]=(0,t.useState)([]),x=(0,t.useCallback)((e=>{const n=[];for(const a of e)a.value&&n.push(a.value);a(n),h(e)}),[a]),y={defaultOptions:!0,isMulti:!0,noOptionsMessage:"No folders found",placeholder:"Filter by folder",maxMenuHeight:n,value:p,onChange:x};return(0,b.jsxs)("div",{className:i.container,children:[p.length>0&&(0,b.jsx)(r.Button,{size:"xs",icon:"trash-alt",variant:"link",className:i.clear,onClick:()=>x([]),"aria-label":"Clear folders",children:"Clear folders"}),(0,b.jsx)(r.AsyncMultiSelect,Object.assign({menuShouldPortal:!0},y,{isLoading:o,loadOptions:d,prefix:s||(s=(0,b.jsx)(r.Icon,{name:"filter"})),"aria-label":"Folder filter"}))]})}function f(e){return{container:i.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:i.css`
      label: clear;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(4.5)};
      right: 0;
    `}}var x=n("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/3/opt/drone/yarncache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const y={searchQuery:"",panelFilter:[],folderFilter:[],sortDirection:void 0},j=(0,x.PH)("libraryPanels/search/searchChanged"),P=(0,x.PH)("libraryPanels/search/sortChanged"),v=(0,x.PH)("libraryPanels/search/panelFilterChanged"),w=(0,x.PH)("libraryPanels/search/folderFilterChanged"),S=(e,a)=>j.match(a)?Object.assign({},e,{searchQuery:a.payload}):P.match(a)?Object.assign({},e,{sortDirection:a.payload.value}):v.match(a)?Object.assign({},e,{panelFilter:a.payload.map((e=>e.id))}):w.match(a)?Object.assign({},e,{folderFilter:a.payload.map((e=>String(e.id)))}):e;let _;!function(e){e.Tight="tight",e.Spacious="spacious"}(_||(_={}));const k=e=>{var a,n;let{onClick:s,variant:i=_.Spacious,currentPanelId:p,currentFolderId:u,perPage:m=d.gN,showPanelFilter:g=!1,showFolderFilter:f=!1,showSort:x=!1,showSecondaryActions:k=!1}=e;const z=(0,r.useStyles2)(C),[{sortDirection:$,panelFilter:F,folderFilter:N,searchQuery:L},O]=(0,t.useReducer)(S,Object.assign({},y,{folderFilter:u?[u.toString(10)]:[]})),D=e=>O(j(e)),T=e=>O(P(e)),I=e=>O(w(e)),M=e=>O(v(e));return i===_.Spacious?(0,b.jsx)("div",{className:z.container,children:(0,b.jsxs)(r.VerticalGroup,{spacing:"lg",children:[a||(a=(0,b.jsx)(r.FilterInput,{value:L,onChange:D,placeholder:"Search by name or description",width:0})),(0,b.jsx)("div",{className:z.buttonRow,children:(0,b.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:x&&g||f?"space-between":"flex-end",children:[x&&(0,b.jsx)(o.P,{value:$,onChange:T,filter:["alpha-asc","alpha-desc"]}),(0,b.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:f&&g?"space-between":"flex-end",children:[f&&(0,b.jsx)(h,{onChange:I}),g&&(0,b.jsx)(l.j,{onChange:M})]})]})}),(0,b.jsx)("div",{className:z.libraryPanelsView,children:n||(n=(0,b.jsx)(c.u,{onClickCard:s,searchString:L,sortDirection:$,panelFilter:F,folderFilter:N,currentPanelId:p,showSecondaryActions:k,perPage:m}))})]})}):(0,b.jsx)("div",{className:z.container,children:(0,b.jsxs)(r.VerticalGroup,{spacing:"xs",children:[(0,b.jsxs)("div",{className:z.tightButtonRow,children:[(0,b.jsx)("div",{className:z.tightFilter,children:(0,b.jsx)(r.FilterInput,{value:L,onChange:D,placeholder:"Search by name",width:0})}),(0,b.jsxs)("div",{className:z.tightSortFilter,children:[x&&(0,b.jsx)(o.P,{value:$,onChange:T}),f&&(0,b.jsx)(h,{onChange:I,maxMenuHeight:200}),g&&(0,b.jsx)(l.j,{onChange:M,maxMenuHeight:200})]})]}),(0,b.jsx)("div",{className:z.libraryPanelsView,children:(0,b.jsx)(c.u,{onClickCard:s,searchString:L,sortDirection:$,panelFilter:F,folderFilter:N,currentPanelId:p,showSecondaryActions:k,perPage:m})})]})})};function C(e){return{container:i.css`
      width: 100%;
      overflow-y: auto;
      padding: ${e.spacing(1)};
    `,buttonRow:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(2)}; // Clear types link
    `,tightButtonRow:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(4)}; // Clear types link
    `,tightFilter:i.css`
      flex-grow: 1;
    `,tightSortFilter:i.css`
      flex-grow: 1;
      padding: ${e.spacing(0,0,0,.5)};
    `,libraryPanelsView:i.css`
      width: 100%;
    `}}},"./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":(e,a,n)=>{n.d(a,{u:()=>m});var s,t=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=n("./.yarn/__virtual__/react-use-virtual-00326e70ba/3/opt/drone/yarncache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js"),i=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=n("./packages/grafana-ui/src/index.ts"),l=n("./packages/grafana-data/src/index.ts"),c=n("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx"),d=n("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts"),p=n("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts"),u=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const m=e=>{let{className:a,onClickCard:n,searchString:m,sortDirection:b,panelFilter:h,folderFilter:f,showSecondaryActions:x,currentPanelId:y,perPage:j=40}=e;const P=(0,o.useStyles)(g),[{libraryPanels:v,page:w,perPage:S,numberOfPages:_,loadingState:k,currentPanelId:C},z]=(0,t.useReducer)(d._p,Object.assign({},d.p$,{currentPanelId:y,perPage:j})),$=(0,t.useMemo)((()=>(0,p.tb)(z)),[z]);(0,r.Z)((()=>$((0,p.Xu)({searchString:m,sortDirection:b,panelFilter:h,folderFilter:f,page:w,perPage:S,currentPanelId:C}))),300,[m,b,h,f,w,$]);const F=e=>{let{uid:a}=e;return $((0,p.UO)(a,{searchString:m,page:w,perPage:S}))};return(0,u.jsxs)("div",{className:(0,i.cx)(P.container,a),children:[(0,u.jsx)("div",{className:P.libraryPanelList,children:k===l.LoadingState.Loading?s||(s=(0,u.jsx)("p",{children:"Loading library panels..."})):v.length<1?(0,u.jsx)("p",{className:P.noPanelsFound,children:"No library panels found."}):null==v?void 0:v.map(((e,a)=>(0,u.jsx)(c.p,{libraryPanel:e,onDelete:F,onClick:n,showSecondaryActions:x},`library-panel=${a}`)))}),v.length?(0,u.jsx)("div",{className:P.pagination,children:(0,u.jsx)(o.Pagination,{currentPage:w,numberOfPages:_,onNavigate:e=>$((0,d.oO)({page:e})),hideWhenSinglePage:!0})}):null]})},g=e=>({container:i.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:i.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `,searchHeader:i.css`
      display: flex;
    `,newPanelButton:i.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:i.css`
      align-self: center;
      margin-top: ${e.spacing.sm};
    `,noPanelsFound:i.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},"./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":(e,a,n)=>{n.d(a,{UO:()=>f,Xu:()=>h,tb:()=>x});var s=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js"),t=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js"),r=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js"),i=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js"),o=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js"),l=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),c=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),d=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js"),p=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js"),u=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),m=n("../../opt/drone/yarncache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),g=n("./public/app/features/library-panels/state/api.ts"),b=n("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");function h(e){return function(a){const n=new s.w0,h=(0,t.D)((0,g.Pq)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe((0,l.z)((e=>{let{perPage:a,elements:n,page:s,totalCount:t}=e;return(0,r.of)((0,b.zK)({libraryPanels:n,page:s,perPage:a,totalCount:t}))})),(0,c.K)((a=>(console.error(a),(0,r.of)((0,b.zK)(Object.assign({},b.p$,{page:e.page,perPage:e.perPage})))))),(0,d.x)((()=>n.unsubscribe())),(0,p.B)());n.add((0,i.T)((0,o.H)(50).pipe((0,u.h)((0,b.xU)()),(0,m.R)(h)),h).subscribe(a))}}function f(e,a){return async function(n){try{await(0,g.UO)(e),h(a)(n)}catch(e){console.error(e)}}}function x(e){return function(a){return a instanceof Function?a(e):e(a)}}},"./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":(e,a,n)=>{n.d(a,{_p:()=>c,oO:()=>l,p$:()=>r,xU:()=>i,zK:()=>o});var s=n("./.yarn/__virtual__/@reduxjs-toolkit-virtual-7692db070f/3/opt/drone/yarncache/@reduxjs-toolkit-npm-1.7.2-7ced4ba4dc-41c17c660f.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),t=n("./packages/grafana-data/src/index.ts");const r={loadingState:t.LoadingState.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},i=(0,s.PH)("libraryPanels/view/initSearch"),o=(0,s.PH)("libraryPanels/view/searchCompleted"),l=(0,s.PH)("libraryPanels/view/changePage"),c=(e,a)=>{if(i.match(a))return Object.assign({},e,{loadingState:t.LoadingState.Loading});if(o.match(a)){const{libraryPanels:n,page:s,perPage:r,totalCount:i}=a.payload,o=Math.ceil(i/r);return Object.assign({},e,{libraryPanels:n,perPage:r,totalCount:i,loadingState:t.LoadingState.Done,numberOfPages:o,page:s>o?s-1:s})}return l.match(a)?Object.assign({},e,{page:a.payload.page}):e}},"./public/app/features/library-panels/styles.ts":(e,a,n)=>{n.d(a,{J:()=>t});var s=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");function t(e){return{myTable:s.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.border.radius.sm};
      border: 1px solid ${e.colors.bg3};
      background: ${e.colors.bg1};
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.bg2};
      }
    `,noteTextbox:s.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:s.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:s.css`
      margin-top: ${e.spacing.md};
    `,modal:s.css`
      width: 500px;
    `,modalText:s.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},"./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":(e,a,n)=>{n.d(a,{X:()=>c});n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=n("./packages/grafana-data/src/index.ts"),t=n("./packages/grafana-ui/src/index.ts"),r=n("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=n("./packages/grafana-e2e-selectors/src/index.ts"),o=n("./public/app/features/plugins/components/PluginStateInfo.tsx"),l=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{isCurrent:a,title:n,plugin:o,onClick:c,onDelete:u,disabled:m,showBadge:g,description:b,children:h}=e;const f=(0,t.useStyles2)(d),x=(0,r.cx)({[f.item]:!0,[f.disabled]:m||o.state===s.PluginState.deprecated,[f.current]:a});return(0,l.jsxs)("div",{className:x,"aria-label":i.wl.components.PluginVisualization.item(o.name),onClick:m?void 0:c,title:a?"Click again to close this section":o.name,children:[(0,l.jsx)("img",{className:f.img,src:o.info.logos.small,alt:""}),(0,l.jsxs)("div",{className:f.itemContent,children:[(0,l.jsx)("div",{className:f.name,children:n}),b?(0,l.jsx)("span",{className:f.description,children:b}):null,h]}),g&&(0,l.jsx)("div",{className:(0,r.cx)(f.badge,m&&f.disabled),children:(0,l.jsx)(p,{plugin:o})}),u&&(0,l.jsx)(t.IconButton,{name:"trash-alt",onClick:e=>{e.stopPropagation(),u()},className:f.deleteButton,"aria-label":"Delete button on panel type card"})]})};c.displayName="PanelTypeCard";const d=e=>({item:r.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:r.css`
      overflow: hidden;
      position: relative;
      padding: ${e.spacing(0,1)};
    `,current:r.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:r.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:r.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,img:r.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:r.css`
      background: ${e.colors.background.primary};
    `,deleteButton:r.css`
      margin-left: auto;
    `}),p=e=>{let{plugin:a}=e;return(0,s.isUnsignedPluginSignature)(a.signature)?(0,l.jsx)(t.PluginSignatureBadge,{status:a.signature}):(0,l.jsx)(o.u,{state:a.state})};p.displayName="PanelPluginBadge"},"./public/app/features/panel/state/util.ts":(e,a,n)=>{n.d(a,{r:()=>i,x:()=>r});var s=n("./packages/grafana-data/src/index.ts"),t=n("./public/app/core/config.ts");function r(){const e=t.vc.panels;return Object.keys(e).filter((a=>!1===e[a].hideFromList)).map((a=>e[a])).sort(((e,a)=>e.sort-a.sort))}function i(e,a,n){if(!a.length)return e.filter((e=>e.state!==s.PluginState.deprecated||n.id===e.id));const t=(0,s.unEscapeStringFromRegex)(a).toLowerCase(),r=[],i=[],o="graph".startsWith(t);for(const a of e){if(a.state===s.PluginState.deprecated&&n.id!==a.id)continue;const e=a.name.toLowerCase().indexOf(t);0===e?r.push(a):e>0?i.push(a):o&&"timeseries"===a.id&&r.push(a)}return r.concat(i)}},"./public/app/features/plugins/components/PluginStateInfo.tsx":(e,a,n)=>{n.d(a,{u:()=>i});n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var s=n("./packages/grafana-ui/src/index.ts"),t=n("./packages/grafana-data/src/index.ts"),r=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{const a=function(e){switch(e){case t.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case t.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case t.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return a?(0,r.jsx)(s.Badge,{color:a.color,title:a.tooltip,text:a.text,icon:a.icon}):null}}}]);
//# sourceMappingURL=1832.15718e8e3083449662a7.js.map