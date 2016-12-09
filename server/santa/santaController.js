var santaModel = require('./santaModel');

module.exports = {
  createRoom: function(req, res) {
    console.log('THIS IS REQ.BODY IN SANTACONTROLLER DB: ',req.body);
    var params = req.body.data;
    santaModel.createRoom(params, () => {
      res.sendStatus(201);
    });
  }
}
