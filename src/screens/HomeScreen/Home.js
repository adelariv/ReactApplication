import React from 'react';
import { Button,
   View, Text, Image,
   StyleSheet, ActivityIndicator,
   FlatList } from 'react-native';
import CenterItem from './CenterItem';
import rm from "../../RemoteManager";
import aStorage from "../../AsyncStorageManager";

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};
    return {
    headerTitle: "Octano centers",
    headerRight: (
      <Button
        onPress={params.AddCenter}
        title="+"
        color="#fff"
      />
      //{/* <Button onPress={params.increaseCount} title="+1" color="#fff" /> */}
    ),

   };
  };

AddCenter = () => {
  this.props.navigation.navigate('signupScreen')
}
  state = {
    count: 0,
    isLoading: true,
    centers: [],
  };

  componentDidMount(){
    console.log('Loading Centers')
     aStorage.getAccessToken()
      .then(token => {
       rm.fetchInitialCenters(token)
       .then(centers => {
         console.log('Home Centers', centers);
         this.setState({ centers: centers, isLoading: false });
       })
      });
  }
  componentWillMount() {
    console.log('willMount');
      this.props.navigation.setParams({ increaseCount: this._increaseCount });
      this.props.navigation.setParams({ AddCenter: this.AddCenter });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
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
      <View style={styles.list}>
          <FlatList
            data={this.state.centers}
            renderItem={({item}) => (
            <CenterItem center={item}  onPress={this.props.onItemPress}/>
            )}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  activityIndicator : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
     alignItems: 'center'
   },
   list: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
   },
});

export default HomeScreen;
