import {isNumber, isArray, cloneDeep} from 'lodash';

const cache = {
  set(key, val, lifetime) {
    if (this._parsed.has(key)) {
      this._parsed.delete(key);
    }

    const cacheObj = {
      val,
      lifetime: isNumber(lifetime) ? lifetime : -1,
      timestamp: new Date().getTime()
    };

    localStorage.setItem(key, JSON.stringify(cacheObj));

    return cache;
  },

  get(key, defaultVal=null) {
    if (this._parsed.has(key)) {
      return cloneDeep(this._parsed.get(key));
    } else {
      const cacheObj = JSON.parse(localStorage.getItem(key));

      if (! cacheObj) {
        return defaultVal;
      }

      const {val, lifetime, timestamp} = cacheObj;

      if (lifetime !== -1 && (new Date().getTime() - timestamp) > cacheObj.lifetime) {
        cache.del(key);
        return defaultVal;
      } else {
        this._parsed.set(key, val);
        return cloneDeep(val);
      }
    }
  },

  del(key) {
    if (this._parsed.has(key)) {
      this._parsed.delete(key);
    }

    localStorage.removeItem(key);
    return this;
  }
};

cache._parsed = new Map();

export default cache;
