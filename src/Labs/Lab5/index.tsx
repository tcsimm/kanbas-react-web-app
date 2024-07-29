import React from 'react';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href="http://localhost:4000/lab5/welcome"          
           className="list-group-item">
           Welcome
        </a>
      </div>
      <hr/>
      <EnvironmentVariables />
    </div>
  );
}

function EnvironmentVariables() {
  return (
    <div id="wd-environment-variables">
      <h3>Environment Variables</h3>
      <p>Remote Server: {REMOTE_SERVER}</p><hr/>
    </div>
  );
}
