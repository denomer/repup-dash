import request from 'browser-request';
import {isUndefined, merge} from 'lodash';

const apiBase = 'http://manage.repup.me';

function api(method, url, options) {
  // instantiate options as an empty object literal
  options = isUndefined(options) ? {} : options;

  // do something with it when needed
  const token = options.token;

  merge(
    options,
    {
      // set the http request method
      method,
      // if the url starts with 'http', leave it be, otherwise
      // prefix api_base to the url
      uri: url.indexOf('http') === 0 ? url : apiBase + url,
      // if the url starts with http, leave headers be
      // other wise attach token (when we get auth)
      headers: url.indexOf('http') === 0 ? {} : {},
      json: options.json ? options.json : true
    }
  );
  // send json data under the key 'json' as object literal

  // send query parameters under the key 'qs' as object literal

  // send application/x-www-form-urlencoded data under the key 'form' as object literal

  // send multipart/form-data under the key 'formData' as a formData object

  const requestId = {};

  api.activeRequests.add(requestId);

  const p = new Promise((resolve, reject) => {
    request(options, (err, res, body) => {
      if (err) {
        throw err;
      } else if (res.statusCode === 200 || res.statusCode === 302) {
        // resolve body just like that
        resolve(res.body);
      } else {
        console.log(url, body, options);
        reject(res);
      }
    });
  });

  p.finally((data) => {
    api.activeRequests.delete(requestId);
    return data;
  });

  return p;
}

api.activeRequests = new Set();

// attach shorthands for get, put, post, delete to api
['GET', 'PUT', 'POST', 'DELETE'].forEach((m) => {
  api[m.toLowerCase()] = (url, options) => {
    return api(m, url, options);
  };
});

export default api;
