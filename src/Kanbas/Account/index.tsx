import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./SignIn";
import Profile from "./Profile"; 
import AccountNavigation from "./Navigation/index";

export default function Account() {
  return (
    <div className="wd-account-screen">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>
        <div className="flex-fill p-4 pt-0">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Profile" element={<Profile />} /> 
          </Routes>
        </div>
      </div>
    </div>
  );
}
