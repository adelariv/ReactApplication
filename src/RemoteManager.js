const apiHost = 'http://api-mitorre.octano.cl'
import aStorage from "./AsyncStorageManager"

export default {
  async fetchInitialCenters(token) {
    try {
      console.log('token_value_received= ', token);
      const response = await fetch(apiHost + '/api/centros', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' +  token,
        }
      });
      const responseJson = await response.json();

      console.log('responseJson_value= ', responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
      console.log(error,toString());
    }
  },
  async fetchLogin(rut, password) {
    try {
      const response = await fetch(apiHost + '/api/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            rut: rut,
            password: password,
          }),
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },




}
