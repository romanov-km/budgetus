import "./AddCategoryModal.scss";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddCategory: (category: { name: string; icon: string, color: string }) => void;
}

export default function AddCategoryModal({ isOpen, onClose, onAddCategory }: Props) {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim()) return;
      onAddCategory({ name: name.trim(), icon: "tour-bus", color: "yellow"}); // icon временно дефолтная
      setName("");
      onClose();
    };
  
  
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="modal__close" onClick={onClose}>
            <Icon name="cros" />
          </button>
          <h2>Добавление категории</h2>
        </div>
        <form className="modal__form" onSubmit={handleSubmit}>
          <Input
            label="Название категории"
            name="category"
            placeholder="Введите название"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Button type="submit">Добавить</Button>
        </form>
      </div>
    </div>
  );
}
