import React from 'react';
import {
   ScrollView,
   TextInput,
   View,
   Text,
   Button } from 'react-native';

import styles from "../styles";
import rm from "../RemoteManager"
class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        rut: '222222222',
        password:'222222222',
        response: 'response',
      };
  }

  static navigationOptions = {
    title: 'Login',
  };

  render() {
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
        </ScrollView>
      )
  }

login = () => {
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
      this.setState({response: responseData.token})
    })
    .catch(function(err) {

    });
// const result = await rm.fetchLogin(this.state.rut, this.state.password);
// console.log(result);

}

  _handlePress = () => {
    this.props.navigation.navigate('Login');
  }
}


export default Login;
