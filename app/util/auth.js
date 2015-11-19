import fetch from 'whatwg-fetch';

const auth = {
  login({username, password}) {
    username = window.encodeUriComponent(username);
    password = window.encodeUriComponent(password);

    return fetch(
      `http://manage.repup.me/RepUp/authenticateRepupClient.repup?loginId=${username}&password=${password}`,
      {method: 'post'}
    ).then((response) => {
      
    });
  }
};

export const session = {

};

export default auth;