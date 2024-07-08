import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import LandingPage from "../LandingPage";
import KanbasNavigation from "./Navigation";
import "./index.css"; 

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <KanbasNavigation />
        </div>
        <div className="col-12 col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/*" element={<Courses />} />
            <Route path="LandingPage" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
