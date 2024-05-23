// components/common/Button.tsx

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-mint-green text-white font-sans py-2 px-4 rounded hover:bg-deep-blue ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
