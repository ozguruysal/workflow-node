import clsx from "clsx";
import React from "react";
import {
  Popover,
  Menu as ReactAriaMenu,
  MenuItem as ReactAriaMenuItem,
  MenuSection as ReactAriaMenuSection,
  MenuTrigger as ReactAriaMenuTrigger,
} from "react-aria-components";

import type {
  MenuItemProps as ReactAriaMenuItemProps,
  MenuProps as ReactAriaMenuProps,
  MenuSectionProps as ReactAriaMenuSectionProps,
  MenuTriggerProps as ReactAriaMenuTriggerProps,
} from "react-aria-components";

import "./menu.css";

export type MenuTriggerProps = ReactAriaMenuTriggerProps;

export function MenuTrigger(props: MenuTriggerProps) {
  const [trigger, menu] = React.Children.toArray(props.children) as [
    React.ReactElement,
    React.ReactElement,
  ];

  return (
    <ReactAriaMenuTrigger {...props}>
      {trigger}
      <Popover className="ds-popover">{menu}</Popover>
    </ReactAriaMenuTrigger>
  );
}

export type MenuProps<T extends object> = ReactAriaMenuProps<T>;

export function Menu<T extends object>(props: MenuProps<T>) {
  const { children, className, ...otherProps } = props;

  return (
    <ReactAriaMenu {...otherProps} className={clsx("ds-menu", className)}>
      {children}
    </ReactAriaMenu>
  );
}

export type MenuItemProps = ReactAriaMenuItemProps & {
  colorVariant?: "default" | "danger";
};

export function MenuItem(
  props: Omit<MenuItemProps, "children"> & { children?: React.ReactNode },
) {
  const {
    children,
    className,
    colorVariant = "default",
    ...otherProps
  } = props;

  return (
    <ReactAriaMenuItem
      {...otherProps}
      className={clsx(
        "ds-menu-item",
        `ds-menu-item-${colorVariant}`,
        className,
      )}
    >
      {children}
    </ReactAriaMenuItem>
  );
}

export type MenuSectionProps<T extends object> = ReactAriaMenuSectionProps<T>;

export function MenuSection<T extends object>(props: MenuSectionProps<T>) {
  return <ReactAriaMenuSection {...props} />;
}
