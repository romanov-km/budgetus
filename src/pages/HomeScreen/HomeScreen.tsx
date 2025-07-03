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
import VoiceModal from "../../components/VoiceModal/VoiceModal";
import AddCardModal from "../../components/AddCardModal/AddCardModal";
import AttachReceiptModal from "../../components/AttachReceiptModal/AttachReceiptModal";
import QRScanner from "../../components/QRScanner/QRScanner";

const MainScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [showAddCardModal, setShowCardModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [scannedValue, setScannedValue] = useState("");

  return (
    <div className="main-screen">
     {showQRScanner && (
  <QRScanner
    onScan={(data) => {
      setScannedValue(data);
      setShowQRScanner(false);
      console.log("QR найден:", data);
    }}
    onClose={() => setShowQRScanner(false)}
  />
)}
      <AddTransactionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <VoiceModal
        isOpen={showVoiceModal}
        onClose={() => setShowVoiceModal(false)}
        onStartRecording={() => console.log("Началась запись")}
      />
      <AddCardModal  isOpen={showAddCardModal}
        onClose={() => setShowCardModal(false)}
        onCardAdd={() => console.log("Карта добавлена")} />
      <AttachReceiptModal isOpen={showReceiptModal} onClose={() => {setShowReceiptModal(false)}} />
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
        <AddCardButton onClick={() => setShowCardModal(true)} />
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
          onClick={() => setShowVoiceModal(true)}
        />
        <ActionButton
          icon={<Icon name="scan-qr-code" size={18} />}
          label="скан QR кода чека"
          onClick={() => setShowQRScanner(true)}
        />
        <ActionButton
          icon={<Icon name="attach" size={18} />}
          label="прикрепить чек"
          onClick={() => setShowReceiptModal(true)}
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

        <SectionCard
          title="Лимиты"
          bgColor="dark"
          onAdd={() => console.log("Добавить цель")}
        >
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
