const crypt = require('bcrypt');
const User = require('../../models/userModel');
const TokenService = require('./TokenService');

const isValidUser = async ({username, password: textPassword}) => {
  try {
    const user = await User.findOneByUser(username);
    console.log(user);
    const pass = await crypt.compare(textPassword, user.password);

    return pass
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  authenticate: (req, res, next) => {
    console.log(req.body)
    if (!isValidUser(req.body)) {
      return next({});
    }
    TokenService.makeToken({
      username: req.body.name,
      roles: ['admin'],
    })
    .then(token => {
      res.locals.token = token;
      res.locals.user = req.body.username;
      console.log(res.locals.user)
      next();
    })
    .catch(next);
    return false;
  },
  allow({roles}) {
    return [
      (req, res, next) => {
        TokenService.verify(req.authToken)
        .then((payload) => {
          const isAuthorized = roles.some (n => payload.roles.insludes(n));
          return isAuthorized ? next() : Promise.reject('Not Authorized');
        })
        .catch(next);
      },
      (err, req, res, next) => res.status(403).json({})
    ];
  }

};
