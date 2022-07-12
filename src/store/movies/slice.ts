import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from '../../types/movies';
import { RootState } from '../rootReducer';

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loadMovies: (state, { payload }: PayloadAction<Movie[]>) => {
      state.movies = payload;
    },
  },
});

/**
 * Actions
 */
export const { loadMovies } = moviesSlice.actions;
/**
 * Reducers
 */
export const moviesReducer = moviesSlice.reducer;
/**
 * Selectors
 */
export const moviesSelector = (state: RootState) => state.movies.movies;
