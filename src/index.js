import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// tailwind
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/index.css";

// context
import UserState from "./context/userState";

// views
import Home from "views/Home.js";
import MediaDetail from "views/MediaDetail.js";
// auth views
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

// header
import Header from "views/Header";

// root render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <UserState>
      <div className="flex flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/media" exact element={<MediaDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </UserState>
  </BrowserRouter>
);
