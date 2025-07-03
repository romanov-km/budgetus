import type { SelectHTMLAttributes } from "react";
import "./Select.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
}

export default function Select({ label, options, ...props }: SelectProps) {
  return (
    <label className="custom-select">
      {label && <span className="label">{label}</span>}
      <div className="select-wrapper">
        <select {...props}>
          <option disabled selected value="">
            Выберите название
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <img src="/icons/chevron-down.svg" alt="dropdown" className="arrow-icon" />
      </div>
    </label>
  );
}
