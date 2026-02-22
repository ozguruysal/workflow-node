import { Toolbar } from "react-aria-components";
import { Button } from "../Button";
import { ButtonGroup } from "./ButtonGroup";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    children: (
      <>
        <Button>Cut</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
      </>
    ),
  },
};

/** Wrapping the `ButtonGroup` in a `Toolbar` adds arrow key navigation */
export const WithToolbar: Story = {
  args: {
    children: Overview.args?.children,
  },
  render: (args) => (
    <Toolbar>
      <ButtonGroup {...args} />
    </Toolbar>
  ),
};
