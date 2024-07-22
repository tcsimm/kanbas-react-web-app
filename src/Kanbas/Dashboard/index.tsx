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

export default function Dashboard(

  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
{
  return (
    <div id="wd-dashboard" className="container-fluid">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
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
                  <div className="d-flex justify-content-between">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2"
                      id="wd-edit-course-click"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                      }}
                      className="btn btn-danger"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
