export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
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
            <img src="/images/data-analytics.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5678/Home">
                CS5678 Data Analytics
              </a>
              <p className="wd-dashboard-course-title">
                Introduction to RStudio data analytics
              </p>
              <a href="#/Kanbas/Courses/5678/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/c-programming.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9101/Home">
                CS9101 C Programming
              </a>
              <p className="wd-dashboard-course-title">
                C programming
              </p>
              <a href="#/Kanbas/Courses/9101/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/data-visualization.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1121/Home">
                CS1121 Data Visualization
              </a>
              <p className="wd-dashboard-course-title">
                Data Visualization
              </p>
              <a href="#/Kanbas/Courses/1121/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/data-mining.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/3141/Home">
                CS3141 Data Mining
              </a>
              <p className="wd-dashboard-course-title">
                Data Mining
              </p>
              <a href="#/Kanbas/Courses/3141/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/web-browsers.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/5161/Home">
                CS5161 Web Browsers
              </a>
              <p className="wd-dashboard-course-title">
                Web Browsers
              </p>
              <a href="#/Kanbas/Courses/5161/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/database-systems.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/7181/Home">
                CS7181 Database Systems
              </a>
              <p className="wd-dashboard-course-title">
                Database Management Systems
              </p>
              <a href="#/Kanbas/Courses/7181/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/artificial-intelligence.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/9191/Home">
                CS9191 Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title">
                Introduction to AI
              </p>
              <a href="#/Kanbas/Courses/9191/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  