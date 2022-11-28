import React, { useState } from "react";
import "./index.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlesChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickBtn = () => {
    if (email === "itpark@gmail.com" && password === "ITpark015") {
      setUser(true);
    } else {
      setError(true)
    }
  };
  return (
    <div className="form-container">
      <form className="form-content">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            handleChangeEmail(e);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            handlesChangePassword(e);
          }}
        />
        <button type="button" onClick={handleClickBtn}>
          Krish
        </button>
      </form>
      {error ? (
        <div className="error">
          <p style={{ color: "red", textAlign: "center" }}>
            Siz parol yoki Emailni No'togri kritdingiz !
          </p>
        </div>
      ) : null}
    </div>
  );
}
