export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h2 className="text-danger">
        Assignment Editor
      </h2>
      <hr />
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="mb-3">
              <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
              <input type="text" className="form-control" id="assignmentName" defaultValue="A1" />
            </div>
            <div className="mb-3">
              <label className="form-label">Details</label>
              <div className="form-control">
                The assignment is <a href="#" className="text-danger">available online</a><br />
                Submit a link to the landing page of your Web application running on <a href="https://www.netlify.com/" className="text-danger">Netlify</a>.<br />
                The landing page should include the following:
                <ul>
                  <li>Your full name and section</li>
                  <li>Links to each of the lab assignments</li>
                  <li>Link to the Kanbas application</li>
                  <li>Links to all relevant source code repositories</li>
                </ul>
                The Kanbas application should include a link to navigate back to the landing page.
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input type="number" className="form-control" id="points" defaultValue="100" />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
                <select className="form-control" id="assignmentGroup">
                  <option>ASSIGNMENTS</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="displayGradeAs" className="form-label">Display Grade as</label>
                <select className="form-control" id="displayGradeAs">
                  <option>Percentage</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="submissionType" className="form-label">Submission Type</label>
                <select className="form-control" id="submissionType">
                  <option>Online</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Online Entry Options</label>
              <div className="form-control">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="textEntry" />
                  <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="websiteURL" defaultChecked />
                  <label className="form-check-label" htmlFor="websiteURL">Website URL</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                  <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="studentAnnotation" />
                  <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Assign to</label>
                <select className="form-control" id="assignTo">
                  <option>Everyone</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Due</label>
                <input type="datetime-local" className="form-control" defaultValue="2024-05-13T23:59" />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Available from</label>
                <input type="datetime-local" className="form-control" defaultValue="2024-05-06T00:00" />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Until</label>
                <input type="datetime-local" className="form-control" />
              </div>
            </div>
            <button type="submit" className="btn btn-danger">Save</button>
            <button type="button" className="btn btn-secondary ms-2">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}
