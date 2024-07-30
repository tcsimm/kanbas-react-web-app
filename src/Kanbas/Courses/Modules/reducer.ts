import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Lesson {
  name: string;
}

interface Module {
  _id: string;
  lessons: Lesson[];
  name: string;
  course: string;
  editing?: boolean;
}

interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: [],
};

const defaultLessons: Lesson[] = [
  { name: "Lesson 1" },
  { name: "Lesson 2" },
  { name: "Lesson 3" }
];

const defaultName = "New Module";

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<{ name: string, course: string }>) => {
      const newModule: Module = {
        _id: new Date().getTime().toString(),
        lessons: defaultLessons,
        name: action.payload.name || defaultName,
        course: action.payload.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter((m) => m._id !== action.payload);
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id ? action.payload : m
      );
    },
    editModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.map((m) =>
        m._id === action.payload ? { ...m, editing: true } : m
      );
    },
  },
});

export const { setModules, addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
