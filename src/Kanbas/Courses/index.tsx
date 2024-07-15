import { Routes, Route, Navigate, useParams } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/editor";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../Database";
import "../styles.css"; 

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses" className="container-fluid">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course not found"}
      </h2>
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
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
            <Route path="Zoom" element={<h4>Zoom</h4>} />
            <Route path="Quizzes" element={<h6>Quizzes</h6>} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
