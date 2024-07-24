import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

const initialState = {
  modules: modules,
};

const defaultLessons = [
  { name: "Lesson 1" },
  { name: "Lesson 2" },
  { name: "Lesson 3" }
];

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule: any = {
        id: new Date().getTime().toString(),
        lessons: defaultLessons,
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }) => {
      const newModules = state.modules.filter((m: any) => m.id !== moduleId);
      state.modules = newModules;
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m.id === module.id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m.id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
