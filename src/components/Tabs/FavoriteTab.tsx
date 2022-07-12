import React from 'react';
import { AnimatedFlashList } from '@shopify/flash-list';
import { useSelector } from 'react-redux';
import { navigate } from '../../navigation/navigationRef';
import { favoritesSelector } from '../../store/favourites/slice';
import { Movie } from '../../types/movies';
import { ScreenName } from '../../utils/ScreenName';
import MovieItem from '../MovieItem';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../utils/Colors';

export const FavoriteTab = () => {
  const favorites = useSelector(favoritesSelector);

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
      data={favorites}
      numColumns={2}
      renderItem={renderItem}
      estimatedItemSize={20}
      ListEmptyComponent={() => (
        // Ugly but no time for another styles
        <Text style={styles.emptyText}>No Favorites Added</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  emptyText: {
    alignSelf: 'center',
    fontSize: 20,
    color: Colors.black,
    marginTop: 100,
  },
});
