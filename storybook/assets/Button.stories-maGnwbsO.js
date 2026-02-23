import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./WarningIcon-WH_5cDcn.js";import"./MoreIcon-DveVNoaj.js";import{B as n}from"./Button-hcpaSDtH.js";import"./ProgressBar-CovNuMyC.js";import"./iframe-Xcm6Fwwe.js";import"./preload-helper-D-J_ZxmD.js";import"./index-CJpy7-ai.js";import"./index-DLAjdeUQ.js";const y={title:"Components/Button",component:n,args:{children:"Button"},parameters:{layout:"centered"}},s={args:{children:"Button"}},a={decorators:[t=>e.jsx("div",{style:{display:"flex",gap:"0.75rem"},children:t()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"ghost",children:"Ghost"})]})},o={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:t()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",children:"Small Outline"}),e.jsx(n,{size:"md",children:"Medium Outline"}),e.jsx(n,{size:"lg",children:"Large Outline"}),e.jsx(n,{size:"sm",variant:"ghost",children:"Small Ghost"}),e.jsx(n,{size:"md",variant:"ghost",children:"Medium Ghost"}),e.jsx(n,{size:"lg",variant:"ghost",children:"Large Ghost"})]})},i={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:t()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{iconOnly:!0,size:"sm",iconBefore:e.jsx(r,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"md",iconBefore:e.jsx(r,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"lg",iconBefore:e.jsx(r,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"sm",variant:"ghost",iconBefore:e.jsx(r,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"md",variant:"ghost",iconBefore:e.jsx(r,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"lg",variant:"ghost",iconBefore:e.jsx(r,{}),"aria-label":"Delete"})]})},l={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:t()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Disabled"}),e.jsx(n,{isDisabled:!0,variant:"outline",children:"Disabled"}),e.jsx(n,{isDisabled:!0,variant:"ghost",children:"Disabled"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    gap: "0.75rem"
  }}>{Story()}</div>],
  render: () => <>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "0.75rem"
  }}>
        {Story()}
      </div>],
  render: () => <>
      <Button size="sm">Small Outline</Button>
      <Button size="md">Medium Outline</Button>
      <Button size="lg">Large Outline</Button>
      <Button size="sm" variant="ghost">
        Small Ghost
      </Button>
      <Button size="md" variant="ghost">
        Medium Ghost
      </Button>
      <Button size="lg" variant="ghost">
        Large Ghost
      </Button>
    </>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "0.75rem"
  }}>
        {Story()}
      </div>],
  render: () => <>
      <Button iconOnly size="sm" iconBefore={<DeleteIcon />} aria-label="Delete" />

      <Button iconOnly size="md" iconBefore={<DeleteIcon />} aria-label="Delete" />
      <Button iconOnly size="lg" iconBefore={<DeleteIcon />} aria-label="Delete" />
      <Button iconOnly size="sm" variant="ghost" iconBefore={<DeleteIcon />} aria-label="Delete" />

      <Button iconOnly size="md" variant="ghost" iconBefore={<DeleteIcon />} aria-label="Delete" />
      <Button iconOnly size="lg" variant="ghost" iconBefore={<DeleteIcon />} aria-label="Delete" />
    </>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    alignItems: "center",
    gap: "0.75rem"
  }}>
        {Story()}
      </div>],
  render: () => <>
      <Button isDisabled>Disabled</Button>
      <Button isDisabled variant="outline">
        Disabled
      </Button>
      <Button isDisabled variant="ghost">
        Disabled
      </Button>
    </>
}`,...l.parameters?.docs?.source}}};const v=["Overview","Variants","Sizes","IconOnly","Disabled"];export{l as Disabled,i as IconOnly,s as Overview,o as Sizes,a as Variants,v as __namedExportsOrder,y as default};
