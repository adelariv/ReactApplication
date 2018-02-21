import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home';
import DetailsScreen from './src/components/Detail';


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
