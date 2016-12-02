var path = require('path');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    filename: //TODO)
  },

});
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('wishlists').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('wislists', function (link) {
      link.increments('id').primary();
      link.string('url', 255);
      link.string('baseUrl', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 100).unique();
      user.string('password', 100);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
