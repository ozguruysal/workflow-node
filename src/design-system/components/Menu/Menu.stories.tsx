import type { Meta, StoryObj } from "@storybook/react-vite";

import { Menu, MenuItem, MenuSection, MenuTrigger } from "./Menu";
import { Button } from "../Button";
import { MoreIcon } from "../../icons/MoreIcon";
import { Keyboard, Separator, Text } from "react-aria-components";

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <MenuTrigger>
      <Button iconOnly iconBefore={<MoreIcon />} aria-label="Toggle Menu">
        Menu Trigger
      </Button>

      <Menu>
        <MenuSection>
          <MenuItem>
            <Text>Open...</Text>
            <Keyboard>↵</Keyboard>
          </MenuItem>

          <MenuItem>
            <Text>Execute step"</Text>
          </MenuItem>

          <MenuItem>
            <Text>Rename</Text>
            <Keyboard>Space</Keyboard>
          </MenuItem>

          <MenuItem>
            <Text>Replace</Text>
            <Keyboard>R</Keyboard>
          </MenuItem>

          <MenuItem>
            <Text>Deactivate</Text>
            <Keyboard>D</Keyboard>
          </MenuItem>

          <MenuItem isDisabled>
            <Text>Pin</Text>
            <Keyboard>P</Keyboard>
          </MenuItem>

          <MenuItem>
            <Text>Copy</Text>
            <Keyboard>⌘C</Keyboard>
          </MenuItem>

          <MenuItem>
            <Text>Duplicate</Text>
            <Keyboard>⌘D</Keyboard>
          </MenuItem>
        </MenuSection>

        <Separator />

        <MenuSection>
          <MenuItem>
            <Text>Convert node to sub-workflow</Text>
            <Keyboard>ALT+X</Keyboard>
          </MenuItem>

          <MenuItem colorVariant="danger">
            <Text>Delete</Text>
            <Keyboard>Del</Keyboard>
          </MenuItem>
        </MenuSection>
      </Menu>
    </MenuTrigger>
  ),
};
