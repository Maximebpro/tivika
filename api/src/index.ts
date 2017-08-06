// require('ts-node/register');

import * as express from "express";
import * as pg from "pg";
import { TmdbApi } from "./tmdb-api";
import { pgConfig } from "./db/config";

let api = express();

api.set('port', (process.env.PORT || 5000));
api.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  next();
});

api.get('/', function (req, res) {
  TmdbApi.request('/discover/movie?primary_release_date.gte=2016-09-15').then((data) => {
    res.send(data);
  });
});

api.get('/movie/:id', function (req, res) {
  TmdbApi.request('/movie/' + req.params.id).then((data) => {
    res.send(data);
  });
});

api.get('/initdb', function (req, res) {
  let pgClient = new pg.Client(pgConfig);
  pgClient.connect(function (err) {
    if (err) throw err;
    pgClient.query('CREATE TABLE IF NOT EXISTS ratings (id integer, rate integer)', function (err, result) {
      if (err) throw err;
      console.log(result.rows[0]);
      pgClient.end(function (err) {
        if (err) throw err;
      });
    });
  });
});

api.get('/ratings', function (req, res) {
  let pgClient = new pg.Client(pgConfig);
  pgClient.connect(function (err) {
    if (err) throw err;
    pgClient.query('SELECT * FROM ratings', function (err, result) {
      if (err) throw err;
      let ratings = {};
      result.rows.forEach(row => {
        ratings[row.id] = row.rate;
      });
      res.json(ratings);
      pgClient.end(function (err) {
        if (err) throw err;
      });
    });
  });
});

api.get('/postratings', function (req, res) {
  let pgClient = new pg.Client(pgConfig);
  pgClient.connect(function (err) {
    if (err) throw err;
    pgClient.query('INSERT INTO ratings VALUES(263115, 2)', function (err, result) {
      if (err) throw err;
      console.log(result.rows[0]);
      pgClient.end(function (err) {
        if (err) throw err;
      });
    });
  });
});

api.listen(api.get('port'), function () {
  console.log('Node app is running on port', api.get('port'));
});