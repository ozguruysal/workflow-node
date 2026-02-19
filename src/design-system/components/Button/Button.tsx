import { clsx } from "clsx";
import {
  Button as ReactAriaButton,
  composeRenderProps,
} from "react-aria-components";

import type { ButtonProps as ReactAriaButtonProps } from "react-aria-components";

import "./button.css";

export type ButtonProps = ReactAriaButtonProps & {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "ghost";
  isIconOnly?: boolean;
};

export const Button = (props: ButtonProps) => {
  const {
    size = "md",
    variant = "outline",
    isIconOnly = false,
    className,
  } = props;

  return (
    <ReactAriaButton
      {...props}
      className={clsx(
        "ds-btn",
        `ds-btn-${size}`,
        `ds-btn-${variant}`,
        isIconOnly && "ds-btn-icon-only",
        className,
      )}
    >
      {composeRenderProps(props.children, (children) => children)}
    </ReactAriaButton>
  );
};
