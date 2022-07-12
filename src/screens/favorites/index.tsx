import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../../utils/ScreenName';

export const FavoritesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
      <Button
        title="Click"
        onPress={() => navigation.push(ScreenName.DETAILS_SCREEN)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
