// import axios from 'axios';
const axios = require('axios');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isUndefined: () => undefined,
  isTruthy: () => 1,
  isFalsy: () => 0,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Jst' };
    user.lastName = 'Polencek';
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => `error: ${err}`),
};

module.exports = functions;
