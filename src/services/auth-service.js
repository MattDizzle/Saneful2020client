
const AuthApiService = {
  postUser(user) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  postLogin({ user_email, user_password }) {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/auth`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_email, user_password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(err => Promise.reject(err))
          : res.json()
      );
  },
};

export default AuthApiService;
