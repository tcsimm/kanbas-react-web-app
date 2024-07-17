import { FaInbox, FaUserCircle } from "react-icons/fa"; // Use FaUserCircle instead
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import neuLogo from '../../images/NEU.png';
import links from './links.json';

// Define the icon components type
const iconComponents = {
  AiOutlineDashboard,
  LiaBookSolid,
  IoCalendarOutline,
  FaInbox,
  LiaCogSolid
};

// Define the possible keys of iconComponents
type IconKeys = keyof typeof iconComponents;

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
         href="https://www.northeastern.edu/"
         className="list-group-item bg-black border-0">
        <img src={neuLogo} width="75px" alt="Northeastern University Logo" />
      </a>
      <Link key="/Kanbas/Account" to="/Kanbas/Account" 
            className={`list-group-item text-center border-0 bg-black 
                       ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaUserCircle className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => {
        const Icon = iconComponents[link.icon as IconKeys];
        return (
          <Link key={link.path} to={link.path} 
                className={`list-group-item bg-black text-center border-0 
                           ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
            <Icon className="fs-1 text-danger" />
            <br />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
