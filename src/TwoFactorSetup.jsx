import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function TwoFactorSetup({ onNext }) {
  const [code, setCode] = useState("");

  const secret = "EQTVMHR7 DLAK34JL K15SCXZ2 XPQ2V4LH";

  return (
    <div className="container">
      <div className="card">
        <h2>Set Up Two-Factor Authentication</h2>
        <p>Scan the QR code with your Authenticator app.</p>

        <div className="qr-box">
          <QRCode value={secret} size={180} />
        </div>

        <div className="secret-box">
          <span>{secret}</span>
        </div>

        <input
          type="text"
          placeholder="Authentication code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}
