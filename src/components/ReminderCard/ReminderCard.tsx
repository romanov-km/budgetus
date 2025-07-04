import React from "react";
import "./ReminderCard.scss";
import Icon from "../ui/Icon";

const ReminderCard = () => {
  return (
    <div className="reminder-card">
      <div className="reminder-card__top">
        <div className="reminder-card__icon">
            <Icon name="email" size={30}/>
            </div>
            
        <span className="reminder-card__title">Напоминание</span>
        
        <span className="reminder-card__time">30 мин.</span>
      </div>
      <div className="reminder-card__text">
        Не забудьте внести свои траты за сегодня!
      </div>
    </div>
  );
};

export default ReminderCard;
