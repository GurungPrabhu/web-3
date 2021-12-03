export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactChild;
  type: "primary" | "danger" | "outlined";
  disabled?: boolean;
}

export interface HeaderProps {
  onClick?: () => void;
}
