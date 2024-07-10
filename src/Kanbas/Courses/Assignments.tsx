import React from 'react';
import { FaPlus, FaCheckCircle, FaEllipsisV } from 'react-icons/fa';
import './Assignments.css';

const Assignments = () => {
  console.log("Assignments component rendered"); // Debugging output

  return (
    <div>
      <h2>Assignments</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" className="form-control me-3" placeholder="Search..." style={{ maxWidth: '300px' }} />
        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaPlus className="me-2" />
            Group
          </button>
          <button className="btn btn-danger">
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>A1</h5>
              <p>Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</p>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" />
              <FaEllipsisV />
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>A2</h5>
              <p>Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</p>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" />
              <FaEllipsisV />
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>A3</h5>
              <p>Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</p>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" />
              <FaEllipsisV />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
