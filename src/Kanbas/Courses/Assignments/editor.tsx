import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as db from '../../Database';

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
}

export default function AssignmentEditor() {
  const { cid, id } = useParams<{ cid: string; id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    if (id !== 'new') {
      const foundAssignment = assignments.find((assignment: Assignment) => assignment._id === id) as Assignment;
      setAssignment(foundAssignment);
    } else {
      setAssignment({
        _id: '',
        title: '',
        course: cid || '',
        description: '',
        points: 0,
        dueDate: '',
        availableFrom: '',
        availableUntil: ''
      });
    }
  }, [id, cid, assignments]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssignment(prev => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSave = () => {
    if (assignment) {
      if (id === 'new') {
        dispatch(addAssignment(assignment));
      } else {
        dispatch(updateAssignment(assignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-danger">{id === 'new' ? 'Create Assignment' : 'Edit Assignment'}</h2>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Assignment Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={assignment.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={assignment.description}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input
                  type="number"
                  className="form-control"
                  id="points"
                  name="points"
                  value={assignment.points}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="dueDate"
                  name="dueDate"
                  value={assignment.dueDate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="availableFrom" className="form-label">Available From</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="availableFrom"
                  name="availableFrom"
                  value={assignment.availableFrom}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="availableUntil" className="form-label">Available Until</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="availableUntil"
                  name="availableUntil"
                  value={assignment.availableUntil}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="button" className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
            <button type="button" className="btn btn-danger" onClick={handleSave}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}
