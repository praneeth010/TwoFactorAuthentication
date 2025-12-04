import React, { useState } from "react";
import TwoFactorSetup from "./TwoFactorSetup";
import TwoFactorVerify from "./TwoFactorVerify";
import "./TwoFactor.css";

export default function App() {
  const [screen, setScreen] = useState("setup"); // setup | verify

  return (
    <>
      {screen === "setup" && (
        <TwoFactorSetup onNext={() => setScreen("verify")} />
      )}
      {screen === "verify" && <TwoFactorVerify />}
    </>
  );
}
