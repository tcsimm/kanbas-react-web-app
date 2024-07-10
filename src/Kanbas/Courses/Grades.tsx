import React from 'react';
import { FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';
import './Grades.css'; // create this file for custom styles if needed

const Grades = () => {
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
              <th>A1 SETUP<br /><small>Out of 100</small></th>
              <th>A2 HTML<br /><small>Out of 100</small></th>
              <th>A3 CSS<br /><small>Out of 100</small></th>
              <th>A4 BOOTSTRAP<br /><small>Out of 100</small></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td>
                <input type="text" className="form-control" defaultValue="88.03%" />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
