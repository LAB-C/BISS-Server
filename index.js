const express    = require('express')
const app        = express()
const path       = require('path')
const bodyParser = require('body-parser')
const connection = require('./db')

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type'); //1
  next();
});
app.get('/', function (req, res) {
    res.send('BISS API 서버 입니다.');
});
// API
app.use('/api/iot', require('./api/iot'));   //2
// Server
const port = 3221;
app.listen(port, function(){
  console.log('listening on port:' + port);
});
