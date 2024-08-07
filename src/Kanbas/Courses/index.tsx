// src/Kanbas/Courses/index.tsx
import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from 'react-router-dom';
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/editor";

export default function Courses() {
  const { cid } = useParams();
  const section = useLocation().pathname.split("/")[4];

  return (
    <div id="wd-courses">
      <h2>Course {cid} &gt; {section}</h2>
      <hr />
      <div className="d-flex">
        <div className="me-3">
          <CoursesNavigation />
        </div>
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
            <Route path="Zoom" element={<h4>Zoom</h4>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h6>Quizzes</h6>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
