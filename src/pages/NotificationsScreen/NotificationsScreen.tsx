import React from "react";
import "./NotificationsScreen.scss";
import Icon from "../../components/ui/Icon";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { useNavigate } from "react-router-dom";
import ReminderCard from "../../components/ReminderCard/ReminderCard";

const NotificationsScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="statistic-screen">
      <div className="statistic-screen__header">
        <button className="back-button" onClick={() => navigate("/home")}>
          <Icon name="chevron-left" />
        </button>
        <div className="statistic-screen__progress">
          <h1 className="statistic-screen__title">Уведомления</h1>
        </div>
      </div>

      <div className="statistic-screen__main">
        <ReminderCard></ReminderCard>
      </div>
      <div className="statistic-screen__analys"></div>

      <div className="statistic-screen__analys"></div>
      <div className="statistic-screen__analyse"></div>

      <BottomNavBar />
    </div>
  );
};

export default NotificationsScreen;
