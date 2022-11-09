"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[295],{"./public/app/angular/core_module.ts":(e,t,n)=>{n.d(t,{ZP:()=>s,hF:()=>a,rb:()=>i});var o=n("../../opt/drone/yarncache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js"),r=n.n(o);const a=r().module("grafana.core",["ngRoute"]),i=[a,r().module("grafana.controllers",[]),r().module("grafana.directives",[]),r().module("grafana.factories",[]),r().module("grafana.services",[]),r().module("grafana.filters",[]),r().module("grafana.routes",[])],s=a},"./public/app/features/plugins/components/AppRootPage.tsx":(e,t,n)=>{n.r(t),n.d(t,{default:()=>O,getAppPluginPageError:()=>S});var o,r=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a=n("./.yarn/__virtual__/react-dom-virtual-93e2c4839c/3/opt/drone/yarncache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js"),i=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},o(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s="html",p="svg",l=function(e,t){var n,o,r,a={};if(e===s)r=document.createElement("div");else{if(e!==p)throw new Error('Invalid element type "'+e+'" for createPortalNode: must be "html" or "svg".');r=document.createElementNS("http://www.w3.org/2000/svg","g")}if(t&&"object"==typeof t)for(var i=0,l=Object.entries(t.attributes);i<l.length;i++){var c=l[i],u=c[0],d=c[1];r.setAttribute(u,d)}var h={element:r,elementType:e,setPortalProps:function(e){a=e},getInitialPortalProps:function(){return a},mount:function(t,r){if(r!==o){if(h.unmount(),t!==n&&!function(e,t){if(t===s)return e instanceof HTMLElement;if(t===p)return e instanceof SVGElement;throw new Error('Unrecognized element type "'+t+'" for validateElementType.')}(t,e))throw new Error('Invalid element type for portal: "'+e+'" portalNodes must be used with '+e+" elements, but OutPortal is within <"+t.tagName+">.");t.replaceChild(h.element,r),n=t,o=r}},unmount:function(e){e&&e!==o||n&&o&&(n.replaceChild(o,h.element),n=void 0,o=void 0)}};return h},c=function(e){function t(t){var n=e.call(this,t)||this;return n.addPropsChannel=function(){Object.assign(n.props.node,{setPortalProps:function(e){n.setState({nodeProps:e})}})},n.state={nodeProps:n.props.node.getInitialPortalProps()},n}return i(t,e),t.prototype.componentDidMount=function(){this.addPropsChannel()},t.prototype.componentDidUpdate=function(){this.addPropsChannel()},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.node;return a.createPortal(r.Children.map(n,(function(t){return r.isValidElement(t)?r.cloneElement(t,e.state.nodeProps):t})),o.element)},t}(r.PureComponent),u=function(e){function t(t){var n=e.call(this,t)||this;return n.placeholderNode=r.createRef(),n.passPropsThroughPortal(),n}return i(t,e),t.prototype.passPropsThroughPortal=function(){var e=Object.assign({},this.props,{node:void 0});this.props.node.setPortalProps(e)},t.prototype.componentDidMount=function(){var e=this.props.node;this.currentPortalNode=e;var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentDidUpdate=function(){var e=this.props.node;this.currentPortalNode&&e!==this.currentPortalNode&&(this.currentPortalNode.unmount(this.placeholderNode.current),this.currentPortalNode=e);var t=this.placeholderNode.current,n=t.parentNode;e.mount(n,t),this.passPropsThroughPortal()},t.prototype.componentWillUnmount=function(){this.props.node.unmount(this.placeholderNode.current)},t.prototype.render=function(){return r.createElement("div",{ref:this.placeholderNode})},t}(r.PureComponent),d=l.bind(null,s),h=(l.bind(null,p),n("./packages/grafana-data/src/index.ts")),m=n("./public/app/angular/core_module.ts"),f=n("./public/app/core/config.ts");class g{constructor(){var e,t,n;n=void 0,(t="navItems")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,this.navItems=f.ZP.bootData.navTree}getCfgNode(){return this.navItems.find((e=>"cfg"===e.id))}getNav(){var e;let t=this.navItems;const n={breadcrumbs:[]};for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];for(const e of r){if("number"==typeof e){n.main=n.breadcrumbs[e];break}const o=t.find((t=>t.id===e));var i;if(o)n.breadcrumbs.push(o),n.node=o,n.main=o,t=null!==(i=o.children)&&void 0!==i?i:[]}if(null!==(e=n.main)&&void 0!==e&&e.children)for(const e of n.main.children){var s;e.active=e.url===(null===(s=n.node)||void 0===s?void 0:s.url)}return n}getNotFoundNav(){return v()}}function v(){return b("Page not found","404 Error")}function b(e,t){const n={text:e,subTitle:t,icon:"exclamation-triangle"};return{breadcrumbs:[n],node:n,main:n}}g.$inject=[],m.ZP.service("navModelSrv",g);var P,y,N,j=n("./public/app/core/components/Page/Page.tsx"),x=n("./public/app/core/components/PageLoader/PageLoader.tsx"),w=n("./public/app/core/core.ts"),_=n("./public/app/features/plugins/pluginSettings.ts"),C=n("./public/app/features/plugins/plugin_loader.ts"),E=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function S(e){return e?e.type!==h.PluginType.app?"Plugin must be an app":e.enabled?null:"Application Not Enabled":"Unknown Plugin"}class I extends r.Component{constructor(e){var t,n,o;super(e),o=e=>{this.setState({nav:e})},(n="onNavChanged")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,this.state={loading:!0,portalNode:d()}}shouldComponentUpdate(e){return e.location.pathname.startsWith("/a/")}async loadPluginSettings(){const{params:e}=this.props.match;try{const t=await(0,_.a)(e.pluginId).then((e=>{const t=S(e);return t?(w.h$.emit(h.AppEvents.alertError,[t]),this.setState({nav:b(t)}),null):(0,C.Av)(e)}));this.setState({plugin:t,loading:!1,nav:void 0})}catch(e){this.setState({plugin:null,loading:!1,nav:v()})}}componentDidMount(){this.loadPluginSettings()}componentDidUpdate(e){const{params:t}=this.props.match;e.match.params.pluginId!==t.pluginId&&(this.setState({loading:!0}),this.loadPluginSettings())}render(){const{loading:e,plugin:t,nav:n,portalNode:o}=this.state;return t&&this.props.match.params.pluginId===t.meta.id?t.root?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c,{node:o,children:(0,E.jsx)(t.root,{meta:t.meta,basename:this.props.match.url,onNavChanged:this.onNavChanged,query:this.props.queryParams,path:this.props.location.pathname})}),n?(0,E.jsx)(j.Z,{navModel:n,children:(0,E.jsx)(j.Z.Contents,{isLoading:e,children:(0,E.jsx)(u,{node:o})})}):(0,E.jsxs)(j.Z,{children:[(0,E.jsx)(u,{node:o}),e&&(N||(N=(0,E.jsx)(x.Z,{})))]})]}):y||(y=(0,E.jsx)("div",{children:"No Root App"})):P||(P=(0,E.jsx)(j.Z,{children:(0,E.jsx)(x.Z,{})}))}}const O=I}}]);
//# sourceMappingURL=AppRootPage.cf625893e14b53d42c9c.js.map