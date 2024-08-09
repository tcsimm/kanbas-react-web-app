import React from 'react';
import { FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';
import { useParams } from 'react-router';
import * as db from '../Database';

const Grades = () => {
  const { cid } = useParams();

  const courseEnrollments = db.enrollments.filter(enrollment => enrollment.course === cid);

  const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

  const students = courseEnrollments.map(enrollment => db.users.find(user => user._id === enrollment.user)).filter(student => student !== undefined);

  const grades = db.grades.filter(grade => courseAssignments.some(assignment => assignment._id === grade.assignment));

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Grades</h2>
        <div>
          <button className="btn btn-outline-secondary me-2">
            <FaFileImport className="me-2" />
            Import
          </button>
          <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <FaFileExport className="me-2" />
            Export
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Export as CSV</a></li>
            <li><a className="dropdown-item" href="#">Export as PDF</a></li>
          </ul>
          <button className="btn btn-outline-secondary ms-2">
            <FaCog />
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="Search Students" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Search Assignments" />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {courseAssignments.map(assignment => (
                <th key={assignment._id}>{assignment.title}<br /><small>Out of 100</small></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              student && (
                <tr key={student._id}>
                  <td>{student.firstName} {student.lastName}</td>
                  {courseAssignments.map(assignment => {
                    const grade = grades.find(grade => grade.student === student._id && grade.assignment === assignment._id);
                    return <td key={assignment._id}>{grade ? `${(Number(grade.grade)).toFixed(2)}%` : '-'}</td>;
                  })}
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
