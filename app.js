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
var moment = require('moment');
var FileStreamRotator = require('file-stream-rotator');

var app = express();
var router = express.Router();
var port = 3030;

var routers = require('./api/apis/index.js');

global.userPath = './User';
global.dbHandel = require('./api/db/dbHandel.js');
global.db = mongoose.connect("mongodb://localhost:27017/goh5");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'who am i ?',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    saveUninitialized: true,
    resave: true
}));

var logDirectory = path.join(__dirname, 'logs')

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
});

app.use(morgan('combined',{stream:accessLogStream}));

// 用户上传的图片
app.use('/img', express.static(pwd + '/User/UploadImg/'));
// 用户上传的音乐
app.use('/audio', express.static(pwd + '/User/UploadMusic/'));
// 后台静态资源
app.use('/back', express.static(pwd + '/h5editor/'));
// 前台静态资源
app.use('/front', express.static(pwd + '/views/'));


// 后台页面
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
