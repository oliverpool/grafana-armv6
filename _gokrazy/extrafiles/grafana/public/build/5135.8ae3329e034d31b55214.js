"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5135],{62724:(S,g,i)=>{i.d(g,{Mo:()=>e});var a=i(82897),s=i.n(a),o=i(46519),t=i(14582);const e=(m,d=!1)=>{const E=m.values;switch(m.type){case t.fS.number:return N(E,d);case t.fS.string:return I(E,d);case t.fS.boolean:return R(E,d);case t.fS.time:return w(E,d);default:return z(d)}},h=(m,d)=>{if(!m||!d)return v(m,d);if((0,a.isNumber)(m)&&(0,a.isNumber)(d))return l(m,d);if((0,o.v9)(m)&&(0,o.v9)(d)){if((0,o.CQ)(m).isBefore(d))return-1;if((0,o.CQ)(d).isBefore(m))return 1}return 0},l=(m,d)=>m-d,u=(m,d)=>!m||!d?v(m,d):m.localeCompare(d),y=(m,d)=>v(m,d),v=(m,d)=>!m&&d?1:m&&!d?-1:0,w=(m,d)=>(E,F)=>{const _=m.get(E),x=m.get(F);return d?h(x,_):h(_,x)},R=(m,d)=>(E,F)=>{const _=m.get(E),x=m.get(F);return d?y(x,_):y(_,x)},N=(m,d)=>(E,F)=>{const _=m.get(E),x=m.get(F);return d?l(x,_):l(_,x)},I=(m,d)=>(E,F)=>{const _=m.get(E),x=m.get(F);return d?u(x,_):u(_,x)},z=m=>(d,E)=>m?l(E,d):l(d,E)},82346:(S,g,i)=>{i.d(g,{N:()=>h});var a=i(14582),s=i(85854);const o={id:s.mi.byType,name:"Field Type",description:"match based on the field type",defaultOptions:a.fS.number,get:l=>(u,y,v)=>l===u.type,getOptionsDisplayText:l=>`Field type: ${l}`},t={id:s.mi.numeric,name:"Numeric Fields",description:"Fields with type number",get:()=>o.get(a.fS.number),getOptionsDisplayText:()=>"Numeric Fields"},e={id:s.mi.time,name:"Time Fields",description:"Fields with type time",get:()=>o.get(a.fS.time),getOptionsDisplayText:()=>"Time Fields"};function h(){return[o,t,e]}},85854:(S,g,i)=>{i.d(g,{E4:()=>o,Ff:()=>a,mE:()=>t,mi:()=>s});var a=(e=>(e.anyMatch="anyMatch",e.allMatch="allMatch",e.invertMatch="invertMatch",e.alwaysMatch="alwaysMatch",e.neverMatch="neverMatch",e))(a||{}),s=(e=>(e.numeric="numeric",e.time="time",e.first="first",e.firstTimeField="firstTimeField",e.byType="byType",e.byName="byName",e.byNames="byNames",e.byRegexp="byRegexp",e.byRegexpOrNames="byRegexpOrNames",e.byFrameRefID="byFrameRefID",e))(s||{}),o=(e=>(e.byName="byName",e.byRefId="byRefId",e.byIndex="byIndex",e.byLabel="byLabel",e))(o||{}),t=(e=>(e.regex="regex",e.isNull="isNull",e.isNotNull="isNotNull",e.greater="greater",e.greaterOrEqual="greaterOrEqual",e.lower="lower",e.lowerOrEqual="lowerOrEqual",e.equal="equal",e.notEqual="notEqual",e.between="between",e))(t||{})},95108:(S,g,i)=>{i.d(g,{n:()=>t});var a=i(29076),s=i(85854);const o={id:s.E4.byRefId,name:"Query refId",description:"match the refId",defaultOptions:"A",get:e=>{const h=(0,a.jO)(e);return l=>h.test(l.refId||"")},getOptionsDisplayText:e=>`RefID: ${e}`};function t(){return[o]}},98876:(S,g,i)=>{i.d(g,{z:()=>e});var a=i(14582),s=i(85854);const o={id:s.mi.first,name:"First Field",description:"The first field in the frame",get:h=>(l,u,y)=>l===u.fields[0],getOptionsDisplayText:()=>"First field"},t={id:s.mi.firstTimeField,name:"First time field",description:"The first field of type time in a frame",get:h=>(l,u,y)=>l.type===a.fS.time&&l===u.fields.find(v=>v.type===a.fS.time),getOptionsDisplayText:()=>"First time field"};function e(){return[o,t]}},29106:(S,g,i)=>{i.d(g,{T:()=>t});var a=i(85854);const s={id:a.mE.equal,name:"Is equal",description:"Match where value for given field is equal to options value.",get:e=>(h,l)=>l.values.get(h)==e.value,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},o={id:a.mE.notEqual,name:"Is not equal",description:"Match where value for given field is not equal to options value.",get:e=>(h,l)=>l.values.get(h)!=e.value,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({value:""})},t=()=>[s,o]},1521:(S,g,i)=>{i.d(g,{a:()=>t});var a=i(85854);const s={id:a.mE.isNull,name:"Is null",description:"Match where value for given field is null.",get:()=>(e,h)=>h.values.get(e)==null,getOptionsDisplayText:()=>"Matches all rows where field is null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},o={id:a.mE.isNotNull,name:"Is not null",description:"Match where value for given field is not null.",get:()=>(e,h)=>h.values.get(e)!=null,getOptionsDisplayText:()=>"Matches all rows where field is not null.",isApplicable:()=>!0,getDefaultOptions:()=>({})},t=()=>[s,o]},95827:(S,g,i)=>{i.d(g,{H:()=>l});var a=i(14582),s=i(85854);const o={id:s.mE.greater,name:"Is greater",description:"Match when field value is greater than option.",get:u=>(y,v)=>{const w=v.values.get(y);return isNaN(w)?!1:w>u.value},getOptionsDisplayText:u=>`Matches all rows where field value is greater than: ${u.value}.`,isApplicable:u=>u.type===a.fS.number,getDefaultOptions:()=>({value:0})},t={id:s.mE.greaterOrEqual,name:"Is greater or equal",description:"Match when field value is greater than or equal to option.",get:u=>(y,v)=>{const w=v.values.get(y);return isNaN(w)?!1:w>=u.value},getOptionsDisplayText:u=>`Matches all rows where field value is greater than or equal to: ${u.value}.`,isApplicable:u=>u.type===a.fS.number,getDefaultOptions:()=>({value:0})},e={id:s.mE.lower,name:"Is lower",description:"Match when field value is lower than option.",get:u=>(y,v)=>{const w=v.values.get(y);return isNaN(w)?!1:w<u.value},getOptionsDisplayText:u=>`Matches all rows where field value is lower than: ${u.value}.`,isApplicable:u=>u.type===a.fS.number,getDefaultOptions:()=>({value:0})},h={id:s.mE.lowerOrEqual,name:"Is lower or equal",description:"Match when field value is lower or equal than option.",get:u=>(y,v)=>{const w=v.values.get(y);return isNaN(w)?!1:w<=u.value},getOptionsDisplayText:u=>`Matches all rows where field value is lower or equal than: ${u.value}.`,isApplicable:u=>u.type===a.fS.number,getDefaultOptions:()=>({value:0})},l=()=>[o,t,e,h]},4728:(S,g,i)=>{i.d(g,{G:()=>t});var a=i(14582),s=i(85854);const o={id:s.mE.between,name:"Is between",description:"Match when field value is between given option values.",get:e=>(h,l)=>{const u=l.values.get(h);return isNaN(u)?!1:u>e.from&&u<e.to},getOptionsDisplayText:e=>`Matches all rows where field value is between ${e.from} and ${e.to}.`,isApplicable:e=>e.type===a.fS.number,getDefaultOptions:()=>({from:0,to:100})},t=()=>[o]},85402:(S,g,i)=>{i.d(g,{G:()=>o});var a=i(85854);const s={id:a.mE.regex,name:"Regex",description:"Match when field value is matching regex.",get:t=>{const e=new RegExp(t.value);return(h,l)=>{const u=l.values.get(h);return e.test(u)}},getOptionsDisplayText:t=>`Matches all rows where field value is matching regex: ${t.value}`,isApplicable:()=>!0,getDefaultOptions:()=>({value:".*"})},o=()=>[s]},17130:(S,g,i)=>{i.d(g,{W:()=>a});var a=(s=>(s.append="append",s.reduce="reduce",s.order="order",s.organize="organize",s.rename="rename",s.calculateField="calculateField",s.seriesToColumns="seriesToColumns",s.seriesToRows="seriesToRows",s.merge="merge",s.concatenate="concatenate",s.labelsToFields="labelsToFields",s.filterFields="filterFields",s.filterFieldsByName="filterFieldsByName",s.filterFrames="filterFrames",s.filterByRefId="filterByRefId",s.renameByRegex="renameByRegex",s.filterByValue="filterByValue",s.noop="noop",s.ensureColumns="ensureColumns",s.groupBy="groupBy",s.sortBy="sortBy",s.histogram="histogram",s.configFromData="configFromData",s.rowsToFields="rowsToFields",s.prepareTimeSeries="prepareTimeSeries",s.convertFieldType="convertFieldType",s.fieldLookup="fieldLookup",s.heatmap="heatmap",s.spatial="spatial",s.joinByField="joinByField",s.joinByLabels="joinByLabels",s.extractFields="extractFields",s.groupingToMatrix="groupingToMatrix",s.limit="limit",s.partitionByValues="partitionByValues",s))(a||{})},64140:(S,g,i)=>{i.d(g,{B:()=>s});var a=i(24699);class s{constructor(t){this.init=t,this.ordered=[],this.byId=new Map,this.initialized=!1,this.setInit=e=>{if(this.initialized)throw new Error("Registry already initialized");this.init=e},this.init=t}getIfExists(t){if(this.initialized||this.initialize(),t)return this.byId.get(t)}initialize(){if(this.init)for(const t of this.init())this.register(t);this.sort(),this.initialized=!0}get(t){const e=this.getIfExists(t);if(!e)throw new Error(`"${t}" not found in: ${this.list().map(h=>h.id)}`);return e}selectOptions(t,e){this.initialized||this.initialize();const h={options:[],current:[]},l={};if(t)for(const u of t)l[u]={};for(const u of this.ordered){if(u.excludeFromPicker||e&&!e(u))continue;const y={value:u.id,label:u.name,description:u.description};u.state===a.BV.alpha&&(y.label+=" (alpha)"),h.options.push(y),l[u.id]&&(l[u.id]=y)}return t&&(h.current=Object.values(l)),h}list(t){if(this.initialized||this.initialize(),t){const e=[];for(const h of t){const l=this.getIfExists(h);l&&e.push(l)}return e}return this.ordered}isEmpty(){return this.initialized||this.initialize(),this.ordered.length===0}register(t){if(this.byId.has(t.id))throw new Error("Duplicate Key:"+t.id);if(this.byId.set(t.id,t),this.ordered.push(t),t.aliasIds)for(const e of t.aliasIds)this.byId.has(e)||this.byId.set(e,t);this.initialized&&this.sort()}sort(){}}},19695:(S,g,i)=>{i.d(g,{G:()=>s});var a=i(20411);class s extends a.G{constructor(t){super(),this.buffer=t||[]}get length(){return this.buffer.length}add(t){this.buffer.push(t)}get(t){return this.buffer[t]}set(t,e){this.buffer[t]=e}reverse(){this.buffer.reverse()}toArray(){return this.buffer}toJSON(){return this.buffer}}},12022:(S,g,i)=>{i.d(g,{o:()=>s});var a=i(49319);class s{constructor(t,e){this.source=t,this.order=e}get length(){return this.source.length}get(t){return this.source.get(this.order[t])}toArray(){return(0,a.n)(this)}toJSON(){return(0,a.n)(this)}getOrderArray(){return this.order}}},49319:(S,g,i)=>{i.d(g,{n:()=>a});function a(s){const o=Array(s.length);for(let t=0;t<s.length;t++)o[t]=s.get(t);return o}},91896:(S,g,i)=>{i.d(g,{P:()=>a});function a(s){const o=s||{};if(!o.message){if(typeof s=="string")return{message:s};let t="Query error";o.message?t=o.message:o.data&&o.data.message&&o.data?.message!=="Query data error"?t=o.data.message:o?.data?.message==="Query data error"&&o?.data?.error||o.data&&o.data.error?t=o.data.error:o.status&&(t=`Query error: ${o.status} ${o.statusText}`),o.message=t}return o}},21056:(S,g,i)=>{i.d(g,{R:()=>k});var a=i(40503),s=i(44962),o=i(9489),t=i(63479),e=i(62626),h=i(72274),l=i(46060),u=i(16527),y=i(2101),v=i(49922),w=i(91896),R=i(28625),N=i(14035);const I=b=>n=>new l.y(r=>{let c=[],f=!0;const O=()=>{r.next(c),c=[]},P=b.subscribe({next:M=>{f=M,f&&c.length&&O()}}),L=n.subscribe({next(M){f?c.length?O():r.next([M]):c.push(M)},error(M){r.error(M)},complete(){r.complete()}});return()=>{L.unsubscribe(),P.unsubscribe()}});var z=(b=>(b[b.Error=0]="Error",b[b.NewValuesSameSchema=1]="NewValuesSameSchema",b[b.ChangedSchema=2]="ChangedSchema",b))(z||{});const m=b=>({values:b.reduce((n,{values:r})=>{for(let c=0;c<r.length;c++){n[c]||(n[c]=[]);for(let f=0;f<r[c].length;f++)n[c].push(r[c][f])}return n},[]),type:1}),d=(b,n)=>b.filter(r=>r.type===n);class E{constructor(n){this.deps=n,this.stream=new u.t(1),this.shutdown=()=>{this.stream.complete(),this.liveEventsSubscription.unsubscribe(),this.deps.onShutdown()},this.shutdownIfNoSubscribers=()=>{this.stream.observed||this.shutdown()},this.onError=r=>{console.log("LiveQuery [error]",{err:r},this.deps.channelId),this.stream.next({type:0,error:(0,w.P)(r)}),this.shutdown()},this.onComplete=()=>{console.log("LiveQuery [complete]",this.deps.channelId),this.shutdown()},this.onNext=r=>{if((0,e.RL)(r)){this.process(r.message);return}const c=(0,e.se)(r);if(c&&r.error){this.stream.next({type:0,error:{...(0,w.P)(r.error),message:`Streaming channel error: ${r.error.message}`}});return}c&&(r.state===e.yS.Connected||r.state===e.yS.Pending)&&r.message&&this.process(r.message)},this.process=r=>{this.frameBuffer.push(r).schemaChanged?this.stream.next({type:2}):this.stream.next({type:1,values:this.frameBuffer.getValuesFromLastPacket()})},this.resizeBuffer=r=>{r&&this.frameBuffer.needsResizing(r)&&this.frameBuffer.resize(r)},this.prepareInternalStreamForNewSubscription=r=>{!this.frameBuffer.hasAtLeastOnePacket()&&r.frame&&this.process(r.frame)},this.clearShutdownTimeout=()=>{this.shutdownTimeoutId&&(clearTimeout(this.shutdownTimeoutId),this.shutdownTimeoutId=void 0)},this.get=(r,c)=>{this.clearShutdownTimeout();const f=(0,R._A)(r.buffer);this.resizeBuffer(f),this.prepareInternalStreamForNewSubscription(r);const O=r?.buffer?.action===h.T0.Replace,P=r.filter?.fields,M=P?.length?({name:p})=>P.includes(p):void 0;let W;const U=(p,B)=>(W=M?this.frameBuffer.getMatchingFieldIndexes(M):void 0,O?B?{key:c,state:v.Gu.Error,data:[{type:N.g0.FullFrame,frame:this.frameBuffer.serialize(M,f,{maxLength:0})}],error:B}:p.length?{key:c,state:v.Gu.Streaming,data:[{type:N.g0.FullFrame,frame:this.frameBuffer.serialize(M,f,{maxLength:this.frameBuffer.packetInfo.length})}],error:B}:(console.warn(`expected to find at least one non error message ${p.map(({type:C})=>C)}`),{key:c,state:v.Gu.Streaming,data:[{type:N.g0.FullFrame,frame:this.frameBuffer.serialize(M,f,{maxLength:0})}],error:B}):{key:c,state:B?v.Gu.Error:v.Gu.Streaming,data:[{type:N.g0.FullFrame,frame:this.frameBuffer.serialize(M,f)}],error:B}),G=p=>{const B=p.length?p[p.length-1]:void 0,C=O&&B?B.values:m(p).values,A=W?C.filter((H,T)=>W.includes(T)):C;return{key:c,state:v.Gu.Streaming,data:[{type:N.g0.NewValuesSameSchema,values:A}]}};let V=!0;const Q=this.stream.pipe(I(this.deps.subscriberReadiness),(0,y.U)((p,B)=>{const C=d(p,0),A=C.length?C[C.length-1].error:void 0;if(V)return V=!1,U(p,A);if(C.length)return U(p,A);if(p.some(K=>K.type===2))return U(p,void 0);const T=d(p,1);return T.length!==p.length&&console.warn(`unsupported message type ${p.map(({type:K})=>K)}`),G(T)}));return new l.y(p=>{const B=Q.subscribe({next:C=>{p.next(C)},error:C=>{p.error(C)},complete:()=>{p.complete()}});return()=>{B.unsubscribe(),this.stream.observed||(this.clearShutdownTimeout(),this.shutdownTimeoutId=setTimeout(this.shutdownIfNoSubscribers,this.deps.shutdownDelayInMs))}})},this.frameBuffer=R.Av.empty(n.defaultStreamingFrameOptions),this.liveEventsSubscription=n.liveEventsObservable.subscribe({error:this.onError,complete:this.onComplete,next:this.onNext})}}var F=i(96209);class _{constructor(n,r){this.opened=Date.now(),this.stream=new F.x,this.disconnectIfNoListeners=()=>{this.stream.observers.length===0&&this.disconnect()},this.id=n,this.addr=r,this.currentStatus={type:e.FU.Status,id:n,timestamp:this.opened,state:e.yS.Pending},(0,e.nU)(r)||(this.currentStatus.state=e.yS.Invalid,this.currentStatus.error="invalid channel address")}initalize(){if(this.initalized)throw new Error("Channel already initalized: "+this.id);this.initalized=!0,this.subscription.on("publication",n=>{try{n.data&&(n.data.schema&&(this.lastMessageWithSchema=n.data),this.stream.next({type:e.FU.Message,message:n.data})),this.currentStatus.error&&(this.currentStatus.timestamp=Date.now(),delete this.currentStatus.error,this.sendStatus())}catch(r){console.log("publish error",this.addr,r),this.currentStatus.error=r,this.currentStatus.timestamp=Date.now(),this.sendStatus()}}).on("error",n=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.error=n.error.message,this.sendStatus()}).on("subscribed",n=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.yS.Connected,delete this.currentStatus.error,n.data?.schema&&(this.lastMessageWithSchema=n.data),this.sendStatus(n.data)}).on("unsubscribed",()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.yS.Disconnected,this.sendStatus()}).on("subscribing",()=>{this.currentStatus.timestamp=Date.now(),this.currentStatus.state=e.yS.Connecting,this.sendStatus()}).on("join",n=>{this.stream.next({type:e.FU.Join,user:n.info.user})}).on("leave",n=>{this.stream.next({type:e.FU.Leave,user:n.info.user})})}sendStatus(n){const r={...this.currentStatus};n&&(r.message=n),this.stream.next(r)}getStream(){return new l.y(n=>{const r={...this.currentStatus};this.lastMessageWithSchema?.schema&&(r.message={schema:this.lastMessageWithSchema?.schema}),n.next({...this.currentStatus,message:this.lastMessageWithSchema});const c=this.stream.subscribe(n);return()=>{c.unsubscribe(),this.stream.observers.length===0&&setTimeout(this.disconnectIfNoListeners,250)}})}async getPresence(){return this.subscription?this.subscription.presence().then(n=>({users:Object.keys(n.clients)})):Promise.reject("not subscribed")}disconnect(){this.currentStatus.state=e.yS.Shutdown,this.currentStatus.timestamp=Date.now(),this.subscription&&(this.subscription.unsubscribe(),this.subscription.removeAllListeners(),this.subscription=void 0),this.stream.complete(),this.stream.next({...this.currentStatus}),this.stream.complete(),this.shutdownCallback&&this.shutdownCallback()}shutdownWithError(n){this.currentStatus.error=n,this.sendStatus(),this.disconnect()}}function x(b,n,r){return{id:n,opened:Date.now(),addr:r,getStream:()=>of({type:LiveChannelEventType.Status,id:n,timestamp:Date.now(),state:LiveChannelConnectionState.Invalid,error:b}),disconnect:()=>{}}}const $={maxLength:100,maxDelta:1/0,action:h.T0.Append},j=5e3;class k{constructor(n){this.deps=n,this.open=new Map,this.liveDataStreamByChannelId={},this.onConnect=f=>{this.connectionState.next(!0)},this.onDisconnect=f=>{this.connectionState.next(!1)},this.onServerSideMessage=f=>{console.log("Publication from server-side channel",f)},this.getConnectionState=()=>this.connectionState.asObservable(),this.getStream=f=>this.getChannel(f).getStream(),this.createSubscriptionKey=f=>f.key??`xstr/${D++}`,this.getLiveDataStream=f=>{const O=(0,e.Aj)(f.addr),P=this.liveDataStreamByChannelId[O];if(P)return P;const L=this.getChannel(f.addr);return this.liveDataStreamByChannelId[O]=new E({channelId:O,onShutdown:()=>{delete this.liveDataStreamByChannelId[O]},liveEventsObservable:L.getStream(),subscriberReadiness:this.dataStreamSubscriberReadiness,defaultStreamingFrameOptions:$,shutdownDelayInMs:j}),this.liveDataStreamByChannelId[O]},this.getDataStream=f=>{const O=this.createSubscriptionKey(f);return this.getLiveDataStream(f).get(f,O)},this.getQueryData=async f=>(this.centrifuge.state!==a.State.Connected&&await this.connectionBlocker,this.centrifuge.rpc("grafana.query",f.body)),this.getPresence=f=>this.getChannel(f).getPresence(),this.dataStreamSubscriberReadiness=n.dataStreamSubscriberReadiness.pipe((0,s.B)(),(0,o.O)(!0));let r=`${n.appUrl.replace(/^http/,"ws")}/api/live/ws`;const c=n.grafanaAuthToken;c!==null&&c!==""&&(r+="?auth_token="+c),this.centrifuge=new a.Centrifuge(r,{timeout:3e4}),n.liveEnabled&&n.orgRole!==""&&this.centrifuge.connect(),this.connectionState=new t.X(this.centrifuge.state===a.State.Connected),this.connectionBlocker=new Promise(f=>{if(this.centrifuge.state===a.State.Connected)return f();const O=()=>{f(),this.centrifuge.removeListener("connected",O)};this.centrifuge.addListener("connected",O)}),this.centrifuge.on("connected",this.onConnect),this.centrifuge.on("connecting",this.onDisconnect),this.centrifuge.on("disconnected",this.onDisconnect),this.centrifuge.on("publication",this.onServerSideMessage)}getChannel(n){const r=`${this.deps.orgId}/${n.scope}/${n.namespace}/${n.path}`;let c=this.open.get(r);return c!=null||(c=new _(r,n),c.currentStatus.state===e.yS.Invalid)||(c.shutdownCallback=()=>{this.open.delete(r),this.centrifuge.removeSubscription(this.centrifuge.getSubscription(r))},this.open.set(r,c),this.initChannel(c).catch(f=>{c&&(c.currentStatus.state=e.yS.Invalid,c.shutdownWithError(f)),this.open.delete(r)})),c}async initChannel(n){this.centrifuge.state!==a.State.Connected&&await this.connectionBlocker;const r=this.centrifuge.newSubscription(n.id,{data:n.addr.data});n.subscription=r,n.initalize(),r.subscribe()}}let D=0},88214:(S,g,i)=>{var a=i(79702),s=i(97709);const o={canHandle(t){return t&&t instanceof s.Lv},serialize(t){const e=a.sj(t),{port1:h,port2:l}=new MessageChannel;return a.Jj(e,h),[l,[l]]},deserialize(t){return t.start(),a.Ud(t)}};a.Y6.set("SubscriberHandler",o)},44332:(S,g,i)=>{i.d(g,{W:()=>a});function a(s,o){const t=/\{\{\s*(.+?)\s*\}\}/g;return s.replace(t,(e,h)=>o[h]?o[h]:h)}}}]);

//# sourceMappingURL=5135.8ae3329e034d31b55214.js.map