"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8932],{94883:(I,n,a)=>{a.r(n),a.d(n,{default:()=>C});var e=a(68404),_=a(36635),l=a(93003),E=a(4403),m=a(74955),P=a(25474),c=a(90701),o=a(90723),d=a(79396),u=a(96044),f=a(85385),D=a(61986);const v={createNewFolder:D.W7},i=(0,_.connect)(null,v),M={folderName:""},O={text:"Create a new folder",subTitle:"Folders provide a way to group dashboards and alert rules.",breadcrumbs:[{title:"Dashboards",url:"dashboards"}]};function g({createNewFolder:T}){const[s]=(0,u.K)(),h=r=>{const t=typeof s.folderUid=="string"?s.folderUid:void 0;T(r.folderName,t)},U=r=>f.t.validateNewFolderName(r).then(()=>!0).catch(t=>t.message);return e.createElement(d.T,{navId:"dashboards/browse",pageNav:O},e.createElement(d.T.Contents,null,!l.v.featureToggles.topnav&&e.createElement("h3",null,"New dashboard folder"),e.createElement(E.l,{defaultValues:M,onSubmit:h},({register:r,errors:t})=>e.createElement(e.Fragment,null,e.createElement(m.g,{label:"Folder name",invalid:!!t.folderName,error:t.folderName&&t.folderName.message},e.createElement(P.I,{id:"folder-name-input",...r("folderName",{required:"Folder name is required.",validate:async A=>await U(A)})})),e.createElement(c.Lh,null,e.createElement(o.zx,{type:"submit"},"Create"),e.createElement(o.Qj,{variant:"secondary",href:`${l.v.appSubUrl}/dashboards`},"Cancel"))))))}const C=i(g)}}]);

//# sourceMappingURL=NewDashboardsFolder.1505342ab5626bbf9ed2.js.map