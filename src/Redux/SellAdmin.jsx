import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FetchGetAll from '../MyComponents/FetchGetAll';

export const fetchData = createAsyncThunk(
  'SellAdmin/fetchData',
  async ({ page ,SearchModel,Number}) => {
    var response;
    var stringNumber=String(Number);
    switch (SearchModel) {
      case 'id':
        response = await FetchGetAll(`Sell/AdminId-${Number}`);
        return response.data;
      case 'AdminONumber':    
        response = await FetchGetAll(`Sell/AdminONumber-${stringNumber}`);
        return response.data;
      case 'AdminCNumber':
        response = await FetchGetAll(`Sell/AdminCNumber-${stringNumber}`);
        return response.data;
      default:
        response = await FetchGetAll(`Sell/Normal-${page}`);
        return response.data;
    }
  }
);

const initialState = {
  data: { paginationCount: 0, data: [] }, 
  status: 'idle',
  error: null,
  currentPage: 1,
  totalPages: 1,
  hasFetched: false ,
  SearchNumber:0,
  SearchModel:null
};

const getAllSlice = createSlice({
  name: 'SellAdmin',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.currentPage=action.meta.arg.page;
        state.hasFetched = true; 
        state.totalPages = Math.ceil(action.payload.paginationCount / 20);
        state.SearchNumber=action.meta.arg.Number;
        state.SearchModel=action.meta.arg.SearchModel;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setPage } = getAllSlice.actions;

export default getAllSlice.reducer;
