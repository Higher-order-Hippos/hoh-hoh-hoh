var santaModel = require('./santaModel');

module.exports = {
  createRoom: function(req, res) {
    var id = req.params.id;
    // var id = req.user.id;
    console.log('THIS IS REQ.PARAMS: ', req.params);
    console.log('THIS IS REQ.BODY IN SANTACONTROLLER DB: ', req.body);
    var params = req.body.data;
    santaModel.createRoom(params, () => {
      res.sendStatus(201);
    });
  }
}
