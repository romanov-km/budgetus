import React from "react";
import "./VoiceModal.scss";
import Icon from "../ui/Icon";

interface VoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartRecording?: () => void;
}

const VoiceModal: React.FC<VoiceModalProps> = ({ isOpen, onClose, onStartRecording }) => {
  if (!isOpen) return null;

  return (
    <div className="voice-modal__backdrop" onClick={onClose}>
      <div className="voice-modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="voice-modal__close" onClick={onClose}>
          <Icon name="cros" />
        </button>
        <h2 className="voice-modal__title">Голосовой ввод</h2>
        <button className="voice-modal__mic-button" onClick={onStartRecording}>
          <Icon name="mic" size={32} />
        </button>
        <p className="voice-modal__subtitle">нажми для записи</p>
      </div>
    </div>
  );
};

export default VoiceModal;