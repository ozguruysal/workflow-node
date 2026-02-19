import { clsx } from "clsx";
import { Button as ReactAriaButton } from "react-aria-components";

import type { ButtonProps as ReactAriaButtonProps } from "react-aria-components";

import "./button.css";

export type ButtonProps = ReactAriaButtonProps & {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "ghost";
  iconBefore?: React.ReactElement;
  iconOnly?: boolean;
  children?: React.ReactNode;
} & ( // This is to make sure iconBefore and aria-label are required when iconOnly is true
    | {
        iconBefore?: React.ReactElement;
        iconOnly?: false;
      }
    | {
        iconOnly?: true;
        iconBefore: React.ReactElement;
        "aria-label": string;
      }
  );

export const Button = (props: ButtonProps) => {
  const {
    size = "md",
    variant = "outline",
    iconBefore,
    iconOnly = false,
    className,
    children,
  } = props;

  return (
    <ReactAriaButton
      {...props}
      className={clsx(
        "ds-btn",
        `ds-btn-${size}`,
        `ds-btn-${variant}`,
        iconOnly && "ds-btn-icon-only",
        className,
      )}
    >
      {iconBefore && <span className="ds-btn-icon">{iconBefore}</span>}

      {!iconOnly && <span>{children}</span>}
    </ReactAriaButton>
  );
};
