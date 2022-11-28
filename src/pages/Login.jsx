import React, {useState } from "react";
import StudentsList from "../components/StudentsList";
import "./pages.css";
import Form from "../components/Form";

export default function Login() {
  const [home, setHome] = useState(false);
  const handleClick = () => {
    setHome(true);
  };
  const studentClick = () => {
    setHome(false);
  };
  return (
    <div className="login-container">
      <div className="login">
        <div className="login-btns">
          <button
            style={home ? { color: "#009688" } : null}
            onClick={handleClick}
          >
            Home
          </button>
          <button
            onClick={studentClick}
            style={!home ? { color: "#009688" } : null}
          >
            Students Link
          </button>
          <button>Contact</button>
        </div>
        <div className="login-contents">
          {home ? <Form /> : <StudentsList />}
        </div>
      </div>
    </div>
  );
}
