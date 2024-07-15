import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/editor";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa";
import "../styles.css"; 
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses" className="container-fluid">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="me-3">
          <div id="wd-courses-navigation" className="list-group rounded-0">
            {links.map((link) => (
              <Link
                key={link}
                to={`/Kanbas/Courses/${cid}/${link}`}
                className={`list-group-item text-center border-0 ${
                  pathname.includes(link) ? "text-danger bg-white" : "text-white bg-black"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>
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
