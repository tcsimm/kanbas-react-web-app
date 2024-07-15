import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import "../styles.css";

export default function CoursesNavigation() {
  const { pathname } = useLocation();

  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
  ];

  return (
    <div className="list-group">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive ? "list-group-item active-link" : "list-group-item"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
