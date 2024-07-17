import React from 'react';
import { Link, useParams } from 'react-router-dom';
import * as db from "../../Database";

const Assignments = () => {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <h1>Assignments</h1>
      <ul className="list-group">
        {assignments.map(assignment => (
          <li key={assignment._id} className="list-group-item">
            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
              {assignment.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
