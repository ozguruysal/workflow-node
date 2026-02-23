import{j as e}from"./jsx-runtime-u17CrQMm.js";import{$ as T,a as A,b as B,c as O,d as $}from"./ProgressBar-CovNuMyC.js";import{r as C,R as b}from"./iframe-Xcm6Fwwe.js";import{$ as W,a as F,B as P}from"./Button-hcpaSDtH.js";import{M as q,a as Z,b as R,c as i,$ as c,d,e as z}from"./Menu-CDZOuBYP.js";import{$ as V,B as G}from"./ButtonGroup-Cviqh3No.js";import{S as K}from"./Spinner-Cibp8ppu.js";import{P as X,a as J,b as Q,c as U,C as Y,d as ee,W as se}from"./WarningIcon-WH_5cDcn.js";import{M as ae}from"./MoreIcon-DveVNoaj.js";import"./preload-helper-D-J_ZxmD.js";import"./index-CJpy7-ai.js";import"./index-DLAjdeUQ.js";import"./FocusScope-DZrrVSmL.js";import"./index-CGKGR4i0.js";function l(o){return e.jsxs("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...o,children:[e.jsxs("g",{clipPath:"url(#a)",children:[e.jsx("path",{fill:"#E01E5A",d:"M6.854 20.157a3.323 3.323 0 0 1-3.326 3.326 3.323 3.323 0 0 1-3.326-3.326 3.323 3.323 0 0 1 3.326-3.326h3.326v3.326Zm1.663 0a3.323 3.323 0 0 1 3.325-3.326 3.323 3.323 0 0 1 3.326 3.326v8.315a3.323 3.323 0 0 1-3.325 3.326 3.323 3.323 0 0 1-3.326-3.326v-8.315Z"}),e.jsx("path",{fill:"#36C5F0",d:"M11.842 6.803a3.323 3.323 0 0 1-3.325-3.326A3.323 3.323 0 0 1 11.842.151a3.323 3.323 0 0 1 3.326 3.326v3.326h-3.325Zm0 1.688a3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.325 3.326h-8.34a3.323 3.323 0 0 1-3.327-3.326 3.323 3.323 0 0 1 3.326-3.326h8.34Z"}),e.jsx("path",{fill:"#2EB67D",d:"M25.172 11.817a3.323 3.323 0 0 1 3.326-3.326 3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.326 3.326h-3.326v-3.326Zm-1.663 0a3.323 3.323 0 0 1-3.326 3.326 3.323 3.323 0 0 1-3.326-3.326v-8.34A3.323 3.323 0 0 1 20.183.151a3.323 3.323 0 0 1 3.326 3.326v8.34Z"}),e.jsx("path",{fill:"#ECB22E",d:"M20.183 25.146a3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.326 3.326 3.323 3.323 0 0 1-3.326-3.326v-3.326h3.326Zm0-1.663a3.323 3.323 0 0 1-3.326-3.326 3.323 3.323 0 0 1 3.326-3.326h8.34a3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.326 3.326h-8.34Z"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"a",children:e.jsx("path",{fill:"#fff",d:"M0 0h32v32H0z"})})})]})}l.__docgenInfo={description:"",methods:[],displayName:"SlackLogo"};const ne=C.createContext({}),re=C.forwardRef(function(a,n){[a,n]=T(a,n,ne);let{isDisabled:s,isInvalid:r,isReadOnly:u,onHoverStart:m,onHoverChange:p,onHoverEnd:t,...k}=a;s??(s=!!a["aria-disabled"]&&a["aria-disabled"]!=="false"),r??(r=!!a["aria-invalid"]&&a["aria-invalid"]!=="false");let{hoverProps:L,isHovered:E}=W({onHoverStart:m,onHoverChange:p,onHoverEnd:t,isDisabled:s}),{isFocused:I,isFocusVisible:N,focusProps:_}=F({within:!0}),D=A({...a,values:{isHovered:E,isFocusWithin:I,isFocusVisible:N,isDisabled:s,isInvalid:r},defaultClassName:"react-aria-Group"});var y,M;return b.createElement(B.div,{...O(k,_,L),...D,ref:n,role:(y=a.role)!==null&&y!==void 0?y:"group",slot:(M=a.slot)!==null&&M!==void 0?M:void 0,"data-focus-within":I||void 0,"data-hovered":E||void 0,"data-focus-visible":N||void 0,"data-disabled":s||void 0,"data-invalid":r||void 0,"data-readonly":u||void 0},D.children)}),H=o=>{const{title:a,description:n,icon:s,status:r="default",isPinned:u=!1,isActive:m=!0,className:p}=o,t=r==="pending";return e.jsxs(re,{className:$("workflow-node",r,u&&"pinned",p),children:[e.jsx(te,{status:r,isPinned:u,"aria-hidden":!0}),e.jsx(oe,{isActive:m,isDisabled:t}),e.jsxs("div",{className:$("workflow-node-card",p),children:[s&&e.jsx("div",{className:"workflow-node-icon","aria-hidden":!0,children:s}),e.jsxs("div",{className:"workflow-node-text",children:[e.jsx("h3",{className:"workflow-node-title",children:a}),n&&e.jsx("p",{className:"workflow-node-description",children:n})]})]})]})};function te(o){const{status:a,isPinned:n}=o;let s=null;switch(n&&(s=e.jsx(Q,{})),a){case"warning":s=e.jsx(se,{});break;case"success":s=e.jsx(ee,{});break;case"error":s=e.jsx(Y,{});break;case"inactive":s=e.jsx(U,{});break;case"pending":s=e.jsx(K,{});break}return e.jsx("div",{className:"workflow-node-status-icon",children:s})}function oe(o){const{isActive:a,isDisabled:n,className:s}=o;return e.jsx(V,{className:$("workflow-node-toolbar",s),"aria-label":"Node actions",children:e.jsxs(G,{children:[e.jsx(P,{size:"sm",iconOnly:!0,iconBefore:e.jsx(X,{}),isDisabled:n,"aria-label":"Run node"}),e.jsx(P,{size:"sm",iconOnly:!0,iconBefore:e.jsx(J,{}),isDisabled:n,"aria-label":a?"Deactivate node":"Activate node"}),e.jsxs(q,{children:[e.jsx(P,{className:"workflow-node-menu-trigger",size:"sm",iconOnly:!0,iconBefore:e.jsx(ae,{}),isDisabled:n,"aria-label":"More options"}),e.jsxs(Z,{children:[e.jsxs(R,{children:[e.jsxs(i,{children:[e.jsx(c,{children:"Open..."}),e.jsx(d,{children:"↵"})]}),e.jsx(i,{children:e.jsx(c,{children:"Execute step"})}),e.jsxs(i,{children:[e.jsx(c,{children:"Rename"}),e.jsx(d,{children:"Space"})]}),e.jsxs(i,{children:[e.jsx(c,{children:"Replace"}),e.jsx(d,{children:"R"})]}),e.jsxs(i,{children:[e.jsx(c,{children:"Deactivate"}),e.jsx(d,{children:"D"})]}),e.jsxs(i,{isDisabled:!0,children:[e.jsx(c,{children:"Pin"}),e.jsx(d,{children:"P"})]}),e.jsxs(i,{children:[e.jsx(c,{children:"Copy"}),e.jsx(d,{children:"⌘C"})]}),e.jsxs(i,{children:[e.jsx(c,{children:"Duplicate"}),e.jsx(d,{children:"⌘D"})]})]}),e.jsx(z,{}),e.jsxs(R,{children:[e.jsxs(i,{children:[e.jsx(c,{children:"Convert node to sub-workflow"}),e.jsx(d,{children:"ALT+X"})]}),e.jsxs(i,{colorVariant:"danger",children:[e.jsx(c,{children:"Delete"}),e.jsx(d,{children:"Del"})]})]})]})]})]})})}H.__docgenInfo={description:`A generic node component for representing a step in a workflow. It should be wrapped by a parent component provided by an interactive flowgraph library.
For this example we will assume we are using <a href="https://reactflow.dev/" target="_blank">React Flow</a>, but the component is designed to be agnostic of the underlying flowgraph implementation. However
the classnames should be adjusted accordingly to fit the styling needs of the chosen library.`,methods:[],displayName:"WorkflowNode",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},tooltip:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},status:{required:!1,tsType:{name:"union",raw:`| "default"
| "success"
| "warning"
| "error"
| "inactive"
| "pending"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"inactive"'},{name:"literal",value:'"pending"'}]},description:""},isPinned:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const be={title:"App Components/WorkflowNode",component:H,argTypes:{icon:{control:{disable:!0}}},parameters:{layout:"centered"},decorators:[(o,{parameters:a})=>e.jsx(ie,{defaultSelected:a.nodeShellDefaultSelected,isDisabled:a.nodeShellIsDisabled,children:e.jsx(o,{})})]};function ie({children:o,defaultSelected:a=!1,isDisabled:n=!1}){const[s,r]=b.useState(a),u=b.useRef(null);b.useEffect(()=>{function t(k){u.current&&!u.current.contains(k.target)&&r(!1)}return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const m=()=>{n||r(!0)},p=t=>{n||((t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r(!0)),t.key==="Escape"&&r(!1))};return e.jsx("div",{ref:u,role:"group",tabIndex:n?-1:0,"aria-selected":s,className:$("react-flow__node",s&&"selected",n&&"disabled"),onClick:t=>{t.stopPropagation(),m()},onKeyDown:p,style:{outline:"none"},children:o})}const f={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"default"}},g={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"default"},parameters:{nodeShellDefaultSelected:!0}},h={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"success"}},x={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"warning"}},j={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"error"}},v={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"inactive"}},S={parameters:{nodeShellIsDisabled:!0},args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"pending"}},w={args:{title:"Send Message",description:"post:message",icon:e.jsx(l,{}),status:"default",isPinned:!0}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default"
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default"
  },
  parameters: {
    nodeShellDefaultSelected: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "success"
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "warning"
  }
}`,...x.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "error"
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "inactive"
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    nodeShellIsDisabled: true
  },
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "pending"
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default",
    isPinned: true
  }
}`,...w.parameters?.docs?.source}}};const $e=["Overview","Selected","StatusSuccess","StatusWarning","StatusError","StatusInactive","StatusPending","Pinned"];export{f as Overview,w as Pinned,g as Selected,j as StatusError,v as StatusInactive,S as StatusPending,h as StatusSuccess,x as StatusWarning,$e as __namedExportsOrder,be as default};
