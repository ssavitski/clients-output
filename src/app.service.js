import { credentials } from './../config';
import axios from 'axios';

const {
  API_KEY,
  APP_ID,
  ENTITY_ID,
} = credentials;

axios.defaults.baseURL = credentials.baseURL;

axios.interceptors.request.use(function(config) {
  if (typeof window === 'undefined') {
    return config;
  }

  config.headers.dataType = 'json';

  return config;
});

const appService = {
  fetchClients() {
    const url = `/apps/${APP_ID}/dtypes/entity/${ENTITY_ID.clients}.json`;
    const params = {
      rest_api_key: API_KEY,
      page: 1,
    };

    return new Promise(resolve => {
      axios.get(url, { params }).then(resp =>
        resolve(resp.records)
      );
    });
  },
};

export default appService;
