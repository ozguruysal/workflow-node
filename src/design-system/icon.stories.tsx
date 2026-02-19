import * as Icons from "./icons";

import type { Meta, StoryObj } from "@storybook/react-vite";
import type React from "react";
import type { ReactNode } from "react";

const IconWrapper = ({
  children,
  style,
}: {
  children?: ReactNode;
  style?: React.CSSProperties;
}) => <div style={style}>{children}</div>;

const IconMap: { [iconName: string]: React.FC<object> } = {
  ...Icons,
};

const meta = {
  title: "Components/Icons",
  component: IconWrapper,
} satisfies Meta<typeof IconWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1.5rem",
      }}
    >
      {Object.keys(Icons).map((iconName, idx) => {
        const IconComponent = IconMap[iconName];

        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "1px solid var(--border-base)",
              padding: "1.5rem",
            }}
            key={iconName}
          >
            <IconWrapper
              key={idx}
              style={{
                width: "24px",
                height: "24px",
                color: "var(--foreground-icon-base)",
              }}
            >
              <IconComponent />
            </IconWrapper>

            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "var(--font-size-sm)",
              }}
            >
              {iconName.replace("Icon", "")}
            </p>
          </div>
        );
      })}
    </div>
  ),
};
