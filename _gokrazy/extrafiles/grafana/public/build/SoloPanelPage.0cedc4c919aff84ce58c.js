"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1034],{"./public/app/features/dashboard/containers/SoloPanelPage.tsx":(a,e,t)=>{t.r(e),t.d(e,{SoloPanelPage:()=>c,SoloPanel:()=>h,default:()=>b});var r,d=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),s=t("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/3/opt/drone/yarncache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),o=t("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx"),i=t("./public/app/features/dashboard/state/initDashboard.ts"),l=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const u={initDashboard:i.m},p=(0,n.connect)((a=>({dashboard:a.dashboard.getModel()})),u);class c extends d.Component{constructor(){var a,e,t;super(...arguments),t={panel:null,notFound:!1},(e="state")in(a=this)?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t}componentDidMount(){const{match:a,route:e}=this.props;this.props.initDashboard({urlSlug:a.params.slug,urlUid:a.params.uid,urlType:a.params.type,routeName:e.routeName,fixUrl:!1})}getPanelId(){var a;return parseInt(null!==(a=this.props.queryParams.panelId)&&void 0!==a?a:"0",10)}componentDidUpdate(a){const{dashboard:e}=this.props;if(e&&(!a.dashboard||a.dashboard.uid!==e.uid)){const a=e.getPanelByUrlId(this.props.queryParams.panelId);if(!a)return void this.setState({notFound:!0});this.setState({panel:a})}}render(){return(0,l.jsx)(h,{dashboard:this.props.dashboard,notFound:this.state.notFound,panel:this.state.panel,panelId:this.getPanelId()})}}const h=a=>{let{dashboard:e,notFound:t,panel:d,panelId:n}=a;return t?(0,l.jsxs)("div",{className:"alert alert-error",children:["Panel with id ",n," not found"]}):d&&e?(0,l.jsx)("div",{className:"panel-solo",children:(0,l.jsx)(s.Z,{children:a=>{let{width:t,height:r}=a;return 0===t?null:(0,l.jsx)(o.l,{stateKey:d.key,width:t,height:r,dashboard:e,panel:d,isEditing:!1,isViewing:!1,lazy:!1})}})}):r||(r=(0,l.jsx)("div",{children:"Loading & initializing dashboard"}))},b=p(c)}}]);
//# sourceMappingURL=SoloPanelPage.0cedc4c919aff84ce58c.js.map