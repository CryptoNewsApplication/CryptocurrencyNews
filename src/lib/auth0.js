import Auth0 from 'react-native-auth0';

const AUTH0_DOMAIN = 'cryptonews.eu.auth0.com';
const CLIENT_ID = 'MdGNvzKmy9fpDX6CJww3P2JVD5Ef22th';

const auth0 = new Auth0({
  domain: `${AUTH0_DOMAIN}`,
  clientId: `${CLIENT_ID}` 
});

export {
  auth0,
  AUTH0_DOMAIN,
  CLIENT_ID
};
