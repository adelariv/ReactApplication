import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Image, TouchableOpacity } from 'react-native'
import SideMenu from '../components/SideMenu/SideMenu'
import colors from '../colors';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Detail';
import ModalScreen from '../screens/ModalScreen';


// drawer stack
const DrawerStack = DrawerNavigator({
  HomeScreen: { screen: HomeScreen },
  DetailsScreen: { screen: DetailsScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  // define customComponent here
  contentComponent: SideMenu,
  drawerWidth: 300
});

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#9b0476'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Octano',
    headerLeft: (
       <TouchableOpacity onPress={() => navigation.navigate("DrawerToggle")}>
          <Image source={require('../../assets/hamburger.png')} style={{ width: 30, height: 30}} />
      </TouchableOpacity>
      )
  })
})

export default DrawerNavigation;
