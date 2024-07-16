import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import LandingPage from "../LandingPage";

function KanbasNavigation() {
  return (
    <ul id="wd-kanbas-navigation">
      <li><a id="wd-neu-link" target="_blank" rel="noreferrer" href="https://www.northeastern.edu/">Northeastern</a></li>
      <li><a id="wd-account-link" href="#/Kanbas/Account">Account</a></li>
      <li><a id="wd-dashboard-link" href="#/Kanbas/Dashboard">Dashboard</a></li>
      <li><a id="wd-course-link" href="#/Kanbas/Courses">Courses</a></li>
      <li><a id="wd-calendar-link" href="#/Kanbas/Calendar">Calendar</a></li>
      <li><a id="wd-inbox-link" href="#/Kanbas/Inbox">Inbox</a></li>
      <li><a id="wd-labs-link" href="#/Labs">Labs</a></li>
      <li><a id="wd-landing-page-link" href="#/Kanbas/LandingPage">Landing Page</a></li> {/* Add link to Landing Page */}
    </ul>
  );
}

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="Courses/*" element={<Courses />} />
                <Route path="LandingPage" element={<LandingPage />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
