import express from 'express';
import Route from './Route';

var app = express();

var server = app.listen(3300, function () {
  console.log('Server start at port 3300 .... ');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var route = new Route(app);

route.getRoute();

