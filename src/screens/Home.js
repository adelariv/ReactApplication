import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import LogoTitle from '../components/LogoTitle';

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
    headerTitle: "Octano centers",
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
      //{/* <Button onPress={params.increaseCount} title="+1" color="#fff" /> */}
    ),

   };
  };
  componentWillMount() {
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 1,
              otherParam: 'We can do it!',
              nameDetail: 'Detail Name',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
