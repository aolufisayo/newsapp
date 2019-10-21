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
import NewsStore from './src/store/newsStore';
import NewsList from './src/components/NewsList';

const newsStore = new NewsStore()
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Provider newsStore={newsStore}>
          <NewsList />
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
