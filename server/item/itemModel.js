var db = require('../database/config');

module.exports = {
  items: {
    getAll: function(callback) {
      var queryStr = 'select * from FILL_ME_IN'; // TODO whatever the table name is
      db.query(queryStr, function(err, results){
        callback(err, results);
      });
    },

    addOne: function(params, callback) {
      var queryStr = 'insert into FILL_ME_IN (FILL_ME_IN) value (?)'; // TODO
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    },

    deleteOne: function(params, callback) {

    }
  }

}
