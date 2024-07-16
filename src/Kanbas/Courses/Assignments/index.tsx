import React from 'react';
import { Link, useParams } from 'react-router-dom';

const assignments = [
  { _id: "A1", title: "ENV + HTML" },
  { _id: "A2", title: "CSS" },
  { _id: "A3", title: "JavaScript" }
];

export default function Assignments() {
  const { cid } = useParams();

  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button></h3>
      <ul id="wd-assignment-list">
        {assignments.map(assignment => (
          <li className="wd-assignment-list-item" key={assignment._id}>
            <Link className="wd-assignment-link" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
              {assignment.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
