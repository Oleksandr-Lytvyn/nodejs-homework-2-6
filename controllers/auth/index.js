const { ctrlWrapper } = require('../../helpers');
const register = require('./register');
const logout = require('./logout');
const login = require('./login');
const getCurrent = require('./getCurrent');
const updateAva = require('./updateAva');
const verifyEmail = require('./verifyEmail');
const resendVerifyEmail = require('./resendVerifyEmail');

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAva: ctrlWrapper(updateAva),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};
