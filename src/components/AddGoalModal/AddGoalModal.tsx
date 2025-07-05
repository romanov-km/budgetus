import "./AddGoalModal.scss";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddGoalModal({ isOpen, onClose }: Props) {
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [goal, setGoal] = useState();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="add-goal-modal-backdrop" onClick={onClose}>
      <div
        className="add-goal-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="add-goal-modal__header">
          <button className="add-goal-modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h2>Добавление цели</h2>
        </div>

        <form className="add-goal-modal__form" onSubmit={handleSubmit}>
          <Input
            label="Название цели"
            type="goal"
            name="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
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
            label="Сумма цели"
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
