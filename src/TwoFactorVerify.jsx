import React, { useState } from "react";

export default function TwoFactorVerify() {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    alert("OTP Entered: " + otp);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Two-Factor Authentication</h2>
        <p>Enter the 6-digit code from your app</p>

        <input
          maxLength="6"
          placeholder="Enter 6-digit code"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={handleVerify}>Verify</button>
      </div>
    </div>
  );
}
