export interface MoviesState {
  movies: Movie[];
}
export interface FavoritesState {
  favorites: Movie[];
}
export interface Movie {
  image: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface MovieResponse {
  results: Movie[];
  page: number;
}
