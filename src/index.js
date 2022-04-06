import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// tailwind
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";

// context
import UserState from "./context/userState";

// views
import Login from "./views/auth/Login.js";
import Register from "./views/auth/Register.js";

// header
import Header from "./views/Header";

// root render
render(
  <BrowserRouter>
    <UserState>
      <div className="flex flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </UserState>
  </BrowserRouter>,
  document.getElementById("root")
);
