import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";

const store = configureStore({
  reducer: {
    hello: helloReducer,
  },
});

export default store;
