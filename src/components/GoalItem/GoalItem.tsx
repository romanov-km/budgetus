import React from "react";
import "./GoalItem.scss";
import Icon from "../ui/Icon";

interface GoalItemProps {
  iconName: string;
  title: string;
  subtitle: string;
  percent: number;
}

const GoalItem: React.FC<GoalItemProps> = ({iconName, title, subtitle, percent}) => {
  return (
    <div className="goal-item">
      <div className="icon-circle">
        <Icon name={iconName} size={28} />
      </div>
      <div className="goal-info">
        <div className="goal-title">{title}</div>
        <div className="goal-subtitle">{subtitle}</div>
      </div>
      <div className="goal-percent">{percent} %</div>
    </div>
  );
};

export default GoalItem;
