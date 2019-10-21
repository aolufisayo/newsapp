/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'mobx-react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NewsStore from './src/store/newsStore';
import NewsList from './src/components/NewsList';
import NewsDetail from './src/components/NewsDetail';

const newsStore = new NewsStore()

const rootStack = createStackNavigator({
  Home: {
    screen: NewsList
  },
  Details: {
    screen: NewsDetail
  }
}, {
    initialRouteName: 'Home'
  })

const RootStack = createAppContainer(rootStack)

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Provider newsStore={newsStore}>
          <RootStack />
        </Provider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
