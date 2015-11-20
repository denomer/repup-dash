import api from 'app/util/api';
import cache from 'app/util/cache';

export const session = {
  clientId: null,

  _cacheLifetime: 5 * 24 * 3600 * 1000, // 5 days in ms

  load() {
    this.clientId = cache.get('session.clientId');
    return this;
  },

  set({clientId}) {
    cache.set('session.clientId', clientId, this._cacheLifetime);
    return this.load();
  },

  clear() {
    cache.del('session.clientId');
    return this.load();
  }
};

export const auth = {
  session,

  loadCallbacks: new Set(),
  loginCallbacks: new Set(), // callbacks to run on login
  logoutCallbacks: new Set(), // callbacks to run on logout

  load() {
    auth.session.load();
    Promise.all(this.loadCallbacks);
  },

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
      session.set({clientId});
      return {clientId};
    }).then(({clientId}) => {
      Promise.all(this.loginCallbacks);
      return {clientId};
    });
  },

  logout() {
    return Promise.all(this.logoutCallbacks).then(() => {
      return session.clear();
    });
  },

  isLoggedIn() {
    return Promise.resolve(session.clientId !== null);
  },

  onLoad(callback) {
    this.loadCallbacks.add(callback);
    return this;
  },

  onLogin(callback) {
    this.loginCallbacks.add(callback);
    return this;
  },

  onLogout(callback) {
    this.logoutCallbacks.add(callback);
    return this;
  }
};

export default auth;
