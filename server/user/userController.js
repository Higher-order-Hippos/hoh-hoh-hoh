const userModel = require('./userModel');
const jwt = require('jwt-simple');


module.exports = {
  users: {
    signin: function (req, res, next) {
      var username = req.body.username;
      userModel.users.getPassword(username, (results) => {
        console.log('USER CONTROLLER SIGNIN RESULTS : ', results);
        res.json(results);
      })
    },

    signup: function (req, res, next) {
      const params = [req.body.username, req.body.password];

      userModel.users.addOne(params, (user) => {
        console.log('USER CONTROLLER SIGNUP RESULTS : ', user);
      })
    }
  }
};
