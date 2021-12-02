import React from "react";
import { ButtonProps } from "@models";

const Button: React.FC<ButtonProps> = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
};

export { Button };
