import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Proptypes from 'prop-types';

class CenterItem extends React.Component {
  static propTypes = {
    center: Proptypes.object.isRequired,
    //onPress: Proptypes.func.isRequired,
  };
  handlePress = () => {
    //this.props.onPress(this.props.center.key);
  };
  render() {
    const center = this.props.center;
    return (
      <TouchableOpacity style={styles.center} onPress={this.handlePress}>
        <View style={styles.container}>
          <Image source={require('../../../assets/ic_launcher.png')} style={styles.image} />
          <View>
            <Text style={styles.title}>{center.name}</Text>
            <Text style={styles.address}>{center.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 80,
    height: '100%',
    backgroundColor: '#ccc',
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    padding: 10,
    flex: 2,
  },
});


export default CenterItem;
