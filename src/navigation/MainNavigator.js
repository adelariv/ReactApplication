import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginStack from './LoginStack'
import DrawerNavigation from './DrawerNavigation'

// Manifest of possible screens
const MainNavigator = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

export default MainNavigator;
