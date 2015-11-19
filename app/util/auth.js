import api from './api';
import cache from './cache';

export const session = {
  client: null,
  hotels: [],
  token: null,

  load() {
    this.client = cache.get('auth.client');
    this.hotels = cache.get('auth.hotels', []);
    this.token = cache.get('auth.token');
    return this;
  },

  set(client, hotels, token) {
    cache.set('auth.client', client);
    cache.set('auth.hotels', hotels);
    cache.set('auth.token', token);
    return this.load();
  },

  clear() {
    cache.del('auth.client');
    cache.del('auth.hotels');
    cache.del('auth.token');
    return this.load();
  }
};

export const auth = {
  session,

  login({username, password}) {
    return new Promise((resolve, reject) => {
      api.post('/RepUpEngine/authenticateClient.repup', {
        form: {loginId: username, password}
      }).then((data) => {
        if (data.authStatus === 'success') {
          resolve(data);
        } else {
          reject(data);
        }
      }).catch((err) => {
        reject(err);
      });
    }).then(({clientId}) => {
      return Promise.all([
        api.get('/RepUpEngine/getClientDetails.repup', {qs: {clientId}}),
        api.get('/RepUpEngine/getClientProperties.repup', {qs: {clientId}})
      ]);
    }).then(([client, hotels]) => {
      session.set(client, hotels, null);
      return {client, hotels};
    });
  },

  logout() {
    session.clear();
    return Promise.resolve();
  },

  isLoggedIn() {
    return Promise.resolve(session.client !== null && session.hotels.length > 0);
  }
};

export default auth;
