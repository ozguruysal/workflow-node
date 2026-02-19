import { DeleteIcon } from "../../icons";
import { Button } from "./Button";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  decorators: [
    (Story) => <div style={{ display: "flex", gap: "0.75rem" }}>{Story()}</div>,
  ],
  render: () => (
    <>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  ),
};

export const Sizes: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {Story()}
      </div>
    ),
  ],
  render: () => (
    <>
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
  ),
};

export const IconOnly: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {Story()}
      </div>
    ),
  ],
  render: () => (
    <>
      <Button
        iconOnly
        size="sm"
        iconBefore={<DeleteIcon />}
        aria-label="Delete"
      />

      <Button
        iconOnly
        size="md"
        iconBefore={<DeleteIcon />}
        aria-label="Delete"
      />
      <Button
        iconOnly
        size="lg"
        iconBefore={<DeleteIcon />}
        aria-label="Delete"
      />
      <Button
        iconOnly
        size="sm"
        variant="ghost"
        iconBefore={<DeleteIcon />}
        aria-label="Delete"
      />

      <Button
        iconOnly
        size="md"
        variant="ghost"
        iconBefore={<DeleteIcon />}
        aria-label="Delete"
      />
      <Button
        iconOnly
        size="lg"
        variant="ghost"
        iconBefore={<DeleteIcon />}
        aria-label="Delete"
      />
    </>
  ),
};
