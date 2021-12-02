import React from "react";
import { ButtonProps } from "@models";

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <div>
      <button
        disabled={disabled || false}
        onClick={onClick}
        className={`btn btn-${type} ${
          type === "outlined" && "btn-outlined-primary"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
