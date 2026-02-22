import "./button-group.css";

export type ButtonGroupProps = {
  children: React.ReactNode;
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <div className="ds-btn-group">{props.children}</div>;
};
