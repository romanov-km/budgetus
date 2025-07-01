import React, { useState } from 'react';
import './Checkbox.scss';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={isChecked} onChange={handleToggle}  />
      <span className="box" />
      <span className="label-text">{label}</span>
    </label>
  );
};

export default Checkbox;
