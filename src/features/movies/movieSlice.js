import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './../../common/api/movieApi';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieName = 'Avatar';
    const { data } = await api.get(
      `?s=${movieName}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    return data;
  }
);

export const fetchMovieDetail = createAsyncThunk(
  'movies/fetchAsyncMovieDetail',
  async (id) => {
    const { data } = await api.get(
      `?i=${id}&apikey=${import.meta.env.VITE_API_KEY}&Plot=full`
    );
    return data;
  }
);

const initialState = {
  movies: {},
  movieDetail: {},
  isLoading: true,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    cleanMovieDetail: (state) => {
      state.movieDetail = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {},

    [fetchMovieDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovieDetail.fulfilled]: (state, action) => {
      return { ...state, isLoading: false, movieDetail: action.payload };
    },
  },
});

export const { addMovies, cleanMovieDetail } = movieSlice.actions;
export default movieSlice.reducer;
