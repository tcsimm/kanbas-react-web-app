import React from 'react';
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Dashboard />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
