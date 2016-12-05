const itemModel = require('./itemModel');

module.exports = {
  items: {
    get({ body }, res) {
      const params = body.id;
      itemModel.items.getAll(params, (results) => {
        res.json(results);
      });
    },

    post({ body }, res) {
      const params = [body.name, body.id];
      itemModel.items.addOne(params, () => {
        res.sendStatus(201);
      });
    },

    rename({ body }, res) {
      const params = [body.name, body.item];
      itemModel.items.renameItem(params, () => {
        res.sendStatus(201);
      });
    },

    delete({ body }, res) {
      const params = body.itemId;
      itemModel.items.deleteItem(params, () => {
        res.sendStatus(201);
      });
    },
  },
};
