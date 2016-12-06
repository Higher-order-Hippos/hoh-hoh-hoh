const userModel = require('./userModel');
const jwt = require('jwt-simple');

module.exports = {
  users: {
    signin({ body: { username } }, res) {
      userModel.users.getPassword(username, (results) => {
        if (results.length === 0) {
          console.log('ERROR no password found');
        } else {
          res.json(results);
        }
      });
    },

    signup({ body: { username, password } }, res, next) {
      const params = [username, password];
      userModel.users.addOne(params, (user) => {
        console.log('USER CONTROLLER SIGNUP RESULTS : ', user);
      });
    },
  },
};
