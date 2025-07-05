import "./AddLimitModal.scss";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { bankOptions } from "../../mock/mockData";
import { useTransactions } from "../../context/TransactionContext";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddLimitModal({ isOpen, onClose }: Props) {
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [limit, setLimit] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="add-limit-modal-backdrop" onClick={onClose}>
      <div className="add-limit-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="add-limit-modal__header">
          <button className="add-limit-modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h2>Добавление лимита</h2>
        </div>

        <form className="add-limit-modal__form" onSubmit={handleSubmit}>         
        <Input
            label="Название цели"
            type="text"
            name="limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            required
          />
          <Input
            label="Дата окончания"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            label="Сумма операции"
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Button type="submit">Добавить</Button>
        </form>
      </div>
    </div>
  );
}
