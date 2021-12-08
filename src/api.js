export const API_URL = 'https://localhost:3000';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + '/clientes',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}