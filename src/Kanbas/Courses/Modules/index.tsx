import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState<string>("");

  const addModule = () => {
    const newModule = { _id: new Date().getTime().toString(), name: moduleName, course: cid, lessons: [] };
    setModules([...modules, newModule]);
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  return (
    <div id="wd-modules">
      <ModulesControls 
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons 
                  moduleId={module._id}
                  deleteModule={deleteModule}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any, index: number) => (
                    <li className="wd-lesson list-group-item p-3 ps-1" key={index}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
