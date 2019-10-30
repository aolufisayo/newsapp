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
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { create } from 'mobx-persist'
import AsyncStorage from '@react-native-community/async-storage';
import NewsList from './src/components/NewsList';
import NewsDetail from './src/components/NewsDetail';
import TabBarIcon from './src/navigation/components/TabBarIcon';
import Bookmarks from './src/components/Bookmarks';
import Settings from './src/components/Settings';
import RootStore from './src/store/rootStore';
import BookmarkStore from './src/store/bookmarkStore';

const rootStore = new RootStore()

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true
})

const newBookmarkStore = new BookmarkStore()
hydrate('@news-app-bookmarks', newBookmarkStore).then(() => console.log("bookmark store have been hydrated"))

const HomeStack = createStackNavigator({
  Home: {
    screen: NewsList
  },
  Details: {
    screen: NewsDetail
  }
}, {
    initialRouteName: 'Home'
  })

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={focused ? "home" : "home-outline"} focused={focused} color={focused ? "#F71735" : "#000"} size={26} />
  )
})


const BookmarkStack = createStackNavigator({
  Bookmarks
})
BookmarkStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={focused ? "bookmark" : "bookmark-outline"} focused={focused} color={focused ? "#F71735" : "#000"} size={26} />
  )
})

const SettingStack = createStackNavigator({
  Settings
})
SettingStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={focused ? "settings" : "settings-outline"} focused={focused} color={focused ? "#F71735" : "#000"} size={26} />
  )
})

const rootStack = createBottomTabNavigator({
  HomeStack,
  BookmarkStack,
  SettingStack
}, {
    tabBarOptions: {
      showLabel: false
    }
  })

const RootStack = createAppContainer(rootStack)

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Provider
          rootStore={rootStore}
          newsStore={rootStore.newsStore}
          bookmarkStore={rootStore.bookmarkStore}
        >
          <RootStack />
        </Provider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5'
  }
});

export default App;
