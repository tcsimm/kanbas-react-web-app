// src/App.tsx
import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="LandingPage" />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Labs/*" element={<Labs />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
