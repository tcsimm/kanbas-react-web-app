import React from 'react';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    marginTop: '20px',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    height: '100px',
  },
  table: {
    width: '100%',
  },
  td: {
    padding: '5px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default function AssignmentEditor() {
  const { id } = useParams();

  return (
    <div id="wd-assignments-editor" style={styles.container}>
      <label htmlFor="wd-name" style={styles.label}>Assignment Name</label>
      <input id="wd-name" value={`Assignment ${id}`} readOnly style={styles.input} /><br /><br />
      <textarea id="wd-description" style={styles.textarea}>
      The assignment is available online. Submit a link to the landing page of your Web application runing on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all the relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
</textarea>
      <br />
      <table style={styles.table}>
        <tbody>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-points" style={styles.label}>Points</label>
            </td>
            <td style={styles.td}>
              <input id="wd-points" value={100} style={styles.input} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-group" style={styles.label}>Assignment Group</label>
            </td>
            <td style={styles.td}>
              <select id="wd-group" style={styles.input}>
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-display-grade-as" style={styles.label}>Display Grade as</label>
            </td>
            <td style={styles.td}>
              <select id="wd-display-grade-as" style={styles.input}>
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-submission-type" style={styles.label}>Submission Type</label>
            </td>
            <td style={styles.td}>
              <select id="wd-submission-type" style={styles.input}>
                <option value="online">Online</option>
              </select>
              <label>
                <input type="checkbox" id="wd-text-entry" /> Text Entry
              </label>
              <label>
                <input type="checkbox" id="wd-website-url" /> Website URL
              </label>
              <label>
                <input type="checkbox" id="wd-media-recordings" /> Media Recordings
              </label>
              <label>
                <input type="checkbox" id="wd-student-annotation" /> Student Annotation
              </label>
              <label>
                <input type="checkbox" id="wd-file-upload" /> File Uploads
              </label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-assign-to" style={styles.label}>Assign to</label>
            </td>
            <td style={styles.td}>
              <input id="wd-assign-to" value="Everyone" style={styles.input} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-due-date" style={styles.label}>Due Date</label>
            </td>
            <td style={styles.td}>
              <input type="date" id="wd-due-date" style={styles.input} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-available-from" style={styles.label}>Available From</label>
            </td>
            <td style={styles.td}>
              <input type="date" id="wd-available-from" style={styles.input} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" style={styles.td}>
              <label htmlFor="wd-available-until" style={styles.label}>Available Until</label>
            </td>
            <td style={styles.td}>
              <input type="date" id="wd-available-until" style={styles.input} />
            </td>
          </tr>
        </tbody>
      </table>
      <button style={styles.button}>Save</button>
      <button style={styles.buttonHover}>Cancel</button>
    </div>
  );
}
