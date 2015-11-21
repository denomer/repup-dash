import api from 'app/util/api';
import cache from 'app/util/cache';
import auth from './auth';

const account = {
  data: null,

  _cacheLifetime: 24 * 3600 * 1000, // 1 day

  set({client, hotels, ratings}) {
    this.data = {client, hotels, ratings};
    cache.set('account.data', this.data);
    return this;
  },

  get() {
    if (this.data === null) {
      return this.load();
    } else {
      return Promise.resolve(this.data);
    }
  },

  load() {
    const data = cache.get('account.data');

    if (data !== null) {
      return Promise.resolve(this.set(data));
    } else {
      const clientId = auth.session.clientId;

      return Promise.all([
        api.get('/RepUpEngine/getClientDetails.repup', {qs: {clientId}}),
        api.get('/RepUpEngine/getClientProperties.repup', {qs: {clientId}}),
        api.get(`/repup_dashboard_api/dashboard/hotelgroups/${clientId}`)
      ]).then(([client, hotels, ratings]) => {
        this.set({client, hotels, ratings});
        return this.data;
      });
    }
  },

  clear() {
    this.data = null;
    cache.del('account.data');
    return this;
  }
};

auth.onLogout(() => account.clear());

export default account;
