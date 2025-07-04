import React from "react";
import "./CategoryCard.scss";
import Icon from "../ui/Icon";

interface CategoryCardProps {
  name: string;
  icon: string;
  color: string;
  badge?: number;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, color, badge, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      {badge && <div className="category-card__badge">{badge}</div>}
      <div className="category-card__icon" style={{ backgroundColor: color }}>
        <Icon name={icon} size={30} />
      </div>
      <div className="category-card__label">{name}</div>
    </div>
  );
};

export default CategoryCard;
