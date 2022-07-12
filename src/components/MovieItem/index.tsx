import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Movie } from '../../types/movies';
import { Colors } from '../../utils/Colors';
import { Spacing } from '../../utils/Spacing';

interface IProps {
  movie: Movie;
  onPress: () => void;
}

const MovieItem = ({ movie, onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={{ uri: movie.poster_path }}
      />
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 300,
    margin: 1,
    justifyContent: 'flex-end',
  },
  titleWrapper: {
    backgroundColor: Colors.black,
    padding: Spacing.spacing_5,
  },
  title: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '600',
  },
});
