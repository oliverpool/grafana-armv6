"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8431],{"./public/app/features/folders/FolderPermissions.tsx":(e,s,i)=>{i.r(s),i.d(s,{FolderPermissions:()=>A,default:()=>F});var n,o,r,t,d=i("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),a=i("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/3/opt/drone/yarncache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),c=i("./public/app/core/components/Page/Page.tsx"),l=i("./packages/grafana-ui/src/index.ts"),p=i("./public/app/core/components/Animations/SlideDown.tsx"),m=i("./public/app/core/selectors/navModel.ts"),u=i("./public/app/features/folders/state/actions.ts"),h=i("./public/app/features/folders/state/navModel.ts"),P=i("./public/app/core/components/PermissionList/PermissionList.tsx"),x=i("./public/app/core/components/PermissionList/AddPermission.tsx"),f=i("./public/app/core/components/PermissionList/PermissionsInfo.tsx"),g=i("../../opt/drone/yarncache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function b(e,s,i){return s in e?Object.defineProperty(e,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[s]=i,e}const j={getFolderByUid:u.Pb,getFolderPermissions:u.a,updateFolderPermission:u.v7,removeFolderPermission:u.Uk,addFolderPermission:u.pz},v=(0,a.connect)(((e,s)=>{const i=s.match.params.uid;return{navModel:(0,m.h)(e.navIndex,`folder-permissions-${i}`,(0,h._)(1)),folderUid:i,folder:e.folder}}),j);class A extends d.PureComponent{constructor(e){super(e),b(this,"onOpenAddPermissions",(()=>{this.setState({isAdding:!0})})),b(this,"onRemoveItem",(e=>{this.props.removeFolderPermission(e)})),b(this,"onPermissionChanged",((e,s)=>{this.props.updateFolderPermission(e,s)})),b(this,"onAddPermission",(e=>this.props.addFolderPermission(e))),b(this,"onCancelAddPermission",(()=>{this.setState({isAdding:!1})})),this.state={isAdding:!1}}componentDidMount(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)}render(){const{navModel:e,folder:s}=this.props,{isAdding:i}=this.state;if(0===s.id)return(0,g.jsx)(c.Z,{navModel:e,children:n||(n=(0,g.jsx)(c.Z.Contents,{isLoading:!0,children:(0,g.jsx)("span",{})}))});const d={title:s.title,url:s.url,id:s.id};return(0,g.jsx)(c.Z,{navModel:e,children:(0,g.jsxs)(c.Z.Contents,{children:[(0,g.jsxs)("div",{className:"page-action-bar",children:[o||(o=(0,g.jsx)("h3",{className:"page-sub-heading",children:"Folder Permissions"})),r||(r=(0,g.jsx)(l.Tooltip,{placement:"auto",content:(0,g.jsx)(f.Z,{}),children:(0,g.jsx)(l.Icon,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})})),t||(t=(0,g.jsx)("div",{className:"page-action-bar__spacer"})),(0,g.jsx)(l.Button,{className:"pull-right",onClick:this.onOpenAddPermissions,disabled:i,children:"Add Permission"})]}),(0,g.jsx)(p.s,{in:i,children:(0,g.jsx)(x.Z,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})}),(0,g.jsx)(P.Z,{items:s.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:d})]})})}}const F=v(A)}}]);
//# sourceMappingURL=FolderPermissions.0cedc4c919aff84ce58c.js.map