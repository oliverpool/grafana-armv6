"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9782],{80414:(Fe,ie,l)=>{l.d(ie,{K:()=>ee});var t=l(671),U=l(3363),A=l(77213),se=l(34177);const R=({sourceUID:$,targetUID:j,...oe})=>({...oe,source:(0,A.F)().getInstanceSettings($),target:(0,A.F)().getInstanceSettings(j)}),me=$=>$.map(R);function h($){return $.data}const ee=()=>{const{backend:$}=(0,se.p)(),[j,oe]=(0,t.Z)(()=>(0,U.n)($.fetch({url:"/api/datasources/correlations",method:"GET",showErrorAlert:!1})).then(h).then(me),[$]),[pe,V]=(0,t.Z)(({sourceUID:L,...H})=>$.post(`/api/datasources/uid/${L}/correlations`,H).then(R),[$]),[J,he]=(0,t.Z)(({sourceUID:L,uid:H})=>$.delete(`/api/datasources/uid/${L}/correlations/${H}`),[$]),[le,W]=(0,t.Z)(({sourceUID:L,uid:H,...X})=>$.patch(`/api/datasources/uid/${L}/correlations/${H}`,X).then(R),[$]);return{create:{execute:V,...pe},update:{execute:W,...le},get:{execute:oe,...j},remove:{execute:he,...J}}}},91551:(Fe,ie,l)=>{l.d(ie,{N:()=>j});var t=l(68061),U=l(74188),A=l(85854),se=l(14582),R=l(89890),me=l(3249),h=l(85675);const ee="hideSeriesFrom",$=(0,t.Y4)(ee);function j(W,L,H,X){const{overrides:Y}=H,I=W,F=Y.findIndex($);if(F<0){if(L===h.R.ToggleSelection){const we=oe([I,...le(Y,X)]);return{...H,overrides:[...H.overrides,we]}}const q=he(X,I),Re=oe(q);return{...H,overrides:[...H.overrides,Re]}}const ne=Array.from(Y),[be]=ne.splice(F,1);if(L===h.R.ToggleSelection){let q=V(be);const Re=le(ne,X);if(Re.length>0&&(q=q.filter(P=>Re.indexOf(P)<0)),q[0]===I&&q.length===1)return{...H,overrides:ne};const we=oe([I,...Re]);return{...H,overrides:[...ne,we]}}const ge=pe(be,I);return J(ge,X)?{...H,overrides:ne}:{...H,overrides:[...ne,ge]}}function oe(W,L=U.Ys.exclude,H){return H=H??{id:"custom.hideFrom",value:{viz:!0,legend:!1,tooltip:!1}},{__systemRef:ee,matcher:{id:A.mi.byNames,options:{mode:L,names:W,prefix:L===U.Ys.exclude?"All except:":void 0,readOnly:!0}},properties:[{...H,value:{viz:!0,legend:!1,tooltip:!1}}]}}const pe=(W,L,H=U.Ys.exclude)=>{const X=W.properties.find(F=>F.id==="custom.hideFrom"),Y=V(W),I=Y.findIndex(F=>F===L);return I<0?Y.push(L):Y.splice(I,1),oe(Y,H,X)},V=W=>{const L=W.matcher.options?.names;return Array.isArray(L)?[...L]:[]},J=(W,L)=>V(W).length===he(L).length,he=(W,L)=>{const H=new Set;for(const X of W)for(const Y of X.fields){if(Y.type!==se.fS.number)continue;const I=(0,R.C)(Y,X,W);I!==L&&H.add(I)}return Array.from(H)},le=(W,L)=>{let H=[];for(const X of W){const Y=X.properties.find(I=>I.id==="custom.hideFrom");if(Y!==void 0&&Y.value?.legend===!0){const F=me.Ls.get(X.matcher.id).get(X.matcher.options);for(const ne of L)for(const be of ne.fields){if(be.type!==se.fS.number)continue;const ge=(0,R.C)(be,ne,L);F(be,ne,L)&&H.push(ge)}}}return H}},52547:(Fe,ie,l)=>{l.r(ie),l.d(ie,{default:()=>Ga});var t=l(68404),U=l(58252),A=l(93003),se=l(87513),R=l(81168),me=l(25e3),h=l(52423),ee=l(82897),$=l(98101),j=l(49922),oe=l(57388),pe=l(71235),V=l(78758),J=l(80177),he=l(34177),le=l(60499),W=l(76770),L=l(3032),H=l(36578),X=l(80414),Y=l(55560),I=l(48197),F=l(73257),ne=l(75090);const be=({exploreIdLeft:e,exploreIdRight:n})=>{const[s,o]=(0,t.useState)([]),{query:a}=(0,Y.useKBar)(),r=(0,R.useDispatch)(),i=(0,R.useSelector)(ne.p);return(0,t.useEffect)(()=>{const c={name:"Explore",priority:Y.Priority.HIGH+1},d=[];i?(d.push({id:"explore/run-query-left",name:"Run query (left)",keywords:"query left",perform:()=>{r((0,F.aA)(e))},section:c}),n&&(d.push({id:"explore/run-query-right",name:"Run query (right)",keywords:"query right",perform:()=>{r((0,F.aA)(n))},section:c}),d.push({id:"explore/split-view-close-left",name:"Close split view left",keywords:"split",perform:()=>{r((0,I.YV)(e))},section:c}),d.push({id:"explore/split-view-close-right",name:"Close split view right",keywords:"split",perform:()=>{r((0,I.YV)(n))},section:c}))):(d.push({id:"explore/run-query",name:"Run query",keywords:"query",perform:()=>{r((0,F.aA)(e))},section:c}),d.push({id:"explore/split-view-open",name:"Open split view",keywords:"split",perform:()=>{r((0,I.bW)())},section:c})),o(d)},[e,n,i,a,r]),(0,Y.useRegisterActions)(a?s:[],[s,a]),null};var ge=l(58635),q=l(36635),Re=l(85081),we=l(68183),P=l(77274),N=l(29516),Oe=l(47694),te=l(58379),Ee=l(55935),Qe=l(63496),Ue=l(91162),De=l(25405),hs=l(89050),O=l(90595),Me=l(77213),Ve=l(2323),St=l(49938),bt=l(48888),wt=l(15745),st=l(97063),gs=l(41141);const Rt=e=>{const n={transition:`opacity ${e.duration}ms linear`,opacity:0},s={exited:{opacity:0,display:"none"},entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0}};return t.createElement(gs.ZP,{in:e.in,timeout:e.duration,unmountOnExit:e.unmountOnExit||!1,onExited:e.onExited},o=>t.createElement("div",{style:{...n,...s[o]}},e.children))};var $e=l(40967),ms=l(68545),ot=l(45984),Ae=l(40400),Ct=l(68972),fs=l(97394),ys=function(){var e=function(n,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])},e(n,s)};return function(n,s){e(n,s);function o(){this.constructor=n}n.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}}(),Z=function(){return Z=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)},Tt={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},Lt={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},Ze={width:"20px",height:"20px",position:"absolute"},vs={top:Z(Z({},Tt),{top:"-5px"}),right:Z(Z({},Lt),{left:void 0,right:"-5px"}),bottom:Z(Z({},Tt),{top:void 0,bottom:"-5px"}),left:Z(Z({},Lt),{left:"-5px"}),topRight:Z(Z({},Ze),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:Z(Z({},Ze),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:Z(Z({},Ze),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:Z(Z({},Ze),{left:"-10px",top:"-10px",cursor:"nw-resize"})},Es=function(e){ys(n,e);function n(){var s=e!==null&&e.apply(this,arguments)||this;return s.onMouseDown=function(o){s.props.onResizeStart(o,s.props.direction)},s.onTouchStart=function(o){s.props.onResizeStart(o,s.props.direction)},s}return n.prototype.render=function(){return t.createElement("div",{className:this.props.className||"",style:Z(Z({position:"absolute",userSelect:"none"},vs[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},n}(t.PureComponent),xs=function(){var e=function(n,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])},e(n,s)};return function(n,s){e(n,s);function o(){this.constructor=n}n.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}}(),fe=function(){return fe=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},fe.apply(this,arguments)},Ss={width:"auto",height:"auto"},Ge=function(e,n,s){return Math.max(Math.min(e,s),n)},zt=function(e,n){return Math.round(e/n)*n},Ne=function(e,n){return new RegExp(e,"i").test(n)},je=function(e){return Boolean(e.touches&&e.touches.length)},bs=function(e){return Boolean((e.clientX||e.clientX===0)&&(e.clientY||e.clientY===0))},It=function(e,n,s){s===void 0&&(s=0);var o=n.reduce(function(r,i,c){return Math.abs(i-e)<Math.abs(n[r]-e)?c:r},0),a=Math.abs(n[o]-e);return s===0||a<s?n[o]:e},nt=function(e){return e=e.toString(),e==="auto"||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:e+"px"},Ke=function(e,n,s,o){if(e&&typeof e=="string"){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var a=Number(e.replace("%",""))/100;return n*a}if(e.endsWith("vw")){var a=Number(e.replace("vw",""))/100;return s*a}if(e.endsWith("vh")){var a=Number(e.replace("vh",""))/100;return o*a}}return e},ws=function(e,n,s,o,a,r,i){return o=Ke(o,e.width,n,s),a=Ke(a,e.height,n,s),r=Ke(r,e.width,n,s),i=Ke(i,e.height,n,s),{maxWidth:typeof o>"u"?void 0:Number(o),maxHeight:typeof a>"u"?void 0:Number(a),minWidth:typeof r>"u"?void 0:Number(r),minHeight:typeof i>"u"?void 0:Number(i)}},Rs=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Ft="__resizable_base__",Cs=function(e){xs(n,e);function n(s){var o=e.call(this,s)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.appendBase=function(){if(!o.resizable||!o.window)return null;var a=o.parentNode;if(!a)return null;var r=o.window.document.createElement("div");return r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.transform="scale(0, 0)",r.style.left="0",r.style.flex="0 0 100%",r.classList?r.classList.add(Ft):r.className+=Ft,a.appendChild(r),r},o.removeBase=function(a){var r=o.parentNode;r&&r.removeChild(a)},o.ref=function(a){a&&(o.resizable=a)},o.state={isResizing:!1,width:typeof(o.propsSize&&o.propsSize.width)>"u"?"auto":o.propsSize&&o.propsSize.width,height:typeof(o.propsSize&&o.propsSize.height)>"u"?"auto":o.propsSize&&o.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return Object.defineProperty(n.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||Ss},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){var s=0,o=0;if(this.resizable&&this.window){var a=this.resizable.offsetWidth,r=this.resizable.offsetHeight,i=this.resizable.style.position;i!=="relative"&&(this.resizable.style.position="relative"),s=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:a,o=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:r,this.resizable.style.position=i}return{width:s,height:o}},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"sizeStyle",{get:function(){var s=this,o=this.props.size,a=function(c){if(typeof s.state[c]>"u"||s.state[c]==="auto")return"auto";if(s.propsSize&&s.propsSize[c]&&s.propsSize[c].toString().endsWith("%")){if(s.state[c].toString().endsWith("%"))return s.state[c].toString();var d=s.getParentSize(),p=Number(s.state[c].toString().replace("px","")),u=p/d[c]*100;return u+"%"}return nt(s.state[c])},r=o&&typeof o.width<"u"&&!this.state.isResizing?nt(o.width):a("width"),i=o&&typeof o.height<"u"&&!this.state.isResizing?nt(o.height):a("height");return{width:r,height:i}},enumerable:!1,configurable:!0}),n.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var s=this.appendBase();if(!s)return{width:0,height:0};var o=!1,a=this.parentNode.style.flexWrap;a!=="wrap"&&(o=!0,this.parentNode.style.flexWrap="wrap"),s.style.position="relative",s.style.minWidth="100%",s.style.minHeight="100%";var r={width:s.offsetWidth,height:s.offsetHeight};return o&&(this.parentNode.style.flexWrap=a),this.removeBase(s),r},n.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},n.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},n.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var s=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:s.flexBasis!=="auto"?s.flexBasis:void 0})}},n.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},n.prototype.createSizeForCssProperty=function(s,o){var a=this.propsSize&&this.propsSize[o];return this.state[o]==="auto"&&this.state.original[o]===s&&(typeof a>"u"||a==="auto")?"auto":s},n.prototype.calculateNewMaxFromBoundary=function(s,o){var a=this.props.boundsByDirection,r=this.state.direction,i=a&&Ne("left",r),c=a&&Ne("top",r),d,p;if(this.props.bounds==="parent"){var u=this.parentNode;u&&(d=i?this.resizableRight-this.parentLeft:u.offsetWidth+(this.parentLeft-this.resizableLeft),p=c?this.resizableBottom-this.parentTop:u.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(d=i?this.resizableRight:this.window.innerWidth-this.resizableLeft,p=c?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(d=i?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),p=c?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return d&&Number.isFinite(d)&&(s=s&&s<d?s:d),p&&Number.isFinite(p)&&(o=o&&o<p?o:p),{maxWidth:s,maxHeight:o}},n.prototype.calculateNewSizeFromDirection=function(s,o){var a=this.props.scale||1,r=this.props.resizeRatio||1,i=this.state,c=i.direction,d=i.original,p=this.props,u=p.lockAspectRatio,m=p.lockAspectRatioExtraHeight,g=p.lockAspectRatioExtraWidth,y=d.width,f=d.height,v=m||0,E=g||0;return Ne("right",c)&&(y=d.width+(s-d.x)*r/a,u&&(f=(y-E)/this.ratio+v)),Ne("left",c)&&(y=d.width-(s-d.x)*r/a,u&&(f=(y-E)/this.ratio+v)),Ne("bottom",c)&&(f=d.height+(o-d.y)*r/a,u&&(y=(f-v)*this.ratio+E)),Ne("top",c)&&(f=d.height-(o-d.y)*r/a,u&&(y=(f-v)*this.ratio+E)),{newWidth:y,newHeight:f}},n.prototype.calculateNewSizeFromAspectRatio=function(s,o,a,r){var i=this.props,c=i.lockAspectRatio,d=i.lockAspectRatioExtraHeight,p=i.lockAspectRatioExtraWidth,u=typeof r.width>"u"?10:r.width,m=typeof a.width>"u"||a.width<0?s:a.width,g=typeof r.height>"u"?10:r.height,y=typeof a.height>"u"||a.height<0?o:a.height,f=d||0,v=p||0;if(c){var E=(g-f)*this.ratio+v,x=(y-f)*this.ratio+v,w=(u-v)/this.ratio+f,S=(m-v)/this.ratio+f,b=Math.max(u,E),C=Math.min(m,x),B=Math.max(g,w),K=Math.min(y,S);s=Ge(s,b,C),o=Ge(o,B,K)}else s=Ge(s,u,m),o=Ge(o,g,y);return{newWidth:s,newHeight:o}},n.prototype.setBoundingClientRect=function(){if(this.props.bounds==="parent"){var s=this.parentNode;if(s){var o=s.getBoundingClientRect();this.parentLeft=o.left,this.parentTop=o.top}}if(this.props.bounds&&typeof this.props.bounds!="string"){var a=this.props.bounds.getBoundingClientRect();this.targetLeft=a.left,this.targetTop=a.top}if(this.resizable){var r=this.resizable.getBoundingClientRect(),i=r.left,c=r.top,d=r.right,p=r.bottom;this.resizableLeft=i,this.resizableRight=d,this.resizableTop=c,this.resizableBottom=p}},n.prototype.onResizeStart=function(s,o){if(!(!this.resizable||!this.window)){var a=0,r=0;if(s.nativeEvent&&bs(s.nativeEvent)?(a=s.nativeEvent.clientX,r=s.nativeEvent.clientY):s.nativeEvent&&je(s.nativeEvent)&&(a=s.nativeEvent.touches[0].clientX,r=s.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var i=this.props.onResizeStart(s,o,this.resizable);if(i===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var c,d=this.window.getComputedStyle(this.resizable);if(d.flexBasis!=="auto"){var p=this.parentNode;if(p){var u=this.window.getComputedStyle(p).flexDirection;this.flexDir=u.startsWith("row")?"row":"column",c=d.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var m={original:{x:a,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:fe(fe({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(s.target).cursor||"auto"}),direction:o,flexBasis:c};this.setState(m)}},n.prototype.onMouseMove=function(s){var o=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&je(s))try{s.preventDefault(),s.stopPropagation()}catch{}var a=this.props,r=a.maxWidth,i=a.maxHeight,c=a.minWidth,d=a.minHeight,p=je(s)?s.touches[0].clientX:s.clientX,u=je(s)?s.touches[0].clientY:s.clientY,m=this.state,g=m.direction,y=m.original,f=m.width,v=m.height,E=this.getParentSize(),x=ws(E,this.window.innerWidth,this.window.innerHeight,r,i,c,d);r=x.maxWidth,i=x.maxHeight,c=x.minWidth,d=x.minHeight;var w=this.calculateNewSizeFromDirection(p,u),S=w.newHeight,b=w.newWidth,C=this.calculateNewMaxFromBoundary(r,i);this.props.snap&&this.props.snap.x&&(b=It(b,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(S=It(S,this.props.snap.y,this.props.snapGap));var B=this.calculateNewSizeFromAspectRatio(b,S,{width:C.maxWidth,height:C.maxHeight},{width:c,height:d});if(b=B.newWidth,S=B.newHeight,this.props.grid){var K=zt(b,this.props.grid[0]),G=zt(S,this.props.grid[1]),T=this.props.snapGap||0;b=T===0||Math.abs(K-b)<=T?K:b,S=T===0||Math.abs(G-S)<=T?G:S}var D={width:b-y.width,height:S-y.height};if(f&&typeof f=="string"){if(f.endsWith("%")){var Q=b/E.width*100;b=Q+"%"}else if(f.endsWith("vw")){var de=b/this.window.innerWidth*100;b=de+"vw"}else if(f.endsWith("vh")){var z=b/this.window.innerHeight*100;b=z+"vh"}}if(v&&typeof v=="string"){if(v.endsWith("%")){var Q=S/E.height*100;S=Q+"%"}else if(v.endsWith("vw")){var de=S/this.window.innerWidth*100;S=de+"vw"}else if(v.endsWith("vh")){var z=S/this.window.innerHeight*100;S=z+"vh"}}var M={width:this.createSizeForCssProperty(b,"width"),height:this.createSizeForCssProperty(S,"height")};this.flexDir==="row"?M.flexBasis=M.width:this.flexDir==="column"&&(M.flexBasis=M.height),(0,fs.flushSync)(function(){o.setState(M)}),this.props.onResize&&this.props.onResize(s,g,this.resizable,D)}},n.prototype.onMouseUp=function(s){var o=this.state,a=o.isResizing,r=o.direction,i=o.original;if(!(!a||!this.resizable)){var c={width:this.size.width-i.width,height:this.size.height-i.height};this.props.onResizeStop&&this.props.onResizeStop(s,r,this.resizable,c),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:fe(fe({},this.state.backgroundStyle),{cursor:"auto"})})}},n.prototype.updateSize=function(s){this.setState({width:s.width,height:s.height})},n.prototype.renderResizer=function(){var s=this,o=this.props,a=o.enable,r=o.handleStyles,i=o.handleClasses,c=o.handleWrapperStyle,d=o.handleWrapperClass,p=o.handleComponent;if(!a)return null;var u=Object.keys(a).map(function(m){return a[m]!==!1?t.createElement(Es,{key:m,direction:m,onResizeStart:s.onResizeStart,replaceStyles:r&&r[m],className:i&&i[m]},p&&p[m]?p[m]:null):null});return t.createElement("div",{className:d,style:c},u)},n.prototype.render=function(){var s=this,o=Object.keys(this.props).reduce(function(i,c){return Rs.indexOf(c)!==-1||(i[c]=s.props[c]),i},{}),a=fe(fe(fe({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(a.flexBasis=this.state.flexBasis);var r=this.props.as||"div";return t.createElement(r,fe({ref:this.ref,style:a,className:this.props.className},o),this.state.isResizing&&t.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},n.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},n}(t.PureComponent),Ts=l(82385);const Ls=e=>h.keyframes`
  0% {
    transform: translateY(${e.components.horizontalDrawer.defaultHeight}px);
  }

  100% {
    transform: translateY(0px);
  }
`,zs=(0,Ts.B)(e=>({container:h.css`
      position: fixed !important;
      bottom: 0;
      background: ${e.colors.background.primary};
      border-top: 1px solid ${e.colors.border.weak};
      margin: ${e.spacing(0,-2,0,-2)};
      box-shadow: ${e.shadows.z3};
      z-index: ${e.zIndex.navbarFixed};
    `,drawerActive:h.css`
      opacity: 1;
      animation: 0.5s ease-out ${Ls(e)};
    `,rzHandle:h.css`
      background: ${e.colors.secondary.main};
      transition: 0.3s background ease-in-out;
      position: relative;
      width: 200px !important;
      height: 7px !important;
      left: calc(50% - 100px) !important;
      top: -4px !important;
      cursor: grab;
      border-radius: 4px;
      &:hover {
        background: ${e.colors.secondary.shade};
      }
    `}));function Dt(e){const{width:n,children:s,onResize:o}=e,a=(0,N.l4)(),r=zs(a),i=`${n+31.5}px`;return t.createElement(Cs,{className:(0,h.cx)(r.container,r.drawerActive),defaultSize:{width:i,height:`${a.components.horizontalDrawer.defaultHeight}px`},handleClasses:{top:r.rzHandle},enable:{top:!0,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},maxHeight:"100vh",maxWidth:i,minWidth:i,onResize:o},s)}var Is=l(21957),Fs=l(46835),Ds=l(18893),Ns=l(82090),Ps=l(72062);function Hs(e){const{loading:n,width:s,onClose:o,queryResponse:a,timeZone:r}=e,i=a?.series||[],c=a?.error;(0,t.useEffect)(()=>{(0,P.ff)("grafana_explore_query_inspector_opened")},[]);const d={label:"Stats",value:"stats",icon:"chart-line",content:t.createElement(Ns.f,{data:a,timeZone:a?.request?.timezone})},p={label:"JSON",value:"json",icon:"brackets-curly",content:t.createElement(Ds.W,{data:a,onClose:o})},u={label:"Data",value:"data",icon:"database",content:t.createElement(Is.E,{data:i,isLoading:n,options:{withTransforms:!1,withFieldConfig:!1},timeZone:r,app:Ae.zj.Explore})},m={label:"Query",value:"query",icon:"info-circle",content:t.createElement(Ps.D,{data:i,onRefreshQuery:()=>e.runQueries(e.exploreId)})},g=[d,m,p,u];if(c){const y={label:"Error",value:"error",icon:"exclamation-triangle",content:t.createElement(Fs.l,{error:c})};g.push(y)}return t.createElement(Dt,{width:s},t.createElement(Ct.W,{tabs:g,onClose:o,closeIconTooltip:"Close query inspector"}))}function Os(e,{exploreId:n}){const o=e.explore[n],{loading:a,queryResponse:r}=o;return{loading:a,queryResponse:r}}const Ms={runQueries:F.aA},$s=(0,q.connect)(Os,Ms)(Hs);var As=l(2248),Ye=l(45781),Ce=l(26408),Nt=l(75952),Bs=l(59459),Ws=l(10129),ks=l(95379),Pe=l(77582),Pt=l(57465),Qs=l(64503),Us=l(19349),Ht=l(54294),xe=l(46519),Ot=l(21053),Vs=l(32873),Mt=l(5242),Je=l(48756);function Zs(e){const{onClick:n,isSynced:s}=e,o=()=>{const{isSynced:a}=e,r=a?"Unsync all views":"Sync all views to this time range";return t.createElement(t.Fragment,null,r)};return t.createElement(Je.u,{content:o,placement:"bottom"},t.createElement(Ce.h,{icon:"link",variant:s?"active":"canvas","aria-label":s?"Synced times":"Unsynced times",onClick:n}))}class Gs extends t.Component{constructor(){super(...arguments),this.onMoveTimePicker=n=>{const{range:s,onChangeTime:o,timeZone:a}=this.props,{from:r,to:i}=(0,Mt.e)(n,s),c={from:(0,xe.GY)(a,r),to:(0,xe.GY)(a,i)};o(c)},this.onMoveForward=()=>this.onMoveTimePicker(1),this.onMoveBack=()=>this.onMoveTimePicker(-1),this.onChangeTimePicker=n=>{const s=Ot.isMathString(n.raw.from)?n.raw.from:n.from,o=Ot.isMathString(n.raw.to)?n.raw.to:n.to;this.props.onChangeTime({from:s,to:o}),(0,P.ff)("grafana_explore_time_picker_time_range_changed",{timeRangeFrom:s,timeRangeTo:o})},this.onZoom=()=>{const{range:n,onChangeTime:s,timeZone:o}=this.props,{from:a,to:r}=(0,Mt.h)(n,2),i={from:(0,xe.GY)(o,a),to:(0,xe.GY)(o,r)};s(i)}}render(){const{range:n,timeZone:s,fiscalYearStartMonth:o,splitted:a,syncedTimes:r,onChangeTimeSync:i,hideText:c,onChangeTimeZone:d,onChangeFiscalYearStartMonth:p}=this.props,u=a?t.createElement(Zs,{onClick:i,isSynced:r}):void 0,m={value:n,timeZone:s,fiscalYearStartMonth:o,onMoveBackward:this.onMoveBack,onMoveForward:this.onMoveForward,onZoom:this.onZoom,hideText:c};return t.createElement(Vs.a,{isOnCanvas:!0,...m,timeSyncButton:u,isSynced:r,widthOverride:a?window.innerWidth/2:void 0,onChange:this.onChangeTimePicker,onChangeTimeZone:d,onChangeFiscalYearStartMonth:p})}}var $t=l(22163);function js(e){const{start:n,pause:s,resume:o,isLive:a,isPaused:r,stop:i,splitted:c}=e,d=a&&!r?"active":"canvas",p=a?r?o:s:n;return t.createElement(Nt.h,null,t.createElement(Je.u,{content:a&&!r?t.createElement(t.Fragment,null,"Pause the live stream"):t.createElement(t.Fragment,null,"Start live stream your logs"),placement:"bottom"},t.createElement(Ce.h,{iconOnly:c,variant:d,icon:!a||r?"play":"pause",onClick:p},a&&r?"Paused":"Live")),t.createElement($t.Z,{mountOnEnter:!0,unmountOnExit:!0,timeout:100,in:a,classNames:{enter:Xe.stopButtonEnter,enterActive:Xe.stopButtonEnterActive,exit:Xe.stopButtonExit,exitActive:Xe.stopButtonExitActive}},t.createElement(Je.u,{content:t.createElement(t.Fragment,null,"Stop and exit the live stream"),placement:"bottom"},t.createElement(Ce.h,{variant:d,onClick:i,icon:"square-shape"}))))}const Xe={stopButtonEnter:h.css`
    label: stopButtonEnter;
    width: 0;
    opacity: 0;
    overflow: hidden;
  `,stopButtonEnterActive:h.css`
    label: stopButtonEnterActive;
    opacity: 1;
    width: 32px;
  `,stopButtonExit:h.css`
    label: stopButtonExit;
    width: 32px;
    opacity: 1;
    overflow: hidden;
  `,stopButtonExitActive:h.css`
    label: stopButtonExitActive;
    opacity: 0;
    width: 0;
  `};var At=l(46526),Te=l(86297);function Ks(e){const n=(0,R.useDispatch)(),s=(0,t.useCallback)(()=>{n((0,F.sQ)({exploreId:e,isPaused:!0}))},[e,n]),o=(0,t.useCallback)(()=>{n((0,F.sQ)({exploreId:e,isPaused:!1}))},[e,n]),a=(0,t.useCallback)(()=>{s(),n((0,Te.oz)(e,Ye.dP.offOption.value)),n((0,F.aA)(e))},[e,n,s]),r=(0,t.useCallback)(()=>{n((0,Te.oz)(e,Ye.dP.liveOption.value))},[e,n]);return{pause:s,resume:o,stop:a,start:r}}function Bt(e){const n=Ks(e.exploreId);return e.children(n)}const Ys=(0,t.lazy)(()=>l.e(2319).then(l.bind(l,2319)).then(({AddToDashboard:e})=>({default:e}))),Js=(e,n)=>({rotateIcon:(0,h.css)({"> div > svg":{transform:e==="left"&&n||e==="right"&&!n?"rotate(180deg)":"none"}})});class Xs extends t.PureComponent{constructor(){super(...arguments),this.onChangeDatasource=async n=>{const{changeDatasource:s,exploreId:o}=this.props;s(o,n.uid,{importQueries:!0})},this.onRunQuery=(n=!1)=>{const{runQueries:s,cancelQueries:o,exploreId:a}=this.props;return n?o(a):s(a)},this.onChangeRefreshInterval=n=>{const{changeRefreshInterval:s,exploreId:o}=this.props;s(o,n)},this.onChangeTimeSync=()=>{const{syncTimes:n,exploreId:s}=this.props;n(s)},this.onCopyShortLink=async()=>{await(0,Pt.L)(window.location.href),(0,P.ff)("grafana_explore_shortened_link_clicked")},this.onOpenSplitView=()=>{const{split:n}=this.props;n(),(0,P.ff)("grafana_explore_split_view_opened",{origin:"menu"})},this.onCloseSplitView=()=>{const{closeSplit:n,exploreId:s}=this.props;n(s),(0,P.ff)("grafana_explore_split_view_closed")},this.renderRefreshPicker=n=>{const{loading:s,refreshInterval:o,isLive:a}=this.props;let r=s?"Cancel":"Run query",i,c="108px";return n&&(i=r,r=void 0,c="35px"),t.createElement(Ye.dP,{key:"refreshPicker",onIntervalChanged:this.onChangeRefreshInterval,value:o,isLoading:s,text:r,tooltip:i,intervals:(0,Us.$t)().getValidIntervals(Ye.o5),isLive:a,onRefresh:()=>this.onRunQuery(s),noIntervalPicker:a,primary:!0,width:c})},this.renderActions=()=>{const{splitted:n,isLive:s,exploreId:o,range:a,timeZone:r,fiscalYearStartMonth:i,onChangeTime:c,syncedTimes:d,onChangeTimeZone:p,onChangeFiscalYearStartMonth:u,isPaused:m,hasLiveOption:g,containerWidth:y,largerExploreId:f}=this.props,v=n||y<1210,E=f===o,x=Js(o,E),w=Pe.Vt.hasAccess(R.AccessControlAction.DashboardsCreate,Pe.Vt.isEditor)||Pe.Vt.hasAccess(R.AccessControlAction.DashboardsWrite,Pe.Vt.isEditor),S=()=>{E?this.props.evenPaneResizeAction():this.props.maximizePaneAction({exploreId:o})};return[n?t.createElement(Nt.h,{key:"split-controls"},t.createElement(Ce.h,{variant:"canvas",tooltip:`${E?"Narrow":"Widen"} pane`,onClick:S,icon:E?"gf-movepane-left":"gf-movepane-right",iconOnly:!0,className:x.rotateIcon}),t.createElement(Ce.h,{tooltip:"Close split pane",onClick:this.onCloseSplitView,icon:"times",variant:"canvas"},"Close")):t.createElement(Ce.h,{variant:"canvas",key:"split",tooltip:"Split the pane",onClick:this.onOpenSplitView,icon:"columns",disabled:s},"Split"),w&&t.createElement(t.Suspense,{key:"addToDashboard",fallback:null},t.createElement(Ys,{exploreId:o})),!s&&t.createElement(Gs,{key:"timeControls",exploreId:o,range:a,timeZone:r,fiscalYearStartMonth:i,onChangeTime:c,splitted:n,syncedTimes:d,onChangeTimeSync:this.onChangeTimeSync,hideText:v,onChangeTimeZone:p,onChangeFiscalYearStartMonth:u}),this.renderRefreshPicker(v),g&&t.createElement(Bt,{key:"liveControls",exploreId:o},b=>{const C={...b,start:()=>{(0,P.ff)("grafana_explore_logs_live_tailing_clicked",{datasourceType:this.props.datasourceType}),b.start()}};return t.createElement(js,{splitted:n,isLive:s,isPaused:m,start:C.start,pause:C.pause,resume:C.resume,stop:C.stop})})].filter(Boolean)}}render(){const{datasourceMissing:n,exploreId:s,splitted:o,containerWidth:a,topOfViewRef:r,refreshInterval:i,loading:c}=this.props,d=(o?a<700:a<800)||!1,p=A.v.featureToggles.topnav,u=t.createElement(Qs.u,{key:"share",tooltip:"Copy shortened link",icon:"share-alt",onClick:this.onCopyShortLink,"aria-label":"Copy shortened link"}),m=()=>!n&&t.createElement(As.q,{key:`${s}-ds-picker`,mixed:A.v.featureToggles.exploreMixedDatasource===!0,onChange:this.onChangeDatasource,current:this.props.datasourceRef,hideTextValue:d,width:d?8:void 0}),g=[!p&&s===L.Kd.left&&u,m()].filter(Boolean);return t.createElement("div",{ref:r},i&&t.createElement(Bs.F,{func:this.onRunQuery,interval:i,loading:c}),p&&t.createElement("div",{ref:r},t.createElement(ks.A,{actions:[u,t.createElement("div",{style:{flex:1},key:"spacer"})]})),t.createElement(Ws.X,{"aria-label":"Explore toolbar",title:s===L.Kd.left&&!p?"Explore":void 0,pageIcon:s===L.Kd.left&&!p?"compass":void 0,leftItems:g},this.renderActions()))}}const qs=(e,{exploreId:n})=>{const{syncedTimes:s,largerExploreId:o}=e.explore,a=e.explore[n],{datasourceInstance:r,datasourceMissing:i,range:c,refreshInterval:d,loading:p,isLive:u,isPaused:m,containerWidth:g}=a,y=!!r?.meta?.streaming;return{datasourceMissing:i,datasourceRef:r?.getRef(),datasourceType:r?.type,loading:p,range:c,timeZone:(0,De.Z)(e.user),fiscalYearStartMonth:(0,De.i)(e.user),splitted:(0,ne.p)(e),refreshInterval:d,hasLiveOption:y,isLive:u,isPaused:m,syncedTimes:s,containerWidth:g,largerExploreId:o}},_s={changeDatasource:At.zU,changeRefreshInterval:Te.oz,cancelQueries:F.ci,runQueries:F.aA,closeSplit:I.YV,split:I.bW,syncTimes:Te.mG,onChangeTimeZone:Ht.YT,onChangeFiscalYearStartMonth:Ht.rf,maximizePaneAction:I.nL,evenPaneResizeAction:I.AP},eo=(0,q.connect)(qs,_s)(Xs);var to=l(35450);const so=e=>{const n=(0,N.wW)(s=>oo(s));return t.createElement("div",{className:n.container},t.createElement(to.Z,{data:e.dataFrames[0],app:Ae.zj.Explore}))},oo=e=>({container:h.css`
    background: ${e.colors.background.primary};
    display: flow-root;
    padding: 0 ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)};
    border: 1px solid ${e.components.panel.borderColor};
    border-radius: ${e.shape.borderRadius(1)};
  `});var ye=l(7917),Wt=l(16983),no=function(e){return(e+1)%1e6};function ao(){var e=(0,t.useReducer)(no,0),n=e[1];return n}function Le(e,n){return typeof e=="function"?e.length?e(n):e():e}function ro(e){var n=(0,t.useRef)(Le(e)),s=ao();return(0,t.useMemo)(function(){return[function(){return n.current},function(o){n.current=Le(o,n.current),s()}]},[])}function io(e,n,s){e===void 0&&(e=0),n===void 0&&(n=null),s===void 0&&(s=null);var o=Le(e);typeof o!="number"&&console.error("initialValue has to be a number, got "+typeof e),typeof s=="number"?o=Math.max(o,s):s!==null&&console.error("min has to be a number, got "+typeof s),typeof n=="number"?o=Math.min(o,n):n!==null&&console.error("max has to be a number, got "+typeof n);var a=ro(o),r=a[0],i=a[1];return[r(),(0,t.useMemo)(function(){var c=function(d){var p=r(),u=Le(d,p);p!==u&&(typeof s=="number"&&(u=Math.max(u,s)),typeof n=="number"&&(u=Math.min(u,n)),p!==u&&i(u))};return{get:r,set:c,inc:function(d){d===void 0&&(d=1);var p=Le(d,r());typeof p!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof p),c(function(u){return u+p})},dec:function(d){d===void 0&&(d=1);var p=Le(d,r());typeof p!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof p),c(function(u){return u-p})},reset:function(d){d===void 0&&(d=o);var p=Le(d,r());typeof p!="number"&&console.error("value has to be a number or function returning a number, got "+typeof p),o=p,c(p)}}},[o,s,n])]}var lo=l(39778),co=l(66926),qe=l(36998),uo=l(89890),po=l(29431),ho=l(73274),ae=l(40538),ze=l(81697),k=l(90723),kt=l(56703),go=l(91551),mo=l(64421);function fo(e,n){return(0,mo.ZP)(e,s=>{s.defaults.custom===void 0&&(s.defaults.custom={});const{custom:o}=s.defaults;switch(o.stacking===void 0&&(o.stacking={group:"A"}),n){case"lines":o.drawStyle=ae.l8.Line,o.stacking.mode=ae.o0.None,o.fillOpacity=0;break;case"bars":o.drawStyle=ae.l8.Bars,o.stacking.mode=ae.o0.None,o.fillOpacity=100;break;case"points":o.drawStyle=ae.l8.Points,o.stacking.mode=ae.o0.None,o.fillOpacity=0;break;case"stacked_lines":o.drawStyle=ae.l8.Line,o.stacking.mode=ae.o0.Normal,o.fillOpacity=100;break;case"stacked_bars":o.drawStyle=ae.l8.Bars,o.stacking.mode=ae.o0.Normal,o.fillOpacity=100;break;default:{const a=n;throw new Error(`Invalid graph-style: ${a}`)}}})}const at=20;function Qt({data:e,height:n,width:s,timeZone:o,absoluteRange:a,onChangeTime:r,loadingState:i,annotations:c,onHiddenSeriesChanged:d,splitOpenFn:p,graphStyle:u,tooltipDisplayMode:m=ae.f3.Single,anchorToZero:g=!1,eventBus:y}){const f=(0,N.l4)(),v=(0,N.wW)(yo),[E,x]=(0,t.useState)(!1),[w,{inc:S}]=io(0),b=(0,t.useMemo)(()=>(0,lo.j)((0,kt.F)(kt.r),"Explore"),[]),[C,B]=(0,t.useState)({defaults:{min:g?0:void 0,color:{mode:co.S.PaletteClassic},custom:{drawStyle:ae.l8.Line,fillOpacity:0,pointSize:5}},overrides:[]}),K={from:(0,xe.CQ)(a.from),to:(0,xe.CQ)(a.to),raw:{from:(0,xe.CQ)(a.from),to:(0,xe.CQ)(a.to)}},G=(0,t.useMemo)(()=>fo(C,u),[C,u]),T=(0,t.useMemo)(()=>(0,qe.SM)({fieldConfig:G,data:e,timeZone:o,replaceVariables:z=>z,theme:f,fieldConfigRegistry:b}),[b,e,o,f,G]),D=E?T:T.slice(0,at);(0,t.useMemo)(S,[T.length,G,D.length,S]),(0,t.useEffect)(()=>{if(d){const z=[];T.forEach(M=>{M.fields.map(vt=>vt.config?.custom?.hideFrom?.viz).every(ee.identity)&&z.push((0,uo.n)(M))}),d(z)}},[T,d]);const Q={eventBus:y,sync:()=>po.m.Crosshair,onSplitOpen:p,onToggleSeriesVisibility(z,M){B((0,go.N)(z,M,C,e))}},de=(0,t.useMemo)(()=>({tooltip:{mode:m,sort:ae.As.None},legend:{displayMode:ae.jK.List,showLegend:!0,placement:"bottom",calcs:[]}}),[m]);return t.createElement(pe._w,{value:Q},T.length>at&&!E&&t.createElement("div",{className:(0,h.cx)([v.timeSeriesDisclaimer])},t.createElement(ze.J,{className:v.disclaimerIcon,name:"exclamation-triangle"}),"Showing only ",at," time series.",t.createElement(k.zx,{variant:"primary",fill:"text",onClick:()=>x(!0),className:v.showAllButton},"Show all ",T.length)),t.createElement(ho.$,{data:{series:D,timeRange:K,state:i,annotations:c,structureRev:w},pluginId:"timeseries",title:"",width:s,height:n,onChangeTimeRange:r,timeZone:o,options:de}))}const yo=e=>({timeSeriesDisclaimer:h.css`
    label: time-series-disclaimer;
    margin: ${e.spacing(1)} auto;
    padding: 10px 0;
    border-radius: ${e.spacing(2)};
    text-align: center;
    background-color: ${e.colors.background.primary};
  `,disclaimerIcon:h.css`
    label: disclaimer-icon;
    color: ${e.colors.warning.main};
    margin-right: ${e.spacing(.5)};
  `,showAllButton:h.css`
    margin-left: ${e.spacing(.5)};
  `});var Ut=l(90701),_e=l(318);const vo=R.EXPLORE_GRAPH_STYLES.map(e=>({value:e,label:e[0].toUpperCase()+e.slice(1).replace(/_/," ")}));function Eo(e){const{graphStyle:n,onChangeGraphStyle:s}=e;return t.createElement(Ut.Lh,{justify:"space-between",wrap:!0},"Graph",t.createElement(_e.S,{size:"sm",options:vo,value:n,onChange:s}))}const Vt="grafana.explore.style.graph",or=e=>{store.set(Vt,e)},xo=()=>bo(te.Z.get(Vt)),So="lines",bo=e=>R.EXPLORE_GRAPH_STYLES.find(s=>s===e)??So,wo=({loading:e,data:n,eventBus:s,height:o,width:a,absoluteRange:r,timeZone:i,annotations:c,onChangeTime:d,splitOpenFn:p,loadingState:u})=>{const[m,g]=(0,t.useState)(xo),y=(0,N.l4)(),f=parseInt(y.spacing(2).slice(0,-2),10),v=(0,t.useCallback)(E=>{(0,Wt.FG)(E),g(E)},[]);return t.createElement(ye.U,{label:t.createElement(Eo,{graphStyle:m,onChangeGraphStyle:v}),loading:e,isOpen:!0},t.createElement(Qt,{graphStyle:m,data:n,height:o,width:a-f,absoluteRange:r,onChangeTime:d,timeZone:i,annotations:c,splitOpenFn:p,loadingState:u,eventBus:s}))};var Ro=l(35008),Zt=l.n(Ro),rt=l(38849),Co=l(25287),To=l(34282),Lo=l(78337);const zo=({timeInMs:e,className:n,humanize:s})=>t.createElement("span",{className:n},Io(e,s)),Io=(e,n=!1)=>{const s=e/1e3;if(!n)return`${s.toFixed(1)}s`;const o=(0,xe.Ks)(s,"seconds"),a=o.hours(),r=o.minutes(),i=o.seconds();return a?`${a}h ${r}m ${i}s`:r?`${r}m ${i}s`:`${i}s`},Gt=150,Fo=({resetKey:e,humanize:n,className:s})=>{const[o,a]=(0,t.useState)(0);return(0,Lo.Z)(()=>a(o+Gt),Gt),(0,t.useEffect)(()=>a(0),[e]),t.createElement(zo,{timeInMs:o,className:s,humanize:n})},Do=e=>({logsRowsLive:h.css`
    label: logs-rows-live;
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
    display: flex;
    flex-flow: column nowrap;
    height: 60vh;
    overflow-y: scroll;
    :first-child {
      margin-top: auto !important;
    }
  `,logsRowFade:h.css`
    label: logs-row-fresh;
    color: ${e.colors.text};
    background-color: ${Zt()(e.colors.info.transparent).setAlpha(.25).toString()};
    animation: fade 1s ease-out 1s 1 normal forwards;
    @keyframes fade {
      from {
        background-color: ${Zt()(e.colors.info.transparent).setAlpha(.25).toString()};
      }
      to {
        background-color: transparent;
      }
    }
  `,logsRowsIndicator:h.css`
    font-size: ${e.typography.h6.fontSize};
    padding-top: ${e.spacing(1)};
    display: flex;
    align-items: center;
  `,button:h.css`
    margin-right: ${e.spacing(1)};
  `,fullWidth:h.css`
    width: 100%;
  `});class No extends t.PureComponent{constructor(n){super(n),this.liveEndDiv=null,this.scrollContainerRef=t.createRef(),this.onScroll=s=>{const{isPaused:o,onPause:a}=this.props,{scrollTop:r,clientHeight:i,scrollHeight:c}=s.currentTarget;c-(r+i)>=5&&!o&&a()},this.rowsToRender=()=>{const{isPaused:s}=this.props;let{logRowsToRender:o=[]}=this.state;return s||(o=o.slice(-100)),o},this.state={logRowsToRender:n.logRows}}static getDerivedStateFromProps(n,s){return n.isPaused?null:{logRowsToRender:n.logRows}}render(){const{theme:n,timeZone:s,onPause:o,onResume:a,isPaused:r}=this.props,i=Do(n),{logsRow:c,logsRowLocalTime:d,logsRowMessage:p}=(0,To.h)(n);return t.createElement("div",null,t.createElement("table",{className:i.fullWidth},t.createElement("tbody",{onScroll:r?void 0:this.onScroll,className:i.logsRowsLive,ref:this.scrollContainerRef},this.rowsToRender().map(u=>t.createElement("tr",{className:(0,h.cx)(c,i.logsRowFade),key:u.uid},t.createElement("td",{className:d},(0,rt.dq)(u.timeEpochMs,{timeZone:s})),t.createElement("td",{className:p},u.hasAnsi?t.createElement(Co.Q,{value:u.raw}):u.entry))),t.createElement("tr",{ref:u=>{this.liveEndDiv=u,this.liveEndDiv&&this.scrollContainerRef.current?.scrollTo&&!r&&this.scrollContainerRef.current?.scrollTo(0,this.scrollContainerRef.current.scrollHeight)}}))),t.createElement("div",{className:i.logsRowsIndicator},t.createElement(k.zx,{variant:"secondary",onClick:r?a:o,className:i.button},t.createElement(ze.J,{name:r?"play":"pause"}),"\xA0",r?"Resume":"Pause"),t.createElement(k.zx,{variant:"secondary",onClick:this.props.stopLive,className:i.button},t.createElement(ze.J,{name:"square-shape",size:"lg",type:"mono"}),"\xA0 Exit live mode"),r||t.createElement("span",null,"Last line received: ",t.createElement(Fo,{resetKey:this.props.logRows,humanize:!0})," ago")))}}const Po=(0,N.HE)(No);var jt=l(55294),Ho=l(33180),Oo=l(9274),Se=l(71210),Ie=l(44727),it=l(37959),Kt=l(28947),Mo=l(3574),$o=l.n(Mo),lt=l(63346),Ao=l(26639),Bo=l(65066),Wo=l(54972),ko=l(48955),Qo=l(81042);const Yt=e=>({metaContainer:h.css`
    flex: 1;
    color: ${e.colors.text.secondary};
    margin-bottom: ${e.spacing(2)};
    min-width: 30%;
    display: flex;
    flex-wrap: wrap;
  `,metaItem:h.css`
    margin-right: ${e.spacing(2)};
    margin-top: ${e.spacing(.5)};
    display: flex;
    align-items: center;

    .logs-meta-item__error {
      color: ${e.colors.error.text};
    }
  `,metaLabel:h.css`
    margin-right: calc(${e.spacing(2)} / 2);
    font-size: ${e.typography.bodySmall.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `,metaValue:h.css`
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
  `}),Uo=(0,t.memo)(function(n){const s=(0,N.wW)(Yt),{label:o,value:a}=n;return t.createElement("div",{"data-testid":"meta-info-text-item",className:s.metaItem},o&&t.createElement("span",{className:s.metaLabel},o,":"),t.createElement("span",{className:s.metaValue},a))}),ct=(0,t.memo)(function(n){const s=(0,N.wW)(Yt),{metaItems:o}=n;return t.createElement("div",{className:s.metaContainer,"data-testid":"meta-info-text"},o.map((a,r)=>t.createElement(Uo,{key:`${r}-${a.label}`,label:a.label,value:a.value})))}),Vo=()=>({metaContainer:h.css`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  `});var Zo=(e=>(e.Text="text",e.Json="json",e))(Zo||{});const Jt=t.memo(({meta:e,dedupStrategy:n,dedupCount:s,displayedFields:o,clearDetectedFields:a,hasUnescapedContent:r,forceEscape:i,onEscapeNewlines:c,logRows:d})=>{const p=(0,N.wW)(Vo),u=y=>{switch((0,P.ff)("grafana_logs_download_logs_clicked",{app:Ae.zj.Explore,format:y,area:"logs-meta-row"}),y){case"text":(0,Bo.Fc)({meta:e,rows:d},"Explore");break;case"json":const f=(0,Qo.Di)(d),v=new Blob([JSON.stringify(f)],{type:"application/json;charset=utf-8"}),E=`Explore-logs-${(0,rt.dq)(new Date)}.json`;$o()(v,E);break}},m=[...e];n!==O.Y4.none&&m.push({label:"Dedup count",value:s,kind:O.Ku.Number}),d.some(y=>y.entry.length>ko.n)&&m.push({label:"Info",value:"Logs with more than 100,000 characters could not be parsed and highlighted",kind:O.Ku.String}),o?.length>0&&m.push({label:"Showing only selected fields",value:Xt(o,O.Ku.LabelsMap)},{label:"",value:t.createElement(k.zx,{variant:"secondary",size:"sm",onClick:a},"Show original line")}),r&&m.push({label:"Your logs might have incorrectly escaped content",value:t.createElement(Je.u,{content:"Fix incorrectly escaped newline and tab sequences in log lines. Manually review the results to confirm that the replacements are correct.",placement:"right"},t.createElement(k.zx,{variant:"secondary",size:"sm",onClick:c},i?"Remove escaping":"Escape newlines"))});const g=t.createElement(lt.v,null,t.createElement(lt.v.Item,{label:"txt",onClick:()=>u("text")}),t.createElement(lt.v.Item,{label:"json",onClick:()=>u("json")}));return t.createElement(t.Fragment,null,m&&t.createElement("div",{className:p.metaContainer},t.createElement(ct,{metaItems:m.map(y=>({label:y.label,value:"kind"in y?Xt(y.value,y.kind):y.value}))}),t.createElement(Ao.L,{overlay:g},t.createElement(Ce.h,{isOpen:!1,variant:"default",icon:"download-alt"},"Download"))))});Jt.displayName="LogsMetaRow";function Xt(e,n){return n===O.Ku.LabelsMap?t.createElement(Wo.j,{labels:e}):n===O.Ku.Error?t.createElement("span",{className:"logs-meta-item__error"},e):e}var dt=l(40008),Go=l(13211),jo=l(47513);function Ko({pages:e,currentPageIndex:n,oldestLogsFirst:s,timeZone:o,loading:a,changeTime:r}){const i=u=>`${(0,rt.dq)(u,{format:jo.U6.interval.second,timeZone:o})}`,c=(u,m)=>{if(n===m&&a)return t.createElement(dt.$,null);const g=i(s?u.logsRange.from:u.logsRange.to),y=i(s?u.logsRange.to:u.logsRange.from);return`${g} \u2014 ${y}`},d=(0,N.l4)(),p=Yo(d,a);return t.createElement(St.$,{autoHide:!0},t.createElement("div",{className:p.pagesWrapper,"data-testid":"logsNavigationPages"},t.createElement("div",{className:p.pagesContainer},e.map((u,m)=>t.createElement("button",{type:"button","data-testid":`page${m+1}`,className:(0,h.cx)((0,k.gN)(d),p.page),key:u.queryRange.to,onClick:()=>{(0,P.ff)("grafana_explore_logs_pagination_clicked",{pageType:"page",pageNumber:m+1}),!a&&r({from:u.queryRange.from,to:u.queryRange.to})}},t.createElement("div",{className:(0,h.cx)(p.line,{selectedBg:n===m})}),t.createElement("div",{className:(0,h.cx)(p.time,{selectedText:n===m})},c(u,m)))))))}const Yo=(e,n)=>({pagesWrapper:h.css`
      height: 100%;
      padding-left: ${e.spacing(.5)};
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      &::after {
        content: '';
        display: block;
        background: repeating-linear-gradient(
          135deg,
          ${e.colors.background.primary},
          ${e.colors.background.primary} 5px,
          ${e.colors.background.secondary} 5px,
          ${e.colors.background.secondary} 15px
        );
        width: 3px;
        height: inherit;
        margin-bottom: 8px;
      }
    `,pagesContainer:h.css`
      display: flex;
      padding: 0;
      flex-direction: column;
    `,page:h.css`
      display: flex;
      margin: ${e.spacing(2)} 0;
      cursor: ${n?"auto":"pointer"};
      white-space: normal;
      .selectedBg {
        background: ${e.colors.primary.main};
      }
      .selectedText {
        color: ${e.colors.primary.main};
      }
    `,line:h.css`
      width: 3px;
      height: 100%;
      align-items: center;
      background: ${e.colors.text.secondary};
    `,time:h.css`
      width: 60px;
      min-height: 80px;
      font-size: ${e.v1.typography.size.sm};
      padding-left: ${e.spacing(.5)};
      display: flex;
      align-items: center;
    `});function Jo({absoluteRange:e,logsSortOrder:n,timeZone:s,loading:o,onChangeTime:a,scrollToTopLogs:r,visibleRange:i,queries:c,clearCache:d,addResultsToCache:p}){const[u,m]=(0,t.useState)([]),[g,y]=(0,t.useState)(0),f=(0,t.useRef)(),v=(0,t.useRef)(),E=(0,t.useRef)(0),x=n===O.UV.Ascending,w=x?g===u.length-1:g===0,S=x?g===0:g===u.length-1,b=(0,N.l4)(),C=qo(b,x,o);(0,t.useEffect)(()=>{const D={logsRange:i,queryRange:e};let Q=[];if(!(0,ee.isEqual)(v.current,e)||!(0,ee.isEqual)(f.current,c))d(),m([D]),y(0),f.current=c,E.current=e.to-e.from;else{m(z=>(Q=z.filter(M=>!(0,ee.isEqual)(D.queryRange,M.queryRange)),Q=[...Q,D].sort((M,ue)=>K(M,ue,n)),Q));const de=Q.findIndex(z=>z.queryRange.to===e.to);y(de)}p()},[i,e,n,c,d,p]),(0,t.useEffect)(()=>{d()},[]);const B=({from:D,to:Q})=>{v.current={from:D,to:Q},a({from:D,to:Q})},K=(D,Q,de)=>de===O.UV.Ascending?D.queryRange.to>Q.queryRange.to?1:-1:D.queryRange.to>Q.queryRange.to?-1:1,G=t.createElement(k.zx,{"data-testid":"olderLogsButton",className:C.navButton,variant:"secondary",onClick:()=>{if((0,P.ff)("grafana_explore_logs_pagination_clicked",{pageType:"olderLogsButton"}),S)B({from:i.from-E.current,to:i.from});else{const D=x?-1:1;B({from:u[g+D].queryRange.from,to:u[g+D].queryRange.to})}},disabled:o},t.createElement("div",{className:C.navButtonContent},o?t.createElement(dt.$,null):t.createElement(ze.J,{name:x?"angle-up":"angle-down",size:"lg"}),"Older logs")),T=t.createElement(k.zx,{"data-testid":"newerLogsButton",className:C.navButton,variant:"secondary",onClick:()=>{if((0,P.ff)("grafana_explore_logs_pagination_clicked",{pageType:"newerLogsButton"}),!w){const D=x?1:-1;B({from:u[g+D].queryRange.from,to:u[g+D].queryRange.to})}},disabled:o||w},t.createElement("div",{className:C.navButtonContent},o&&t.createElement(dt.$,null),w||o?null:t.createElement(ze.J,{name:x?"angle-down":"angle-up",size:"lg"}),w?"Start of range":"Newer logs"));return t.createElement("div",{className:C.navContainer},x?G:T,t.createElement(Ko,{pages:u,currentPageIndex:g,oldestLogsFirst:x,timeZone:s,loading:o,changeTime:B}),x?T:G,t.createElement(k.zx,{"data-testid":"scrollToTop",className:C.scrollToTopButton,variant:"secondary",onClick:r,title:"Scroll to top"},t.createElement(ze.J,{name:"arrow-up",size:"lg"})))}const Xo=(0,t.memo)(Jo),qo=(e,n,s)=>{const o=e.flags.topnav?`calc(100vh - 2*${e.spacing(2)} - 2*${Go.$}px)`:"95vh";return{navContainer:h.css`
      max-height: ${o};
      display: flex;
      flex-direction: column;
      justify-content: ${n?"flex-start":"space-between"};
      position: sticky;
      top: ${e.spacing(2)};
      right: 0;
    `,navButton:h.css`
      width: 58px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    `,navButtonContent:h.css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      white-space: normal;
    `,scrollToTopButton:h.css`
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: ${e.spacing(1)};
    `}};function qt(e){const[n,s]=(0,t.useState)(!1),o=100,{error:a,title:r}=e,i=a.message||a.data?.message||"",c=!n&&i.length>o;return t.createElement(Ve.b,{title:r,severity:"warning"},c?t.createElement(k.zx,{variant:"secondary",size:"xs",onClick:()=>{s(!0)}},"Show details"):i)}function _o(e,n,s,o){if(s!==void 0)return{logsVolumeData:s,fullRangeData:!0,range:o};if(e!==void 0)return{logsVolumeData:e,fullRangeData:!1,range:n||o}}function en(e){const{width:n,timeZone:s,splitOpen:o,onUpdateTimeRange:a,onLoadLogsVolume:r,onHiddenSeriesChanged:i}=e,c=(0,N.l4)(),d=(0,N.wW)(tn),p=parseInt(c.spacing(2).slice(0,-2),10),u=150,m=_o(e.logLinesBasedData,e.logLinesBasedDataVisibleRange,e.logsVolumeData,e.absoluteRange);if(m===void 0)return null;const{logsVolumeData:g,fullRangeData:y,range:f}=m;if(g.error!==void 0)return t.createElement(qt,{error:g.error,title:"Failed to load log volume for this query"});let v;g?.state===j.Gu.Loading?v=t.createElement("span",null,"Log volume is loading..."):g?.data&&(g.data.length>0?v=t.createElement(Qt,{graphStyle:"lines",loadingState:j.Gu.Done,data:g.data,height:u,width:n-p*2,absoluteRange:f,onChangeTime:a,timeZone:s,splitOpenFn:o,tooltipDisplayMode:ae.f3.Multi,onHiddenSeriesChanged:i,anchorToZero:!0,eventBus:e.eventBus}):v=t.createElement("span",null,"No volume data."));let E;if(y){const x=sn(g,f);x!==void 0&&x<1&&(E=t.createElement(Se._,{label:"Reload log volume",transparent:!0},t.createElement(k.zx,{size:"xs",icon:"sync",variant:"secondary",onClick:r,id:"reload-volume"})))}else E=t.createElement("div",{className:d.oldInfoText},"This datasource does not support full-range histograms. The graph is based on the logs seen in the response.");return t.createElement(ye.U,{label:"",isOpen:!0},t.createElement("div",{style:{height:u},className:d.contentContainer},v),t.createElement("div",{className:d.extraInfoContainer},E))}const tn=e=>({extraInfoContainer:h.css`
      display: flex;
      justify-content: end;
      position: absolute;
      right: 5px;
      top: 5px;
    `,contentContainer:h.css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,oldInfoText:h.css`
      font-size: ${e.typography.size.sm};
      color: ${e.colors.text.secondary};
    `});function sn(e,n){const s=e&&e.data[0]&&e.data[0].meta?.custom?.absoluteRange;return s?(n.from-n.to)/(s.from-s.to):void 0}const ce={showLabels:"grafana.explore.logs.showLabels",showTime:"grafana.explore.logs.showTime",wrapLogMessage:"grafana.explore.logs.wrapLogMessage",prettifyLogMessage:"grafana.explore.logs.prettifyLogMessage",logsSortOrder:"grafana.explore.logs.sortOrder"},on=h.css`
  & > div {
    overflow: visible;
    & > div {
      overflow: visible;
    }
  }
`;class nn extends t.PureComponent{constructor(n){super(n),this.topLogsRef=(0,t.createRef)(),this.state={showLabels:te.Z.getBool(ce.showLabels,!1),showTime:te.Z.getBool(ce.showTime,!0),wrapLogMessage:te.Z.getBool(ce.wrapLogMessage,!0),prettifyLogMessage:te.Z.getBool(ce.prettifyLogMessage,!1),dedupStrategy:O.Y4.none,hiddenLogLevels:[],logsSortOrder:te.Z.get(ce.logsSortOrder)||O.UV.Descending,isFlipping:!1,displayedFields:[],forceEscape:!1},this.onLogRowHover=s=>{s?this.props.eventBus.publish(new jt.es({point:{time:s.timeEpochMs}})):this.props.eventBus.publish(new jt.xH)},this.onChangeLogsSortOrder=()=>{this.setState({isFlipping:!0}),this.flipOrderTimer=window.setTimeout(()=>{this.setState(s=>{const o=s.logsSortOrder===O.UV.Descending?O.UV.Ascending:O.UV.Descending;return te.Z.set(ce.logsSortOrder,o),{logsSortOrder:o}})},0),this.cancelFlippingTimer=window.setTimeout(()=>this.setState({isFlipping:!1}),1e3)},this.onEscapeNewlines=()=>{this.setState(s=>({forceEscape:!s.forceEscape}))},this.onChangeDedup=s=>{(0,P.ff)("grafana_explore_logs_deduplication_clicked",{deduplicationType:s,datasourceType:this.props.datasourceType}),this.setState({dedupStrategy:s})},this.onChangeLabels=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({showLabels:a}),te.Z.set(ce.showLabels,a)}},this.onChangeTime=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({showTime:a}),te.Z.set(ce.showTime,a)}},this.onChangeWrapLogMessage=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({wrapLogMessage:a}),te.Z.set(ce.wrapLogMessage,a)}},this.onChangePrettifyLogMessage=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({prettifyLogMessage:a}),te.Z.set(ce.prettifyLogMessage,a)}},this.onToggleLogLevel=s=>{const o=s.map(a=>O.in[a]);this.setState({hiddenLogLevels:o})},this.onToggleLogsVolumeCollapse=s=>{this.props.onSetLogsVolumeEnabled(s),(0,P.ff)("grafana_explore_logs_histogram_toggle_clicked",{datasourceType:this.props.datasourceType,type:s?"open":"close"})},this.onClickScan=s=>{s.preventDefault(),this.props.onStartScanning&&this.props.onStartScanning()},this.onClickStopScan=s=>{s.preventDefault(),this.props.onStopScanning&&this.props.onStopScanning()},this.showField=s=>{this.state.displayedFields.indexOf(s)===-1&&this.setState(a=>({displayedFields:a.displayedFields.concat(s)}))},this.hideField=s=>{this.state.displayedFields.indexOf(s)>-1&&this.setState(a=>({displayedFields:a.displayedFields.filter(r=>s!==r)}))},this.clearDetectedFields=()=>{this.setState(s=>({displayedFields:[]}))},this.checkUnescapedContent=(0,ge.Z)(s=>!!s.some(o=>o.hasUnescapedContent)),this.dedupRows=(0,ge.Z)((s,o)=>{const a=(0,it.UW)(s,o),r=a.reduce((i,c)=>c.duplicates?i+c.duplicates:i,0);return{dedupedRows:a,dedupCount:r}}),this.filterRows=(0,ge.Z)((s,o)=>(0,it.nu)(s,new Set(o))),this.createNavigationRange=(0,ge.Z)(s=>{if(!s||s.length===0)return;const o=s[0].timeEpochMs,a=s[s.length-1].timeEpochMs;return a<o?{from:a,to:o}:{from:o,to:a}}),this.scrollToTopLogs=()=>this.topLogsRef.current?.scrollIntoView(),this.logsVolumeEventBus=n.eventBus.newScopedBus("logsvolume",{onlyLocal:!1})}componentWillUnmount(){this.flipOrderTimer&&window.clearTimeout(this.flipOrderTimer),this.cancelFlippingTimer&&window.clearTimeout(this.cancelFlippingTimer)}render(){const{width:n,splitOpen:s,logRows:o,logsMeta:a,logsSeries:r,visibleRange:i,logsVolumeEnabled:c,logsVolumeData:d,loadLogsVolumeData:p,loading:u=!1,loadingState:m,onClickFilterLabel:g,onClickFilterOutLabel:y,timeZone:f,scanning:v,scanRange:E,showContextToggle:x,absoluteRange:w,onChangeTime:S,getFieldLinks:b,theme:C,logsQueries:B,clearCache:K,addResultsToCache:G,exploreId:T,scrollElement:D}=this.props,{showLabels:Q,showTime:de,wrapLogMessage:z,prettifyLogMessage:M,dedupStrategy:ue,hiddenLogLevels:vt,logsSortOrder:Et,isFlipping:ja,displayedFields:us,forceEscape:ps}=this.state,_=rn(C,z),Ka=o&&o.length>0,Ya=this.checkUnescapedContent(o),Ja=this.filterRows(o,vt),{dedupedRows:Xa,dedupCount:qa}=this.dedupRows(Ja,ue),_a=this.createNavigationRange(o),er=E?`Scanning ${Ho.describeTimeRange(E)}`:"Scanning...";return t.createElement(t.Fragment,null,t.createElement(ye.U,{label:"Logs volume",collapsible:!0,isOpen:c,onToggle:this.onToggleLogsVolumeCollapse},c&&t.createElement(en,{absoluteRange:w,width:n,logsVolumeData:d,logLinesBasedData:r?{data:r,state:m}:void 0,logLinesBasedDataVisibleRange:i,onUpdateTimeRange:S,timeZone:f,splitOpen:s,onLoadLogsVolume:p,onHiddenSeriesChanged:this.onToggleLogLevel,eventBus:this.logsVolumeEventBus})),t.createElement(ye.U,{label:"Logs",loading:u,isOpen:!0,className:on},t.createElement("div",{className:_.logOptions,ref:this.topLogsRef},t.createElement(Oo.Z,null,t.createElement(Se._,{label:"Time",className:_.horizontalInlineLabel,transparent:!0},t.createElement(Ie.x,{value:de,onChange:this.onChangeTime,className:_.horizontalInlineSwitch,transparent:!0,id:`show-time_${T}`})),t.createElement(Se._,{label:"Unique labels",className:_.horizontalInlineLabel,transparent:!0},t.createElement(Ie.x,{value:Q,onChange:this.onChangeLabels,className:_.horizontalInlineSwitch,transparent:!0,id:`unique-labels_${T}`})),t.createElement(Se._,{label:"Wrap lines",className:_.horizontalInlineLabel,transparent:!0},t.createElement(Ie.x,{value:z,onChange:this.onChangeWrapLogMessage,className:_.horizontalInlineSwitch,transparent:!0,id:`wrap-lines_${T}`})),t.createElement(Se._,{label:"Prettify JSON",className:_.horizontalInlineLabel,transparent:!0},t.createElement(Ie.x,{value:M,onChange:this.onChangePrettifyLogMessage,className:_.horizontalInlineSwitch,transparent:!0,id:`prettify_${T}`})),t.createElement(Se._,{label:"Dedup",className:_.horizontalInlineLabel,transparent:!0},t.createElement(_e.S,{options:Object.values(O.Y4).map(xt=>({label:(0,ee.capitalize)(xt),value:xt,description:O.Uv[xt]})),value:ue,onChange:this.onChangeDedup,className:_.radioButtons}))),t.createElement("div",null,t.createElement(Se._,{label:"Display results",className:_.horizontalInlineLabel,transparent:!0},t.createElement(_e.S,{disabled:ja,options:[{label:"Newest first",value:O.UV.Descending,description:"Show results newest to oldest"},{label:"Oldest first",value:O.UV.Ascending,description:"Show results oldest to newest"}],value:Et,onChange:this.onChangeLogsSortOrder,className:_.radioButtons})))),t.createElement(Jt,{logRows:o,meta:a||[],dedupStrategy:ue,dedupCount:qa,hasUnescapedContent:Ya,forceEscape:ps,displayedFields:us,onEscapeNewlines:this.onEscapeNewlines,clearDetectedFields:this.clearDetectedFields}),t.createElement("div",{className:_.logsSection},t.createElement("div",{className:_.logRows,"data-testid":"logRows"},t.createElement(Kt.w,{logRows:o,deduplicatedRows:Xa,dedupStrategy:ue,getRowContext:this.props.getRowContext,onClickFilterLabel:g,onClickFilterOutLabel:y,showContextToggle:x,showLabels:Q,showTime:de,enableLogDetails:!0,forceEscape:ps,wrapLogMessage:z,prettifyLogMessage:M,timeZone:f,getFieldLinks:b,logsSortOrder:Et,displayedFields:us,onClickShowField:this.showField,onClickHideField:this.hideField,app:Ae.zj.Explore,scrollElement:D,onLogRowHover:this.onLogRowHover}),!u&&!Ka&&!v&&t.createElement("div",{className:_.noData},"No logs found.",t.createElement(k.zx,{size:"sm",variant:"secondary",onClick:this.onClickScan},"Scan for older logs")),v&&t.createElement("div",{className:_.noData},t.createElement("span",null,er),t.createElement(k.zx,{size:"sm",variant:"secondary",onClick:this.onClickStopScan},"Stop scan"))),t.createElement(Xo,{logsSortOrder:Et,visibleRange:_a??w,absoluteRange:w,timeZone:f,onChangeTime:S,loading:u,queries:B??[],scrollToTopLogs:this.scrollToTopLogs,addResultsToCache:G,clearCache:K}))))}}const an=(0,N.HE)(nn),rn=(e,n)=>({noData:h.css`
      > * {
        margin-left: 0.5em;
      }
    `,logOptions:h.css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      background-color: ${e.colors.background.primary};
      padding: ${e.spacing(1,2)};
      border-radius: ${e.shape.borderRadius()};
      margin: ${e.spacing(0,0,1)};
      border: 1px solid ${e.colors.border.medium};
    `,headerButton:h.css`
      margin: ${e.spacing(.5,0,0,1)};
    `,horizontalInlineLabel:h.css`
      > label {
        margin-right: 0;
      }
    `,horizontalInlineSwitch:h.css`
      padding: 0 ${e.spacing(1)} 0 0;
    `,radioButtons:h.css`
      margin: 0;
    `,logsSection:h.css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,logRows:h.css`
      overflow-x: ${n?"unset":"scroll"};
      overflow-y: visible;
      width: 100%;
    `}),ut=500,pt=100,ln=(0,ge.Z)(()=>({logsEnter:h.css`
      label: logsEnter;
      position: absolute;
      opacity: 0;
      height: auto;
      width: 100%;
    `,logsEnterActive:h.css`
      label: logsEnterActive;
      opacity: 1;
      transition: opacity ${ut}ms ease-out ${pt}ms;
    `,logsExit:h.css`
      label: logsExit;
      position: absolute;
      opacity: 1;
      height: auto;
      width: 100%;
    `,logsExitActive:h.css`
      label: logsExitActive;
      opacity: 0;
      transition: opacity ${ut}ms ease-out ${pt}ms;
    `}));function _t(e){const{visible:n,children:s}=e,o=ln();return t.createElement($t.Z,{in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:ut+pt,classNames:{enter:o.logsEnter,enterActive:o.logsEnterActive,exit:o.logsExit,exitActive:o.logsExitActive}},s)}var et=l(71570);class cn extends t.PureComponent{constructor(){super(...arguments),this.onChangeTime=n=>{const{exploreId:s,updateTimeRange:o}=this.props;o({exploreId:s,absoluteRange:n})},this.getLogRowContext=async(n,s)=>{const{datasourceInstance:o,logsQueries:a}=this.props;if((0,O.Q4)(o)){const r=(a??[]).find(i=>i.refId===n.dataFrame.refId&&i.datasource!=null&&i.datasource.type===o.type);return o.getLogRowContext(n,s,r)}return[]},this.showContextToggle=n=>{const{datasourceInstance:s}=this.props;return(0,O.Q4)(s)?s.showContextToggle(n):!1},this.getFieldLinks=(n,s,o)=>{const{splitOpenFn:a,range:r}=this.props;return(0,et.a)({field:n,rowIndex:s,splitOpenFn:a,range:r,dataFrame:o})}}render(){const{loading:n,loadingState:s,logRows:o,logsMeta:a,logsSeries:r,logsQueries:i,loadSupplementaryQueryData:c,setSupplementaryQueryEnabled:d,onClickFilterLabel:p,onClickFilterOutLabel:u,onStartScanning:m,onStopScanning:g,absoluteRange:y,timeZone:f,visibleRange:v,scanning:E,range:x,width:w,splitOpenFn:S,isLive:b,exploreId:C,addResultsToCache:B,clearCache:K,scrollElement:G,logsVolume:T}=this.props;return o?t.createElement(t.Fragment,null,t.createElement(_t,{visible:b},t.createElement(ye.U,{label:"Logs",loading:!1,isOpen:!0},t.createElement(Bt,{exploreId:C},D=>t.createElement(Po,{logRows:o,timeZone:f,stopLive:D.stop,isPaused:this.props.isPaused,onPause:D.pause,onResume:D.resume})))),t.createElement(_t,{visible:!b},t.createElement(an,{exploreId:C,datasourceType:this.props.datasourceInstance?.type,logRows:o,logsMeta:a,logsSeries:r,logsVolumeEnabled:T.enabled,onSetLogsVolumeEnabled:D=>d(C,D,O.v8.LogsVolume),logsVolumeData:T.data,logsQueries:i,width:w,splitOpen:S,loading:n,loadingState:s,loadLogsVolumeData:()=>c(C,O.v8.LogsVolume),onChangeTime:this.onChangeTime,onClickFilterLabel:p,onClickFilterOutLabel:u,onStartScanning:m,onStopScanning:g,absoluteRange:y,visibleRange:v,timeZone:f,scanning:E,scanRange:x.raw,showContextToggle:this.showContextToggle,getRowContext:this.getLogRowContext,getFieldLinks:this.getFieldLinks,addResultsToCache:()=>B(C),clearCache:()=>K(C),scrollElement:G,eventBus:this.props.eventBus}))):null}}function dn(e,{exploreId:n}){const o=e.explore[n],{logsResult:a,loading:r,scanning:i,datasourceInstance:c,isLive:d,isPaused:p,range:u,absoluteRange:m,supplementaryQueries:g}=o,y=(0,De.Z)(e.user),f=g[O.v8.LogsVolume];return{loading:r,logRows:a?.rows,logsMeta:a?.meta,logsSeries:a?.series,logsQueries:a?.queries,visibleRange:a?.visibleRange,scanning:i,timeZone:y,datasourceInstance:c,isLive:d,isPaused:p,range:u,absoluteRange:m,logsVolume:f}}const un={updateTimeRange:Te.cD,addResultsToCache:F.K8,clearCache:F.LK,loadSupplementaryQueryData:F.W1,setSupplementaryQueryEnabled:F.z0},pn=(0,q.connect)(dn,un)(cn);function hn(e){const{queryResponse:n,timeZone:s,enabled:o,setLogsSampleEnabled:a,datasourceInstance:r,queries:i,splitOpen:c}=e,d=(0,N.wW)(gn),p=g=>{a(g),(0,P.ff)("grafana_explore_logs_sample_toggle_clicked",{datasourceType:r?.type??"unknown",type:g?"open":"close"})},u=()=>{if(!(0,O.mN)(r,O.v8.LogsSample))return null;const g=i.map(f=>r.getSupplementaryQuery(O.v8.LogsSample,f)).filter(f=>!!f);if(!g.length)return null;const y=()=>{c({query:g[0],datasourceUid:r.uid}),(0,P.ff)("grafana_explore_logs_sample_split_button_clicked",{datasourceType:r?.type??"unknown",queriesCount:g.length})};return t.createElement(k.zx,{size:"sm",className:d.logSamplesButton,onClick:y},"Open logs in split view")};let m;if(n===void 0)m=null;else if(n.error!==void 0)m=t.createElement(qt,{error:n.error,title:"Failed to load logs sample for this query"});else if(n.state===j.Gu.Loading)m=t.createElement("span",null,"Logs sample is loading...");else if(n.data.length===0||n.data[0].length===0)m=t.createElement("span",null,"No logs sample data.");else{const g=(0,it.aB)(n.data);m=t.createElement(t.Fragment,null,t.createElement(u,null),t.createElement(Kt.w,{logRows:g.rows,dedupStrategy:O.Y4.none,showLabels:te.Z.getBool(ce.showLabels,!1),showTime:te.Z.getBool(ce.showTime,!0),wrapLogMessage:te.Z.getBool(ce.wrapLogMessage,!0),prettifyLogMessage:te.Z.getBool(ce.prettifyLogMessage,!1),timeZone:s,enableLogDetails:!0}))}return t.createElement(ye.U,{label:"Logs sample",isOpen:o,collapsible:!0,onToggle:p},m)}const gn=e=>({logSamplesButton:h.css`
    position: absolute;
    top: ${e.spacing(1)};
    right: ${e.spacing(1)}; ;
  `}),mn=()=>{const e=(0,N.wW)(fn);return t.createElement(t.Fragment,null,t.createElement(bt.l,{"data-testid":"explore-no-data",className:e.wrapper},t.createElement("span",{className:e.message},"No data")))},fn=e=>({wrapper:h.css`
    label: no-data-card;
    padding: ${e.spacing(3)};
    background: ${e.colors.background.primary};
    border-radius: ${e.shape.borderRadius(2)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  `,message:h.css`
    font-size: ${e.typography.h2.fontSize};
    padding: ${e.spacing(4)};
    color: ${e.colors.text.disabled};
  `});var yn=l(86373);const vn=()=>{const e=(0,N.l4)(),n=Pe.Vt.hasPermission(R.AccessControlAction.DataSourcesCreate)&&Pe.Vt.hasPermission(R.AccessControlAction.DataSourcesWrite),s="Explore requires at least one data source. Once you have added a data source, you can query it here.",o=t.createElement(t.Fragment,null,t.createElement(ze.J,{name:"rocket"}),t.createElement(t.Fragment,null," ProTip: You can also define data sources through configuration files. "),t.createElement("a",{href:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=explore",target:"_blank",rel:"noreferrer",className:"text-link"},"Learn more")),a=t.createElement(k.Qj,{size:"lg",href:"datasources/new",icon:"database",disabled:!n},"Add data source"),r=h.css`
    max-width: ${e.breakpoints.values.lg}px;
    margin-top: ${e.spacing(2)};
    align-self: center;
  `;return t.createElement(yn._,{callToActionElement:a,className:r,footer:o,message:s})};var En=l(86253),xn=l(74538),Sn=l(85506);const bn=e=>({warningText:h.css`
    label: warningText;
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
  `});function wn(e){const{dataFrames:n,range:s,splitOpenFn:o,withTraceView:a,datasourceType:r}=e,i=(0,et.u)(s,o),c=(0,N.l4)(),d=(0,N.wW)(bn),p=(0,qe.SM)({fieldConfig:{defaults:{},overrides:[]},data:n,replaceVariables:b=>b,theme:c}),{nodes:u}=(0,Sn.Y)(p),[m,g]=(0,En.Z)(!1),y=()=>{g(),(0,P.ff)("grafana_traces_node_graph_panel_clicked",{datasourceType:r,isExpanded:!m})},{height:f}=(0,$.Z)(),v=(0,t.useRef)(null),[E,x]=(0,t.useState)(250);(0,t.useEffect)(()=>{if(v.current){const{top:b}=v.current.getBoundingClientRect();x(b)}},[v]);const w=f-E-32,S=a&&u[0]?.length>1e3?t.createElement("span",{className:d.warningText}," (",u[0].length," nodes, can be slow to load)"):null;return t.createElement(ye.U,{label:t.createElement("span",null,"Node graph",S," "),collapsible:a,isOpen:a?m:!0,onToggle:a?()=>y():void 0},t.createElement("div",{ref:v,style:a?{height:500}:{minHeight:600,height:w}},t.createElement(xn.E,{dataFrames:p,getLinks:i})))}function Rn(e,{exploreId:n}){return{range:e.explore[n].range}}const Cn=(0,q.connect)(Rn,{})(wn);var Be=l(90158),Tn=l(99822),Ln=l(84457);const zn=e=>{const n=(0,ne.F)(e);return{getQueries:(0,Be.P1)(n,s=>s.queries),getQueryResponse:(0,Be.P1)(n,s=>s.queryResponse),getHistory:(0,Be.P1)(n,s=>s.history),getEventBridge:(0,Be.P1)(n,s=>s.eventBridge),getDatasourceInstanceSettings:(0,Be.P1)(n,s=>(0,Ue.ak)().getInstanceSettings(s.datasourceInstance?.uid))}},In=({exploreId:e})=>{const n=(0,R.useDispatch)(),{getQueries:s,getDatasourceInstanceSettings:o,getQueryResponse:a,getHistory:r,getEventBridge:i}=(0,t.useMemo)(()=>zn(e),[e]),c=(0,R.useSelector)(s),d=(0,R.useSelector)(o),p=(0,R.useSelector)(a),u=(0,R.useSelector)(r),m=(0,R.useSelector)(i),g=(0,t.useCallback)(()=>{n((0,F.aA)(e))},[n,e]),y=(0,t.useCallback)(S=>{n((0,F.PM)({queries:S,exploreId:e})),S.length<c.length&&g()},[n,e,g,c]),f=(0,t.useCallback)(S=>{y([...c,{...S,refId:(0,Tn.Hs)(c)}])},[y,c]),v=async(S,b)=>{const C=await(0,Me.F)().get(b.datasource),B=await(0,Me.F)().get({uid:S.uid});n((0,F.GJ)(e,c,C,B,b.refId))},E=()=>{(0,P.ff)("grafana_explore_query_row_copy")},x=()=>{(0,P.ff)("grafana_explore_query_row_remove")},w=S=>{(0,P.ff)("grafana_query_row_toggle",S===void 0?{}:{queryEnabled:S})};return t.createElement(Ln.l,{dsSettings:d,onDatasourceChange:(S,b)=>v(S,b),queries:c,onQueriesChange:y,onAddQuery:f,onRunQueries:g,onQueryCopied:E,onQueryRemoved:x,onQueryToggled:w,data:p,app:Ae.zj.Explore,history:u,eventBus:m})};var es=l(93163),ts=l(84952),Fn=l(75478),ss=l(74955),Dn=l(20112);const ht=" ",Nn=e=>{const n={},s=[],o=e.fields.filter(i=>!["Time"].includes(i.name));let a=o.find(i=>i.name==="__name__")?.values.toArray()??[];!a.length&&o.length&&o[0].values.length&&(a=Array(o[0].values.length).fill(""));const r=e.fields.filter(i=>!["__name__"].includes(i.name));return a.forEach(function(i,c){n[i]={};const d=n[i][c]??{};for(const p of r){const u=p.name;if(u!=="Time")if(typeof p?.display=="function"){const m=(0,Dn.zc)(p?.display(p.values.get(c)));m?d[u]=m:u.includes("Value #")&&(d[u]=ht)}else console.warn("Field display method is missing!")}s.push({...d,__name__:i})}),s};var Pn=l(3823),He=l(20017);const Hn=(e,n)=>({rowWrapper:h.css`
    position: relative;
    min-width: ${tt};
    padding-right: 5px;
  `,rowValue:h.css`
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: block;
    padding-right: 10px;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    &:before {
      pointer-events: none;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(to right, transparent calc(100% - 25px), ${e.colors.background.primary});
    }
  `,rowValuesWrap:h.css`
    padding-left: ${ns};
    width: calc(${n} * ${tt});
    display: flex;
  `}),On=({totalNumberOfValues:e,values:n,hideFieldsWithoutValues:s})=>{const o=(0,N.wW)(a=>Hn(a,e));return t.createElement("div",{role:"cell",className:o.rowValuesWrap},n?.map(a=>s&&(a.value===void 0||a.value===ht)?null:t.createElement("span",{key:a.key,className:o.rowWrapper},t.createElement("span",{className:o.rowValue},a.value))))},Mn=e=>{const n=e.isDark?"#ce9178":"#a31515",s=e.isDark?"#73bf69":"#56a64b";return{metricName:h.css`
      color: ${s};
    `,metricValue:h.css`
      color: ${n};
    `,expanded:h.css`
      display: block;
      text-indent: 1em;
    `}},$n=({value:e,index:n,length:s,isExpandedView:o})=>{const a=(0,N.wW)(Mn),r=e.key,i=e.value;return t.createElement("span",{className:o?a.expanded:"",key:n},t.createElement("span",{className:a.metricName},r),t.createElement("span",null,"="),t.createElement("span",null,'"'),t.createElement("span",{className:a.metricValue},i),t.createElement("span",null,'"'),n<s-1&&t.createElement("span",null,", "))},os="20px",tt="80px",ns="25px",An=(e,n,s)=>({rowWrapper:h.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    display: flex;
    position: relative;
    padding-left: 22px;
    ${s?"":"align-items: center;"}
    ${s?"":"height: 100%;"}
  `,copyToClipboardWrapper:h.css`
    position: absolute;
    left: 0;
    ${s?"":"bottom: 0;"}
    ${s?"top: 4px;":"top: 0;"}
    margin: auto;
    z-index: 1;
    height: 16px;
    width: 16px;
  `,rowLabelWrapWrap:h.css`
    position: relative;
    width: calc(100% - (${n} * ${tt}) - ${ns});
  `,rowLabelWrap:h.css`
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    padding-right: ${os};

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    &:after {
      pointer-events: none;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        to right,
        transparent calc(100% - ${os}),
        ${e.colors.background.primary}
      );
    }
  `});function Bn(e){let n=[],s=[];for(const o in e)o in e&&e[o]&&!o.includes("Value")?n.push({key:o,value:e[o]}):o in e&&e[o]&&o.includes("Value")&&s.push({key:o,value:e[o]});return{values:s,attributeValues:n}}const Wn=({listItemData:e,listKey:n,totalNumberOfValues:s,valueLabels:o,isExpandedView:a})=>{const{__name__:r,...i}=e,[c,d]=(0,Pn.Z)(),p=o?.length??s,u=(0,N.wW)(E=>An(E,p,a)),{values:m,attributeValues:g}=Bn(i),y=E=>E==="\u221E"?"+Inf":E,f=`${r}{${g.map(E=>E.key!=="le"?`${E.key}="${y(E.value)}"`:"")}}`,v=Boolean(o&&o?.length);return t.createElement(t.Fragment,null,o!==void 0&&a&&t.createElement(as,{valueLabels:o,expanded:a}),t.createElement("div",{key:n,className:u.rowWrapper},t.createElement("span",{className:u.copyToClipboardWrapper},t.createElement(He.h,{tooltip:"Copy to clipboard",onClick:()=>{(0,P.ff)("grafana_explore_prometheus_instant_query_ui_raw_toggle_expand"),d(f)},name:"copy"})),t.createElement("span",{role:"cell",className:u.rowLabelWrapWrap},t.createElement("div",{className:u.rowLabelWrap},t.createElement("span",null,r),t.createElement("span",null,"{"),t.createElement("span",null,g.map((E,x)=>t.createElement($n,{isExpandedView:a,value:E,key:x,index:x,length:g.length}))),t.createElement("span",null,"}"))),t.createElement(On,{hideFieldsWithoutValues:v,totalNumberOfValues:p,values:m})))},kn=(e,n)=>({valueNavigation:h.css`
      width: ${tt};
      font-weight: bold;
    `,valueNavigationWrapper:h.css`
      display: flex;
      justify-content: flex-end;
    `,itemLabelsWrap:h.css`
      ${n?"":`border-bottom: 1px solid ${e.colors.border.medium}`};
    `}),as=({valueLabels:e,expanded:n})=>{const s=(0,N.wW)(o=>kn(o,n));return t.createElement("div",{className:s.itemLabelsWrap},t.createElement("div",{className:s.valueNavigationWrapper},e.map((o,a)=>t.createElement("span",{className:s.valueNavigation,key:o.name},o.name))))},We={wrapper:h.css`
    height: 100%;
    overflow: scroll;
  `,switchWrapper:h.css`
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
  `,switchLabel:h.css`
    margin-left: 15px;
    margin-bottom: 0;
  `,switch:h.css`
    margin-left: 10px;
  `,resultCount:h.css`
    margin-bottom: 4px;
  `,header:h.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 12px;
    line-height: 1.25;
  `},Qn=480,Un=2,Vn=e=>{const{tableResult:n}=e,s=(0,ee.cloneDeep)(n),o=(0,t.useRef)(null),a=s.fields.filter(g=>g.name.includes("Value")),r=Nn(s),{width:i}=(0,$.Z)(),[c,d]=(0,t.useState)(i<=Qn||a.length>Un),p=()=>{d(!c);const g={isExpanded:!c};(0,P.ff)("grafana_explore_prometheus_instant_query_ui_raw_toggle_expand",g)};(0,t.useEffect)(()=>{o.current?.resetAfterIndex(0,!0)},[c]);const u=g=>{if(g<10){let v=0;for(let E=0;E<g;E++)v+=m(E,!0);return Math.min(600,v)}return 600},m=(g,y)=>{if(!y)return 32;const E=r[g];return 1.5*32+(Object.keys(E).length-a.length)*22};return t.createElement("section",null,t.createElement("header",{className:We.header},t.createElement(ss.g,{className:We.switchWrapper,label:"Expand results",htmlFor:"isExpandedView"},t.createElement("div",{className:We.switch},t.createElement(Ie.r,{onChange:p,id:"isExpandedView",value:c,label:"Expand results"}))),t.createElement("div",{className:We.resultCount},"Result series: ",r.length)),t.createElement("div",{role:"table"},t.createElement(t.Fragment,null,a.length>1&&!c&&t.createElement(as,{valueLabels:a,expanded:c}),t.createElement(Fn.S_,{ref:o,itemCount:r.length,className:We.wrapper,itemSize:g=>m(g,c),height:u(r.length),width:"100%"},({index:g,style:y})=>{let f;return c&&(f=a.filter(v=>{const E=r[g][v.name];return E&&E!==ht})),t.createElement("div",{role:"row",style:{...y,overflow:"hidden"}},t.createElement(Wn,{isExpandedView:c,valueLabels:f,totalNumberOfValues:a.length,listKey:r[g].__name__,listItemData:r[g]}))}))))};function Zn(e,{exploreId:n}){const o=e.explore[n],{loading:a,tableResult:r,rawPrometheusResult:i,range:c}=o,d=i?[i]:[],p=(r?.length??!1)>0&&i?r:d;return{loading:p&&p.length>0?!1:a,tableResult:p,range:c}}const Gn=(0,q.connect)(Zn,{});class jn extends t.PureComponent{constructor(n){super(n),this.onChangeResultsStyle=s=>{this.setState({resultsStyle:s})},this.renderLabel=()=>{const s=(0,h.css)({display:"flex",justifyContent:"space-between"}),o=L.zN.map(a=>({value:a,label:a[0].toUpperCase()+a.slice(1).replace(/_/," ")}));return t.createElement("div",{className:s},this.state.resultsStyle===R.TABLE_RESULTS_STYLE.raw?"Raw":"Table",t.createElement(_e.S,{onClick:()=>{const a={state:this.state.resultsStyle===R.TABLE_RESULTS_STYLE.table?R.TABLE_RESULTS_STYLE.raw:R.TABLE_RESULTS_STYLE.table};(0,P.ff)("grafana_explore_prometheus_instant_query_ui_toggle_clicked",a)},size:"sm",options:o,value:this.state?.resultsStyle,onChange:this.onChangeResultsStyle}))},n.showRawPrometheus&&(this.state={resultsStyle:R.TABLE_RESULTS_STYLE.raw})}getMainFrame(n){return n?.find(s=>s.meta?.custom?.parentRowIndex===void 0)||n?.[0]}getTableHeight(){const{tableResult:n}=this.props,s=this.getMainFrame(n);return!s||s.length===0?200:Math.max(Math.min(600,s.length*35)+35)}render(){const{loading:n,onCellFilterAdded:s,tableResult:o,width:a,splitOpenFn:r,range:i,ariaLabel:c,timeZone:d}=this.props,p=this.getTableHeight(),u=a-Oe.vc.theme.panelPadding*2-ts.QO;let m=o;if(m?.length){m=(0,qe.SM)({data:m,timeZone:d,theme:Oe.vc.theme2,replaceVariables:E=>E,fieldConfig:{defaults:{},overrides:[]}});for(const E of m)for(const x of E.fields)x.getLinks=w=>(0,et.a)({field:x,rowIndex:w.valueRowIndex,splitOpenFn:r,range:i,dataFrame:E})}const g=this.getMainFrame(m),y=m?.filter(E=>E.meta?.custom?.parentRowIndex!==void 0),f=this.state?.resultsStyle!==void 0?this.renderLabel():"Table",v=!this.state?.resultsStyle||this.state?.resultsStyle===R.TABLE_RESULTS_STYLE.table;return t.createElement(ye.U,{label:f,loading:n,isOpen:!0},g?.length&&t.createElement(t.Fragment,null,v&&t.createElement(es.i,{ariaLabel:c,data:g,subData:y,width:u,height:p,onCellFilterAdded:s}),this.state?.resultsStyle===R.TABLE_RESULTS_STYLE.raw&&t.createElement(Vn,{tableResult:g})),!g?.length&&t.createElement(ct,{metaItems:[{value:"0 series returned"}]}))}}const Kn=Gn(jn),Yn=e=>{const{queryError:n}=e,s=!!n,o=s?100:10,a=n?"Query error":"Unknown error",r=n?.message||n?.data?.message||null;return t.createElement(Rt,{in:s,duration:o},t.createElement(Ve.b,{severity:"error",title:a,topSpacing:2},r))};function Jn(e){const n=(0,R.useSelector)(o=>o.explore[e.exploreId]?.queryResponse),s=n?.state===j.Gu.Error?n?.error:void 0;return s?.refId?null:t.createElement(Yn,{queryError:s})}var ve=l(13582),re=l(51424),Xn=l(30668),ke=l(46739),rs=l(79230),qn=l(79090),gt=l(659),mt=l(3153);function _n(e,{exploreId:n}){const s=e.explore,{datasourceInstance:o}=s[n];return{exploreId:n,datasourceInstance:o}}const ea={changeDatasource:At.zU,deleteHistoryItem:ve.NV,commentHistoryItem:ve.Ff,starHistoryItem:ve.ev,setQueries:F.KO},ta=(0,q.connect)(_n,ea),sa=e=>{const n="240px",s="170px",o=e.colors.background.secondary;return{queryCard:h.css`
      display: flex;
      flex-direction: column;
      border: 1px solid ${e.colors.border.weak};
      margin: ${e.spacing(1)} 0;
      background-color: ${o};
      border-radius: ${e.shape.borderRadius(1)};
      .starred {
        color: ${e.v1.palette.orange};
      }
    `,cardRow:h.css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${e.spacing(1)};
      border-bottom: none;
      :first-of-type {
        border-bottom: 1px solid ${e.colors.border.weak};
        padding: ${e.spacing(.5,1)};
      }
      img {
        height: ${e.typography.fontSize}px;
        max-width: ${e.typography.fontSize}px;
        margin-right: ${e.spacing(1)};
      }
    `,datasourceContainer:h.css`
      display: flex;
      align-items: center;
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightMedium};
    `,queryActionButtons:h.css`
      max-width: ${s};
      display: flex;
      justify-content: flex-end;
      font-size: ${e.typography.size.base};
      button {
        margin-left: ${e.spacing(1)};
      }
    `,queryContainer:h.css`
      font-weight: ${e.typography.fontWeightMedium};
      width: calc(100% - ${n});
    `,queryRow:h.css`
      border-top: 1px solid ${e.colors.border.weak};
      word-break: break-all;
      padding: 4px 2px;
      :first-child {
        border-top: none;
        padding: 0 0 4px 0;
      }
    `,updateCommentContainer:h.css`
      width: calc(100% + ${n});
      margin-top: ${e.spacing(1)};
    `,comment:h.css`
      overflow-wrap: break-word;
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightRegular};
      margin-top: ${e.spacing(.5)};
    `,commentButtonRow:h.css`
      > * {
        margin-right: ${e.spacing(1)};
      }
    `,textArea:h.css`
      width: 100%;
    `,runButton:h.css`
      max-width: ${s};
      display: flex;
      justify-content: flex-end;
      button {
        height: auto;
        padding: ${e.spacing(.5,2)};
        line-height: 1.4;
        span {
          white-space: normal !important;
        }
      }
    `}};function oa(e){const{query:n,dsImg:s,isRemoved:o,commentHistoryItem:a,starHistoryItem:r,deleteHistoryItem:i,changeDatasource:c,exploreId:d,datasourceInstance:p,setQueries:u}=e,[m,g]=(0,t.useState)(!1),[y,f]=(0,t.useState)(n.comment),[v,E]=(0,t.useState)(void 0);(0,t.useEffect)(()=>{(async()=>{const M=await(0,Me.F)().get(n.datasourceUid);E(M)})()},[n.datasourceUid]);const x=(0,N.wW)(sa),w=async()=>{const z=n.queries,M=n.datasourceUid!==p?.uid;M&&await c(d,n.datasourceUid,{importQueries:!0}),u(d,z),(0,P.ff)("grafana_explore_query_history_run",{queryHistoryEnabled:A.v.queryHistoryEnabled,differentDataSource:M})},S=()=>{const z=[...n.queries.map(ue=>ue.datasource?.type||"unknown")];(0,P.ff)("grafana_explore_query_history_copy_query",{datasources:z,mixed:Boolean(v?.meta.mixed)});const M=n.queries.map(ue=>(0,re.OH)(ue,v)).join(`
`);(0,Ee.n9)(M),(0,mt.WI)((0,gt.$l)((0,le.AT)("Query copied to clipboard")))},b=async()=>{const z=(0,re.t2)(n);await(0,Pt.L)(z)},C=()=>{const z=M=>{i(M),(0,mt.WI)((0,gt.$l)((0,le.AT)("Query deleted"))),(0,P.ff)("grafana_explore_query_history_deleted",{queryHistoryEnabled:A.v.queryHistoryEnabled})};n.starred?st.Z.publish(new ot.VJ({title:"Delete",text:"Are you sure you want to permanently delete your starred query?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>z(n.id)})):z(n.id)},B=()=>{r(n.id,!n.starred),(0,P.ff)("grafana_explore_query_history_starred",{queryHistoryEnabled:A.v.queryHistoryEnabled,newValue:!n.starred})},K=()=>g(!m),G=()=>{a(n.id,y),g(!1),(0,P.ff)("grafana_explore_query_history_commented",{queryHistoryEnabled:A.v.queryHistoryEnabled})},T=()=>{g(!1),f(n.comment)},D=z=>{z.key==="Enter"&&(z.shiftKey||z.ctrlKey)&&G(),z.key==="Escape"&&T()},Q=t.createElement("div",{className:x.updateCommentContainer,"aria-label":y?"Update comment form":"Add comment form"},t.createElement(qn.K,{onKeyDown:D,value:y,placeholder:y?void 0:"An optional description of what the query does.",onChange:z=>f(z.currentTarget.value),className:x.textArea}),t.createElement("div",{className:x.commentButtonRow},t.createElement(k.zx,{onClick:G,"aria-label":"Submit button"},"Save comment"),t.createElement(k.zx,{variant:"secondary",onClick:T},"Cancel"))),de=t.createElement("div",{className:x.queryActionButtons},t.createElement(He.h,{name:"comment-alt",onClick:K,title:n.comment?.length>0?"Edit comment":"Add comment"}),t.createElement(He.h,{name:"copy",onClick:S,title:"Copy query to clipboard"}),!o&&t.createElement(He.h,{name:"share-alt",onClick:b,title:"Copy shortened link to clipboard"}),t.createElement(He.h,{name:"trash-alt",title:"Delete query",onClick:C}),t.createElement(He.h,{name:n.starred?"favorite":"star",iconType:n.starred?"mono":"default",onClick:B,title:n.starred?"Unstar query":"Star query"}));return t.createElement("div",{className:x.queryCard},t.createElement("div",{className:x.cardRow},t.createElement("div",{className:x.datasourceContainer},t.createElement("img",{src:s,"aria-label":"Data source icon"}),t.createElement("div",{"aria-label":"Data source name"},o?"Data source does not exist anymore":n.datasourceName)),de),t.createElement("div",{className:(0,h.cx)(x.cardRow)},t.createElement("div",{className:x.queryContainer},n.queries.map((z,M)=>{const ue=(0,re.OH)(z,v);return t.createElement("div",{"aria-label":"Query text",key:`${z}-${M}`,className:x.queryRow},ue)}),!m&&n.comment&&t.createElement("div",{"aria-label":"Query comment",className:x.comment},n.comment),m&&Q),!m&&t.createElement("div",{className:x.runButton},t.createElement(k.zx,{variant:"secondary",onClick:w,disabled:o},p?.uid===n.datasourceUid?"Run query":"Switch data source and run query"))))}const is=ta(oa),na=(e,n)=>{const s=e.isLight?e.v1.palette.gray5:e.v1.palette.dark4;return{container:h.css`
      display: flex;
    `,labelSlider:h.css`
      font-size: ${e.typography.bodySmall.fontSize};
      &:last-of-type {
        margin-top: ${e.spacing(3)};
      }
      &:first-of-type {
        font-weight: ${e.typography.fontWeightMedium};
        margin-bottom: ${e.spacing(2)};
      }
    `,containerContent:h.css`
      /* 134px is based on the width of the Query history tabs bar, so the content is aligned to right side of the tab */
      width: calc(100% - 134px);
    `,containerSlider:h.css`
      width: 129px;
      margin-right: ${e.spacing(1)};
    `,fixedSlider:h.css`
      position: fixed;
    `,slider:h.css`
      bottom: 10px;
      height: ${n-180}px;
      width: 129px;
      padding: ${e.spacing(1)} 0;
    `,selectors:h.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,filterInput:h.css`
      margin-bottom: ${e.spacing(1)};
    `,multiselect:h.css`
      width: 100%;
      margin-bottom: ${e.spacing(1)};
      .gf-form-select-box__multi-value {
        background-color: ${s};
        padding: ${e.spacing(.25,.5,.25,1)};
        border-radius: ${e.shape.borderRadius(1)};
      }
    `,sort:h.css`
      width: 170px;
    `,sessionName:h.css`
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: ${e.spacing(3)};
      h4 {
        margin: 0 10px 0 0;
      }
    `,heading:h.css`
      font-size: ${e.typography.h4.fontSize};
      margin: ${e.spacing(2,.25,1,.25)};
    `,footer:h.css`
      height: 60px;
      margin: ${e.spacing(3)} auto;
      display: flex;
      justify-content: center;
      font-weight: ${e.typography.fontWeightLight};
      font-size: ${e.typography.bodySmall.fontSize};
      a {
        font-weight: ${e.typography.fontWeightMedium};
        margin-left: ${e.spacing(.25)};
      }
    `,queries:h.css`
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightRegular};
      margin-left: ${e.spacing(.5)};
    `}};function aa(e){const{queries:n,totalQueries:s,loading:o,richHistorySearchFilters:a,updateFilters:r,clearRichHistoryResults:i,loadMoreRichHistory:c,richHistorySettings:d,exploreId:p,height:u,activeDatasourceInstance:m}=e,g=(0,N.wW)((0,t.useCallback)(x=>na(x,u),[u])),y=(0,re.DR)();if((0,t.useEffect)(()=>{const x=!d.activeDatasourceOnly&&d.lastUsedDatasourceFilters?d.lastUsedDatasourceFilters:[m],w={search:"",sortOrder:re.As.Descending,datasourceFilters:x,from:0,to:d.retentionPeriod,starred:!1};return r(w),()=>{i()}},[]),!a)return t.createElement("span",null,"Loading...");const f=(0,re.k4)(n,a.sortOrder),v=cs(),E=n.length&&n.length!==s;return t.createElement("div",{className:g.container},t.createElement("div",{className:g.containerSlider},t.createElement("div",{className:g.fixedSlider},t.createElement("div",{className:g.labelSlider},"Filter history"),t.createElement("div",{className:g.labelSlider},(0,re.bQ)(a.from)),t.createElement("div",{className:g.slider},t.createElement(Xn.U,{tooltipAlwaysVisible:!1,min:0,max:d.retentionPeriod,value:[a.from,a.to],orientation:"vertical",formatTooltipResult:re.bQ,reverse:!0,onAfterChange:x=>{r({from:x[0],to:x[1]})}})),t.createElement("div",{className:g.labelSlider},(0,re.bQ)(a.to)))),t.createElement("div",{className:g.containerContent},t.createElement("div",{className:g.selectors},!d.activeDatasourceOnly&&t.createElement(ke.NU,{className:g.multiselect,options:y.map(x=>({value:x.name,label:x.name})),value:a.datasourceFilters,placeholder:"Filter queries for data sources(s)","aria-label":"Filter queries for data sources(s)",onChange:x=>{r({datasourceFilters:x.map(w=>w.value)})}}),t.createElement("div",{className:g.filterInput},t.createElement(rs.H,{placeholder:"Search queries",value:a.search,onChange:x=>r({search:x})})),t.createElement("div",{"aria-label":"Sort queries",className:g.sort},t.createElement(ke.Ph,{value:v.filter(x=>x.value===a.sortOrder),options:v,placeholder:"Sort queries by",onChange:x=>r({sortOrder:x.value})}))),o&&t.createElement("span",null,"Loading results..."),!o&&Object.keys(f).map(x=>t.createElement("div",{key:x},t.createElement("div",{className:g.heading},x," ",t.createElement("span",{className:g.queries},E?"Displaying ":"",f[x].length," queries")),f[x].map(w=>{const S=y.findIndex(b=>b.uid===w.datasourceUid);return t.createElement(is,{query:w,key:w.id,exploreId:p,dsImg:S===-1?"public/img/icn-datasource.svg":y[S].imgUrl,isRemoved:S===-1})}))),E?t.createElement("div",null,"Showing ",n.length," of ",s," ",t.createElement(k.zx,{onClick:c},"Load more")):null,t.createElement("div",{className:g.footer},A.v.queryHistoryEnabled?"":"The history is local to your browser and is not shared with others.")))}var ra=l(66719);const ia=e=>({container:h.css`
      font-size: ${e.typography.bodySmall.fontSize};
    `,spaceBetween:h.css`
      margin-bottom: ${e.spacing(3)};
    `,input:h.css`
      max-width: 200px;
    `,bold:h.css`
      font-weight: ${e.typography.fontWeightBold};
    `,bottomMargin:h.css`
      margin-bottom: ${e.spacing(1)};
    `}),ls=[{value:2,label:"2 days"},{value:5,label:"5 days"},{value:7,label:"1 week"},{value:14,label:"2 weeks"}];function la(e){const{retentionPeriod:n,starredTabAsFirstTab:s,activeDatasourceOnly:o,onChangeRetentionPeriod:a,toggleStarredTabAsFirstTab:r,toggleactiveDatasourceOnly:i,deleteRichHistory:c}=e,d=(0,N.wW)(ia),p=ls.find(m=>m.value===n),u=()=>{st.Z.publish(new ot.VJ({title:"Delete",text:"Are you sure you want to permanently delete your query history?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>{c(),(0,mt.WI)((0,gt.$l)((0,le.AT)("Query history deleted")))}}))};return t.createElement("div",{className:d.container},(0,$e.X)().changeRetention?t.createElement(ss.g,{label:"History time span",description:`Select the period of time for which Grafana will save your query history. Up to ${ra.H6} entries will be stored.`},t.createElement("div",{className:d.input},t.createElement(ke.Ph,{value:p,options:ls,onChange:a}))):t.createElement(Ve.b,{severity:"info",title:"History time span"},"Grafana will keep entries up to ",p?.label,"."),t.createElement(Se._,{label:"Change the default active tab from \u201CQuery history\u201D to \u201CStarred\u201D",className:d.spaceBetween},t.createElement(Ie.x,{id:"explore-query-history-settings-default-active-tab",value:s,onChange:r})),(0,$e.X)().onlyActiveDataSource&&t.createElement(Se._,{label:"Only show queries for data source currently active in Explore",className:d.spaceBetween},t.createElement(Ie.x,{id:"explore-query-history-settings-data-source-behavior",value:o,onChange:i})),(0,$e.X)().clearHistory&&t.createElement("div",null,t.createElement("div",{className:d.bold},"Clear query history"),t.createElement("div",{className:d.bottomMargin},"Delete all of your query history, permanently."),t.createElement(k.zx,{variant:"destructive",onClick:u},"Clear query history")))}const ca=e=>{const n=e.isLight?e.v1.palette.gray5:e.v1.palette.dark4;return{container:h.css`
      display: flex;
    `,containerContent:h.css`
      width: 100%;
    `,selectors:h.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,multiselect:h.css`
      width: 100%;
      margin-bottom: ${e.spacing(1)};
      .gf-form-select-box__multi-value {
        background-color: ${n};
        padding: ${e.spacing(.25,.5,.25,1)};
        border-radius: ${e.shape.borderRadius(1)};
      }
    `,filterInput:h.css`
      margin-bottom: ${e.spacing(1)};
    `,sort:h.css`
      width: 170px;
    `,footer:h.css`
      height: 60px;
      margin-top: ${e.spacing(3)};
      display: flex;
      justify-content: center;
      font-weight: ${e.typography.fontWeightLight};
      font-size: ${e.typography.bodySmall.fontSize};
      a {
        font-weight: ${e.typography.fontWeightMedium};
        margin-left: ${e.spacing(.25)};
      }
    `}};function da(e){const{updateFilters:n,clearRichHistoryResults:s,loadMoreRichHistory:o,activeDatasourceInstance:a,richHistorySettings:r,queries:i,totalQueries:c,loading:d,richHistorySearchFilters:p,exploreId:u}=e,m=(0,N.wW)(ca),g=(0,re.DR)();if((0,t.useEffect)(()=>{const f=r.activeDatasourceOnly&&r.lastUsedDatasourceFilters?r.lastUsedDatasourceFilters:[a],v={search:"",sortOrder:re.As.Descending,datasourceFilters:f,from:0,to:r.retentionPeriod,starred:!0};return n(v),()=>{s()}},[]),!p)return t.createElement("span",null,"Loading...");const y=cs();return t.createElement("div",{className:m.container},t.createElement("div",{className:m.containerContent},t.createElement("div",{className:m.selectors},!r.activeDatasourceOnly&&t.createElement(ke.NU,{className:m.multiselect,options:g.map(f=>({value:f.name,label:f.name})),value:p.datasourceFilters,placeholder:"Filter queries for data sources(s)","aria-label":"Filter queries for data sources(s)",onChange:f=>{n({datasourceFilters:f.map(v=>v.value)})}}),t.createElement("div",{className:m.filterInput},t.createElement(rs.H,{placeholder:"Search queries",value:p.search,onChange:f=>n({search:f})})),t.createElement("div",{"aria-label":"Sort queries",className:m.sort},t.createElement(ke.Ph,{value:y.filter(f=>f.value===p.sortOrder),options:y,placeholder:"Sort queries by",onChange:f=>n({sortOrder:f.value})}))),d&&t.createElement("span",null,"Loading results..."),!d&&i.map(f=>{const v=g.findIndex(E=>E.uid===f.datasourceUid);return t.createElement(is,{query:f,key:f.id,exploreId:u,dsImg:v===-1?"public/img/icn-datasource.svg":g[v].imgUrl,isRemoved:v===-1})}),i.length&&i.length!==c?t.createElement("div",null,"Showing ",i.length," of ",c," ",t.createElement(k.zx,{onClick:o},"Load more")):null,t.createElement("div",{className:m.footer},A.v.queryHistoryEnabled?"":"The history is local to your browser and is not shared with others.")))}var ft=(e=>(e.RichHistory="Query history",e.Starred="Starred",e.Settings="Settings",e))(ft||{});const cs=()=>[{label:"Newest first",value:re.As.Descending},{label:"Oldest first",value:re.As.Ascending},{label:"Data source A-Z",value:re.As.DatasourceAZ},{label:"Data source Z-A",value:re.As.DatasourceZA}].filter(e=>(0,$e.X)().availableFilters.includes(e.value));class ua extends t.PureComponent{constructor(){super(...arguments),this.state={loading:!1},this.updateSettings=n=>{this.props.updateHistorySettings({...this.props.richHistorySettings,...n})},this.updateFilters=n=>{const s={...this.props.richHistorySearchFilters,...n,page:1};this.props.updateHistorySearchFilters(this.props.exploreId,s),this.loadRichHistory()},this.clearResults=()=>{this.props.clearRichHistoryResults(this.props.exploreId)},this.loadRichHistory=(0,ee.debounce)(()=>{this.props.loadRichHistory(this.props.exploreId),this.setState({loading:!0})},300),this.onChangeRetentionPeriod=n=>{n.value!==void 0&&this.updateSettings({retentionPeriod:n.value})},this.toggleStarredTabAsFirstTab=()=>this.updateSettings({starredTabAsFirstTab:!this.props.richHistorySettings.starredTabAsFirstTab}),this.toggleActiveDatasourceOnly=()=>this.updateSettings({activeDatasourceOnly:!this.props.richHistorySettings.activeDatasourceOnly})}componentDidUpdate(n,s,o){n.richHistory!==this.props.richHistory&&this.setState({loading:!1})}render(){const{richHistory:n,richHistoryTotal:s,height:o,exploreId:a,deleteRichHistory:r,onClose:i,firstTab:c,activeDatasourceInstance:d}=this.props,{loading:p}=this.state,u={label:"Query history",value:"Query history",content:t.createElement(aa,{queries:n,totalQueries:s||0,loading:p,updateFilters:this.updateFilters,clearRichHistoryResults:()=>this.props.clearRichHistoryResults(this.props.exploreId),loadMoreRichHistory:()=>this.props.loadMoreRichHistory(this.props.exploreId),activeDatasourceInstance:d,richHistorySettings:this.props.richHistorySettings,richHistorySearchFilters:this.props.richHistorySearchFilters,exploreId:a,height:o}),icon:"history"},m={label:"Starred",value:"Starred",content:t.createElement(da,{queries:n,totalQueries:s||0,loading:p,activeDatasourceInstance:d,updateFilters:this.updateFilters,clearRichHistoryResults:()=>this.props.clearRichHistoryResults(this.props.exploreId),loadMoreRichHistory:()=>this.props.loadMoreRichHistory(this.props.exploreId),richHistorySettings:this.props.richHistorySettings,richHistorySearchFilters:this.props.richHistorySearchFilters,exploreId:a}),icon:"star"},g={label:"Settings",value:"Settings",content:t.createElement(la,{retentionPeriod:this.props.richHistorySettings.retentionPeriod,starredTabAsFirstTab:this.props.richHistorySettings.starredTabAsFirstTab,activeDatasourceOnly:this.props.richHistorySettings.activeDatasourceOnly,onChangeRetentionPeriod:this.onChangeRetentionPeriod,toggleStarredTabAsFirstTab:this.toggleStarredTabAsFirstTab,toggleactiveDatasourceOnly:this.toggleActiveDatasourceOnly,deleteRichHistory:r}),icon:"sliders-v-alt"};let y=[u,m,g];return t.createElement(Ct.W,{tabs:y,onClose:i,defaultTab:c,closeIconTooltip:"Close query history"})}}const pa=(0,N.HE)(ua);function ha(e,{exploreId:n}){const s=e.explore,o=s[n],a=o.richHistorySearchFilters,r=s.richHistorySettings,{datasourceInstance:i}=o,c=r?.starredTabAsFirstTab?ft.Starred:ft.RichHistory,{richHistory:d,richHistoryTotal:p}=o;return{richHistory:d,richHistoryTotal:p,firstTab:c,activeDatasourceInstance:i.name,richHistorySettings:r,richHistorySearchFilters:a}}const ga={initRichHistory:ve.sO,loadRichHistory:ve.TV,loadMoreRichHistory:ve.io,clearRichHistoryResults:ve.Cs,updateHistorySettings:ve.ch,updateHistorySearchFilters:ve.KZ,deleteRichHistory:ve.ik},ma=(0,q.connect)(ha,ga);function fa(e){const n=(0,N.l4)(),[s,o]=(0,t.useState)(n.components.horizontalDrawer.defaultHeight),{richHistory:a,richHistoryTotal:r,width:i,firstTab:c,activeDatasourceInstance:d,exploreId:p,deleteRichHistory:u,initRichHistory:m,loadRichHistory:g,loadMoreRichHistory:y,clearRichHistoryResults:f,richHistorySettings:v,updateHistorySettings:E,richHistorySearchFilters:x,updateHistorySearchFilters:w,onClose:S}=e;return(0,t.useEffect)(()=>{m(),(0,P.ff)("grafana_explore_query_history_opened",{queryHistoryEnabled:A.v.queryHistoryEnabled})},[m]),v?t.createElement(Dt,{width:i,onResize:(b,C,B)=>{o(Number(B.style.height.slice(0,-2)))}},t.createElement(pa,{richHistory:a,richHistoryTotal:r,firstTab:c,activeDatasourceInstance:d,exploreId:p,onClose:S,height:s,deleteRichHistory:u,richHistorySettings:v,richHistorySearchFilters:x,updateHistorySettings:E,updateHistorySearchFilters:w,loadRichHistory:g,loadMoreRichHistory:y,clearRichHistoryResults:f})):t.createElement("span",null,"Loading...")}const ya=ma(fa),va=e=>({containerMargin:h.css`
      margin-top: ${e.spacing(2)};
    `});function Ea(e){const n=(0,N.l4)(),s=va(n);return t.createElement("div",{className:s.containerMargin},t.createElement(Ut.Lh,null,!e.addQueryRowButtonHidden&&t.createElement(k.zx,{variant:"secondary","aria-label":"Add row button",onClick:e.onClickAddQueryRowButton,disabled:e.addQueryRowButtonDisabled,icon:"plus"},"Add query"),!e.richHistoryRowButtonHidden&&t.createElement(k.zx,{variant:"secondary","aria-label":"Rich history button",className:(0,h.cx)({["explore-active-button"]:e.richHistoryButtonActive}),onClick:e.onClickRichHistoryButton,icon:"history"},"Query history"),t.createElement(k.zx,{variant:"secondary","aria-label":"Query inspector button",className:(0,h.cx)({["explore-active-button"]:e.queryInspectorButtonActive}),onClick:e.onClickQueryInspectorButton,icon:"info-circle"},"Inspector")))}function xa(e,{exploreId:n}){const o=e.explore[n],{loading:a,tableResult:r,range:i}=o;return{loading:r&&r.length>0?!1:a,tableResult:r,range:i}}const Sa=(0,q.connect)(xa,{});class ba extends t.PureComponent{getMainFrame(n){return n?.find(s=>s.meta?.custom?.parentRowIndex===void 0)||n?.[0]}getTableHeight(){const{tableResult:n}=this.props,s=this.getMainFrame(n);return!s||s.length===0?200:Math.max(Math.min(600,s.length*35)+35)}render(){const{loading:n,onCellFilterAdded:s,tableResult:o,width:a,splitOpenFn:r,range:i,ariaLabel:c,timeZone:d}=this.props,p=this.getTableHeight(),u=a-Oe.vc.theme.panelPadding*2-ts.QO;let m=o;if(m?.length){m=(0,qe.SM)({data:m,timeZone:d,theme:Oe.vc.theme2,replaceVariables:f=>f,fieldConfig:{defaults:{},overrides:[]}});for(const f of m)for(const v of f.fields)v.getLinks=E=>(0,et.a)({field:v,rowIndex:E.valueRowIndex,splitOpenFn:r,range:i,dataFrame:f})}const g=this.getMainFrame(m),y=m?.filter(f=>f.meta?.custom?.parentRowIndex!==void 0);return t.createElement(ye.U,{label:"Table",loading:n,isOpen:!0},g?.length?t.createElement(es.i,{ariaLabel:c,data:g,subData:y,width:u,height:p,maxHeight:600,onCellFilterAdded:s}):t.createElement(ct,{metaItems:[{value:"0 series returned"}]}))}}const wa=Sa(ba);var Ra=l(21435),Ca=l(21903),Ta=l(14530),La=l(75151),za=l(335);function Ia(e){const n=e.dataFrames[0],{dataFrames:s,splitOpenFn:o,exploreId:a,scrollElement:r,topOfViewRef:i,queryResponse:c}=e,d=(0,t.useMemo)(()=>(0,za.N)(n),[n]),{search:p,setSearch:u,spanFindMatches:m}=(0,La.R)(d?.spans),[g,y]=(0,t.useState)(""),[f,v]=(0,t.useState)(""),E=(0,R.useSelector)(w=>w.explore[e.exploreId]?.datasourceInstance??void 0),x=E?E?.type:"unknown";return d?t.createElement(ye.U,{label:"Trace View",isOpen:!0},t.createElement(Ra.Z,{navigable:!0,searchValue:p,setSearch:u,spanFindMatches:m,searchBarSuffix:f,setSearchBarSuffix:v,focusedSpanIdForSearch:g,setFocusedSpanIdForSearch:y,datasourceType:x}),t.createElement(Ta.m,{exploreId:a,dataFrames:s,splitOpenFn:o,scrollElement:r,traceProp:d,spanFindMatches:m,search:p,focusedSpanIdForSearch:g,queryResponse:c,datasource:E,topOfViewRef:i,topOfViewRefType:Ca.l4.Explore})):null}var yt=l(93713);const Fa=e=>({exploreMain:h.css`
      label: exploreMain;
      // Is needed for some transition animations to work.
      position: relative;
      margin-top: 21px;
    `,button:h.css`
      label: button;
      margin: 1em 4px 0 0;
    `,queryContainer:h.css`
      label: queryContainer;
      // Need to override normal css class and don't want to count on ordering of the classes in html.
      height: auto !important;
      flex: unset !important;
      display: unset !important;
      padding: ${e.spacing(1)};
    `,exploreContainer:h.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: ${e.spacing(2)};
      padding-top: 0;
    `});var Da=(e=>(e[e.RichHistory=0]="RichHistory",e[e.QueryInspector=1]="QueryInspector",e))(Da||{});class Na extends t.PureComponent{constructor(n){super(n),this.topOfViewRef=(0,t.createRef)(),this.onChangeTime=s=>{const{updateTimeRange:o,exploreId:a}=this.props;o({exploreId:a,rawRange:s})},this.onClickExample=s=>{this.props.setQueries(this.props.exploreId,[s])},this.onCellFilterAdded=s=>{const{value:o,key:a,operator:r}=s;r===wt.PT&&this.onClickFilterLabel(a,o),r===wt.tE&&this.onClickFilterOutLabel(a,o)},this.onClickFilterLabel=(s,o)=>{this.onModifyQueries({type:"ADD_FILTER",options:{key:s,value:o}})},this.onClickFilterOutLabel=(s,o)=>{this.onModifyQueries({type:"ADD_FILTER_OUT",options:{key:s,value:o}})},this.onClickAddQueryRowButton=()=>{const{exploreId:s,queryKeys:o}=this.props;this.props.addQueryRow(s,o.length)},this.onMakeAbsoluteTime=()=>{const{makeAbsoluteTime:s}=this.props;s()},this.onModifyQueries=s=>{const o=async(a,r)=>{const{datasource:i}=a;if(i==null)return a;const c=await(0,Me.F)().get(i);return c.modifyQuery?c.modifyQuery(a,r):a};this.props.modifyQueries(this.props.exploreId,s,o)},this.onResize=s=>{this.props.changeSize(this.props.exploreId,s)},this.onStartScanning=()=>{this.props.scanStart(this.props.exploreId)},this.onStopScanning=()=>{this.props.scanStopAction({exploreId:this.props.exploreId})},this.onUpdateTimeRange=s=>{const{exploreId:o,updateTimeRange:a}=this.props;a({exploreId:o,absoluteRange:s})},this.toggleShowRichHistory=()=>{this.setState(s=>({openDrawer:s.openDrawer===0?void 0:0}))},this.toggleShowQueryInspector=()=>{this.setState(s=>({openDrawer:s.openDrawer===1?void 0:1}))},this.onSplitOpen=s=>async o=>{if(this.props.splitOpen(o),o&&this.props.datasourceInstance){const a=(await(0,Me.F)().get(o.datasourceUid)).type,r=this.props.datasourceInstance.uid===Qe.D?(0,ee.get)(this.props.queries,"0.datasource.type"):this.props.datasourceInstance.type,i={origin:"panel",panelType:s,source:r,target:a,exploreId:this.props.exploreId};(0,P.ff)("grafana_explore_split_view_opened",i)}},this.memoizedGetNodeGraphDataFrames=(0,ge.Z)(ms.Ee),this.state={openDrawer:void 0},this.graphEventBus=n.eventBus.newScopedBus("graph",{onlyLocal:!1}),this.logsEventBus=n.eventBus.newScopedBus("logs",{onlyLocal:!1})}componentDidMount(){this.absoluteTimeUnsubsciber=st.Z.subscribe(ot.QI,this.onMakeAbsoluteTime)}componentWillUnmount(){this.absoluteTimeUnsubsciber?.unsubscribe()}renderEmptyState(n){return t.createElement("div",{className:(0,h.cx)(n)},t.createElement(vn,null))}renderNoData(){return t.createElement(mn,null)}renderCompactUrlWarning(){return t.createElement(Rt,{in:!0,duration:100},t.createElement(Ve.b,{severity:"warning",title:"Compact URL Deprecation Notice",topSpacing:2},"The URL that brought you here was a compact URL - this format will soon be deprecated. Please replace the URL previously saved with the URL available now."))}renderGraphPanel(n){const{graphResult:s,absoluteRange:o,timeZone:a,queryResponse:r,loading:i,showFlameGraph:c}=this.props;return t.createElement(wo,{loading:i,data:s,height:c?180:400,width:n,absoluteRange:o,timeZone:a,onChangeTime:this.onUpdateTimeRange,annotations:r.annotations,splitOpenFn:this.onSplitOpen("graph"),loadingState:r.state,eventBus:this.graphEventBus})}renderTablePanel(n){const{exploreId:s,timeZone:o}=this.props;return t.createElement(wa,{ariaLabel:we.wl.pages.Explore.General.table,width:n,exploreId:s,onCellFilterAdded:this.onCellFilterAdded,timeZone:o,splitOpenFn:this.onSplitOpen("table")})}renderRawPrometheus(n){const{exploreId:s,datasourceInstance:o,timeZone:a}=this.props;return t.createElement(Kn,{showRawPrometheus:!0,ariaLabel:we.wl.pages.Explore.General.table,width:n,exploreId:s,onCellFilterAdded:o?.modifyQuery?this.onCellFilterAdded:void 0,timeZone:a,splitOpenFn:this.onSplitOpen("table")})}renderLogsPanel(n){const{exploreId:s,syncedTimes:o,theme:a,queryResponse:r}=this.props,i=parseInt(a.spacing(2).slice(0,-2),10);return t.createElement(pn,{exploreId:s,loadingState:r.state,syncedTimes:o,width:n-i,onClickFilterLabel:this.onClickFilterLabel,onClickFilterOutLabel:this.onClickFilterOutLabel,onStartScanning:this.onStartScanning,onStopScanning:this.onStopScanning,scrollElement:this.scrollElement,eventBus:this.logsEventBus,splitOpenFn:this.onSplitOpen("logs")})}renderLogsSamplePanel(){const{logsSample:n,timeZone:s,setSupplementaryQueryEnabled:o,exploreId:a,datasourceInstance:r,queries:i}=this.props;return t.createElement(hn,{queryResponse:n.data,timeZone:s,enabled:n.enabled,queries:i,datasourceInstance:r,splitOpen:this.onSplitOpen("logsSample"),setLogsSampleEnabled:c=>o(a,c,O.v8.LogsSample)})}renderNodeGraphPanel(){const{exploreId:n,showTrace:s,queryResponse:o,datasourceInstance:a}=this.props,r=a?a?.type:"unknown";return t.createElement(Cn,{dataFrames:this.memoizedGetNodeGraphDataFrames(o.series),exploreId:n,withTraceView:s,datasourceType:r,splitOpenFn:this.onSplitOpen("nodeGraph")})}renderFlameGraphPanel(){const{queryResponse:n}=this.props;return t.createElement(so,{dataFrames:n.flameGraphFrames})}renderTraceViewPanel(){const{queryResponse:n,exploreId:s}=this.props,o=n.series.filter(a=>a.meta?.preferredVisualisationType==="trace");return o.length&&t.createElement(Ia,{exploreId:s,dataFrames:o,splitOpenFn:this.onSplitOpen("traceView"),scrollElement:this.scrollElement,queryResponse:n,topOfViewRef:this.topOfViewRef})}render(){const{datasourceInstance:n,datasourceMissing:s,exploreId:o,graphResult:a,queryResponse:r,isLive:i,theme:c,showMetrics:d,showTable:p,showRawPrometheus:u,showLogs:m,showTrace:g,showNodeGraph:y,showFlameGraph:f,timeZone:v,isFromCompactUrl:E,showLogsSample:x}=this.props,{openDrawer:w}=this.state,S=Fa(c),b=r&&r.state!==j.Gu.NotStarted,C=w===0,B=!(0,$e.X)().queryHistoryAvailable,K=w===1,G=r.state===j.Gu.Done&&[r.logsFrames,r.graphFrames,r.nodeGraphFrames,r.flameGraphFrames,r.tableFrames,r.rawPrometheusFrames,r.traceFrames].every(T=>T.length===0);return t.createElement(St.$,{testId:we.wl.pages.Explore.General.scrollView,autoHeightMin:"100%",scrollRefCallback:T=>this.scrollElement=T||void 0},t.createElement(eo,{exploreId:o,onChangeTime:this.onChangeTime,topOfViewRef:this.topOfViewRef}),E?this.renderCompactUrlWarning():null,s?this.renderEmptyState(S.exploreContainer):null,n&&t.createElement("div",{className:S.exploreContainer},t.createElement(bt.l,{className:S.queryContainer},t.createElement(In,{exploreId:o}),t.createElement(Ea,{addQueryRowButtonDisabled:i,addQueryRowButtonHidden:!1,richHistoryRowButtonHidden:B,richHistoryButtonActive:C,queryInspectorButtonActive:K,onClickAddQueryRowButton:this.onClickAddQueryRowButton,onClickRichHistoryButton:this.toggleShowRichHistory,onClickQueryInspectorButton:this.toggleShowQueryInspector}),t.createElement(Jn,{exploreId:o})),t.createElement(hs.Z,{onResize:this.onResize,disableHeight:!0},({width:T})=>T===0?null:t.createElement("main",{className:(0,h.cx)(S.exploreMain),style:{width:T}},t.createElement(V.z4,null,b&&t.createElement(t.Fragment,null,d&&a&&t.createElement(V.z4,null,this.renderGraphPanel(T)),u&&t.createElement(V.z4,null,this.renderRawPrometheus(T)),p&&t.createElement(V.z4,null,this.renderTablePanel(T)),m&&t.createElement(V.z4,null,this.renderLogsPanel(T)),y&&t.createElement(V.z4,null,this.renderNodeGraphPanel()),f&&A.v.featureToggles.flameGraph&&t.createElement(V.z4,null,this.renderFlameGraphPanel()),g&&t.createElement(V.z4,null,this.renderTraceViewPanel()),x&&t.createElement(V.z4,null,this.renderLogsSamplePanel()),G&&t.createElement(V.z4,null,this.renderNoData())),C&&t.createElement(ya,{width:T,exploreId:o,onClose:this.toggleShowRichHistory}),K&&t.createElement($s,{exploreId:o,width:T,onClose:this.toggleShowQueryInspector,timeZone:v}))))))}}function Pa(e,{exploreId:n}){const s=e.explore,{syncedTimes:o}=s,a=s[n],r=(0,De.Z)(e.user),{datasourceInstance:i,datasourceMissing:c,queryKeys:d,queries:p,isLive:u,graphResult:m,tableResult:g,logsResult:y,showLogs:f,showMetrics:v,showTable:E,showTrace:x,absoluteRange:w,queryResponse:S,showNodeGraph:b,showFlameGraph:C,loading:B,isFromCompactUrl:K,showRawPrometheus:G,supplementaryQueries:T}=a,D=T[O.v8.LogsSample],Q=!!(D.dataProvider!==void 0&&!y&&(m||g));return{datasourceInstance:i,datasourceMissing:c,queryKeys:d,queries:p,isLive:u,graphResult:m,logsResult:y??void 0,absoluteRange:w,queryResponse:S,syncedTimes:o,timeZone:r,showLogs:f,showMetrics:v,showTable:E,showTrace:x,showNodeGraph:b,showRawPrometheus:G,showFlameGraph:C,splitted:(0,ne.p)(e),loading:B,isFromCompactUrl:K||!1,logsSample:D,showLogsSample:Q}}const Ha={changeSize:yt.qN,modifyQueries:F.sK,scanStart:F.EA,scanStopAction:F.P4,setQueries:F.KO,updateTimeRange:Te.cD,makeAbsoluteTime:Te.F9,addQueryRow:F.CS,splitOpen:I.bW,setSupplementaryQueryEnabled:F.z0},Oa=(0,q.connect)(Pa,Ha),Ma=(0,N.HE)(Oa(Na)),$a=e=>({explore:h.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      overflow: hidden;
      min-width: 600px;
      & + & {
        border-left: 1px dotted ${e.colors.border.medium};
      }
    `});class Aa extends t.PureComponent{constructor(n){super(n),this.el=null,this.refreshExplore=s=>{const{exploreId:o,urlQuery:a}=this.props;a!==s&&a!==I.IS[o]&&this.props.refreshExplore(o,a)},this.getRef=s=>{this.el=s},this.exploreEvents=new Re.F,this.state={openDrawer:void 0}}async componentDidMount(){const{initialized:n,exploreId:s,initialDatasource:o,initialQueries:a,initialRange:r,panelsState:i,orgId:c,isFromCompactUrl:d}=this.props,p=this.el?.offsetWidth??0;if(!n){let u,m;if((!a||a.length===0)&&o&&!(o===Qe.D||o.uid===Qe.D)){const{instance:v}=await(0,Wt.r_)(c,o);u=v.getRef()}let g=await(0,Ee.Z8)(a,u);if(!(0,Ee._o)(g).noneHaveDatasource&&!(0,Ee._o)(g).allDatasourceSame)if(Oe.vc.featureToggles.exploreMixedDatasource)m=await(0,Ue.ak)().get(Qe.D);else{const f=g.find(v=>v.datasource?.uid).datasource.uid;if(f){m=f;const v=await(0,Ue.ak)().get(f),E=await(0,Ue.ak)().get(o);await this.props.importQueries(s,g,E,v),await this.props.stateSave({replace:!0}),g=this.props.initialQueries}}d&&(0,P.ff)("grafana_explore_compact_notice"),this.props.initializeExplore(s,m||g[0]?.datasource||o,g,r,p,this.exploreEvents,i,d)}}componentWillUnmount(){this.exploreEvents.removeAllListeners()}componentDidUpdate(n){this.refreshExplore(n.urlQuery)}render(){const{theme:n,exploreId:s,initialized:o,eventBus:a}=this.props,r=$a(n);return t.createElement("div",{className:r.explore,ref:this.getRef,"data-testid":we.wl.pages.Explore.General.container},o&&t.createElement(Ma,{exploreId:s,eventBus:a}))}}const Ba=(0,ge.Z)(Ee.vP);function Wa(e,n){const s=(0,Ee.J5)(n.urlQuery),o=(0,De.Z)(e.user),a=(0,De.i)(e.user),{datasource:r,queries:i,range:c,panelsState:d}=s||{},p=r||te.Z.get((0,Ee.I$)(e.user.orgId)),u=c?Ba(c,o,a):(0,Ee.OQ)(o,Ee.UI,a);return{initialized:e.explore[n.exploreId]?.initialized,initialDatasource:p,initialQueries:i,initialRange:u,panelsState:d,orgId:e.user.orgId,isFromCompactUrl:s.isFromCompactUrl||!1}}const ka={initializeExplore:yt.CK,refreshExplore:yt.Om,importQueries:F.GJ,stateSave:I.og},Qa=(0,q.connect)(Wa,ka),ds=(0,N.HE)(Qa(Aa)),Ua={pageScrollbarWrapper:h.css`
    width: 100%;
    flex-grow: 1;
    min-height: 0;
    height: 100%;
    position: relative;
  `};function Va(e){Za();const n=(0,R.useDispatch)(),s=e.queryParams,{keybindings:o,chrome:a,config:r}=(0,he.p)(),i=(0,W.q)("explore"),{get:c}=(0,X.K)(),{warning:d}=(0,le.iG)(),p=(0,pe.R9)(),u=(0,t.useRef)(p.eventBus.newScopedBus("explore",{onlyLocal:!1})),[m,g]=(0,t.useState)(.5),{width:y}=(0,$.Z)(),f=200,v=(0,R.useSelector)(S=>S.explore);(0,t.useEffect)(()=>{a.update({sectionNav:i.node})},[a,i]),(0,t.useEffect)(()=>{o.setupTimeRangeBindings(!1)},[o]),(0,t.useEffect)(()=>{r.featureToggles.correlations?c.execute():n((0,I.CL)([]))},[]),(0,t.useEffect)(()=>{c.value?n((0,I.CL)(c.value)):c.error&&(n((0,I.CL)([])),d("Could not load correlations.","Correlations data could not be loaded, DataLinks may have partial data."))},[c.value,c.error,n,d]),(0,t.useEffect)(()=>{I.IS.left=void 0,I.IS.right=void 0;const S=oe.E1.getSearchObject();return(S.from||S.to)&&oe.E1.partial({from:void 0,to:void 0},!0),()=>{n((0,I.WK)())}},[]);const E=S=>{const b=y/2,C=(0,ee.inRange)(S,b-100,b+100);n(C?(0,I.Sx)({largerExploreId:void 0}):(0,I.Sx)({largerExploreId:S>b?L.Kd.right:L.Kd.left})),g(S/y)},x=Boolean(s.left)&&Boolean(s.right);let w=0;return x&&(!v.evenSplitPanes&&v.maxedExploreId?w=v.maxedExploreId===L.Kd.right?y-f:f:v.evenSplitPanes?w=Math.floor(y/2):m!==void 0&&(w=y*m)),t.createElement("div",{className:Ua.pageScrollbarWrapper},t.createElement(be,{exploreIdLeft:L.Kd.left,exploreIdRight:L.Kd.right}),t.createElement(J.U,{splitOrientation:"vertical",paneSize:w,minSize:f,maxSize:f*-1,primary:"second",splitVisible:x,paneStyle:{overflow:"auto",display:"flex",flexDirection:"column"},onDragFinished:S=>{S&&E(S)}},t.createElement(V.z4,{style:"page"},t.createElement(ds,{exploreId:L.Kd.left,urlQuery:s.left,eventBus:u.current})),x&&t.createElement(V.z4,{style:"page"},t.createElement(ds,{exploreId:L.Kd.right,urlQuery:s.right,eventBus:u.current}))))}const Za=()=>{const e=(0,W.q)("explore"),n=(0,R.useSelector)(s=>[s.explore.left.datasourceInstance?.name,s.explore.right?.datasourceInstance?.name].filter(j.fQ));document.title=`${e.main.text} - ${n.join(" | ")} - ${H.c.AppTitle}`};function Ga(e){const n=(0,R.useDispatch)();(0,U.Z)(()=>{A.v.featureToggles.datasourceOnboarding&&n((0,me.bZ)())});const{hasDatasource:s,loading:o}=(0,R.useSelector)(c=>({hasDatasource:c.dataSources.dataSourcesCount>0,loading:!c.dataSources.hasFetched})),[a,r]=(0,t.useState)(A.v.featureToggles.datasourceOnboarding);return s||!a?t.createElement(Va,{...e}):t.createElement(se.O,{onCTAClick:()=>r(!1),loading:o,title:"Welcome to Grafana Explore!",CTAText:"Or explore sample data",navId:"explore"})}},75090:(Fe,ie,l)=>{l.d(ie,{F:()=>A,p:()=>U});var t=l(81168);const U=se=>Boolean(se.explore[t.ExploreId.left]&&se.explore[t.ExploreId.right]),A=se=>R=>R.explore[se]},39653:(Fe,ie,l)=>{l.d(ie,{q:()=>t});var t=(U=>(U.Data="data",U.Meta="meta",U.Error="error",U.Stats="stats",U.JSON="json",U.Query="query",U.Actions="actions",U.Help="help",U))(t||{})},3823:(Fe,ie,l)=>{l.d(ie,{Z:()=>ee});var t=l(81582),U=l.n(t),A=l(68404),se=l(24015),R=function($){$===void 0&&($={});var j=(0,A.useState)($),oe=j[0],pe=j[1],V=(0,A.useCallback)(function(J){pe(function(he){return Object.assign({},he,J instanceof Function?J(he):J)})},[]);return[oe,V]};const me=R;var h=function(){var $=(0,se.Z)(),j=me({value:void 0,error:void 0,noUserInteraction:!0}),oe=j[0],pe=j[1],V=(0,A.useCallback)(function(J){if($()){var he,le;try{if(typeof J!="string"&&typeof J!="number"){var W=new Error("Cannot copy typeof "+typeof J+" to clipboard, must be a string");pe({value:J,error:W,noUserInteraction:!0});return}else if(J===""){var W=new Error("Cannot copy empty string to clipboard.");pe({value:J,error:W,noUserInteraction:!0});return}le=J.toString(),he=U()(le),pe({value:le,error:void 0,noUserInteraction:he})}catch(L){pe({value:le,error:L,noUserInteraction:he})}}},[]);return[oe,V]};const ee=h},78337:(Fe,ie,l)=>{l.d(ie,{Z:()=>A});var t=l(68404),U=function(se,R){var me=(0,t.useRef)(function(){});(0,t.useEffect)(function(){me.current=se}),(0,t.useEffect)(function(){if(R!==null){var h=setInterval(function(){return me.current()},R||0);return function(){return clearInterval(h)}}},[R])};const A=U}}]);

//# sourceMappingURL=explore.47f658876c6bd3b8fbe8.js.map