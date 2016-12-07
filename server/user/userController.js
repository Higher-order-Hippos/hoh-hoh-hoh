const userModel = require('./userModel');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');


module.exports = {
  users: {
    signin({ body: { username, password } }, res) {
      userModel.users.getPassword(username, (results) => {
        if (results.length === 0) {
          console.log('ERROR no password found');
          res.sendStatus(401);
        } else {
          bcrypt.compare(password, results[0].password, ((err, response) => {
            if(!response){
              console.log("Password did not match in compare")
              res.sendStatus(401);
            } else {
              const token = jwt.encode(username, 'secret');
              res.json({ token });
            }
          }))
        }
      });
    },

    signup({ body: { username, password } }, res, next) {
      bcrypt.hash(password, null, null, ((err, hash) => {
        const params = [username, hash];
        userModel.users.addOne(params, (user) => {
          console.log('USER CONTROLLER SIGNUP RESULTS : ', user);
          res.sendStatus(201);
        });
      }));
    },
  },
};
