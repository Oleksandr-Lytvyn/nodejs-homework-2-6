const jwt = require('jsonwebtoken');
const { HttpError } = require('../helpers');
const { User } = require('../models/user');

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    next(HttpError(401, 'Yeblup! not Bearer'));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = User.findById(id);
    if (!user) {
      next(HttpError(401, 'Yeblup! no user'));
    }
    next();
  } catch {
    next(HttpError(401, 'Yeblup! not valide token'));
  }
};

module.exports = authenticate;
