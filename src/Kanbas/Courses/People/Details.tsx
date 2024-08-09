import { useEffect, useState } from "react";
import { FaUserCircle, FaEdit, FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({ fetchUsers }: { fetchUsers: () => void; }) {
  const { uid, cid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const fetchUser = async () => {
    if (!uid) return;
    try {
      const user = await client.findUserById(uid);
      if (user) {
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setEmail(user.email);
        setRole(user.role);
      } else {
        console.error("User not found");
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ").length > 1 ? name.split(" ") : [name, ""];
    const updatedUser = { ...user, firstName, lastName, email, role, _id: uid }; 
    try {
      await client.updateUser(updatedUser); 
      setUser(updatedUser);
      setEditing(false);
      fetchUsers();
      navigate(`/Kanbas/Courses/${cid}/People`);
    } catch (error) {
      console.error('Error saving user:', error);
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
      <div className="text-danger fs-4">
        {!editing && (
          <div onClick={() => setEditing(true)} className="wd-name">
            {user.firstName} {user.lastName}
            <FaEdit className="float-end fs-5 mt-2 wd-edit" onClick={() => setEditing(true)} />
          </div>
        )}
        {editing && (
          <>
            <input 
              className="form-control w-50 wd-edit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveUser();
              }}
            />
            <FaCheck 
              className="float-end fs-5 mt-2 me-2 wd-save" 
              onClick={saveUser} 
            />
          </>
        )}
      </div>
      <b>Roles:</b>
      {editing ? (
        <select 
          className="form-control" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      ) : (
        <span className="wd-roles">{user.role}</span>
      )}
      <br />
      <b>Email:</b>
      {editing ? (
        <input 
          type="email" 
          className="form-control" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <span className="wd-email">{user.email}</span>
      )}
      <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button onClick={() => deleteUser(uid!)} className="btn btn-danger float-end wd-delete">Delete</button>
      <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)} className="btn btn-secondary float-end me-2 wd-cancel">Cancel</button>
    </div>
  );
}
