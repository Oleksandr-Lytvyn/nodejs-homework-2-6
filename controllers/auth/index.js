const { ctrlWrapper } = require('../../helpers');
const register = require('./register');
const logout = require('./logout');
const login = require('./login');
const getCurrent = require('./getCurrent');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};
