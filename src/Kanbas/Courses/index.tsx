import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/editor";
import { Navigate, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses() {
  return (
    <div id="wd-courses" className="container-fluid">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <CoursesNavigation />
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
            <Route path="Zoom" element={<h4>Zoom</h4>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h6>Quizzes</h6>} />
            <Route path="Grades" element={<h6>Grades</h6>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
