import { AnimatedFlashList } from '@shopify/flash-list';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../navigation/navigationRef';
import { GetMoviesAction } from '../../store/movies/actions';
import { moviesSelector } from '../../store/movies/slice';
import { Movie } from '../../types/movies';
import { ScreenName } from '../../utils/ScreenName';
import MovieItem from '../MovieItem';

export const HomeTab = () => {
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetMoviesAction());
  }, [dispatch]);

  const navigateToDetails = (movie: Movie) => {
    navigate(ScreenName.DETAILS_SCREEN, { movie });
  };

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieItem
      onPress={() => {
        navigateToDetails(item);
      }}
      movie={item}
    />
  );

  return (
    <AnimatedFlashList
      data={movies}
      numColumns={2}
      renderItem={renderItem}
      estimatedItemSize={20}
    />
  );
};
