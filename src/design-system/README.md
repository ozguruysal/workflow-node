# Design System

The design system is the foundation of the project. It contains all reusable primitives, visual tokens, and interaction patterns that higher-level components are built from.

## Structure

```
design-system/
├── components/        # Unstyled primitives built on React Aria
│   ├── Button/
│   ├── Menu/
│   ├── Spinner/
│   └── index.ts       # Public exports
├── icons/             # SVG icon components
├── styles/
│   ├── tokens.css     # Design tokens (colors, typography, spacing)
│   ├── preflight.css  # Reset styles
│   └── main.css       # Global styles
└── icon.stories.tsx   # Storybook documentation
```

## Design Tokens

All visual properties are defined as CSS custom properties in [styles/tokens.css](./styles/tokens.css). This enables:

- **Single source of truth** - Change a color once, updates everywhere
- **Easy theming** - Add dark mode by overriding variables in a media query
- **Runtime flexibility** - Tokens can be changed without recompiling
- **Bundle size** - Smaller than CSS-in-JS solutions

### Token Categories

**Colors** - Background, foreground, border, and semantic (success, warning, danger) colors
**Typography** - Font family, sizes, line heights, weights
**Spacing** - Base unit system for consistent padding/margins

Only a minimal set is defined for brevity. In a real design system, these would include:

- Complete color palette with multiple lightness levels
- Comprehensive typography scale (2xs through 4xl)
- Motion tokens (animation duration, easing)
- Shadow tokens for depth

## Primitives

Primitive components are intentionally minimal. They're meant to be composed together to build features.

### Principles

1. **Built on React Aria** - All primitives inherit accessibility patterns from React Aria Components. Keyboard navigation, focus management, and ARIA attributes work correctly by default.

2. **Thin styling wrapper** - Primitives add just enough styling to be functional. They don't impose strong visual opinions. This keeps them flexible for different contexts.

3. **Composable API** - Props should support common usage patterns without forcing specific structures.

### Button

The Button component wraps React Aria's `<Button>` and adds design system styling.

**Features:**

- Three sizes: `sm`, `md`, `lg`
- Two variants: `outline`, `ghost`
- Icon support with `iconBefore` prop
- Icon-only mode with enforced `aria-label`

**TypeScript Safety:**

```tsx
// This is valid:
<Button>Click me</Button>
<Button iconBefore={<Icon />}>With icon</Button>

// This requires aria-label:
<Button iconOnly iconBefore={<Icon />} aria-label="Close" />

// This won't compile (missing aria-label):
<Button iconOnly iconBefore={<Icon />} />  // ❌ Error
```

The Button component uses TypeScript's union types to enforce that `iconOnly` mode requires both `iconBefore` and `aria-label`.

### Menu

The Menu component wraps React Aria's menu and adds keyboard support, ARIA attributes, and design tokens.

**Features:**

- Keyboard navigation (Arrow Up/Down, Enter to select)
- Disabled state support
- Danger variant for destructive actions (delete, etc.)
- Popover positioning

**Usage:**

```tsx
<MenuTrigger>
  <Button>⋮</Button>
  <Menu>
    <MenuItem>Option 1</MenuItem>
    <MenuItem colorVariant="danger">Delete</MenuItem>
  </Menu>
</MenuTrigger>
```

### Spinner

A simple loading indicator that rotates. Uses CSS animation tied to token values for smooth motion.

**Features:**

- Lightweight (pure CSS animation, no JavaScript)

**Usage:**

```tsx
<Spinner />
```

## Building New Primitives

When adding a new primitive component:

1. **Create the component structure:**

```
components/ComponentName/
├── ComponentName.tsx
├── component-name.css
├── ComponentName.stories.tsx
└── index.ts
```

2. **Start with React Aria:**

```tsx
import { SomeComponent as ReactAriaSomeComponent } from "react-aria-components";

export function SomeComponent(props) {
  return <ReactAriaSomeComponent {...props} />;
}
```

3. **Add styling:**

```css
.ds-component-name {
  background: var(--background-base);
  border: 1px solid var(--border-base);
  /* Use tokens, not hardcoded values */
}
```

4. **Export from index.ts:**

```ts
export { SomeComponent } from "./SomeComponent";
export type { SomeComponentProps } from "./SomeComponent";
```

5. **Add to design-system/components/index.ts:**

```ts
export { SomeComponent } from "./SomeComponent";
```

6. **Create a Storybook story:**

```tsx
export default {
  title: "Primitives/SomeComponent",
  component: SomeComponent,
};

export const Default = () => <SomeComponent />;
export const WithIcon = () => <SomeComponent icon={<Icon />} />;
```

## Icons

Icon components are SVG wrappers that inherit colors from parent via CSS custom properties or explicit props.

```tsx
import { PlayIcon } from "design-system/icons";

<PlayIcon />
<PlayIcon style={{ color: "var(--foreground-icon-success)" }} />
```

Icons follow the naming convention `{Name}Icon.tsx` and are exported from `icons/index.ts`.

## Accessibility

All primitives prioritize accessibility:

- **Keyboard Navigation** - All interactive elements are keyboard accessible
- **Focus Management** - Visual focus indicators are clear and prominent
- **ARIA Attributes** - Roles, labels, and states are properly set
- **Color Contrast** - All color tokens meet WCAG AA standards
- **Testing** - Use Storybook's a11y addon to audit components

To check accessibility of a component in Storybook, click the "Accessibility" tab. It runs Axe automaticaly on the component.

## Theming

Thanks to the token-based architecture, adding new themes is straightforward.

### Light Theme (Default)

All tokens are defined in `styles/tokens.css` under `:root`.

### Adding Dark Theme

Create a new media query in `styles/tokens.css`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background-base: #1a1a1a;
    --foreground-text-base: #e0e0e0;
    /* ... override other tokens as needed */
  }
}
```

Users' system preference is automatically detected. No JavaScript needed.

## Best Practices

1. **Use tokens, not hardcoded values** - Any hardcoded color, size, or spacing is a missed theming opportunity
2. **Compose over customize** - Create new components by combining existing primitives rather than adding new variants
3. **Document with stories** - Every prop variation should have a Storybook story
4. **Test keyboard navigation** - Manually test Tab, Enter, Space, Arrow keys
5. **Keep primitives small** - A primitive should do one thing. If it's doing multiple things, it's probably a composed component
