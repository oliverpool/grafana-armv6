"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7707],{"./public/app/features/org/UserInvitePage.tsx":(e,a,r)=>{r.r(a),r.d(a,{UserInvitePage:()=>f,default:()=>E});r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n=r("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=r("./packages/grafana-ui/src/index.ts"),s=r("./public/app/core/config.ts"),t=r("./public/app/types/index.ts"),l=r("./packages/grafana-runtime/src/index.ts"),o=r("./packages/grafana-data/src/index.ts"),c=r("./public/app/core/core.ts");var d,u=r("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=["ref"];const m=[{label:"Viewer",value:t.B5.Viewer},{label:"Editor",value:t.B5.Editor},{label:"Admin",value:t.B5.Admin}],g=async e=>{await(async e=>{try{await(0,l.getBackendSrv)().post("/api/org/invites",e)}catch(e){c.h$.emit(o.AppEvents.alertError,["Failed to send invitation.",e.message])}})(e),l.locationService.push("/org/users/")},h=()=>{const e={name:"",email:"",role:t.B5.Editor,sendEmail:!0};return(0,u.jsx)(i.Form,{defaultValues:e,onSubmit:g,children:e=>{let{register:a,control:r,errors:n}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Field,{invalid:!!n.loginOrEmail,error:n.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:(0,u.jsx)(i.Input,Object.assign({},a("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),(0,u.jsx)(i.Field,{invalid:!!n.name,label:"Name",children:(0,u.jsx)(i.Input,Object.assign({},a("name"),{placeholder:"(optional)"}))}),(0,u.jsx)(i.Field,{invalid:!!n.role,label:"Role",children:(0,u.jsx)(i.InputControl,{render:e=>{let{}=e,a=function(e,a){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e.field,p);return(0,u.jsx)(i.RadioButtonGroup,Object.assign({},a,{options:m}))},control:r,name:"role"})}),(0,u.jsx)(i.Field,{label:"Send invite email",children:(0,u.jsx)(i.Switch,Object.assign({id:"send-email-switch"},a("sendEmail")))}),(0,u.jsxs)(i.HorizontalGroup,{children:[d||(d=(0,u.jsx)(i.Button,{type:"submit",children:"Submit"})),(0,u.jsx)(i.LinkButton,{href:o.locationUtil.assureBaseUrl((0,s.iE)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})}})};var x,b,v=r("./public/app/core/selectors/navModel.ts"),j=r("./public/app/core/components/Page/Page.tsx");const f=e=>{let{navModel:a}=e;return(0,u.jsx)(j.Z,{navModel:a,children:(0,u.jsxs)(j.Z.Contents,{children:[x||(x=(0,u.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),(0,u.jsxs)("div",{className:"p-b-2",children:["Send invitation or add existing Grafana user to the organization.",(0,u.jsxs)("span",{className:"highlight-word",children:[" ",c.Vt.user.orgName]})]}),b||(b=(0,u.jsx)(h,{}))]})})},E=(0,n.connect)((e=>({navModel:(0,v.h)(e.navIndex,"users")})))(f)}}]);
//# sourceMappingURL=UserInvitePage.0cedc4c919aff84ce58c.js.map