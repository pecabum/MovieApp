import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Images } from '../../utils/Images';

interface IProps {
  active: boolean;
  onPress: () => void;
}

const FavoriteButton = ({ active, onPress }: IProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={active ? Images.favoriteActive : Images.favoriteInactive}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  image: { width: 30, height: 30 },
});
