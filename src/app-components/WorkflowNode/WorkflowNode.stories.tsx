import clsx from "clsx";
import React from "react";

import { SlackLogo } from "../workflow-icons/SlackLogo";
import { WorkflowNode } from "./WorkflowNode";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
  decorators: [
    (Story, { parameters }) => (
      <NodeShell
        defaultSelected={parameters.nodeShellDefaultSelected}
        isDisabled={parameters.nodeShellIsDisabled}
      >
        <Story />
      </NodeShell>
    ),
  ],
} satisfies Meta<typeof WorkflowNode>;

export default meta;
type Story = StoryObj<typeof meta>;

// A simple wrapper to simulate selection state in Storybook
function NodeShell({
  children,
  defaultSelected = false,
  isDisabled = false,
}: {
  children: React.ReactNode;
  defaultSelected?: boolean;
  isDisabled?: boolean;
}) {
  const [selected, setSelected] = React.useState(defaultSelected);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setSelected(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = () => {
    if (!isDisabled) {
      setSelected(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) {
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelected(true);
    }

    if (e.key === "Escape") {
      setSelected(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      role="group"
      tabIndex={isDisabled ? -1 : 0}
      aria-selected={selected}
      className={clsx(
        "react-flow__node",
        selected && "selected",
        isDisabled && "disabled",
      )}
      onClick={(e) => {
        e.stopPropagation();
        handleSelect();
      }}
      onKeyDown={handleKeyDown}
      style={{
        outline: "none",
      }}
    >
      {children}
    </div>
  );
}

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
  },
  parameters: {
    nodeShellDefaultSelected: true,
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
  parameters: {
    nodeShellIsDisabled: true,
  },
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
