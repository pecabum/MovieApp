import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState, Movie } from '../../types/movies';
import { RootState } from '../rootReducer';

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite: (state, { payload }: PayloadAction<Movie>) => {
      state.favorites = [...state.favorites, payload];
    },
    removeFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(item => item.id !== payload);
    },
  },
});

/**
 * Actions
 */
export const { removeFavorite, setFavorite } = favoritesSlice.actions;
/**
 * Reducers
 */
export const favoritesReducer = favoritesSlice.reducer;
/**
 * Selectors
 */
export const favoritesSelector = (state: RootState) => state.favorites.favorites;
