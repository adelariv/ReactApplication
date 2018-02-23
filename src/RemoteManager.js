const apiHost = 'http://api-mitorre.octano.cl'

export default {
  async fetchInitialDeals() {
    try {
      const response = await fetch(apiHost + '/api/deals');
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
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
