var path = require('path');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'mysqlcluster2.registeredsite.com',
    user: 'hohohadmin',
    password: '!Qaz2wsx3edc',
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
      wishlist.integer('userId');
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

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100);
      user.string('password', 100);
      user.string('name', 150);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
