import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaPlus, FaEllipsisV, FaCheckCircle, FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setAssignments, deleteAssignment } from './reducer';
import * as client from './client';
import './Assignments.css'; 

const Assignments = () => {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments.filter((assignment: any) => assignment.course === cid));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedAssignment, setSelectedAssignment] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        if (cid) {
          console.log(`Fetching assignments for course ID: ${cid}`);
          const fetchedAssignments = await client.getAssignmentsForCourse(cid);
          console.log(`Assignments fetched: ${JSON.stringify(fetchedAssignments)}`);
          dispatch(setAssignments(fetchedAssignments));
        }
      } catch (error: any) {
        console.error("Error fetching assignments:", error.message);
      }
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const handleDelete = async (assignmentId: string) => {
    try {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
      setSelectedAssignment(null);
    } catch (error: any) {
      console.error("Error deleting assignment:", error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-danger">Assignments</h2>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input type="text" className="form-control search-bar" placeholder="Search..." />
        <div>
          <button className="btn btn-outline-secondary me-2">+ Group</button>
          <button className="btn btn-danger" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}>+ Assignment</button>
        </div>
      </div>
      <div className="assignments-list">
        {assignments.map((assignment: any) => (
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
                    Multiple Modules | Not available until {assignment.availableFrom} | Due {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FaCheckCircle className="check-circle me-3" />
                <FaTrash className="text-danger me-2 mb-1" onClick={() => setSelectedAssignment(assignment._id)} />
                <FaEllipsisV />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedAssignment && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="close" aria-label="Close" onClick={() => setSelectedAssignment(null)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedAssignment(null)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(selectedAssignment)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;
