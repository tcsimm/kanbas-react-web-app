import React from 'react';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to My Web Application</h1>
      <h2>Thomas Simmons - Section Summer 2</h2>
      <h3>Links to Lab Assignments</h3>
      <ul>
        <li><a href="#/Labs/Lab1">Lab 1</a></li>
        <li><a href="#/Labs/Lab2">Lab 2</a></li>
        <li><a href="#/Labs/Lab3">Lab 3</a></li>
        <li><a href="#/Labs/Lab4">Lab 4</a></li>
      </ul>
      <h3>Links to Kanbas Application</h3>
      <ul>
        <li><a href="#/Kanbas">Kanbas</a></li>
      </ul>
      <h3>Source Code Repositories</h3>
      <ul>
        <li><a id="wd-github" href="https://github.com/tcsimm/kanbas-react-web-app" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
      </ul>
    </div>
  );
}
