var wishlistModel = require('./wishlistModel.js');

module.exports = {

  wishlists: {
    get(req, res) {
      wishlistModel.wishlists.getAll((results) => {
        res.json(results);
      });
    },

    post(req, res) {
      const params = req.body.name;
      wishlistModel.wishlists.addOne(params, () => {
        res.sendStatus(201);
      });
    },

    rename(req, res) {
      const params = [req.body.newName, req.body.list];
      wishlistModel.wishlists.renameList(params, () => {
        res.sendStatus(201);
      })
    },

    delete(req, res) {
      const params = req.body.wishlistId;
      wishlistModel.wishlists.deleteList(params, () => {
        res.sendStatus(201);
      })
    }
  }

}
