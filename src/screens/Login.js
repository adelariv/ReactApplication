import React from 'react';
import {
   ScrollView,
   TextInput,
   View,
   Text,
   Button,
   ActivityIndicator } from 'react-native';

import styles from "../styles";
import rm from "../RemoteManager"
import aStorage from "../AsyncStorageManager"

class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        rut: '222222222',
        password:'222222222',
        response: 'response',
        tokenSaved: 'tokenSaved',
        isLoading: false
      };
  }

  static navigationOptions = {
    title: 'Login',
  };

  render() {
    if (this.state.isLoading) {
     return (
       <View style={styles.activityIndicator}>
         <ActivityIndicator />
       </View>
     );
   }
      return (
        <ScrollView style={{backgroundColor:'#fff'}}>
          <View style={styles.containerTop}>
            <Text onPress={this._handlePress} >Octano</Text>
          </View>
          <TextInput
            style={styles.inputLogin}
            placeholder="Rut"
            onChangeText={(rut) => this.setState({rut})}
          />
          <TextInput
            style={styles.inputLogin}
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
          />
          <Button
            title='login'
            onPress={this.login}
          />

          <Text>{this.state.response}</Text>

          <Button
            title='show saved token'
            onPress={this.showToken}
          />

          <Text>{this.state.tokenSaved}</Text>
        </ScrollView>
      )
  }

login = () => {
  this.setState({isLoading: true})
  console.log(this.state.rut);
  console.log(this.state.password);
  const apiHost = 'http://api-mitorre.octano.cl'
  var object = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify( {
      rut: this.state.rut,
      password: this.state.password
    })
    };

    fetch(apiHost + '/api/auth', object)
    .then((response) => response.status == 200 ? response.json() : console.log(response))
    .then((responseData) => {
      console.log(responseData);
      this.setState({response: responseData.token, isLoading: false})
      aStorage.saveAccessToken(responseData.token);
      this.props.navigation.navigate('drawerStack')
    })
    .catch(function(err) {

    });
// const result = await rm.fetchLogin(this.state.rut, this.state.password);
// console.log(result);

}

showToken = () => {
  aStorage.getAccessToken()
  .then(tokenSaved => this.setState({tokenSaved}));
}

  _handlePress = () => {
    this.props.navigation.navigate('forgottenPasswordScreen');
  }


}


export default Login;
