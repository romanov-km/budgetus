import ActionButton from "../../components/ActionButton/ActionButton";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import Avatar from "../../components/Avatar/Avatar";
import BankCard from "../../components/BankCard/BankCard";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import GoalItem from "../../components/GoalItem/GoalItem";
import SectionCard from "../../components/SectionCard/SectionCard";
import Icon from "../../components/ui/Icon";
import "./HomeScreen.scss";
import { goals, limits } from "../../mock/mockData";
import { useState } from "react";
import AddTransactionModal from "../../components/AddTransactionModal/AddTransactionModal";

const MainScreen = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    
    <div className="main-screen">
      <AddTransactionModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <header className="main-screen__header">
        <Avatar src="/icons/avatar.svg" size={53}></Avatar>
        <h1 className="main-screen__greeting">Привет, Имя</h1>
        <div className="main-screen__icons">
          <button className="icon-button">
            <Icon name="settings" />
          </button>
          <button className="icon-button">
            <Icon name="bell" />
          </button>
        </div>
      </header>

      <section className="main-screen__bank">
        <BankCard
          bankName="СБЕР БАНК"
          amount="30 000 ₽"
          actionIcon={<Icon name="arrow-up-right" />}
        />
        <AddCardButton onClick={() => console.log("Добавить карту")} />
      </section>

      <div className="main-screen__quick-actions">
        <ActionButton
          icon={<Icon name="plus" size={18} />}
          label="добавить операцию"
          onClick={() => setShowModal(true)}
        />
        <ActionButton
          icon={<Icon name="mic" size={18} />}
          label="голосовой ввод"
        />
        <ActionButton
          icon={<Icon name="scan-qr-code" size={18} />}
          label="скан QR кода чека"
        />
        <ActionButton
          icon={<Icon name="attach" size={18} />}
          label="прикрепить чек"
        />
      </div>
      <div className="main-screen__goals">
        <SectionCard
          title="Цели"
          bgColor="lime"
          onAdd={() => console.log("Добавить цель")}
        >
          {goals.map((goal, index) => (
            <GoalItem key={index} {...goal} />
          ))}
        </SectionCard>

        <SectionCard title="Лимиты" bgColor="dark" onAdd={() => console.log("Добавить цель")}>
          {limits.map((limit, index) => (
            <GoalItem key={index} {...limit} />
          ))}
        </SectionCard>
      </div>

      <div className="main-screen__navbar">
        <BottomNavBar />
      </div>
    </div>
  );
};
export default MainScreen;
