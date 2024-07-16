import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import FetchGetAll from '../MyComponents/FetchGetAll';
import FetchGetSearch from '../MyComponents/FetchGetSearch';
export const fetchData = createAsyncThunk(
  'Land/fetchData',
  async ({ page ,SearchBool,searchModel}) => {
    var response;
    if(SearchBool!==false){
        response = await FetchGetSearch(searchModel,`Land/Search-${page}`);
        return response; 
    }else{
        response = await FetchGetAll(`Land/Page-${page}`);
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
  hasFetched: false,
  SearchBool:false,
  SearchModel:null
};

const getAllSlice = createSlice({
  name: 'Land',
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
        state.SearchBool=action.meta.arg.SearchBool;
        state.SearchModel=action.meta.arg.searchModel;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setPage } = getAllSlice.actions;

export default getAllSlice.reducer;
