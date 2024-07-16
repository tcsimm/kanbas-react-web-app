import { useParams } from "react-router-dom";
import { FaSearch, FaPlus, FaCheckCircle } from 'react-icons/fa';
import * as db from "../../Database";
import './Assignments.css';

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((assignment: { course: string }) => assignment.course === cid);

  console.log("Assignments component is rendering"); // Ensure this logs in the console

  return (
    <div id="wd-assignments" className="container-fluid">
      <h2>Assignments</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button className="btn btn-secondary me-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <ul id="wd-assignments-list" className="list-group">
        {assignments.map((assignment: { _id: string, title: string }) => (
          <li className="wd-assignment-item list-group-item" key={assignment._id}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="wd-assignment-indicator bg-success"></div>
                <div>
                  <h5 className="mb-0">{assignment.title}</h5>
                  <small className="text-muted">
                    Multiple Modules | Not available until May 6 at 12:00am |
                    Due May 13 at 11:59pm | 100 pts
                  </small>
                </div>
              </div>
              <div className="text-success fs-5">
                <FaCheckCircle />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
