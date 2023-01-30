"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8612],{77830:(G,U,t)=>{t.d(U,{f:()=>u});var y=t(68404),e=t(671),d=t(77582),C=t(81168),M=t(53674),R=t(11630);const u=({teamId:g,roleOptions:l,disabled:r,onApplyRoles:v,pendingRoles:f,apply:P=!1,maxWidth:B})=>{const[{loading:z,value:$=[]},_]=(0,e.Z)(async()=>{try{if(P&&Boolean(f?.length))return f;if(d.Vt.hasPermission(C.AccessControlAction.ActionTeamsRolesList))return await(0,R._C)(g)}catch(h){console.error("Error loading options",h)}return[]},[g,f]);(0,y.useEffect)(()=>{_()},[g,_,f]);const K=async h=>{P?v&&v(h):(await(0,R.u7)(h,g),await _())},L=d.Vt.hasPermission(C.AccessControlAction.ActionTeamsRolesAdd)&&d.Vt.hasPermission(C.AccessControlAction.ActionTeamsRolesRemove);return y.createElement(M.I,{apply:P,onRolesChange:K,roleOptions:l,appliedRoles:$,isLoading:z,disabled:r,basicRoleDisabled:!0,canUpdateRoles:L,maxWidth:B})}},58693:(G,U,t)=>{t.d(U,{C:()=>R});var y=t(68404),e=t(50700),d=t(77582),C=t(81168),M=t(11630);const R=u=>{const[g,l]=(0,y.useState)(u),{value:r=[]}=(0,e.Z)(async()=>d.Vt.licensedAccessControlEnabled()&&d.Vt.hasPermission(C.AccessControlAction.ActionRolesList)?(0,M.ul)(g):Promise.resolve([]),[g]);return[{roleOptions:r},l]}},18885:(G,U,t)=>{t.d(U,{Z:()=>c,v:()=>m});var y=t(52423),e=t(68404),d=t(40400),C=t(68183),M=t(93003),R=t(77274),u=t(4403),g=t(65587),l=t(74955),r=t(318),v=t(38835),f=t(68172),P=t(84498),B=t(69369),z=t(46739),$=t(90723),_=t(82385),K=t(99661),L=t(35287),h=t(19719),x=t(42454);function w(){const A=h.a2.map(E=>({value:E.code,label:E.name}));return[{value:"",label:(0,L.t)("common.locale.default","Default")},...A]}const Q=Boolean(M.v.featureToggles.internationalization);class m extends e.PureComponent{constructor(b){super(b),this.onSubmitForm=async()=>{if(this.props.onConfirm?await this.props.onConfirm():!0){const{homeDashboardUID:S,theme:W,timezone:Z,weekStart:F,language:H,queryHistory:V}=this.state;await this.service.update({homeDashboardUID:S,theme:W,timezone:Z,weekStart:F,language:H,queryHistory:V}),window.location.reload()}},this.onThemeChanged=E=>{this.setState({theme:E})},this.onTimeZoneChanged=E=>{E&&this.setState({timezone:E})},this.onWeekStartChanged=E=>{this.setState({weekStart:E})},this.onHomeDashboardChanged=E=>{this.setState({homeDashboardUID:E})},this.onLanguageChanged=E=>{this.setState({language:E}),(0,R.ff)("grafana_preferences_language_changed",{toLanguage:E,preferenceType:this.props.preferenceType})},this.service=new x.y(b.resourceUri),this.state={theme:"",timezone:"",weekStart:"",language:"",queryHistory:{homeTab:""}},this.themeOptions=[{value:"",label:(0,L.t)("shared-preferences.theme.default-label","Default")},{value:"dark",label:(0,L.t)("shared-preferences.theme.dark-label","Dark")},{value:"light",label:(0,L.t)("shared-preferences.theme.light-label","Light")}]}async componentDidMount(){const b=await this.service.load();this.setState({homeDashboardUID:b.homeDashboardUID,theme:b.theme,timezone:b.timezone,weekStart:b.weekStart,language:b.language,queryHistory:b.queryHistory})}render(){const{theme:b,timezone:E,weekStart:S,homeDashboardUID:W,language:Z}=this.state,{disabled:F}=this.props,H=T(),V=w();let J=this.themeOptions[0].value;return b?.length&&(J=this.themeOptions.find(N=>N.value===b)?.value),e.createElement(u.l,{onSubmit:this.onSubmitForm},()=>e.createElement(g.C,{label:e.createElement(L.cC,{i18nKey:"shared-preferences.title"},"Preferences"),disabled:F},e.createElement(l.g,{label:(0,L.t)("shared-preferences.fields.theme-label","UI Theme")},e.createElement(r.S,{options:this.themeOptions,value:J,onChange:this.onThemeChanged})),e.createElement(l.g,{label:e.createElement(v._,{htmlFor:"home-dashboard-select"},e.createElement("span",{className:H.labelText},e.createElement(L.cC,{i18nKey:"shared-preferences.fields.home-dashboard-label"},"Home Dashboard"))),"data-testid":"User preferences home dashboard drop down"},e.createElement(K.o,{value:W,onChange:N=>this.onHomeDashboardChanged(N?.uid??""),defaultOptions:!0,isClearable:!0,placeholder:(0,L.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})),e.createElement(l.g,{label:(0,L.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":C.wl.components.TimeZonePicker.containerV2},e.createElement(f.O,{includeInternal:!0,value:E,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})),e.createElement(l.g,{label:(0,L.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":C.wl.components.WeekStartPicker.containerV2},e.createElement(P.z,{value:S||"",onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})),Q?e.createElement(l.g,{label:e.createElement(v._,{htmlFor:"locale-select"},e.createElement("span",{className:H.labelText},e.createElement(L.cC,{i18nKey:"shared-preferences.fields.locale-label"},"Language")),e.createElement(B.a,{featureState:d.CQ.beta})),"data-testid":"User preferences language drop down"},e.createElement(z.Ph,{value:V.find(N=>N.value===Z),onChange:N=>this.onLanguageChanged(N.value??""),options:V,placeholder:(0,L.t)("shared-preferences.fields.locale-placeholder","Choose language"),inputId:"locale-select"})):null,e.createElement("div",{className:"gf-form-button-row"},e.createElement($.zx,{type:"submit",variant:"primary","data-testid":C.wl.components.UserProfile.preferencesSaveButton},e.createElement(L.cC,{i18nKey:"common.save"},"Save")))))}}const c=m,T=(0,_.B)(()=>({labelText:y.css`
      margin-right: 6px;
    `}))},77293:(G,U,t)=>{t.d(U,{Yb:()=>e,d5:()=>C});var y=t(93003);const e=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function d(){const M=y.v.licenseInfo?.trialExpiry;return!!(M&&M>0)}const C=()=>d()&&y.v.featureToggles.featureHighlights},59582:(G,U,t)=>{t.r(U),t.d(U,{TeamPages:()=>q,default:()=>Se});var y=t(82897),e=t(68404),d=t(36635),C=t(14876),M=t(29516),R=t(79396),u=t(52423),g=t(77274),l=t(81697),r=t(90723);const v=({featureName:n,className:a,children:s,text:o,featureId:i,eventVariant:p="",size:D="md",...I})=>{const O=(0,M.wW)(j=>f(j,D));return(0,e.useEffect)(()=>{(0,g.SZ)(`feature-highlights-${i}`,"test",p)},[p,i]),e.createElement("div",{className:(0,u.cx)(O.box,a),...I},e.createElement(l.J,{name:"rocket",className:O.icon}),e.createElement("div",{className:O.inner},e.createElement("p",{className:O.text},"You\u2019ve discovered a Pro feature! ",o||`Get the Grafana Pro plan to access ${n}.`),e.createElement(r.Qj,{variant:"secondary",size:D,className:O.button,href:"https://grafana.com/profile/org/subscription",target:"__blank",rel:"noopener noreferrer"},"Upgrade")))},f=(n,a)=>{const s=n.shape.borderRadius(2),o=a==="md"?"body":"bodySmall";return{box:u.css`
      display: flex;
      align-items: center;
      position: relative;
      border-radius: ${s};
      background: ${n.colors.success.transparent};
      padding: ${n.spacing(2)};
      color: ${n.colors.success.text};
      font-size: ${n.typography[o].fontSize};
      text-align: left;
      line-height: 16px;
      margin: ${n.spacing(0,"auto",3,"auto")};
      max-width: ${n.breakpoints.values.xxl}px;
      width: 100%;
    `,inner:u.css`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,text:u.css`
      margin: 0;
    `,button:u.css`
      background-color: ${n.colors.success.main};
      font-weight: ${n.typography.fontWeightLight};
      color: white;

      &:hover {
        background-color: ${n.colors.success.main};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${n.colors.text.primary};
        outline: 2px solid ${n.colors.primary.main};
      }
    `,icon:u.css`
      margin: ${n.spacing(.5,1,.5,.5)};
    `}},P=({listItems:n,image:a,featureUrl:s,featureName:o,description:i,caption:p,action:D})=>{const I=(0,M.wW)(B);return e.createElement("div",{className:I.container},e.createElement("div",{className:I.content},e.createElement("h3",{className:I.title},"Get started with ",o),i&&e.createElement("h6",{className:I.description},i),e.createElement("ul",{className:I.list},n.map((O,j)=>e.createElement("li",{key:j},e.createElement(l.J,{name:"check",size:"xl",className:I.icon})," ",O))),D?.link&&e.createElement(r.Qj,{variant:"primary",href:D.link},D.text),D?.onClick&&e.createElement(r.zx,{variant:"primary",onClick:D.onClick},D.text),s&&e.createElement(r.Qj,{fill:"text",href:s,className:I.link,target:"_blank",rel:"noreferrer noopener"},"Learn more")),e.createElement("div",{className:I.media},e.createElement("img",{src:_(a),alt:"Feature screenshot"}),p&&e.createElement("p",{className:I.caption},p)))},B=n=>({container:u.css`
      display: flex;
      justify-content: space-between;
    `,content:u.css`
      width: 45%;
      margin-right: ${n.spacing(4)};
    `,media:u.css`
      width: 55%;

      img {
        width: 100%;
      }
    `,title:u.css`
      color: ${n.colors.text.maxContrast};
    `,description:u.css`
      color: ${n.colors.text.primary};
      font-weight: ${n.typography.fontWeightLight};
    `,list:u.css`
      list-style: none;
      margin: ${n.spacing(4,0,2,0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${n.colors.text.primary};
        padding: ${n.spacing(1,0)};
      }
    `,icon:u.css`
      color: ${n.colors.success.main};
      margin-right: ${n.spacing(1)};
    `,link:u.css`
      margin-left: ${n.spacing(2)};
    `,caption:u.css`
      font-weight: ${n.typography.fontWeightLight};
      margin: ${n.spacing(1,0,0)};
    `}),z=({featureName:n,description:a,featureUrl:s,image:o})=>{const i=useStyles2($);return React.createElement("div",{className:i.container},React.createElement("h3",{className:i.title},"Get started with ",n),a&&React.createElement("h6",{className:i.description},a),React.createElement(LinkButton,{fill:"text",href:s,target:"_blank",rel:"noreferrer noopener"},"Learn more"),React.createElement("div",{className:i.media},React.createElement("img",{src:_(o),alt:"Feature screenshot"})))},$=n=>({container:css`
      overflow: auto;
      height: 100%;
    `,title:css`
      color: ${n.colors.text.maxContrast};
    `,description:css`
      color: ${n.colors.text.primary};
      font-weight: ${n.typography.fontWeightLight};
    `,media:css`
      width: 100%;
      margin-top: ${n.spacing(2)};

      img {
        width: 100%;
      }
    `}),_=n=>n.startsWith("http")?n:"/public/img/enterprise/highlights/"+n;var K=t(47694),L=t(86245),h=t(82002),x=t(81168),w=t(48756),Q=t(9274),m=t(71210),c=t(25474),T=t(1108),A=t(50796),b=t(69142),E=t(77293),S=t(13949),W=t(3813);function Z(n){return{groups:(0,W.JB)(n.team)}}const F={loadTeamGroups:S.j_,addTeamGroup:S.A_,removeTeamGroup:S.P5},H=(0,d.connect)(Z,F),V="Sync LDAP, OAuth or SAML groups with your Grafana teams.";class J extends e.PureComponent{constructor(a){super(a),this.onToggleAdding=()=>{this.setState({isAdding:!this.state.isAdding})},this.onNewGroupIdChanged=s=>{this.setState({newGroupId:s.target.value})},this.onAddGroup=s=>{s.preventDefault(),this.props.addTeamGroup(this.state.newGroupId),this.setState({isAdding:!1,newGroupId:""})},this.onRemoveGroup=s=>{this.props.removeTeamGroup(s.groupId)},this.state={isAdding:!1,newGroupId:""}}componentDidMount(){this.fetchTeamGroups()}async fetchTeamGroups(){await this.props.loadTeamGroups()}isNewGroupValid(){return this.state.newGroupId.length>1}renderGroup(a){const{isReadOnly:s}=this.props;return e.createElement("tr",{key:a.groupId},e.createElement("td",null,a.groupId),e.createElement("td",{style:{width:"1%"}},e.createElement(r.zx,{size:"sm",variant:"destructive",onClick:()=>this.onRemoveGroup(a),disabled:s,"aria-label":`Remove group ${a.groupId}`},e.createElement(l.J,{name:"times"}))))}render(){const{isAdding:a,newGroupId:s}=this.state,{groups:o,isReadOnly:i}=this.props;return e.createElement("div",null,(0,E.d5)()&&e.createElement(v,{featureId:"team-sync",eventVariant:"trial",featureName:"team sync",text:"Add a group to enable team sync for free during your trial of Grafana Pro."}),e.createElement("div",{className:"page-action-bar"},(!(0,E.d5)()||o.length>0)&&e.createElement(e.Fragment,null,e.createElement("h3",{className:"page-sub-heading"},"External group sync"),e.createElement(w.u,{placement:"auto",content:V},e.createElement(l.J,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"}))),e.createElement("div",{className:"page-action-bar__spacer"}),o.length>0&&e.createElement(r.zx,{className:"pull-right",onClick:this.onToggleAdding,disabled:i},e.createElement(l.J,{name:"plus"})," Add group")),e.createElement(T.s,{in:a},e.createElement("div",{className:"cta-form"},e.createElement(A.P,{onClick:this.onToggleAdding}),e.createElement("form",{onSubmit:this.onAddGroup},e.createElement(Q.Z,null,e.createElement(m._,{label:"Add External Group",tooltip:"LDAP Group Example: cn=users,ou=groups,dc=grafana,dc=org."},e.createElement(c.I,{type:"text",id:"add-external-group",placeholder:"",value:s,onChange:this.onNewGroupIdChanged,disabled:i})),e.createElement(r.zx,{type:"submit",disabled:i||!this.isNewGroupValid(),style:{marginLeft:4}},"Add group"))))),o.length===0&&!a&&((0,E.d5)()?e.createElement(N,{action:{onClick:this.onToggleAdding,text:"Add group"}}):e.createElement(b.Z,{onClick:this.onToggleAdding,buttonIcon:"users-alt",title:"There are no external groups to sync with",buttonTitle:"Add group",proTip:V,proTipLinkTitle:"Learn more",proTipLink:"https://docs.grafana.org/auth/enhanced_ldap/",proTipTarget:"_blank",buttonDisabled:i})),o.length>0&&e.createElement("div",{className:"admin-list-table"},e.createElement("table",{className:"filter-table filter-table--hover form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"External Group ID"),e.createElement("th",{style:{width:"1%"}}))),e.createElement("tbody",null,o.map(p=>this.renderGroup(p))))))}}const N=({action:n})=>{const a=(0,M.l4)();return e.createElement(P,{action:n,listItems:["Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana","Update users\u2019 permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in"],image:`team-sync-${a.isLight?"light":"dark"}.png`,featureName:"team sync",featureUrl:"https://grafana.com/docs/grafana/latest/enterprise/team-sync",description:"Team Sync makes it easier for you to manage users\u2019 access in Grafana, by immediately updating each user\u2019s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in."})},ee=(0,d.connect)(Z,F)(J);var te=t(79230),ae=t(38835),ne=t(28038),X=t(21731);const k=({featureToggle:n,children:a})=>n===!0?e.createElement(e.Fragment,null,a):null;var se=t(46739),re=t(20428);const oe={removeTeamMember:S.zT,updateTeamMember:S.zZ},ie=(0,d.connect)(null,oe);class le extends e.PureComponent{constructor(a){super(a),this.onPermissionChange=(s,o)=>{const i=s.value,p={...o,permission:i};this.props.updateTeamMember(p)},this.renderLabels=this.renderLabels.bind(this),this.renderPermissions=this.renderPermissions.bind(this)}onRemoveMember(a){this.props.removeTeamMember(a.userId)}renderPermissions(a){const{editorsCanAdmin:s,signedInUserIsTeamAdmin:o}=this.props,i=x.teamsPermissionLevels.find(p=>p.value===a.permission);return e.createElement(k,{featureToggle:s},e.createElement("td",{className:"width-5 team-permissions"},o?e.createElement(se.Ph,{isSearchable:!1,options:x.teamsPermissionLevels,onChange:p=>this.onPermissionChange(p,a),value:i,width:32,"aria-label":`Select member's ${a.name} permission level`}):e.createElement("span",null,i.label)))}renderLabels(a){return a?e.createElement("td",null,a.map(s=>e.createElement(X.e,{key:s,label:s,removeIcon:!1,count:0}))):e.createElement("td",null)}render(){const{member:a,syncEnabled:s,signedInUserIsTeamAdmin:o}=this.props;return e.createElement("tr",{key:a.userId},e.createElement("td",{className:"width-4 text-center"},e.createElement("img",{alt:`Avatar for team member "${a.name}"`,className:"filter-table__avatar",src:a.avatarUrl})),e.createElement("td",null,a.login),e.createElement("td",null,a.email),e.createElement("td",null,a.name),this.renderPermissions(a),s&&this.renderLabels(a.labels),e.createElement("td",{className:"text-right"},e.createElement(re.m,{"aria-label":`Remove team member ${a.name}`,size:"sm",disabled:!o,onConfirm:()=>this.onRemoveMember(a)})))}}const ce=ie(le);var me=t(97189);function de(n){return{searchMemberQuery:(0,W.xc)(n.team),editorsCanAdmin:K.vc.editorsCanAdmin,signedInUser:h.Vt.user}}const ue={addTeamMember:S.Lt,setSearchMemberQuery:me.UD},ge=(0,d.connect)(de,ue);class he extends e.PureComponent{constructor(a){super(a),this.onSearchQueryChange=s=>{this.props.setSearchMemberQuery(s)},this.onToggleAdding=()=>{this.setState({isAdding:!this.state.isAdding})},this.onUserSelected=s=>{this.setState({newTeamMember:s})},this.onAddUserToTeam=async()=>{this.props.addTeamMember(this.state.newTeamMember.id),this.setState({newTeamMember:null})},this.state={isAdding:!1,newTeamMember:null}}renderLabels(a){return a?e.createElement("td",null,a.map(s=>e.createElement(X.e,{key:s,label:s,removeIcon:!1,count:0}))):e.createElement("td",null)}render(){const{isAdding:a}=this.state,{searchMemberQuery:s,members:o,syncEnabled:i,editorsCanAdmin:p,signedInUser:D}=this.props,I=(0,W.vt)({members:o,editorsCanAdmin:p,signedInUser:D});return e.createElement("div",null,e.createElement("div",{className:"page-action-bar"},e.createElement("div",{className:"gf-form gf-form--grow"},e.createElement(te.H,{placeholder:"Search members",value:s,onChange:this.onSearchQueryChange})),e.createElement(r.zx,{className:"pull-right",onClick:this.onToggleAdding,disabled:a||!I},"Add member")),e.createElement(T.s,{in:a},e.createElement("div",{className:"cta-form"},e.createElement(A.P,{"aria-label":"Close 'Add team member' dialogue",onClick:this.onToggleAdding}),e.createElement(ae._,{htmlFor:"user-picker"},"Add team member"),e.createElement("div",{className:"gf-form-inline"},e.createElement(ne.f,{inputId:"user-picker",onSelected:this.onUserSelected,className:"min-width-30"}),this.state.newTeamMember&&e.createElement(r.zx,{type:"submit",onClick:this.onAddUserToTeam},"Add to team")))),e.createElement("div",{className:"admin-list-table"},e.createElement("table",{className:"filter-table filter-table--hover form-inline"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null),e.createElement("th",null,"Login"),e.createElement("th",null,"Email"),e.createElement("th",null,"Name"),e.createElement(k,{featureToggle:p},e.createElement("th",null,"Permission")),i&&e.createElement("th",null),e.createElement("th",{style:{width:"1%"}}))),e.createElement("tbody",null,o&&o.map(O=>e.createElement(ce,{key:O.userId,member:O,syncEnabled:i,editorsCanAdmin:p,signedInUserIsTeamAdmin:I}))))))}}const pe=ge(he);var Ee=t(73546);const fe=n=>{const a=h.Vt.hasPermissionInMetadata(x.AccessControlAction.ActionTeamsPermissionsWrite,n.team);return e.createElement(Ee.P,{title:"",addPermissionTitle:"Add member",buttonLabel:"Add member",emptyLabel:"There are no members in this team or you do not have the permissions to list the current members.",resource:"teams",resourceId:n.team.id,canSetPermissions:a})};var Te=t(90701),ve=t(4403),Pe=t(65587),Y=t(74955),Ae=t(77830),ye=t(11630),Ce=t(58693),Me=t(18885);const be={updateTeam:S.fs},De=(0,d.connect)(null,be)(({team:n,updateTeam:a})=>{const s=h.Vt.hasPermissionInMetadata(x.AccessControlAction.ActionTeamsWrite,n),o=h.Vt.user.orgId,[{roleOptions:i}]=(0,Ce.C)(o),[p,D]=(0,e.useState)([]),I=h.Vt.hasPermission(x.AccessControlAction.ActionUserRolesAdd)&&h.Vt.hasPermission(x.AccessControlAction.ActionUserRolesRemove);return e.createElement(Te.wc,{spacing:"lg"},e.createElement(ve.l,{defaultValues:{...n},onSubmit:async O=>{h.Vt.licensedAccessControlEnabled()&&I&&await(0,ye.u7)(p,n.id),a(O.name,O.email||"")},disabled:!s},({register:O,errors:j})=>e.createElement(Pe.C,{label:"Team details"},e.createElement(Y.g,{label:"Name",disabled:!s,required:!0,invalid:!!j.name,error:"Name is required"},e.createElement(c.I,{...O("name",{required:!0}),id:"name-input"})),h.Vt.licensedAccessControlEnabled()&&e.createElement(Y.g,{label:"Role"},e.createElement(Ae.f,{teamId:n.id,roleOptions:i,disabled:!1,apply:!0,onApplyRoles:D,pendingRoles:p,maxWidth:"100%"})),e.createElement(Y.g,{label:"Email",description:"This is optional and is primarily used to set the team profile avatar (via gravatar service).",disabled:!s},e.createElement(c.I,{...O("email"),placeholder:"team@email.com",type:"email",id:"email-input"})),e.createElement(r.zx,{type:"submit",disabled:!s},"Update"))),e.createElement(Me.v,{resourceUri:`teams/${n.id}`,disabled:!s,preferenceType:"team"}))});var Ie=t(87941),Oe=(n=>(n.Members="members",n.Settings="settings",n.GroupSync="groupsync",n))(Oe||{});function Le(n,a){const s=parseInt(a.match.params.id,10),o=(0,W.VP)(n.team,s);let i="members";h.Vt.accessControlEnabled()&&(!o||!h.Vt.hasPermissionInMetadata(x.AccessControlAction.ActionTeamsPermissionsRead,o))&&(i="settings");const p=a.match.params.page??i,D=(0,Ie.o)(p),I=(0,L.ht)(n.navIndex,`team-${p}-${s}`,D).main,O=(0,W.YY)(n.team);return{pageNav:I,teamId:s,pageName:p,team:o,members:O,editorsCanAdmin:K.ZP.editorsCanAdmin,signedInUser:h.Vt.user}}const Re={loadTeam:S.QX,loadTeamMembers:S.ei},Ue=(0,d.connect)(Le,Re);class q extends e.PureComponent{constructor(a){super(a),this.textsAreEqual=(s,o)=>!s&&!o?!0:!s||!o?!1:s.toLocaleLowerCase()===o.toLocaleLowerCase(),this.hideTabsFromNonTeamAdmin=(s,o)=>(h.Vt.accessControlEnabled()||!o&&s&&s.children&&s.children.filter(i=>!this.textsAreEqual(i.text,"members")).map(i=>{i.hideFromTabs=!0}),s),this.state={isLoading:!1,isSyncEnabled:(0,C.v)("teamsync")}}async componentDidMount(){await this.fetchTeam()}async fetchTeam(){const{loadTeam:a,teamId:s}=this.props;this.setState({isLoading:!0});const o=await a(s);return h.Vt.accessControlEnabled()||await this.props.loadTeamMembers(),this.setState({isLoading:!1}),o}getCurrentPage(){const a=["members","settings","groupsync"],s=this.props.pageName;return(0,y.includes)(a,s)?s:a[0]}renderPage(a){const{isSyncEnabled:s}=this.state,{members:o,team:i}=this.props,p=this.getCurrentPage(),D=h.Vt.hasAccessInMetadata(x.AccessControlAction.ActionTeamsRead,i,a),I=h.Vt.hasAccessInMetadata(x.AccessControlAction.ActionTeamsPermissionsRead,i,a),O=h.Vt.hasAccessInMetadata(x.AccessControlAction.ActionTeamsPermissionsWrite,i,a);switch(p){case"members":return h.Vt.accessControlEnabled()?e.createElement(fe,{team:i}):e.createElement(pe,{syncEnabled:s,members:o});case"settings":return D&&e.createElement(De,{team:i});case"groupsync":if(s){if(I)return e.createElement(ee,{isReadOnly:!O})}else if(K.ZP.featureToggles.featureHighlights)return e.createElement(e.Fragment,null,e.createElement(v,{featureName:"team sync",featureId:"team-sync"}),e.createElement(N,null))}return null}render(){const{team:a,pageNav:s,members:o,editorsCanAdmin:i,signedInUser:p}=this.props,D=(0,W.vt)({members:o,editorsCanAdmin:i,signedInUser:p});return e.createElement(R.T,{navId:"teams",pageNav:this.hideTabsFromNonTeamAdmin(s,D)},e.createElement(R.T.Contents,{isLoading:this.state.isLoading},a&&Object.keys(a).length!==0&&this.renderPage(D)))}}const Se=Ue((0,M.HE)(q))},13949:(G,U,t)=>{t.d(U,{A_:()=>x,Lt:()=>_,P5:()=>w,QX:()=>f,R5:()=>B,ei:()=>$,fC:()=>P,fs:()=>L,jI:()=>r,j_:()=>h,oO:()=>z,zT:()=>K,zZ:()=>Q});var y=t(82897),e=t.n(y),d=t(47214),C=t(659),M=t(77582),R=t(95156),u=t(81168),g=t(87941),l=t(97189);function r(m=!1){return async(c,T)=>{const{query:A,page:b,perPage:E}=T().teams;if(!M.Vt.hasPermission(u.AccessControlAction.ActionTeamsRead)){c((0,l.PL)({teams:[],totalCount:0,page:1,perPage:E,noTeams:!0}));return}const S=await(0,d.i)().get("/api/teams/search",(0,R.y)({query:A,page:b,perpage:E}));let W=!1;m&&(W=S.teams.length===0),c((0,l.PL)({noTeams:W,...S}))}}const v=(0,y.debounce)(m=>m(r()),500);function f(m){return async c=>{const T=await(0,d.i)().get(`/api/teams/${m}`,(0,R.y)());c((0,l.y$)(T)),c((0,C.RL)((0,g.B)(T)))}}function P(m){return async c=>{await(0,d.i)().delete(`/api/teams/${m}`),await M.Vt.fetchUserPermissions(),c(r())}}function B(m){return async c=>{c((0,l.aj)(m)),v(c)}}function z(m){return async c=>{c((0,l.PJ)(m)),c(r())}}function $(){return async(m,c)=>{const T=c().team.team,A=await(0,d.i)().get(`/api/teams/${T.id}/members`);m((0,l.n2)(A))}}function _(m){return async(c,T)=>{const A=T().team.team;await(0,d.i)().post(`/api/teams/${A.id}/members`,{userId:m}),c($())}}function K(m){return async(c,T)=>{const A=T().team.team;await(0,d.i)().delete(`/api/teams/${A.id}/members/${m}`),c($())}}function L(m,c){return async(T,A)=>{const b=A().team.team;await(0,d.i)().put(`/api/teams/${b.id}`,{name:m,email:c}),T(f(b.id))}}function h(){return async(m,c)=>{const T=c().team.team,A=await(0,d.i)().get(`/api/teams/${T.id}/groups`);m((0,l.iI)(A))}}function x(m){return async(c,T)=>{const A=T().team.team;await(0,d.i)().post(`/api/teams/${A.id}/groups`,{groupId:m}),c(h())}}function w(m){return async(c,T)=>{const A=T().team.team;await(0,d.i)().delete(`/api/teams/${A.id}/groups/${encodeURIComponent(m)}`),c(h())}}function Q(m){return async c=>{await(0,d.i)().put(`/api/teams/${m.teamId}/members/${m.userId}`,{permission:m.permission}),c($())}}},87941:(G,U,t)=>{t.d(U,{B:()=>g,o:()=>l});var y=t(14876),e=t(73194),d=t(47694),C=t(82002),M=t(77293),R=t(81168);const u={avatarUrl:"public/img/user_profile.png",id:1,name:"Loading",email:"loading",memberCount:0,permission:R.TeamPermissionLevel.Member,accessControl:{isEditor:!1},created:0,orgId:0,updated:0};function g(r){const v={img:r.avatarUrl,id:"team-"+r.id,subTitle:"Manage members and settings",url:"",text:r.name,breadcrumbs:[{title:"Teams",url:"org/teams"}],children:[{active:!1,icon:"sliders-v-alt",id:`team-settings-${r.id}`,text:"Settings",url:`org/teams/edit/${r.id}/settings`}]};(r===u||C.Vt.hasPermissionInMetadata(R.AccessControlAction.ActionTeamsPermissionsRead,r))&&v.children.unshift({active:!1,icon:"users-alt",id:`team-members-${r.id}`,text:"Members",url:`org/teams/edit/${r.id}/members`});const f={active:!1,icon:"sync",id:`team-groupsync-${r.id}`,text:"External group sync",url:`org/teams/edit/${r.id}/groupsync`},P=r===u;return(0,M.d5)()&&(f.tabSuffix=()=>(0,e.Z)({experimentId:P?"":"feature-highlights-team-sync-badge",eventVariant:"trial"})),(0,y.v)("teamsync")?(P||C.Vt.hasPermissionInMetadata(R.AccessControlAction.ActionTeamsPermissionsRead,r))&&v.children.push(f):d.ZP.featureToggles.featureHighlights&&v.children.push({...f,tabSuffix:()=>(0,e.Z)({experimentId:P?"":"feature-highlights-team-sync-badge"})}),v}function l(r){const v=g(u);let f;for(const P of v.children)if(P.id.indexOf(r)>0){P.active=!0,f=P;break}return{main:v,node:f}}},3813:(G,U,t)=>{t.d(U,{JB:()=>d,VP:()=>C,YY:()=>M,kC:()=>u,vt:()=>R,xc:()=>e});var y=t(81168);const e=g=>g.searchMemberQuery,d=g=>g.groups,C=(g,l)=>g.team.id===parseInt(l,10)?g.team:null,M=g=>{const l=RegExp(g.searchMemberQuery,"i");return g.members.filter(r=>l.test(r.login)||l.test(r.email)||l.test(r.name))},R=g=>{const{members:l,signedInUser:r,editorsCanAdmin:v}=g,f=l.find(B=>B.userId===r.id),P=f?f.permission:y.TeamPermissionLevel.Member;return u({permission:P,signedInUser:r,editorsCanAdmin:v})},u=g=>{const{permission:l,signedInUser:r,editorsCanAdmin:v}=g,f=r.isGrafanaAdmin||r.orgRole===y.OrgRole.Admin,P=l===y.TeamPermissionLevel.Admin;return f||P||!v}}}]);

//# sourceMappingURL=TeamPages.485d0d38f4d0fc5d3221.js.map