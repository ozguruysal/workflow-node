import {
  Group,
  Keyboard,
  MenuSection,
  Separator,
  Text,
  Toolbar,
} from "react-aria-components";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
} from "../../design-system/components";
import { PlayIcon } from "../../design-system/icons/PlayIcon";
import { PowerIcon } from "../../design-system/icons/PowerIcon";
import { MoreIcon } from "../../design-system/icons/MoreIcon";
import clsx from "clsx";

import "./workflow-node.css";
import React from "react";

type NodeStatus =
  | "default"
  | "warning"
  | "error"
  | "inactive"
  | "pending"
  | "success";

export type WorkflowNodeProps = {
  title: string;
  description?: string;
  icon?: React.ReactElement;
  tooltip?: React.ReactElement;
  status: NodeStatus;
  isPinned?: boolean;
  isActive?: boolean;
  className?: string;
};

export const WorkflowNode = (props: WorkflowNodeProps) => {
  const {
    title,
    description,
    icon,
    // tooltip,
    // status,
    // isPinned,
    className,
    isActive = true,
  } = props;

  return (
    <Group className="workflow-node" tabIndex={0}>
      <WorkflowNodeToolbar isActive={isActive} />

      <div className={clsx("workflow-node-group", className)}>
        <div className="workflow-node-content">
          {icon && <div className="workflow-node-icon">{icon}</div>}

          <div className="workflow-node-text">
            <div className="workflow-node-title">{title}</div>
            {description && (
              <div className="workflow-node-description">{description}</div>
            )}
          </div>
        </div>
      </div>
    </Group>
  );
};

type WorkflowNodeToolbarProps = {
  isActive: boolean;
  className?: string;
};

function WorkflowNodeToolbar(props: WorkflowNodeToolbarProps) {
  const { isActive, className } = props;

  return (
    <Toolbar className={clsx("workflow-node-toolbar", className)}>
      <Button
        size="sm"
        variant="ghost"
        iconOnly
        iconBefore={<PlayIcon />}
        aria-label="Run node"
      />
      <Button
        size="sm"
        variant="ghost"
        iconOnly
        iconBefore={<PowerIcon />}
        aria-label={isActive ? "Deactivate node" : "Activate node"}
      />

      <MenuTrigger>
        <Button
          className="workflow-node-menu-trigger"
          size="sm"
          variant="ghost"
          iconOnly
          iconBefore={<MoreIcon />}
          aria-label="More options"
        />

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
    </Toolbar>
  );
}
