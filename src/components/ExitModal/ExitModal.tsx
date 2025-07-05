import "./ExitModal.scss";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onCancel: () => void;
}

export default function ExitModal({ isOpen, onClose, onLogout, onCancel }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
        <button className="modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h1>Выйти из аккаунта?</h1>
        </div>

        <form className="modal__form">
            <Button onClick={onCancel}>Отмена</Button>
            <Button onClick={onLogout}>Выйти</Button>
        </form>
      </div>
    </div>
  );
}
