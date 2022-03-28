"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8612],{"./public/app/core/components/SharedPreferences/SharedPreferences.tsx":(e,s,t)=>{t.d(s,{v:()=>f,Z:()=>j});var a,n,r,i,o=t("./.yarn/__virtual__/@lingui-react-virtual-edf7967b4d/3/opt/drone/yarncache/@lingui-react-npm-3.13.0-279ef69307-ca97bd3e80.zip/node_modules/@lingui/react/esm/index.js"),d=t("../../opt/drone/yarncache/@lingui-core-npm-3.13.0-aa863e2651-6108eb43fa.zip/node_modules/@lingui/core/esm/index.js"),l=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),c=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),m=t("./packages/grafana-ui/src/index.ts"),u=t("./packages/grafana-e2e-selectors/src/index.ts"),h=t("./public/app/core/services/backend_srv.ts"),p=t("./public/app/core/services/PreferencesService.ts"),b=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function g(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const x=[{value:"",label:d.ag._({id:"shared-preferences.theme.default-label",message:"Default"})},{value:"dark",label:d.ag._({id:"shared-preferences.theme.dark-label",message:"Dark"})},{value:"light",label:d.ag._({id:"shared-preferences.theme.light-label",message:"Light"})}];class f extends l.PureComponent{constructor(e){super(e),g(this,"service",void 0),g(this,"onSubmitForm",(async()=>{const{homeDashboardId:e,theme:s,timezone:t,weekStart:a}=this.state;await this.service.update({homeDashboardId:e,theme:s,timezone:t,weekStart:a}),window.location.reload()})),g(this,"onThemeChanged",(e=>{this.setState({theme:e})})),g(this,"onTimeZoneChanged",(e=>{e&&this.setState({timezone:e})})),g(this,"onWeekStartChanged",(e=>{this.setState({weekStart:e})})),g(this,"onHomeDashboardChanged",(e=>{this.setState({homeDashboardId:e})})),g(this,"getFullDashName",(e=>void 0===e.folderTitle||""===e.folderTitle?e.title:e.folderTitle+" / "+e.title)),this.service=new p.y(e.resourceUri),this.state={homeDashboardId:0,theme:"",timezone:"",weekStart:"",dashboards:[]}}async componentDidMount(){const e=await this.service.load(),s=await h.ae.search({starred:!0});if(e.homeDashboardId>0&&!s.find((s=>s.id===e.homeDashboardId))){const t=await h.ae.search({dashboardIds:[e.homeDashboardId]});t&&t.length>0&&s.push(t[0])}this.setState({homeDashboardId:e.homeDashboardId,theme:e.theme,timezone:e.timezone,weekStart:e.weekStart,dashboards:[{id:0,title:"Default",tags:[],type:"",uid:"",uri:"",url:"",folderId:0,folderTitle:"",folderUid:"",folderUrl:"",isStarred:!1,slug:"",items:[]},...s]})}render(){const{theme:e,timezone:s,weekStart:t,homeDashboardId:l,dashboards:c}=this.state,{disabled:h}=this.props,p=v(),g=a||(a=(0,b.jsx)(m.Tooltip,{content:(0,b.jsx)(o.cC,{id:"shared-preferences.fields.home-dashboard-tooltip"}),children:(0,b.jsx)(m.Icon,{name:"info-circle"})}));return(0,b.jsx)(m.Form,{onSubmit:this.onSubmitForm,children:()=>{var a;return(0,b.jsxs)(m.FieldSet,{label:n||(n=(0,b.jsx)(o.cC,{id:"shared-preferences.title"})),disabled:h,children:[(0,b.jsx)(m.Field,{label:d.ag._({id:"shared-preferences.fields.theme-label",message:"UI Theme"}),children:(0,b.jsx)(m.RadioButtonGroup,{options:x,value:null===(a=x.find((s=>s.value===e)))||void 0===a?void 0:a.value,onChange:this.onThemeChanged})}),(0,b.jsx)(m.Field,{label:(0,b.jsxs)(m.Label,{htmlFor:"home-dashboard-select",children:[(0,b.jsx)("span",{className:p.labelText,children:r||(r=(0,b.jsx)(o.cC,{id:"shared-preferences.fields.home-dashboard-label"}))}),g]}),"data-testid":"User preferences home dashboard drop down",children:(0,b.jsx)(m.Select,{menuShouldPortal:!0,value:c.find((e=>e.id===l)),getOptionValue:e=>e.id,getOptionLabel:this.getFullDashName,onChange:e=>this.onHomeDashboardChanged(e.id),options:c,placeholder:d.ag._({id:"shared-preferences.fields.home-dashboard-placeholder",message:"Choose default dashboard"}),inputId:"home-dashboard-select"})}),(0,b.jsx)(m.Field,{label:d.ag._({id:"shared-dashboard.fields.timezone-label",message:"Timezone"}),"data-testid":u.wl.components.TimeZonePicker.containerV2,children:(0,b.jsx)(m.TimeZonePicker,{includeInternal:!0,value:s,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,b.jsx)(m.Field,{label:d.ag._({id:"shared-preferences.fields.week-start-label",message:"Week start"}),"data-testid":u.wl.components.WeekStartPicker.containerV2,children:(0,b.jsx)(m.WeekStartPicker,{value:t,onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),(0,b.jsx)("div",{className:"gf-form-button-row",children:(0,b.jsx)(m.Button,{variant:"primary","data-testid":u.wl.components.UserProfile.preferencesSaveButton,children:i||(i=(0,b.jsx)(o.cC,{id:"common.save"}))})})]})}})}}const j=f,v=(0,m.stylesFactory)((()=>({labelText:c.css`
      margin-right: 6px;
    `})))},"./public/app/features/teams/TeamPages.tsx":(e,s,t)=>{t.r(s),t.d(s,{TeamPages:()=>We,default:()=>Ze});var a=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),r=t("../../opt/drone/yarncache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js"),i=t("./public/app/core/config.ts"),o=t("./public/app/core/components/Page/Page.tsx"),d=t("./public/app/core/components/Animations/SlideDown.tsx"),l=t("./public/app/core/components/Select/UserPicker.tsx"),c=t("./public/app/core/components/TagFilter/TagBadge.tsx"),m=t("./public/app/features/teams/state/actions.ts"),u=t("./public/app/features/teams/state/selectors.ts"),h=t("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=e=>{let{featureToggle:s,children:t}=e;return!0===s?(0,h.jsx)(h.Fragment,{children:t}):null};var b,g=t("./public/app/core/services/context_srv.ts"),x=t("./packages/grafana-ui/src/index.ts"),f=t("./public/app/types/index.ts");const{Select:j}=x.LegacyForms,v={removeTeamMember:m.zT,updateTeamMember:m.zZ},y=(0,n.connect)(null,v);class I extends a.PureComponent{constructor(e){var s,t,a;super(e),a=(e,s)=>{const t=e.value,a=Object.assign({},s,{permission:t});this.props.updateTeamMember(a)},(t="onPermissionChange")in(s=this)?Object.defineProperty(s,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):s[t]=a,this.renderLabels=this.renderLabels.bind(this),this.renderPermissions=this.renderPermissions.bind(this)}onRemoveMember(e){this.props.removeTeamMember(e.userId)}renderPermissions(e){const{editorsCanAdmin:s,signedInUserIsTeamAdmin:t}=this.props,a=f.eL.find((s=>s.value===e.permission));return(0,h.jsx)(p,{featureToggle:s,children:(0,h.jsx)("td",{className:"width-5 team-permissions",children:(0,h.jsxs)("div",{className:"gf-form",children:[t&&(0,h.jsx)(j,{menuShouldPortal:!0,isSearchable:!1,options:f.eL,onChange:s=>this.onPermissionChange(s,e),className:"gf-form-select-box__control--menu-right",value:a}),!t&&(0,h.jsx)("span",{children:a.label})]})})})}renderLabels(e){return e?(0,h.jsx)("td",{children:e.map((e=>(0,h.jsx)(c.e,{label:e,removeIcon:!1,count:0,onClick:()=>{}},e)))}):b||(b=(0,h.jsx)("td",{}))}render(){const{member:e,syncEnabled:s,signedInUserIsTeamAdmin:t}=this.props;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"width-4 text-center",children:(0,h.jsx)("img",{"aria-label":`Avatar for team member "${e.name}"`,className:"filter-table__avatar",src:e.avatarUrl})}),(0,h.jsx)("td",{children:e.login}),(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{children:e.name}),this.renderPermissions(e),s&&this.renderLabels(e.labels),(0,h.jsx)("td",{className:"text-right",children:(0,h.jsx)(x.DeleteButton,{"aria-label":"Remove team member",size:"sm",disabled:!t,onConfirm:()=>this.onRemoveMember(e)})})]},e.userId)}}const T=y(I);var S,w,C,P,A,k,_,N,L=t("./public/app/features/teams/state/reducers.ts"),M=t("./public/app/core/components/CloseButton/CloseButton.tsx");function R(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const U={addTeamMember:m.Lt,setSearchMemberQuery:L.UD},$=(0,n.connect)((function(e){return{searchMemberQuery:(0,u.xc)(e.team),editorsCanAdmin:i.vc.editorsCanAdmin,signedInUser:g.Vt.user}}),U);class B extends a.PureComponent{constructor(e){super(e),R(this,"onSearchQueryChange",(e=>{this.props.setSearchMemberQuery(e)})),R(this,"onToggleAdding",(()=>{this.setState({isAdding:!this.state.isAdding})})),R(this,"onUserSelected",(e=>{this.setState({newTeamMember:e})})),R(this,"onAddUserToTeam",(async()=>{this.props.addTeamMember(this.state.newTeamMember.id),this.setState({newTeamMember:null})})),this.state={isAdding:!1,newTeamMember:null}}renderLabels(e){return e?(0,h.jsx)("td",{children:e.map((e=>(0,h.jsx)(c.e,{label:e,removeIcon:!1,count:0,onClick:()=>{}},e)))}):S||(S=(0,h.jsx)("td",{}))}render(){const{isAdding:e}=this.state,{searchMemberQuery:s,members:t,syncEnabled:a,editorsCanAdmin:n,signedInUser:r}=this.props,i=(0,u.vt)({members:t,editorsCanAdmin:n,signedInUser:r});return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"page-action-bar",children:[(0,h.jsx)("div",{className:"gf-form gf-form--grow",children:(0,h.jsx)(x.FilterInput,{placeholder:"Search members",value:s,onChange:this.onSearchQueryChange})}),(0,h.jsx)(x.Button,{className:"pull-right",onClick:this.onToggleAdding,disabled:e||!i,children:"Add member"})]}),(0,h.jsx)(d.s,{in:e,children:(0,h.jsxs)("div",{className:"cta-form",children:[(0,h.jsx)(M.P,{"aria-label":"Close 'Add team member' dialogue",onClick:this.onToggleAdding}),w||(w=(0,h.jsx)(x.Label,{htmlFor:"user-picker",children:"Add team member"})),(0,h.jsxs)("div",{className:"gf-form-inline",children:[(0,h.jsx)(l.f,{inputId:"user-picker",onSelected:this.onUserSelected,className:"min-width-30"}),this.state.newTeamMember&&(0,h.jsx)(x.Button,{type:"submit",onClick:this.onAddUserToTeam,children:"Add to team"})]})]})}),(0,h.jsx)("div",{className:"admin-list-table",children:(0,h.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[C||(C=(0,h.jsx)("th",{})),P||(P=(0,h.jsx)("th",{children:"Login"})),A||(A=(0,h.jsx)("th",{children:"Email"})),k||(k=(0,h.jsx)("th",{children:"Name"})),(0,h.jsx)(p,{featureToggle:n,children:_||(_=(0,h.jsx)("th",{children:"Permission"}))}),a&&(N||(N=(0,h.jsx)("th",{}))),(0,h.jsx)("th",{style:{width:"1%"}})]})}),(0,h.jsx)("tbody",{children:t&&t.map((e=>(0,h.jsx)(T,{member:e,syncEnabled:a,editorsCanAdmin:n,signedInUserIsTeamAdmin:i},e.userId)))})]})})]})}}const z=$(B);var G=t("./public/app/core/services/backend_srv.ts"),D=t("./public/app/core/components/Select/TeamPicker.tsx"),E=t("./public/app/types/acl.ts");let F;var V,O;!function(e){e.Team="Team",e.User="User",e.BuiltInRole="builtInRole"}(F||(F={}));const W=e=>{let{title:s="Add Permission For",permissions:t,assignments:n,canListUsers:r,onAdd:i,onCancel:o}=e;const[d,c]=(0,a.useState)(F.User),[m,u]=(0,a.useState)(0),[p,b]=(0,a.useState)(0),[g,f]=(0,a.useState)(""),[j,v]=(0,a.useState)(""),y=(0,a.useMemo)((()=>{const e=[];return n.users&&r&&e.push({value:F.User,label:"User",isDisabled:!1}),n.teams&&e.push({value:F.Team,label:"Team"}),n.builtInRoles&&e.push({value:F.BuiltInRole,label:"Role"}),e}),[n,r]);(0,a.useEffect)((()=>{t.length>0&&v(t[0])}),[t]);return(0,h.jsxs)("div",{className:"cta-form","aria-label":"Permissions slider",children:[(0,h.jsx)(M.P,{onClick:o}),(0,h.jsx)("h5",{children:s}),d===F.User&&!r&&(V||(V=(0,h.jsx)(x.Alert,{severity:"info",title:"Missing permission",children:"You are missing the permission to list users (org.users:read). Please contact your administrator to get this resolved."}))),(0,h.jsx)(x.Form,{name:"addPermission",maxWidth:"none",onSubmit:()=>i({userId:p,teamId:m,builtInRole:g,permission:j,target:d}),children:()=>(0,h.jsxs)(x.HorizontalGroup,{children:[(0,h.jsx)(x.Select,{"aria-label":"Role to add new permission to",value:d,options:y,onChange:e=>c(e.value),disabled:0===y.length,menuShouldPortal:!0}),d===F.User&&r&&(0,h.jsx)(l.f,{onSelected:e=>b(e.value||0),className:"width-20"}),d===F.User&&!r&&(O||(O=(0,h.jsx)(x.Input,{disabled:!0,className:"width-20"}))),d===F.Team&&(0,h.jsx)(D.c,{onSelected:e=>{var s;return u((null===(s=e.value)||void 0===s?void 0:s.id)||0)},className:"width-20"}),d===F.BuiltInRole&&(0,h.jsx)(x.Select,{"aria-label":"Built-in role picker",menuShouldPortal:!0,options:Object.values(E.B5).map((e=>({value:e,label:e}))),onChange:e=>f(e.value||""),width:40}),(0,h.jsx)(x.Select,{"aria-label":"Permission Level",width:25,menuShouldPortal:!0,value:t.find((e=>e===j)),options:t.map((e=>({label:e,value:e}))),onChange:e=>v(e.value||"")}),(0,h.jsx)(x.Button,{type:"submit",disabled:!(d===F.Team&&m>0||d===F.User&&p>0||F.BuiltInRole&&E.B5.hasOwnProperty(g)),children:"Save"})]})})]})};var Z,Q,H,Y;const q=e=>{let{item:s,permissionLevels:t,canSet:a,onRemove:n,onChange:r}=e;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{style:{width:"1%"},children:J(s)}),(0,h.jsx)("td",{style:{width:"90%"},children:K(s)}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{className:"gf-form",children:(0,h.jsx)(x.Select,{className:"width-20",menuShouldPortal:!0,disabled:!a||!s.isManaged,onChange:e=>r(s,e.value),value:t.find((e=>e===s.permission)),options:t.map((e=>({value:e,label:e})))})})}),(0,h.jsx)("td",{children:(0,h.jsx)(x.Tooltip,{content:ee(s),children:Z||(Z=(0,h.jsx)(x.Icon,{name:"info-circle"}))})}),(0,h.jsx)("td",{children:s.isManaged?(0,h.jsx)(x.Button,{size:"sm",icon:"times",variant:"destructive",disabled:!a,onClick:()=>n(s),"aria-label":`Remove permission for ${X(s)}`}):Q||(Q=(0,h.jsx)(x.Tooltip,{content:"Provisioned permission",children:(0,h.jsx)(x.Button,{size:"sm",icon:"lock"})}))})]})},J=e=>e.teamId?(0,h.jsx)("img",{className:"filter-table__avatar",src:e.teamAvatarUrl,alt:`Avatar for team ${e.teamId}`}):e.userId?(0,h.jsx)("img",{className:"filter-table__avatar",src:e.userAvatarUrl,alt:`Avatar for user ${e.userId}`}):H||(H=(0,h.jsx)(x.Icon,{size:"xl",name:"shield"})),X=e=>e.userId?e.userLogin:e.teamId?e.team:e.builtInRole,K=e=>e.userId?(0,h.jsxs)("span",{children:[e.userLogin," "]},"name"):e.teamId?(0,h.jsxs)("span",{children:[e.team," "]},"name"):e.builtInRole?(0,h.jsxs)("span",{children:[e.builtInRole," "]},"name"):Y||(Y=(0,h.jsx)("span",{},"name")),ee=e=>`Actions: ${[...new Set(e.actions)].sort().join(" ")}`;var se;const te=e=>{let{title:s,items:t,permissionLevels:a,canSet:n,onRemove:r,onChange:i}=e;return 0===t.length?null:(0,h.jsx)("div",{children:(0,h.jsxs)("table",{className:"filter-table gf-form-group",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{style:{width:"1%"}}),(0,h.jsx)("th",{children:s}),se||(se=(0,h.jsx)("th",{children:"Permission"})),(0,h.jsx)("th",{style:{width:"1%"}}),(0,h.jsx)("th",{style:{width:"1%"}})]})}),(0,h.jsx)("tbody",{children:t.map(((e,s)=>(0,h.jsx)(q,{item:e,onRemove:r,onChange:i,canSet:n,permissionLevels:a},`${s}-${e.userId}`)))})]})})};var ae;const ne={permissions:[],assignments:{teams:!1,users:!1,builtInRoles:!1}},re=e=>{let{title:s="Permissions",buttonLabel:t="Add a permission",resource:n,resourceId:i,canListUsers:o,canSetPermissions:l,addPermissionTitle:c}=e;const[m,u]=(0,a.useState)(!1),[p,b]=(0,a.useState)([]),[g,f]=(0,a.useState)(ne),j=(0,a.useCallback)((()=>oe(n,i).then((e=>b(e)))),[n,i]);(0,a.useEffect)((()=>{ie(n).then((e=>(f(e),j())))}),[n,i,j]);const v=e=>{let s=null;e.target===F.User?s=de(n,i,e.userId,e.permission):e.target===F.Team?s=le(n,i,e.teamId,e.permission):e.target===F.BuiltInRole&&(s=ce(n,i,e.builtInRole,e.permission)),null!==s&&s.then(j)},y=e=>{let s=null;e.userId?s=de(n,i,e.userId,""):e.teamId?s=le(n,i,e.teamId,""):e.builtInRole&&(s=ce(n,i,e.builtInRole,"")),null!==s&&s.then(j)},I=(e,s)=>{e.permission!==s&&(e.userId?v({permission:s,userId:e.userId,target:F.User}):e.teamId?v({permission:s,teamId:e.teamId,target:F.Team}):e.builtInRole&&v({permission:s,builtInRole:e.builtInRole,target:F.BuiltInRole}))},T=(0,a.useMemo)((()=>(0,r.sortBy)(p.filter((e=>e.teamId)),["team"])),[p]),S=(0,a.useMemo)((()=>(0,r.sortBy)(p.filter((e=>e.userId)),["userLogin"])),[p]),w=(0,a.useMemo)((()=>(0,r.sortBy)(p.filter((e=>e.builtInRole)),["builtInRole"])),[p]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"page-action-bar",children:[(0,h.jsx)("h3",{className:"page-sub-heading",children:s}),ae||(ae=(0,h.jsx)("div",{className:"page-action-bar__spacer"})),l&&(0,h.jsx)(x.Button,{variant:"primary",onClick:()=>u(!0),children:t},"add-permission")]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(d.s,{in:m,children:(0,h.jsx)(W,{title:c,onAdd:v,permissions:g.permissions,assignments:g.assignments,canListUsers:o,onCancel:()=>u(!1)})}),(0,h.jsx)(te,{title:"Role",items:w,permissionLevels:g.permissions,onChange:I,onRemove:y,canSet:l}),(0,h.jsx)(te,{title:"User",items:S,permissionLevels:g.permissions,onChange:I,onRemove:y,canSet:l}),(0,h.jsx)(te,{title:"Team",items:T,permissionLevels:g.permissions,onChange:I,onRemove:y,canSet:l})]})]})},ie=async e=>{try{return await(0,G.i)().get(`/api/access-control/${e}/description`)}catch(e){return console.error("failed to load resource description: ",e),ne}},oe=(e,s)=>(0,G.i)().get(`/api/access-control/${e}/${s}`),de=(e,s,t,a)=>me(e,s,"users",t,a),le=(e,s,t,a)=>me(e,s,"teams",t,a),ce=(e,s,t,a)=>me(e,s,"builtInRoles",t,a),me=(e,s,t,a,n)=>(0,G.i)().post(`/api/access-control/${e}/${s}/${t}/${a}`,{permission:n}),ue=e=>{const s=g.Vt.hasPermission(f.bW.OrgUsersRead),t=g.Vt.hasPermissionInMetadata(f.bW.ActionTeamsPermissionsWrite,e.team);return(0,h.jsx)(re,{title:"Members",addPermissionTitle:"Add member",buttonLabel:"Add member",resource:"teams",resourceId:e.team.id,canListUsers:s,canSetPermissions:t})};var he=t("./public/app/core/components/SharedPreferences/SharedPreferences.tsx"),pe=t("./public/app/core/core.ts");const be={updateTeam:m.fs},ge=(0,n.connect)(null,be)((e=>{let{team:s,updateTeam:t}=e;const a=pe.Vt.hasPermissionInMetadata(f.bW.ActionTeamsWrite,s);return(0,h.jsxs)(x.VerticalGroup,{children:[(0,h.jsx)(x.FieldSet,{label:"Team settings",children:(0,h.jsx)(x.Form,{defaultValues:Object.assign({},s),onSubmit:e=>{t(e.name,e.email)},disabled:!a,children:e=>{let{register:s}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Field,{label:"Name",disabled:!a,children:(0,h.jsx)(x.Input,Object.assign({},s("name",{required:!0}),{id:"name-input"}))}),(0,h.jsx)(x.Field,{label:"Email",description:"This is optional and is primarily used to set the team profile avatar (via gravatar service).",disabled:!a,children:(0,h.jsx)(x.Input,Object.assign({},s("email"),{placeholder:"team@email.com",type:"email",id:"email-input"}))}),(0,h.jsx)(x.Button,{type:"submit",disabled:!a,children:"Update"})]})}})}),(0,h.jsx)(he.v,{resourceUri:`teams/${s.id}`,disabled:!a})]})}));var xe,fe,je,ve,ye,Ie,Te,Se=t("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");function we(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const{Input:Ce}=x.LegacyForms;function Pe(e){return{groups:(0,u.JB)(e.team)}}const Ae={loadTeamGroups:m.j_,addTeamGroup:m.A_,removeTeamGroup:m.P5},ke=((0,n.connect)(Pe,Ae),"Sync LDAP or OAuth groups with your Grafana teams.");class _e extends a.PureComponent{constructor(e){super(e),we(this,"onToggleAdding",(()=>{this.setState({isAdding:!this.state.isAdding})})),we(this,"onNewGroupIdChanged",(e=>{this.setState({newGroupId:e.target.value})})),we(this,"onAddGroup",(e=>{e.preventDefault(),this.props.addTeamGroup(this.state.newGroupId),this.setState({isAdding:!1,newGroupId:""})})),we(this,"onRemoveGroup",(e=>{this.props.removeTeamGroup(e.groupId)})),this.state={isAdding:!1,newGroupId:""}}componentDidMount(){this.fetchTeamGroups()}async fetchTeamGroups(){await this.props.loadTeamGroups()}isNewGroupValid(){return this.state.newGroupId.length>1}renderGroup(e){const{isReadOnly:s}=this.props;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.groupId}),(0,h.jsx)("td",{style:{width:"1%"},children:(0,h.jsx)(x.Button,{size:"sm",variant:"destructive",onClick:()=>this.onRemoveGroup(e),disabled:s,children:xe||(xe=(0,h.jsx)(x.Icon,{name:"times"}))})})]},e.groupId)}render(){const{isAdding:e,newGroupId:s}=this.state,{groups:t,isReadOnly:a}=this.props;return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:"page-action-bar",children:[fe||(fe=(0,h.jsx)("h3",{className:"page-sub-heading",children:"External group sync"})),je||(je=(0,h.jsx)(x.Tooltip,{placement:"auto",content:ke,children:(0,h.jsx)(x.Icon,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})})),ve||(ve=(0,h.jsx)("div",{className:"page-action-bar__spacer"})),t.length>0&&(0,h.jsxs)(x.Button,{className:"pull-right",onClick:this.onToggleAdding,disabled:a,children:[ye||(ye=(0,h.jsx)(x.Icon,{name:"plus"}))," Add group"]})]}),(0,h.jsx)(d.s,{in:e,children:(0,h.jsxs)("div",{className:"cta-form",children:[(0,h.jsx)(M.P,{onClick:this.onToggleAdding}),Ie||(Ie=(0,h.jsx)("h5",{children:"Add External Group"})),(0,h.jsxs)("form",{className:"gf-form-inline",onSubmit:this.onAddGroup,children:[(0,h.jsx)("div",{className:"gf-form",children:(0,h.jsx)(Ce,{type:"text",className:"gf-form-input width-30",value:s,onChange:this.onNewGroupIdChanged,placeholder:"cn=ops,ou=groups,dc=grafana,dc=org",disabled:a})}),(0,h.jsx)("div",{className:"gf-form",children:(0,h.jsx)(x.Button,{type:"submit",disabled:a||!this.isNewGroupValid(),children:"Add group"})})]})]})}),0===t.length&&!e&&(0,h.jsx)(Se.Z,{onClick:this.onToggleAdding,buttonIcon:"users-alt",title:"There are no external groups to sync with",buttonTitle:"Add Group",proTip:ke,proTipLinkTitle:"Learn more",proTipLink:"http://docs.grafana.org/auth/enhanced_ldap/",proTipTarget:"_blank",buttonDisabled:a}),t.length>0&&(0,h.jsx)("div",{className:"admin-list-table",children:(0,h.jsxs)("table",{className:"filter-table filter-table--hover form-inline",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[Te||(Te=(0,h.jsx)("th",{children:"External Group ID"})),(0,h.jsx)("th",{style:{width:"1%"}})]})}),(0,h.jsx)("tbody",{children:t.map((e=>this.renderGroup(e)))})]})})]})}}const Ne=(0,n.connect)(Pe,Ae)(_e);var Le,Me=t("./public/app/features/teams/state/navModel.ts"),Re=t("./public/app/core/selectors/navModel.ts"),Ue=t("./packages/grafana-runtime/src/index.ts"),$e=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/3/opt/drone/yarncache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const Be=["text","className","children","secondaryAction","size"];const ze=e=>{let{text:s,className:t,children:a,secondaryAction:n,size:r="md"}=e,i=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,Be);const o=(0,x.useStyles2)((e=>Ge(e,r)));return(0,h.jsxs)("div",Object.assign({className:(0,$e.cx)(o.box,t)},i,{children:[(0,h.jsx)(x.Icon,{name:"rocket",className:o.icon}),(0,h.jsxs)("div",{children:[Le||(Le=(0,h.jsx)("h4",{children:"You’ve found a Pro feature!"})),s&&(0,h.jsx)("p",{className:o.text,children:s}),a,(0,h.jsx)(x.LinkButton,{variant:"primary",size:r,className:o.button,href:"https://grafana.com/profile/org/subscription",target:"__blank",rel:"noopener noreferrer",children:"Upgrade to Pro"}),n&&(0,h.jsx)(x.LinkButton,{variant:"link",size:r,className:(0,$e.cx)(o.button,o.buttonSecondary),href:n.url,target:"__blank",rel:"noopener noreferrer",children:n.text})]})]}))},Ge=(e,s)=>{const t=e.shape.borderRadius(2),a="md"===s?"body":"bodySmall";return{box:$e.css`
      display: flex;
      position: relative;
      border-radius: ${t};
      background: ${e.colors.primary.transparent};
      border: 1px solid ${e.colors.primary.shade};
      padding: ${e.spacing(2)};
      color: ${e.colors.primary.text};
      font-size: ${e.typography[a].fontSize};
      text-align: left;
      line-height: 16px;
    `,text:$e.css`
      margin-bottom: 0;
      padding: ${e.spacing(2,0)};
      line-height: 1.5;
    `,button:$e.css`
      margin-top: ${e.spacing(2)};

      &:first-of-type {
        margin-right: ${e.spacing(1)};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${e.colors.text.primary};
        outline: 2px solid ${e.colors.primary.main};
      }
    `,buttonSecondary:$e.css`
      color: ${e.colors.text.secondary};
    `,icon:$e.css`
      margin: ${e.spacing(.5,1,.5,.5)};
    `}};var De,Ee;function Fe(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}!function(e){e.Members="members",e.Settings="settings",e.GroupSync="groupsync"}(Ee||(Ee={}));const Ve={loadTeam:m.QX,loadTeamMembers:m.ei},Oe=(0,n.connect)((function(e,s){var t;const a=parseInt(s.match.params.id,10),n=(0,u.VP)(e.team,a);let r="members";g.Vt.accessControlEnabled()&&(n&&g.Vt.hasPermissionInMetadata(f.bW.ActionTeamsPermissionsRead,n)||(r="settings"));const o=null!==(t=s.match.params.page)&&void 0!==t?t:r,d=(0,Me.o)(o);return{navModel:(0,Re.h)(e.navIndex,`team-${o}-${a}`,d),teamId:a,pageName:o,team:n,members:(0,u.YY)(e.team),editorsCanAdmin:i.ZP.editorsCanAdmin,signedInUser:g.Vt.user}}),Ve);class We extends a.PureComponent{constructor(e){super(e),Fe(this,"textsAreEqual",((e,s)=>!e&&!s||!(!e||!s)&&e.toLocaleLowerCase()===s.toLocaleLowerCase())),Fe(this,"hideTabsFromNonTeamAdmin",((e,s)=>(g.Vt.accessControlEnabled()||!s&&e.main&&e.main.children&&e.main.children.filter((e=>!this.textsAreEqual(e.text,Ee.Members))).map((e=>{e.hideFromTabs=!0})),e))),this.state={isLoading:!1,isSyncEnabled:(0,Ue.featureEnabled)("teamsync")}}async componentDidMount(){await this.fetchTeam();const{isSyncEnabled:e}=this.state;this.getCurrentPage()===Ee.GroupSync&&!e&&i.ZP.featureToggles.featureHighlights&&(0,Ue.reportExperimentView)("feature-highlights-team-sync","test","")}async fetchTeam(){const{loadTeam:e,teamId:s}=this.props;this.setState({isLoading:!0});const t=await e(s);return g.Vt.accessControlEnabled()||await this.props.loadTeamMembers(),this.setState({isLoading:!1}),t}getCurrentPage(){const e=["members","settings","groupsync"],s=this.props.pageName;return(0,r.includes)(e,s)?s:e[0]}renderPage(e){const{isSyncEnabled:s}=this.state,{members:t,team:a}=this.props,n=this.getCurrentPage(),r=g.Vt.hasAccessInMetadata(f.bW.ActionTeamsRead,a,e),o=g.Vt.hasAccessInMetadata(f.bW.ActionTeamsPermissionsRead,a,e),d=g.Vt.hasAccessInMetadata(f.bW.ActionTeamsPermissionsWrite,a,e);switch(n){case Ee.Members:return g.Vt.accessControlEnabled()?(0,h.jsx)(ue,{team:a}):(0,h.jsx)(z,{syncEnabled:s,members:t});case Ee.Settings:return r&&(0,h.jsx)(ge,{team:a});case Ee.GroupSync:if(s){if(o)return(0,h.jsx)(Ne,{isReadOnly:!d})}else if(i.ZP.featureToggles.featureHighlights)return De||(De=(0,h.jsx)(ze,{text:"Team Sync immediately updates each user's Grafana teams and permissions based on their LDAP or Oauth group membership, instead of updating when users sign in."}))}return null}render(){const{team:e,navModel:s,members:t,editorsCanAdmin:a,signedInUser:n}=this.props,r=(0,u.vt)({members:t,editorsCanAdmin:a,signedInUser:n});return(0,h.jsx)(o.Z,{navModel:this.hideTabsFromNonTeamAdmin(s,r),children:(0,h.jsx)(o.Z.Contents,{isLoading:this.state.isLoading,children:e&&0!==Object.keys(e).length&&this.renderPage(r)})})}}const Ze=Oe(We)},"./public/app/features/teams/state/actions.ts":(e,s,t)=>{t.d(s,{jI:()=>c,QX:()=>m,ei:()=>u,Lt:()=>h,zT:()=>p,fs:()=>b,j_:()=>g,A_:()=>x,P5:()=>f,fC:()=>j,zZ:()=>v});var a=t("./packages/grafana-runtime/src/index.ts"),n=t("./public/app/types/index.ts"),r=t("./public/app/core/actions/index.ts"),i=t("./public/app/features/teams/state/navModel.ts"),o=t("./public/app/features/teams/state/reducers.ts"),d=t("./public/app/core/utils/accessControl.ts"),l=t("./public/app/core/core.ts");function c(){return async e=>{if(!l.Vt.hasPermission(n.bW.ActionTeamsRead))return void e((0,o.PL)([]));const s=await(0,a.getBackendSrv)().get("/api/teams/search",(0,d.y)({perpage:1e3,page:1}));e((0,o.PL)(s.teams))}}function m(e){return async s=>{const t=await(0,a.getBackendSrv)().get(`/api/teams/${e}`,(0,d.y)());s((0,o.y$)(t)),s((0,r.RL)((0,i.B)(t)))}}function u(){return async(e,s)=>{const t=s().team.team,n=await(0,a.getBackendSrv)().get(`/api/teams/${t.id}/members`);e((0,o.n2)(n))}}function h(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().post(`/api/teams/${n.id}/members`,{userId:e}),s(u())}}function p(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().delete(`/api/teams/${n.id}/members/${e}`),s(u())}}function b(e,s){return async(t,n)=>{const r=n().team.team;await(0,a.getBackendSrv)().put(`/api/teams/${r.id}`,{name:e,email:s}),t(m(r.id))}}function g(){return async(e,s)=>{const t=s().team.team,n=await(0,a.getBackendSrv)().get(`/api/teams/${t.id}/groups`);e((0,o.iI)(n))}}function x(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().post(`/api/teams/${n.id}/groups`,{groupId:e}),s(g())}}function f(e){return async(s,t)=>{const n=t().team.team;await(0,a.getBackendSrv)().delete(`/api/teams/${n.id}/groups/${encodeURIComponent(e)}`),s(g())}}function j(e){return async s=>{await(0,a.getBackendSrv)().delete(`/api/teams/${e}`),await l.Vt.fetchUserPermissions(),s(c())}}function v(e){return async s=>{await(0,a.getBackendSrv)().put(`/api/teams/${e.teamId}/members/${e.userId}`,{permission:e.permission}),s(u())}}},"./public/app/features/teams/state/navModel.ts":(e,s,t)=>{t.d(s,{B:()=>l,o:()=>c});var a=t("./public/app/types/index.ts"),n=t("./packages/grafana-runtime/src/index.ts"),r=t("./public/app/core/config.ts"),i=t("./public/app/core/services/context_srv.ts"),o=t("./public/app/core/components/Upgrade/ProBadge.tsx");const d={avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:a.hw.Member};function l(e){const s={img:e.avatarUrl,id:"team-"+e.id,subTitle:"Manage members and settings",url:"",text:e.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"sliders-v-alt",id:`team-settings-${e.id}`,text:"Settings",url:`org/teams/edit/${e.id}/settings`}]};(e===d||i.Vt.hasPermissionInMetadata(a.bW.ActionTeamsPermissionsRead,e))&&s.children.unshift({active:!1,icon:"users-alt",id:`team-members-${e.id}`,text:"Members",url:`org/teams/edit/${e.id}/members`});const t={active:!1,icon:"sync",id:`team-groupsync-${e.id}`,text:"External group sync",url:`org/teams/edit/${e.id}/groupsync`},l=e===d;return(0,n.featureEnabled)("teamsync")?(l||i.Vt.hasPermissionInMetadata(a.bW.ActionTeamsPermissionsRead,e))&&s.children.push(t):r.ZP.featureToggles.featureHighlights&&s.children.push(Object.assign({},t,{tabSuffix:()=>(0,o.Z)({experimentId:l?"":"feature-highlights-team-sync-badge"})})),s}function c(e){const s=l(d);let t;for(const a of s.children)if(a.id.indexOf(e)>0){a.active=!0,t=a;break}return{main:s,node:t}}},"./public/app/features/teams/state/selectors.ts":(e,s,t)=>{t.d(s,{uP:()=>n,xc:()=>r,JB:()=>i,v7:()=>o,_u:()=>d,VP:()=>l,LK:()=>c,YY:()=>m,vt:()=>u,kC:()=>h});var a=t("./public/app/types/index.ts");const n=e=>e.searchQuery,r=e=>e.searchMemberQuery,i=e=>e.groups,o=e=>e.teams.length,d=e=>e.searchPage,l=(e,s)=>e.team.id===parseInt(s,10)?e.team:null,c=e=>{const s=RegExp(e.searchQuery,"i");return e.teams.filter((e=>s.test(e.name)))},m=e=>{const s=RegExp(e.searchMemberQuery,"i");return e.members.filter((e=>s.test(e.login)||s.test(e.email)||s.test(e.name)))},u=e=>{const{members:s,signedInUser:t,editorsCanAdmin:n}=e,r=s.find((e=>e.userId===t.id)),i=r?r.permission:a.hw.Member;return h({permission:i,signedInUser:t,editorsCanAdmin:n})},h=e=>{const{permission:s,signedInUser:t,editorsCanAdmin:n}=e,r=t.isGrafanaAdmin||t.orgRole===a.B5.Admin,i=s===a.hw.Admin;return r||i||!n}}}]);
//# sourceMappingURL=TeamPages.0cedc4c919aff84ce58c.js.map