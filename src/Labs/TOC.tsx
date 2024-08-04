import { useLocation } from 'react-router-dom';

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="#/Labs" className={`nav-link ${pathname === "/Labs" ? "active" : ""}`}>
          Labs
        </a>
      </li>
      <li className="nav-item">
        <a href="#/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a href="#/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a href="#/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>
      <li className="nav-item">
        <a href="#/Labs/Lab4" className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </a>
      </li>
      <li className="nav-item">
        <a href="#/Labs/Lab5" className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </a>
      </li>
      <li className="nav-item">
        <a href="#/Kanbas" className={`nav-link ${pathname === "/Kanbas" ? "active" : ""}`}>
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a href="https://github.com/tcsimm/kanbas-react-web-app" target="_blank" rel="noopener noreferrer" className="nav-link">
          GitHub Repository
        </a>
      </li>
      <li className="nav-item">
        <a href="https://kanbas-node-server-app-en9o.onrender.com" target="_blank" rel="noopener noreferrer" className="nav-link">
          Server on Render
        </a>
      </li>
    </ul>
  );
}
