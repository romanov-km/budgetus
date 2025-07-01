import React from 'react';
import './ActionButton.scss';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button className="action-button" onClick={onClick}>
      <span className="action-button__icon">{icon}</span>
      <span className="action-button__label">{label}</span>
    </button>
  );
};

export default ActionButton;