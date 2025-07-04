import Icon from "../components/ui/Icon";
import "../styles/uikit-page.scss";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";
import BankCard from "../components/BankCard/BankCard";
import ActionButton from "../components/ActionButton/ActionButton";
import Logo from "../components/Logo/Logo";
import SectionCard from "../components/SectionCard/SectionCard";
import GoalItem from "../components/GoalItem/GoalItem";
import BottomNavBar from "../components/BottomNavBar/BottomNavBar";
import AddCardButton from "../components/AddCardButton/AddCardButton";
import Avatar from "../components/Avatar/Avatar";
import Select from "../components/ui/Select";
import {bankOptions} from "../mock/mockData"
import CategoryList from "../components/CategoryList/CategoryList";
import ProfileAction from "../components/ProfileAction/ProfileAction";

export default function UiKitPage() {
  return (
    <div className="uikit">
      <h1>UI Kit — Бюджетус</h1>

      <section>
        <h2>Иконки</h2>
        <div className="icon-grid">
          <Icon name="attach" />
          <Icon name="arrow-up-right" />
          <Icon name="mic" />
          <Icon name="plus" />
          <Icon name="cloud-upload" />
          <Icon name="scan-qr-code" />
          <Icon name="log-out" />
          <Icon name="view-grid" />
          <Icon name="user" />
          <Icon name="home-alt" />
          <Icon name="bell" />
          <Icon name="settings" />
          <Icon name="car" />
          <Icon name="headset-help" />
          <Icon name="fork-knife" />
          <Icon name="trash" />
          <Icon name="email" />
          <Icon name="eye-slash" />
        </div>
      </section>

      <section>
        <h2>Типографика</h2>
        <div>
          <h1 style={{ fontSize: 44, fontFamily: "Racama" }}>Racama</h1>
          <p style={{ fontSize: 28, fontFamily: "Montserrat" }}>Montserrat</p>
        </div>
      </section>

      <section>
        <h2>Цвета</h2>
        <div style={{ display: "flex", gap: 32 }}>
          <div
            style={{
              width: 159,
              height: 100,
              background: "#B9FE66",
              borderRadius: 15,
            }}
          />
          <div
            style={{
              width: 159,
              height: 100,
              background: "#1E1E1E",
              borderRadius: 15,
            }}
          />
          <div
            style={{
              width: 159,
              height: 100,
              background: "#FFFFFF",
              borderRadius: 15,
              border: "1px solid black",
            }}
          />
        </div>
      </section>

      <section>
        <h2>Кнопки</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Button variant="primary">Войти</Button>
          <Button variant="dark">Войти</Button>
        </div>
      </section>

      <section>
        <h2>Поля ввода</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 340,
          }}
        >
          <Input label="User name" placeholder="Имя пользователя" icon="user" />
          <Input label="Email" type="email" placeholder="Почта" icon="email" />
          <Input
            label="Password"
            placeholder="Пароль"
            icon=""
            toggleablePassword
          />
          <Select
            label="Название банка"
            name="bank"
            options={bankOptions}
          />
        </div>
      </section>

      <section>
        <h2>Чекбокс</h2>
        <Checkbox
          label="Запомнить меня"
          onChange={(val) => console.log("checked", val)}
        />
      </section>
      <section>
        <h2>Карта</h2>
        <BankCard
          bankName="СБЕР БАНК"
          amount="30 000 ₽"
          actionIcon={<Icon name="arrow-up-right" />}
        />
      </section>

      <section>
        <h2>Экшн кнопки</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 31,
            maxWidth: 288,
          }}
        >
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
      </section>

      <section
        style={{
          maxWidth: 80,
        }}
      >
        <Logo />
      </section>

      <section
        style={{
          maxWidth: 368,
          marginBottom: 10,
        }}
      >
        <SectionCard title="Цели" bgColor="lime">
          <GoalItem
            iconName="car"
            title="Автомобиль"
            subtitle="Цель: 2 000 000 ₽"
            percent={50}
          />
        </SectionCard>
      </section>
      <section
        style={{
          maxWidth: 368,
          marginBottom: 10,
        }}
      >
        <SectionCard title="Лимиты" bgColor="dark">
          <GoalItem
            iconName="home-alt"
            title="Квартира"
            subtitle="Цель: 5 000 000 ₽"
            percent={10}
          />
        </SectionCard>
      </section>

      <BottomNavBar />

      <AddCardButton onClick={() => console.log("Добавить карту")} />

      <Avatar src="/public/icons/avatar.svg" />

      <CategoryList></CategoryList>

      <div className="profile-screen">
      <ProfileAction icon="user" label="Мой аккаунт" onClick={() => console.log('Аккаунт')} />
      <ProfileAction icon="settings" label="Настройки" />
      <ProfileAction icon="headset-help" label="Поддержка" />
      <ProfileAction icon="log-out" label="Выход" />
      <ProfileAction icon="cloud-upload" label="Поделиться" />
    </div>
    </div>
  );
}
