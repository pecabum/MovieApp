import * as React from 'react';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/home';
import { DetailsScreen } from './src/screens/details';
import { ScreenName } from './src/utils/ScreenName';
import { navigationRef } from './src/navigation/navigationRef';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { WelcomeScreen } from './src/screens/welcome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={ScreenName.WELCOME_SCREEN}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={ScreenName.WELCOME_SCREEN}
            component={WelcomeScreen}
          />
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
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;
