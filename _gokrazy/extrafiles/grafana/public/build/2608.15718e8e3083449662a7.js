(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2608],{"./.yarn/__virtual__/@emotion-css-virtual-15ef12e38d/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js":(e,t,n)=>{"use strict";n.d(t,{iv:()=>h,cx:()=>p,F4:()=>u});var r=n("../../opt/drone/yarncache/@emotion-cache-npm-11.7.1-82b45442ee-cf7aa8fe3b.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),s=n("../../opt/drone/yarncache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),o=n("../../opt/drone/yarncache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function a(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function i(e,t,n){var r=[],s=(0,o.f)(e,r,n);return r.length<2?n:s+t(r)}var l=function e(t){for(var n="",r=0;r<t.length;r++){var s=t[r];if(null!=s){var o=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=e(s);else for(var a in o="",s)s[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=s}o&&(n&&(n+=" "),n+=o)}}return n};const c=function(e){var t=(0,r.Z)(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=(0,s.O)(n,t.registered,void 0);return(0,o.M)(t,a,!1),t.key+"-"+a.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return i(t.registered,n,l(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=(0,s.O)(n,t.registered);a(t,o)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=(0,s.O)(n,t.registered),i="animation-"+o.name;return a(t,{name:o.name,styles:"@keyframes "+i+"{"+o.styles+"}"}),i},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:o.f.bind(null,t.registered),merge:i.bind(null,t.registered,n)}};var d=c({key:"css"}),p=(d.flush,d.hydrate,d.cx),u=(d.merge,d.getRegisteredStyles,d.injectGlobal,d.keyframes),h=d.css;d.sheet,d.cache},"./packages/jaeger-ui-components/src/index.ts":(e,t,n)=>{"use strict";n.d(t,{kt:()=>Nr,T2:()=>Dr,Ox:()=>fn,h2:()=>W,rZ:()=>as,R1:()=>os});var r=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=n("./.yarn/__virtual__/@emotion-css-virtual-15ef12e38d/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),o=n("./packages/grafana-ui/src/index.ts"),a=n("../../opt/drone/yarncache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js"),i=n.n(a),l=n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=()=>({TimelineCollapser:s.iv`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `});function d(e){const{onExpandAll:t,onExpandOne:n,onCollapseAll:r,onCollapseOne:s}=e,a=(0,o.useStyles2)(c);return(0,l.jsxs)("div",{className:a.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[(0,l.jsx)(o.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:n}),(0,l.jsx)(o.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:s}),(0,l.jsx)(o.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),(0,l.jsx)(o.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:r})]})}var p;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(p||(p={}));const u=p;var h=n("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const m=["getBounds","tag","resetBoundsOnResize"];function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class f{constructor(e){let{getBounds:t,tag:n,resetBoundsOnResize:r=!0}=e,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,m);g(this,"_bounds",void 0),g(this,"_isDragging",void 0),g(this,"_onMouseEnter",void 0),g(this,"_onMouseLeave",void 0),g(this,"_onMouseMove",void 0),g(this,"_onDragStart",void 0),g(this,"_onDragMove",void 0),g(this,"_onDragEnd",void 0),g(this,"_resetBoundsOnResize",void 0),g(this,"getBounds",void 0),g(this,"tag",void 0),g(this,"handleMouseEnter",void 0),g(this,"handleMouseMove",void 0),g(this,"handleMouseLeave",void 0),g(this,"handleMouseDown",void 0),g(this,"resetBounds",(()=>{this._bounds=void 0})),g(this,"_handleMinorMouseEvent",(e=>{const{button:t,clientX:n,type:r}=e;if(this._isDragging||0!==t)return;let s,o=null;if("mouseenter"===r)o=u.MouseEnter,s=this._onMouseEnter;else if("mouseleave"===r)o=u.MouseLeave,s=this._onMouseLeave;else{if("mousemove"!==r)throw new Error(`invalid event type: ${r}`);o=u.MouseMove,s=this._onMouseMove}if(!s)return;const{value:a,x:i}=this._getPosition(n);s({event:e,type:o,value:a,x:i,manager:this,tag:this.tag})})),g(this,"_handleDragEvent",(e=>{const{button:t,clientX:n,type:r}=e;let s,o=null;if("mousedown"===r){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=(0,h.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,o=u.DragStart,s=this._onDragStart}else if("mousemove"===r){if(!this._isDragging)return;o=u.DragMove,s=this._onDragMove}else{if("mouseup"!==r)throw new Error(`invalid event type: ${r}`);if(!this._isDragging)return;this._stopDragging(),o=u.DragEnd,s=this._onDragEnd}if(!s)return;const{value:a,x:i}=this._getPosition(n);s({event:e,type:o,value:a,x:i,manager:this,tag:this.tag})})),this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=n,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(r),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=s.onMouseEnter,this._onMouseLeave=s.onMouseLeave,this._onMouseMove=s.onMouseMove,this._onDragStart=s.onDragStart,this._onDragMove=s.onDragMove,this._onDragEnd=s.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:n,minValue:r,width:s}=this._getBounds();let o=e-t,a=o/s;return null!=r&&a<r?(a=r,o=r*s):null!=n&&a>n&&(a=n,o=n*s),{value:a,x:o}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=(0,h.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const v=(0,o.stylesFactory)((()=>({TimelineColumnResizer:s.iv`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:s.iv`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:s.iv`
      border-left: 2px solid transparent;
      cursor: col-resize;
      height: 5000px;
      margin-left: -1px;
      position: absolute;
      top: 0;
      width: 1px;
      z-index: 10;
      &:hover {
        border-left: 2px solid rgba(0, 0, 0, 0.3);
      }
      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -8px;
        right: 0;
        content: ' ';
      }
    `,draggerDragging:s.iv`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:s.iv`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:s.iv`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:s.iv`
      position: absolute;
      top: 0;
      bottom: 0;
      &::before,
      &::after {
        border-right: 1px solid #ccc;
        content: ' ';
        height: 9px;
        position: absolute;
        right: 9px;
        top: 25px;
      }
      &::after {
        right: 5px;
      }
    `,gripIconDragging:s.iv`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `})));class y extends r.PureComponent{constructor(e){super(e),b(this,"state",void 0),b(this,"_dragManager",void 0),b(this,"_rootElm",void 0),b(this,"_setRootElm",(e=>{this._rootElm=e})),b(this,"_getDraggingBounds",(()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:n,max:r}=this.props;return{clientXLeft:e,width:t,maxValue:r,minValue:n}})),b(this,"_handleDragUpdate",(e=>{let{value:t}=e;this.setState({dragPosition:t})})),b(this,"_handleDragEnd",(e=>{let{manager:t,value:n}=e;t.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(n)})),this._dragManager=new f({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:n,columnResizeHandleHeight:r}=this.props,{dragPosition:s}=this.state;e=100*n+"%";const o={left:e};let a=!1,c=!1;const d=v();if(this._dragManager.isDragging()&&this._rootElm&&null!=s){a=s<n,c=s>n,e=100*s+"%";t={left:100*Math.min(n,s)+"%",right:`calc(${100*(1-Math.max(n,s))}% - 1px)`}}else t=o;t.height=r;const p=a||c;return(0,l.jsxs)("div",{className:d.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[(0,l.jsx)("div",{className:i()(d.gripIcon,p&&d.gripIconDragging),style:o,"data-test-id":"TimelineColumnResizer--gripIcon"}),(0,l.jsx)("div",{"aria-hidden":!0,className:i()(d.dragger,p&&d.draggerDragging,c&&d.draggerDraggingRight,a&&d.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=(0,o.stylesFactory)((()=>({TimelineViewingLayer:s.iv`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:s.iv`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:s.iv`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:s.iv`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:s.iv`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:s.iv`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:s.iv`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:s.iv`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `})));function _(e,t,n){return e+n*(t-e)}function k(e,t,n){return(n-e)/(t-e)}function T(e,t,n,r,o){const a=function(e,t){let[n,r]=e<t?[e,t]:[t,e];return n>=1||r<=0?{isOutOfView:!0}:(n<0&&(n=0),r>1&&(r=1),{isDraggingLeft:e>t,left:100*n+"%",width:100*(r-n)+"%"})}(k(e,t,n),k(e,t,r));if(function(e){return Reflect.has(e,"isOutOfView")}(a))return null;const{isDraggingLeft:i,left:c,width:d}=a,p=w(),u=(0,s.cx)({[p.TimelineViewingLayerDraggedDraggingRight]:!i,[p.TimelineViewingLayerDraggedReframeDrag]:!o,[p.TimelineViewingLayerDraggedShiftDrag]:o});return(0,l.jsx)("div",{className:(0,s.cx)(p.TimelineViewingLayerDragged,p.TimelineViewingLayerDraggedDraggingLeft,u),style:{left:c,width:d},"data-test-id":"Dragged"})}class j extends r.PureComponent{constructor(e){super(e),x(this,"_draggerReframe",void 0),x(this,"_root",void 0),x(this,"_setRoot",(e=>{this._root=e})),x(this,"_getDraggingBounds",(()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}})),x(this,"_handleReframeMouseMove",(e=>{let{value:t}=e;const[n,r]=this.props.viewRangeTime.current,s=_(n,r,t);this.props.updateNextViewRangeTime({cursor:s})})),x(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:void 0})})),x(this,"_handleReframeDragUpdate",(e=>{let{value:t}=e;const{current:n,reframe:r}=this.props.viewRangeTime,[s,o]=n,a=_(s,o,t),i={reframe:{anchor:r?r.anchor:a,shift:a}};this.props.updateNextViewRangeTime(i)})),x(this,"_handleReframeDragEnd",(e=>{let{manager:t,value:n}=e;const{current:r,reframe:s}=this.props.viewRangeTime,[o,a]=r,i=_(o,a,n),l=s?s.anchor:i,[c,d]=i<l?[i,l]:[l,i];t.resetBounds(),this.props.updateViewRangeTime(c,d,"timeline-header")})),this._draggerReframe=new f({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:n,reframe:r,shiftEnd:s,shiftStart:o}=e,[a,i]=t;let c;!(null!=r||null!=s||null!=o)&&null!=n&&n>=a&&n<=i&&(c=100*k(a,i,n)+"%");const d=w();return(0,l.jsxs)("div",{"aria-hidden":!0,className:d.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=c&&(0,l.jsx)("div",{className:d.TimelineViewingLayerCursorGuide,style:{left:c},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=r&&T(a,i,r.anchor,r.shift,!1),null!=s&&T(a,i,i,s,!0),null!=o&&T(a,i,a,o,!0)]})}}var I=n("../../opt/drone/yarncache/moment-timezone-npm-0.5.34-e4fe2d01f6-12a1d3d52e.zip/node_modules/moment-timezone/index.js"),S=n.n(I);const D=1e3,C=1e6,N=6e7,L=36e8,E=Math.log10(D),M=[{unit:"d",microseconds:864e8,ofPrevious:24},{unit:"h",microseconds:L,ofPrevious:60},{unit:"m",microseconds:N,ofPrevious:60},{unit:"s",microseconds:C,ofPrevious:1e3},{unit:"ms",microseconds:D,ofPrevious:1e3},{unit:"μs",microseconds:1,ofPrevious:1e3}];const R=(e,t,n)=>function(e,t){const n=t+(Math.floor(Math.log10(Math.abs(e)))+1);return n<=0?Math.trunc(e):Number(e.toPrecision(n))}(e/n,t)*n;function O(e){const[t,n]=(0,h.dropWhile)(M,((t,n)=>{let{microseconds:r}=t;return n<M.length-1&&r>e}));if(1e3===t.ofPrevious)return`${(0,h.round)(e/t.microseconds,2)}${t.unit}`;const r=`${Math.floor(e/t.microseconds)}${t.unit}`,s=Math.round(e/n.microseconds%t.ofPrevious),o=`${s}${n.unit}`;return 0===s?r:`${r} ${o}`}function z(e,t,n){return!(!Array.isArray(n.tags)||!n.tags.length)&&n.tags.some((n=>n.key===e&&n.value===t))}const P=z.bind(null,"span.kind","client"),$=z.bind(null,"span.kind","server"),H=z.bind(null,"error",!0),V=z.bind(null,"error","true"),F=e=>H(e)||V(e);var A=n("../../opt/drone/yarncache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js"),B=n.n(A);function W(e,t,n){if(e.isLight)return t;{if(n){const e=B()(t);return B().mostReadable(n,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=B()(t).toHsl();e.l=1-e.l;const r=B()(e);return r.isLight()?r.darken(5).toHex8String():r.lighten(5).toHex8String()}}const G=e=>({Ticks:s.iv`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:s.iv`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${W(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:s.iv`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:s.iv`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `});function K(e){const{endTime:t,numTicks:n,showLabels:r,startTime:s}=e;let a;if(r){a=[];const e=(t||0)-(s||0);for(let t=0;t<n;t++){const r=(s||0)+t/(n-1)*e;a.push(O(r))}}const c=(0,o.useStyles2)(G),d=[];for(let e=0;e<n;e++){const t=e/(n-1);d.push((0,l.jsx)("div",{className:c.TicksTick,style:{left:100*t+"%"},children:a&&(0,l.jsx)("span",{className:i()(c.TicksTickLabel,{[c.TicksTickLabelEndAnchor]:t>=1}),children:a[e]})},t))}return(0,l.jsx)("div",{className:c.Ticks,children:d})}K.defaultProps={endTime:null,showLabels:null,startTime:null};var U=n("./packages/jaeger-ui-components/src/uberUtilityStyles.ts");const q=["children","className"],Z=["children","className","width","style"];function X(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}const Y=()=>({flexRow:s.iv`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `});function J(e){const{children:t,className:n=""}=e,r=X(e,q),s=(0,o.useStyles2)(Y);return(0,l.jsx)("div",Object.assign({className:i()(s.flexRow,n)},r,{children:t}))}function Q(e){const{children:t,className:n="",width:r,style:s}=e,o=X(e,Z),a=100*r+"%",c=Object.assign({},s,{flexBasis:a,maxWidth:a});return(0,l.jsx)("div",Object.assign({className:i()(U.WW,n),style:c},o,{children:t}))}J.defaultProps={className:""},Q.defaultProps={className:"",style:{}},J.Cell=Q;const ee=e=>({TimelineHeaderRow:s.iv`
      label: TimelineHeaderRow;
      background: ${W(e,"#ececec")};
      border-bottom: 1px solid ${W(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:s.iv`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:s.iv`
      label: TimelineHeaderWrapper;
      align-items: center;
    `});function te(e){const{duration:t,nameColumnWidth:n,numTicks:r,onCollapseAll:s,onCollapseOne:a,onColummWidthChange:c,onExpandAll:p,onExpandOne:u,updateViewRangeTime:h,updateNextViewRangeTime:m,viewRangeTime:g,columnResizeHandleHeight:f}=e,[b,v]=g.current,x=(0,o.useStyles2)(ee);return(0,l.jsxs)(J,{className:x.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[(0,l.jsxs)(J.Cell,{className:i()(U.oD,U.H3,x.TimelineHeaderWrapper),width:n,children:[(0,l.jsx)("h4",{className:x.TimelineHeaderRowTitle,children:"Service & Operation"}),(0,l.jsx)(d,{onCollapseAll:s,onExpandAll:p,onCollapseOne:a,onExpandOne:u})]}),(0,l.jsxs)(J.Cell,{width:1-n,children:[(0,l.jsx)(j,{boundsInvalidator:n,updateNextViewRangeTime:m,updateViewRangeTime:h,viewRangeTime:g}),(0,l.jsx)(K,{numTicks:r,startTime:b*t,endTime:v*t,showLabels:!0})]}),(0,l.jsx)(y,{columnResizeHandleHeight:f,position:n,onChange:c,min:.2,max:.85})]})}var ne=n("../../opt/drone/yarncache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class se{constructor(e){re(this,"bufferLen",void 0),re(this,"dataLen",void 0),re(this,"heights",void 0),re(this,"lastI",void 0),re(this,"ys",void 0),this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,n){null!=n&&(this.lastI=n);let r=e+this.bufferLen;if(r<=this.lastI)return;r>=this.heights.length&&(r=this.heights.length-1);let s=this.lastI;for(-1===this.lastI&&(s=0,this.ys[0]=0);s<=r;){const e=this.heights[s]=t(s);this.ys[s+1]=this.ys[s]+e,s++}this.lastI=r}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let n=e;if(n>this.lastI)return void this.calcHeights(n,t);const r=t(n);if(r===this.heights[n])return;const s=r-this.heights[n];for(this.heights[n]=r;++n<=this.lastI;)this.ys[n]+=s;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=s)}findFloorIndex(e,t){this.calcYs(e,t);let n,r=0,s=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[s])return s;for(;r<s;)if(n=r+.5*(s-r)|0,e>this.ys[n]){if(e<=this.ys[n+1])return n;r=n}else{if(!(e<this.ys[n]))return n;if(e>=this.ys[n-1])return n-1;s=n}throw new Error(`unable to find floor index for y=${e}`)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ae=100;class ie extends r.Component{constructor(e){super(e),oe(this,"_yPositions",void 0),oe(this,"_knownHeights",void 0),oe(this,"_startIndexDrawn",void 0),oe(this,"_endIndexDrawn",void 0),oe(this,"_startIndex",void 0),oe(this,"_endIndex",void 0),oe(this,"_viewHeight",void 0),oe(this,"_scrollTop",void 0),oe(this,"_isScrolledOrResized",void 0),oe(this,"_htmlTopOffset",void 0),oe(this,"_windowScrollListenerAdded",void 0),oe(this,"_htmlElm",void 0),oe(this,"_wrapperElm",void 0),oe(this,"_itemHolderElm",void 0),oe(this,"getViewHeight",(()=>this._viewHeight)),oe(this,"getBottomVisibleIndex",(()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)})),oe(this,"getTopVisibleIndex",(()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight))),oe(this,"getRowPosition",(e=>this._yPositions.getRowPosition(e,this._getHeight))),oe(this,"scrollToIndex",(e=>{var t,n;const{scrollElement:r}=this.props,s=(null==r?void 0:r.getBoundingClientRect().top)||0,o=((null==r?void 0:r.scrollTop)||0)+((null===(t=this._itemHolderElm)||void 0===t?void 0:t.getBoundingClientRect().top)||0)-s,a=this.getRowPosition(e).y;null===(n=this.props.scrollElement)||void 0===n||n.scrollTo({top:a+o-80})})),oe(this,"_onScroll",(()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))})),oe(this,"_positionList",(()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()})),oe(this,"_initWrapper",(e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))})),oe(this,"_initItemHolder",(e=>{this._itemHolderElm=e,this._scanItemHeights()})),oe(this,"_scanItemHeights",(()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,n=null,r=!1;const s=this._itemHolderElm.childNodes,o=s.length;for(let e=0;e<o;e++){const o=s[e],a=o.getAttribute("data-item-key");if(!a){console.warn("itemKey not found");continue}const i=(o.firstElementChild||o).clientHeight;i!==this._knownHeights.get(a)&&(this._knownHeights.set(a,i),r?n=a:(r=!0,t=n=a))}if(null!=t&&null!=n){const r=e(t),s=n===t?r:e(n);this._yPositions.calcHeights(s,this._getHeight,r),this.forceUpdate()}})),oe(this,"_getHeight",(e=>{const t=this.props.getKeyFromIndex(e),n=this._knownHeights.get(t);return null!=n&&n==n?n:this.props.itemHeightGetter(e,t)})),this._yPositions=new se(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,n=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||n!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:n=ae,itemRenderer:r,viewBuffer:s,viewBufferMin:o}=this.props,a=this._getHeight,i=[];let c,d;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=o>this._startIndex?0:this._startIndex-o,n=o<e-this._endIndex?this._endIndex+o:e-1;t<this._startIndexDrawn||n>this._endIndexDrawn?(c=s>this._startIndex?0:this._startIndex-s,d=this._endIndex+s,d>=e&&(d=e-1)):(c=this._startIndexDrawn,d=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else c=0,d=(n<e?n:e)-1;this._yPositions.calcHeights(d,a,c||-1),this._startIndexDrawn=c,this._endIndexDrawn=d,i.length=d-c+1;for(let e=c;e<=d;e++){const{y:n,height:s}=this._yPositions.getRowPosition(e,a),o={height:s,top:n,position:"absolute"},l=t(e),c={"data-item-key":l};i.push(r(l,o,e,c))}const p={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(p.onScroll=this._onScroll,p.style.height="100%",p.style.overflowY="auto");const u={position:"relative",height:this._yPositions.getEstimatedHeight()};return(0,l.jsx)("div",Object.assign({},p,{children:(0,l.jsx)("div",{style:u,children:(0,l.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:i})})}))}}oe(ie,"defaultProps",{initialDraw:ae,itemsWrapperClassName:"",windowScroller:!1});var le=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js"),ce=n.n(le),de=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js"),pe=n.n(de),ue=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js"),he=n.n(ue);const me=r.createContext(void 0);me.displayName="ExternalLinkContext";const ge=me,fe=["reference","children","className","focusSpan"];function be(e){const{reference:t,children:n,className:r,focusSpan:s}=e,o=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,fe);return delete o.onClick,t.span?(0,l.jsx)("a",Object.assign({role:"button",onClick:()=>s(t.spanID),className:r},o,{children:n})):(0,l.jsx)(ge.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return(0,l.jsx)("a",Object.assign({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:r},o,{children:n}))}})}const ve=()=>({MultiParent:s.iv`
      padding: 0 5px;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:s.iv`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:s.iv`
      margin: 0.2em 0 0;
    `,tooltip:s.iv`
      max-width: none;
    `}),ye=e=>{const{references:t,children:n,tooltipText:r,focusSpan:s}=e,a=(0,o.useStyles2)(ve),i=t[0];return(0,l.jsx)(o.Tooltip,{content:r,children:(0,l.jsx)(be,{reference:i,focusSpan:s,className:a.MultiParent,children:n})})};var xe,we,_e=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js"),ke=n.n(_e),Te=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js"),je=n.n(Te);function Ie(e){return(0,h.get)((0,h.find)(e.references,(e=>{let{span:t,refType:n}=e;return t&&t.spanID&&("CHILD_OF"===n||"FOLLOWS_FROM"===n)})),"span")}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const De=(0,o.stylesFactory)((e=>({SpanTreeOffset:s.iv`
      label: SpanTreeOffset;
      color: ${W(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:s.iv`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:s.iv`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${W(e,"lightgrey")};
      }
    `,indentGuideActive:s.iv`
      label: indentGuideActive;
      border-color: ${W(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:s.iv`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `})));class Ce extends r.PureComponent{constructor(e){super(e),Se(this,"ancestorIds",void 0),Se(this,"handleMouseLeave",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,h.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)})),Se(this,"handleMouseEnter",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,h.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)})),this.ancestorIds=function(e){const t=[];if(!e)return t;let n=Ie(e);for(;n;)t.push(n.spanID),n=Ie(n);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:n,span:r,theme:s}=this.props,{hasChildren:o,spanID:a}=r,c=o?{onClick:t,role:"switch","aria-checked":e}:null,d=n&&o&&(e?xe||(xe=(0,l.jsx)(je(),{})):we||(we=(0,l.jsx)(ke(),{}))),p=De(s);return(0,l.jsxs)("span",Object.assign({className:i()(p.SpanTreeOffset,{[p.SpanTreeOffsetParent]:o})},c,{children:[this.ancestorIds.map((e=>(0,l.jsx)("span",{className:i()(p.indentGuide,{[p.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e))),d&&(0,l.jsx)("span",{className:p.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,a),onMouseLeave:e=>this.handleMouseLeave(e,a),"data-test-id":"icon-wrapper",children:d})]}))}}Se(Ce,"displayName","UnthemedSpanTreeOffset"),Se(Ce,"defaultProps",{childrenVisible:!1,showChildrenIcon:!0});const Ne=(0,o.withTheme2)(Ce);var Le=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js"),Ee=n.n(Le);var Me=n("../../opt/drone/yarncache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js"),Re=n.n(Me),Oe=n("../../opt/drone/yarncache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js"),ze=n.n(Oe);function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $e=(0,o.stylesFactory)((()=>({CopyIcon:s.iv`
      background-color: transparent;
      border: none;
      color: inherit;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      &:focus {
        background-color: rgba(255, 255, 255, 0.25);
        color: inherit;
      }
    `})));class He extends r.PureComponent{constructor(){super(...arguments),Pe(this,"state",{hasCopied:!1}),Pe(this,"handleClick",(()=>{this.setState({hasCopied:!0}),ze()(this.props.copyText)})),Pe(this,"handleTooltipVisibilityChange",(e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})}))}render(){const e=$e();return(0,l.jsx)(o.Tooltip,{content:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:(0,l.jsx)(o.Button,{className:i()(e.CopyIcon,this.props.className),type:"button",icon:this.props.icon,onClick:this.handleClick})})}}var Ve;Pe(He,"defaultProps",{className:void 0,icon:"copy"});const Fe="copyIcon",Ae=e=>({KeyValueTable:s.iv`
      label: KeyValueTable;
      background: ${W(e,"#fff")};
      border: 1px solid ${W(e,"#ddd")};
      margin-bottom: 0.5rem;
      max-height: 450px;
      overflow: auto;
    `,body:s.iv`
      label: body;
      vertical-align: baseline;
    `,row:s.iv`
      label: row;
      & > td {
        padding: 0rem 0.5rem;
      }
      &:nth-child(2n) > td {
        background: ${W(e,"#f5f5f5")};
      }
      &:not(:hover) .${Fe} {
        visibility: hidden;
      }
    `,keyColumn:s.iv`
      label: keyColumn;
      color: ${W(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:s.iv`
      label: copyColumn;
      text-align: right;
    `,linkIcon:s.iv`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `}),Be=/^(\[|\{)/;function We(e){if("string"==typeof e&&Be.test(e))try{return JSON.parse(e)}catch(e){}return e}const Ge=e=>(0,l.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",Ve||(Ve=(0,l.jsx)(o.Icon,{name:"external-link-alt"}))]});function Ke(e){const{data:t,linksGetter:n}=e,r=(0,o.useStyles2)(Ae);return(0,l.jsx)("div",{className:i()(r.KeyValueTable),"data-test-id":"KeyValueTable",children:(0,l.jsx)("table",{className:U.K9,children:(0,l.jsx)("tbody",{className:r.body,children:t.map(((e,s)=>{const o={__html:Re()(We(e.value))},a=(0,l.jsx)("div",{className:U.b$,dangerouslySetInnerHTML:o}),i=n?n(t,s):null;let c;return c=i&&i.length?(0,l.jsx)("div",{children:(0,l.jsx)(Ge,{href:i[0].url,title:i[0].text,children:a})}):a,(0,l.jsxs)("tr",{className:r.row,children:[(0,l.jsx)("td",{className:r.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),(0,l.jsx)("td",{children:c}),(0,l.jsx)("td",{className:r.copyColumn,children:(0,l.jsx)(He,{className:Fe,copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${s}`)}))})})})}Ge.defaultProps={title:""};const Ue=e=>({header:s.iv`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${W(e,"#e8e8e8")};
      }
    `,headerEmpty:s.iv`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:s.iv`
      label: headerHighContrast;
      &:hover {
        background: ${W(e,"#ddd")};
      }
    `,emptyIcon:s.iv`
      label: emptyIcon;
      color: ${W(e,"#aaa")};
    `,summary:s.iv`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:s.iv`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${W(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:s.iv`
      label: summaryLabel;
      color: ${W(e,"#777")};
    `,summaryDelim:s.iv`
      label: summaryDelim;
      color: ${W(e,"#bbb")};
      padding: 0 0.2em;
    `});function qe(e){const{data:t}=e,n=(0,o.useStyles2)(Ue);return Array.isArray(t)&&t.length?(0,l.jsx)("ul",{className:n.summary,children:t.map(((e,t)=>(0,l.jsxs)("li",{className:n.summaryItem,children:[(0,l.jsx)("span",{className:n.summaryLabel,children:e.key}),(0,l.jsx)("span",{className:n.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`)))}):null}function Ze(e){const{className:t,data:n,highContrast:r,interactive:s,isOpen:a,label:c,linksGetter:d,onToggle:p}=e,u=!Array.isArray(n)||!n.length,h=(0,o.useStyles2)(Ue),m=i()(U.Im,{[h.emptyIcon]:u});let g=null,f=null;return s&&(g=a?(0,l.jsx)(je(),{className:m}):(0,l.jsx)(Ee(),{className:m}),f={"aria-checked":a,onClick:u?null:p,role:"switch"}),(0,l.jsxs)("div",{className:i()(t,U.ty),children:[(0,l.jsxs)("div",Object.assign({className:i()(h.header,{[h.headerEmpty]:u,[h.headerHighContrast]:r&&!u})},f,{"data-test-id":"AccordianKeyValues--header",children:[g,(0,l.jsxs)("strong",{"data-test":"label",children:[c,a||":"]}),!a&&(0,l.jsx)(qe,{data:n})]})),a&&(0,l.jsx)(Ke,{data:n,linksGetter:d})]})}var Xe,Ye,Je;qe.defaultProps={data:null},Ze.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const Qe=e=>({AccordianLogs:s.iv`
      label: AccordianLogs;
      border: 1px solid ${W(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:s.iv`
      label: AccordianLogsHeader;
      background: ${W(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${W(e,"#dadada")};
      }
    `,AccordianLogsContent:s.iv`
      label: AccordianLogsContent;
      background: ${W(e,"#f0f0f0")};
      border-top: 1px solid ${W(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:s.iv`
      label: AccordianLogsFooter;
      color: ${W(e,"#999")};
    `});function et(e){const{interactive:t,isOpen:n,linksGetter:r,logs:s,openedItems:a,onItemToggle:i,onToggle:c,timestamp:d}=e;let p=null,u="span",m=null;t&&(p=n?Xe||(Xe=(0,l.jsx)(je(),{className:U.Im})):Ye||(Ye=(0,l.jsx)(Ee(),{className:"u-align-icon"})),u="a",m={"aria-checked":n,onClick:c,role:"switch"});const g=(0,o.useStyles2)(Qe);return(0,l.jsxs)("div",{className:g.AccordianLogs,children:[(0,l.jsxs)(u,Object.assign({className:g.AccordianLogsHeader},m,{children:[p," ",Je||(Je=(0,l.jsx)("strong",{children:"Logs"}))," (",s.length,")"]})),n&&(0,l.jsxs)("div",{className:g.AccordianLogsContent,children:[(0,h.sortBy)(s,"timestamp").map(((e,n)=>(0,l.jsx)(Ze,{className:n<s.length-1?U.bi:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!a&&a.has(e),label:`${O(e.timestamp-d)}`,linksGetter:r,onToggle:t&&i?()=>i(e):null},`${e.timestamp}-${n}`))),(0,l.jsx)("small",{className:g.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}function tt(e){let{children:t,content:n,overlayClassName:s}=e;const a=(0,r.useRef)(null);return(0,l.jsx)(o.PopoverController,{content:n,hideAfter:300,children:(e,n,i)=>(0,l.jsxs)(l.Fragment,{children:[a.current&&(0,l.jsx)(o.Popover,Object.assign({},i,{referenceElement:a.current,wrapperClassName:s,onMouseLeave:n,onMouseEnter:e})),r.cloneElement(t,{ref:a,onMouseEnter:e,onMouseLeave:n})]})})}et.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const nt=e=>({wrapper:s.iv`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:s.iv`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:s.iv`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:s.iv`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:s.iv`
      label: logMarker;
      background-color: ${W(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${W(e,"#464c54")};
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border: 1px solid transparent;
      }
      &::after {
        left: 0;
      }
    `});function rt(e){return`${(100*e).toFixed(1)}%`}function st(e){let{viewEnd:t,viewStart:n,getViewedBounds:s,color:a,shortLabel:c,longLabel:d,onClick:p,rpc:u,traceStartTime:m,span:g,className:f,labelClassName:b}=e;const[v,y]=(0,r.useState)(c),x=(0,h.groupBy)(g.logs,(e=>{const t=s(e.timestamp,e.timestamp).start;return rt(Math.round(500*t)/500)})),w=(0,o.useStyles2)(nt);return(0,l.jsxs)("div",{className:i()(w.wrapper,f),onClick:p,onMouseLeave:()=>y(c),onMouseOver:()=>y(d),"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[(0,l.jsx)("div",{"aria-label":v,className:w.bar,style:{background:a,left:rt(n),width:rt(t-n)},children:(0,l.jsx)("div",{className:i()(w.label,b),"data-test-id":"SpanBar--label",children:v})}),(0,l.jsx)("div",{children:Object.keys(x).map((e=>(0,l.jsx)(tt,{content:(0,l.jsx)(et,{interactive:!1,isOpen:!0,logs:x[e],timestamp:m}),children:(0,l.jsx)("div",{className:w.logMarker,style:{left:e}})},e)))}),u&&(0,l.jsx)("div",{className:w.rpc,style:{background:u.color,left:rt(u.viewStart),width:rt(u.viewEnd-u.viewStart)}})]})}const ot=r.memo(st);var at,it,lt,ct;function dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const pt="spanBar",ut="spanBarLabel",ht="nameWrapper",mt="nameWrapperMatchingFilter",gt="jaegerView",ft="nameColumn",bt=(0,o.stylesFactory)((e=>{const t=s.F4`
    label: flash;
    from {
      background-color: ${W(e,"#68b9ff")};
    }
    to {
      background-color: default;
    }
  `;return{nameWrapper:s.iv`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:s.iv`
      label: nameWrapperMatchingFilter;
      background-color: ${W(e,"#fffce4")};
    `,nameColumn:s.iv`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:s.iv`
      label: endpointName;
      color: ${W(e,"#808080")};
    `,view:s.iv`
      label: view;
      position: relative;
    `,viewExpanded:s.iv`
      label: viewExpanded;
      background: ${W(e,"#f8f8f8")};
      outline: 1px solid ${W(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:s.iv`
      label: viewExpandedAndMatchingFilter;
      background: ${W(e,"#fff3d7")};
      outline: 1px solid ${W(e,"#ddd")};
    `,row:s.iv`
      label: row;
      &:hover .${pt} {
        opacity: 1;
      }
      &:hover .${ut} {
        color: ${W(e,"#000")};
      }
      &:hover .${ht} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${W(e,"#fafafa")},
          ${W(e,"#f8f8f8")} 75%,
          ${W(e,"#eee")}
        );
      }
      &:hover .${gt} {
        background-color: ${W(e,"#f5f5f5")};
        outline: 1px solid ${W(e,"#ddd")};
      }
    `,rowClippingLeft:s.iv`
      label: rowClippingLeft;
      & .${ft}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${W(e,"rgba(25, 25, 25, 0.25)")},
          ${W(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:s.iv`
      label: rowClippingRight;
      & .${gt}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${W(e,"rgba(25, 25, 25, 0.25)")},
          ${W(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:s.iv`
      label: rowExpanded;
      & .${pt} {
        opacity: 1;
      }
      & .${ut} {
        color: ${W(e,"#000")};
      }
      & .${ht}, &:hover .${ht} {
        background: ${W(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${W(e,"#ddd")};
      }
      & .${mt} {
        background: ${W(e,"#fff3d7")};
      }
      &:hover .${gt} {
        background: ${W(e,"#eee")};
      }
    `,rowMatchingFilter:s.iv`
      label: rowMatchingFilter;
      background-color: ${W(e,"#fffbde")};
      &:hover .${ht} {
        background: linear-gradient(
          90deg,
          ${W(e,"#fffbde")},
          ${W(e,"#fffbde")} 75%,
          ${W(e,"#f7f1c6")}
        );
      }
      &:hover .${gt} {
        background-color: ${W(e,"#f7f1c6")};
        outline: 1px solid ${W(e,"#ddd")};
      }
    `,rowFocused:s.iv`
      label: rowFocused;
      background-color: ${W(e,"#cbe7ff")};
      animation: ${t} 1s cubic-bezier(0.12, 0, 0.39, 0);
      & .${ht}, .${gt}, .${mt} {
        background-color: ${W(e,"#cbe7ff")};
        animation: ${t} 1s cubic-bezier(0.12, 0, 0.39, 0);
      }
      & .${pt} {
        opacity: 1;
      }
      & .${ut} {
        color: ${W(e,"#000")};
      }
      &:hover .${ht}, :hover .${gt} {
        background: ${W(e,"#d5ebff")};
        box-shadow: 0 1px 0 ${W(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:s.iv`
      label: rowExpandedAndMatchingFilter;
      &:hover .${gt} {
        background: ${W(e,"#ffeccf")};
      }
    `,name:s.iv`
      label: name;
      color: ${W(e,"#000")};
      cursor: pointer;
      flex: 1 1 auto;
      outline: none;
      overflow: hidden;
      padding-left: 4px;
      padding-right: 0.25em;
      position: relative;
      text-overflow: ellipsis;
      &::before {
        content: ' ';
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 0;
        border-left: 4px solid;
        border-left-color: inherit;
      }

      /* This is so the hit area of the span-name extends the rest of the width of the span-name column */
      &::after {
        background: transparent;
        bottom: 0;
        content: ' ';
        left: 0;
        position: absolute;
        top: 0;
        width: 1000px;
      }
      &:focus {
        text-decoration: none;
      }
      &:hover > small {
        color: ${W(e,"#000")};
      }
    `,nameDetailExpanded:s.iv`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:s.iv`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:s.iv`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:s.iv`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${W(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:s.iv`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:s.iv`
      label: labelRight;
      left: 100%;
    `,labelLeft:s.iv`
      label: labelLeft;
      right: 100%;
    `}}));class vt extends r.PureComponent{constructor(){super(...arguments),dt(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),dt(this,"_childrenToggle",(()=>{this.props.onChildrenToggled(this.props.span.spanID)}))}render(){const{className:e,color:t,columnDivision:n,isChildrenExpanded:r,isDetailExpanded:s,isMatchingFilter:a,isFocused:c,numTicks:d,rpc:p,noInstrumentedServer:u,showErrorIcon:h,getViewedBounds:m,traceStartTime:g,span:f,focusSpan:b,hoverIndentGuideIds:v,addHoverIndentGuideId:y,removeHoverIndentGuideId:x,clippingLeft:w,clippingRight:_,theme:k,createSpanLink:T}=this.props,{duration:j,hasChildren:I,operationName:S,process:{serviceName:D}}=f,C=O(j),N=m(f.startTime,f.startTime+f.duration),L=N.start,E=N.end,M=bt(k),R=`${D}::${S}`;let z,P;return L>1-E?(z=`${R} | ${C}`,P=M.labelLeft):(z=`${C} | ${R}`,P=M.labelRight),(0,l.jsxs)(J,{className:i()(M.row,{[M.rowExpanded]:s,[M.rowMatchingFilter]:a,[M.rowExpandedAndMatchingFilter]:a&&s,[M.rowFocused]:c,[M.rowClippingLeft]:w,[M.rowClippingRight]:_},e),children:[(0,l.jsx)(J.Cell,{className:i()(M.nameColumn,ft),width:n,children:(0,l.jsxs)("div",{className:i()(M.nameWrapper,ht,{[M.nameWrapperMatchingFilter]:a,nameWrapperMatchingFilter:a}),children:[(0,l.jsx)(Ne,{childrenVisible:r,span:f,onClick:I?this._childrenToggle:void 0,hoverIndentGuideIds:v,addHoverIndentGuideId:y,removeHoverIndentGuideId:x}),(0,l.jsxs)("a",{className:i()(M.name,{[M.nameDetailExpanded]:s}),"aria-checked":s,title:R,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[(0,l.jsxs)("span",{className:i()(M.svcName,{[M.svcNameChildrenCollapsed]:I&&!r}),children:[h&&(0,l.jsx)(ce(),{style:{backgroundColor:f.errorIconColor?W(k,f.errorIconColor):W(k,"#db2828")},className:M.errorIcon}),D," ",p&&(0,l.jsxs)("span",{children:[at||(at=(0,l.jsx)(pe(),{}))," ",(0,l.jsx)("i",{className:M.rpcColorMarker,style:{background:p.color}}),p.serviceName]}),u&&(0,l.jsxs)("span",{children:[it||(it=(0,l.jsx)(pe(),{}))," ",(0,l.jsx)("i",{className:M.rpcColorMarker,style:{background:u.color}}),u.serviceName]})]}),(0,l.jsx)("small",{className:M.endpointName,children:p?p.operationName:S}),(0,l.jsxs)("small",{className:M.endpointName,children:[" | ",C]})]}),T&&(()=>{const e=T(f);return e?(0,l.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content}):null})(),f.references&&f.references.length>1&&(0,l.jsx)(ye,{references:f.references,tooltipText:"Contains multiple references",focusSpan:b,children:lt||(lt=(0,l.jsx)(o.Icon,{name:"link"}))}),f.subsidiarilyReferencedBy&&f.subsidiarilyReferencedBy.length>0&&(0,l.jsx)(ye,{references:f.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===f.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:b,children:ct||(ct=(0,l.jsx)(he(),{}))})]})}),(0,l.jsxs)(J.Cell,{className:i()(M.view,gt,{[M.viewExpanded]:s,[M.viewExpandedAndMatchingFilter]:a&&s}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-n,onClick:this._detailToggle,children:[(0,l.jsx)(K,{numTicks:d}),(0,l.jsx)(ot,{rpc:p,viewStart:L,viewEnd:E,getViewedBounds:m,color:t,shortLabel:C,longLabel:z,traceStartTime:g,span:f,labelClassName:`spanBarLabel ${P}`,className:pt})]})]})}}dt(vt,"displayName","UnthemedSpanBarRow"),dt(vt,"defaultProps",{className:"",rpc:null});const yt=(0,o.withTheme2)(vt);var xt=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/link.js"),wt=n.n(xt);const _t=()=>({TextList:s.iv`
      max-height: 450px;
      overflow: auto;
    `,List:s.iv`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:s.iv`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `});function kt(e){const{data:t}=e,n=(0,o.useStyles2)(_t);return(0,l.jsx)("div",{className:i()(n.TextList),"data-test-id":"TextList",children:(0,l.jsx)("ul",{className:n.List,children:t.map(((e,t)=>(0,l.jsx)("li",{className:n.item,children:e},`${t}`)))})})}const Tt=e=>({header:s.iv`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${W(e,"#e8e8e8")};
      }
    `});function jt(e){let{data:t}=e;return(0,l.jsx)(kt,{data:t})}function It(e){const{className:t,data:n,headerClassName:r,interactive:s,isOpen:a,label:c,onToggle:d,TextComponent:p=jt}=e,u=!Array.isArray(n)||!n.length,h=(0,o.useStyles2)(Ue),m=i()(U.Im,{[h.emptyIcon]:u});let g=null,f=null;s&&(g=a?(0,l.jsx)(je(),{className:m}):(0,l.jsx)(Ee(),{className:m}),f={"aria-checked":a,onClick:u?null:d,role:"switch"});const b=(0,o.useStyles2)(Tt);return(0,l.jsxs)("div",{className:t||"",children:[(0,l.jsxs)("div",Object.assign({className:i()(b.header,r)},f,{"data-test-id":"AccordianText--header",children:[g,(0,l.jsx)("strong",{children:c})," (",n.length,")"]})),a&&(0,l.jsx)(p,{data:n})]})}It.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};function St(e){const{className:t,divider:n=!1,items:r}=e,a=(0,o.useStyles2)((e=>t=>({LabeledList:s.iv`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
      ${!0===e&&"\n        margin-right: -8px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-end;\n      "}
    `,LabeledListItem:s.iv`
      label: LabeledListItem;
      display: inline-block;
      ${!0===e&&`\n        border-right: 1px solid ${W(t,"#ddd")};\n        padding: 0 8px;\n      `}
    `,LabeledListLabel:s.iv`
      label: LabeledListLabel;
      color: ${t.isLight?"#999":"#666"};
      margin-right: 0.25rem;
    `,LabeledListValue:s.iv`
      label: LabeledListValue;
      margin-right: 0.55rem;
    `}))(n));return(0,l.jsx)("ul",{className:i()(a.LabeledList,t),children:r.map((e=>{let{key:t,label:n,value:r}=e;return(0,l.jsxs)("li",{className:a.LabeledListItem,children:[(0,l.jsx)("span",{className:a.LabeledListLabel,children:n}),(0,l.jsx)("strong",{className:a.LabeledListValue,children:r})]},`${t}`)}))})}var Dt,Ct,Nt,Lt;const Et=e=>({AccordianReferenceItem:s.iv`
      border-bottom: 1px solid ${W(e,"#d8d8d8")};
    `,AccordianKeyValues:s.iv`
      margin-left: 10px;
    `,AccordianReferences:s.iv`
      label: AccordianReferences;
      border: 1px solid ${W(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianReferencesHeader:s.iv`
      label: AccordianReferencesHeader;
      background: ${W(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${W(e,"#dadada")};
      }
    `,AccordianReferencesContent:s.iv`
      label: AccordianReferencesContent;
      background: ${W(e,"#f0f0f0")};
      border-top: 1px solid ${W(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianReferencesFooter:s.iv`
      label: AccordianReferencesFooter;
      color: ${W(e,"#999")};
    `,ReferencesList:s.iv`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:s.iv`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:s.iv`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:s.iv`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:s.iv`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
      flex-wrap: wrap;
      display: flex;
      justify-content: flex-end;
    `,debugLabel:s.iv`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `,serviceName:s.iv`
      margin-right: 8px;
    `});function Mt(e){const{data:t,focusSpan:n,openedItems:r,onItemToggle:a,interactive:i}=e,c=(0,o.useStyles2)(Et);return(0,l.jsx)("div",{className:c.AccordianReferencesContent,children:t.map(((e,d)=>{var p;return(0,l.jsxs)("div",{className:d<t.length-1?c.AccordianReferenceItem:void 0,children:[(0,l.jsx)("div",{className:c.item,children:(0,l.jsx)(be,{reference:e,focusSpan:n,children:(0,l.jsxs)("span",{className:c.itemContent,children:[e.span?(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{className:(0,s.cx)("span-svc-name",c.serviceName),children:e.span.process.serviceName}),(0,l.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):Dt||(Dt=(0,l.jsxs)("span",{className:"span-svc-name",children:["View Linked Span ",(0,l.jsx)(o.Icon,{name:"external-link-alt"})]})),(0,l.jsxs)("small",{className:c.debugInfo,children:[(0,l.jsx)("span",{className:c.debugLabel,"data-label":"TraceID:",children:e.traceID}),(0,l.jsx)("span",{className:c.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},`${e.spanID}`),!(null===(p=e.tags)||void 0===p||!p.length)&&(0,l.jsx)("div",{className:c.AccordianKeyValues,children:(0,l.jsx)(Ze,{className:d<t.length-1?U.bi:null,data:e.tags||[],highContrast:!0,interactive:i,isOpen:!!r&&r.has(e),label:"attributes",linksGetter:null,onToggle:i&&a?()=>a(e):null})})]},e.spanID)}))})}const Rt=e=>{let{data:t,interactive:n=!0,isOpen:r,onToggle:s,onItemToggle:a,openedItems:i,focusSpan:c}=e;const d=!Array.isArray(t)||!t.length;let p=null,u="span",h=null;n&&(p=r?Ct||(Ct=(0,l.jsx)(je(),{className:U.Im})):Nt||(Nt=(0,l.jsx)(Ee(),{className:U.Im})),u="a",h={"aria-checked":r,onClick:d?null:s,role:"switch"});const m=(0,o.useStyles2)(Et);return(0,l.jsxs)("div",{className:m.AccordianReferences,children:[(0,l.jsxs)(u,Object.assign({className:m.AccordianReferencesHeader},h,{children:[p,Lt||(Lt=(0,l.jsx)("strong",{children:(0,l.jsx)("span",{children:"References"})}))," ","(",t.length,")"]})),r&&(0,l.jsx)(Mt,{data:t,openedItems:i,focusSpan:c,onItemToggle:a,interactive:n})]})},Ot=r.memo(Rt),zt=e=>({Divider:s.iv`
      background: ${W(e,"#ddd")};
    `,DividerVertical:s.iv`
      label: DividerVertical;
      display: inline-block;
      width: 1px;
      height: 0.9em;
      margin: 0 8px;
      vertical-align: middle;
    `,DividerHorizontal:s.iv`
      label: DividerHorizontal;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `});function Pt(e){let{className:t,style:n,type:r}=e;const a=(0,o.useStyles2)(zt);return(0,l.jsx)("div",{style:n,className:(0,s.cx)(a.Divider,"horizontal"===r?a.DividerHorizontal:a.DividerVertical,t)})}var $t;const Ht=e=>({header:s.iv`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0 1rem;
      margin-bottom: 0.25rem;
    `,listWrapper:s.iv`
      overflow: hidden;
    `,debugInfo:s.iv`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:s.iv`
      label: debugLabel;
      &::before {
        color: ${W(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:s.iv`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${W(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${W(e,"#333")};
      }
    `,AccordianWarnings:s.iv`
      label: AccordianWarnings;
      background: ${W(e,"#fafafa")};
      border: 1px solid ${W(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:s.iv`
      label: AccordianWarningsHeader;
      background: ${W(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${W(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:s.iv`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${W(e,"#e8e8e8")};
    `,AccordianWarningsLabel:s.iv`
      label: AccordianWarningsLabel;
      color: ${W(e,"#d36c08")};
    `,Textarea:s.iv`
      word-break: break-all;
      white-space: pre;
    `,LinkIcon:s.iv`
      font-size: 1.5em;
    `});function Vt(e){const{detailState:t,linksGetter:n,logItemToggle:r,logsToggle:s,processToggle:a,span:c,tagsToggle:d,traceStartTime:p,warningsToggle:u,stackTracesToggle:h,referencesToggle:m,referenceItemToggle:g,focusSpan:f,createSpanLink:b,createFocusSpanLink:v}=e,{isTagsOpen:y,isProcessOpen:x,logs:w,isWarningsOpen:_,references:k,isStackTracesOpen:T}=t,{operationName:j,process:I,duration:S,relativeStartTime:D,traceID:C,spanID:N,logs:L,tags:E,warnings:M,references:R,stackTraces:z}=c,P=[{key:"svc",label:"Service:",value:I.serviceName},{key:"duration",label:"Duration:",value:O(S)},{key:"start",label:"Start Time:",value:O(D)},...c.childSpanCount>0?[{key:"child_count",label:"Child Count:",value:c.childSpanCount}]:[]],$=(0,o.useStyles2)(Ht),H=null==b?void 0:b(c),V=v(C,N);return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:$.header,children:[(0,l.jsx)("h2",{className:i()(U.h2),children:j}),(0,l.jsx)("div",{className:$.listWrapper,children:(0,l.jsx)(St,{className:U.xb,divider:!0,items:P})})]}),H?(0,l.jsx)(o.DataLinkButton,{link:Object.assign({},H,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,$t||($t=(0,l.jsx)(Pt,{className:U.im,type:"horizontal"})),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(Ze,{data:E,label:"Tags",linksGetter:n,isOpen:y,onToggle:()=>d(N)}),I.tags&&(0,l.jsx)(Ze,{className:U.bi,data:I.tags,label:"Process",linksGetter:n,isOpen:x,onToggle:()=>a(N)})]}),L&&L.length>0&&(0,l.jsx)(et,{linksGetter:n,logs:L,isOpen:w.isOpen,openedItems:w.openedItems,onToggle:()=>s(N),onItemToggle:e=>r(N,e),timestamp:p}),M&&M.length>0&&(0,l.jsx)(It,{className:$.AccordianWarnings,headerClassName:$.AccordianWarningsHeader,label:(0,l.jsx)("span",{className:$.AccordianWarningsLabel,children:"Warnings"}),data:M,isOpen:_,onToggle:()=>u(N)}),z&&z.length&&(0,l.jsx)(It,{label:"Stack trace",data:z,isOpen:T,TextComponent:e=>{var t;let n;var r;(null===(t=e.data)||void 0===t?void 0:t.length)>1?n=e.data.map(((e,t)=>`StackTrace ${t+1}:\n${e}`)).join("\n"):n=null===(r=e.data)||void 0===r?void 0:r[0];return(0,l.jsx)(o.TextArea,{className:$.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:n})},onToggle:()=>h(N)}),R&&R.length>0&&(R.length>1||"CHILD_OF"!==R[0].refType)&&(0,l.jsx)(Ot,{data:R,isOpen:k.isOpen,openedItems:k.openedItems,onToggle:()=>m(N),onItemToggle:e=>g(N,e),focusSpan:f}),(0,l.jsxs)("small",{className:$.debugInfo,children:[(0,l.jsx)("a",Object.assign({},V,{onClick:e=>{!V.onClick||0!==e.button||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),V.onClick(e))},children:(0,l.jsx)(wt(),{className:i()(U.Im,$.LinkIcon)})})),(0,l.jsx)("span",{className:$.debugLabel,"data-label":"SpanID:"})," ",N]})]})]})}function Ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const At=(0,o.stylesFactory)((e=>({expandedAccent:s.iv`
      cursor: pointer;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      &::before {
        border-left: 4px solid;
        pointer-events: none;
        width: 1000px;
      }
      &::after {
        border-right: 1000px solid;
        border-color: inherit;
        cursor: pointer;
        opacity: 0.2;
      }

      /* border-color inherit must come AFTER other border declarations for accent */
      &::before,
      &::after {
        border-color: inherit;
        content: ' ';
        position: absolute;
        height: 100%;
      }

      &:hover::after {
        opacity: 0.35;
      }
    `,infoWrapper:s.iv`
      label: infoWrapper;
      border: 1px solid ${W(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `})));class Bt extends r.PureComponent{constructor(){super(...arguments),Ft(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),Ft(this,"_linksGetter",((e,t)=>{const{linksGetter:n,span:r}=this.props;return n(r,e,t)}))}render(){const{color:e,columnDivision:t,detailState:n,logItemToggle:r,logsToggle:s,processToggle:o,referenceItemToggle:a,referencesToggle:i,warningsToggle:c,stackTracesToggle:d,span:p,tagsToggle:u,traceStartTime:h,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,theme:v,createSpanLink:y,focusedSpanId:x,createFocusSpanLink:w}=this.props,_=At(v);return(0,l.jsxs)(J,{children:[(0,l.jsxs)(J.Cell,{width:t,style:{overflow:"hidden"},children:[(0,l.jsx)(Ne,{span:p,showChildrenIcon:!1,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b}),(0,l.jsx)("span",{children:(0,l.jsx)("span",{className:_.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),(0,l.jsx)(J.Cell,{width:1-t,children:(0,l.jsx)("div",{className:_.infoWrapper,style:{borderTopColor:e},children:(0,l.jsx)(Vt,{detailState:n,linksGetter:this._linksGetter,logItemToggle:r,logsToggle:s,processToggle:o,referenceItemToggle:a,referencesToggle:i,warningsToggle:c,stackTracesToggle:d,span:p,tagsToggle:u,traceStartTime:h,focusSpan:m,createSpanLink:y,focusedSpanId:x,createFocusSpanLink:w})})})]})}}const Wt=(0,o.withTheme2)(Bt);function Gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kt(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),n=e.slice(3,5),r=e.slice(5);return[parseInt(t,16),parseInt(n,16),parseInt(r,16)]}class Ut{constructor(e){Gt(this,"colorsHex",void 0),Gt(this,"colorsRgb",void 0),Gt(this,"cache",void 0),Gt(this,"currentIdx",void 0),this.colorsHex=e,this.colorsRgb=e.map(Kt),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const qt=(0,ne.Z)((e=>new Ut(e)));function Zt(e,t){return qt(o.colors).getColorByKey(e)}function Xt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Yt=(0,o.stylesFactory)((()=>({rowsWrapper:s.iv`
      width: 100%;
    `,row:s.iv`
      width: 100%;
    `,scrollToTopButton:s.iv`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 1;
    `}))),Jt=28,Qt=161,en=197;const tn=(0,ne.Z)((function(e,t,n){return e?function(e,t,n){if(!e)return[];let r=null;const s=[];for(let o=0;o<e.length;o++){const a=e[o],{spanID:i,depth:l}=a;let c=!1;null!=r&&(l>=r?c=!0:r=null),c||(t.has(i)&&(r=l+1),s.push({span:a,isDetail:!1,spanIndex:o}),n.has(i)&&s.push({span:a,isDetail:!0,spanIndex:o}))}return s}(e.spans,t,n):[]})),nn=(0,ne.Z)((function(e){const{min:t,max:n,viewStart:r,viewEnd:s}=e,o=n-t,a=t+r*o,i=n-(1-s)*o-a;return(e,t)=>({start:(e-a)/i,end:(t-a)/i})}),h.isEqual),rn=(0,ne.Z)((function(e){const[t,n]=e;return{left:t>0,right:n<1}}),h.isEqual);class sn extends r.Component{constructor(e){super(e),Xt(this,"listView",void 0),Xt(this,"topTraceViewRef",(0,r.createRef)()),Xt(this,"getViewRange",(()=>this.props.currentViewRangeTime)),Xt(this,"getSearchedSpanIDs",(()=>this.props.findMatchesIDs)),Xt(this,"getCollapsedChildren",(()=>this.props.childrenHiddenIDs)),Xt(this,"mapRowIndexToSpanIndex",(e=>this.getRowStates()[e].spanIndex)),Xt(this,"mapSpanIndexToRowIndex",(e=>{const t=this.getRowStates().length;for(let n=0;n<t;n++){const{spanIndex:t}=this.getRowStates()[n];if(t===e)return n}throw new Error(`unable to find row for span index: ${e}`)})),Xt(this,"setListView",(e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())})),Xt(this,"getKeyFromIndex",(e=>{const{isDetail:t,span:n}=this.getRowStates()[e];return`${n.traceID}--${n.spanID}--${t?"detail":"bar"}`})),Xt(this,"getIndexFromKey",(e=>{const t=e.split("--"),n=t[0],r=t[1],s="detail"===t[2],o=this.getRowStates().length;for(let e=0;e<o;e++){const{span:t,isDetail:o}=this.getRowStates()[e];if(t.spanID===r&&t.traceID===n&&o===s)return e}return-1})),Xt(this,"getRowHeight",(e=>{const{span:t,isDetail:n}=this.getRowStates()[e];return n?Array.isArray(t.logs)&&t.logs.length?en:Qt:Jt})),Xt(this,"renderRow",((e,t,n,r)=>{const{isDetail:s,span:o,spanIndex:a}=this.getRowStates()[n];return s?this.renderSpanDetailRow(o,e,t,r):this.renderSpanBarRow(o,a,e,t,r)})),Xt(this,"scrollToSpan",(e=>{if(null==e)return;const t=this.getRowStates().findIndex((t=>t.span.spanID===e));var n;t>=0&&(null===(n=this.listView)||void 0===n||n.scrollToIndex(t))})),Xt(this,"scrollToTop",(()=>{var e;const{topOfExploreViewRef:t}=this.props;null==t||null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}));const{setTrace:t,trace:n,uiFind:s}=e;t(n,s)}componentDidMount(){this.scrollToSpan(this.props.focusedSpanId)}shouldComponentUpdate(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(e[t[n]]!==this.props[t[n]]){if("shouldScrollToFirstUiFindMatch"!==t[n])return!0;if(e[t[n]])return!0}return!1}componentDidUpdate(e){const{registerAccessors:t,trace:n}=e,{shouldScrollToFirstUiFindMatch:r,clearShouldScrollToFirstUiFindMatch:s,scrollToFirstVisibleSpan:o,registerAccessors:a,setTrace:i,trace:l,uiFind:c,focusedSpanId:d,focusedSpanIdForSearch:p}=this.props;n!==l&&i(l,c),this.listView&&t!==a&&a(this.getAccessors()),r&&(o(),s()),d!==e.focusedSpanId&&this.scrollToSpan(d),p!==e.focusedSpanIdForSearch&&this.scrollToSpan(p)}getRowStates(){const{childrenHiddenIDs:e,detailStates:t,trace:n}=this.props;return tn(n,e,t)}getClipping(){const{currentViewRangeTime:e}=this.props;return rn(e)}getViewedBounds(){const{currentViewRangeTime:e,trace:t}=this.props,[n,r]=e;return nn({min:t.startTime,max:t.endTime,viewStart:n,viewEnd:r})}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,n,r,s){const{spanID:o}=e,{serviceName:a}=e.process,{childrenHiddenIDs:i,childrenToggle:c,detailStates:d,detailToggle:p,findMatchesIDs:u,spanNameColumnWidth:h,trace:m,focusSpan:g,hoverIndentGuideIds:f,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,theme:y,createSpanLink:x,focusedSpanId:w,focusedSpanIdForSearch:_}=this.props;if(!m)return null;const k=Zt(a),T=i.has(o),j=d.has(o),I=!!u&&u.has(o),S=o===w||o===_,D=F(e)||T&&function(e,t){const{depth:n}=e[t];let r=t+1;for(;r<e.length&&e[r].depth>n;r++)if(F(e[r]))return!0;return!1}(m.spans,t);let C=null;if(T){const e=function(e){if(e.length<=1||!P(e[0]))return!1;const t=e[0].depth+1;let n=1;for(;n<e.length&&e[n].depth===t;){if($(e[n]))return e[n];n++}return null}(m.spans.slice(t));if(e){const t=this.getViewedBounds()(e.startTime,e.startTime+e.duration);C={color:Zt(e.process.serviceName),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const N=e.tags.find((e=>"peer.service"===e.key));let L=null;!e.hasChildren&&N&&(e=>e.tags.some((e=>{let{key:t,value:n}=e;return"span.kind"===t&&"client"===n})))(e)&&(L={serviceName:N.value,color:Zt(N.value)});const E=Yt();return(0,l.jsx)("div",Object.assign({className:E.row,style:r},s,{children:(0,l.jsx)(yt,{clippingLeft:this.getClipping().left,clippingRight:this.getClipping().right,color:k,columnDivision:h,isChildrenExpanded:!T,isDetailExpanded:j,isMatchingFilter:I,isFocused:S,numTicks:5,onDetailToggled:p,onChildrenToggled:c,rpc:C,noInstrumentedServer:L,showErrorIcon:D,getViewedBounds:this.getViewedBounds(),traceStartTime:m.startTime,span:e,focusSpan:g,hoverIndentGuideIds:f,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,createSpanLink:x})}),n)}renderSpanDetailRow(e,t,n,r){const{spanID:s}=e,{serviceName:o}=e.process,{detailLogItemToggle:a,detailLogsToggle:i,detailProcessToggle:c,detailReferencesToggle:d,detailReferenceItemToggle:p,detailWarningsToggle:u,detailStackTracesToggle:h,detailStates:m,detailTagsToggle:g,detailToggle:f,spanNameColumnWidth:b,trace:v,focusSpan:y,hoverIndentGuideIds:x,addHoverIndentGuideId:w,removeHoverIndentGuideId:_,linksGetter:k,theme:T,createSpanLink:j,focusedSpanId:I,createFocusSpanLink:S}=this.props,D=m.get(s);if(!v||!D)return null;const C=Zt(o),N=Yt();return(0,l.jsx)("div",Object.assign({className:N.row,style:Object.assign({},n,{zIndex:1})},r,{children:(0,l.jsx)(Wt,{color:C,columnDivision:b,onDetailToggled:f,detailState:D,linksGetter:k,logItemToggle:a,logsToggle:i,processToggle:c,referenceItemToggle:p,referencesToggle:d,warningsToggle:u,stackTracesToggle:h,span:e,tagsToggle:g,traceStartTime:v.startTime,focusSpan:y,hoverIndentGuideIds:x,addHoverIndentGuideId:w,removeHoverIndentGuideId:_,createSpanLink:j,focusedSpanId:I,createFocusSpanLink:S})}),t)}render(){const e=Yt(),{scrollElement:t}=this.props;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(ie,{ref:this.setListView,dataLength:this.getRowStates().length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t}),(0,l.jsx)(o.ToolbarButton,{className:e.scrollToTopButton,onClick:this.scrollToTop,title:"Scroll to top",icon:"arrow-up"})]})}}const on=(0,o.withTheme2)(sn);var an=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js"),ln=n.n(an);const cn={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let dn;function pn(){if(dn)return dn;const e=new(ln())(document.body);return dn=e,e}const un=["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme","topOfExploreViewRef","focusedSpanIdForSearch"];function hn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const mn=(0,o.stylesFactory)((e=>({TraceTimelineViewer:s.iv`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${W(e,"#bbb")};

      & .json-markup {
        line-height: 17px;
        font-size: 13px;
        font-family: monospace;
        white-space: pre-wrap;
      }

      & .json-markup-key {
        font-weight: bold;
      }

      & .json-markup-bool {
        color: ${W(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${W(e,"teal")};
      }

      & .json-markup-null {
        color: ${W(e,"teal")};
      }

      & .json-markup-number {
        color: ${W(e,"blue","black")};
      }
    `})));class gn extends r.PureComponent{constructor(e){super(e),hn(this,"collapseAll",(()=>{this.props.collapseAll(this.props.trace.spans)})),hn(this,"collapseOne",(()=>{this.props.collapseOne(this.props.trace.spans)})),hn(this,"expandAll",(()=>{this.props.expandAll()})),hn(this,"expandOne",(()=>{this.props.expandOne(this.props.trace.spans)})),this.state={height:0}}componentDidMount(){!function(e){const t=pn();Object.keys(e).forEach((n=>{const r=e[n];r&&t.bind(cn[n].binding,r)}))}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:n,updateViewRangeTime:r,viewRange:s,createLinkToExternalSpan:o,traceTimeline:a,theme:i,topOfExploreViewRef:c,focusedSpanIdForSearch:d}=e,p=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,un),{trace:u}=p,h=mn(i);return(0,l.jsx)(ge.Provider,{value:o,children:(0,l.jsxs)("div",{className:h.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[(0,l.jsx)(te,{duration:u.duration,nameColumnWidth:a.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:s.time,updateNextViewRangeTime:n,updateViewRangeTime:r,columnResizeHandleHeight:this.state.height}),(0,l.jsx)(on,Object.assign({},p,a,{setSpanNameColumnWidth:t,currentViewRangeTime:s.time.current,topOfExploreViewRef:c,focusedSpanIdForSearch:d}))]})})}}const fn=(0,o.withTheme2)(gn);var bn=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js"),vn=n.n(bn),yn=n("./packages/grafana-data/src/index.ts");function xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const wn=(0,o.stylesFactory)((e=>({CanvasSpanGraph:s.iv`
      label: CanvasSpanGraph;
      background: ${W(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `})));class _n extends r.PureComponent{constructor(e){super(e),xn(this,"_canvasElm",void 0),xn(this,"getColor",(e=>function(e,t){return qt(o.colors).getRgbColorByKey(e)}(e,this.props.theme))),xn(this,"_setCanvasRef",(e=>{this._canvasElm=e})),this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,n,r,s){const o=new Map,a=t.length<60?60:Math.min(t.length,200),i=2*window.innerWidth;e.width=i,e.height=a;const l=Math.min(6,Math.max(2,a/t.length)),c=a/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=s,d.fillRect(0,0,i,a);for(let e=0;e<t.length;e++){const{valueWidth:s,valueOffset:a,serviceName:p}=t[e],u=a/n*i;let h=s/n*i;h<10&&(h=10);let m=o.get(p);m||(m=`rgba(${r(p).concat(.8).join()})`,o.set(p,m)),d.fillStyle=m,d.fillRect(u,e*c,h,l)}}(this._canvasElm,t,e,this.getColor,W(this.props.theme,"#fff"))}}render(){return(0,l.jsx)("canvas",{className:wn(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}const kn=(0,o.withTheme2)(_n),Tn=()=>({TickLabels:s.iv`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:s.iv`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `});function jn(e){const{numTicks:t,duration:n}=e,r=(0,o.useStyles2)(Tn),s=[];for(let e=0;e<t+1;e++){const o=e/t,a=1===o?{right:"0%"}:{left:100*o+"%"};s.push((0,l.jsx)("div",{className:r.TickLabelsLabel,style:a,"data-test":"tick",children:O(n*o)},o))}return(0,l.jsx)("div",{className:r.TickLabels,children:s})}const In=()=>({GraphTick:s.iv`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `});function Sn(e){const{numTicks:t}=e,n=(0,o.useStyles2)(In),r=[];for(let e=1;e<t;e++){const s=e/t*100+"%";r.push((0,l.jsx)("line",{className:n.GraphTick,x1:s,y1:"0%",x2:s,y2:"100%"},e/t))}return(0,l.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:r})}const Dn=()=>({ScrubberHandleExpansion:i()(s.iv`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:i()(s.iv`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:i()(s.iv`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:s.iv`
      label: ScrubberDragging;
      & .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      & .scrubber-handle {
        fill: #44f;
      }
      & > .scrubber-line {
        stroke: #44f;
      }
    `,ScrubberHandles:s.iv`
      label: ScrubberHandles;
      &:hover > .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      &:hover > .scrubber-handle {
        fill: #44f;
      }
      &:hover + .scrubber.line {
        stroke: #44f;
      }
    `});function Cn(e){let{isDragging:t,onMouseDown:n,onMouseEnter:r,onMouseLeave:s,position:a}=e;const c=100*a+"%",d=(0,o.useStyles2)(Dn),p=i()({[d.ScrubberDragging]:t});return(0,l.jsxs)("g",{className:p,children:[(0,l.jsxs)("g",{className:d.ScrubberHandles,onMouseDown:n,onMouseEnter:r,onMouseLeave:s,children:[(0,l.jsx)("rect",{x:c,className:d.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),(0,l.jsx)("rect",{x:c,className:d.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),(0,l.jsx)("line",{className:d.ScrubberLine,y2:"100%",x1:c,x2:c})]})}function Nn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ln=(0,o.stylesFactory)((e=>{const t="JaegerUiComponents__ViewingLayerResetZoomHoverClassName",n=s.iv`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:s.iv`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${t} {
        display: unset;
      }
    `,ViewingLayerGraph:s.iv`
      label: ViewingLayerGraph;
      border: 1px solid ${W(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:s.iv`
      label: ViewingLayerInactive;
      fill: ${W(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:s.iv`
      label: ViewingLayerCursorGuide;
      stroke: ${W(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:s.iv`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:s.iv`
      label: ViewingLayerDrag;
      fill: ${W(e,"#44f")};
    `,ViewingLayerFullOverlay:s.iv`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:n,ViewingLayerResetZoomHoverClassName:t}})),En="SHIFT_END",Mn="SHIFT_START",Rn="REFRAME";class On extends r.PureComponent{constructor(e){super(e),Nn(this,"state",void 0),Nn(this,"_root",void 0),Nn(this,"_draggerReframe",void 0),Nn(this,"_draggerStart",void 0),Nn(this,"_draggerEnd",void 0),Nn(this,"_setRoot",(e=>{this._root=e})),Nn(this,"_getDraggingBounds",(e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:n}=this._root.getBoundingClientRect(),[r,s]=this.props.viewRange.time.current;let o=1,a=0;return e===Mn?o=s:e===En&&(a=r),{clientXLeft:t,maxValue:o,minValue:a,width:n}})),Nn(this,"_handleReframeMouseMove",(e=>{let{value:t}=e;this.props.updateNextViewRangeTime({cursor:t})})),Nn(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:null})})),Nn(this,"_handleReframeDragUpdate",(e=>{let{value:t}=e;const n=t,{time:r}=this.props.viewRange,s={reframe:{anchor:r.reframe?r.reframe.anchor:n,shift:n}};this.props.updateNextViewRangeTime(s)})),Nn(this,"_handleReframeDragEnd",(e=>{let{manager:t,value:n}=e;const{time:r}=this.props.viewRange,s=r.reframe?r.reframe.anchor:n,[o,a]=n<s?[n,s]:[s,n];t.resetBounds(),this.props.updateViewRangeTime(o,a,"minimap")})),Nn(this,"_handleScrubberEnterLeave",(e=>{let{type:t}=e;const n=t===u.MouseEnter;this.setState({preventCursorLine:n})})),Nn(this,"_handleScrubberDragUpdate",(e=>{let{event:t,tag:n,type:r,value:s}=e;r===u.DragStart&&t.stopPropagation(),n===Mn?this.props.updateNextViewRangeTime({shiftStart:s}):n===En&&this.props.updateNextViewRangeTime({shiftEnd:s})})),Nn(this,"_handleScrubberDragEnd",(e=>{let{manager:t,tag:n,value:r}=e;const[s,o]=this.props.viewRange.time.current;let a;if(n===Mn)a=[r,o];else{if(n!==En)throw new Error("bad state");a=[s,r]}t.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(a[0],a[1],"minimap")})),Nn(this,"_resetTimeZoomClickHandler",(()=>{this.props.updateViewRangeTime(0,1)})),this._draggerReframe=new f({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:Rn}),this._draggerStart=new f({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Mn}),this._draggerEnd=new f({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:En}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const n=Ln(this.props.theme),r=function(e,t){const[n,r]=e<t?[e,t]:[t,e];return{x:100*n+"%",width:100*(r-n)+"%",leadingX:100*t+"%"}}(e,t);return[(0,l.jsx)("rect",{className:i()(n.ViewingLayerDraggedShift,n.ViewingLayerDrag),x:r.x,y:"0",width:r.width,height:this.props.height-2},"fill"),(0,l.jsx)("rect",{className:i()(n.ViewingLayerDrag),x:r.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:n,theme:r}=this.props,{preventCursorLine:s}=this.state,{current:a,cursor:c,shiftStart:d,shiftEnd:p,reframe:u}=t.time,h=null!=d||null!=p||null!=u,[m,g]=a;let f=0;m&&(f=100*m);let b,v=100;g&&(v=100-100*g),h||null==c||s||(b=100*c+"%");const y=Ln(r);return(0,l.jsxs)("div",{"aria-hidden":!0,className:y.ViewingLayer,style:{height:e},children:[(0!==m||1!==g)&&(0,l.jsx)(o.Button,{onClick:this._resetTimeZoomClickHandler,className:i()(y.ViewingLayerResetZoom,y.ViewingLayerResetZoomHoverClassName),type:"button",variant:"secondary",children:"Reset Selection"}),(0,l.jsxs)("svg",{height:e,className:y.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[f>0&&(0,l.jsx)("rect",{x:0,y:0,height:"100%",width:`${f}%`,className:y.ViewingLayerInactive}),v>0&&(0,l.jsx)("rect",{x:100-v+"%",y:0,height:"100%",width:`${v}%`,className:y.ViewingLayerInactive}),(0,l.jsx)(Sn,{numTicks:n}),b&&(0,l.jsx)("line",{className:y.ViewingLayerCursorGuide,x1:b,y1:"0",x2:b,y2:e-2,strokeWidth:"1"}),null!=d&&this._getMarkers(m,d),null!=p&&this._getMarkers(g,p),(0,l.jsx)(Cn,{isDragging:null!=d,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:m||0}),(0,l.jsx)(Cn,{isDragging:null!=p,position:g||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=u&&this._getMarkers(u.anchor,u.shift)]}),h&&(0,l.jsx)("div",{className:y.ViewingLayerFullOverlay})]})}}const zn=(0,o.withTheme2)(On);var Pn;function $n(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}const Hn=(0,ne.Z)((function(e){return e.spans.map($n)}));class Vn extends r.PureComponent{render(){const{height:e,trace:t,viewRange:n,updateNextViewRangeTime:r,updateViewRangeTime:s}=this.props;if(!t)return Pn||(Pn=(0,l.jsx)("div",{}));const o=Hn(t);return(0,l.jsxs)("div",{className:i()(U.GL,U.H3),children:[(0,l.jsx)(jn,{numTicks:4,duration:t.duration}),(0,l.jsxs)("div",{className:U.WW,children:[(0,l.jsx)(kn,{valueWidth:t.duration,items:o}),(0,l.jsx)(zn,{viewRange:n,numTicks:4,height:e||60,updateViewRangeTime:s,updateNextViewRangeTime:r})]})]})}}var Fn,An,Bn;Bn={height:60},(An="defaultProps")in(Fn=Vn)?Object.defineProperty(Fn,An,{value:Bn,enumerable:!0,configurable:!0,writable:!0}):Fn[An]=Bn;const Wn=()=>({BreakableText:s.iv`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `}),Gn=/\W*\w+\W*/g;function Kn(e){const{className:t,text:n,wordRegexp:r=Gn}=e,s=(0,o.useStyles2)(Wn);if(!n)return"string"==typeof n?n:null;const a=[];r.exec("");let i=r.exec(n)||[n];for(;i;)a.push((0,l.jsx)("span",{className:t||s.BreakableText,children:i[0]},`${n}-${a.length}`)),i=r.exec(n);return a}Kn.defaultProps={wordRegexp:Gn};const Un=e=>({TraceName:s.iv`
      label: TraceName;
      font-size: ${e.typography.size.lg};
    `});function qn(e){const{className:t,traceName:n}=e,r=(0,o.useStyles2)(Un),s=String(n||"<trace-without-root-span>"),a=(0,l.jsx)(Kn,{text:s});return(0,l.jsx)("span",{className:i()(r.TraceName,t),children:a})}const Zn=(0,h.memoize)((function(e){let t;const n=new Set(e.map((e=>{let{spanID:t}=e;return t})));for(let r=0;r<e.length;r++){if(e[r].references&&e[r].references.some((t=>{let{traceID:s,spanID:o}=t;return s===e[r].traceID&&n.has(o)})))continue;if(!t){t=e[r];continue}const s=e[r].references&&e[r].references.length||0,o=t.references&&t.references.length||0;(s<o||s===o&&e[r].startTime<t.startTime)&&(t=e[r])}return t?`${t.process.serviceName}: ${t.operationName}`:""}),(e=>e.length?e[0].traceID:0));var Xn=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function Yn(e,t){return 1===e?function(e){var t;return{get:function(n){if(t&&e(n,t.key))return t.value},put:function(e,n){t={key:e,value:n}}}}(t):function(e,t){var n=[];function r(e){var r=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}(n,(function(n){return t(e,n.key)}));if(r>-1){var s=n[r];return r>0&&(n.splice(r,1),n.unshift(s)),s.value}}return{get:r,put:function(t,s){r(t)||(n.unshift({key:t,value:s}),n.length>e&&n.pop())}}}(e,t)}function Jn(e,t){var n=t?function(e,t){return function n(r,s){if(e(r,s))return!0;if(Array.isArray(r))return!(!Array.isArray(s)||r.length!==s.length||!r.every((function(e,t){return n(e,s[t])})));if(Array.isArray(s))return!1;if("object"==typeof r){if("object"!=typeof s)return!1;var o=null===r,a=null===s;if(o||a)return o===a;var i=Object.keys(r),l=Object.keys(s);if(i.length!==l.length)return!1;var c=t?n:e;return!!i.every((function(e){return Xn(r,e)&&Xn(s,e)&&c(r[e],s[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}}const Qn=function(){for(var e=1,t=function(e,t){return e===t},n=!1,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];"number"==typeof s[0]&&(e=s.shift()),"function"==typeof s[0]?t=s.shift():void 0===s[0]&&s.shift(),"boolean"==typeof s[0]&&(n=s[0]);var a=Yn(e,Jn(t,n));return function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=a.get(n);return void 0===s&&(s=e.apply(e,n),a.put(n,s)),s}}};var er=n("../../opt/drone/yarncache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js");const tr=n.n(er)()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:100,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function nr(e){return(0,h.get)(tr,e)}function rr(e){const t=e.references?e.references.find((e=>"CHILD_OF"===e.refType)):null;return t?t.span:null}const sr=/#\{([^{}]*)\}/g;function or(e){const t=new Set;return e.replace(sr,((e,n)=>(t.add(n),e))),Array.from(t)}function ar(e,t,n){return e.replace(sr,((e,r)=>{const s=n[r];return null==s?"":t(s)}))}function ir(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:or(e),template:ar.bind(null,e,t)}}function lr(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error(`Invalid value: ${e}`)}const cr=e=>e;function dr(e,t){if(t)return t.find((t=>t.key===e))}function pr(e,t){return e.template(t)}function ur(e,t,n,r){const s=n[r];let o="logs";const a=t.process.tags===n;a&&(o="process");t.tags===n&&(o="tags");const i=[];return e.forEach((e=>{if(e.type(o)&&e.key(s.key)&&e.value(s.value)){const r={},l=e.parameters.every((i=>{let l=dr(i,n);return l||a||(l=function(e,t){let n=t;for(;n;){const t=dr(e,n.tags)||dr(e,n.process.tags);if(t)return t;n=rr(n)}}(i,t)),l?(r[i]=l.value,!0):(console.warn(`Skipping link pattern, missing parameter ${i} for key ${s.key} in ${o}.`,e.object),!1)}));l&&i.push({url:pr(e.url,r),text:pr(e.text,r)})}})),i}const hr=(nr("linkPatterns")||[]).map((function(e){try{const t=ir(e.url,encodeURIComponent),n=ir(e.text,cr);return{object:e,type:lr(e.type),key:lr(e.key),value:lr(e.value),url:t,text:n,parameters:(0,h.uniq)(t.parameters.concat(n.parameters))}}catch(t){return console.error(`Ignoring invalid link pattern: ${t}`,e),null}})).filter(Boolean),mr=Qn(10)((e=>{const t=[];return e?function(e,t){const n=[],r=Object.keys(t).filter((e=>"string"==typeof t[e]||"number"===t[e]));return e.filter((e=>e.type("traces"))).forEach((e=>{const s={},o=e.parameters.every((e=>{const n=e;return!!r.includes(n)&&(s[e]=t[n],!0)}));o&&n.push({url:pr(e.url,s),text:pr(e.text,s)})})),n}(hr,e):t}));gr=hr,fr=new WeakMap;var gr,fr,br=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js"),vr=n.n(br);const yr=["isLarge","className"];const xr=()=>({NewWindowIconLarge:s.iv`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `});function wr(e){const{isLarge:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,yr),s=(0,o.useStyles2)(xr),a=i()({[s.NewWindowIconLarge]:t},n);return(0,l.jsx)(vr(),Object.assign({className:a},r))}var _r;wr.defaultProps={isLarge:!1};const kr=e=>(0,l.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",_r||(_r=(0,l.jsx)(wr,{}))]});function Tr(e){const{links:t}=e;return(0,l.jsx)(kr,{href:t[0].url,title:t[0].text,className:e.className})}const jr=["renderer"];const Ir=e=>({TracePageHeader:s.iv`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${W(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${W(e,"#eee")};
        border-bottom: 1px solid ${W(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${W(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:s.iv`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:s.iv`
      label: TracePageHeaderBack;
      align-items: center;
      align-self: stretch;
      background-color: #fafafa;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      color: inherit;
      display: flex;
      font-size: 1.4rem;
      padding: 0 1rem;
      margin-bottom: -1px;
      &:hover {
        background-color: #f0f0f0;
        border-color: #ccc;
      }
    `,TracePageHeaderTitleLink:s.iv`
      label: TracePageHeaderTitleLink;
      align-items: center;
      display: flex;
      flex: 1;

      &:hover * {
        text-decoration: underline;
      }
      &:hover > *,
      &:hover small {
        text-decoration: none;
      }
    `,TracePageHeaderDetailToggle:s.iv`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:s.iv`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:s.iv`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:s.iv`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:s.iv`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:i()(s.iv`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:s.iv`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:s.iv`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:s.iv`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `}),Sr=[{key:"timestamp",label:"Trace Start:",renderer(e,t,n){const r=(0,yn.dateTimeFormat)(e.startTime/1e3,{timeZone:t,defaultWithMS:!0}),s=r.match(/^(.+)(:\d\d\.\d+)$/);return s?(0,l.jsxs)("span",{className:n.TracePageHeaderOverviewItemValue,children:[s[1],(0,l.jsx)("span",{className:n.TracePageHeaderOverviewItemValueDetail,children:s[2]})]}):r}},{key:"duration",label:"Duration:",renderer:e=>O(e.duration)},{key:"service-count",label:"Services:",renderer:e=>new Set((0,h.values)(e.processes).map((e=>e.serviceName))).size},{key:"depth",label:"Depth:",renderer:e=>(0,h.get)((0,h.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans:",renderer:e=>e.spans.length}];function Dr(e){const{canCollapse:t,hideMap:n,hideSummary:s,onSlimViewClicked:a,slimView:c,trace:d,updateNextViewRangeTime:p,updateViewRangeTime:u,viewRange:h,timeZone:m}=e,g=(0,o.useStyles2)(Ir),f=r.useMemo((()=>d?mr(d):[]),[d]);if(!d)return null;const b=!s&&!c&&Sr.map((e=>{const{renderer:t}=e,n=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,jr);return Object.assign({},n,{value:t(d,m,g)})})),v=(0,l.jsxs)("h1",{className:i()(g.TracePageHeaderTitle,t&&g.TracePageHeaderTitleCollapsible),children:[(0,l.jsx)(qn,{traceName:Zn(d.spans)})," ",(0,l.jsx)("small",{className:i()(g.TracePageHeaderTraceId,U.pQ),children:d.traceID})]});return(0,l.jsxs)("header",{className:g.TracePageHeader,children:[(0,l.jsxs)("div",{className:g.TracePageHeaderTitleRow,children:[f&&f.length>0&&(0,l.jsx)(Tr,{links:f,className:g.TracePageHeaderBack}),t?(0,l.jsxs)("a",{className:g.TracePageHeaderTitleLink,onClick:a,role:"switch","aria-checked":!c,children:[(0,l.jsx)(vn(),{className:i()(g.TracePageHeaderDetailToggle,!c&&g.TracePageHeaderDetailToggleExpanded)}),v]}):v]}),b&&(0,l.jsx)(St,{className:g.TracePageHeaderOverviewItems,items:b}),!n&&!c&&(0,l.jsx)(Vn,{trace:d,viewRange:h,updateNextViewRangeTime:p,updateViewRangeTime:u})]})}function Cr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Nr{constructor(e){Cr(this,"isTagsOpen",void 0),Cr(this,"isProcessOpen",void 0),Cr(this,"logs",void 0),Cr(this,"references",void 0),Cr(this,"isWarningsOpen",void 0),Cr(this,"isStackTracesOpen",void 0),Cr(this,"isReferencesOpen",void 0);const{isTagsOpen:t,isProcessOpen:n,isReferencesOpen:r,isWarningsOpen:s,isStackTracesOpen:o,logs:a,references:i}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(n),this.isReferencesOpen=Boolean(r),this.isWarningsOpen=Boolean(s),this.isStackTracesOpen=Boolean(o),this.logs={isOpen:Boolean(a&&a.isOpen),openedItems:a&&a.openedItems?new Set(a.openedItems):new Set},this.references={isOpen:Boolean(i&&i.isOpen),openedItems:i&&i.openedItems?new Set(i.openedItems):new Set}}toggleTags(){const e=new Nr(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new Nr(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new Nr(this);return e.references.isOpen=!this.references.isOpen,e}toggleReferenceItem(e){const t=new Nr(this);return t.references.openedItems.has(e)?t.references.openedItems.delete(e):t.references.openedItems.add(e),t}toggleWarnings(){const e=new Nr(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new Nr(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new Nr(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new Nr(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}var Lr=n("../../opt/drone/yarncache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js"),Er=n("../../opt/drone/yarncache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js"),Mr=n.n(Er);const Rr=e=>e.serviceName,Or=e=>e.spanID,zr=e=>e.operationName,Pr=e=>e.duration,$r=e=>e.startTime,Hr=e=>e.processID,Vr=(0,Lr.P1)((0,Lr.P1)((({span:e})=>e),(e=>e.references||[])),(({type:e})=>e),((e,t)=>e.find((e=>e.refType===t)))),Fr=((0,Lr.P1)((e=>Vr({span:e,type:"CHILD_OF"})),(e=>e?e.spanID:null)),(0,Lr.P1)((e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process}),Rr)),Ar=((0,Lr.P1)((({spans:e})=>e),(({leftBound:e})=>e),(({rightBound:e})=>e),((e,t,n)=>e.filter((e=>$r(e)>=t&&$r(e)<=n)))),(0,Lr.P1)((({spans:e})=>e),(({text:e})=>e),((e,t)=>Mr().filter(t,e,{extract:e=>`${Fr(e)} ${zr(e)}`}).map((({original:e})=>e))))),Br=(0,Lr.P1)(Ar,(e=>e.reduce(((e,t)=>({...e,[Or(t)]:t})),{})));(0,Lr.P1)((({spans:e})=>e),Br,((e,t)=>e.map((e=>({...e,muted:!t[Or(e)]})))));class Wr{static iterFunction(e,t=0){return n=>e(n.value,n,t)}static searchFunction(e){return"function"==typeof e?e:(t,n)=>e instanceof Wr?n===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce(((e,t)=>Math.max(t.depth+1,e)),1)}get size(){let e=0;return this.walk((()=>e++)),e}addChild(e){return this.children.push(e instanceof Wr?e:new Wr(e)),this}find(e){if(Wr.iterFunction(Wr.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const n=this.children[t].find(e);if(n)return n}return null}getPath(e){const t=Wr.iterFunction(Wr.searchFunction(e)),n=(e,r)=>{const s=r.concat([e]);if(t(e))return s;for(let t=0;t<e.children.length;t++){const r=e.children[t],o=n(r,s);if(o)return o}return null};return n(this,[])}walk(e,t=0){const n=[];let r=t;for(n.push({node:this,depth:r});n.length;){const{node:t,depth:s}=n.pop();e(t.value,t,s),r=s+1;let o=t.children.length-1;for(;o>=0;)n.push({node:t.children[o],depth:r}),o--}}}const Gr=e=>e.spans,Kr=e=>e.processes,Ur=(0,Lr.P1)((e=>e.span),(e=>e.processes),((e,t)=>({...e,process:t[Hr(e)]}))),qr=(0,Lr.P1)(Gr,(e=>e.reduce(((e,t)=>e.set(Or(t),t)),new Map)));function Zr(e){const t=new Map(e.spans.map((e=>[e.spanID,new Wr(e.spanID)]))),n=new Map(e.spans.map((e=>[e.spanID,e]))),r=new Wr("__root__");e.spans.forEach((e=>{const n=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:s,spanID:o}=e.references[0];if("CHILD_OF"!==s&&"FOLLOWS_FROM"!==s)throw new Error(`Unrecognized ref type: ${s}`);(t.get(o)||r).children.push(n)}else r.children.push(n)}));const s=(e,t)=>{const r=n.get(e.value),s=n.get(t.value);return+(r.startTime>s.startTime)||+(r.startTime===s.startTime)-1};return e.spans.forEach((e=>{const n=t.get(e.spanID);n.children.length>1&&n.children.sort(s)})),r.children.sort(s),r}(0,Lr.P1)(Gr,(e=>e.length));const Xr=(0,Lr.P1)(Gr,(e=>e.reduce(((e,t)=>e?Math.min(e,$r(t)):$r(t)),null))),Yr=(0,Lr.P1)(Gr,Xr,((e,t)=>e.reduce(((e,n)=>e?Math.max($r(n)-t+Pr(n),e):Pr(n)),null))),Jr=((0,Lr.P1)(Xr,Yr,((e,t)=>e+t)),(0,Lr.P1)(Zr,qr,((e,t)=>e.children.map((e=>t.get(e.value))).sort(((e,t)=>{return n=$r(e),r=$r(t),n-r;var n,r}))[0]))),Qr=((0,Lr.P1)(Zr,(e=>e.depth-1)),(0,Lr.P1)((0,Lr.P1)((e=>e.trace),Zr),(0,Lr.P1)((e=>e.span),Or),((e,t)=>e.getPath(t).length-1)),(0,Lr.P1)(Kr,(e=>Object.keys(e).reduce(((t,n)=>t.add(Rr(e[n]))),new Set)))),es=((0,Lr.P1)(Qr,(e=>e.size)),{ms:function(e){const t=R(e,E,D);return`${S().duration(t/D).asMilliseconds()}ms`},s:function(e){const t=R(e,E,C);return`${S().duration(t/D).asSeconds()}s`}}),ts=(0,Lr.P1)(Yr,(e=>e>=C?es.s:es.ms)),ns=((0,Lr.P1)((({duration:e})=>e),(({unit:e})=>es[e]),((e,t)=>t(e))),(0,Lr.P1)((({duration:e})=>e),(0,Lr.P1)((({trace:e})=>e),ts),((e,t)=>t(e))),(0,Lr.P1)((({trace:e})=>e),(({spans:e})=>e),(({sort:e})=>e),((e,t,{dir:n,comparator:r,selector:s})=>[...t].sort(((t,o)=>n*r(s(t,e),s(o,e)))))),(0,Lr.P1)(Zr,(e=>{const t=new Map;let n=0;return e.walk((e=>t.set(e,n++))),t})));(0,Lr.P1)((0,Lr.P1)((e=>e.trace),Zr),(0,Lr.P1)((e=>e.span),Or),((e,t)=>{const n=e.find(t);return n?n.size-1:-1})),(0,Lr.P1)((0,Lr.P1)((({trace:e})=>e),ns),(({span:e})=>e),((e,t)=>e.get(Or(t)))),(0,Lr.P1)((0,Lr.P1)((0,Lr.P1)((e=>{const t=Gr(e),n=Kr(e);return{...e,spans:t.map((e=>Ur({span:e,processes:n})))}}),Jr),(0,Lr.zB)({name:zr,serviceName:Fr})),(({name:e,serviceName:t})=>`${t}: ${e}`)),(0,Lr.P1)((({spans:e})=>e),(0,Lr.P1)((({trace:e})=>e),Zr),(({collapsed:e})=>e),((e,t,n)=>{const r=n.reduce(((e,n)=>(t.find(n).walk((t=>t!==n&&e.add(t))),e)),new Set);return r.size>0?e.filter((e=>!r.has(Or(e)))):e})),(0,Lr.P1)((({trace:e})=>e),(({interval:e=4})=>e),(({width:e=3})=>e),((e,t,n)=>[...Array(t+1).keys()].map((r=>({timestamp:Xr(e)+Yr(e)*(r/t),width:n}))))),(0,Lr.P1)((e=>e),Gr,((e,t)=>{const n=new Map;return{...e,spans:t.reduce(((e,t)=>{const r=n.has(Or(t))?`${Or(t)}_${n.get(Or(t))}`:Or(t),s={...t,spanID:r};return r!==Or(t)&&console.warn("duplicate spanID in trace replaced",Or(t),"new:",r),n.set(Or(t),(n.get(Or(t))||0)+1),e.concat([s])}),[])}})),(0,Lr.P1)((e=>e),Gr,((e,t)=>({...e,spans:t.filter((e=>!!$r(e)))})));function rs(e){const t=new Map;return{tags:e.reduce(((e,n)=>(e.some((e=>e.key===n.key&&e.value===n.value))?t.set(`${n.key}:${n.value}`,`Duplicate tag "${n.key}:${n.value}"`):e.push(n),e)),[]),warnings:Array.from(t.values())}}function ss(e,t){const n=e.slice(),r=(t||[]).map((e=>e.toLowerCase()));return n.sort(((e,t)=>{const n=e.key.toLowerCase(),s=t.key.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e];if(n.startsWith(t)&&!s.startsWith(t))return-1;if(!n.startsWith(t)&&s.startsWith(t))return 1}return n>s?1:n<s?-1:0})),n}function os(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let n=0,r=Number.MAX_SAFE_INTEGER;const s=new Map,o=new Map;e.spans=e.spans.filter((e=>Boolean(e.startTime)));const a=e.spans.length;for(let t=0;t<a;t++){const a=e.spans[t],{startTime:i,duration:l,processID:c}=a;let d=a.spanID;i<r&&(r=i),i+l>n&&(n=i+l);const p=s.get(d);null!=p?(console.warn(`Dupe spanID, ${p+1} x ${d}`,a,o.get(d)),(0,h.isEqual)(a,o.get(d))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),s.set(d,p+1),d=`${d}_${p}`,a.spanID=d):s.set(d,1),a.process=e.processes[c],o.set(d,a)}const i=Zr(e),l=[],c={};i.walk((function(e,n){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("__root__"===e)return;const a=o.get(e);if(!a)return;const{serviceName:i}=a.process;c[i]=(c[i]||0)+1,a.relativeStartTime=a.startTime-r,a.depth=s-1,a.hasChildren=n.children.length>0,a.childSpanCount=n.children.length,a.warnings=a.warnings||[],a.tags=a.tags||[],a.references=a.references||[];const d=rs(a.tags);a.tags=ss(d.tags,nr("topTagPrefixes")),a.warnings=a.warnings.concat(d.warnings),a.references.forEach(((n,r)=>{const s=o.get(n.spanID);s&&(n.span=s,r>0&&(s.subsidiarilyReferencedBy=s.subsidiarilyReferencedBy||[],s.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:a,refType:n.refType})))})),l.push(a)}));const d=Zn(l);return{services:Object.keys(c).map((e=>({name:e,numberOfSpans:c[e]}))),spans:l,traceID:t,traceName:d,processes:e.processes,duration:n-r,startTime:r,endTime:n}}function as(e,t){if(!t)return;const n=[],r=[];e.split(/\s+/).filter(Boolean).forEach((e=>{"-"===e[0]?r.push(e.slice(1).toLowerCase()):n.push(e.toLowerCase())}));const s=(e,t)=>e.some((e=>t.toLowerCase().includes(e))),o=e=>!!e&&e.some((e=>!s(r,e.key)&&(s(n,e.key)||s(n,e.value.toString()))));return new Set(t.filter((e=>s(n,e.operationName)||s(n,e.process.serviceName)||o(e.tags)||null!==e.logs&&e.logs.some((e=>o(e.fields)))||o(e.process.tags)||n.some((t=>t===e.spanID)))).map((e=>e.spanID)))}},"./packages/jaeger-ui-components/src/uberUtilityStyles.ts":(e,t,n)=>{"use strict";n.d(t,{A4:()=>p,GL:()=>c,H3:()=>l,Im:()=>m,K9:()=>f,NY:()=>v,WW:()=>s,b$:()=>h,bi:()=>o,h2:()=>i,im:()=>a,oD:()=>d,pQ:()=>b,ty:()=>g,xb:()=>u});var r=n("./.yarn/__virtual__/@emotion-css-virtual-15ef12e38d/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const s=r.iv`
  position: relative;
`,o=r.iv`
  margin-bottom: 0.25rem;
`,a=r.iv`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,i=r.iv`
  margin: 0;
`,l=r.iv`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,c=r.iv`
  padding-bottom: 0.5rem;
`,d=r.iv`
  display: flex;
`,p=(r.iv`
  align-items: center;
`,r.iv`
  align-items: start;
`,r.iv`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`),u=r.iv`
  text-align: right;
`,h=r.iv`
  display: inline-block;
`,m=r.iv`
  margin: -0.2rem 0.25rem 0 0;
`,g=r.iv`
  text-overflow: ellipsis;
`,f=r.iv`
  width: 100%;
`,b=r.iv`
  color: #aaa;
`,v=r.iv`
  justify-content: flex-end;
`},"./public/app/core/utils/tracing.ts":(e,t,n)=>{"use strict";n.d(t,{et:()=>s,fy:()=>a,nO:()=>o,np:()=>l});var r=n("./packages/grafana-data/src/index.ts");function s(e){e.sort(((e,t)=>e[0]-t[0]));return e.reduce(((e,t)=>{if(!e.length)return[t];const n=e.slice(-1)[0],[r,s]=n,[o,a]=t;return a<s?e:o>s?[...e,t]:[...e.slice(0,-1),[r,a]]}),[]).reduce(((e,t)=>e+(t[1]-t[0])),0)}function o(e){const t={};let n;for(let r=0;n=e(r),n;r++){t[n.id]?t[n.id].span=n.span:t[n.id]={span:n.span,children:[]};for(const e of n.parentIds)e&&(t[e]?t[e].children.push(n.id):t[e]={span:void 0,children:[n.id]})}return t}function a(e,t,n){return{main:`${i(e)}ms (${i(e/t*100)}%)`,secondary:`${i(n)}ms (${i(n/e*100)}%)`}}function i(e){return parseFloat(e.toFixed(2))}function l(){return[new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.title,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.subTitle,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.mainStat,type:r.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,type:r.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:r.NodeGraphDataFrameFieldNames.color,type:r.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.target,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.source,type:r.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},"./public/app/plugins/datasource/jaeger/responseTransform.ts":(e,t,n)=>{"use strict";n.d(t,{Wp:()=>a,c6:()=>l,xM:()=>o});var r=n("./packages/grafana-data/src/index.ts"),s=n("./packages/jaeger-ui-components/src/index.ts");function o(e){const t=e.spans.map((t=>{return n=t,r=e.processes,{spanID:n.spanID,traceID:n.traceID,parentSpanID:null===(s=n.references)||void 0===s||null===(o=s.find((e=>"CHILD_OF"===e.refType)))||void 0===o?void 0:o.spanID,operationName:n.operationName,startTime:n.startTime/1e3,duration:n.duration/1e3,logs:n.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:n.tags,warnings:null!==(a=n.warnings)&&void 0!==a?a:void 0,stackTraces:n.stackTraces,serviceName:r[n.processID].serviceName,serviceTags:r[n.processID].tags};var n,r,s,o,a})),n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string},{name:"spanID",type:r.FieldType.string},{name:"parentSpanID",type:r.FieldType.string},{name:"operationName",type:r.FieldType.string},{name:"serviceName",type:r.FieldType.string},{name:"serviceTags",type:r.FieldType.other},{name:"startTime",type:r.FieldType.number},{name:"duration",type:r.FieldType.number},{name:"logs",type:r.FieldType.other},{name:"tags",type:r.FieldType.other},{name:"warnings",type:r.FieldType.other},{name:"stackTraces",type:r.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)n.add(e);return n}function a(e,t){const n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string,config:{displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:r.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:r.FieldType.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:r.FieldType.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),s=e.map(i).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of s)n.add(e);return n}function i(e){const t=(0,s.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},n=[];for(let r=0;r<e.length;r++){const s=e.get(r);t.traceID||(t.traceID=s.traceID),n.find((e=>e===s.serviceName))||(n.push(s.serviceName),t.processes[`p${n.length}`]={serviceName:s.serviceName,tags:s.serviceTags}),t.spans.push({traceID:s.traceID,spanID:s.spanID,duration:1e3*s.duration,references:s.parentSpanID?[{refType:"CHILD_OF",spanID:s.parentSpanID,traceID:s.traceID}]:[],flags:0,logs:s.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:s.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===s.serviceName))||"",startTime:1e3*s.startTime,tags:s.tags,warnings:s.warnings?s.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},"./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("../../opt/drone/yarncache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var n=e.children,o=e.color,a=e.size,i=e.style,l=e.width,c=e.height,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),p=t.reactIconBase,u=void 0===p?{}:p,h=a||u.size||"1em";return s.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||h,width:l||h},u,d,{style:r({verticalAlign:"middle",color:o||u.color},u.style||{},i)}))};i.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number]),width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),style:o.default.object},i.contextTypes={reactIconBase:o.default.shape(i.propTypes)},t.default=i,e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/link.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m20 16.3z m8.8-3.8c3.4 0 6.2 2.8 6.2 6.3v2.5c0 3.4-2.8 6.2-6.2 6.2h-8.8c-2.6 0-4.7-1.6-5.7-3.7-0.3-0.8-0.5-1.6-0.5-2.5v-2.5h3.7v2.5c0 1.4 1.1 2.5 2.5 2.5h8.8c1.4 0 2.5-1.1 2.5-2.5v-2.5c0-1.5-1.1-2.5-2.5-2.5h-1.3c-0.5-2.5-2.5-3.8-2.5-3.8h3.8z m-3 3.8c0.3 0.7 0.5 1.6 0.5 2.5v2.5h-3.8v-2.5c0-1.5-1.1-2.5-2.5-2.5h-8.7c-1.5 0-2.5 1-2.5 2.5v2.5c0 1.4 1 2.5 2.5 2.5h1.2c0.5 2.4 2.5 3.7 2.5 3.7h-3.7c-3.5 0-6.3-2.8-6.3-6.2v-2.5c0-3.5 2.8-6.3 6.3-6.3h8.7c2.6 0 4.8 1.6 5.8 3.8z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/3/opt/drone/yarncache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),o=a(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/3/opt/drone/yarncache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(o.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var n=this,r=n.constructor;return n.options=Object.assign({storeInstancesGlobally:!0},t||{}),n.callbacks={},n.directMap={},n.sequenceLevels={},n.resetTimer=null,n.ignoreNextKeyup=!1,n.ignoreNextKeypress=!1,n.nextExpectedAction=!1,n.element=e,n.addEvents(),n.options.storeInstancesGlobally&&r.instances.push(n),n},e.exports.prototype.bind=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js"),e.exports.prototype.bindMultiple=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js"),e.exports.prototype.unbind=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js"),e.exports.prototype.trigger=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js"),e.exports.prototype.reset=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js"),e.exports.prototype.stopCallback=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js"),e.exports.prototype.handleKey=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js"),e.exports.prototype.addEvents=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js"),e.exports.prototype.bindSingle=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js"),e.exports.prototype.getKeyInfo=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js"),e.exports.prototype.pickBestAction=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js"),e.exports.prototype.getReverseMap=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js"),e.exports.prototype.getMatches=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js"),e.exports.prototype.resetSequences=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js"),e.exports.prototype.fireCallback=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js"),e.exports.prototype.bindSequence=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js"),e.exports.prototype.resetSequenceTimer=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js"),e.exports.prototype.detach=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js"),e.exports.instances=[],e.exports.reset=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js"),e.exports.REVERSE_MAP=null},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js":(e,t,n)=>{"use strict";e.exports=function(){var e=this,t=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js"),r=e.element;e.eventHandler=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js").bind(e),t(r,"keypress",e.eventHandler),t(r,"keydown",e.eventHandler),t(r,"keyup",e.eventHandler)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js":e=>{"use strict";e.exports=function(e,t,n){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,n),this}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js":e=>{"use strict";e.exports=function(e,t,n){for(var r=0;r<e.length;++r)this.bindSingle(e[r],t,n)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,s){var o=this;function a(t){return function(){o.nextExpectedAction=t,++o.sequenceLevels[e],o.resetSequenceTimer()}}function i(t){var a;o.fireCallback(r,t,e),"keyup"!==s&&(a=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js"),o.ignoreNextKeyup=a(t)),setTimeout((function(){o.resetSequences()}),10)}o.sequenceLevels[e]=0;for(var l=0;l<t.length;++l){var c=l+1===t.length?i:a(s||o.getKeyInfo(t[l+1]).action);o.bindSingle(t[l],c,s,e,l)}}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js":e=>{"use strict";e.exports=function(e,t,n,r,s){var o=this;o.directMap[e+":"+n]=t;var a,i=(e=e.replace(/\s+/g," ")).split(" ");i.length>1?o.bindSequence(e,i,t,n):(a=o.getKeyInfo(e,n),o.callbacks[a.key]=o.callbacks[a.key]||[],o.getMatches(a.key,a.modifiers,{type:a.action},r,e,s),o.callbacks[a.key][r?"unshift":"push"]({callback:t,modifiers:a.modifiers,action:a.action,seq:r,level:s,combo:e}))}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js":(e,t,n)=>{var r=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js").off;e.exports=function(){var e=this,t=e.element;r(t,"keypress",e.eventHandler),r(t,"keydown",e.eventHandler),r(t,"keyup",e.eventHandler)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js":e=>{function t(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}e.exports=t,e.exports.on=t,e.exports.off=function(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,s){this.stopCallback(t,t.target||t.srcElement,r,s)||!1===e(t,r)&&(n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js")(t),n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js")(t))}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var r,s,o,a,i,l,c=[];for(r=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js")(e),a=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js"),i=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js"),l=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),o=0;o<r.length;++o)a[s=r[o]]&&(s=a[s]),t&&"keypress"!==t&&i[s]&&(s=i[s],c.push("shift")),l(s)&&c.push(s);return{key:s,modifiers:c,action:t=this.pickBestAction(s,c,t)}}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,s,o,a){var i,l,c,d,p=this,u=[],h=r.type;"keypress"!==h||r.code&&"Arrow"===r.code.slice(0,5)||(p.callbacks["any-character"]||[]).forEach((function(e){u.push(e)}));if(!p.callbacks[e])return u;for(c=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),"keyup"===h&&c(e)&&(t=[e]),i=0;i<p.callbacks[e].length;++i)if(l=p.callbacks[e][i],(s||!l.seq||p.sequenceLevels[l.seq]===l.level)&&h===l.action&&(d=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"),"keypress"===h&&!r.metaKey&&!r.ctrlKey||d(t,l.modifiers))){var m=!s&&l.combo===o,g=s&&l.seq===s&&l.level===a;(m||g)&&p.callbacks[e].splice(i,1),u.push(l)}return u}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js":(e,t,n)=>{"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var r in t.REVERSE_MAP={},e=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"))r>95&&r<112||e.hasOwnProperty(r)&&(t.REVERSE_MAP[e[r]]=r);return t.REVERSE_MAP}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r){var s,o,a,i,l=this,c={},d=0,p=!1;for(s=l.getMatches(e,t,r),o=0;o<s.length;++o)s[o].seq&&(d=Math.max(d,s[o].level));for(o=0;o<s.length;++o)if(s[o].seq){if(s[o].level!==d)continue;p=!0,c[s[o].seq]=1,l.fireCallback(s[o].callback,r,s[o].combo,s[o].seq)}else p||l.fireCallback(s[o].callback,r,s[o].combo);i="keypress"===r.type&&l.ignoreNextKeypress,a=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),r.type!==l.nextExpectedAction||a(e)||i||l.resetSequences(c),l.ignoreNextKeypress=p&&"keydown"===r.type}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r=this;"number"!=typeof e.which&&(e.which=e.keyCode);var s=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js")(e);void 0!==s&&("keyup"!==e.type||r.ignoreNextKeyup!==s?(t=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js"),r.handleKey(s,t(e),e)):r.ignoreNextKeyup=!1)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js":e=>{"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js":e=>{"use strict";e.exports=function(e,t,n){return n||(n=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===n&&t.length&&(n="keydown"),n}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js":e=>{"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js":e=>{"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js":e=>{"use strict";e.exports=function(e){var t=this;e=e||{};var n,r=!1;for(n in t.sequenceLevels)e[n]?r=!0:t.sequenceLevels[n]=0;r||(t.nextExpectedAction=!1)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js":e=>{"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var n=t.tagName.toLowerCase();return"input"===n||"select"===n||"textarea"===n||t.isContentEditable}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js":e=>{"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js":e=>{"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js":e=>{"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r;if(t=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"),r=n("../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js"),"keypress"===e.type){var s=String.fromCharCode(e.which);return e.shiftKey||(s=s.toLowerCase()),s}return void 0!==t[e.which]?t[e.which]:void 0!==r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js":e=>{"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js":e=>{"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js":e=>{"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js":e=>{"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js":e=>{"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js":e=>{"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js":e=>{"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js":e=>{"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var t=1;t<20;++t)e.exports[111+t]="f"+t;for(t=0;t<=9;++t)e.exports[t+96]=t},"../../opt/drone/yarncache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js":e=>{"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"../../opt/drone/yarncache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js":(e,t,n)=>{"use strict";var r=n("../../opt/drone/yarncache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js"),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,a,i,l,c,d=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),i=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=s[t.format]||s.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),a()}return d}},"../../opt/drone/yarncache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js":e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},"../../opt/drone/yarncache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js":e=>{var t;t={},e.exports=t,t.simpleFilter=function(e,n){return n.filter((function(n){return t.test(e,n)}))},t.test=function(e,n){return null!==t.match(e,n)},t.match=function(e,t,n){n=n||{};var r,s=0,o=[],a=t.length,i=0,l=0,c=n.pre||"",d=n.post||"",p=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var u=0;u<a;u++)r=t[u],p[u]===e[s]?(r=c+r+d,s+=1,l+=1+l):l=0,i+=l,o[o.length]=r;return s===e.length?(i=p===e?1/0:i,{rendered:o.join(""),score:i}):null},t.filter=function(e,n,r){return n&&0!==n.length?"string"!=typeof e?n:(r=r||{},n.reduce((function(n,s,o,a){var i=s;r.extract&&(i=r.extract(s));var l=t.match(e,i,r);return null!=l&&(n[n.length]={string:l.rendered,score:l.score,index:o,original:s}),n}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))):[]}},"../../opt/drone/yarncache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js":e=>{"use strict";var t="    ";function n(e){return e?function(t){return'style="'+(n=e["."+t],r="",n&&Object.keys(n).forEach((function(e){r+=e+":"+n[e]+";"})),r+'"');var n,r}:function(e){return'class="'+e+'"'}}function r(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,s){var o="",a=n(s),i=function(e,n,r,s){if(!e.length)return n+" "+r;var a=n+"\n";return o+=t,e.forEach((function(t,n){a+=o+s(t)+(n<e.length-1?",":"")+"\n"})),o=o.slice(0,-t.length),a+o+r};return"<div "+a("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+a("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+a("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+r(t.toISOString())+'"</span>';case"null":return"<span "+a("json-markup-null")+">null</span>";case"string":return"<span "+a("json-markup-string")+'>"'+r(t.replace(/\n/g,"\n"+o))+'"</span>';case"link":return"<span "+a("json-markup-string")+'>"<a href="'+r(t)+'">'+r(t)+'</a>"</span>';case"array":return i(t,"[","]",e);case"object":var n=Object.keys(t).filter((function(e){return void 0!==t[e]}));return i(n,"{","}",(function(n){return"<span "+a("json-markup-key")+'>"'+n+'":</span> '+e(t[n])}))}return""}(e)+"</div>"}},"../../opt/drone/yarncache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js":e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=2608.15718e8e3083449662a7.js.map