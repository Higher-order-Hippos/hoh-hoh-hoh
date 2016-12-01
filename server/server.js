var express = require('express');

var app = express();

require('./routing.js')(app, express);

var port = process.env.PORT || 5000;

app.listen(port);

module.exports = app;
