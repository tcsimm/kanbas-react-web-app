import { Link } from "react-router-dom";
import "./index.css";

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      <Link to="Home" className="list-group-item active border border-0"> Home </Link>
      <Link to="Modules" className="list-group-item text-danger border border-0"> Modules </Link>
      <Link to="Piazza" className="list-group-item text-danger border border-0"> Piazza </Link>
      <Link to="Zoom" className="list-group-item text-danger border border-0"> Zoom </Link>
      <Link to="Assignments" className="list-group-item text-danger border border-0"> Assignments </Link>
      <Link to="Quizzes" className="list-group-item text-danger border border-0"> Quizzes </Link>
      <Link to="Grades" className="list-group-item text-danger border border-0"> Grades </Link>
    </div>
  );
}
