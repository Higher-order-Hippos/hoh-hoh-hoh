const userModel = require('./userModel');

module.exports = {
  users: {
    findOne(req, res) {
      userModel.user.findOne((results) => {
        res.json(results);
      });
    },

    signup({ body: { name } }, res) {
      const params = name;
      userModel.user.addOne(params, () => {
        res.sendStatus(201);
      });
    }
  }
};
