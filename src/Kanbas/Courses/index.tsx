import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Home" element={<h3>Home</h3>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<h3>Piazza</h3>} />
                <Route path="Zoom" element={<h4>Zoom</h4>} />
                <Route path="Assignments" element={<h5>Assignments</h5>} />
                <Route path="Assignments/:id" element={<h5>Assignment Editor</h5>} />
                <Route path="Quizzes" element={<h6>Quizzes</h6>} />
                <Route path="Grades" element={<h6>Grades</h6>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
