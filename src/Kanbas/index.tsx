export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} alt="React JS Course" />
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
          <img src="/images/data-analytics.jpg" width={200} alt="Data Analytics Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
              CS5678 Data Analytics
            </a>
            <p className="wd-dashboard-course-title">
              Data Analytics with R
            </p>
            <a href="#/Kanbas/Courses/5678/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/python.jpg" width={200} alt="Python Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9101/Home">
              CS9101 Python Programming
            </a>
            <p className="wd-dashboard-course-title">
              Python for Beginners
            </p>
            <a href="#/Kanbas/Courses/9101/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/web-development.jpg" width={200} alt="Web Development Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1122/Home">
              CS1122 Web Development
            </a>
            <p className="wd-dashboard-course-title">
              Modern Web Development
            </p>
            <a href="#/Kanbas/Courses/1122/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/machine-learning.jpg" width={200} alt="Machine Learning Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3344/Home">
              CS3344 Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              Introduction to Machine Learning
            </p>
            <a href="#/Kanbas/Courses/3344/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/database-systems.jpg" width={200} alt="Database Systems Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5566/Home">
              CS5566 Database Systems
            </a>
            <p className="wd-dashboard-course-title">
              Database Design and Management
            </p>
            <a href="#/Kanbas/Courses/5566/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/cyber-security.jpg" width={200} alt="Cyber Security Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7788/Home">
              CS7788 Cyber Security
            </a>
            <p className="wd-dashboard-course-title">
              Fundamentals of Cyber Security
            </p>
            <a href="#/Kanbas/Courses/7788/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/cloud-computing.jpg" width={200} alt="Cloud Computing Course" />
          <div>
            <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9900/Home">
              CS9900 Cloud Computing
            </a>
            <p className="wd-dashboard-course-title">
              Cloud Computing Basics
            </p>
            <a href="#/Kanbas/Courses/9900/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
