const jwt = require('jwt-simple');

module.exports = {
  errorLogger(error, req, res, next) {
    // log the error then send it to the next middleware in
    console.error(error.stack);
    next(error);
  },

  errorHandler(error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    res.status(500).send({ error: error.message });
  },

  decode(req, res, next) {
    const token = req.headers['x-access-token'];
    let user;

    if (!token) {
      return res.send(403); // send forbidden if a token is not provided
    }

    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, 'secret');
      req.user = user;
      next();
    } catch (error) {
      return next(error);
    }
  },
};
