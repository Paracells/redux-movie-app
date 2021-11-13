import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './../../common/api/movieApi';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const { data } = await api.get('Avatar');
    return data;
  }
);

const initialState = {
  movies: {},
  isLoading: true,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.isLoading = true;
      console.log('pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log('success');
      return { ...state, isLoading: false, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('error');
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
