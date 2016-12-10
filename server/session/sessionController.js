const sessionModel = require('./sessionModel');
const jwt = require('jwt-simple');

module.exports = {
  sessions: {
    getUser({ headers: { 'x-access-token': token } }, res, next) {
      sessionModel.getSessionUser(token, (results) => {
        if (results.length === 1) {
          res.json(results[0]);
        } else {
          res.sendStatus(401);
        }
      });
    },
  }
};
