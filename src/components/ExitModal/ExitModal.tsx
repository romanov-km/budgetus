import "./ExitModal.scss";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onCancel: () => void;
}

export default function ExitModal({
  isOpen,
  onClose,
  onLogout,
  onCancel,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="exit-modal-backdrop" onClick={onClose}>
      <div
        className="exit-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="exit-modal__header">
          <button className="exit-modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h1>Выйти из аккаунта?</h1>
        </div>

        <div className="exit-modal__buttons">
          <Button name="cancel" onClick={onCancel}>
            Отмена
          </Button>
          <Button name="logout" onClick={onLogout} type="submit">
            Выйти
          </Button>
        </div>
      </div>
    </div>
  );
}
