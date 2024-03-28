import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react';


function App() {


  const [value, setValue] = useState("");
  const [qrData, setQrData] = useState(false);

  const qrCodeGeneratorHandler = () => {
    if (!value) {
      return;
    }

    setQrData(true);
  }

  return (
    <div className="container">
      <h1>QR Code Generator ✅</h1>
      <input type="text" placeholder='Type your URL...' value={value}
        onChange={(e) =>
          setValue(e.target.value)}>
      </input>
      <button onClick={qrCodeGeneratorHandler}>Generate QR Code</button>

      {qrData && <div className='qr-code-container'>
        <QRCode value={value} size={300} />

      </div>}

    </div>
  );
}

export default App;
