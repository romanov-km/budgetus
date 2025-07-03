import "./AddCardModal.scss";
import Select from "../ui/Select";
import Button from "../ui/Button"; // если есть
import Icon from "../ui/Icon";
import { bankOptions } from '../../mock/mockData'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCardModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
        <button className="modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h2>Добавление карты</h2>
          
        </div>

        <form className="modal__form">
          <Select label="Название банка" options={bankOptions} name="bank" />

            <Button>Добавить</Button>
        </form>
      </div>
    </div>
  );
}
