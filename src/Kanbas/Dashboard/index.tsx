import reactjsImg from '../../images/reactjs.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title" className="my-3">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published" className="my-3">Published Courses (8)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="React JS Course" />
            <div className="card-body">
              <h5 className="card-title">CS1234 React JS</h5>
              <p className="card-text">Full Stack software developer</p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Database Management Course" />
            <div className="card-body">
              <h5 className="card-title">CS5200 Database Management</h5>
              <p className="card-text">Data Analytics</p>
              <a href="#/Kanbas/Courses/5200/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Algorithms Course" />
            <div className="card-body">
              <h5 className="card-title">CS5800 Algorithms</h5>
              <p className="card-text">Algorithms</p>
              <a href="#/Kanbas/Courses/5800/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Web Development Course" />
            <div className="card-body">
              <h5 className="card-title">CS5810 Web Development</h5>
              <p className="card-text">Web Development</p>
              <a href="#/Kanbas/Courses/5810/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Data Science Course" />
            <div className="card-body">
              <h5 className="card-title">CS5290 Data Science</h5>
              <p className="card-text">Introduction to Data Science</p>
              <a href="#/Kanbas/Courses/5290/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Data Mining Course" />
            <div className="card-body">
              <h5 className="card-title">CS5700 Data Mining</h5>
              <p className="card-text">Data Mining and Data Science</p>
              <a href="#/Kanbas/Courses/5700/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Information Assurance Course" />
            <div className="card-body">
              <h5 className="card-title">CS5670 Information Assurance</h5>
              <p className="card-text">Fundamentals of Information Assurance</p>
              <a href="#/Kanbas/Courses/5670/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={reactjsImg} className="card-img-top" alt="Database Architecture Course" />
            <div className="card-body">
              <h5 className="card-title">CS5400 Database Architecture</h5>
              <p className="card-text">Intro to Database Architecture</p>
              <a href="#/Kanbas/Courses/5400/Home" className="btn btn-primary">Go</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
