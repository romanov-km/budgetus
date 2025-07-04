import React from "react";
import "./TopCategoryCard.scss";

interface Props {
  title: string;
  subtitle?: string;
  highlight?: string; // например: "0%" или "45%"
}

const TopCategoryCard: React.FC<Props> = ({ title, subtitle = "больше всего трат", highlight }) => {
  return (
    <div className={`top-category-card ${highlight ? "highlighted" : ""}`}>
      {highlight && <div className="top-category-card__highlight">{highlight}</div>}
      <div className="top-category-card__title">{title}</div>
      <div className="top-category-card__subtitle">{subtitle}</div>
    </div>
  );
};

export default TopCategoryCard;
