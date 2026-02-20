import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./WarningIcon-7bbIdw6E.js";import{B as n}from"./Button-Z-V4npKE.js";import"./ProgressBar-CtmT6aGP.js";import"./iframe-DXlk1TlS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CjZO5XO3.js";import"./index-AxSoEz16.js";const h={title:"Components/Button",component:n,args:{children:"Button"},parameters:{layout:"centered"}},o={args:{children:"Button"}},s={decorators:[r=>e.jsx("div",{style:{display:"flex",gap:"0.75rem"},children:r()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"ghost",children:"Ghost"})]})},a={decorators:[r=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:r()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",children:"Small Outline"}),e.jsx(n,{size:"md",children:"Medium Outline"}),e.jsx(n,{size:"lg",children:"Large Outline"}),e.jsx(n,{size:"sm",variant:"ghost",children:"Small Ghost"}),e.jsx(n,{size:"md",variant:"ghost",children:"Medium Ghost"}),e.jsx(n,{size:"lg",variant:"ghost",children:"Large Ghost"})]})},i={decorators:[r=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:r()})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{iconOnly:!0,size:"sm",iconBefore:e.jsx(t,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"md",iconBefore:e.jsx(t,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"lg",iconBefore:e.jsx(t,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"sm",variant:"ghost",iconBefore:e.jsx(t,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"md",variant:"ghost",iconBefore:e.jsx(t,{}),"aria-label":"Delete"}),e.jsx(n,{iconOnly:!0,size:"lg",variant:"ghost",iconBefore:e.jsx(t,{}),"aria-label":"Delete"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    gap: "0.75rem"
  }}>{Story()}</div>],
  render: () => <>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const x=["Overview","Variants","Sizes","IconOnly"];export{i as IconOnly,o as Overview,a as Sizes,s as Variants,x as __namedExportsOrder,h as default};
