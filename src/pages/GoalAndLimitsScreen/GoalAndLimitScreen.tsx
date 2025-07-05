import React, { useState } from "react";
import "./GoalAndLimitScreen.scss";
import Icon from "../../components/ui/Icon";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import { useNavigate } from "react-router-dom";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import AddLimitModal from "../../components/AddLimitModal/AddLImitModal";
import AddGoalModal from "../../components/AddGoalModal/AddGoalModal";

const GoalAndLimitScreen: React.FC = () => {
  const [showAddGoalModal, setShowAddGoalModal] = useState(false);
  const [showAddLimitModal, setShowAddLimitModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="goalandlimit-screen">
      <AddGoalModal
        isOpen={showAddGoalModal}
        onClose={() => {
          setShowAddGoalModal(false);
        }}
      />
      <AddLimitModal
        isOpen={showAddLimitModal}
        onClose={() => {
          setShowAddLimitModal(false);
        }}
      />
      <div className="goalandlimit-screen__header">
        <button className="back-button" onClick={() => navigate("/home")}>
          <Icon name="chevron-left" />
        </button>
        <div className="goalandlimit-screen__progress">
          <h1 className="goalandlimit-screen__title">Цели и Лимиты</h1>
        </div>
      </div>

      <div className="goalandlimit-screen__main">
        <div className="goalandlimit-screen__analys">
          <h2 className="section-title">Цели</h2>
          <AddCardButton onClick={() => setShowAddGoalModal(true)} />
        </div>
        <div className="goalandlimit-screen__analys">
          <h2 className="section-title">Лимиты</h2>
          <AddCardButton onClick={() => setShowAddLimitModal(true)} />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default GoalAndLimitScreen;
