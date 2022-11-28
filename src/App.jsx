import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { User } from "./context/User";

export default function App() {
  const [user, setUser] = useState(false);
  return (
    <User.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
      </Routes>
    </User.Provider>
  );
}
