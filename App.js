import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Detail';
import ModalScreen from './src/screens/ModalScreen';

const MainStack = StackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Login',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#9b0476',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
