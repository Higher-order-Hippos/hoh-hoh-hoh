const itemModel = require('./itemModel');

module.exports = {
  items: {
    get({ body: { id } }, res) {
      const params = id;
      itemModel.items.getAll(params, (results) => {
        res.json(results);
      });
    },

    post({ body: { name, id } }, res) {
      const params = [name, id];
      itemModel.items.addOne(params, () => {
        res.sendStatus(201);
      });
    },

    rename({ body: { name, item } }, res) {
      const params = [name, item];
      itemModel.items.renameItem(params, () => {
        res.sendStatus(201);
      });
    },

    delete({ body: { itemId } }, res) {
      const params = itemId;
      itemModel.items.deleteItem(params, () => {
        res.sendStatus(201);
      });
    },
  },
};
