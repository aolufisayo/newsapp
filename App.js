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
  View
} from 'react-native';
import { Provider } from 'mobx-react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import NewsList from './src/components/NewsList';
import NewsDetail from './src/components/NewsDetail';
import TabBarIcon from './src/navigation/components/TabBarIcon';
import Settings from './src/components/Settings';
import RootStore from './src/store/rootStore';


const rootStore = new RootStore()

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
