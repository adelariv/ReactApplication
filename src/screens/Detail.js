import React from 'react';
import { Button, View, Text } from 'react-native';

class DetailsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Details',
  // };

  static navigationOptions = ({ navigation, navigationOptions}) => {
    const { params } = navigation.state;

    return {
      title: params ? params.nameDetail : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    }
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params ? params.otherParam : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
           title="Update the title"
           onPress={() => this.props.navigation.setParams({nameDetail: 'Updated!'})}
         />
      </View>
    );
  }
}

export default DetailsScreen;
