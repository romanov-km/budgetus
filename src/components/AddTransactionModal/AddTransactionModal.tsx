import "./AddTransactionModal.scss";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Button from "../ui/Button"; // если есть
import Icon from "../ui/Icon";
import { bankOptions, categoryOptions } from '../../mock/mockData'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTransactionModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
        <button className="modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h2>Добавление операции</h2>
          
        </div>

        <form className="modal__form">
          <Select label="Название банка" options={bankOptions} name="bank" />
          <Select label="Название категории" options={categoryOptions} name="category" />
          <Input label="Дата покупки" type="date" name="date" />
          <Input label="Сумма операции" type="number" name="amount" />
            <Button>Добавить</Button>
        </form>
      </div>
    </div>
  );
}
