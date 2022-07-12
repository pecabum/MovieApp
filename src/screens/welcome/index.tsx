import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { navigate } from '../../navigation/navigationRef';
import { Images } from '../../utils/Images';
import { ScreenName } from '../../utils/ScreenName';
import { Spacing } from '../../utils/Spacing';

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Image style={styles.image} source={Images.profile} />
      <TouchableOpacity
        onPress={() => {
          navigate(ScreenName.HOME_SCREEN);
        }}
        style={styles.button}>
        <Text>Movie List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: Spacing.spacing_10,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    padding: 15,
    backgroundColor: '#51A7D9',
    borderRadius: 10,
  },
});
