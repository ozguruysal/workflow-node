import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => <Spinner />,
};
