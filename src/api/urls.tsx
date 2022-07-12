export const GET_MOVIES_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=247082c0fd9674d69377c506d2b38e04&amp;language=en-US&amp;page=1';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

export const getImageUrl = (fileName: string) => {
  return IMAGE_URL + fileName;
};
