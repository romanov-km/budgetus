import Icon from "../components/ui/Icon";
import "../styles/uikit-page.scss";

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
          {/* добавишь ещё иконки — просто впишешь сюда */}
        </div>
      </section>

      {/* дальше будут кнопки, инпуты и т.п. */}
    </div>
  );
}