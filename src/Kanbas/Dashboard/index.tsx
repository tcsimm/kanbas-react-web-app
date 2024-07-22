import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import '../styles.css'; 

import rocketPropulsionImg from '../../images/rocket_propulsion.jpg';
import aerodynamicsImg from '../../images/aerodynamics.jpg';
import spacecraftDesignImg from '../../images/spacecraft_design.jpg';
import organicChemistryImg from '../../images/organic_chemistry.jpg';
import inorganicChemistryImg from '../../images/inorganic_chemistry.jpg';
import physicalChemistryImg from '../../images/physical_chemistry.jpg';
import defaultImg from '../../images/default.jpg';
import hobbitImg from '../../images/hobbit.jpg';
import elvesImg from '../../images/elves.jpg';
import ringImg from '../../images/ring.jpg';
import demoImg from '../../images/demo.jpg';
import declarationImg from '../../images/declaration.jpg';
import centuryImg from '../../images/century.jpg';
import ethicsImg from '../../images/ethics.jpg';
import ageImg from '../../images/age.jpg';
import commImg from '../../images/comm.jpg';
import sufiImg from '../../images/sufi.jpg';
import islamImg from '../../images/islam.jpg';
import esoImg from '../../images/eso.jpg';
import chinaImg from '../../images/china.jpg';
import mythImg from '../../images/myth.jpg';
import ancientImg from '../../images/ancient.jpg';

const imageMap: { [key: string]: string } = {
  "rocket_propulsion.jpg": rocketPropulsionImg,
  "aerodynamics.jpg": aerodynamicsImg,
  "spacecraft_design.jpg": spacecraftDesignImg,
  "organic_chemistry.jpg": organicChemistryImg,
  "inorganic_chemistry.jpg": inorganicChemistryImg,
  "physical_chemistry.jpg": physicalChemistryImg,
  "hobbit.jpg": hobbitImg,
  "elves.jpg": elvesImg,
  "ring.jpg": ringImg,
  "demo.jpg": demoImg,
  "declaration.jpg": declarationImg,
  "century.jpg": centuryImg,
  "ethics.jpg": ethicsImg,
  "age.jpg": ageImg,
  "comm.jpg": commImg,
  "sufi.jpg": sufiImg,
  "islam.jpg": islamImg,
  "eso.jpg": esoImg,
  "china.jpg": chinaImg,
  "myth.jpg": mythImg,
  "ancient.jpg": ancientImg
};

export default function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "default.jpg", description: "New Description"
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setCourses([...courses, newCourse]);
  };

  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}> Add </button>
      </h5>
      <br />
      <input 
        value={course.name} 
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } 
        placeholder="Course Name"
      />
      <textarea 
        value={course.description} 
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, description: e.target.value }) } 
        placeholder="Course Description"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-4 g-4">
        {courses.map((course) => (
          <div className="col" key={course._id}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                <img
                  src={course.image && imageMap[course.image] ? imageMap[course.image] : defaultImg}
                  className="card-img-top custom-img-size"
                  alt={`${course.name} Course`}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
