import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
import './Assignments.css'; // Ensure you create and import this CSS file

const Assignments = () => {
  // Hardcoded assignments data
  const assignments = [
    {
      _id: 'A1',
      title: 'A1',
      details: 'Multiple Modules',
      availableDate: 'May 6 at 12:00am',
      dueDate: 'May 13 at 11:59pm',
      points: 100,
    },
    {
      _id: 'A2',
      title: 'A2',
      details: 'Multiple Modules',
      availableDate: 'May 13 at 12:00am',
      dueDate: 'May 20 at 11:59pm',
      points: 100,
    },
    {
      _id: 'A3',
      title: 'A3',
      details: 'Multiple Modules',
      availableDate: 'May 20 at 12:00am',
      dueDate: 'May 27 at 11:59pm',
      points: 100,
    },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" className="form-control search-bar" placeholder="Search..." />
        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-danger">
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <div className="assignments-header d-flex justify-content-between align-items-center">
        <h2 className="text-danger">Assignments</h2>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            40% of Total
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Option 1</a></li>
            <li><a className="dropdown-item" href="#">Option 2</a></li>
          </ul>
        </div>
        <button className="btn btn-outline-secondary">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment._id} className="assignment-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="drag-handle me-3">
                <FaEllipsisV />
              </div>
              <div>
                <Link to={`/Kanbas/Courses/Assignments/${assignment._id}`} className="assignment-title">
                  {assignment.title}
                </Link>
                <div className="assignment-details text-muted">
                  {assignment.details} | Not available until {assignment.availableDate} | Due {assignment.dueDate} | {assignment.points} pts
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" />
              <FaEllipsisV />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
