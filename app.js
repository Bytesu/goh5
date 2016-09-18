'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var lactate = require('lactate');
var mongoose = require('mongoose');
var pwd = __dirname;
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var config = require('./libs/config');
var log = require('./libs/log');

var app = express();
var router = express.Router();
var port = config.port;

var routers = require('./api/apis/index.js');

global.userPath = './datas';
global.dbHandel = require('./api/db/dbHandel.js');
global.db = mongoose.connect(config.mongodb);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session(config.session));
app.use(log.log);
// app.use('/', express.static(pwd + 'static'));
var statics ={'img':'/datas/img/','video':'/datas/video/','audio':'/datas/audio/','back':'/h5editor/','front':'/views/'};
for(var pro in statics){
    app.use('/'+pro, express.static(pwd + statics[pro]));
}

/**
 * backend entry
 */
app.get('/', function(req, res, next) {
    if (!req.session.isLogin) {
        res.clearCookie('isLogin');
        res.clearCookie('user_name');
    }
    res.sendFile(pwd + '/h5editor/index.html',{});
});

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

routers.forEach(function(Router) {
    app.use('/api', Router);
});

app.listen(port);
console.log('server is listening on port:'+port);

module.exports = app;
