import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

class QRScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    resultQR: '',
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.containerCenter}>
            <Text style={styles.titleText}>QR Scanner</Text>
          </View>
          <View style={styles.containerCenter}>
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={styles.containerQR}
            />
          </View>
          <View style={styles.containerCenter}>
            <Text style={styles.titleText}>Value:{this.state.resultQR}</Text>
          </View>

        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      this.setState({resultQR: data})
  }


}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    containerQR: {
      height: 200,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'gray',
      borderRadius: 20,
    },
    containerCenter: {
      width: '100%',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center'
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
    },

  })
export default QRScanner
