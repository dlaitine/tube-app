'use strict'

var express = require('express');
var http = require('http');
var app = express();
var axios = require('axios');

var port = process.env.PORT || '5000';
var key = process.env.YOUTUBE_API_KEY;
app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))

app.get('/api', function(req, res, next) {
  if(!req.query.search) {
    const err = new Error('Required query params missing');
    err.status = 400;
    next(err);
  }

  axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      key: key,
      q: req.query.search,
      type: 'video',
      maxResults: 5
    }
  })
  .then(function (response) {
    return res.status(200).send(response.data);
  })
  .catch(function (error) {
    const err = new Error('Request failed');
    err.status = 500;
    next(err);
  })
});

var server = http.createServer(app);
server.listen(port);