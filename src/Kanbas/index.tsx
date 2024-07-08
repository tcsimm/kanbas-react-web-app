import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import LandingPage from "../LandingPage";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="d-flex">
      <KanbasNavigation />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<Courses />} />
          <Route path="LandingPage" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}
