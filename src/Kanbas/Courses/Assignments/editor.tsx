// src/Kanbas/Courses/Assignments/Editor.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function AssignmentEditor() {
  const { id } = useParams();

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your application.
      </textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
            </td>
            <td>
            <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
