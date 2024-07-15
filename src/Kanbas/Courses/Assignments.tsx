import React from 'react';
import { FaPlus, FaCheck, FaEllipsisV, FaAlignJustify } from 'react-icons/fa'; // Ensure to import FaAlignJustify
import './Assignments.css';

export default function Assignments() {
  const assignments = [
    { id: 1, title: 'A1', details: 'Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts' },
    { id: 2, title: 'A2', details: 'Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts' },
    { id: 3, title: 'A3', details: 'Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts' },
  ];

  return (
    <div id="wd-assignments" className="container-fluid">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="col-auto">
          <button className="btn btn-outline-secondary me-2"><FaPlus /> Group</button>
          <button className="btn btn-danger"><FaPlus /> Assignment</button>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Assignments</h5>
          <div className="list-group">
            {assignments.map((assignment) => (
              <div key={assignment.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="me-3 border-start border-3 border-success" style={{ paddingLeft: '10px' }}></div>
                  <div>
                    <h5 className="mb-0">{assignment.title}</h5>
                    <small className="text-muted">{assignment.details}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheck className="text-success me-3" />
                  <FaEllipsisV className="text-secondary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
