const wishlistModel = require('./wishlistModel');

module.exports = {
  wishlists: {
    get(req, res) {
      wishlistModel.wishlists.getAll((results) => {
        res.json(results);
      });
    },

    getByUser({ user: { id } }, res) {
      if (id) {
        const params = id;
        wishlistModel.wishlists.getByUser(params, (results) => {
          res.json(results);
        });
      } else {
        res.sendStatus(401);
      }
    },

    post({ body: { name }, user: { id } }, res) {
      const params = [name, id];
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
