# Workflow Node

A modern, accessible node component for workflow automation interfaces. Built as a design system prototype that expands on the current n8n node design which aims to improve visual clarity, accessibility, and composition patterns.

## Live Deployment

**[View WorkflowNode component in a React app →](https://ozguruysal.github.io/workflow-node/)**

**[View Design System Storybook →](https://ozguruysal.github.io/workflow-node/)**

## Design Files

🎨 **[Workflow Node Component.fig](./Workflow%20Node%20Component.fig)** - Visual guide for development and proof of concept for the reusable component. Not a polished design asset, but rather a reference for implementation.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start Storybook (view components in isolation)
pnpm storybook
```

Storybook runs on `http://localhost:6006` and includes interactive stories for all components.

## Project Structure

```
src/
├── design-system/         # Reusable primitives and design tokens
│   ├── components/        # Base components (Button, Menu, Spinner)
│   ├── icons/             # Icon components
│   └── styles/            # Global tokens and theme variables
├── app-components/        # Domain-specific components
│   ├── WorkflowNode/      # The main node component
│   └── workflow-icons/    # App-level icon compositions
└── App.tsx                # Demo application
```

Each layer is documented separately. See [design-system](./src/design-system/README.md) and [app-components](./src/app-components/README.md) for detailed architectural decisions.

## What's Different

### 1. Accessibility First

Instead of bolting accessibility onto design, I made it foundational. All components are built on [React Aria Components](https://react-aria.adobe.com/), which handles keyboard navigation, focus management, and ARIA attributes correctly by default.

This means:

- Keyboard navigation works out of the box (focus management, arrow keys, Enter/Space)
- Screen reader support is built-in, not an afterthought
- WCAG compliance patterns are already tested

### 2. Design System Architecture

The project separates concerns into three layers:

**Design Tokens** → Semantic tokens (colors, typography, spacing) defined once, used everywhere. Currently only a small set of tokens are defined, and core tokens are completely skipped for brevity.

**Primitives** → Base components (Button, Menu, Spinner) wrapping React Aria with design tokens.

**Composition** → App-level components (WorkflowNode) that assemble primitives into features.

This structure makes it trivial to add new themes or modify the design language without touching component logic.

### 3. Enhanced Visual Language

The node design moved from color-only state indication to a multi-layered approach:

- **Status Icons** - Consistent placement (top-left corner) with status-specific icons (success ✓, error ✗, warning ⚠, pending ⏳, inactive 🚫). This gives users an instant visual hook and helps those with color blindness.
- **Border Treatment** - State-specific border colors that pair with status icons.
- **Accessibility-First Colors** - All state colors meet WCAG AA contrast ratios against the background.
- **Clear Information Hierarchy** - Card-based layout organizes the node content for quick scanning.

### 4. Thoughtful Interactions

Small details that compound into a polished feel:

- **Toolbar Appears on Demand** - Action buttons (play, power, menu) appear on hover to reduce visual noise. Smooth fade-in with `opacity: 0 → 1` transition.
- **Flicker Prevention** - Invisible `::before` pseudo-element extends the hover area between the node and toolbar, preventing toolbar flicker when the cursor moves over that gap.
- **Pending State** - Reduces opacity on all content to visually signal "this is blocked". Combined with the spinner icon for doubly clear feedback.

## Component API

### WorkflowNode

```tsx
<WorkflowNode
  title="Send Message"
  description="post:message"
  icon={<SlackIcon />}
  status="success" // "default" | "warning" | "error" | "inactive" | "pending" | "success"
  isPinned={false}
  isActive={true}
  isSelected={false}
/>
```

**Prop Notes:**

- The toolbar (play, power, menu buttons) is currently hardcoded and needs to be refactored based on the flowchart library integration (e.g., react-flow, reactflow).

### Primitive Components

**Button** - Base button component with size and variant support

```tsx
<Button size="sm" variant="ghost" iconBefore={<PlayIcon />} aria-label="Run">
  Run
</Button>
```

**Menu** - Menu with keyboard support

```tsx
<MenuTrigger>
  <Button>⋮</Button>
  <Menu>
    <MenuItem>Copy</MenuItem>
    <MenuItem>Delete</MenuItem>
  </Menu>
</MenuTrigger>
```

**Spinner** - Animated loading indicator

```tsx
<Spinner />
```

## Design Tokens

Colors, typography, and spacing are managed through CSS custom properties. This makes theming trivial — just override the CSS variables:

```css
:root {
  --background-base: #ffffff;
  --foreground-text-base: #333333;
  --border-success: #29a360;
  /* ... etc */
}
```

Add a dark theme by using `@media (prefers-color-scheme: dark)` to override only what needs to change.

## What Still Needs Work

### 1. WorkflowNode API Integration

The component currently accepts a hardcoded toolbar, but in production it would be integrated with a flowchart library (react-flow, etc.). The API needs to be refactored to:

- Accept callback props (`onPlay`, `onTogglePower`, `onMenuAction` etc.)
- Handle node selection managed by the parent flowchart library

### 2. Focus Management & Keyboard Navigation

The node has a `tabindex="0"` and can receive focus, but full keyboard navigation (arrow keys for moving between nodes, shortcuts for actions) requires integration with the flowchart library. This needs to be coordinated with the parent component managing the node graph so keyboard events are properly routed and context is maintained.

### 3. Missing States

I may be most probably missing some other states like a retry state.

### 4. Tooltip Support

The `tooltip` prop is stubbed but not implemented. This would show additional context on hover in different states.

### 5. Dark Mode

CSS variables are defined for light mode only. A complete dark theme would:

- Override color tokens for dark backgrounds
- Ensure sufficient contrast in dark mode
- Store theme preference in localStorage

## Tech Stack Decisions

**React + TypeScript**

- Chosen for familiarity and productivity within the 8-hour window
- TypeScript catches component API misuse at compile time (e.g., `iconOnly` requires `iconBefore` and `aria-label`)

**React Aria Components**

- Provides accessible, unstyled components (Button, Menu, etc.)
- Handles keyboard navigation, focus management, ARIA attributes
- Much lighter than full UI frameworks like Material-UI
- Maintained actively by Adobe.

**Vite + SWC**

- Fast build times during development
- TypeScript + JavaScript without heavyweight tooling

**Storybook**

- Isolated component development and documentation
- Accessibility audit addon built-in
- Auto documentation

**CSS Modules + CSS Variables**

- Component styles scoped to avoid cascading issues
- Variables enable theming without JavaScript
- Smaller bundle size than CSS-in-JS
