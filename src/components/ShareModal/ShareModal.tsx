import "./ShareModal.scss";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onShare: () => void;
}

export default function ExitModal({ isOpen, onClose, onShare }: Props) {
  if (!isOpen) return null;

  return (
    <div className="share-modal-backdrop" onClick={onClose}>
      <div className="share-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="share-modal__header">
        <button className="share-modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h1>Поделиться приложением</h1>
        </div>

        <form className="share-modal__form">
            <Button onClick={onShare}>Скопировать ссылку</Button>
        </form>
      </div>
    </div>
  );
}
