import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      console.error('Error fetching profile:', err);
      navigate("/Kanbas/Account/Signin");
    }
  };

  const signout = async () => {
    try {
      await client.signout();
      dispatch(setCurrentUser(null));
      navigate("/Kanbas/Account/Signin");
    } catch (err: any) {
      console.error('Error signing out:', err);
      setError('An error occurred while signing out. Please try again.');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen p-4">
      <h1 className="text-center">Profile</h1>
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      {profile && (
        <div className="d-flex flex-column align-items-center">
          <input
            className="form-control mb-3"
            placeholder="Username"
            value={profile.username || ''}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            className="form-control mb-3"
            placeholder="Password"
            value={profile.password || ''}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            type="password"
          />
          <input
            className="form-control mb-3"
            placeholder="First Name"
            value={profile.firstName || ''}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            className="form-control mb-3"
            placeholder="Last Name"
            value={profile.lastName || ''}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            className="form-control mb-3"
            placeholder="Date of Birth"
            value={profile.dob || ''}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <input
            className="form-control mb-3"
            placeholder="Email"
            value={profile.email || ''}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            className="form-control mb-3"
            value={profile.role || 'USER'}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button
        onClick={signout}
        className="btn btn-danger w-100 mt-3"
      >
        Signout
      </button>
    </div>
  );
}
