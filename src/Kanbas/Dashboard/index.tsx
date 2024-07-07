import React from 'react';
import reactjsImg from '../../images/reactjs.jpg';

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="React JS Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Database Management Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5200/Home">
              CS5200 Database Management
            </a>
            <p className="wd-dashboard-course-title">
              Data Analytics
            </p>
            <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Algorithms Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5800/Home">
              CS 5800 Algorithms
            </a>
            <p className="wd-dashboard-course-title">
              Algorithms
            </p>
            <a href="#/Kanbas/Courses/9101/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Web Development Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5810/Home">
              CS 5810 Web Development
            </a>
            <p className="wd-dashboard-course-title">
              Web Development
            </p>
            <a href="#/Kanbas/Courses/1122/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Data Science Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5290/Home">
              CS5290 Data Science
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to Data Science
            </p>
            <a href="#/Kanbas/Courses/3344/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Data Mining Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5700/Home">
              CS5700 Data Mining
            </a>
            <p className="wd-dashboard-course-title">
              Data Mining and Data Science
            </p>
            <a href="#/Kanbas/Courses/5566/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Information Assurance Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5670/Home">
              CS5670 Information Assurance
            </a>
            <p className="wd-dashboard-course-title">
              Fundamentals of Information Assurance
            </p>
            <a href="#/Kanbas/Courses/7788/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src={reactjsImg} width={200} alt="Database Architecture Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5400/Home">
              CS5400 Database Architecture
            </a>
            <p className="wd-dashboard-course-title">
              Intro to Database Architecture
            </p>
            <a href="#/Kanbas/Courses/9900/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
