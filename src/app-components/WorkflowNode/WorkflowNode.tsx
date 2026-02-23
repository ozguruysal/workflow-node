import clsx from "clsx";
import React from "react";
import {
  Group,
  Keyboard,
  Separator,
  Text,
  Toolbar,
} from "react-aria-components";

import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  Spinner,
} from "../../design-system/components";
import {
  CheckboxCircleIcon,
  CloseCircleIcon,
  MoreIcon,
  PinIcon,
  PlayIcon,
  PowerIcon,
  ProhibitedIcon,
  WarningIcon,
} from "../../design-system/icons";

import "./workflow-node.css";

type NodeStatus =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "inactive"
  | "pending";

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

/**
 * A generic node component for representing a step in a workflow. It should be wrapped by a parent component provided by an interactive flowgraph library.
 * For this example we will assume we are using <a href="https://reactflow.dev/" target="_blank">React Flow</a>, but the component is designed to be agnostic of the underlying flowgraph implementation. However
 * the classnames should be adjusted accordingly to fit the styling needs of the chosen library.
 */
export const WorkflowNode = (props: WorkflowNodeProps) => {
  const {
    title,
    description,
    icon,
    status,
    isPinned = false,
    isActive = true,
    className,
  } = props;

  const isDisabled = status === "pending";

  return (
    <Group
      className={clsx("workflow-node", status, isPinned && "pinned", className)}
    >
      <WorkflowNodeStatusIcon status={status} isPinned={isPinned} aria-hidden />

      <WorkflowNodeToolbar isActive={isActive} isDisabled={isDisabled} />

      <div className={clsx("workflow-node-card", className)}>
        {icon && (
          <div className="workflow-node-icon" aria-hidden>
            {icon}
          </div>
        )}

        <div className="workflow-node-text">
          <h3 className="workflow-node-title">{title}</h3>
          {description && (
            <p className="workflow-node-description">{description}</p>
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
      statusIcon = <Spinner />;
      break;
  }

  return <div className="workflow-node-status-icon">{statusIcon}</div>;
}

type WorkflowNodeToolbarProps = {
  isActive: boolean;
  isDisabled?: boolean;
  className?: string;
};

function WorkflowNodeToolbar(props: WorkflowNodeToolbarProps) {
  const { isActive, isDisabled, className } = props;

  return (
    <Toolbar
      className={clsx("workflow-node-toolbar", className)}
      aria-label="Node actions"
    >
      <ButtonGroup>
        <Button
          size="sm"
          iconOnly
          iconBefore={<PlayIcon />}
          isDisabled={isDisabled}
          aria-label="Run node"
        />
        <Button
          size="sm"
          iconOnly
          iconBefore={<PowerIcon />}
          isDisabled={isDisabled}
          aria-label={isActive ? "Deactivate node" : "Activate node"}
        />

        <MenuTrigger>
          <Button
            className="workflow-node-menu-trigger"
            size="sm"
            iconOnly
            iconBefore={<MoreIcon />}
            isDisabled={isDisabled}
            aria-label="More options"
          />

          <Menu>
            <MenuSection>
              <MenuItem>
                <Text>Open...</Text>
                <Keyboard>↵</Keyboard>
              </MenuItem>

              <MenuItem>
                <Text>Execute step</Text>
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
      </ButtonGroup>
    </Toolbar>
  );
}
