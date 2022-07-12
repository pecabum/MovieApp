import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { TabBar } from 'react-native-tab-view';
import { Colors } from '../../utils/Colors';

const CustomTabBar = (props: any) => {
  return (
    <TabBar
      renderLabel={({ route }) => (
        <Text style={styles.labelStyle}>{route.title}</Text>
      )}
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.containerStyle}
    />
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  containerStyle: { backgroundColor: Colors.white },
  indicatorStyle: { backgroundColor: Colors.red },
  labelStyle: { color: Colors.black },
});
