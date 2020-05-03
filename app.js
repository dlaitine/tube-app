'use strict'

var express = require('express');
var http = require('http');
var app = express();

var port = process.env.PORT || '5000';
var key = process.env.YOUTUBE_API_KEY;

var YTVideoSearch = require('./api/YTVideoSearch');

app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))

app.get('/api', function(req, res, next) {
  if(!req.query.search) {
    return res.status(400).send("Missing search parameter");
  }

  YTVideoSearch(key, req.query.search)
  .then((response) => {
    return res.status(200).send(response);
  })
  .catch((error) => {
    console.log(error);
    if (error.status) {
      return res.status(error.status).send();
    } else {
      return res.status(500).send();
    }
  })
});

var server = http.createServer(app);
server.listen(port);