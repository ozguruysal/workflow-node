# App Components

App-specific components built by composing primitives from the design system. These are the higher-level, domain-aware components that make up feature UI.

## Structure

```
app-components/
├── WorkflowNode/
│   ├── WorkflowNode.tsx
│   ├── workflow-node.css
│   └── WorkflowNode.stories.tsx
└── workflow-icons/
    └── SlackLogo.tsx
```

## WorkflowNode

The core component of this project — a node representing a single step in an automation workflow. It's designed to show status, accept user input, and integrate into a larger flowchart interface.

### Component API

```tsx
<WorkflowNode
  title="Send Message"
  description="post:message"
  icon={<SlackIcon />}
  status="success"
  isPinned={false}
  isActive={true}
  isSelected={false}
/>
```

**Props:**

| Prop          | Type                                                                        | Default  | Description                               |
| ------------- | --------------------------------------------------------------------------- | -------- | ----------------------------------------- |
| `title`       | `string`                                                                    | Required | Node label                                |
| `description` | `string`                                                                    | Optional | Smaller text below title                  |
| `icon`        | `React.ReactElement`                                                        | Optional | Node icon (16x16px)                       |
| `status`      | `"default" \| "pending" \| "success" \| "error" \| "warning" \| "inactive"` | Required | Current state                             |
| `isPinned`    | `boolean`                                                                   | `false`  | Show pin icon in corner                   |
| `isActive`    | `boolean`                                                                   | `true`   | Node is active in workflow                |
| `isSelected`  | `boolean`                                                                   | `false`  | Node is selected (for canvas integration) |
| `className`   | `string`                                                                    | Optional | Additional classes                        |

### States

#### default

The starting state. Node is ready to execute but hasn't been run yet.

- No border highlight
- No status icon
- Toolbar visible on hover

#### pending

Node is currently executing. Combined with the spinner icon, this clearly signals "don't touch me, I'm working."

- Reduced opacity on all content (70%)
- Spinner icon in top-left
- Pointer events disabled (can't click during execution)

#### success

Last execution succeeded. Green border with checkmark icon signals "we're good."

- Green border
- Checkmark icon
- Accessible: not just green, also has the icon

#### error

Last execution failed. Red border with X icon signals error clearly.

- Red border
- X icon
- Can still interact (to retry, edit, etc.)

#### warning

Execution succeeded but with warnings (missing optional fields, partial data, etc.). Orange border with warning icon.

- Orange border
- Warning icon
- Useful for debugging workflows without hard failures

#### inactive

Node is disabled in the workflow. Desaturated appearance signals "this isn't running."

- Grayscale filter on inner content
- Prohibited icon
- Reduced opacity
- Toolbar still available (to re-enable)

### Toolbar

The toolbar appears on hover and contains:

1. **Play Button** - Execute this node (or execute from this point)
2. **Power Button** - Toggle node active/inactive
3. **More Menu** - Context actions (open, rename, delete, etc.)

**Design Rationale:**

- Appears on hover to reduce visual noise
- Icon-only to keep compact
- Invisible `::before` pseudo-element prevents toolbar flicker

**Current Limitation:**
The toolbar is currently hardcoded. In production, it needs to be wired to:

- The flowchart library's execution API
- Proper callback handlers (`onPlay`, `onTogglePower`)
- The parent component's state management

This requires integration with react-flow or similar, which would manage node positioning and selection globally.

### Status Icons

Each active status has a specific icon in a consistent location (top-left corner):

```
┌─ Icon
│
├─┬────────────┐
│ │ Title      │
│ ├────────────┤
│ │ Description│
└─┴────────────┘
```

This design serves multiple purposes:

1. **Accessibility** - Color-blind users aren't relying solely on border color
2. **Visual Hierarchy** - Icon draws the eye to status
3. **Mental Model** - Consistent position helps users learn faster

### Colors and Contrast

All state colors are carefully chosen to meet WCAG AA contrast standards:

- Success: `#29a360` (green) - 5.85:1 contrast
- Warning: `#d28f13` (orange) - 4.54:1 contrast
- Error: `#ea1f30` (red) - 4.65:1 contrast
- Inactive: `--background-base-disabled` with grayscale filter

This ensures that even users with color vision deficiency can distinguish states.

### Interactions

#### Hover State

When hovering over a node:

- Border brightens (if not default status)
- Toolbar fades in (non-intrusive, smooth transition)
- No flicker (thanks to `::before` pseudo-element magic)

#### Focus State

When navigating with keyboard:

- Node receives focus ring outline
- Can be tabbed to with Tab key
- Can trigger actions with arrow keys + Enter (when in flowchart context)

#### Pending State

When status is "pending":

- All content (except status icon) becomes slightly transparent
- Spinner animates
- Pointer events disabled
- This dual signal (visual + interaction) makes it crystal clear: "wait, don't click"

### Styling Architecture

The component uses CSS custom properties for all values:

```css
.workflow-node {
  --icon-color: var(--foreground-icon-warning);
  --border-color: var(--border-base);
  /* ... */
}

.workflow-node.success {
  --icon-color: var(--foreground-icon-success);
  --border-color: var(--border-success);
}
```

This approach makes it trivial to change colors globally (via design tokens) or add new states.

## What Still Needs Work

### 1. Toolbar Integration

Currently hardcoded. Needs to be refactored to:

- Accept `onPlay`, `onTogglePower`, `onMenuAction` callbacks
- Be managed by parent flowchart component
- Support dynamic action availability (don't show "Deactivate" if already inactive)

### 2. Menu Implementation

Menu structure is defined but actions don't do anything. Needs:

- Real handlers for each action
- Confirmation for destructive actions (delete)
- Inline rename capability
- Copy/duplicate functionality

### 3. Keyboard Shortcuts

Menu already shows shortcuts (↵, Space, R, etc.), but they're not wired up. The parent component would need to:

- Listen for keyboard events
- Check if a node is focused
- Trigger appropriate actions

### 4. Rich Tooltips

`tooltip` prop exists but isn't rendered. Could show:

- Execution time
- Input/output counts
- Error details
- Last run timestamp

## Integration with Flowchart Library

To integrate with react-flow or similar:

1. **Wrap WorkflowNode** - The flowchart library will provide its own `<Node>` wrapper. Put WorkflowNode inside:

```tsx
<Node>
  <WorkflowNode {...props} />
</Node>
```

2. **Handle Callbacks** - Connect button clicks to library actions:

```tsx
<WorkflowNode
  {...props}
  onPlay={() => executeNode(nodeId)}
  onTogglePower={() => toggleNodeActive(nodeId)}
/>
```

3. **Selection Management** - Library manages `isSelected` state:

```tsx
<WorkflowNode {...props} isSelected={selectedNodeId === nodeId} />
```

4. **Status Updates** - Parent updates status based on execution:

```tsx
const [nodes, setNodes] = useState([...]);
// When execution completes:
setNodes(nodes.map(n =>
  n.id === executedId ? { ...n, status: 'success' } : n
))
```
