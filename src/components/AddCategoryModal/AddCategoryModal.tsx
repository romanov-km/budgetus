import "./AddCategoryModal.scss";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddCategory: (category: {
    name: string;
    icon: string;
    color: string;
  }) => void;
}

const iconOptions = [
  "tour-bus",
  "bone",
  "shopping-cart",
  "barbell",
  "book",
  "ball",
  "plane",
  "fork-knife",
  "shampoo",
  "bachelor-cap",
  "t-shirt",
  "health",
  "car"
];

export default function AddCategoryModal({
  isOpen,
  onClose,
  onAddCategory,
}: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("tour-bus");
  const [color, setColor] = useState("yellow");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && name.trim()) setStep(2);
    else if (step === 2 && icon) setStep(3);
  };

  const handleSubmit = () => {
    if (!name || !icon || !color) return;
    onAddCategory({ name, icon, color });
    resetAndClose();
  };

  const resetAndClose = () => {
    setStep(1);
    setName("");
    setIcon("");
    setColor("#b9fe66");
    onClose();
  };

  const handleBack = () => {
    switch (step) {
      case 3:
        setStep(2);
        break;
      case 2:
        setStep(1);
        break;
      default:
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <button className="modal__close" onClick={resetAndClose}>
            <Icon name="cros" />
          </button>
          <h2>
            {step === 1 && "Добавление категории"}
            {step === 2 && "Выбор иконки"}
            {step === 3 && "Выбор цвета"}
          </h2>
        </div>

        <div className="modal__content">
          {step === 1 && (
            <form className="modal__form" onSubmit={handleNext}>
              <Input
                label="Название категории"
                name="category"
                placeholder="Введите название"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Button type="submit">Далее</Button>
            </form>
          )}

          {step === 2 && (
              <form className="modal_form" onSubmit={handleNext}>
              <div className="icon-grid">
                {iconOptions.map((i) => (
                  <button
                    key={i}
                    className={`icon-option ${icon === i ? "selected" : ""}`}
                    onClick={() => setIcon(i)}
                  >
                    <Icon name={i} />
                  </button>
                ))}
              </div>
              <div className="modal__buttons">
                <Button variant="primary" onClick={handleBack}>
                  Назад
                </Button>
                <Button type="submit">Далее</Button>
              </div>
              </form>
          )}

          {step === 3 && (
            <>
              <div className="color-picker">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
                <Input
                  placeholder="Введите название в формате Hex"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="modal__buttons">
                <Button variant="primary" onClick={handleBack}>
                  Назад
                </Button>
                <Button onClick={handleSubmit}>Добавить</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
