const userModel = require('./userModel');
const Q = require('q');
const jwt = require('jwt-simple');


module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;

    userModel.user.getPassword(username, (password) => {
      if(!password){
        res.sendStatus(404);
      } else {
        res.JSON(password);
      }
    })
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var params = [username, password];

    userModel.user.findOne(username, (user) => {
      if(!user){
        next(new Error('User does not exist'));
      } else {
        userModel.user.addOne(params, (added) => {

        })
      }
    })
  }

};
