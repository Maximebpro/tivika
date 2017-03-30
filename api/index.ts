// require('ts-node/register');

import * as express from "express";
import { TmdbApi } from "./tmdb-api";



let api = express();

api.set('port', (process.env.PORT || 5000));
api.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

api.get('/', function (req, res) {
  TmdbApi.request('/discover/movie?primary_release_date.gte=2016-09-15').then((data) => {
    res.send(data);
  });
});

api.get('/movie/:id', function (req, res) {
  console.log(req.params.id);
  TmdbApi.request('/movie/' + req.params.id).then((data) => {
    res.send(data);
  });
});

api.listen(api.get('port'), function () {
  console.log('Node app is running on port', api.get('port'));
});