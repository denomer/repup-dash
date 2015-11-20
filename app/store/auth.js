import api from 'app/util/api';
import cache from 'app/util/cache';

export const session = {
  client: null,
  hotels: [],
  overview: [],
  token: null,

  lifetime: 5 * 24 * 3600 * 1000, // 5 days in ms

  load() {
    this.client = cache.get('account.client');
    this.hotels = cache.get('account.hotels', []);
    this.overview = cache.get('account.overview', []);
    this.token = cache.get('account.token');
    return this;
  },

  set(client, hotels, overview, token) {
    cache.set('account.client', client, this.lifetime);
    cache.set('account.hotels', hotels, this.lifetime);
    cache.set('account.overview', overview, this.lifetime);
    cache.set('account.token', token, this.lifetime);
    return this.load();
  },

  clear() {
    cache.del('account.client');
    cache.del('account.hotels');
    cache.del('account.token');
    cache.del('account.overview');
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
        api.get('/RepUpEngine/getClientProperties.repup', {qs: {clientId}}),
        api.get(`/repup_dashboard_api/dashboard/hotelgroups/${clientId}`)
      ]);
    }).then(([client, hotels, overview]) => {
      session.set(client, hotels, overview, null);
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
