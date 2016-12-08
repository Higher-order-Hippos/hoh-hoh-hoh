const itemModel = require('./itemModel');

module.exports = {
  items: {
    get({ body: { id } }, res) {      //request in object format, plucked out userId from req.body, passing down as params
      const params = id;
      itemModel.items.getAll(params, (results) => {
        res.json(results);            //send back item results in json format
      });
    },

    post({ body: { name, id } }, res) {   //request in object format, plucked out itemname and userId from req.body, passing down as params
      const params = [name, id];
      itemModel.items.addOne(params, () => {
        res.sendStatus(201);
      });
    },

    rename({ body: { name, item } }, res) {  //request in object format, plucked out itemname and userId from req.body, passing down as params
      const params = [name, item];
      itemModel.items.renameItem(params, () => {
        res.sendStatus(201);
      });
    },

    delete({ body: { itemId } }, res) {   //request in object format, plucked out itemId from req.body object, passing down as params
      const params = itemId;
      itemModel.items.deleteItem(params, () => {
        res.sendStatus(201);
      });
    },
  },
};
