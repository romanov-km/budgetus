import { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./QRScanner.scss";
import Icon from "../ui/Icon";

interface QRScannerProps {
  onScan: (decodedText: string) => void;
  onClose: () => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose }) => {
  const scannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        onScan(decodedText);
        scanner.clear().catch(console.error);
      },
      () => {
        // игнорируем ошибки
      }
    );

    return () => {
      scanner.clear().catch(console.error);
    };
  }, [onScan]);

  return (
    <div className="qr-screen">
      <button className="qr-back" onClick={onClose}>
        <Icon name="chevron-left" size={24}/>
      </button>
      <div className="qr-title">Сканировать<br />QR код</div>
      <div id="qr-reader" className="qr-reader" ref={scannerRef}></div>
    </div>
  );
};

export default QRScanner;
