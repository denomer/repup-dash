import {pluck} from 'lodash';

import api from 'app/util/api';
import cache from 'app/util/cache';
import auth from './auth';

const hotels = {
  _hash: new Map(),

  _cacheLifetime: 24 * 3600 * 1000, // 1 day

  _isHotelIdValid(id) {
    return pluck(auth.session.hotels, 'hotelId').indexOf(id) > -1;
  },

  get(id) {
    if (this._hash.has(id)) {
      return Promise.resolve(this._hash.get(id));
    } else if (this._isHotelIdValid(id)) {
      return this.load(id).then(() => this.get(id));
    } else {
      return Promise.reject({msg: `invalid id: ${id}`});
    }
  },

  load(id, months=7) {
    if (this._isHotelIdValid(id)) {
      const overview = cache.get(`${id}.overview`);
      const reviewStats = cache.get(`${id}.reviewStats`, []);

      const promises = [];

      if (overview === null) {
        promises.push(
          api.get(`/repup_dashboard_api/dashboard/hotels/${id}`)
            .then((overview) => {
              cache.set(`${id}.overview`, overview, this._cacheLifetime);
              return overview;
            })
        );
      } else {
        promises.push(Promise.resolve(overview));
      }

      if (reviewStats.length < months) {
        promises.push(
          api.get(`/repup_dashboard_api/dashboard/hotels/${id}/review/stats/${months}`)
            .then((reviewStats) => {
              cache.set(`${id}.reviewStats`, reviewStats, this._cacheLifetime);
              return reviewStats;
            })
        );
      } else {
        promises.push(Promise.resolve(reviewStats));
      }

      return Promise.all(promises).then(([overview, reviewStats]) => {
        this._hash.set(id, {overview, reviewStats});
        return this._hash.get(id);
      });
    } else {
      return Promise.reject({msg: `invalid id: ${id}`});
    }
  },

  clear() {
    Array.from(this._hash.keys()).forEach((id) => {
      cache.del(`${id}.overview`);
      cache.del(`${id}.reviewStats`);
      this._hash.delete(id);
    });

    return this;
  },

  getAll() {
    return this.getIds(pluck(auth.session.hotels, 'hotelId'));
  },

  getIds(ids) {
    const result = {};

    return ids.map((id) => {
      return this.get(id).then((hotelData) => {
        result[id] = hotelData;
        return hotelData;
      });
    }).then(() => result);
  },

  loadAll(months=7) {
    return this.loadIds(pluck(auth.session.hotels, 'hotelId'), months);
  },

  loadIds(ids, months=7) {
    const result = {};

    return ids.map((id) => {
      return this.load(id, months).then((hotelData) => {
        result[id] = hotelData;
        return hotelData;
      });
    }).then(() => result);
  }
};

export default hotels;
