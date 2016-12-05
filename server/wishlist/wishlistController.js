const wishlistModel = require('./wishlistModel');

module.exports = {
  wishlists: {
    get(req, res) {
      wishlistModel.wishlists.getAll((results) => {
        res.json(results);
      });
    },

    post({ body }, res) {
      const params = body.name;
      wishlistModel.wishlists.addOne(params, () => {
        res.sendStatus(201);
      });
    },

    rename({ body }, res) {
      const params = [body.newName, body.list];
      wishlistModel.wishlists.renameList(params, () => {
        res.sendStatus(201);
      });
    },

    delete({ body }, res) {
      const params = body.wishlistId;
      wishlistModel.wishlists.deleteList(params, () => {
        res.sendStatus(201);
      });
    },
  },
};
