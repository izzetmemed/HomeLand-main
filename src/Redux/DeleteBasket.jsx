import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: JSON.parse(localStorage.getItem("Section")) || [],
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    }
  },
});

export const { setData } = sectionSlice.actions;

export default sectionSlice.reducer;
