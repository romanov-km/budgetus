import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string; // имя svg-иконки (например "user")
  toggleablePassword?: boolean; // показывать ли пароль
}

export default function Input({
  label,
  icon,
  type = "text",
  toggleablePassword,
  ...props
}: InputProps) {
  const [show, setShow] = useState(false);
  const inputType = toggleablePassword ? (show ? "text" : "password") : type;

  return (
    <label className="custom-input">
      {label && <span className="label">{label}</span>}
      <div className="input-wrapper">
        {icon && <img src={`/icons/${icon}.svg`} alt="icon" className="icon" />}
        <input type={inputType} {...props} />
        {toggleablePassword && (
          <img
            src={`/icons/${show ? "eye" : "eye-slash"}.svg`}
            alt="toggle visibility"
            className="toggle-icon"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    </label>
  );
}