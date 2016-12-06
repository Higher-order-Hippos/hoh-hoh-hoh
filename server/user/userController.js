const userModel = require('./userModel');
const jwt = require('jwt-simple');


module.exports = {
  users: {
    signin({ body: { username } }, res, next) {
      userModel.users.getPassword(username, (results) => {
        if (results.length === 0) {
          console.log('ERROR no password found');
        } else {
          console.log('USER CONTROLLER SIGNIN RESULTS : ', results);
          const token = jwt.encode(username, 'secret');
          res.send({ token });
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
