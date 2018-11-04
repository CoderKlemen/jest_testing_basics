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
};

module.exports = functions;
