import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/home';
import { DetailsScreen } from './src/screens/details';
import { ScreenName } from './src/utils/ScreenName';
import { FavoritesScreen } from './src/screens/favorites';
import { navigationRef } from './src/navigation/navigationRef';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={ScreenName.HOME_SCREEN}>
          <Stack.Screen
            options={{
              title: 'Movies',
            }}
            name={ScreenName.HOME_SCREEN}
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              title: 'Movie Details',
            }}
            name={ScreenName.DETAILS_SCREEN}
            component={DetailsScreen}
          />
          <Stack.Screen
            options={{
              title: 'Favorites',
            }}
            name={ScreenName.FAVORITES_SCREEN}
            component={FavoritesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
