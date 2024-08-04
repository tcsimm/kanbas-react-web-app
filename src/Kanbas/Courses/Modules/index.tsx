import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsGripVertical } from "react-icons/bs";
import { setModules, addModule, deleteModule as deleteModuleReducer, updateModule as updateModuleReducer, editModule } from "./reducer";
import * as client from "./client";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState<string>("");
  const { modules } = useSelector((state: any) => state.modulesReducer);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        if (cid) {
          console.log(`Fetching modules for course ID: ${cid}`);
          const modules = await client.findModulesForCourse(cid);
          console.log(`Modules fetched: ${JSON.stringify(modules)}`);
          dispatch(setModules(modules));
        }
      } catch (error: any) {
        console.error("Error fetching modules:", error.message);
      }
    };
    fetchModules();
  }, [cid, dispatch]);

  const defaultLessons = [
    { name: "Lesson 1" },
    { name: "Lesson 2" },
    { name: "Lesson 3" }
  ];

  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, { ...module, lessons: defaultLessons });
    dispatch(addModule(newModule));
  };

  const saveModule = async (module: any) => {
    const updatedModule = await client.updateModule(module._id, module);
    dispatch(updateModuleReducer(updatedModule));
  };

  const removeModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      dispatch(deleteModuleReducer(moduleId));
    } catch (error: any) {
      console.error("Error deleting module:", error.message);
    }
  };

  return (
    <div id="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: cid });
          setModuleName("");
        }}
      />
      <br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) => dispatch(updateModuleReducer({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    value={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => { removeModule(module._id); }}
                  editModule={() => dispatch(editModule(module._id))}
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
