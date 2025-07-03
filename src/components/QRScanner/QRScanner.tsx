import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef } from "react";
import "./QRScanner.scss";
import Icon from "../ui/Icon";

interface QRScannerProps {
  onScan: (decodedText: string) => void;
  onClose: () => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose }) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const initScanner = async () => {
      const devices = await Html5Qrcode.getCameras();

      if (devices && devices.length) {
        // Найдем заднюю камеру (если возможно)
        const backCamera = devices.find((d) =>
          d.label.toLowerCase().includes("back")
        ) || devices[0]; // иначе первая доступная

        const html5QrCode = new Html5Qrcode("qr-reader");
        html5QrCodeRef.current = html5QrCode;

        html5QrCode
          .start(
            backCamera.id,
            { fps: 10, qrbox: 250 },
            (decodedText) => {
              onScan(decodedText);
              html5QrCode.stop().then(() => {
                html5QrCode.clear();
              });
            },
            () => {} // onError
          )
          .catch(console.error);
      }
    };

    initScanner();

    return () => {
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current
          .stop()
          .then(() => html5QrCodeRef.current?.clear())
          .catch(console.error);
      }
    };
  }, [onScan]);

  return (
    <div className="qr-screen">
      <button className="qr-back" onClick={onClose}>
        <Icon name="chevron-left" size={24} />
      </button>
      <div className="qr-title">
        Сканировать<br />QR код
      </div>
      <div className="qr-reader-container">
      <div id="qr-reader" className="qr-reader" ref={qrRef}></div>
      <img src="/icons/qr-frame.svg" alt="QR Frame" className="qr-frame-overlay" />
      </div>
      
    </div>
  );
};

export default QRScanner;
