"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2613],{15522:(M,f,t)=>{t.r(f),t.d(f,{default:()=>Z});var r=t(52423),a=t(68404),P=t(54291),E=t(24844),y=t(10129),h=t(29516),D=t(79396),T=t(34177),b=t(54294),d=t(81168),C=t(37877),p=t(31460),x=t(77839);const F=function(){const e=(0,h.wW)(N),n=u();return n.hide?null:a.createElement("div",{className:e.footer},a.createElement("a",{className:e.link,href:n.link,target:"_blank",rel:"noreferrer noopener"},n.text," ",a.createElement("img",{className:e.logoImg,alt:"",src:n.logo})))};function W(e){u=e}let u=()=>({hide:!1,text:"powered by Grafana",logo:"public/img/grafana_icon.svg",link:"https://grafana.com/"});const N=e=>({footer:r.css`
    display: flex;
    justify-content: end;
    height: 30px;
    padding: ${e.spacing(0,2,0,1)};
  `,link:r.css`
    display: flex;
    gap: 4px;
    justify-content: end;
    align-items: center;
  `,logoImg:r.css`
    height: 100%;
    padding: ${e.spacing(.25,0,.5,0)};
  `});var S=t(56130),v=t(19349),U=t(87464);const R=({dashboard:e})=>{const n=(0,d.useDispatch)(),m=l=>{n((0,b.YT)(l))};return a.createElement(y.X,{title:e.title,buttonOverflowAlignment:"right"},!e.timepicker.hidden&&a.createElement(C.C,{dashboard:e,onChangeTimeZone:m}))},$=e=>{const{match:n,route:m,location:l}=e,j=(0,d.useDispatch)(),A=(0,T.p)(),g=(0,P.Z)(e),I=(0,h.wW)(G),i=(0,d.useSelector)(o=>o.dashboard),s=i.getModel();return(0,a.useEffect)(()=>{j((0,U.mV)({routeName:m.routeName,fixUrl:!1,accessToken:n.params.accessToken,keybindingSrv:A.keybindings}))},[]),(0,a.useEffect)(()=>{if(g?.location.search!==l.search){const o=g?.queryParams,c=e.queryParams;(c?.from!==o?.from||c?.to!==o?.to)&&!s?.timepicker.hidden&&(0,v.$t)().updateTimeRangeFromUrl(),!o?.refresh&&c?.refresh&&(0,v.$t)().setAutoRefresh(c.refresh)}},[g,l.search,e.queryParams,s?.timepicker.hidden]),s?a.createElement(D.T,{pageNav:{text:s.title},layout:E.Qz.Custom,toolbar:a.createElement(R,{dashboard:s})},i.initError&&a.createElement(p.u,{initError:i.initError}),a.createElement("div",{className:I.gridContainer},a.createElement(S.Z,{dashboard:s,isEditable:!1,viewPanel:null,editPanel:null})),a.createElement(F,null)):a.createElement(x.B,{initPhase:i.initPhase})},G=e=>({gridContainer:(0,r.css)({flex:1,padding:e.spacing(0,2,2,2),overflow:"auto"})}),Z=$}}]);

//# sourceMappingURL=PublicDashboardPage.1ad926b1f93c14d13fa7.js.map