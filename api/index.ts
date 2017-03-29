// require('ts-node/register');

import * as http from "http";
import { } from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

let api = express();

api.set('port', (process.env.PORT || 5000));
// api.set('port', 5000);

api.get('/', function (request, response) {
  response.json('Hello');
});

api.listen(api.get('port'), function () {
  console.log('Node app is running on port', api.get('port'));
});