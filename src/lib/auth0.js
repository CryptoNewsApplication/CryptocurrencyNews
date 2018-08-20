import Auth0 from 'react-native-auth0';

const AUTH0_DOMAIN = 'cryptonews.eu.auth0.com';
const CLIENT_ID = 'llXKjRjDd_qnH0yd6uuxy_2QOHKLgOct';

const auth0 = new Auth0({
  domain: `${AUTH0_DOMAIN}`,
  clientId: `${CLIENT_ID}` 
});

export {
  auth0,
  AUTH0_DOMAIN,
  CLIENT_ID
};
