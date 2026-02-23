import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as n,$ as a}from"./ButtonGroup-Cviqh3No.js";import{B as t}from"./Button-hcpaSDtH.js";import"./ProgressBar-CovNuMyC.js";import"./iframe-Xcm6Fwwe.js";import"./preload-helper-D-J_ZxmD.js";import"./FocusScope-DZrrVSmL.js";import"./index-CJpy7-ai.js";import"./index-DLAjdeUQ.js";const B={title:"Components/ButtonGroup",component:n,argTypes:{children:{control:!1}},parameters:{layout:"centered"}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(t,{children:"Cut"}),r.jsx(t,{children:"Copy"}),r.jsx(t,{children:"Paste"})]})}},o={args:{children:e.args?.children},render:s=>r.jsx(a,{children:r.jsx(n,{...s})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <Button>Cut</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
      </>
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: Overview.args?.children
  },
  render: args => <Toolbar>
      <ButtonGroup {...args} />
    </Toolbar>
}`,...o.parameters?.docs?.source},description:{story:"Wrapping the `ButtonGroup` in a `Toolbar` adds arrow key navigation",...o.parameters?.docs?.description}}};const x=["Overview","WithToolbar"];export{e as Overview,o as WithToolbar,x as __namedExportsOrder,B as default};
