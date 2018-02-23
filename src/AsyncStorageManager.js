import React from 'react';
import { AsyncStorage } from 'react-native';

export default {

 async saveAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  },

  async getAccessToken(){
    try {
      const value = await AsyncStorage.getItem('accessToken');
      if (value !== null){
        // We have data!!
        console.log(value);
        return value;
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }
}
