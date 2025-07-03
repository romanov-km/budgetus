import ActionButton from "../../components/ActionButton/ActionButton";
import AddCardButton from "../../components/AddCardButton/AddCardButton";
import Avatar from "../../components/Avatar/Avatar";
import BankCard from "../../components/BankCard/BankCard";
import BottomNavBar from "../../components/BottomNavBar/BottomNavBar";
import GoalItem from "../../components/GoalItem/GoalItem";
import SectionCard from "../../components/SectionCard/SectionCard";
import Icon from "../../components/ui/Icon";
import "./HomeScreen.scss";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <header className="main-screen__header">
        <Avatar src="/icons/avatar.svg"></Avatar>
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

      <SectionCard title="Лимиты" bgColor="dark">
        <GoalItem
          iconName="car"
          title="Автомобиль"
          subtitle="Цель: 2 000 000 ₽"
          percent={50}
        />
      </SectionCard>

      <SectionCard title="Цели" bgColor="lime">
        <GoalItem
          iconName="home-alt"
          title="Квартира"
          subtitle="Цель: 5 000 000 ₽"
          percent={10}
        />
      </SectionCard>

      <BottomNavBar />
    </div>
  );
};
export default MainScreen;
