const userModel = require('./userModel');
const jwt = require('jwt-simple');

// const bcrypt = require('bcrypt-nodejs');

module.exports = {
  users: {
    signin({ body: { username } }, res) {
      userModel.users.getPassword(username, (results) => {
        if (results.length === 0) {
          console.log('ERROR no password found');
        } else {
          const token = jwt.encode(username, 'secret');
          res.json({ token });
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
