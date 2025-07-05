import React from "react";
import "./SectionCard.scss";
import Icon from "../ui/Icon";
import { useState } from "react";
import AddCardButton from "../AddCardButton/AddCardButton";

interface SectionCardProps {
  title: string;
  bgColor: "lime" | "dark";
  children?: React.ReactNode;
  onClick?: () => void;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  bgColor,
  children,
  onClick,
}) => {
  const isLime = bgColor === "lime";
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="section-wrapper">
      <div className={`section-card ${bgColor}`} onClick={onClick}>
        <span className="section-title">{title}</span>
        <div
          className={`icon-wrapper ${isLime ? "dark" : "lime"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon
            name="arrow-up-right"
            size={20}
            color={isLime ? "#fff" : "#000"}
          />
        </div>
      </div>
      {isOpen && (
        <div className="section-children">
          {children}

          {React.Children.count(children) === 0 && (
            <div className="section-add-button">
              <AddCardButton/>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionCard;
