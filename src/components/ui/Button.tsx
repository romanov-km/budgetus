import type { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark";
}

export default function Button({ children, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={`btn ${variant}`} {...props}>
      {children}
    </button>
  );
}
