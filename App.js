import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Image, TouchableOpacity } from 'react-native'
import SideMenu from './src/components/SideMenu/SideMenu'
import colors from './src/colors';
import Login from './src/screens/Login';
import SignupScreen from './src/screens/SignupScreen';
import ForgottenPasswordScreen from './src/screens/ForgottenPasswordScreen';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Detail';
import ModalScreen from './src/screens/ModalScreen';


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
      // if (this.state.isOpen) {
      //   drawer = "DrawerOpen"
      // } else {
      //   drawer = "DrawerClose"
      // }
       <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <Image source={require('./assets/hamburger.png')} size={30} color="blue" />
      </TouchableOpacity>
      )
  })
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: Login },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#9b0476'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
})

// Manifest of possible screens
const MainNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
})

// const MainStack = StackNavigator(
//   {
//     Login: {
//       screen: Login,
//     },
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     /* The header config from HomeScreen is now here */
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#9b0476',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       headerMode: 'float'
//     },
//   }
// );
//
// const RootStack = StackNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
  }
  render() {
    return <MainNav />;
  }
}
