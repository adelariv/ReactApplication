import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class AddCenter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Center</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default AddCenter;
