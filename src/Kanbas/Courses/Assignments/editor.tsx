import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignment Editor</h2>
      <div>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <label htmlFor="wd-description">Details</label>
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
          - Your full name and section
          - Links to each of the lab assignments
          - Link to the Kanbas application
          - Links to all relevant source code repositories
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" type="number" value={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group">
                  <option value="Assignments">Assignments</option>
                  {/* Add other groups as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as">
                  <option value="Percentage">Percentage</option>
                  <option value="Points">Points</option>
                  {/* Add other grading methods as needed */}
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="Online">Online</option>
                  {/* Add other submission types as needed */}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <fieldset>
          <legend>Online Entry Options</legend>
          <label htmlFor="wd-text-entry">
            <input type="checkbox" id="wd-text-entry" /> Text Entry
          </label><br />
          <label htmlFor="wd-website-url">
            <input type="checkbox" id="wd-website-url" /> Website URL
          </label><br />
          <label htmlFor="wd-media-recordings">
            <input type="checkbox" id="wd-media-recordings" /> Media Recordings
          </label><br />
          <label htmlFor="wd-student-annotation">
            <input type="checkbox" id="wd-student-annotation" /> Student Annotation
          </label><br />
          <label htmlFor="wd-file-upload">
            <input type="checkbox" id="wd-file-upload" /> File Uploads
          </label><br />
        </fieldset>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label>
              </td>
              <td>
                <input id="wd-assign-to" value="Everyone" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-due-date">Due Date</label>
              </td>
              <td>
                <input id="wd-due-date" type="date" value="2024-05-13" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
              </td>
              <td>
                <input id="wd-available-from" type="date" value="2024-05-06" />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-available-until">Available until</label>
              </td>
              <td>
                <input id="wd-available-until" type="date" value="2024-05-20" />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
}
