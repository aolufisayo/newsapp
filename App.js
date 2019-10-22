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
import NewsStore from './src/store/newsStore';
import NewsList from './src/components/NewsList';
import NewsDetail from './src/components/NewsDetail';
import TabBarIcon from './src/navigation/components/TabBarIcon';
import Search from './src/components/Search';
import Bookmarks from './src/components/Bookmarks';
import Settings from './src/components/Settings';

const newsStore = new NewsStore()

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
    <TabBarIcon name={focused ? "home" : "home-outline"} focused={focused} color={focused ? "#F71735" : "#000"} />
  )
})

const SearchStack = createStackNavigator({
  Search
})
SearchStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name="cloud-search" focused={focused} color={focused ? "#F71735" : "#000"} />
  )
})

const BookmarkStack = createStackNavigator({
  Bookmarks
})
BookmarkStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={focused ? "bookmark" : "bookmark-outline"} focused={focused} color={focused ? "#F71735" : "#000"} />
  )
})

const SettingStack = createStackNavigator({
  Settings
})
SettingStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={focused ? "settings" : "settings-outline"} focused={focused} color={focused ? "#F71735" : "#000"} />
  )
})

const rootStack = createBottomTabNavigator({
  HomeStack,
  SearchStack,
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
