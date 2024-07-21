import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaPlus, FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
import * as db from '../../Database';
import './Assignments.css'; // Ensure you create and import this CSS file

const Assignments = () => {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="container mt-4">
      <h2 className="text-danger">Assignments</h2>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" className="form-control search-bar" placeholder="Search..." />
        <div>
          <button className="btn btn-outline-secondary me-2">+ Group</button>
          <button className="btn btn-danger">+ Assignment</button>
        </div>
      </div>
      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment._id} className="assignment-item">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="drag-handle me-3">
                  <FaEllipsisV />
                </div>
                <div>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="assignment-title">
                    {assignment.title}
                  </Link>
                  <div className="assignment-details">
                    Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="check-circle me-3" />
                <FaEllipsisV />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
