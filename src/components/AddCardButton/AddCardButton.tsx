import React from "react";
import "./AddCardButton.scss";
import Icon from "../ui/Icon";

interface AddCardButtonProps {
  onClick?: () => void;
}

const AddCardButton: React.FC<AddCardButtonProps> = ({ onClick }) => {
  return (
    <button className="add-card-button" onClick={onClick}>
      <Icon name="plus" size={18} />
    </button>
  );
};

export default AddCardButton;
