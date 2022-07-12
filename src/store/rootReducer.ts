import { combineReducers } from 'redux';
import { FavoritesState, MoviesState } from '../types/movies';
import { favoritesReducer } from './favourites/slice';
import { moviesReducer } from './movies/slice';

export interface RootState {
  movies: MoviesState;
  favorites: FavoritesState;
}

export default combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
});
