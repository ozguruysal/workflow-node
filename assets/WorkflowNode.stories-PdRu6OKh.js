import{j as e}from"./jsx-runtime-u17CrQMm.js";import{$ as F,a as V,b as H,c as A,d as B,e as _,f as Z,g as L}from"./ProgressBar-CtmT6aGP.js";import{r as x,R as z}from"./iframe-DXlk1TlS.js";import{$ as w,a as K,b as G,B as R}from"./Button-Z-V4npKE.js";import{$ as U,M as X,a as J,b as Q,c as D,d as c,e as l,f as u,g as Y}from"./MoreIcon-DF54ukVI.js";import{P as ee,a as se,C as ae,b as re,W as te}from"./WarningIcon-7bbIdw6E.js";import{S as ne}from"./Spinner-BlYvaF2r.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZO5XO3.js";import"./index-AxSoEz16.js";import"./index-DPNUW_Gs.js";function oe(o,s){const{"aria-label":n,"aria-labelledby":r,orientation:t="horizontal"}=o;let[i,h]=x.useState(!1);F(()=>{var a;h(!!(s.current&&(!((a=s.current.parentElement)===null||a===void 0)&&a.closest('[role="toolbar"]'))))});const{direction:v}=V(),m=v==="rtl"&&t==="horizontal";let p=U(s);const N=a=>{if(w(a.currentTarget,a.target)){if(t==="horizontal"&&a.key==="ArrowRight"||t==="vertical"&&a.key==="ArrowDown")m?p.focusPrevious():p.focusNext();else if(t==="horizontal"&&a.key==="ArrowLeft"||t==="vertical"&&a.key==="ArrowUp")m?p.focusNext():p.focusPrevious();else if(a.key==="Tab"){a.stopPropagation(),d.current=document.activeElement,a.shiftKey?p.focusFirst():p.focusLast();return}else return;a.stopPropagation(),a.preventDefault()}},d=x.useRef(null),b=a=>{!w(a.currentTarget,a.relatedTarget)&&!d.current&&(d.current=a.target)},j=a=>{if(d.current&&!w(a.currentTarget,a.relatedTarget)&&w(s.current,a.target)){var g;(g=d.current)===null||g===void 0||g.focus(),d.current=null}};return{toolbarProps:{...H(o,{labelable:!0}),role:i?"group":"toolbar","aria-orientation":t,"aria-label":n,"aria-labelledby":n==null?r:void 0,onKeyDownCapture:i?void 0:N,onFocusCapture:i?void 0:j,onBlurCapture:i?void 0:b}}}const ie=x.createContext({}),ce=x.forwardRef(function(s,n){[s,n]=A(s,n,ie);let{isDisabled:r,isInvalid:t,isReadOnly:i,onHoverStart:h,onHoverChange:v,onHoverEnd:m,...p}=s;r??(r=!!s["aria-disabled"]&&s["aria-disabled"]!=="false"),t??(t=!!s["aria-invalid"]&&s["aria-invalid"]!=="false");let{hoverProps:N,isHovered:d}=K({onHoverStart:h,onHoverChange:v,onHoverEnd:m,isDisabled:r}),{isFocused:b,isFocusVisible:j,focusProps:a}=G({within:!0}),g=B({...s,values:{isHovered:d,isFocusWithin:b,isFocusVisible:j,isDisabled:r,isInvalid:t},defaultClassName:"react-aria-Group"});var E,T;return z.createElement(_.div,{...Z(p,a,N),...g,ref:n,role:(E=s.role)!==null&&E!==void 0?E:"group",slot:(T=s.slot)!==null&&T!==void 0?T:void 0,"data-focus-within":b||void 0,"data-hovered":d||void 0,"data-focus-visible":j||void 0,"data-disabled":r||void 0,"data-invalid":t||void 0,"data-readonly":i||void 0},g.children)}),le=x.createContext({}),de=x.forwardRef(function(s,n){[s,n]=A(s,n,le);let{toolbarProps:r}=oe(s,n),t=B({...s,values:{orientation:s.orientation||"horizontal"},defaultClassName:"react-aria-Toolbar"}),i=H(s,{global:!0});return delete i.id,z.createElement(_.div,{...Z(i,t,r),ref:n,slot:s.slot||void 0,"data-orientation":s.orientation||"horizontal"},t.children)});function O(o){return e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...o,children:e.jsx("path",{d:"M16.3944 12.0001L10 7.7371V16.263L16.3944 12.0001ZM19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"})})}O.__docgenInfo={description:"",methods:[],displayName:"PlayIcon"};function W(o){return e.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...o,children:e.jsx("path",{d:"M6.26489 3.80698L7.41191 5.44558C5.34875 6.89247 4 9.28873 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 9.28873 18.6512 6.89247 16.5881 5.44558L17.7351 3.80698C20.3141 5.61559 22 8.61091 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.61091 3.68594 5.61559 6.26489 3.80698ZM11 12V2H13V12H11Z"})})}W.__docgenInfo={description:"",methods:[],displayName:"PowerIcon"};const q=o=>{const{title:s,description:n,icon:r,status:t,isPinned:i=!1,isSelected:h=!1,isActive:v=!0,className:m}=o;return e.jsxs(ce,{className:L("workflow-node",t,i&&"pinned",h&&"selected",m),tabIndex:0,children:[e.jsx(ue,{status:t,isPinned:i}),e.jsx(fe,{isActive:v}),e.jsxs("div",{className:L("workflow-node-card",m),children:[r&&e.jsx("div",{className:"workflow-node-icon",children:r}),e.jsxs("div",{className:"workflow-node-text",children:[e.jsx("div",{className:"workflow-node-title",children:s}),n&&e.jsx("div",{className:"workflow-node-description",children:n})]})]})]})};function ue(o){const{status:s,isPinned:n}=o;let r=null;switch(n&&(r=e.jsx(ee,{})),s){case"warning":r=e.jsx(te,{});break;case"success":r=e.jsx(re,{});break;case"error":r=e.jsx(ae,{});break;case"inactive":r=e.jsx(se,{});break;case"pending":r=e.jsx(ne,{});break}return e.jsx("div",{className:"workflow-node-status-icon",children:r})}function fe(o){const{isActive:s,className:n}=o;return e.jsxs(de,{className:L("workflow-node-toolbar",n),children:[e.jsx(R,{size:"sm",variant:"ghost",iconOnly:!0,iconBefore:e.jsx(O,{}),"aria-label":"Run node"}),e.jsx(R,{size:"sm",variant:"ghost",iconOnly:!0,iconBefore:e.jsx(W,{}),"aria-label":s?"Deactivate node":"Activate node"}),e.jsxs(X,{children:[e.jsx(R,{className:"workflow-node-menu-trigger",size:"sm",variant:"ghost",iconOnly:!0,iconBefore:e.jsx(J,{}),"aria-label":"More options"}),e.jsxs(Q,{children:[e.jsxs(D,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"Open..."}),e.jsx(u,{children:"↵"})]}),e.jsx(c,{children:e.jsx(l,{children:"Execute step"})}),e.jsxs(c,{children:[e.jsx(l,{children:"Rename"}),e.jsx(u,{children:"Space"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"Replace"}),e.jsx(u,{children:"R"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"Deactivate"}),e.jsx(u,{children:"D"})]}),e.jsxs(c,{isDisabled:!0,children:[e.jsx(l,{children:"Pin"}),e.jsx(u,{children:"P"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"Copy"}),e.jsx(u,{children:"⌘C"})]}),e.jsxs(c,{children:[e.jsx(l,{children:"Duplicate"}),e.jsx(u,{children:"⌘D"})]})]}),e.jsx(Y,{}),e.jsxs(D,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"Convert node to sub-workflow"}),e.jsx(u,{children:"ALT+X"})]}),e.jsxs(c,{colorVariant:"danger",children:[e.jsx(l,{children:"Delete"}),e.jsx(u,{children:"Del"})]})]})]})]})]})}q.__docgenInfo={description:"",methods:[],displayName:"WorkflowNode",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},tooltip:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},status:{required:!0,tsType:{name:"union",raw:`| "default"
| "warning"
| "error"
| "inactive"
| "pending"
| "success"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"inactive"'},{name:"literal",value:'"pending"'},{name:"literal",value:'"success"'}]},description:""},isPinned:{required:!1,tsType:{name:"boolean"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};function f(o){return e.jsxs("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",...o,children:[e.jsxs("g",{"clip-path":"url(#a)",children:[e.jsx("path",{fill:"#E01E5A",d:"M6.854 20.157a3.323 3.323 0 0 1-3.326 3.326 3.323 3.323 0 0 1-3.326-3.326 3.323 3.323 0 0 1 3.326-3.326h3.326v3.326Zm1.663 0a3.323 3.323 0 0 1 3.325-3.326 3.323 3.323 0 0 1 3.326 3.326v8.315a3.323 3.323 0 0 1-3.325 3.326 3.323 3.323 0 0 1-3.326-3.326v-8.315Z"}),e.jsx("path",{fill:"#36C5F0",d:"M11.842 6.803a3.323 3.323 0 0 1-3.325-3.326A3.323 3.323 0 0 1 11.842.151a3.323 3.323 0 0 1 3.326 3.326v3.326h-3.325Zm0 1.688a3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.325 3.326h-8.34a3.323 3.323 0 0 1-3.327-3.326 3.323 3.323 0 0 1 3.326-3.326h8.34Z"}),e.jsx("path",{fill:"#2EB67D",d:"M25.172 11.817a3.323 3.323 0 0 1 3.326-3.326 3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.326 3.326h-3.326v-3.326Zm-1.663 0a3.323 3.323 0 0 1-3.326 3.326 3.323 3.323 0 0 1-3.326-3.326v-8.34A3.323 3.323 0 0 1 20.183.151a3.323 3.323 0 0 1 3.326 3.326v8.34Z"}),e.jsx("path",{fill:"#ECB22E",d:"M20.183 25.146a3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.326 3.326 3.323 3.323 0 0 1-3.326-3.326v-3.326h3.326Zm0-1.663a3.323 3.323 0 0 1-3.326-3.326 3.323 3.323 0 0 1 3.326-3.326h8.34a3.323 3.323 0 0 1 3.326 3.326 3.323 3.323 0 0 1-3.326 3.326h-8.34Z"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"a",children:e.jsx("path",{fill:"#fff",d:"M0 0h32v32H0z"})})})]})}f.__docgenInfo={description:"",methods:[],displayName:"SlackLogo"};const Ce={title:"App Components/WorkflowNode",component:q,argTypes:{icon:{control:{disable:!0}}},parameters:{layout:"centered"}},$={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"default"}},S={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"default",isSelected:!0}},C={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"success"}},k={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"warning"}},y={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"error"}},P={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"inactive"}},M={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"pending"}},I={args:{title:"Send Message",description:"post:message",icon:e.jsx(f,{}),status:"default",isPinned:!0}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default"
  }
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default",
    isSelected: true
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "success"
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "warning"
  }
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "error"
  }
}`,...y.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "inactive"
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "pending"
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default",
    isPinned: true
  }
}`,...I.parameters?.docs?.source}}};const ke=["Overview","Selected","StatusSuccess","StatusWarning","StatusError","StatusInactive","StatusPending","Pinned"];export{$ as Overview,I as Pinned,S as Selected,y as StatusError,P as StatusInactive,M as StatusPending,C as StatusSuccess,k as StatusWarning,ke as __namedExportsOrder,Ce as default};
