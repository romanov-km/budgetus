import Icon from "../components/ui/Icon";
import "../styles/uikit-page.scss";
import Button from "../components/ui/Button";

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
        </div>
      </section>

      <section>
        <h2>Типографика</h2>
        <div>
          <h1 style={{ fontSize: 44, fontFamily: "Racama" }}>Racama</h1>
          <h2 style={{ fontSize: 28, fontFamily: "Gilroy" }}>Gilroy</h2>
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
          <Button variant="primary">Login</Button>
          <Button variant="dark">Login</Button>
        </div>
      </section>
      
    </div>
  );
}
