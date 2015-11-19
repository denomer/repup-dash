const cache = {
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));

    if (this._parsed.has(key)) {
      this._parsed.delete(key);
    }

    return cache;
  },

  get(key, defaultVal=null) {
    if (this._parsed.has(key)) {
      return this._parsed.get(key);
    } else {
      const val = JSON.parse(localStorage.getItem(key));
      if (val !== null) {
        this._parsed.set(key, val);
        return this.get(key);
      } else {
        return defaultVal;
      }
    }
  },

  del(key) {
    localStorage.removeItem(key);
    return this;
  }
};

cache._parsed = new Map();

export default cache;
