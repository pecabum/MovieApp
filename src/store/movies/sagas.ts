import { put, takeLatest } from 'redux-saga/effects';
import { request } from '../../api/api';
import { getImageUrl, GET_MOVIES_URL } from '../../api/urls';
import { MovieResponse } from '../../types/movies';
import { GetMoviesAction } from './actions';
import { loadMovies } from './slice';

export function* getMovies() {
  const moviesResponse: MovieResponse = yield request(GET_MOVIES_URL);

  moviesResponse.results.map(movie => {
    movie.poster_path = getImageUrl(movie.poster_path);
  });

  /** Some validation for the response **/

  yield put(loadMovies(moviesResponse.results));
}

function* moviesSaga() {
  yield takeLatest(GetMoviesAction.type, getMovies);
}

export default moviesSaga;
