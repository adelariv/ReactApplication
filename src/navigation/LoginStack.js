import React from 'react';
import { StackNavigator} from 'react-navigation';
import Login from '../screens/Login';
import SignupScreen from '../screens/SignupScreen';
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen';


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


export default LoginStack;
