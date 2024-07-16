import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FetchGetAll from '../MyComponents/FetchGetAll';

export const fetchData = createAsyncThunk(
  'SellRecommend/fetchData',
  async () => {
    const response = await FetchGetAll(`Sell/Recommend`);
    return response.data; 
  }
);

const initialState = {
  data: [], 
  status: 'idle',
  error: null,
  hasFetched: false 
};

const getAllSlice = createSlice({
  name: 'SellRecommend',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.hasFetched = true; 
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});


export default getAllSlice.reducer;
