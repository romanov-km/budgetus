import React from "react";
import "./GoalItem.scss";
import Icon from "../ui/Icon";

const GoalItem: React.FC = () => {
  return (
    <div className="goal-item">
      <div className="icon-circle">
        <Icon name="car" size={28} />
      </div>
      <div className="goal-info">
        <div className="goal-title">Автомобиль</div>
        <div className="goal-subtitle">Цель: 2 000 000 ₽</div>
      </div>
      <div className="goal-percent">50 %</div>
    </div>
  );
};

export default GoalItem;
