const wishlistModel = require('./wishlistModel');

module.exports = {
  wishlists: {
    get(req, res) {
      wishlistModel.wishlists.getAll((results) => {
        res.json(results);
      });
    },

    post({ body: { name } }, res) {
      const params = name;
      wishlistModel.wishlists.addOne(params, () => {
        res.sendStatus(201);
      });
    },

    rename({ body: { newName, wishlistId } }, res) {
      const params = [newName, wishlistId];
      wishlistModel.wishlists.renameList(params, () => {
        res.sendStatus(201);
      });
    },

    delete({ body: { wishlistId } }, res) {
      const params = wishlistId;
      wishlistModel.wishlists.deleteList(params, () => {
        res.sendStatus(201);
      });
    },
  },
};
