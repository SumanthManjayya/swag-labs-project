const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
};

const loginErrors = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',
  invalidCredentials:
    'Epic sadface: Username and password do not match any user in this service',
};

module.exports = { users, loginErrors };
