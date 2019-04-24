import decode from 'jwt-decode';

const TOKEN_NAME = 'idToken';
const SERVER_URL = 'http://localhost:4000';

export function login (email: string, password: string) {
  // Get a token from api server using the fetch api
  return authFetch(`${SERVER_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => {
    setToken(res.token); // Setting the token in localStorage
    return Promise.resolve(res);
  });
}

export function isLoggedIn () {
  const token = getToken();
  return !!token && !isTokenExpired(token);
}

export function isTokenExpired (token: string) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    console.warn('Something wrong with th JWT token');
    return false;
  }
}

export function setToken (token: string) {
  localStorage.setItem(TOKEN_NAME, token);
}

export function getToken () {
  return localStorage.getItem(TOKEN_NAME);
}

export function logout () {
  localStorage.removeItem(TOKEN_NAME);
}

export function getCredentials () {
  let answer = decode(getToken());
  console.log('Recieved answer!');
  return answer;
}

export function authFetch (url: string, options: object = {}) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (isLoggedIn()) {
    headers['Authorization'] = 'Bearer ' + getToken();
  }

  return fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...(options['headers'] || {})
    }
  })
    .then(checkStatus)
    .then(response => response.json());
}

function checkStatus (response) {
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response;
  } else {
    let error = new Error(response.statusText);
    error['response'] = response;
    throw error;
  }
}
