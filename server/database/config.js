var path = require('path');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'hohohadmin',
    password: '!Qaz2wsx3edc',
    IP: 'mysqlcluster2.registeredsite.com',
    database: 'hohohoh'
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('wishlists').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('wishlists', function (wishlist) {
      wishlist.increments('id').primary();
      wishlist.string('name', 255);
      wishlist.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('items', function (item) {
      item.increments('id').primary();
      item.string('name', 255);
      item.integer('wishlistId');
      item.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
