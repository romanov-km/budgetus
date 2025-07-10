import "./AddTransactionModal.scss";
import Select from "../ui/Select";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { bankOptions } from "../../mock/mockData";
import { useTransactions } from "../../context/TransactionContext";
import { useState } from "react";
import { useCategories } from "../../utils/hooks/useCategories";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTransactionModal({ isOpen, onClose }: Props) {
  const { addTransaction } = useTransactions();
  const [selectedBank, setSelectedBank] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"Доход" | "Расход">("Расход");
  const { categories, loading } = useCategories();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addTransaction({
      bank: selectedBank,
      category: selectedCategory,
      amount: Number(amount),
      date,
      type,
    });

    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h2>Добавление операции</h2>
        </div>

        <form className="modal__form" onSubmit={handleSubmit}>
          <Select
            label="Название банка"
            options={bankOptions}
            name="bank"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            required
          />
          {loading ? (
            <p>Загрузка...</p>
          ) : (
            <Select
              label="Название категории"
              options={categories.map((cat) => ({
                label: cat.name,
                value: cat.name,
              }))}
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              required
            />
          )}

          <Select
            label="Тип операции"
            options={[
              { label: "Доход", value: "Доход" },
              { label: "Расход", value: "Расход" },
            ]}
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value as "Доход" | "Расход")}
            required
          />
          <Input
            label="Дата покупки"
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
