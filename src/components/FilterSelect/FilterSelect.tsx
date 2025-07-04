import React, { useState } from "react";
import "./FilterSelect.scss";
import Icon from "../ui/Icon";

interface FilterSelectProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div className="filter-select">
      <button className="filter-select__button" onClick={() => setOpen(!open)}>
        <span>{value}</span>
        <div className="filter-select__icon">
          <Icon name={open ? "chevron-up" : "chevron-down copy"} />
        </div>
      </button>

      {open && (
        <ul className="filter-select__dropdown">
          {options.map((option) => (
            <li
              key={option}
              className={`filter-select__option ${option === value ? "active" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSelect;
