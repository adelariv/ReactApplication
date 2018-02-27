import React from 'react';
import MainNavigator from './src/navigation/MainNavigator'



export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}
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
