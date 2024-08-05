// src/Kanbas/Courses/People/Details.tsx
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({ fetchUsers }: { fetchUsers: () => void; }) {
  const { uid, cid } = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (!uid) return;
    try {
      const user = await client.findUserById(uid);
      setUser(user);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const deleteUser = async (uid: string) => {
    try {
      await client.deleteUser(uid);
      fetchUsers();
      navigate(`/Kanbas/Courses/${cid}/People`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </Link>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4 wd-name">{user.firstName} {user.lastName}</div>
      <b>Roles:</b> <span className="wd-roles">{user.role}</span> <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button onClick={() => deleteUser(uid!)} className="btn btn-danger float-end wd-delete">Delete</button>
      <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)} className="btn btn-secondary float-end me-2 wd-cancel">Cancel</button>
    </div>
  );
}
