import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import FavoriteButton from '../../components/FavoriteButton';
import {
  favoritesSelector,
  removeFavorite,
  setFavorite,
} from '../../store/favourites/slice';
import { Movie } from '../../types/movies';
import { Colors } from '../../utils/Colors';
import { Spacing } from '../../utils/Spacing';

const BoldSpan = (props: any) => (
  <Text style={styles.boldText}>{props.children}</Text>
);

export const DetailsScreen = ({
  navigation,
  route: {
    params: { movie },
  },
}: any) => {
  const dispatch = useDispatch();
  const favorites: Movie[] = useSelector(favoritesSelector);
  const isFavorite = favorites.find(item => item.id === movie.id);

  const toggleFavorite = useCallback(() => {
    dispatch(isFavorite ? removeFavorite(movie.id) : setFavorite(movie));
    Toast.show({
      type: 'success',
      text1: isFavorite
        ? 'Movie removed from Favorites'
        : 'Movie added to Favorites',
      position: 'bottom',
    });
  }, [dispatch, isFavorite, movie]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavoriteButton active={!!isFavorite} onPress={toggleFavorite} />
      ),
    });
  }, [navigation, toggleFavorite, movie.id, isFavorite]);

  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: movie.poster_path }} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.rating}>
        Rating <BoldSpan>{movie.vote_average}/10</BoldSpan> ({movie.vote_count}{' '}
        votes)
      </Text>
      <Text style={styles.overview}>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: Spacing.spacing_10,
  },
  poster: {
    width: 150,
    height: 200,
  },
  title: {
    fontSize: 20,
    marginTop: Spacing.spacing_20,
    textAlign: 'center',
    color: Colors.black,
  },
  rating: {
    fontSize: 16,
    color: Colors.black,
    marginVertical: Spacing.spacing_10,
  },
  overview: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: Spacing.spacing_10,
  },
  boldText: { fontWeight: '600' },
});
