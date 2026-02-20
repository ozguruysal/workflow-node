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
import {
  CheckboxCircleIcon,
  CloseCircleIcon,
  PinIcon,
  ProhibitedIcon,
  WarningIcon,
} from "../../design-system/icons";

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
  tooltip?: React.ReactElement; // Todo
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
    status,
    isPinned = false,
    className,
    isActive = true,
  } = props;

  return (
    <Group
      className={clsx("workflow-node", status, isPinned && "pinned", className)}
      tabIndex={0}
    >
      <WorkflowNodeStatusIcon status={status} isPinned={isPinned} />

      <WorkflowNodeToolbar isActive={isActive} />

      <div className={clsx("workflow-node-card", className)}>
        {icon && <div className="workflow-node-icon">{icon}</div>}

        <div className="workflow-node-text">
          <div className="workflow-node-title">{title}</div>
          {description && (
            <div className="workflow-node-description">{description}</div>
          )}
        </div>
      </div>
    </Group>
  );
};

type WorkflowNodeStatusIconProps = {
  status: NodeStatus;
  isPinned: boolean;
};

function WorkflowNodeStatusIcon(props: WorkflowNodeStatusIconProps) {
  const { status, isPinned } = props;

  let statusIcon = null;

  if (isPinned) {
    statusIcon = <PinIcon />;
  }

  switch (status) {
    case "warning":
      statusIcon = <WarningIcon />;
      break;
    case "success":
      statusIcon = <CheckboxCircleIcon />;
      break;
    case "error":
      statusIcon = <CloseCircleIcon />;
      break;
    case "inactive":
      statusIcon = <ProhibitedIcon />;
      break;
    case "pending":
      statusIcon = null;
      break;
  }

  return <div className="workflow-node-status-icon">{statusIcon}</div>;
}

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
