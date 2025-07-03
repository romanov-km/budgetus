import React, { useRef, useState } from "react";
import "./AttachReceiptModal.scss";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

interface AttachReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (file: File) => void;
}

const AttachReceiptModal: React.FC<AttachReceiptModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAdd = () => {
    if (file && onSubmit) {
      onSubmit(file);
    }
    setFile(null);
    onClose();
  };

  return (
    <div className="attach-receipt-modal__backdrop" onClick={onClose}>
      <div
        className="attach-receipt-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="attach-receipt-modal__close" onClick={onClose}>
          <Icon name="cros" />
        </button>
        <h2 className="attach-receipt-modal__title">Прикрепить фото чека</h2>

        <label className="attach-receipt-modal__label">Фото чека</label>
        <div
          className="attach-receipt-modal__upload"
          onClick={() => fileInputRef.current?.click()}
        >
          <Icon name="cloud-upload" size={20} />
          <p>
            Загрузите фото чека
            <br />
            PNG или JPG до 2 МБ
          </p>
          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <Button onClick={handleAdd}>Добавить</Button>
      </div>
    </div>
  );
};

export default AttachReceiptModal;
