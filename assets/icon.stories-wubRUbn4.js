import{j as e}from"./jsx-runtime-u17CrQMm.js";import{b as i,C as c,D as p,P as d,a as l,W as m}from"./WarningIcon-7bbIdw6E.js";const t=Object.freeze(Object.defineProperty({__proto__:null,CheckboxCircleIcon:i,CloseCircleIcon:c,DeleteIcon:p,PinIcon:d,ProhibitedIcon:l,WarningIcon:m},Symbol.toStringTag,{value:"Module"})),s=({children:n,style:r})=>e.jsx("div",{style:r,children:n}),x={...t},f={title:"Components/Icons",component:s},o={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:"1.5rem"},children:Object.keys(t).map((n,r)=>{const a=x[n];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"8px",border:"1px solid var(--border-base)",padding:"1.5rem"},children:[e.jsx(s,{style:{width:"24px",height:"24px",color:"var(--foreground-icon-base)"},children:e.jsx(a,{})},r),e.jsx("p",{style:{marginTop:"0.75rem",fontSize:"var(--font-size-sm)"},children:n.replace("Icon","")})]},n)})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "1.5rem"
  }}>
      {Object.keys(Icons).map((iconName, idx) => {
      const IconComponent = IconMap[iconName];
      return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid var(--border-base)",
        padding: "1.5rem"
      }} key={iconName}>
            <IconWrapper key={idx} style={{
          width: "24px",
          height: "24px",
          color: "var(--foreground-icon-base)"
        }}>
              <IconComponent />
            </IconWrapper>

            <p style={{
          marginTop: "0.75rem",
          fontSize: "var(--font-size-sm)"
        }}>
              {iconName.replace("Icon", "")}
            </p>
          </div>;
    })}
    </div>
}`,...o.parameters?.docs?.source}}};const g=["AllIcons"];export{o as AllIcons,g as __namedExportsOrder,f as default};
