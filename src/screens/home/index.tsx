/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import {
  Route,
  SceneMap,
  SceneRendererProps,
  TabBar,
  TabBarIndicatorProps,
  TabBarProps,
  TabView,
} from 'react-native-tab-view';
import { Scene } from 'react-native-tab-view/lib/typescript/types';
import CustomTabBar from '../../components/CustomTabBar';
import { FavoriteTab } from '../../components/Tabs/FavoriteTab';
import { HomeTab } from '../../components/Tabs/HomeTab';
import { Colors } from '../../utils/Colors';

const renderScene = SceneMap({
  first: HomeTab,
  second: FavoriteTab,
});

export const HomeScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All Movies' },
    { key: 'second', title: 'Favorites' },
  ]);

  const renderTabBar = (options: SceneRendererProps) => {
    return <CustomTabBar {...options} />;
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      sceneContainerStyle={{ backgroundColor: Colors.white }}
      style={{ backgroundColor: Colors.white }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
