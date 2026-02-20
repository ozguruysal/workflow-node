import type { Meta, StoryObj } from "@storybook/react-vite";

import { WorkflowNode } from "./WorkflowNode";
import { SlackLogo } from "../workflow-icons/SlackLogo";

const meta = {
  title: "App Components/WorkflowNode",
  component: WorkflowNode,
  argTypes: {
    icon: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WorkflowNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default",
  },
};

export const Selected: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default",
    isSelected: true,
  },
};

export const StatusSuccess: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "success",
  },
};

export const StatusWarning: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "warning",
  },
};

export const StatusError: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "error",
  },
};

export const StatusInactive: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "inactive",
  },
};

export const StatusPending: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "pending",
  },
};

export const Pinned: Story = {
  args: {
    title: "Send Message",
    description: "post:message",
    icon: <SlackLogo />,
    status: "default",
    isPinned: true,
  },
};
