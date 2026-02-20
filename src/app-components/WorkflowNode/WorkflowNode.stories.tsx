import type { Meta, StoryObj } from "@storybook/react-vite";

import { WorkflowNode } from "./WorkflowNode";
import { SlackLogo } from "../workflow-icons/SlackLogo";

const meta = {
  title: "App Components/WorkflowNode",
  component: WorkflowNode,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WorkflowNode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <WorkflowNode
      status="default"
      title="Send Message"
      description="post:message"
      icon={<SlackLogo />}
    />
  ),
};
