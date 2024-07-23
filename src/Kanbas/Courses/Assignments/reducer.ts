import { createSlice } from '@reduxjs/toolkit';
import { assignments } from '../../Database';

const initialState = {
  assignments,
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      state.assignments.push({ ...payload, _id: new Date().getTime().toString() });
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map(assignment =>
        assignment._id === payload._id ? payload : assignment
      );
    },
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter(assignment => assignment._id !== payload);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
