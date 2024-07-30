import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import LandingPage from "../LandingPage";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
      } catch (error) {
        setErrorMessage("Failed to fetch courses from the server.");
      }
    };
    fetchCourses();
  }, []);

  const addNewCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      setErrorMessage("Failed to create a new course.");
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      setErrorMessage("Failed to delete the course.");
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(
        courses.map((c) => (c._id === course._id ? course : c))
      );
    } catch (error) {
      setErrorMessage("Failed to update the course.");
    }
  };

  return (
    <Provider store={store}>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
            <Route path="LandingPage" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
